import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern stress outlast what we evolved for?",
  description:
    "A question about stress lasting longer than the body’s threat systems were built to sustain.",
  other: {
    category: "Health & Suffering",
    subcategory: "chronic-stress-duration",
  },
};

export default function StressOutlastsEvolutionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does modern stress outlast what we evolved for?"
      shortAnswer="Because threat systems were built for short bursts, but modern pressure rarely ends."
      heroMetaphor="Imagine holding your breath to swim across a small pool. Now imagine being told to do that through the whole day. No one calls it drowning because you are still standing."
      sections={[
        {
          title: "Why does stress feel heavy even when nothing is happening?",
          answer:
            "Because the body stays ready when the situation never feels complete.",
          metaphor:
            "Imagine waiting for a delivery that keeps getting delayed. You keep listening for the door. The day passes, but you never settle.",
          children:
            "People can feel stressed while sitting still. The body reacts to uncertainty, evaluation, and lack of control as unresolved threat. There is no clear end point where it can stand down. Readiness stays on in the background. That ongoing readiness consumes energy, disrupts sleep, and changes appetite. It feels like pressure without an event.",
        },
        {
          title: "Why does the obvious explanation fall short?",
          answer:
            "Because it frames stress as a mindset problem instead of a time-under-load problem.",
          metaphor:
            "Imagine blaming a phone battery for draining quickly. You ignore the apps running nonstop. You keep lowering the screen brightness.",
          children:
            "Many explanations focus on attitude, resilience, or positive thinking. Those can help at the edges, but they do not shorten exposure. The body responds to how long the signal lasts, not how noble the person feels. When stress is continuous, the question is not why someone cannot cope better. The question is why the demand does not stop.",
        },
        {
          title: "What is actually doing the work under stress?",
          answer:
            "Fight-flight chemistry keeps mobilizing fuel for action that is meant to be brief.",
          metaphor:
            "Imagine a flashlight designed for emergencies. You keep it on all night. By morning, the batteries are warm.",
          children:
            "Threat systems evolved for quick episodes. Adrenaline and cortisol rise, glucose becomes available, and attention narrows. This mode is designed to peak and resolve, often within minutes and commonly under about thirty minutes of intense activation. After that, the body expects recovery and repair. When the signal stays on, the same chemistry becomes a slow drain.",
        },
        {
          title: "How does this play out over time?",
          answer:
            "The body trades long-term repair for short-term readiness.",
          metaphor:
            "Imagine a shop that stays open late every night. The shelves get messier. No one has time to restock properly.",
          children:
            "With prolonged stress, the body keeps choosing vigilance over restoration. Digestion, immune balance, and deep sleep are crowded out. Small problems accumulate because the system cannot complete its cycles. People can appear functional while feeling worn down. Eventually the body signals through fatigue, pain, mood shifts, or metabolic changes. The timeline is gradual, which makes the cause harder to name.",
        },
        {
          title: "What does this look like inside the body?",
          answer:
            "Fuel management shifts, inflammation rises, and recovery becomes shallow.",
          metaphor:
            "Imagine carrying groceries with arms already tired. You tighten your grip anyway. The bags cut into your fingers.",
          children:
            "When cortisol stays elevated, glucose release becomes frequent. Insulin remains active more often. Muscles and nerves recover more slowly. Inflammation can rise because repair work is delayed. These changes can look like separate problems, but they share a common feature: the body is spending too much time in readiness and not enough time returning to baseline.",
        },
        {
          title: "Why does the pattern persist in modern life?",
          answer:
            "Because many pressures are designed to be continuous and hard to exit.",
          metaphor:
            "Imagine a faucet that never fully turns off. You learn to live with the drip. You stop expecting silence.",
          children:
            "Modern stress is often tied to money, reputation, monitoring, and dependence. These are not single events that end. They are conditions that continue. People adapt by staying available, polite, and productive. The costs show up privately, so the system does not register them. Persistence is not always a personal choice. It can be the only way to remain included.",
        },
        {
          title: "What question does ZenTrust ask here?",
          answer:
            "What pressure am I being asked to endure without an endpoint?",
          metaphor:
            "Imagine realizing the test has no final page. You keep flipping forward. The stack never thins.",
          children:
            "This question does not demand escape or confrontation. It simply names the duration problem clearly. When the body is reacting to time under pressure, self-blame becomes misplaced. Seeing the missing endpoint shifts responsibility away from personality and toward conditions. That clarity alone reduces confusion.",
        },
        {
          title: "Return to the reader: what changes once duration is seen?",
          answer:
            "Urgency softens because the strain is finally named accurately.",
          metaphor:
            "Imagine noticing you have been clenching your jaw. You do not force it open. The tension loosens when it is seen.",
          children:
            "When modern stress is recognized as prolonged, it becomes easier to understand why the body feels depleted. The question stops being why you cannot handle it. It becomes what you are handling for too long. Nothing needs to be solved immediately. The body often quiets once the story stops blaming the person for a time problem. Proportion returns.",
        },
      ]}
      ending={[
        "Bodies evolved for cycles, not permanence.",
        "Duration matters even when intensity is low.",
        "Naming the timeline reduces confusion.",
      ]}
    />
  );
}
