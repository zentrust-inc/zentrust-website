// app/page.tsx

import { GlobalHero } from "@/components/hero/GlobalHero";
import MissionSection from "@/components/mission/MissionSection";
import { ImpactCounters } from "@/components/impact/ImpactCounters";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

export default function HomePage() {
  const contentId = "content";

  return (
    <div className="relative">
      <GlobalHero
        headline={`Land systems and public ecology.
Research notes and context.
Education from ZenTrust.`}
        dek={`ZenTrust is a nonprofit public charity.
This page provides educational material for public understanding.
It does not offer medical, therapeutic, legal, or professional advice.
This page explores research, field observations, and public learning on regenerative ecology and community context.`}
        determination={{
          text: "Recognized as a 170(b)(1)(A)(vi) public charity.",
          label: "Official determination letter",
          href: "https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf",
        }}
        belowAnchorId={contentId}
        mode="answer"
      />

      <div id={contentId} className="relative z-0">
        <MissionSection />
        <ImpactCounters />
        <NewsletterSignup />
      </div>
    </div>
  );
}
