// app/questions/making-friends-as-an-adult/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why is it so hard to make friends as an adult?",
  description:
    "A question-led look at why making friends as an adult feels so hard, and why loneliness is often a matter of structure, not personality.",
  other: {
    category: "Mind & Experience",
    subcategory: "making-friends-as-an-adult",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why is it so hard to make friends as an adult?"
      shortAnswer="Making friends as an adult is hard because the settings that once created friendship for us, like school, shared routines and unplanned time together, largely disappear, and adult life leaves friendship to scheduling and effort."
      heroMetaphor="Imagine a garden that grew by itself every spring while you were young. One year, the rain stops coming on its own. Now every plant needs to be watered by hand."
      sections={[
        {
          title: "Why did making friends feel easier when we were younger?",
          answer:
            "It felt easier because school and early life placed us repeatedly near the same people with time to spare.",
          metaphor:
            "Imagine walking the same path every day with the same group. Conversations start without planning. Friendship forms along the way.",
          children:
            "Childhood and student life offer repeated, unplanned contact with peers. People share classes, meals, and free time without arranging it. These conditions allow friendships to grow gradually through familiarity. Few people notice how much structure supported their early friendships. When that structure ends, the difference can feel like a personal change rather than a change in circumstances.",
        },
        {
          title: "Why doesn't simply putting yourself out there solve it?",
          answer:
            "It often fails because one-off meetings rarely provide the repeated contact that friendship needs to grow.",
          metaphor:
            "Imagine planting seeds and never returning to water them. Some may sprout for a moment. Few take root.",
          children:
            "Adults are often told to join events, use apps, or reach out more. These can create introductions. Yet friendship usually grows through repeated time together, not single meetings. Many adult social settings are one-time or irregular. People meet, enjoy themselves, and never see each other again. The problem is less about courage and more about the absence of ongoing shared settings.",
        },
        {
          title: "What actually makes adult friendship so difficult?",
          answer:
            "Adult friendship is difficult because work, family and mobility leave little unstructured time and few shared places.",
          metaphor:
            "Imagine a town where everyone drives straight from home to work and back. The streets are busy. No one ever stops to talk.",
          children:
            "Many adults work long hours, care for children or parents, and move for jobs. Free time is scarce and often planned in advance. Shared public spaces, local groups, and stable neighborhoods have weakened in many places. Each friendship must be scheduled and maintained individually. Without shared routines, even willing people struggle to find the repeated contact that turns acquaintances into friends.",
        },
        {
          title: "How does loneliness shape how adults approach people?",
          answer:
            "Loneliness can make people more cautious and self-protective, which makes connection harder still.",
          metaphor:
            "Imagine walking into a room after a long time alone. Every glance feels like a judgment. You stay near the door.",
          children:
            "When people go a long time without close friends, they may become more alert to possible rejection. Small silences feel meaningful. Invitations feel risky. This caution is understandable, yet it can keep people from reaching out or accepting offers. Loneliness then sustains itself. Many lonely people are not unfriendly. They are protecting themselves in a setting where connection already feels uncertain.",
        },
        {
          title: "Why do existing friendships fade in adulthood?",
          answer:
            "Friendships fade because life changes pull people in different directions while nothing brings them back together.",
          metaphor:
            "Imagine two boats drifting on a wide lake. Neither rows away. The water slowly widens the distance between them.",
          children:
            "People move cities, change jobs, have children, or work different hours. Friends who once saw each other daily now meet rarely. Each reunion requires planning. Over time, conversations become catch-ups rather than shared life. Without intention, friendships drift. This is not usually a choice or a sign of failure. It is a pattern created by changing circumstances and the lack of shared ongoing settings.",
        },
        {
          title: "Why do so many adults feel lonely without saying so?",
          answer:
            "Many adults stay quiet because loneliness is often mistaken for a personal flaw rather than a common condition.",
          metaphor:
            "Imagine many people standing on separate islands. Each one believes everyone else is together on the mainland. No one waves first.",
          children:
            "Admitting loneliness can feel embarrassing, as if it reveals something wrong. Social media shows others surrounded by friends, which deepens the feeling of being alone in being alone. As a result, many adults hide their loneliness, even from people who feel the same way. Silence keeps the problem invisible and makes it harder for people to find each other.",
        },
        {
          title: "Why does ZenTrust look at the structure of adult life?",
          answer:
            "ZenTrust looks at structure because friendship depends on settings as much as on personality.",
          metaphor:
            "Imagine a fire that needs both wood and air. Good wood alone will not burn in a sealed box. The box matters too.",
          children:
            "ZenTrust does not treat difficulty making friends as a personal failing. It observes how work patterns, mobility, and the loss of shared places shape adult connection. Seeing this can ease shame. It also points toward a practical question: where in my life could I see the same people regularly, doing something shared, without having to schedule each meeting from scratch.",
        },
        {
          title: "What does adult loneliness make easy to forget?",
          answer:
            "It makes it easy to forget that friendship often grows from doing things together, not from searching for friends.",
          metaphor:
            "Imagine strangers planting a garden together each week. They come for the soil and the seeds. Months later, they come for each other.",
          children:
            "Many adult friendships begin as side effects of shared activity: volunteering, community projects, classes, sports, or caring for a place together. The focus is on the task, which removes pressure. Repeated contact does the rest. Remembering this can make connection feel less like a performance and more like something that grows naturally when people return, week after week, to the same work.",
        },
      ]}
      ending={[
        "Friendship once grew from shared paths.",
        "Adult life removed the paths, not the need.",
        "People often become friends while working on something together.",
      ]}
    />
  );
}
