// app/questions/languishing/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is languishing, and why does life feel flat?",
  description:
    "Languishing is the flat, joyless middle between thriving and depression. A calm look at what it is, why it is common, and what can bring color back.",
  other: {
    category: "Meaning & Mind",
    subcategory: "languishing",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Mind"
      question="What is languishing, and why does life feel flat?"
      shortAnswer="Languishing describes a state of feeling flat, aimless and joyless without being clearly depressed: life goes on, but with little energy or meaning. Psychologists use the word for the middle ground between thriving and mental illness, and it is more common than many people realize."
      heroMetaphor="Imagine a room where the lights have been dimmed a little each day. You never notice the change. One afternoon you realize you are squinting."
      sections={[
        {
          title: "What does languishing feel like?",
          answer:
            "Languishing often feels like muted days: getting by, not falling apart, but not really living either.",
          metaphor:
            "Imagine watching a film with the sound turned down. You can follow the story. It just doesn't reach you.",
          children:
            "People describe it as feeling stagnant, foggy or indifferent. Work gets done, messages get answered, but there is little enthusiasm or sense of direction. Joys feel muted and the future feels gray rather than frightening. Because nothing is obviously wrong, languishing is easy to dismiss. Many people only name it when they hear the word and recognize themselves. Naming it can be a small relief in itself.",
        },
        {
          title: "Where does the word come from?",
          answer:
            "The term comes from research on wellbeing that treats mental health as more than the absence of illness.",
          metaphor:
            "Imagine a garden that is not dying. The plants survive. They are not flowering either.",
          children:
            "Sociologist Corey Keyes described a spectrum of mental health running from flourishing to languishing, separate from the presence or absence of mental illness. A person can have no diagnosis and still be languishing. The idea became widely discussed during the pandemic, when many people recognized a dull, aimless state they had no word for. It points to a simple insight: not being ill is not the same as being well.",
        },
        {
          title: "How is languishing different from depression or burnout?",
          answer:
            "Languishing is quieter: less pain and exhaustion than depression or burnout, more emptiness and drift.",
          metaphor:
            "Imagine three cars by the road: one crashed, one out of fuel. The third is idling with no destination. It is not broken, just going nowhere.",
          children:
            "Depression usually involves persistent low mood, loss of interest and changes in sleep, appetite or energy that make daily life hard. Burnout is linked to prolonged stress, often at work, with exhaustion and cynicism. Languishing can sit alongside these or lead toward them, but on its own it is more about absence than distress. If low mood deepens or lasts, it is worth talking to a doctor or counselor.",
        },
        {
          title: "Why is languishing so common now?",
          answer:
            "Many modern lives offer comfort and busyness without much challenge, connection or sense of purpose.",
          metaphor:
            "Imagine a bird in a large, well-stocked cage. It has food and water. It has forgotten what flying was for.",
          children:
            "Long stretches of routine, isolation, endless scrolling and work that feels abstract can wear down engagement without causing obvious harm. Many people rarely experience deep focus, shared effort or visible results from their work. Bad news arrives constantly, while meaningful action feels out of reach. Languishing can be a reasonable response to a life that asks little and offers little that feels real.",
        },
        {
          title: "Why doesn't rest or a holiday fix it?",
          answer:
            "Rest helps tiredness, but languishing is often about missing engagement and meaning, not only energy.",
          metaphor:
            "Imagine charging a phone that has no apps worth opening. The battery is full. You still put it down.",
          children:
            "Many people take a break hoping to feel better, then return to the same flatness. That can be confusing. Rest restores energy, but languishing is often less about depletion and more about lack of absorption, challenge or connection. What helps tends to be active rather than passive: a project that absorbs attention, time with people who matter, or effort toward something one cares about.",
        },
        {
          title: "What tends to bring color back?",
          answer:
            "Absorbing activities, small wins and real connection with others often help people move toward flourishing.",
          metaphor:
            "Imagine kindling a fire on a damp day. You start with dry twigs. Slowly, larger branches catch.",
          children:
            "Psychologists point to 'flow': being so absorbed in a task that time disappears. Small, achievable goals can create momentum. Protecting stretches of uninterrupted time helps. So does time with people where conversation goes beyond logistics. Many people also find that helping others, learning a skill or working with their hands rekindles a sense of purpose. None of this is a cure, but it can shift the direction of drift.",
        },
        {
          title: "Why does ZenTrust write about languishing?",
          answer:
            "ZenTrust explores how wellbeing depends on meaning, connection and the places we live, not only on individual effort.",
          metaphor:
            "Imagine a hillside where the trees were planted all in one kind. It is green from a distance. Up close, little else grows.",
          children:
            "ZenTrust is a US nonprofit that writes open questions about modern life alongside its land and water work in Nepal. Languishing often grows in environments that are comfortable but thin: little community, little contact with nature, little visible purpose. ZenTrust's essays are reflection, not advice. They invite readers to notice what kinds of lives and places help people flourish, and to look for ways to help create them.",
        },
        {
          title: "What does languishing make easy to forget?",
          answer:
            "It makes it easy to forget that feeling flat can be a signal that something important is missing, not a personal failing.",
          metaphor:
            "Imagine a compass needle that drifts when the magnet is weak. It is not broken. It needs something to orient toward.",
          children:
            "When life feels gray, it is tempting to blame oneself for lacking motivation. Yet languishing is often a sign of unmet needs for challenge, closeness or purpose. Seeing it this way can soften self-judgment and open curiosity: what used to absorb me, who used to energize me, what would feel worth doing? Small answers to those questions can be a starting point.",
        },
      ]}
      ending={[
        "Not falling apart is not the same as being well.",
        "Flatness can be a signal, not a verdict.",
        "Color often returns through doing, not only resting.",
      ]}
    />
  );
}
