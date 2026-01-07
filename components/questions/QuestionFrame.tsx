"use client";

import { ReactNode } from "react";

type QuestionSection = {
  /** Sub-question title (must end with ?) */
  title: string;

  /** One-sentence visible answer */
  answer: string;

  /** Expandable ELI explanation (70–80 words, enforced elsewhere) */
  children: ReactNode;
};

type QuestionFrameProps = {
  /** Category label (rendered quietly) */
  category: string;

  /** Full-sentence Question headline */
  question: string;

  /** Short answer shown in Hero */
  shortAnswer: string;

  /** Hero metaphor (exactly one, three sentences) */
  heroMetaphor: ReactNode;

  /** Exactly 8 sub-questions */
  sections: QuestionSection[];
};

export function QuestionFrame({
  category,
  question,
  shortAnswer,
  heroMetaphor,
  sections,
}: QuestionFrameProps) {
  return (
    <main className="bg-[#faf7f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= FULL-SCREEN HERO ================= */}
      <section className="flex h-[100svh] min-h-[100svh] items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-5">
          {/* Category */}
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            {category}
          </p>

          {/* Question */}
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
            {question}
          </h1>

          {/* Short Answer */}
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            {shortAnswer}
          </p>

          {/* Whisper */}
          <p className="text-sm text-neutral-500">
            ▶ Pause here ▷
          </p>

          {/* Structure Line (LOCKED) */}
          <p className="text-sm italic text-neutral-500">
            Detailed answer below. Nothing here requires agreement.
          </p>

          {/* Hero Metaphor */}
          <div className="mt-6 italic text-sm text-neutral-600 dark:text-neutral-300">
            {heroMetaphor}
          </div>
        </div>
      </section>

      {/* ================= EXPANDABLE SECTIONS ================= */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        {sections.map((section, i) => (
          <details
            key={i}
            className="mb-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
          >
            <summary className="cursor-pointer list-none space-y-2">
              <h3 className="text-base font-semibold">
                {section.title}
              </h3>

              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {section.answer}
              </p>

              {/* Expand Affordance (LOCKED) */}
              <p className="text-xs italic text-neutral-500">
                Expand for the fuller picture
              </p>
            </summary>

            <div className="mt-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
              {section.children}
            </div>
          </details>
        ))}
      </section>
    </main>
  );
}
