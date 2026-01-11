import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does regular exercise still not make us healthier?",
  description:
    "A question about why modern exercise often fails to reduce disease and suffering.",
  other: {
    category: "Health & Suffering",
    subcategory: "exercise-stress-mismatch",
  },
};

export default function ExerciseNotHealthierPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does regular exercise still not make us healthier?"
      shortAnswer="Because movement is being used to manage chronic stress it was never designed to resolve."
      heroMetaphor="Imagine revving an engine every day to keep it from stalling. The noise feels productive, but the underlying problem never clears. Over time, the wear quietly increases."
      sections={[
        {
          title: "Why does the promise of exercise feel confusing?",
          answer:
            "Because effort increases while illness often does not decrease.",
          metaphor:
            "Imagine paying more each month for repairs while the machine keeps breaking.",
          children:
            "Exercise is widely promoted as a solution to modern illness. Many people follow the guidance carefully, yet fatigue, metabolic problems, pain, and stress-related disease persist. The confusion comes from doing what is recommended and still feeling unwell. When effort rises without relief, the explanation needs to look beyond motivation or consistency.",
        },
        {
          title: "What kind of movement did the body evolve for?",
          answer:
            "Short bursts of intense action followed by full recovery.",
          metaphor:
            "Imagine sprinting to escape danger, then sitting down once safety is reached.",
          children:
            "Human stress physiology evolved for brief, high-intensity events. Fight or flight mobilized energy quickly, then shut off once the threat ended. These cycles typically lasted minutes, not hours. After action, the body expected rest, repair, and return to baseline. That rhythm shaped how hormones, muscles, and metabolism developed.",
        },
        {
          title: "What changed in modern stress?",
          answer:
            "The stress no longer ends.",
          metaphor:
            "Imagine an alarm that never stops ringing.",
          children:
            "Modern stress is psychological, social, and continuous. Deadlines, surveillance, financial pressure, and social evaluation do not resolve through movement. The body stays in a low-grade fight–flight state for days or years. There is no clear moment when the system is allowed to stand down.",
        },
        {
          title: "Why doesn’t longer exercise fix this?",
          answer:
            "Because it adds load without completing the stress cycle.",
          metaphor:
            "Imagine running harder on a treadmill while the exit stays locked.",
          children:
            "Long-duration exercise extends energy expenditure but does not resolve the original stress signal. The body remains activated before, during, and after the workout. Instead of completing a stress response, exercise becomes another demand layered on top of existing strain. Cortisol stays elevated. Recovery is partial. The system never fully resets.",
        },
        {
          title: "Why do metabolic problems still appear?",
          answer:
            "Because the body is managing excess activation, not inactivity.",
          metaphor:
            "Imagine keeping the lights on day and night to avoid darkness.",
          children:
            "Chronic stress releases glucose even without eating. Exercise does not always burn this off, especially when activation remains high. Insulin works harder to contain circulating fuel. Over time, tissues protect themselves by responding less. This pattern reflects constant readiness, not laziness or lack of effort.",
        },
        {
          title: "Why does exercise sometimes worsen fatigue or pain?",
          answer:
            "Because the body is already operating near its limit.",
          metaphor:
            "Imagine tightening a bolt that is already stripped.",
          children:
            "When recovery is incomplete, adding more demand increases wear instead of resilience. Muscles, joints, and the nervous system adapt by enduring. Pain and exhaustion appear not because movement is wrong, but because the context in which it occurs is already overloaded.",
        },
        {
          title: "What question does ZenTrust ask here?",
          answer:
            "What is exercise being asked to compensate for?",
          metaphor:
            "Imagine using a fan to cool a room with a fire still burning.",
          children:
            "This question shifts attention away from exercise itself and toward what it is covering. When movement is tasked with fixing chronic stress, social pressure, and unresolved threat, it cannot succeed. Seeing this removes blame without demanding immediate change.",
        },
        {
          title: "What becomes possible once this mismatch is seen?",
          answer:
            "Movement and recovery can separate again.",
          metaphor:
            "Imagine turning the engine off instead of revving it.",
          children:
            "When exercise is no longer expected to solve chronic stress, it loses its burden. Short, intense movement can complete stress cycles. Rest can actually restore. Health improves not through more effort, but through alignment with how the body was designed to recover.",
        },
      ]}
      ending={[
        "More effort does not always mean more health.",
        "The body suffers when roles are misassigned.",
        "Seeing the mismatch reduces unnecessary strain.",
      ]}
    />
  );
}
