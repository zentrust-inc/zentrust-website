import { Button } from '@/components/ui/button'
import { Heart, Shield, TrendingUp, Users, TreePine, Microscope, Target, Zap, Award } from 'lucide-react'
import Link from 'next/link'

const donationTiers = [
  {
    icon: Heart,
    title: 'Seed Support',
    amount: '$50',
    description: 'Helps fund development of our first regenerative agriculture field site',
    futureImpact: 'Enables soil testing and baseline ecological assessment for pilot location',
    popular: true,
  },
  {
    icon: TreePine,
    title: 'Growth Partner',
    amount: '$150',
    description: 'Supports creation of open-access BPSS curriculum materials',
    futureImpact: 'Contributes to developing educational resources for farmer training programs',
    popular: false,
  },
  {
    icon: Microscope,
    title: 'Research Champion',
    amount: '$500',
    description: 'Contributes to baseline ecological research and land assessment methodology',
    futureImpact: 'Funds initial data collection protocols for measuring regenerative outcomes',
    popular: false,
  },
  {
    icon: Users,
    title: 'Movement Builder',
    amount: '$1,000',
    description: 'Helps build our capacity to train farmers and establish community partnerships',
    futureImpact: 'Supports development of training infrastructure and partnership frameworks',
    popular: false,
  },
]

const projectedImpact = [
  {
    icon: TreePine,
    title: 'Tree Planting Goals',
    description: 'Target: 50,000 trees planned for first-year field sites',
    note: 'Goal for 2025-2026 (not yet achieved)',
  },
  {
    icon: Users,
    title: 'Training Targets',
    description: 'Goal: 1,200 farmers trained in BPSS methodology',
    note: 'Program development underway',
  },
  {
    icon: Microscope,
    title: 'Research Projects',
    description: 'Target: 15 ecological studies initiated',
    note: 'Baseline assessments beginning Q2 2025',
  },
  {
    icon: Target,
    title: 'Restoration Sites',
    description: 'Goal: 2,500 acres under assessment',
    note: 'Site selection process launching',
  },
]

const foundingPrinciples = [
  {
    icon: Shield,
    title: 'Complete Transparency',
    description: 'Annual Form 990 filings and open financial reporting as programs scale',
  },
  {
    icon: Award,
    title: 'Ethical Fundraising',
    description: 'No private inurement. All revenue reinvested in mission advancement',
  },
  {
    icon: TrendingUp,
    title: 'Open Science',
    description: 'All research findings published openly for global regenerative movement',
  },
  {
    icon: Users,
    title: 'Community Partnership',
    description: 'Local stakeholders involved in all program design and implementation',
  },
]

const earlySupportBenefits = [
  'Accelerate launch-phase research and curriculum development',
  'Enable early partnerships with farmers and communities',
  'Support ecological assessment and site preparation',
  'Build infrastructure for measurable future impact',
  'Join the founding circle of regenerative change',
  'Help establish transparency and accountability standards',
]

export default function DonatePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Invest in ZenTrust's <span className="gradient-text">Foundational Year</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              You're not just donating to a charity—you're helping plant the roots of a global 
              regenerative movement. ZenTrust is launching its first programs, and early support 
              makes all the difference between vision and reality.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                "Every great movement begins with committed supporters who believe in what's possible."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — ZenTrust Founding Team
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Heart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Support Our Launch
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#why-early-support">
                  Why Early Support Matters
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Impact During Our <span className="gradient-text">Foundational Year</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These tiers represent opportunities to fund specific aspects of our launch. 
              Your contribution helps make the first year of real-world impact possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6 relative transition-all duration-300 hover:scale-105 ${
                    tier.popular ? 'border-primary/30 bg-primary/5' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Flexible
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    
                    <div className="text-2xl font-bold text-primary mb-2">
                      {tier.amount}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {tier.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {tier.description}
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-foreground">Future Impact:</strong> {tier.futureImpact}
                      </p>
                    </div>
                    
                    <Button 
                      variant={tier.popular ? "default" : "outline"} 
                      className="w-full"
                      size="sm"
                    >
                      Choose This Level
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All donations are tax-deductible. 501(c)(3) status effective July 1, 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Projected First-Year Impact */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Projected First-Year <span className="gradient-text">Impact Goals</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These are our targets for 2025-2026—not achievements, but goals your support 
              helps us work toward. We'll report honestly on progress as we build from the ground up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectedImpact.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  
                  <div className="bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2">
                    <p className="text-xs text-amber-800 dark:text-amber-200">
                      <strong>TARGET GOAL</strong><br />
                      {item.note}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Early Support Matters */}
      <section id="why-early-support" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why <span className="gradient-text">Early Support</span> Matters
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ZenTrust is at a pivotal moment. We're not asking you to fund completed work—
                we're inviting you to help build the foundation for transformational change.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Your Early Investment Enables:
                </h3>
                
                <div className="space-y-4">
                  {earlySupportBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                  <h4 className="font-bold text-foreground mb-2">
                    The Power of Foundational Support
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Every successful regenerative project started with someone who believed 
                    in the possibility before the proof existed. Early donors don't just 
                    fund programs—they fuel the innovation and partnerships that make 
                    lasting impact possible.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Join Our Founding Circle
                  </h3>
                  <p className="text-muted-foreground">
                    Be part of something from the very beginning
                  </p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Quarterly Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Transparent reporting on progress, challenges, and breakthroughs
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Research Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Early access to findings and methodologies as they're developed
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Direct Connection</h4>
                    <p className="text-sm text-muted-foreground">
                      Opportunity to engage with our research and field teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Transparency */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment to <span className="gradient-text">Transparency</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As a newly formed organization, we're committed to setting the standard 
              for ethical nonprofit transparency from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundingPrinciples.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                How We Use Donations During Our Foundational Year
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Your donation supports the infrastructure necessary to begin meaningful field work:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Program Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Research design, curriculum creation, partnership development, and field site preparation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Operational Foundation</h4>
                  <p className="text-sm text-muted-foreground">
                    Staff hiring, systems setup, legal compliance, and administrative infrastructure
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ecological Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Baseline studies, soil testing, biodiversity surveys, and impact measurement frameworks
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Partnership</h4>
                  <p className="text-sm text-muted-foreground">
                    Farmer engagement, stakeholder consultation, and collaborative program design
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                  <strong>IRS Filing:</strong> ZenTrust will file annual Form 990 forms for complete financial transparency. 
                  All revenue is reinvested in mission advancement per 501(c)(3) requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Role in Building What Comes Next */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Role in Building <span className="gradient-text">What Comes Next</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              This is where the story begins. Every regenerative landscape, every trained farmer, 
              every scientific breakthrough starts with someone who believed in the possibility 
              before the proof existed.
            </p>
            
            <div className="glass-card rounded-2xl p-8 mb-8">
              <blockquote className="text-lg text-foreground mb-4 italic">
                "The best time to plant a tree was 20 years ago. The second best time is now."
              </blockquote>
              <p className="text-muted-foreground">
                The same is true for regenerative movements. Your support today plants the seeds 
                of global change that will grow for decades to come.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Heart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Become a Founding Supporter
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Questions? Let's Talk</Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Tax-deductible contributions • EIN: 33-4318487 • 501(c)(3) effective July 1, 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}