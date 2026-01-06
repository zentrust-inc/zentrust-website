import type { ReactNode } from "react";

export function highlightText(text: string, term?: string): ReactNode {
  const t = term?.trim();
  if (!t) return text;

  // escape regex special chars
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // whole-word, case-insensitive
  const regex = new RegExp(`\\b(${escaped})\\b`, "i");

  // Split while preserving matches (no /g to avoid lastIndex issues)
  const parts = text.split(new RegExp(`\\b(${escaped})\\b`, "i"));

  // If no match, return original
  if (parts.length === 1) return text;

  return parts.map((part, idx) => {
    // Odd indices are captured matches because of the capturing group
    const isMatch = idx % 2 === 1 && regex.test(part);
    return isMatch ? (
      <mark
        key={idx}
        className="rounded-sm bg-amber-100 px-1 dark:bg-amber-900/40"
      >
        {part}
      </mark>
    ) : (
      <span key={idx}>{part}</span>
    );
  });
}
