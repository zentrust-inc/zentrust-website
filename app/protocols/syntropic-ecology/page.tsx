'use client';

import Link from "next/link";
import QuietMirrorHeroMedia from "@/components/hero/QuietMirrorHeroMedia";

export default function SyntropicEcologyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* HERO — QUIET MIRROR */}
      <section className="relative">
        <QuietMirrorHeroMedia pauseVideoSrc="/video/mobile-syntropy-v1-quiet-mirror.mp4">
          <div className="mx-auto flex h-full max-w-6xl px-4 sm:px-6">
            <div className="flex flex-1 items-center">
              <div className="max-w-3xl">
                {/* Quiet Mirror title */}
                <div className="mb-4">
                  <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-neutral-900 backdrop-blur dark:bg-black/50 dark:text-neutral-50">
                    There Is Order Beneath the Disorder.
                  </div>
                </div>

                <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  We Don’t Plant Trees. We Restore the Code that Lets Forests Return.
                </h1>

                <p className="mt-4 text-base leading-relaxed sm:text-lg">
                  The world needs a protocol for regeneration, not another symptom-treating charity. This is the
                  Syntropic Ecology engine—the open-source foundation of a living civilization.
                </p>

                <p className="mt-4 text-sm sm:text-base">
                  If you’d like to continue, the map is below.
                </p>
              </div>
            </div>
          </div>
        </QuietMirrorHeroMedia>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Floodlight TL;DR Matrix */}
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            The Shift from Transactional Pity to Systemic Power.
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
            The traditional charity model fails because it treats the symptom in isolation. We understand that the soil
            is not just dirt—it is the original source code for all wealth, health, and spirit.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
            The Syntropic Protocol restores the deep, reciprocal relationship between life and land, transforming
            degraded acres into bio-diverse, self-financing ecosystems. This is the new flow:
          </p>

          <div className="mt-6 space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="flex gap-3">
              <div className="shrink-0">🌱</div>
              <p className="leading-relaxed">
                <span className="font-medium">Healed Soil</span> creates nutrient-dense food that fuels{" "}
                <span className="font-medium">BPSS Wellness</span> (The Human).
              </p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0">💰</div>
              <p className="leading-relaxed">
                <span className="font-medium">Generative Systems</span> eliminate external inputs, converting a
                charitable cost into a <span className="font-medium">Community Wealth</span> asset.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0">🧘</div>
              <p className="leading-relaxed">
                <span className="font-medium">Reciprocity with Life</span> re-establishes a sense of place and purpose,
                grounding the human spirit in the natural world.
              </p>
            </div>
          </div>
        </div>

        {/* Depth accordion */}
        <div className="mt-10 max-w-3xl">
          <details className="group rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  The Syntropic Protocol: Beyond Sustainability, Towards Abundance.
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  View the mechanism (no hype, no urgency).
                </p>
              </div>
              <span className="rounded-full border px-3 py-1 text-xs">Expand</span>
            </summary>

            <div className="mt-5 space-y-4">
              <p>
                Syntropy is the organizing force of life that accumulates energy and structure. Our protocol mimics how
                a natural forest heals itself.
              </p>

              <p>This is an investment in nature&apos;s compounding return:</p>

              <div className="space-y-3">
                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/40">
                  <p className="font-medium">Accumulate Energy</p>
                  <p className="mt-1">
                    High-density, multi-strata planting rapidly builds organic matter on-site.
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/40">
                  <p className="font-medium">Build Resilience</p>
                  <p className="mt-1">
                    Hyper-diverse ecosystems resist disease, pests, and climate shocks.
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/40">
                  <p className="font-medium">Generate Viability (PRI Model)</p>
                  <p className="mt-1">
                    Regeneration becomes a permanent, self-financing asset.
                  </p>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                    All revenue is reinvested exclusively into charitable purposes.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Choice-based continuation */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            Your Role in the New Ocean.
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/stewardship" className="rounded-2xl border p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
              Be a Steward →
            </Link>
            <Link href="/investor/pri" className="rounded-2xl border p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
              Invest in the Protocol →
            </Link>
          </div>
        </div>

        {/* TRUST */}
        <footer className="mt-14 border-t pt-6 text-sm text-neutral-600 dark:text-neutral-400">
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </footer>
      </section>
    </main>
  );
}
