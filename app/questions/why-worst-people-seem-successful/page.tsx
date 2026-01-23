// app/questions/why-worst-people-seem-successful/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do the worst people so often appear to be the most successful?",
  description:
    "A sharp examination of how large systems reward visible extraction faster than quiet stabilization.",
  other: {
    category: "Schools & Systems",
    subcategory: "visibility-vs-stability",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why do the worst people so often appear to be the most successful?"
      shortAnswer="Because large systems measure speed, dominance, and visibility more easily than care, truth, or long-term stability, allowing extractive behavior to rise quickly."
      heroMetaphor="A scoreboard tracks only points, not damage to the field. Players who move fastest dominate the numbers. The ground beneath them quietly erodes."
      sections={[
        {
          title: "What does success usually mean inside large systems?",
          answer:
            "Success means matching what the system can easily measure.",
          children:
            "Large systems rely on simple signals to coordinate activity at scale. Growth, attention, profit, and rank are visible and comparable. These signals become targets rather than indicators. The system does not ask whether value was created. It asks whether the number moved.",
          metaphor:
            "A gauge lights up when pressure rises. It does not show what is cracking.",
        },
        {
          title: "Why do harmful traits fit these systems so well?",
          answer:
            "Because they reduce friction and bypass feedback in the short term.",
          children:
            "Care requires listening. Truth requires explanation. Trust requires time. Manipulation, intimidation, and self-promotion skip these costs. In environments optimized for speed, these traits appear efficient even as they create damage that remains invisible for long periods.",
          metaphor:
            "A shortcut cuts through a field. The path looks efficient until the soil washes away.",
        },
        {
          title: "Why is the damage not corrected earlier?",
          answer:
            "Because harm in large systems is delayed and distributed.",
          children:
            "In small groups, harm is immediate and personal. In large systems, consequences spread across people, distance, and time. A decision can look successful while exhausting workers or degrading trust. By the time effects appear, responsibility has dissolved.",
          metaphor:
            "Smoke rises far from the fire that started it.",
        },
        {
          title: "What happens to people who act with care and integrity?",
          answer:
            "They often perform stabilizing work that produces little signal.",
          children:
            "Preventing breakdowns, absorbing conflict, and maintaining relationships keep systems functioning. This work creates continuity rather than spectacle. Because it produces no dramatic spike, it rarely registers as success. Stability becomes invisible until it fails.",
          metaphor:
            "Support beams are noticed only when they break.",
        },
        {
          title: "Does this mean ethics are weak or outdated?",
          answer:
            "No, ethics operate on longer time scales than most systems track.",
          children:
            "Extractive strategies appear powerful early because they consume existing reserves. Regenerative strategies appear slow because they protect foundations. When reserves are depleted, apparent strength collapses. What endures is what did not destroy its base.",
          metaphor:
            "A fire burns bright by consuming the house that holds it.",
        },
        {
          title: "Why does visibility distort perception so strongly?",
          answer:
            "Because the mind mistakes what is loud for what is common.",
          children:
            "Highly visible winners are rare but memorable. Quiet failures and slow collapses rarely attract attention. The imbalance creates the impression that harmful behavior dominates everywhere. Visibility substitutes for frequency.",
          metaphor:
            "Thunder is heard more often than the weather that feeds it.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice here?",
          answer:
            "ZenTrust notices the difference between rising quickly and lasting.",
          children:
            "ZenTrust does not judge people or strategies. It observes which behaviors stabilize systems over time and which only accelerate extraction. By holding attention on durability rather than visibility, the apparent inversion of success becomes legible without instruction.",
          metaphor:
            "A long exposure reveals stars invisible in daylight.",
        },
        {
          title: "What becomes clear when this mechanism is seen?",
          answer:
            "That appearance of success is not evidence of health.",
          children:
            "Seeing the mechanism does not reverse outcomes. It restores orientation. The question shifts from who is winning to what the system is rewarding. Confusion fades when success is no longer mistaken for stability.",
          metaphor:
            "The glare fades and the landscape comes into view.",
        },
      ]}
      ending={[
        "Systems reward what they can measure.",
        "Visibility rises faster than stability.",
        "Seeing the mechanism restores orientation.",
      ]}
    />
  );
}
