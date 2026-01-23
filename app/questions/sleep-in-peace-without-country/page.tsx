// app/questions/sleep-safety-stateless/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "If no country claimed you, where would sleep safety come from?",
  description:
    "A sharp examination of how sleep safety emerges from predictable land and shelter rather than identity, permission, or symbolic protection.",
  other: {
    category: "Nature & Land",
    subcategory: "sleep-safety",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="If no country claimed you, where would sleep safety come from?"
      shortAnswer="Sleep safety would come from a place where the night behaves predictably, boundaries are trusted, and the body does not need to remain alert."
      heroMetaphor="A person arrives after dark with nothing to explain and nowhere to check in. Street sounds keep cutting through the air, and the body stays tight. Then one small place quiets the noise, and the shoulders drop without instruction."
      sections={[
        {
          title: "Why does sleep safety become urgent when identity disappears?",
          answer:
            "Because sleep safety is the first requirement that cannot be symbolically substituted.",
          children:
            "During the day, uncertainty can be managed through movement, planning, or distraction. At night, the body must release control in order to sleep. Without sleep safety, rest fragments and vigilance continues. This makes loss of protection feel physical rather than abstract. Sleep safety exposes whether a place can actually hold a body when awareness has to stand down.",
          metaphor:
            "A light is switched off while a door keeps rattling. The room looks dark and quiet. The body stays awake.",
        },
        {
          title: "Why does sleep safety not come from having a bed?",
          answer:
            "Because sleep safety depends on threat absence, not comfort.",
          children:
            "A soft surface can relax muscles, but it does not silence alert systems. Unfamiliar sounds, uncertain access, or thin boundaries keep scanning active. Sleep safety requires containment and predictability more than softness. This is why luxury can still feel unsafe and simple shelter can feel deeply restful. The body decides based on cues of protection, not on appearances.",
          metaphor:
            "A thick blanket lies on a bed near a busy corridor. Footsteps pass all night. Warmth does not bring sleep.",
        },
        {
          title: "What cues does the body use to establish sleep safety?",
          answer:
            "The body looks for consistent boundaries, familiar sounds, and reliable morning return.",
          children:
            "Sleep safety forms when nights repeat without escalation. Doors stay closed, sounds settle, and dawn arrives as expected. Over time, the nervous system learns that nothing needs response. This learning is not intellectual. It is built through repetition. Sleep deepens because the environment proves itself night after night.",
          metaphor:
            "A bird returns to the same ledge at dusk. No decision is made. The ledge does not surprise it.",
        },
        {
          title: "Why do systems replace land in defining sleep safety?",
          answer:
            "Because systems offer portable permission instead of requiring relationship with place.",
          children:
            "Documents and status promise safety through recognition. They reduce friction but bypass direct familiarity with land. Over time, people rely on permission rather than environment to rest. When permission disappears, the absence of a trusted place becomes clear. The question shifts attention back to where the body itself can stand down.",
          metaphor:
            "An umbrella opens only when a badge is scanned. It looks official. Rain still reaches the ground.",
        },
        {
          title: "How does land teach sleep safety without instruction?",
          answer:
            "Through repeated nights where nothing goes wrong.",
          children:
            "Land becomes associated with sleep safety when interruption does not occur. Temperature, airflow, and sound patterns remain stable. The body stops negotiating with the night. Sleep arrives faster and lasts longer. This learning does not require belief or explanation. It happens through continuity alone.",
          metaphor:
            "Morning light enters through the same window each day. The eyes stop checking the time. The body expects rest there.",
        },
        {
          title: "Why does losing sleep safety feel more frightening than losing status?",
          answer:
            "Because sleep safety determines whether recovery is possible.",
          children:
            "Status loss threatens identity, but sleep loss destabilizes regulation. Without rest, stress accumulates and perception distorts. Fear grows without a clear object. This makes uncertainty feel overwhelming. The fear is not about recognition, but about whether the body will ever restore itself enough to face the next day.",
          metaphor:
            "A charger sparks on and off through the night. The battery never fills. Morning arrives anyway.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about sleep safety?",
          answer:
            "ZenTrust notices how rarely sleep safety is named as a condition of belonging.",
          children:
            "ZenTrust does not ask where someone is legally allowed to stay. It observes where the body can rest without guarding itself. When people answer quickly, they name countries or identities. When they slow down, they describe rooms, climates, sounds, and rhythms. ZenTrust holds attention on that difference without correcting it.",
          metaphor:
            "One question asks for an address. Another asks where sleep comes easily. Only one is usually practiced.",
        },
        {
          title: "What remains if sleep safety comes from a place, not a nation?",
          answer:
            "Sleep safety becomes something the body can recognize directly.",
          children:
            "The answer may be modest: a quiet room, a hillside, a familiar climate, a courtyard. It may not match official stories of home. That mismatch is not failure. It reveals how sleep safety operates at human scale. The body identifies what allows rest even when language hesitates.",
          metaphor:
            "Sun warms one step in winter. Feet stop there without planning. The body decides.",
        },
      ]}
      ending={[
        "Sleep is where safety becomes physical.",
        "Land can hold a body without permission.",
        "Home may be where vigilance finally stops.",
      ]}
    />
  );
}
