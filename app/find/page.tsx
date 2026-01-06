import Link from "next/link";
import { searchZenTrust } from "@/lib/search/search";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = {
  searchParams: { q?: string };
};

type PageEntry = {
  title: string;   // H1
  lines: string[];
};

export default function FindPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";
  const q = query.toLowerCase();

  if (!query) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>ZenTrust does not yet hold a question specifically about this.</p>
      </main>
    );
  }

  const result = searchZenTrust(query);

  const renderedSections: JSX.Element[] = [];

  if (result.type === "found") {
    for (const slug of result.pages) {
      const entry = (linesIndex as Record<string, PageEntry>)[slug];
      if (!entry) continue;

      const matchedLines = entry.lines.filter((line) =>
        line.toLowerCase().includes(q),
      );

      if (matchedLines.length === 0) continue;

      renderedSections.push(
        <section key={slug} className="space-y-4">
          {/* ALWAYS show the correct page title first */}
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
                {highlightText(line, query)}
              </p>
            ))}
          </div>
        </section>,
      );
    }
  }

  // ✅ NOTHING rendered → show absence
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

  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-10">
      {renderedSections}
    </main>
  );
}
