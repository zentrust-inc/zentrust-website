// app/questions/bpss-health/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why did things improve, but still not feel better?",
  description:
    "A whole-system explanation for why symptoms improve without healing — and why a Biopsychosocial-Spiritual approach is necessary.",
  other: {
    category: "Health & Suffering",
  },
};

export default function BPSSHealthPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO (DO NOT TOUCH) ================= */}
      <GlobalHero
        headline={`Why did things improve,
but still not feel better?`}
        dek={
          <>
            <p>Many people assume this means they failed.</p>
            <p>That assumption quietly causes harm.</p>

            <p>
              When health is treated in parts, improvement isn’t the same as
              healing.
            </p>

            <p className="mt-4 italic">
              Healing often begins when the question gently shifts from:
            </p>

            <p className="mt-2 font-semibold">“How do I manage this?”</p>

            <p className="mt-1 italic">to</p>

            <p className="mt-1 font-semibold">
              “Why is this still happening at all?”
            </p>
          </>
        }
        belowAnchorId={contentId}
        mode="confirm"
      />

      {/* ================= CONTENT ================= */}
      <section
        id={contentId}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="max-w-3xl space-y-4">
          {/* --- existing Details unchanged --- */}

          {/* (all your existing Details + SubDetails remain exactly as-is above) */}

          {/* ================= ZENTRUST SUB-QUESTION ================= */}
          <Details
            title="Why does ZenTrust seem slow or insufficient by comparison?"
            answer="Because ZenTrust is structured to address causes that do not produce quick, visible relief."
          >
            <p>
              ZenTrust does not focus on reducing symptoms as the primary signal
              of success.
            </p>
            <p>
              It works upstream — at the level of biological strain,
              psychological load, social conditions, and meaning.
            </p>
            <p>
              These changes unfold slowly and often without dramatic markers.
            </p>
            <p className="font-medium">
              Inside systems trained to measure improvement by numbers and speed,
              this can look ineffective — even when it is addressing the roof.
            </p>
          </Details>

          <Details
            title="One simple thought to leave with"
            answer="If the floor keeps getting wet, it’s time to look up."
          >
            <p>You were never failing.</p>
            <p>You were never ungrateful.</p>
            <p className="font-medium">
              Healing begins the moment the whole roof enters the frame.
            </p>
          </Details>
        </div>

        <footer className="mt-14 border-t pt-6 text-sm text-neutral-600 dark:text-neutral-400">
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </footer>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Details({
  title,
  answer,
  children,
}: {
  title: string;
  answer: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {answer}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
          Expand
        </span>
      </summary>
      <div className="mt-5 space-y-3 text-sm leading-relaxed">{children}</div>
    </details>
  );
}

function SubDetails({
  title,
  answer,
  children,
}: {
  title: string;
  answer: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group mb-6">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {answer}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
          Expand
        </span>
      </summary>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </details>
  );
}
