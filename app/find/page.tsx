import { searchZenTrust } from "@/lib/search/search"

type Props = {
  searchParams: { q?: string }
}

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q ?? ""
  const result = searchZenTrust(query)

  if (result.type === "absent") {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>{result.absence}</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <div className="text-sm opacity-60">
        Displaying 1–{result.total} results out of {result.total} for “{query}”
      </div>

      {result.pages.map((url) => (
        <a
          key={url}
          href={url}
          className="block rounded-xl border p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <h2 className="text-lg font-semibold">{url}</h2>
        </a>
      ))}
    </main>
  )
}
