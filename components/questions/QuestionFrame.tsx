"use client";

import { RitualPause } from "@/components/hero/RitualPause";

type QuestionSection = {
  /** Sub-question title (must end with ?) */
  title: string;

  /** One-sentence visible answer */
  answer: string;

  /** Expandable ELI explanation (70–80 words, enforced elsewhere) */
  children: string;

  /** Section metaphor (exactly three sentences, string) */
  metaphor: string;
};

type QuestionFrameProps = {
  /** Category (doctrinal, machine-facing, not rendered in Hero) */
  category: string;

  /** Full-sentence Question headline */
  question: string;

  /** Short answer shown in Hero */
  shortAnswer: string;

  /** Hero metaphor (exactly one, three sentences, string) */
  heroMetaphor: string;

  /** Exactly 8 sub-questions */
  sections: QuestionSection[];

  /** Ending reflection (exactly 3 lines) */
  ending: [string, string, string];
};

export function QuestionFrame({
  question,
  shortAnswer,
  heroMetaphor,
  sections,
  ending,
}: QuestionFrameProps) {
  return (
    <main className="bg-[#faf7f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= FULL-SCREEN HERO ================= */}
      <section className="flex h-[100svh] min-h-[100svh] items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          {/* Trust Kicker (LOCKED) */}
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
          </p>

          {/* Question */}
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
            {question}
          </h1>

          {/* Short Answer */}
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            {shortAnswer}
          </p>

          {/* Whisper / Ritual Pause */}
          <RitualPause enabled />

          {/* Hero Metaphor */}
          <p className="text-sm font-semibold italic text-neutral-700 dark:text-neutral-300">
            {heroMetaphor}
          </p>

          {/* Structure Line (LOCKED) */}
          <p className="text-sm italic text-neutral-500">
            Detailed answer below. Nothing here requires agreement.
          </p>
        </div>
      </section>

      {/* ================= EXPANDABLE SECTIONS ================= */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
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

              <p className="text-xs italic text-neutral-500">
                Expand for the fuller picture
              </p>
            </summary>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
              <p>{section.children}</p>

              <p className="italic text-neutral-600 dark:text-neutral-400">
                {section.metaphor}
              </p>
            </div>
          </details>
        ))}
      </section>

      {/* ================= ENDING ================= */}
      <footer className="mx-auto max-w-3xl px-6 pb-12 text-center text-sm text-neutral-500 space-y-1">
        <p>{ending[0]}</p>
        <p>{ending[1]}</p>
        <p>{ending[2]}</p>
        <p className="pt-4">
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </p>
      </footer>
    </main>
  );
}
