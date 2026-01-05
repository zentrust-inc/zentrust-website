import fs from "fs"
import path from "path"

const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, "app")
const OUTPUT = path.join(ROOT, "lib/search/index.generated.json")

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (/\.(ts|tsx|mdx)$/.test(entry.name)) files.push(full)
  }
  return files
}

function extractText(source) {
  return source
    // remove imports/exports
    .replace(/^import[\s\S]*?;$/gm, "")
    .replace(/^export[\s\S]*?;$/gm, "")
    // remove JSX tags
    .replace(/<[^>]+>/g, " ")
    // keep only words
    .toLowerCase()
}

const files = walk(APP_DIR)
const index = {}

for (const file of files) {
  const relPath =
    "/" +
    path
      .relative(APP_DIR, path.dirname(file))
      .replace(/\\/g, "/")

  const text = extractText(fs.readFileSync(file, "utf8"))

  const words = text
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 2)

  for (const word of new Set(words)) {
    if (!index[word]) index[word] = []
    if (!index[word].includes(relPath)) index[word].push(relPath)
  }
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
fs.writeFileSync(OUTPUT, JSON.stringify(index, null, 2))

console.log("Search index generated:", Object.keys(index).length, "terms")
