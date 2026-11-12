// app/questions/hedonic-treadmill-never-satisfied/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why am I never satisfied, even when I get what I wanted?",
  description:
    "A question-led look at the hedonic treadmill: why each goal reached becomes the new normal, and satisfaction keeps slipping away.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "hedonic-treadmill-never-satisfied",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why am I never satisfied, even when I get what I wanted?"
      shortAnswer="We are rarely satisfied for long because people adapt quickly to what they gain, so each achievement becomes the new baseline, and a culture built on constant upgrades keeps placing the next goal just ahead of us."
      heroMetaphor="Imagine walking toward the horizon on a clear day. You cover real distance with every step. The line keeps sliding back, exactly as far as you have come."
      sections={[
        {
          title: "Why does satisfaction fade so quickly?",
          answer:
            "Satisfaction fades because people adapt to new circumstances, and what once felt special soon feels ordinary.",
          metaphor:
            "Imagine stepping into a warm bath on a cold day. At first the heat feels wonderful. Within minutes it simply feels like water.",
          children:
            "The hedonic treadmill describes how people return toward their usual mood after good or bad changes. A raise, a new home, or a long-awaited purchase brings real joy at first. Then the new situation becomes normal. This is not ingratitude. It is a basic feature of how attention works. What stays the same fades into the background, freeing the mind to notice whatever is new.",
        },
        {
          title: "Why doesn't getting more seem to fix it?",
          answer:
            "Getting more does not fix it because each gain resets expectations, so the target moves with you.",
          metaphor:
            "Imagine climbing to reach a shelf. When you arrive, someone builds another shelf above it. You keep climbing, and the room keeps growing taller.",
          children:
            "Many people assume the next level will finally feel like enough: a better salary, a larger home, more recognition. When they arrive, the feeling of enough is brief. Expectations rise with circumstances. People also compare themselves to those who now seem slightly ahead. The goal was never a fixed amount. It was a feeling of arrival that the treadmill keeps moving out of reach.",
        },
        {
          title: "What actually keeps the treadmill turning?",
          answer:
            "It is kept turning by natural adaptation combined with an economy that depends on continual wanting.",
          metaphor:
            "Imagine a wheel that turns whenever you walk. Someone has also tilted the floor slightly downhill. You never have to decide to keep moving.",
          children:
            "Adaptation is part of human nature. What has changed is the environment around it. Advertising, social media, and constant product updates offer an endless sequence of new things to want. Each one promises the satisfaction the last one could not hold. Much of modern economic life relies on people never feeling quite finished. The treadmill is natural, but the speed at which it turns is designed.",
        },
        {
          title: "How does the treadmill shape the way we live?",
          answer:
            "It turns life into a series of preparations for a future that never quite arrives.",
          metaphor:
            "Imagine always packing for a journey. Bags are filled, checked, and repacked. The departure date keeps moving forward.",
          children:
            "When satisfaction always seems one step ahead, the present becomes a waiting room. People work hard for the next milestone and then begin preparing for the one after. Rest feels unearned until the goal is reached. Relationships and simple pleasures get postponed. Years can pass in this way, productive and full, yet strangely unlived, as if real life were scheduled to begin later.",
        },
        {
          title: "Why do comparisons make it harder to feel content?",
          answer:
            "Comparisons make it harder because satisfaction is often measured against others rather than against what we need.",
          metaphor:
            "Imagine sitting in a comfortable chair until someone sits nearby in a slightly softer one. Your chair has not changed. It now feels harder.",
          children:
            "People often judge their situation relative to those around them. When neighbors, colleagues, or online contacts seem to have more, what we have can feel smaller. Social media makes these comparisons constant and selective. We see others' best moments against our ordinary ones. Contentment becomes fragile, because there is always someone further ahead on a treadmill that everyone seems to be running.",
        },
        {
          title: "Why does chasing satisfaction often leave people tired?",
          answer:
            "Chasing satisfaction tires people because the effort is real, while the reward fades quickly.",
          metaphor:
            "Imagine filling a bucket that has a small hole in the bottom. You carry water all day. By evening, the bucket is nearly empty again.",
          children:
            "Each goal requires work, attention, and often sacrifice. When the satisfaction from reaching it fades within weeks, the cost begins to feel larger than the gain. People may wonder why they feel restless or flat despite doing well. The fatigue does not come from failure. It comes from running in place with full effort, while expecting the ground to stop moving.",
        },
        {
          title: "Why does ZenTrust question the race rather than the runner?",
          answer:
            "ZenTrust questions the race because the restlessness comes from the structure of wanting, not from personal weakness.",
          metaphor:
            "Imagine watching runners on a track that loops forever. Each one is fast and strong. None of them is going to arrive.",
          children:
            "ZenTrust does not frame dissatisfaction as a lack of gratitude or discipline. It observes how adaptation and constant offers of more combine into an endless loop. Seeing the loop clearly can bring relief. It also invites different questions: what is actually enough, what lasts beyond novelty, and what kinds of activity, such as caring for people or land, feel meaningful without needing to be bigger.",
        },
        {
          title: "What does the treadmill make easy to forget?",
          answer:
            "It makes it easy to forget that some kinds of satisfaction grow with time instead of fading.",
          metaphor:
            "Imagine planting a tree instead of buying a new chair. The chair is at its best on the first day. The tree is better every year.",
          children:
            "Novelty fades, but some experiences deepen with repetition: long friendships, skills practiced over years, a place cared for season after season. These do not reset to zero when they become familiar. They become richer. The treadmill hides them because they are slow and rarely advertised. Remembering them does not end wanting. It offers somewhere for attention to rest that does not slide away.",
        },
      ]}
      ending={[
        "Arriving is brief when the destination keeps moving.",
        "Wanting more is natural, but the speed of wanting is designed.",
        "Some things become better the longer you stay with them.",
      ]}
    />
  );
}
