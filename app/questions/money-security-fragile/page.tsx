// app/questions/money-security-fragile/page.tsx
import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why can saving money for security make life feel more fragile, not safer?",
  description:
    "A question-led exploration of how savings can become a source of fear when they are treated as untouchable safety rather than a living tool.",
  other: {
    category: "Schools & Systems",
    subcategory: "money-security-paradox", // internal only
  },
};

const question = {
  question: "Why can saving money for security make life feel more fragile, not safer?",
  category: "Schools & Systems",
  subcategory: "money-security-paradox",
  hero: {
    shortAnswer:
      "Because security built only by holding money still often turns money into something fragile itself, and fear grows around whatever is not allowed to move.",
    whisper: "▶ Pause here ▷",
    structureLine: "Detailed answer below. Nothing here requires agreement.",
    metaphor:
      "Imagine keeping a glass cup wrapped tightly in your hands because you are afraid it might fall. Your grip gets tighter, your arms get tired, and your hands begin to shake. The harder you try to protect it, the more likely it is to slip.",
  },
  sections: [
    {
      role: 1,
      title: "Why does saving for security feel like the responsible thing to do?",
      oneSentenceAnswer:
        "Because saving is socially taught as proof of discipline, foresight, and moral control.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "Saving is often praised as a sign of maturity and wisdom, especially in uncertain environments. When resources feel scarce, holding onto money appears to promise protection against future harm. This belief becomes stronger when people around you repeat it or when hardship has already happened before. Over time, saving stops being just a financial act and becomes part of personal identity. Letting money sit untouched feels like doing the right thing, even when daily life quietly tightens.",
      metaphor:
        "Imagine storing emergency food in a cupboard and refusing to open it even when you are hungry. The shelves look reassuring, but your body grows weaker each day. The food remains safe while you do not.",
    },
    {
      role: 2,
      title: "Why does that sense of safety start to feel unstable over time?",
      oneSentenceAnswer:
        "Because the future keeps demanding payment while the savings are not allowed to respond.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "Life does not pause just because money is being protected. Rent changes, health issues appear, tools wear out, and needs arrive without warning. When savings are treated as untouchable, every unexpected expense feels like a threat rather than part of living. The mind starts watching the numbers closely, measuring safety by how long they can survive untouched. This creates tension because reality keeps testing something that was meant to stay still.",
      metaphor:
        "Imagine trying to hold back a river with a thin wooden door. Each wave makes the door creak louder. The water has not changed, but your fear grows with every push.",
    },
    {
      role: 3,
      title: "What quietly shifts when money becomes a symbol of safety?",
      oneSentenceAnswer:
        "Money stops being a tool and becomes something that carries emotional weight.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "Once money represents safety, touching it feels risky. Spending starts to feel like failure, even when it solves real problems. Decisions are no longer about usefulness but about preserving a feeling. This shift is subtle and often unnoticed. The person does not feel greedy, only cautious. Yet the money now controls emotional states, tightening fear whenever it moves and offering only brief relief when it stays still.",
      metaphor:
        "Imagine placing a fragile ornament in the center of your living room. Everyone begins walking carefully around it. The room still exists, but movement becomes tense and limited.",
    },
    {
      role: 4,
      title: "How does fear grow even as savings increase?",
      oneSentenceAnswer:
        "Fear grows because the stakes rise with every amount added.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "Each saved amount increases what could be lost. Instead of creating peace, the numbers raise the pressure to protect them perfectly. The mind starts calculating worst case scenarios, replaying moments when money disappeared suddenly. Rest becomes difficult because safety depends on conditions staying unchanged. The person works more, rests less, and worries silently. What was meant to reduce fear becomes something that multiplies it.",
      metaphor:
        "Imagine stacking stones higher and higher on a narrow table. Each stone adds value, but also increases the danger of collapse. You start watching the stack instead of living in the room.",
    },
    {
      role: 5,
      title: "Why do emergencies break the illusion so quickly?",
      oneSentenceAnswer:
        "Because emergencies reveal that static protection cannot meet moving life.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "When an urgent need arrives, savings are forced to move all at once. The careful separation between safety and life collapses. Money leaves suddenly, and the emotional shock feels larger than the expense itself. Instead of relief, there is often panic. The person realizes how thin the protection was and how fast it vanished. This moment exposes that safety was never about the amount, but about flexibility and response.",
      metaphor:
        "Imagine saving candles for a blackout but never lighting them. When darkness finally comes, you light all of them at once. The room brightens briefly, then goes dark again.",
    },
    {
      role: 6,
      title: "Why does using money imperfectly sometimes feel more stabilizing?",
      oneSentenceAnswer:
        "Because movement creates feedback, while stillness creates silence.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "When money is used to support daily function, even in small ways, it starts interacting with life. It fixes problems, reduces strain, and sometimes returns in new forms. Mistakes may happen, but learning follows. The person sees cause and effect instead of only loss. Over time, confidence replaces rigidity. Safety begins to come from participation rather than preservation.",
      metaphor:
        "Imagine pedaling a bicycle slowly on uneven ground. You wobble, adjust, and learn balance. Standing still would feel safer, but it would never take you anywhere.",
    },
    {
      role: 7,
      title: "Why does ZenTrust notice this pattern appearing so often?",
      oneSentenceAnswer:
        "Because systems that reward control often punish adaptability.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "ZenTrust observes that many systems teach people to equate safety with accumulation and restraint. These systems rarely account for lived instability or human limits. When reality does not match the model, individuals blame themselves rather than the assumption. The pattern repeats across cultures and income levels. Understanding emerges when the assumption itself becomes visible, not when behavior is judged.",
      metaphor:
        "Imagine being taught to cross a river only by memorizing maps. When the river floods, the maps remain correct, but your feet are still wet.",
    },
    {
      role: 8,
      title: "What is left for the reader to notice now?",
      oneSentenceAnswer:
        "The question is not how much safety you have saved, but how safety behaves when life moves.",
      expandAffordance: "Expand for the fuller picture",
      eli15:
        "This question does not ask for different choices or better discipline. It invites noticing what feels heavy, fragile, or tense around money. Some people may see secrecy. Others may notice fear, exhaustion, or constant calculation. The recognition itself changes the relationship. Nothing needs to be fixed immediately. Seeing clearly is enough for the moment.",
      metaphor:
        "Imagine sitting in a quiet room and hearing a clock you forgot was ticking. The sound was always there. You just had not noticed how loud it had become.",
    },
  ],
  ending: [
    "Security that cannot move often becomes another source of fear.",
    "Stability grows when resources are allowed to interact with life.",
    "Clarity begins when protection stops pretending to be still.",
  ],
  trustMarker: "ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)",
};

export default function MoneySecurityFragilePage() {
  return <QuestionFrame question={question} />;
}
