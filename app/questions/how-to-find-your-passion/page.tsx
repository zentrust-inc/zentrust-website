// app/questions/how-to-find-your-passion/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "How do you find your passion, and what if you don't have one?",
  description:
    "How to find your passion: why it is often developed rather than found, where to look for clues, and how small experiments can help.",
  other: {
    category: "Meaning & Mind",
    subcategory: "finding-passion",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"How do you find your passion, and what if you don't have one?"}
      shortAnswer={"Many people do not find a passion by searching for it in their heads. They develop one by trying things, noticing what holds their interest and staying with it long enough for it to deepen, so small experiments usually help more than waiting for a sudden sense of certainty."}
      heroMetaphor={"Imagine searching a dark house for one room with a bright light, sure it is there somewhere. You walk the halls for hours. Meanwhile, the small candle in your hand has been enough to see the next step."}
      sections={[
        {
          title: "What does finding your passion actually mean?",
          answer:
            "It usually means discovering activities, subjects or causes that hold your attention and feel worth the effort over time.",
          metaphor:
            "Imagine being told a treasure is buried somewhere in a large field. You dig a few holes and find nothing. Meanwhile, wildflowers grow all around your feet.",
          children:
            "The phrase often suggests one hidden calling, waiting to be uncovered, that will make work and life feel effortless. In practice, passion can be understood more modestly: something they return to without being pushed, that holds their attention and feels worth the effort even on dull days. It can be an activity, a subject, a cause or a group of people. Many people have several smaller passions rather than a single grand one, and these can change over time.",
        },
        {
          title: "Why does the search for passion feel so hard?",
          answer:
            "It often feels hard because people expect a sudden, certain feeling, and real interest often does not arrive that way.",
          metaphor:
            "Imagine waiting at a station for a train that announces itself with fireworks. Ordinary trains come and go. You let them all pass.",
          children:
            "Popular stories tend to show passion as a lightning strike: one moment of clarity, then a life rearranged. Real interest usually starts small and uncertain. Waiting for certainty can keep people stuck, scanning options instead of trying them. There is also pressure. When passion is presented as the key to a good life, not having one can feel like failure. That pressure can make it harder to notice the quiet interests already present, because they seem too modest to count.",
        },
        {
          title: "Is passion found or developed?",
          answer:
            "For many people, passion is developed more than found, because interest tends to grow as skill, understanding and investment grow.",
          metaphor:
            "Imagine a fire that starts with a single match. At first it barely holds. It grows because you keep feeding it.",
          children:
            "Psychologists who study interest often describe it as something that can deepen with engagement. Early on, a new activity can feel awkward or boring. As people improve, they notice more detail, meet others who care, and see their own progress. That is often when enthusiasm appears. Believing that passion should arrive fully formed may lead people to quit when things get hard. Treating interest as something that can grow may make it easier to stay long enough to find out.",
        },
        {
          title: "Where can you look for clues?",
          answer:
            "Clues often hide in ordinary moments, such as what you read about unprompted, what makes time disappear and what you keep coming back to.",
          metaphor:
            "Imagine following animal tracks in fresh snow. No single print tells you much. Together they show where something keeps returning.",
          children:
            "A few gentle questions can help. What did you enjoy as a child before anyone graded it? What topics do you explain to friends without being asked? When does an hour pass without you noticing? Whose work do you envy? What problems in the world bother you enough to talk about? None of the answers is a verdict. They are threads worth pulling. Writing them down over a few weeks can reveal patterns that a single afternoon of thinking misses.",
        },
        {
          title: "Why do small experiments help more than thinking?",
          answer:
            "Trying things gives real information, while thinking alone tends to circle the same few ideas.",
          metaphor:
            "Imagine trying to choose a fruit you have never tasted by reading about it. The descriptions all sound fine. One bite tells you more.",
          children:
            "It is hard to know whether you will enjoy something you have never done. A short class, a weekend volunteering, a conversation with someone who does that work, or a small project at home can tell you more than months of wondering. Keep the stakes low so that dropping an experiment feels fine. Notice your energy afterward, not only during. Some experiments will fade. A few may leave you wanting more, and those are worth a second, longer try.",
        },
        {
          title: "Does a passion have to become your job?",
          answer:
            "No, many people keep their passions outside paid work, and that can help protect what they love about them.",
          metaphor:
            "Imagine a garden you tend for pleasure on weekends. Nobody grades the tomatoes. That freedom is part of why you love it.",
          children:
            "Turning a love into a living can work well, but it can also add deadlines, money worries and other people's expectations. Some find that pressure drains the joy. Others find meaning in work that is not a passion in itself, because it supports people they love or leaves room for what they care about. Any decision to change careers involves financial and practical tradeoffs, and it can help to talk with people who know your situation before making big moves.",
        },
        {
          title: "What if nothing seems to spark anything?",
          answer:
            "A long stretch where nothing interests you can be a sign of exhaustion or low mood rather than a lack of passion.",
          metaphor:
            "Imagine trying to light a candle in a damp, drafty room. The wick is fine. The air needs to change first.",
          children:
            "Sometimes the problem is not that the right interest has not appeared. It is that stress, grief, burnout or depression may have dulled the capacity to feel interested at all. In that case, searching harder may not help. Rest, support and care often come first. If flatness lasts for weeks, or comes with changes in sleep, appetite or hope, talking to a doctor, counselor or someone you trust can help. Interest can return once the ground beneath it is steadier.",
        },
        {
          title: "What does the search for passion make easy to forget?",
          answer:
            "It makes it easy to forget that a meaningful life is often built from many modest commitments, not one perfect discovery.",
          metaphor:
            "Imagine a path through a forest made by many small footsteps. No one built it in a day. It formed because people kept walking.",
          children:
            "Focusing on the search can turn passion into a destination, something to reach before life properly begins. Yet much of what people value most grows slowly: friendships tended over years, skills built through practice, care given to a place or a cause. Curiosity, followed patiently, often matters more than certainty. It can help to ask a smaller question: what is worth a little more of my attention this week? Answering that, again and again, can be how passion forms.",
        },
      ]}
      ending={[
        "Passion is often grown, not found.",
        "Curiosity is enough to begin.",
        "Small steps reveal more than long searches.",
      ]}
    />
  );
}
