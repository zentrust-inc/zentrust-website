// app/questions/cancer/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why can “fighting cancer” save a life, yet still harm the person?",
  description:
    "A whole-system explanation for how disease control and healing can move in opposite directions, even while both are called treatment.",
  other: {
    category: "Health & Suffering",
  },
};

type Section = {
  title: string;
  oneSentence: string;
  eli15: React.ReactNode;
};

function AccordionItem({
  title,
  oneSentence,
  children,
}: {
  title: string;
  oneSentence: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition dark:border-neutral-800 dark:bg-neutral-950">
      {/* DO NOT add `open` attribute. All sections must be collapsed by default. */}
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-base font-semibold tracking-tight sm:text-lg">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {oneSentence}
          </p>

          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
            Expand for the detailed answer.
          </p>
        </div>

        <span
          className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition group-open:rotate-45 dark:border-neutral-800 dark:text-neutral-300"
          aria-hidden="true"
        >
          +
        </span>
      </summary>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
        {children}
      </div>
    </details>
  );
}

export default function CancerQuestionPage() {
  const belowAnchorId = "content";

  const sections: Section[] = [
    {
      title: "Why does killing cancer cells not feel like healing?",
      oneSentence:
        "Because cell death removes a visible expression, while healing requires restoring regulation and cooperation across the whole system.",
      eli15: (
        <>
          <p>
            A body is not a collection of independent targets. It is a
            coordinated system that stays healthy by regulating stress, energy,
            immunity, and repair.
          </p>
          <p>Destroying cells can reduce a tumor.</p>
          <p>
            But it does not restore the conditions that made those cells abandon
            cooperation in the first place.
          </p>
          <p>
            So disease control can improve while the organism remains exhausted,
            fragmented, or unsafe.
          </p>
        </>
      ),
    },
    {
      title: "Why do some people still feel supported during aggressive treatment?",
      oneSentence:
        "Because meaning, hope, trust, and perceived safety can stabilize the organism even when the treatment itself is damaging.",
      eli15: (
        <>
          <p>
            When a person believes they are being helped, the nervous system
            often leaves constant threat.
          </p>
          <p>
            That shift alone can change pain, inflammation, immune coordination,
            and endurance.
          </p>
          <p>
            This support does not come from killing cells. It comes from feeling
            held inside a context of care and purpose.
          </p>
          <p>
            The organism survives not because damage is healing, but because
            meaning gives it a reason to endure damage.
          </p>
        </>
      ),
    },
    {
      title: "What if cancer is less like an enemy and more like a cornered animal?",
      oneSentence:
        "Cancer can be understood as a survival response that emerges when cells are trapped in conditions that no longer allow cooperation.",
      eli15: (
        <>
          <p>Imagine a normally calm cat.</p>
          <p>
            Left alone, it moves gently. It eats, sleeps, and responds to its
            surroundings without conflict.
          </p>
          <p>
            Now imagine that same cat repeatedly cornered. There is no escape.
            No rest. No signal of safety.
          </p>
          <p>Over time, it changes.</p>
          <p>
            It becomes tense. Hyper-alert. Defensive. It lashes out not because
            it has become evil, but because survival has replaced cooperation.
          </p>
          <p>The behavior is not the problem. The environment is.</p>
          <p>Killing the cat would stop the behavior.</p>
          <p>But it would not explain why the behavior appeared.</p>
          <p>
            Changing the environment, removing the threat and restoring safety,
            makes the behavior unnecessary.
          </p>
          <p>Cancer can be understood in a similar way.</p>
          <p>
            Under chronic, sublethal stress, cells can no longer maintain
            cooperative roles within the body.
          </p>
          <p>
            They revert to older survival programs. They divide. They resist
            signals. They persist.
          </p>
          <p>This shift is not aggression. It is desperation.</p>
          <p>Destroying these cells can reduce what is visible.</p>
          <p>
            But it does not restore the conditions that forced cells into
            survival mode.
          </p>
          <p>Removing the response is not the same as restoring the conditions.</p>
        </>
      ),
    },
    {
      title: "Why can biomedical treatment oppose the logic of healing it claims to pursue?",
      oneSentence:
        "Because it can damage organismal coherence in order to control disease, then rely on the person’s inner reserves to keep the system functioning.",
      eli15: (
        <>
          <p>Healing restores regulation.</p>
          <p>Cytotoxic treatment overrides regulation.</p>
          <p>
            The more force is applied to control disease, the more the person
            must supply coherence through trust, resolve, and meaning to survive
            the intervention.
          </p>
          <p>
            In this way, control and healing can move in opposite directions
            even while both are called treatment.
          </p>
        </>
      ),
    },
    {
      title: "Why does this confusion persist?",
      oneSentence:
        "Because disease control measures what is visible, while healing concerns what is stable.",
      eli15: (
        <>
          <p>
            A system can look improved on scans while remaining internally
            fragmented and exhausted.
          </p>
          <p>
            When these are treated as the same outcome, escalation replaces
            understanding.
          </p>
        </>
      ),
    },
    {
      title: "Why does ZenTrust appear slow or insufficient next to decisive cancer treatments?",
      oneSentence:
        "Because it focuses on restoring conditions rather than suppressing responses, which can look passive beside intervention.",
      eli15: (
        <>
          <p>
            Changing conditions takes time and produces no dramatic moments. It
            does not resemble battle.
          </p>
          <p>
            But it addresses what force alone cannot, the environment that
            determines whether cooperation is possible at all.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO (DO NOT TOUCH) ================= */}
      <GlobalHero
        mode="answer"
        headline={`Why can “fighting cancer”
save a life,
yet still harm the person?`}
        dek={
          <>
            <p>
              Destroying cancer cells can control disease. Healing depends on
              restoring the conditions that allow the whole organism to remain
              coherent.
            </p>
            <p>
              When control is mistaken for restoration, people can survive while
              still feeling harmed.
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              Detailed explanation below.
            </p>
          </>
        }
        belowAnchorId={belowAnchorId}
      />
      {/* ================= END HERO ================= */}

      <section
        id={belowAnchorId}
        className="mx-auto w-full max-w-[820px] px-4 pb-16 pt-8 sm:px-6"
      >
        <div className="space-y-4">
          {sections.map((s) => (
            <AccordionItem
              key={s.title}
              title={s.title}
              oneSentence={s.oneSentence}
            >
              {s.eli15}
            </AccordionItem>
          ))}
        </div>

        {/* Ending block (required) */}
        <footer className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
          <p>Sometimes survival is mistaken for healing.</p>
          <p>Sometimes control is mistaken for restoration.</p>
          <p className="mt-3">
            Destroying a response is not the same as restoring the conditions.
          </p>

          <div className="mt-6 border-t border-neutral-200 pt-4 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
          </div>
        </footer>
      </section>
    </main>
  );
}
