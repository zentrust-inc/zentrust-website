// app/questions/why-worst-people-seem-successful/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why do the worst people so often appear to be the most successful?",
  description:
    "An ELI15 explanation of why large systems can reward speed, dominance, and visibility over care, truth, and long-term stability.",
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
        mode="confirm"
        headline={`Why do the worst people so often
appear to be the most successful?`}
        dek={
          <>
            <p>
              Because many large modern systems reward speed, dominance, and
              visibility more than care, truth, or long-term stability.
            </p>
            <p>
              People adapted to those rewards can rise quickly, even while
              damaging the system itself.
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
            title="What does “successful” usually mean in large systems?"
            answer="It means matching what the system measures, not necessarily creating lasting value."
          >
            <p>
              Large systems rely on simple signals to function: growth, profit,
              attention, scale, rankings.
            </p>
            <p>These signals are easy to track, so they become targets.</p>
            <p>If a system measures speed, those who cut corners move faster.</p>
            <p>If it measures dominance, those who intimidate rise.</p>
            <p>If it measures visibility, those who exaggerate spread.</p>
            <p className="font-medium">
              The system is not asking, “Is this good?” It is asking, “Did the
              number move?”
            </p>
          </Details>

          <Details
            title="Why do lying, narcissism, and bullying fit these systems so well?"
            answer="Because they reduce friction and bypass feedback in the short term."
          >
            <p>Truth requires explanation.</p>
            <p>Care requires listening.</p>
            <p>Trust requires time.</p>
            <p className="mt-3">
              Manipulation skips explanation. Self-promotion captures attention.
              Intimidation suppresses resistance.
            </p>
            <p>
              In environments optimized for fast results, these behaviors appear
              efficient—even when they quietly create damage that won’t show up
              until much later.
            </p>
          </Details>

          <Details
            title="If these traits cause harm, why aren’t they corrected sooner?"
            answer="Because harm in large systems is delayed, distributed, and hard to trace."
          >
            <p>In small groups, harm is immediate and personal.</p>
            <p>
              In large systems, harm is spread across people, time, and distance.
            </p>
            <p>
              A decision can look successful while exhausting workers.
            </p>
            <p>
              A leader can look strong while eroding trust.
            </p>
            <p>
              An economy can grow while degrading land and health.
            </p>
            <p className="font-medium">
              By the time consequences become visible, the system often
              resets—or collapses—rather than correcting behavior.
            </p>
          </Details>

          <Details
            title="Where does this leave people who act with care and integrity?"
            answer="They often perform stabilizing work that doesn’t register as “success.”"
          >
            <ul className="list-disc pl-5">
              <li>prevent breakdowns,</li>
              <li>absorb conflict,</li>
              <li>maintain relationships,</li>
              <li>repair small failures before they spread.</li>
            </ul>
            <p>
              This work keeps systems functioning—but produces no dramatic
              signal.
            </p>
            <p className="font-medium">
              Support beams don’t attract attention. They are noticed only when
              they fail.
            </p>
          </Details>

          <Details
            title="Does this mean ethics are weak or outdated?"
            answer="No. Ethics operate on longer time scales than most systems measure."
          >
            <p>Extractive strategies look powerful early.</p>
            <p>Regenerative strategies look slow.</p>
            <p>
              But extraction depends on something to take from—people, trust,
              land, attention.
            </p>
            <p className="font-medium">
              When those are depleted, apparent strength collapses.
            </p>
            <p>
              What remains valuable are systems that did not consume their
              foundations.
            </p>
          </Details>

          <Details
            title="Why does something like ZenTrust seem fragile by comparison?"
            answer="Because it does not exploit the blind spots of extractive systems."
          >
            <ul className="list-disc pl-5">
              <li>domination,</li>
              <li>attention capture,</li>
              <li>personal enrichment,</li>
              <li>short-term performance metrics.</li>
            </ul>
            <p>It is structured for:</p>
            <ul className="list-disc pl-5">
              <li>transparency,</li>
              <li>non-extraction,</li>
              <li>public benefit,</li>
              <li>long-term stewardship.</li>
            </ul>
            <p className="font-medium">
              Inside extractive systems, this looks weak. When trust erodes, it
              becomes essential.
            </p>
          </Details>

          <Details
            title="Why does it keep feeling like “the worst people win”?"
            answer="Because visibility favors loud success and hides silent failure."
          >
            <p>Highly visible winners are rare—but memorable.</p>
            <p>Quiet collapses are common—but unseen.</p>
            <p>Failure does not trend.</p>
            <p>Repair does not go viral.</p>
            <p>
              Collapse often arrives after the spotlight has moved on.
            </p>
            <p className="font-medium">
              The mind mistakes visibility for frequency.
            </p>
          </Details>

          <Details
            title="What changes when systems begin to fail?"
            answer="The traits that once looked powerful stop working."
          >
            <ul className="list-disc pl-5">
              <li>intimidation creates resistance,</li>
              <li>manipulation loses effectiveness,</li>
              <li>spectacle stops persuading.</li>
            </ul>
            <p>What begins to matter are:</p>
            <ul className="list-disc pl-5">
              <li>reliability,</li>
              <li>openness,</li>
              <li>structures that do not depend on coercion.</li>
            </ul>
            <p className="font-medium">
              These qualities rarely win early. They tend to survive late.
            </p>
          </Details>

          <Details
            title="Orientation"
            answer="Understanding clarifies what kind of game is being observed."
          >
            <p>
              If harmful people appear to be thriving, it is often a sign that
              the system itself is rewarding the wrong signals.
            </p>
            <p>
              Understanding this does not tell you what to do.
            </p>
            <p>
              It simply clarifies what kind of game you are observing—and why
              its outcomes feel backward.
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
