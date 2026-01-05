import fs from "fs"
import path from "path"

const QUESTIONS_DIR = path.join(process.cwd(), "app/questions")

export function buildZenTrustIndex() {
  const entries = fs.readdirSync(QUESTIONS_DIR)

  return entries
    .filter((slug) =>
      fs.existsSync(
        path.join(QUESTIONS_DIR, slug, "page.tsx")
      )
    )
    .map((slug) => {
      const mod = require(
        path.join(QUESTIONS_DIR, slug, "page.tsx")
      )
      return mod.zenQuestion
    })
}
