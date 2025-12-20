"use client";

import Link from "next/link";
import { resolveHeroIcon, type HeroDefinition } from "./createHero";
import { RitualPause } from "./RitualPause";

export function HeroShell({ hero }: { hero: HeroDefinition }) {
  const Icon = resolveHeroIcon(hero.icon);

  return (
    <section className="h-[100svh] flex items-center justify-center">
      <div className="max-w-3xl text-center px-6 space-y-5">
        {Icon && <Icon className="mx-auto h-10 w-10 text-foreground/70" />}

        <p className="text-xs tracking-[0.18em] uppercase text-foreground/70">
          {hero.identity}
        </p>

        {hero.headlineLines && (
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            {hero.headlineLines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h1>
        )}

        {hero.orientation?.map((o, i) => (
          <p key={i} className="text-foreground/80">
            {o}
          </p>
        ))}

        {hero.trustVerification && (
          <p className="text-xs text-foreground/60">
            {hero.trustVerification.text}{" "}
            {hero.trustVerification.link && (
              <a
                href={hero.trustVerification.link.href}
                className="underline"
              >
                {hero.trustVerification.link.label}
              </a>
            )}
          </p>
        )}

        {hero.cta && (
          <Link
            href={hero.cta.href}
            className="inline-block rounded-xl bg-primary px-6 py-3 text-primary-foreground"
          >
            {hero.cta.label}
          </Link>
        )}

        <RitualPause {...hero.ritual} />
      </div>
    </section>
  );
}
