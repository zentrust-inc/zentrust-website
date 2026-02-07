'use client'

import { Button } from '@/components/ui/button'
import { Users, Microscope, Building, Heart, Target, Award, Globe, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { GlobalHero } from '@/components/hero/GlobalHero'

const partnershipTypes = [
  {
    icon: BookOpen,
    title: 'Academic Partnerships',
    description: 'Collaborative research documentation initiatives with universities and institutions focused on compiling literature regarding ecological restoration.',
    benefits: [
      'Joint research documentation and funding opportunities',
      'Access to ZenTrust research data and literature reviews',
      'Student internship and thesis research opportunities',
      'Shared resources for educational reference'
    ],
    status: 'Partnership development in progress'
  },
  {
    icon: Users,
    title: 'Community Observation',
    description: 'Documentation of how communities interact with ecological systems, compiling field observations for public research reference.',
    benefits: [
      'Documentation of regional ecological knowledge',
      'Community-led observation project design',
      'Educational resources for local stakeholders',
      'Regional knowledge sharing networks'
    ],
    status: 'Pilot observations launching 2025'
  },
  {
    icon: Building,
    title: 'Institutional Research',
    description: 'Strategic collaborations with entities committed to environmental research and data-driven ecological documentation.',
    benefits: [
      'Data synthesis for sustainability initiatives',
      'Participation in open-access research projects',
      'Measurement of ecological system variables',
      'Reference material for corporate stewardship'
    ],
    status: 'Expression of interest welcome'
  },
  {
    icon: Globe,
    title: 'International Collaboration',
    description: 'Global partnerships to document ecological practices and support knowledge transfer across diverse climatic regions.',
    benefits: [
      'Cross-cultural documentation and exchange',
      'International research consortium participation',
      'Global grant funding for educational research',
      'International research status measurement'
    ],
    status: 'Building international network'
  }
]

const partnershipPrinciples = [
  {
    icon: Target,
    title: 'Mission Alignment',
    description: 'Partnerships must directly support ZenTrust\'s core mission of advancing ecological research documentation.'
  },
  {
    icon: Award,
    title: 'Scientific Rigor',
    description: 'All collaborative documentation maintains high standards with peer review and open access to findings.'
  },
  {
    icon: Heart,
    title: 'Ethical Framework',
    description: 'Collaborations operate under clear ethical guidelines ensuring transparency for all stakeholders.'
  },
  {
    icon: Users,
    title: 'Open Access',
    description: 'Successful partnerships prioritize the public availability of research findings for educational benefit.'
  }
]

const partnershipProcess = [
  {
    step: '1',
    title: 'Initial Contact',
    description: 'Submit partnership inquiry through our contact form or direct email to partnerships@zentrust.world'
  },
  {
    step: '2',
    title: 'Alignment Assessment',
    description: 'We evaluate mission alignment, research feasibility, and public benefit potential'
  },
  {
    step: '3',
    title: 'Framework Design',
    description: 'Collaborative development of research scope, objectives, and data-sharing metrics'
  },
  {
    step: '4',
    title: 'Launch',
    description: 'Formal execution of the research collaboration and documentation launch'
  }
]

const currentOpportunities = [
  {
    title: 'Systems Research Consortium',
    description: 'Join universities in establishing standardized methodologies for documenting ecological outcomes in research literature.',
    timeline: 'Q1 2025',
    commitment: '2-3 year collaboration'
  },
  {
    title: 'Ecological Observation Pilot',
    description: 'Collaborate with land managers to document and catalog the effects of regenerative practices on local ecosystems.',
    timeline: 'Q2 2025',
    commitment: '3-5 year collaboration'
  },
  {
    title: 'Literature Review Initiative',
    description: 'Partner with academic institutions to develop comprehensive research reference materials for public use.',
    timeline: 'Q3 2025',
    commitment: '1-2 year collaboration'
  },
  {
    title: 'Global Knowledge Exchange',
    description: 'Participate in a global network for sharing documented ecological research findings across different regions.',
    timeline: 'Q4 2025',
    commitment: 'Ongoing collaboration'
  }
]

export default function PartnerPage() {
  const contentId = "content"

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="ZenTrust Partnerships"
        headline="Collaborative research built on transparency and open access."
        dek="ZenTrust is a 501(c)(3) public charity. We collaborate with institutions to document and share research findings on ecological restoration."
        belowAnchorId={contentId}
        mode="confirm"
      />

      {/* Partnership Principles */}
      <section id={contentId} className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Collaboration <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our framework is built on rigorous academic standards to ensure all 
              compiled research provides meaningful public value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipPrinciples.map((principle, index) => {
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
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Collaboration <span className="gradient-text">Models</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ZenTrust engages in several collaborative research models designed to 
              maximize the availability of ecological data for the public.
            </p>
          </div>

          <div className="space-y-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {type.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {type.description}
                      </p>
                      <div className="bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs text-amber-800 dark:text-amber-200">
                          <strong>Research Status:</strong> {type.status}
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-foreground mb-4">Collaboration Benefits</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Inquiry <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our structured approach ensures all research collaborations are 
                aligned with our educational mission and transparency standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Propose a Research Collaboration?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact our research team to begin a conversation about 
                  compiling and documenting findings on ecological restoration.
                </p>
                <div className="space-y-4">
                  <Button asChild>
                    <Link href="/contact">
                      partnerships@zentrust.world
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Phone: +1 (508) 317-7517
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Current <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The following research areas are actively seeking academic and institutional collaborators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentOpportunities.map((opportunity, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {opportunity.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {opportunity.timeline}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {opportunity.commitment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Research <span className="gradient-text">Standards</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              All ZenTrust collaborations maintain rigorous standards 
              to ensure findings are suitable for educational reference.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-6 text-center">
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Open Science</h3>
                <p className="text-sm text-muted-foreground">
                  All research documentation is published openly with clear data sharing protocols.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Peer Review</h3>
                <p className="text-sm text-muted-foreground">
                  Independent review process ensures the accuracy of all educational reference materials.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Standardized metrics for measuring and reporting ecological research status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Collaborate With <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in compiling a public database of ecological research documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Research Conversation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/research-areas">
                  Explore Research Areas
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              partnerships@zentrust.world • +1 (508) 317-7517
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
