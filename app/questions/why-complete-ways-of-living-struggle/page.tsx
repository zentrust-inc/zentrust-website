// app/questions/why-complete-ways-of-living-struggle/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why do complete ways of living struggle inside a world built for fragments?",
  description:
    "An ELI15 explanation of why whole, coherent ways of living struggle inside systems designed to fund, measure, and manage parts.",
  other: {
    category: "Schools & Systems",
  },
};

export default function CompleteWaysQuestionPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO ================= */}
      <GlobalHero
        mode="answer"
        headline="Why do complete ways of living struggle inside a world built for fragments?"
        dek={
          <>
            <p>
              Because modern systems are designed to support pieces, while living
              well only works when everything is connected.
            </p>
            <p>
              What feels natural to the body often does not fit easily into
              institutions built around parts.
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              The detailed answer is unfolded below, one layer at a time.
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
            title="What does a “complete way of living” actually mean?"
            answer="It means life is supported as a whole, not in isolated pieces."
          >
            <p>A complete way of living does not separate:</p>
            <ul className="list-disc pl-5">
              <li>health from environment,</li>
              <li>food from land,</li>
              <li>work from meaning,</li>
              <li>rest from belonging.</li>
            </ul>
            <p>
              These things work together naturally in lived experience, even if
              systems treat them as unrelated.
            </p>
          </Details>

          <Details
            title="Why do fragments feel easier to support?"
            answer="Because parts are simpler to measure, fund, and control."
          >
            <p>It is easier to fund a clinic than an environment.</p>
            <p>It is easier to support food programs than food systems.</p>
            <p>It is easier to build houses than to build communities.</p>
            <p>
              Fragments fit neatly into budgets and metrics. Wholeness shows up
              as relationships, time, and coordination — things that resist
              simple measurement.
            </p>
          </Details>

          <Details
            title="A simple picture: caring for the body in pieces"
            answer="Health never appears one organ at a time."
          >
            <p>
              Imagine caring for your heart this year, your lungs next year, and
              your nervous system only when something breaks.
            </p>
            <p>Each part matters.</p>
            <p>
              But health does not emerge from parts treated in isolation.
            </p>
            <p className="font-medium">
              It emerges when everything works together.
            </p>
          </Details>

          <Details
            title="Why do partial solutions keep repeating the same problems?"
            answer="Because the conditions that create the problem remain unchanged."
          >
            <p>Better medicine cannot replace belonging.</p>
            <p>Better jobs cannot heal chronic stress.</p>
            <p>
              Better food cannot work if land and water are depleted.
            </p>
            <p className="font-medium">
              Fragments can reduce symptoms. Environments change direction.
            </p>
          </Details>

          <Details
            title="Why does wholeness often look slow or impractical?"
            answer="Because living systems do not stabilize one piece at a time."
          >
            <p>
              A forest does not grow by adding trees first, soil later, and water
              later still.
            </p>
            <p>Everything must exist together, or nothing holds.</p>
            <p>
              From the outside this can look inefficient. From the inside it is
              the only way life sustains itself.
            </p>
          </Details>

          <Details
            title="Why does ZenTrust seem quiet or under-resourced by comparison?"
            answer="Because it is oriented toward coherence, not isolated outcomes."
          >
            <p>
              It is faster to launch programs than to host living environments.
            </p>
            <p>
              It is faster to show metrics than to allow stability to emerge.
            </p>
            <p className="font-medium">
              ZenTrust moves carefully to avoid fragmenting systems that must
              remain whole to be honest.
            </p>
          </Details>

          <Details
            title="Orientation"
            answer="Understanding clarifies why wholeness feels difficult to support."
          >
            <p>
              Complete ways of living struggle not because they are unrealistic,
              but because they do not fit easily inside systems built for parts.
            </p>
            <p className="font-medium">
              Noticing this softens confusion without requiring belief,
              agreement, or action.
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

/* ================= DETAILS COMPONENT ================= */

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
