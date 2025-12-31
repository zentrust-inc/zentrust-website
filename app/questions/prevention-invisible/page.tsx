// app/questions/prevention-invisible/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why does prevention feel invisible compared to treatment?",
  description:
    "It resolves why prevention struggles to feel real: its success is an absence, hard to attribute, and rarely rewarded by stories or systems.",
  other: {
    category: "Health & Suffering",
  },
};

function AccordionItem({
  title,
  answer,
  children,
}: {
  title: string;
  answer: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition dark:border-neutral-800 dark:bg-neutral-950">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {answer}
          </p>
        </div>

        <span className="mt-1 select-none text-neutral-400 transition group-open:rotate-45 dark:text-neutral-500">
          +
        </span>
      </summary>

      <div className="prose prose-neutral mt-4 max-w-none text-neutral-900 dark:prose-invert dark:text-neutral-50">
        {children}
      </div>
    </details>
  );
}

export default function PreventionInvisiblePage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO (DO NOT TOUCH) ================= */}
      <GlobalHero
        headline={`Why does prevention feel invisible
compared to treatment?`}
        dek={
          <>
            <p>
              Treatment creates a visible event: a clear problem, a clear
              intervention, and a noticeable change.
            </p>
            <p>
              Prevention works by making the event never arrive — and the mind
              struggles to feel the value of what did not happen.
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              Detailed answer below. Nothing here requires agreement.
            </p>
          </>
        }
      />

      {/* ================= CONTENT ================= */}
      <section
        id={contentId}
        className="mx-auto w-full max-w-[820px] px-4 pb-16 pt-10 sm:px-6"
      >
        <div className="space-y-4">
          <AccordionItem
            title="Why does prevention feel like “nothing,” even when it works?"
            answer="Because its success is an absence: the crisis doesn’t show up, so there is no moment to notice."
          >
            <p>
              Imagine two nights in the same house.
            </p>
            <p>
              One night, a fire breaks out. Sirens arrive. People run. A dramatic
              rescue happens. Everyone can point to the event and say, “That was
              the problem — and that was the response.”
            </p>
            <p>
              Another night, the smoke alarm battery was replaced earlier in the
              year, and the wiring was kept safe. Nothing happens. No sirens.
              No story. No moment where the mind gets to feel, “We survived
              because of that.”
            </p>
            <p>
              Prevention often looks exactly like a normal day. And normal days
              rarely feel like achievements.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why does treatment feel more emotionally compelling?"
            answer="Because it offers urgency, relief, and a clean before/after that the brain can register."
          >
            <p>
              The human nervous system is tuned to immediate signals.
              Visible threat produces urgency. Urgency produces focus.
            </p>
            <p>
              Treatment sits inside that loop: pain → intervention → relief.
              Even when the situation is complex, the mind receives a simple,
              satisfying pattern.
            </p>
            <p>
              Prevention asks for something different: present effort in exchange
              for a future that stays quiet. Quiet does not trigger the same
              emotional circuitry.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why is prevention so hard to “prove” in a single life?"
            answer="Because you can’t directly attribute a non-event to one cause, even if the pattern is real at scale."
          >
            <p>
              If a person receives treatment and improves, the connection feels
              direct: something happened, then something changed.
            </p>
            <p>
              With prevention, the outcome is the absence of a moment you can
              point to. The heart attack that never occurred cannot be replayed
              as evidence. The infection that never arrived cannot be compared
              against an alternate timeline.
            </p>
            <p>
              Prevention can be statistically strong and personally unverifiable
              at the same time — not because it is weak, but because the human
              mind was not built to celebrate counterfactuals.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why do systems measure treatment more easily than prevention?"
            answer="Because systems count events, bills, and procedures — not the disasters that never formed."
          >
            <p>
              Treatment produces records: visits, diagnoses, prescriptions,
              surgeries, hospital stays. Those are countable units.
            </p>
            <p>
              Prevention produces fewer visible units precisely when it succeeds.
              It reduces the number of dramatic lines in the ledger.
            </p>
            <p>
              So the system ends up “seeing” the presence of illness more
              clearly than the presence of health — even when health is the
              actual achievement.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why do incentives often lean toward treatment?"
            answer="Because urgency concentrates attention now, while prevention spreads benefits across time and many people."
          >
            <p>
              Treatment rewards are immediate and attributable: a patient arrives
              in crisis, a response is delivered, a visible outcome follows.
            </p>
            <p>
              Prevention’s benefits are distributed: small risk reductions across
              many people, over long time horizons. The people who invest are not
              always the same people who later benefit.
            </p>
            <p>
              This mismatch can make prevention look weak in the short term,
              even when it is powerful in the long term.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why does preventive guidance sometimes feel confusing or unstable?"
            answer="Because prevention deals in probabilities and evolving evidence, not a single obvious enemy."
          >
            <p>
              Treatment often targets a visible problem: a fracture, an
              infection, an acute episode.
            </p>
            <p>
              Prevention often targets risk landscapes: patterns that shift as
              research improves and populations change. That can look like
              inconsistency, even when the deeper aim is the same: fewer crises.
            </p>
            <p>
              When the mind expects certainty, probability can feel like
              unreliability — even when it is the most honest frame available.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why does ZenTrust seem fragile, slow, or ineffective by comparison?"
            answer="Because it often invests in conditions that prevent harm, and prevention rarely produces dramatic proof on demand."
          >
            <p>
              ZenTrust can appear “less effective” when compared to visible
              rescues, because it often works upstream: building understanding,
              research access, and public education that reduces confusion before
              it becomes crisis.
            </p>
            <p>
              In a culture trained to recognize sirens, quiet work can look like
              inaction. In a world that rewards measurable events, the most
              valuable outcomes can be the ones that leave the least visible
              trace.
            </p>
            <p>
              This is an appearance problem — not necessarily a value problem.
            </p>
          </AccordionItem>
        </div>

        {/* ================= ENDING BLOCK (REQUIRED) ================= */}
        <div className="mx-auto mt-10 max-w-[720px]">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              A rescue is easy to point to.
            </p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              A prevented crisis leaves no photograph.
            </p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              The quiet day may be the real outcome.
            </p>

            <div className="mt-4 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
              ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
