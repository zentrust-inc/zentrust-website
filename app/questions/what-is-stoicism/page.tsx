// app/questions/what-is-stoicism/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is Stoicism, and why does it still speak to people today?",
  description:
    "Stoicism is an ancient philosophy of steady judgment, good character and focusing on what you can control. A calm look at what it teaches and its limits.",
  other: {
    category: "Meaning & Mind",
    subcategory: "stoicism",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is Stoicism, and why does it still speak to people today?"}
      shortAnswer={"Stoicism is an ancient Greek and Roman philosophy that teaches people to focus on what they can control, act with good character and meet hardship with a steady mind. It is less about suppressing emotion than about seeing clearly, and it remains popular as a practical guide to everyday life."}
      heroMetaphor={"Imagine standing on a riverbank as a storm passes upstream. You cannot stop the water rising. You can decide where to stand and what to carry."}
      sections={[
        {
          title: "What did the Stoics actually teach?",
          answer:
            "They taught that a good life comes from good character and clear judgment, not from wealth, status or luck.",
          metaphor:
            "Imagine a ship's keel hidden below the waterline. No one admires it from the shore. It is what keeps the boat upright in a storm.",
          children:
            "For the Stoics, virtue was the only true good. Health, money and reputation were 'indifferents': worth preferring, but not the source of a good life. What mattered was how a person used whatever came their way. They also believed that much suffering comes from our judgments about events rather than the events themselves. Change the judgment, they argued, and the emotional weight often changes too. This idea sits at the heart of nearly everything else they wrote.",
        },
        {
          title: "Where did Stoicism come from?",
          answer:
            "Stoicism began in ancient Athens and later spread widely through the Roman world.",
          metaphor:
            "Imagine a conversation started on a market porch. People keep joining for centuries. Some are former slaves, some are emperors.",
          children:
            "The school was founded by Zeno of Citium, who taught in a painted porch, or stoa, in Athens. That porch gave the philosophy its name. The best-known Stoic writings that survive come from the Roman era: the letters of Seneca, the teachings of Epictetus, a former slave, and the private notebook of the emperor Marcus Aurelius, now called the Meditations. Their range of backgrounds is part of the appeal. The ideas were meant for anyone.",
        },
        {
          title: "What is the dichotomy of control?",
          answer:
            "It is the Stoic practice of separating what is up to us from what is not, and putting our effort into the first.",
          metaphor:
            "Imagine an archer who trains, aims and releases with care. Once the arrow leaves the bow, the wind takes over. The archer's part was the aim.",
          children:
            "The Handbook of Epictetus opens with this idea. Our own judgments, intentions and actions are up to us. Other people's opinions, our bodies, the economy and the weather are not, at least not fully. The Stoics did not say to stop caring about outcomes. They suggested caring about them without staking our peace on them. Many people find this freeing. Worry can shrink when attention moves from what we cannot steer to what we can.",
        },
        {
          title: "Does being stoic mean hiding your feelings?",
          answer:
            "No, the everyday word 'stoic' suggests suppressing emotion, but the philosophy was more about understanding emotions and the judgments behind them than burying them.",
          metaphor:
            "Imagine a lake after a stone is thrown in. The ripples are real. A deep lake simply returns to stillness sooner.",
          children:
            "In ordinary speech, 'stoic' means enduring pain without complaint. The ancient Stoics were subtler. They accepted that first reactions, like a jolt of fear, happen to everyone. What they worked on was the judgment that follows and whether it turns into lasting anger, panic or despair. They also valued warm feelings such as joy, kindness and affection. Pushing feelings down is not what they taught. If emotions feel overwhelming, talking to a counselor or someone trusted can help.",
        },
        {
          title: "What are the Stoic virtues?",
          answer:
            "The Stoics named four core virtues: wisdom, courage, justice and moderation.",
          metaphor:
            "Imagine a table with four legs. Remove one and it wobbles. The virtues were meant to stand together.",
          children:
            "Wisdom means seeing situations clearly and knowing what truly matters. Courage means acting rightly despite fear or discomfort. Justice means treating others fairly and contributing to the common good. Moderation, sometimes called temperance, means self-control and a sense of enough. The Stoics saw these as aspects of one good character rather than separate skills. Justice is often overlooked in modern retellings, yet the Stoics believed people are naturally social and owe care to the wider human community.",
        },
        {
          title: "What practices did the Stoics use?",
          answer:
            "They used simple daily exercises, like reflection, journaling and imagining setbacks, to train their judgment.",
          metaphor:
            "Imagine a musician practicing scales every morning. No audience hears them. They are what make the performance possible.",
          children:
            "Seneca described reviewing his day each evening, asking where he had acted well and where he could improve. Marcus Aurelius wrote reminders to himself, apparently never meant for publication. Stoics also practiced imagining loss or difficulty in advance, not to dwell on it, but to appreciate what they had and feel less shaken if trouble came. Another exercise was the 'view from above': picturing one's worries from a great height, where they look smaller.",
        },
        {
          title: "Why is Stoicism popular again?",
          answer:
            "Many readers find its practical, plain-spoken advice steadying in a noisy, uncertain world.",
          metaphor:
            "Imagine finding an old, well-worn tool in a shed. It has no batteries or screen. It still fits the hand.",
          children:
            "The Roman Stoic texts often read more like advice from a friend than abstract theory. That makes them easy to pick up. Some modern therapists have named Stoic ideas as an influence on cognitive approaches, which also look at how thoughts shape feelings. Stoicism is now quoted in books, podcasts and workplaces. Some of this simplifies it into toughness or productivity tips. The original philosophy was broader, asking how to live well with others, not only how to win.",
        },
        {
          title: "What can Stoicism make easy to forget?",
          answer:
            "It can make it easy to forget that acceptance is not the same as resignation, and that some things deserve to be changed.",
          metaphor:
            "Imagine a calm sailor who stops checking the hull for leaks. Calm is a good thing on a boat. So is fixing what is broken.",
          children:
            "Taken too far, the focus on inner control can turn into ignoring real problems or blaming oneself for every struggle. Many Stoics were active in public life and cared about justice. Their calm was meant to support good action, not replace it. Stoicism is also one tradition among many, and it does not suit every situation. In times of grief or deep distress, support from people, doctors or counselors can matter more than any philosophy.",
        },
      ]}
      ending={[
        "Not everything is up to us, but our response often is.",
        "Calm is meant to serve good action, not replace it.",
        "A steady mind is built a little each day.",
      ]}
    />
  );
}
