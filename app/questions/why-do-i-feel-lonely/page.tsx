// app/questions/why-do-i-feel-lonely/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do I feel lonely, even when I am around other people?",
  description:
    "Loneliness is the gap between the connection you have and the connection you need. A calm look at why it happens, even among people, and what can help.",
  other: {
    category: "Meaning & Mind",
    subcategory: "loneliness",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"Why do I feel lonely, even when I am around other people?"}
      shortAnswer={"Loneliness is the painful sense that the connection you have does not match the connection you need, and it can happen whether you are alone or surrounded by people. It is a common human signal, not a flaw, and it often points to a need for closeness, being understood or belonging."}
      heroMetaphor={"Imagine standing in a busy train station at rush hour. Hundreds of people brush past you. Not one of them knows your name."}
      sections={[
        {
          title: "What is loneliness, exactly?",
          answer:
            "Loneliness is the felt gap between the relationships you want and the relationships you actually have.",
          metaphor:
            "Imagine being thirsty while holding a glass of salt water. There is liquid in your hand. It does not do what you need.",
          children:
            "Loneliness is a feeling, not a head count. Researchers usually separate it from being alone, which simply describes circumstances. A person can live alone and feel deeply connected, or share a busy home and feel unseen. The feeling often includes a sense of being on the outside, of not mattering much to anyone, or of having no one to call. It is uncomfortable, and that discomfort is part of its purpose. Almost everyone feels it at some point.",
        },
        {
          title: "Why can I feel lonely around other people?",
          answer:
            "Being with people is not the same as feeling known by them, and loneliness responds to the second.",
          metaphor:
            "Imagine a party where everyone speaks a language you only half understand. You laugh when others laugh. You go home feeling more alone than before.",
          children:
            "Many people feel lonely in crowds, at work or even inside a relationship. Conversation may stay on the surface: plans, news, small talk. You may feel you have to perform a version of yourself rather than show what is really going on. Over time, being seen only in part can feel like not being seen at all. What often eases this kind of loneliness is depth and honesty with even one person, not more company.",
        },
        {
          title: "Why does loneliness hurt so much?",
          answer:
            "Loneliness may hurt so much because humans evolved to depend on one another, so disconnection can register as a kind of threat.",
          metaphor:
            "Imagine a smoke alarm going off in an empty house. The noise is unpleasant. It exists to make you move.",
          children:
            "For most of human history, being cut off from the group made survival harder. Many scientists think loneliness developed as a signal, much like hunger or thirst, nudging people back toward others. That may explain why it can feel physical, restless or heavy. It can also make people more watchful for rejection, which sometimes makes reaching out feel harder. Knowing the feeling has a purpose does not remove the pain, but it can make it less shameful.",
        },
        {
          title: "What tends to trigger loneliness?",
          answer:
            "Loneliness often follows change: a move, a breakup, a loss, a new job, retirement, or friends drifting into different lives.",
          metaphor:
            "Imagine a boat whose mooring lines are cut one at a time. Each loss seems small. One day you notice you are drifting.",
          children:
            "Life transitions quietly rearrange our connections. Moving away, finishing school, becoming a parent, losing a partner or leaving a workplace can remove daily contact that once happened without effort. Illness, caring for someone, or financial strain can also shrink a social world. Sometimes nothing dramatic happens; friendships simply fade because no one has time. Noticing which ties have loosened, and when, can make the feeling more understandable and point to where rebuilding might start.",
        },
        {
          title: "Does modern life make loneliness more likely?",
          answer:
            "Some features of modern life, such as frequent moves, long commutes and screen-based contact, can make deep connection harder to sustain.",
          metaphor:
            "Imagine a town where every house has its own well. No one meets at the pump anymore. The water is fine, but the gathering is gone.",
          children:
            "Many communities once had built-in meeting points: shared work, places of worship, local shops, neighbors who stayed for decades. Today many people live far from family, work remotely or change cities often. Online contact can be a real lifeline, yet scrolling through other people's lives can also deepen a sense of being left out. None of this makes loneliness inevitable. It does mean that connection now often needs to be chosen and tended rather than assumed.",
        },
        {
          title: "When is loneliness a sign to get support?",
          answer:
            "If loneliness lasts, deepens or comes with hopelessness, low mood or thoughts of self-harm, it is worth talking to a doctor, counselor or someone you trust.",
          metaphor:
            "Imagine a fog that settles in and does not lift with the morning. You can keep walking alone. Someone with a lantern makes the path easier to see.",
          children:
            "Loneliness is not an illness, but long-lasting loneliness is widely linked with poorer mental and physical health, so it deserves to be taken seriously. It can overlap with depression or anxiety, and each can feed the other. Reaching out for support is not a failure of independence. A doctor or counselor can help sort out what is happening. If you ever feel unsafe or think about harming yourself, contact local emergency services or a crisis line right away.",
        },
        {
          title: "What tends to ease loneliness?",
          answer:
            "Small, repeated contact, a little honesty and shared activity often help more than waiting for one big connection.",
          metaphor:
            "Imagine tending a fire on a cold evening. A single log may not catch on its own. Many small sticks, added steadily, keep it going.",
          children:
            "Connection usually grows through repetition: seeing the same faces at a class, a volunteer shift, a walking group or a regular cafe. Reaching out first to an old friend can feel awkward, yet many people are glad to hear from someone. Sharing something slightly more real than usual can invite others to do the same. Helping others can also ease loneliness, because it creates purpose and contact at once. Progress is often slow, and that is normal.",
        },
        {
          title: "What does loneliness make easy to forget?",
          answer:
            "Loneliness makes it easy to forget that many others feel the same way, and that the feeling says more about a need than about your worth.",
          metaphor:
            "Imagine a row of lit windows on a dark street. Each person inside thinks they are the only one awake. Every window is glowing.",
          children:
            "Loneliness tends to whisper that something is wrong with you, that others have it figured out. Yet it is a very common human experience, and it visits people at every age and stage. Seeing it as a signal rather than a verdict can soften self-blame. It can lead to gentler questions: who do I miss, where do I feel at ease, what small step toward someone could I take this week?",
        },
      ]}
      ending={[
        "Being alone and being lonely are not the same.",
        "The ache points toward a need, not a flaw.",
        "Connection often returns in small, repeated steps.",
      ]}
    />
  );
}
