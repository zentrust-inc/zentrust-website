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
              restore land when design principles and ecological feedback are not considered.
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
            and ecological systems. This material is for informational purposes only.
          </p>
        </section>
      </section>
    </main>
  );
}
