// app/questions/cancer/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why can fighting cancer save a life, yet still harm the person?",
  description:
    "A sharp examination of how disease control and organismal healing can move in opposite directions while being labeled the same.",
  other: {
    category: "Health & Suffering",
    subcategory: "control-vs-healing",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why can fighting cancer save a life, yet still harm the person?"
      shortAnswer="Because eliminating diseased cells can control a visible outcome, while healing requires restoring the conditions that allow the whole organism to remain coherent."
      heroMetaphor="A house fire is extinguished by flooding the rooms with water. The flames are gone. The structure remains soaked, unstable, and uninhabitable."
      sections={[
        {
          title: "Why does killing cancer cells not feel like healing?",
          answer:
            "Because cell destruction removes a symptom, while healing requires restoring regulation across the entire organism.",
          children:
            "A body functions through coordination among energy use, repair, immunity, and signaling. When cells lose cooperation, disease becomes visible. Removing those cells can reduce the visible problem. Yet the conditions that forced cells into survival behavior may remain unchanged. Control can improve without restoring internal balance. The organism survives while coherence remains strained.",
          metaphor:
            "Weeds are pulled from soil that is still dry and compacted.",
        },
        {
          title: "Why can people endure aggressive treatment at all?",
          answer:
            "Because meaning, trust, and perceived safety can temporarily stabilize the organism under strain.",
          children:
            "When a person believes they are being helped, the nervous system often reduces threat responses. This can support endurance, coordination, and pain tolerance even during damaging interventions. Survival is supported not only by biology, but by context. The body holds together because something meaningful is at stake. Endurance does not equal restoration.",
          metaphor:
            "A bridge holds during an overload because extra supports are added.",
        },
        {
          title: "What does cancer represent at the cellular level?",
          answer:
            "A survival response that emerges when cooperative conditions collapse.",
          children:
            "Cells normally coordinate growth, repair, and death. Under prolonged stress, limited resources, or signaling failure, cooperation breaks down. Cells revert to older survival programs focused on persistence rather than integration. This shift is not intention or malice. It is a response to constraint. Destroying the response does not explain why it arose.",
          metaphor:
            "A cornered animal becomes defensive when escape disappears.",
        },
        {
          title: "Why can treatment oppose healing while still saving life?",
          answer:
            "Because force can suppress disease faster than the organism can restore coherence.",
          children:
            "Interventions that overwhelm regulation can control disease while exhausting reserves. The person supplies stability through resolve, trust, and endurance. Disease metrics improve while the organism absorbs damage. Control and healing move in opposite directions when restoration is not addressed.",
          metaphor:
            "A machine is forced to keep running by external power.",
        },
        {
          title: "Why does this contradiction remain hard to see?",
          answer:
            "Because medicine measures visible outcomes more easily than internal stability.",
          children:
            "Scans, markers, and remission are observable. Fatigue, fragmentation, and loss of coherence are harder to quantify. When survival metrics stand in for healing, escalation replaces understanding. Improvement appears clear while harm remains diffuse.",
          metaphor:
            "A dashboard shows speed but not engine wear.",
        },
        {
          title: "Why does the language of battle persist?",
          answer:
            "Because conflict metaphors simplify complexity and justify force.",
          children:
            "War language frames disease as an enemy and intervention as victory. This creates clarity and momentum. It also obscures environmental and systemic factors that shaped the disease. The metaphor sustains action, not understanding.",
          metaphor:
            "A spotlight reveals one actor and darkens the stage.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice here?",
          answer:
            "ZenTrust notices the difference between suppressing a response and restoring conditions.",
          children:
            "ZenTrust does not oppose treatment or promote alternatives. It observes where control is mistaken for healing. By holding attention on conditions rather than enemies, the organism becomes visible again. ZenTrust remains an observing presence only.",
          metaphor:
            "A mirror reflects the whole room, not just the fire.",
        },
        {
          title: "What remains when this distinction is seen clearly?",
          answer:
            "A clearer separation between survival and restoration.",
          children:
            "Seeing the distinction does not change outcomes by itself. It removes confusion. Survival can be honored without pretending it is healing. What remains is accuracy about what was controlled and what was not restored.",
          metaphor:
            "Smoke clears while the walls still need drying.",
        },
      ]}
      ending={[
        "Control can save life without restoring coherence.",
        "Healing concerns conditions, not enemies.",
        "Survival and restoration are not the same outcome.",
      ]}
    />
  );
}
