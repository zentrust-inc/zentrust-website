// app/questions/why-adapting-to-society-feels-like-loss/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why does adapting to society feel like loss??",
  description:
    "An ELI15 explanation of why fitting in can quietly create a sense of loss, even when life appears successful.",
  other: {
    category: "Mind & Experience",
  },
};

export default function AdaptingLossQuestionPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO ================= */}
      <GlobalHero
        mode="answer"
        headline="Why does adapting to society feel like loss?"
        dek={
          <>
            <p>
              Because adaptation often requires narrowing parts of ourselves
              that don’t fit existing expectations.
            </p>
            <p>
              What helps us belong externally can quietly reduce internal
              wholeness.
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              The detailed answer unfolds below, one layer at a time.
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
            title="What does “adapting to society” usually mean?"
            answer="Learning how to fit into expectations that already exist."
          >
            <p>Learning what is rewarded.</p>
            <p>Learning what is tolerated.</p>
            <p>Learning what should stay hidden.</p>
            <p>
              Adaptation helps us function, earn, and belong — at least on the
              surface.
            </p>
          </Details>

          <Details
            title="Why can adaptation feel necessary?"
            answer="Because humans need safety, belonging, and stability."
          >
            <p>Belonging reduces risk.</p>
            <p>Predictability reduces fear.</p>
            <p>
              Adapting often begins as a way to survive, not a choice to
              diminish oneself.
            </p>
          </Details>

          <Details
            title="A simple picture: trimming a plant to fit a pot"
            answer="The plant survives, but growth is constrained."
          >
            <p>Imagine a healthy plant placed in a small pot.</p>
            <p>Its roots curl inward.</p>
            <p>Its growth slows.</p>
            <p>
              Nothing is wrong with the plant. The container is simply too
              tight.
            </p>
          </Details>

          <Details
            title="What is often lost during adaptation?"
            answer="Range, spontaneity, and inner permission."
          >
            <p>Curiosity narrows.</p>
            <p>Expression becomes selective.</p>
            <p>
              Parts of the self that do not serve immediate roles become quiet.
            </p>
            <p className="font-medium">
              The loss is subtle, not dramatic.
            </p>
          </Details>

          <Details
            title="Why does success not always prevent this feeling?"
            answer="Because success measures fit, not fullness."
          >
            <p>Success can confirm external alignment.</p>
            <p>It does not guarantee internal coherence.</p>
            <p>
              A life can look stable while still feeling reduced from the
              inside.
            </p>
          </Details>

          <Details
            title="Why do some people eventually step away?"
            answer="Because the cost of continued narrowing becomes too high."
          >
            <p>
              Over time, adaptation can turn into exhaustion or quiet grief.
            </p>
            <p>
              Leaving is often not rebellion, but relief from compression.
            </p>
          </Details>

          <Details
            title="Why does ZenTrust seem slow or misaligned with mainstream success?"
            answer="Because it does not organize itself around maximum adaptation."
          >
            <p>
              ZenTrust avoids structures that require people to shrink
              themselves to function.
            </p>
            <p>
              Inside systems that reward performance over wholeness, this can
              appear inefficient.
            </p>
          </Details>

          <Details
            title="Orientation"
            answer="Understanding clarifies why adaptation can quietly feel like loss."
          >
            <p>
              Adapting to society often involves trade-offs that are not named
              or measured.
            </p>
            <p className="font-medium">
              Noticing this reduces confusion without assigning blame.
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
