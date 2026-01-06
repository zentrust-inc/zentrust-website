import Link from "next/link";
import { searchZenTrust } from "@/lib/search/search";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = {
  searchParams: { q?: string };
};

type LinesEntry = {
  title: string;
  lines: string[];
};

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";

  if (!query) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>
          ZenTrust does not yet hold a question specifically about this.
        </p>
      </main>
    );
  }

  const result = searchZenTrust(query);

  if (result.type === "absent") {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>{result.absence}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-10">
      {result.pages.map((slug) => {
        const entry = (linesIndex as Record<string, LinesEntry>)[slug];
        if (!entry) return null;

        const q = query.toLowerCase();

        const titleHasMatch = entry.title.toLowerCase().includes(q);

        const matchingLines = entry.lines.filter((line) =>
          line.toLowerCase().includes(q),
        );

        return (
          <section key={slug} className="space-y-4">
            {/* TITLE — anchor first */}
            <Link
              href={`/questions${slug}?highlight=${encodeURIComponent(
                query,
              )}`}
              className="block text-lg font-semibold leading-snug hover:underline"
            >
              {highlightText(entry.title, query)} →
            </Link>

            {/* BODY / H2 — only where the word exists */}
            {!titleHasMatch && matchingLines.length > 0 && (
              <div className="space-y-2">
                {matchingLines.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                  >
                    {highlightText(line, query)}
                  </p>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </main>
  );
}
