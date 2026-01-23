// app/questions/land-repair-fails/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does land repair keep failing even as investment increases?",
  description:
    "A sharp examination of why land repair collapses when systems replace self-restoration with permanent intervention.",
  other: {
    category: "Nature & Land",
    subcategory: "land-repair-failure",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Why does land repair keep failing even as investment increases?"
      shortAnswer="Because modern repair replaces the land’s own recovery cycles with external inputs, preventing repair from ever completing."
      heroMetaphor="A field is patched every season with fresh boards. Each board holds for a while. The ground underneath is never allowed to settle."
      sections={[
        {
          title: "Why does land repair require constant repetition?",
          answer:
            "Land repair repeats because the system interrupts the land before recovery finishes.",
          children:
            "Healthy land completes cycles. Organic matter returns. Water infiltrates. Soil life rebuilds structure. Modern repair interrupts this by extracting outputs before recovery ends. The land never reaches completion. Each season begins from a weaker baseline. Repair becomes permanent because restoration is never allowed to close the loop.",
          metaphor:
            "A wound is cleaned every day but never covered. It stays open and sensitive.",
        },
        {
          title: "Why does repair appear successful at first?",
          answer:
            "Repair appears successful because inputs temporarily substitute for lost function.",
          children:
            "Fertilizers replace soil biology. Irrigation replaces infiltration. Chemicals replace ecological balance. These substitutions create visible results quickly. Crops grow. Yields spike. The appearance of repair hides the loss of internal function. When inputs stop, the failure becomes visible again.",
          metaphor:
            "Paint hides a crack in a wall. Rain reveals it later.",
        },
        {
          title: "Why does each repair create a new problem?",
          answer:
            "Each repair solves a surface symptom while deepening structural loss.",
          children:
            "When repair targets only what is visible, unseen relationships degrade. Soil compacts. Microbial networks collapse. Water runs off instead of sinking in. Each fix narrows options for the next season. The system grows more dependent on intervention. Repair becomes escalation.",
          metaphor:
            "A leak is sealed while pressure increases elsewhere in the pipe.",
        },
        {
          title: "Why does nearby forest not require repair?",
          answer:
            "The forest does not require repair because its cycles remain intact.",
          children:
            "Leaves return nutrients. Roots build structure. Shade regulates temperature. Life supports life without extraction. The forest is not efficient in human terms. It is complete in ecological terms. Repair is unnecessary where recovery is uninterrupted.",
          metaphor:
            "A wheel turns smoothly when nothing blocks its motion.",
        },
        {
          title: "What was removed from land repair without notice?",
          answer:
            "Time was removed from land repair.",
          children:
            "Recovery requires delay. Modern systems demand continuous output. Land is harvested before regeneration finishes. This converts repair into maintenance. Time is treated as loss instead of function. Without time, repair never resolves.",
          metaphor:
            "Bread is cut before it finishes baking. The center stays raw.",
        },
        {
          title: "Why does increasing effort worsen repair outcomes?",
          answer:
            "Because more effort accelerates extraction without restoring function.",
          children:
            "More machines, inputs, and interventions increase speed. Speed shortens recovery windows. The land responds with exhaustion rather than resilience. Effort amplifies damage when design blocks self-repair.",
          metaphor:
            "Pressing harder on a stuck door breaks the hinge.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about land repair?",
          answer:
            "ZenTrust notices where repair replaces restoration instead of enabling it.",
          children:
            "ZenTrust does not oppose effort or technology. It observes whether land is allowed to complete its own cycles. When repair prevents recovery, effort becomes obstruction. ZenTrust remains an observing presence, holding attention on the missing completion.",
          metaphor:
            "Hands keep adjusting a clock that only needed winding once.",
        },
        {
          title: "What remains when repair is allowed to finish?",
          answer:
            "Repair ends when recovery becomes possible again.",
          children:
            "When extraction pauses long enough, land reorganizes. Soil darkens. Water stays. Life returns without command. Repair stops being visible because it no longer needs to be performed. Completion replaces intervention.",
          metaphor:
            "Scaffolding is removed after the building stands on its own.",
        },
      ]}
      ending={[
        "Repair fails when recovery is interrupted.",
        "Effort cannot replace completion.",
        "Land heals when time is returned.",
      ]}
    />
  );
}
