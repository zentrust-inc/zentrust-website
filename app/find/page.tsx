import Link from "next/link";
import { searchZenTrust } from "@/lib/search/search";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = {
  searchParams: { q?: string };
};

type PageEntry = {
  title: string;   // canonical H1
  lines: string[]; // visible body lines
};

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";
  const q = query.toLowerCase();

  // No query at all
  if (!query) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>ZenTrust does not yet hold a question specifically about this.</p>
      </main>
    );
  }

  const result = searchZenTrust(query);
  const renderedSections: JSX.Element[] = [];

  // Only attempt rendering if search returned pages
  if (result.type === "found") {
    for (const slug of result.pages) {
      const entry = (linesIndex as Record<string, PageEntry>)[slug];
      if (!entry) continue;

      // Find only lines that actually contain the query
      const matchedLines = entry.lines.filter((line) =>
        line.toLowerCase().includes(q),
      );

      if (matchedLines.length === 0) continue;

      renderedSections.push(
        <section
          key={slug}
          className="rounded-xl border border-neutral-200 bg-white/70 p-6
                     shadow-sm space-y-4
                     dark:border-neutral-800 dark:bg-neutral-900/50"
        >
          {/* TITLE — always visible, always first */}
          <Link
            href={`${slug}?highlight=${encodeURIComponent(query)}`}
            className="block text-lg font-semibold leading-snug hover:underline"
          >
            {highlightText(entry.title, query)} →
          </Link>

          {/* BODY — clearly belongs to this title */}
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
        </section>,
      );
    }
  }

  // NOTHING rendered → show absence message
  if (renderedSections.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>
          ZenTrust does not yet hold a question specifically about{" "}
          <strong>{query}</strong>.
        </p>
      </main>
    );
  }

  // Normal results view
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-10">
      {renderedSections}
    </main>
  );
}
