// app/questions/technology-and-future-orientation/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does future planning feel harder as technology accelerates?",
  description:
    "A sharp examination of how technological acceleration removes stable assumptions faster than orientation can reform.",
  other: {
    category: "Schools & Systems",
    subcategory: "technology-orientation-fracture",
  },
};

export default function TechnologyAndFutureOrientationPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does future planning feel harder as technology accelerates?"
      shortAnswer="Because technological acceleration dissolves the assumptions that once linked effort to outcome, leaving planning without a stable reference frame."
      heroMetaphor="A map works as long as landmarks stay put. One day the landmarks begin moving while the map remains the same. Walking continues, but orientation quietly collapses."
      sections={[
        {
          title: "Why does acceleration feel destabilizing rather than empowering?",
          answer:
            "Acceleration destabilizes planning by shortening the lifespan of assumptions.",
          children:
            "Planning depends on continuity. Skills, roles, and rewards are expected to persist long enough to justify effort. When technology advances quickly, those expectations expire early. The body senses this mismatch before language catches up. Anxiety appears not because change exists, but because reference points dissolve faster than new ones form.",
          metaphor:
            "A bridge is crossed while its supports are being replaced. The steps continue. Trust thins.",
        },
        {
          title: "Why do long-term plans lose credibility first?",
          answer:
            "Because long-term plans rely on stable payoff structures.",
          children:
            "Education, careers, and savings once followed predictable arcs. Technology compresses cycles so outcomes arrive late or not at all. Promises remain verbal while conditions shift underneath them. The future stops feeling like a destination and starts feeling provisional. Planning weakens because completion can no longer be assumed.",
          metaphor:
            "Seeds are planted in soil that is moved each season. Growth becomes uncertain.",
        },
        {
          title: "What changes when value creation accelerates?",
          answer:
            "Value detaches from duration and reattaches to immediacy.",
          children:
            "Previously, value accumulated through time spent. Acceleration rewards speed, adaptability, and timing instead. This reorders effort without warning. People trained for endurance find themselves displaced by responsiveness. The confusion is not personal failure. It is a change in what counts as contribution.",
          metaphor:
            "A clock switches from hours to seconds. The hands still move.",
        },
        {
          title: "Why does technology disrupt many roles at once?",
          answer:
            "Because it replaces shared patterns of judgment rather than isolated tasks.",
          children:
            "Modern tools do not only automate labor. They replicate coordination, analysis, and decision logic. When many professions rely on similar cognitive patterns, disruption spreads simultaneously. Planning fails because no adjacent role feels safe. The ground shifts across entire categories at once.",
          metaphor:
            "Several doors use different locks until one key fits them all.",
        },
        {
          title: "Why does money feel less protective in accelerated systems?",
          answer:
            "Because money buffers shocks but cannot restore orientation.",
          children:
            "Savings can soften impact, but they do not answer what to prepare for. When futures branch unpredictably, financial planning loses narrative coherence. Security becomes temporary rather than directional. The discomfort is not poverty anxiety. It is orientation loss.",
          metaphor:
            "Supplies are packed without knowing which climate lies ahead.",
        },
        {
          title: "Why does flexibility replace stability as the praised trait?",
          answer:
            "Because adaptability survives assumption collapse better than commitment.",
          children:
            "Rigid plans depend on continuity. Flexible positioning tolerates disruption. As assumptions fail faster, systems reward those who can reorient quickly. This does not mean stability is wrong. It means stability without adaptability becomes fragile.",
          metaphor:
            "A tent bends in wind while a rigid frame snaps.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about future anxiety?",
          answer:
            "ZenTrust notices anxiety arising where outdated models are still applied.",
          children:
            "ZenTrust does not offer forecasts or strategies. It observes how confusion is internalized when inherited assumptions no longer match conditions. When orientation models lag reality, distress appears personal. Naming the mismatch restores accuracy without demanding solutions.",
          metaphor:
            "A compass spins because the field has changed.",
        },
        {
          title: "What remains when future certainty dissolves?",
          answer:
            "Orientation shifts from prediction to presence and adaptability.",
          children:
            "When certainty fades, attention returns to what can move, learn, and relate now. Planning becomes lighter, provisional, and less identity-bound. The future stops being a guarantee and becomes a directionless horizon. This does not remove uncertainty. It removes the false expectation that certainty was ever promised.",
          metaphor:
            "A sailor trims sails instead of fixing the weather.",
        },
      ]}
      ending={[
        "Acceleration dissolves old guarantees.",
        "Anxiety marks where models expired.",
        "Orientation begins when prediction loosens.",
      ]}
    />
  );
}
