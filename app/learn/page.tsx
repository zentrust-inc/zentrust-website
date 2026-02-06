import Link from "next/link";
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";
import { HeartPulse, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Foundational learning spaces for health, suffering, and regenerative land systems.",
};

type LearnSection = {
  slug: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

const LEARN_SECTIONS: LearnSection[] = [
  {
    slug: "health-and-suffering",
    title: "Health & Suffering",
    description:
      "A clear look at health, illness, and suffering without diagnosis, instruction, or persuasion.",
    icon: <HeartPulse className="h-5 w-5" aria-hidden />,
  },
  {
    slug: "regenerative-agriculture",
    title: "Regenerative Agriculture",
    description:
      "Seeing land, soil, and ecosystems as living systems rather than production surfaces.",
    icon: <Leaf className="h-5 w-5" aria-hidden />,
  },
];

export default function LearnIndexPage() {
  const contentId = "learn-list";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <GlobalHero
        kicker="ZenTrust Learn"
        headline={`Learning spaces, not lessons.`}
        dek="Each space holds a coherent body of material meant to clarify how a system works, not what to believe or do."
        belowAnchorId={contentId}
        mode="confirm"
        ritual={{ enabled: false }}
      />

      <section
        id={contentId}
        className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-8 lg:px-10"
      >
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
            Learn
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose a learning space
          </h1>
          <p className="max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
            These sections organize longer-form material and structured
            explanations. They are not advice, paths, or calls to act.
          </p>
        </header>

        <div className="space-y-6">
          {LEARN_SECTIONS.map((section) => (
            <div
              key={section.slug}
              className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {section.icon}
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">
                    <Link
                      href={`/learn/${section.slug}`}
                      className="transition hover:text-primary"
                    >
                      {section.title}
                    </Link>
                  </h2>
                  <p className="max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
