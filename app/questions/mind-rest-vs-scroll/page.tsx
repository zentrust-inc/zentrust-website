// app/questions/mind-rest-vs-scroll/page.tsx

import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title:
    "Why does the mind rest when we do nothing, but feel tired after watching or scrolling for hours?",
  description:
    "A question-led exploration of why mental rest comes from stillness while passive consumption leads to fatigue.",
  other: {
    category: "Mind & Experience",
  },
};

function Section({
  title,
  oneSentenceAnswer,
  eli,
  metaphor,
}: {
  title: string;
  oneSentenceAnswer: string;
  eli: string;
  metaphor: string;
}) {
  return (
    <details className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <summary className="cursor-pointer list-none">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {oneSentenceAnswer}
        </p>
      </summary>

      <div className="mt-4 space-y-4 text-base leading-relaxed">
        <p>{eli}</p>
        <div className="rounded-xl bg-neutral-50 p-4 text-sm italic dark:bg-neutral-900">
          {metaphor.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function MindRestVsScrollPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-white px-4 py-12 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50"
    >
      <GlobalHero
        headline={`Why does the mind rest when we do nothing,
but feel tired after watching or scrolling for hours?`}
        dek={
          <>
            <p>
              Because the mind recovers by settling what it already holds, while
              constant watching keeps introducing unfinished impressions.
            </p>
            <p className="mt-4">▶ Pause here ▷</p>
            <p className="mt-2">
              A fuller explanation appears below, one layer at a time.
            </p>
          </>
        }
      >
        <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-sm italic dark:bg-neutral-900">
          <p>Imagine a room where guests keep arriving without ever leaving.</p>
          <p>Chairs fill, coats pile up, and conversations overlap.</p>
          <p>The doorway stays busy while the room grows crowded.</p>
        </div>
      </GlobalHero>

      <section className="mx-auto mt-12 max-w-3xl space-y-6">
        <Section
          title="Why can doing nothing feel restful instead of empty?"
          oneSentenceAnswer="Because when nothing asks for response, the mind stops bracing itself."
          eli="You lie on the floor in the afternoon without a plan. The phone is nearby, but you do not reach for it. Sounds from outside come and go. Thoughts appear about small unfinished things, then fade. No one needs you. Nothing is waiting. After some time, you notice your breathing has softened. You were not trying to rest or clear your mind. It happened while nothing was required of you."
          metaphor={`Imagine snowfall after strong wind.
The air grows still.
The ground slowly evens out.`}
        />

        <Section
          title="Why does the idea that rest means activity seem convincing but fall short?"
          oneSentenceAnswer="Because movement can hide effort while still demanding attention."
          eli="After dinner, you sit on the couch and turn on a show. Your body stays still, but your eyes keep following scenes. Faces change. Sounds rise and fall. One episode leads to another without pause. Time passes quietly. When you finally stand, your head feels full and your body feels heavier than before. You were resting in posture, yet something inside stayed alert the entire time."
          metaphor={`Imagine standing upright on a bus.
The ride feels smooth.
Your legs never sit.`}
        />

        <Section
          title="What is actually happening in the mind during scrolling or watching?"
          oneSentenceAnswer="The mind keeps restarting attention without reaching completion."
          eli="You open your phone while waiting for tea to boil. A clip plays, then another appears. Each moment asks you to notice something new. Music starts and stops. Topics shift quickly. Your thumb moves without thought. When the kettle whistles, you feel mildly irritated, as if pulled away from something unfinished. Nothing demanded effort, yet your attention never had a place to settle."
          metaphor={`Imagine a doorbell ringing again and again.
You stand, walk, return.
The chair remains empty.`}
        />

        <Section
          title="How does this pattern affect the mind over time?"
          oneSentenceAnswer="Over time, the mind carries more fragments and fewer settled impressions."
          eli="Days pass where quiet moments are filled with screens. Breaks become feeds. Evenings blur into clips and posts. You remember seeing many things, but none clearly. When asked what stayed with you from the week, nothing specific comes to mind. There is a sense of fullness without satisfaction. Rest feels postponed, as if something inside still needs to finish before it can let go."
          metaphor={`Imagine dishes stacked beside a sink.
The tap stays off.
The pile keeps rising.`}
        />

        <Section
          title="How does real rest change the way clarity forms?"
          oneSentenceAnswer="Clarity emerges when experiences are allowed to remain still."
          eli="You sit quietly after a conversation that felt confusing. No replay. No distraction. The words return slowly on their own. A tone, a pause, something you missed earlier. Without effort, the confusion loosens. Nothing dramatic happens. The understanding feels simple and ordinary, as if it had been waiting nearby. No new information was added. Time and stillness did the work quietly."
          metaphor={`Imagine fresh ink on paper.
A hand moves too soon.
The letters blur.`}
        />

        <Section
          title="Why does this tiring cycle keep repeating?"
          oneSentenceAnswer="Because stopping often feels more uncomfortable than continuing."
          eli="There is a small space before sleep where you could do nothing. Instead, you reach for the phone. Silence feels exposed. Without noise, avoided thoughts might surface. The screen offers a familiar buffer. You scroll even while feeling tired of it. The habit continues, not because it satisfies, but because it delays something else. Night after night, the pattern repeats quietly."
          metaphor={`Imagine a conveyor belt moving steadily.
Objects pass your hands.
There is nowhere to set them down.`}
        />

        <Section
          title="Why does ZenTrust seem slow or ineffective compared to constant engagement systems?"
          oneSentenceAnswer="Because ZenTrust removes stimulation instead of supplying it."
          eli="When you encounter ZenTrust, nothing pulls you forward. There are no alerts or rewards. At first, it feels like nothing is happening. You wonder if you missed something important. Over time, your pace changes. Questions linger without pressure to answer. Understanding arrives later, away from the screen. It does not announce itself. The absence of push makes the space feel unfamiliar."
          metaphor={`Imagine opening a window in a crowded room.
The noise remains.
The air shifts.`}
        />

        <Section
          title="What does this return to in lived experience?"
          oneSentenceAnswer="That rest often appears when interference stops."
          eli="You place a jar of cloudy water on the table and forget it. Hours later, you notice the water looks clearer. You did not filter it or stir it differently. Nothing was done. The change happened while it was left alone. In moments like this, something familiar about the mind becomes noticeable. Some things resolve themselves without intervention."
          metaphor={`Imagine a jar of cloudy water.
It sits undisturbed.
Particles drift downward.`}
        />
      </section>

      <footer className="mx-auto mt-16 max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
        <p>Rest is not the absence of thought.</p>
        <p>Tiredness is not always caused by effort.</p>
        <p>Some understanding forms only in quiet.</p>
        <p className="mt-4">
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </p>
      </footer>
    </main>
  );
}
