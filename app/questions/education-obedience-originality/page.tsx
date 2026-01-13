// app/questions/education-obedience-originality/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern education reward obedience over originality?",
  description:
    "A question-led exploration of how obedience becomes safer than curiosity inside modern education systems.",
  other: {
    category: "Schools & Systems",
    subcategory: "education-obedience",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does modern education reward obedience over originality?"
      shortAnswer="Because obedience reduces uncertainty for large systems, while originality and curiosity introduce variation the system is not designed to hold."
      heroMetaphor="Imagine a classroom where every chair is bolted to the floor in straight rows. One chair is loose and shifts slightly when someone sits differently. The loose chair receives more attention than the quiet rows, even though nothing is broken."
      sections={[
        {
          title: "Why does obedience look like success in modern education?",
          answer:
            "Because obedience creates visible order, and order is easier to manage than curiosity.",
          metaphor:
            "Imagine a traffic light stuck permanently on green. Cars move smoothly without interruption. No one notices where they are going anymore.",
          children:
            "In many classrooms, success is associated with sitting still, following instructions, and producing expected answers. These behaviors make the day run smoothly and predictably. Over time, students learn that obedience brings approval and safety. Curiosity, which often slows things down or asks sideways questions, begins to feel like a disruption rather than a strength.",
        },
        {
          title: "Why does the standard explanation for obedience fall short?",
          answer:
            "Because standards explain consistency, but not why curiosity is treated as a problem.",
          metaphor:
            "Imagine pressing a flat board over soft soil. The surface becomes even and measurable. The small shapes underneath disappear.",
          children:
            "Standards are meant to create fairness, but they also narrow what is acceptable. Curiosity rarely moves at the same pace or in the same direction for everyone. When learning must fit a fixed schedule, obedience aligns more easily than exploration. The system begins rewarding what conforms rather than what discovers.",
        },
        {
          title: "What is obedience actually protecting in modern education?",
          answer:
            "Obedience protects the system from uncertainty and loss of control.",
          metaphor:
            "Imagine stacking identical boxes in a warehouse. Everything lines up cleanly and efficiently. A box of a different shape slows the entire operation.",
          children:
            "Modern education manages large numbers of children at once. Obedience keeps behavior, timing, and outcomes predictable. Curiosity introduces unknown paths, questions without quick answers, and uneven progress. From the system’s perspective, obedience is not morally superior. It is simply easier to manage at scale.",
        },
        {
          title: "How does obedience change a child’s relationship with curiosity?",
          answer:
            "Obedience teaches children to treat curiosity as a liability rather than a guide.",
          metaphor:
            "Imagine being told to stay within painted lines on the ground. After years, stepping outside the lines feels uncomfortable. Even when no one is watching, you hesitate.",
          children:
            "When curiosity leads to correction or delay, children learn to suppress it. They begin checking what is expected before noticing what they wonder. Over time, curiosity becomes something to control or hide. Obedience quietly replaces exploration as the safer way to move through learning.",
        },
        {
          title: "Why does obedience reward mediocrity without intending to?",
          answer:
            "Because obedience minimizes variation, and mediocrity is the safest average outcome.",
          metaphor:
            "Imagine turning the volume knob until all sounds blend into the same level. Nothing stands out. The room becomes quieter but also flatter.",
          children:
            "Original thinking introduces difference, and difference creates risk for uniform systems. Obedience smooths those differences out. The result is not intentional mediocrity, but compressed expression. Excellence becomes harder to recognize because it does not fit the narrow range the system expects.",
        },
        {
          title: "Why does the obedience pattern persist even when it is noticed?",
          answer:
            "Because obedience keeps the system stable, even if it limits growth.",
          metaphor:
            "Imagine a dam holding back a rising river. Small cracks appear, but releasing pressure feels dangerous. The structure remains closed.",
          children:
            "Teachers and administrators often see the cost of obedience clearly. Yet they work within constraints shaped by testing, funding, and time. Obedience prevents chaos and overload. Changing this would require tolerating uncertainty and uneven outcomes, which feels risky inside tightly managed systems.",
        },
        {
          title: "ZenTrust question: What does ZenTrust notice about obedience here?",
          answer:
            "ZenTrust notices how obedience quietly becomes the price of belonging in modern education.",
          metaphor:
            "Imagine carrying a badge that allows entry into a building. The badge works only if you follow certain routes. You stop noticing the building and focus on keeping the badge valid.",
          children:
            "ZenTrust does not oppose education. It observes how obedience becomes invisible through repetition. When curiosity repeatedly meets friction, obedience feels natural rather than imposed. ZenTrust simply holds attention on that condition without asking for rebellion or compliance.",
        },
        {
          title: "What becomes visible when obedience is no longer confused with learning?",
          answer:
            "A quieter recognition that curiosity was never the problem.",
          metaphor:
            "Imagine unbolting the chairs from the classroom floor. Some remain in rows. Others turn slightly. The room feels unfamiliar, but nothing collapses.",
          children:
            "When obedience is seen clearly, blame often dissolves. Parents may understand why raising curious children feels harder. Students may recognize why their questions faded. What remains is not a solution, but space to see that convincing a child their curiosity is a problem is the most damaging lesson a system can teach.",
        },
      ]}
      ending={[
        "Nothing here asks you to reject education.",
        "Nothing here asks you to fix obedience.",
        "It only asks what became hidden when curiosity was treated as a problem.",
      ]}
    />
  );
}
