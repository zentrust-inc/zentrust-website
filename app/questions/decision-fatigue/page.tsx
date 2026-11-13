// app/questions/decision-fatigue/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why are small decisions so exhausting?",
  description:
    "A question-led look at decision fatigue and analysis paralysis: why endless small choices wear people out, and why more options rarely help.",
  other: {
    category: "Mind & Experience",
    subcategory: "decision-fatigue",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why are small decisions so exhausting?"
      shortAnswer="Small decisions are exhausting because modern life asks for hundreds of them a day, each with more options and less guidance than before. Decision fatigue is the wearing down that follows, when choosing itself becomes the work and even simple choices start to feel heavy."
      heroMetaphor="Imagine standing in a corridor lined with doors. Each one is unlocked and each has a small sign. By the twentieth door you are no longer reading the signs. You are just tired of handles."
      sections={[
        {
          title: "What is decision fatigue?",
          answer:
            "Decision fatigue is the decline in the quality and ease of choosing after a long run of decisions.",
          metaphor:
            "Imagine a shopkeeper giving change all day. In the morning each coin is counted. By closing time, the hand hesitates over the drawer.",
          children:
            "The term describes a familiar experience: after many choices, people tend to decide more hastily, avoid deciding, or fall back on whatever is easiest. Psychologists have studied this for years, and the exact mechanism is still debated. The everyday pattern is easy to recognize all the same. By evening, choosing what to eat can feel harder than a serious decision made at nine in the morning.",
        },
        {
          title: "Why does modern life demand so many decisions?",
          answer:
            "Modern life demands more decisions because customs, routines, and limits that once decided for us have been replaced by options.",
          metaphor:
            "Imagine a village with one baker. Then imagine an aisle with sixty kinds of bread. The second offers more freedom. It also asks a question every morning.",
          children:
            "Previous generations had fewer choices about food, work, clothing, partners, and how to spend an evening. Much was settled by season, tradition, or simple scarcity. Today nearly everything is configurable: plans, subscriptions, settings, careers, identities. Each option is presented as a benefit. Together they add up to a constant, low-level task that no one signed up for and that never quite ends.",
        },
        {
          title: "What is analysis paralysis?",
          answer:
            "Analysis paralysis is getting stuck comparing options because the fear of choosing wrongly outweighs the cost of not choosing.",
          metaphor:
            "Imagine a hiker at a fork with a detailed map of both trails. The more closely they study it, the later it gets.",
          children:
            "When options are many and information is endless, it is always possible to research a little more. Reviews, rankings, and comparisons promise a best answer. The search for it can replace the decision. People in this state are not lazy or indecisive by nature. They are responding to a setting that suggests a perfect choice exists and that missing it would be their fault.",
        },
        {
          title: "Why do more options not make people happier?",
          answer:
            "More options often lower satisfaction because every choice now comes with a longer list of alternatives that were given up.",
          metaphor:
            "Imagine ordering from a menu of five dishes, then from a menu of two hundred. The meal may be the same. The second one arrives with doubts.",
          children:
            "With a few options, a decent choice feels fine. With many, even a good choice invites second thoughts about the ones not taken. Some researchers have called this the paradox of choice, and while findings vary by situation, the experience is common. Abundance moves the burden from the world to the chooser. If the result disappoints, there is no one else to blame.",
        },
        {
          title: "Why does the usual advice fall short?",
          answer:
            "The usual advice falls short because it asks individuals to out-organize an environment built to keep them choosing.",
          metaphor:
            "Imagine bailing a boat with a neat, efficient bucket. The technique is excellent. The water keeps coming in.",
          children:
            "People are told to plan meals, limit their wardrobe, or make important decisions early in the day. These habits can help. Yet much of the load comes from outside: products designed with endless tiers, apps that prompt at every step, workplaces where everything is negotiable. Personal routines reduce the strain a little. They do not answer why so many trivial choices have been handed to each person to carry alone.",
        },
        {
          title: "Why does ZenTrust look at the environment, not just the mind?",
          answer:
            "ZenTrust looks at the environment because a tired chooser in a world of infinite options is behaving exactly as expected.",
          metaphor:
            "Imagine a field that is ploughed every day and never rested. The soil is not at fault for growing thin.",
          children:
            "ZenTrust does not treat decision fatigue as a failure of willpower. It notices that attention is finite, and that many systems profit from spending it. When every moment offers a choice, attention has no fallow time. Seeing this can remove some of the self-criticism people feel for being worn out by small things. It also points to what steadier lives have in common: fewer open questions, and more that is simply settled.",
        },
        {
          title: "What does decision fatigue make easy to forget?",
          answer:
            "It makes it easy to forget that limits, rhythms, and commitments can be a relief and not only a restriction.",
          metaphor:
            "Imagine a river between its banks. The banks do not stop the water. They are why it arrives somewhere.",
          children:
            "Freedom is usually pictured as more options. Yet people often feel most at ease inside chosen limits: a regular meal, a weekly rhythm, a commitment that closes other doors. Seasons, traditions, and shared routines once did much of this work quietly. They are easy to dismiss as constraints. Remembering what they offered does not remove today's choices. It suggests that not every decision needs to be made fresh each day.",
        },
      ]}
      ending={[
        "More options are not the same as more freedom.",
        "Being worn out by small choices says more about the setting than about you.",
        "Some of the most restful parts of life are the ones already decided.",
      ]}
    />
  );
}
