// app/questions/why-cant-we-stop-doomscrolling/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why can't we stop doomscrolling?",
  description:
    "A question-led look at doomscrolling: why we keep reading bad news late into the night, and why stopping feels so hard.",
  other: {
    category: "Tools & Technology",
    subcategory: "why-cant-we-stop-doomscrolling",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Tools & Technology"
      question="Why can't we stop doomscrolling?"
      shortAnswer="We keep doomscrolling because the mind treats a stream of threatening news as something to monitor, and an endless feed never gives the signal that monitoring is finished, so the urge to check outlasts any useful information."
      heroMetaphor="Imagine standing watch on a wall at night. Every sound might matter, so you keep looking. No one ever comes to tell you the watch is over."
      sections={[
        {
          title: "Why does doomscrolling feel impossible to stop?",
          answer:
            "It feels impossible to stop because each new post promises the one piece of information that would finally make you feel safe.",
          metaphor:
            "Imagine searching a dark room for a light switch. Your hand keeps finding wall. You keep reaching because the switch must be close.",
          children:
            "Doomscrolling is the habit of reading one troubling story after another, often late at night, long after it stops helping. It rarely feels like a choice. You intend to check once and look up an hour later. The pull is not simple curiosity. It is a search for closure. Bad news raises a question about safety, and the feed keeps offering answers that are never complete.",
        },
        {
          title: "Why does the advice to just put the phone down fall short?",
          answer:
            "The advice falls short because it treats a vigilance response as a lack of willpower.",
          metaphor:
            "Imagine being told to stop listening for a smoke alarm. You try to relax. Your ears keep tuning toward the ceiling.",
          children:
            "Telling people to scroll less assumes the behavior is idle. Yet many people doomscroll precisely when they feel uncertain, anxious, or powerless. The mind treats monitoring as a form of protection. Stopping can feel like looking away from danger. Willpower struggles against this, especially when tired. The habit persists because it feels responsible, even when it leaves people more worried than before.",
        },
        {
          title: "What actually drives the urge to keep reading?",
          answer:
            "The urge is driven by a natural pull toward threat, met by feeds designed never to end.",
          metaphor:
            "Imagine a river that keeps carrying debris past your door. You watch each piece float by. The river has no source you can see and no end.",
          children:
            "Humans tend to notice threatening information more than neutral information. That once helped people survive. Modern feeds supply an unlimited stream of it, from every place at once. Many platforms are designed so that content keeps loading and recommendations keep adapting. There is no natural bottom of the page. A tendency that once helped people stay alert now meets a stream that never runs dry.",
        },
        {
          title: "How does doomscrolling change how the world feels?",
          answer:
            "Over time it makes the world feel more dangerous and less changeable than everyday life actually is.",
          metaphor:
            "Imagine looking at your town only through a telescope pointed at fires. Each blaze is real. The quiet streets between them disappear.",
          children:
            "A feed gathers the most alarming events from everywhere and places them side by side. Each story may be true, yet together they form a picture without proportion. Ordinary kindness, slow progress, and local stability rarely appear. After enough scrolling, people may feel that everything is getting worse and nothing they do matters. The world shrinks to its emergencies, and hope begins to feel naive.",
        },
        {
          title: "Why does doomscrolling often happen at night?",
          answer:
            "It often happens at night because tiredness weakens our ability to stop, and quiet hours leave worries with nowhere else to go.",
          metaphor:
            "Imagine a house where every room goes dark except one. You drift toward the only light left on. It happens to be the most restless room in the house.",
          children:
            "During the day, work and people pull attention elsewhere. At night, those distractions fall away. Unresolved worries rise. The phone is close, bright, and always ready. Tiredness makes stopping harder. People often keep scrolling past the point of fatigue, trading rest for one more update. The next day begins tired and on edge, which makes the next night's scrolling more likely.",
        },
        {
          title: "Why does doomscrolling continue even when it makes us feel worse?",
          answer:
            "It continues because it offers a small sense of control in situations where real control feels out of reach.",
          metaphor:
            "Imagine checking the weather forecast every few minutes before a storm. The clouds do not change. Checking is the only thing you can do.",
          children:
            "Many large problems, from wars to climate change to economic worry, sit far beyond any one person's power. Reading about them can feel like participating. It is a way of staying informed, of not looking away. Yet information without a way to act tends to turn into helplessness. The habit continues because it substitutes watching for doing, and watching is always available.",
        },
        {
          title: "Why does ZenTrust focus on the conditions, not the habit alone?",
          answer:
            "ZenTrust focuses on conditions because the habit makes sense once you see the environment it grows in.",
          metaphor:
            "Imagine blaming a moth for circling a lamp. The moth follows what it was built to follow. Someone placed the lamp in the dark.",
          children:
            "ZenTrust does not treat doomscrolling as a personal failing. It observes how alarming information, endless design, and a sense of powerlessness combine. Seeing this can reduce shame. It also points toward a different response. Instead of only resisting the feed, people can look for places where attention turns into action, however small, and where the world can be seen at a human scale.",
        },
        {
          title: "What does doomscrolling make easy to forget?",
          answer:
            "It makes it easy to forget that most of life happens at a scale where we can still act.",
          metaphor:
            "Imagine putting the telescope down and looking at your own street. A neighbor waters a garden. A child learns to ride a bicycle.",
          children:
            "Feeds bring the whole world's crises into one hand, but people live in particular places, with particular relationships and tasks. Many meaningful acts are local and slow: helping a friend, tending land, joining a group that is working on one problem. These rarely trend. Yet they are where effort turns into change. Remembering that scale does not deny the news. It restores proportion.",
        },
      ]}
      ending={[
        "Watching every danger is not the same as being safe.",
        "A feed has no ending, but an evening can.",
        "The world is larger than its emergencies, and closer than the screen.",
      ]}
    />
  );
}
