// app/learn/regenerative-agriculture/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Regenerative Agriculture: An Educational Guide | ZenTrust",
  description:
    "An educational guide to regenerative agriculture focused on soil health, biodiversity, and long-term land stewardship. Explore core questions and common failure modes in land repair.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const featured: FeaturedQuestion[] = [
  {
    title: "Does the land benefit from your extraction?",
    href: "/questions/does-the-land-benefit-from-your-extraction",
    kicker: "Start here",
  },
  {
    title: "Why do we keep extracting from soil instead of working with it?",
    href: "/questions/why-do-we-keep-extracting-from-soil-instead-of-working-with-it",
  },
  {
    title: "Why do human-designed environments struggle to sustain life?",
    href: "/questions/why-do-human-designed-environments-struggle-to-sustain-life",
  },
];

const failureMode: FeaturedQuestion = {
  title: "Why does land repair keep failing even as investment increases?",
  href: "/questions/why-does-land-repair-keep-failing-even-as-investment-increases",
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
          Regenerative Agriculture: An Educational Guide
        </h1>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          Regenerative agriculture is an approach to land stewardship focused on
          restoring soil health, biodiversity, and long-term ecological
          resilience. It looks at how food systems, land use, and economic
          incentives affect the living systems that support them.
        </p>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          This guide provides nonprofit educational resources explaining
          regenerative principles, real-world challenges, and common points of
          failure, without promoting products or political positions.
        </p>

        <div className="pt-2">
          <a
            href="#guide"
            className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Explore the guide
          </a>
        </div>
      </header>

      {/* Guide content */}
      <section id="guide" className="mt-12 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            What regenerative agriculture addresses
          </h2>
          <p className="text-base leading-7 text-neutral-700">
            Modern agriculture has increased short-term yields while degrading
            soil structure, water retention, and ecosystem stability.
            Regenerative approaches aim to reverse these outcomes by working
            with biological processes rather than overriding them.
          </p>
          <p className="text-base leading-7 text-neutral-700">
            Key areas of focus include soil regeneration, nutrient cycling, water
            management, and the long-term viability of farming communities.
          </p>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-neutral-900">
              Core questions explored in this guide
            </h2>
            <p className="text-base leading-7 text-neutral-700">
              This guide introduces a small set of educational questions that
              examine regenerative agriculture from different angles. Each
              question focuses on a concrete tension observed in land use, not
              on ideology.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {featured.map((q) => (
              <li
                key={q.href}
                className="rounded-xl border border-neutral-200 bg-white p-4"
              >
                <div className="space-y-2">
                  {q.kicker ? (
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      {q.kicker}
                    </p>
                  ) : null}

                  <Link
                    href={q.href}
                    className="block text-base font-semi
