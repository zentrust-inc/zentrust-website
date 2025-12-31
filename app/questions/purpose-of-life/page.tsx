// app/questions/purpose-of-life/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";
import { QuestionSection } from "@/components/questions/QuestionSection";

export const metadata: Metadata = {
  title: "Why do humans keep searching for the purpose of life?",
  description:
    "Explains why awareness of suffering and death can make the mind reach for a future story that promises lasting relief.",
  other: {
    category: "Meaning & Seeking",
  },
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[820px] px-4 pb-16 pt-10 sm:px-6 sm:pt-12">
      <GlobalHero
        mode="confirm"
        category="Meaning & Seeking"
        question="Why do humans keep searching for the purpose of life?"
        answer="Because awareness of suffering and death makes the mind reach for a story that promises lasting relief."
        confirmLine="The detailed answer is unfolded below, one layer at a time."
        showRitual={true}
      />

      <div className="mt-10 space-y-4">
        <QuestionSection
          title="What usually starts the search?"
          summary="The search often begins when life stops distracting us."
        >
          <p>
            A routine breaks. A success feels thinner than expected. A quiet
            moment arrives where death, loss, or time becomes real.
          </p>
          <p>
            Nothing dramatic needs to happen. Just one honest pause is enough.
          </p>
          <p>The mind notices: this will end.</p>
        </QuestionSection>

        <QuestionSection
          title="Why does that realization feel unbearable?"
          summary="Because awareness is wider than comfort."
        >
          <p>
            Humans can imagine futures they will never reach. They can picture
            endings they cannot avoid.
          </p>
          <p>
            This gap—between what is imagined and what is lived—creates pressure.
          </p>
          <p>The search for purpose begins as a way to hold that pressure.</p>
        </QuestionSection>

        <QuestionSection
          title="Why doesn’t achievement or happiness settle it?"
          summary="Because achievement and pleasure reduce discomfort temporarily, not permanently."
        >
          <p>A goal is reached. Relief appears. Then fades.</p>
          <p>
            The mind learns that movement works for a while. So it keeps moving.
          </p>
          <p>Not out of greed. Out of fatigue.</p>
        </QuestionSection>

        <QuestionSection
          title="Why does the idea of a “final answer” feel so tempting?"
          summary="Because a final answer promises rest."
        >
          <p>
            A purpose suggests that suffering will make sense later. That death
            will be framed. That effort will be justified.
          </p>
          <p>It is not the meaning that is wanted. It is the end of strain.</p>
        </QuestionSection>

        <QuestionSection
          title="What happens when strain softens?"
          summary="The question loosens on its own."
        >
          <p>
            When attention is fully in relationship, work, silence, or love, life
            does not ask to be explained.
          </p>
          <p>Nothing is solved. Nothing is concluded.</p>
          <p>The search simply stops pressing.</p>
        </QuestionSection>

        <QuestionSection
          title="What does this reveal?"
          summary="The search often points to a mismatch between relief and resolution."
        >
          <p>The search is not a failure. It is a signal.</p>
          <p>It points to the mismatch between:</p>
          <p className="pl-4">wanting relief</p>
          <p className="pl-4">and expecting resolution</p>
          <p>
            Life offers moments of relief. The mind asks for guarantees.
          </p>
        </QuestionSection>
      </div>

      <div className="mt-12 border-t border-neutral-200 pt-8 text-sm leading-6 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
        <p>
          The search for purpose is not a mistake. It can arise when awareness
          meets finitude. When that meeting becomes gentler, the search can quiet
          without needing a final answer.
        </p>
        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </p>
      </div>
    </main>
  );
}
