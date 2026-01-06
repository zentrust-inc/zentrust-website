import linesIndex from "./lines.generated.json";

type Entry = {
  title: string;
  lines: string[];
};

export type SearchResult =
  | { type: "found"; pages: string[] }
  | { type: "absent"; absence: string };

export function searchZenTrust(query: string): SearchResult {
  const q = query.trim().toLowerCase();

  if (!q) {
    return {
      type: "absent",
      absence:
        "ZenTrust does not yet hold a question specifically about this.",
    };
  }

  const pages: string[] = [];

  for (const [slug, entry] of Object.entries(
    linesIndex as Record<string, Entry>
  )) {
    if (
      entry.title.toLowerCase().includes(q) ||
      entry.lines.some(line => line.includes(q))
    ) {
      pages.push(slug);
    }
  }

  if (!pages.length) {
    return {
      type: "absent",
      absence: `ZenTrust does not yet hold a question specifically about ${query}.`,
    };
  }

  return { type: "found", pages };
}
