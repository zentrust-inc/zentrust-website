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
];

export function getGuide(slug: string): Guide {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide: ${slug}`);
  return g;
}
