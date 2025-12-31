// app/questions/monk-and-drug-addict/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why can a monk and a drug addict suffer in exactly the same way?",
  description:
    "An ELI15 explanation of how very different lives can still revolve around the same search for warmth, safety, and relief.",
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
        headline={`Why can a monk and a drug addict suffer
in exactly the same way?`}
        dek={
          <>
            <p>
              Because both can be reaching for a sense of warmth, safety, or
              holding that feels missing in the present moment.
            </p>
            <p>
              The methods may look opposite, but the pressure underneath can be
              the same.
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
            title="What usually makes these two lives seem opposite?"
            answer="One looks disciplined. The other looks out of control."
          >
            <p>A monk gives things up.</p>
            <p>A drug addict takes more.</p>
            <p>
              From the outside, their lives appear to move in opposite
              directions.
            </p>
            <p>
              So it feels natural to assume their inner experience must be
              opposite too.
            </p>
          </Details>

          <Details
            title="What are both of them actually reaching for?"
            answer="A sense of comfort."
          >
            <p>Not pleasure in theory.</p>
            <p>Not status or achievement.</p>
            <p>Something simpler:</p>
            <ul className="list-disc pl-5">
              <li>warmth,</li>
              <li>safety,</li>
              <li>being held,</li>
              <li>a pause from strain.</li>
            </ul>
            <p className="font-medium">The forms differ. The longing does not.</p>
          </Details>

          <Details
            title="A simple picture: the cold room"
            answer="Cold makes everyone reach."
          >
            <p>Imagine a cold room.</p>
            <p>One person turns on a heater and sits close to it.</p>
            <p>Another wraps themselves tightly in blankets.</p>
            <p>One adds heat. One restricts movement.</p>
            <p>They look like opposites. But both are responding to the same thing.</p>
            <p className="font-medium">Cold.</p>
          </Details>

          <Details
            title="How does this show up in real life?"
            answer="Through opposite strategies aimed at the same feeling."
          >
            <p>
              One person reaches outward, toward substances that soften the
              edges.
            </p>
            <p>
              Another reaches inward, toward control, silence, or restraint.
            </p>
            <p>One loosens. One tightens.</p>
            <p className="font-medium">
              Both are trying to feel safe inside experience.
            </p>
          </Details>

          <Details
            title="Why can both strategies still hurt?"
            answer="Because comfort is being chased, not met."
          >
            <p>
              When warmth is treated as something to obtain, experience becomes
              something to manage.
            </p>
            <p>Managing feeling takes effort. Effort creates tension.</p>
            <p className="font-medium">Different methods. Same pressure.</p>
          </Details>

          <Details
            title="Why doesn’t discipline automatically bring ease?"
            answer="Because restraint can still be organized around avoidance."
          >
            <p>Substances can be removed.</p>
            <p>Habits can be controlled.</p>
            <p>
              But the urge to escape what is felt can remain untouched.
            </p>
            <p className="font-medium">When that urge stays, suffering stays with it.</p>
          </Details>

          <Details
            title="Why does addiction look more extreme?"
            answer="Because its hunger is visible."
          >
            <p>The addict’s reaching looks desperate.</p>
            <p>The monk’s reaching looks composed.</p>
            <p>But both can revolve around the same silent question:</p>
            <p className="font-medium">How do I get away from this feeling?</p>
          </Details>

          <Details
            title="What makes the suffering feel “the same”?"
            answer="The constant effort to secure a sense of holding."
          >
            <p>Holding through numbness.</p>
            <p>Holding through control.</p>
            <p>Holding through belief.</p>
            <p>Holding through ritual.</p>
            <p>The effort itself becomes exhausting.</p>
            <p className="font-medium">Different paths. Same weight.</p>
          </Details>

          <Details
            title="Why does ZenTrust seem fragile or slow by comparison?"
            answer="Because it does not organize itself around securing comfort or relief."
          >
            <p>ZenTrust is not optimized to:</p>
            <ul className="list-disc pl-5">
              <li>numb discomfort,</li>
              <li>suppress it,</li>
              <li>or hide it behind performance.</li>
            </ul>
            <p>
              It is structured to stay present with reality as it unfolds,
              without promising warmth on demand.
            </p>
            <p className="font-medium">
              Inside systems that reward quick relief or visible control, this
              can look inefficient or weak.
            </p>
          </Details>

          <Details
            title="Orientation"
            answer="Understanding clarifies why the comparison keeps appearing."
          >
            <p>
              A monk and a drug addict can suffer in the same way because
              suffering does not respond to lifestyle alone.
            </p>
            <p>
              It responds to how warmth and safety are sought inside experience.
            </p>
            <p className="font-medium">
              When that search softens, suffering loosens—without anyone needing
              to be fixed or judged.
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
