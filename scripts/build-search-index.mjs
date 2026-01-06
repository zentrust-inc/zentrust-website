import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUT_LINES = path.join(ROOT, "lib/search/lines.generated.json");

/* Walk filesystem */
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (/\.(ts|tsx|mdx)$/.test(e.name)) acc.push(full);
  }
  return acc;
}

/* Extract human-visible text */
function extractVisibleText(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/^import[\s\S]*?;$/gm, "")
    .replace(/^export[\s\S]*?;$/gm, "")
    .replace(/<[^>]+>/g, "\n")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .toLowerCase();
}

/* Extract page title */
function extractTitle(src) {
  const m = src.match(
    /metadata\s*=\s*{[\s\S]*?title\s*:\s*["'`](.*?)["'`]/m
  );
  return m ? m[1] : null;
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

  const text = extractVisibleText(raw);

  const lines = text
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.length > 2);

  if (!lines.length) continue;

  linesIndex[slug] = { title, lines };
}

fs.mkdirSync(path.dirname(OUT_LINES), { recursive: true });
fs.writeFileSync(OUT_LINES, JSON.stringify(linesIndex, null, 2));

console.log(
  "Search index generated:",
  Object.keys(linesIndex).length,
  "questions"
);
