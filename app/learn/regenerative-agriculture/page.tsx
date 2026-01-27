// app/learn/regenerative-agriculture/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Regenerative Agriculture: An Educational Guide | ZenTrust",
  description:
    "An educational guide to regenerative agriculture focused on soil health, biodiversity, and long-term land stewardship.",
};

type FeaturedQuestion = {
  title: string;
  href: string;
  kicker?: string;
};

const featured: FeaturedQuestion[] = [
  {
    title: "Why do we keep extracting from soil instead of working with it?",
    href: "/questions/extracting-from-soil",
    kicker: "Start here",
  },
  {
    title: "Why do human-designed environments struggle to sustain life?",
    href: "/questions/natural-vs-designed-environments",
  },
  {
    title: "Does the land benefit from your extraction?",
    href: "/questions/land-benefit-existence",
  },
];

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
          Regenerative agriculture focuses on restoring soil health,
          biodiversity, and long-term ecological stability by working with
          natural systems rather than extracting from them.
        </p>

        <p className="max-w-2xl text-base leading-7 text-neutral-700">
          This guide introduces the core ideas in clear, practical terms,
          without ideology or advocacy.
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
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            Core questions
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {featured.map((q) => (
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

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">
            Supporting public education
          </h2>

          <p className="text-base leading-7 text-neutral-700">
            ZenTrust provides open educational resources on land stewardship
            and long-term systems thinking. Support is optional.
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
