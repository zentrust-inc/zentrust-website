// app/questions/losing-work-legitimacy/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does losing work feel like losing legitimacy?",
  description:
    "A question-led look at why work functions as a social permission signal, and why its loss can feel like a loss of legitimacy.",
  other: {
    category: "Schools & Systems",
    subcategory: "work-legitimacy-loss",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does losing work feel like losing legitimacy?"
      shortAnswer="Because modern social systems use paid work as a fast, visible signal of legitimacy. When that signal disappears, the nervous system and the social environment can both interpret it as a loss of permission to belong."
      heroMetaphor="Imagine arriving at a building where everyone wears a wristband. Your wrist is bare. No one stops you, no one explains anything, but the line keeps moving and you are no longer waved through. You are still standing in the same place, but the rules have quietly changed."
      sections={[
        {
          title: "What does losing legitimacy feel like at first?",
          answer:
            "It often shows up as social friction before it appears as financial fear.",
          metaphor:
            "Imagine your phone losing signal in the middle of town. The screen still lights up, but messages hesitate before sending. Conversations continue around you while your pocket stays quiet.",
          children:
            "You notice it in small moments. Someone asks what you do and your answer takes longer than it used to. Invitations feel tentative. You begin editing your story before you speak it. Even when you are capable and alert, you sense that your presence requires explanation. The loss is not dramatic at first. It is subtle, social, and difficult to name.",
        },
        {
          title: "Why does the usual reassurance fail to help?",
          answer:
            "Because legitimacy is about recognition, not competence.",
          metaphor:
            "Imagine cooking the same meal you always cook. The taste is familiar. The plate is warm. Then you realize you are eating alone in a room that used to be shared.",
          children:
            "People tell you that you are still the same person, and that is true. But legitimacy operates through fast signals others can read without effort. Work is one of those signals. When it disappears, the gap is not about your ability. It is about how quickly the world can place you into a known category.",
        },
        {
          title: "What actually grants legitimacy day to day?",
          answer:
            "Legitimacy is granted through visible placement: role, schedule, and recognized contribution.",
          metaphor:
            "Imagine wearing a uniform for years. One day you wear plain clothes on the same route. Nothing bad happens, but the way people look past you changes.",
          children:
            "Work is not only income. It answers unspoken questions before they are asked. It signals where you spend your time and how others should relate to you. When the label is gone, conversation slows. You must explain yourself in more words, and sometimes the room moves on before you finish.",
        },
        {
          title: "How does legitimacy loss evolve over time?",
          answer:
            "It often turns into self-censorship and shrinking participation.",
          metaphor:
            "Imagine a chair in your home that slowly shifts toward the wall. No one mentions it. One day you realize you are sitting in the corner.",
          children:
            "At first you try to stay normal. Then you decline invitations. You hesitate to make plans. You begin treating your own wants as provisional. Over time, legitimacy feels like something you must earn back just to speak freely. The loss is not only economic. It is relational.",
        },
        {
          title: "Why does legitimacy feel like permission?",
          answer:
            "Because legitimacy functions as social safety.",
          metaphor:
            "Imagine entering a party with someone who knows everyone. You feel relaxed without saying much. Next time you arrive alone and the same room feels louder.",
          children:
            "When work is present, people assume responsibility and direction. That assumption cushions everyday interactions. When it disappears, ordinary moments feel exposed. It can feel like a pass was revoked, even though no one announced it.",
        },
        {
          title: "Why does legitimacy loss keep repeating?",
          answer:
            "Because institutions still treat paid work as the default proof of adulthood.",
          metaphor:
            "Imagine a hallway where every door opens with the same key shape. Your keys exist, but they do not fit.",
          children:
            "Forms ask for titles. Profiles ask for gaps. Conversations begin with what you do. These routines were built when work was assumed to be stable. Even without cruelty, they quietly recreate exclusion. The repetition is structural, not personal.",
        },
        {
          title: "What does ZenTrust notice here?",
          answer:
            "ZenTrust notices how legitimacy operates as a silent badge.",
          metaphor:
            "Imagine carrying an official folder that slips from your hand. Papers scatter. People step around them while you gather them up.",
          children:
            "ZenTrust does not tell you to reinvent yourself. It holds attention on the small moments where legitimacy is granted or withdrawn without being spoken. When work disappears, the nervous system can read silence as danger. Seeing this pattern reduces unnecessary self-blame, even if the outer situation remains unresolved.",
        },
        {
          title: "What changes when legitimacy is seen clearly?",
          answer:
            "The loss can hurt without becoming a verdict.",
          metaphor:
            "Imagine reading a map with a smudged section. The streets still exist. You slow down and keep walking.",
          children:
            "You may still face uncertainty, but the experience becomes precise. Shame is no longer required for the situation to be real. The awkwardness is not proof of deficiency. It is proof that many people rely on fast labels. As this becomes visible, the weight you carry becomes lighter, even if the path remains uneven.",
        },
      ]}
      ending={[
        "Legitimacy can be removed without your consent.",
        "That does not mean you became unreal.",
        "It may only mean the old signals stopped working.",
      ]}
    />
  );
}
