import type { ReactNode } from "react";

export function highlightText(
  text: string,
  term?: string
): ReactNode {
  if (!term) return text;

  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b(${escaped})\\b`, "gi");

  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark
        key={i}
        className="rounded-sm bg-amber-100 px-1 dark:bg-amber-900/40"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}
