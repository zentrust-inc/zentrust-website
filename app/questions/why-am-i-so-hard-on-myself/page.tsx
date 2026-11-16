// app/questions/why-am-i-so-hard-on-myself/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why am I so hard on myself?",
  description:
    "Why harsh self-criticism feels normal, where the inner critic comes from, why it rarely helps us improve, and what a kinder standard can look like.",
  other: {
    category: "Meaning & Mind",
    subcategory: "why-am-i-so-hard-on-myself",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Mind"
      question="Why am I so hard on myself?"
      shortAnswer="Many people speak to themselves far more harshly than they would ever speak to a friend. This inner critic often began as a way to stay safe, avoid rejection or meet high expectations, but over time it tends to drain motivation rather than build it."
      heroMetaphor="Imagine a coach who shouts at every small mistake. The player tries harder at first. Eventually they become afraid to try at all."
      sections={[
        {
          title: "Why do I speak to myself so harshly?",
          answer:
            "Harsh self-talk often grows from early lessons that mistakes are dangerous or that worth must be earned.",
          metaphor:
            "Imagine a guard posted at a gate long ago. The danger has passed. The guard still stops everyone who approaches.",
          children:
            "Self-criticism often starts as protection. If approval, safety or love seemed to depend on performance, a child may learn to watch for flaws before anyone else can point them out. Being hard on oneself feels like staying ahead of rejection. Over time, the critical voice becomes automatic and familiar. It may even feel like the voice of reason. Understanding its origins can make it easier to question rather than obey.",
        },
        {
          title: "Why does self-criticism feel like it keeps me motivated?",
          answer:
            "It can feel motivating because fear creates urgency, but it rarely sustains effort or learning.",
          metaphor:
            "Imagine pushing a cart with a whip behind you. You move fast for a while. Soon you are too tired to move at all.",
          children:
            "Many people believe that without harsh self-talk they would become lazy or careless. In the short term, fear of failure can push people to work hard. But research on self-compassion suggests that people who treat their mistakes with understanding are often more willing to try again, take responsibility and learn. Harsh criticism tends to bring shame, avoidance and burnout instead of steady improvement.",
        },
        {
          title: "Why can I be kind to others but not to myself?",
          answer:
            "We often hold others to a human standard and ourselves to an impossible one.",
          metaphor:
            "Imagine a teacher who forgives every student's mistakes. At home, the teacher grades their own work in red ink. The standards are not the same.",
          children:
            "Many people offer friends patience and reassurance after mistakes, yet judge themselves harshly for the same thing. This double standard can come from believing one must be extra careful, extra good or extra competent to deserve a place. It can also come from seeing one's own thoughts and doubts in full, while seeing only others' outward actions. Recognizing the double standard is often the first step toward softening it.",
        },
        {
          title: "How are high standards different from being hard on yourself?",
          answer:
            "High standards aim at growth; harsh self-criticism aims at punishment.",
          metaphor:
            "Imagine two gardeners pruning a tree. One cuts carefully to help it grow. The other hacks at it in frustration, and the tree feels the difference.",
          children:
            "Wanting to do good work is healthy. High standards become harmful when every shortfall feels like proof of failure, when mistakes trigger shame rather than learning, and when success brings relief instead of satisfaction. A helpful standard says: this matters, let's improve it. A harsh one says: you should have known better. The first invites growth. The second invites fear.",
        },
        {
          title: "Why does comparison make it worse?",
          answer:
            "Comparison provides endless evidence that someone else is doing better, which feeds the inner critic.",
          metaphor:
            "Imagine measuring your tree against the tallest trees in every forest. Yours always looks small. You forget it is still growing.",
          children:
            "Social media and constant achievement stories make comparison effortless. People see others' highlights next to their own everyday struggles. For someone already self-critical, this becomes fuel: proof that they are behind. The comparison is rarely fair, since it pits one person's full inner life against another's curated surface. Noticing when comparison is happening can help reduce its power.",
        },
        {
          title: "What does a kinder inner voice sound like?",
          answer:
            "A kinder inner voice is honest about mistakes but speaks with the warmth one would offer a friend.",
          metaphor:
            "Imagine a mentor who notices your error. They point it out plainly. Then they ask what you learned and what you will try next.",
          children:
            "Self-compassion is not ignoring problems or lowering standards. It means noticing pain without exaggerating it, remembering that mistakes are part of being human, and responding with care. Some people ask, 'What would I say to a friend in this situation?' Others simply pause before accepting a harsh thought as true. Over time, a kinder voice can become as familiar as the critical one.",
        },
        {
          title: "Why does ZenTrust write about self-criticism?",
          answer:
            "ZenTrust explores how modern pressures and old survival habits shape how people treat themselves and each other.",
          metaphor:
            "Imagine soil that has been scraped bare for years. Nothing grows well. When it is covered and left to rest, life returns slowly.",
          children:
            "ZenTrust is a US nonprofit that publishes open questions about modern life alongside its land and water work in Nepal. Harsh self-criticism often reflects environments where worth feels conditional and mistakes feel costly. ZenTrust's essays are reflection, not therapy or advice. They invite readers to notice where their inner critic came from and to imagine relationships, with themselves and others, built on care rather than fear.",
        },
        {
          title: "What does being hard on yourself make easy to forget?",
          answer:
            "It makes it easy to forget that you deserve the same patience you give others.",
          metaphor:
            "Imagine a lamp that lights every room but its own. Others see clearly by its light. It remains in shadow.",
          children:
            "When the inner critic is loud, it is easy to forget how much effort, care and growth are already present. Mistakes become the whole story. Yet every person is learning, adjusting and trying again. Allowing room for that process, without constant judgment, does not make a person careless. It often makes them braver, more honest and more able to keep going.",
        },
      ]}
      ending={[
        "The critic began as protection.",
        "It does not have to stay in charge.",
        "Kindness can be a standard too.",
      ]}
    />
  );
}
