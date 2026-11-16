// app/questions/what-is-ikigai/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is ikigai, and what does it really mean?",
  description:
    "Ikigai is a Japanese idea of what makes life worth living. A calm look at its meaning, the popular diagram, and how it shows up in ordinary days.",
  other: {
    category: "Meaning & Mind",
    subcategory: "ikigai",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is ikigai, and what does it really mean?"}
      shortAnswer={"Ikigai is a Japanese word that roughly means 'a reason for being' or 'something that makes life worth living.' In Japan it often refers to everyday sources of joy and purpose, not the four-circle career diagram that made the idea popular in the West."}
      heroMetaphor={"Imagine waking before dawn because the bread needs shaping. No one is forcing you. The reason to get up is already waiting in your hands."}
      sections={[
        {
          title: "What does the word ikigai mean?",
          answer:
            "Ikigai combines Japanese words for life and worth, and it describes whatever makes life feel worth living.",
          metaphor:
            "Imagine a small lamp left on in a window. It does not light the whole street. It is enough to guide you home.",
          children:
            "The word joins iki, meaning life or living, with gai, meaning worth or value. In everyday Japanese it can describe almost anything that makes life feel worth living: a child, a garden, a craft, a morning walk, a role in a community. People may speak of having several ikigai at once. The word is ordinary rather than mystical. It points less to a grand mission and more to the felt sense that today is worth getting up for.",
        },
        {
          title: "Is the four-circle diagram the real ikigai?",
          answer:
            "The well-known diagram is a Western adaptation, and it narrows ikigai toward work and income.",
          metaphor:
            "Imagine a recipe passed between countries. Each kitchen adds its own spices. The dish keeps the name but changes its taste.",
          children:
            "The popular chart overlaps four circles: what you love, what you are good at, what the world needs and what you can be paid for. It is a useful prompt for career thinking. But it is a Western adaptation, blending an older purpose diagram with the Japanese word. In Japan, ikigai is not usually tied to earning money or to being skilled. Someone can find deep ikigai in something that pays nothing and that nobody else notices.",
        },
        {
          title: "Does ikigai have to be a big life purpose?",
          answer:
            "No, ikigai is often found in small, repeated things rather than one grand calling.",
          metaphor:
            "Imagine a stone wall built from many modest stones. No single stone holds it up. Together they stand for generations.",
          children:
            "Many people feel pressure to discover a single calling that explains their whole life. Ikigai, as it is commonly used in Japan, is gentler than that. It can be small and plural: tending tomatoes, cooking for family, chatting with neighbors, finishing a careful piece of work. These moments may look modest from outside. From inside, they give the day a shape and a reason. Small sources of worth can help carry a life, just as big ones can.",
        },
        {
          title: "Why is ikigai linked to Okinawa and long life?",
          answer:
            "Popular books tie ikigai to long-lived communities, but purpose is only one thread among many.",
          metaphor:
            "Imagine a strong rope made of many strands. You can point to one and admire it. The strength still comes from all of them together.",
          children:
            "Popular books often connect ikigai with Okinawa, a region of Japan known for many long-lived people. Older residents there are described as staying active, keeping close friendships and holding valued roles into late life. It is an appealing story, but long life has many causes, including diet, movement, genes and community. Some research suggests a sense of purpose is linked with better health. Still, a link is not proof of cause, and purpose is no guarantee of long life.",
        },
        {
          title: "How is ikigai different from passion or a career?",
          answer:
            "Passion is intense and a career is a job path, while ikigai is a steadier sense that something is worth doing.",
          metaphor:
            "Imagine the difference between fireworks and a hearth. Fireworks dazzle for a moment. A hearth keeps a house warm through the winter.",
          children:
            "Passion usually means strong excitement for an activity. A career is a path of paid work. Ikigai can overlap with both, but it is neither. It is closer to a quiet sense of being needed or of something being worth the effort. Passion can flare and fade, and careers often end in retirement. Ikigai can shift with the seasons of life, moving from work to grandchildren to a garden, without losing its value.",
        },
        {
          title: "What if I cannot find my ikigai?",
          answer:
            "Not having a clear answer is common, and ikigai is often noticed rather than found through hard searching.",
          metaphor:
            "Imagine looking for your glasses while wearing them. You search every drawer. Then you catch your reflection and laugh.",
          children:
            "Searching hard for a single answer can make it feel further away. It may help to look backward rather than forward: what has made ordinary days feel worth it before? Small things count. If nothing feels worthwhile for a long stretch, or life feels heavy rather than just unclear, that can be a sign of something more than a missing purpose. Talking to a doctor, counselor or someone you trust can help.",
        },
        {
          title: "How do people notice their ikigai in daily life?",
          answer:
            "Paying attention to what absorbs you, connects you and makes you feel useful can reveal it over time.",
          metaphor:
            "Imagine following animal tracks in fresh snow. Each print is small. Together they show where something keeps returning.",
          children:
            "Ikigai often shows up in moments rather than plans. Notice when time passes easily, when you feel useful to someone, or when you look forward to something without being told to. Many people find it in care, craft and community: looking after others, making things well, belonging to a group. Writing down a few such moments each week can reveal patterns. The aim is not to optimize your life, only to pay attention to it.",
        },
        {
          title: "What does the ikigai trend make easy to forget?",
          answer:
            "It makes it easy to forget that a life does not need to be perfectly designed to be worth living.",
          metaphor:
            "Imagine a wild meadow next to a manicured lawn. The lawn follows a plan. The meadow is alive in ways no plan could draw.",
          children:
            "The popular version can turn ikigai into another self-improvement project: a target to hit, a box to fill in, a reason to feel behind. Yet the older idea is softer. It suggests that worth is often found, not engineered, in relationships, routines and small acts of care. Seeing it this way can ease the pressure. The question shifts from 'what is my purpose?' to 'what already quietly makes today worth living?'",
        },
      ]}
      ending={[
        "A reason to live can be small and still be real.",
        "Worth is often noticed, not engineered.",
        "Today may already hold more ikigai than you think.",
      ]}
    />
  );
}
