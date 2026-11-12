// app/questions/imposter-syndrome/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do capable people feel like impostors?",
  description:
    "A question-led look at imposter syndrome: why capable people feel like frauds, and why the feeling survives every success.",
  other: {
    category: "Mind & Experience",
    subcategory: "imposter-syndrome",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why do capable people feel like impostors?"
      shortAnswer="Capable people often feel like impostors because their environments measure them constantly while rarely telling them they belong, so each success feels borrowed rather than earned, and the fear of being found out keeps outrunning the evidence."
      heroMetaphor="Imagine being handed a key to a house you helped build. Every time you open the door, you glance over your shoulder. The lock works, yet you still feel like a guest."
      sections={[
        {
          title: "Why does imposter syndrome feel so convincing?",
          answer:
            "It feels convincing because the inner sense of belonging lags far behind the outer record of achievement.",
          metaphor:
            "Imagine climbing a staircase in the dark. Each step holds your weight. You still reach for the railing as if the next one will vanish.",
          children:
            "Imposter syndrome is the persistent feeling that your success was luck, timing, or a mistake someone has not noticed yet. It often appears in people who are objectively skilled. Praise does not settle it. Promotions can make it louder. The feeling is not a lack of information about your abilities. It is a gap between what you have done and whether you feel allowed to own it.",
        },
        {
          title: "Why does the usual advice about confidence fall short?",
          answer:
            "The usual advice falls short because it treats a feeling about belonging as a problem of self-belief alone.",
          metaphor:
            "Imagine being told to feel warm while standing in a cold hallway. You rub your hands together and try harder. The draft keeps coming through the door.",
          children:
            "People are told to list their achievements, practice affirmations, or simply trust themselves more. These can help for a moment. Yet many workplaces, schools, and online spaces keep evaluating people without pause. Rankings, reviews, and comparisons arrive daily. When belonging is always conditional, confidence has nothing stable to stand on. The feeling persists because the environment keeps asking the same question again and again.",
        },
        {
          title: "What actually keeps the impostor feeling alive?",
          answer:
            "It is kept alive by conditional belonging, where acceptance seems to depend on the next performance rather than on who you are.",
          metaphor:
            "Imagine a guest list that is rewritten every morning. Your name has always been on it. You still check before walking in.",
          children:
            "Many people learned early that approval followed results. Grades, rankings, and praise arrived after performance, not before it. Over time, worth became something earned again each day. In adulthood, that pattern continues quietly. Each task becomes a test of whether you still belong. Success brings relief rather than ease, because the next test is already waiting and the earlier ones never seem to count.",
        },
        {
          title: "Why does success sometimes make the feeling worse?",
          answer:
            "Success can make it worse because each new level brings new people to measure against and more to lose.",
          metaphor:
            "Imagine stepping onto a higher ledge on a cliff. The view is wider. The drop below you is also deeper.",
          children:
            "When people move into new roles, they often compare their inside experience to everyone else's outside presentation. Colleagues seem certain, polished, and at ease. Your own doubts are fully visible to you, while theirs are hidden. Rising expectations add pressure. The higher you climb, the more it seems one mistake could expose you. Achievement raises the stakes without resolving the underlying question of belonging.",
        },
        {
          title: "How does the impostor feeling shape everyday work?",
          answer:
            "It pushes people toward overpreparation, quiet perfectionism, and avoiding the risks that growth requires.",
          metaphor:
            "Imagine rehearsing a short speech a hundred times. The words become flawless. You never get to discover what you might have said freely.",
          children:
            "People who feel like impostors often work longer and check more, hoping thoroughness will protect them. They may decline opportunities, avoid asking questions, or hide early drafts. Mistakes feel dangerous rather than useful. This can look like diligence from the outside. Inside, it is exhausting. Energy goes into defending a position rather than exploring, learning, or enjoying the work itself.",
        },
        {
          title: "Why is imposter syndrome so common now?",
          answer:
            "It is common because visibility, comparison, and constant evaluation have become normal features of work and social life.",
          metaphor:
            "Imagine working in a room lined with mirrors. Every movement is reflected back at you. You begin to perform even when no one is watching.",
          children:
            "Many people now work in roles where output is hard to measure but always observed. Online profiles display others' highlights. Feedback is frequent and public. Job security often feels uncertain. Under these conditions, almost anyone can wonder whether they truly deserve their place. The feeling is widespread not because people are fragile, but because the conditions for doubt are everywhere.",
        },
        {
          title: "Why does ZenTrust look at the setting, not just the person?",
          answer:
            "ZenTrust looks at the setting because the same person can feel like an impostor in one place and at home in another.",
          metaphor:
            "Imagine a plant that wilts in one window and thrives in another. Nothing about the plant changed. The light did.",
          children:
            "ZenTrust does not frame imposter syndrome as a personal defect to be fixed. It notices where the feeling grows: in environments of constant measurement, unclear expectations, and conditional acceptance. Seeing the pattern can soften self-blame. It also opens a different question. Instead of asking only how to feel more confident, one can ask what kind of setting makes belonging feel real.",
        },
        {
          title: "What does the impostor feeling make easy to forget?",
          answer:
            "It makes it easy to forget that belonging can come before proof, not only after it.",
          metaphor:
            "Imagine a child running into a family kitchen. No one asks what they have achieved today. They simply sit down at the table.",
          children:
            "Many people have rarely experienced acceptance that did not depend on results. The impostor feeling quietly assumes that worth must be earned again and again. Yet much of human life once rested on simpler belonging: being part of a family, a place, or a community regardless of output. Remembering that possibility does not erase doubt. It reminds you that doubt is not the whole story.",
        },
      ]}
      ending={[
        "A record of success is not the same as a sense of belonging.",
        "Doubt often grows where acceptance is always conditional.",
        "You may already be standing where you are allowed to be.",
      ]}
    />
  );
}
