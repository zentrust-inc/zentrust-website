// app/guides/_lib/guides.ts
// Practical land-and-water guides. General, widely documented practice,
// plus how ZenTrust plans to use each idea in Chauthe, Kakani (Nepal).
// Keep project statements in line with /nepal: the program is in its
// planning and setup stage, so describe plans, never results.

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Guide = {
  slug: string;
  title: string; // H1, phrased as the search question
  metaTitle: string;
  description: string; // meta description, <= 160 chars
  shortAnswer: string;
  sections: GuideSection[];
  inChauthe: string[]; // how ZenTrust plans to use it (plans only)
  related: string[]; // other guide slugs
};

export const GUIDES: Guide[] = [
  {
    slug: "what-is-a-food-forest",
    title: "What is a food forest?",
    metaTitle: "What Is a Food Forest? A Plain-Language Guide | ZenTrust",
    description:
      "A food forest is a planted woodland that produces food in layers, like a natural forest. How it works, what it needs, and common mistakes.",
    shortAnswer:
      "A food forest is a planted, layered woodland that imitates a natural forest but is made mostly of plants people can eat or use: fruit and nut trees, shrubs, vines, herbs and ground cover. Once established, it needs far less digging, watering and fertilizer than an annual field.",
    sections: [
      {
        heading: "How a food forest works",
        paragraphs: [
          "A natural forest keeps its soil covered, shaded and full of roots all year. Leaves fall and rot into new soil, and many different plants share light, water and nutrients without anyone managing them.",
          "A food forest copies that structure on purpose. Tall trees, smaller trees, shrubs, herbs, ground cover, climbers and root crops are planted together so that each layer protects the others and something useful is ripening in most seasons.",
        ],
      },
      {
        heading: "What it is not",
        list: [
          "Not an orchard: an orchard is usually one layer of one species, with bare or mown ground between trees.",
          "Not a wild forest: a food forest is designed and tended, especially in the first years.",
          "Not instant: most food forests take several years before trees bear well and the system starts to look after itself.",
        ],
      },
      {
        heading: "What a food forest needs to get started",
        list: [
          "Water held in the land: on slopes this usually means contour trenches, swales or small ponds before planting.",
          "Fast-growing support plants, such as nitrogen-fixing trees and grasses, to shade, mulch and feed the slower trees.",
          "Plenty of mulch so the soil is never bare.",
          "Species that suit the local climate and that local people actually want to eat, use or sell.",
          "People who will tend it: pruning, planting gaps and harvesting in the early years.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Planting only the 'final' fruit trees and skipping the support species that make the system work.",
          "Leaving soil bare between plants, which lets it dry out and wash away.",
          "Planting before the water is slowed and stored on site.",
          "Choosing species from catalogs instead of from what grows well nearby.",
        ],
      },
    ],
    inChauthe: [
      "On a pine-covered hillside above Kakani, ZenTrust plans to plant native trees, fruit, fodder and ground cover between the pines, and to thin the pine step by step only where the community forest user group and forest office approve.",
      "Water work comes first: contour trenches, small check dams and recharge ponds, alongside a community nursery for native and fruit trees.",
    ],
    related: ["food-forest-layers", "what-is-syntropic-agriculture", "nitrogen-fixing-trees"],
  },
  {
    slug: "food-forest-layers",
    title: "What are the layers of a food forest?",
    metaTitle: "The Layers of a Food Forest, Explained | ZenTrust",
    description:
      "Canopy, sub-canopy, shrubs, herbs, ground cover, climbers and roots: what each food forest layer does and how they help each other.",
    shortAnswer:
      "A food forest is usually described in about seven layers: tall canopy trees, smaller trees, shrubs, herbs, ground cover, climbers and root crops. Each layer uses a different height and depth, so together they capture more light, hold more water and protect the soil better than any single crop.",
    sections: [
      {
        heading: "The seven layers",
        list: [
          "Canopy: the tallest trees, such as large nut or timber trees. They set the shade and shelter for everything below.",
          "Sub-canopy: smaller fruit trees that like some shelter.",
          "Shrubs: berries and other bushes that fill the middle height.",
          "Herbs: perennial and annual herbs, vegetables and medicinal plants.",
          "Ground cover: low, spreading plants that keep soil covered and shaded.",
          "Climbers: vines that use trees and shrubs for support.",
          "Roots: tubers and root crops below ground, and the deep roots of trees that bring up water and minerals.",
        ],
      },
      {
        heading: "Why layers matter",
        paragraphs: [
          "Sunlight that would hit bare ground is caught at several heights. Rain is slowed by leaves before it reaches the soil, so it soaks in instead of running off. Roots at different depths share the soil rather than competing at one level.",
          "Layers also spread risk. If one crop has a bad year, others still produce, which matters for families who depend on the land.",
        ],
      },
      {
        heading: "Layers change over time",
        paragraphs: [
          "In the first years, fast-growing support plants and annual crops do most of the work while slow trees establish. Over time the canopy closes and the system shifts toward longer-lived trees. Good design plans for that succession instead of fighting it.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for Chauthe is a layered forest of native trees, fruit, fodder and ground cover, grown in between the existing pines so the hillside stays covered while it changes.",
    ],
    related: ["what-is-a-food-forest", "what-is-syntropic-agriculture", "chop-and-drop"],
  },
  {
    slug: "what-is-syntropic-agriculture",
    title: "What is syntropic agriculture?",
    metaTitle: "What Is Syntropic Agriculture? Syntropic Farming Explained | ZenTrust",
    description:
      "Syntropic agriculture grows food the way forests grow: dense, layered plantings that build soil over time. Its core ideas and how it differs from other methods.",
    shortAnswer:
      "Syntropic agriculture is a way of farming that grows food the way a forest grows itself. Plants are set out densely in layers and in succession, and regular pruning feeds the soil, so the land gains fertility and water-holding capacity over time instead of losing it.",
    sections: [
      {
        heading: "The core ideas",
        list: [
          "Succession: plant species that live for months, years and decades together, so each stage prepares the ground for the next.",
          "Stratification: arrange plants by height and light needs so every layer is used.",
          "Density: plant closely, then thin and prune, rather than leaving gaps of bare soil.",
          "Pruning as fertilizer: cut biomass is laid on the ground, where it protects and feeds the soil.",
          "Ground always covered: mulch and living plants keep soil from drying, heating and eroding.",
        ],
      },
      {
        heading: "How it differs from conventional farming",
        paragraphs: [
          "Conventional systems often clear the ground, plant one crop and add fertilizer and water from outside. Syntropic systems aim to make the land itself more productive over time, by building organic matter and the soil life that holds water.",
          "It is more labor in planting and pruning, and less in buying inputs. It also takes design skill: which species, in what order, at what spacing.",
        ],
      },
      {
        heading: "Where it works",
        paragraphs: [
          "The approach is used from the tropics to temperate climates. The principles stay the same; the species change. It is especially useful on degraded land where soil and water need rebuilding before anything else can thrive.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust plans to use syntropic principles to turn a pine monoculture above Kakani into a layered food forest, with the aim that monsoon rain soaks in, springs recover and the hillside feeds the families around it.",
      "We will publish what we measure, including what does not work.",
    ],
    related: ["food-forest-layers", "chop-and-drop", "what-is-a-food-forest"],
  },
  {
    slug: "chop-and-drop",
    title: "What is chop and drop?",
    metaTitle: "Chop and Drop Mulching: What It Is and How to Do It | ZenTrust",
    description:
      "Chop and drop means cutting plants and leaving them as mulch where they fall. Why it builds soil, which plants to use, and mistakes to avoid.",
    shortAnswer:
      "Chop and drop means cutting plants back and leaving the cut material on the ground where it falls, as mulch. It returns nutrients to the soil, keeps the ground covered and moist, and saves carrying compost from elsewhere.",
    sections: [
      {
        heading: "Why it works",
        paragraphs: [
          "Every leaf and stem holds nutrients the plant took from soil and air. Cut and left on the surface, it shades the soil, slows evaporation and slowly breaks down into organic matter that feeds soil life.",
          "Cutting a plant back also triggers it to regrow, and many plants shed some roots when pruned, which adds organic matter below ground too.",
        ],
      },
      {
        heading: "Good plants to chop and drop",
        list: [
          "Fast-growing nitrogen-fixing shrubs and trees that tolerate hard pruning.",
          "Grasses and large-leaved plants that produce a lot of biomass quickly.",
          "Prunings from fruit trees and support trees in a food forest.",
        ],
      },
      {
        heading: "How to do it",
        list: [
          "Cut at a time that suits the plant, often before it flowers or sets seed.",
          "Chop material into smaller pieces so it lies flat and breaks down faster.",
          "Lay it around the plants you want to feed, not against their stems.",
          "Repeat through the growing season instead of one big cut.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Dropping seed heads of aggressive weeds, which spreads them.",
          "Piling thick, wet layers against trunks, which can cause rot.",
          "Expecting fast results: soil improvement shows over seasons, not weeks.",
        ],
      },
    ],
    inChauthe: [
      "In ZenTrust's planned food forest, support trees and ground cover will be pruned and laid on the soil, so the hillside builds its own mulch instead of relying on material carried up from below.",
    ],
    related: ["nitrogen-fixing-trees", "what-is-syntropic-agriculture", "food-forest-layers"],
  },
  {
    slug: "nitrogen-fixing-trees",
    title: "What are nitrogen-fixing trees?",
    metaTitle: "Nitrogen-Fixing Trees: What They Are and Why They Matter | ZenTrust",
    description:
      "Nitrogen-fixing trees host soil bacteria that turn air into plant food. How they work, how they help food forests and degraded land, and how to use them.",
    shortAnswer:
      "Nitrogen-fixing trees and shrubs, most of them legumes, host bacteria in small root nodules that take nitrogen from the air and turn it into a form plants can use. They improve poor soil, grow fast and, when pruned, feed the plants around them.",
    sections: [
      {
        heading: "How nitrogen fixing works",
        paragraphs: [
          "Nitrogen makes up most of the air, but plants cannot use it in that form. Certain soil bacteria can convert it. Legumes and a few other plant families form partnerships with these bacteria, housing them in root nodules and giving them sugars in return.",
          "When the tree's leaves fall or it is pruned, and when some of its fine roots die back, that nitrogen enters the soil where neighboring plants can use it.",
        ],
      },
      {
        heading: "Why they matter on degraded land",
        list: [
          "They grow on soils too poor for most crops, starting the recovery.",
          "They provide shade, shelter and mulch for slower trees.",
          "Many also give fodder, firewood or food, which matters to the people who manage the land.",
        ],
      },
      {
        heading: "How to use them well",
        list: [
          "Choose species that are native or well proven locally; some introduced species become invasive.",
          "Plant them among the trees you want to support, not in separate blocks.",
          "Prune them regularly and lay the cuttings on the ground (chop and drop).",
          "Plan to thin them out as the main trees mature.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plans for Chauthe include fodder and support trees alongside native and fruit trees, raised in a community nursery. Species will be chosen with local foresters and the community forest user group.",
    ],
    related: ["chop-and-drop", "what-is-a-food-forest", "how-to-stop-erosion-on-a-slope"],
  },
  {
    slug: "how-to-stop-erosion-on-a-slope",
    title: "How do you stop soil erosion on a slope?",
    metaTitle: "How to Stop Soil Erosion on a Slope | ZenTrust",
    description:
      "Slow the water, cover the soil and hold it with roots. Practical ways to stop erosion on hillsides, from contour trenches to living plant cover.",
    shortAnswer:
      "To stop erosion on a slope, slow the water, keep the soil covered and hold it with roots. In practice that means working along the contour (trenches, bunds, terraces or plant lines), mulching bare ground, and establishing deep-rooted plants and ground cover.",
    sections: [
      {
        heading: "Why slopes erode",
        paragraphs: [
          "Rain that hits bare soil breaks it apart. On a slope, water then runs downhill, gathers speed and carries loose soil with it. The faster and more concentrated the flow, the more it cuts into the ground, starting as small rills and growing into gullies.",
        ],
      },
      {
        heading: "The three principles",
        list: [
          "Slow it: break the slope into short sections so water never builds up speed.",
          "Spread it: guide water sideways along the contour instead of straight downhill.",
          "Sink it: give water time and places to soak into the soil.",
        ],
      },
      {
        heading: "Practical measures",
        list: [
          "Contour trenches or swales dug along the same level across the slope.",
          "Stone or earth bunds, and living hedges planted on the contour.",
          "Small check dams in gullies to slow flow and trap soil.",
          "Mulch and ground cover so rain never lands on bare soil.",
          "Deep- and shallow-rooted plants together to hold soil at different depths.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Digging trenches that are not truly level, so water runs along them and breaks out at one end.",
          "Building structures without planting, so they silt up and fail.",
          "Working from the bottom of a gully instead of slowing water from the top.",
        ],
      },
    ],
    inChauthe: [
      "On the bare, gullied slopes above Kakani, ZenTrust's first planned work is to slow the monsoon rain with contour trenches, small check dams and recharge ponds, then cover the ground with a layered forest.",
    ],
    related: ["contour-trenches", "recharge-ponds", "why-are-springs-drying-up"],
  },
  {
    slug: "contour-trenches",
    title: "What are contour trenches?",
    metaTitle: "Contour Trenches: How They Catch Rain on Hillsides | ZenTrust",
    description:
      "Contour trenches are level ditches dug across a slope to catch runoff and let it soak in. How they work, how to lay them out, and mistakes to avoid.",
    shortAnswer:
      "Contour trenches are shallow ditches dug exactly level across a hillside. They catch rain running down the slope and hold it long enough to soak into the ground, which reduces erosion and recharges soil moisture and groundwater.",
    sections: [
      {
        heading: "How they work",
        paragraphs: [
          "Because each trench follows a contour line, every point along it is at the same height, so water spreads out along the trench instead of flowing to one end. The soil dug out is usually placed on the downhill side as a small bund, which is then planted to hold it.",
          "A series of trenches down a slope breaks one long runoff path into many short ones, so water never builds up enough speed to carry soil away.",
        ],
      },
      {
        heading: "Laying them out",
        list: [
          "Mark contour lines with a simple A-frame level, water level or surveying tool.",
          "Space trenches closer on steep or bare slopes, wider on gentle or well-covered ones.",
          "Break long trenches into sections with small earth plugs, so a failure in one does not empty the whole line.",
          "Plant the bund and the area just below the trench, where moisture collects.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Trenches that are slightly off level, so water concentrates and breaks through.",
          "Digging in unstable or very steep ground without local technical advice.",
          "Leaving the bund unplanted, so it erodes back into the trench.",
          "No maintenance: trenches need clearing of silt after heavy rains in early years.",
        ],
      },
    ],
    inChauthe: [
      "Contour trenches are part of ZenTrust's planned first-year water work in Chauthe, together with small check dams and recharge ponds, so monsoon rain soaks into the hillside instead of running off it.",
    ],
    related: ["how-to-stop-erosion-on-a-slope", "recharge-ponds", "rainwater-harvesting-in-the-hills"],
  },
  {
    slug: "recharge-ponds",
    title: "What is a recharge pond?",
    metaTitle: "Recharge Ponds: How They Refill Groundwater and Springs | ZenTrust",
    description:
      "A recharge pond holds runoff so it can seep into the ground and refill groundwater and springs. How it differs from a storage pond and where to put one.",
    shortAnswer:
      "A recharge pond is a small pond built to hold rainwater long enough for it to seep down into the ground. Unlike a storage pond, which is lined to keep water in, a recharge pond is meant to leak, refilling the soil and groundwater that feed springs and wells downhill.",
    sections: [
      {
        heading: "How recharge works",
        paragraphs: [
          "In hill areas, many springs are fed by water that soaked in somewhere uphill and moved slowly through soil and rock. If rain runs off the surface instead, it leaves quickly in the monsoon and the springs weaken in the dry season.",
          "A recharge pond catches that runoff and lets it percolate. Combined with trenches and plant cover across the slope, it helps more of each year's rain enter the ground.",
        ],
      },
      {
        heading: "Where to put one",
        list: [
          "In the area that feeds the spring you want to help (its recharge zone), which local knowledge and simple surveys can identify.",
          "Where soil and rock let water soak in, not on solid rock or heavy clay.",
          "Away from unstable slopes, where extra water could trigger slips.",
          "Where overflow can leave safely without causing new erosion.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Building in the wrong place: a pond far from a spring's recharge zone may not help that spring.",
          "No spillway, so the bank fails in heavy rain.",
          "Letting it fill with silt: catching soil uphill with trenches and plants keeps it working.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust plans recharge ponds as part of the first-year water work on the hillside above Kakani, and will monitor the flow of nearby springs every month in the dry season to see what changes.",
    ],
    related: ["why-are-springs-drying-up", "contour-trenches", "rainwater-harvesting-in-the-hills"],
  },
  {
    slug: "why-are-springs-drying-up",
    title: "Why are springs drying up?",
    metaTitle: "Why Are Springs Drying Up in the Hills? | ZenTrust",
    description:
      "Springs dry up when less rain soaks into the hills that feed them. The main causes, from land use to changing rainfall, and what can help.",
    shortAnswer:
      "Springs dry up mainly when less rainwater soaks into the ground above them. Changes in land cover, compacted and bare soil, roads, more water being drawn off, and shifts in rainfall can all mean that rain runs away quickly instead of recharging the groundwater that feeds the spring.",
    sections: [
      {
        heading: "How a spring works",
        paragraphs: [
          "A spring is where groundwater reaches the surface. It is fed by rain that fell somewhere uphill, soaked in and moved slowly through soil and rock. That slow underground journey is why a healthy spring keeps flowing long after the rains stop.",
        ],
      },
      {
        heading: "The main causes of drying springs",
        list: [
          "Less infiltration: bare, compacted or eroded soil sheds rain instead of absorbing it.",
          "Land-cover change: some plantation forests and cleared land let less water recharge the ground than mixed native forest.",
          "Roads and construction that cut across slopes and redirect water.",
          "More water drawn from the same sources.",
          "Changing rainfall: shorter, heavier rains run off more and recharge less.",
        ],
      },
      {
        heading: "What can help",
        list: [
          "Identify the spring's recharge area, often with help from local knowledge and hydrogeologists.",
          "Slow and sink rain there with trenches, ponds and plant cover.",
          "Protect the spring source itself from damage and contamination.",
          "Measure flow regularly, so you can see whether the work is making a difference.",
        ],
      },
    ],
    inChauthe: [
      "Springs in the hills around Chauthe are drying. ZenTrust believes the pine monoculture is a major cause, and plans to measure dry-season spring flow at the same sources every month as the forest grows back in layers.",
    ],
    related: ["pine-plantations-and-water", "recharge-ponds", "how-to-stop-erosion-on-a-slope"],
  },
  {
    slug: "pine-plantations-and-water",
    title: "Do pine plantations reduce water?",
    metaTitle: "Do Pine Plantations Reduce Water? Pine Monoculture and Springs | ZenTrust",
    description:
      "Pine was planted widely to cover bare hills. Research links pine plantations with less groundwater recharge than mixed broadleaf forest. What that means for springs.",
    shortAnswer:
      "Research in the Himalaya and elsewhere links pine plantations with less groundwater recharge than mixed broadleaf forest. Dense needle litter, high water use and dry-season fires can mean less rain soaks in to feed springs. How much it matters depends on the site, which is why measurement matters.",
    sections: [
      {
        heading: "Why pine was planted",
        paragraphs: [
          "In many hill regions, including Nepal's middle hills, pine was planted decades ago to cover bare, eroded slopes quickly. It grows fast on poor soil and did that job.",
        ],
      },
      {
        heading: "How pine can affect water",
        list: [
          "Needle litter can form a dense layer that sheds water and suppresses other plants.",
          "A single-species canopy offers less of the layered cover that slows rain.",
          "Pine stands are prone to dry-season fires, which leave soil bare.",
          "Fast-growing plantations can use a lot of water.",
        ],
      },
      {
        heading: "What can be done",
        paragraphs: [
          "Clearing pine all at once can expose soil and cause more erosion. A gentler approach plants mixed native species beneath and between the pines, then thins the pine gradually as the new forest establishes, with the approval of the people and authorities who manage the land.",
        ],
      },
    ],
    inChauthe: [
      "Above Kakani, ZenTrust plans to plant native trees, fruit, fodder and ground cover between the pines and thin the pine step by step only where the community forest user group and forest office approve. Spring flow, ground cover and soil moisture will be measured under pine and under new planting.",
    ],
    related: ["why-are-springs-drying-up", "what-is-a-food-forest", "how-to-stop-erosion-on-a-slope"],
  },
  {
    slug: "rainwater-harvesting-in-the-hills",
    title: "How does rainwater harvesting work on hillsides?",
    metaTitle: "Rainwater Harvesting on Hillsides and Slopes | ZenTrust",
    description:
      "On hillsides, rainwater harvesting means catching rain in the soil, in ponds and from roofs. The main methods and how they fit together.",
    shortAnswer:
      "On hillsides, rainwater harvesting means catching rain where it falls instead of letting it run off: in the soil with trenches, bunds and plant cover; in ponds that store or recharge; and from roofs into tanks. The cheapest storage is usually the soil itself.",
    sections: [
      {
        heading: "Three places to store rain",
        list: [
          "In the soil: contour trenches, bunds, mulch and living cover help rain soak in where plants can use it.",
          "In the ground: recharge ponds and pits let water percolate down to groundwater and springs.",
          "In tanks and storage ponds: roof runoff and lined ponds hold water for people, animals and dry-season watering.",
        ],
      },
      {
        heading: "Start at the top",
        paragraphs: [
          "Water is easiest to manage high on the slope, where flows are small. Slowing it there protects everything below and means less erosion to repair downhill.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Concentrating runoff into one channel, which can cut a new gully.",
          "Storage without plant cover upslope, so ponds fill with silt.",
          "Adding water to unstable slopes without checking for landslide risk.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's planned first-year work in Chauthe focuses on catching monsoon rain in the hillside itself with contour trenches, small check dams and recharge ponds, alongside a community nursery.",
    ],
    related: ["contour-trenches", "recharge-ponds", "how-to-stop-erosion-on-a-slope"],
  },
];

export function getGuide(slug: string): Guide {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide: ${slug}`);
  return g;
}
