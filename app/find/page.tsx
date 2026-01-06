import Link from "next/link";
import { searchZenTrust } from "@/lib/search/search";
import linesIndex from "@/lib/search/lines.generated.json";
import { highlightText } from "@/lib/highlight";

type Props = { searchParams: { q?: string } };

type Entry = {
  title: string;
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

  if (result.type === "absent") {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>{result.absence}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-10">
      {result.pages.map(slug => {
        const entry = (linesIndex as Record<string, Entry>)[slug];
        if (!entry) return null;

        const matches = entry.lines.filter(line =>
          line.includes(q)
        );

        return (
          <section
            key={slug}
            className="rounded-xl border p-6 space-y-3"
          >
            <Link
              href={`${slug}?highlight=${encodeURIComponent(query)}`}
              className="block text-lg font-semibold hover:underline"
            >
              {highlightText(entry.title, query)} →
            </Link>

            {matches.map((line, i) => (
              <p key={i} className="text-sm text-neutral-700 dark:text-neutral-300">
                {highlightText(line, query)}
              </p>
            ))}
          </section>
        );
      })}
    </main>
  );
}
