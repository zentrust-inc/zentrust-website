// app/questions/systemic-gaslighting-power/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern power feel like gaslighting?",
  description:
    "A sharp examination of how modern power maintains control by destabilizing perception rather than issuing direct commands.",
  other: {
    category: "Schools & Systems",
    subcategory: "systemic-gaslighting",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does modern power feel like gaslighting?"
      shortAnswer="Because modern power preserves itself by fragmenting shared reality, forcing individuals to doubt their own perception instead of confronting the structure producing the distortion."
      heroMetaphor="A hallway is built with solid floors and invisible walls. You walk straight, but keep bumping into something you cannot see. Others tell you the hallway is clear."
      sections={[
        {
          title: "Why does systemic gaslighting feel personal?",
          answer:
            "Because distortion is delivered at the level of individual perception.",
          children:
            "Systemic gaslighting does not arrive as a single announcement. It appears through small dismissals, softened contradictions, and missing acknowledgments. Each moment lands inside one person’s experience. Because there is no visible perpetrator, the body assumes the error must be internal. When many people experience the same pattern separately, the structure remains hidden while self-doubt multiplies.",
          metaphor:
            "A floorboard creaks under one foot. The room stays silent. You lift your foot and try again.",
        },
        {
          title: "Why is systemic gaslighting hard to prove?",
          answer:
            "Because it operates through shifting frames rather than false facts.",
          children:
            "Facts may remain technically accurate while their meaning is continuously reassigned. What was a concern becomes an attitude. What was observed becomes misinterpretation. Each reframing is plausible on its own. The cumulative effect is confusion without a clear lie to confront. Proof dissolves because the ground keeps moving.",
          metaphor:
            "A map keeps updating while you walk. The landmarks stay. The route does not.",
        },
        {
          title: "What actually sustains the gaslighting?",
          answer:
            "The repetition of denial paired with authority.",
          children:
            "When denial repeats from positions of power, it gains weight regardless of accuracy. Over time, the nervous system learns that noticing costs more than ignoring. The effort to stay oriented becomes exhausting. Withdrawal looks like relief. Gaslighting does not need agreement to function. It only needs fatigue.",
          metaphor:
            "A warning light blinks every day. Eventually it is covered with tape.",
        },
        {
          title: "How does gaslighting reshape behavior over time?",
          answer:
            "It trains people to preemptively silence themselves.",
          children:
            "After enough friction, people stop naming what they see. Questions are edited before being spoken. Language narrows to what feels safe. The system appears calm because dissent has moved underground. Stability is achieved by reducing signal, not by resolving distortion.",
          metaphor:
            "A microphone is turned down slowly. The speaker keeps talking.",
        },
        {
          title: "Why does digital space intensify this pattern?",
          answer:
            "Because speed overwhelms verification.",
          children:
            "Digital environments reward immediacy and certainty. Conflicting narratives appear side by side without pause for synthesis. Correction arrives late and quietly. The volume favors repetition over accuracy. In this climate, perception fatigue replaces discernment. Confusion becomes ambient.",
          metaphor:
            "Dozens of clocks show different times. None stop ticking.",
        },
        {
          title: "Why do institutions rely on gaslighting rather than force?",
          answer:
            "Because doubt is cheaper than coercion.",
          children:
            "Force produces resistance and visibility. Gaslighting produces compliance without confrontation. When people question themselves instead of the structure, enforcement becomes unnecessary. The system stays intact while responsibility is displaced inward.",
          metaphor:
            "A fence is replaced by a sign that says nothing is there.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice here?",
          answer:
            "ZenTrust notices where perception is being quietly outsourced.",
          children:
            "ZenTrust does not correct narratives or offer counter-frames. It observes the moment when trust in direct experience was replaced by trust in explanation. That shift marks the point where gaslighting becomes effective. ZenTrust remains an observing presence, holding attention at that junction without intervention.",
          metaphor:
            "A mirror is angled slightly away. The reflection blurs without breaking.",
        },
        {
          title: "What remains when systemic gaslighting is seen clearly?",
          answer:
            "Orientation returns without confrontation.",
          children:
            "Seeing the mechanism does not require proving anything. The body relaxes because confusion is no longer misread as personal failure. Attention moves outward again. Nothing needs to be resolved for clarity to return. The structure is recognized, and the extra self-doubt falls away.",
          metaphor:
            "Fog lifts without the landscape changing.",
        },
      ]}
      ending={[
        "Some doubt is manufactured.",
        "Some confusion is structural.",
        "Seeing the mechanism restores orientation.",
      ]}
    />
  );
}
