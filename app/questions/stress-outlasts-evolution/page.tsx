import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern stress last longer than nature intended?",
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
      question="Why does modern stress last longer than nature intended?"
      shortAnswer="Because stress systems were built for short bursts, but modern stress rarely ends."
      heroMetaphor="Imagine holding your breath to swim across a small pool. Now imagine being told to do that through the whole day. No one calls it drowning because you are still standing."
      sections={[
        {
          title: "Why does stress feel heavy even when nothing is happening?",
          answer:
            "Because stress keeps the body ready when situations never feel complete.",
          metaphor:
            "Imagine waiting for a delivery that keeps getting delayed. You keep listening for the door. The day passes, but you never settle.",
          children:
            "People can feel stress while sitting still. The body reacts to uncertainty, evaluation, and lack of control as unresolved stress signals. There is no clear end point where stress can stand down. Readiness stays on in the background. That ongoing stress consumes energy, disrupts sleep, and changes appetite. It feels like pressure without an event.",
        },
        {
          title: "Why does the usual stress explanation fall short?",
          answer:
            "Because stress is treated as a mindset problem instead of a duration problem.",
          metaphor:
            "Imagine blaming a phone battery for draining quickly. You ignore the apps running nonstop. You keep lowering the screen brightness.",
          children:
            "Many explanations frame stress as weakness, poor coping, or attitude. Those ideas focus on the person, not the stress exposure. The body responds to how long stress lasts, not how positive someone feels. When stress is continuous, the issue is not resilience. The issue is that the stress signal does not stop.",
        },
        {
          title: "What stress system is actually doing the work?",
          answer:
            "Stress chemistry keeps mobilizing energy for action that should be brief.",
          metaphor:
            "Imagine a flashlight designed for emergencies. You keep it on all night. By morning, the batteries are warm.",
          children:
            "Stress systems evolved for short episodes. Adrenaline and cortisol rise, glucose becomes available, and focus narrows. This stress response is designed to peak and resolve, often within minutes and usually under about thirty minutes of intense stress. After that, the body expects recovery. When stress stays on, the same chemistry becomes a slow drain.",
        },
        {
          title: "How does long-term stress play out over time?",
          answer:
            "Stress forces the body to trade repair for ongoing readiness.",
          metaphor:
            "Imagine a shop that stays open late every night. The shelves get messier. No one has time to restock properly.",
          children:
            "With prolonged stress, the body keeps choosing vigilance over restoration. Digestion, immune balance, and deep sleep are pushed aside by stress readiness. Small problems accumulate because stress prevents completion. People may appear functional while feeling worn down. Over time, stress shows itself through fatigue, pain, mood shifts, or metabolic strain.",
        },
        {
          title: "What does chronic stress look like inside the body?",
          answer:
            "Stress shifts fuel use, increases inflammation, and shortens recovery.",
          metaphor:
            "Imagine carrying groceries with arms already tired. You tighten your grip anyway. The bags cut into your fingers.",
          children:
            "When stress hormones stay elevated, glucose release becomes frequent and insulin remains active. Muscles and nerves recover more slowly under stress. Inflammation can rise because repair work is delayed. These stress-related changes may appear separate, but they share the same pattern: too much time under stress and too little time returning to baseline.",
        },
        {
          title: "Why does modern stress keep repeating?",
          answer:
            "Because modern stressors are designed to be continuous.",
          metaphor:
            "Imagine a faucet that never fully turns off. You learn to live with the drip. You stop expecting silence.",
          children:
            "Modern stress often comes from money, evaluation, surveillance, and dependence. These stressors are not single events. They are ongoing conditions. People adapt by staying reachable, polite, and productive under stress. The costs appear privately, so the system does not see them. Stress persistence is not always a choice. It is often the price of participation.",
        },
        {
          title: "What stress question does ZenTrust ask here?",
          answer:
            "What stress am I being asked to carry without an endpoint?",
          metaphor:
            "Imagine realizing the test has no final page. You keep flipping forward. The stack never thins.",
          children:
            "This stress question does not demand action or resistance. It simply names the duration problem. When the body is reacting to prolonged stress, self-blame becomes misplaced. Seeing stress as a time issue shifts attention away from personality and toward conditions. That clarity alone reduces confusion.",
        },
        {
          title: "How does seeing stress differently change things?",
          answer:
            "Stress eases when its duration is named accurately.",
          metaphor:
            "Imagine noticing you have been clenching your jaw. You do not force it open. The tension loosens when it is seen.",
          children:
            "When stress is understood as prolonged exposure, exhaustion makes sense. The question stops being why you cannot handle stress. It becomes what stress you are handling for too long. Nothing needs to be fixed immediately. The body often softens when stress is no longer framed as a personal failure. Perspective returns.",
        },
      ]}
      ending={[
        "Stress evolved for cycles, not permanence.",
        "Stress duration matters even when intensity is low.",
        "Naming stress timelines reduces confusion.",
      ]}
    />
  );
}
