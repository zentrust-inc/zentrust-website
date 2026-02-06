// app/learn/health-and-suffering/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Health Patterns: Stress, Insulin, and Chronic Strain | ZenTrust",
  description:
    "An educational guide exploring chronic stress patterns, insulin regulation, and why health outcomes persist despite treatment improvements.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const coreQuestions: FeaturedQuestion[] = [
  {
    title:
      "Why is insulin rarely measured in standard health assessments?",
    href: "/questions/insulin-unmeasured",
    kicker: "Start here",
  },
  {
    title: "What patterns connect chronic stress to insulin levels?",
    href: "/questions/chronic-stress-insulin",
  },
  {
    title: "How do modern stress patterns differ from historical patterns?",
    href: "/questions/stress-outlasts-evolution",
  },
  {
    title: "Why does prevention remain less visible than treatment?",
    href: "/questions/prevention-invisible",
  },
];

const failureQuestion: FeaturedQuestion = {
  title:
    "Why do health improvements sometimes leave underlying patterns intact?",
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
      </header>

      {/* Guide */}
      <section id="guide" className="mt-12 space-y-12">
        {/* Understanding Health Patterns */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Understanding Health Patterns
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            Modern healthcare has achieved remarkable success in diagnosing
            disease and managing symptoms, yet many people continue to
            experience chronic strain despite ongoing treatment. One reason is
            that health outcomes are often shaped less by isolated conditions
            than by repeating physiological and environmental patterns. Stress
            and metabolic regulation operate continuously in the background,
            influencing how the body allocates energy, repairs tissue, and
            responds to threat.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            Insulin plays a central role in this process. It governs how fuel is
            stored and released, how cells access energy, and how the body
            adapts to periods of demand. When insulin remains elevated for long
            periods, the body is effectively locked into a storage and defense
            posture. This state can persist even in the absence of obvious
            disease markers, shaping fatigue, inflammation, and resilience in
            subtle but cumulative ways.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            Chronic stress interacts with insulin regulation by extending
            physiological activation beyond its original purpose. While acute
            stress responses evolved to be brief and situational, modern stress
            often lacks a clear endpoint. Social pressure, economic insecurity,
            constant alertness, and disrupted rest patterns keep regulatory
            systems engaged long after the immediate stimulus has passed. Over
            time, this alters baseline metabolism rather than producing a
            single, discrete illness.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            This guide explores health not as a collection of diagnoses, but as
            a set of patterns unfolding across biological, psychological, and
            social systems. The questions below examine why certain measurements
            remain invisible, why prevention struggles to gain attention, and
            why improvements in treatment do not always translate into reduced
            suffering. The aim is to clarify what is already happening, not to
            propose solutions.
          </p>
        </section>

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

        {/* When treatment does not resolve patterns */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            When treatment does not resolve patterns
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <Link
              href={failureQuestion.href}
              className="block text-base font-semibold text-neutral-900 hover:underline"
            >
              {failureQuestion.title}
            </Link>
            <p className="mt-2 text-sm text-neutral-700">
              Examining why addressing physical symptoms alone often leaves
              underlying patterns of stress and strain unresolved.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            About This Research
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust provides open educational resources on stress, insulin, and
            the patterns that shape human health. This material is for
            informational purposes only.
          </p>
        </section>
      </section>
    </main>
  );
}
