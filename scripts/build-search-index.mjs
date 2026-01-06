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
/* Extract EVERYTHING human-visible                   */
/* -------------------------------------------------- */
function extractAllText(source) {
  return source
    // remove comments
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    // remove imports / exports
    .replace(/^import[\s\S]*?;$/gm, "")
    .replace(/^export[\s\S]*?;$/gm, "")
    // replace JSX / HTML tags with newlines
    .replace(/<[^>]+>/g, "\n")
    // normalize quotes
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    // normalize whitespace
    .replace(/\r/g, "")
    .toLowerCase();
}

/* -------------------------------------------------- */
/* Extract metadata title (required anchor)           */
/* -------------------------------------------------- */
function extractTitle(source) {
  let m = source.match(
    /metadata\s*=\s*{[\s\S]*?title\s*:\s*["'`](.*?)["'`]/m
  );
  if (m) return m[1];

  m = source.match(/title\s*:\s*["'`](.*?)["'`]/);
  if (m) return m[1];

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

  // only index questions
  if (!relPath.startsWith("/questions/")) continue;

  const raw = fs.readFileSync(file, "utf8");
  const title = extractTitle(raw);

  // 🔒 invariant: every result must have a title
  if (!title) continue;

  const text = extractAllText(raw);

  // break into readable lines for /find rendering
  const lines = text
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.length > 3);

  if (lines.length === 0) continue;

  // store all visible lines
  linesIndex[relPath] = { title, lines };

  // 🔑 INDEX EVERY WORD FROM EVERY STRING
  const words = text
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 1);

  for (const word of new Set(words)) {
    if (!index[word]) index[word] = [];
    if (!index[word].includes(relPath)) {
      index[word].push(relPath);
    }
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
