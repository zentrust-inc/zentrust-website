// app/questions/what-is-wabi-sabi/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is wabi-sabi, and why does it find beauty in imperfection?",
  description:
    "Wabi-sabi is a Japanese way of seeing beauty in things that are imperfect, impermanent and incomplete. A calm look at what it means and how it can be lived.",
  other: {
    category: "Meaning & Mind",
    subcategory: "wabi-sabi",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is wabi-sabi, and why does it find beauty in imperfection?"}
      shortAnswer={"Wabi-sabi is a Japanese way of seeing that finds beauty in things that are imperfect, impermanent and incomplete, such as a cracked bowl, a weathered fence or a fading leaf. It grew out of Zen Buddhist ideas and the tea ceremony, and it invites a quieter, more accepting relationship with age, wear and change."}
      heroMetaphor={"Imagine a wooden step worn smooth in the middle by years of feet. No one designed that curve. It holds the shape of every person who has passed."}
      sections={[
        {
          title: "What does wabi-sabi actually mean?",
          answer:
            "Wabi-sabi joins two Japanese words: wabi, a sense of quiet, rustic simplicity, and sabi, the beauty that comes with age and wear.",
          metaphor:
            "Imagine a small hut at the edge of a forest. Inside there is one bowl and one candle. Nothing is missing.",
          children:
            "Neither word translates neatly into English. Wabi once carried a sense of loneliness, of living apart from society, and later came to suggest the contentment of having little. Sabi is linked to the passing of time: rust, moss, faded color, the softness of old wood. Together they describe an aesthetic and an attitude rather than a rule. It is often said that wabi-sabi is felt more than defined, which is part of why it is hard to pin down.",
        },
        {
          title: "Where does wabi-sabi come from?",
          answer:
            "Wabi-sabi grew from Zen Buddhism and the Japanese tea ceremony, which favored humble, handmade objects over polished luxury.",
          metaphor:
            "Imagine a tea room with a low doorway. Everyone must bow to enter. Inside, rank matters less than the cup in your hands.",
          children:
            "Buddhist teaching emphasizes impermanence: everything changes, nothing lasts. Wabi-sabi turns that idea into something you can see and touch. In the tea ceremony, tea masters came to prefer simple, uneven bowls made by local potters over flawless imported ware. Rooms were small, plain and close to the garden. The aim was not poverty for its own sake but attention: slowing down enough to notice the moment, the season and the people sharing it.",
        },
        {
          title: "What are the main ideas behind wabi-sabi?",
          answer:
            "In modern writing, wabi-sabi is often summed up in three ideas: nothing lasts, nothing is finished and nothing is perfect.",
          metaphor:
            "Imagine a sandcastle at the edge of the tide. You build it knowing the sea will come. The building is still worth doing.",
          children:
            "These three ideas are less a doctrine than a way of looking. Nothing lasts reminds us that every object, season and life is passing. Nothing is finished suggests that growth and change continue, even in things we think are complete. Nothing is perfect invites us to stop measuring against an ideal that never existed. Held together, they can make ordinary things feel more precious, precisely because they are fragile and will not stay the same.",
        },
        {
          title: "How is wabi-sabi different from kintsugi or minimalism?",
          answer:
            "Kintsugi and minimalism share some of its spirit, but wabi-sabi is broader and warmer: it is about accepting age and imperfection, not about repair or emptiness alone.",
          metaphor:
            "Imagine three ways to treat an old chair. You can throw it out, restore it to new or keep sitting in it. Wabi-sabi usually keeps sitting.",
          children:
            "Kintsugi is the practice of repairing broken pottery with lacquer mixed with gold or another metal, so the crack becomes part of the story. It is often given as an example of wabi-sabi thinking. Minimalism, as it is often practiced today, can aim for clean, perfect surfaces and fewer things. Wabi-sabi also values simplicity, but it welcomes texture, patina and signs of use. A minimalist room can feel new; a wabi-sabi room usually feels lived in.",
        },
        {
          title: "Why does wabi-sabi appeal to people today?",
          answer:
            "In a world of constant upgrades and polished images, wabi-sabi offers permission to let things, and people, be imperfect.",
          metaphor:
            "Imagine a photo with every wrinkle smoothed away. It looks flawless. It no longer looks like anyone you know.",
          children:
            "Much of modern life rewards the new, the fast and the flawless. Phones are replaced, homes are staged and faces are filtered. Against that, wabi-sabi can feel like relief. It suggests that worn things may carry more meaning than new ones, and that a life does not need to look finished to be good. For people tired of chasing an ideal, it offers a gentler standard: enough, and honest about time.",
        },
        {
          title: "Can wabi-sabi help with perfectionism?",
          answer:
            "Wabi-sabi is not a treatment, but its way of seeing can soften the harsh standards that perfectionism often sets.",
          metaphor:
            "Imagine a potter who throws away every bowl with a flaw. The shelf stays empty. The hands never learn.",
          children:
            "Perfectionism can make people delay, overwork or feel they are never good enough. Wabi-sabi offers a different frame: a chipped edge or an uneven line is not failure but evidence of a real thing made by a real person. Some people find it helpful to practice this with objects first, then with their own work and bodies. If perfectionism is causing real distress, talking to a doctor, counselor or someone trusted can help.",
        },
        {
          title: "Can wabi-sabi change how we treat things and places?",
          answer:
            "It can, by making repair, care and slow change feel worthwhile rather than embarrassing.",
          metaphor:
            "Imagine an old stone wall with moss in its cracks. One owner sees damage to replace. Another sees a wall that has settled into its place.",
          children:
            "A culture that prizes the new tends to throw things away at the first sign of wear. Wabi-sabi suggests another habit: mend, maintain and let objects and places age. The same attitude can apply to gardens, homes and landscapes, where slow growth and seasonal change are part of the beauty. It does not mean ignoring real damage that needs fixing. It means valuing care over replacement, and noticing what time has added, not only what it has taken.",
        },
        {
          title: "What does the rush for perfection make easy to forget?",
          answer:
            "It makes it easy to forget that wear, change and imperfection are signs of a life being lived, not things to hide.",
          metaphor:
            "Imagine a pair of boots shaped by years of walking. New boots would look better on a shelf. These ones know the way home.",
          children:
            "When everything around us is designed to look new, signs of age can feel like failure. A scratched table, a gray hair, a worn coat, an unfinished project. Wabi-sabi gently turns this around. Marks of time can be marks of care, use and memory. Noticing this does not mean giving up on mending or improving things. It means doing so with less fear, and with more tenderness toward what is passing, including ourselves.",
        },
      ]}
      ending={[
        "Nothing lasts, nothing is finished, nothing is perfect.",
        "Wear can be a record of care.",
        "Beauty often waits in what we would replace.",
      ]}
      nextStep={{
        heading: "What ZenTrust plans to do",
        text: "In Nepal, ZenTrust plans to help a hillside heal slowly rather than remake it overnight: first holding water in the land, then planting in layers with the local community forest group, and in time letting the forest lead. The program is still at the planning stage, and work on the hillside has not started.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
