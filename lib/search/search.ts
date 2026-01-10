import linesIndex from "./lines.generated.json";

type LineEntry = {
  raw: string;
  norm: string;
};

type Entry = {
  title: string;
  lines: LineEntry[];
};

export type SearchResult =
  | { type: "found"; pages: string[] }
  | { type: "absent"; absence: string };

/**
 * Normalize noise, not meaning.
 */
function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]+/g, "")
    .trim();
}

export function searchZenTrust(query: string): SearchResult {
  const q = normalize(query);

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
    const titleMatch = normalize(entry.title).includes(q);

    const lineMatch = entry.lines.some(line =>
      line.norm.includes(q)
    );

    if (titleMatch || lineMatch) {
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
