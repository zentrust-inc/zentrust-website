// app/guides/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { InlineSignup } from "@/components/newsletter/InlineSignup";
import { GUIDES } from "./_lib/guides";

export const metadata: Metadata = {
  title: "Land and Water Guides: Food Forests, Soil and Springs | ZenTrust",
  description:
    "Plain-language guides to food forests, syntropic agriculture, erosion control, contour trenches, recharge ponds and drying springs, from ZenTrust.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndex() {
  return (
    <main className="bg-[#faf7f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
          Land and water guides
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
          Short, practical answers about growing forests that hold water: food forests, soil, erosion
          and springs. Each guide ends with how ZenTrust plans to use the idea on a hillside above
          Kakani, Nepal.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block h-full rounded-xl border border-neutral-200 bg-white p-4 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className="block font-semibold hover:underline">{g.title}</span>
                <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">
                  {g.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <InlineSignup
          source="guides-index"
          heading="Get field notes from the hillside"
          body="Practical guides and honest updates from our food forest and water work in Chauthe, Nepal. A few emails a year."
        />
      </div>
    </main>
  );
}
