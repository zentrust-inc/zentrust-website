import Link from "next/link";
import { searchZenTrust } from "@/lib/search/search";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = {
  searchParams: { q?: string };
};

type Section = {
  title: string;
  lines: string[];
};

type PageEntry = {
  pageTitle: string;   // ← H1 (canonical question)
  sections: Section[];
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
        const entry = (linesIndex as Record<string, PageEntry>)[slug];
        if (!entry) return null;

        // Collect ALL matching lines across the page
        const matchedLines: string[] = [];

        for (const section of entry.sections) {
          for (const line of section.lines) {
            if (line.toLowerCase().includes(q)) {
              matchedLines.push(line);
            }
          }
        }

        if (matchedLines.length === 0) return null;

        return (
          <section key={slug} className="space-y-4">
            {/* ✅ ALWAYS show H1 */}
            <Link
              href={`/questions${slug}?highlight=${encodeURIComponent(query)}`}
              className="block text-lg font-semibold leading-snug hover:underline"
            >
              {highlightText(entry.pageTitle, query)} →
            </Link>

            {/* Body matches */}
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
      })}
    </main>
  );
}
