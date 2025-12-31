// app/questions/why-worst-people-seem-successful/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why do the worst people so often appear to be the most successful?",
  description:
    "An ELI15, question-led exploration of why large systems can reward speed, dominance, and visibility over care, truth, and long-term stability.",
  other: {
    category: "Schools & Systems",
  },
};

export default function SchoolsSystemsQuestionPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO ================= */}
      <GlobalHero
        headline={`Why do the worst people so often
appear to be the most successful?`}
        dek={
          <>
            <p>
              In many places, the people who lie, dominate, and take credit seem
              to rise the fastest.
            </p>
            <p>
              Meanwhile, steady, decent people often look invisible — or
              exhausted.
            </p>

            <p className="mt-4">
              This isn’t always because “badness wins.”
            </p>
            <p>
              It’s often because large systems reward what they can measure
              easily: speed, dominance, and visibility.
            </p>

            <p className="mt-4 italic">
              What those systems reward — and why this can look like the world is
              upside down — is explained below.
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
          <Details
            title="What does “successful” usually mean in large systems?"
            answer="It often means matching what the system measures, not creating lasting value."
          >
            <p>
              In a small group, success is hard to fake. People see what you do.
            </p>
            <p>
              In a large system, success is often reduced to numbers: growth,
              profit, reach, rankings.
            </p>
            <p>
              Numbers are useful — but they are also easy to chase in ways that
              don’t help anyone for long.
            </p>
            <p className="font-medium">
              When “the number moved” becomes the main proof, appearance can
              beat substance.
            </p>
          </Details>

          <Details
            title="Why do lying, narcissism, and bullying fit these systems so well?"
            answer="Because they reduce friction and bypass feedback in the short term."
          >
            <p>Truth takes time. You have to explain it.</p>
            <p>Care takes time. You have to listen.</p>
            <p>Trust takes time. You have to earn it.</p>
            <p className="mt-3">
              Manipulation skips explanation. Self-promotion captures attention.
              Intimidation suppresses resistance.
            </p>
            <p className="font-medium">
              In fast, competitive environments, these moves can look like
              “strength.”
            </p>
          </Details>

          <Details
            title="If these traits cause harm, why aren’t they corrected sooner?"
            answer="Because harm in large systems is delayed, distributed, and hard to trace."
          >
            <p>
              Imagine a person who keeps stealing small amounts from thousands
              of people.
            </p>
            <p>
              No single person feels the full loss. No single moment screams
              “this is the cause.”
            </p>
            <p className="mt-3">
              Large systems spread consequences across time, distance, and
              complexity.
            </p>
            <p className="font-medium">
              By the time the damage becomes clear, the “winner” may already be
              rewarded — and gone.
            </p>
          </Details>

          <Details
            title="Where are the decent people in all of this?"
            answer="Often doing stabilizing work that doesn’t register as visible success."
          >
            <p>
              Many people spend their lives preventing small collapses:
              smoothing conflict, catching errors, supporting others, repairing
              what breaks.
            </p>
            <p>
              This work keeps the system running — but it rarely makes a big
              headline.
            </p>
            <p className="font-medium">
              Support beams don’t look impressive. They are noticed only when
              removed.
            </p>
          </Details>

          <Details
            title="Does this mean ethics are weak or outdated?"
            answer="No. Ethics operate on longer time scales than most systems measure."
          >
            <p>Extraction looks powerful early.</p>
            <p>Regeneration looks slow.</p>
            <p className="mt-3">
              But extraction depends on something to take from: trust, people,
              land, attention.
            </p>
            <p className="font-medium">
              When that foundation thins, the “power” that depended on it
              collapses.
            </p>
          </Details>

          <Details
            title="Why does it keep feeling like the worst people win?"
            answer="Because visibility favors loud success and hides silent failure."
          >
            <p>
              Loud success is memorable. Quiet failure is common — and unseen.
            </p>
            <p>
              Failure doesn’t trend. Repair doesn’t go viral. Collapse often
              arrives after the spotlight has moved on.
            </p>
            <p className="font-medium">
              The mind mistakes visibility for frequency.
            </p>
          </Details>

          <Details
            title="What changes when systems begin to fail?"
            answer="The traits that looked powerful stop working."
          >
            <p>
              When trust declines, intimidation creates resistance. Manipulation
              loses effectiveness. Spectacle stops persuading.
            </p>
            <p className="mt-3">
              What begins to matter are reliability, openness, and structures
              that don’t depend on coercion.
            </p>
            <p className="font-medium">
              These qualities rarely win early. They tend to survive late.
            </p>
          </Details>

          <Details
            title="So what is this question really pointing toward?"
            answer="That the “upside down” feeling is often the system’s scoreboard, not reality."
          >
            <p>
              If a scoreboard rewards speed and visibility, the fastest and
              loudest can look like the best.
            </p>
            <p>
              But “looking best on the scoreboard” is not the same as building
              something that lasts.
            </p>
            <p className="font-medium">
              The confusion eases when you realize you’re watching a system
              reward its own blind spots.
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
      <div className="mt-5 space-y-3 text-sm leading-relaxed">{children}</div>
    </details>
  );
}
