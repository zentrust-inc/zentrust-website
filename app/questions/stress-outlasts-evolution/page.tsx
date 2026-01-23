// app/questions/stress-outlasts-evolution/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern stress last longer than nature intended?",
  description:
    "A sharp examination of how stress systems built for brief danger are held open by modern conditions that rarely resolve.",
  other: {
    category: "Health & Suffering",
    subcategory: "chronic-stress-duration",
  },
};

export default function StressOutlastsEvolutionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does modern stress last longer than nature intended?"
      shortAnswer="Because stress systems evolved for short, resolving threats, while modern stress keeps situations open-ended, preventing the body from standing down."
      heroMetaphor="A person holds their breath to cross a short pool. Halfway through the day, no one has told them they can exhale. They are still upright, but the strain keeps growing."
      sections={[
        {
          title: "Why does stress feel present even when nothing is happening?",
          answer:
            "Stress remains active when situations never clearly end.",
          children:
            "The body looks for completion signals. In modern life, evaluation, uncertainty, and dependency often have no finish line. Even while sitting still, the nervous system stays alert. There is no moment where readiness is dismissed. Stress becomes background noise rather than a spike. Energy is consumed without an event to justify it.",
          metaphor:
            "A doorbell rings once and never stops humming. The house looks quiet. The body waits anyway.",
        },
        {
          title: "Why does the usual explanation for stress miss the core issue?",
          answer:
            "Because stress is framed as a mindset problem instead of a duration problem.",
          children:
            "Advice often targets attitude, resilience, or positivity. These approaches assume stress is brief and internal. The body, however, responds primarily to how long stress signals last. Continuous exposure overwhelms even strong coping. When stress does not end, the problem is not outlook. It is prolonged activation.",
          metaphor:
            "A phone battery drains while apps run in the background. The screen is dimmed. The drain continues.",
        },
        {
          title: "What were stress systems originally built to do?",
          answer:
            "Stress systems mobilize energy for short bursts of action.",
          children:
            "Stress chemistry narrows focus, releases glucose, and sharpens reaction. These changes are designed to peak and resolve quickly. In natural settings, threats usually end within minutes. Afterward, recovery restores balance. The system expects an off switch. When that switch never comes, the same chemistry becomes harmful.",
          metaphor:
            "An emergency light is turned on during a power cut. Morning arrives. The light stays on.",
        },
        {
          title: "How does long-lasting stress change bodily priorities?",
          answer:
            "Ongoing stress trades repair for readiness.",
          children:
            "When stress remains active, the body delays maintenance. Digestion, immune balance, and deep sleep receive less support. Small damage accumulates because restoration keeps being postponed. People can appear functional while feeling depleted. The cost shows up slowly, often disconnected from the original pressure.",
          metaphor:
            "A shop stays open every night. Shelves thin out. No one has time to restock.",
        },
        {
          title: "What does chronic stress look like inside the body?",
          answer:
            "Chronic stress shortens recovery and strains metabolism.",
          children:
            "Frequent stress hormone release keeps glucose circulating. Insulin remains active longer than intended. Muscles and nerves recover slowly. Inflammation can rise because repair work is delayed. These effects share one cause: stress stays on longer than the body was built to tolerate.",
          metaphor:
            "Groceries are carried with arms already tired. Grip tightens. Pain appears first.",
        },
        {
          title: "Why does modern stress keep repeating without resolution?",
          answer:
            "Because modern stressors are continuous conditions rather than events.",
          children:
            "Financial pressure, evaluation, surveillance, and dependence do not end cleanly. They persist across days and years. Participation often requires staying reachable and composed. The body absorbs the cost privately, so the system does not register strain. Stress repetition is often the price of remaining included.",
          metaphor:
            "A faucet never fully closes. Drips continue. Silence is forgotten.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about stress duration?",
          answer:
            "ZenTrust notices how stress is carried without a clear endpoint.",
          children:
            "ZenTrust does not instruct coping or resistance. It observes how stress persists when completion is removed. When the duration problem is named, confusion softens. Stress is no longer misread as personal weakness. Attention shifts from self-correction to conditions that keep activation open.",
          metaphor:
            "A test booklet has no final page. Pages turn. The stack remains.",
        },
        {
          title: "What changes when stress duration is seen clearly?",
          answer:
            "Stress eases when its timeline is recognized accurately.",
          children:
            "When stress is understood as prolonged exposure, exhaustion makes sense. The question changes from why you cannot handle stress to what stress you are carrying for too long. Nothing needs immediate fixing. The body often loosens when stress is no longer framed as a personal failure.",
          metaphor:
            "A clenched jaw is noticed. No command is given. The release follows seeing.",
        },
      ]}
      ending={[
        "Stress evolved for cycles, not permanence.",
        "Duration matters even when intensity is low.",
        "Seeing timelines restores accuracy.",
      ]}
    />
  );
}
