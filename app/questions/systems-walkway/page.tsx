// app/questions/systems-walkway/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why do people who understand society choose to leave it?",
  description:
    "A system-level explanation for why deep understanding can make participation feel optional rather than inevitable.",
  other: {
    category: "Schools & Systems",
  },
};

export default function SystemsWalkwayPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO (DO NOT TOUCH) ================= */}
      <GlobalHero
        mode="answer"
        headline={`Why do the people who understand society best
often choose to leave it?`}
        dek={
          <>
            <p>
              This question is often mistaken for cynicism, failure, or escape.
            </p>

            <p>
              But understanding how a system works can quietly change what
              participation means.
            </p>

            <p className="mt-4 italic">
              Sometimes the question shifts from:
            </p>

            <p className="mt-2 font-semibold">
              “How do I succeed inside this?”
            </p>

            <p className="mt-1 italic">to</p>

            <p className="mt-1 font-semibold">
              “What is this system actually asking of me?”
            </p>
          </>
        }
        belowAnchorId={contentId}
      />

      {/* ================= CONTENT ================= */}
      <section
        id={contentId}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="max-w-3xl space-y-4">
          <Details
            title="Why do people leave after they understand the system?"
            answer="Because they realize the system never asks where they are going — only whether they are still moving."
          >
            <p>Imagine a long airport corridor with a moving walkway.</p>
            <p>
              The floor hums softly beneath your feet. A steady mechanical sound
              that fades into the background.
            </p>
            <p>
              People step on automatically. Luggage rolls. Coffee spills are
              wiped without stopping.
            </p>
            <p>
              Overhead signs flash words like <em>Progress</em>,{" "}
              <em>Efficiency</em>, <em>Next Gate</em>.
            </p>
            <p>But no gate numbers ever appear.</p>
          </Details>

          <Details
            title="Why does the walkway feel helpful at first?"
            answer="Because it creates the sensation of progress without requiring a decision."
          >
            <p>You step on and feel forward motion immediately.</p>
            <p>
              Even standing still, you are carried. Movement happens without
              effort.
            </p>
            <p>Motion begins to feel like achievement.</p>
          </Details>

          <Details
            title="Why do capable people advance the fastest?"
            answer="Because they learn how to move smoothly without losing balance."
          >
            <p>They study the rhythm of the belt.</p>
            <p>They adjust their posture.</p>
            <p>They learn how to carry more without spilling.</p>
            <p>
              From the outside, this looks like success. From the inside, it
              feels like coordination.
            </p>
          </Details>

          <Details
            title="What do they eventually notice?"
            answer="They notice the scenery never changes."
          >
            <p>Same walls.</p>
            <p>Same lighting.</p>
            <p>Same low hum beneath the feet.</p>
            <p>Only the pace increases.</p>
          </Details>

          <Details
            title="Why doesn’t speed bring satisfaction?"
            answer="Because motion without arrival slowly drains meaning."
          >
            <p>The faster the belt moves, the harder it becomes to step aside.</p>
            <p>Balance replaces choice.</p>
            <p>Momentum replaces direction.</p>
          </Details>

          <Details
            title="Why does stepping off look like failure?"
            answer="Because the system measures worth by motion, not orientation."
          >
            <p>From the belt, stopping looks like falling behind.</p>
            <p>
              From the floor beside it, the noise drops away and the body steadies.
            </p>
          </Details>

          <Details
            title="Why does the system tolerate complaints but resist exits?"
            answer="Because dissatisfaction still moves forward, but absence does not."
          >
            <p>People can complain, struggle, even limp.</p>
            <p>As long as they remain on the belt, it continues.</p>
            <p>
              Stepping off reveals something quieter: participation was never
              mandatory.
            </p>
          </Details>

          <Details
            title="Why isn’t this burnout?"
            answer="Because burnout is collapse on the walkway, not clarity about it."
          >
            <p>Burnout feels like the body giving up.</p>
            <p>
              Understanding feels like noticing the floor was always there.
            </p>
          </Details>

          {/* ======== ZENTRUST SUB-QUESTION ======== */}
          <Details
            title="Why does ZenTrust appear slow or ineffective by conventional measures?"
            answer="Because it operates beside the walkway, not on it."
          >
            <p>It does not accelerate urgency.</p>
            <p>It does not reward constant motion.</p>
            <p>
              Movement happens only when direction is chosen, not assumed.
            </p>
          </Details>

          <Details
            title="One thought to leave with"
            answer="Some people don’t leave because they are tired."
          >
            <p>They leave because the noise finally stops.</p>
            <p>Nothing breaks.</p>
            <p className="font-medium">They step onto solid ground.</p>
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
      <div className="mt-5 space-y-3 text-sm leading-relaxed">
        {children}
      </div>
    </details>
  );
}
