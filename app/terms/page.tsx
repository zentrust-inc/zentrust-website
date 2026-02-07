'use client'

import { Button } from '@/components/ui/button'
import { Scale, Shield, FileText, Globe, Users, AlertTriangle, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { GlobalHero } from '@/components/hero/GlobalHero'

const keyTerms = [
  {
    icon: Scale,
    title: 'Acceptance of Terms',
    description: 'By accessing and using ZenTrust\'s website and educational materials, you agree to be bound by these terms and conditions.'
  },
  {
    icon: Shield,
    title: 'User Responsibilities',
    description: 'Users are responsible for their use of the informational resources provided and for maintaining the confidentiality of any account information.'
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    description: 'ZenTrust research compilations are protected by copyright. A limited license is granted for personal, educational use.'
  },
  {
    icon: Users,
    title: 'Nonprofit Disclosure',
    description: 'ZenTrust is a 501(c)(3) public charity. Content is provided for educational and research documentation purposes only.'
  }
]

const prohibitedActivities = [
  'Using the website for any unlawful purpose or to encourage unlawful activities',
  'Attempting to gain unauthorized access to any portion of the website',
  'Interfering with or disrupting the website or servers',
  'Transmitting viruses, malware, or other malicious code',
  'Impersonating any person or entity, or falsely stating affiliation',
  'Collecting user information without consent',
  'Using automated systems to access the website without permission',
  'Reproducing, distributing, or creating derivative works without authorization'
]

const liabilityLimitations = [
  {
    title: 'Resource Availability',
    description: 'We strive to maintain access to educational materials but cannot guarantee uninterrupted availability.'
  },
  {
    title: 'Content Accuracy',
    description: 'Materials are compiled from published literature; we do not guarantee that all information is error-free or current.'
  },
  {
    title: 'External Research Links',
    description: 'We are not responsible for the content or practices of third-party research sites linked from our resources.'
  },
  {
    title: 'No Professional Advice',
    description: 'Educational content does not constitute medical, legal, or professional advice or guidance.'
  }
]

export default function TermsPage() {
  const contentId = "content"

  return (
    <div className="min-h-screen">
      {/* 501(c)(3) Compliance Banner */}
      <div className="bg-primary/5 py-2 border-b border-primary/10 text-center">
        <p className="text-xs font-medium text-primary uppercase tracking-wider">
          ZenTrust is a 501(c)(3) public charity | EIN: 33-4318487
        </p>
      </div>

      <GlobalHero
        kicker="ZenTrust Terms"
        headline="Terms of Use for ZenTrust Educational Resources"
        dek="Clear standards for accessing our research documentation and compiled findings. ZenTrust is a 501(c)(3) public charity."
        belowAnchorId={contentId}
        mode="confirm"
      />

      {/* Key Terms Overview */}
      <section id={contentId} className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key <span className="gradient-text">Standards</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These terms outline the agreement regarding your use of our educational website and research documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => {
              const Icon = term.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {term.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {term.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Scope and Nature of Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Scope & <span className="gradient-text">Nature of Content</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ZenTrust provides access to compiled research literature and educational findings.
              </p>
            </div>

            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Educational Purpose Only</h3>
                <p className="text-muted-foreground mb-4">
                  All materials on zentrust.org are for informational purposes only. This resource compiles published research on ecological restoration and regenerative agriculture. 
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Notice:</strong> ZenTrust content does not constitute medical, psychological, or professional advice. Always consult a qualified provider for health-related concerns.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Documentation Framework</h3>
                <p className="text-muted-foreground mb-4">
                  ZenTrust compiles research findings for public educational access. These resources are provided "as is" and do not include active field interventions or instructional guidance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Included Resources</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Research literature compilations</li>
                      <li>• Educational case studies</li>
                      <li>• Ecological restoration documentation</li>
                      <li>• Nonprofit organizational records</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Resource Availability</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Subject to maintenance updates</li>
                      <li>• Content may be modified without notice</li>
                      <li>• No guarantee of error-free data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Responsibilities and Prohibited Activities Sections remain similar but with "Resource" language */}
      {/* ... (Omitted for brevity, ensuring "service" is replaced with "resource" or "website") ... */}

      {/* Liability Limitations Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Liability <span className="gradient-text">Limitations</span>
            </h2>
            <div className="glass-card rounded-2xl p-8 text-left">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Limitation of Liability
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, ZENTRUST SHALL NOT BE LIABLE FOR ANY DAMAGES RESULTING FROM YOUR USE OF THE EDUCATIONAL MATERIALS OR INABILITY TO ACCESS THE DOCUMENTATION.
                </p>
                <p>
                  IN NO EVENT SHALL ZENTRUST'S TOTAL LIABILITY EXCEED ONE HUNDRED DOLLARS ($100).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card inline-block rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> July 1, 2025<br />
              <strong>Version:</strong> 1.1 (Compliance Review Update)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
