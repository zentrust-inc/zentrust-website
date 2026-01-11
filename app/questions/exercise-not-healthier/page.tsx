import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does regular exercise still not make us healthier?",
  description:
    "A question about why modern exercise can fail to reduce disease and suffering.",
  other: {
    category: "Health & Suffering",
    subcategory: "exercise-stress-mismatch",
  },
};

export default function ExerciseNotHealthierPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does regular exercise still not make us healthier?"
      shortAnswer="Because exercise is often asked to solve chronic stress that never ends."
      heroMetaphor="Imagine revving a car in park every day. The engine gets louder, but the car goes nowhere. After a while, the smell of heat becomes familiar."
      sections={[
        {
          title: "Why does this feel confusing in real life?",
          answer:
            "Because people can work hard at exercise and still feel unwell.",
          metaphor:
            "Imagine watering a plant on schedule. The leaves still droop by afternoon. You keep checking the soil anyway.",
          children:
            "Many people follow exercise routines faithfully. They track steps, join gyms, and stay consistent for months. Yet fatigue, pain, poor sleep, or metabolic problems stay. The confusion comes from doing what is praised while suffering continues. When the effort is real but relief is not, the promise needs a deeper explanation than motivation or discipline.",
        },
        {
          title: "Why does the obvious explanation fall short?",
          answer:
            "Because exercise is treated as a universal solution, not a context-dependent tool.",
          metaphor:
            "Imagine using the same key for every lock. Sometimes it turns a little. Most doors stay closed.",
          children:
            "The standard story says more exercise should reliably produce better health. That story ignores timing, stress state, and recovery. It assumes the body is starting from neutral and simply needs activity. For many people, the body is already running hot from ongoing pressure. In that situation, adding more demand can look like progress while quietly increasing strain.",
        },
        {
          title: "What is actually doing the work under stress?",
          answer:
            "The fight-flight system mobilizes fuel for short, intense action, not long effort.",
          metaphor:
            "Imagine a smoke alarm built to blare for a brief emergency. Now imagine it chirping all day. You stop noticing the sound, but your shoulders never drop.",
          children:
            "Fight-flight evolved for short threats and fast bursts of action. The body releases glucose, raises heart rate, and sharpens attention. That mode is meant to peak and then shut off. In most natural conditions, this cycle lasted minutes, often under about thirty minutes, followed by recovery. When people live in prolonged stress, the same system stays partially on, even before exercise begins.",
        },
        {
          title: "How does this play out over time?",
          answer:
            "Long sessions can extend activation without delivering the recovery the system expects.",
          metaphor:
            "Imagine running a washing machine on a long cycle without ever letting it finish. The water keeps sloshing. The lid never unlocks.",
          children:
            "When stress is already present, long-duration exercise can keep cortisol and adrenaline elevated. The body may complete the workout, but the nervous system does not fully stand down afterward. Short, high-intensity bursts can match what fight-flight evolved to discharge, often within minutes rather than hours. Long sessions can feel virtuous while leaving the body in an unfinished state. Over time, that unfinished state becomes the baseline.",
        },
        {
          title: "What does this look like inside the body?",
          answer:
            "Fuel can be released faster than it is cleared, and the system adapts by protecting itself.",
          metaphor:
            "Imagine boxes arriving at your door every day. You do not have time to unpack them. Soon you start stacking them in the hallway.",
          children:
            "Chronic stress tells the liver to release glucose even without eating. If movement does not fully discharge the signal, glucose and insulin remain elevated more often. Cells respond by becoming less responsive to insulin as a form of protection. This can look like insulin resistance even in people who exercise regularly. The body is not refusing effort. It is managing overflow from repeated activation.",
        },
        {
          title: "Why does the pattern persist even with good intentions?",
          answer:
            "Because the dominant narrative rewards visible effort and ignores invisible recovery.",
          metaphor:
            "Imagine being praised for staying late while no one counts the hours you lost sleeping. You look reliable from the outside. You feel thinner from the inside.",
          children:
            "Modern systems can reward intensity, consistency, and endurance. Recovery is quiet, private, and hard to measure. People learn to add effort when they feel worse, because that is the recognized currency. The body can endure for a while, so the mismatch stays hidden. When symptoms eventually appear, they are treated as personal failure rather than a predictable consequence of prolonged activation.",
        },
        {
          title: "What question does ZenTrust ask here?",
          answer:
            "What problem is exercise being asked to cover up?",
          metaphor:
            "Imagine using air freshener in a room where smoke keeps seeping in. The scent changes for a moment. The source stays active.",
          children:
            "This question does not attack exercise. It asks what role exercise has been assigned in a life that never fully powers down. When exercise is expected to fix chronic threat, social pressure, and constant evaluation, it cannot succeed. Seeing that removes blame without demanding an immediate solution. It makes the assignment visible.",
        },
        {
          title: "Return to the reader: what becomes possible once this is seen?",
          answer:
            "The body can stop being treated as the problem that must be pushed harder.",
          metaphor:
            "Imagine setting a heavy bag down without announcing it. Your hand keeps the imprint for a while. The floor does not argue.",
          children:
            "Once the mismatch is recognized, effort stops automatically escalating. The body no longer has to prove itself through constant strain. Short bursts can be understood differently from long endurance, especially in a stressed system. Recovery can become real again, not symbolic. Health becomes less about performing effort and more about ending unfinished cycles.",
        },
      ]}
      ending={[
        "A tool can be burdened with the wrong job.",
        "More effort can hide a deeper mismatch.",
        "Seeing the mismatch reduces needless strain.",
      ]}
    />
  );
}
