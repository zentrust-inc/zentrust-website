// app/page.tsx

import { GlobalHero } from "@/components/hero/GlobalHero";
import MissionSection from "@/components/mission/MissionSection";
import { ImpactCounters } from "@/components/impact/ImpactCounters";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

/**
 * The HomePage serves as the primary educational entry point for ZenTrust.
 * Content is curated to provide public research and ecological documentation
 * in accordance with 170(b)(1)(A)(vi) public charity standards.
 */
export default function HomePage() {
  const contentId = "content";

  return (
    <main className="relative min-h-screen">
      <GlobalHero
        headline={`Documenting land systems. 
Synthesizing public ecology. 
Advancing collective research.`}
        dek={`ZenTrust is a 501(c)(3) public charity.
This platform provides open-access research for public understanding.
We do not offer professional advice. We focus on field observations, 
literature reviews, and the documentation of regenerative ecological systems.`}
        determination={{
          text: "Recognized as a 170(b)(1)(A)(vi) public charity.",
          label: "View Determination Letter",
          href: "https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf",
        }}
        belowAnchorId={contentId}
        mode="answer"
      />

      <div id={contentId} className="relative z-0">
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
