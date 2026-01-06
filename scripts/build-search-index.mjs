import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const OUTPUT_INDEX = path.join(ROOT, "lib/search/index.generated.json");
const OUTPUT_LINES = path.join(ROOT, "lib/search/lines.generated.json");

/* -------------------------------------------------- */
/* file walker                                        */
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
/* extract only human-visible text                    */
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
    // replace JSX tags with line breaks
    .replace(/<[^>]+>/g, "\n")
    // normalize quotes
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    // lowercase for indexing
    .toLowerCase();
}

/* -------------------------------------------------- */
/* extract metadata title                             */
/* -------------------------------------------------- */
function extractTitle(source) {
  const match = source.match(/title:\s*["'`](.*?)["'`]/);
  return match ? match[1] : null;
}

/* -------------------------------------------------- */
/* main                                               */
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

  const text = extractVisibleText(raw);

  // split into real, human-visible lines
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

  // save clean lines per question
  if (title && lines.length) {
    linesIndex[relPath] = { title, lines };
  }

  // build word → slug index
  const words = text
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 2);

  for (const word of new Set(words)) {
    if (!index[word]) index[word] = [];
    if (!index[word].includes(relPath)) index[word].push(relPath);
  }
}

/* -------------------------------------------------- */
/* write outputs                                      */
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
