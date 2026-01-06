import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_INDEX = path.join(ROOT, "lib/search/index.generated.json");
const OUT_LINES = path.join(ROOT, "lib/search/lines.generated.json");

/* ---------------------------------- */
/* Walk filesystem                    */
/* ---------------------------------- */
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (/\.(ts|tsx|mdx)$/.test(e.name)) acc.push(full);
  }
  return acc;
}

/* ---------------------------------- */
/* Extract visible text only          */
/* ---------------------------------- */
function extractVisibleText(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")   // block comments
    .replace(/\/\/.*$/gm, "")           // line comments
    .replace(/^import[\s\S]*?;$/gm, "")
    .replace(/^export[\s\S]*?;$/gm, "")
    .replace(/<[^>]+>/g, "\n")          // JSX → text
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .toLowerCase();
}

/* ---------------------------------- */
/* Extract page title (H1 source)     */
/* ---------------------------------- */
function extractTitle(src) {
  const meta = src.match(/metadata\s*=\s*{[\s\S]*?title\s*:\s*["'`](.*?)["'`]/m);
  if (meta) return meta[1];
  const fallback = src.match(/title\s*:\s*["'`](.*?)["'`]/);
  return fallback ? fallback[1] : null;
}

/* ---------------------------------- */
/* Build indexes                      */
/* ---------------------------------- */
const files = walk(APP_DIR);
const wordIndex = {};
const linesIndex = {};

for (const file of files) {
  const dir = path.dirname(file);
  const slug = "/" + path.relative(APP_DIR, dir).replace(/\\/g, "/");

  if (!slug.startsWith("/questions/")) continue;

  const raw = fs.readFileSync(file, "utf8");
  const title = extractTitle(raw);
  if (!title) continue;

  const text = extractVisibleText(raw);

  const lines = text
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.length > 3);

  if (!lines.length) continue;

  linesIndex[slug] = { title, lines };

  const tokens = text
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 1);

  for (const token of new Set(tokens)) {
    if (!wordIndex[token]) wordIndex[token] = [];
    if (!wordIndex[token].includes(slug)) wordIndex[token].push(slug);
  }
}

fs.mkdirSync(path.dirname(OUT_INDEX), { recursive: true });
fs.writeFileSync(OUT_INDEX, JSON.stringify(wordIndex, null, 2));
fs.writeFileSync(OUT_LINES, JSON.stringify(linesIndex, null, 2));

console.log(
  "Search index generated:",
  Object.keys(wordIndex).length,
  "tokens |",
  Object.keys(linesIndex).length,
  "questions"
);
