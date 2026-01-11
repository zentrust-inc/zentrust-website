// app/questions/stress-eating-fawn-response/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does stress make us eat instead of act?",
  description:
    "An exploration of how modern stress blocks action and turns food into the last permitted release.",
  other: {
    category: "Health & Suffering",
    subcategory: "chronic-stress-metabolism",
  },
};

export default function StressEatingFawnPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does stress make us eat instead of act?"
      shortAnswer="Because modern stress prepares the body for action while quietly preventing action from ever occurring."
      heroMetaphor="Imagine sitting in a car with the engine revving, foot on the brake, fuel burning, and nowhere to go. The dashboard keeps flashing warnings, but the road ahead never opens. You stay seated, alert, and ready, waiting for a signal that never comes."
      sections={[
        {
          title: "Why does the usual explanation feel incomplete?",
          answer:
            "Because willpower and food choices explain behavior, not the pressure driving it.",
          metaphor:
            "Imagine blaming a warning light for a deeper mechanical problem. You cover the light with tape so it stops blinking. The engine keeps overheating anyway.",
          children:
            "Many people are told their eating reflects poor discipline. Yet the effort to control food often increases strain instead of relieving it. The explanation feels thin because it looks only at behavior, not at the conditions producing it. When pressure continues and relief is scarce, the body searches for any outlet it can access. Food is not the cause. It is the visible endpoint of a longer, hidden process.",
        },
        {
          title: "What does the body prepare for under stress?",
          answer:
            "The body prepares for immediate physical action, even when none is possible.",
          metaphor:
            "Imagine packing your bag for an urgent trip that keeps getting postponed. You stay dressed, alert, and ready, never fully unpacking. Days pass, but the readiness never turns into movement.",
          children:
            "When the brain senses threat, it signals the liver to release glucose so muscles and attention are fully fueled. This response evolved for running, fighting, or lifting. In modern stress, the threat is abstract and continuous. The preparation happens, but the action does not. The body remains in readiness without resolution, repeating the same cycle again and again.",
        },
        {
          title: "Why does blood sugar rise even without eating?",
          answer:
            "Because stress alone tells the liver to release fuel in anticipation of movement.",
          metaphor:
            "Imagine stocking a kitchen every morning for guests who never arrive. The shelves stay full, but nothing gets used. Each day, more supplies are added anyway.",
          children:
            "Stress hormones signal the liver to release glucose so the brain stays alert and muscles stay ready. This happens even before food enters the picture. In a physical threat, that sugar would be burned off quickly. In modern stress, the body stays seated. The fuel remains unused, circulating in the blood, while insulin works harder to contain it.",
        },
        {
          title: "Why does eating feel calming under stress?",
          answer:
            "Because food briefly dampens the stress response when nothing else is allowed to.",
          metaphor:
            "Imagine finding a quiet corner in a loud room where the noise fades for a moment. You stay longer than planned because it is the only place that feels tolerable.",
          children:
            "High fat and high sugar foods trigger dopamine and reduce stress hormone activity. The relief is real, even if temporary. In many modern systems, other forms of release are restricted, moralized, or impractical. Food remains accessible and socially acceptable. Eating becomes less about hunger and more about quieting an overactivated nervous system.",
        },
        {
          title: "What happens when action is never allowed?",
          answer:
            "Fight and flight shut down, leaving only compliance and vigilance.",
          metaphor:
            "Imagine being ready to run or push back, but realizing neither is permitted. You lower your voice, stay polite, and absorb the pressure instead.",
          children:
            "In earlier environments, stress ended in movement. Today, social rules, economic dependence, and constant monitoring block physical responses. You cannot run from an email or fight a deadline. The nervous system adapts by fawning, staying agreeable, responsive, and outwardly calm. The body carries the unused energy internally as tension, glucose, and fatigue.",
        },
        {
          title: "Why does insulin resistance appear over time?",
          answer:
            "Because cells protect themselves from constant energy overflow.",
          metaphor:
            "Imagine being offered food continuously, even when you are full. Eventually, you stop opening the door.",
          children:
            "With repeated stress-driven glucose release and stress-soothing eating, insulin levels remain high. Cells respond by reducing their sensitivity. This is not failure. It is protection against overload. Insulin resistance reflects a system that has been managing excess preparation for too long without resolution.",
        },
        {
          title: "What question does ZenTrust ask here?",
          answer:
            "What pressure am I adapting to without noticing?",
          metaphor:
            "Imagine realizing you have been holding your breath, not because you chose to, but because the room never felt safe to exhale.",
          children:
            "This question does not ask what you should eat or how to behave. It asks what kind of environment makes constant readiness feel necessary. When action is blocked and rest feels unsafe, the body adapts quietly. Seeing that adaptation clearly changes how responsibility and compassion are understood.",
        },
        {
          title: "What becomes possible once this pattern is seen?",
          answer:
            "The pressure can be addressed without fighting the body.",
          metaphor:
            "Imagine finally releasing the brake after realizing the engine was never the problem.",
          children:
            "When stress is recognized as unresolved pressure rather than personal failure, the body no longer needs to signal through excess eating or metabolic strain. Movement can complete stress cycles. Rest can feel permitted. Eating can return to nourishment rather than relief. Nothing is forced. The system softens once the conditions change.",
        },
      ]}
      ending={[
        "The body adapts before it complains.",
        "Signals appear when pressure stays unresolved.",
        "Seeing the pattern changes where effort is placed.",
      ]}
    />
  );
}
