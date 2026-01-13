// app/questions/success-without-guarantee/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Would you still choose life without success?",
  description:
    "A question-led exploration of what remains when success is no longer guaranteed by society’s standards.",
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
      shortAnswer="Because much of what we do is quietly shaped by the promise of success, removing that promise exposes whether action comes from alignment or conditioning."
      heroMetaphor="Imagine walking on a road with mile markers that suddenly disappear. You keep moving, but the sense of progress fades. Each step still lands, yet no sign tells you how far you have come."
      sections={[
        {
          title: "Why does the question of success feel unsettling?",
          answer:
            "Because success has been acting as an invisible justification for effort.",
          metaphor:
            "Imagine lifting boxes because someone promised they would be counted later. The counting never happens. Your arms are tired and the room looks the same.",
          children:
            "From early life, effort is paired with future reward. Study now, work harder, endure longer, and success is expected to arrive as proof that it was worth it. When that guarantee is removed, effort loses its narrative anchor. The discomfort does not come from laziness, but from realizing how much meaning was borrowed from an outcome that might never appear.",
        },
        {
          title: "Why does the obvious answer about success and motivation fall short?",
          answer:
            "Because motivation is often tied to success recognition, not interest.",
          metaphor:
            "Imagine running on a track with people clapping at every lap. One day the stands are empty. Your legs move the same, but the air feels different.",
          children:
            "It is easy to say people are motivated by passion, but passion is frequently reinforced by applause. Praise, promotion, and status quietly feed persistence. When success is removed, what remains is not a lack of drive, but a lack of reflected identity. The question reveals how much motivation was borrowed from being seen as successful.",
        },
        {
          title: "What is success actually doing beneath the surface?",
          answer: "Success provides social permission for effort to exist.",
          metaphor:
            "Imagine carrying a heavy object through a crowd. People step aside when they see a destination label. When the label falls off, they begin to question why you are carrying it.",
          children:
            "Success tells others and yourself that the struggle has a reason. It shields effort from scrutiny. Without success, actions can appear strange, excessive, or unnecessary. The anchor was never only the work itself, but the shared belief that it would eventually be validated as success.",
        },
        {
          title: "How does success shape identity over time?",
          answer:
            "Success becomes a mirror that tells a person who they are allowed to be.",
          metaphor:
            "Imagine checking your reflection in a shop window every few steps. The window suddenly goes dark. You keep walking, unsure how you look.",
          children:
            "Over time, success feedback shapes identity. Achiever, provider, winner, failure. When success disappears, identity loses its outline. This can feel like emptiness, but it is often the first moment when identity is no longer being continuously adjusted to match external signals of success.",
        },
        {
          title: "Why does removing success feel like losing meaning?",
          answer: "Because meaning has been outsourced to future success approval.",
          metaphor:
            "Imagine planting seeds because someone promised to return and admire the garden. The plants grow anyway. The absence is felt more than the growth.",
          children:
            "Meaning is often deferred until success confirms it. The present becomes a waiting room. When success is removed, meaning must be found in the act itself, which can feel unfamiliar. The discomfort is not meaninglessness, but the absence of a familiar evaluator who would later declare success.",
        },
        {
          title: "Why does the success frame persist even when it harms?",
          answer:
            "Because success organizes society by sorting effort into winners and losers.",
          metaphor:
            "Imagine a ladder leaning against a wall. Everyone climbs, even those who never chose the wall. Stepping off feels riskier than continuing upward.",
          children:
            "Success simplifies complexity. It ranks lives, justifies inequality, and offers a shared scoreboard. Letting go of success removes a common language for comparison. The frame persists not because it is accurate, but because it is efficient for systems that need order and obedience to the same success measure.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about success here?",
          answer:
            "ZenTrust notices how success quietly replaces alignment as the reason to continue.",
          metaphor:
            "Imagine following a compass that slowly turns without you noticing. The direction feels steady. Only later do you realize the landscape changed.",
          children:
            "ZenTrust does not argue against ambition or effort. It notices how success becomes the silent author of decisions. When success is guaranteed, choices feel easy. When it is removed, the underlying assumptions come into view without requiring judgment or correction.",
        },
        {
          title: "What remains when success is no longer guaranteed?",
          answer:
            "A clearer view of whether action comes from habit, fear, or genuine interest without success watching.",
          metaphor:
            "Imagine a stage after the audience leaves. The lights dim but the props remain. Someone still stands there, unsure whether to continue speaking.",
          children:
            "Without success as a promise, action becomes quieter. Some activities fall away. Others persist without explanation. What remains is not purity or wisdom, but honesty about what still moves without applause. The question is not whether success will arrive, but what keeps moving when it does not.",
        },
      ]}
      ending={[
        "Nothing here asks you to abandon success.",
        "Nothing here praises obscurity or failure.",
        "It only asks what would remain without success watching.",
      ]}
    />
  );
}
