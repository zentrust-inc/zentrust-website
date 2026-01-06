import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUTPUT_INDEX = path.join(ROOT, "lib/search/index.generated.json");
const OUTPUT_LINES = path.join(ROOT, "lib/search/lines.generated.json");

/* -------------------------------------------------- */
/* Walk filesystem                                    */
/* -------------------------------------------------- */
function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(ts|tsx|mdx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

/* -------------------------------------------------- */
/* Extract ONLY human-visible text                    */
/* -------------------------------------------------- */
function extractVisibleText(source) {
  return source
    // remove block comments
    .replace(/\/\*[\s\S]*?\*\//g, "")
    // remove line comments
    .replace(/\/\/.*$/gm, "")
    // remove imports / exports
    .replace(/^import[\s\S]*?;$/gm, "")
    .replace(/^export[\s\S]*?;$/gm, "")
    // remove file paths
    .replace(/app\/questions\/[a-z0-9\-\/]+/gi, "")
    // replace JSX tags with newlines
    .replace(/<[^>]+>/g, "\n")
    // normalize quotes
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    // lowercase for indexing
    .toLowerCase();
}

/* -------------------------------------------------- */
/* Extract metadata title (robust)                    */
/* -------------------------------------------------- */
function extractTitle(source) {
  // full metadata block
  let match = source.match(
    /metadata\s*=\s*{[\s\S]*?title\s*:\s*["'`](.*?)["'`]/m
  );
  if (match) return match[1];

  // fallback
  match = source.match(/title\s*:\s*["'`](.*?)["'`]/);
  if (match) return match[1];

  return null;
}

/* -------------------------------------------------- */
/* Main                                               */
/* -------------------------------------------------- */
const files = walk(APP_DIR);
const index = {};
const linesIndex = {};

for (const file of files) {
  const dir = path.dirname(file);
  const relPath =
    "/" + path.relative(APP_DIR, dir).replace(/\\/g, "/");

  // only index question pages
  if (!relPath.startsWith("/questions/")) continue;

  const raw = fs.readFileSync(file, "utf8");
  const title = extractTitle(raw);

  // 🔒 RULE: no title → no indexing
  if (!title) continue;

  const text = extractVisibleText(raw);

  const lines = text
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l =>
      l.length > 4 &&
      !l.startsWith("//") &&
      !l.includes("page.tsx") &&
      !l.includes("export") &&
      !l.includes("import")
    );

  // 🔒 RULE: no body → no entry
  if (lines.length === 0) continue;

  linesIndex[relPath] = { title, lines };

  // word → slug index
const words = [
  ...text.split(/[^a-z0-9]+/),
  ...title.toLowerCase().split(/[^a-z0-9]+/)
].filter(w => w.length > 2);

  for (const word of new Set(words)) {
    if (!index[word]) index[word] = [];
    if (!index[word].includes(relPath)) index[word].push(relPath);
  }
}

/* -------------------------------------------------- */
/* Write outputs                                      */
/* -------------------------------------------------- */
fs.mkdirSync(path.dirname(OUTPUT_INDEX), { recursive: true });
fs.writeFileSync(OUTPUT_INDEX, JSON.stringify(index, null, 2));
fs.writeFileSync(OUTPUT_LINES, JSON.stringify(linesIndex, null, 2));

console.log(
  "Search index generated:",
  Object.keys(index).length,
  "terms |",
  Object.keys(linesIndex).length,
  "questions"
);
