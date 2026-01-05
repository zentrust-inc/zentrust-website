import { ZenQuestion } from "./types"

export type SortMode = "relevancy" | "newest"

export type SearchResult =
  | {
      type: "found"
      total: number
      questions: ZenQuestion[]
      bodyOnlyMatch: boolean
    }
  | {
      type: "absent"
      absence: string
    }

export function searchZenTrust(
  query: string,
  questions: ZenQuestion[],
  sort: SortMode = "relevancy"
): SearchResult {
  const q = query.trim().toLowerCase()
  if (!q) {
    return {
      type: "absent",
      absence:
        "ZenTrust does not yet hold a question specifically about this.",
    }
  }

  const matches = questions
    .map((question) => {
      const inH1 = question.h1.toLowerCase().includes(q)
      const inH2 = question.h2.some(h => h.toLowerCase().includes(q))
      const inBody = question.body.toLowerCase().includes(q)

      if (!inH1 && !inH2 && !inBody) return null

      return {
        question,
        rank: inH1 ? 1 : inH2 ? 2 : 3,
        bodyOnly: !inH1 && !inH2 && inBody,
      }
    })
    .filter(Boolean) as {
      question: ZenQuestion
      rank: number
      bodyOnly: boolean
    }[]

  if (matches.length === 0) {
    return {
      type: "absent",
      absence: `ZenTrust does not yet hold a question specifically about ${query}.`,
    }
  }

  let sorted = matches

  if (sort === "relevancy") {
    sorted = [...matches].sort((a, b) => a.rank - b.rank)
  }

  if (sort === "newest") {
    sorted = [...matches].sort(
      (a, b) =>
        new Date(b.question.created_at).getTime() -
        new Date(a.question.created_at).getTime()
    )
  }

  return {
    type: "found",
    total: sorted.length,
    questions: sorted.map(m => m.question),
    bodyOnlyMatch: sorted.every(m => m.bodyOnly),
  }
}
