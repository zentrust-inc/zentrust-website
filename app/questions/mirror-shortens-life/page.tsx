// app/questions/mirror-shortens-life/page.tsx

import type { Metadata } from "next";

import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does becoming a mirror shorten a life?",
  description:
    "How public projection can convert a living nervous system into a utility and drain repair capacity.",
  other: {
    category: "Mind & Experience",
    subcategory: "mirror-shortens-life",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does becoming a mirror shorten a life?"
      shortAnswer="Becoming a mirror converts a living nervous system into a public utility, forcing continuous projection management that drains biological repair capacity."
      heroMetaphor="Imagine a window that people use as a mirror all day. Every fingerprint stays, every breath fogs the glass, and no one cleans it because it is always in use. The window cracks not from impact, but from never being left alone."
      sections={[
        {
          title: "Why does the mirror attract projection?",
          answer:
            "A mirror attracts projection because it reflects identity without resistance, allowing others to unload unresolved meaning.",
          children:
            "When someone is seen as wise, calm, or insightful, people start bringing their worries to them. Conversations shift from mutual exchange to one sided unloading. Questions stop being curious and become needy. Over time, the mirror person hears the same fears repeated in different voices. Even silence carries expectation. The body stays alert, waiting for the next projection, even when no one is present.",
          metaphor:
            "Picture a public well in a dry village. Everyone draws water, but no one watches the level. The well does not protest. It simply runs lower each day.",
        },
        {
          title: "How does the mirror stop being a person?",
          answer:
            "The mirror stops being a person when interaction is replaced by use rather than relationship.",
          children:
            "People stop asking how you are and start asking what you think. Meals become interruptions. Solitude feels stolen rather than natural. Even kindness carries demand. You are praised, but not known. If you struggle, it feels like malfunction, not pain. The body senses this shift before the mind names it. Tension becomes constant because utility is never allowed to rest.",
          metaphor:
            "Think of a chair in a waiting room. Hundreds sit on it. No one asks if it is tired. It breaks quietly one afternoon.",
        },
        {
          title: "Why does being a mirror exhaust the nervous system?",
          answer:
            "Being a mirror exhausts the nervous system because it requires continuous vigilance without reciprocal grounding.",
          children:
            "Listening without response keeps the body in alert mode. There is no completion signal. Conversations do not close. Faces change, but the emotional load stays the same. Sleep becomes shallow because the system never fully powers down. Even joy feels thin, like a performance. Over time, the body chooses blunt shutdown over constant readiness, regardless of intention.",
          metaphor:
            "Imagine an engine idling day and night. It is not driving anywhere. Fuel still burns. Heat still builds.",
        },
        {
          title: "How does the mirror create social friction?",
          answer:
            "The mirror creates social friction by generating expectations it cannot satisfy consistently.",
          children:
            "Some people want answers. Others want validation. Others want rebellion dressed as wisdom. When these collide, disappointment follows. Criticism grows sharper because the mirror is expected to reflect perfectly. Praise becomes conditional. Silence is interpreted as neglect. The mirror learns to manage tone, timing, and distance. This management costs more energy than the conversations themselves.",
          metaphor:
            "Think of a clock mounted in a public square. Everyone relies on it. When it loses one minute, it is blamed by all.",
        },
        {
          title: "Why does the mirror invite chemical shutdown?",
          answer:
            "The mirror invites chemical shutdown because substances interrupt projection intake when boundaries cannot.",
          children:
            "Alcohol, sedatives, or stimulants are not about pleasure here. They reduce signal clarity. They blur expectation. They shorten attention. The body learns that chemicals create the silence it cannot negotiate socially. This is not weakness. It is an improvised circuit breaker. The cost appears later, but the relief is immediate.",
          metaphor:
            "Picture a breaker that trips when the grid overloads. It prevents a fire. It also darkens the house.",
        },
        {
          title: "How does the mirror shorten lifespan?",
          answer:
            "The mirror shortens lifespan by diverting energy from repair into continuous external regulation.",
          children:
            "Cells repair during stillness. Hormones reset during unobserved rest. When a person is always on, these cycles fragment. The body prioritizes survival over maintenance. Inflammation lingers. Sleep loses depth. Aging accelerates quietly. The person may appear vibrant while burning through reserves that were meant to last decades.",
          metaphor:
            "Imagine a candle burning in a draft. The flame looks bright. The wax disappears faster.",
        },
        {
          title: "Why does ZenTrust refuse to become a mirror?",
          answer:
            "ZenTrust refuses to become a mirror so projection attaches to structure, not to a human nervous system.",
          children:
            "ZenTrust does not speak back. It does not reassure. It does not hold eye contact. Questions exist without a face to absorb expectation. There is nothing to praise, blame, or follow. The reader encounters a pattern, not a person. Projection dissipates because it finds no surface that reflects identity back.",
          metaphor:
            "Think of a road sign at night. It reflects light without seeing the driver. When the car passes, nothing remains.",
        },
        {
          title: "What remains when the mirror is removed?",
          answer:
            "When the mirror is removed, energy returns to the body and life resumes at its natural pace.",
          children:
            "Days become uneven again. Some are quiet. Some are dull. Sleep deepens. Hunger returns on its own schedule. There is no audience to disappoint. Meaning is no longer managed. The body repairs in the gaps. Life continues without explanation. Nothing is taught. Nothing is withheld.",
          metaphor:
            "Picture a stage after the lights go out. Dust settles. Wood cools. The building remains.",
        },
      ]}
      ending={[
        "Nothing here needs agreement.",
        "Nothing here asks to be adopted.",
        "The pattern continues whether it is named or not.",
      ]}
    />
  );
}
