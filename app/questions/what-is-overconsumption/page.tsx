// app/questions/what-is-overconsumption/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is overconsumption, and why is it so hard to see?",
  description:
    "Overconsumption means using more than people or the planet can sustain. A calm look at what it is, why it happens, and what enough might feel like.",
  other: {
    category: "Modern Life",
    subcategory: "overconsumption",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Modern Life"}
      question={"What is overconsumption, and why is it so hard to see?"}
      shortAnswer={"Overconsumption is using more goods, energy and resources than people genuinely need, or more than natural systems can replenish over time. It is usually less about one person's choices and more about habits, systems and economies built around buying more."}
      heroMetaphor={"Imagine a well that a village draws from every day. Each bucket seems small. Only when the rope comes up dry does anyone count the buckets."}
      sections={[
        {
          title: "What does overconsumption actually mean?",
          answer:
            "Overconsumption means using resources faster than they can be replaced, or buying far beyond what meets real needs.",
          metaphor:
            "Imagine a bank account that earns a little interest each month. Living on the interest can go on for years. Spending the savings feels the same at first, until the balance runs low.",
          children:
            "In everyday use, the word covers more than shopping. It includes energy, water, food, travel, land and the materials hidden inside products. Something is overconsumed when it is taken faster than it can regrow, or when its use causes harm that falls on others, often far away or in the future. The line is not always sharp. Still, many signs are familiar: overflowing closets, fast-changing gadgets, food thrown away, and resources like groundwater or forests slowly thinning.",
        },
        {
          title: "How is it different from ordinary consumption?",
          answer:
            "All living things consume, and the difference lies in scale, pace and whether the systems that supply us can keep up.",
          metaphor:
            "Imagine a fire in a hearth that warms a house. The same fire in the walls burns it down. The flame is not the problem; where it burns and how much is.",
          children:
            "Eating, staying warm, getting around and having tools are ordinary parts of life. Consumption itself is not the issue. It becomes overconsumption when the total adds up to more than soils, waters, forests and the atmosphere can absorb or renew. This is why the idea is often discussed at the level of whole societies rather than single purchases. A single shirt is ordinary. A culture of short-lived shirts made and discarded in vast numbers is something else.",
        },
        {
          title: "Why do people consume more than they need?",
          answer:
            "Advertising, habit, convenience, social comparison and low prices that hide true costs all make buying more feel normal.",
          metaphor:
            "Imagine a path through tall grass worn by many feet. No one decided to make it. Once it is there, everyone walks it.",
          children:
            "Much consumption is not a deliberate choice. Marketing is designed to create wants, and online shopping removes most of the pause between wanting and having. Many products are built to be replaced rather than repaired. People also buy to belong, to signal success, or to soothe stress and boredom. Prices rarely include the cost of pollution or depleted resources, so harmful goods can look cheap. Under these conditions, buying more is simply the easiest path.",
        },
        {
          title: "What does overconsumption do to the natural world?",
          answer:
            "It draws down forests, soils, water and wildlife, and it adds waste and emissions faster than nature can process them.",
          metaphor:
            "Imagine a sponge squeezed again and again without being dipped back in water. For a while it still drips. Then it is only dry and stiff.",
          children:
            "Every product starts somewhere: a mine, a field, a forest, a river. When demand keeps rising, land is often cleared, aquifers are pumped down and fisheries are depleted. Waste builds up in landfills and oceans, and burning fossil fuels warms the climate. These effects are often felt first by communities far from the shops where goods are bought. Damage also tends to be slow and quiet, which makes it easy to overlook until springs, soils or species are gone.",
        },
        {
          title: "Does having more make people happier?",
          answer:
            "Beyond meeting basic needs and some security, more possessions tend to add surprisingly little lasting happiness.",
          metaphor:
            "Imagine sipping something sweet to quench thirst. Each sip seems to help. Soon the thirst is back and you reach for more.",
          children:
            "Research on wellbeing has long suggested that money and goods matter a great deal when they raise people out of hardship, and less once needs are met. New purchases bring a lift that fades as they become ordinary, so people reach for the next one. Debt, clutter and the time spent earning and maintaining things can add stress. Many people report that relationships, health, meaningful work and time in nature matter more than what they own.",
        },
        {
          title: "Is overconsumption mainly a personal choice?",
          answer:
            "Personal choices matter, but most consumption is shaped by systems such as housing, transport, food supply and how products are designed.",
          metaphor:
            "Imagine trying to walk slowly on a moving walkway. You can step carefully. The floor is still carrying you forward.",
          children:
            "Someone who lives far from shops and has no bus line may need a car. Someone with little time and money may rely on cheap, short-lived goods. Overconsumption is also uneven: wealthier people and countries tend to use far more than poorer ones. Blaming individuals alone can lead to guilt without change. Many people find it more useful to make reasonable personal changes while also supporting repair, sharing, better design and policies that make lighter living easier.",
        },
        {
          title: "What does 'enough' look like in practice?",
          answer:
            "Enough usually means buying less but better, using things longer, and noticing what actually adds to life.",
          metaphor:
            "Imagine a meal you stop eating when you are satisfied rather than full. Nothing is missing. You simply feel well.",
          children:
            "There is no single rule. For some people it starts with a pause before buying: do I need this, or do I want the feeling it promises? Others repair clothes, borrow tools, cook more at home or keep a phone for longer. Buying secondhand, choosing durable goods and sharing within a neighborhood all help. Small steps do not fix large systems, but they can loosen the grip of habit and make room for what matters.",
        },
        {
          title: "What does overconsumption make easy to forget?",
          answer:
            "It makes it easy to forget that everything we use comes from a living place and eventually returns to one.",
          metaphor:
            "Imagine a river known only as water from a tap. You never see the hills it drains. You forget the tap depends on them.",
          children:
            "Supply chains often hide origins. A shirt, a phone or a bag of rice arrives clean and finished, with no trace of the land, water and labor behind it. Reconnecting with those sources can change how consumption feels, not through guilt but through attention. If worry about the planet starts to feel heavy or constant, talking with a counselor or someone trusted can help. Care for places tends to grow from knowing them.",
        },
      ]}
      ending={[
        "Using is part of living; using up is something else.",
        "Most of what we buy comes from a place we never see.",
        "Enough is a feeling worth relearning.",
      ]}
      nextStep={{
        heading: "What ZenTrust plans to do",
        text: "ZenTrust's Nepal program is at the planning stage, on a community forest hillside where springs below are drying, as ZenTrust reports. The first year is planned around holding water and starting a community nursery, with the aim of helping the land recover; work on the hillside has not started.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
