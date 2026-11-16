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
];

export function getGuide(slug: string): Guide {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide: ${slug}`);
  return g;
}
