// app/questions/comparing-yourself-to-others/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do we keep comparing ourselves to others?",
  description:
    "A question-led look at why people compare themselves to others, why it rarely helps, and why it is so hard to stop.",
  other: {
    category: "Mind & Experience",
    subcategory: "comparing-yourself-to-others",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why do we keep comparing ourselves to others?"
      shortAnswer="We keep comparing ourselves to others because people naturally judge where they stand by looking around them, and modern life supplies an endless, edited view of everyone else, so comparison becomes constant instead of occasional."
      heroMetaphor="Imagine running on a track where the lanes keep multiplying. Every time you glance sideways, a new runner appears ahead. You stop noticing that you are still moving."
      sections={[
        {
          title: "Why is comparing ourselves to others so automatic?",
          answer:
            "It is automatic because people have always used others as a reference point to understand where they stand.",
          metaphor:
            "Imagine judging the height of a tree only by the trees around it. In a field of saplings, it looks tall. In an old forest, it looks small.",
          children:
            "Humans live in groups, and knowing our place within them once mattered for survival and belonging. Comparison helps people learn, set goals, and understand social expectations. It happens quickly, often before conscious thought. The habit itself is not a flaw. The difficulty begins when the group we compare ourselves with becomes enormous, distant, and carefully presented.",
        },
        {
          title: "Why does the advice to stop comparing rarely work?",
          answer:
            "The advice rarely works because comparison is a basic social instinct, not a bad habit that can simply be dropped.",
          metaphor:
            "Imagine being told not to notice the temperature. You can choose not to complain. Your skin still registers the cold.",
          children:
            "People are often told to focus only on themselves, or to stop looking at others. Yet comparison happens almost automatically. Trying to suppress it can lead to shame for having the thought at all. The instinct persists because it is part of how people make sense of social life. What can change is not the instinct but what it is pointed at and how often.",
        },
        {
          title: "What makes comparison so painful today?",
          answer:
            "It is painful today because we now compare ourselves with countless edited lives instead of a small circle of people we actually know.",
          metaphor:
            "Imagine a village notice board replaced by a screen showing the best moment of every person on earth. The board never runs out. Your ordinary day is always on display beside it.",
          children:
            "In the past, people compared themselves mostly with neighbors, coworkers, and family, whose struggles were visible too. Today, feeds present achievements, travel, bodies, and success from millions of strangers. These images are selected and polished. We compare our full lives, including doubts and dull hours, with others' highlights. The gap feels personal, though it is mostly a feature of what gets shown.",
        },
        {
          title: "How does constant comparison shape how we feel about ourselves?",
          answer:
            "It makes self-worth feel unstable, rising and falling with whoever we happened to see last.",
          metaphor:
            "Imagine standing on a boat in rough water. Each wave lifts or drops you a little. You never quite feel the ground beneath your feet.",
          children:
            "When comparison is constant, people may feel proud one moment and inadequate the next, depending on what appears on the screen. Achievements lose their glow once someone else's seems bigger. Even good news can trigger a sense of falling behind. Over time, worth begins to depend on ranking rather than on values, relationships, or what a person actually cares about.",
        },
        {
          title: "Why do we compare most about things we care about?",
          answer:
            "We compare most in areas tied to identity, where falling short feels like a judgment about who we are.",
          metaphor:
            "Imagine two gardeners admiring each other's roses. A stranger's lawn does not bother them. Only the flowers they love make them anxious.",
          children:
            "People rarely feel threatened by comparison in areas that do not matter to them. It stings most where they have invested hope: work, appearance, parenting, creativity, or relationships. In these places, someone else's success can feel like evidence about one's own worth. This is why comparison often feels personal and painful, even when the other person is a stranger who means nothing to us.",
        },
        {
          title: "Why does comparison continue even when it makes us unhappy?",
          answer:
            "It continues because it promises useful information about where we stand, and that promise feels important.",
          metaphor:
            "Imagine checking a scoreboard after every play of a game. The numbers change constantly. You cannot stop looking, even when you are losing.",
          children:
            "Comparison offers a quick answer to an anxious question: am I doing well enough? The answer is rarely satisfying, yet the question returns. Platforms that display likes, followers, and status make ranking visible and measurable. The habit continues because it feels like gathering information, though it often leaves people more uncertain about their worth than before they looked.",
        },
        {
          title: "Why does ZenTrust look at the setting of comparison?",
          answer:
            "ZenTrust looks at the setting because the same instinct can motivate in one environment and wound in another.",
          metaphor:
            "Imagine a mirror in a quiet room and a hall of mirrors at a fair. Both reflect the same person. Only one leaves you dizzy.",
          children:
            "ZenTrust does not treat comparison as a character flaw. It observes how a natural instinct behaves inside endless, edited feeds and competitive systems. Seeing this can reduce self-judgment. It also suggests different questions: which comparisons actually help me grow, who do I want to learn from, and where might I spend time in places and communities where people are not constantly ranked.",
        },
        {
          title: "What does comparison make easy to forget?",
          answer:
            "It makes it easy to forget that every life is lived from the inside, at its own pace and in its own place.",
          metaphor:
            "Imagine a forest where every tree grows toward light differently. None of them is late. Each one is responding to its own ground.",
          children:
            "When attention is fixed on others, people can lose track of what they actually value and what their days are made of. A life can be good without being impressive. Progress can be slow and still real. Remembering this does not end comparison, but it can return attention to the people, work, and places that make one's own life feel worth living.",
        },
      ]}
      ending={[
        "Comparison is natural, but the size of the crowd is new.",
        "Highlights are not lives.",
        "Your life is measured best from the inside.",
      ]}
    />
  );
}
