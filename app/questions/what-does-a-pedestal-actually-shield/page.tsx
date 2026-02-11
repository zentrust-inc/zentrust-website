// app/questions/what-does-a-pedestal-actually-shield/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What does a pedestal actually shield?",
  description:
    "Examines how elevation restructures perception, loyalty, and accountability.",
  other: {
    category: "Schools & Systems",
    subcategory: "pedestal-immunity",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="What does a pedestal actually shield?"
      shortAnswer="A pedestal shields behavior by converting elevation into moral immunity, where scrutiny is reframed as disloyalty and transgression is rebranded as depth."
      heroMetaphor="Imagine a wooden platform built in the center of a crowded room. One chair stands higher than the rest while all eyes angle upward. The height does not change the person, but it changes how the room arranges itself."
      sections={[
        {
          title: "How does a pedestal transmute harm into virtue?",
          answer:
            "A pedestal transmutes harm into virtue because elevation reframes ordinary flaws as advanced teaching.",
          children:
            "A sharp remark lands in the room and leaves someone visibly shaken. Instead of pausing, others nod as if something profound has occurred. Later, the story circulates as an example of ego being stripped away. The original discomfort is absorbed into a narrative of growth. Over time, similar moments stop registering as friction and start registering as initiation.",
          metaphor:
            "Imagine a cracked glass held up to colored light. The fractures glow as patterns instead of damage. The same break looks intentional under the beam.",
        },
        {
          title: "Why does a pedestal suppress instinct?",
          answer:
            "A pedestal suppresses instinct because posture and distance condition the body to override its own signals.",
          children:
            "People seated below must lift their gaze to maintain connection. From that angle, subtle cues flatten: the flash of irritation, the impatience in a sigh, the calculation in a pause. Applause arrives before evaluation. The body learns that hesitation feels disruptive. Eventually, the first flicker of doubt is edited out before it reaches speech.",
          metaphor:
            "Imagine standing under a bright lamp aimed at your eyes. The glare forces you to squint. You stop looking for small movements and focus only on the outline above.",
        },
        {
          title: "How does a pedestal exploit sunk cost?",
          answer:
            "A pedestal exploits sunk cost because identity attaches to elevation and makes exit feel like self-erasure.",
          children:
            "Years are invested in proximity: time, money, loyalty, public praise. Doubt surfaces quietly, but leaving would require admitting that admiration may have masked ordinary flaws. Friends who questioned the structure were dismissed long ago. Staying preserves coherence. Doubt becomes something to reinterpret rather than confront.",
          metaphor:
            "Imagine building a tall tower from fragile blocks. Halfway up, you notice a tilt. Dismantling it means acknowledging the hours already spent stacking.",
        },
        {
          title: "Why does a pedestal manufacture exclusivity?",
          answer:
            "A pedestal manufactures exclusivity because controlled access inflates perceived value and reduces comparison.",
          children:
            "An inner gathering is announced with limited seats. Those admitted describe the atmosphere as rare and elevated. Those excluded imagine revelations too subtle for the public. The fewer who witness the exchange, the larger the mythology grows. Access becomes proof of worth.",
          metaphor:
            "Imagine a rope drawn across a doorway leading to an ordinary room. The rope becomes the attraction. The room itself remains unseen.",
        },
        {
          title: "How does a pedestal centralize meaning?",
          answer:
            "A pedestal centralizes meaning because interpretation flows downward and replaces private judgment.",
          children:
            "A personal conflict arises, and instead of trusting direct perception, someone waits for framing from above. The explanation delivered publicly reshapes how the event is understood. Reactions are measured against that lens. Gradually, private interpretation fades without ceremony.",
          metaphor:
            "Imagine a single lighthouse dominating a dark coastline. Smaller lights flicker along the shore, but the beam from the tower overwhelms them.",
        },
        {
          title: "Why does a pedestal normalize boundary erosion?",
          answer:
            "A pedestal normalizes boundary erosion because admiration dilutes alarm and reframes excess as charisma.",
          children:
            "A comment that would feel inappropriate at eye level is delivered from the stage and met with laughter. The room recalibrates in real time. If others accept it, resistance feels misplaced. Repetition smooths edges that once felt sharp. The line moves without announcement.",
          metaphor:
            "Imagine a shoreline touched by the tide each evening. No single wave seems decisive. Yet the sand retreats a little more each day.",
        },
        {
          title: "What does ZenTrust observe about a pedestal?",
          answer:
            "ZenTrust observes that a pedestal stabilizes belief by structuring distance rather than demonstrating integrity.",
          children:
            "From the side of the room, it becomes visible how often discomfort is translated into praise. Questions soften as they travel upward. Elevation organizes the field long before evidence enters the discussion. The structure becomes noticeable without anyone needing to interrupt it.",
          metaphor:
            "Imagine a mirror placed at the edge of the platform. It reflects both the elevated figure and the upward gaze of the crowd. The mirror remains silent.",
        },
        {
          title: "What remains when the pedestal dissolves?",
          answer:
            "When a pedestal dissolves, amplification disappears and perception recalibrates to ordinary scale.",
          children:
            "The platform is removed after the gathering. The same individual stands at ground level waiting for a ride. Conversations unfold at eye height. Tone feels different without projection. Nothing dramatic occurs, yet the atmosphere shifts when distance collapses.",
          metaphor:
            "Imagine a stage light switched off at dusk. The room returns to shadow. The furniture looks smaller without the glare.",
        },
      ]}
      ending={[
        "A pedestal does not protect truth.",
        "It protects distance.",
        "Distance reorganizes loyalty.",
      ]}
    />
  );
}
