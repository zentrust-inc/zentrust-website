// app/questions/success-without-guarantee/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Would you still choose life without success?",
  description:
    "A sharp examination of how the promise of success functions as a quiet contract that authorizes effort, identity, and endurance.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "success-without-guarantee",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Would you still choose life without success?"
      shortAnswer="Because success acts as an unspoken guarantee that justifies effort, removing it exposes whether life is being lived or merely endured for future validation."
      heroMetaphor="A road is walked for years because a sign promises a city ahead. One morning the sign is gone. The road remains exactly the same."
      sections={[
        {
          title: "Why does the removal of success feel destabilizing?",
          answer:
            "Because success has been authorizing effort without being named.",
          children:
            "From early life onward, effort is paired with expectation. Work is justified by a later payoff that proves it was worth doing. When success is no longer guaranteed, effort loses its moral backing. The unease that follows is not laziness or confusion. It is the sudden absence of permission that effort had been quietly relying on.",
          metaphor:
            "Boxes are carried across a room because someone promised they would be counted later. The counting never comes. The boxes are still heavy.",
        },
        {
          title: "Why does motivation weaken when success is uncertain?",
          answer:
            "Because motivation is often sustained by recognition rather than interest.",
          children:
            "Applause, promotion, and acknowledgment quietly feed persistence. Even passion is often reinforced by being seen. When success is removed, action no longer reflects an identity back to itself. What weakens is not desire, but the mirror that once confirmed it. The question reveals how much movement depended on being witnessed as successful.",
          metaphor:
            "A runner circles a track while a crowd cheers. One day the stands are empty. The legs still work. The meaning shifts.",
        },
        {
          title: "What role does success play beneath conscious intention?",
          answer:
            "Success provides social legitimacy for effort to exist.",
          children:
            "Success explains struggle to others and to oneself. It protects effort from scrutiny and doubt. Without success, actions appear excessive, strange, or unnecessary. The work was never only about the task. It was about being allowed to do it without having to justify why.",
          metaphor:
            "A heavy object is carried through a crowd with a destination label attached. When the label falls off, people begin to question the burden.",
        },
        {
          title: "How does success shape identity over time?",
          answer:
            "Success becomes the mirror that tells a person who they are.",
          children:
            "Identity slowly forms around feedback. Achiever, provider, failure, winner. These roles depend on success signals to remain stable. When success disappears, identity feels hollow or undefined. This is not loss of self, but the collapse of an externally maintained outline.",
          metaphor:
            "A reflection is checked in shop windows along a street. One window goes dark. The walking continues without confirmation.",
        },
        {
          title: "Why does life feel meaningless without success?",
          answer:
            "Because meaning was deferred until success confirmed it.",
          children:
            "Many lives are lived in anticipation. The present is endured so the future can justify it. When success is removed, meaning must exist now or not at all. The discomfort is not emptiness. It is the absence of a future evaluator who was expected to declare the effort worthwhile.",
          metaphor:
            "Seeds are planted for someone who promised to admire the garden. The plants grow anyway. The absence is louder than the growth.",
        },
        {
          title: "Why does the success frame persist even when it harms?",
          answer:
            "Because success efficiently sorts effort into approved and unapproved lives.",
          children:
            "Success simplifies complexity. It ranks, compares, and legitimizes inequality. Systems depend on this sorting to function smoothly. Letting go of success removes a shared scoreboard, making lives harder to manage. The frame persists not because it is accurate, but because it is useful.",
          metaphor:
            "A ladder leans against a wall. Everyone climbs, even those who never chose the wall. Stepping off feels more dangerous than climbing.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about success here?",
          answer:
            "ZenTrust notices how success quietly replaces alignment as the reason to continue.",
          children:
            "ZenTrust does not argue against effort or ambition. It observes when success becomes the silent author of decisions. When success is assumed, choices feel natural. When it is removed, the structure of motivation becomes visible without correction or advice.",
          metaphor:
            "A compass slowly turns while the walker trusts it. The path feels steady until the landscape no longer matches.",
        },
        {
          title: "What remains when success is no longer guaranteed?",
          answer:
            "A clearer distinction between movement driven by habit and movement that continues without permission.",
          children:
            "Without success watching, some actions fall away. Others continue quietly, without explanation. What remains is not purity or virtue. It is honesty about what still moves when no future reward is promised. The question is not whether success will come, but what persists when it does not.",
          metaphor:
            "A stage stands empty after the audience leaves. The props remain. Someone is still standing there.",
        },
      ]}
      ending={[
        "Success has been authorizing effort.",
        "Removing it exposes what was conditional.",
        "What remains was never waiting for approval.",
      ]}
    />
  );
}
