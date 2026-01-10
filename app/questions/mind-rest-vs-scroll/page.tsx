import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title:
    "Why does the mind rest when we do nothing, but feel tired after watching or scrolling for hours?",
  description:
    "A question-led exploration of why mental rest comes from stillness while passive consumption leads to fatigue.",
  other: {
    category: "Mind & Experience",
  },
};

export default function MindRestVsScrollPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does the mind rest doing nothing but tire scrolling?"
      shortAnswer="Because the mind recovers by settling what it already holds, while constant watching keeps introducing unfinished impressions."
      heroMetaphor="Imagine a room where guests keep arriving without ever leaving. Chairs fill, coats pile up, and conversations overlap. The doorway stays busy while the room grows crowded."
      sections={[
        {
          title: "Why can doing nothing feel restful instead of empty?",
          answer:
            "Because when nothing asks for response, the mind stops bracing itself.",
          children:
            "You lie on the floor in the afternoon without a plan. The phone is nearby, but you do not reach for it. Sounds from outside come and go. Thoughts appear about small unfinished things, then fade. No one needs you. Nothing is waiting. After some time, you notice your breathing has softened. You were not trying to rest or clear your mind. It happened while nothing was required of you.",
          metaphor:
            "Imagine snowfall after strong wind. The air grows still. The ground slowly evens out.",
        },
        {
          title:
            "Why does the idea that rest means activity seem convincing but fall short?",
          answer:
            "Because movement can hide effort while still demanding attention.",
          children:
            "After dinner, you sit on the couch and turn on a show. Your body stays still, but your eyes keep following scenes. Faces change. Sounds rise and fall. One episode leads to another without pause. Time passes quietly. When you finally stand, your head feels full and your body feels heavier than before. You were resting in posture, yet something inside stayed alert the entire time.",
          metaphor:
            "Imagine standing upright on a bus. The ride feels smooth. Your legs never sit.",
        },
        {
          title:
            "What is actually happening in the mind during scrolling or watching?",
          answer:
            "The mind keeps restarting attention without reaching completion.",
          children:
            "You open your phone while waiting for tea to boil. A clip plays, then another appears. Each moment asks you to notice something new. Music starts and stops. Topics shift quickly. Your thumb moves without thought. When the kettle whistles, you feel mildly irritated, as if pulled away from something unfinished. Nothing demanded effort, yet your attention never had a place to settle.",
          metaphor:
            "Imagine a doorbell ringing again and again. You stand, walk, return. The chair remains empty.",
        },
        {
          title: "How does this pattern affect the mind over time?",
          answer:
            "Over time, the mind carries more fragments and fewer settled impressions.",
          children:
            "Days pass where quiet moments are filled with screens. Breaks become feeds. Evenings blur into clips and posts. You remember seeing many things, but none clearly. When asked what stayed with you from the week, nothing specific comes to mind. There is a sense of fullness without satisfaction. Rest feels postponed, as if something inside still needs to finish before it can let go.",
          metaphor:
            "Imagine dishes stacked beside a sink. The tap stays off. The pile keeps rising.",
        },
        {
          title: "How does real rest change the way clarity forms?",
          answer:
            "Clarity emerges when experiences are allowed to remain still.",
          children:
            "You sit quietly after a conversation that felt confusing. No replay. No distraction. The words return slowly on their own. A tone, a pause, something you missed earlier. Without effort, the confusion loosens. Nothing dramatic happens. The understanding feels simple and ordinary, as if it had been waiting nearby. No new information was added. Time and stillness did the work quietly.",
          metaphor:
            "Imagine fresh ink on paper. A hand moves too soon. The letters blur.",
        },
        {
          title: "Why does this tiring cycle keep repeating?",
          answer:
            "Because stopping often feels more uncomfortable than continuing.",
          children:
            "There is a small space before sleep where you could do nothing. Instead, you reach for the phone. Silence feels exposed. Without noise, avoided thoughts might surface. The screen offers a familiar buffer. You scroll even while feeling tired of it. The habit continues, not because it satisfies, but because it delays something else. Night after night, the pattern repeats quietly.",
          metaphor:
            "Imagine a conveyor belt moving steadily. Objects pass your hands. There is nowhere to set them down.",
        },
        {
          title:
            "Why does ZenTrust seem slow or ineffective compared to constant engagement systems?",
          answer:
            "Because ZenTrust removes stimulation instead of supplying it.",
          children:
            "When you encounter ZenTrust, nothing pulls you forward. There are no alerts or rewards. At first, it feels like nothing is happening. You wonder if you missed something important. Over time, your pace changes. Questions linger without pressure to answer. Understanding arrives later, away from the screen. It does not announce itself. The absence of push makes the space feel unfamiliar.",
          metaphor:
            "Imagine opening a window in a crowded room. The noise remains. The air shifts.",
        },
        {
          title: "What does this return to in lived experience?",
          answer:
            "That rest often appears when interference stops.",
          children:
            "You place a jar of cloudy water on the table and forget it. Hours later, you notice the water looks clearer. You did not filter it or stir it differently. Nothing was done. The change happened while it was left alone. In moments like this, something familiar about the mind becomes noticeable. Some things resolve themselves without intervention.",
          metaphor:
            "Imagine a jar of cloudy water. It sits undisturbed. Particles drift downward.",
        },
      ]}
      ending={[
        "Rest is not the absence of thought.",
        "Tiredness is not always caused by effort.",
        "Some understanding forms only in quiet.",
      ]}
    />
  );
}
