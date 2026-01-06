import { ZEN_QUESTIONS } from "@/lib/search/index";
import { searchZenTrust } from "@/lib/search/search";

type Props = {
  searchParams: { q?: string };
};

export default function SearchPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";
  const result = searchZenTrust(query, ZEN_QUESTIONS);

  if (result.type === "found") {
    return (
      <main className="mx-auto max-w-2xl space-y-6 px-4 py-10">
        {result.questions.map((q) => (
          <a
            key={q.slug}
            href={`/questions/${q.slug}?highlight=${encodeURIComponent(query)}`}
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

        {result.orientation && (
          <p className="text-sm opacity-60">
            {result.orientation}
          </p>
        )}
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl space-y-4 px-4 py-10">
      {result.orientation && (
        <p className="text-sm opacity-60">
          {result.orientation}
        </p>
      )}
      <p>{result.absence}</p>
    </main>
  );
}
