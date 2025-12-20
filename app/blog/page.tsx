import Link from "next/link";
import { UniversalHero } from "@/components/hero/UniversalHero";
import { defaultHero, type HeroDefinition } from "@/components/hero/createHero";

/**
 * Blog index page.
 */
export default async function BlogPage() {
  const hero: HeroDefinition = {
    identity: "ZenTrust Journal",
    icon: "sprout",
    headlineLines: ["Insights from the regenerative frontier"],
    orientation: [
      "Research, field notes, and stories shaping ecological restoration and holistic human wellbeing.",
    ],
    ritual: defaultHero.ritual,
  };

  return (
    <main className="min-h-screen">
      <UniversalHero hero={hero} />

      <section className="mx-auto max-w-5xl px-4 py-12 space-y-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80">
          ZenTrust Journal
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Insights from the regenerative frontier
        </h1>

        <p className="max-w-xl text-sm text-foreground/80 dark:text-foreground/70">
          Research, field notes, and stories shaping ecological restoration
          and holistic human wellbeing.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog"
            className="rounded-2xl border p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900/40"
          >
            Articles will appear here as they are published.
          </Link>
        </div>
      </section>
    </main>
  );
}
