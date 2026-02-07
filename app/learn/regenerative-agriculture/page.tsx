// app/learn/regenerative-agriculture/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Ecological Systems Research: Regenerative Agriculture Patterns | ZenTrust",
  description:
    "Documentation of patterns in regenerative agriculture research focusing on soil health, biodiversity, and ecosystem stability.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const coreQuestions: FeaturedQuestion[] = [
  {
    title: "What patterns emerge when land benefit is documented?",
    href: "/questions/land-benefit-existence",
    kicker: "Research Focus",
  },
  {
    title: "Why do extraction patterns persist in soil management data?",
    href: "/questions/extracting-from-soil",
  },
  {
    title: "Documenting differences between natural and designed environments.",
    href: "/questions/natural-vs-designed-environments",
  },
];

const failureQuestion: FeaturedQuestion = {
  title: "Why does land repair documentation often show failure despite investment?",
  href: "/questions/syntropic-ecology",
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
          Regenerative Agriculture & Ecological Systems
        </h1>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          This page documents observed patterns in regenerative agriculture 
          approaches, examining literature on how soil health, biodiversity, 
          and ecological stability relate to varying land management methods.
        </p>
      </header>

      {/* Guide */}
      <section id="guide" className="mt-12 space-y-12">
        {/* Research Context */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Documenting Principles of Regenerative Systems
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            Regenerative agriculture research often documents a shift from 
            value extraction toward understanding biological systems. Rather 
            than treating soil as an inert medium, these approaches recognize 
            it as a living system where microorganisms, fungi, and mineral 
            cycles interact.
          </p>

          

          <p className="text-base leading-7 text-neutral-700">
            At the center of documented regenerative practice is the 
            observation of soil organic matter and biodiversity. Research 
            indicates that as biological activity increases, soils often 
            demonstrate higher water retention and efficient nutrient cycling. 
            This documentation explores these outcomes as byproducts of 
            integrated ecosystem function.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust examines how different land management strategies 
            influence system behavior. By reviewing data on reduced 
            disturbance, diversified plant communities, and managed grazing, 
            this research seeks to clarify the feedback loops that support 
            long-term ecological resilience.
          </p>

          <p className="text-base leading-7 text-neutral-700">
            This guide serves as an entry point into ZenTrust’s documentation 
            of these patterns. Rather than prescribing specific techniques, 
            the material explores why restoration efforts vary in their 
            documented success depending on system design and ecological alignment.
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

        {/* Documentation of Persistence */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            Observing Barriers to Land Regeneration
          </h2>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <Link
              href={failureQuestion.href}
              className="block text-base font-semibold text-neutral-900 hover:underline"
            >
              {failureQuestion.title}
            </Link>
            <p className="mt-2 text-sm text-neutral-700">
              Exploring documentation on why funding and technology often 
              show limited results in land restoration when ecological 
              feedback loops are not prioritized in the system design.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="space-y-3 border-t border-neutral-100 pt-8">
          <h2 className="text-xl font-semibold text-neutral-900">
            About This Research
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust is a 501(c)(3) organization providing open educational 
            resources on land stewardship and ecological systems. This research 
            is for informational purposes and documents published findings in 
            the field of regenerative agriculture.
          </p>
        </section>
      </section>
    </main>
  );
}
