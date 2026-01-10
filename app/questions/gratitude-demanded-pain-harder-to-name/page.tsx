// app/questions/gratitude-demanded-pain-harder-to-name/page.tsx
import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does being told to feel grateful sometimes make real pain harder to name?",
  description:
    "A question-led exploration of how demanded gratitude can replace honesty with formatting, and why premature reframing can silence what hurts.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "gratitude-and-honesty",
  },
};

export default function GratitudeDemandedPainHarderToNamePage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why does being told to feel grateful sometimes make real pain harder to name?"
      shortAnswer="Because gratitude, when demanded too early or too often, can replace honesty with formatting."
      heroMetaphor="Imagine being handed a thank-you card while your foot is still being stepped on. The card is polite. The pressure does not stop."
      sections={[
        {
          title: "Why does gratitude feel different when it is suggested instead of felt?",
          answer:
            "Because suggested gratitude often arrives before clarity has had time to form.",
          metaphor:
            "Imagine being asked to smile for a photo while still catching your breath.",
          children:
            "There are moments when gratitude appears on its own. Something resolves. Something clicks. Relief arrives quietly. But when gratitude is offered as a response before confusion, hurt, or anger have been named, it feels hollow. Not because gratitude is wrong, but because it is premature. It replaces contact with completion. The feeling doesn’t land. It floats above what is actually happening.",
        },
        {
          title: "Why does forced gratitude make certain emotions feel unacceptable?",
          answer:
            "Because it subtly ranks emotions instead of allowing them.",
          metaphor:
            "Imagine a room where only one color is considered clean.",
          children:
            "When gratitude is treated as the preferred emotional state, other reactions begin to feel like failures. Anger feels excessive. Sadness feels weak. Confusion feels immature. People learn which feelings receive approval and which ones create discomfort. Over time, this teaches selection rather than awareness. Emotions are filtered, not felt. What remains is calm on the surface and tension underneath.",
        },
        {
          title: "What happens when pain is reframed before it is understood?",
          answer:
            "Meaning replaces contact.",
          metaphor:
            "Imagine putting a label on a box without opening it.",
          children:
            "Reframing can be useful after something has been processed. Before that, it skips steps. When pain is immediately turned into a lesson, the lived experience is bypassed. Questions about cause, responsibility, or fairness disappear. The story moves forward, but the body does not. This creates coherence without resolution. Things make sense, but they do not settle.",
        },
        {
          title: "How does gratitude become a way to manage discomfort rather than meet it?",
          answer:
            "By smoothing over what would otherwise disrupt the narrative.",
          metaphor:
            "Imagine turning down the volume instead of listening closely.",
          children:
            "Gratitude language can soften conversations quickly. It reduces tension. It signals acceptance. This makes it socially useful. But it also shortens inquiry. Instead of asking what is wrong, attention shifts to how well someone is coping. The focus moves from conditions to attitude. Discomfort fades from view, not because it is gone, but because it no longer has a place to speak.",
        },
        {
          title: "Why does gratitude often get praised where questioning does not?",
          answer:
            "Because gratitude maintains harmony without requiring change.",
          metaphor:
            "Imagine a bridge that looks stable as long as no one jumps.",
          children:
            "Gratitude reassures systems. It signals that things are working well enough. Questioning introduces uncertainty. It slows momentum. In environments that value smooth functioning, gratitude feels safe. It confirms that people are adapting. Over time, this creates a subtle pressure. Appreciation is rewarded. Friction is discouraged. The message is not spoken, but it is learned.",
        },
        {
          title: "What is lost when gratitude replaces naming what hurts?",
          answer:
            "Precision.",
          metaphor:
            "Imagine treating every injury with the same bandage.",
          children:
            "Pain carries information. It points to limits, violations, or needs. When it is quickly reframed, that information is blurred. Everything becomes personal growth. Nothing is allowed to be simply wrong. Without naming what hurts, responses stay general. Healing becomes abstract. The original experience remains unresolved, even as the language around it sounds evolved.",
        },
        {
          title: "Why does ZenTrust ask what gratitude might be covering?",
          answer:
            "Because understanding begins where honesty is allowed to stay incomplete.",
          metaphor:
            "Imagine stopping mid-sentence and letting the silence speak.",
          children:
            "ZenTrust does not reject gratitude. It questions timing and pressure. When gratitude appears naturally, it settles the body. When it is required, it often conceals something unfinished. This question is not about choosing better emotions. It is about noticing when an emotional script replaces contact with what is actually happening. Meaning cannot arrive before truth.",
        },
        {
          title: "What returns when gratitude is no longer required on demand?",
          answer:
            "The ability to trust your own reactions.",
          metaphor:
            "Imagine hearing your own voice clearly after a long echo.",
          children:
            "When no feeling is mandatory, awareness widens. Anger can inform. Sadness can move. Gratitude can arise without pressure. Nothing has to be resolved immediately. This does not create chaos. It creates accuracy. The system inside you begins responding instead of performing. From there, any feeling that appears has weight because it was not forced.",
        },
      ]}
      ending={[
        "Some emotions arrive quietly.",
        "Others need space before they can speak.",
        "Nothing real asks to be rushed.",
      ]}
    />
  );
}
