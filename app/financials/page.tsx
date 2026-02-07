import { GlobalHero } from "@/components/hero/GlobalHero";
import { FileText, ShieldCheck, PieChart, Landmark } from "lucide-react";

export const metadata = {
  title: "Financials | ZenTrust",
  description:
    "Plain details about ZenTrust's financial transparency commitments and compliance filings.",
};

export default function FinancialsPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen">
      <GlobalHero
        kicker="Governance"
        headline="Financial transparency is a daily practice, not a marketing line."
        dek="ZenTrust operates as a 501(c)(3) public charity. Filings, budgets, and stewardship details stay readable and verifiable."
        belowAnchorId={contentId}
        mode="confirm"
        secondaryCta={{ label: "Review disclosures", href: `#${contentId}` }}
      />

      <div id={contentId} className="mx-auto max-w-4xl px-6 py-16 sm:py-24 space-y-16">
        
        {/* Header & Narrative */}
        <header className="max-w-3xl space-y-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-primary font-medium">Public Accountability</p>
            <h1 className="text-4xl font-semibold text-foreground">Financial Stewardship</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              As a 170(b)(1)(A)(vi) public charity, ZenTrust holds a mandate to operate for public benefit. 
              We maintain clear records to ensure our research and documentation remain independent.
            </p>
          </div>
        </header>

        {/* Quick Reference Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
            <ShieldCheck className="h-5 w-5 text-primary mb-3" />
            <span className="text-xs font-bold uppercase tracking-wider block mb-1">IRS Status</span>
            <span className="text-sm font-medium">501(c)(3) Public Charity</span>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
            <Landmark className="h-5 w-5 text-primary mb-3" />
            <span className="text-xs font-bold uppercase tracking-wider block mb-1">Tax ID (EIN)</span>
            <span className="text-sm font-medium">33-4318487</span>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
            <PieChart className="h-5 w-5 text-primary mb-3" />
            <span className="text-xs font-bold uppercase tracking-wider block mb-1">Fiscal Year</span>
            <span className="text-sm font-medium">Jan 1 – Dec 31</span>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
            <FileText className="h-5 w-5 text-primary mb-3" />
            <span className="text-xs font-bold uppercase tracking-wider block mb-1">Reporting</span>
            <span className="text-sm font-medium">Form 990 / 990-EZ</span>
          </div>
        </section>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Detailed Content */}
          <div className="md:col-span-3 space-y-10">
            <section className="space-y-4 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-semibold text-foreground">Operational Philosophy</h2>
              <p>
                We keep accounting, banking, and audit records organized and accessible. There are no
                commercial affiliates, no fundraising agencies, and no revenue-sharing agreements. 
                Our funding is derived from voluntary contributions and grants intended for 
                public ecological education.
              </p>
              <p>
                Restricted gifts are tracked through fund accounting to ensure they are used exactly 
                as designated by the contributor. Programmatic spending is prioritized to ensure 
                the maximum percentage of resources reaches field observations and research synthesis.
              </p>
            </section>

            <section className="space-y-3 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-semibold text-foreground">Disclosures</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong>Independence:</strong> No hidden fees, brokerage percentages, or revenue participation from third-party vendors.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong>Verification:</strong> Form 990 serves as the canonical public reference for our financial activities.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong>Zero Pressure:</strong> Financial updates are provided as neutral information, never as a solicitation for funds.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar / Document Links */}
          <aside className="md:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h3 className="font-semibold mb-4">Public Documents</h3>
              <div className="space-y-3">
                <a 
                  href="https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf" 
                  target="_blank"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors border border-border/50"
                >
                  <span className="text-sm">Determination Letter</span>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </a>
                <div className="p-3 rounded-lg border border-dashed border-border text-center">
                  <span className="text-xs text-muted-foreground italic">2025 Form 990 (Pending)</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Questions regarding financial documentation can be directed to our administrative board.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
