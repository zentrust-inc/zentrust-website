// app/questions/seeking-freedom-cage/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does seeking freedom begin to feel like a cage?",
  description:
    "A sharp examination of how seeking freedom converts seeing into management, turning relief into a project that never completes.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "seeking-freedom-cage",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why does seeking freedom begin to feel like a cage?"
      shortAnswer="Because once freedom is treated as an outcome to be achieved, it becomes a managed project that replaces direct seeing with continuous self-correction."
      heroMetaphor="A person keeps adjusting a chair that is already level. Each adjustment feels necessary because stopping feels careless. The floor never changes."
      sections={[
        {
          title: "Why does seeking freedom rarely reach an endpoint?",
          answer:
            "Seeking freedom persists because it converts relief into an ongoing task rather than a condition.",
          children:
            "Seeking often begins with the hope of ease, but gradually becomes a routine of maintenance. There is always another habit to refine or insight to secure. Days pass with effort but without arrival. Completion is deferred because stopping feels premature. The structure continues not because it works, but because it has become familiar. Seeking survives by redefining continuation as responsibility.",
          metaphor:
            "A checklist is reviewed after the work is done. Boxes are checked again. The room stays the same.",
        },
        {
          title: "How does seeking freedom turn into identity?",
          answer:
            "Seeking freedom becomes identity when rules and practices organize who you are rather than what you notice.",
          children:
            "Practices can begin as tools, but over time they shape self-image. Attention shifts from immediate experience to correctness and compliance. Small deviations feel threatening. The sense of self becomes tied to being someone who seeks properly. Freedom is no longer sensed directly, but measured through adherence. The role becomes stable even if the original tension remains unresolved.",
          metaphor:
            "A uniform meant for a short task is worn daily. The fabric softens. Removing it feels strange.",
        },
        {
          title: "Why does effort continue even when relief does not appear?",
          answer:
            "Effort continues because seeking freedom is framed as future-oriented progress.",
          children:
            "When freedom is placed in the future, effort feels justified indefinitely. Discomfort is tolerated because arrival is assumed. Time invested becomes proof that stopping would be failure. Even rest is interpreted as regression. The loop sustains itself by promising that the next refinement will finally resolve what the last one did not.",
          metaphor:
            "A sign on the road stays the same distance away. The pace changes. The distance does not.",
        },
        {
          title: "How does complexity trap seeking freedom?",
          answer:
            "Complexity delays verification, making freedom dependent on authority rather than direct observation.",
          children:
            "Highly structured systems raise the cost of questioning. Doubt is reframed as misunderstanding or insufficient training. Clarity is postponed to later stages. Time invested becomes a reason to continue rather than a reason to stop. The system protects itself by making exit feel like waste instead of resolution.",
          metaphor:
            "A panel of buttons fills the wall. Instructions grow thicker. The room stays quiet.",
        },
        {
          title: "Why does seeking freedom become something to defend?",
          answer:
            "Seeking freedom can provide stability and belonging that replace the relief it promised.",
          children:
            "The identity of a seeker offers language, community, and predictability. It creates a place to stand even when ease does not arrive. Over time, the role itself is protected. Questioning the process feels like risking belonging. Freedom becomes something performed rather than something noticed. The original motivation fades behind the need to remain oriented within the structure.",
          metaphor:
            "A seat in a room becomes familiar. People greet the seat. Standing elsewhere feels disruptive.",
        },
        {
          title: "Why do systems reward continued seeking over completion?",
          answer:
            "Systems depend on participation, and completion removes the participant.",
          children:
            "Those who continue seeking attend, comply, and reinforce the structure. Someone who no longer seeks has no metrics to display and no role to perform. They do not feed continuity. The system does not need to oppose completion. It simply has no use for it. Continuation is rewarded because it sustains the cycle.",
          metaphor:
            "Parts are polished at a bench all day. Finished parts are set aside. The bench stays busy.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about seeking freedom?",
          answer:
            "ZenTrust notices how seeking freedom becomes the mechanism that maintains dissatisfaction.",
          children:
            "ZenTrust does not offer a better path or method. It observes the moment when the effort to fix experience is seen as unnecessary. When seeking pauses, there is no replacement project waiting. The absence of effort can feel disorienting because so much meaning was invested in trying. ZenTrust remains an observing presence only.",
          metaphor:
            "A machine is turned off. The hum stops. The room sounds ordinary.",
        },
        {
          title: "What remains when seeking freedom is no longer a project?",
          answer:
            "Ordinary life remains without being organized around improvement or escape.",
          children:
            "When seeking ends, nothing special replaces it. Sensations occur without commentary. Decisions happen without reference to progress. There is no position to defend and no result to report. The absence of seeking may look unimpressive from the outside, but it quietly removes the pressure that sustained the cycle.",
          metaphor:
            "A heavy bag is set down after a long walk. The road stays the same. The shoulders notice first.",
        },
      ]}
      ending={[
        "Seeking turns relief into work.",
        "Work sustains the cage.",
        "What remains was never missing.",
      ]}
    />
  );
}
