// app/questions/why-adapting-to-society-feels-like-loss/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does adapting to society feel like loss?",
  description:
    "A sharp examination of how adaptation functions as a narrowing mechanism that trades internal range for external stability.",
  other: {
    category: "Mind & Experience",
    subcategory: "adaptation-narrowing",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does adapting to society feel like loss?"
      shortAnswer="Because adaptation rewards narrowing behavior to fit existing structures, extracting range and spontaneity that once allowed a fuller inner life."
      heroMetaphor="A river is diverted into concrete channels so it can pass safely through a city. Flooding stops. The wetlands downstream quietly dry up."
      sections={[
        {
          title: "What does adapting to society actually require?",
          answer:
            "It requires learning which expressions are rewarded and which must be muted.",
          children:
            "Adaptation begins with observation. You notice which behaviors are praised, which are ignored, and which create friction. Over time, this becomes automatic. Certain questions are not asked. Certain impulses are delayed or dropped. Function improves while range quietly contracts. Nothing breaks. Something narrows.",
          metaphor:
            "A radio is tuned to a single clear station. The static disappears. So does the rest of the spectrum.",
        },
        {
          title: "Why does adaptation feel necessary rather than chosen?",
          answer:
            "Because safety and belonging are tied to predictability.",
          children:
            "Human systems reward reliability. Predictable people are easier to place, manage, and trust. Adapting becomes a survival strategy before it becomes an identity. The nervous system learns that fitting in reduces risk. What begins as protection slowly becomes habit.",
          metaphor:
            "Shoes are tightened for a long walk. The feet stop feeling the ground.",
        },
        {
          title: "What is gradually reduced through adaptation?",
          answer:
            "Range of expression, curiosity, and internal permission.",
          children:
            "Parts of the self that do not serve immediate roles lose airtime. Curiosity narrows toward what is useful. Expression becomes selective. Spontaneity waits for permission that never arrives. The loss is not dramatic. It is cumulative.",
          metaphor:
            "Branches are trimmed each season so they do not touch the road.",
        },
        {
          title: "Why does success not prevent this feeling?",
          answer:
            "Because success measures fit, not fullness.",
          children:
            "Achievement confirms alignment with external standards. It does not measure internal coherence. A life can look stable, respected, and complete while still feeling reduced from the inside. Success stabilizes the structure that required narrowing in the first place.",
          metaphor:
            "A container is perfectly filled. The contents no longer move.",
        },
        {
          title: "Why does the loss remain unnamed?",
          answer:
            "Because it has no metric and no visible failure.",
          children:
            "Nothing is obviously wrong. Bills are paid. Roles are held. Relationships function. Without a clear problem, the sense of loss feels personal rather than structural. The system reads stability as success and has no language for quiet contraction.",
          metaphor:
            "A room slowly loses air. No alarm sounds.",
        },
        {
          title: "Why do some people eventually step away?",
          answer:
            "Because the cost of continued narrowing becomes perceptible.",
          children:
            "Over time, the effort to remain compressed produces fatigue or quiet grief. Stepping away is often misread as rebellion or weakness. Internally, it is experienced as relief from sustained reduction rather than rejection of society itself.",
          metaphor:
            "A hand opens after gripping a tool for too long.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about adaptation?",
          answer:
            "ZenTrust notices where adaptation replaces wholeness with function.",
          children:
            "ZenTrust does not oppose adaptation or participation. It observes when fitting in requires sustained self-reduction. By making the trade visible, confusion softens without assigning blame. ZenTrust remains an observing presence only.",
          metaphor:
            "A mirror reflects what was compressed, not what should change.",
        },
        {
          title: "What remains when the mechanism is seen clearly?",
          answer:
            "Distinction between belonging and self-erasure.",
          children:
            "Seeing the mechanism does not demand withdrawal or resistance. It clarifies why adaptation can feel costly even when it works. What remains is a quieter understanding of which compromises were structural and which were optional.",
          metaphor:
            "The channel is visible. The river is remembered.",
        },
      ]}
      ending={[
        "Adaptation stabilizes systems by narrowing people.",
        "Loss appears where range was exchanged for safety.",
        "Seeing the trade restores orientation.",
      ]}
    />
  );
}
