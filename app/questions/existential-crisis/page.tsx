// app/questions/existential-crisis/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is an existential crisis, and why does it happen?",
  description:
    "A calm look at the existential crisis: why questions about meaning, death and freedom can suddenly feel urgent, and what they may be asking of us.",
  other: {
    category: "Meaning & Mind",
    subcategory: "existential-crisis",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Mind"
      question="What is an existential crisis, and why does it happen?"
      shortAnswer="An existential crisis is a period when basic questions about meaning, death, freedom and identity stop being abstract and start to feel urgent and personal. It is unsettling, yet it often signals that old answers no longer fit a life that is changing."
      heroMetaphor="Imagine walking a familiar road at night when the streetlights go out. The road has not changed. Suddenly you notice how dark it always was beyond the lights."
      sections={[
        {
          title: "What does an existential crisis feel like?",
          answer:
            "It often feels like the ground of ordinary life has gone soft, and familiar routines no longer explain why they matter.",
          metaphor:
            "Imagine reading a sentence you have read a thousand times. Suddenly the words look strange. You cannot remember why they ever made sense.",
          children:
            "People describe a sense of unreality, restlessness or dread. Daily tasks continue, but they feel thin. Questions arrive that seem too large to answer: what is the point, what happens when I die, am I living the life I chose? The experience can be lonely, because others seem untroubled. Yet these questions are among the oldest people have asked. Feeling them sharply does not mean something is broken; it means they have become personal.",
        },
        {
          title: "Why does it often arrive after a change or a loss?",
          answer:
            "Change and loss remove the structures that quietly answered the question of meaning for us.",
          metaphor:
            "Imagine a house where one wall is taken down for repairs. Light pours into rooms you had stopped noticing. The house is the same, but you see it differently.",
          children:
            "A death, a breakup, a move, a diagnosis, a milestone birthday or the end of a career can all remove something that held life's direction in place. Before, meaning was carried by roles and routines without needing to be examined. When those fall away, the question underneath becomes visible. That is why existential questions often surface at transitions: not because life became meaningless, but because its old supports are being rebuilt.",
        },
        {
          title: "Is an existential crisis the same as depression?",
          answer:
            "They can overlap, but questioning meaning is not in itself an illness.",
          metaphor:
            "Imagine a traveler who stops at a crossroads to read the signs. Another traveler sits down because they are too exhausted to walk. Both are standing still for different reasons.",
          children:
            "Many people pass through periods of searching that feel heavy but still leave room for curiosity and connection. Depression tends to flatten energy, sleep, appetite and hope for weeks at a time. The two can feed each other, so if heaviness persists or daily life becomes hard to manage, it is worth talking to a doctor or counselor. If thoughts turn to ending your life, contact a crisis line now, such as 988 in the US.",
        },
        {
          title: "Why do these questions feel so urgent at night?",
          answer:
            "At night the distractions of the day fall away, and the mind meets its largest questions without a buffer.",
          metaphor:
            "Imagine a pond in the afternoon, rippled by wind. At midnight the wind stops. Every shape at the bottom becomes visible.",
          children:
            "During the day, tasks, noise and other people keep attention moving outward. When the house is quiet and the body is tired, thoughts turn inward and loop more easily. Problems feel larger and less solvable in the dark. Many people find that the same questions feel more workable in daylight, in conversation or on a walk. The urgency of night is real, but it is not always the most reliable guide.",
        },
        {
          title: "Why can't busyness or distraction make it go away?",
          answer:
            "Distraction can postpone the questions, but it rarely answers them.",
          metaphor:
            "Imagine turning up music to drown out a knock at the door. The music grows louder. The knocking does not stop.",
          children:
            "Filling every moment with work, entertainment or scrolling can keep existential unease at a distance for a while. But the underlying questions tend to return during quiet moments, holidays or illness. Many traditions suggest turning toward the questions rather than away: noticing what feels empty, what feels true, and what one would regret leaving undone. The aim is not a final answer, but a life that can hold the questions with less fear.",
        },
        {
          title: "What have people found helpful in facing these questions?",
          answer:
            "People often find steadiness in connection, in meaningful work, and in contact with something larger than themselves.",
          metaphor:
            "Imagine a small boat on a wide sea. It cannot see the shore. It steadies itself by tying to other boats.",
          children:
            "Philosophers, religious traditions and ordinary people have offered many responses. Common threads include relationships where one is truly known, work or care that matters to someone else, time in nature, creative expression, and practices that quiet the mind. None removes mortality or uncertainty. They change how those facts sit in a life. Talking with someone, a friend, counselor or teacher, can make the questions less isolating.",
        },
        {
          title: "Why does ZenTrust write about existential questions?",
          answer:
            "ZenTrust explores how meaning, wellbeing and the health of the places we live are connected.",
          metaphor:
            "Imagine a tree that has lost the stream that fed it. It reaches its roots deeper. It finds water it did not know was there.",
          children:
            "ZenTrust is a US nonprofit that publishes open questions about modern life alongside its land and water work. Many existential struggles grow from disconnection: from community, from nature, from work that feels real. ZenTrust's essays do not offer therapy or answers. They offer a calm place to think, and an invitation to notice how caring for people and places can become part of how meaning is rebuilt.",
        },
        {
          title: "What does an existential crisis make easy to forget?",
          answer:
            "It makes it easy to forget that questioning is a sign of being alive to one's own life.",
          metaphor:
            "Imagine a seed in winter soil. It looks like nothing is happening. Underneath, it is preparing to break open.",
          children:
            "In the middle of a crisis, it can feel as though something has gone wrong for good. Yet many people later describe such periods as turning points, when they chose more honestly what to keep and what to let go. The questions do not need to be solved quickly. They can be lived with, discussed and slowly answered by how one chooses to spend one's days.",
        },
      ]}
      ending={[
        "The questions arrive when the old answers stop fitting.",
        "They ask to be lived with, not solved in one night.",
        "You do not have to carry them alone.",
      ]}
    />
  );
}
