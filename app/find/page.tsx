import Link from "next/link";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = {
  searchParams: { q?: string };
};

type LineEntry = {
  raw: string;
  norm: string;
};

type PageEntry = {
  title: string;
  lines: LineEntry[];
};

/**
 * Normalize noise, not meaning (ES5-safe).
 * - lowercase
 * - collapse whitespace
 * - remove punctuation/symbols (ASCII)
 */
function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]+/g, "")
    .trim();
}

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";
  const nq = normalize(query);

  if (!query) {
    return (
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-10">
        <p>ZenTrust does not yet hold a question specifically about this.</p>
      </main>
    );
  }

  const renderedSections: JSX.Element[] = [];

  for (const [slug, entry] of Object.entries(
    linesIndex as Record<string, PageEntry>,
  )) {
    const titleMatch = normalize(entry.title).includes(nq);

    const matchedLines = entry.lines.filter((line) =>
      line.norm.includes(nq),
    );

    if (!titleMatch && matchedLines.length === 0) continue;

    renderedSections.push(
      <section
        key={slug}
        className="rounded-xl border border-neutral-200 bg-white/70 p-6 shadow-sm space-y-4 dark:border-neutral-800 dark:bg-neutral-900/50"
      >
        <Link
          href={`${slug}?highlight=${encodeURIComponent(query)}`}
          className="block text-lg font-semibold leading-snug hover:underline"
        >
          {highlightText(entry.title, query)} →
        </Link>

        <div className="space-y-2">
          {matchedLines.map((line, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
            >
              {highlightText(line.raw, query)}
            </p>
          ))}
        </div>
      </section>,
    );
  }

  if (renderedSections.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-10">
        <p>
          ZenTrust does not yet hold a question specifically about{" "}
          <strong>{query}</strong>.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 pt-28 pb-16">
      {renderedSections}
    </main>
  );
}
