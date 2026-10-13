// app/page.tsx

import { GlobalHero } from "@/components/hero/GlobalHero";
import MissionSection from "@/components/mission/MissionSection";
import { ImpactCounters } from "@/components/impact/ImpactCounters";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { HomePrograms } from "@/components/programs/HomePrograms";

/**
 * HomePage: states what ZenTrust funds (Nepal programs) and how to give,
 * followed by the research/education pillars.
 */
export default function HomePage() {
  const contentId = "content";

  return (
    <main className="relative min-h-screen">
      <GlobalHero
        headline={`Restoring land, water and health
in the hills of Nepal.`}
        dek={`ZenTrust is a US 501(c)(3) public charity. We fund watershed restoration and a syntropic food forest in Kakani, Nepal, build Abhilekh — a patient-controlled health record — and publish open research on how land and people recover.`}
        primaryCta={{ label: "Support the Nepal program", href: "/nepal" }}
        secondaryCta={{ label: "Give now", href: "/stewardship/checkout" }}
        determination={{
          text: "Recognized as a 170(b)(1)(A)(vi) public charity.",
          label: "View Determination Letter",
          href: "https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf",
        }}
        belowAnchorId={contentId}
        mode="answer"
      />

      <div id={contentId} className="relative z-0">
        {/* Programs ZenTrust funds — primary landing destinations */}
        <section className="scroll-mt-20">
          <HomePrograms />
        </section>

        {/* MissionSection handles the core 'Why' and 'How' of our research mission */}
        <section className="scroll-mt-20">
          <MissionSection />
        </section>

        {/* ImpactCounters highlights quantitative documentation metrics */}
        <section className="bg-muted/30">
          <ImpactCounters />
        </section>

        {/* NewsletterSignup provides updates on new research publications */}
        <section className="py-20">
          <NewsletterSignup />
        </section>
      </div>
    </main>
  );
}
