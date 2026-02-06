// app/learn/regenerative-agriculture/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Regenerative Agriculture: Patterns in Soil Health | ZenTrust",
  description:
    "An educational guide exploring patterns in regenerative agriculture focused on soil health, biodiversity, and ecological stability.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const coreQuestions: FeaturedQuestion[] = [
  {
    title: "What patterns emerge when land benefit is examined?",
    href: "/questions/land-benefit-existence",
    kicker: "Start here",
  },
  {
    title: "Why do extraction patterns persist in soil management?",
    href: "/questions/extracting-from-soil",
  },
  {
    title: "What distinguishes natural environments from human-designed ones?",
    href: "/questions/natural-vs-designed-environments",
  },
];

const failureQuestion: FeaturedQuestion = {
  title: "Why does land repair often fail despite increased investment?",
  href: "/questions/syntropic-ecology",
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
          Regenerative Agriculture
        </h1>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          This page documents patterns in regenerative agriculture approaches,
          examining how soil health, biodiversity, and ecological stability
          relate to different land management methods.
        </p>
      </header>

      {/* Guide */}
      <section id="guide" className="mt-12 space-y-12">
        {/* Principles */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            The Principles of Regenerative Agriculture
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            Regenerative agriculture represents a fundamental shift from
            extracting value from land toward working with biological systems
            as they already function. Rather than treating soil as an inert
            growing medium, regenerative approaches recognize it as a living
            system composed of microorganisms, roots, fungi, insects, water,
            and mineral cycles interacting continuously over time. Soil health,
            in this context, is not a single metric but an emergent property of
            these relationships.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            At the center of regenerative practice is the restoration of soil
            organic matter and biodiversity. As biological activity increases,
            soils tend to retain more water, cycle nutrients more efficiently,
            and stabilize against erosion. Carbon drawn from the atmosphere
            becomes stored in soil structures, not as a climate solution in
            isolation, but as a byproduct of healthier ecosystem function.
            Unlike conventional conservation methods that focus on minimizing
            damage, regenerative systems aim to improve ecological conditions
            over time.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            Research within regenerative agriculture often examines how
            different land management strategies influence system behavior.
            Practices such as reduced disturbance, diversified plant
            communities, managed grazing, and syntropic design alter feedback
            loops between plants, microbes, animals, and water. These changes
            can increase resilience to drought, reduce dependency on external
            inputs, and support long-term productivity without relying on
            continuous extraction.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            This guide serves as an entry point into ZenTrust’s documentation of
            these patterns. Rather than promoting techniques or prescriptions,
            the material explores why certain restoration efforts succeed or
            fail depending on system design. By observing how natural
            environments differ from human-designed ones, the questions below
            examine what happens when land management aligns with ecological
            processes instead of working against them.
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

        {/* Failure mode */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            When regeneration fails
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <Link
              href={failureQuestion.href}
              className="block text-base font-semibold text-neutral-900 hover:underline"
            >
              {failureQuestion.title}
            </Link>
            <p className="mt-2 text-sm text-neutral-700">
              Exploring why funding, technology, and effort alone often fail to
              restore land when design principles and ecological feedback are not
              considered.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            About This Research
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust provides open educational resources on land stewardship
            and ecological systems. This material is for informational purposes
            only.
          </p>
        </section>
      </section>
    </main>
  );
}
