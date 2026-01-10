import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUTPUT = path.join(ROOT, "lib/search/lines.generated.json");

/* Walk filesystem */
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (/\.(ts|tsx|mdx)$/.test(e.name)) acc.push(full);
  }
  return acc;
}

/* Remove comments/imports/exports (keep content) */
function stripNoise(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")  // block comments
    .replace(/\/\/.*$/gm, "")          // line comments
    .replace(/^import[\s\S]*?;$/gm, "")
    .replace(/^export[\s\S]*?;$/gm, "");
}

/* Extract title (robust) */
function extractTitle(src) {
  const m = src.match(/title\s*:\s*["'`](.+?)["'`]/i);
  return m ? m[1] : null;
}

/* Extract visible-ish text from JSX */
function extractJsxText(src) {
  return src
    .replace(/<[^>]+>/g, "\n")       // tags -> newlines
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\r/g, "");
}

/* Extract string literals (catches accordion content stored in arrays/objects) */
function extractStringLiterals(src) {
  const out = [];
  const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const s = m[2];
    if (!s) continue;
    out.push(
      s.replace(/\s+/g, " ").replace(/[“”]/g, '"').replace(/[‘’]/g, "'").trim()
    );
  }
  return out;
}

/* Heuristic: drop obvious className / utility strings */
function isProbablyUtilityString(s) {
  const t = s.trim();
  if (t.length < 4) return true;

  // common non-content fields
  if (t.startsWith("/") || t.includes("page.tsx")) return true;

  // looks like Tailwind / utility soup (lots of hyphens/colons, few letters in sentences)
  const letters = (t.match(/[a-zA-Z]/g) || []).length;
  const spaces = (t.match(/\s/g) || []).length;
  const symbols = (t.match(/[-:_/[\]]/g) || []).length;

  // utility strings tend to be space-separated tokens with many symbols and no sentence punctuation
  const hasSentencePunct = /[.!?]/.test(t);

  if (!hasSentencePunct && symbols >= 6 && spaces >= 2 && letters / t.length < 0.6) {
    return true;
  }

  return false;
}

const files = walk(APP_DIR);
const linesIndex = {};

for (const file of files) {
  const dir = path.dirname(file);
  const slug = "/" + path.relative(APP_DIR, dir).replace(/\\/g, "/");

  if (!slug.startsWith("/questions/")) continue;

  const raw = fs.readFileSync(file, "utf8");
  const title = extractTitle(raw);
  if (!title) continue;

  const cleaned = stripNoise(raw);

  // 1) JSX-derived text
  const jsxText = extractJsxText(cleaned);

  // 2) string literals (accordion content, etc.)
  const literals = extractStringLiterals(cleaned);

  const linesFromJsx = jsxText
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.length > 2);

  const allLines = [...linesFromJsx, ...literals]
    .map(l => l.replace(/\s+/g, " ").trim())
    .filter(l => l.length > 2)
    .filter(l => !isProbablyUtilityString(l));

  // de-dupe
  const unique = Array.from(new Set(allLines));

  if (!unique.length) continue;

  // store lowercased lines for consistent search
const titleLine = title.toLowerCase();

linesIndex[slug] = {
  title,
  lines: Array.from(
    new Set([
      titleLine,
      ...unique.map(s => s.toLowerCase()),
    ])
  ),
};
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(linesIndex, null, 2));

console.log("Search index generated:", Object.keys(linesIndex).length, "questions");
