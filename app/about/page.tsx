export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-xs tracking-widest text-primary mb-3 uppercase">
            About ZenTrust
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Regeneration Begins With Relationship
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ZenTrust is a 501(c)(3) public charity advancing regenerative ecology,
            watershed restoration, BPSS-integrative research, and open scientific
            education. We cultivate environments where ecosystems, communities,
            and knowledge systems strengthen through cooperation—not extraction.
          </p>
        </div>
      </section>

      {/* Mission Essence */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">

          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Our Perspective</h2>
            <p className="text-muted-foreground leading-relaxed">
              Regeneration is not a project—it is a way of seeing.  
              We work with landscapes, watersheds, and communities as living systems
              capable of restoring themselves when given the right conditions.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              We integrate ecological science, BPSS wellness research, and community-rooted
              knowledge to build long-term resilience. Our work honors both measurable
              impact and the deeper patterns of relationship, stewardship, and sovereignty.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              We operate through transparency, scientific integrity, and respect for
              individual autonomy. Engagement with ZenTrust is always voluntary—
              we do not solicit. Participation arises naturally from alignment
              with purpose and vision.
            </p>
          </div>

        </div>
      </section>

      {/* Governance Block */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Governance & Transparency
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            ZenTrust operates with accountability and clarity. As a federally recognized
            501(c)(3), our financial stewardship, governance practices, and ecological
            commitments are grounded in compliance, rigor, and openness.
          </p>

          <div className="glass-card rounded-2xl p-8">
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>• IRS 501(c)(3) Public Charity — EIN: 33-4318487</li>
              <li>• Determination Letter: July 1, 2025</li>
              <li>• Annual reporting and compliance filings</li>
              <li>• Transparent stewardship of voluntary resource flows</li>
              <li>• Governance grounded in scientific integrity and regenerative ethics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A Living Field of Possibility
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Regeneration emerges when people, land, and knowledge meet in mutual respect.  
            ZenTrust creates the conditions—what grows from them belongs to all of us.
          </p>
        </div>
      </section>

    </div>
  )
}
