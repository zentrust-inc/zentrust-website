// app/questions/systemic-gaslighting-power/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern power feel like gaslighting?",
  description:
    "A question-led look at how systemic gaslighting operates through overload, denial, reframing, and blame shifting.",
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
      shortAnswer="Because many systems keep control by flooding attention with competing stories, denying lived signals, and shifting responsibility onto individuals until shared reality feels unstable."
      heroMetaphor="Imagine walking through a city where a fog machine runs every hour. The street signs are still there, but each time you try to read one, a new cloud rolls in. You start wondering if your eyes are the problem, even though the fog is the policy."
      sections={[
        {
          title: "Why does gaslighting feel personal when it is structural?",
          answer:
            "Because the pressure lands on one nervous system at a time, so a collective gaslighting pattern gets experienced as private confusion.",
          children:
            "When reality keeps getting bent in small ways, it rarely announces itself as a system. It arrives as a tone, a dismissal, a smile that contradicts the consequences. You feel the shift inside your own body first. If many people are living through the same gaslighting pattern, they may still believe it is just their own sensitivity.",
          metaphor:
            "Imagine a classroom where the lights flicker randomly all day. Each student thinks they are the only one getting headaches.",
        },
        {
          title: "Why does gaslighting resist obvious explanations?",
          answer:
            "Because gaslighting is not just lying. It is reality management through repetition, overload, and selective framing.",
          children:
            "A lie can be disproved. Gaslighting works by preventing any signal from staying stable long enough to be judged. Claims are softened, denied, reframed, or blamed on interpretation until exhaustion replaces clarity.",
          metaphor:
            "Imagine a radio that changes stations every time you reach for the volume knob.",
        },
        {
          title: "What actually does the gaslighting work?",
          answer:
            "Gaslighting works by controlling the frame, deciding what counts as reasonable, credible, or excessive.",
          children:
            "Concerns become attitudes. Evidence becomes obsession. Once framed as unstable or disloyal, your words arrive already discredited. Gaslighting succeeds without refuting facts by shaping who you appear to be.",
          metaphor:
            "Imagine a game where the referee writes the rulebook during the match.",
        },
        {
          title: "How does gaslighting play out over time?",
          answer:
            "Over time, gaslighting turns confusion into exhaustion and exhaustion into compliance.",
          children:
            "At first you argue with contradictions. Then you notice the twisting is the rhythm. Silence becomes cheaper than clarity. Gaslighting does not require agreement, only disengagement from shared reality.",
          metaphor:
            "Imagine carrying a bucket with a tiny hole that never stays patched.",
        },
        {
          title: "Where does digital gaslighting intensify it?",
          answer:
            "Digital systems reward certainty and speed, making gaslighting scale faster than careful truth.",
          children:
            "Confidence travels farther than accuracy. Two people can inhabit different realities and both feel informed. Attempts to bridge gaps are treated as attacks, reinforcing gaslighting through the medium itself.",
          metaphor:
            "Imagine a marketplace where the loudest stall gets all the foot traffic.",
        },
        {
          title: "Why does gaslighting persist in workplaces and institutions?",
          answer:
            "Because gaslighting protects systems by shifting structural harm onto individuals.",
          children:
            "Burnout becomes a mindset issue. Toxic culture becomes a resilience gap. Naming harm threatens the system, so gaslighting reframes the person as the problem.",
          metaphor:
            "Imagine a factory belt set too fast while workers are given motivational posters.",
        },
        {
          title: "Why does gaslighting make me doubt my own reality?",
          answer:
            "Because repeated dismissal trains self doubt before external checking.",
          children:
            "You pre explain, pre apologize, and pre shrink. The danger is not only being misled, but learning to abandon your own perception to stay safe.",
          metaphor:
            "Imagine smelling smoke while everyone insists the air is clean.",
        },
        {
          title: "What does ZenTrust ask about systemic gaslighting?",
          answer:
            "Whether belonging has been made conditional on accepting someone else’s frame.",
          children:
            "ZenTrust does not ask you to expose or persuade. It asks what trade is being offered. When that trade is seen, gaslighting loses part of its grip.",
          metaphor:
            "Imagine waves erasing footprints, while you still know where you walked.",
        },
      ]}
      ending={[
        "Some confusion is not a personal flaw.",
        "Some gaslighting is manufactured, not discovered.",
        "You are allowed to see clearly without rushing to prove it.",
      ]}
    />
  );
}
