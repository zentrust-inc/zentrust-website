// app/questions/freedom-permitted-cages/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Are you truly free, or just choosing between permitted cages?",
  description:
    "A question-led look at how freedom can feel like choice while the environment quietly selects the boundaries.",
  other: {
    category: "Mind & Experience",
    subcategory: "freedom-permitted-cages",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Are you truly free, or just choosing between permitted cages?"
      shortAnswer="Because freedom is often defined by what is allowed rather than what is chosen, many people experience choice without authorship and mistake it for freedom."
      heroMetaphor="Imagine walking through a hallway lined with open doors. Each door leads to a furnished room with a different color and layout. You are told you are free to choose any room, but the hallway itself never ends."
      sections={[
        {
          title: "Why does freedom feel available yet limited?",
          answer: "Because freedom is presented as choice, not as authorship.",
          metaphor:
            "Imagine standing at a vending machine with many buttons. You can choose any item that lights up. Nothing inside the machine can be changed.",
          children:
            "Most people are told they are free because they can pick between options. Education paths, careers, lifestyles, and opinions are offered as menus. The feeling of freedom comes from selecting something, not from questioning where the options came from. Over time, freedom becomes choosing well rather than choosing independently. The limits stay mostly unseen because the act of choosing feels active enough.",
        },
        {
          title: "Why does having many choices not guarantee freedom?",
          answer: "Because choice can exist without genuine alternatives.",
          metaphor:
            "Imagine a train with many empty seats. You can move from one seat to another. The train never leaves its track.",
          children:
            "Modern culture equates freedom with an abundance of options. If you can switch jobs, cities, or identities, you are told you are free. What is rarely asked is whether those options change the underlying structure of life. Many choices adjust comfort, status, or aesthetics without touching the deeper constraints. Freedom becomes preference inside a fixed system.",
        },
        {
          title: "What quietly defines the limits of freedom?",
          answer:
            "The environment selects the boundaries within which freedom is expressed.",
          metaphor:
            "Imagine fish swimming in a large glass tank. They move freely in every direction. The glass is invisible from inside.",
          children:
            "From childhood onward, environments shape what feels realistic, respectable, or possible. Language, economics, social reward, and fear work together to narrow imagination. Most people adapt so early that the boundaries feel natural. Freedom then operates inside conditions that were never consciously chosen. The cage is not locked, but it is rarely seen.",
        },
        {
          title: "How does conditioned freedom shape a life?",
          answer:
            "It creates movement without direction and change without authorship.",
          metaphor:
            "Imagine walking on a moving walkway at an airport. You are traveling forward without effort. Stepping off feels disorienting.",
          children:
            "When freedom is defined by permitted movement, life can feel busy but repetitive. People make changes, upgrades, and pivots while staying aligned with expectations. Over time, dissatisfaction appears without a clear cause. The person feels responsible for outcomes but disconnected from the script. Freedom feels present, yet something essential feels missing.",
        },
        {
          title: "Why do these cages rarely feel like cages?",
          answer: "Because they are rewarded, normalized, and shared.",
          metaphor:
            "Imagine wearing the same comfortable shoes every day. They fit so well you forget you are wearing them. Only when you try to run do you notice the stiffness.",
          children:
            "Cages that offer safety, approval, and identity rarely feel oppressive. They are reinforced by praise, belonging, and predictability. Leaving them risks confusion, loss, or judgment. As a result, many people defend the limits they live inside. Freedom becomes abstract while comfort stays concrete. The boundaries feel like normal life instead of structure.",
        },
        {
          title: "Why does the illusion of freedom survive awareness?",
          answer:
            "Because questioning freedom threatens stability more than confinement does.",
          metaphor:
            "Imagine a city built around a single power source. Everyone knows it is fragile. No one wants to imagine the lights going out.",
          children:
            "Recognizing limited freedom introduces uncertainty. It raises questions with no immediate answers. Systems prefer manageable dissatisfaction over unpredictable change. Individuals often prefer familiar constraint over open ambiguity. Awareness may flicker, but adaptation returns because daily life still needs to function. The idea of freedom becomes a topic, not a lived examination.",
        },
        {
          title: "What does ZenTrust notice about freedom here?",
          answer:
            "ZenTrust notices how freedom is discussed without examining who selected the cages.",
          metaphor:
            "Imagine reading a script handed to you on stage. You perform it well and receive applause. No one asks who wrote it.",
          children:
            "ZenTrust does not define what freedom should be. It notices how easily freedom is reduced to compliance with acceptable options. When people feel unfree, they are often pushed to optimize rather than question structure. ZenTrust holds attention on that moment of noticing without offering a replacement script. The point is not to win an argument, but to see what was assumed.",
        },
        {
          title: "What remains when freedom is seen clearly?",
          answer:
            "A quieter recognition that choice and freedom are not the same thing.",
          metaphor:
            "Imagine stopping in the hallway between rooms. The doors remain open. For the first time, you notice the hallway itself.",
          children:
            "Seeing the difference between choice and freedom does not demand action. It often brings stillness instead. Some people may keep choosing within the same structures. Others may simply notice the boundaries for the first time. What matters is not escape, but clarity about what has been assumed. Freedom becomes a question of perception before it becomes a plan.",
        },
      ]}
      ending={[
        "Nothing here defines freedom for you.",
        "Nothing here asks you to break your cage.",
        "It only asks whether the bars were noticed.",
      ]}
    />
  );
}
