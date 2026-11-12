// app/questions/feeling-stuck-in-life/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do I feel stuck in life, even when I'm busy?",
  description:
    "A question-led look at feeling stuck in life: why days can be full of activity and still feel like standing still.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "feeling-stuck-in-life",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why do I feel stuck in life, even when I'm busy?"
      shortAnswer="People often feel stuck while busy because their days are full of maintenance rather than movement, and the systems they live in reward keeping things running more than changing direction, so effort piles up without a sense of going anywhere."
      heroMetaphor="Imagine pedaling hard on a bicycle mounted on a stand. Your legs ache and the wheel spins fast. The room around you never changes."
      sections={[
        {
          title: "Why does feeling stuck feel so frustrating?",
          answer:
            "It feels frustrating because the effort is real while the sense of progress is missing.",
          metaphor:
            "Imagine pushing against a door that opens toward you. You push harder each day. The door stays exactly where it is.",
          children:
            "Feeling stuck in life is not the same as being idle. Many people who feel stuck are working, caring for others, and meeting obligations. Their days are full. Yet when they look back over months or years, little seems to have changed. The frustration comes from that mismatch. It feels as if energy is being spent without carrying them anywhere they chose to go.",
        },
        {
          title: "Why doesn't setting new goals usually fix it?",
          answer:
            "New goals rarely fix it because they get added on top of a life that has no room left to move.",
          metaphor:
            "Imagine adding more luggage to a car that is already stuck in mud. The destination is clearer. The wheels sink deeper.",
          children:
            "People who feel stuck are often told to set goals, make plans, or find motivation. These can help when the obstacle is unclear direction. Yet many people already know what they want. What they lack is time, energy, or room to change without risking stability. Adding goals to a full life can deepen the feeling of failure, because now there is one more thing left undone.",
        },
        {
          title: "What actually keeps people feeling stuck?",
          answer:
            "People stay stuck when most of their energy goes into keeping current life running, leaving little for change.",
          metaphor:
            "Imagine a mill wheel that powers only itself. The water flows and the wheel turns. Nothing is ground.",
          children:
            "Bills, work, care, commuting, and small daily tasks require constant attention. Each is reasonable on its own. Together, they can absorb almost all available energy. Change requires surplus: time to think, money to risk, and rest to imagine something new. When life runs close to its limits, people can only maintain. The stuckness is not laziness. It is a system operating at full capacity.",
        },
        {
          title: "How does feeling stuck change how we see ourselves?",
          answer:
            "Over time it can turn into a belief that we are the kind of person who never moves forward.",
          metaphor:
            "Imagine looking at your reflection in still water every day. The image never changes. You begin to think it never will.",
          children:
            "When months pass without visible change, people often start explaining it with their character. They may decide they lack discipline, courage, or talent. This story feels convincing because it seems to fit the evidence. Yet it often ignores the conditions that made change hard. The belief then becomes part of the problem, discouraging small experiments that might have opened a new path.",
        },
        {
          title: "Why does fear of losing what we have keep us in place?",
          answer:
            "Fear keeps people in place because change risks the stability that took so long to build.",
          metaphor:
            "Imagine standing on a narrow ledge you climbed to with difficulty. The view ahead looks better. Moving means letting go of the rock you are holding.",
          children:
            "Many people stay in situations they have outgrown because those situations provide income, routine, or identity. Leaving feels dangerous, especially when safety nets are thin. Uncertainty about the next step can feel worse than dissatisfaction with the current one. This is not simply cowardice. It is a reasonable response to real risk. Still, it can turn temporary arrangements into long stretches of standing still.",
        },
        {
          title: "Why can feeling stuck persist for years?",
          answer:
            "It persists because daily life rarely offers a natural moment to pause and change direction.",
          metaphor:
            "Imagine a train that never stops at stations. You can see the platforms passing. There is no moment when the doors open.",
          children:
            "In the past, seasons, rituals, and community events created natural pauses for reflection. Modern routines tend to run continuously. Holidays are short and often busy. Without pauses, people keep moving along the same track. Thoughts about change appear in quiet moments, then disappear when work resumes. Years can pass this way, not through a single choice, but through the absence of any stopping point.",
        },
        {
          title: "Why does ZenTrust look at capacity, not just motivation?",
          answer:
            "ZenTrust looks at capacity because people often lack room to change, not the desire to.",
          metaphor:
            "Imagine a cup that is already full. Pouring in more water only spills. The cup needs emptying before it can hold anything new.",
          children:
            "ZenTrust does not treat feeling stuck as a personal failing. It observes how full schedules, thin safety nets, and continuous routines leave little space for change. Seeing this can reduce self-blame. It also shifts the question from how to try harder to what could be set down, simplified, or shared, so that some energy becomes available for a different direction.",
        },
        {
          title: "What does feeling stuck make easy to forget?",
          answer:
            "It makes it easy to forget that small changes can open movement where large ones feel impossible.",
          metaphor:
            "Imagine a stream blocked by fallen branches. Moving one branch lets a trickle through. Over time, the water widens the gap on its own.",
          children:
            "When people feel stuck, they often imagine change only as a dramatic leap: a new job, a move, a complete reinvention. These feel too risky, so nothing happens. Yet movement often begins with small, low-risk steps: one conversation, one class, one hour a week spent differently. These rarely transform life at once. They can loosen what felt fixed and let direction emerge.",
        },
      ]}
      ending={[
        "A full day is not the same as a moving life.",
        "Stuckness often means no room, not no will.",
        "Small openings can change the course of a stream.",
      ]}
    />
  );
}
