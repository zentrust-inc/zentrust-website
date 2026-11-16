// app/questions/hustle-culture/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is hustle culture, and why is it so exhausting?",
  description:
    "Hustle culture treats constant work and productivity as a virtue. Why it took hold, what it costs, and what a more sustainable idea of work might look like.",
  other: {
    category: "Work & Identity",
    subcategory: "hustle-culture",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Work & Identity"
      question="What is hustle culture, and why is it so exhausting?"
      shortAnswer="Hustle culture is the belief that working constantly, always optimizing and always grinding, is the path to success and a sign of worth. It can feel motivating at first, but it often turns rest into guilt and leaves people exhausted without feeling they have done enough."
      heroMetaphor="Imagine a runner who is told the race has no finish line. Every lap is praised. Slowing down feels like losing."
      sections={[
        {
          title: "What is hustle culture?",
          answer:
            "It is the idea that more work, more output and less rest are always better, and that busyness proves commitment.",
          metaphor:
            "Imagine a field that is plowed every season without a break. It keeps producing for a while. Then the harvests start to shrink.",
          children:
            "Hustle culture shows up in slogans about grinding, early-morning routines, side hustles and being 'always on'. Long hours and constant availability become badges of honor. Rest is framed as something earned, or as weakness. Social media amplifies stories of people who seemingly never stop. The message is simple and powerful: if you are not succeeding, you are not working hard enough.",
        },
        {
          title: "Why did hustle culture become so popular?",
          answer:
            "It grew where work became less secure and success became more visible and comparable.",
          metaphor:
            "Imagine a crowded room where everyone must keep moving to keep their place. No one remembers who started the rule. Everyone follows it.",
          children:
            "As stable careers became rarer and costs rose, many people felt they needed more than one job, constant upskilling and a personal brand. Technology made work possible anywhere, at any hour. Online platforms reward visible productivity and success stories. For some, hustle promised control in uncertain times. For companies, it often meant more work for the same pay. The culture spread because it fit the pressures many people already felt.",
        },
        {
          title: "Why does hustle feel good at first?",
          answer:
            "Early on, hard work brings progress, praise and a clear sense of purpose.",
          metaphor:
            "Imagine sprinting at the start of a long race. The wind feels good and the crowd cheers. You forget how far there is to go.",
          children:
            "Intense effort can be rewarding: goals get met, skills grow and others take notice. Many people genuinely enjoy periods of deep, demanding work. The trouble begins when intensity becomes the permanent standard. Without rest, the same habits that created progress begin to erode health, relationships and creativity. What once felt energizing starts to feel like a treadmill that cannot be turned off.",
        },
        {
          title: "What does constant hustle cost?",
          answer:
            "It often costs sleep, health, relationships and the ability to enjoy what one has achieved.",
          metaphor:
            "Imagine building a house so quickly that you never move in. The rooms are beautiful. You only ever see them on the way to the next job.",
          children:
            "Long working hours are linked with stress and health problems. Constant availability can crowd out friendships and family time. Creativity often needs rest and unstructured time to appear. Many people who hustle hard describe a strange emptiness: goals are reached, but satisfaction is brief because the next target arrives immediately. The cost is not only exhaustion but the loss of a life outside work.",
        },
        {
          title: "Why does rest feel like guilt?",
          answer:
            "When worth is tied to productivity, rest can feel like falling behind or failing.",
          metaphor:
            "Imagine a machine built to run without stopping. When it pauses, an alarm sounds. The alarm is about the machine's design, not about rest itself.",
          children:
            "Many people raised on productivity messages feel uneasy doing nothing. A slow afternoon can trigger anxious thoughts about wasted time. This guilt often comes from learning that love, approval or security depend on achievement. Rest then feels unsafe. Recognizing where that belief came from can help separate genuine ambition from a fear that one is only valuable when working.",
        },
        {
          title: "What would a more sustainable idea of work look like?",
          answer:
            "It would value focus, rest and meaning as much as effort and output.",
          metaphor:
            "Imagine a forest where trees grow in seasons. Some years are for growth, some for rest. The forest lasts for centuries.",
          children:
            "Some people and workplaces are moving toward deep work with clear boundaries, rest as a deliberate part of performance, and success measured by impact rather than hours. Work that connects to a purpose beyond the paycheck can feel more sustaining than endless output. None of this rejects effort. It suggests that effort lasts longer, and means more, when it is shaped by rhythms rather than constant pressure.",
        },
        {
          title: "Why does ZenTrust write about hustle culture?",
          answer:
            "ZenTrust explores how modern patterns of work affect wellbeing and how land and people both need cycles of rest.",
          metaphor:
            "Imagine a hillside planted for speed with one kind of tree. It grows fast. Years later, the springs below begin to dry.",
          children:
            "ZenTrust is a US nonprofit that publishes open questions about modern life alongside its land and water work in Nepal. In both people and landscapes, systems pushed for maximum output without rest tend to wear down. ZenTrust's essays are reflection, not advice. They invite readers to notice the costs of constant hustle and to imagine ways of working that sustain both people and places.",
        },
        {
          title: "What does hustle culture make easy to forget?",
          answer:
            "It makes it easy to forget that a life is more than its output.",
          metaphor:
            "Imagine a harvest so focused on quantity that no one tastes the fruit. The baskets are full. The meaning is missing.",
          children:
            "Constant striving can make it hard to notice what is already present: relationships, small joys, the places we live. Work matters, and ambition can be meaningful. But a life measured only in productivity leaves little room for rest, play or reflection. Remembering that worth does not depend on output can open space for a fuller and more sustainable way of living.",
        },
      ]}
      ending={[
        "Effort matters, and so does rest.",
        "A race with no finish line is not a race worth running forever.",
        "Worth was never measured only in hours.",
      ]}
    />
  );
}
