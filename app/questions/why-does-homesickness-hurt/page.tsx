// app/questions/why-does-homesickness-hurt/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does homesickness hurt so much?",
  description:
    "A question-led look at homesickness: why missing home hurts, why it can last for years, and what it says about belonging to a place.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "why-does-homesickness-hurt",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why does homesickness hurt so much?"
      shortAnswer="Homesickness hurts because home is more than an address: it is the people, language, food, landscape and rhythms that told us who we were, and leaving them means losing many quiet sources of belonging at once."
      heroMetaphor="Imagine smelling rain on dry earth in a faraway city. For one moment, you are back on the hillside where you grew up. Then the street noise returns, and the ache is sharper than before."
      sections={[
        {
          title: "Why does homesickness feel so physical?",
          answer:
            "It feels physical because home is held in the body as well as the mind, through senses, routines and familiar faces.",
          metaphor:
            "Imagine reaching for a light switch that was always in one place. Your hand moves before you think. It finds only wall.",
          children:
            "Homesickness is the distress of being separated from familiar people and places. It can show up as sadness, restlessness, poor sleep, or a heavy feeling in the chest. The body remembers home through countless small cues: food, weather, sounds, language, the way people greet each other. When these disappear at once, the body notices before the mind can explain what is missing.",
        },
        {
          title: "Why doesn't keeping busy make homesickness go away?",
          answer:
            "Keeping busy rarely ends it because the feeling is about missing belonging, not about having too much free time.",
          metaphor:
            "Imagine filling a new house with furniture. Every room is full. It still does not feel like home.",
          children:
            "People who move for study, work, or safety are often told to stay busy and make new friends. These help, yet homesickness can return in quiet moments, on holidays, or when something familiar appears unexpectedly. Activity fills time but cannot replace the sense of being known. Belonging grows slowly, while the loss of the old belonging is felt all at once.",
        },
        {
          title: "What do we actually miss when we miss home?",
          answer:
            "We miss a whole web of relationships, language, food, landscape and routines that made life feel understood.",
          metaphor:
            "Imagine a fishing net with many knots. Cut a few and it still holds. Cut it all at once and it falls apart.",
          children:
            "Home is rarely one thing. It is the people who knew us before we explained ourselves, the language we think in, the meals that taste like childhood, the hills or streets we walked without effort. Each provided a small sense of belonging. Moving away removes many of these at once. Homesickness is the felt absence of that whole web, not only of a place on a map.",
        },
        {
          title: "Why can homesickness last for years?",
          answer:
            "It can last for years because building a new sense of home takes much longer than losing the old one.",
          metaphor:
            "Imagine transplanting a tree to new soil. The leaves recover in weeks. The roots take years to reach as deep as before.",
          children:
            "Many people living abroad find that homesickness changes but does not fully disappear. It may soften into nostalgia, then return sharply during festivals, family events, or difficult times. Some feel caught between places, not fully at home in either. This is common among migrants and diaspora communities. It reflects deep attachment rather than failure to adapt.",
        },
        {
          title: "Why does going back sometimes feel strange too?",
          answer:
            "Going back can feel strange because both the person and the place have changed while apart.",
          metaphor:
            "Imagine returning to a favorite path after many years. The trees have grown and new houses line the way. You recognize it and feel like a stranger at the same time.",
          children:
            "People who return home after time away often find that friends have moved on, prices have changed, and familiar places look different. They themselves have changed too. This can create a second kind of homesickness, for a home that no longer exists as remembered. Many people carry both feelings at once: longing for home, and not quite fitting when they arrive.",
        },
        {
          title: "Why does missing a landscape hurt as much as missing people?",
          answer:
            "Missing a landscape hurts because places shape our sense of self, especially when we grew up close to the land.",
          metaphor:
            "Imagine waking for years to the sight of mountains outside your window. One day there is only a wall of buildings. You keep looking for the ridge line that held your mornings.",
          children:
            "Many people who grew up in rural or mountain areas describe missing the land itself: the shape of hills, the smell of forests, the sound of water, the change of seasons. These places offered orientation and identity. When people leave, and especially when the land itself is changing or degrading, the loss can feel double, both distance from home and worry for its future.",
        },
        {
          title: "Why does ZenTrust see homesickness as a sign of belonging?",
          answer:
            "ZenTrust sees it as a sign of belonging because the pain reveals how deeply people are rooted in places and communities.",
          metaphor:
            "Imagine pulling up a plant and feeling resistance in the soil. The resistance is the root. It shows how far it had grown.",
          children:
            "ZenTrust does not treat homesickness as weakness or failure to adjust. It observes that the feeling reflects real bonds with people, culture, and land. Seeing it this way can reduce shame. It also invites a question: how can I stay connected to the place I come from, and contribute to its future, even from far away.",
        },
        {
          title: "What does homesickness make easy to forget?",
          answer:
            "It makes it easy to forget that connection to home can continue across distance.",
          metaphor:
            "Imagine a spring high on a hillside feeding a stream that travels far into the plains. The water leaves the hill. It is still carrying the hill with it.",
          children:
            "People living far from home often keep their culture alive through language, food, festivals, and community. Many also stay connected by supporting family, schools, and projects in their home regions. These ties do not erase the ache of distance. They can turn longing into a living relationship, where caring for home remains possible even when daily life happens somewhere else.",
        },
      ]}
      ending={[
        "Home is a web of many small belongings.",
        "Missing it shows how deep the roots went.",
        "You can still care for a place from far away.",
      ]}
      nextStep={{
        heading: "Staying connected to the hills of Nepal",
        text: "ZenTrust is planning a native food forest and spring restoration on a hillside above Kakani, Nepal, inside a community forest managed by the local forest user group. If you are far from the hills you grew up in, you can follow the work or help it grow.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
