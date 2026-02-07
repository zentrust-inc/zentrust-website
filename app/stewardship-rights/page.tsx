"use client";

import React from "react";
import { GlobalHero } from "@/components/hero/GlobalHero";

export default function StewardshipRightsPage() {
  const contentId = "content";

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Governance & Ethics"
        headline="Stewardship Ethics & Participation Principles"
        dek="A transparent framework of our commitments to those participating in ZenTrust's educational and research initiatives."
        belowAnchorId={contentId}
        mode="confirm"
      />

      <section id={contentId} className="py-16 md:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">

          {/* 1. Purpose */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              1. Commitment to Clarity of Purpose
            </h2>
            <p className="text-muted-foreground">
              Participants have the right to understand the mission and direction of 
              ZenTrust’s educational work, including:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Our focus on regenerative ecology and contextual systems research.</li>
              <li>How resources are stewarded toward long-term ecological documentation.</li>
              <li>The values of transparency, regeneration, and interdependence that guide our research.</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              ZenTrust (EIN: 33-4318487) is a 501(c)(3) public charity committed to open access learning.
            </p>
          </article>

          {/* 2. Voluntary Participation */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              2. Principle of Voluntary Engagement
            </h2>
            <p className="text-muted-foreground">
              All forms of engagement with ZenTrust—whether through research, learning, or 
              resource sharing—are entirely voluntary. We maintain a strict policy against 
              pressure, coercion, or manipulative solicitation.
            </p>
            <p className="text-sm text-muted-foreground">
              Participation is invited based on alignment with educational goals, not 
              external obligation.
            </p>
          </article>

          {/* 3. Respect & Dignity */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              3. Commitment to Respect & Dignity
            </h2>
            <p className="text-muted-foreground">
              Every participant is treated as a co-steward of ecological knowledge. 
              We do not recognize a hierarchy between those who share resources and 
              those who share knowledge or land-based observations.
            </p>
          </article>

          {/* 4. Transparent Stewardship */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              4. Transparent Stewardship of Resources
            </h2>
            <p className="text-muted-foreground">
              ZenTrust provides public summaries of how voluntary contributions are 
              stewarded to support:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Ecological documentation and watershed regeneration research.</li>
              <li>The development of open-access educational tools and trainings.</li>
              <li>Community-based land stewardship observations.</li>
            </ul>
          </article>

          {/* 5. Data Sovereignty */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              5. Privacy & Data Sovereignty
            </h2>
            <p className="text-muted-foreground">
              ZenTrust does not sell or trade personal data. We treat information 
              shared with us as a trust relationship, with commitments to:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Anonymity in research and participation where requested.</li>
              <li>Accessible requests for data correction or deletion.</li>
              <li>Engagement without public recognition for all participants.</li>
            </ul>
          </article>

          {/* 6. Non-Solicitation Policy */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              6. Non-Solicitation Policy
            </h2>
            <p className="text-muted-foreground">
              To preserve the integrity of our research environment, ZenTrust 
              does not engage in high-pressure fundraising. Participants have the right:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>To participate purely through reflection and learning without donating.</li>
              <li>To be free from repeated or unwanted resource appeals.</li>
              <li>To be recognized as a participant in a research community, not a "donor."</li>
            </ul>
          </article>

          {/* 7. Honest Communication */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              7. Commitment to Honest & Clear Communication
            </h2>
            <p className="text-muted-foreground">
              Our communications are grounded in observed data. We commit to:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Avoiding exaggerated claims or emotionally manipulative imagery.</li>
              <li>Transparently sharing the limitations and uncertainties of our research.</li>
              <li>Using language that reflects ecological reality rather than artificial urgency.</li>
            </ul>
          </article>

          {/* 8. Modify Participation */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              8. Autonomy to Modify Participation
            </h2>
            <p className="text-muted-foreground">
              Participation is always a choice. Participants may adjust their engagement, 
              end recurring resource flows, or unsubscribe from communications 
              at any time without judgment or pressure.
            </p>
          </article>

          {/* 9. Accountability */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              9. Institutional Accountability
            </h2>
            <p className="text-muted-foreground">
              ZenTrust maintains governance structures to ensure all activities 
              remain aligned with our mission as an educational non-profit. 
              We respond in good faith to all inquiries regarding our 
              stewardship practices.
            </p>
          </article>

          {/* 10. Access to Information */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              10. Access to Public Records
            </h2>
            <p className="text-muted-foreground">
              ZenTrust makes key organizational records available for public review, 
              including our IRS determination letter and annual public filings, 
              to ensure transparency in our stewardship.
            </p>
          </article>

          {/* Closing Reflection */}
          <article className="space-y-3 border-t border-border pt-8 mt-4">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
              A Shared Field of Stewardship
            </h2>
            <p className="text-muted-foreground">
              This framework exists to protect the autonomy and dignity of our 
              community members. It ensures that the interdependence of people, 
              land, and water is honored through ethical and transparent governance.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              ZenTrust provides educational resources and research documentation. 
              Our work does not constitute medical, financial, or legal advice.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
