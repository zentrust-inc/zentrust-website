"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Scale, Users, FileText, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { GlobalHero } from "@/components/hero/GlobalHero";

const governancePrinciples = [
  {
    icon: Shield,
    title: "Nonprofit Compliance",
    description: "Full adherence to IRS 501(c)(3) regulations, including prohibitions on private inurement and political activities.",
  },
  {
    icon: Scale,
    title: "Conflict of Interest",
    description: "Strict policies ensuring board members and stewards maintain independence and avoid conflicts in research oversight.",
  },
  {
    icon: Users,
    title: "Board Responsibilities",
    description: "Clear fiduciary duties including oversight of research, finances, and compliance with all applicable laws.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Annual Form 990 filings and open access to governance documents and research ethics policies.",
  },
  {
    icon: FileText,
    title: "Research Oversight",
    description: "Rigorous monitoring of all research support to ensure compliance with federal regulations for public charities.",
  },
  {
    icon: Heart,
    title: "Ethical Stewardship",
    description: "Commitment to ethical management of resources with all revenue reinvested into our educational mission.",
  },
];

const boardResponsibilities = [
  "Fiduciary oversight of organizational assets",
  "Strategic planning and research area approval",
  "Director evaluation and oversight",
  "Compliance with IRS 501(c)(3) regulations",
  "Risk management and internal controls",
  "Public accountability and transparency",
];

const policies = [
  {
    title: "Conflict of Interest Policy",
    description: "Procedures for disclosing and managing potential conflicts among board members and key personnel.",
    status: "Adopted July 2025",
  },
  {
    title: "Whistleblower Protection",
    description: "Protects individuals who report suspected violations of law or policy from retaliation.",
    status: "Adopted July 2025",
  },
  {
    title: "Document Retention",
    description: "Ensures records are maintained in compliance with legal requirements and research standards.",
    status: "Adopted July 2025",
  },
  {
    title: "Privacy & Data Ethics",
    description: "Governs the protection of personal information from all research and stewardship participants.",
    status: "Adopted July 2025",
  },
];

export default function GovernancePage() {
  const contentId = "content";

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="ZenTrust Governance"
        headline="Ethical stewardship and transparent oversight."
        dek="ZenTrust operates with clear governance and policies to ensure accountability to our mission of public benefit and research."
        belowAnchorId={contentId}
        mode="confirm"
      />

      {/* IRS Compliance Section */}
      <section id={contentId} className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                IRS 501(c)(3) <span className="gradient-text">Compliance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ZenTrust (EIN: 33-4318487) is a 501(c)(3) public charity. We maintain 
                strict adherence to federal and state regulations governing educational 
                nonprofit organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-8 border border-neutral-200 bg-white/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Public Charity Status</h3>
                <p className="text-muted-foreground mb-4">
                  Qualified as a public charity under IRC 501(c)(3). Contributions 
                  are tax-deductible to the extent allowed by law.
                </p>
                <div className="bg-neutral-100 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    <strong>EIN:</strong> 33-4318487<br />
                    <strong>Classification:</strong> 501(c)(3) Public Charity
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 border border-neutral-200 bg-white/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Prohibited Activities</h3>
                <p className="text-muted-foreground mb-4">
                  ZenTrust strictly avoids political campaign activity, excessive 
                  lobbying, and private inurement, ensuring all assets serve our mission.
                </p>
                <div className="bg-neutral-100 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    <strong>Political Neutrality:</strong> No candidate endorsements<br />
                    <strong>Public Benefit:</strong> No private benefit to board or staff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-24 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stewardship <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our framework is built on nonprofit best practices adapted to support 
              long-term ecological and systems research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governancePrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Policies & <span className="gradient-text">Ethics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ZenTrust maintains comprehensive policies to ensure research integrity 
              and the protection of all community participants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {policies.map((policy, index) => (
              <div key={index} className="border border-neutral-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-bold text-foreground mb-3">{policy.title}</h3>
                <p className="text-muted-foreground mb-4">{policy.description}</p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-2">
                  <p className="text-xs text-emerald-700">
                    <strong>Status:</strong> {policy.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stewardship Commitments */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Participation <span className="text-primary">Ethics</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-10">
              ZenTrust commits to protecting the autonomy and clarity of all individuals 
              who engage with our research ecosystem.
            </p>

            <div className="bg-neutral-800 rounded-2xl p-8 mb-10 text-left border border-neutral-700">
              <h3 className="text-xl font-bold mb-6 text-center">Our Commitment to You</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Clarity & Accuracy</h4>
                  <ul className="text-sm text-neutral-400 space-y-2">
                    <li>• Transparent reporting on research stewardship</li>
                    <li>• Access to public governance and compliance filings</li>
                    <li>• Honest communication grounded in observed reality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Privacy & Sovereignty</h4>
                  <ul className="text-sm text-neutral-400 space-y-2">
                    <li>• Individual control over personal data and preferences</li>
                    <li>• Options for private or anonymous participation</li>
                    <li>• Autonomy to modify or end engagement at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/stewardship/ethics">
                  Read Participation Principles
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white/10">
                <Link href="/contact">
                  Inquire About Governance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
