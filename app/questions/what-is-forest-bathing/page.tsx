// app/questions/what-is-forest-bathing/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is forest bathing, and why do people find it calming?",
  description:
    "Forest bathing is slow, mindful time among trees. A calm look at where the practice comes from, how it is done, and why it may help.",
  other: {
    category: "Nature & Belonging",
    subcategory: "forest-bathing",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Nature & Belonging"}
      question={"What is forest bathing, and why do people find it calming?"}
      shortAnswer={"Forest bathing means spending slow, unhurried time in a forest and paying attention through your senses, rather than walking for exercise or to reach a destination. The idea comes from the Japanese term shinrin-yoku. Many people find it calming, though it may support wellbeing and is not a treatment."}
      heroMetaphor={"Imagine stepping into a warm bath after a long day. You do not swim laps or try to get anywhere. You simply let the water hold you for a while."}
      sections={[
        {
          title: "Where does the term come from?",
          answer:
            "Forest bathing is a translation of shinrin-yoku, a Japanese phrase meaning roughly \"taking in the forest atmosphere.\"",
          metaphor:
            "Imagine a word that names something people already did. Grandparents walking slowly under trees knew it. The word just gave it a doorway.",
          children:
            "The phrase was promoted in Japan as a way to encourage people to spend restful time in forests, at a time when city life was growing more intense. It has since spread to many countries, often under the English name forest bathing. The idea itself is old. Many cultures have traditions of walking, praying or resting among trees. What the term added was a simple invitation: go to the forest not to do something, but to be there.",
        },
        {
          title: "What do you actually do when forest bathing?",
          answer:
            "You walk slowly, pause often, and notice what you can see, hear, smell and feel, without a goal or a pace to keep.",
          metaphor:
            "Imagine reading a poem instead of skimming a report. You stop on a line. You let it land before moving on.",
          children:
            "A typical session might last an hour or a few, covering very little distance. People may stop to watch light move through leaves, listen to wind or water, touch bark or moss, or sit quietly for a while. Phones are usually put away. Some guides offer gentle prompts, such as noticing what is moving around you. There is no right way to do it. The point is attention, not achievement, and slowing down enough to arrive.",
        },
        {
          title: "How is forest bathing different from hiking?",
          answer:
            "Hiking usually has a route, a distance or a summit, while forest bathing has no destination at all.",
          metaphor:
            "Imagine two people at the same lake. One swims across it. The other floats and watches the sky.",
          children:
            "Hiking is valuable in its own right, with exercise, views and a sense of accomplishment. But it often keeps attention on the trail ahead, the time, or the next landmark. Forest bathing turns that around. Movement is slow, and the forest itself becomes the focus rather than the backdrop. Some people combine the two, stopping during a hike to sit and listen. The difference is less about where you are and more about how you are there.",
        },
        {
          title: "Why might time among trees feel calming?",
          answer:
            "Forests offer gentle, shifting things to notice, and these can hold attention softly and give a busy mind room to rest.",
          metaphor:
            "Imagine a room where no one is asking you for anything. The noise of requests fades. You hear yourself breathe.",
          children:
            "Daily life often demands sharp, directed focus: screens, deadlines, traffic, notifications. Natural settings tend to offer a different kind of attention, drawn in without effort by leaves, water, birdsong and changing light. Some psychologists describe this as restorative, a chance for tired attention to recover. Forests can also feel quieter, cooler and slower than streets. For many people, simply being somewhere that does not need managing is a relief. Some people feel their body settle before their mind does.",
        },
        {
          title: "What does research say about forest bathing?",
          answer:
            "Studies suggest time in forests may help lower stress and lift mood, though the evidence is still developing and should not be overstated.",
          metaphor:
            "Imagine a path that many people say leads somewhere good. The first stretch is well mapped. Further on, the map is still being drawn.",
          children:
            "Researchers in several countries have looked at how time in forests relates to stress, mood, heart rate and blood pressure. Many studies report calming effects, but many are small or short, and it can be hard to separate the forest from simply taking a break. Some researchers have also studied substances that trees release into the air. Forest bathing is best seen as one supportive habit, not a treatment, and not a substitute for medical care.",
        },
        {
          title: "Do you need a guide or a wild forest?",
          answer:
            "No, a guide can help some people slow down, but a park, a tree-lined path or a small woodland can be enough.",
          metaphor:
            "Imagine learning to sit with a friend in silence. Some people need an introduction. Others just need permission.",
          children:
            "Guided forest bathing walks are offered in many places, and a good guide can make it easier to let go of habits like rushing or checking a phone. But the practice does not require special training, gear or a remote wilderness. A city park, a riverside path or a few trees in a quiet corner can invite the same slowing down. What matters most is unhurried time, some green around you, and a willingness to notice.",
        },
        {
          title: "What should you keep in mind before you go?",
          answer:
            "Basic outdoor care still matters: know where you are, respect local rules, and listen to your body.",
          metaphor:
            "Imagine resting in a friend's home. You relax fully. You still remember it is not only yours.",
          children:
            "Slowing down can make it easy to forget practical things. Let someone know where you are going, check the weather, and stay on paths where that is asked. Ticks, allergies, uneven ground and local wildlife vary by place, so local advice helps. Some forests are protected or privately owned, with their own rules. And if you are going to the woods to escape heavy feelings that do not lift, talking to a doctor, counselor or someone trusted can help too.",
        },
        {
          title: "What does forest bathing make easy to forget?",
          answer:
            "It can make it easy to forget that forests are not just a backdrop for our calm but living systems that need care in return.",
          metaphor:
            "Imagine drinking from a spring every morning. The water always seems to be there. One day you wonder what keeps it flowing.",
          children:
            "A forest that soothes people depends on soil, water, many kinds of plants and animals, and often the communities who look after it. Not every green place is equally alive. Some are planted with a single species and often support less life than mixed forests. Forest bathing can open a deeper question: if forests help us, how do we help them? Noticing a forest closely is a natural first step toward caring about what keeps it healthy.",
        },
      ]}
      ending={[
        "A forest does not need you to hurry.",
        "Noticing is a way of arriving.",
        "What restores us is worth restoring.",
      ]}
      nextStep={{
        heading: "What ZenTrust plans to do",
        text: "In Kakani, Nepal, ZenTrust plans to work with the local community forest user group to help a pine monoculture hillside become a layered, more varied forest, starting with work to hold water for springs it reports are drying. The program is at the planning and setup stage, and work on the hillside has not started.",
        href: "/nepal",
        label: "See the Nepal project",
      }}
    />
  );
}
