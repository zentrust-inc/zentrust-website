// app/guides/_lib/GuidePage.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { InlineSignup } from "@/components/newsletter/InlineSignup";
import { GUIDES, getGuide } from "./guides";

export function guideMetadata(slug: string): Metadata {
  const g = getGuide(slug);
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { title: g.title, description: g.description, url: `/guides/${g.slug}` },
  };
}

export function GuidePage({ slug }: { slug: string }) {
  const g = getGuide(slug);
  const related = g.related
    .map((s) => GUIDES.find((x) => x.slug === s))
    .filter(Boolean) as typeof GUIDES;

  return (
    <main className="bg-[#faf7f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          <Link href="/guides" className="hover:underline">
            Land and water guides
          </Link>{" "}
          · ZenTrust · 501(c)(3)
        </p>

        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{g.title}</h1>

        <p className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5 text-base leading-7 text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          <span className="font-semibold">Short answer: </span>
          {g.shortAnswer}
        </p>

        {g.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} className="mt-3 text-base leading-7 text-neutral-800 dark:text-neutral-200">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-neutral-800 dark:text-neutral-200">
                {s.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
          <h2 className="text-lg font-semibold">How ZenTrust plans to use this in Nepal</h2>
          {g.inChauthe.map((p, i) => (
            <p key={i} className="mt-3 text-base leading-7 text-neutral-800 dark:text-neutral-200">
              {p}
            </p>
          ))}
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            The program is in its planning and setup stage. Plans are not a promise of results.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/nepal"
              className="rounded-lg border border-emerald-700 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-900"
            >
              See the Nepal project
            </Link>
            <Link
              href="/stewardship/checkout?program=nepal&amount=50"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
            >
              Support the water work
            </Link>
          </div>
        </section>

        <InlineSignup
          source={`guide:${g.slug}`}
          heading="Get field notes from the hillside"
          body="Practical guides and honest updates from our food forest and water work in Chauthe, Nepal. A few emails a year."
        />

        {related.length > 0 && (
          <nav aria-label="Related guides" className="mt-4">
            <h2 className="text-lg font-semibold">Related guides</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/guides/${r.slug}`}
                    className="block rounded-xl border border-neutral-200 bg-white p-4 font-medium hover:border-neutral-300 hover:underline dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <footer className="mt-14 border-t border-neutral-200 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          General educational information, not site-specific engineering advice. Earthworks on steep
          or unstable slopes need local technical guidance and any required permissions.
          <br />
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </footer>
      </article>
    </main>
  );
}
