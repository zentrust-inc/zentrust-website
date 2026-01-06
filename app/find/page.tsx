// app/find/page.tsx
import Link from "next/link";
import { searchZenTrust } from "@/lib/search/search";
import { highlightText } from "@/lib/highlight";

// load all question pages
const context = (require as any).context(
  "../questions",
  true,
  /page\.tsx$/,
);

type Props = {
  searchParams: { q?: string };
};

export default function SearchPage({ searchParams }: Props) {
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
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-10">
      {result.pages.map((slug) => {
        // load the question module
        const mod = context(`./${slug}/page.tsx`) as any;

        const title: string =
          typeof mod.metadata?.title === "string"
            ? mod.metadata.title
            : slug;

        // render once to extract text nodes
        const Content = mod.default;
        const rendered = Content?.();

        // extract all text blocks in render order
        const blocks: string[] = [];
        extractText(rendered, blocks);

        // keep only blocks that contain the query
        const matches = blocks.filter((t) =>
          t.toLowerCase().includes(query.toLowerCase()),
        );

        const titleHasMatch = title
          .toLowerCase()
          .includes(query.toLowerCase());

        return (
          <div key={slug} className="space-y-3">
            {/* TITLE */}
            <Link
              href={`/questions/${slug}?highlight=${encodeURIComponent(
                query,
              )}`}
              className="block text-lg font-semibold hover:underline"
            >
              {highlightText(title, query)} →
            </Link>

            {/* BODY / H2 MATCHES */}
            {!titleHasMatch &&
              matches.map((text, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                >
                  {highlightText(text, query)}
                </p>
              ))}
          </div>
        );
      })}
    </main>
  );
}

/* ---------------- helpers ---------------- */

function extractText(node: any, out: string[]) {
  if (node == null) return;

  if (typeof node === "string") {
    const t = node.trim();
    if (t) out.push(t);
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((n) => extractText(n, out));
    return;
  }

  if (node.props?.children) {
    extractText(node.props.children, out);
  }
}
