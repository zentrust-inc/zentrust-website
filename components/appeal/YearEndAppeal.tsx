// components/appeal/YearEndAppeal.tsx
// Seasonal donate ask for content pages (questions, guides) that ad visitors land on.
//
// Two phases, by date (checked in the browser, so cached pages stay correct):
//   - until the end of GivingTuesday (1 Dec 2026, US Pacific): GivingTuesday wording
//   - 2–31 Dec 2026 (US Pacific): year-end wording
//   - from 1 Jan 2027: renders nothing
//
// Variants:
//   - "strip": one line near the top of the page
//   - "card":  fuller ask after the main content
//
// Each click sends a GA4 event `donate_click` with the page source and amount,
// so we can see which pages lead people to the checkout.

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GIVING_TUESDAY_ENDS = Date.parse("2026-12-02T08:00:00Z"); // midnight Pacific, 1→2 Dec
const YEAR_END_ENDS = Date.parse("2027-01-01T08:00:00Z"); // midnight Pacific, 31 Dec→1 Jan

type Phase = "givingtuesday" | "yearend" | null;

function currentPhase(now: number): Phase {
  if (now < GIVING_TUESDAY_ENDS) return "givingtuesday";
  if (now < YEAR_END_ENDS) return "yearend";
  return null;
}

const DONATE = (amount: number) => `/stewardship/checkout?program=nepal&amount=${amount}`;
const AMOUNTS = [25, 50, 100];

function track(source: string, amount: number | "plan") {
  try {
    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", "donate_click", { source, amount: String(amount) });
    }
  } catch {
    /* ignore */
  }
}

type YearEndAppealProps = {
  /** Page source, e.g. "question:imposter-syndrome" or "guide:cover-crops". */
  source: string;
  variant?: "strip" | "card";
};

export function YearEndAppeal({ source, variant = "card" }: YearEndAppealProps) {
  // Decide the phase after mount, so server and browser render the same HTML first.
  const [phase, setPhase] = useState<Phase>(null);
  useEffect(() => setPhase(currentPhase(Date.now())), []);
  if (!phase) return null;

  const src = `${source}:${variant}`.slice(0, 100);

  if (variant === "strip") {
    return (
      <p className="mx-auto my-6 max-w-3xl rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-neutral-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-neutral-200">
        <span className="font-semibold">
          {phase === "givingtuesday" ? "GivingTuesday is 1 December." : "Year-end giving closes 31 December."}
        </span>{" "}
        This page is free, published by a small US 501(c)(3) planning water work in Nepal.{" "}
        <Link
          href={DONATE(50)}
          onClick={() => track(src, 50)}
          className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900 dark:text-emerald-300"
        >
          Chip in
        </Link>
      </p>
    );
  }

  return (
    <aside
      aria-label={phase === "givingtuesday" ? "GivingTuesday appeal" : "Year-end appeal"}
      className="mx-auto my-10 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
        {phase === "givingtuesday" ? "GivingTuesday · 1 December" : "Year-end giving · until 31 December"}
      </p>
      <h2 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        If this page helped, help bring the water back to a hillside in Nepal
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
        This page is free to read. It is published by ZenTrust, a small US 501(c)(3) planning a native
        food forest on a dry, pine-covered hillside in Chauthe, Nepal. A gift helps fund the Year-1 water
        work: contour trenches, small check dams, recharge ponds and a community nursery.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {AMOUNTS.map((a) => (
          <Link
            key={a}
            href={DONATE(a)}
            onClick={() => track(src, a)}
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Give ${a}
          </Link>
        ))}
        <Link
          href="/nepal"
          onClick={() => track(src, "plan")}
          className="rounded-lg border border-emerald-700 px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-900"
        >
          See the plan first
        </Link>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
        The program is in its planning and setup stage; work on the hillside has not started. Program
        preferences are honored wherever possible; final use of funds is at the discretion of
        ZenTrust&apos;s board. Gifts may be tax-deductible depending on your situation.{" "}
        <Link href="/financials" className="underline">
          Our filings
        </Link>
        .
      </p>
    </aside>
  );
}
