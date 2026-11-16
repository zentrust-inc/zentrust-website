// app/questions/what-is-contentment/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is contentment, and how is it different from happiness?",
  description:
    "Contentment is a quiet sense that what you have and who you are is enough for now. A calm look at what it is, what it is not, and how it grows.",
  other: {
    category: "Meaning & Mind",
    subcategory: "contentment",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is contentment, and how is it different from happiness?"}
      shortAnswer={"Contentment is a steady sense that life, as it is right now, is enough, even if it is not perfect. It is quieter and longer lasting than the quick lift of happiness, and it tends to come less from getting more than from wanting differently."}
      heroMetaphor={"Imagine sitting on a porch at the end of a long day. Nothing remarkable is happening. You notice you do not want to be anywhere else."}
      sections={[
        {
          title: "What does contentment feel like?",
          answer:
            "Contentment often feels like a settled ease, a sense of being at home in your own life rather than straining toward the next thing.",
          metaphor:
            "Imagine a lake on a still morning. The water is not empty of life. It is simply not churned up.",
          children:
            "People describe it as calm, unhurried and quietly satisfied. It is not a rush of excitement or a peak moment. It can sit alongside ordinary worries, tiredness or unfinished plans. A contented person may still want things to change, but the wanting does not consume them. There is less of the background sense that real life will start later, after the next goal. Contentment can be noticed in hindsight, in small moments that felt enough at the time.",
        },
        {
          title: "How is contentment different from happiness?",
          answer:
            "Happiness often names a passing emotion, while contentment is a more stable background attitude toward one's life.",
          metaphor:
            "Imagine the difference between fireworks and a hearth. Fireworks are bright and brief. A hearth gives steady warmth through a long evening.",
          children:
            "Happiness in everyday speech often means a lift in mood: joy at good news, delight in a meal, laughter with friends. These moments come and go, as they should. Contentment works more like a baseline. It can persist through a dull afternoon or a mildly bad day. Some people find that chasing happy feelings leaves them restless, while contentment asks less of each moment. Both matter. They are simply different kinds of good.",
        },
        {
          title: "Is contentment the same as giving up or settling?",
          answer:
            "No, contentment is not resignation; it is accepting the present without abandoning care for the future.",
          metaphor:
            "Imagine a gardener who enjoys the garden in its current state. She still plans next season's planting. Enjoying today does not stop her from tending tomorrow.",
          children:
            "A common worry is that being content will make people passive or complacent. Resignation usually carries a note of defeat: nothing will change, so why try. Contentment feels different. It says this is enough to be at peace with, and still leaves room to grow, work and hope. Some people find they act more clearly from contentment than from dissatisfaction, because effort is no longer driven by a sense that something is badly wrong.",
        },
        {
          title: "Why is contentment hard to find in modern life?",
          answer:
            "Much of modern life tends to keep attention restless and wants growing, which works against feeling that enough is enough.",
          metaphor:
            "Imagine walking toward a horizon. Each step forward moves it a little farther away. You can walk all day and never arrive.",
          children:
            "Advertising, social media and constant comparison all suggest that something better is just ahead: a newer phone, a nicer home, a more impressive life. Psychologists describe hedonic adaptation, the tendency to get used to gains and return toward a familiar baseline. A raise or purchase feels good, then becomes normal. Without noticing, people can spend years upgrading circumstances while feeling much the same. Contentment is less about stopping all wanting than seeing this pattern clearly.",
        },
        {
          title: "What have traditions said about contentment?",
          answer:
            "Many philosophical and spiritual traditions treat contentment as a skill of the mind rather than a reward of circumstance.",
          metaphor:
            "Imagine two travelers with the same small bag. One feels poor. The other feels free to move.",
          children:
            "Ancient Stoic writers taught that peace comes from focusing on what is within one's control. Epicurus, often misread as championing indulgence, praised simple food, friendship and freedom from needless desires. Buddhist teaching links suffering to craving and clinging. Many religious traditions speak of gratitude and of knowing what is enough. The details differ, but a common thread runs through them: contentment depends less on having more and more on how one relates to wanting.",
        },
        {
          title: "Can contentment be practiced?",
          answer:
            "Contentment usually cannot be forced, but certain habits seem to make room for it.",
          metaphor:
            "Imagine clearing a patch of ground. You cannot make a seed sprout by pulling on it. You can remove the stones and let in light.",
          children:
            "Noticing what is already good, even briefly, can shift attention away from what is missing. Some people keep a short list of things they appreciate. Others limit comparison by stepping back from feeds that leave them restless. Slowing down meals, walks or conversations can help moments feel complete. Time outdoors, absorbing work and close relationships can support a settled mind. None of these are guarantees, and contentment tends to grow gradually rather than arrive on schedule.",
        },
        {
          title: "What if contentment feels out of reach?",
          answer:
            "If discontent is heavy, persistent or painful, it may point to something that deserves care and support, not just a change of attitude.",
          metaphor:
            "Imagine trying to admire the view while standing on a sharp stone. The view is real. First you may need to move your foot.",
          children:
            "Contentment is not a test people pass or fail. Real hardship, such as money worries, illness, loss or unsafe situations, can make peace hard to find, and pretending otherwise does not help. Ongoing restlessness, emptiness or low mood can also sometimes be linked to anxiety or depression. Talking to a doctor, counselor or someone you trust can help. Seeking support is not a failure of contentment. It is often part of the path.",
        },
        {
          title: "What does contentment make easier to see?",
          answer:
            "Contentment makes it easier to see that much of what matters is already present, waiting to be noticed.",
          metaphor:
            "Imagine searching every drawer in the house for your glasses. You grow more frustrated with each one. They were on your head all along.",
          children:
            "When the mind is always reaching, ordinary things fade into the background: a friend's voice, morning light, a meal shared without hurry. Contentment brings them forward again. It does not deny that life has problems or that change is sometimes needed. It simply loosens the grip of 'not yet' and 'not enough.' From that steadier place, people often find they can give more attention, patience and generosity to others and to themselves.",
        },
      ]}
      ending={[
        "Enough is a place, not a finish line.",
        "Contentment is quieter than happiness, and often lasts longer.",
        "Wanting differently can feel like having more.",
      ]}
    />
  );
}
