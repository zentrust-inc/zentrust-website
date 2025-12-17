import type { Metadata } from "next";
import Link from "next/link";
import QuietMirrorHeroMedia from "@/components/hero/QuietMirrorHeroMedia";

export const metadata: Metadata = {
  title: "BPSS Health: A Whole-System Protocol for Healing",
  description:
    "BPSS Health: A whole-system health protocol that addresses biological, psychological, social, and meaning-based dimensions of healing—without blame or reductionism.",
};

export default function BPSSHealthPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* Quiet Mirror entry: ask nothing, safe to leave */}
      <section className="relative">
        <QuietMirrorHeroMedia
          mobileVideoSrc="/video/mobile-bpss-v1-quiet-mirror.mp4"
          heroImageSrc="/images/desktop-bpss-v1-quiet-mirror.jpg"
          heroImageAlt="Quiet Mirror: subtle human nervous system patterns emerging into coherence"
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 sm:px-6">
            {/* Quiet Mirror title */}
            <div className="pt-5 sm:pt-6">
              <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-neutral-900 backdrop-blur dark:bg-black/50 dark:text-neutral-50">
                The System Was Speaking the Whole Time.
              </div>
            </div>

            <div className="flex-1" />

            {/* Pivot copy */}
            <div className="pb-8 sm:pb-10">
              <div className="hero-text max-w-3xl">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  We Don’t Chase Symptoms. We Study the Systems Health Emerges From.
                </h1>
                <p className="mt-4 text-base leading-relaxed sm:text-lg">
                  Many treatments work. Yet many people still don’t feel whole. BPSS Health is a
                  whole-system protocol that explains why—without blame, rejection, or reduction.
                </p>

                {/* Gentle cue */}
                <p className="mt-4 text-sm sm:text-base">
                  If you’d like to continue, the map is below.
                </p>
              </div>
            </div>
          </div>
        </QuietMirrorHeroMedia>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Floodlight TL;DR */}
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            When Healing Feels Incomplete, the Frame May Be Too Small.
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
            Modern health systems excel at isolating problems. A symptom appears. A cause is
            identified. A treatment is applied. Often, this works.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
            But humans do not live in isolation. Health outcomes emerge from interacting biological,
            psychological, social, and meaning-based systems. When these layers are separated,
            unresolved suffering is often mistaken for failure.
          </p>

          <div className="mt-6 space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="flex gap-3">
              <div className="shrink-0">🧠</div>
              <p className="leading-relaxed text-neutral-900 dark:text-neutral-50">
                <span className="font-medium">Biological Signals</span> respond to treatment, but do
                not exist independently of stress, context, or meaning.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0">🤝</div>
              <p className="leading-relaxed text-neutral-900 dark:text-neutral-50">
                <span className="font-medium">Social Environments</span> shape safety, compliance,
                recovery, and long-term resilience.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0">🧭</div>
              <p className="leading-relaxed text-neutral-900 dark:text-neutral-50">
                <span className="font-medium">Meaning and Coherence</span> change how effort feels,
                how pain is carried, and how healing unfolds.
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
                  The BPSS Protocol: Completion Without Rejection.
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  View the lens (no hype, no urgency).
                </p>
              </div>
              <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                Expand
              </span>
            </summary>

            <div className="mt-5 space-y-4 text-neutral-800 dark:text-neutral-200">
              <p className="leading-relaxed">
                BPSS stands for Biological, Psychological, Social, and Spiritual—not as separate
                domains, but as interacting systems. The protocol does not replace medicine. It
                restores context to healing.
              </p>

              <p className="leading-relaxed">
                Just as soil science did not replace botany, whole-system health does not reject
                treatment. It explains why treatment alone sometimes isn’t enough.
              </p>

              <div className="space-y-3">
                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/40">
                  <p className="font-medium">Restore Interaction</p>
                  <p className="mt-1 leading-relaxed">
                    Health improves when biological care is aligned with psychological adaptation,
                    social safety, and lived meaning.
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/40">
                  <p className="font-medium">Reduce Internalized Blame</p>
                  <p className="mt-1 leading-relaxed">
                    When systems are framed correctly, unresolved outcomes become intelligible
                    rather than personal failures.
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/40">
                  <p className="font-medium">Enable Prevention</p>
                  <p className="mt-1 leading-relaxed">
                    Whole-system visibility reveals stress accumulation, environmental mismatch,
                    and meaning erosion before crisis occurs.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Choice-based continuation */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            Where This Lens Leads.
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-800 dark:text-neutral-200">
            BPSS Health is part of a larger regenerative system spanning land, communities, and
            human wellbeing.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/protocols/syntropic-ecology"
              className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900/40"
            >
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Related Protocol</div>
              <div className="mt-2 text-base font-semibold">
                See How Regeneration Begins with Land.
              </div>
              <div className="mt-4 text-sm text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                Continue →
              </div>
            </Link>

            <Link
              href="/governance"
              className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900/40"
            >
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Institutional Context</div>
              <div className="mt-2 text-base font-semibold">
                Learn How ZenTrust Operates as a Public Charity.
              </div>
              <div className="mt-4 text-sm text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                Continue →
              </div>
            </Link>
          </div>
        </div>

        {/* Mandatory Trust Footer */}
        <footer className="mt-14 border-t border-neutral-200 pt-6 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              ZenTrust, Inc. | EIN: <span className="font-medium">33-4318487</span> | IRS Status:{" "}
              <span className="font-medium">170(b)(1)(A)(vi)</span>
            </div>

            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/docs/irs-determination-letter" className="hover:underline underline-offset-4">
                IRS Determination Letter
              </Link>
              <Link href="/financials" className="hover:underline underline-offset-4">
                Financials
              </Link>
              <Link href="/governance" className="hover:underline underline-offset-4">
                Governance
              </Link>
              <Link href="/privacy" className="hover:underline underline-offset-4">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </footer>
      </section>
    </main>
  );
}
