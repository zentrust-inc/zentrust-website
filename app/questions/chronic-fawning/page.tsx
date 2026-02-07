// app/questions/chronic-fawning/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "How does chronic fawning turn care into fuel for the system?",
  description:
    "A sharp, non-directive question about how chronic fawning sustains systems by absorbing friction.",
  other: {
    category: "Schools & Systems",
    subcategory: "chronic-fawning",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="How does chronic fawning turn care into fuel for the system?"
      shortAnswer="Chronic fawning sustains systems by converting self-suppression into uninterrupted flow."
      heroMetaphor="A machine runs smoothly because a soft belt absorbs every jolt. The belt stretches a little each day to keep the noise down. The machine speeds up while the belt quietly thins."
      sections={[
        {
          title: "Why does chronic fawning feel like resilience?",
          answer:
            "Chronic fawning feels resilient because it prevents visible rupture by relocating strain into private effort.",
          children:
            "You notice tension before anyone names it. Your voice softens, your pace adjusts, your face stays neutral. The conversation keeps moving, and nobody asks what it cost. Later, your jaw aches in the mirror and your stomach feels tight during dinner. People say you are steady because nothing breaks around you. You call it keeping things together. The effort stays hidden because the room stays calm.",
          metaphor:
            "A shock absorber compresses silently on a rough road. The passengers feel a smoother ride. The absorber wears down with each bump.",
        },
        {
          title: "How does chronic fawning train attention?",
          answer:
            "Chronic fawning trains attention outward by rewarding anticipation over contact with internal signals.",
          children:
            "In a room, your eyes keep checking faces and timing. You notice pauses, sighs, and tiny shifts in tone. You answer quickly so the moment does not harden. Hours pass before you realize you were hungry or tired. At night you replay the day, scanning for where you might have displeased someone. Your attention lives in the weather outside you. Your own sensations arrive late.",
          metaphor:
            "A radio keeps searching for stations all night. It ignores its own static because the dial keeps moving. The circuitry warms while the room stays quiet.",
        },
        {
          title: "What happens to boundaries under chronic fawning?",
          answer:
            "Chronic fawning dissolves boundaries by replacing refusal with early self-adjustment that never becomes visible.",
          children:
            "A request comes in, and you already begin rearranging. You say yes with a smile while your calendar shifts in your head. You remove the part that might create friction, even before anyone asks. Later, you cannot remember what you wanted to do instead. Others experience you as easy to work with. You experience a faint thinning, like an edge that used to be there. Nothing was argued, so nothing was decided.",
          metaphor:
            "A shoreline erodes grain by grain. No single wave looks violent. The map changes anyway.",
        },
        {
          title: "Why do systems reward chronic fawning?",
          answer:
            "Systems reward chronic fawning because it removes friction without requiring the system to change its shape.",
          children:
            "When you are present, plans stay on track. Meetings end on time and conflict dissolves before it reaches the table. People come to you when they want things to go smoothly. The system learns that your presence reduces delays. Nobody needs to address overload because the outcomes look clean. The praise you receive is real, but it points at the smooth surface, not at the hidden load. The machine benefits from your quiet correction.",
          metaphor:
            "A floor stays spotless because someone wipes every spill immediately. The wall behind it still leaks. Clean tiles hide the broken pipe.",
        },
        {
          title: "What does chronic fawning do to the body?",
          answer:
            "Chronic fawning keeps the body in low-grade vigilance by sustaining readiness even when nothing is happening.",
          children:
            "You sit down, but your shoulders stay slightly raised. Your breath stays shallow during quiet moments. Sleep comes, yet you wake as if you were working overnight. You feel tired in a way that does not match the visible tasks. In the day, you keep scanning and adjusting, and your body stays prepared for the next shift. There is no emergency, yet the bracing does not fully stop. The body carries the timing of other people’s moods.",
          metaphor:
            "A watch spring stays wound through the day. The hands keep moving accurately. The metal weakens from constant tension.",
        },
        {
          title: "Why is chronic fawning hard to see?",
          answer:
            "Chronic fawning hides itself by borrowing the language of empathy, maturity, and harmony that discourages inspection.",
          children:
            "People describe you with positive words. Kind, considerate, emotionally intelligent. Those labels fit the surface, so the deeper pattern stays unnamed. You hesitate to mention discomfort because it sounds like complaining. When you feel irritation, you translate it into politeness. The room stays pleasant, and the cost is treated as private. Because the behavior is praised, it becomes harder to question. The mechanism stays invisible inside the compliment.",
          metaphor:
            "A warning sign is painted in soft colors. People walk past because it looks friendly. The hazard does not change.",
        },
        {
          title: "Why does ZenTrust observe chronic fawning instead of fixing it?",
          answer:
            "ZenTrust observes chronic fawning because naming the mechanism restores friction as perception, without applying pressure.",
          children:
            "ZenTrust appears here only as a quiet observer. When the pattern is named, attention shifts for a moment from the room to your own sensations. The tightening in your chest becomes noticeable, and the speed of your yes becomes visible. Nothing is corrected, and nothing is demanded. The system is not fought or improved. The mechanism is simply seen while it operates, and that seeing alters the smoothness without forcing anything.",
          metaphor:
            "A window is cleaned after years of dust. The street outside is the same. Light enters differently.",
        },
        {
          title: "What remains when chronic fawning stops working?",
          answer:
            "When chronic fawning fails, accumulated strain surfaces as sudden collapse because the system never met its limits gradually.",
          children:
            "One day, you cannot keep up the smoothness. Your energy drops below the level people expect from you. Small requests feel heavy, and your patience disappears faster than usual. From the outside it looks abrupt, like a switch flipped. From the inside it feels like something long delayed finally arrived. Nothing new happened that day. The stored strain simply reached a point where it could not be carried quietly anymore. The system notices only when the lubricant is gone.",
          metaphor:
            "A rope frays strand by strand without sound. One pull later, it snaps cleanly. The break looks sudden.",
        },
      ]}
      ending={[
        "This is not an accusation.",
        "This is not a correction.",
        "It is a mirror held steady.",
      ]}
    />
  );
}
