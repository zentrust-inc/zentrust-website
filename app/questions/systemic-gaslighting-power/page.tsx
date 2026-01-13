// app/questions/systemic-gaslighting-power/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern power feel like gaslighting?",
  description:
    "A question-led look at how systemic gaslighting erodes shared reality through repetition, denial, and overload.",
  other: {
    category: "Schools & Systems",
    subcategory: "systemic-gaslighting",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does modern power feel like gaslighting?"
      shortAnswer="Because many systems maintain control by repeatedly distorting signals until people doubt their own perception."
      heroMetaphor="Imagine walking through a building where the hallway lights turn off one by one as you pass. The floor is still solid under your feet. You cannot see how long the hallway is."
      sections={[
        {
          title: "Why does gaslighting feel personal when it is structural?",
          answer:
            "Because gaslighting reaches people individually, even when it is produced by a system.",
          metaphor:
            "Imagine sitting in a room where the clock ticks at an uneven pace. You glance at it, then look away, then check again. No one else comments on the sound.",
          children:
            "Gaslighting often arrives in small moments rather than dramatic events. A concern is brushed aside. A contradiction is softened. You notice something feels off, but nothing stands out enough to name. Because the experience lands in your body and thoughts, it feels private. When many people experience the same pattern separately, it still appears personal.",
        },
        {
          title: "Why does gaslighting resist obvious explanations?",
          answer:
            "Because gaslighting is not a single false statement but a shifting pattern.",
          metaphor:
            "Imagine reading a sign that changes its wording each time you look back at it. The letters are clear every time. The message never stays the same.",
          children:
            "A clear lie can be checked and challenged. Gaslighting keeps moving before it can be pinned down. Statements are adjusted, denied, reframed, or dismissed as jokes. Each version sounds close enough to the last to feel confusing rather than false. The effort required to keep track slowly increases.",
        },
        {
          title: "What actually does the gaslighting work?",
          answer:
            "Gaslighting works by controlling how events are framed rather than what happened.",
          metaphor:
            "Imagine playing a game where the rules are announced after each round. You recognize the pieces on the table. You never know which move will count.",
          children:
            "In gaslighting environments, meaning is assigned from above. A question becomes an attitude. A memory becomes misinterpretation. Once the frame is set, evidence arrives already weakened. The issue is no longer what occurred, but how you are being described.",
        },
        {
          title: "How does gaslighting play out over time?",
          answer:
            "Over time, gaslighting turns repeated doubt into quiet withdrawal.",
          metaphor:
            "Imagine carrying a bucket with a thin crack along the side. You refill it again and again. Water keeps slipping out before you reach the door.",
          children:
            "Early on, you try to clarify and correct. You explain carefully. You adjust your words. When nothing holds, effort starts to feel wasted. Gradually, speaking less feels easier than being misunderstood. The pattern continues without needing agreement.",
        },
        {
          title: "Where does digital gaslighting intensify it?",
          answer:
            "Digital environments amplify gaslighting by rewarding speed and certainty.",
          metaphor:
            "Imagine standing in a crowd where everyone is shouting different directions. Each voice sounds confident. The noise never pauses.",
          children:
            "Online spaces move quickly and reward strong signals. Context is trimmed away. Conflicting versions appear side by side without resolution. Attempts to slow things down can look like opposition. The pace itself makes checking harder than reacting.",
        },
        {
          title: "Why does gaslighting persist in workplaces and institutions?",
          answer:
            "Because gaslighting protects systems from having to change.",
          metaphor:
            "Imagine a factory where the alarm rings every afternoon. Management replaces the clock instead of the machine. The noise returns the next day.",
          children:
            "Structural problems are often redirected toward individuals. Burnout becomes a mindset issue. Confusion becomes a communication problem. By relocating the cause, institutions avoid adjusting their design. The pattern repeats without naming itself.",
        },
        {
          title: "What does ZenTrust ask about gaslighting?",
          answer:
            "ZenTrust asks what assumptions are quietly being accepted as normal.",
          metaphor:
            "Imagine noticing a window that has been slowly fogging over all day. You wipe a small circle with your sleeve. The rest of the glass stays cloudy.",
          children:
            "ZenTrust does not argue with frames or replace them. It notices where perception began to narrow. When gaslighting is present, certainty often comes with pressure to agree. The question is not who is right, but what is being taken for granted without noticing.",
        },
        {
          title: "How does gaslighting return attention to the reader?",
          answer:
            "Gaslighting often leaves the reader checking themselves before checking the situation.",
          metaphor:
            "Imagine pausing at a crosswalk where the signal keeps switching too fast. You step forward, then stop. Cars continue to pass.",
          children:
            "Repeated dismissal can train self-doubt. You begin rehearsing explanations before speaking. You notice hesitation appearing earlier each time. The confusion becomes internal even though its source is external. Attention slowly turns inward instead of outward.",
        },
      ]}
      ending={[
        "Some confusion is not a personal defect.",
        "Some doubt is introduced, not discovered.",
        "You can notice without resolving.",
      ]}
    />
  );
}
