import rawIndex from "./index.generated.json"

const index = rawIndex as Record<string, string[]>

export type SearchResult =
  | { type: "found"; total: number; pages: string[] }
  | { type: "absent"; absence: string }

export function searchZenTrust(query: string): SearchResult {
  const q = query.trim().toLowerCase()

  if (!q) {
    return {
      type: "absent",
      absence:
        "ZenTrust does not yet hold a question specifically about this.",
    }
  }

  const matches = Object.keys(index)
    .filter(term => term.includes(q))
    .flatMap(term => index[term])

  const unique = Array.from(new Set(matches))

  if (unique.length === 0) {
    return {
      type: "absent",
      absence: `ZenTrust does not yet hold a question specifically about ${query}.`,
    }
  }

  return {
    type: "found",
    total: unique.length,
    pages: unique,
  }
}
