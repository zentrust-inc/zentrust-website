"use client";

import { HeroShell } from "./HeroShell";
import { defaultHero, type HeroDefinition } from "./createHero";

export function UniversalHero({ hero }: { hero?: HeroDefinition }) {
  return <HeroShell hero={hero ?? defaultHero} />;
}
