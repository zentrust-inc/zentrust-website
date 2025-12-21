"use client";

import Link from "next/link";
import { RitualPause } from "./RitualPause";
import type { HeroConfig } from "./createHero";

type Props = {
  hero: HeroConfig;
};

export default function HeroShell({ hero }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background media (image / video handled elsewhere) */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-[70vh] flex-col justify-center py-10 sm:py-16">
          {/* Title */}
          {hero.title && (
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {hero.title}
            </h1>
          )}

          {/* Description */}
          {hero.description && (
            <p className="mt-4 max-w-2xl text-base text-foreground/80">
              {hero.description}
            </p>
          )}

          {/* CTA + Ritual */}
          {(hero.cta || hero.ritual) && (
            <div className="pt-6">
              {hero.cta && (
                <Link
                  href={hero.cta.href}
                  className="inline-block rounded-xl bg-primary px-6 py-3 text-primary-foreground"
                >
                  {hero.cta.label}
                </Link>
              )}

              {/* IMPORTANT:
                  Ritual affordance is BELOW CTA
                  with generous spacing to prevent accidental taps */}
              {hero.ritual && (
                <div className="mt-8">
                  <RitualPause {...hero.ritual} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
