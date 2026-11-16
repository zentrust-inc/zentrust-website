// app/questions/revenge-bedtime-procrastination/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do we stay up late when we know we need sleep?",
  description:
    "Revenge bedtime procrastination is staying up late to reclaim time for yourself. Why it happens, what it says about our days, and what helps.",
  other: {
    category: "Modern Life",
    subcategory: "revenge-bedtime-procrastination",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Modern Life"
      question="Why do we stay up late when we know we need sleep?"
      shortAnswer="Many people stay up far later than they meant to, scrolling or watching, even though they are tired. Often called revenge bedtime procrastination, it is less about poor willpower and more about trying to reclaim a sense of freedom after days that felt owned by others."
      heroMetaphor="Imagine coming home after a long shift and finally closing the door. The night belongs to you. You hold on to it, even as it slips toward morning."
      sections={[
        {
          title: "What is revenge bedtime procrastination?",
          answer:
            "It is delaying sleep to get personal time back, even when you know you will regret it tomorrow.",
          metaphor:
            "Imagine a child who stretches out the last minutes of play. They know dinner is ready. These minutes feel like the only ones that are theirs.",
          children:
            "The phrase spread online from a Chinese expression describing workers with long hours who stayed up late to reclaim free time. Researchers also use the term bedtime procrastination for going to bed later than intended without an outside reason. People are not usually doing anything special; they scroll, watch shows or simply sit. The point is the feeling of time that nobody else controls.",
        },
        {
          title: "Why does it feel like the only free time we have?",
          answer:
            "When days are filled with work, care and obligations, late night can be the first moment without demands.",
          metaphor:
            "Imagine a river flowing between high walls all day. At night the walls fall away. The water spreads out, finally free to move.",
          children:
            "Long working hours, commutes, childcare and constant messages can leave little time that feels genuinely one's own. By the time obligations end, it may be late. Sleep then feels like losing the last piece of the day. Staying up becomes a quiet protest: the evening is mine. Seen this way, the habit says something important about how the rest of the day is structured.",
        },
        {
          title: "Why don't we just go to bed when we're tired?",
          answer:
            "Tiredness lowers the energy needed to stop, so the easiest option is to keep doing what we are already doing.",
          metaphor:
            "Imagine a ball rolling slowly downhill. Stopping it takes effort. Letting it roll takes none.",
          children:
            "At the end of a long day, the mental energy to make deliberate choices is often low. Endless feeds and autoplay remove natural stopping points, so one more episode or post is always easier than standing up. The decision to go to bed has to be made again and again, while continuing requires no decision at all. That is why good intentions made in the morning often dissolve at night.",
        },
        {
          title: "What does it cost the next day?",
          answer:
            "Lost sleep usually shows up as tiredness, irritability and lower focus, which can make the next day feel even less free.",
          metaphor:
            "Imagine borrowing money to buy a little freedom. The loan comes due in the morning. The interest is paid in patience and attention.",
          children:
            "Short sleep tends to leave people more irritable, less focused and more reactive, and over time it is linked with poorer health. A tired day can feel more stressful and less satisfying, which strengthens the urge to reclaim time again that night. The cycle sustains itself. Recognizing it is not about blame; it helps explain why the late-night habit can feel both necessary and draining.",
        },
        {
          title: "Why do screens make it so much harder to stop?",
          answer:
            "Screens offer endless, effortless content with no natural ending, which keeps attention moving long past tiredness.",
          metaphor:
            "Imagine a book with no last page. Each chapter ends with the next one already open. You never reach a place to rest.",
          children:
            "Feeds and streaming services are designed to keep people engaged, with infinite scrolling and next-episode countdowns. Bright screens and stimulating content can also make it harder to feel sleepy. A paper book eventually ends a chapter; a feed never does. Many people find that simply removing the phone from the bedroom, or choosing activities with an ending, changes the night more than willpower alone.",
        },
        {
          title: "What helps people reclaim time without losing sleep?",
          answer:
            "Building small pockets of personal time earlier in the day can reduce the need to steal it from sleep.",
          metaphor:
            "Imagine a garden that gets watered only at midnight. The plants survive, but barely. Water them a little through the day, and they no longer need the midnight flood.",
          children:
            "Some people protect a short window after work for something they enjoy, so the evening does not feel like the only free time. Others set a gentle 'closing' routine, or choose a fixed time to put screens away. Talking with family about sharing chores and evening responsibilities can help too. The aim is not perfect discipline, but a day that offers enough freedom that sleep feels less like a loss.",
        },
        {
          title: "Why does ZenTrust write about sleep and time?",
          answer:
            "ZenTrust explores how the structure of modern life shapes wellbeing, not only individual habits.",
          metaphor:
            "Imagine a hillside planted so densely that no light reaches the ground. Nothing new can grow. Clearing a little space changes what is possible.",
          children:
            "ZenTrust is a US nonprofit that publishes open questions about modern life alongside its land and water work in Nepal. Revenge bedtime procrastination shows how a habit can be a reasonable response to an unreasonable schedule. ZenTrust's essays are reflection, not medical advice. They invite readers to notice the larger patterns, of work, attention and rest, that shape how people feel each day.",
        },
        {
          title: "What does this habit make easy to forget?",
          answer:
            "It makes it easy to forget that the need for free time is real and worth meeting in ways that don't cost our rest.",
          metaphor:
            "Imagine guarding a small flame from the wind with your hands all night. In the morning your hands ache. A lantern would have done the same work.",
          children:
            "Staying up late is often treated as a lack of self-control. Underneath, it usually reflects a healthy wish: to have some time that feels like one's own. Taking that wish seriously, and looking for better ways to meet it during the day, can be more effective than fighting the habit. The goal is not to give up personal time, but to stop paying for it with sleep.",
        },
      ]}
      ending={[
        "The late night is often a protest for lost time.",
        "The need behind it is real.",
        "Freedom earlier in the day can let sleep come easier.",
      ]}
    />
  );
}
