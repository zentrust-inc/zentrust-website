import { ZEN_QUESTIONS } from "@/lib/search/data"
import { searchZenTrust } from "@/lib/search/search"

type Props = {
  searchParams: {
    q?: string
    sort?: "relevancy" | "newest"
  }
}

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q ?? ""
  const sort = searchParams.sort ?? "relevancy"

  const result = searchZenTrust(query, ZEN_QUESTIONS, sort)

  if (result.type === "absent") {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10">
        <p>{result.absence}</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-4 py-10">
      <div className="text-sm opacity-60">
        Displaying 1–{result.total} results out of {result.total} for “{query}”
      </div>

      <div className="text-sm opacity-60">
        Sorting by:{" "}
        <a href={`/find?q=${query}&sort=relevancy`} className="underline">
          Relevancy
        </a>{" "}
        |{" "}
        <a href={`/find?q=${query}&sort=newest`} className="underline">
          Newest
        </a>
      </div>

      {result.questions.map((q) => (
        <a
          key={q.slug}
          href={`/questions/${q.slug}`}
          className="block rounded-xl border p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <div className="text-xs uppercase opacity-60">
            {q.category}
          </div>
          <h2 className="text-lg font-semibold">
            {q.h1}
          </h2>
        </a>
      ))}

      {result.bodyOnlyMatch && (
        <p className="text-sm opacity-60">
          The above question addresses {query}.
        </p>
      )}
    </main>
  )
}
