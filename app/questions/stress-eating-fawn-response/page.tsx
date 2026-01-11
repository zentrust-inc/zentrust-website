// app/questions/stress-eating-fawn-response/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does stress make us eat instead of act?",
  description:
    "An examination of how modern systems demand constant readiness while preventing discharge.",
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
      shortAnswer="Because the system requires readiness but penalizes release."
      heroMetaphor="Imagine a worker required to keep tools in hand all day but forbidden to use them. The tools grow heavier as hours pass. Dropping them is treated as failure, not relief."
      sections={[
        {
          title: "Why does the usual explanation protect the wrong thing?",
          answer:
            "Because it individualizes a pattern that benefits from remaining invisible.",
          metaphor:
            "Imagine blaming a worker’s posture while ignoring the load they are ordered to carry. The complaint stays focused on the body. The demand stays untouched.",
          children:
            "Stress eating is usually explained as poor coping or emotional weakness. That explanation keeps attention on personal regulation while leaving the conditions intact. When pressure produces predictable behavior across millions of people, the issue is not choice. The explanation feels thin because it quietly protects the structure that requires adaptation but refuses responsibility for its effects.",
        },
        {
          title: "What kind of stress dominates modern life?",
          answer:
            "Stress that requires availability without permitting completion.",
          metaphor:
            "Imagine being summoned repeatedly but never dismissed. You stay alert, half-standing, unsure when you are allowed to sit.",
          children:
            "Modern stress rarely ends in physical action. It demands responsiveness, politeness, and constant availability. You must stay ready while remaining contained. This form of stress does not resolve. It accumulates. The body prepares for action that cannot occur, not by accident, but because action would interrupt the system’s smooth operation.",
        },
        {
          title: "Why is fuel released when movement is blocked?",
          answer:
            "Because readiness is extracted even when discharge is denied.",
          metaphor:
            "Imagine a generator forced to stay on while disconnected from anything it can power. The noise continues. The energy goes nowhere.",
          children:
            "Stress hormones release glucose to support action. In environments where action is discouraged, that fuel has nowhere to go. The body becomes a holding tank for unused readiness. Blood sugar rises not because of excess desire, but because preparation is demanded without permission to finish the cycle.",
        },
        {
          title: "Why does eating become the fallback?",
          answer:
            "Because it is a private discharge that does not disrupt compliance.",
          metaphor:
            "Imagine tightening a valve just enough to prevent rupture. The pressure remains, but the pipe does not burst.",
          children:
            "Eating dampens stress signals without challenging the source of pressure. It happens quietly, alone, and without consequence to the system. Other forms of release draw attention, create friction, or risk exclusion. Food absorbs excess readiness while leaving behavior intact. It is tolerated precisely because it keeps everything else running.",
        },
        {
          title: "Why does the fawn response dominate?",
          answer:
            "Because cooperation is safer than resolution.",
          metaphor:
            "Imagine learning that pushing back costs more than staying agreeable. You adjust your posture, not the situation.",
          children:
            "Fight and flight interrupt systems. Fawning maintains them. By staying pleasant, responsive, and contained, the individual absorbs strain internally. This is not a failure of courage. It is a rational adaptation to environments where dissent, rest, or exit carry penalties.",
        },
        {
          title: "Why does metabolism eventually resist?",
          answer:
            "Because the body refuses infinite buffering.",
          metaphor:
            "Imagine a sponge forced to absorb water without being wrung out. Eventually it stops taking more.",
          children:
            "Insulin resistance reflects saturation, not neglect. Cells reduce uptake to protect themselves from constant overflow. This shift is not accidental. It is the body’s last remaining boundary when no external boundary is permitted.",
        },
        {
          title: "What question does ZenTrust place here?",
          answer:
            "Where am I absorbing costs so something else can remain uninterrupted?",
          metaphor:
            "Imagine noticing that the weight you carry allows others to walk unburdened.",
          children:
            "This question redirects attention away from self-correction and toward structural roles. It asks what depends on your quiet endurance. Seeing this does not demand rebellion or change. It restores accuracy about what is actually happening.",
        },
        {
          title: "What changes once this is seen clearly?",
          answer:
            "Urgency loosens without instruction.",
          metaphor:
            "Imagine setting the load down without announcing it.",
          children:
            "When the pattern is recognized, the body no longer needs to compensate alone. Nothing has to be fixed immediately. Pressure eases because it is no longer misnamed. Rest appears without effort when responsibility returns to where it belongs.",
        },
      ]}
      ending={[
        "Some adaptations keep systems stable.",
        "The body pays when systems do not.",
        "Seeing this changes nothing and everything.",
      ]}
    />
  );
}
