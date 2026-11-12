// app/questions/why-does-nature-feel-calming/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does time among trees calm us?",
  description:
    "A question-led look at forest bathing and why time in nature feels calming, from attention and the senses to belonging in a living place.",
  other: {
    category: "Nature & Land",
    subcategory: "why-does-nature-feel-calming",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Why does time among trees calm us?"
      shortAnswer="Time among trees often feels calming because natural places hold attention gently instead of demanding it, engage the senses without overwhelming them, and remind us that we belong to a living world larger than our tasks."
      heroMetaphor="Imagine stepping off a loud street into a quiet forest. The air smells of leaves and soil. Without deciding to, your breathing slows."
      sections={[
        {
          title: "Why do people feel calmer in forests and green places?",
          answer:
            "People often feel calmer because natural settings invite soft, unhurried attention rather than constant alertness.",
          metaphor:
            "Imagine watching leaves move in a light wind. Your eyes follow them without effort. Nothing asks you to respond.",
          children:
            "Many people notice that a walk among trees leaves them feeling clearer and less tense. Practices like forest bathing, or shinrin-yoku in Japan, simply invite people to spend unhurried time in a forest using all their senses. Research on time in green spaces has explored links with lower stress. Whatever the mechanisms, the experience is common: the body seems to settle when surrounded by living things.",
        },
        {
          title: "Why doesn't a nature photo or video feel the same?",
          answer:
            "A picture rarely feels the same because nature calms through many senses and through being physically present.",
          metaphor:
            "Imagine looking at a photograph of the sea. The colors are beautiful. You do not feel the wind, hear the waves, or taste the salt.",
          children:
            "Images and recordings can be pleasant, yet they mostly engage sight and hearing on a screen. A forest offers changing light, textures underfoot, smells of soil and resin, temperature, and sounds coming from every direction. The whole body participates. Being there also means stepping away from devices and tasks. The calming effect often comes from that combination, not from scenery alone.",
        },
        {
          title: "What is it about natural places that settles attention?",
          answer:
            "Natural places hold attention gently, with patterns that are interesting but rarely urgent.",
          metaphor:
            "Imagine watching a fire or a stream. Your gaze rests there easily. Your thoughts drift and then return without strain.",
          children:
            "Modern environments often demand focused, directed attention: reading, deciding, reacting. Natural settings tend to offer softer fascination. Moving leaves, birdsong, and flowing water are engaging without requiring a response. This kind of attention can give the busy, directing parts of the mind a rest. People often return from time in nature feeling less scattered and more able to think clearly.",
        },
        {
          title: "Why do so many people now feel cut off from nature?",
          answer:
            "Many people feel cut off because daily life increasingly happens indoors, on screens, and in built environments.",
          metaphor:
            "Imagine a plant kept in a dark office. It survives under artificial light. Something in it leans toward a window it cannot reach.",
          children:
            "More people live in cities, work indoors, and spend leisure time on screens than ever before. Green spaces can be far away or hard to reach. Many children grow up with little unstructured outdoor time. This distance happens gradually and is rarely noticed. Yet people often describe feeling restless or flat without knowing why, and feel different after even a short time outside.",
        },
        {
          title: "Why does a healthy forest feel different from a bare or damaged one?",
          answer:
            "A healthy forest feels different because it is full of layered, living activity, while damaged land feels empty and exposed.",
          metaphor:
            "Imagine walking through a forest with many layers of plants, birds and shade. Then walk across a dry, eroded slope. One feels like shelter. The other feels like heat.",
          children:
            "Diverse forests have tall trees, smaller trees, shrubs, ground cover, and many creatures. They hold moisture and shade. Degraded land, such as eroded slopes or monoculture plantations, often feels quieter and harsher. People sense this difference even without knowing the ecology. The calming qualities many seek in nature depend on landscapes that are alive and functioning, not only on being outdoors.",
        },
        {
          title: "Why does caring for land often feel meaningful?",
          answer:
            "Caring for land often feels meaningful because it connects effort to visible, living change over time.",
          metaphor:
            "Imagine planting a tree with your own hands. Years later, you sit in its shade. The work and the reward meet in one place.",
          children:
            "Gardening, tree planting, and restoration work give people something rare in modern life: slow, tangible results. Efforts accumulate season after season. People often describe a sense of belonging and purpose when they help a place recover. The relationship becomes reciprocal. People care for land, and land in turn offers shade, food, water, and a place where attention can rest.",
        },
        {
          title: "Why does ZenTrust connect wellbeing with the health of land?",
          answer:
            "ZenTrust connects them because people and places tend to flourish or struggle together.",
          metaphor:
            "Imagine a village beside a spring. When the spring runs clear, the village gathers there. When it dries, the village scatters.",
          children:
            "ZenTrust observes that much of what people seek in nature, calm, belonging, and meaning, depends on landscapes that are healthy and alive. When forests degrade and springs dry, communities lose more than resources. They lose places of rest and connection. Restoring land is therefore not only an environmental task. It is also a way of restoring the conditions in which people can feel at home.",
        },
        {
          title: "What does modern life make easy to forget about nature?",
          answer:
            "It makes it easy to forget that we are part of living landscapes, not only visitors to them.",
          metaphor:
            "Imagine a river that forgets it was once rain. It flows through concrete channels. Somewhere upstream, the forest still feeds it.",
          children:
            "Water, food, and air come from living systems that are easy to overlook in cities. Time in nature can bring that relationship back into view. People remember that their bodies respond to light, seasons, and living places. Remembering this does not require leaving modern life. It invites people to notice, protect, and help restore the landscapes that quietly sustain them.",
        },
      ]}
      ending={[
        "A forest asks for nothing and still gives rest.",
        "The calm we find outdoors depends on land that is alive.",
        "Caring for a place can become a way of belonging to it.",
      ]}
      nextStep={{
        heading: "What ZenTrust is doing about it",
        text: "On a pine-covered hillside above Kakani, Nepal, ZenTrust is planning a layered native food forest so monsoon rain soaks in, springs can recover, and the forest feeds the families around it. The program is in its planning stage, and we will publish what we measure.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
