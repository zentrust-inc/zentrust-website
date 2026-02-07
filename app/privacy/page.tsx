'use client'

import { Button } from '@/components/ui/button'
import { Shield, Lock, Eye, Users, Database, Globe, Phone, Mail, FileSearch } from 'lucide-react'
import Link from 'next/link'
import { GlobalHero } from '@/components/hero/GlobalHero'

const dataCategories = [
  {
    icon: Users,
    title: 'Participant & Researcher Info',
    description: 'Name, email address, institutional affiliation, and professional focus areas.',
    usage: ['Managing research collaborations', 'Sending technical digests', 'Scholarly communication']
  },
  {
    icon: Database,
    title: 'Donor & Compliance Records',
    description: 'Transaction history, tax documentation, and official communication preferences.',
    usage: ['501(c)(3) tax receipts', 'Annual research reporting', 'Nonprofit compliance']
  },
  {
    icon: Eye,
    title: 'Research Portal Analytics',
    description: 'Technical page usage, literature search patterns, and device information.',
    usage: ['Optimizing research access', 'Content accessibility', 'Security monitoring']
  },
  {
    icon: FileSearch,
    title: 'Educational Feedbacks',
    description: 'Inquiries regarding literature reviews, survey responses, and technical feedback.',
    usage: ['Refining educational materials', 'Quality assurance', 'Documenting systems science']
  }
]

// ... (securityMeasures and userRights arrays remain largely the same, but ensure they point to 'privacy@zentrust.org')

export default function PrivacyPage() {
  const contentId = "content"

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Transparency"
        headline="Privacy & Data Stewardship: our commitment to security."
        dek="We safeguard information to support the integrity of our research and the privacy of our educational community."
        belowAnchorId={contentId}
        mode="confirm"
      />

      {/* COMPLIANCE ALERT: NO CLINICAL DATA CLAUSE */}
      <section className="bg-primary/5 py-12 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center space-x-4">
            <Shield className="h-8 w-8 text-primary shrink-0" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong>Institutional Notice:</strong> ZenTrust does not collect or process Protected Health 
              Information (PHI) or clinical data. Our research is focused on systems documentation 
              and educational literature reviews. We do not engage in "Bio-Psycho-Social-Spiritual" 
              interventions or therapeutic advice.
            </p>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section id={contentId} className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Data <span className="gradient-text">Documentation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Collection is limited to the data points required to facilitate open scientific 
              communication and nonprofit transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research Purpose:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.usage.map((use, useIndex) => (
                        <li key={useIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Remaining sections (How We Use Info, Sharing, Security) 
          should replace "Program Effectiveness" with "Research Progress" 
          and "Community Impact" with "Educational Milestone Documentation" */}
          
      {/* ... (Implement similar terminology scrubbing for remaining sections) */}

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Policy Alignment
              </h3>
              <p className="text-muted-foreground mb-6">
                This policy was last updated on July 1, 2025, and audited in February 2026 to 
                align with Google Grant Transparency Standards for nonprofit research organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Privacy Inquiries
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/terms">
                    Terms of Service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
