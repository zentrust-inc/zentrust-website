'use client'

import { Button } from '@/components/ui/button'
import { Shield, Heart, Eye, Lock, FileText, Phone } from 'lucide-react'
import Link from 'next/link'

const donorRights = [
  {
    icon: Eye,
    title: 'Right to Information',
    description: 'Donors have the right to receive current and accurate information about ZenTrust\'s mission, programs, and financial stewardship.'
  },
  {
    icon: FileText,
    title: 'Right to Transparency',
    description: 'Access to annual reports, financial statements, and governance policies to make informed giving decisions.'
  },
  {
    icon: Lock,
    title: 'Right to Privacy',
    description: 'Protection of personal and financial information with control over communication preferences and data sharing.'
  },
  {
    icon: Shield,
    title: 'Right to Ethical Treatment',
    description: 'Respectful, honest treatment without pressure, and freedom to ask questions about donation impact.'
  },
  {
    icon: Heart,
    title: 'Right to Recognition',
    description: 'Choice in how you are recognized, including the option to remain anonymous in all public materials.'
  },
  {
    icon: Phone,
    title: 'Right to Voice Concerns',
    description: 'Easy access to leadership to address questions, concerns, or complaints about giving experiences.'
  }
]

const ethicalStandards = [
  'All solicitations will be truthful and accurate',
  'Donations will be used only for stated purposes',
  'No donor information will be sold or shared with third parties',
  'All financial information will be disclosed honestly',
  'Donor requests for anonymity will be respected',
  'Complaints will be addressed promptly and professionally'
]

const privacyCommitments = [
  {
    title: 'Data Collection',
    description: 'We collect only information necessary for processing donations and providing donor services.'
  },
  {
    title: 'Data Protection',
    description: 'Industry-standard security measures protect donor information from unauthorized access or disclosure.'
  },
  {
    title: 'Communication Preferences',
    description: 'Donors control how and when we communicate, with easy options to update preferences or opt-out.'
  },
  {
    title: 'Data Rights',
    description: 'Donors can access, correct, or request deletion of their personal information at any time.'
  }
]

export default function DonorRightsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Donor <span className="gradient-text">Rights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ZenTrust is committed to protecting and respecting the rights of every donor. 
              This policy aligns with the AFP Donor Bill of Rights and establishes our 
              commitment to ethical fundraising practices.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                "Donors are partners in our mission. Their trust is sacred, 
                and their rights are non-negotiable."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — ZenTrust Ethical Fundraising Commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFP Donor Bill of Rights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AFP Donor Bill of <span className="gradient-text">Rights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ZenTrust fully endorses and implements the Association of Fundraising 
                Professionals' Donor Bill of Rights, ensuring ethical treatment of all donors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {donorRights.map((right, index) => {
                const Icon = right.icon
                return (
                  <div key={index} className="glass-card rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {right.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {right.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-12">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  The Complete AFP Donor Bill of Rights
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>1. To be informed of ZenTrust's mission, of the way the organization intends to use donated resources, and of its capacity to use donations effectively for their intended purposes.</p>
                  <p>2. To be informed of the identity of those serving on ZenTrust's governing board, and to expect the board to exercise prudent judgment in its stewardship responsibilities.</p>
                  <p>3. To have access to ZenTrust's most recent financial statements and annual reports.</p>
                  <p>4. To be assured their gifts will be used for the purposes for which they were given.</p>
                  <p>5. To receive appropriate acknowledgment and recognition.</p>
                  <p>6. To be assured that information about their donation is handled with respect and with confidentiality to the extent provided by law.</p>
                  <p>7. To expect that all relationships with individuals representing ZenTrust will be professional in nature.</p>
                  <p>8. To be informed whether those seeking donations are volunteers, employees of ZenTrust, or hired solicitors.</p>
                  <p>9. To have the opportunity for their names to be deleted from mailing lists that ZenTrust may intend to share.</p>
                  <p>10. To feel free to ask questions when making a donation and to receive prompt, truthful, and forthright answers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Fundraising Standards */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ethical Fundraising <span className="gradient-text">Standards</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ZenTrust maintains the highest ethical standards in all fundraising activities, 
                ensuring donors are treated with respect and transparency.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Our Commitments to Donors
                </h3>
                <div className="space-y-4">
                  {ethicalStandards.map((standard, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{standard}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                  <h4 className="font-bold text-foreground mb-2">
                    Donor Relations Philosophy
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We view donors as valued partners in our mission, not just sources of funding. 
                    Every interaction should strengthen trust and demonstrate our commitment to 
                    transparent, ethical stewardship of their generosity.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Donor Communication Standards
                </h3>
                <div className="space-y-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Acknowledgment</h4>
                    <p className="text-sm text-muted-foreground">
                      Prompt, personalized thank you letters for all donations within 48 hours
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Impact Reporting</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular updates showing how donations create meaningful change
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Financial Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete financial information available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Data Protection */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Privacy & <span className="gradient-text">Data Protection</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Protecting donor privacy is fundamental to our ethical fundraising practices. 
              We maintain strict data protection standards aligned with GDPR principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {privacyCommitments.map((commitment, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Your Data Rights
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Information We Collect</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Name and contact information</li>
                    <li>• Donation history and preferences</li>
                    <li>• Communication preferences</li>
                    <li>• Payment information (processed securely)</li>
                    <li>• Tax documentation for receipts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Your Rights</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Request data deletion</li>
                    <li>• Opt-out of communications</li>
                    <li>• Port your data to another organization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Exercise Your Rights */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Exercise Your <span className="gradient-text">Rights</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have questions about your rights as a donor or need to exercise any of them, 
              we make it easy to contact us and get assistance.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our donor relations team
                </p>
                <p className="text-primary font-semibold">+1 (508) 317-7517</p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send detailed questions or requests
                </p>
                <p className="text-primary font-semibold">hello@zentrust.org</p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">Request Access</h3>
                <p className="text-muted-foreground mb-4">
                  Access your donor information
                </p>
                <Button asChild size="sm">
                  <Link href="/contact">Request Data Access</Link>
                </Button>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Response Time Commitment
              </h3>
              <p className="text-muted-foreground mb-4">
                We are committed to responding to all donor inquiries within:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24 Hours</div>
                  <div className="text-sm text-muted-foreground">Email acknowledgment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">3 Business Days</div>
                  <div className="text-sm text-muted-foreground">Detailed response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">5 Business Days</div>
                  <div className="text-sm text-muted-foreground">Complex requests</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  Contact Donor Relations
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/governance">
                  View Governance Policies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}