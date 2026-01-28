// app/learn/health-and-suffering/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Health and Suffering: Stress, Insulin, and Chronic Strain | ZenTrust",
  description:
    "An educational guide exploring chronic stress, insulin regulation, and why modern health systems often reduce disease without reducing suffering.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const coreQuestions: FeaturedQuestion[] = [
  {
    title:
      "Why is insulin almost never measured, even though it governs most chronic disease?",
    href: "/questions/insulin-unmeasured",
    kicker: "Start here",
  },
  {
    title: "Why does chronic stress keep insulin elevated?",
    href: "/questions/chronic-stress-insulin",
  },
  {
    title: "Why does modern stress last longer than nature intended?",
    href: "/questions/stress-outlasts-evolution",
  },
  {
    title: "Why does prevention feel invisible compared to treatment?",
    href: "/questions/prevention-invisible",
  },
];

const failureQuestion: FeaturedQuestion = {
  title: "Why does treating the body help, yet suffering remain?",
  href: "/questions/bpss-health",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:py-14">
      {/* Above the fold */}
      <header className="space-y-4">
        <p className="text-sm font-medium text-neutral-600">
          Educational guide
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Health and Suffering
        </h1>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          Many chronic health conditions persist even as medical treatment
          improves. This guide examines how stress, insulin regulation, and
          system-level design shape long-term health outcomes.
        </p>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          The focus is not on advice or treatment, but on understanding why
          biological strain and lived suffering often continue beneath the
          surface.
        </p>

        <div className="pt-2">
          <a
            href="#guide"
            className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Explore the guide
          </a>
        </div>
      </header>

      {/* Guide */}
      <section id="guide" className="mt-12 space-y-10">
        {/* Core questions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Core questions
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {coreQuestions.map((q) => (
              <li
                key={q.href}
                className="rounded-xl border border-neutral-200 bg-white p-4"
              >
                {q.kicker && (
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    {q.kicker}
                  </p>
                )}
                <Link
                  href={q.href}
                  className="block text-base font-semibold text-neutral-900 hover:underline"
                >
                  {q.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Failure mode */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            When treatment does not reduce suffering
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <Link
              href={failureQuestion.href}
              className="block text-base font-semibold text-neutral-900 hover:underline"
            >
              {failureQuestion.title}
            </Link>
            <p className="mt-2 text-sm text-neutral-700">
              Examines why addressing physical symptoms alone often leaves
              chronic stress, metabolic strain, and unresolved pressure intact.
            </p>
          </div>
        </section>

        {/* Support */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            Supporting public education
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust provides open educational resources on health, stress, and
            long-term systems shaping human wellbeing. Support is optional.
          </p>

          <Link
            href="/stewardship"
            className="inline-flex rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Support the work
          </Link>
        </section>
      </section>
    </main>
  );
}
