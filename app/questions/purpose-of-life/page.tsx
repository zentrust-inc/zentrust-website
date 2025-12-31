// app/questions/purpose-of-life/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why do humans keep searching for the purpose of life?",
  description:
    "An ELI15 explanation of why awareness of suffering and death keeps pulling the mind toward future meaning.",
  other: {
    category: "Meaning & Seeking",
  },
};

export default function MeaningSeekingQuestionPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO ================= */}
      <GlobalHero
        mode="confirm"
        headline={`Why do humans keep searching
for the purpose of life?`}
        dek={
          <>
            <p>
              Because awareness of suffering and death makes the mind reach for a
              story that promises lasting relief.
            </p>
            <p>
              The search is not about curiosity. It begins when life feels
              unfinished or exposed.
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
            title="What usually starts the search?"
            answer="The search often begins when distraction stops working."
          >
            <p>A routine breaks.</p>
            <p>A success feels thinner than expected.</p>
            <p>
              A quiet moment arrives where time, loss, or death becomes real.
            </p>
            <p>
              Nothing dramatic needs to happen. One honest pause is enough.
            </p>
            <p className="font-medium">The mind notices: this will end.</p>
          </Details>

          <Details
            title="Why does that realization feel so heavy?"
            answer="Because awareness reaches further than comfort."
          >
            <p>
              Humans can imagine futures they will never reach.
            </p>
            <p>
              They can picture endings they cannot avoid.
            </p>
            <p>
              This gap—between what is imagined and what is lived—creates
              pressure.
            </p>
            <p>
              The search for purpose begins as a way to carry that pressure.
            </p>
          </Details>

          <Details
            title="Why doesn’t success or happiness settle the question?"
            answer="Because they reduce strain temporarily, not permanently."
          >
            <p>A goal is reached.</p>
            <p>Relief appears.</p>
            <p>Then fades.</p>
            <p>
              The mind learns that movement works for a while, so it keeps
              moving.
            </p>
            <p className="font-medium">
              Not out of greed. Out of fatigue.
            </p>
          </Details>

          <Details
            title="Why does the idea of a final purpose feel comforting?"
            answer="Because it promises rest."
          >
            <p>
              A purpose suggests that suffering will make sense later.
            </p>
            <p>
              That death will be framed.
            </p>
            <p>
              That effort will be justified.
            </p>
            <p className="font-medium">
              It is not meaning that is wanted. It is the end of strain.
            </p>
          </Details>

          <Details
            title="What happens when strain softens?"
            answer="The question loosens on its own."
          >
            <p>
              When attention is fully in relationship, work, silence, or love,
              life does not ask to be explained.
            </p>
            <p>Nothing is solved.</p>
            <p>Nothing is concluded.</p>
            <p className="font-medium">
              The search simply stops pressing.
            </p>
          </Details>

          <Details
            title="What does this reveal about the search?"
            answer="It points to a mismatch between relief and resolution."
          >
            <p>The search is not a failure.</p>
            <p>It is a signal.</p>
            <p>It points to the difference between:</p>
            <ul className="list-disc pl-5">
              <li>wanting relief</li>
              <li>and expecting resolution</li>
            </ul>
            <p>
              Life offers moments of relief.
            </p>
            <p className="font-medium">
              The mind asks for guarantees.
            </p>
          </Details>

          <Details
            title="Orientation"
            answer="Understanding clarifies why the question keeps returning."
          >
            <p>
              The search for purpose is not accidental.
            </p>
            <p>
              It arises when awareness meets finitude.
            </p>
            <p>
              When that meeting becomes gentler, the search often quiets—without
              needing an answer.
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
