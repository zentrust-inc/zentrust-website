// app/questions/how-to-live-a-simple-life/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "How can you live a simple life, and where do you start?",
  description:
    "Living simply means choosing fewer things, commitments and distractions so what matters has room. A calm look at where to start and what to let go.",
  other: {
    category: "Modern Life",
    subcategory: "simple-living",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Modern Life"}
      question={"How can you live a simple life, and where do you start?"}
      shortAnswer={"Living a simple life usually means reducing what you own, owe and commit to, so that your time and attention go to the things you value most. It is less a strict set of rules than a habit of noticing what adds weight and gently letting some of it go."}
      heroMetaphor={"Imagine a backpack you have carried for years, adding a stone each season. You stopped noticing the weight long ago. One day you set it down and your shoulders remember how to rise."}
      sections={[
        {
          title: "What does living simply actually mean?",
          answer:
            "Living simply means arranging life around what you value, with fewer possessions, obligations and distractions competing for attention.",
          metaphor:
            "Imagine a page with only a few words on it. Each one is easy to read. Nothing gets lost in the margins.",
          children:
            "Simple living is not one lifestyle. For one person it means a smaller home. For another, it means fewer evening commitments or less time on screens. The common thread is intention: choosing what stays rather than letting things pile up by default. It does not require moving to the countryside or owning almost nothing. It often starts with a quieter question: what would I keep if I had to choose, and what am I carrying only out of habit?",
        },
        {
          title: "Why does modern life feel so complicated?",
          answer:
            "Many small conveniences, purchases and commitments each make sense on their own, but together they add up to a crowded life.",
          metaphor:
            "Imagine a drawer that never gets emptied. Each item went in for a reason. Now it no longer closes.",
          children:
            "Few people choose complexity on purpose. It arrives in pieces: another subscription, another group chat, another gadget that needs charging and updating. Advertising and social media keep suggesting new things to want. Work can follow people home through their phones. Each addition seems small, so it rarely gets questioned. Over time, managing everything becomes a job of its own. Feeling overwhelmed in this setting is understandable, and it is not a sign of personal weakness or poor discipline.",
        },
        {
          title: "Where is a good place to start?",
          answer:
            "Start small and close to home, with one drawer, one habit or one commitment rather than a complete overhaul.",
          metaphor:
            "Imagine clearing a path through tall grass. You do not cut the whole field. You make enough room to take the next step.",
          children:
            "Big plans to simplify everything at once often stall. Small changes are often easier to keep. Some people begin with a single shelf or closet. Others notice one daily habit, like checking the phone first thing in the morning, and try a different routine for a week. Others look at their calendar and decline one recurring obligation. Each small change shows what simplicity actually feels like, which tends to be more persuasive than any rule.",
        },
        {
          title: "How do you decide what to let go of?",
          answer:
            "A useful test is whether something supports the life you want now, rather than the life you once planned or feel you should have.",
          metaphor:
            "Imagine packing for a long walk. You hold each item and ask if you will use it. The bag grows lighter without growing emptier.",
          children:
            "Letting go is often harder emotionally than practically. Objects can carry memories, guilt about money spent, or hopes for a future self. It can help to keep a few meaningful items and release the rest, or to set things aside in a box for a while before deciding. The same test applies to commitments, routines and the ways evenings get spent. Letting go does not erase the past. It makes room for the present.",
        },
        {
          title: "Does a simple life mean having less money?",
          answer:
            "Not necessarily, though spending less and owing less can give people more freedom and less worry.",
          metaphor:
            "Imagine a small boat with no chains dragging behind it. It is not grander than the ships around it. It turns more easily.",
          children:
            "Simple living is sometimes confused with going without. In practice, many people find that buying less, repairing things and sharing tools or books reduces the pressure to earn and maintain. Lower fixed costs can make it easier to change jobs, rest or help others. Still, simplicity looks different on different incomes, and choosing less is not the same as being forced to have less. For major money decisions, a qualified financial advisor can help.",
        },
        {
          title: "How does a simple life change your relationship with time?",
          answer:
            "With fewer demands competing for attention, time can feel less like something to manage and more like something to live in.",
          metaphor:
            "Imagine a river split into many small channels. Each one runs thin and fast. Bring them together and the water slows and deepens.",
          children:
            "Part of the strain of modern life seems to come from fragmentation: switching between tasks, messages and obligations all day. Simplifying often means protecting longer stretches of unbroken time, for work, rest or people. Some find that meals, walks or household tasks feel different when they are not rushed. Boredom may appear at first, as the mind adjusts to fewer inputs. Many people find that it passes, and that curiosity or calm grows in its place.",
        },
        {
          title: "What role does nature play in simple living?",
          answer:
            "For many people, time outdoors and closer contact with food, weather and seasons are a natural part of living more simply.",
          metaphor:
            "Imagine a forest that wastes almost nothing. Fallen leaves feed the soil. The soil feeds the next tree.",
          children:
            "Simple living has long been linked with paying closer attention to the natural world. That might mean growing herbs on a windowsill, walking the same path through the seasons, or cooking with what is local. Nature also offers a quiet model: living systems tend to cycle materials rather than discard them. Buying less and repairing more can lighten the load on land and water too. Simplicity can be a way of belonging more fully to a place.",
        },
        {
          title: "What does simple living make easy to forget?",
          answer:
            "It can make it easy to forget that simplicity is a direction to move in, not a standard to perfect or a contest to win.",
          metaphor:
            "Imagine tending a small garden. Weeds return every season. Pulling them is part of the garden, not proof of failure.",
          children:
            "Simple living can quietly turn into another project to optimize, with its own rules, purchases and comparisons. Some people feel guilty for still owning too much or for not living like the tidy images they see online. Yet life naturally gathers clutter and commitments, and family, health or work may limit what can change. If the pressure to get it right starts to feel heavy, talking with someone trusted can help. Gentleness tends to last longer than strictness.",
        },
      ]}
      ending={[
        "Simplicity is less about having less than carrying less.",
        "Start with one drawer, one habit, one evening.",
        "Make room, and let what matters fill it.",
      ]}
      nextStep={{
        heading: "What ZenTrust plans to do",
        text: "In Nepal, ZenTrust plans to help a community forest hillside by starting with the basics: holding water with contour trenches, small check dams and recharge ponds, and setting up a community nursery. After that, it plans to plant native and fruit trees in layers, with species chosen alongside the local community forest user group and local nurseries. Work on the hillside has not started yet.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
