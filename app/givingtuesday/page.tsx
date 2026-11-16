// app/givingtuesday/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { FilmCard } from "@/components/film/FilmCard";
import { InlineSignup } from "@/components/newsletter/InlineSignup";

export const metadata: Metadata = {
  title: "What Is GivingTuesday? 1 December 2026 | ZenTrust",
  description:
    "GivingTuesday is a global day of giving on the Tuesday after US Thanksgiving: 1 December 2026. How it works, how to check a charity, and our Nepal project.",
  alternates: { canonical: "/givingtuesday" },
};

const DONATE = (amount: number) => `/stewardship/checkout?program=nepal&amount=${amount}`;
const AMOUNTS = [25, 50, 100, 250];

export default function GivingTuesdayPage() {
  return (
    <main className="bg-[#faf7f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">What is GivingTuesday?</h1>
        <p className="mt-4 text-lg leading-8 text-neutral-800 dark:text-neutral-200">
          GivingTuesday is a global day of generosity held every year on the Tuesday after US
          Thanksgiving. In 2026 it falls on <strong>Tuesday, 1 December</strong>. After Black Friday and
          Cyber Monday, it invites people to give money, time or skills to causes they care about.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Where it came from</h2>
          <p className="mt-3 text-base leading-7 text-neutral-800 dark:text-neutral-200">
            GivingTuesday began in 2012 in New York, created by the 92nd Street Y and the United Nations
            Foundation. It has since grown into an independent movement with campaigns in many countries.
            Anyone can take part: there is no central fund, and each charity runs its own appeal.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">How to check a charity before you give</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-neutral-800 dark:text-neutral-200">
            <li>
              Confirm its tax-exempt status with the IRS Tax Exempt Organization Search, using the
              charity&apos;s name or EIN.
            </li>
            <li>
              Read its annual filings (Form 990 or 990-N) on Candid or ProPublica&apos;s Nonprofit
              Explorer. Very new charities may not have many filings yet.
            </li>
            <li>Look for a plain description of what a gift will fund, and whether the work is planned or already under way.</li>
            <li>Give through the charity&apos;s own website rather than links in unexpected messages.</li>
            <li>
              In the US, gifts to 501(c)(3) charities may be tax-deductible depending on your situation.
              A tax advisor can tell you how this applies to you.
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
          <h2 className="text-xl font-semibold">Our GivingTuesday appeal: bring the water back to Chauthe</h2>
          <p className="mt-3 text-base leading-7 text-neutral-800 dark:text-neutral-200">
            ZenTrust is a US 501(c)(3) planning a layered native food forest on 150 hectares of
            pine-covered hillside above Kakani, Nepal, with the Thumki Danda Gairikharka Community Forest
            User Group. The goal is for monsoon rain to soak in so springs can recover.
          </p>
          <p className="mt-3 text-base leading-7 text-neutral-800 dark:text-neutral-200">
            Our Year-1 goal is $100,000 for the water work and a community nursery: contour trenches,
            small check dams and recharge ponds, protection of spring sources, and raising native and
            fruit trees.
          </p>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            The program is in its planning and setup stage; work on the hillside has not started. We
            will report what we do and what we measure. Program preferences are honored wherever
            possible; final use of funds is at the discretion of ZenTrust&apos;s board in furtherance of
            our charitable purposes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {AMOUNTS.map((a) => (
              <Link
                key={a}
                href={DONATE(a)}
                className="rounded-lg bg-emerald-700 px-5 py-2.5 text-base font-semibold text-white hover:bg-emerald-800"
              >
                Give ${a}
              </Link>
            ))}
            <Link
              href="/nepal"
              className="rounded-lg border border-emerald-700 px-5 py-2.5 text-base font-medium text-emerald-800 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-900"
            >
              See the full plan
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Before you give, you can read our filings on the{" "}
            <Link href="/financials" className="underline">financial transparency page</Link>.
          </p>
        </section>

        <FilmCard
          source="page:givingtuesday"
          heading="See the hillside in 75 seconds"
          text="Real drone footage of the Chauthe site, May 2026. The plan scenes are illustrations; work has not started yet."
        />

        <InlineSignup
          source="page:givingtuesday"
          heading="Not ready to give? Follow the work"
          body="Field notes from the hillside in Chauthe, Nepal, a few times a year. Unsubscribe anytime."
        />
      </div>
    </main>
  );
}
