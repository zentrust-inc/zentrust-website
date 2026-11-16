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
  {
    slug: "what-is-a-watershed",
    title: "What is a watershed?",
    metaTitle: "What Is a Watershed? A Plain-Language Guide | ZenTrust",
    description:
      "A watershed is all the land that drains to one stream, river, lake or spring. How watersheds work, why they matter, and what keeps one healthy.",
    shortAnswer:
      "A watershed is all the land that drains rain and snowmelt to the same place: a stream, river, lake or spring. Ridges and high ground form its edges. Everything that happens on that land, from farming to forest cover, affects the water that comes out at the bottom.",
    sections: [
      {
        heading: "How a watershed works",
        paragraphs: [
          "Rain that falls on a slope has three main paths. Some runs over the surface, some soaks into the soil and moves slowly underground, and some is taken up by plants or evaporates. A watershed is the whole area where those paths lead to one outlet.",
          "Small watersheds nest inside larger ones. A gully drains to a stream, the stream to a river, and the river to a larger basin. The same ideas apply at every size.",
        ],
      },
      {
        heading: "A note on the word",
        paragraphs: [
          "In North America, 'watershed' usually means the whole drainage area. In British usage it often means only the dividing ridge between two drainage areas, and the area itself is called a catchment. A 'springshed' is the land that feeds one spring.",
        ],
      },
      {
        heading: "Why watersheds matter",
        list: [
          "Water supply: springs, wells and rivers are fed by the land above them.",
          "Floods and dry seasons: land that soaks up rain releases it slowly, which reduces flood peaks and keeps streams flowing longer.",
          "Water quality: soil, manure and chemicals washed off the land end up in the water downstream.",
          "Shared responsibility: people upstream and downstream depend on the same land, even when they never meet.",
        ],
      },
      {
        heading: "What keeps a watershed healthy",
        list: [
          "Soil that stays covered by plants, leaf litter or mulch.",
          "Deep-rooted, mixed vegetation that opens the soil so rain can soak in.",
          "Slopes where runoff is slowed by terraces, trenches, ponds or check dams.",
          "Stream banks and spring areas protected from clearing, trampling and pollution.",
        ],
      },
      {
        heading: "Common signs of trouble",
        list: [
          "Muddy runoff and new gullies after heavy rain.",
          "Flash floods followed by streams that dry up early.",
          "Springs that flow less each dry season.",
          "Bare, crusted soil where little grows.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's planned work sits on a pine-covered hillside above Kakani that drains toward local springs. The plan treats the slope as a small watershed: slow the rain high up with contour trenches, check dams and recharge ponds, then rebuild a mixed forest so more water soaks in.",
      "We plan to measure spring flow before and during the work, so that any change can be seen rather than assumed.",
    ],
    related: ["why-are-springs-drying-up", "groundwater-recharge", "what-is-soil-erosion"],
  },
  {
    slug: "terrace-farming",
    title: "What is terrace farming?",
    metaTitle: "Terrace Farming: How It Works and Why It Is Used | ZenTrust",
    description:
      "Terrace farming turns a steep slope into level steps that hold soil and water. How terraces work, their benefits, costs and common failures.",
    shortAnswer:
      "Terrace farming means cutting a slope into a series of level or nearly level steps, each held by a bank or wall. The steps slow runoff, hold soil in place and give farmers flat ground to plant on land that would otherwise be too steep.",
    sections: [
      {
        heading: "How terraces work",
        paragraphs: [
          "On an open slope, rain gathers speed as it runs downhill and carries soil with it. A terrace breaks the slope into short, flat sections. Water slows on each step, has time to soak in, and any overflow drops only a short distance to the next level.",
          "Each terrace has a flat bed for crops and a riser, the bank or stone wall that holds it up. Risers are often planted with grass or shrubs so that roots bind the soil.",
        ],
      },
      {
        heading: "Main types",
        list: [
          "Bench terraces: fully level steps, common in hill and mountain farming across Asia and the Andes.",
          "Sloping or outward-draining terraces: beds with a slight tilt so excess water can leave safely.",
          "Irrigated terraces: level, bunded fields that can hold standing water, as used for rice.",
          "Contour bunds and stone lines: low barriers across gentler slopes that build up into terraces over time.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Much less soil loss than farming straight down a slope.",
          "More rain soaks into the ground instead of running off.",
          "Flat, workable plots on steep land.",
          "Walls and risers can grow fodder, fruit or support trees.",
        ],
      },
      {
        heading: "Costs and risks",
        list: [
          "Building terraces takes a great deal of labor, and they need repair every year.",
          "Abandoned or broken terraces can collapse and cause worse erosion than the original slope.",
          "On unstable ground, holding too much water in a terrace can add to landslide risk, so drainage matters.",
          "Cutting terraces removes topsoil from part of each bed unless it is set aside and put back.",
        ],
      },
      {
        heading: "Terraces in Nepal",
        paragraphs: [
          "Much of the farming in Nepal's middle hills is done on terraces built and maintained over generations. Rainfed upland terraces are known as bari and irrigated rice terraces as khet.",
        ],
      },
    ],
    inChauthe: [
      "The hillside in ZenTrust's plan is community forest, not farmland, so the first-year work uses contour trenches, check dams and recharge ponds rather than new farm terraces.",
      "The same principle applies: break a long slope into short steps so that rain slows down and soaks in.",
    ],
    related: ["contour-trenches", "how-to-stop-erosion-on-a-slope", "what-is-soil-erosion"],
  },
  {
    slug: "cover-crops",
    title: "What are cover crops?",
    metaTitle: "Cover Crops: What They Are and How They Help Soil | ZenTrust",
    description:
      "Cover crops are plants grown to protect and improve soil rather than to harvest. Types, benefits, trade-offs and how to choose one.",
    shortAnswer:
      "Cover crops are plants grown mainly to cover and improve the soil rather than to be harvested. They protect bare ground between main crops, add organic matter, feed soil life and, in the case of legumes, add nitrogen.",
    sections: [
      {
        heading: "What cover crops do",
        list: [
          "Shield soil from rain and wind, which reduces erosion.",
          "Add roots and residue that become organic matter.",
          "Take up leftover nutrients that would otherwise wash away.",
          "Shade out weeds.",
          "Keep living roots in the ground, which feeds soil fungi and bacteria.",
        ],
      },
      {
        heading: "Main groups",
        list: [
          "Legumes such as clover, vetch, peas and beans: host root bacteria that take nitrogen from the air.",
          "Grasses and cereals such as rye, oats and barley: grow fast, make a lot of residue and hold soil with fibrous roots.",
          "Brassicas such as radish and mustard: deep taproots that can open compacted soil.",
          "Mixes: several species together, to get more than one benefit.",
        ],
      },
      {
        heading: "How they are used",
        paragraphs: [
          "A cover crop is usually sown after one main crop is harvested and ended before the next is planted. It can be mown, rolled flat, grazed, killed by frost or dug in. Leaving the residue on the surface as mulch protects the soil for longer than digging it in.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Cover crops use water, which can matter in dry regions.",
          "Seed and labor cost money, and benefits build over several seasons rather than at once.",
          "A cover crop ended too late can compete with the next crop or set seed and become a weed.",
          "Results depend on climate, soil and timing, so local advice is worth getting.",
        ],
      },
      {
        heading: "Choosing one",
        paragraphs: [
          "Start from the main goal: nitrogen, erosion control, weed suppression or loosening soil. Then pick species that fit the season and the gap between crops. Local extension services and seed suppliers usually publish lists for each region.",
        ],
      },
    ],
    inChauthe: [
      "A food forest uses the same idea all year: soil is kept covered with ground-cover plants, mulch and fast-growing support species rather than left bare.",
      "ZenTrust's plan includes ground cover and nitrogen-fixing plants among the trees. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: ["nitrogen-fixing-trees", "chop-and-drop", "what-is-soil-erosion"],
  },
  {
    slug: "hugelkultur",
    title: "What is hugelkultur?",
    metaTitle: "Hugelkultur: What It Is, How to Build One, and Limits | ZenTrust",
    description:
      "Hugelkultur is a raised bed built over buried logs and branches. How it works, how to build one, which wood to avoid, and where it fails.",
    shortAnswer:
      "Hugelkultur is a way of building raised garden beds over a core of logs and branches, covered with smaller plant material, compost and soil. As the wood slowly rots it holds moisture like a sponge and releases nutrients over several years.",
    sections: [
      {
        heading: "Where the idea comes from",
        paragraphs: [
          "The word is German and is usually translated as mound culture or hill culture. The method was popularized by gardeners in Germany and Austria and later taken up widely in permaculture.",
        ],
      },
      {
        heading: "How to build a simple bed",
        list: [
          "Lay logs and thick branches in a row or shallow trench. Partly rotted wood works best.",
          "Fill the gaps with smaller branches, twigs and leaves.",
          "Add a layer of nitrogen-rich material such as grass cuttings, manure or kitchen scraps.",
          "Cover with turf turned upside down if you have it, then compost and topsoil.",
          "Water the layers well as you build, then mulch the surface and plant.",
        ],
      },
      {
        heading: "Why it can work",
        list: [
          "Rotting wood soaks up water in wet periods and releases it slowly.",
          "The bed feeds itself for years as the wood breaks down.",
          "It puts fallen or pruned wood to use instead of burning it.",
          "The mound warms and drains faster than flat ground in cool, wet climates.",
        ],
      },
      {
        heading: "Limits and cautions",
        list: [
          "Fresh wood can tie up nitrogen in the first year or two, so plants may need extra compost or legumes at the start.",
          "Avoid wood that resists rot or suppresses other plants, such as black walnut, cedar and black locust.",
          "Beds settle as the wood rots and need topping up.",
          "Do not build wood-cored mounds across slopes or waterways to hold water. They can float or fail when saturated.",
          "Most evidence for hugelkultur comes from gardeners' experience rather than controlled trials, so results vary.",
        ],
      },
    ],
    inChauthe: [
      "Hugelkultur beds are not part of ZenTrust's current plan. On a steep hillside we plan to hold water with contour trenches, check dams and recharge ponds instead.",
      "The principle behind it is in the plan: woody material and prunings stay on the land as mulch to feed the soil, rather than being burned or carried away.",
    ],
    related: ["sheet-mulching", "chop-and-drop", "what-is-permaculture"],
  },
  {
    slug: "what-is-a-swale",
    title: "What is a swale?",
    metaTitle: "What Is a Swale? How Swales Hold Water on Land | ZenTrust",
    description:
      "A swale is a shallow, level ditch along the contour of a slope that catches runoff so it soaks in. How swales work, where they suit, and risks.",
    shortAnswer:
      "In land and garden design, a swale is a shallow, level ditch dug along the contour of a slope, with the dug soil piled as a low bank on the downhill side. It catches runoff and holds it long enough to soak into the ground.",
    sections: [
      {
        heading: "Two meanings of the word",
        paragraphs: [
          "In permaculture and water harvesting, a swale is level and is meant to hold water until it soaks in. In civil engineering and landscaping, a swale or bioswale is a gently sloping, planted channel meant to carry stormwater away slowly and filter it. This guide is about the first kind.",
        ],
      },
      {
        heading: "How a swale works",
        list: [
          "The ditch follows a contour line, so its base is level from end to end.",
          "Runoff from above collects in the ditch instead of running on downhill.",
          "Water soaks into the soil under and below the swale.",
          "Trees and shrubs planted on or just below the bank use the stored moisture.",
          "A level spillway lets extra water leave safely in very heavy rain.",
        ],
      },
      {
        heading: "Where swales suit",
        list: [
          "Gentle to moderate slopes with soil that drains reasonably well.",
          "Climates with dry periods, where stored soil moisture is valuable.",
          "Land where trees or perennial plants will be established along the swale.",
        ],
      },
      {
        heading: "Where they do not",
        list: [
          "Steep or unstable slopes, where saturated ground can slump or slide.",
          "Heavy clay or already waterlogged ground.",
          "Directly above buildings, roads or cut banks.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "A base that is not truly level, so water runs to one end and cuts a channel.",
          "No spillway, so the bank is overtopped and washed out.",
          "Leaving the bank bare instead of planting it.",
          "Building one very large swale instead of several small ones.",
        ],
      },
    ],
    inChauthe: [
      "On the hillside above Kakani, ZenTrust plans small contour trenches rather than large swales, because the slope is steep and small, closely spaced trenches hold less water in any one place.",
      "Layout and sizing will be checked with local technical advice before any digging.",
    ],
    related: ["contour-trenches", "rainwater-harvesting-in-the-hills", "check-dams"],
  },
  {
    slug: "what-is-biochar",
    title: "What is biochar?",
    metaTitle: "What Is Biochar? Uses, Benefits and Limits | ZenTrust",
    description:
      "Biochar is charcoal made from plant material and added to soil. What it does, where it helps most, how to prepare it, and its limits.",
    shortAnswer:
      "Biochar is charcoal made by heating plant material, such as wood or crop waste, with very little oxygen, and then used as a soil amendment. It is highly porous, so it can hold water and nutrients, and it breaks down very slowly, which keeps its carbon in the soil for a long time.",
    sections: [
      {
        heading: "How it is made",
        paragraphs: [
          "When plant material is heated with little air, a process called pyrolysis, it does not burn to ash. Gases are driven off and a carbon-rich, sponge-like solid remains. That solid is biochar. It can be made in purpose-built kilns or in simple pits and cone kilns.",
        ],
      },
      {
        heading: "What it does in soil",
        list: [
          "Holds water and dissolved nutrients in its pores.",
          "Gives soil microbes and fungi a surface to live on.",
          "Can reduce acidity in acid soils.",
          "Stays in the soil far longer than compost or manure.",
        ],
      },
      {
        heading: "Where it helps most",
        paragraphs: [
          "Field studies show mixed results. Gains in crop growth are most consistent in acidic, sandy or heavily weathered soils, which are common in the tropics. In fertile, well-managed temperate soils, biochar often makes little difference to yields.",
          "Interest in biochar grew partly from terra preta, the dark, fertile soils of the Amazon basin that contain old charcoal along with other organic remains.",
        ],
      },
      {
        heading: "How to use it",
        list: [
          "Charge it first: soak or mix it with compost, manure or urine for a few weeks. Raw biochar can absorb nutrients from the soil at first.",
          "Mix it into the root zone or into compost rather than leaving it on the surface.",
          "Start with small amounts and observe, since results depend on soil and climate.",
        ],
      },
      {
        heading: "Cautions",
        list: [
          "Poorly run kilns make a lot of smoke, which is a health and pollution problem.",
          "Biochar is only a climate benefit if it is made from true waste material, not from trees cut for the purpose.",
          "It is not a fertilizer on its own and does not replace compost or good soil cover.",
        ],
      },
    ],
    inChauthe: [
      "Biochar is not part of ZenTrust's first-year plan. Pine needles and thinnings on the site are a possible feedstock, and making biochar from them could also reduce the fuel that feeds dry-season fires.",
      "Any trial would need the community forest user group's agreement, a low-smoke kiln and safe fire practice. For now it is an idea to study, not a commitment.",
    ],
    related: ["chop-and-drop", "pine-plantations-and-water", "sheet-mulching"],
  },
  {
    slug: "what-is-permaculture",
    title: "What is permaculture?",
    metaTitle: "What Is Permaculture? A Plain-Language Guide | ZenTrust",
    description:
      "Permaculture is a way of designing farms, gardens and settlements on patterns found in nature. Its ethics, main ideas, examples and limits.",
    shortAnswer:
      "Permaculture is an approach to designing gardens, farms and settlements so that they work more like natural ecosystems: diverse, mostly perennial, and able to recycle their own water, nutrients and energy. It is a design method, not a single farming technique.",
    sections: [
      {
        heading: "Where it comes from",
        paragraphs: [
          "The term was coined in Australia in the 1970s by Bill Mollison and David Holmgren, from 'permanent agriculture'. It drew on traditional farming systems, ecology and earlier writing on tree crops, and has since spread worldwide through books and design courses.",
        ],
      },
      {
        heading: "The three ethics",
        list: [
          "Care for the earth: keep soil, water and living systems healthy.",
          "Care for people: meet real human needs.",
          "Fair share: limit consumption and pass on surplus.",
        ],
      },
      {
        heading: "Main design ideas",
        list: [
          "Observe first: study sun, wind, water and slope through the seasons before changing anything.",
          "Catch and store water and energy high in the landscape.",
          "Place things by how often they need attention, with daily-use plants nearest the house.",
          "Make each element do several jobs, and back up each need in more than one way.",
          "Favor perennial plants, trees and mixed plantings over bare soil and single crops.",
          "Treat waste as a resource: mulch, compost and reuse.",
        ],
      },
      {
        heading: "What it looks like in practice",
        list: [
          "Food forests and mixed orchards.",
          "Swales, ponds and rainwater tanks.",
          "Mulched, no-dig vegetable beds.",
          "Animals integrated with crops for manure and pest control.",
        ],
      },
      {
        heading: "Limits and criticism",
        list: [
          "Permaculture is a broad design philosophy, and many of its claims have not been tested in controlled research.",
          "Yields and labor needs vary widely, and perennial systems take years to establish.",
          "Techniques copied from one climate can fail in another.",
          "Many of its methods come from older indigenous and traditional farming, which deserve the credit.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for the hillside above Kakani shares several permaculture ideas: observe and measure first, hold water high on the slope, and build a layered forest of native and food plants.",
      "We describe the work as a syntropic food forest with watershed management. Whatever the label, plans will be judged by what we measure, including spring flow and tree survival.",
    ],
    related: ["what-is-a-food-forest", "what-is-syntropic-agriculture", "what-is-a-swale"],
  },
  {
    slug: "sheet-mulching",
    title: "What is sheet mulching?",
    metaTitle: "Sheet Mulching: How to Do It, Step by Step | ZenTrust",
    description:
      "Sheet mulching smothers grass and weeds under layers of cardboard, compost and mulch to make a new planting bed without digging. Steps and cautions.",
    shortAnswer:
      "Sheet mulching is a no-dig way to turn lawn or weedy ground into a planting bed. A light-blocking layer, usually cardboard or newspaper, is laid over the ground and covered with compost and mulch. The plants underneath die and rot, and the layers become soil.",
    sections: [
      {
        heading: "How to sheet mulch",
        list: [
          "Cut or flatten the existing growth and leave it in place.",
          "Water the ground well.",
          "Lay plain cardboard or several sheets of newspaper, overlapping the edges by a hand's width so no light gets through. Remove tape, staples and glossy printed sections.",
          "Wet the layer thoroughly.",
          "Add a few centimetres of compost or manure.",
          "Finish with a thick layer of mulch such as wood chips, straw or leaves.",
          "Wait several weeks to months before planting, or cut through the layer to plant larger plants straight away.",
        ],
      },
      {
        heading: "Why it works",
        list: [
          "Without light, grass and most weeds die back.",
          "Worms and soil life move up to feed on the rotting layers.",
          "The soil is not turned, so its structure and fungal networks stay intact.",
          "Mulch keeps the surface moist and cool.",
        ],
      },
      {
        heading: "Cautions",
        list: [
          "Strong perennial weeds such as bindweed or couch grass can push through and need follow-up.",
          "Thick, damp mulch can shelter slugs and rodents.",
          "Some horticultural researchers advise against cardboard because it can slow the movement of air and water into the soil, and recommend a deep layer of coarse wood chips alone.",
          "Keep mulch pulled back from tree trunks and plant stems to avoid rot.",
        ],
      },
      {
        heading: "When to do it",
        paragraphs: [
          "Sheet mulching is easiest to start a few months before you plan to plant, at a time of year when rain will keep the layers moist. That gives the layers time to break down.",
        ],
      },
    ],
    inChauthe: [
      "Cardboard-based sheet mulching suits gardens more than a 150-hectare hillside, so it is not part of ZenTrust's plan.",
      "The planned equivalent at forest scale is chop and drop: cutting support plants and leaving them on the ground so the soil around young trees stays covered.",
    ],
    related: ["chop-and-drop", "hugelkultur", "cover-crops"],
  },
  {
    slug: "what-is-soil-erosion",
    title: "What is soil erosion?",
    metaTitle: "What Is Soil Erosion? Causes, Types and Prevention | ZenTrust",
    description:
      "Soil erosion is the loss of topsoil to water, wind or tillage. Its causes, the main types, why it matters, and how to prevent it.",
    shortAnswer:
      "Soil erosion is the wearing away of the top layer of soil by water, wind or farming. Topsoil holds most of the organic matter, nutrients and life that plants depend on, and it forms very slowly, so losing it damages land for generations.",
    sections: [
      {
        heading: "Main types of water erosion",
        list: [
          "Splash erosion: raindrops hit bare soil and break it apart.",
          "Sheet erosion: a thin, even layer of soil washes off a slope, often unnoticed.",
          "Rill erosion: runoff gathers into small channels a few centimetres deep.",
          "Gully erosion: rills deepen into channels too large to smooth over with normal tillage.",
          "Bank erosion: streams and rivers undercut their banks.",
        ],
      },
      {
        heading: "What causes it",
        list: [
          "Bare soil after clearing, burning, ploughing or overgrazing.",
          "Steep or long slopes where runoff gathers speed.",
          "Intense rain, or wind over dry, loose soil.",
          "Roads, paths and drains that concentrate water into one flow.",
          "Loss of organic matter, which makes soil less able to soak up rain.",
        ],
      },
      {
        heading: "Why it matters",
        list: [
          "Crops and trees grow poorly in the thin, stony soil left behind.",
          "Less rain soaks in, so wells and springs are fed less.",
          "Washed-off soil silts up ponds, reservoirs and rivers and carries nutrients into waterways.",
          "Severe gullying can make land unusable and threaten houses and roads.",
        ],
      },
      {
        heading: "How to prevent it",
        list: [
          "Keep soil covered with living plants, crop residue or mulch.",
          "Slow water on slopes with contour planting, terraces, trenches and check dams.",
          "Maintain trees, shrubs and grass whose roots hold the soil.",
          "Spread runoff out instead of concentrating it.",
          "Act early: sheet and rill erosion are far easier to stop than gullies.",
        ],
      },
    ],
    inChauthe: [
      "Drone footage and site visits in Chauthe show bare ground under pine and active gullies. ZenTrust's plan is to slow runoff with contour trenches and check dams and to re-establish ground cover and mixed forest.",
      "We plan to record gullies and soil cover at fixed points from the start, so change can be tracked over time.",
    ],
    related: ["how-to-stop-erosion-on-a-slope", "check-dams", "what-is-a-watershed"],
  },
  {
    slug: "check-dams",
    title: "What is a check dam?",
    metaTitle: "Check Dams: What They Are and How They Work | ZenTrust",
    description:
      "A check dam is a small barrier across a gully or channel that slows water and traps soil. Types, basic design rules and common mistakes.",
    shortAnswer:
      "A check dam is a small, low barrier built across a gully or drainage channel. It slows the water, lets sediment settle behind it, and reduces the cutting power of the flow. Check dams are used in series to stabilize gullies, not to store water.",
    sections: [
      {
        heading: "How a check dam works",
        paragraphs: [
          "Fast water cuts a gully deeper and wider. A check dam turns one steep channel into a staircase of short, gentle steps. Water slows behind each dam, drops its sediment, and spills over the centre onto protected ground. Over time the trapped soil fills in behind the dam and plants take hold.",
        ],
      },
      {
        heading: "Common types",
        list: [
          "Loose stone: rock stacked without mortar, the most common type in hills.",
          "Brushwood or log: stakes woven with branches, suited to small gullies where stone is scarce.",
          "Gabion: stone held in wire baskets, for larger flows.",
          "Live check dams: cuttings or grasses planted across the channel so that roots take over as the structure ages.",
        ],
      },
      {
        heading: "Basic design rules",
        list: [
          "Keep each dam low. Several small dams are safer than one tall one.",
          "Make the centre lower than the sides, so water spills over the middle and not around the ends.",
          "Key the ends well into the gully banks.",
          "Protect the ground just below the dam with stone, so the falling water does not scour a hole.",
          "Space dams so that the top of one is about level with the base of the next one upstream.",
          "Start at the head of the gully and work downhill.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "Building too high, so the dam is pushed over or undercut.",
          "A flat top, which lets water cut around the sides.",
          "Treating the gully without slowing the runoff that feeds it from above.",
          "No planting, so nothing holds the trapped soil once the structure ages.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Small gullies can often be treated with hand-built stone or brush dams. Large gullies, permanent streams and channels near buildings or roads need an engineer's design and any required permits.",
        ],
      },
    ],
    inChauthe: [
      "Small check dams in existing gullies are part of ZenTrust's planned first-year work in Chauthe, alongside contour trenches and recharge ponds on the slope above.",
      "Sites and designs will be set with local technical advice and the community forest user group before construction.",
    ],
    related: ["how-to-stop-erosion-on-a-slope", "contour-trenches", "what-is-soil-erosion"],
  },
  {
    slug: "groundwater-recharge",
    title: "What is groundwater recharge?",
    metaTitle: "Groundwater Recharge: What It Is and How to Increase It | ZenTrust",
    description:
      "Groundwater recharge is rain and surface water soaking down to refill underground water. What controls it and practical ways to increase it.",
    shortAnswer:
      "Groundwater recharge is the process of water moving down from the surface, through soil and rock, to refill the underground stores that feed wells and springs. When more rain runs off than soaks in, those stores are not refilled and wells and springs decline.",
    sections: [
      {
        heading: "How recharge happens",
        paragraphs: [
          "Rain that lands on open, absorbent ground soaks into the soil. Plants use part of it. The rest moves deeper under gravity until it reaches a zone where the spaces in soil or rock are full of water. That stored water moves slowly downhill underground and comes out at springs, streams and wells.",
        ],
      },
      {
        heading: "What controls how much water soaks in",
        list: [
          "Ground cover: leaf litter, plants and mulch slow runoff and keep the soil surface open.",
          "Soil condition: soil rich in organic matter and roots absorbs water faster than bare, crusted or compacted soil.",
          "Slope: water has less time to soak in on steep ground.",
          "Rainfall pattern: gentle, steady rain soaks in more easily than short, intense storms.",
          "Geology: fractured or porous rock takes in water, while dense rock and clay layers block it.",
          "Hard surfaces: roofs, roads and paving shed almost all the rain that falls on them.",
        ],
      },
      {
        heading: "Ways to increase recharge",
        list: [
          "Protect and restore vegetation on the land above springs and wells.",
          "Slow runoff with contour trenches, terraces and check dams.",
          "Build recharge ponds and pits where runoff collects.",
          "Direct clean roof and yard runoff into soakaways instead of drains.",
          "Avoid compacting or sealing soil in known recharge areas.",
        ],
      },
      {
        heading: "Cautions",
        list: [
          "Recharge water must be clean. Polluted runoff can contaminate groundwater.",
          "Adding water to steep or unstable slopes can increase landslide risk.",
          "The land that feeds a spring is not always directly above it, so mapping the recharge area matters.",
          "Results can take seasons or years to show, and they depend on geology that is hard to see.",
        ],
      },
    ],
    inChauthe: [
      "Recharge is the centre of ZenTrust's plan for Chauthe. The first-year work is designed to help monsoon rain soak into the hillside through contour trenches, check dams and recharge ponds.",
      "We plan to measure spring flow before and during the work. Whether and how much the springs respond is what the monitoring is meant to show.",
    ],
    related: ["recharge-ponds", "why-are-springs-drying-up", "what-is-a-watershed"],
  },
  {
    slug: "what-is-agroforestry",
    title: "What is agroforestry?",
    metaTitle: "What Is Agroforestry? Types, Benefits and Trade-offs | ZenTrust",
    description:
      "Agroforestry is growing trees together with crops or livestock on the same land. The main types, benefits, trade-offs and how it differs from a food forest.",
    shortAnswer:
      "Agroforestry is the deliberate growing of trees and shrubs together with crops, livestock or both on the same land. The trees are managed as part of the farm, for products such as fruit, fodder and timber and for services such as shade, shelter and soil protection.",
    sections: [
      {
        heading: "Main types",
        list: [
          "Alley cropping: crops grown in the strips between rows of trees.",
          "Silvopasture: trees, pasture and grazing animals managed together.",
          "Windbreaks and shelterbelts: tree lines that protect crops, animals and soil from wind.",
          "Riparian buffers: trees and shrubs along streams to hold banks and filter runoff.",
          "Forest farming: shade-tolerant crops grown under a managed tree canopy.",
          "Home gardens: dense, mixed plantings of trees and crops around houses, common across the tropics.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "More than one product from the same land, which spreads risk.",
          "Tree roots and leaf litter protect and build soil.",
          "Shade and shelter for crops and animals in heat and wind.",
          "More habitat for birds, insects and other wildlife than open fields.",
          "Carbon stored in wood and soil.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Trees compete with crops for light, water and nutrients if spacing and species are wrong.",
          "Trees take years to pay back, so early income is lower.",
          "Mixed systems need more knowledge and are harder to mechanize.",
          "Secure land or tree rights matter: people rarely plant trees they may not be allowed to harvest.",
        ],
      },
      {
        heading: "Agroforestry and food forests",
        paragraphs: [
          "A food forest is one form of agroforestry: a dense, multi-layered planting designed to resemble a natural forest. Syntropic agriculture is a method of establishing such systems through dense planting, succession and heavy pruning.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for the community forest above Kakani is a form of agroforestry: native trees, fruit, fodder and ground cover planted among existing pine, with the pine thinned gradually only where the user group and forest office approve.",
      "What may be planted and harvested is governed by the community forest's own plan and Nepal's forest rules, so species and benefit-sharing will be agreed with the user group first.",
    ],
    related: ["what-is-a-food-forest", "what-is-syntropic-agriculture", "nitrogen-fixing-trees"],
  },
  {
    slug: "what-is-composting",
    title: "What is composting, and how do you make compost?",
    metaTitle: "What Is Composting? How to Make Compost, Simply | ZenTrust",
    description:
      "Composting turns food scraps, leaves and manure into dark, crumbly soil food. How it works, what to add, a simple method and common problems.",
    shortAnswer:
      "Composting is the controlled rotting of plant and food waste by microbes, worms and fungi until it becomes compost: a dark, crumbly material that feeds soil life and helps soil hold water. A good pile needs a mix of 'greens' and 'browns', air and moisture.",
    sections: [
      {
        heading: "How composting works",
        paragraphs: [
          "Bacteria and fungi break down fresh organic matter, then worms, insects and other small creatures finish the job. In a well-built pile the microbes work so fast that the middle heats up, which speeds decomposition and kills many weed seeds.",
          "The finished compost is not just fertilizer. It is mostly stable organic matter and living organisms that improve soil structure, so soil drains better when wet and holds more water when dry.",
        ],
      },
      {
        heading: "Greens and browns",
        list: [
          "Greens (rich in nitrogen): fresh grass clippings, vegetable scraps, fresh weeds without seeds, fresh manure from plant-eating animals.",
          "Browns (rich in carbon): dry leaves, straw, shredded cardboard, small twigs, sawdust from untreated wood.",
          "A common rule of thumb is roughly two to three parts browns to one part greens by volume.",
          "Too many greens: the pile turns slimy and smells. Too many browns: it sits and barely changes.",
        ],
      },
      {
        heading: "A simple method",
        list: [
          "Choose a shaded spot on bare ground so worms can move in.",
          "Start with coarse twigs at the bottom for air, then build alternating layers of browns and greens.",
          "Keep it as damp as a wrung-out sponge.",
          "Turn or fork the pile every week or two to add air; it will finish faster.",
          "Compost is ready when it is dark, crumbly and smells like a forest floor, often in two to six months.",
        ],
      },
      {
        heading: "What to keep out of a home pile",
        list: [
          "Meat, fish, dairy and oily food, which attract animals and smell.",
          "Pet and human waste, which can carry disease unless handled in a properly designed system.",
          "Diseased plants and weeds that have set seed, unless the pile gets truly hot.",
          "Treated wood, glossy printed paper and plastic-coated items.",
        ],
      },
    ],
    inChauthe: [
      "Compost is planned for the community nursery, where native and fruit seedlings will be raised in soil enriched with compost made from local leaf litter, crop residues and manure.",
      "On the hillside itself, the plan relies mostly on mulch and 'chop and drop' pruning, which compost in place on the ground without hauling material uphill.",
    ],
    related: ["what-is-mulch", "what-is-topsoil", "chop-and-drop"],
  },
  {
    slug: "what-is-mulch",
    title: "What is mulch, and why use it?",
    metaTitle: "What Is Mulch? Benefits, Types and How to Use It | ZenTrust",
    description:
      "Mulch is a layer of material laid over soil. Its benefits for water, weeds and soil life, the main types, how thick to lay it and common mistakes.",
    shortAnswer:
      "Mulch is any layer of material spread on top of soil, such as wood chips, straw, leaves or compost. It shields the soil from sun, rain and wind, so the soil stays moist and cool, weeds struggle, and soil life has food as the mulch slowly breaks down.",
    sections: [
      {
        heading: "Benefits of mulching",
        list: [
          "Less evaporation, so soil stays moist longer between rains or watering.",
          "Rain soaks in instead of hammering and sealing the bare surface.",
          "Fewer weeds, because light can't reach their seeds.",
          "Steadier soil temperature: cooler in summer, less frozen in winter.",
          "Organic mulches feed worms, fungi and microbes as they rot, building soil over time.",
          "Less soil splashed or washed away in heavy rain.",
        ],
      },
      {
        heading: "Main types of mulch",
        list: [
          "Wood chips: long-lasting, good around trees and shrubs and on paths.",
          "Straw: light and quick to break down, common in vegetable beds (use straw, not seedy hay).",
          "Leaves: free in autumn; shredding stops them matting into a soggy layer.",
          "Compost: feeds soil fast but breaks down quickly and suppresses weeds less.",
          "Living mulch: low ground-cover plants that keep the soil covered all the time.",
          "Inorganic mulches such as gravel or plastic sheet hold moisture but do not feed the soil.",
        ],
      },
      {
        heading: "How to mulch well",
        list: [
          "Lay it on moist soil, after rain or watering, not on dry ground.",
          "Aim for about 5 to 10 cm (2 to 4 inches) for coarse mulch; thinner for fine material.",
          "Keep mulch a hand's width away from tree trunks and plant stems to avoid rot.",
          "Top it up as it breaks down; a mulched surface should never return to bare soil.",
        ],
      },
      {
        heading: "Common mistakes",
        list: [
          "'Mulch volcanoes' piled against tree trunks.",
          "Mulch so thick and fine that water and air can't get through.",
          "Using weed-filled hay or material sprayed with persistent herbicides.",
        ],
      },
    ],
    inChauthe: [
      "Keeping soil covered is central to the plan for the hillside above Kakani. Pine needles, pruned branches and ground-cover plants are planned as mulch around new plantings so monsoon rain soaks in instead of running off.",
      "Because pine needles burn easily in the dry season, the plan is to mix them with greener material and keep firebreaks, agreed with the community forest user group.",
    ],
    related: ["sheet-mulching", "chop-and-drop", "what-is-composting"],
  },
  {
    slug: "what-is-an-aquifer",
    title: "What is an aquifer, and what is the water table?",
    metaTitle: "What Is an Aquifer? Aquifers and the Water Table, Explained | ZenTrust",
    description:
      "An aquifer is underground rock or soil that holds and passes water. What the water table is, how aquifers refill, and why wells and springs dry up.",
    shortAnswer:
      "An aquifer is a layer of underground rock, sand or gravel that holds water in its pores and cracks and lets it move, so wells and springs can draw from it. The water table is the top of the zone where the ground is completely soaked with water.",
    sections: [
      {
        heading: "How water gets underground",
        paragraphs: [
          "When rain falls on land, some runs off, some evaporates or is used by plants, and some soaks down through the soil. The water that keeps moving down past the roots eventually reaches a zone where every gap is full of water. That zone is groundwater, and its upper surface is the water table.",
          "The water table is not flat. It roughly follows the shape of the land and rises after wet seasons and falls in dry ones or when water is pumped out faster than it is replaced.",
        ],
      },
      {
        heading: "Types of aquifers",
        list: [
          "Unconfined aquifers: open to the surface above them, so they refill directly from rain soaking in. Many shallow wells and springs draw from these.",
          "Confined aquifers: trapped between layers of clay or solid rock. They refill only where the layer reaches the surface, sometimes far away, and can take very long to recover.",
          "Fractured-rock aquifers: water moves through cracks in hard rock, common in mountains. They hold less water and respond quickly to how much rain soaks in nearby.",
        ],
      },
      {
        heading: "Where springs come from",
        paragraphs: [
          "A spring appears where the water table meets the ground surface, or where groundwater flowing along a crack or layer comes out on a slope. If less rain soaks in uphill, or more is pumped, the water table drops and springs weaken or dry, often first in the dry season.",
        ],
      },
      {
        heading: "Why aquifers are falling in many places",
        list: [
          "Pumping more water than rain replaces.",
          "Paving, compaction and bare soil that make rain run off instead of soaking in.",
          "Loss of forest and ground cover in recharge areas.",
          "Changes in rainfall patterns, with more intense storms and longer dry spells.",
        ],
      },
    ],
    inChauthe: [
      "Springs in Nepal's middle hills mostly come from shallow, fractured-rock aquifers that refill from rain soaking in on nearby slopes. That makes what happens on the hillside directly important for the water downhill.",
      "ZenTrust plans contour trenches, recharge ponds and layered tree cover so more monsoon rain soaks in, and plans to record spring flow over the years. These are plans; results will be measured, not assumed.",
    ],
    related: ["groundwater-recharge", "why-are-springs-drying-up", "what-is-a-watershed"],
  },
  {
    slug: "what-is-topsoil",
    title: "What is topsoil, and what is humus?",
    metaTitle: "What Is Topsoil? Topsoil, Humus and Subsoil Explained | ZenTrust",
    description:
      "Topsoil is the dark upper layer of soil where most roots and soil life live. What humus is, how topsoil forms, and why losing it matters.",
    shortAnswer:
      "Topsoil is the upper layer of soil, usually the top 5 to 30 cm, where most roots, organic matter and soil life are found. Humus is the dark, stable organic matter in topsoil, left after plant and animal material has decomposed, which helps soil hold water and nutrients.",
    sections: [
      {
        heading: "The layers of soil",
        list: [
          "Leaf litter: fallen leaves and twigs on the surface, often thin or missing on farmed or eroded land.",
          "Topsoil: dark, crumbly and full of roots, fungi, worms and microbes.",
          "Subsoil: lighter in color, with less organic matter and life; often heavier with clay.",
          "Parent material and bedrock: the broken and solid rock that soil slowly forms from.",
        ],
      },
      {
        heading: "What humus does",
        list: [
          "Acts like a sponge, holding water that plants can use between rains.",
          "Holds onto nutrients so they are not washed away.",
          "Glues soil particles into crumbs, leaving spaces for air, water and roots.",
          "Gives topsoil its dark color, which also helps it warm in spring.",
        ],
      },
      {
        heading: "How topsoil forms, and how it is lost",
        paragraphs: [
          "Topsoil forms very slowly as rock weathers and plants, roots and soil life add organic matter. Building a few centimeters can take many decades or longer, while heavy rain on bare ground can strip it away in a few storms.",
          "Most topsoil loss comes from erosion by water and wind on bare or heavily tilled land, from compaction, and from organic matter being used up faster than it is returned.",
        ],
      },
      {
        heading: "How to protect and rebuild it",
        list: [
          "Keep soil covered with plants or mulch all year.",
          "Keep living roots in the ground as much as possible.",
          "Return organic matter: compost, mulch, crop residues, pruned material.",
          "Disturb soil less: reduce digging and plowing where you can.",
          "Slow water on slopes so it soaks in instead of carrying soil away.",
        ],
      },
    ],
    inChauthe: [
      "Parts of the Chauthe hillside show thin, exposed soil and erosion gullies under pine. Rebuilding topsoil is planned through ground cover, mulch, pruned material left on the ground, and trenches that slow runoff.",
      "The program is in its planning and setup stage, and soil changes will be described only once they are measured.",
    ],
    related: ["what-is-soil-erosion", "what-is-composting", "cover-crops"],
  },
  {
    slug: "no-till-farming",
    title: "What is no-till farming?",
    metaTitle: "What Is No-Till Farming? No-Till and No-Dig, Explained | ZenTrust",
    description:
      "No-till farming grows crops without plowing or digging the soil. How it works, its benefits for soil and water, its trade-offs, and no-dig gardening.",
    shortAnswer:
      "No-till farming means growing crops without plowing, digging or turning the soil. Seeds are planted directly into the previous crop's residue or a mulch, which protects the surface, so soil structure, fungi and organic matter are left largely undisturbed.",
    sections: [
      {
        heading: "Why stop tilling?",
        paragraphs: [
          "Plowing loosens soil and buries weeds, but it also breaks up the crumb structure and fungal networks that hold soil together, speeds the loss of organic matter, and leaves the surface bare and easy to wash away.",
          "Without tillage, old roots leave channels that let water soak in, the surface stays covered with residue, and soil life rebuilds structure over a few years.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Less erosion, because the surface stays covered.",
          "Better water infiltration and less runoff over time.",
          "More soil organic matter near the surface.",
          "Less fuel, labor and machinery than repeated plowing.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Weeds must be managed another way; many large farms rely on herbicides, which some growers want to avoid.",
          "Soil can be cooler and wetter in spring, so planting may be slower.",
          "Benefits build over several years, and the first seasons can see lower yields.",
          "It works best combined with cover crops and diverse rotations, not on its own.",
        ],
      },
      {
        heading: "No-dig gardening",
        paragraphs: [
          "In gardens the same idea is often called no-dig. Instead of digging, gardeners add compost or mulch on top each year and plant into it, letting worms and roots do the mixing. Sheet mulching is a common way to start a no-dig bed on grass.",
        ],
      },
    ],
    inChauthe: [
      "The planned food forest above Kakani is a no-dig system by design: trees, shrubs and ground cover are planted into small pits, and soil is built from mulch and pruned material on the surface rather than by plowing the slope.",
      "Digging is planned only for contour trenches and small ponds to slow water, and only where the community forest user group agrees.",
    ],
    related: ["sheet-mulching", "cover-crops", "what-is-topsoil"],
  },
  {
    slug: "what-is-desertification",
    title: "What is desertification?",
    metaTitle: "What Is Desertification? Causes, Effects and Solutions | ZenTrust",
    description:
      "Desertification is land in dry regions losing its ability to support plants, water and people. Causes, effects and what can reverse it.",
    shortAnswer:
      "Desertification is land degradation in dry areas: soil, water and vegetation decline until the land can support far less life. It is not deserts simply spreading. It is mostly caused by how land is used, made worse by drought and climate change.",
    sections: [
      {
        heading: "What desertification is, and isn't",
        paragraphs: [
          "The UN defines desertification as land degradation in arid, semi-arid and dry sub-humid areas resulting from various factors, including climatic variations and human activities. The land does not have to turn into sand dunes; it loses soil, cover and the ability to hold water.",
          "Similar degradation happens in wetter places too, including hill regions, where it is usually called land degradation.",
        ],
      },
      {
        heading: "Main causes",
        list: [
          "Overgrazing that strips vegetation and compacts soil.",
          "Clearing forest and shrubs for farming, fuel or timber.",
          "Farming that leaves soil bare, or overuses water for irrigation.",
          "Drought and rising temperatures that stress already weakened land.",
        ],
      },
      {
        heading: "Effects",
        list: [
          "Topsoil blows or washes away and harvests fall.",
          "Rain runs off instead of soaking in, so wells and springs decline.",
          "More dust storms and more severe floods after heavy rain.",
          "People are pushed into poverty or forced to move.",
        ],
      },
      {
        heading: "What helps reverse it",
        list: [
          "Restoring plant cover: trees, shrubs, grasses and ground cover.",
          "Slowing and storing water with trenches, half-moon pits, terraces and check dams.",
          "Better grazing management that lets land rest and recover.",
          "Farmer-managed natural regeneration: protecting and pruning tree stumps and roots that are already there.",
          "Local ownership: restoration lasts when the people who use the land lead and benefit.",
        ],
      },
    ],
    inChauthe: [
      "Chauthe is not a desert, but its hillside shows some of the same signs: thin soil, gullies and springs that people say have weakened over the years.",
      "ZenTrust's plan uses the same tools that work against desertification: slowing water on the slope, covering the soil, and planting diverse native trees, with the community forest user group in charge of the land.",
    ],
    related: ["what-is-soil-erosion", "how-to-stop-erosion-on-a-slope", "groundwater-recharge"],
  },
  {
    slug: "companion-planting",
    title: "What is companion planting?",
    metaTitle: "Companion Planting: What It Is and What Actually Works | ZenTrust",
    description:
      "Companion planting means growing plants together so they help each other. The ideas behind it, classic pairings, the Three Sisters and what evidence supports.",
    shortAnswer:
      "Companion planting is growing different plants close together because they help each other: by sharing space and light well, feeding the soil, attracting helpful insects or confusing pests. Some pairings are well supported; many popular charts are folklore.",
    sections: [
      {
        heading: "How companions can help each other",
        list: [
          "Nitrogen fixing: beans, peas and clover host bacteria that add nitrogen to the soil over time.",
          "Physical support and shade: tall plants support climbers or shade plants that prefer less sun.",
          "Ground cover: low, spreading plants keep soil covered and shade out weeds.",
          "Attracting beneficial insects: flowering herbs such as dill, coriander and alyssum feed predators of pests.",
          "Trap crops: a plant pests prefer, grown to draw them away from the main crop.",
        ],
      },
      {
        heading: "The Three Sisters",
        paragraphs: [
          "A well-known example from Indigenous agriculture in the Americas grows maize, climbing beans and squash together. The maize supports the beans, the beans add nitrogen, and the squash's broad leaves shade the soil and suppress weeds.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Mixed planting in general (intercropping) is well studied and often gives more total harvest from the same land and fewer pest outbreaks than single crops. Specific claims about one plant 'loving' or 'hating' another are often untested.",
          "Treat companion charts as ideas to try, and watch what happens in your own garden.",
        ],
      },
      {
        heading: "Tips",
        list: [
          "Give each plant enough light, water and space; crowding causes more harm than any bad 'pairing'.",
          "Mix heights and root depths so plants share resources rather than compete for the same ones.",
          "Add flowers throughout the garden for pollinators and pest predators.",
        ],
      },
    ],
    inChauthe: [
      "A food forest is companion planting at the scale of a hillside. The plan for Chauthe pairs nitrogen-fixing support trees with native and fruit trees, and fills lower layers with shrubs, herbs and ground cover.",
      "Species will be chosen with the community forest user group and local nurseries, favoring plants that already grow well in the area.",
    ],
    related: ["crop-rotation-and-intercropping", "nitrogen-fixing-trees", "food-forest-layers"],
  },
  {
    slug: "what-is-a-rain-garden",
    title: "What is a rain garden?",
    metaTitle: "What Is a Rain Garden? How It Works and How to Build One | ZenTrust",
    description:
      "A rain garden is a shallow planted dip that catches runoff from roofs and paving so it soaks in. How it works, where to put it, plants and steps.",
    shortAnswer:
      "A rain garden is a shallow, planted hollow that collects rainwater running off roofs, driveways and lawns, and lets it soak into the ground within a day or two. It reduces runoff and flooding, filters pollutants and refills groundwater.",
    sections: [
      {
        heading: "How a rain garden works",
        paragraphs: [
          "Hard surfaces send rain straight into drains and streams, carrying soil, oil and fertilizer with it. A rain garden intercepts that water in a shallow basin. Deep-rooted plants and loose soil let it infiltrate, and soil microbes and roots help break down or trap pollutants.",
          "A well-built rain garden drains within about a day or two, so it does not hold standing water long enough for mosquitoes to breed.",
        ],
      },
      {
        heading: "Where to put one",
        list: [
          "Where runoff naturally flows, such as below a downspout or at the low edge of a lawn.",
          "At least about 3 m (10 ft) from building foundations, so water does not seep into basements.",
          "Not over septic systems, utility lines or areas where water already ponds for days.",
          "Test drainage first: dig a hole, fill it with water, and check it empties within a day.",
        ],
      },
      {
        heading: "Building it",
        list: [
          "Size: often about a fifth to a third of the roof or paved area that drains to it, depending on soil.",
          "Depth: usually 10 to 20 cm (4 to 8 inches), with a level bottom.",
          "Loosen the soil and mix in compost if it is heavy clay.",
          "Plant deep-rooted, preferably native plants that tolerate both short flooding and dry spells.",
          "Mulch the surface and add stones where water enters, so it does not scour the soil.",
        ],
      },
    ],
    inChauthe: [
      "The same principle, catch runoff and let it soak in, is behind the recharge ponds and contour trenches planned on the hillside above Kakani.",
      "In villages, small planted basins below roofs and paths are one simple idea ZenTrust plans to share alongside the hillside work.",
    ],
    related: ["recharge-ponds", "rainwater-harvesting-in-the-hills", "groundwater-recharge"],
  },
  {
    slug: "crop-rotation-and-intercropping",
    title: "What are crop rotation and intercropping?",
    metaTitle: "What Is Crop Rotation? Crop Rotation and Intercropping | ZenTrust",
    description:
      "Crop rotation changes which crop grows where each season; intercropping grows crops side by side. How each works, benefits and simple examples.",
    shortAnswer:
      "Crop rotation means growing different types of crops in the same place in a planned sequence over seasons or years. Intercropping means growing two or more crops in the same field at the same time. Both use diversity to protect soil and reduce pests.",
    sections: [
      {
        heading: "Crop rotation",
        paragraphs: [
          "Growing the same crop in the same spot year after year lets its particular pests and diseases build up and drains the same nutrients. Rotating breaks those cycles.",
          "A simple garden rotation moves four groups around four beds: legumes (beans, peas), then leafy crops that use the nitrogen they leave, then fruiting crops (tomatoes, squash), then roots.",
        ],
      },
      {
        heading: "Benefits of rotation",
        list: [
          "Fewer soil-borne pests and diseases.",
          "Legumes in the sequence add nitrogen for the next crop.",
          "Different root depths use and build soil at different levels.",
          "Including cover crops or pasture in the rotation keeps soil covered.",
        ],
      },
      {
        heading: "Intercropping",
        list: [
          "Mixed intercropping: crops grown together with no set pattern.",
          "Row intercropping: alternating rows, such as maize with beans or soybean.",
          "Strip intercropping: wider strips that can still be worked separately.",
          "Relay intercropping: a second crop sown into the first before it is harvested.",
        ],
      },
      {
        heading: "Benefits and trade-offs of intercropping",
        paragraphs: [
          "Intercrops often produce more total harvest per area than the same crops grown separately, cover the soil better and lower the risk of losing everything to one pest or bad season. They are harder to mechanize and need careful choice of crops that don't compete too strongly.",
        ],
      },
    ],
    inChauthe: [
      "Farmers in Nepal's hills have long mixed crops, such as maize with beans or millet on terraces. A food forest takes that diversity further, with many species growing together permanently.",
      "Between young trees on the hillside, the plan includes short-lived ground covers and support plants that will change as the forest grows, a kind of rotation in time.",
    ],
    related: ["companion-planting", "cover-crops", "terrace-farming"],
  },
  {
    slug: "what-is-a-water-table",
    title: "What is a water table?",
    metaTitle: "What Is a Water Table? Plain-Language Guide | ZenTrust",
    description: "The water table is the top of the soaked zone underground. How it forms, why it rises and falls, and how it links to wells, springs and land use.",
    shortAnswer: "The water table is the upper surface of groundwater: the level below which the soil and rock are fully soaked with water. Above it, the ground holds some water but also air. The water table rises when rain soaks in and falls when water drains away, is pumped out or is taken up by plants.",
    sections: [
      {
        heading: "Two zones under your feet",
        paragraphs: [
          "Below the surface, the ground has two main zones. In the upper zone, the gaps between soil grains and in the rock hold a mix of air and water. This is called the unsaturated zone. Lower down, every gap is filled with water. This is the saturated zone, and the water in it is groundwater.",
          "The water table is the boundary between the two. It is not a lake or an underground river. It is simply the level where the ground becomes fully soaked.",
        ],
      },
      {
        heading: "What the water table looks like",
        list: [
          "It usually follows the shape of the land in a gentler form, higher under hills and lower near valleys.",
          "It can be near the surface in wetlands and river valleys, and much deeper on ridges and in dry regions.",
          "Groundwater slowly moves from where the water table is higher to where it is lower.",
          "In some places a layer of clay or solid rock traps water above the main water table. This is called a perched water table.",
        ],
      },
      {
        heading: "Why it rises and falls",
        paragraphs: [
          "The water table changes with the balance between water coming in and water going out. It tends to rise after a wet season and fall during dry months.",
        ],
        list: [
          "Rain and snowmelt that soak into the ground raise it. This is called recharge.",
          "Water flowing out to springs, streams and rivers lowers it.",
          "Pumping from wells lowers it, especially near the well.",
          "Plants draw water from the soil and release it into the air, which can lower it where roots reach deep enough.",
          "Long droughts reduce recharge, so it falls over time.",
        ],
      },
      {
        heading: "Wells, springs and streams",
        paragraphs: [
          "Most ordinary wells only yield water if they reach below the water table. If the water table drops below the bottom of a well, the well can go dry.",
          "A spring often appears where the water table meets the ground surface, such as on a hillside or at the foot of a slope. Others flow from cracks, faults or deeper layers of rock. When the water table falls, springs can weaken or stop flowing. Many streams are also fed by groundwater between rains, which keeps them running in dry seasons, though some streams lose water to the ground instead.",
        ],
      },
      {
        heading: "How land use affects it",
        list: [
          "Paving, compaction and bare, crusted soil reduce how much rain soaks in, so more runs off.",
          "Healthy soil with organic matter and plant cover lets more water infiltrate.",
          "Trenches, ponds and other structures that slow runoff can give water more time to soak in.",
          "Heavy pumping can lower the water table faster than rain can refill it.",
          "Vegetation type matters, but its overall effect depends on climate, soil and geology, so results vary by site.",
        ],
      },
      {
        heading: "Finding out about your local water table",
        paragraphs: [
          "The simplest guide is the water level in nearby wells, measured at different times of year. Local water agencies, geological surveys and well drillers often have records. Underground geology varies a lot over short distances, so a hydrogeologist or local water authority is the best source before drilling or building recharge works, and permits may be needed.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust reports that springs below its planned site in Chauthe, Nepal, are drying. ZenTrust describes the pine monoculture on the hillside as a major cause, which it plans to measure.",
      "In Year 1 the plan is to hold water on the slope with contour trenches, small check dams and recharge ponds, so more rain has a chance to soak in. How much of that water reaches the groundwater that feeds the springs will depend on the local soil and rock. Work on the hillside has not started yet.",
    ],
    related: [
      "what-is-an-aquifer",
      "groundwater-recharge",
      "how-do-springs-work",
      "what-is-infiltration",
    ],
  },
  {
    slug: "what-is-humus",
    title: "What is humus?",
    metaTitle: "What Is Humus? Soil's Dark Organic Matter Explained | ZenTrust",
    description: "Humus is the dark, well-decomposed part of soil organic matter. What it is, how it forms, why it matters for water and nutrients, and how to build it.",
    shortAnswer: "Humus is the dark, well-decomposed part of soil organic matter. It forms as plants, roots and soil organisms break down until the original material can no longer be recognized. Humus helps soil hold water and nutrients, helps bind soil into crumbs and gives healthy topsoil its dark color.",
    sections: [
      {
        heading: "Humus in plain terms",
        paragraphs: [
          "Soil organic matter is the material in soil that comes from once-living things, from fresh leaves and roots to dead microbes and fully broken-down material. Humus is the far end of that range. It is dark, crumbly and no longer looks like leaves or wood.",
          "Humus is not the same as compost. Finished compost contains some humus-like material, but it also holds partly decomposed matter that keeps breaking down in the soil. The word is also unrelated to hummus, the chickpea dip.",
        ],
      },
      {
        heading: "How humus forms",
        paragraphs: [
          "Fungi, bacteria, earthworms, insects and other soil life feed on dead plant material. Much of the carbon in that material is released back to the air as carbon dioxide. A smaller share stays behind as stable organic compounds, including the remains of the microbes themselves.",
          "Scientists' understanding of humus has shifted over time. The older picture was of large, distinct humus molecules. Many researchers now describe it as a mix of decomposing material at many stages, kept in the soil partly because it sticks to clay and other mineral particles or is locked inside soil crumbs. The debate is not fully settled, and the word humus is still widely used for the dark, stable part of soil organic matter.",
        ],
      },
      {
        heading: "Why humus matters",
        list: [
          "Holds water like a sponge, which helps soil stay moist between rains.",
          "Holds nutrients such as calcium, magnesium and potassium so they are less easily washed away.",
          "Helps bind soil particles into crumbs, which leaves space for air, roots and water to move.",
          "Releases nutrients slowly as it continues to break down.",
          "Helps soil resist sudden changes in acidity.",
          "Stores carbon in the ground.",
        ],
      },
      {
        heading: "Humus in forests",
        paragraphs: [
          "In forests, humus builds up from falling leaves, needles and dead roots. Soil scientists describe several types, and two at opposite ends are mull and mor. Mull humus is mixed into the mineral soil by earthworms and other animals, and is typical under many broadleaf trees. Mor humus sits as a distinct, often acidic mat on top of the mineral soil and is typical where litter breaks down slowly, as under many conifers. An in-between type is called moder.",
          "The type that forms depends on the trees, the climate, the soil and the animals living in it, so forest floors vary a great deal from place to place.",
        ],
      },
      {
        heading: "How to build and protect humus",
        list: [
          "Keep soil covered with plants, mulch or leaf litter rather than bare.",
          "Keep living roots in the ground for as much of the year as possible.",
          "Add organic material such as compost, chopped prunings or crop residue.",
          "Disturb soil less, since heavy digging and plowing speed up the loss of organic matter.",
          "Prevent erosion, because most humus sits in the topsoil layer, which erosion strips first.",
          "Avoid burning residues where possible, as fire removes the material humus is made from.",
        ],
        paragraphs: [
          "Humus builds slowly, over many seasons, and can be lost much faster than it forms. Results depend on climate and soil type, so local soil or extension advice is useful.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside in Chauthe has not started. The land is community forest of the Thumki Danda Gairikharka Community Forest User Group (CFUG). The plan's first year focuses on holding water. In years two and three, ZenTrust plans to plant in layers, with native and fruit trees, nitrogen fixers and ground cover. That planting is intended, over time, to add more varied leaf litter and roots to the soil. No results are being claimed yet.",
      "Pine will be thinned only where the CFUG and the Division Forest Office approve. Species will be chosen with the CFUG and local nurseries.",
    ],
    related: [
      "what-is-soil-organic-matter",
      "what-is-topsoil",
      "what-is-composting",
      "what-is-mulch",
      "what-is-soil-erosion",
    ],
  },
  {
    slug: "what-is-silvopasture",
    title: "What is silvopasture?",
    metaTitle: "Silvopasture: Trees, Pasture and Livestock Together | ZenTrust",
    description: "Silvopasture combines trees, forage and grazing animals on the same land. How it works, common designs, benefits and the trade-offs to plan for.",
    shortAnswer: "Silvopasture is a type of agroforestry that deliberately manages trees, forage plants and grazing livestock together on the same land. The trees give shade, shelter and products such as timber, fruit or fodder. The pasture feeds the animals. Careful grazing keeps the system in balance.",
    sections: [
      {
        heading: "What silvopasture means",
        paragraphs: [
          "The word joins \"silva,\" Latin for forest, with \"pasture.\" It is one of the main forms of agroforestry, alongside practices such as alley cropping and windbreaks.",
          "It is not the same as letting animals wander through a forest. In silvopasture the trees, the forage and the grazing are all planned and managed. Unmanaged grazing in woodland often harms young trees and compacts soil.",
        ],
      },
      {
        heading: "How it is set up",
        list: [
          "Planting trees into existing pasture, often in rows or wide-spaced clusters.",
          "Thinning an existing woodland enough to let light reach the ground, then establishing forage.",
          "Using fodder trees or shrubs that animals can browse, or that can be cut as extra feed.",
          "Pairing trees with fences or rotational paddocks so animals move before they overgraze.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Shade and shelter that can reduce heat and wind stress on animals.",
          "More than one product from the same land: livestock plus wood, fruit, nuts or fodder.",
          "Tree roots that help hold soil and can improve how water soaks into the ground.",
          "Leaf litter and manure that add organic matter to the soil.",
          "More varied habitat than open pasture alone.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Young trees need protection from browsing, rubbing and trampling for several years.",
          "Too much shade can reduce forage growth, so tree spacing and pruning matter.",
          "It usually takes more planning and labor than either grazing or forestry alone.",
          "Benefits build slowly because trees take years to mature.",
          "Thinning or planting trees may require permits or approval from forest authorities.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Begin with the main goal, whether that is animal comfort, extra income from trees or better soil. Then choose tree and forage species suited to the local climate and the animals being kept. Plan how grazing will be rotated and how young trees will be protected. Local extension services, forestry offices and experienced graziers can help match a design to the site.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is still at the planning and setup stage, and work on the Chauthe hillside has not started. Silvopasture is not part of the plan as it is currently described.",
      "The plan does share one idea with silvopasture: combining trees with a managed ground layer. In years 2 to 3 it plans to plant native and fruit trees, nitrogen fixers and ground cover, with species to be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries. As with any tree work, approval matters: pine is to be thinned only where the user group and the Division Forest Office approve.",
    ],
    related: [
      "what-is-agroforestry",
      "nitrogen-fixing-trees",
      "coppicing-and-pollarding",
      "living-fences-and-hedgerows",
    ],
  },
  {
    slug: "how-to-start-a-tree-nursery",
    title: "How do you start a tree nursery?",
    metaTitle: "How to Start a Tree Nursery: A Simple Guide | ZenTrust",
    description: "A practical guide to starting a small tree nursery: choosing a site, sourcing seed, containers, potting mix, care, hardening off and planting out.",
    shortAnswer: "To start a tree nursery, choose a sheltered site near water and decide which species you need. Collect seed from healthy local trees, or buy it from a trusted local source. Grow seedlings in beds or containers with a simple potting mix. Water and shade them while young, then harden them off and plant them out once the rains have settled in.",
    sections: [
      {
        heading: "Plan before you plant",
        paragraphs: [
          "A nursery is a place to raise young trees until they are strong enough to survive in the field. Start from the end goal. Decide what the trees are for, where they will go and roughly how many you need. Then work backward to plan when to sow, because many trees need several months or more in the nursery before planting out.",
          "Choose species suited to the local climate, soil and elevation. Native species and trees already known to grow well nearby are usually the safest choice.",
        ],
      },
      {
        heading: "Choosing a site",
        list: [
          "A reliable water source close by, since seedlings need regular watering.",
          "Flat or gently terraced ground that drains well and does not flood.",
          "Some shelter from strong wind and harsh afternoon sun.",
          "Protection from livestock and other animals, such as a fence or living hedge.",
          "Easy access for people to work and to carry seedlings out.",
        ],
      },
      {
        heading: "Seed and planting material",
        paragraphs: [
          "Collect seed from several healthy, well-formed local trees of the same species, not just one. Using several parents keeps genetic variety. Using local trees gives seedlings that are more likely to suit local conditions. Collect only ripe seed. Many seeds store well dry and cool, but some die if they dry out and must be sown fresh, so check what each species needs.",
          "Some species need treatment before they sprout. Common methods include soaking in water, nicking or scratching a hard seed coat, or a period of cold and moisture. Some trees grow more easily from cuttings than from seed. Local foresters and nurseries can say what works for each species. In community or public forests, check the rules before collecting seed.",
        ],
      },
      {
        heading: "Beds, containers and potting mix",
        list: [
          "Seedbeds: seeds are sown close together, then young seedlings are moved into their own containers.",
          "Containers: plastic bags, pots, reusable trays or biodegradable pots. They should have drainage holes.",
          "Potting mix: often a blend of local soil, sand or fine grit, and well-rotted compost.",
          "A little soil from under healthy trees of the same species can bring in beneficial soil fungi. It can also carry pests or disease, so take it only from healthy sites.",
          "Deeper containers suit species with long taproots.",
        ],
      },
      {
        heading: "Daily care",
        list: [
          "Water gently and regularly. Avoid both drying out and waterlogging.",
          "Give most young seedlings partial shade, then reduce it as they grow.",
          "Remove weeds from beds and containers.",
          "Check for pests and disease, and space containers so air can move.",
          "Move containers or trim roots that grow out of the bottom so they do not root into the ground. Do not keep seedlings in small containers so long that their roots circle.",
          "Keep simple records of species, sowing dates and seed sources.",
        ],
      },
      {
        heading: "Hardening off and planting out",
        paragraphs: [
          "In the last weeks before planting, harden seedlings off. Gradually reduce shade and water so they get used to field conditions. A good seedling has a sturdy stem, healthy leaves and a firm root ball that is not badly root-bound.",
          "Plant out when the soil is moist and the rains have settled in, so the roots can establish before the dry season. Carry seedlings carefully, keep their roots moist and plant them the same day if possible.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for Chauthe includes a community nursery in Year 1. Years 2 and 3 are planned for planting in layers: native and fruit trees, nitrogen fixers and ground cover.",
      "The program is at the planning and setup stage, and work on the hillside has not started. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries.",
    ],
    related: [
      "how-to-grow-trees-from-seed",
      "why-plant-native-trees",
      "nitrogen-fixing-trees",
      "what-are-pioneer-species",
    ],
  },
  {
    slug: "how-to-grow-trees-from-seed",
    title: "How do you grow trees from seed?",
    metaTitle: "How to Grow Trees from Seed: A Practical Guide | ZenTrust",
    description: "How to grow trees from seed: collecting and storing seed, breaking dormancy, sowing, caring for seedlings and planting them out.",
    shortAnswer: "To grow a tree from seed, collect ripe seed from healthy trees, prepare it so it can sprout, sow it in loose, well-drained soil, and keep it moist (and, for most species, partly shaded) until it is strong enough to plant out. The main thing to learn for each species is how to store the seed and how to wake it from dormancy.",
    sections: [
      {
        heading: "Collecting seed",
        list: [
          "Collect from healthy, vigorous trees that grow well in your area.",
          "Gather from several trees, not just one, so seedlings stay genetically varied.",
          "Pick seed when it is ripe. Fruit often changes color, pods turn brown or seed starts to fall.",
          "Remove fleshy fruit pulp, which can rot or hold back germination.",
          "Label each batch with the species, the parent tree's location and the date.",
        ],
      },
      {
        heading: "Storing seed",
        paragraphs: [
          "Tree seeds fall into two broad groups. Some can be dried and stored in a cool, dry place for months or longer. Others die if they dry out and should be sown fresh. Oaks, chestnuts and many tropical species are in the second group.",
          "If you are not sure which group a species belongs to, sow some seed right away. Local nurseries and forestry offices can usually tell you how to handle common species.",
        ],
      },
      {
        heading: "Breaking dormancy",
        paragraphs: [
          "Many tree seeds will not sprout as soon as they are sown, even in good conditions. This dormancy stops them from germinating at the wrong time of year. Treating the seed can mimic the natural signal it is waiting for.",
        ],
        list: [
          "Hard seed coats, common in legumes such as acacias, can be soaked in hot water or nicked with a file or nail clipper so water can get in.",
          "Seeds from cold climates often need a period of cold, moist storage, called stratification, before they will sprout.",
          "Some seeds need a long soak in plain water to soften the coat.",
          "Some need no treatment at all, so check the needs of each species before you start.",
        ],
      },
      {
        heading: "Sowing and early care",
        list: [
          "Use a loose, well-drained mix. Heavy soil that stays wet invites rot.",
          "Sow small seeds shallowly and larger seeds a little deeper. A common rule is about one to two times the seed's own width.",
          "Use deep containers or beds for species with long taproots.",
          "Keep most young seedlings in partial shade and water them regularly, without leaving the soil soggy. Some sun-loving pioneer species do better with more light.",
          "Watch for damping off, a disease caused by soil fungi and fungus-like water moulds that makes stems collapse at soil level. Good airflow and drainage help prevent it.",
        ],
      },
      {
        heading: "Planting out",
        paragraphs: [
          "Before planting, harden seedlings off by giving them more sun and less water over a few weeks. Plant them out when soil moisture is reliable, often at the start of the rainy season, so roots can settle before dry weather.",
          "Growing from seed takes patience. Germination can be uneven, and some species are slow. Fruit trees grown from seed often do not produce fruit like the parent, which is why orchard varieties are usually grafted. Native forest trees, by contrast, are commonly grown from seed.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is still at the planning and setup stage, and work on the hillside has not started. The Year 1 plan for Chauthe includes setting up a community nursery, intended to support the planting that follows.",
      "In Years 2 and 3, the plan is to plant in layers with native and fruit trees, nitrogen fixers and ground cover. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group (CFUG) and local nurseries.",
    ],
    related: [
      "how-to-start-a-tree-nursery",
      "why-plant-native-trees",
      "nitrogen-fixing-trees",
      "what-are-pioneer-species",
    ],
  },
  {
    slug: "assisted-natural-regeneration",
    title: "What is assisted natural regeneration?",
    metaTitle: "Assisted Natural Regeneration Explained | ZenTrust",
    description: "Assisted natural regeneration restores forest by protecting and helping the trees that grow back on their own. How it works and where it fits.",
    shortAnswer: "Assisted natural regeneration (ANR) is a way of restoring forest by protecting and helping the trees that are already trying to grow back, rather than planting every tree by hand. People remove the main barriers to regrowth, such as fire, grazing and smothering grass, then let natural seedlings, stumps and roots do much of the work.",
    sections: [
      {
        heading: "The basic idea",
        paragraphs: [
          "Cleared or damaged land often still holds the start of a new forest. Stumps and roots of many tree species can resprout, though some, including most pines, do not. Seeds lie in the soil or arrive from nearby trees, carried by wind, birds and other animals. Young seedlings may already be hidden in the grass.",
          "Left alone, this regrowth is often held back by repeated fires, livestock, cutting or dense grass and weeds. ANR focuses on removing those pressures so the natural process can move forward faster. Planting is added where natural regrowth is missing, too slow, or lacks species that are needed.",
        ],
      },
      {
        heading: "Common practices",
        list: [
          "Finding and marking existing seedlings and saplings so they are not cut or trampled.",
          "Protecting the area from fire, for example with firebreaks and fire watches.",
          "Keeping livestock out or managing grazing so young trees can grow.",
          "Clearing or pressing down tall grass and vines around young trees to give them light.",
          "Enrichment planting: adding trees in gaps or adding species that will not arrive on their own.",
        ],
      },
      {
        heading: "Where it works best",
        list: [
          "Land that still has stumps, roots or young trees in it.",
          "Sites close to existing forest that can supply seed.",
          "Areas where birds, bats and other seed carriers still move through.",
          "Soil that is damaged but not stripped or badly eroded.",
          "Places where the local community supports protecting the area over time.",
        ],
      },
      {
        heading: "Limits and trade-offs",
        list: [
          "On heavily degraded land with little seed or rootstock left, natural regrowth may be very slow or not happen at all.",
          "The species that return are the ones nearby, which may not include the trees people need most.",
          "Protection from fire and grazing has to continue for years, which takes people and agreement.",
          "Results vary with climate, soil and land history, so local foresters and ecologists are worth consulting.",
        ],
      },
      {
        heading: "ANR compared with tree planting",
        paragraphs: [
          "Planting gives more control over which species grow and where. ANR often costs less per area than planting every tree, though this varies by site and protection has ongoing costs. It relies on trees that are already growing locally and can produce a more varied forest, depending on what seed sources are nearby. Many projects mix the two: they protect and release natural regrowth where it exists and plant where it does not.",
          "In practice, ANR works with ecological succession. Fast pioneer species often come first and create shade and shelter for slower forest trees that follow.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program in Chauthe is at the planning and setup stage, and work on the hillside has not started. The plan is to hold water in Year 1 with contour trenches, small check dams, recharge ponds and a community nursery. In Years 2 and 3, the plan is to plant in layers, with native and fruit trees, nitrogen fixers and ground cover. From Year 4 on, the plan is to let the forest lead.",
      "The land is community forest of the Thumki Danda Gairikharka Community Forest User Group. Pine will be thinned only where the user group and the Division Forest Office approve. Species will be chosen with the user group and local nurseries.",
    ],
    related: [
      "what-is-ecological-succession",
      "what-are-pioneer-species",
      "why-plant-native-trees",
      "how-to-start-a-tree-nursery",
    ],
  },
  {
    slug: "what-are-pioneer-species",
    title: "What are pioneer species?",
    metaTitle: "Pioneer Species: What They Are and Why They Matter | ZenTrust",
    description: "Pioneer species are the first plants to colonize bare or disturbed ground. How they work, the traits they share and how they are used in restoration.",
    shortAnswer: "Pioneer species are the first plants and other organisms to settle on bare or disturbed ground, such as after a landslide, fire or clearing. Most grow fast in full sun and poor soil. Over time they build soil and shelter, which lets slower, longer-lived species move in and eventually replace them.",
    sections: [
      {
        heading: "Where pioneers appear",
        paragraphs: [
          "Pioneers show up wherever ground has been opened up. On bare rock or new lava flows, the first colonizers are often lichens and mosses. Succession that starts on ground with no soil is called primary succession. On land that already has soil, such as an abandoned field, a burned slope or a landslide scar that still has some soil, the first arrivals are usually grasses, herbs, shrubs and fast-growing trees. This is called secondary succession.",
        ],
      },
      {
        heading: "Common traits",
        list: [
          "Fast growth and usually a short life compared with later forest trees.",
          "A need for full sun. Many pioneer seedlings do poorly in shade.",
          "Many small seeds spread by wind, birds or other animals.",
          "Tolerance of poor, dry, exposed or unstable soil.",
          "Some, such as many legumes and alders, host root bacteria that take nitrogen from the air.",
        ],
      },
      {
        heading: "How they help the next stage",
        list: [
          "Roots hold loose soil and reduce erosion.",
          "Falling leaves and dead roots add organic matter to the soil.",
          "Shade and shelter create cooler, moister conditions for seedlings that cannot cope with open sun.",
          "Trees and shrubs give birds perches, and birds drop seeds of other species beneath them.",
          "As taller, longer-lived trees grow up, most pioneers are shaded out and their remains feed the soil.",
        ],
      },
      {
        heading: "Pioneers in restoration",
        paragraphs: [
          "Restoration projects often plant or protect pioneers on purpose. They cover bare ground quickly and act as nurse plants for slower species planted alongside them. In agroforestry and syntropic systems, pioneers are often pruned and the cuttings left on the ground as mulch, a practice called chop and drop.",
          "Mixing pioneers with later-stage species can often move a site along faster than waiting for seeds to arrive on their own. Where seed sources and old roots remain nearby, protecting natural regrowth can also work well.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Some pioneers spread aggressively and can become invasive outside their native range.",
          "A single pioneer species planted on its own over a large area can hold back the arrival of a more varied forest.",
          "Some pioneers, including many pines and grasses, can burn readily in dry seasons.",
          "Native pioneers suited to the local climate are usually the safer choice. Local foresters and nurseries can advise.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. The plan is to hold the water first in Year 1. In Years 2 to 3 the plan is to plant in layers, with native and fruit trees, nitrogen-fixing plants and ground cover. From Year 4 on, the plan is to let the forest lead.",
      "Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group (CFUG) and local nurseries.",
    ],
    related: [
      "what-is-ecological-succession",
      "nitrogen-fixing-trees",
      "assisted-natural-regeneration",
      "what-is-syntropic-agriculture",
      "chop-and-drop",
      "why-plant-native-trees",
    ],
  },
  {
    slug: "what-is-ecological-succession",
    title: "What is ecological succession?",
    metaTitle: "Ecological Succession: How Ecosystems Change | ZenTrust",
    description: "Ecological succession is the gradual change in the species living in a place over time. Types, stages and how land managers work with it.",
    shortAnswer: "Ecological succession is the gradual change in the mix of plants, animals and soil life in a place over time. Early species change the conditions, and those changes make room for later species. A bare or disturbed patch of land may slowly move from weeds and grasses to shrubs and then to forest.",
    sections: [
      {
        heading: "How succession works",
        paragraphs: [
          "Each group of species changes the site it grows on. Early plants add roots, leaf litter and shade. Over time this can build soil, hold more moisture and cool the ground.",
          "Those new conditions favor different species. Plants that need full sun and bare soil tend to give way to plants that can grow in shade and richer soil. The community shifts step by step rather than all at once.",
        ],
      },
      {
        heading: "Primary and secondary succession",
        list: [
          "Primary succession starts where there is no soil, such as fresh lava, bare rock or ground left by a retreating glacier. Lichens and mosses often come first and help form the first thin soil. This is usually very slow.",
          "Secondary succession starts where soil is still present after a disturbance, such as an abandoned field, a burned forest or a cleared slope. It is usually much faster because seeds, roots and soil life remain.",
          "Most land restoration works with secondary succession.",
        ],
      },
      {
        heading: "Typical stages on land",
        list: [
          "Bare or disturbed ground is colonized by fast-growing annual plants.",
          "Grasses and longer-lived herbs move in and build roots and organic matter.",
          "Shrubs and pioneer trees arrive. They grow quickly, like sun and often live a shorter time.",
          "Longer-lived trees that can grow in shade rise under the pioneers.",
          "Where the climate supports it, a more mature, mixed forest forms, with several layers and a deeper soil. In very dry, cold or high places, succession may settle at grassland or shrubland instead.",
        ],
      },
      {
        heading: "It is not a straight line",
        paragraphs: [
          "Older textbooks described succession as heading toward one fixed final stage, often called a climax community. Ecologists now see it as less tidy. Fire, storms, landslides, grazing and human use reset parts of the landscape again and again.",
          "Succession can also stall. Compacted or eroded soil, repeated fire, heavy grazing, invasive plants or a lack of nearby seed sources can keep land stuck at an early stage for a long time.",
        ],
      },
      {
        heading: "Working with succession",
        list: [
          "Assisted natural regeneration: protect and help the young trees and seeds already on site instead of planting everything.",
          "Pioneer and nurse plants: use hardy, fast-growing species to shade and shelter slower trees.",
          "Planting several stages at once, as in syntropic agriculture and food forests, so short-lived plants support long-lived ones.",
          "Chop and drop: cut back support plants and leave the material as mulch to feed the soil.",
          "Reduce the pressures that stall recovery, such as fire, overgrazing or erosion, with local advice and any required permits.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. The site at Chauthe is community forest of the Thumki Danda Gairikharka Community Forest User Group (CFUG). ZenTrust describes it as a pine monoculture, and says the pine is a major cause of the springs below drying up, which it will measure.",
      "Read in terms of succession, the plan follows the stages in order. In Year 1 the plan is to hold the water, with contour trenches, small check dams, recharge ponds and a community nursery. In Years 2 to 3 the plan is to plant in layers, with native and fruit trees, nitrogen fixers and ground cover. Pine will be thinned only where the CFUG and the Division Forest Office approve. From Year 4 on, the plan is to let the forest lead, the idea being that natural succession does more of the work over time. Species will be chosen with the CFUG and local nurseries.",
    ],
    related: [
      "what-are-pioneer-species",
      "assisted-natural-regeneration",
      "what-is-syntropic-agriculture",
      "what-is-a-food-forest",
    ],
  },
  {
    slug: "what-is-a-riparian-buffer",
    title: "What is a riparian buffer?",
    metaTitle: "Riparian Buffers: What They Are and Why They Matter | ZenTrust",
    description: "A riparian buffer is a strip of trees, shrubs and grasses along a stream or river. What it does, how it is laid out and what to watch for.",
    shortAnswer: "A riparian buffer is a strip of permanent vegetation, usually trees, shrubs and grasses, kept or planted along a stream, river, pond or lake. It sits between the water and the land nearby. It slows runoff, traps soil and nutrients, holds the bank together and shades the water.",
    sections: [
      {
        heading: "What a riparian buffer does",
        list: [
          "Slows water running off nearby land so more of it soaks in.",
          "Traps soil, so less sediment reaches the water.",
          "Takes up some of the nutrients and other pollutants carried in runoff before they reach the stream.",
          "Holds stream banks in place with roots, which reduces bank erosion.",
          "Shades the water, which keeps it cooler.",
          "Gives food, cover and movement corridors to wildlife.",
        ],
      },
      {
        heading: "How a buffer is laid out",
        paragraphs: [
          "Buffers are often described in zones running back from the water. Each zone has a different job, though many small buffers simply use whatever native plants grow well on the bank.",
        ],
        list: [
          "Next to the water: trees and shrubs that are left largely undisturbed, to hold the bank and shade the stream.",
          "Middle zone: more trees and shrubs, sometimes managed for wood or fruit, that take up water and nutrients.",
          "Outer edge: grasses or other dense ground cover that slow runoff and catch soil before it moves further.",
        ],
      },
      {
        heading: "How wide it should be",
        paragraphs: [
          "There is no single right width. In general, a wider buffer does more, and steep slopes, erodible soils or heavy use of the land nearby call for more width. Many regions publish recommended or required widths, so local guidance should be the starting point. Even a narrow strip of plants is usually better than bare or mown ground right to the water's edge.",
        ],
      },
      {
        heading: "Planting and care",
        list: [
          "Use native species suited to wet ground near the water and drier ground further back.",
          "Protect young plants from grazing animals, often with fencing, until they are established.",
          "Control aggressive weeds and invasive plants in the first few years.",
          "Where some native vegetation already grows, protecting it and letting it spread can work as well as planting.",
          "Avoid driving machinery or livestock across the strip, which compacts soil and damages banks.",
        ],
      },
      {
        heading: "Trade-offs and rules",
        list: [
          "A buffer takes land out of crops or grazing, at least in the zone nearest the water.",
          "It takes several years for trees and shrubs to grow enough to do their full job.",
          "Livestock may need another source of drinking water if they are fenced out.",
          "Work near streams is regulated in many places, so check whether permits or approvals are needed before cutting, planting or reshaping banks.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. The plan for Chauthe does not name riparian buffers. Its first year is about holding water on the slope, with contour trenches, small check dams, recharge ponds and a community nursery.",
      "In years 2 to 3, the plan is to plant native and fruit trees, nitrogen fixers and ground cover in layers. Pine would be thinned only where the Thumki Danda Gairikharka Community Forest User Group and the Division Forest Office approve. Species will be chosen with the user group and local nurseries.",
    ],
    related: [
      "what-is-soil-erosion",
      "why-plant-native-trees",
      "what-is-infiltration",
      "what-is-a-watershed",
    ],
  },
  {
    slug: "coppicing-and-pollarding",
    title: "What is coppicing and pollarding?",
    metaTitle: "Coppicing and Pollarding: How They Work | ZenTrust",
    description: "Coppicing and pollarding cut trees back so they regrow from the stump or trunk. How each works, which trees respond, uses and trade-offs.",
    shortAnswer: "Coppicing and pollarding are old ways of harvesting wood without killing the tree. In coppicing, a tree is cut near the ground and regrows many new stems from the stump. In pollarding, the trunk is cut higher up, usually above the reach of grazing animals, and new shoots grow from the top. Both are repeated every few years.",
    sections: [
      {
        heading: "How each method works",
        paragraphs: [
          "Coppicing cuts a tree close to the ground. The stump, called a stool, sends up several new shoots. These grow into straight poles that are cut again after some years, and the cycle repeats.",
          "Pollarding leaves a trunk standing and cuts the branches back to the top of it. New shoots grow from that point. Because the regrowth is high off the ground, most livestock cannot reach it, so pollarding suits land that is also grazed.",
        ],
      },
      {
        heading: "What they are used for",
        list: [
          "Firewood and charcoal.",
          "Poles and stakes for fencing, building and supporting crops.",
          "Thin, flexible stems for weaving baskets and fences.",
          "Leaves and twigs as fodder for animals.",
          "Prunings left on the ground as mulch, often called chop and drop.",
        ],
      },
      {
        heading: "Which trees respond",
        paragraphs: [
          "Many broadleaf trees and shrubs resprout well after cutting. Willow, hazel, alder, ash and sweet chestnut are classic examples in Europe, and many nitrogen-fixing trees used in tropical agroforestry also regrow strongly. Most conifers, including most pines, do not resprout from a cut stump, so cutting them usually ends the tree.",
          "How well a species responds depends on its age, health, climate and timing. Local foresters and nurseries can say which native species tolerate regular cutting.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Wood can be harvested again and again without replanting.",
          "The root system stays alive, so it keeps holding soil.",
          "Cutting in patches at different times creates a mix of open and shaded areas, which can suit many plants and animals.",
          "Regularly cut trees stay small and manageable, and pollards are often long-lived.",
        ],
      },
      {
        heading: "Trade-offs and cautions",
        list: [
          "Fresh coppice shoots are easy food for deer, goats and cattle, so they may need protection.",
          "Once started, the cycle needs to continue. Pollards left uncut for a long time grow heavy limbs that can split, and cutting them back again can kill or weaken the tree.",
          "Cutting is usually done when the tree is dormant or in the season local practice recommends. Cutting at the wrong time can weaken it.",
          "Chainsaws and work at height are dangerous. Trained workers or arborists should do large cuts.",
          "In public, protected or community forests, cutting may need permission, so check local rules first.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's published plan for Chauthe does not mention coppicing or pollarding, so this guide is general background rather than a description of planned work.",
      "Work on the hillside has not started yet. The plan includes planting native and fruit trees, nitrogen fixers and ground cover in layers in years 2 and 3, with species to be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries. Pine will be thinned only where the user group and the Division Forest Office approve.",
    ],
    related: [
      "chop-and-drop",
      "nitrogen-fixing-trees",
      "what-is-agroforestry",
      "living-fences-and-hedgerows",
    ],
  },
  {
    slug: "what-is-green-manure",
    title: "What is green manure?",
    metaTitle: "Green Manure: What It Is and How to Use It | ZenTrust",
    description: "Green manure is a crop grown and returned to the soil while still green to add organic matter and nutrients. How it works, common plants and trade-offs.",
    shortAnswer: "Green manure is a crop grown to be cut down and returned to the soil while it is still green, rather than harvested. As it breaks down, it adds organic matter and nutrients. Legume green manures can also add nitrogen taken from the air.",
    sections: [
      {
        heading: "What green manure does",
        list: [
          "Adds fresh plant material that feeds soil life and builds organic matter.",
          "Returns nutrients the plants took up, so they become available to the next crop.",
          "Can add nitrogen when legumes are used, through bacteria in their root nodules.",
          "Covers the ground while it grows, which reduces erosion and shades out weeds.",
          "Opens up the soil with its roots, which can help water soak in.",
        ],
      },
      {
        heading: "Green manure and cover crops",
        paragraphs: [
          "The two ideas overlap, and the same plants are often used for both. A cover crop is named for its job of protecting the ground. A green manure is named for its job of feeding the soil. A cover crop becomes a green manure when it is cut while green and left to break down in or on the soil.",
        ],
      },
      {
        heading: "Common green manure plants",
        list: [
          "Legumes such as clover, vetch, field peas, fava beans and sunn hemp: can add nitrogen.",
          "Sesbania, also called dhaincha, is widely grown as a green manure in South Asia.",
          "Buckwheat: grows fast in warm weather and breaks down quickly.",
          "Mustards and other brassicas: grow quickly; some, such as forage radish, have deep taproots.",
          "Cereals such as rye and oats: produce a lot of bulk, often sown in a mix with legumes.",
        ],
      },
      {
        heading: "How and when to turn it in",
        paragraphs: [
          "Green manure is usually cut around the time it starts to flower. At that stage the plants are still soft and rich in nitrogen, so they rot quickly. If left until they set seed, they turn woody, break down slowly and may spread as weeds.",
          "The cut plants can be dug or tilled into the topsoil, or left on the surface as mulch. Leaving them on top disturbs the soil less but releases nutrients more slowly. Most growers wait a short time after turning in a green manure before sowing the next crop, to let the material start breaking down.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "The land is used for a season without producing a harvest.",
          "Green manure crops use water, which can matter in dry places.",
          "Digging plants in disturbs soil structure and soil life.",
          "Older, woody material can tie up nitrogen for a while as it breaks down.",
          "Some residues, such as rye, can hold back the germination of small seeds sown too soon after.",
          "Results depend on climate, soil and timing, so local advice is worth getting.",
        ],
      },
    ],
    inChauthe: [
      "The hillside in Chauthe is community forest of the Thumki Danda Gairikharka Community Forest User Group, not tilled farmland. ZenTrust's plan does not include growing green manure crops and digging them into the soil there.",
      "A related idea, feeding the soil with living plants, is part of the plan. Work on the hillside has not started yet. After a first year focused on holding water, ZenTrust plans in years 2 to 3 to plant nitrogen fixers and ground cover among native and fruit trees. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries.",
    ],
    related: [
      "cover-crops",
      "chop-and-drop",
      "nitrogen-fixing-trees",
      "what-is-soil-organic-matter",
    ],
  },
  {
    slug: "living-fences-and-hedgerows",
    title: "What is a living fence?",
    metaTitle: "Living Fences and Hedgerows: What They Are | ZenTrust",
    description: "A living fence is a line of trees or shrubs planted to mark a boundary or keep animals out. How they work, which species to use, and the trade-offs.",
    shortAnswer: "A living fence is a row of trees or shrubs planted close together to mark a boundary, keep animals in or out, or replace dead wooden posts. A hedgerow is a similar line of mixed shrubs and trees, often older and wider. Both can also provide shelter, fodder, firewood and habitat.",
    sections: [
      {
        heading: "Living fences and hedgerows",
        paragraphs: [
          "A living fence can be as simple as a line of living posts with wire strung between them. The posts are cuttings or young trees that take root and keep growing, so they do not rot like cut timber.",
          "A hedgerow is usually denser and more varied. It is a strip of shrubs, small trees and smaller plants, often managed by cutting or laying so it stays thick at the base. Many old hedgerows started as boundaries and grew into strips of habitat over time.",
        ],
      },
      {
        heading: "What they do",
        list: [
          "Mark field and property lines, and can keep livestock in or out once grown thick enough.",
          "Slow the wind, which can shelter crops, animals and soil.",
          "Hold soil with roots, which helps on slopes and field edges.",
          "Supply fodder, firewood, stakes, fruit or mulch when trimmed.",
          "Give birds, insects and other wildlife food, cover and a corridor between patches of habitat.",
        ],
      },
      {
        heading: "How they are planted",
        paragraphs: [
          "Some species root easily from thick cuttings pushed straight into the ground. Willow is a common example in cooler climates, and gliricidia is widely used in parts of the tropics. Other species are grown from seed or seedlings in a nursery and planted out in one or two close rows.",
          "Young plants need protection from grazing animals and weeds until they are established. A temporary fence or guard is often used during the first years.",
        ],
        list: [
          "Plant at the start of the rainy or growing season so roots can settle.",
          "Space plants closely if the goal is a stock-proof barrier.",
          "Mulch the row to keep moisture in and weeds down.",
          "Trim regularly so growth stays dense near the ground.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "A living fence takes years to become a real barrier, unlike a wire or wooden fence.",
          "It needs regular trimming, and the work adds up over a long boundary.",
          "Hedges can shade and compete with nearby crops for water and nutrients.",
          "Some popular fence plants spread and become invasive outside the row.",
          "Some species are toxic to livestock, so check before planting near grazing animals.",
        ],
      },
      {
        heading: "Choosing species",
        paragraphs: [
          "Start from the main purpose: a barrier, fodder, windbreak, firewood or wildlife habitat. Thorny shrubs suit stock-proof hedges. Nitrogen-fixing trees that tolerate heavy cutting are often chosen where fodder or mulch is wanted. Native species usually support more local wildlife and are less likely to spread out of control. Local nurseries, forestry offices and farmers who already keep hedges are the best guide to what grows well in a given place.",
        ],
      },
    ],
    inChauthe: [
      "Living fences and hedgerows are not a named part of ZenTrust's plan for Chauthe.",
      "The plan does include a community nursery in the first year and, in years two and three, planting native and fruit trees with nitrogen fixers. These include some of the same kinds of plants often used in hedges elsewhere. Work on the hillside has not started yet, and species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "nitrogen-fixing-trees",
      "coppicing-and-pollarding",
      "what-is-agroforestry",
      "what-is-silvopasture",
    ],
  },
  {
    slug: "what-is-soil-organic-matter",
    title: "What is soil organic matter?",
    metaTitle: "Soil Organic Matter: What It Is and Why It Matters | ZenTrust",
    description: "Soil organic matter is the living and once-living material in soil. What it is made of, why it matters for water and fertility, and how to build it.",
    shortAnswer: "Soil organic matter is the part of soil that comes from living things: plant and animal remains at every stage of decay, the soil organisms that break them down, and the dark, more stable material left behind. It is usually a small share of the soil, but it strongly affects how well soil holds water, supplies nutrients and resists erosion.",
    sections: [
      {
        heading: "What it is made of",
        list: [
          "Fresh residues such as fallen leaves, dead roots, crop stubble and manure.",
          "Living organisms such as bacteria, fungi, earthworms and insects. Living roots are sometimes counted too.",
          "Partly decomposed material that is still breaking down.",
          "Well-decomposed, more stable material, sometimes loosely called humus, which can last much longer in the soil.",
        ],
      },
      {
        heading: "Why it matters",
        list: [
          "It acts like a sponge, helping soil soak up and hold water.",
          "It helps bind soil particles into crumbs, along with roots, fungi and microbes, which leaves pore space for air, roots and water.",
          "It stores nutrients and releases them slowly as it breaks down.",
          "It feeds the soil life that cycles nutrients and builds soil structure.",
          "Crumbly, well-structured soil better resists being washed or blown away.",
        ],
      },
      {
        heading: "How it is lost",
        paragraphs: [
          "Soil organic matter is always being broken down by soil life, so it has to be replaced. It declines when less goes in than comes out. Common causes are frequent plowing, which speeds up decay, and bare ground, which lets rain and wind carry off the top layer, where organic matter is usually most concentrated. Removing or burning crop residues takes away the material that would have fed the soil. In warm, moist (but not waterlogged) climates, decay tends to be faster, so steady inputs matter more.",
        ],
      },
      {
        heading: "How to build it",
        list: [
          "Keep the ground covered with plants, mulch or residue.",
          "Keep living roots in the soil for as much of the year as possible.",
          "Add compost, manure or chopped plant material.",
          "Disturb the soil less, for example by reducing tillage.",
          "Grow a mix of plants, including perennials and trees, which add roots and leaf litter year after year.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Building organic matter is slow. It usually takes several years of steady care to see a clear change, and it can be lost more quickly. A soil test from a local lab or extension service can measure it and show the trend over time. Results depend on climate, soil type and land use, so local advice helps in setting realistic goals.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage. Work on the hillside at Chauthe has not started, so there are no results yet. The site is community forest of the Thumki Danda Gairikharka Community Forest User Group (CFUG).",
      "In Year 1, the plan is to hold the water with contour trenches, small check dams, recharge ponds and a community nursery. In years 2 and 3, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. Pine would be thinned only where the CFUG and the Division Forest Office approve. From year 4 on, the plan is to let the forest lead. Layered planting with ground cover is one of the general ways to build organic matter described above. Species will be chosen with the CFUG and local nurseries.",
    ],
    related: ["what-is-humus", "what-is-topsoil", "what-is-composting", "chop-and-drop"],
  },
  {
    slug: "what-is-soil-compaction",
    title: "What is soil compaction?",
    metaTitle: "Soil Compaction: Causes, Signs and How to Fix It | ZenTrust",
    description: "Soil compaction is when soil is pressed so tight that water, air and roots struggle to move through it. Causes, signs, prevention and repair.",
    shortAnswer: "Soil compaction happens when soil particles are pressed closer together, squeezing out the spaces between them, especially the larger ones. With less pore space, rain soaks in more slowly, roots struggle to grow and soil life gets less air. It is usually caused by weight and traffic, especially on wet soil.",
    sections: [
      {
        heading: "What happens in compacted soil",
        paragraphs: [
          "Healthy soil is full of gaps of different sizes. Large pores let water drain and air move. Small pores hold water for plants. Compaction crushes the larger pores first, so the soil holds less air and drains poorly.",
        ],
        list: [
          "Rain soaks in more slowly, so more of it runs off the surface.",
          "Runoff can carry topsoil away, which adds to erosion.",
          "Roots meet more resistance and often stay shallow.",
          "Soil can become waterlogged after rain, then hard and dry later.",
          "Earthworms, fungi and other soil life have less air and room to move.",
        ],
      },
      {
        heading: "Common causes",
        list: [
          "Heavy machinery, especially repeated passes over the same ground.",
          "Working or driving on soil when it is wet, which compacts it much more easily.",
          "Livestock trampling, particularly where animals gather or on wet ground.",
          "Regular foot traffic on paths and around gardens.",
          "Plowing or tilling to the same depth year after year, which can form a hard layer called a plow pan.",
          "Bare soil hit by heavy rain, which can seal the surface into a crust.",
        ],
      },
      {
        heading: "Signs to look for",
        list: [
          "Water puddles or runs off instead of soaking in.",
          "A metal rod or wire is hard to push in, or stops at a firm layer.",
          "Roots grow sideways or bend sharply when they hit a hard layer.",
          "Plants look stunted or wilt quickly in dry spells.",
          "Soil breaks into flat, plate-like chunks rather than crumbs.",
        ],
      },
      {
        heading: "Preventing it",
        paragraphs: [
          "Prevention is easier than repair. The main rules are to keep weight off wet soil and to keep the soil covered and full of roots.",
        ],
        list: [
          "Stay off wet soil and wait for it to dry before working it.",
          "Use fixed paths or lanes so traffic stays in the same places.",
          "Keep soil covered with plants or mulch to soften the impact of rain.",
          "Build organic matter, which helps soil hold its crumb structure.",
          "Move livestock regularly and keep them off waterlogged ground.",
        ],
      },
      {
        heading: "Fixing it",
        paragraphs: [
          "Living roots are one of the gentlest tools. Deep-rooted plants such as radish, some grasses and many trees can push into firm soil, and when the roots die they leave channels behind. Adding mulch and compost feeds earthworms, which also open the soil over time.",
          "On farmland, deep compaction is sometimes broken with a ripper or subsoiler when the soil is dry. This can help, but the soil can compact again if the same traffic continues. On slopes, deep tillage may raise erosion risk, so local agricultural advice is worth getting first. Either way, recovery is usually slow, often several seasons or longer.",
        ],
      },
    ],
    inChauthe: [
      "Soil compaction is not a named focus of ZenTrust's plan for the Chauthe hillside, but it is relevant, because the springs below depend on rain soaking into the ground. ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started yet.",
      "In Year 1, ZenTrust plans to hold water with contour trenches, small check dams and recharge ponds, and to set up a community nursery. In Years 2-3, it plans to plant in layers with native and fruit trees, nitrogen fixers and ground cover. Layered planting like this generally keeps soil covered and adds roots. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "what-is-infiltration",
      "cover-crops",
      "no-till-farming",
      "what-is-soil-organic-matter",
    ],
  },
  {
    slug: "how-do-springs-work",
    title: "How do natural springs work?",
    metaTitle: "How Natural Springs Work and Why They Dry Up | ZenTrust",
    description: "A spring is groundwater reaching the surface. How rain becomes spring flow, the main types of spring, and why springs weaken or dry up.",
    shortAnswer: "A natural spring is a place where groundwater flows out of the ground on its own. Rain and snowmelt soak into soil and rock uphill, move slowly underground, and come out where the water table meets the land surface or where a layer that water cannot easily pass, such as clay or solid rock, forces the water sideways and out.",
    sections: [
      {
        heading: "Where spring water comes from",
        paragraphs: [
          "Almost all spring water starts as rain or snowmelt. Some of it runs off, some evaporates or is used by plants, and some soaks into the ground. The part that soaks in keeps moving down through soil and cracks in rock until it reaches a zone where the spaces are full of water. That saturated zone is groundwater, and its upper surface is the water table.",
          "Groundwater generally moves slowly from higher ground to lower ground. A spring forms where this flow meets the surface. The land where water soaks in to feed a spring is called its recharge area. It is often uphill of the spring and can be some distance away.",
        ],
      },
      {
        heading: "Common types of spring",
        list: [
          "Contact springs: water moving through porous rock or soil hits a layer it cannot pass, such as clay or solid rock, and flows out along the edge of that layer.",
          "Depression springs: the ground dips below the water table, so water seeps out in a hollow or at the foot of a slope.",
          "Fracture springs: water travels along cracks or faults in hard rock and emerges where a crack reaches the surface.",
          "Artesian springs: water trapped under pressure between tight layers is pushed up through a gap.",
          "Karst springs: in limestone areas, water flows through dissolved channels and caves and can come out in large volumes.",
        ],
      },
      {
        heading: "Why flow changes through the year",
        paragraphs: [
          "Spring flow depends on how much water is stored underground and how fast it drains. Shallow systems in soil or loose rock tend to respond quickly to rain and can slow to a trickle in the dry season. Deeper systems usually store more water and release it more steadily.",
          "There is usually a delay between rain and spring flow. Water can take days, months or much longer to travel underground, depending on the rock. This is why a spring may keep running well into a dry season, and why changes uphill may take time to show up at the spring.",
        ],
      },
      {
        heading: "Why springs weaken or dry up",
        list: [
          "Less water soaks in: bare, compacted or paved ground sheds rain as runoff instead of letting it infiltrate.",
          "Erosion can strip away soil that would otherwise hold and slowly release water.",
          "Changes in vegetation can alter how much water plants use and how much reaches the ground.",
          "Wells or pumping nearby can lower the water table.",
          "Changes in rainfall, such as shorter or more intense wet seasons, can reduce recharge.",
          "Road cuts, landslides or digging can disturb the underground paths water follows.",
        ],
      },
      {
        heading: "Looking after a spring",
        list: [
          "Find out roughly where the recharge area is, since protecting that land matters as much as protecting the outlet.",
          "Keep ground covered and slow runoff on slopes above the spring so more water soaks in.",
          "Keep latrines, livestock pens, fuel and chemicals away from the recharge area and outlet.",
          "Avoid digging into the spring source, which can redirect or lose the flow.",
          "Get the water tested before drinking, and seek advice from a hydrogeologist or local water office for larger works.",
        ],
      },
    ],
    inChauthe: [
      "At Chauthe, in Kakani Rural Municipality, Nepal, ZenTrust reports that springs below a pine-covered hillside are drying. The hillside is community forest of the Thumki Danda Gairikharka Community Forest User Group (CFUG). ZenTrust describes the pine monoculture as a major cause, which it plans to measure rather than assume. The program is at the planning and setup stage, and work on the hillside has not started.",
      "For the first year, the plan is to help water soak into the hillside with contour trenches, small check dams and recharge ponds, and to set up a community nursery. In years two and three, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover, with species chosen together with the CFUG and local nurseries. Pine would be thinned only where the CFUG and the Division Forest Office approve. From year four on, the aim is to let the forest lead.",
    ],
    related: [
      "why-are-springs-drying-up",
      "groundwater-recharge",
      "what-is-an-aquifer",
      "what-is-infiltration",
    ],
  },
  {
    slug: "what-is-infiltration",
    title: "What is water infiltration in soil?",
    metaTitle: "Water Infiltration in Soil: What It Is | ZenTrust",
    description: "Infiltration is how rainwater soaks into soil instead of running off. What controls it, why it matters for springs and erosion, and how to improve it.",
    shortAnswer: "Infiltration is the process of water entering the soil surface from rain, snowmelt or irrigation. Water that cannot get in fast enough runs off. Good infiltration generally means less erosion, more moisture for plants and more water moving down toward groundwater and springs.",
    sections: [
      {
        heading: "What happens when rain hits the ground",
        paragraphs: [
          "When rain falls on soil, some of it soaks in through pores, cracks, root channels and burrows. If rain arrives faster than the soil can take it in, the extra water pools on the surface or flows downhill as runoff.",
          "Infiltration is only the first step. Once water is in the soil, it can be held for plants, taken up and released by leaves, or keep moving downward. That deeper movement is often called percolation, and some of it can eventually recharge groundwater.",
        ],
      },
      {
        heading: "What controls how fast water soaks in",
        list: [
          "Soil texture: sandy soils usually take in water quickly, while clay soils are slower, though structure and compaction can matter as much as texture.",
          "Soil structure: crumbly soil with many connected pores lets water in far better than dense or crusted soil.",
          "Compaction: traffic, grazing and foot paths squeeze pores closed and slow infiltration.",
          "Surface cover: leaf litter, mulch and plants break the force of raindrops and slow water down so it has time to soak in.",
          "Organic matter and soil life: roots, fungi and earthworms build pores and channels that carry water down.",
          "How wet the soil already is: dry soil usually absorbs water faster at first, and the rate drops as it fills up. Some very dry soils can repel water at first, which is an exception.",
        ],
      },
      {
        heading: "Why it matters",
        list: [
          "Less runoff means less erosion and less loss of topsoil.",
          "More water stays in the soil for plants between rains.",
          "Water that soaks in can feed groundwater, which in turn supplies wells and springs.",
          "Slower runoff can reduce flash flooding and muddy streams downhill.",
        ],
      },
      {
        heading: "Possible signs of poor infiltration",
        list: [
          "Puddles that stay on the surface long after rain stops.",
          "Water running off a slope even during moderate rain.",
          "A hard crust on bare soil after it dries.",
          "Gullies, rills or exposed roots on slopes.",
          "Muddy water in nearby streams after storms, which can point to runoff and erosion upstream.",
        ],
      },
      {
        heading: "How to improve it",
        paragraphs: [
          "The basic approach is to keep soil covered, add organic matter and slow water down. Mulch, ground cover and cover crops protect the surface. Avoiding compaction and keeping living roots in the ground help build open soil structure over time.",
          "On slopes, earthworks such as contour trenches, swales and small check dams hold water in place long enough for it to soak in. These need careful design. On steep or unstable ground, adding water in the wrong place can raise the risk of slips, so local expert advice and any required permits matter.",
        ],
      },
      {
        heading: "A simple way to check",
        paragraphs: [
          "A rough test is to push an open-ended can or pipe a little way into the soil, fill it with water and time how long it takes to drain. Repeating it in different spots, such as a path versus under trees, shows where infiltration is poor. For accurate measurement, soil scientists use standard instruments and methods.",
        ],
      },
    ],
    inChauthe: [
      "In Chauthe, ZenTrust's program is still being planned and set up, and work on the hillside has not started. The plan is to begin by holding water on the slope. In the first year, that means contour trenches, small check dams, recharge ponds and a community nursery. The earthworks are meant to slow water so more of it can enter the soil.",
      "In years two and three, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. Layered planting like this is a common way to keep soil covered. Pine would be thinned only where the community forest user group and the Division Forest Office approve. The springs below are drying, and ZenTrust describes the pine monoculture as a major cause, one it will measure rather than a proven one. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "contour-trenches",
      "groundwater-recharge",
      "what-is-soil-compaction",
      "what-is-soil-organic-matter",
    ],
  },
  {
    slug: "what-is-evapotranspiration",
    title: "What is evapotranspiration?",
    metaTitle: "Evapotranspiration: What It Is and Why It Matters | ZenTrust",
    description: "Evapotranspiration is water that leaves land as vapor from soil, water surfaces and plants. How it works, what drives it and why it matters for springs.",
    shortAnswer: "Evapotranspiration is the total water that moves from the land into the air as vapor. It combines evaporation from soil, open water and wet leaves with transpiration, the water plants draw up through their roots and release through their leaves. It is one of the main ways rain leaves a landscape without reaching streams or groundwater.",
    sections: [
      {
        heading: "What it is made of",
        list: [
          "Evaporation: water turns to vapor directly from bare soil, puddles, ponds and streams.",
          "Interception loss: rain caught on leaves, needles and bark evaporates before it reaches the ground. This is a kind of evaporation, though some sources count it separately.",
          "Transpiration: plants pull water from the soil through their roots and release it as vapor through small pores in their leaves.",
        ],
        paragraphs: [
          "These are usually lumped together because on vegetated land they are hard to measure separately.",
        ],
      },
      {
        heading: "What drives it",
        list: [
          "Sunshine, which supplies the energy to turn water into vapor.",
          "Temperature and dry air, which pull more moisture out of soil and leaves.",
          "Wind, which carries moist air away and replaces it with drier air.",
          "Soil moisture, since plants and soil cannot give off water they do not have.",
          "Vegetation type, including leaf area, root depth and whether plants keep leaves all year.",
        ],
        paragraphs: [
          "Scientists often separate potential evapotranspiration, the amount the weather could drive off if water were plentiful, from actual evapotranspiration, the amount that really leaves. In dry seasons the actual amount is often limited by how much water is left in the soil.",
        ],
      },
      {
        heading: "Where it fits in the water balance",
        paragraphs: [
          "Rain that falls on a hillside has a few possible paths. Some runs off the surface. Some soaks in and either stays in the soil, moves slowly downslope through it, or sinks deeper to recharge groundwater. Some goes back to the air through evapotranspiration. Over a year, water that leaves as vapor is water that does not feed local springs, wells or streams.",
          "This is why land cover matters for water. Changing what grows on a slope, or how much ground is bare, can shift how rain is split between these paths.",
        ],
      },
      {
        heading: "Trees, forests and water use",
        paragraphs: [
          "Trees can transpire large amounts of water, and dense canopies can catch and evaporate a share of rainfall before it lands. Where the climate allows, evergreen trees can keep using water through the year. At the same time, forests often improve infiltration by building loose, organic soil and protecting it from heavy rain.",
          "So the net effect of trees on springs and streams is not simple. It depends on the species, how densely they grow, the climate, the soil and the season. Research on particular plantation types and places exists, but local results can differ, which is why measurement on the site itself is useful.",
        ],
      },
      {
        heading: "Ways land managers influence it",
        list: [
          "Mulch and ground cover reduce evaporation from bare soil.",
          "Shade from layered planting can keep soil cooler and moister, though the extra plants also use water.",
          "Trenches and recharge ponds slow rain and help it soak in. Once water is in the ground it is less exposed to evaporation, though ponds lose some water to the air while they hold it.",
          "Thinning very dense stands can change how much water the canopy uses, though the effect varies and may need permits.",
          "Choosing species suited to the local climate helps avoid planting thirsty plants in dry places.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. ZenTrust describes the Chauthe hillside, community forest of the Thumki Danda Gairikharka Community Forest User Group, as a pine monoculture with drying springs below. It considers the pine a major cause, which it plans to measure rather than assume.",
      "The plan is to hold rainwater first, in Year 1, with contour trenches, small check dams, recharge ponds and a community nursery. In Years 2 and 3 the plan is to plant in layers with native and fruit trees, nitrogen fixers and ground cover. From Year 4 on, the forest is to lead. Pine will be thinned only where the community forest user group and the Division Forest Office approve, and species will be chosen with the user group and local nurseries.",
    ],
    related: [
      "what-is-infiltration",
      "pine-plantations-and-water",
      "why-are-springs-drying-up",
      "what-is-mulch",
    ],
  },
  {
    slug: "why-plant-native-trees",
    title: "Why plant native trees?",
    metaTitle: "Why Plant Native Trees? Benefits and Trade-offs | ZenTrust",
    description: "Native trees suit local climate and soil and support local wildlife. Why they matter, where non-native trees fit, and how to choose the right species.",
    shortAnswer: "Native trees are species that occur naturally in a region, without being introduced by people. They are usually well adapted to local climate and soil, they usually support more local insects, birds and fungi than most introduced trees, and they carry little risk of becoming invasive. That makes them a strong default when the goal is to restore land.",
    sections: [
      {
        heading: "What counts as native",
        paragraphs: [
          "A native tree is one that occurs naturally in a place without human introduction. Native is always local. A tree native to one valley or elevation band may not be native in another region, or even on a higher slope nearby.",
          "Many restoration projects go one step further and prefer local provenance. That means seed collected from trees growing near the planting site, because those trees are likely to be adapted to its conditions. As the climate changes, some projects also add seed from slightly warmer or lower sites.",
        ],
      },
      {
        heading: "Main benefits",
        list: [
          "Adapted to local rainfall, temperature and soil, so they often need less care once established.",
          "Food and shelter for local wildlife. Many insects feed only on certain native plants, and birds depend on those insects.",
          "They can draw on soil fungi and bacteria already present in local soil, which help roots take up water and nutrients.",
          "They fit with how local forests regrow and can help ecological succession along.",
          "Low risk of spreading out of control, unlike some introduced species that become invasive.",
        ],
      },
      {
        heading: "Why diversity matters as much as nativeness",
        paragraphs: [
          "Planting one native species in rows can still create a monoculture. A mix of native trees with different heights, root depths and growth rates gives more cover, more habitat and usually more resilience to pests and disease. Mixed planting also spreads the risk if one species fails.",
        ],
      },
      {
        heading: "Trade-offs and limits",
        list: [
          "Some native trees grow slowly, so early cover can take longer.",
          "Native seed and seedlings can be harder to find than common plantation species.",
          "Badly degraded soil may first need hardy pioneer species before slower natives can thrive.",
          "A changing climate may shift which species suit a site, so a broad local mix is safer than a narrow one.",
          "Non-native fruit or nut trees can add food and income, and many projects mix them in on purpose.",
        ],
      },
      {
        heading: "How to choose species",
        paragraphs: [
          "Start by looking at what grows in healthy nearby forest at the same elevation and slope. Local forestry offices, botanists and nurseries can usually name suitable species and seed sources. Check local lists of invasive plants before adding anything non-native. On public or community land, planting and cutting often need permission, so ask the relevant authority first.",
        ],
      },
    ],
    inChauthe: [
      "The Chauthe hillside is currently a pine monoculture. Work there has not started yet. ZenTrust's plan is to plant in layers in Years 2 and 3, with native trees, fruit trees, nitrogen fixers and ground cover. The aim is for the slope to move toward a mixed forest rather than a single species.",
      "Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group (CFUG) and local nurseries. A community nursery is planned for Year 1 to raise seedlings, and pine will be thinned only where the CFUG and the Division Forest Office approve.",
    ],
    related: [
      "what-are-pioneer-species",
      "what-is-ecological-succession",
      "how-to-start-a-tree-nursery",
      "assisted-natural-regeneration",
    ],
  },
  {
    slug: "what-is-keyline-design",
    title: "What is keyline design?",
    metaTitle: "Keyline Design: What It Is and How It Works | ZenTrust",
    description: "Keyline design plans farmland around its natural shape so rain soaks in and spreads out. Key terms, how it works and its limits.",
    shortAnswer: "Keyline design is a way of laying out farmland based on the shape of the land, aiming to slow, spread and soak rainwater into the soil instead of letting it run off. It uses a special contour line called the keyline to guide where dams, channels, tree lines, roads and plowing go.",
    sections: [
      {
        heading: "Where the idea comes from",
        paragraphs: [
          "Keyline design was developed by the Australian farmer P. A. Yeomans in the mid-1900s. He aimed to build deeper, more fertile soil on dry grazing land. A central idea was that water is one of the most important resources on a farm. So the farm layout should be planned around how water moves across the land.",
        ],
      },
      {
        heading: "Key terms",
        list: [
          "Primary valley: a small valley high on a slope, where water gathers after rain.",
          "Keypoint: the spot in a primary valley where the slope changes from steeper above to flatter below.",
          "Keyline: the contour line that runs through the keypoint, at the same height across the slope.",
          "Keyline pattern: plowing or ripping lines laid out parallel to the keyline below it, rather than following each contour exactly.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Water tends to collect in valleys and run off ridges. When land below the keyline is ripped parallel to it, the rip lines fall very slightly as they run out from the valley toward the ridges. Water that enters the furrows is nudged out of the wet valleys and toward the drier ridges, so it spreads more evenly across the slope. If the lines are laid out the wrong way, they can do the opposite and send more water into the valley.",
          "Yeomans used a chisel-type plow that loosens the subsoil without turning it over. This can help rain soak in deeper and open space for roots. The aim is to build soil over time, not just move water.",
        ],
      },
      {
        heading: "The scale of permanence",
        paragraphs: [
          "Keyline design also sets an order for planning a farm. Things that are hardest to change come first. Things that are easiest to change come last.",
        ],
        list: [
          "Climate.",
          "The shape of the land.",
          "Water supply, such as dams and channels.",
          "Roads and access tracks.",
          "Trees and shelter belts.",
          "Buildings.",
          "Fences and paddock layout.",
          "Soil, which the design aims to improve over time.",
        ],
      },
      {
        heading: "Limits and trade-offs",
        list: [
          "It was designed for farmland where tractors can work safely. Very steep slopes are usually a poor fit.",
          "Ripping can harm shallow, rocky or fragile soils, and it can damage the roots of existing trees.",
          "Getting the keypoint and lines right takes careful surveying and an understanding of the land.",
          "Dams and diversion channels can fail if poorly built. They may need an engineer and local permits.",
          "Independent research on keyline design is limited, so many claims about it rest on practitioners' experience.",
          "Any benefits build over several seasons, and results depend on soil, rainfall and how the land is grazed or cropped.",
        ],
      },
    ],
    inChauthe: [
      "Keyline design is a farm-scale method built around plowing and machinery. It is not part of ZenTrust's plan for the Chauthe hillside, which is community forest of the Thumki Danda Gairikharka Community Forest User Group.",
      "The plan does share keyline's goal of slowing water and helping it soak in. Work on the hillside has not started yet. In Year 1, ZenTrust plans to focus on holding water with contour trenches, small check dams and recharge ponds, along with a community nursery.",
    ],
    related: [
      "what-is-a-swale",
      "contour-trenches",
      "what-is-infiltration",
      "what-is-soil-compaction",
    ],
  },
  {
    slug: "why-do-pine-forests-burn",
    title: "Why do pine forests burn so easily?",
    metaTitle: "Why Do Pine Forests Burn So Easily? | ZenTrust",
    description: "Pine forests burn easily because of resin-rich needles, dry litter and ladder fuels. How fires spread, why plantations add risk and ways to lower it.",
    shortAnswer: "Pine forests burn easily because pines make a lot of fuel that catches fire readily. Their needles and wood contain flammable resins and oils. Fallen needles break down slowly and form a dry, loose layer on the ground. Low branches can carry flames from that layer up into the treetops.",
    sections: [
      {
        heading: "What makes pine so flammable",
        list: [
          "Resin and aromatic oils in needles, bark and wood burn hot and catch easily.",
          "Needles fall in large amounts and decay slowly, so a thick layer of litter builds up.",
          "That litter is loose and airy, so it dries fast after rain and lets oxygen reach the flames.",
          "Dead lower branches often stay on the trunk and dry out.",
          "A thick needle layer, and shade from a dense canopy, can hold back other ground plants.",
        ],
      },
      {
        heading: "How a ground fire climbs into the canopy",
        paragraphs: [
          "Most forest fires start on the ground, in dry needles, grass and twigs. A fire that stays low is easier to control. The danger comes from ladder fuels: shrubs, young trees and low dead branches that let flames climb upward.",
          "Once fire reaches the crowns, it can jump from tree to tree, especially where the canopy is dense and the wind is strong. Crown fires move fast, throw embers ahead of the main front and are very hard to stop.",
        ],
      },
      {
        heading: "Weather, slope and season",
        list: [
          "Long dry spells dry out litter and living needles alike.",
          "Wind feeds a fire with oxygen and pushes it forward.",
          "Fire runs faster uphill, because flames preheat the fuel above them.",
          "Hot, dry seasons before the rains are often the riskiest time.",
          "Many wildfires are started by people, through careless burning, cigarettes or land clearing.",
        ],
      },
      {
        heading: "Plantations versus natural pine forests",
        paragraphs: [
          "Some pine species are adapted to fire. Thick bark protects older trees, and some cones open after heat. In these natural systems, regular low fires can be part of the forest's life.",
          "Dense plantations of a single pine species are different. Trees of the same age and size form an even, connected canopy. Needle litter tends to cover much of the ground, with few moist broadleaf patches to slow a fire. If plantations are not thinned or tended, fuel can build up over years.",
        ],
      },
      {
        heading: "Ways to lower fire risk",
        list: [
          "Thin crowded stands so crowns are not touching, and clear or chip the cut material.",
          "Remove low dead branches and other ladder fuels near the ground.",
          "Keep firebreaks or cleared lines along ridges, paths and boundaries.",
          "Mix in broadleaf trees, which often hold more moisture and drop less flammable litter.",
          "Agree on community rules for burning, and on who watches and responds in the dry season.",
        ],
      },
      {
        heading: "Why fire matters for soil and water",
        paragraphs: [
          "A hot fire burns off the litter and plants that protect the soil. The next heavy rain can then wash topsoil downhill. Severe fires can also leave some soils temporarily water-repellent, so rain runs off instead of soaking in. In many places, thinning, cutting or controlled burning needs permission from forest authorities or landowners, and local fire experts should guide the work.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. The site is about 150 hectares of community forest at Chauthe, Ward 3, Kakani Rural Municipality, managed by the Thumki Danda Gairikharka Community Forest User Group (CFUG). ZenTrust describes it as a pine monoculture with springs drying below, and sees pine as a major cause, which it plans to measure. This guide is general and makes no claim about fire at the site.",
      "The plan starts in Year 1 by holding water, with contour trenches, small check dams, recharge ponds and a community nursery. In Years 2 to 3, native and fruit trees, nitrogen fixers and ground cover are to be planted in layers, and pine will be thinned only where the CFUG and the Division Forest Office approve. From Year 4 on, the aim is to let the forest lead. Species will be chosen with the CFUG and local nurseries.",
    ],
    related: [
      "pine-plantations-and-water",
      "why-plant-native-trees",
      "what-is-soil-erosion",
      "what-is-ecological-succession",
    ],
  },
  {
    slug: "what-is-a-keystone-species",
    title: "What is a keystone species?",
    metaTitle: "Keystone Species: What They Are, With Examples | ZenTrust",
    description: "A keystone species has a large effect on its ecosystem compared with how common it is. Classic examples, related ideas and why it matters for land care.",
    shortAnswer: "A keystone species is a plant, animal or other organism whose effect on its ecosystem is much larger than its numbers would suggest. If it disappears, the community around it can change sharply, sometimes losing many other species.",
    sections: [
      {
        heading: "Where the name comes from",
        paragraphs: [
          "A keystone is the wedge-shaped stone at the top of an arch. It is one stone among many, but if you pull it out, the arch falls. Ecologists borrowed the word for species that hold a community together in a similar way.",
          "The key idea is that the effect is out of proportion to abundance. A very common species that matters simply because there is a lot of it is not usually called keystone. The term is for species whose influence far outweighs how common they are.",
        ],
      },
      {
        heading: "Classic examples",
        list: [
          "Sea stars on rocky shores: by eating mussels, they stop mussels from crowding out other shore life. Where sea stars were removed in experiments, variety on the rocks dropped.",
          "Sea otters in kelp forests: they eat sea urchins. Without otters, urchins can graze kelp down to bare rock.",
          "Beavers: their dams slow streams, raise water levels and create wetlands that many other species use.",
          "Elephants on savannas: by knocking over and eating trees, they help keep open grassland from turning into woodland.",
          "Fig trees in many tropical forests: they fruit at different times of year, so they feed birds, bats and monkeys when little else is available.",
        ],
      },
      {
        heading: "Related ideas",
        list: [
          "Ecosystem engineers: species that physically change their surroundings, such as beavers building dams or earthworms mixing soil.",
          "Keystone resources: a food or habitat that many species depend on at a critical time, such as fruiting figs or a permanent water source.",
          "Foundation species: common, dominant species such as reef corals or the main trees in a forest, which build the habitat itself.",
          "Keystone mutualists: partners such as certain pollinators or seed dispersers that many plants rely on to reproduce.",
        ],
      },
      {
        heading: "Why it matters for land and water",
        paragraphs: [
          "Losing one keystone species can set off a chain of changes that is hard to reverse. That is one reason conservation work often focuses on protecting particular species or bringing them back.",
          "For people restoring land, the idea is a reminder that not every plant or animal plays an equal role. Some trees feed wildlife in lean seasons, some animals spread seeds, and some organisms change how water moves. A mix of native species is more likely to include these key players than a single planted crop or tree.",
        ],
      },
      {
        heading: "Limits of the idea",
        list: [
          "It is often hard to prove a species is keystone without long study or careful experiments.",
          "A species can have a strong role in one place and a weak one somewhere else.",
          "The label is sometimes used loosely for any important or popular species.",
          "Most ecosystems depend on many interactions, not on one species alone, so local ecologists are the best guide for a given site.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's program in Chauthe is at the planning and setup stage, and work on the hillside has not started. The plan begins with holding water in year one, through contour trenches, small check dams, recharge ponds and a community nursery.",
      "In years two and three, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. The site is now a pine monoculture above springs that ZenTrust reports are drying. ZenTrust sees the pine as a major cause, which it will measure. Pine will be thinned only where the Thumki Danda Gairikharka Community Forest User Group and the Division Forest Office approve. Species will be chosen with the user group and local nurseries.",
    ],
    related: [
      "why-plant-native-trees",
      "what-is-a-monoculture",
      "what-is-ecological-succession",
      "what-is-a-riparian-buffer",
    ],
  },
  {
    slug: "what-is-a-lichen",
    title: "What is a lichen?",
    metaTitle: "What Is a Lichen? Partnership, Types and Role | ZenTrust",
    description: "A lichen is a partnership between a fungus and an alga or cyanobacterium. How lichens live, the main types and why they matter.",
    shortAnswer: "A lichen is not a single organism but a partnership. A fungus lives together with a photosynthetic partner, usually a green alga or a cyanobacterium. The fungus provides structure and shelter, and the partner makes food from sunlight. Together they can grow on bare rock, bark and soil where few other things survive.",
    sections: [
      {
        heading: "How the partnership works",
        paragraphs: [
          "The fungus makes up most of the lichen's body. It holds water, anchors the lichen to a surface and protects its partner from drying out and strong light. The alga or cyanobacterium lives inside the fungal layers and uses sunlight to make sugars, which feed both.",
          "Some lichens also host other fungi and bacteria, so a lichen is best thought of as a small community rather than a pair.",
        ],
      },
      {
        heading: "Main types",
        list: [
          "Crustose: flat crusts pressed tightly onto rock or bark, hard to lift off.",
          "Foliose: leafy, lobed sheets attached at points, with a distinct upper and lower side.",
          "Fruticose: shrubby or hanging forms, such as beard-like strands on branches.",
          "Some lichens mix features of these forms, so the groups are a rough guide.",
        ],
      },
      {
        heading: "Why lichens matter",
        list: [
          "They are pioneer species that can settle on bare rock and help begin soil formation.",
          "They slowly break down rock surfaces, and their remains add organic matter.",
          "Lichens with cyanobacteria can take nitrogen from the air and add it to the surroundings.",
          "They provide food, shelter and nesting material for many insects, snails, birds and some mammals.",
          "Reindeer moss, an important winter food for reindeer and caribou, is actually a lichen.",
        ],
      },
      {
        heading: "Lichens and clean air",
        paragraphs: [
          "Lichens have no roots. They take in water and nutrients directly from rain, mist and air, along with any pollutants. Many species are sensitive to air pollution, especially sulfur dioxide. A wide variety of lichens is often a sign of fairly clean air, and their loss can point to a problem. They grow slowly, so a damaged lichen community can take a long time to recover.",
        ],
      },
      {
        heading: "Common questions",
        list: [
          "Do lichens harm trees? No. They use bark only as a surface and do not feed on the tree.",
          "Are lichens moss? No. Mosses are plants. Lichens are fungus-based partnerships, though the two often grow side by side.",
          "Can you eat them? Some have been used as food or dyes, but some are toxic. Do not eat wild lichens without expert guidance.",
          "Why do they survive dry spells? Many can dry out almost completely, go dormant and revive when wet again.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's published plan for Chauthe does not mention lichens, so this topic has little direct link to the planned work.",
      "The plan focuses on water and trees. ZenTrust reports that springs below the pine forest are drying. In Year 1, the plan is to hold water with contour trenches, small check dams and recharge ponds, and to start a community nursery. Work on the hillside has not started yet.",
    ],
    related: [
      "what-are-pioneer-species",
      "what-is-ecological-succession",
      "what-is-mycelium",
      "what-is-topsoil",
    ],
  },
  {
    slug: "what-is-a-monsoon",
    title: "What is a monsoon?",
    metaTitle: "What Is a Monsoon? Causes, Seasons and Effects | ZenTrust",
    description: "A monsoon is a seasonal shift in winds that brings a long wet season and a dry season. How it works, where it happens and what it means for land and water.",
    shortAnswer: "A monsoon is a seasonal reversal of the prevailing winds over a large region. It is largely caused by land and sea heating at different rates. In summer, moist air flows in from the ocean and brings a long rainy season. In winter, drier air flows out from the land. People often use 'the monsoon' to mean the rainy season itself.",
    sections: [
      {
        heading: "What causes a monsoon",
        paragraphs: [
          "Land heats up and cools down faster than the ocean. In summer, a large landmass grows hotter than the sea around it. Warm air over the land rises, which lowers the air pressure there. Cooler, moist air from the ocean flows in to replace it. As that air rises and cools, its moisture falls as rain, in repeated spells over a rainy season that can last months. The seasonal shift of the tropical rain belt also plays a large part.",
          "In winter the pattern mostly reverses. The land cools faster than the sea, so winds blow from land toward the ocean. These winds usually carry little moisture, which is why many monsoon regions have a long dry season. Some coasts are an exception, where winter winds pick up moisture crossing the sea.",
          "The word is thought to come from the Arabic word mawsim, meaning season. This is likely because sailors and traders timed their voyages to winds that changed direction at the same time each year.",
        ],
      },
      {
        heading: "Where monsoons happen",
        list: [
          "South Asia, including India, Nepal, Bangladesh and Pakistan. This is the best-known monsoon system.",
          "East and Southeast Asia.",
          "West Africa.",
          "Northern Australia.",
          "The southwestern United States and northwestern Mexico, which have a smaller summer monsoon.",
        ],
      },
      {
        heading: "Monsoons and mountains",
        paragraphs: [
          "When moist monsoon air meets hills or mountains, it is forced upward. It cools as it rises, and more of its moisture falls as rain. Slopes facing the incoming wind often get much more rain than nearby lowlands. Valleys and slopes on the far side can stay much drier. This sheltered area is called a rain shadow.",
          "Monsoon rain is not steady. It often comes in heavy bursts with breaks in between. The amount and timing also change from year to year.",
        ],
      },
      {
        heading: "Why monsoons matter for land and water",
        list: [
          "Monsoon rain refills rivers, ponds, soil moisture and groundwater, which can feed springs and wells through the dry season.",
          "Many farming systems in monsoon regions are built around the arrival of the rains.",
          "Heavy rain on bare or compacted ground runs off fast. This can cause erosion, floods and landslides.",
          "Water that runs off quickly does not soak in, so less is stored for the dry months.",
          "A late, weak or uneven monsoon can lead to drought stress for crops and trees and water shortages for people.",
        ],
      },
      {
        heading: "Working with monsoon rain",
        paragraphs: [
          "The common goal in monsoon landscapes is to slow water down and help it soak in. Then more of the wet season's rain is still in the ground when the dry season comes.",
        ],
        list: [
          "Keep soil covered with plants, leaf litter or mulch so heavy drops do not break it apart.",
          "Use contour features such as trenches, swales or terraces to slow runoff on slopes.",
          "Store water in ponds or tanks where the site allows it.",
          "Plant trees and deep-rooted plants, which can open the soil and help water infiltrate.",
          "Earthworks on steep or unstable slopes can be risky. Get local expert advice, and check whether permits are needed.",
        ],
      },
    ],
    inChauthe: [
      "Chauthe is a hillside site in Ward 3 of Kakani Rural Municipality, Nepal, at about 1,200 to 1,600 m. As in most of Nepal, most of the year's rain falls during the summer monsoon. ZenTrust reports that springs below the site are drying. It describes the pine monoculture as a major cause, which it will measure.",
      "The first year of ZenTrust's plan will focus on holding monsoon water on the hillside. The work will include contour trenches, small check dams and recharge ponds. The aim is for more rain to soak in rather than run off. A community nursery will also be set up.",
      "The land is community forest of the Thumki Danda Gairikharka Community Forest User Group (CFUG). In years two and three, the plan is to plant in layers with native and fruit trees, nitrogen fixers and ground cover. Pine will be thinned only where the CFUG and the Division Forest Office approve. Work on the hillside has not started yet.",
    ],
    related: [
      "what-is-a-rain-shadow",
      "groundwater-recharge",
      "contour-trenches",
      "what-causes-landslides",
    ],
  },
  {
    slug: "what-is-the-carbon-cycle",
    title: "What is the carbon cycle?",
    metaTitle: "What Is the Carbon Cycle? A Plain Guide | ZenTrust",
    description: "The carbon cycle is how carbon moves between air, plants, soil, oceans and rock. Its main stores, how carbon moves, and how land use changes it.",
    shortAnswer: "The carbon cycle is the constant movement of carbon between the air, living things, soil, oceans and rock. Plants take carbon dioxide from the air to grow. Breathing, decay and burning send it back. Some carbon is held for days, some for centuries, and some for millions of years.",
    sections: [
      {
        heading: "Where carbon is stored",
        paragraphs: [
          "Carbon is found in every living thing and in many non-living ones. Scientists group these places into stores, sometimes called pools or reservoirs.",
        ],
        list: [
          "The atmosphere, mainly as carbon dioxide, with smaller amounts of methane.",
          "Living plants, animals, fungi and microbes.",
          "Soil, as dead roots, leaf litter and humus.",
          "Oceans, lakes and rivers, as dissolved carbon and in water life.",
          "Rocks such as limestone, and fossil fuels such as coal, oil and gas.",
        ],
      },
      {
        heading: "How carbon moves",
        list: [
          "Photosynthesis: plants and algae take carbon dioxide from air or water and use sunlight to turn it into sugars and plant tissue.",
          "Respiration: plants, animals and microbes break down sugars for energy and release carbon dioxide.",
          "Decomposition: fungi and bacteria break down dead material. Some carbon returns to the air and some stays in the soil.",
          "Ocean exchange: carbon dioxide dissolves into seawater and can also escape back to the air.",
          "Burning: wildfires and the burning of wood and fossil fuels release stored carbon quickly.",
          "Rock processes: weathering slowly draws carbon from the air, and volcanoes release it.",
        ],
      },
      {
        heading: "The fast cycle and the slow cycle",
        paragraphs: [
          "In the fast cycle, carbon moves between air, plants, animals, soil and the ocean surface. A leaf can grow, fall and rot within a year. A tree trunk or deep soil can hold carbon much longer.",
          "In the slow cycle, carbon moves through rocks, deep ocean sediments and fossil fuels. These changes normally take a very long time. Burning fossil fuels takes carbon from the slow cycle and puts it into the fast cycle within a short span.",
        ],
      },
      {
        heading: "The role of forests and soil",
        paragraphs: [
          "Growing plants pull carbon from the air. Some of it goes into wood, and some goes underground through roots. Fallen leaves, dead roots and soil life turn part of it into soil organic matter.",
          "This storage is not permanent. Fire, clearing, erosion and frequent plowing can send carbon back to the air. Land that keeps a living cover, healthy soil and a mix of plants tends to hold carbon more steadily than bare or disturbed ground. How much it holds depends on climate, soil and how the land is managed.",
        ],
      },
      {
        heading: "How people change the cycle",
        list: [
          "Burning coal, oil and gas releases carbon that was locked away underground.",
          "Clearing forests removes plants that take up carbon and often releases carbon from the wood and soil.",
          "Plowing, overgrazing and erosion can reduce the carbon held in soil.",
          "Extra carbon dioxide and methane in the air trap more heat, which is the main driver of current climate change.",
          "Restoring forests, wetlands and soils can help move some carbon back into land, though it does not cancel ongoing emissions.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for Chauthe, Nepal, starts with water. The program is at the planning and setup stage, and work on the hillside has not started. ZenTrust reports that springs below the hillside are drying, and it describes the pine monoculture as a major cause, which it will measure.",
      "In the first year, the plan is to hold water on the slope with contour trenches, small check dams and recharge ponds, and to start a community nursery. In years two and three, the plan is to plant native and fruit trees, nitrogen fixers and ground cover in layers. Pine will be thinned only where the community forest user group and the Division Forest Office approve.",
      "From year four on, the plan is to let the forest lead. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "what-is-soil-organic-matter",
      "what-is-leaf-litter",
      "what-is-humus",
      "what-is-the-nitrogen-cycle",
    ],
  },
  {
    slug: "what-is-a-berm",
    title: "What is a berm?",
    metaTitle: "Berm: What It Is and How It Works on Land | ZenTrust",
    description: "A berm is a raised bank of earth used to guide, slow or hold water, or to block wind and noise. How berms work, common uses and what can go wrong.",
    shortAnswer: "A berm is a raised bank or mound of earth, usually long and low. On farms and hillsides, berms are used to slow, spread or hold rainwater. They are often built from the soil dug out of a trench, swale or pond next to them.",
    sections: [
      {
        heading: "What a berm is",
        paragraphs: [
          "A berm is a strip of raised ground with sloping sides. It can be made of soil, rock, gravel or a mix, and is usually covered with plants to hold it in place.",
          "The word is used in several fields. In land and water work, it means a low earth bank that changes how water moves across the ground. In gardens, it can mean a shaped mound for planting. On beaches, it means a natural ridge of sand or gravel left by waves.",
        ],
      },
      {
        heading: "Common uses",
        list: [
          "Slowing runoff on a slope so more rain soaks into the ground.",
          "Steering water away from buildings, paths or eroding areas.",
          "Holding water in a pond, basin or rain garden.",
          "Keeping floodwater or polluted runoff out of a field or stream.",
          "Blocking wind, noise or views when planted with shrubs and trees.",
        ],
      },
      {
        heading: "Berms with swales and trenches",
        paragraphs: [
          "A berm is often paired with a ditch. When a swale or contour trench is dug along the level line of a slope, the dug soil is piled on the downhill side as a berm. Water running down the slope collects in the ditch, and the berm helps keep it there while it soaks in.",
          "Because the ground beside a berm often stays moist longer, berms are often good places to plant trees, shrubs and ground cover. The roots then help hold the berm together.",
        ],
      },
      {
        heading: "How a berm is built",
        list: [
          "Mark the line first. For water work this is usually a contour, where every point is at the same height.",
          "Pile and firm the soil in thin layers rather than in one loose heap.",
          "Keep the sides gentle enough that they do not slump or wash away.",
          "Plan a safe overflow, such as a lower spillway of rock or grass, for heavy rain.",
          "Cover the fresh soil quickly with mulch, seed or plants.",
        ],
      },
      {
        heading: "Risks and trade-offs",
        list: [
          "A berm without a safe overflow can be overtopped in a storm and fail, which can cause more erosion than before.",
          "Bare new berms erode easily until plants take hold.",
          "On steep or unstable slopes, holding extra water in the ground can raise the risk of slips or landslides.",
          "Large berms and berms that hold back water may need engineering advice and local permits.",
          "Changing water flow can affect neighbors, roads and streams downhill, so it is worth checking with local authorities and the people affected.",
        ],
      },
    ],
    inChauthe: [
      "Berms are not named as a separate step in ZenTrust's plan. Contour trenches and ponds of the kind the plan describes often have a berm on the downhill side, but ZenTrust has not set out those design details.",
      "ZenTrust reports that springs below the Chauthe hillside are drying. In Year 1, the plan is to hold more rain on the slope with contour trenches, small check dams and recharge ponds, and to set up a community nursery. The program is at the planning and setup stage, and work on the hillside has not started. The site is community forest managed by the Thumki Danda Gairikharka Community Forest User Group.",
    ],
    related: ["what-is-a-swale", "contour-trenches", "recharge-ponds", "what-is-surface-runoff"],
  },
  {
    slug: "how-to-plant-a-tree",
    title: "How do you plant a tree?",
    metaTitle: "How to Plant a Tree: A Step-by-Step Guide | ZenTrust",
    description: "How to plant a tree step by step: choosing a spot, digging the hole, setting the root flare, watering, mulching and early care.",
    shortAnswer: "Choose a tree that suits the site, then dig a hole that is wide and shallow, no deeper than the root ball. Set the tree so the root flare sits at or just above ground level, refill with the soil you dug out, and water well. Add mulch, keeping it off the trunk, and water regularly until the roots are established.",
    sections: [
      {
        heading: "Before you dig",
        list: [
          "Pick a species that suits your climate, soil, sun and available space when fully grown.",
          "Check how tall and wide the tree will get, and keep it clear of buildings, wires and paths.",
          "Contact your local utility locating service before digging, so you do not hit buried lines.",
          "Plant during the cool or rainy season for your area, when the tree is under less stress.",
          "Keep the roots moist and shaded until planting. Dry roots are a common cause of failure.",
        ],
      },
      {
        heading: "Step by step",
        list: [
          "Dig a hole about two to three times as wide as the root ball, but no deeper than it.",
          "Find the root flare, where the trunk widens into the roots. Set the tree so the flare is at or slightly above the surrounding soil.",
          "Remove the pot and any synthetic wrapping, and cut away a wire basket at least from the top of the root ball. Gently loosen or cut roots that circle the root ball.",
          "Refill the hole with the soil you dug out, firming it lightly with your hands to remove large air pockets.",
          "Water slowly and deeply to settle the soil.",
          "Spread mulch over the root area, leaving a gap around the trunk.",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "Planting too deep is one of the most common problems. A buried root flare can lead to rot and weak growth over time. It is better to plant a little high than too low.",
        ],
        list: [
          "Heaping mulch against the trunk, which keeps bark wet and invites rot and pests.",
          "Filling the hole with rich compost only, which can make roots stay in the hole instead of spreading out.",
          "Staking too tightly or for too long, which can weaken the trunk.",
          "Forgetting to water during dry spells in the first years.",
        ],
      },
      {
        heading: "Bare-root, container and seedlings",
        paragraphs: [
          "Bare-root trees are sold without soil and are usually planted while dormant. Spread the roots out over a small mound of soil in the hole. Container trees can be planted over a longer season, but their roots often circle and need loosening. Small seedlings from a nursery are cheap and often establish well, though they need protection from weeds and grazing animals.",
        ],
      },
      {
        heading: "Aftercare",
        paragraphs: [
          "A new tree needs regular water until its roots grow into the surrounding soil, which can take a few seasons. Water deeply and less often rather than a little every day. Keep grass and weeds back from the base, and refresh mulch as it breaks down. Stake only if the tree cannot stand on its own or the site is very windy, and remove ties once it is stable.",
        ],
      },
      {
        heading: "Planting on slopes",
        paragraphs: [
          "On a hillside, a small flat basin or half-moon of soil on the downhill side helps catch rain around the tree. Trenches or swales dug along the contour slow runoff, and trees planted beside them can use the water they hold. Steep or unstable slopes need care, so local forestry or soil conservation advice is worth getting.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is still being planned, and work on the hillside has not started. In the plan, Year 1 focuses on holding water on the hillside and setting up a community nursery.",
      "In years 2 and 3, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries. Pine will be thinned only where the user group and the Division Forest Office approve.",
    ],
    related: [
      "when-to-plant-trees",
      "how-to-grow-trees-from-seed",
      "why-plant-native-trees",
      "what-is-mulch",
    ],
  },
  {
    slug: "what-is-loam-soil",
    title: "What is loam soil?",
    metaTitle: "Loam Soil: What It Is and Why Growers Value It | ZenTrust",
    description: "Loam is soil with a balanced mix of sand, silt and clay. What it is, why it suits most plants, its main types and how to tell if you have it.",
    shortAnswer: "Loam is soil with a balanced mix of sand, silt and clay, usually with less clay than sand or silt, so no single particle size dominates how it behaves. It drains well but still holds moisture and nutrients, which is why it suits most garden plants and crops.",
    sections: [
      {
        heading: "What loam is made of",
        paragraphs: [
          "All mineral soil is made of particles of three sizes. Sand is the largest and feels gritty. Silt is medium and feels smooth, like flour. Clay is the smallest and feels sticky when wet.",
          "The share of each is called soil texture. Soil scientists use a chart called the soil texture triangle to name each mix. Loam sits in a central part of the triangle. It usually has less clay than sand or silt, because a little clay has a big effect, so the three sizes balance each other out in how the soil behaves.",
        ],
      },
      {
        heading: "Why growers value it",
        list: [
          "Sand keeps it open, so water drains and air reaches roots.",
          "Clay and silt help it hold water and nutrients between rains.",
          "It is usually easy to dig and work when moist.",
          "Roots can spread through it without much resistance.",
          "It responds well to added organic matter, which feeds soil life.",
        ],
      },
      {
        heading: "Main types of loam",
        paragraphs: [
          "Most real soils are not a perfect balance. When one particle size leans a little heavier, the soil gets a more specific name.",
        ],
        list: [
          "Sandy loam: more sand, drains fast, warms quickly in spring, dries out sooner.",
          "Silt loam: more silt, smooth and fertile, but can form a crust on the surface after heavy rain.",
          "Clay loam: more clay, holds water and nutrients well, but can get sticky when wet and hard when dry.",
          "Loam: a balanced mix, with none of these traits strongly showing.",
        ],
      },
      {
        heading: "How to tell what you have",
        list: [
          "Feel test: rub moist soil between your fingers. Gritty points to sand, silky to silt, sticky to clay.",
          "Ribbon test: squeeze moist soil between thumb and finger. A long ribbon means more clay; loam forms a short ribbon that breaks easily.",
          "Jar test: shake soil with water in a clear jar and let it settle. Sand sinks first, then silt, with clay settling last.",
          "Lab test: a soil lab or local extension service can measure texture, and often pH and nutrients too.",
        ],
      },
      {
        heading: "Can you turn soil into loam?",
        paragraphs: [
          "Texture is hard to change. It depends mostly on the rock and minerals the soil formed from, and you would need to add huge amounts of material to shift it. Adding sand to clay soil is often discouraged, because a small amount can make it set harder.",
          "What you can change is structure: how particles clump together and how much space there is for air and water. Adding compost, mulch and other organic matter, keeping roots in the ground and avoiding compaction all help most soils behave more like loam over time.",
          "Note that \"loam\" sold in bags or by the truckload is a trade term. Quality varies, so it is worth asking what is in it.",
        ],
      },
    ],
    inChauthe: [
      "Work on ZenTrust's hillside site in Chauthe, Nepal, has not started yet, so there are no soil results to report.",
      "In Year 1, the plan is to hold water on the hillside with contour trenches, small check dams and recharge ponds, and to set up a community nursery. In Years 2-3, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "what-is-topsoil",
      "how-to-improve-clay-soil",
      "what-is-soil-organic-matter",
      "what-is-humus",
    ],
  },
  {
    slug: "what-is-a-floodplain",
    title: "What is a floodplain?",
    metaTitle: "Floodplains: What They Are and Why They Matter | ZenTrust",
    description: "A floodplain is flat land beside a river that floods when water overflows its banks. How floodplains form, what they do and why building on them is risky.",
    shortAnswer: "A floodplain is the flat, low land next to a river or stream that is covered with water when the river rises over its banks. Floods are a normal part of how this land works. They spread water out, slow it down and leave behind fresh layers of sediment.",
    sections: [
      {
        heading: "How floodplains form",
        paragraphs: [
          "Rivers move sideways over time. They wear away the outside of bends and drop sand and silt on the inside. When a river floods, the water spreads out and slows down, and the fine sediment it carries settles on the land. Over many years, this builds a wide, flat valley floor.",
          "Floodplains are widest where rivers flow through lower, gentler ground. Narrow mountain streams often have little or no floodplain because the valley is too steep for sediment to settle.",
        ],
      },
      {
        heading: "What floodplains do",
        list: [
          "Store floodwater and release it slowly, which can lower flood peaks downstream.",
          "Let water soak into the ground, which can help refill groundwater.",
          "Trap sediment and some pollutants before they travel further downstream.",
          "Build fertile soil from repeated layers of silt.",
          "Provide habitat for fish, birds, wetland plants and riverside forests.",
        ],
      },
      {
        heading: "Farming and living on floodplains",
        paragraphs: [
          "Floodplain soils are often deep and fertile, and the land is flat and close to water. That is why many farms, towns and cities grew up on them. The same features that make them useful also make them risky.",
          "Buildings, roads and crops on a floodplain can be damaged when the river rises. Floods can also come faster and higher where land upstream has been cleared or paved, because more rain runs off the surface instead of soaking in.",
        ],
      },
      {
        heading: "Flood zones and local rules",
        paragraphs: [
          "Many governments map floodplains and mark areas by how likely they are to flood. These maps can affect where building is allowed, what permits are needed and whether flood insurance is required. Maps are estimates, not guarantees, and land outside a mapped zone can still flood.",
          "Anyone buying, building on or changing land near a river should check local flood maps and talk to the local planning office or a qualified professional.",
        ],
      },
      {
        heading: "Managing and protecting floodplains",
        list: [
          "Keep or restore trees and plants along riverbanks to hold soil and slow water.",
          "Leave room for the river to spread out instead of hemming it in everywhere.",
          "Avoid new buildings in the most flood-prone areas.",
          "Restore wetlands that store water during high flows.",
          "Slow runoff higher in the watershed so less water rushes downstream at once.",
        ],
      },
      {
        heading: "Trade-offs of levees and walls",
        paragraphs: [
          "Levees and flood walls can protect a town, but they also cut the river off from its floodplain. Water that cannot spread out may rise higher and flow faster further along. When a levee fails or is overtopped, damage can be severe. For this reason, many places now combine built defenses with giving rivers more space.",
        ],
      },
    ],
    inChauthe: [
      "The Chauthe site is a hillside at about 1,200 to 1,600 m, not a floodplain, so this topic applies only indirectly to ZenTrust's plan.",
      "The link is the idea of slowing water where it falls. Work has not started yet. In the first year, ZenTrust plans to build contour trenches, small check dams and recharge ponds to hold rain on the slope. The aim will be to help water soak in, since ZenTrust reports that springs below the site are drying.",
    ],
    related: [
      "what-is-a-riparian-buffer",
      "what-is-a-watershed",
      "what-is-surface-runoff",
      "what-is-infiltration",
    ],
  },
  {
    slug: "what-is-a-monoculture",
    title: "What is a monoculture?",
    metaTitle: "Monoculture: What It Is, Pros and Cons | ZenTrust",
    description: "A monoculture is one crop or tree species grown alone over a wide area. Why it is common, its risks for soil, water and pests, and the alternatives.",
    shortAnswer: "A monoculture is the practice of growing a single crop or tree species over a large area, often year after year. It is simple to plant, manage and harvest, but it can wear down soil, invite pests and disease, and support far less wildlife than a mixed planting.",
    sections: [
      {
        heading: "What the word means",
        paragraphs: [
          "Mono means one, and culture here means growing. A wheat field, a large cornfield, a palm oil estate and a pine plantation are all monocultures. The term can also cover one variety of a crop, where every plant is close to genetically the same.",
          "The opposite is a polyculture, where several species grow together in the same space, as in a natural forest, a mixed garden or a food forest.",
        ],
      },
      {
        heading: "Why monocultures are common",
        list: [
          "Planting, spraying and harvesting can all be done with the same machines at the same time.",
          "Uniform crops are easier to sell in bulk and to process.",
          "Farmers and foresters can specialize in one crop and its needs.",
          "In the short term, yields of that one product per area can be high.",
        ],
      },
      {
        heading: "The main risks",
        list: [
          "Pests and diseases spread easily when every plant is the same host. A classic example is the potato famine in Ireland, where heavy reliance on a few nearly identical potato varieties let blight spread widely and, alongside political and economic causes, led to mass hunger.",
          "Soil can lose nutrients, organic matter and structure when the same crop draws on the same nutrients year after year and the ground is left bare between crops.",
          "More fertilizer and pesticide are often needed to keep yields up, which costs money and can pollute water.",
          "Fewer kinds of plants mean fewer insects, birds and soil organisms.",
          "A single crop failure or price drop can hit a farm or community hard.",
        ],
      },
      {
        heading: "Tree plantations as monocultures",
        paragraphs: [
          "Forests can be monocultures too. Large plantations of a single fast-growing tree, such as pine or eucalyptus, are common for timber, pulp or quick reforestation. They give tree cover, but they usually lack the layers of shrubs, herbs and ground plants found in a natural forest.",
          "Dense stands can shade out other plants, and some drop thick needle or leaf litter that few species grow through. Some plantations are also linked to concerns about water use and fire risk. The effects depend on species, climate, soil and how the stand is managed, so local study matters.",
        ],
      },
      {
        heading: "Alternatives",
        list: [
          "Crop rotation: changing the crop in a field from season to season.",
          "Intercropping and companion planting: growing two or more crops side by side.",
          "Cover crops: keeping soil covered and alive between main crops.",
          "Agroforestry and food forests: mixing trees, shrubs and ground plants in layers.",
          "Mixed native forest restoration: replacing or diversifying single-species stands over time.",
        ],
        paragraphs: [
          "Moving away from a monoculture usually takes several seasons, and the right mix depends on local conditions. Extension services, forestry offices and experienced local growers are good places to start.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust describes the hillside at Chauthe, in Kakani Rural Municipality, as a pine monoculture. The land is community forest of the Thumki Danda Gairikharka Community Forest User Group. ZenTrust reports that springs below the slope are drying and describes pine as \"a major cause, which we'll measure.\"",
      "Work on the hillside has not started. In the first year, the plan is to hold water with contour trenches, small check dams and recharge ponds, and to set up a community nursery. In years two and three, the plan is to plant native and fruit trees, nitrogen fixers and ground cover in layers. Pine will be thinned only where the user group and the Division Forest Office approve.",
      "From year four on, the aim is to let the forest lead. Species will be chosen with the user group and local nurseries.",
    ],
    related: [
      "pine-plantations-and-water",
      "what-is-agroforestry",
      "crop-rotation-and-intercropping",
      "why-plant-native-trees",
    ],
  },
  {
    slug: "what-is-a-rain-shadow",
    title: "What is a rain shadow?",
    metaTitle: "Rain Shadow: What It Is and Why One Side Stays Dry | ZenTrust",
    description: "A rain shadow is a dry area on the downwind side of mountains. How it forms, well-known examples, and what it means for land, water and planting.",
    shortAnswer: "A rain shadow is a drier area on the downwind side of a mountain range. Moist air rises over the mountains, cools and drops much of its rain on the windward side. By the time it sinks down the far side, it is warmer and drier, so less rain falls there.",
    sections: [
      {
        heading: "How a rain shadow forms",
        list: [
          "Wind carries moist air, often from the sea, toward a mountain range.",
          "The mountains force the air to rise. Rising air cools.",
          "Cool air holds less water vapor, so clouds form and rain or snow falls on the windward slopes.",
          "The air crosses the ridge with much of its moisture gone.",
          "As it sinks down the leeward side, it warms and dries further, so clouds tend to break up rather than rain.",
        ],
      },
      {
        heading: "Well-known examples",
        paragraphs: [
          "Rain shadows are found on every continent with large mountain ranges. A few widely cited examples are below. The size of the effect depends on the height of the mountains and the direction of the prevailing winds.",
        ],
        list: [
          "The Tibetan Plateau, north of the Himalaya, is much drier than the southern slopes that face the monsoon.",
          "Land east of the Sierra Nevada in the western United States, including Death Valley, lies in a rain shadow.",
          "East of the Cascade Range in Washington and Oregon, forests give way to drier grassland and shrubland.",
          "Parts of Patagonia, east of the southern Andes, are dry steppe.",
        ],
      },
      {
        heading: "Signs you are in one",
        list: [
          "Rainfall drops noticeably once you cross a ridge, even over a short distance.",
          "Vegetation changes from forest to grass, scrub or desert plants on the downwind side.",
          "Skies are often clearer, and days can be warmer and nights cooler.",
          "Warm, dry winds sometimes blow down the slopes. These are called foehn winds in the Alps and chinook winds in North America.",
        ],
      },
      {
        heading: "Small-scale versions",
        paragraphs: [
          "The same idea works on a smaller scale. A single hill or ridge can leave one valley drier than the next. On a single hill, the side facing the main rain-bearing wind may get more rain than the sheltered side. Slope direction also changes how much sun and drying a site gets. These local differences are part of what is called a microclimate.",
        ],
      },
      {
        heading: "What it means for land and water",
        list: [
          "Less rain means less water to soak in and recharge springs and groundwater, so holding the rain that does fall matters more.",
          "Bare soil dries and erodes easily, so ground cover and mulch are especially useful.",
          "Plant choices should suit drier conditions. Local nurseries and growers often know what survives.",
          "Rivers in rain-shadow areas are often fed by snow and rain from the wetter side, which can make water rights and sharing important.",
          "Climate records for a nearby town may not match your site if a ridge sits between them, so local observation helps.",
        ],
      },
    ],
    inChauthe: [
      "A rain shadow is mainly a regional effect. This guide does not assess whether Chauthe lies in one.",
      "ZenTrust's plan for Chauthe focuses on keeping more of the rain that falls on the hillside. ZenTrust reports that springs below the hillside are drying. In the first year, it plans contour trenches, small check dams, recharge ponds and a community nursery to help water soak in rather than run off. Work on the hillside has not started yet.",
      "In years two and three, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. Pine will be thinned only where the Community Forest User Group and the Division Forest Office approve. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries.",
    ],
    related: [
      "what-is-a-monsoon",
      "what-is-a-microclimate",
      "rainwater-harvesting-in-the-hills",
      "what-is-evapotranspiration",
    ],
  },
  {
    slug: "what-is-the-nitrogen-cycle",
    title: "What is the nitrogen cycle?",
    metaTitle: "The Nitrogen Cycle: How Nitrogen Moves Through Soil | ZenTrust",
    description: "The nitrogen cycle is how nitrogen moves between air, soil, water and living things. The main steps, why they matter and how the cycle gets out of balance.",
    shortAnswer: "The nitrogen cycle is the natural process that moves nitrogen between the air, soil, water and living things. Most nitrogen sits in the air as a gas that plants cannot use. Bacteria and a few other processes turn it into forms plants can take up. It then passes through plants and animals, returns to the soil when they die or leave waste, and some of it is eventually returned to the air.",
    sections: [
      {
        heading: "Why nitrogen matters",
        paragraphs: [
          "Every living thing needs nitrogen to build proteins and DNA. Plants use a lot of it for leaves and growth, which is why yellowing leaves and slow growth are common signs of a shortage, though other problems can cause the same signs.",
          "The catch is that most of the air is nitrogen gas, but plants and animals cannot use it in that form. It has to be converted first. The nitrogen cycle is the set of steps that does this and then returns some of it to the air.",
        ],
      },
      {
        heading: "The main steps",
        list: [
          "Fixation: certain bacteria turn nitrogen gas into ammonia. Some live freely in soil. Others live in root nodules of legumes and some trees. Lightning also fixes a small amount.",
          "Nitrification: other soil bacteria convert ammonia into nitrite and then nitrate, a form most plants take up easily.",
          "Uptake: plants absorb nitrate and ammonium through their roots and build them into their tissues. Animals get nitrogen by eating plants or other animals.",
          "Decomposition: when leaves fall, plants die or animals leave waste, fungi and bacteria break the material down and release ammonium back into the soil.",
          "Denitrification: in wet, low-oxygen soil, some bacteria turn nitrate back into nitrogen gas, which returns to the air.",
        ],
      },
      {
        heading: "The role of soil life",
        paragraphs: [
          "Almost every step depends on microbes. Healthy soil with plenty of organic matter, moisture and air supports these bacteria and fungi. Bare, compacted or eroded soil usually supports fewer, so nitrogen moves through the system less smoothly.",
          "Organic matter also acts as a store. Nitrogen held in leaf litter, roots and humus is released slowly as it breaks down, rather than all at once.",
        ],
      },
      {
        heading: "How the cycle gets out of balance",
        list: [
          "Too much fertilizer: nitrate the plants do not use can wash down into groundwater or run off into streams and ponds, where it can feed algae and harm water quality.",
          "Bare soil: with no living roots to take up nitrate, it is more easily lost in heavy rain.",
          "Erosion: topsoil carries much of the land's nitrogen, so losing it means losing nutrients too.",
          "Burning: fire releases much of the nitrogen in plants and litter into the air.",
          "Waterlogging: soggy soil speeds up denitrification, so nitrogen escapes as gas.",
        ],
      },
      {
        heading: "Working with the cycle on the land",
        list: [
          "Grow legumes or nitrogen-fixing trees among other plants.",
          "Keep soil covered with mulch, cover crops or ground-cover plants.",
          "Return plant material to the soil through compost or chop-and-drop.",
          "Use fertilizer, if any, in amounts the plants can actually use. Local agricultural advisers can help with this.",
          "Slow down runoff so soil and nutrients stay in place.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for the hillside at Chauthe includes nitrogen-fixing plants as one of the layers to be planted in years 2 and 3, alongside native and fruit trees and ground cover. Plants like these can add nitrogen to the soil through the bacteria in their roots.",
      "Work on the hillside has not started yet. In year 1, the plan is to hold water in place with contour trenches, small check dams and recharge ponds, and to set up a community nursery. In general, keeping soil in place also helps keep its nutrients. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "nitrogen-fixing-trees",
      "what-is-green-manure",
      "cover-crops",
      "what-is-soil-organic-matter",
    ],
  },
  {
    slug: "what-is-mycelium",
    title: "What is mycelium?",
    metaTitle: "Mycelium: What It Is and What It Does in Soil | ZenTrust",
    description: "Mycelium is the thread-like body of a fungus, mostly hidden in soil and wood. What it is, what it does for soil and plants, and how to support it.",
    shortAnswer: "Mycelium is the main body of a fungus. It is a network of very thin threads, called hyphae, that grows through soil, leaf litter and wood. Mushrooms are only the fruiting part. The mycelium does the work of breaking down dead material, helping many plants take up water and nutrients, and helping hold soil together.",
    sections: [
      {
        heading: "Mycelium and mushrooms",
        paragraphs: [
          "A fungus is mostly hidden. Its threads branch and spread through whatever it is feeding on, often far beyond what you can see. When conditions are right, some fungi push up a mushroom to release spores. The mushroom is like an apple on a tree. The mycelium is the tree.",
          "You can often see mycelium as white or pale fuzz under a log, in old mulch or in leaf mold. Many fungi never make a visible mushroom at all.",
        ],
      },
      {
        heading: "What mycelium does",
        list: [
          "Breaks down leaves, wood and other dead material, returning nutrients to the soil.",
          "In mycorrhizal fungi, partners with plant roots and helps them take up water and nutrients such as phosphorus.",
          "Binds soil particles into crumbs, which helps water soak in and helps soil resist erosion.",
          "Adds to soil organic matter as threads grow and die.",
          "Feeds a wide range of soil animals and microbes.",
        ],
      },
      {
        heading: "Main ways fungi live",
        list: [
          "Decomposers: feed on dead material such as fallen leaves and logs.",
          "Mycorrhizal fungi: live with plant roots, trading nutrients and water for sugars from the plant.",
          "Parasites: feed on living plants or animals and can cause disease.",
          "Lichens: a fungus living together with algae or cyanobacteria.",
        ],
      },
      {
        heading: "Mycorrhizal networks",
        paragraphs: [
          "Most land plants form partnerships with mycorrhizal fungi. Some fungi wrap around roots and some grow partly inside root cells. Many trees, including pines and oaks, depend heavily on these partners.",
          "Fungal threads can link the roots of more than one plant. Popular articles sometimes describe this as trees talking or sharing food through a network. Scientists still debate how much is actually passed between trees this way, so treat strong claims with care.",
        ],
      },
      {
        heading: "How to support mycelium",
        list: [
          "Dig and till less, since digging breaks the threads.",
          "Keep soil covered with mulch, leaf litter or wood chips.",
          "Keep living roots in the ground for as much of the year as you can.",
          "Avoid heavy use of fungicides and large amounts of fertilizer, which can reduce fungal partners.",
          "Leave some fallen wood and leaves where it is safe to do so.",
        ],
      },
      {
        heading: "A note on safety",
        paragraphs: [
          "Some mushrooms are deadly and can look like edible ones. Never eat a wild mushroom unless an experienced local expert has identified it. If someone may have eaten a poisonous mushroom, get medical help right away.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for Chauthe does not name soil fungi directly, so the link here is general.",
      "In Years 2 to 3 the plan is to plant in layers, with native and fruit trees, nitrogen fixers and ground cover, and from Year 4 to let the forest lead. Covered soil with many living roots is the kind of setting where soil fungi tend to do well. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries. Work on the hillside has not started.",
    ],
    related: [
      "what-is-soil-organic-matter",
      "what-is-leaf-litter",
      "no-till-farming",
      "what-is-humus",
    ],
  },
  {
    slug: "what-is-greywater",
    title: "What is greywater?",
    metaTitle: "Greywater: What It Is and How to Reuse It Safely | ZenTrust",
    description: "Greywater is used water from bathroom sinks, showers and laundry. What counts as greywater, how it is reused, the risks and basic safety rules.",
    shortAnswer: "Greywater is lightly used household water from showers, bathtubs, bathroom sinks and washing machines. It does not include toilet water. With care, it can be reused to water plants, which saves fresh water, but it can carry germs and soap residues, so it needs simple handling rules.",
    sections: [
      {
        heading: "What counts as greywater",
        paragraphs: [
          "Greywater is the water left after washing. Blackwater is water from toilets, and it is handled separately because it carries far more germs. Definitions vary by place, so check local rules.",
        ],
        list: [
          "Usually greywater: showers, bathtubs, bathroom sinks and laundry water.",
          "Sometimes counted as greywater, sometimes not: kitchen sink and dishwasher water, which can carry grease and food scraps.",
          "Not greywater: toilet water and water used to wash diapers.",
          "Best kept out of any reuse system: water with harsh cleaners, bleach, paint or solvents.",
        ],
      },
      {
        heading: "Why people reuse it",
        list: [
          "It cuts the amount of fresh water used for watering gardens and trees.",
          "It sends less water into sewers or septic systems.",
          "It turns a waste stream into a steady water source in dry seasons.",
          "Trees and shrubs can use the small amount of nutrients it carries.",
        ],
      },
      {
        heading: "How it is commonly reused",
        paragraphs: [
          "The simplest systems use gravity or the washing machine pump to send water through a pipe to mulched basins around trees and shrubs. The water soaks into the mulch and soil, where soil life breaks down much of what it carries. More complex systems filter and treat the water, and some can supply toilet flushing. These usually need professional design and permits.",
        ],
      },
      {
        heading: "Risks and basic safety rules",
        list: [
          "Never drink greywater, and avoid skin contact where you can.",
          "Do not store it for long. Untreated greywater turns smelly and grows germs quickly.",
          "Release it below mulch or soil, not as a spray, and do not let it pool or run off the property.",
          "Keep it off vegetables and fruit that are eaten raw or grow close to the ground. Trees and ornamental plants are a safer choice.",
          "Keep it well away from wells, springs and streams.",
          "Use mild soaps low in salt and boron. Salt can build up in soil and harm plants over time.",
        ],
      },
      {
        heading: "Rules and getting advice",
        paragraphs: [
          "Greywater rules differ widely. Some places allow simple systems with no permit, some require permits or inspections, and some do not allow reuse at all. Check with your local building, health or water authority before you install anything. A plumber or designer who knows local codes can help with the layout. If anyone in the home has a stomach illness, divert greywater to the sewer or septic system until they recover.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program in Chauthe is at the planning and setup stage, and work on the hillside has not started. The plan centres on holding rainwater on the hillside, where ZenTrust reports that springs below are drying.",
      "Once work begins, Year 1 of the plan is to hold the water with contour trenches, small check dams and recharge ponds, which aim to slow rain and help it soak into the ground, along with a community nursery.",
    ],
    related: ["rainwater-harvesting-in-the-hills", "what-is-mulch", "what-is-drip-irrigation"],
  },
  {
    slug: "what-is-drip-irrigation",
    title: "What is drip irrigation?",
    metaTitle: "Drip Irrigation: What It Is and How It Works | ZenTrust",
    description: "Drip irrigation delivers water slowly to plant roots through tubes and emitters. How it works, its main parts, benefits, drawbacks and when it fits.",
    shortAnswer: "Drip irrigation is a way of watering plants by delivering water slowly, drop by drop, to the soil near their roots through a network of tubes and small outlets called emitters. Less water is lost to evaporation and runoff than with sprinklers or flooding, and leaves and paths stay drier.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Water flows from a source such as a tap, pump or raised tank into a main line, then into smaller tubes laid along plant rows or around trees. Emitters on those tubes release water at a slow, steady rate. The water soaks into a zone of soil around each emitter instead of spreading across the whole surface.",
          "Because the flow is slow, the soil has time to absorb it. Watering runs for longer periods at low rates rather than in short, heavy bursts.",
        ],
      },
      {
        heading: "Main parts of a system",
        list: [
          "Water source: a tap, well, pump or tank. A tank raised above the plants can feed a low-pressure gravity system.",
          "Filter: removes sand, silt and debris that would block the emitters.",
          "Pressure regulator: keeps pressure low and even so tubes and emitters work as intended.",
          "Main line and lateral tubes: carry water to each row or plant.",
          "Emitters or drip tape: release water at a set rate near the roots.",
          "Backflow preventer: stops irrigation water from flowing back into drinking supplies. Local rules may require one.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Uses water more efficiently, since less is lost to evaporation, wind and runoff.",
          "Keeps foliage dry, which can reduce some leaf diseases.",
          "Waters plants, not paths, so fewer weeds sprout between rows.",
          "Works on slopes and uneven ground where flood watering would run off.",
          "Can be run on a timer, saving labor.",
          "Can deliver dissolved fertilizer along with the water, a practice called fertigation.",
        ],
      },
      {
        heading: "Drawbacks and common problems",
        list: [
          "Emitters clog from sediment, algae or mineral deposits, so filters need regular cleaning.",
          "Tubes can be damaged by sun, tools, animals and rodents.",
          "Setup costs more than a hose, and parts wear out over time.",
          "Roots tend to stay near the wetted zone, so plants can suffer quickly if the system fails.",
          "In dry climates, salts can build up at the edges of the wetted area unless rain or occasional deeper watering flushes them.",
        ],
      },
      {
        heading: "Making it work well",
        paragraphs: [
          "Match emitter spacing and flow to the soil. Water spreads more sideways in clay soil and moves more directly downward in sandy soil, so sandy ground usually needs emitters closer together. Cover the tubes with mulch to cut evaporation and protect them from sun. Check lines by walking them while the water is on, and flush the ends now and then to clear sediment.",
          "Drip is most useful where water is scarce, expensive or must be carried, and for crops, nurseries or young trees that need steady moisture. For larger systems, or where water rights and connections to public supplies are involved, local irrigation suppliers or agricultural extension services can help with design and rules.",
        ],
      },
    ],
    inChauthe: [
      "Drip irrigation is not part of ZenTrust's stated plan for Chauthe. The plan's first year will focus on holding rainwater in the hillside with contour trenches, small check dams and recharge ponds, so water soaks into the ground rather than being piped to plants, along with setting up a community nursery.",
      "ZenTrust reports that springs below the site are drying. The aim of the water work will be to help the land store more water on its own, ahead of planting in layers in later years.",
    ],
    related: [
      "rainwater-harvesting-in-the-hills",
      "what-is-mulch",
      "what-is-greywater",
      "how-to-start-a-tree-nursery",
    ],
  },
  {
    slug: "what-causes-landslides",
    title: "What causes landslides?",
    metaTitle: "What Causes Landslides? Triggers and Warning Signs | ZenTrust",
    description: "Landslides happen when gravity overcomes the strength of a slope. The main causes, common triggers, warning signs and ways to lower the risk.",
    shortAnswer: "A landslide happens when the pull of gravity on a slope becomes greater than the strength holding the soil and rock in place. Steep ground and weak material set the stage. Heavy or long rain, earthquakes, undercutting by rivers or roads, and loss of vegetation are common triggers.",
    sections: [
      {
        heading: "The basic idea",
        paragraphs: [
          "Every slope is a balance. Gravity pulls soil and rock downhill. Friction and cohesion between particles, along with plant roots, hold it in place. When something tips that balance, part of the slope moves.",
          "Most landslides have more than one cause. A slope may be weak for years before a single event, such as a storm, sets it off.",
        ],
      },
      {
        heading: "Conditions that make a slope weak",
        list: [
          "Steep slopes, where gravity pulls harder along the surface.",
          "Loose soil, weathered rock or clay layers that lose strength when wet.",
          "Rock layers that tilt in the same direction as the slope, so they can slide along each other.",
          "Old landslide areas, which often move again.",
          "Poor drainage, where water collects in the ground instead of draining away.",
        ],
      },
      {
        heading: "Common triggers",
        list: [
          "Heavy or prolonged rain. Water fills the spaces between soil particles, adds weight and pushes particles apart, which reduces friction.",
          "Earthquakes, which shake loose material and can set off many slides at once.",
          "Undercutting at the base of a slope by rivers, waves or road and building cuts.",
          "Extra weight at the top, such as buildings, fill or piled material.",
          "Loss of vegetation from clearing, fire or overgrazing, which removes roots that bind soil.",
          "Water from leaking pipes, blocked drains or runoff directed onto a slope.",
        ],
      },
      {
        heading: "Warning signs",
        list: [
          "New cracks in the ground, roads or walls on or near a slope.",
          "Trees, poles or fences that start to tilt.",
          "Springs or seeps appearing in new places, or water turning muddy.",
          "Doors and windows that suddenly stick.",
          "Sounds of cracking, rumbling or falling rocks, especially during rain.",
        ],
        paragraphs: [
          "If you see these signs, move away from the slope and contact local authorities. Do not wait for the ground to move.",
        ],
      },
      {
        heading: "Reducing the risk",
        paragraphs: [
          "Good drainage is often one of the most useful steps, because water is behind so many slides. Keeping slopes vegetated, avoiding cuts at the base of a slope and not piling weight at the top also help. Deep-rooted trees and shrubs can bind shallow soil, but they usually cannot hold back a deep-seated failure.",
          "Retaining walls, gabions and other structures need proper design. Slope stability depends on local soil, rock and water, so get advice from a qualified engineer or geologist, and check what permits apply, before major work on a slope.",
        ],
      },
    ],
    inChauthe: [
      "The Chauthe site is a community forest hillside in Kakani Rural Municipality, Nepal, at about 1,200 to 1,600 m. In Nepal's hills, monsoon rain is a common landslide trigger. ZenTrust's work there has not started. The plan begins in Year 1 with contour trenches, small check dams, recharge ponds and a community nursery, followed in Years 2 to 3 by layered planting of native and fruit trees, nitrogen fixers and ground cover.",
      "Roots and ground cover can help hold shallow soil. Holding water on a slope also has to be weighed against slope stability, which is a general reason this kind of work calls for local expert advice. Pine will be thinned only where the Thumki Danda Gairikharka Community Forest User Group and the Division Forest Office approve.",
    ],
    related: [
      "how-to-stop-erosion-on-a-slope",
      "what-is-a-monsoon",
      "what-is-infiltration",
      "what-is-a-gabion",
    ],
  },
  {
    slug: "how-to-build-a-pond",
    title: "How do you build a pond?",
    metaTitle: "How to Build a Pond: Steps, Sealing and Safety | ZenTrust",
    description: "A plain guide to building a small pond: choosing a site, digging, sealing with clay or a liner, planning overflow, and staying safe and legal.",
    shortAnswer: "To build a pond, pick a low, stable spot that can collect water, check local rules, then dig a basin with gentle sides. Seal it with compacted clay or a liner, give it a safe overflow, and plant the edges. Larger ponds or ponds with an earth dam need expert design and often permits.",
    sections: [
      {
        heading: "Before you dig",
        paragraphs: [
          "Most pond problems start with the wrong site. A good site has a water source, soil that can hold water or be sealed, and room for overflow to leave without causing harm. Ask your local planning, water or environment office what rules apply before you start.",
        ],
        list: [
          "Find where water flows naturally after rain, from a roof, a slope or a seasonal stream. Damming or diverting a stream often needs permission.",
          "Dig a test hole to see the soil. Clay holds water well. Sand and gravel drain fast.",
          "Check for buried pipes, cables and septic systems.",
          "Avoid unstable slopes. Adding water to a hillside can make it more likely to slip.",
          "Ask whether you need a permit. Wetlands, streams and earth dams are often regulated.",
        ],
      },
      {
        heading: "Basic steps for a small pond",
        list: [
          "Mark the outline with rope or stakes, keeping the shape simple.",
          "Dig the basin with gently sloping sides and a shallow shelf around the edge.",
          "Keep the rim level so water does not spill out at one low point.",
          "Remove sharp stones and roots, then compact the base.",
          "Seal the basin with clay or a liner, then fill it slowly.",
          "Cover the bare soil around the pond with plants or mulch to stop erosion.",
        ],
      },
      {
        heading: "Ways to hold water",
        list: [
          "Native clay: if the soil has enough clay, it can be wetted and compacted in layers.",
          "Added clay: clay or bentonite can be mixed into the base of leaky soil.",
          "Flexible liner: a rubber or plastic sheet laid over a soft underlay. This suits small garden ponds.",
          "No seal: some ponds are meant to leak slowly so water soaks into the ground. Ponds built for this are often called recharge ponds.",
        ],
      },
      {
        heading: "Plan for overflow",
        paragraphs: [
          "Every pond fills up sometimes. Water needs a planned exit, called a spillway, that leads it away across ground that will not wash out. Line the spillway with stone or grass. Without one, water can cut through the rim, and in an earth dam this can lead to failure. Any pond held back by an embankment should be designed by a qualified engineer.",
        ],
      },
      {
        heading: "Safety and upkeep",
        list: [
          "Open water is a drowning risk, especially for young children. Consider fencing and gentle edges.",
          "Plant the margins to filter runoff and give wildlife a way in and out.",
          "Keep fertilizer and manure runoff out to limit algae.",
          "Check the rim and spillway after heavy rain and fix damage early.",
          "Remove silt from time to time so the pond keeps its depth.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust reports that springs below the Chauthe hillside are drying, and it plans to start by helping the land hold water.",
      "In Year 1, the plan includes recharge ponds alongside contour trenches and small check dams. Unlike a sealed garden pond, these ponds are intended to let rainwater soak slowly into the ground. Work on the hillside has not started yet. The land is community forest of the Thumki Danda Gairikharka Community Forest User Group.",
    ],
    related: [
      "recharge-ponds",
      "groundwater-recharge",
      "rainwater-harvesting-in-the-hills",
      "what-causes-landslides",
    ],
  },
  {
    slug: "what-is-leaf-litter",
    title: "What is leaf litter?",
    metaTitle: "Leaf Litter: What It Is and Why It Matters | ZenTrust",
    description: "Leaf litter is the layer of fallen leaves, needles and twigs on the ground. What it does for soil and water, how it breaks down and when to leave it.",
    shortAnswer: "Leaf litter is the layer of fallen leaves, needles, twigs, bark and other dead plant parts that covers the ground in forests, gardens and fields. It protects the soil, holds moisture, shelters small animals and slowly breaks down into organic matter that feeds the soil.",
    sections: [
      {
        heading: "What leaf litter is",
        paragraphs: [
          "Leaf litter is the top layer of the forest floor. It is made of plant material that has dropped recently and has not yet rotted away. Below it, older material is partly broken down. Below that is the mineral soil.",
          "Litter is found anywhere plants shed parts, but it is often thickest under trees and shrubs. Its depth changes with the season, the plants above and how fast it decays.",
        ],
      },
      {
        heading: "What it does",
        list: [
          "Covers bare soil, which softens the impact of rain and reduces erosion.",
          "Slows water running over the surface, giving it more time to soak in.",
          "Shades the ground and keeps it cooler and moister.",
          "Gives food and shelter to insects, worms, fungi and other soil life.",
          "Returns nutrients to the soil as it breaks down.",
          "Adds organic matter that helps soil hold water and stay loose.",
        ],
      },
      {
        heading: "How it breaks down",
        paragraphs: [
          "Small animals such as worms, millipedes and insects shred the leaves. Fungi and bacteria then break the pieces down further. Over time some of the material becomes humus, the dark, more stable part of soil organic matter.",
          "Decay is faster when it is warm and moist and slower when it is cold or dry. Soft, thin leaves rot faster than tough, waxy ones.",
        ],
      },
      {
        heading: "Not all litter is the same",
        list: [
          "Broadleaf litter often breaks down faster than conifer needles, though the rate varies with the species and the climate.",
          "Needles from pines and other conifers are tough and waxy and usually break down more slowly.",
          "Mixed litter from many species gives soil life a wider range of food than litter from a single species.",
          "Thick, dry litter can build up and act as fuel in a fire.",
        ],
      },
      {
        heading: "Should you rake it up?",
        paragraphs: [
          "In most gardens and woodlands, leaving leaves in place or moving them onto beds as mulch usually helps the soil. Leaves can also be shredded, composted or piled to make leaf mold.",
          "There are reasons to move litter. Thick, wet mats can smother lawns. Leaves from plants with fungal disease are sometimes removed to limit spread. Near homes in fire-prone areas, dry litter is often cleared, and local fire rules may say how. Local forestry or extension services can advise for your area.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust describes the hillside at Chauthe as a pine monoculture, and ZenTrust reports that springs below it are drying. The plan treats pine as a major cause, which ZenTrust will measure. The program is at the planning and setup stage, and work on the hillside has not started.",
      "In years 2 to 3, the plan is to plant in layers: native and fruit trees, nitrogen fixers and ground cover. The aim is that, over time, this adds a wider mix of leaves to the forest floor. Pine will be thinned only where the community forest user group and the Division Forest Office approve, and species will be chosen with the user group and local nurseries.",
    ],
    related: ["what-is-humus", "what-is-leaf-mold", "what-is-mulch", "why-do-pine-forests-burn"],
  },
  {
    slug: "what-is-a-cloud-forest",
    title: "What is a cloud forest?",
    metaTitle: "What Is a Cloud Forest? Fog, Water and Wildlife | ZenTrust",
    description: "A cloud forest is a mountain forest wrapped in frequent low cloud. How it forms, how it catches water from fog, what lives there and why it matters.",
    shortAnswer: "A cloud forest is a mountain forest that sits in low cloud or fog for much of the year, often right at canopy level. It is usually cool and damp. Trees are often draped in mosses, ferns and other plants that grow on branches. These forests catch water straight from the fog and feed streams and springs downhill.",
    sections: [
      {
        heading: "What makes a cloud forest",
        paragraphs: [
          "Cloud forests form where moist air is pushed up a mountain slope. As the air rises, it cools, and its water vapor condenses into cloud. On some slopes this happens often enough that the forest sits in the cloud for much of the year.",
          "Most cloud forests are in the tropics, on mountains near the sea or in the path of moist winds. The height at which they occur varies a lot from one mountain range to another. It depends on climate, the size of the mountain and local winds.",
        ],
        list: [
          "Frequent or persistent fog and low cloud.",
          "Cool temperatures and high humidity.",
          "Less direct sunlight than forests outside the cloud zone.",
          "Wet soils, often rich in partly decayed plant matter.",
        ],
      },
      {
        heading: "Where cloud forests are found",
        list: [
          "The mountains of Central and South America, including the Andes.",
          "High mountains in East and Central Africa.",
          "Mountains in Southeast Asia and on many tropical islands.",
          "Scattered patches in other ranges, where local winds and terrain bring regular fog.",
        ],
      },
      {
        heading: "How they gather water",
        paragraphs: [
          "Cloud forests get water from rain, like other forests. They also get it from fog. Tiny cloud droplets blow through the canopy and collect on leaves, needles, mosses and branches. The droplets join, then drip to the ground or run down trunks. This is often called fog drip or cloud water interception.",
          "Because the air is cool and damp and the sky is often overcast, less water evaporates from the plants and soil. Together, extra water from fog and lower water loss mean these forests can help keep streams flowing in drier months. In some regions, towns and farms downhill depend on that water.",
        ],
      },
      {
        heading: "Life in a cloud forest",
        paragraphs: [
          "The constant moisture supports plants that grow on other plants, called epiphytes. Branches can be thick with mosses, ferns and orchids, along with lichens. Trees are often shorter and more twisted near the top of the cloud zone, where wind and cold are harsher.",
        ],
        list: [
          "Many species are found only in a single mountain range or region.",
          "Amphibians, birds and insects are often especially varied.",
          "Mosses and other epiphytes hold water like sponges and release it slowly.",
          "Leaf litter breaks down slowly in the cool, wet conditions, so organic matter builds up in the soil.",
        ],
      },
      {
        heading: "Threats",
        list: [
          "Clearing for farming, grazing and roads.",
          "Logging and firewood cutting, which open the canopy and dry the forest.",
          "Changes in climate that can shift the cloud layer higher up the mountain.",
          "Fire, which is rare in healthy cloud forest but more likely once it is opened and dried.",
        ],
      },
      {
        heading: "Why they matter",
        paragraphs: [
          "Cloud forests cover a small share of the world's land, yet they protect important water sources and hold many rare species. Once cleared, they are slow to come back, because the fog-catching canopy, mosses and soil take a long time to rebuild. Protecting what remains is usually far easier than restoring it. Local forest agencies and conservation groups are the best source of advice for any specific site.",
        ],
      },
    ],
    inChauthe: [
      "This guide is general background. It is not a description of ZenTrust's site in Chauthe, a pine monoculture hillside at 1,200 to 1,600 m, so it applies only loosely to ZenTrust's plan.",
      "The shared idea is that forest cover affects how water reaches springs. ZenTrust reports that springs below the site are drying, and sees the pine as a major cause, which we'll measure. Work on the hillside has not started. Year 1 is planned to focus on holding rainwater on the slope with contour trenches, small check dams and recharge ponds, along with a community nursery.",
    ],
    related: [
      "what-is-a-microclimate",
      "what-is-a-watershed",
      "how-do-springs-work",
      "what-is-a-lichen",
    ],
  },
  {
    slug: "what-is-surface-runoff",
    title: "What is surface runoff?",
    metaTitle: "Surface Runoff: What It Is and Why It Matters | ZenTrust",
    description: "Surface runoff is rainwater that flows over the ground instead of soaking in. What causes it, why it matters for soil and springs, and how to slow it.",
    shortAnswer: "Surface runoff is water from rain or snowmelt that flows across the ground instead of soaking into the soil. It happens when water arrives faster than the ground can absorb it, or when the ground cannot absorb any more. Some runoff is natural, but too much of it strips soil, causes floods and leaves less water underground for springs and wells.",
    sections: [
      {
        heading: "Where rain goes",
        paragraphs: [
          "When rain lands, part of it is caught by leaves and evaporates. Part soaks into the soil, which is called infiltration. Some of that water is used by plants, and some moves deeper to refill groundwater. Whatever cannot soak in flows downhill over the surface. That flow is surface runoff.",
          "Runoff collects in rills, gullies and streams. On healthy, covered ground most rain soaks in. On bare, packed or paved ground much more of it runs off.",
        ],
      },
      {
        heading: "What causes more runoff",
        list: [
          "Heavy rain that falls faster than the soil can take it in.",
          "Soil that is already soaked from earlier rain.",
          "Bare soil, which can form a hard crust when raindrops hit it.",
          "Compacted soil from machines, foot traffic or grazing.",
          "Roofs, roads and paved areas that water cannot pass through.",
          "Steep slopes, where water moves quickly and has less time to sink in.",
        ],
      },
      {
        heading: "Why it matters",
        list: [
          "Fast-moving water carries away topsoil, the most fertile layer.",
          "Water that runs off quickly has less chance to recharge groundwater, so springs and wells can get less.",
          "Runoff from a wide area can gather quickly and cause floods downstream.",
          "It can carry mud, fertilizer, manure and other pollutants into streams and ponds.",
          "Concentrated flow can cut gullies that keep growing with each storm.",
        ],
      },
      {
        heading: "How to slow it and help it soak in",
        list: [
          "Keep soil covered with plants, mulch or leaf litter.",
          "Grow trees, shrubs and deep-rooted plants that open paths for water.",
          "Dig contour trenches or swales along the slope to catch and hold water.",
          "Build small check dams in gullies to slow flow and trap soil.",
          "Use ponds or rain gardens to hold water and let it seep in slowly, or tanks to store it for later use.",
          "Avoid compacting soil, and add organic matter so it holds more water.",
        ],
      },
      {
        heading: "Things to keep in mind",
        paragraphs: [
          "Some runoff is normal and feeds streams and wetlands. The aim is usually to slow it and spread it, not to stop it completely.",
          "Earthworks on steep or unstable ground can cause harm if badly placed. Water held in the wrong spot can soften a slope or overflow somewhere new. Local soil, slope and rainfall all matter, so get advice from someone with local experience, and check whether permits are needed before digging or building.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust reports that springs below its planned site in Chauthe, Nepal are drying. Helping rain soak in rather than run off the hillside is central to the plan.",
      "In the first year, the plan is to hold the water with contour trenches, small check dams and recharge ponds, along with a community nursery. In years two and three, layered planting with native and fruit trees, nitrogen fixers and ground cover will aim to keep the soil covered. Work on the hillside has not started yet.",
    ],
    related: [
      "what-is-infiltration",
      "contour-trenches",
      "what-is-soil-erosion",
      "groundwater-recharge",
    ],
  },
  {
    slug: "how-to-save-seeds",
    title: "How do you save seeds?",
    metaTitle: "How to Save Seeds: A Simple Guide for Gardeners | ZenTrust",
    description: "How to save seeds from your garden: which plants to choose, how to collect, dry and store seed, and how to check it will still grow.",
    shortAnswer: "To save seeds, choose healthy, open-pollinated plants and let the seed fully ripen. Collect it, clean off pulp or husk, and dry it well. Store it in a labeled, airtight container somewhere cool, dry and dark. Test a few seeds before sowing to check they still sprout.",
    sections: [
      {
        heading: "Pick the right plants",
        list: [
          "Use open-pollinated or heirloom varieties. Their seed grows into plants much like the parent.",
          "Avoid hybrids, often labeled F1. Their seed may grow into plants that differ from the parent or perform poorly.",
          "Save from your healthiest, strongest plants, not just whichever happen to ripen first or last.",
          "Save from several plants of the same variety when you can. This keeps more variety in the seed.",
          "Skip plants that showed disease, since some diseases can pass on through seed.",
        ],
      },
      {
        heading: "Self-pollinating and cross-pollinating crops",
        paragraphs: [
          "Some crops mostly pollinate themselves. Beans, peas, lettuce and tomatoes are common examples, and they are the easiest place to start. Their seed usually stays true to type even when other varieties grow nearby.",
          "Other crops cross easily with related varieties through wind or insects. Squash, corn, cucumbers and the cabbage family are examples. To keep them true, gardeners grow only one variety at a time, space varieties far apart, or cover flowers and pollinate by hand.",
        ],
      },
      {
        heading: "Collecting the seed",
        list: [
          "Dry seeds, such as beans, peas, lettuce and many flowers: leave pods or heads on the plant until they turn dry and brown, then pick and shell them.",
          "If rain or birds threaten, cut whole stems and finish drying them indoors in a paper bag.",
          "Wet seeds inside fruit, such as tomatoes, squash and cucumbers: let the fruit ripen fully, often past the eating stage, then scoop out the seeds.",
          "Tomato seeds are often left in a little water for a few days to ferment, which removes the gel coat. Then rinse and dry them.",
          "Squash and pepper seeds can simply be rinsed or wiped clean and dried.",
        ],
      },
      {
        heading: "Drying and storing",
        list: [
          "Spread seeds in a thin layer on paper or a screen, out of direct sun, with good airflow.",
          "Dry until seeds are hard and brittle. Large seeds may snap rather than bend when fully dry.",
          "Store in airtight jars or sealed packets once dry. Damp seed sealed in a jar can mold.",
          "Keep them cool, dry and dark. Heat and moisture shorten seed life most.",
          "Label each container with the plant, variety, date and where it came from.",
          "Expect differences by crop. Some seeds, such as onions, lose vigor quickly, while others last several years.",
        ],
      },
      {
        heading: "Testing before you sow",
        paragraphs: [
          "Before planting, roll a small number of seeds in a damp paper towel and keep it warm and moist. Check after the usual sprouting time for that crop. If only some sprout, sow more thickly. If almost none sprout, it is time for fresh seed.",
        ],
      },
      {
        heading: "Tree seeds are different",
        paragraphs: [
          "Many tree seeds can be dried and stored like garden seed. Others, often large and moist ones such as acorns, die if they dry out and need to be sown fresh. Some tree seeds also need soaking, nicking the coat, or a cold period before they will sprout.",
          "Local nurseries and forest offices can often advise on how local species behave. In forests and protected areas, collecting seed may need permission from the owners, managers or local authorities.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for Chauthe includes a community nursery in Year 1, ahead of planting native and fruit trees, nitrogen fixers and ground cover in Years 2 and 3.",
      "Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries. The program is still at the planning and setup stage, and work on the hillside has not started.",
    ],
    related: [
      "how-to-start-a-tree-nursery",
      "how-to-grow-trees-from-seed",
      "what-is-a-seed-bank",
      "companion-planting",
    ],
  },
  {
    slug: "when-to-plant-trees",
    title: "When is the best time to plant trees?",
    metaTitle: "When to Plant Trees: Best Seasons and Timing | ZenTrust",
    description: "The best time to plant trees is when roots can grow before stress arrives: the dormant season in cold climates, early rains in monsoon ones.",
    shortAnswer: "Plant trees when the soil is moist and workable and the tree will have time to grow roots before heat, drought or hard frost. In cold and temperate climates that usually means autumn or early spring, while the tree is dormant. In tropical and monsoon climates it usually means early in the rainy season.",
    sections: [
      {
        heading: "The basic rule",
        paragraphs: [
          "A tree dug from the ground for transplanting loses much of its root system, and even a container tree has to grow its roots out into new soil. Either way, it needs time and steady moisture to grow new roots before it faces stress. The best planting time is whenever your local climate offers that window.",
          "Cool air and moist soil are ideal. The tree loses less water through its leaves, and the roots can keep growing in soil that is not frozen.",
        ],
      },
      {
        heading: "Cold and temperate climates",
        list: [
          "Autumn: soil is still warm enough for root growth, and winter rain or snow often keeps it moist. Plant early enough for roots to settle before the ground freezes.",
          "Early spring: plant once the ground thaws and dries enough to work, before buds break and summer heat arrives.",
          "Some trees, especially certain evergreens and trees with fleshy roots, often do better planted in spring. Local nurseries can tell you which.",
          "Midsummer planting is possible with container trees, but it needs much more watering.",
        ],
      },
      {
        heading: "Tropical and monsoon climates",
        paragraphs: [
          "Where the year is split into wet and dry seasons, temperature matters less than rain. Trees are usually planted once the rains have properly started and the soil is moist below the surface. This gives them the whole wet season to establish before the dry months.",
          "Planting too late in the rains leaves young trees with shallow roots when the dry season starts. On steep or bare ground, very heavy rain can also wash out new plantings, so soil protection matters too.",
        ],
      },
      {
        heading: "Bare-root, balled or container trees",
        list: [
          "Bare-root trees have no soil around the roots. Plant them only while dormant, and soon after lifting, so the roots do not dry out.",
          "Balled and wrapped trees are dug with a ball of soil. They are best moved in the cooler, dormant months.",
          "Container trees have intact roots and can be planted over a longer season, but they still establish best in cool, moist conditions.",
          "Seedlings raised in a nursery are usually timed so they are ready to plant when the planting season starts.",
        ],
      },
      {
        heading: "Times to avoid",
        list: [
          "When the ground is frozen or waterlogged.",
          "During heat waves or long dry spells, unless you can water reliably.",
          "Just before the dry season or a hard winter, when roots have no time to grow.",
          "When the soil is so wet that digging smears and compacts it.",
        ],
      },
      {
        heading: "After planting",
        paragraphs: [
          "Timing helps, but care in the first year or two matters as much. Water deeply during dry spells, keep a ring of mulch around the base without touching the trunk, and keep weeds and grazing animals away. Local foresters, extension services or nurseries know the planting calendar for your area and are worth asking.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. The plan does not start with planting. ZenTrust reports that springs below the site are drying, so Year 1 will focus on holding water with contour trenches, small check dams and recharge ponds, and on setting up a community nursery.",
      "Planting in layers is planned for Years 2 and 3. It will include native and fruit trees, nitrogen fixers and ground cover. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "how-to-plant-a-tree",
      "what-is-a-monsoon",
      "how-to-start-a-tree-nursery",
      "how-to-grow-trees-from-seed",
    ],
  },
  {
    slug: "what-is-soil-ph",
    title: "What is soil pH?",
    metaTitle: "Soil pH: What It Is and Why It Matters | ZenTrust",
    description: "Soil pH measures how acidic or alkaline soil is. What the numbers mean, why pH matters to plants, how to test it and how to change it.",
    shortAnswer: "Soil pH is a measure of how acidic or alkaline soil is, on a scale from 0 to 14. A value of 7 is neutral, lower is acidic and higher is alkaline. pH matters because it controls which nutrients plants can take up and how well soil life works. Many common plants grow best in slightly acidic to neutral soil.",
    sections: [
      {
        heading: "What the numbers mean",
        paragraphs: [
          "The pH scale runs from 0 to 14. Below 7 is acidic, 7 is neutral and above 7 is alkaline. The scale is logarithmic, so each whole step is a tenfold change. Soil at pH 5 has ten times the hydrogen ion concentration of soil at pH 6, which makes it ten times more acidic in that sense.",
          "Most soils fall well inside the middle of the scale. Even so, a shift of one unit can make a clear difference to what grows well.",
        ],
      },
      {
        heading: "Why pH matters",
        list: [
          "It controls nutrient availability. At the extremes, some nutrients get locked up in forms roots cannot absorb, even when they are present in the soil.",
          "In very acidic soil, metals such as aluminum can dissolve and harm roots.",
          "Soil bacteria, fungi and earthworms each have ranges they prefer, so pH shapes soil life.",
          "Nitrogen-fixing bacteria on legume roots often work poorly in strongly acidic soil.",
          "Some plants are adapted to acidic soil, such as blueberries and rhododendrons. Others tolerate alkaline soil better.",
        ],
      },
      {
        heading: "What makes soil acidic or alkaline",
        list: [
          "Parent rock: soils formed from limestone tend to be alkaline. Soils from granite and other silica-rich rocks often lean acidic.",
          "Rainfall: heavy rain washes out calcium and other minerals over time, so soils in wet regions tend to become more acidic.",
          "Dry climates: with less leaching, salts and minerals build up, and soils tend to be more alkaline.",
          "Fertilizers: some nitrogen fertilizers make soil more acidic with repeated use.",
          "Vegetation and organic matter: decomposing plant material releases acids, and forest topsoil is often acidic.",
        ],
      },
      {
        heading: "How to test it",
        paragraphs: [
          "Simple home kits and handheld meters give a rough reading. A lab test is more accurate and usually also reports nutrients and organic matter. Agricultural extension services and many universities offer soil testing in many regions.",
          "Take several small samples from across an area, at root depth, and mix them. pH can vary a lot within one field or garden, so testing different zones separately can help.",
        ],
      },
      {
        heading: "Changing soil pH",
        paragraphs: [
          "Ground limestone is the usual way to raise pH. Wood ash also raises it, but it acts quickly and is easy to overdo. Elemental sulfur is commonly used to lower pH. Both lime and sulfur work slowly, and the right amount depends on the soil type, so follow a test result and local advice rather than guessing.",
          "Adding organic matter such as compost helps buffer soil, which means it resists sudden swings in pH. Often the simplest approach is to choose plants that suit the soil you have rather than trying to change it.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's plan for Chauthe focuses first on holding water on the hillside. Work there has not started yet. ZenTrust reports that springs below the pine monoculture are drying, and it describes pine as a major cause, which it will measure.",
      "In general, soil conditions such as pH affect which trees do well. In years two and three, the plan is to plant in layers with native and fruit trees, nitrogen fixers and ground cover. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "what-is-soil-organic-matter",
      "what-is-loam-soil",
      "how-to-improve-clay-soil",
      "what-is-composting",
    ],
  },
  {
    slug: "what-is-agroecology",
    title: "What is agroecology?",
    metaTitle: "Agroecology: What It Is and How It Works | ZenTrust",
    description: "Agroecology applies ecology to farming: working with natural processes and local knowledge. Core ideas, common practices, trade-offs and how it differs.",
    shortAnswer: "Agroecology is the use of ecological ideas to design and manage farms and food systems. It treats a farm as an ecosystem, relying on diversity, healthy soil, natural nutrient cycles and local knowledge rather than mainly on bought inputs. The word is used for a science, a set of farming practices and a social movement.",
    sections: [
      {
        heading: "Three meanings of one word",
        list: [
          "A science: studying how plants, animals, soil, water and people interact on farmland.",
          "A practice: farming methods that copy natural processes, such as mixing crops, recycling nutrients and keeping soil covered.",
          "A movement: efforts to give farmers and communities more control over land, seed and food.",
        ],
        paragraphs: [
          "In everyday farming talk the word usually means the second one, the practice. The three overlap, and you will often see them discussed together.",
        ],
      },
      {
        heading: "Core ideas",
        list: [
          "Diversity: many species and varieties, which spreads risk and supports useful insects and soil life.",
          "Recycling: returning crop residue, manure and compost to the soil instead of losing nutrients.",
          "Soil health: keeping soil covered and alive, since it holds water and feeds plants.",
          "Synergy: arranging plants and animals so they help each other, such as legumes adding nitrogen that can later benefit other plants.",
          "Local knowledge: building on what farmers already know about their land and climate.",
          "Fewer outside inputs: relying less on bought fertilizer and pesticide where natural processes can do the job.",
        ],
      },
      {
        heading: "Common practices",
        list: [
          "Intercropping and crop rotation.",
          "Cover crops, green manure and mulch.",
          "Composting and returning manure to fields.",
          "Agroforestry, which mixes trees with crops or livestock.",
          "Saving and sharing local seed.",
          "Encouraging natural pest control through hedgerows and flowering plants.",
        ],
      },
      {
        heading: "How it differs from related approaches",
        paragraphs: [
          "Conventional farming often focuses on one crop and steady use of bought inputs. Agroecology focuses on the whole system and how its parts work together.",
          "Organic farming is defined largely by certification rules, especially on which inputs are allowed. Agroecology is broader and is not a certification. A farm can be agroecological without being certified organic, and an organic farm is not automatically agroecological. Permaculture and agroforestry share many of the same ideas and are often seen as ways of putting agroecology into practice.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Diverse systems usually need more knowledge and planning than a single crop.",
          "Some practices need more labor, at least at first.",
          "Benefits to soil and water build over years rather than one season.",
          "Selling many small harvests can be harder than selling one large crop.",
          "What works depends heavily on local soil, climate and markets, so local advice matters.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Start small. Add one or two practices, such as a cover crop or a mixed planting, and watch how the land responds. Talk to experienced local farmers, extension services or farmer groups. Many agroecological ideas spread best from farmer to farmer, because they have to be adapted to each place.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is still at the planning and setup stage, and work on the hillside has not started. ZenTrust reports that springs below the site are drying, and it describes the pine monoculture as a major cause, which it will measure.",
      "Several parts of the plan echo agroecological ideas. Year one is planned to focus on holding water with contour trenches, small check dams, recharge ponds and a community nursery. In years two and three, the plan is to plant native and fruit trees, nitrogen fixers and ground cover in layers. Pine is thinned only where the community forest user group and the Division Forest Office approve.",
      "Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries, so local knowledge can inform which species are used.",
    ],
    related: [
      "what-is-agroforestry",
      "what-is-permaculture",
      "crop-rotation-and-intercropping",
      "what-is-a-food-forest",
    ],
  },
  {
    slug: "what-is-a-microclimate",
    title: "What is a microclimate?",
    metaTitle: "Microclimate: What It Is and Why It Matters | ZenTrust",
    description: "A microclimate is the local climate of a small area that differs from its surroundings. What shapes one, common examples and how to work with them.",
    shortAnswer: "A microclimate is the climate of a small area that is noticeably different from the area around it. It can be warmer, cooler, wetter, drier, windier or more sheltered. Slope, shade, water, wind and surfaces such as rock or pavement all create microclimates, from a single garden bed to a whole valley.",
    sections: [
      {
        heading: "What shapes a microclimate",
        list: [
          "Sun exposure: which way the ground faces and how much shade falls on it.",
          "Elevation and slope: higher ground is usually cooler, and cold air flows downhill.",
          "Wind: walls, hedges, trees and hills block or funnel it.",
          "Water: ponds, streams and wet soil soften temperature swings and raise humidity.",
          "Surfaces: rock, bare soil and pavement heat up fast, while plant cover and mulch keep the ground beneath them cooler.",
          "Plant cover: trees and ground cover shade the soil and release moisture into the air.",
        ],
      },
      {
        heading: "Common examples",
        list: [
          "A sunny wall that keeps nearby plants warmer at night.",
          "A frost pocket at the bottom of a slope where cold air settles.",
          "The cool, damp air under a dense tree canopy.",
          "A windy ridge top that dries out faster than the slope below it.",
          "A city that stays warmer than the countryside around it.",
        ],
      },
      {
        heading: "Microclimates on hillsides",
        paragraphs: [
          "Hills create strong microclimates. In the Northern Hemisphere, slopes that face south get more direct sun and tend to be warmer and drier. Slopes that face north stay cooler and hold moisture longer. The pattern is reversed in the Southern Hemisphere.",
          "At night, cold air is heavier than warm air, so it drains downhill and pools in hollows and valley floors. That is why frost can hit low ground while the slope above stays clear. Gullies and stream banks often stay moister and more sheltered than open ridges.",
        ],
      },
      {
        heading: "How plants change a microclimate",
        paragraphs: [
          "Vegetation does not just respond to a microclimate. It helps make one. Tree canopies block direct sun and slow the wind. Leaves release water vapor, which cools the air around them. Leaf litter and ground cover keep the soil surface cooler and slow evaporation.",
          "This is why a forest floor usually feels cooler and more humid than an open field nearby. It is also why young trees often grow better when planted near older plants that give some shelter.",
        ],
      },
      {
        heading: "Working with microclimates",
        list: [
          "Watch the land over several seasons and note where frost, wind, sun and wet ground occur.",
          "Put plants that need warmth or shelter in the warmer, protected spots.",
          "Use hedges or windbreaks to calm wind on exposed ground.",
          "Keep soil covered with mulch or plants to hold moisture and steady soil temperature.",
          "Remember that microclimates shift as trees grow and as land use changes.",
          "Ask local farmers, foresters or extension services, who often know the patterns of a place well.",
        ],
      },
    ],
    inChauthe: [
      "The Chauthe site runs from about 1,200 to 1,600 m, so conditions are likely to differ between higher and lower ground and, where the slope changes direction, between differently facing ground. ZenTrust's Nepal program is still at the planning and setup stage, and work on the hillside has not started.",
      "In years 2 and 3, ZenTrust plans to plant in layers, with native and fruit trees, nitrogen fixers and ground cover. In general, layered planting like this shades the soil and slows drying. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries, whose local knowledge can help match plants to the conditions of each part of the slope.",
    ],
    related: [
      "what-is-a-windbreak",
      "food-forest-layers",
      "what-is-evapotranspiration",
      "what-is-mulch",
    ],
  },
  {
    slug: "what-is-community-forestry",
    title: "What is community forestry?",
    metaTitle: "Community Forestry: How Local Groups Manage Forests | ZenTrust",
    description: "Community forestry gives local people rights and duties to manage nearby forests. How it works, what user groups do, benefits and common challenges.",
    shortAnswer: "Community forestry is a way of managing forests in which the people who live nearby hold recognized rights and responsibilities, often set in law, to protect, use and care for them. A local group, often called a forest user group, makes rules for the forest, usually under a plan approved by a government forest office.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "In many places, forests were once run only by the state or by private owners. Community forestry hands part of that control to the people who depend on the forest every day for firewood, fodder, timber, water and food.",
          "The idea is simple. People who live next to a forest, and who need it to stay healthy, are often well placed to look after it. Giving them clear rights and a share of the benefits gives them a reason to manage it for the long term.",
        ],
      },
      {
        heading: "How it usually works",
        list: [
          "Households near a forest form a user group with members and an elected committee.",
          "The group agrees on a management plan with the government forest office.",
          "The plan sets rules for what can be harvested, when, and by whom.",
          "The group protects the forest, for example by limiting grazing, controlling fire and stopping illegal cutting.",
          "Income from forest products is often shared or spent on local needs.",
          "The plan is reviewed and renewed over time.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Forests that were degraded can recover when cutting and grazing are controlled.",
          "Local people get steady access to firewood, fodder and other products.",
          "Decisions draw on local knowledge of the land, water and seasons.",
          "Healthier forest cover can help protect soil and water on slopes.",
          "Groups can raise money for schools, trails or other community projects.",
        ],
      },
      {
        heading: "Common challenges",
        list: [
          "Benefits are not always shared fairly, and poorer or marginalized members can be left out.",
          "Rules and approvals from forest offices can be slow or hard to navigate.",
          "Groups may focus on timber or protection and pay less attention to water or biodiversity.",
          "Past plantings, such as single-species stands, can be hard to change.",
          "Conflict can arise over boundaries, use rights or how money is spent.",
        ],
      },
      {
        heading: "Nepal as an example",
        paragraphs: [
          "Nepal is one of the best-known examples of community forestry. Thousands of community forest user groups manage forests across the hills, and their work is widely credited with helping many hillsides regain tree cover.",
          "Rules and rights differ from country to country, and they change over time. Anyone who wants to work in a community forest should start by talking with the user group and the local forest office.",
        ],
      },
    ],
    inChauthe: [
      "The land in Chauthe is community forest managed by the Thumki Danda Gairikharka Community Forest User Group. ZenTrust's work there will happen with the group, not around it. The program is still at the planning and setup stage; work on the hillside has not started.",
      "ZenTrust describes the hillside as a pine monoculture and reports that springs below are drying. ZenTrust sees pine as a major cause, which it plans to measure. Pine will be thinned only where the user group and the Division Forest Office approve.",
      "Species for the planned community nursery and the layered planting will be chosen with the user group and local nurseries.",
    ],
    related: [
      "what-is-agroforestry",
      "pine-plantations-and-water",
      "assisted-natural-regeneration",
      "why-plant-native-trees",
    ],
  },
  {
    slug: "what-is-compost-tea",
    title: "What is compost tea?",
    metaTitle: "Compost Tea: What It Is, How It's Made, Limits | ZenTrust",
    description: "Compost tea is a liquid made by steeping compost in water. How it is brewed, what it may do for plants and soil, its limits and safety cautions.",
    shortAnswer: "Compost tea is a liquid made by soaking finished compost in water, sometimes with air bubbled through it. Gardeners pour it on soil or spray it on leaves to add soluble nutrients and microbes. Its benefits are debated and vary a lot, so it is best seen as a small extra, not a replacement for compost itself.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Compost tea is made by steeping compost in water so that some of its nutrients and microbes move into the liquid. The name comes from the way it is steeped, like tea, and it often looks like weak tea or coffee.",
          "It is different from compost leachate, which is the dark liquid that drains out of a compost pile. Leachate can be strong and may carry unwanted organisms, so it is not the same thing. Manure tea is a related idea made from manure instead of compost.",
        ],
      },
      {
        heading: "Main types",
        list: [
          "Aerated compost tea: air is pumped through the water while it brews, which favors microbes that need oxygen.",
          "Non-aerated or passive tea: compost sits in water with occasional stirring, usually for longer.",
          "Compost extract: compost is mixed or washed in water and used soon after, with little or no brewing time.",
          "Some recipes add food sources such as molasses to feed microbes, which can also feed harmful ones.",
        ],
      },
      {
        heading: "How it is made and used",
        paragraphs: [
          "A typical method is to put well-made compost in a mesh bag or bucket of clean water and let it steep. Many people let tap water stand or bubble air through it first, since chlorine can harm microbes. This does not work as well where the water supply uses chloramine. Aerated tea is usually used within hours of brewing, before it starts to smell sour.",
          "The tea is poured around the base of plants as a soil drench or sprayed on leaves. Spraying on leaves is the use with the most debate, and the most food safety concern.",
        ],
      },
      {
        heading: "What it may do",
        list: [
          "Add small amounts of soluble nutrients that plants can take up quickly.",
          "Add microbes to soil or leaf surfaces.",
          "Help some gardeners make a limited supply of compost go further.",
          "Some growers report fewer plant diseases, but results are inconsistent and not well proven.",
        ],
      },
      {
        heading: "Limits and cautions",
        list: [
          "The tea is only as good as the compost. Poor or unfinished compost can carry pathogens.",
          "Added sugars such as molasses can help harmful bacteria grow, so many food safety guides advise against them.",
          "Avoid spraying edible parts of crops, especially leafy greens and anything eaten raw or close to harvest.",
          "Brews that smell sour or rotten have likely gone low in oxygen and are best poured on compost, not plants.",
          "Commercial growers and anyone selling food should check local food safety rules before using it.",
        ],
      },
      {
        heading: "Compost tea or compost?",
        paragraphs: [
          "Compost itself adds organic matter, improves soil structure and helps soil hold water. Compost tea adds very little organic matter. For building soil over time, spreading compost or mulch usually does more. Tea can be a small add-on where compost is scarce or plants are in containers.",
        ],
      },
    ],
    inChauthe: [
      "Compost tea is not part of ZenTrust's stated plan for the Chauthe hillside. The plan will focus first on holding water with contour trenches, small check dams, recharge ponds and a community nursery, then on planting native and fruit trees, nitrogen fixers and ground cover in layers.",
      "Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries, and work on the hillside has not started yet.",
    ],
    related: [
      "what-is-composting",
      "what-is-soil-organic-matter",
      "what-is-mulch",
      "how-to-start-a-tree-nursery",
    ],
  },
  {
    slug: "what-is-leaf-mold",
    title: "What is leaf mold?",
    metaTitle: "Leaf Mold: What It Is and How to Make It | ZenTrust",
    description: "Leaf mold is fallen leaves broken down mainly by fungi. What it does for soil, how to make it, which leaves to use and how it differs from compost.",
    shortAnswer: "Leaf mold is fallen leaves that have slowly rotted down, mostly through the work of fungi, into a dark, crumbly material. It is low in nutrients but very good at holding water and improving soil structure. It is used as a mulch, a soil conditioner and an ingredient in potting mixes.",
    sections: [
      {
        heading: "What leaf mold is",
        paragraphs: [
          "In a forest, leaves fall each year and break down on the ground. Leaf mold is the same process done in a pile, bin or bag. Finished leaf mold is dark brown, soft and crumbly, and it smells earthy.",
          "The name can be confusing. Leaf mold here is a soil material, not a mold disease on living plants.",
        ],
      },
      {
        heading: "What it does for soil",
        list: [
          "Holds water like a sponge, which helps sandy soils stay moist.",
          "Loosens heavy clay and improves soil structure.",
          "Adds organic matter and feeds soil fungi, worms and other life.",
          "Protects bare soil from sun, rain and drying wind when spread as mulch.",
          "Makes a light, low-nutrient base for starting seeds.",
        ],
      },
      {
        heading: "How to make it",
        list: [
          "Collect fallen leaves, ideally from a mix of tree species.",
          "Shred or mow them if you can. Smaller pieces break down faster.",
          "Pile them in a simple wire or wooden bin, or pack them into bags with a few holes.",
          "Wet the leaves well and keep them damp, like a wrung-out sponge.",
          "Leave the pile alone. Turning is optional, and it often takes a year or more to finish.",
        ],
      },
      {
        heading: "Which leaves work best",
        list: [
          "Soft leaves from many broadleaf trees break down fairly quickly.",
          "Tough or waxy leaves, such as oak and holly, take longer. Shredding helps.",
          "Pine and other conifer needles rot very slowly and are best kept to a small share of the pile.",
          "Avoid leaves from plants with obvious disease, and leaves collected beside busy roads.",
          "Some leaves, such as black walnut, contain compounds that can slow other plants, so many gardeners leave them out.",
        ],
      },
      {
        heading: "Leaf mold compared with compost",
        paragraphs: [
          "Compost is made from a mix of green and brown materials. It is broken down mainly by bacteria, often heats up and is richer in nutrients. Leaf mold is made from leaves alone. It breaks down cool and slow, mainly by fungi, and it adds structure and water-holding more than food for plants.",
          "Many gardeners use both. Compost feeds plants, and leaf mold improves the soil they grow in. The main drawbacks of leaf mold are the time it takes and the space a pile needs while it sits.",
        ],
      },
    ],
    inChauthe: [
      "Making leaf mold is not a named part of ZenTrust's plan for the Chauthe hillside. The closest link is the natural version: leaves falling and rotting in place on the forest floor.",
      "ZenTrust reports that springs below the site are drying, and it describes the pine monoculture as a major cause, which it will measure. Work on the hillside has not started. In Years 2 and 3, the plan is to plant layers of native and fruit trees, nitrogen fixers and ground cover. Species will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries.",
    ],
    related: [
      "what-is-leaf-litter",
      "what-is-composting",
      "what-is-mulch",
      "what-is-soil-organic-matter",
    ],
  },
  {
    slug: "what-is-a-seed-bank",
    title: "What is a seed bank?",
    metaTitle: "Seed Banks: What They Are and How They Work | ZenTrust",
    description: "A seed bank stores seeds so plants can be grown again later. How conservation, community and soil seed banks work, and their limits.",
    shortAnswer: "A seed bank is a store of seeds kept alive for future planting. The term covers three things: conservation facilities that dry and chill seeds for the long term, community seed banks where farmers share and lend local seed, and the natural supply of dormant seeds in the soil.",
    sections: [
      {
        heading: "Three meanings of seed bank",
        list: [
          "Conservation seed banks: facilities that store seeds of crops and wild plants as a backup against loss.",
          "Community seed banks: local, often farmer-run collections that keep, share and lend seed of local varieties.",
          "Soil seed banks: the living seeds buried in the ground that can sprout when conditions are right.",
        ],
      },
      {
        heading: "How conservation seed banks store seeds",
        paragraphs: [
          "Seeds are collected, cleaned and checked for health. They are then dried and sealed in containers, and kept cold. Dry, cool seeds age much more slowly, so many can stay alive for years or longer.",
          "Stored seeds still lose their ability to sprout over time. Seed banks test samples now and then. When a batch weakens, they grow plants from it and collect fresh seed to refill the store.",
        ],
      },
      {
        heading: "Not every seed can be banked",
        paragraphs: [
          "Seeds that survive drying and cold are called orthodox seeds. Many grains, beans and vegetables fall into this group. Other seeds, called recalcitrant seeds, die if they dry out. Most acorns, mangoes, avocados and many tropical tree seeds are examples.",
          "Plants with recalcitrant seeds are often conserved in other ways, such as living collections, field gene banks, nurseries or protected habitat. For many native trees, fresh seed sown soon after collection works best.",
        ],
      },
      {
        heading: "Community seed banks",
        paragraphs: [
          "A community seed bank is usually a simple store run by a village, cooperative or farmers' group. Members deposit seed after harvest. Others borrow seed at planting time and return the same amount or more after their own harvest.",
          "These banks help keep local varieties that suit the area's soil, climate and food habits. They can also help after a poor season, when families may have eaten or lost their own seed.",
        ],
      },
      {
        heading: "The soil seed bank",
        paragraphs: [
          "Soil holds many seeds that are dormant, waiting for light, warmth, moisture or disturbance. When a tree falls or ground is opened, these seeds can sprout. Pioneer species often come up first this way.",
          "The soil seed bank shapes what grows back on a site. Long periods of bare ground, heavy erosion or a single crop can leave few useful seeds. A soil seed bank can also be full of weeds, so what comes up is not always what people want.",
        ],
      },
      {
        heading: "Starting a small seed store",
        list: [
          "Collect seed from healthy, well-grown plants, and from several plants rather than one.",
          "Dry orthodox seed well in shade before storing it.",
          "Store it in sealed containers in a cool, dark, dry place.",
          "Label each batch with the plant, place and date collected.",
          "Sow recalcitrant tree seed fresh instead of storing it.",
          "Check local rules, since collecting from forests or protected land may need permission.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust's Nepal program is at the planning and setup stage, and work on the hillside has not started. The plan includes a community nursery in Year 1.",
      "Species for the layered planting planned for Years 2-3 will be chosen with the Thumki Danda Gairikharka Community Forest User Group and local nurseries. From Year 4 on, the plan is to let the forest lead. In general, natural regrowth depends partly on seeds already in the soil and seeds arriving from nearby forest.",
    ],
    related: [
      "how-to-save-seeds",
      "how-to-start-a-tree-nursery",
      "assisted-natural-regeneration",
      "how-to-grow-trees-from-seed",
    ],
  },
  {
    slug: "how-to-graft-fruit-trees",
    title: "How do you graft fruit trees?",
    metaTitle: "How to Graft Fruit Trees: Methods and Timing | ZenTrust",
    description: "Grafting joins a cutting from one fruit tree to the roots of another. Why it is done, main methods, timing, basic steps and common mistakes.",
    shortAnswer: "To graft a fruit tree, you join a short cutting of the variety you want (the scion) to a young rooted plant (the rootstock) so their growing layers touch. You then bind the joint and seal it. When the two heal together, the new tree bears the same fruit as the tree the scion came from.",
    sections: [
      {
        heading: "Why fruit trees are grafted",
        paragraphs: [
          "Many fruit trees do not grow true from seed. A seed from a good apple or pear usually grows into a tree with different, often poorer fruit. Grafting copies a known variety exactly.",
        ],
        list: [
          "Keeps a named variety true to type.",
          "Lets the rootstock control tree size and vigor.",
          "Can add tolerance to certain soils, pests or diseases through the roots.",
          "Often brings a tree into fruit sooner than a seedling.",
          "Can change the variety on an existing tree, or put several varieties on one tree.",
        ],
      },
      {
        heading: "Key terms",
        list: [
          "Scion: a short piece of young stem with buds, cut from the variety you want.",
          "Rootstock: the rooted plant that supplies roots and the lower trunk.",
          "Cambium: the thin growing layer between the bark and the wood. The cambium of scion and rootstock must touch for the graft to take.",
          "Graft union: the point where the two parts heal and grow together.",
          "Compatibility: grafts usually work within the same species. Some close relatives can be combined, but many cannot, so check before you try.",
        ],
      },
      {
        heading: "Common methods",
        list: [
          "Whip and tongue: scion and rootstock of similar thin size are cut at matching slants with an interlocking notch. Strong and widely used for young trees.",
          "Cleft graft: a thicker stock is split and one or two thinner scions are wedged into the split. Common for changing the variety on an older tree.",
          "Bark graft: scions are slipped under bark that lifts easily. Used on larger branches in spring.",
          "Chip budding: a single bud with a thin chip of wood is set into a matching cut on the rootstock.",
          "T-budding: a single bud is slid under flaps of bark cut in a T shape. Works when the bark separates easily from the wood.",
        ],
      },
      {
        heading: "When to graft",
        paragraphs: [
          "In temperate climates, scion wood is usually cut from dormant trees in winter and kept cool and slightly moist until use. Most stem grafts are then done in late winter or early spring, as the rootstock begins to wake up. Bud grafts are often done in summer, when the bark peels away easily.",
          "In warm or tropical regions, and for evergreen fruit such as citrus or mango, timing and methods differ. Local nurseries and agricultural extension services can tell you what works for your crop and climate.",
        ],
      },
      {
        heading: "Basic steps",
        list: [
          "Choose healthy, disease-free scion wood about the thickness of a pencil, with several plump buds.",
          "Use a very sharp, clean grafting knife. Cut away from your body and take care, since slips are common.",
          "Make smooth matching cuts on scion and rootstock in single strokes, without touching the cut faces.",
          "Fit the pieces so the cambium lines up on at least one side. Matching size matters less than matching this layer.",
          "Wrap the union firmly with grafting tape or a rubber strip, and seal exposed cuts and the scion tip to stop drying.",
          "Label the graft with the variety and date.",
        ],
      },
      {
        heading: "Aftercare and common mistakes",
        paragraphs: [
          "Watch for buds on the scion to swell and leaf out. This is a good sign, though not proof the graft has taken. Rub off shoots that grow from the rootstock below the union, or they will take over. Loosen or remove the wrap once the union has healed so it does not cut into the bark. Stake young grafts in windy places.",
        ],
        list: [
          "Cambium layers not lined up, so the parts never join.",
          "Scion wood that dried out or had already started growing.",
          "Dull or dirty tools that crush or infect the cut.",
          "Wrapping too loosely, so the joint moves, or leaving it on too long.",
          "Grafting incompatible plants.",
        ],
      },
    ],
    inChauthe: [
      "Grafting is only loosely connected to ZenTrust's current plan, which is still at the planning and setup stage. Work on the hillside has not started. The plan includes a community nursery in the first year and fruit trees among native trees and nitrogen fixers in years two and three. It does not yet say how trees will be propagated.",
      "Which species are grown will be decided with the Thumki Danda Gairikharka Community Forest User Group and local nurseries.",
    ],
    related: [
      "how-to-start-a-tree-nursery",
      "how-to-grow-trees-from-seed",
      "what-is-a-food-forest",
      "how-to-plant-a-tree",
    ],
  },
  {
    slug: "what-is-a-gabion",
    title: "What is a gabion?",
    metaTitle: "Gabions: What They Are and How They Are Used | ZenTrust",
    description: "A gabion is a wire mesh cage filled with stone, used for retaining walls, check dams and erosion control. How they work, where they fit and their limits.",
    shortAnswer: "A gabion is a wire mesh cage or basket filled with rocks. Stacked or laid in place, gabions form walls, check dams and linings that hold soil and slow water. They are heavy enough to resist being moved, flexible enough to tolerate some settling, and open enough to let water drain through.",
    sections: [
      {
        heading: "What a gabion is",
        paragraphs: [
          "A gabion is a box or cylinder made of strong steel wire mesh, usually galvanized or coated to slow rusting. It is set in place empty, then packed with hard stone that is larger than the mesh openings. The lid is wired shut, and neighboring baskets are wired together so they act as one structure.",
          "The name comes from an Italian word for a large cage. Gabions have been used for a long time in military works, roads and river engineering. They are common in hill and mountain areas, partly because they can often be built by hand from local stone.",
        ],
      },
      {
        heading: "Common uses",
        list: [
          "Retaining walls that hold back soil on cut slopes and along roads.",
          "Check dams across gullies and small streams to slow water and trap sediment.",
          "Riverbank and stream channel protection against scour.",
          "Thin, flat gabion mattresses that line channels or protect the toe of a slope.",
          "Outlets and spillways where fast water would otherwise cut into soil.",
        ],
      },
      {
        heading: "Why they work",
        list: [
          "Weight: a filled gabion is very heavy, so it resists being pushed or washed away.",
          "Drainage: water passes through the gaps between stones, so less pressure builds up behind a wall.",
          "Flexibility: the mesh lets the structure tolerate some settling on uneven or shifting ground without cracking the way concrete can.",
          "Local materials: the stone can often come from the site, which cuts transport.",
          "Over time, silt fills the gaps and plants can root in it, which can bind the structure further, though it also reduces drainage.",
        ],
      },
      {
        heading: "Limits and risks",
        list: [
          "The wire is the weak point. Rust, abrasion from stones carried by floods, or damage can open the baskets.",
          "Without a filter fabric or graded fill behind a wall, soil can wash out through the stones.",
          "A poor foundation, or water cutting under or around the ends, can make a structure tip or fail.",
          "Gabions need a lot of suitable stone and hand labor to fill well.",
          "Tall walls and structures in active streams carry real risk to people and property below.",
        ],
      },
      {
        heading: "Building one well",
        paragraphs: [
          "Small, low gabions in a gully are a common hand-built job. Larger walls, river works and anything that protects homes, roads or paths need design by a qualified engineer. Work in streams, rivers or forest land may also need permission from local authorities, so check before starting.",
        ],
        list: [
          "Dig to firm ground and set a level, stable base.",
          "Key the ends well into the banks so water cannot go around.",
          "Pack stone tightly by hand, with the best faces outward, and use internal bracing wires so baskets do not bulge.",
          "Protect the area just downstream with a stone apron so falling water does not dig a hole at the base.",
          "Inspect after heavy rain and repair broken wire early.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust reports that springs below the Chauthe hillside are drying. Work on the hillside has not started. ZenTrust's plan for the first year focuses on holding water on the slope, with contour trenches, small check dams and recharge ponds, along with a community nursery.",
      "Gabions are one common way to build check dams in hill areas. This guide does not say which method will be used at Chauthe.",
    ],
    related: [
      "check-dams",
      "how-to-stop-erosion-on-a-slope",
      "what-causes-landslides",
      "what-is-a-riparian-buffer",
    ],
  },
  {
    slug: "what-is-contour-farming",
    title: "What is contour farming?",
    metaTitle: "Contour Farming: What It Is and How It Works | ZenTrust",
    description: "Contour farming means plowing and planting across a slope, along its contour lines. How it slows runoff, how lines are marked, and its limits.",
    shortAnswer: "Contour farming is plowing, planting and tending crops across a slope, following lines of equal height, instead of up and down it. Each row acts as a small barrier that slows rainwater, helps it soak in and reduces soil loss.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "A contour line joins points on a slope that are at the same height. In contour farming, furrows and crop rows follow these lines, so they curve around a hill rather than running straight down it.",
          "When rows run downhill, they act like channels. Water gathers speed and carries soil with it. When rows run across the slope, water meets a series of small ridges and slows down.",
        ],
      },
      {
        heading: "How it helps",
        list: [
          "Slows surface runoff, which reduces erosion.",
          "Gives rain more time to soak into the soil.",
          "Keeps more topsoil, seed and fertilizer in the field.",
          "Can leave more moisture for crops in dry spells.",
          "Costs little, since it changes the direction of work rather than adding structures.",
        ],
      },
      {
        heading: "How contour lines are marked",
        paragraphs: [
          "Farmers usually mark one guide line first, then lay out the other rows roughly parallel to it, adjusting where the slope changes.",
        ],
        list: [
          "An A-frame: a simple wooden frame with a plumb line, walked across the slope to find level points.",
          "A water tube level: a clear hose filled with water, using the water surface to match heights.",
          "Surveying tools such as a builder's level or laser level, for larger or more precise work.",
          "Stakes or stones to mark points before plowing.",
        ],
      },
      {
        heading: "Limits and trade-offs",
        list: [
          "It works best on gentle to moderate slopes. Steep land usually needs terraces or other structures as well.",
          "Heavy storms can overtop the rows. Water then breaks through at the lowest point and can cut a gully.",
          "Rows must stay close to level. A row that drifts off the contour runs slightly downhill along its length, gathering water and sending it to one spot.",
          "Curved rows can be slower to work, especially with large machines.",
          "Results depend on soil, rainfall and slope, so local advice is worth getting.",
        ],
      },
      {
        heading: "Practices often used with it",
        list: [
          "Strip cropping: bands of different crops along the contour, so a dense crop catches soil from the band above.",
          "Grass or hedge strips planted along contours as permanent barriers.",
          "Contour bunds, trenches and swales that hold more water than plow ridges alone.",
          "Terraces, which turn steep slopes into a series of flatter steps.",
          "Cover crops and mulch, which keep the soil protected between rows.",
        ],
      },
    ],
    inChauthe: [
      "Contour farming is about cropland, and the Chauthe site is a community forest, so contour plowing is not part of ZenTrust's published plan.",
      "The same principle guides the planned first year of work, though. ZenTrust reports that springs below the hillside are drying. The plan is to dig contour trenches that follow the shape of the land, along with small check dams and recharge ponds, to slow rain and help it soak in. This work has not started yet. It is planned with the Thumki Danda Gairikharka Community Forest User Group.",
    ],
    related: [
      "contour-trenches",
      "what-is-strip-cropping",
      "terrace-farming",
      "how-to-stop-erosion-on-a-slope",
    ],
  },
  {
    slug: "what-is-a-windbreak",
    title: "What is a windbreak?",
    metaTitle: "Windbreaks: What They Are and How They Work | ZenTrust",
    description: "A windbreak is a row of trees or shrubs planted to slow the wind. How it protects soil, crops and homes, how to design one, and the trade-offs.",
    shortAnswer: "A windbreak is one or more rows of trees, shrubs or tall plants set across the path of the wind to slow it down. It shelters the land behind it, which reduces soil erosion, protects crops and animals, and can cut heating and cooling needs for nearby buildings. Larger, multi-row windbreaks are often called shelterbelts.",
    sections: [
      {
        heading: "What a windbreak does",
        list: [
          "Slows wind, which reduces the amount of soil it can blow away.",
          "Shelters crops from physical damage and drying winds.",
          "Lowers water loss from soil and plants on the sheltered side.",
          "Protects livestock and buildings from cold or hot winds.",
          "Provides habitat, food and travel corridors for birds and insects.",
          "Can catch drifting snow, dust or spray before it reaches fields or homes.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "A windbreak works best when it lets some air through. A partly open barrier slows the wind gently over a long distance behind it. A solid wall, by contrast, forces wind up and over, creating turbulence just behind it and a shorter sheltered zone.",
          "The sheltered area grows with the height of the windbreak. Taller windbreaks protect a longer stretch of ground downwind, with the strongest effect fairly close behind the trees and fading with distance. There is also a smaller sheltered area on the upwind side.",
        ],
      },
      {
        heading: "Designing one",
        list: [
          "Run the rows across the direction of the most damaging wind, not along it.",
          "Where space allows, use several rows of different heights, such as shrubs, small trees and tall trees, to avoid gaps near the ground.",
          "Keep the line continuous, since gaps funnel and speed up the wind.",
          "Extend the ends past the area you want to protect, because wind wraps around them.",
          "Leave space between the windbreak and crops, roads or buildings for roots, shade and maintenance.",
        ],
      },
      {
        heading: "Choosing plants",
        paragraphs: [
          "Evergreens give shelter all year, while deciduous trees mainly protect during the growing season. Mixing species spreads risk if one is hit by pests, disease or drought. Native species are usually better adapted and support more local wildlife. Plants that also give fruit, fodder, fuel or timber can make a windbreak pay its way. Avoid species known to be invasive in your area, and check with a local forestry or extension office about what grows well there.",
        ],
      },
      {
        heading: "Trade-offs",
        list: [
          "Windbreaks take up land that could otherwise be cropped.",
          "Roots and shade can compete with nearby crops for water, nutrients and light.",
          "They take years to reach full height and need care while young.",
          "Poorly placed windbreaks can shade roads, block views or trap cold air in low spots.",
          "Local rules may apply near property lines, roads or power lines, so check before planting.",
        ],
      },
    ],
    inChauthe: [
      "Windbreaks are not a specific part of ZenTrust's plan for Chauthe. Wind is not the problem ZenTrust describes there. ZenTrust reports that springs below the pine monoculture are drying, so the plan will focus on holding water first and then planting native and fruit trees in layers.",
    ],
    related: [
      "what-is-a-microclimate",
      "living-fences-and-hedgerows",
      "what-is-agroforestry",
      "what-is-soil-erosion",
    ],
  },
  {
    slug: "how-to-improve-clay-soil",
    title: "How do you improve clay soil?",
    metaTitle: "How to Improve Clay Soil: Practical Steps | ZenTrust",
    description: "Clay soil holds water and nutrients but drains slowly and packs hard. How to improve it with organic matter, mulch, roots and less compaction.",
    shortAnswer: "Improve clay soil by adding organic matter year after year, keeping it covered with mulch or plants, and avoiding walking on it or digging it when wet. Roots, compost and soil life slowly bind fine clay particles into crumbs, which lets air and water move through. Adding sand usually does not help.",
    sections: [
      {
        heading: "How to tell if you have clay",
        paragraphs: [
          "Clay is made of very fine particles that pack closely together. Moist clay feels sticky and smooth. If you roll a damp pinch between your fingers, it forms a ribbon or a thin sausage that holds its shape. When dry, it often sets hard and cracks. Puddles that linger after rain are another common sign.",
        ],
        list: [
          "Sticky and heavy when wet.",
          "Hard and cracked when dry.",
          "Slow to drain after rain or watering.",
          "Clings to boots and tools.",
        ],
      },
      {
        heading: "Why clay is worth working with",
        paragraphs: [
          "Clay has real strengths. It holds water and nutrients better than sandy soil, so plants growing in it may need less feeding once the soil is in good shape. The main problem is usually structure rather than fertility. Tightly packed clay leaves little room for air, water and roots. The goal is to turn it into a crumbly soil with plenty of small spaces, not to replace it.",
        ],
      },
      {
        heading: "Steps that help",
        list: [
          "Add organic matter often: compost, leaf mold, aged manure or chopped plant material, spread on top or worked lightly into the surface.",
          "Keep the soil covered with mulch so rain does not pound and seal the surface.",
          "Grow cover crops or ground cover so living roots open channels and feed soil life.",
          "Use deep-rooted plants, which can break up dense layers over time.",
          "Set up permanent paths or beds so you rarely need to walk on the growing area.",
          "Be patient: structure improves over several seasons, not in one.",
        ],
      },
      {
        heading: "What to avoid",
        list: [
          "Digging, tilling or walking on clay when it is wet, which squeezes out air and leaves hard clods.",
          "Adding small amounts of sand, which can leave the soil denser and harder rather than looser.",
          "Heavy machinery on the growing area.",
          "Leaving soil bare for long periods, especially in heavy rain.",
        ],
      },
      {
        heading: "Raised beds and drainage",
        paragraphs: [
          "Where water sits for a long time, raised beds or mounds can give roots a drier zone to grow in. Some gardeners also plant on gentle ridges. Bigger drainage problems, slopes that slump, or building near clay soils are different matters. Clay can swell and shrink as it wets and dries, so for drains, walls or foundations, ask a local engineer or soil specialist.",
        ],
      },
      {
        heading: "Getting a soil test",
        paragraphs: [
          "A basic soil test can show pH and nutrient levels, and sometimes whether a soil has too much sodium. Some amendments, such as gypsum, help mainly in specific conditions, so it is better to test first than to guess. Local extension services, agricultural offices or garden centers can often point you to a testing lab and advice for your area.",
        ],
      },
    ],
    inChauthe: [
      "ZenTrust has not described the soil type on the Chauthe hillside, so this guide applies to the plan only in a general way. Work on the hillside has not started yet.",
      "In years 2 to 3, ZenTrust plans to plant in layers, including native and fruit trees, nitrogen fixers and ground cover. Plants and ground cover like these are the kind of living cover this guide describes. Species will be chosen with the community forest user group and local nurseries.",
    ],
    related: [
      "what-is-soil-compaction",
      "what-is-soil-organic-matter",
      "cover-crops",
      "what-is-loam-soil",
    ],
  },
  {
    slug: "what-is-strip-cropping",
    title: "What is strip cropping?",
    metaTitle: "Strip Cropping: What It Is and How It Slows Erosion | ZenTrust",
    description: "Strip cropping alternates bands of row crops with dense, soil-holding crops across a slope or the wind. Types, benefits, limits and how it is laid out.",
    shortAnswer: "Strip cropping is a way of farming a field in long, alternating bands. Strips of row crops such as corn or potatoes sit between strips of dense, soil-holding crops such as grasses, legumes or small grains. The dense strips slow water or wind and catch soil before it leaves the field.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Row crops leave a lot of bare soil between plants, especially early in the season. Rain runs over that soil and carries it away. In strip cropping, a band of thick, close-growing plants sits just downhill or downwind of each row-crop band. Water and wind slow down when they hit the dense strip, and much of the loose soil settles there.",
          "The strips are usually rotated over the years. A strip in grass or clover one season may grow corn later, so each part of the field gets time under a soil-building crop.",
        ],
      },
      {
        heading: "Main types",
        list: [
          "Contour strip cropping: strips follow the contour lines of a slope, so each band runs level across the hill.",
          "Field strip cropping: strips run in straight, parallel bands across the general slope where the land is too uneven to follow contours exactly.",
          "Wind strip cropping: strips run across the direction of the prevailing wind to reduce wind erosion on flat or gently rolling land.",
          "Buffer strip cropping: permanent strips of grass or legumes are kept between crop strips, often on steep or badly eroded spots.",
        ],
      },
      {
        heading: "Benefits",
        list: [
          "Less soil lost to runoff and wind.",
          "More rain soaks in where water is slowed down.",
          "Legume strips can add nitrogen for the crops that follow.",
          "Rotating strips can break pest and disease cycles.",
          "Part of the field usually has living cover.",
        ],
      },
      {
        heading: "Limits and trade-offs",
        list: [
          "Fields are harder to work with large machines, and turning at strip ends takes time.",
          "Strip width has to suit the slope, soil and equipment, which takes planning.",
          "On steep slopes, strips alone may not be enough. Terraces, trenches or permanent cover may be needed.",
          "Less land is in the main cash crop in any one year, which can affect income.",
        ],
      },
      {
        heading: "Laying out strips",
        paragraphs: [
          "For contour strips, the first step is marking a level line across the slope with a simple A-frame, water level or survey tool. Other strips are laid out from that key line. Steeper slopes generally call for narrower strips. Grassed waterways are often added where water naturally collects, so runoff has a safe path down the field.",
          "Local soil conservation services can help with layout and may know of rules or support programs in your area.",
        ],
      },
    ],
    inChauthe: [
      "Strip cropping is a method for crop fields, and it is not part of ZenTrust's plan for the community forest hillside in Chauthe.",
      "The plan does share one idea with it: working across the slope rather than down it. ZenTrust reports that springs below the hillside are drying. In the first year, ZenTrust plans to dig contour trenches and build small check dams and recharge ponds to hold water on the hill.",
    ],
    related: [
      "what-is-contour-farming",
      "how-to-stop-erosion-on-a-slope",
      "crop-rotation-and-intercropping",
      "terrace-farming",
    ],
  },
];

export function getGuide(slug: string): Guide {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide: ${slug}`);
  return g;
}
