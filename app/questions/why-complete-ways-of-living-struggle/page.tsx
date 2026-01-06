// app/questions/complete-ways-fragments/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why do complete ways of living struggle inside a world built for fragments?",
  description:
    "A clear, ELI15 explanation of why whole living systems are hard to support inside institutions designed to fund and measure parts.",
  other: {
    category: "Schools & Systems",
  },
};

type Section = {
  title: string;
  answer: string;
  body: React.ReactNode;
};

function SectionCard({ title, answer, body }: Section) {
  return (
    <details className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition dark:border-neutral-800 dark:bg-neutral-950">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight sm:text-lg">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {answer}
          </p>
        </div>

        <span
          className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition group-open:rotate-45 dark:border-neutral-800 dark:text-neutral-200"
          aria-hidden="true"
        >
          +
        </span>
      </summary>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
        {body}
      </div>
    </details>
  );
}

function TrustMarker() {
  return (
    <p className="text-xs text-neutral-500 dark:text-neutral-400">
      ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
    </p>
  );
}

export default function CompleteWaysFragmentsPage() {
  const belowAnchorId = "content";

  const sections: Section[] = [
    {
      title: "Imagine this",
      answer: "Living well doesn’t appear in parts. It appears when everything is connected.",
      body: (
        <>
          <p>
            Imagine trying to stay healthy by treating your heart one year, your mind the next, and
            your environment only when something breaks.
          </p>
          <p>Each part matters.</p>
          <p>But health never appears in parts.</p>
          <p>It appears when the parts cooperate.</p>
        </>
      ),
    },
    {
      title: "Why are fragments easier to support than wholeness?",
      answer: "Because fragments are simpler to measure, control, and budget for.",
      body: (
        <>
          <p>It’s easier to fund a clinic than an environment.</p>
          <p>It’s easier to support food programs than food systems.</p>
          <p>It’s easier to build houses than to build communities.</p>
          <p>
            Fragments fit neatly into categories and line items. Wholeness shows up as
            “coordination,” “time,” “maintenance,” and “conditions” — the very things that are
            hardest to evaluate from a distance.
          </p>
          <p>
            But life doesn’t live in fragments. Life lives in relationships: between land and water,
            between food and health, between people and meaning.
          </p>
        </>
      ),
    },
    {
      title: "Why do “natural” ways of living feel hard to sustain?",
      answer: "Because modern systems reward separation, while humans don’t live in categories.",
      body: (
        <>
          <p>
            Nature, health, work, rest, culture, and meaning are often treated as separate boxes.
          </p>
          <p>But a human being is not a set of boxes.</p>
          <p>
            When life is split apart, people must constantly compensate — with effort, discipline,
            consumption, and control.
          </p>
          <p>Wholeness reduces effort. Fragmentation increases it.</p>
        </>
      ),
    },
    {
      title: "Why do partial solutions keep repeating the same problems?",
      answer: "Because fixing pieces doesn’t change the conditions that created the problem.",
      body: (
        <>
          <p>Better medicine can’t replace belonging.</p>
          <p>Better jobs can’t heal chronic stress.</p>
          <p>Better food can’t work without healthy land and water.</p>
          <p>
            Fragments can reduce symptoms. They can create local improvements. But if the
            surrounding conditions stay the same, the deeper pattern returns.
          </p>
          <p>Environments change direction. Fragments manage the moment.</p>
        </>
      ),
    },
    {
      title: "Why does wholeness often look slow or impractical at first?",
      answer: "Because living systems don’t stabilize one piece at a time.",
      body: (
        <>
          <p>
            A forest doesn’t grow by planting only trees first, then adding soil later, and water
            later still.
          </p>
          <p>Everything has to exist together — or nothing holds.</p>
          <p>
            From the outside, this can look inefficient. From the inside, it’s the difference
            between something that functions briefly and something that can carry life.
          </p>
        </>
      ),
    },
    {
      title: "Why does ZenTrust seem quiet or under-resourced by comparison?",
      answer: "Because ZenTrust focuses on complete living systems, not isolated outcomes.",
      body: (
        <>
          <p>It is faster to launch programs than to host environments.</p>
          <p>It is faster to show metrics than to allow stability to emerge.</p>
          <p>
            ZenTrust moves carefully because once a living system is fragmented, it starts teaching
            the wrong lessons — even if it looks successful on paper.
          </p>
          <p>
            This work tries to keep the system whole long enough for reality to be seen without
            distortion.
          </p>
        </>
      ),
    },
    {
      title: "A quiet thought to leave with",
      answer: "Some ways of living struggle not because they are unrealistic, but because they don’t fit inside fragment-based systems.",
      body: (
        <>
          <p>
            Some things are not difficult because they are extreme.
            They are difficult because they require conditions to exist together.
          </p>
          <p>Understanding this doesn’t require belief.</p>
          <p>Only noticing.</p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO (DO NOT TOUCH) ================= */}
      <GlobalHero
        mode="answer"
        headline={
          <>
            Why do complete ways of living struggle
            <br className="hidden sm:block" /> inside a world built for fragments?
          </>
        }
        dek={
          <>
            <p>
              Modern systems are designed to support pieces — while living well only works when
              everything is connected.
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              Detailed answer below.
            </p>
            <div className="mt-4">
              <TrustMarker />
            </div>
          </>
        }
        belowAnchorId={belowAnchorId}
      />
      {/* =============== END HERO ============================= */}

      <section id={belowAnchorId} className="mx-auto w-full max-w-[820px] px-4 pb-20">
        <div className="mt-10 space-y-4">
          {sections.map((s) => (
            <SectionCard key={s.title} title={s.title} answer={s.answer} body={s.body} />
          ))}
        </div>

        {/* Ending block (required) */}
        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
          <p>Some ways of living struggle not because they are unrealistic,</p>
          <p>but because they don’t fit inside systems built for fragments.</p>
          <p className="mt-4">Understanding does not demand agreement.</p>
          <p>It only makes something visible.</p>
          <div className="mt-4">
            <TrustMarker />
          </div>
        </div>
      </section>
    </main>
  );
}
