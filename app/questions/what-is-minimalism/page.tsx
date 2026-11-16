// app/questions/what-is-minimalism/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is minimalism, and why do so many people want less?",
  description:
    "Minimalism means living with fewer, chosen things. A calm look at where the idea comes from, what it can offer, and where it becomes just another trend.",
  other: {
    category: "Modern Life",
    subcategory: "minimalism",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Modern Life"}
      question={"What is minimalism, and why do so many people want less?"}
      shortAnswer={"Minimalism is a way of living with fewer possessions and commitments, keeping what is useful or meaningful and letting go of the rest. It is less about bare rooms than about choosing deliberately, so that time, money and attention go to what matters most."}
      heroMetaphor={"Imagine opening a drawer that slides shut easily. Everything inside has a reason to be there. You notice the quiet before you notice what is missing."}
      sections={[
        {
          title: "What does minimalism mean in everyday life?",
          answer:
            "It usually means keeping fewer, better-chosen things and commitments, so that time and attention go to what you value.",
          metaphor:
            "Imagine a shelf with room between the books. Each one is easy to find. You can see what you actually read.",
          children:
            "In daily life, minimalism usually means owning fewer things, buying more slowly and clearing out what no longer serves a purpose. For some people it reaches beyond objects to schedules, screens, commitments and spending. The common thread is intention: asking why something is here before letting it stay. A minimalist home might still hold books, tools or keepsakes. What changes is the reason they are there, and the attention left over once fewer things compete for it.",
        },
        {
          title: "Where does the idea of minimalism come from?",
          answer:
            "The word comes from twentieth-century art and design, but the wish to live simply is far older.",
          metaphor:
            "Imagine a well-worn path through a field. Many people have walked it over centuries. Today it simply has a new signpost.",
          children:
            "In art, minimalism described spare paintings, sculpture and music built from few elements. Architecture and design shared similar ideas of clean lines and open space. The lifestyle version grew popular much later, often in response to homes filled with cheap goods. Yet the impulse is ancient. Monastic communities, Stoic philosophers, many religious traditions and writers such as Henry David Thoreau all asked what a person really needs. Modern minimalism is one recent answer to an old question.",
        },
        {
          title: "Is minimalism about owning as little as possible?",
          answer:
            "For many people it is not a contest to own the least, but a way of choosing what is enough.",
          metaphor:
            "Imagine packing for a long walk. You do not leave the water behind to travel lighter. You leave what you will never use.",
          children:
            "Some well-known minimalists count their possessions or live from a single bag, and those stories get attention. But many people who call themselves minimalists simply own less than they used to and choose more carefully. Enough looks different for a parent, a carpenter, a gardener or someone caring for a relative. A full workshop can be minimalist if every tool is used. The question is less how many things, and more what each one is for.",
        },
        {
          title: "Why do so many people feel weighed down by their things?",
          answer:
            "Possessions ask for time, space, money and attention, and those costs build up quietly.",
          metaphor:
            "Imagine carrying one small stone in your pocket. You hardly notice it. Then one day you count fifty.",
          children:
            "Every object needs somewhere to live, and many need cleaning, repairing, insuring or deciding about. Clutter can make a room harder to rest in and a morning harder to start. Many people also find that things carry feelings: guilt about money spent, obligation to a giver, or hopes for a self they never became. Letting go can bring relief or grief, and both are normal. If it feels overwhelming, talking to a counselor or someone trusted can help.",
        },
        {
          title: "Can minimalism become just another thing to buy?",
          answer:
            "Yes, it can turn into a look or a status signal, with expensive essentials replacing the things given away.",
          metaphor:
            "Imagine emptying a closet to feel free. Then you fill it again with fewer, costlier items. The closet is lighter, but the habit is the same.",
          children:
            "Minimalism is often sold as an aesthetic: white walls, bare surfaces, carefully chosen objects in neutral tones. Some brands market products as the one thing you need. Some people discard usable items and replace them with new ones that fit the style better, which can create more waste, not less. The quieter version of minimalism looks less photogenic. It often means keeping what works, mending what breaks and simply not buying the next thing.",
        },
        {
          title: "Is minimalism a privilege?",
          answer:
            "Choosing to own less is easier when you can afford to replace things, which is why minimalism looks different across lives.",
          metaphor:
            "Imagine two empty cupboards side by side. One was cleared by choice. The other was never full.",
          children:
            "Someone with savings can give things away knowing they can buy them again if needed. Someone with little money may keep spare parts, extra food or old clothes because those things are a safety net. Living with less is not a lifestyle trend for people who have no choice. Honest minimalism respects that difference. It focuses on mindful choices within one's own means, rather than judging how others live or what they keep.",
        },
        {
          title: "How does minimalism connect to the natural world?",
          answer:
            "Everything we own began as soil, water, minerals, oil or forest somewhere, so owning less can also mean asking less of the land.",
          metaphor:
            "Imagine following a wooden chair back to its tree. Then the tree back to its hillside. Then the hillside back to the rain that fed it.",
          children:
            "Objects hide their origins. A shirt or a phone arrives clean and packaged, with little sign of the fields, mines, rivers and labor behind it. Minimalism can become a way of seeing those connections again. Buying less, choosing durable things and repairing what breaks can all reduce demand on distant places. It will not solve large environmental problems alone. But it can shift attention from what we want to what the earth can keep providing.",
        },
        {
          title: "What does minimalism make room for?",
          answer:
            "At its best, minimalism is not about emptiness but about making space for what matters.",
          metaphor:
            "Imagine clearing a table after a long meal. The wood is visible again. Now there is room to sit down together.",
          children:
            "Owning less can free time once spent shopping, sorting and maintaining. It can ease some financial pressure and quiet a crowded home. Many people say the real change is in attention: fewer things asking to be looked at, more space for people, rest, craft or the outdoors. Minimalism is not a rule to follow perfectly. It is a question to return to, gently and often: what is this for, and is it enough?",
        },
      ]}
      ending={[
        "Enough is a question, not a number.",
        "Fewer things can mean more attention.",
        "What we keep shapes how we live.",
      ]}
      nextStep={{
        heading: "What ZenTrust plans to do",
        text: "Minimalism asks what is enough, and land asks the same question. In Kakani, Nepal, ZenTrust is planning to help a pine-dominated hillside, the community forest of a local forest user group, hold its water first, then plant native and fruit trees in layers, with species chosen together with the group; work on the hillside has not started yet.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
