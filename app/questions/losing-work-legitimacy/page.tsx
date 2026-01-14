// app/questions/losing-work-legitimacy/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does losing work feel like losing legitimacy?",
  description:
    "A question-led look at why work becomes a social permission slip, and why its loss can feel like a loss of legitimacy.",
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
      shortAnswer="Because modern life treats work as a visible proof of legitimacy, so when work disappears, the body and mind can register it as a loss of permission to belong."
      heroMetaphor="Imagine arriving at a building where everyone wears a wristband. Your wrist is bare, and the guard does not shout, but the line in front of you keeps moving. You stand there holding nothing, watching people pass through the same door."
      sections={[
        {
          title: "What does losing legitimacy feel like first?",
          answer:
            "It often feels like you became harder to place in ordinary conversations, even before money becomes the main worry.",
          metaphor:
            "Imagine your phone stops getting signal in the middle of town. The screen still lights up, but messages hang with a spinning circle. People around you keep talking, and you keep nodding, while your pocket stays silent.",
          children:
            "You notice it in small moments: someone asks what you do and your answer takes longer than it used to. Plans feel tentative, as if you are waiting for permission you cannot name. You start editing your story before you speak it. Even when you are capable and alert, you feel slightly out of place, like you missed a memo that everyone else received.",
        },
        {
          title: "Why does the usual explanation for legitimacy fail?",
          answer:
            "Because being competent is not the same as being recognized, and legitimacy is mostly recognition, not ability.",
          metaphor:
            "Imagine you cook the same meal you always cook, and it tastes the same. The familiar plate is there, the steam is there, and you sit down to eat. Then you realize no one else is at the table and the room feels different.",
          children:
            "People say, you are still you, and that is true, but it does not touch the social sensation. In daily life, legitimacy is often granted through signals other people can read quickly. Work is one of those signals. When it vanishes, the gap is not about talent. It is about how fast the world can sort you into a known category.",
        },
        {
          title: "What is actually granting legitimacy day to day?",
          answer:
            "Legitimacy is often granted by visible proof of placement, such as a title, schedule, and role that others can recognize.",
          metaphor:
            "Imagine wearing a uniform for years, the same color and the same badge. One morning you put on plain clothes and walk the same route. Nothing bad happens, but the way people look past you changes without any announcement.",
          children:
            "In many settings, work is not only income. It is a public label that answers questions before they are asked. It tells people where you spend your hours, what you can be trusted with, and how to relate to you quickly. When that label is removed, you have to explain yourself in more words, and sometimes you sense that the room is already moving on before you finish.",
        },
        {
          title: "How does legitimacy loss play out over time?",
          answer:
            "Over time, legitimacy loss can turn into self-censorship, smaller circles, and a shrinking sense of what you are allowed to want.",
          metaphor:
            "Imagine a chair in your home that slowly gets moved a little farther from the center each week. No one says anything, and the chair is still there. One day you notice you are sitting in the corner without remembering when it started.",
          children:
            "At first, you try to stay upbeat and keep your rhythm. Then you start declining invitations because you do not want the question again. You hesitate to buy small things, not only for cost, but because it feels like you need to justify them. You may begin to treat your own plans as temporary. The longer it goes, the more legitimacy feels like something you have to earn back just to speak normally.",
        },
        {
          title: "What makes legitimacy feel like permission?",
          answer:
            "Because legitimacy is often experienced as social safety, and work has been one of the main proofs used to grant that safety.",
          metaphor:
            "Imagine you walk into a party with a friend who knows everyone. You do not say much, but you feel relaxed because you are introduced. Next time you arrive alone, and the same room feels louder even if the music is unchanged.",
          children:
            "When work is present, many interactions happen without friction. People assume you are busy, responsible, and on a track, even if they know nothing else about you. That assumption can feel like a cushion under ordinary life. When the assumption disappears, you may feel exposed in simple places like family gatherings, checkout lines, or social media. It can feel like you lost a pass that lets you exist without explanation.",
        },
        {
          title: "Why does legitimacy loss keep repeating?",
          answer:
            "Because many institutions keep treating paid work as the default proof of adulthood, so legitimacy loss is recreated in forms, metrics, and everyday talk.",
          metaphor:
            "Imagine every door in a hallway opens with the same key shape. You have keys, but the grooves do not match. You can see rooms on the other side, and you can hear movement, but the locks keep refusing you quietly.",
          children:
            "Even when people mean well, the world is filled with checkpoints that expect work to be present. Applications ask for gaps, profiles ask for titles, and introductions begin with what you do. Friends may drift because they do not know how to include you in their pace. None of this has to be cruel to be effective. The repetition comes from routines that were built when work was assumed to be stable and widely available.",
        },
        {
          title: "What does ZenTrust notice about legitimacy here?",
          answer:
            "ZenTrust notices how legitimacy is treated like a badge, and how its removal can feel like social exposure even when your inner capacity is intact.",
          metaphor:
            "Imagine you are carrying a folder that looks official, with crisp paper inside. Halfway down the street, the folder slips from your hand and the papers scatter. People step around the pages, and you crouch to gather them while the sidewalk keeps flowing.",
          children:
            "This is not a question about your character, and it is not a demand to reinvent yourself. ZenTrust holds attention on the small, repeated moments where legitimacy is granted or withheld without being spoken. When work disappears, the nervous system can interpret that silence as danger. Seeing that pattern can reduce the extra layer of self-blame that forms on top of the original loss, even if the outer situation remains unresolved.",
        },
        {
          title: "What changes when legitimacy is seen clearly?",
          answer:
            "When legitimacy is seen as a social signal, the loss can hurt without turning into a verdict about who you are.",
          metaphor:
            "Imagine you are looking at a map that has a smear across one section. The streets still exist, but the names are harder to read. You slow down, hold the paper closer, and keep walking without pretending you can see through the blur.",
          children:
            "You may still feel uncertainty, and you may still face practical constraints, but the experience becomes more precise. The shame is not required for the situation to be real. The awkwardness in conversation is not proof that you are lesser. It is proof that many people rely on quick labels to move through life. As that becomes visible, you can carry the discomfort with less added weight and less unnecessary self-erasure.",
        },
      ]}
      ending={[
        "Legitimacy can be taken away without your consent.",
        "That does not mean you became unreal.",
        "It may only mean the old signals stopped working.",
      ]}
    />
  );
}
