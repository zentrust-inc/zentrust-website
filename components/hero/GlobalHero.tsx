"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { RitualPause } from "./RitualPause";

type GlobalHeroProps = {
  kicker?: string;
  headline: string;
  dek?: string;
  belowAnchorId?: string;
  mode?: "answer" | "confirm";
  showStewardshipCta?: boolean;
};

const DEFAULT_KICKER = "ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487";
const CTA = { label: "Enter the Stewardship Portal", href: "/stewardship" };

export function GlobalHero({
  kicker = DEFAULT_KICKER,
  headline,
  dek,
  belowAnchorId = "content",
  mode = "answer",
  showStewardshipCta = false,
}: GlobalHeroProps) {
  const isConfirm = mode === "confirm";

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="mx-auto flex min-h-[70vh] max-h-screen flex-col justify-center px-6 pb-14 pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 shadow-sm backdrop-blur sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            <span className="truncate">{kicker}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {headline}
            </h1>
            {dek ? (
              <p className="text-pretty text-base text-foreground/80 sm:text-lg">
                {dek}
              </p>
            ) : null}
            {isConfirm ? (
              <Link
                href={`#${belowAnchorId}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
              >
                Answer below ↓
              </Link>
            ) : null}
          </div>

          {showStewardshipCta ? (
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={CTA.href}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
                )}
              >
                {CTA.label}
              </Link>
            </div>
          ) : null}

          <div className="pt-2">
            <RitualPause />
          </div>
        </div>
      </div>
    </section>
  );
}
