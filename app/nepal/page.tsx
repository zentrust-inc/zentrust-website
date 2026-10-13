// app/nepal/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./nepal.css";

import { HeroVideo } from "@/components/nepal/HeroVideo";
import { Raindrop } from "@/components/nepal/Raindrop";

import bareSlopes from "./media/bare-slopes.webp";
import erodedBank from "./media/eroded-bank.webp";
import gully from "./media/gully.webp";
import pineFire from "./media/pine-fire-2.webp";
import villageAbove from "./media/village-above.webp";
import ridgeCrown from "./media/ridge-crown.webp";

export const metadata: Metadata = {
  title: "Nepal: From Pine Monoculture to a Living Forest",
  description:
    "On 150 hectares of hillside in Chauthe, Kakani, ZenTrust is turning a pine monoculture into a layered food forest so rain soaks in and springs recover. Help fund the Year-1 water work and nursery.",
  alternates: { canonical: "/nepal" },
  openGraph: {
    title: "Bring the water back to Chauthe’s hills",
    description:
      "Turning a pine monoculture into a layered food forest in Kakani, Nepal.",
    images: [{ url: "/nepal/hero-ridge-poster.jpg", width: 1280, height: 720 }],
  },
};

const DONATE = (amount: number) => `/stewardship/checkout?program=nepal&amount=${amount}`;

function Drop() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" aria-hidden="true">
      <path d="M8 1 C 5 6, 2 9, 2 13 a6 6 0 0 0 12 0 c0 -4 -3 -7 -6 -12 Z" fill="currentColor" />
    </svg>
  );
}

const LAYERS = [
  { label: "Tall native trees", color: "#4f7f35" },
  { label: "Fruit trees", color: "#8bb24f" },
  { label: "Shrubs and fodder", color: "#7fa64a" },
  { label: "Herbs and vegetables", color: "#a9c46a" },
  { label: "Ground cover", color: "#c4d88a" },
  { label: "Roots that open the soil", color: "#b08a5a" },
];

export default function NepalProgramPage() {
  return (
    <div className="np">
      {/* 1. Hero: the real ridge, from the drone */}
      <section className="np-hero" aria-labelledby="np-title">
        <HeroVideo />
        <div className="np-wrap np-hero-body">
          <h1 id="np-title">Bring the water back to Chauthe’s hills</h1>
          <p className="np-hero-ne" lang="ne">पानी फर्काऔं, डाँडा फेरि हरियो बनाऔं।</p>
          <p className="np-hero-lead">
            On 150 hectares above Kakani, Nepal, we&apos;re turning a pine
            monoculture into a layered food forest, so monsoon rain soaks in,
            springs recover, and the hillside feeds the families around it.
          </p>
          <div className="np-hero-actions">
            <Link className="np-btn np-btn--water" href={DONATE(100)}>Fund the Year-1 work</Link>
            <a className="np-btn np-btn--ghost" href="#rain">See how the water is lost</a>
          </div>
        </div>
        <p className="np-hero-credit">Drone footage of the site, May 2026</p>
      </section>

      {/* 2. The place */}
      <section className="np-place" aria-labelledby="np-place-title">
        <div className="np-wrap np-place-grid">
          <div>
            <h2 id="np-place-title">A hillside planted for speed, now short of water</h2>
            <div className="np-measure">
              <p>
                Decades ago, pine was planted across Nepal&apos;s middle hills to
                cover bare slopes quickly. It did that. But pine is now widely
                linked to drying springs, poorer soil and dry-season fires.
              </p>
              <p>
                In Chauthe we believe it is a major cause of the water the hills
                have lost, and we&apos;ll measure the change as the forest grows
                back in layers.
              </p>
            </div>
          </div>
          <dl className="np-facts">
            <dt>Where</dt><dd>Chauthe, Ward 3, Kakani Rural Municipality</dd>
            <dt>Area</dt><dd>150 hectares</dd>
            <dt>Elevation</dt><dd>1,200 to 1,600 m</dd>
            <dt>Managed by</dt><dd>Thumki Danda Gairikharka Community Forest User Group</dd>
            <dt>Year-1 goal</dt><dd>$100,000</dd>
          </dl>
        </div>
      </section>

      {/* 3. Follow a raindrop */}
      <section id="rain" className="np-rain" aria-labelledby="np-rain-title">
        <div className="np-wrap">
          <div className="np-rain-head">
            <h2 id="np-rain-title">Follow a raindrop down the hill</h2>
            <p>Scroll to see where monsoon rain goes under pine, and under a layered forest.</p>
          </div>
          <Raindrop />
          <p className="np-rain-note">
            Illustration. Research across the Himalaya links pine plantations
            with less groundwater recharge than mixed broadleaf forest; how much
            it matters here is what our spring and soil monitoring will show.
          </p>
        </div>
      </section>

      {/* 4. Year zero: the real land */}
      <section className="np-year0" aria-labelledby="np-year0-title">
        <div className="np-wrap">
          <div className="np-year0-head">
            <h2 id="np-year0-title">Year zero, on the record</h2>
            <p>
              These are the hills as they are today. We&apos;ll photograph the
              same places every season, so anyone can see what changes, and what
              doesn&apos;t.
            </p>
          </div>
          <div className="np-mosaic">
            <figure className="np-tile np-tile--a">
              <Image src={bareSlopes} alt="Aerial view of pale, gullied slopes with scattered pine trees" fill sizes="(min-width: 760px) 66vw, 100vw" placeholder="blur" />
              <figcaption><b>Bare, gullied slopes under thin pine.</b> Drone, May 2026</figcaption>
            </figure>
            <figure className="np-tile np-tile--b">
              <Image src={erodedBank} alt="A collapsing earth bank below a slope of pine trees" fill sizes="(min-width: 760px) 33vw, 100vw" placeholder="blur" />
              <figcaption><b>A bank giving way below the pines.</b> June 2023</figcaption>
            </figure>
            <figure className="np-tile np-tile--c">
              <Image src={pineFire} alt="Aerial view of a pine slope with smoke rising from a fire" fill sizes="(min-width: 760px) 33vw, 100vw" placeholder="blur" />
              <figcaption><b>Smoke from a forest fire on the pine slope.</b> May 2026</figcaption>
            </figure>
            <figure className="np-tile np-tile--d">
              <Image src={gully} alt="Aerial view of a dry gully cutting down beside farm terraces" fill sizes="(min-width: 760px) 33vw, 100vw" placeholder="blur" />
              <figcaption><b>A dry gully beside the terraces.</b> May 2026</figcaption>
            </figure>
            <figure className="np-tile np-tile--e">
              <Image src={villageAbove} alt="Aerial view of houses, a road and terraces on the ridge" fill sizes="(min-width: 760px) 33vw, 100vw" placeholder="blur" />
              <figcaption><b>Homes and terraces downhill from the forest.</b> May 2026</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 5. The food forest and the plan */}
      <section className="np-forest" aria-labelledby="np-forest-title">
        <div className="np-wrap">
          <h2 id="np-forest-title">A forest that holds water and feeds people</h2>
          <p className="np-forest-intro">
            A syntropic food forest grows in layers, the way a natural forest
            does. Each layer shades, feeds and protects the next, and together
            they keep the soil covered, open and wet.
          </p>

          <figure className="np-forest-art">
            <svg className="ff" viewBox="0 0 1000 440" role="img" aria-labelledby="ff-t">
              <title id="ff-t">Cross-section of a layered food forest, from tall trees down to roots</title>
              {/* soil and roots */}
              <rect x="0" y="330" width="1000" height="110" fill="#3a2e22" />
              <path d="M0 330 H780" stroke="#5a4532" strokeWidth="3" />
              {[120, 300, 470, 640].map((x) => (
                <path key={x} d={`M${x} 330 q -30 40 -60 70 M${x} 330 q 6 50 2 90 M${x} 330 q 34 34 64 52`} fill="none" stroke="#b08a5a" strokeWidth="3" strokeLinecap="round" />
              ))}
              {/* ground cover */}
              {Array.from({ length: 26 }, (_, i) => 15 + i * 30).map((x) => (
                <ellipse key={x} cx={x} cy={326} rx={18} ry={6} fill="#c4d88a" />
              ))}
              {/* herbs */}
              {[40, 160, 250, 380, 520, 590, 700].map((x) => (
                <g key={x}>
                  <path d={`M${x} 326 v -26`} stroke="#a9c46a" strokeWidth="3" />
                  <ellipse cx={x - 8} cy={302} rx={10} ry={5} fill="#a9c46a" />
                  <ellipse cx={x + 8} cy={296} rx={10} ry={5} fill="#a9c46a" />
                </g>
              ))}
              {/* shrubs */}
              {[80, 215, 340, 430, 560, 690].map((x) => (
                <ellipse key={x} cx={x} cy={292} rx={34} ry={26} fill="#7fa64a" />
              ))}
              {/* fruit trees */}
              {[180, 400, 610].map((x) => (
                <g key={x}>
                  <rect x={x - 4} y={220} width="8" height="110" fill="#5a4532" />
                  <circle cx={x} cy={205} r={48} fill="#8bb24f" />
                  {[[-18, -6], [14, -18], [6, 14], [-24, 18], [26, 8]].map(([dx, dy], i) => (
                    <circle key={i} cx={x + dx} cy={205 + dy} r={6} fill="#e0a83a" />
                  ))}
                </g>
              ))}
              {/* tall native trees */}
              {[90, 300, 500, 710].map((x) => (
                <g key={x}>
                  <rect x={x - 6} y={110} width="12" height="220" fill="#4a3a28" />
                  <circle cx={x} cy={100} r={66} fill="#4f7f35" />
                  <circle cx={x + 40} cy={120} r={44} fill="#5e8f3c" />
                </g>
              ))}
              {/* labels with leaders */}
              <g className="ff-labels">
                {[
                  [100, LAYERS[0].label, 776],
                  [205, LAYERS[1].label, 660],
                  [272, LAYERS[2].label, 726],
                  [300, LAYERS[3].label, 712],
                  [326, LAYERS[4].label, 790],
                  [392, LAYERS[5].label, 706],
                ].map(([yy, label, from], i) => (
                  <g key={i}>
                    <line className="ff-lead" x1={from as number} y1={(yy as number) + (i === 3 ? 4 : 0)} x2={808} y2={(yy as number) + (i === 3 ? 4 : 0)} />
                    <circle cx={from as number} cy={(yy as number) + (i === 3 ? 4 : 0)} r="3" fill="#eef2ee" />
                    <text x={816} y={(yy as number) + 6 + (i === 3 ? 4 : 0)}>{label as string}</text>
                  </g>
                ))}
              </g>
            </svg>
            <ul className="ff-legend">
              {LAYERS.map((l) => (
                <li key={l.label}><i style={{ background: l.color }} aria-hidden="true" />{l.label}</li>
              ))}
            </ul>
          </figure>

          <ol className="np-plan" aria-label="The plan">
            <li className="np-phase">
              <p className="np-phase-when">Year 1</p>
              <h3>Hold the water</h3>
              <p>Contour trenches, small check dams and recharge ponds slow the monsoon rain. Spring sources are protected, and a community nursery starts raising native and fruit trees.</p>
            </li>
            <li className="np-phase">
              <p className="np-phase-when">Years 2 and 3</p>
              <h3>Plant in layers</h3>
              <p>Native trees, fruit, fodder and ground cover go in between the pines. Pine is thinned step by step, only where the forest user group and forest office approve.</p>
            </li>
            <li className="np-phase">
              <p className="np-phase-when">Year 4 onward</p>
              <h3>Let the forest lead</h3>
              <p>The forest yields food, fodder and income for local families, and is managed by them. We keep measuring the springs and publishing what we find.</p>
            </li>
          </ol>
          <p className="np-plan-note">Timings are our plan, not a promise of results; they will shift with approvals, funding and what the land tells us.</p>
        </div>
      </section>

      {/* 6. Measure, status, governance */}
      <section className="np-honest" aria-labelledby="np-measure-title">
        <div className="np-wrap np-honest-grid">
          <div>
            <h2 id="np-measure-title">What we&apos;ll measure, starting now</h2>
            <p>We&apos;d rather show you numbers than promises. From year zero we will track:</p>
            <ul className="np-track">
              <li><Drop /><span><b>Spring flow</b> in the dry season, at the same sources every month</span></li>
              <li><Drop /><span><b>Fixed photo points</b> on the ground and from the drone, every season</span></li>
              <li><Drop /><span><b>Ground cover and soil moisture</b> under pine and under new planting</span></li>
              <li><Drop /><span><b>Trees planted and surviving</b>, by species and by layer</span></li>
            </ul>
          </div>
          <div>
            <h2>Where things stand</h2>
            <p>
              The program is in its planning and setup stage. The site lies
              within community forest managed by the Thumki Danda Gairikharka
              Community Forest User Group, and work will proceed under the
              group&apos;s forest management arrangements and the local
              approvals it requires. A Nepal-registered not-for-profit
              implementing entity is being established to carry out the work on
              the ground.
            </p>
            <div className="np-govern">
              Contributions are made to ZenTrust, Inc., a US 501(c)(3) public
              charity. ZenTrust&apos;s board approves and oversees all program
              funding, including any grants to implementing partners, under
              written agreements with reporting requirements. We honor donor
              program preferences wherever possible; final use of funds remains
              at the discretion of ZenTrust&apos;s board in furtherance of its
              charitable purposes. <Link href="/financials">Governance and policies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Give */}
      <section className="np-give" aria-labelledby="np-give-title">
        <div className="np-give-bg" aria-hidden="true">
          <Image src={ridgeCrown} alt="" fill sizes="100vw" placeholder="blur" />
        </div>
        <div className="np-wrap np-give-body">
          <h2 id="np-give-title">Help the hills hold their water</h2>
          <p className="np-give-lead">
            Our Year-1 goal is $100,000 for the water work and the community
            nursery. Every gift, one-time or monthly, moves it forward, and we
            will report progress openly.
          </p>
          <div className="np-amounts">
            <Link className="np-btn np-btn--ghost" href={DONATE(25)}>Give $25</Link>
            <Link className="np-btn np-btn--ghost" href={DONATE(100)}>Give $100</Link>
            <Link className="np-btn np-btn--ghost" href={DONATE(500)}>Give $500</Link>
            <Link className="np-btn np-btn--water" href={DONATE(50)}>Choose an amount</Link>
          </div>
          <p className="np-give-fine">
            ZenTrust, Inc. is a 501(c)(3) public charity (EIN 33-4318487). US
            donations are tax-deductible as allowed by law.
          </p>
        </div>
      </section>
    </div>
  );
}
