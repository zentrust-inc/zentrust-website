// app/questions/land-benefit-existence/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Does the land benefit from your existence?",
  description:
    "A question-led look at whether land actually benefits from human presence, or is mostly altered to tolerate it.",
  other: {
    category: "Nature & Land",
    subcategory: "land-extraction",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Does the land benefit from your existence?"
      shortAnswer="Often, no. In most cases, the land does not benefit; it is managed to tolerate us."
      heroMetaphor="Imagine renting a room where you cook, wash, and sleep every day. You never clean the floor, fix the sink, or open the windows. When you leave, the room is quieter, but more worn than when you arrived."
      sections={[
        {
          title: "How does land first experience human presence?",
          answer:
            "Land usually experiences humans as removal rather than contribution.",
          children:
            "Most daily interaction with land involves taking rather than adding. Food is harvested, water is drawn, surfaces are compacted, and waste is displaced. These actions feel ordinary because the land does not resist immediately. Over time, soil thins, vegetation weakens, and diversity declines. The land adjusts quietly, but adjustment is not benefit. What looks like coexistence is often the land absorbing loss without visible protest.",
          metaphor:
            "Imagine someone borrowing items from your house every day. They never steal anything large. Slowly, the rooms feel emptier.",
        },
        {
          title: "Why does land harm rarely feel like harm?",
          answer:
            "Land harm feels invisible because it unfolds slowly and without drama.",
          children:
            "Land changes do not happen on human emotional timelines. Erosion, depletion, and exhaustion accumulate across seasons and years. Because nothing breaks immediately, the relationship feels neutral. Normal routines continue uninterrupted. The absence of crisis is mistaken for balance. Harm that arrives quietly is easier to ignore than harm that demands response.",
          metaphor:
            "Imagine removing a single page from a book each day. The book still looks whole. One day, it no longer tells the same story.",
        },
        {
          title: "Why does land not benefit even from careful use?",
          answer:
            "Because careful use still operates within extractive structure.",
          children:
            "Even gentle use often assumes the land exists to serve human needs. Care reduces damage, but it does not reverse direction. Housing, food systems, and infrastructure still draw resources outward. Returning value to land is rarely built into design. As long as land is organized as input rather than partner, benefit remains one-sided. Intention cannot override structure.",
          metaphor:
            "Imagine walking softly on a frozen lake. Your steps are light. The ice still cracks.",
        },
        {
          title: "How does land change under long-term human presence?",
          answer:
            "Land becomes simpler, quieter, and less responsive over time.",
          children:
            "Diverse ecosystems handle stress through redundancy. Extraction removes that redundancy. Soil loses organisms, water loses clarity, and plants lose resilience. The land still functions, but with fewer options. When disruption arrives, recovery is slower. What appears stable is often depleted stability. The land survives, but it does not thrive.",
          metaphor:
            "Imagine a choir slowly losing singers. The song continues. The richness disappears.",
        },
        {
          title: "Why is land extraction rewarded instead of questioned?",
          answer:
            "Because land extraction produces fast, countable results.",
          children:
            "Systems reward outputs that appear quickly and predictably. Land extraction delivers crops, buildings, and profit on schedule. Regeneration takes time and uncertainty. Because reward systems favor speed, extraction looks successful. The land pays the cost later. Efficiency becomes a virtue even when it empties the source that supports it.",
          metaphor:
            "Imagine burning furniture to heat a house. The warmth is immediate. The room slowly empties.",
        },
        {
          title: "Why does land extraction continue even when known?",
          answer:
            "Because stopping extraction threatens human stability.",
          children:
            "Many lives depend on arrangements that remove more from land than they return. Changing those arrangements feels dangerous. Awareness alone does not create alternatives. As long as survival is tied to extraction, the pattern persists. The land absorbs strain so human systems can remain intact. Continuation reflects dependence, not ignorance.",
          metaphor:
            "Imagine noticing a crack in a bridge you cross daily. You see it clearly. You still cross because there is no other way.",
        },
        {
          title: "What does ZenTrust notice about land extraction?",
          answer:
            "ZenTrust notices how land extraction is mistaken for ordinary living.",
          children:
            "ZenTrust does not accuse or instruct. It notices language. Extraction appears as housing, food, and progress, not as relationship. When framed as normal life, the land disappears from consideration. ZenTrust holds attention on that disappearance. Seeing the pattern removes confusion before any change is considered.",
          metaphor:
            "Imagine a road so familiar no one remembers where it leads. Cars move steadily. The destination is never discussed.",
        },
        {
          title: "What remains once land extraction is seen clearly?",
          answer:
            "The relationship becomes visible instead of automatic.",
          children:
            "Nothing here demands correction. Seeing land extraction changes perception, not behavior. The land stops being background. It becomes a participant whose condition reflects the relationship. Awareness does not fix damage. It ends invisibility. What follows is not decided here.",
          metaphor:
            "Imagine realizing the ground slopes after years of adjusting your stance. The ground stays the same. You stop compensating unconsciously.",
        },
      ]}
      ending={[
        "The land has always been responding.",
        "Most responses are slow and quiet.",
        "Seeing comes before repair.",
      ]}
    />
  );
}
