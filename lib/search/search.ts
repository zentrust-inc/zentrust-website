/**
 * ZenTrust Search — Canonical Implementation
 * This file is intentionally non-extensible.
 * Do not optimize, refactor, or generalize.
 */

import { ZenQuestion } from "./types";

export type SearchResult =
  | {
      type: "found";
      questions: ZenQuestion[];
      orientation?: string;
    }
  | {
      type: "absent";
      orientation?: string;
      absence: string;
    };

export function searchZenTrust(
  query: string,
  questions: ZenQuestion[]
): SearchResult {
  const q = query.trim().toLowerCase();

  const matches = questions.filter((item) =>
    item.h1.toLowerCase().includes(q) ||
    item.h2.some((h) => h.toLowerCase().includes(q)) ||
    item.body.toLowerCase().includes(q)
  );

  if (matches.length > 0) {
    const orientation = matches.some((m) =>
      m.body.toLowerCase().includes(q)
    )
      ? `The above question addresses ${query}.`
      : undefined;

    return {
      type: "found",
      questions: matches.slice(0, 5),
      orientation,
    };
  }

  return {
    type: "absent",
    absence: `ZenTrust does not yet hold a question specifically about ${query}.`,
  };
}
