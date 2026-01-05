import fs from "fs"
import path from "path"
import { JSDOM } from "jsdom"

const APP_DIR = path.join(process.cwd(), ".next/server/app")
const OUTPUT = path.join(process.cwd(), "lib/search/index.generated.json")

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.name.endsWith(".html")) files.push(full)
  }
  return files
}

function extractText(html) {
  const dom = new JSDOM(html)
  const doc = dom.window.document

  // remove scripts/styles
  doc.querySelectorAll("script, style, noscript").forEach(n => n.remove())

  return doc.body.textContent
    .replace(/\s+/g, " ")
    .toLowerCase()
}

const pages = walk(APP_DIR)
const index = {}

for (const file of pages) {
  const rel = file
    .replace(APP_DIR, "")
    .replace(/\/page\.html$/, "")
    .replace(/\/index\.html$/, "")
    || "/"

  const html = fs.readFileSync(file, "utf8")
  const text = extractText(html)

  const words = text
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 2)

  for (const word of new Set(words)) {
    if (!index[word]) index[word] = []
    if (!index[word].includes(rel)) index[word].push(rel)
  }
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
fs.writeFileSync(OUTPUT, JSON.stringify(index, null, 2))

console.log("Search index generated:", Object.keys(index).length, "terms")
