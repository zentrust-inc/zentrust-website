// app/questions/eco-anxiety-climate-grief-solastalgia/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does the state of the planet weigh so heavily on us?",
  description:
    "A question-led look at eco-anxiety, climate grief and solastalgia: why environmental loss feels so personal, and what helps carry it.",
  other: {
    category: "Nature & Land",
    subcategory: "eco-anxiety-climate-grief-solastalgia",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Why does the state of the planet weigh so heavily on us?"
      shortAnswer="Environmental loss weighs heavily because people are deeply attached to living places, and climate news brings losses that feel huge, ongoing and out of reach, so care for the world turns into anxiety, grief and solastalgia when there is no clear way to act."
      heroMetaphor="Imagine watching the river near your childhood home grow thinner each summer. You remember swimming in deep water. Now children wade across without getting their knees wet."
      sections={[
        {
          title: "What are eco-anxiety, climate grief and solastalgia?",
          answer:
            "They are names for the worry, sorrow and homesickness people feel as the natural world changes and declines.",
          metaphor:
            "Imagine missing a place while still standing in it. The address is the same. The place itself has changed beneath your feet.",
          children:
            "Eco-anxiety describes ongoing worry about environmental harm and the future. Climate grief describes sorrow for losses already happening, such as species, landscapes, and familiar seasons. Solastalgia, a word coined by philosopher Glenn Albrecht, names the distress of seeing one's home environment change, a kind of homesickness without leaving home. These feelings are not disorders. They are responses to real changes in the world.",
        },
        {
          title: "Why does environmental loss feel so personal?",
          answer:
            "It feels personal because people are attached to places, seasons and living things that shape who they are.",
          metaphor:
            "Imagine an old tree in the square where you grew up. It is cut down one winter. You feel the loss as if someone had moved a part of your memory.",
          children:
            "People form identities around landscapes: a mountain, a river, the timing of rains, the birds that return each spring. When these change, it can feel like losing part of oneself. Those who live closest to land, such as farmers and mountain communities, often feel this first. Yet many people everywhere sense the loss, even when they struggle to put it into words.",
        },
        {
          title: "Why doesn't hearing more facts make the feeling better?",
          answer:
            "More facts rarely help because the feeling comes from caring, and information without action deepens helplessness.",
          metaphor:
            "Imagine reading every report about a storm heading toward your town. You know its speed and direction. You still have no shelter.",
          children:
            "Many people respond to eco-anxiety by reading more news and research. Knowledge matters, yet an endless stream of alarming information can increase distress. The scale of global problems feels overwhelming. Individual efforts seem tiny in comparison. Without a meaningful way to participate, awareness turns into dread. The issue is not a lack of facts. It is a gap between knowing and being able to act.",
        },
        {
          title: "Why can climate worry feel isolating?",
          answer:
            "It can feel isolating because many people carry it quietly, unsure whether others feel the same.",
          metaphor:
            "Imagine hearing a distant alarm that no one around you mentions. You wonder if you imagined it. You stop speaking about it.",
          children:
            "Conversations about environmental loss can feel awkward or heavy. Some people fear being seen as dramatic. Others avoid the topic to protect friends or family. As a result, many carry eco-anxiety privately. Yet surveys in many countries suggest that concern is widespread, especially among young people. Silence makes a shared experience feel individual, and that isolation can make the weight harder to carry.",
        },
        {
          title: "Why does climate grief often feel unfinished?",
          answer:
            "It often feels unfinished because the loss is ongoing, with no clear ending or ritual to mark it.",
          metaphor:
            "Imagine mourning someone who is still slowly leaving. Each season brings another goodbye. There is no single day to grieve and begin again.",
          children:
            "Most grief follows a loss that has happened. Environmental grief often concerns losses that continue: shrinking glaciers, drying springs, changing seasons. Communities rarely have rituals to mark these changes. Without recognition, grief can linger as background sadness or anxiety. Naming the loss, sharing it with others, and honoring what is changing can help people carry it without being overwhelmed.",
        },
        {
          title: "Why does acting locally often ease the weight?",
          answer:
            "Acting locally often helps because it turns care into visible, shared effort at a human scale.",
          metaphor:
            "Imagine standing in a dry field, overwhelmed by the drought. Then you dig one small pond with neighbors. When the rain comes, you watch it fill.",
          children:
            "Global problems can feel too large to touch. Local action brings them back into reach: restoring a stream, planting trees, protecting a spring, supporting people who live closest to the land. These efforts do not solve everything. They create something rare, a sense of contribution and companionship. Many people find that grief becomes more bearable when it is joined to meaningful work with others.",
        },
        {
          title: "Why does ZenTrust treat these feelings as care, not weakness?",
          answer:
            "ZenTrust treats them as care because the pain of environmental loss reflects a real bond between people and places.",
          metaphor:
            "Imagine feeling sad when a friend is unwell. The sadness shows how much they matter. It is not a sign that something is wrong with you.",
          children:
            "ZenTrust does not frame eco-anxiety or climate grief as problems to be removed. It observes that these feelings arise from attachment to living places. Seeing them this way can reduce shame and isolation. It also points toward a question: where could this care go? For some, the answer is restoring land, protecting water, and supporting communities who are already living with the change.",
        },
        {
          title: "What does climate news make easy to forget?",
          answer:
            "It makes it easy to forget that damaged land can recover, and that people are already helping it.",
          metaphor:
            "Imagine a bare hillside after years of erosion. One season, trenches catch the rain and seedlings take root. Slowly, green returns to the slope.",
          children:
            "News tends to focus on loss and disaster. Restoration is slower and rarely makes headlines. Yet around the world, communities are planting forests, reviving springs, and rebuilding soil. Recovery is not guaranteed and does not cancel the larger crisis. Still, it shows that the story is not only decline. Remembering this can turn grief into a reason to help a particular place heal.",
        },
      ]}
      ending={[
        "The ache for a changing world is a form of love.",
        "Grief grows heavier in silence and lighter in shared work.",
        "Somewhere, a hillside is waiting to hold water again.",
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
