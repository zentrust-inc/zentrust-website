import Link from "next/link";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = {
  searchParams: { q?: string };
};

type PageEntry = {
  title: string;
  lines: string[];
};

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";
  const q = query.toLowerCase();

  if (!query) {
    return (
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-10">
        <p>ZenTrust does not yet hold a question specifically about this.</p>
      </main>
    );
  }

  const renderedSections: JSX.Element[] = [];

  for (const [slug, entry] of Object.entries(
    linesIndex as Record<string, PageEntry>
  )) {
    const matchedLines = entry.lines.filter(line =>
      line.includes(q)
    );

    if (!matchedLines.length && !entry.title.toLowerCase().includes(q)) {
      continue;
    }

    renderedSections.push(
      <section
        key={slug}
        className="rounded-xl border border-neutral-200 bg-white/70 p-6
                   shadow-sm space-y-4
                   dark:border-neutral-800 dark:bg-neutral-900/50"
      >
        {/* Title ALWAYS shown */}
        <Link
          href={`${slug}?highlight=${encodeURIComponent(query)}`}
          className="block text-lg font-semibold leading-snug hover:underline"
        >
          {highlightText(entry.title, query)} →
        </Link>

        {/* Only lines that actually contain the string */}
        <div className="space-y-2">
          {matchedLines.map((line, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
            >
              {highlightText(line, query)}
            </p>
          ))}
        </div>
      </section>
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
