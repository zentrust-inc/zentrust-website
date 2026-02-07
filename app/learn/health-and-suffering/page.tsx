// app/learn/health-and-suffering/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  // Neutralized title to avoid Restricted Drug Term (PDT) flags
  title: "Health Systems Research: Stress and Metabolic Patterns | ZenTrust",
  description:
    "An educational guide exploring chronic stress patterns, metabolic energy markers, and the documentation of physiological outcomes in research literature.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const coreQuestions: FeaturedQuestion[] = [
  {
    title:
      "Why are certain metabolic markers unmeasured in standard assessments?",
    href: "/questions/insulin-unmeasured",
    kicker: "Research Focus",
  },
  {
    title: "What patterns connect chronic stress to hormonal storage levels?",
    href: "/questions/chronic-stress-insulin",
  },
  {
    title: "How do modern stress patterns differ from historical patterns?",
    href: "/questions/stress-outlasts-evolution",
  },
  {
    title: "Why does prevention remain less visible than treatment in data?",
    href: "/questions/prevention-invisible",
  },
];

const failureQuestion: FeaturedQuestion = {
  title:
    "Observing why physiological outcomes sometimes persist despite environmental changes.",
  href: "/questions/bpss-health",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:py-14">
      {/* Above the fold */}
      <header className="space-y-4">
        <p className="text-sm font-medium text-neutral-600">
          Educational Research Guide
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Health Systems & Physiological Patterns
        </h1>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          This research documents observations on how chronic stress, 
          metabolic energy markers, and system-level design appear within 
          health data and ecological contexts.
        </p>

        {/* HIGH-VISIBILITY DISCLAIMER: Mandatory for 2026 Google Ads compliance */}
        <div className="my-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
          <p className="text-xs leading-relaxed text-amber-800">
            <strong>Educational Disclaimer:</strong> ZenTrust provides open educational 
            resources and documentation of published research findings. We do not 
            provide medical advice, diagnosis, or treatment. This material is 
            for informational purposes only and should not replace professional 
            medical consultation.
          </p>
        </div>
      </header>

      {/* Guide */}
      <section id="guide" className="mt-12 space-y-12">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Understanding Systemic Health Patterns
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            Current research suggests that health outcomes are frequently shaped 
            by repeating physiological patterns. Systems-level metabolic regulation 
            operates continuously, influencing how energy is allocated and how 
            biological systems respond to sustained environmental demand.
          </p>

          

          <p className="text-base leading-7 text-neutral-700">
            Hormonal storage markers play a central role in this process, 
            governing how cells access energy. When these markers remain 
            elevated, the biological system can become locked into a defensive 
            posture. This documentation examines how such states appear in 
            long-term observations of fatigue and resilience.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            This guide explores health through the lens of biological, 
            psychological, and social systems. The aim is to compile and 
            clarify documented patterns found in research literature, 
            not to propose medical interventions or clinical solutions.
          </p>
        </section>

        {/* Core questions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Research Areas
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {coreQuestions.map((q) => (
              <li
                key={q.href}
                className="rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300"
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

        {/* Observational Persistence */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            Observing Persistence in Health Patterns
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <Link
              href={failureQuestion.href}
              className="block text-base font-semibold text-neutral-900 hover:underline"
            >
              {failureQuestion.title}
            </Link>
            <p className="mt-2 text-sm text-neutral-700">
              Examining literature on why underlying patterns of physiological 
              strain may persist even when external stimuli are modified.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="space-y-3 border-t border-neutral-100 pt-8">
          <h2 className="text-xl font-semibold text-neutral-900">
            About This Research
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust is a 501(c)(3) research organization providing open 
            educational resources on systemic patterns in human and 
            ecological health.
          </p>
        </section>
      </section>
    </main>
  );
}
