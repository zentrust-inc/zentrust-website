// app/questions/perfectionism/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does perfectionism never feel finished?",
  description:
    "A question-led look at perfectionism: why high standards turn into constant self-criticism, and why nothing ever feels good enough.",
  other: {
    category: "Mind & Experience",
    subcategory: "perfectionism",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does perfectionism never feel finished?"
      shortAnswer="Perfectionism never feels finished because it is less about the quality of the work than about safety from criticism. When worth depends on being beyond reproach, no result is ever secure enough, and the standard moves every time it is reached."
      heroMetaphor="Imagine painting a fence that stretches along a road. Each time you reach the end, you look back and see the first boards in a different light. You pick up the brush and start again."
      sections={[
        {
          title: "What is perfectionism, beyond having high standards?",
          answer:
            "Perfectionism is the habit of tying personal worth to flawless results, so that mistakes feel like verdicts and not like events.",
          metaphor:
            "Imagine two people carrying the same tray of glasses. One watches the path ahead. The other watches only for the sound of something breaking.",
          children:
            "High standards and perfectionism can look alike from outside. Both produce careful work. The difference is in what a mistake means. For someone with high standards, an error is information. For someone caught in perfectionism, an error is evidence about who they are. Psychologists often distinguish between striving for excellence and being driven by concern over mistakes and judgment. The second is the part that wears people down.",
        },
        {
          title: "Why does nothing ever feel good enough?",
          answer:
            "Nothing feels good enough because the goal is not a finished piece of work but the absence of any possible criticism.",
          metaphor:
            "Imagine walking toward the horizon. The ground under your feet changes. The line ahead stays exactly as far away.",
          children:
            "A task can be completed. Immunity from judgment cannot. Someone, somewhere, could always find a fault, and the inner critic is the first to try. So each achievement brings brief relief and then a new list of flaws. Praise is discounted as politeness or luck. The standard quietly rises to wherever the last result fell short. The work ends. The evaluation does not.",
        },
        {
          title: "Where does perfectionism usually come from?",
          answer:
            "It often grows where approval was earned through performance and withdrawn after mistakes.",
          metaphor:
            "Imagine a child who learns that the room is warm when the report card is good and cool when it is not. The child becomes very good at report cards.",
          children:
            "Many people learned early that being careful, correct, and impressive brought warmth, and that errors brought disappointment or silence. Schools and workplaces often repeat the lesson with rankings and reviews. Over time the rule becomes internal: be flawless, and you will be safe. It is an understandable conclusion from the evidence available. It simply turns every later task into a test of acceptability.",
        },
        {
          title: "Why does perfectionism lead to delay and exhaustion?",
          answer:
            "It leads to delay and exhaustion because starting risks imperfection, and finishing risks judgment.",
          metaphor:
            "Imagine standing at the edge of fresh snow. Every step would leave a mark. You wait for a way to cross without one.",
          children:
            "From outside, perfectionism is expected to produce more. Often it produces less. Projects are postponed until conditions are ideal. Drafts are hidden. Small decisions are checked and rechecked. Energy goes into avoiding error instead of doing the work. When something is finally delivered, it has cost far more than it needed to. Many people who call themselves procrastinators are perfectionists who cannot bear to begin badly.",
        },
        {
          title: "Why does the usual advice fall short?",
          answer:
            "The usual advice falls short because lowering the standard does nothing about the fear the standard was built to manage.",
          metaphor:
            "Imagine telling someone on a narrow ledge to relax their grip. The instruction is reasonable. The drop is still there.",
          children:
            "People are told that done is better than perfect, or to aim for eighty percent. These are sensible rules. Yet if a mistake still feels like exposure, a looser standard only feels like more danger. The advice addresses behavior while the stakes stay the same. This is why perfectionism so often survives every productivity method. The methods change how the work is done. They do not change what failure is taken to mean.",
        },
        {
          title: "Why does ZenTrust look at the conditions, not just the habit?",
          answer:
            "ZenTrust looks at the conditions because perfectionism thrives wherever people are constantly ranked and rarely simply accepted.",
          metaphor:
            "Imagine a plant pruned every day by a nervous gardener. It never has a season to grow into its own shape.",
          children:
            "ZenTrust does not frame perfectionism as a personal flaw to be corrected. It notices the settings that reward it: constant measurement, public comparison, and belonging that depends on performance. In such settings, perfectionism is a reasonable adaptation. Seeing this can soften the self-criticism that perfectionism already supplies in excess. It also raises a different question: what would it take for a mistake to be survivable here?",
        },
        {
          title: "What does perfectionism make easy to forget?",
          answer:
            "It makes it easy to forget that most living things grow through rough drafts.",
          metaphor:
            "Imagine a forest floor. Fallen leaves, broken branches, half-rotted logs. From that untidy layer, everything else is fed.",
          children:
            "Nothing in a living system arrives finished. Trees grow crooked toward the light and are no less trees. Skills are built from attempts that were not good. Relationships are repaired, not flawless. Perfectionism treats the unfinished as shameful, yet the unfinished is where learning and growth take place. Remembering this does not silence the inner critic. It does offer another way to read an imperfect day.",
        },
      ]}
      ending={[
        "A flawless result is not the same as a safe place to stand.",
        "The standard keeps moving when its real job is to prevent criticism.",
        "Growth has always depended on drafts that were allowed to be rough.",
      ]}
    />
  );
}
