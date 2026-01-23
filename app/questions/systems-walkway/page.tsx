// app/questions/systems-walkway/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do people who understand society choose to leave it?",
  description:
    "A sharp examination of how understanding reveals motion without direction, making participation feel optional rather than inevitable.",
  other: {
    category: "Schools & Systems",
    subcategory: "systems-walkway",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why do people who understand society choose to leave it?"
      shortAnswer="Because understanding reveals that the system rewards continuous motion without caring about direction, and once that is seen, participation loses its inevitability."
      heroMetaphor="An airport walkway carries people forward with a steady hum. Standing still still feels like progress. One day, someone notices there are no gate numbers."
      sections={[
        {
          title: "Why does the system feel helpful at first?",
          answer:
            "Because it provides movement without requiring orientation.",
          children:
            "At entry, the system reduces friction. Tasks are clear, rewards are visible, and motion feels productive. Even hesitation is carried forward. This produces relief, not because direction is known, but because effort immediately converts into movement. The sensation of progress arrives before any question about destination.",
          metaphor:
            "A moving belt starts under your feet. You relax because walking is no longer required.",
        },
        {
          title: "Why do capable people advance the fastest?",
          answer:
            "Because they learn how to balance smoothly on the moving surface.",
          children:
            "Skill inside the system is coordination. People learn the pace, timing, and signals that prevent stumbling. They carry more, respond faster, and adapt posture without complaint. From the outside, this looks like success. From the inside, it feels like synchronization with motion rather than choice.",
          metaphor:
            "A surfer stays upright by matching the wave, not by choosing the shore.",
        },
        {
          title: "What does understanding eventually reveal?",
          answer:
            "It reveals that scenery does not change, only speed.",
          children:
            "Walls repeat. Lighting stays constant. The sound beneath the feet never stops. Promotions increase pace, not destination. The system rewards acceleration, but offers no arrival. Understanding appears when the pattern becomes undeniable rather than when exhaustion sets in.",
          metaphor:
            "A hallway stretches on while the floor moves faster.",
        },
        {
          title: "Why does speed fail to satisfy once this is seen?",
          answer:
            "Because motion without arrival drains meaning.",
          children:
            "Faster movement demands more balance and attention. Choice narrows because falling off becomes riskier. The body works harder to stay upright while direction remains unaddressed. Satisfaction fades because effort no longer points anywhere. Motion becomes maintenance.",
          metaphor:
            "A treadmill speeds up. Distance increases. The room stays the same.",
        },
        {
          title: "Why does stepping off look like failure?",
          answer:
            "Because the system measures worth by motion, not orientation.",
          children:
            "From the belt, stopping appears like falling behind. Metrics favor those still moving. From beside the belt, noise drops and footing steadies. The appearance of failure is produced by comparison with motion, not by loss of ground.",
          metaphor:
            "A runner stops while others circle the track. The track remains.",
        },
        {
          title: "Why does the system tolerate struggle but resist exit?",
          answer:
            "Because struggle still sustains motion, while exit removes it.",
          children:
            "Complaints, burnout, and dissatisfaction keep people on the walkway. They generate feedback without interrupting flow. Stepping off removes participation entirely. The system cannot process absence as easily as pain.",
          metaphor:
            "A machine rattles but keeps running. One missing part halts it.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice here?",
          answer:
            "ZenTrust notices when participation continues without direction being questioned.",
          children:
            "ZenTrust does not argue for exit or endurance. It observes the moment when movement is mistaken for meaning. By holding attention on orientation rather than speed, the system’s assumption of inevitability loosens. ZenTrust remains an observing presence only.",
          metaphor:
            "A sign points forward. Someone asks where.",
        },
        {
          title: "What remains when the walkway is seen clearly?",
          answer:
            "The ability to choose motion instead of being carried by it.",
          children:
            "Nothing dramatic needs to happen. Some people remain on the walkway. Others step off. The difference is not energy or morality, but clarity. Understanding separates movement from obligation. Choice becomes possible where momentum once ruled.",
          metaphor:
            "Feet touch solid floor. The belt continues beside them.",
        },
      ]}
      ending={[
        "Motion is not the same as direction.",
        "Understanding removes inevitability.",
        "Solid ground was always there.",
      ]}
    />
  );
}
