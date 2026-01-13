// app/questions/busy-avoiding/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What are you avoiding by staying busy?",
  description:
    "A question-led look at how staying busy can function as a shield from what rises up in quiet.",
  other: {
    category: "Mind & Experience",
    subcategory: "busy-avoiding",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="What are you avoiding by staying busy?"
      shortAnswer="Staying busy can keep you from noticing what rises up in quiet, so busy becomes a shield that looks like productivity."
      heroMetaphor="Imagine a sink with the tap running all day. The sound fills the room and you stop hearing anything else. When the water is finally turned off, the silence feels loud."
      sections={[
        {
          title: "Why does staying busy feel safer than being still?",
          answer:
            "Staying busy gives you a predictable task so you do not have to meet what you feel.",
          metaphor:
            "Imagine walking fast through a market without stopping. You keep your eyes on the path and your hands stay full. You do not look at the stalls.",
          children:
            "Busy time can feel safer because it replaces open space with clear demands. When you are busy, you can point to what you did and why you did it. Stillness removes that cover, and the mind brings up unfinished feelings, worries, or memories. Busy days keep those things in the background. The safety is not always joy. It is the safety of not having to face what you have been carrying.",
        },
        {
          title: "Why does the obvious explanation for being busy fall short?",
          answer:
            "Because “I am just busy” can hide that busy is sometimes used to avoid something specific.",
          metaphor:
            "Imagine saying you cannot open a drawer because it is heavy. You tug once, then leave it shut. You do not check what is jammed inside.",
          children:
            "Life can be busy because life is demanding, but that does not explain the extra layer. Some people stay busy even after the main work is done. They fill gaps with errands, scrolling, calls, and small tasks. The surface reason is responsibility. The hidden reason is what appears when nothing is scheduled. Busy becomes the default, not because it is required, but because quiet feels exposed.",
        },
        {
          title: "What is busy actually doing in your day?",
          answer:
            "Busy creates motion that stops deeper questions from forming.",
          metaphor:
            "Imagine keeping a TV on in the next room all evening. The voices blur into a steady noise. When the TV turns off, you notice your own footsteps.",
          children:
            "Busy does more than occupy time. It shapes attention into quick reactions: the next message, the next task, the next small urgency. That rhythm can block reflection. It can also block grief, anger, fear, or loneliness from entering awareness. Busy becomes a constant switch of channels. You may not be choosing the content. You may be choosing to keep the channel changing so nothing has time to settle.",
        },
        {
          title: "How does busy change what you feel over time?",
          answer:
            "Over time, busy can dull your inner signals, then make them louder when you finally stop.",
          metaphor:
            "Imagine holding your breath while you finish a chore. You keep moving so you do not notice the strain. When you sit down, you gasp.",
          children:
            "At first, being busy can feel productive and even energizing. Later, it can start feeling like pressure that never releases. The body adapts by narrowing focus and flattening emotion so you can keep going. Then, when a free hour arrives, the mind does not relax. It floods with thoughts you have not had time to process. That can make you return to busy again, not for success, but for relief.",
        },
        {
          title: "What kinds of feelings does busy most often cover?",
          answer:
            "Busy often covers feelings that are hard to hold without distraction.",
          metaphor:
            "Imagine stuffing loose papers into a bag as you rush out the door. The zipper barely closes. You carry the bag carefully so nothing spills.",
          children:
            "Busy commonly covers emotions that do not fit neatly into a schedule: sadness, shame, resentment, fear, and emptiness. These feelings can rise when there is no immediate task to focus on. If you were taught to stay strong, useful, or cheerful, you may treat these emotions as problems. Busy gives you a reason to avoid them without admitting avoidance. It can look responsible from the outside while keeping you distant inside.",
        },
        {
          title: "Why does busy keep returning even when you want rest?",
          answer:
            "Because busy becomes a habit that promises control when life feels uncertain.",
          metaphor:
            "Imagine checking the front door lock again and again. Your hand reaches for it without thinking. The door stays the same.",
          children:
            "Busy can become automatic. When uncertainty rises, the mind reaches for activity the way a hand reaches for a familiar switch. Doing something feels better than sitting with not knowing. Even rest can start to feel suspicious, like wasted time or danger. So you refill the day. One more message, one more cleaning task, one more plan. Busy returns because it gives quick certainty, even if it drains you.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about busy in this question?",
          answer:
            "ZenTrust notices how busy can look like a virtue while quietly functioning as avoidance.",
          metaphor:
            "Imagine a person polishing the same countertop every hour. The surface shines, but the sink stays full. The polishing never reaches the dishes.",
          children:
            "ZenTrust does not label busy as good or bad. It notices the pattern where busy gains moral status, so it becomes hard to question. When busy is praised, avoidance can hide inside it safely. You can look disciplined while staying far from what hurts. ZenTrust holds the possibility that the issue is not workload alone. It is what the mind learns to run from when there is finally space.",
        },
        {
          title: "What becomes possible when busy is no longer your main shield?",
          answer:
            "When busy loosens, you can see what you were protecting yourself from.",
          metaphor:
            "Imagine taking off headphones after a long day. The room sounds different than you expected. You stand there for a moment.",
          children:
            "If busy is not immediately refilled, something becomes clearer: the specific thing you were avoiding has room to appear. It might be a relationship you have been tolerating, a decision you delayed, a grief you never named, or a fear about the future. This is not a promise of comfort. It is a change in visibility. Busy can keep pain out of view. Without busy, you can finally see what has been waiting.",
        },
      ]}
      ending={[
        "Nothing here says busy is wrong.",
        "Nothing here says stillness is better.",
        "It only asks what busy has been protecting you from.",
      ]}
    />
  );
}
