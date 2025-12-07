'use client'

import { Button } from '@/components/ui/button'
import { Mail, Calendar, BookOpen, Users, Heart, Shield, Bell, Globe } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const newsletterContent = [
  {
    icon: BookOpen,
    title: 'Research Updates',
    description: 'Latest findings from our regenerative agriculture research, peer-reviewed publications, and scientific discoveries that are shaping the field.',
    frequency: 'Monthly'
  },
  {
    icon: Globe,
    title: 'Program Progress',
    description: 'Updates on field implementation, community partnerships, and measurable outcomes from our programs launching in 2025.',
    frequency: 'Bi-weekly'
  },
  {
    icon: Calendar,
    title: 'Events & Opportunities',
    description: 'Webinars, workshops, conferences, and collaboration opportunities in the regenerative agriculture community.',
    frequency: 'As announced'
  },
  {
    icon: Users,
    title: 'Community Spotlights',
    description: 'Stories from farmers, researchers, and community partners who are implementing regenerative practices.',
    frequency: 'Monthly'
  }
]

const subscriberBenefits = [
  'Early access to research findings and publications',
  'Exclusive insights into program development and field work',
  'Priority registration for ZenTrust events and workshops',
  'Direct connection with our research and field teams',
  'Monthly impact reports with transparent progress updates',
  'Opportunities to participate in research and pilot programs'
]

const privacyCommitments = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Your email address is encrypted and stored securely with industry-standard security measures.'
  },
  {
    icon: Heart,
    title: 'No Selling',
    description: 'We never sell, rent, or share your personal information with third parties for marketing purposes.'
  },
  {
    icon: Bell,
    title: 'Easy Unsubscribe',
    description: 'Every email includes a clear unsubscribe link. You can opt-out at any time with one click.'
  },
  {
    icon: Users,
    title: 'Respectful Frequency',
    description: 'We maintain a respectful communication frequency and honor all unsubscribe requests immediately.'
  }
]

const newsletterStats = [
  { number: '0', label: 'Current Subscribers', description: 'Be among our founding subscribers' },
  { number: '4', label: 'Content Types', description: 'Research, programs, events, and community stories' },
  { number: '2025', label: 'Launch Year', description: 'Get updates from our very first operational year' },
  { number: '100%', label: 'Transparent', description: 'All updates reflect actual progress and challenges' }
]

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend-only form - would integrate with backend in production
    console.log('Newsletter subscription:', { email, name, interests })
    setIsSubscribed(true)
  }

  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  if (isSubscribed) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Welcome to the ZenTrust Community!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for subscribing to our newsletter. You'll receive your first update 
                within the next few days, sharing insights from our foundational work in 2025.
              </p>
              <div className="space-y-4">
                <Button asChild>
                  <Link href="/">
                    Return to Homepage
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Questions? Contact us at{' '}
                  <Link href="/contact" className="text-primary hover:underline">
                    hello@zentrust.org
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our <span className="gradient-text">Newsletter</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Be part of ZenTrust's foundational journey as we launch regenerative agriculture 
              programs, conduct groundbreaking research, and build community partnerships in 2025.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                "Every great movement needs informed supporters. Join us as we build 
                the future of regenerative agriculture from the ground up."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — ZenTrust Founding Team
              </p>
            </div>

            {/* Newsletter Signup Form */}
            <div className="glass-card rounded-2xl p-8 max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe to Newsletter
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  . Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You'll <span className="gradient-text">Receive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our newsletter provides comprehensive updates on ZenTrust's work, 
              bringing you closer to the regenerative agriculture movement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {newsletterContent.map((content, index) => {
              const Icon = content.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {content.title}
                        </h3>
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {content.frequency}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Subscriber Benefits */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Exclusive Subscriber Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {subscriberBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Subscribe <span className="gradient-text">Now</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  2025 marks ZenTrust's transition from planning to implementation. 
                  Subscribe now to witness history in the making and help shape our foundational year.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Foundational Insights</h4>
                      <p className="text-sm text-muted-foreground">
                        Get exclusive access to our early research findings and program development insights
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Direct Connection</h4>
                      <p className="text-sm text-muted-foreground">
                        Build relationships with our research team and field partners
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Early Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Be first to know about new programs, partnerships, and opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Newsletter Launch Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {newsletterStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Privacy & <span className="gradient-text">Commitment</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trust is paramount. We maintain the highest standards of data protection 
              and respectful communication practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {privacyCommitments.map((commitment, index) => {
              const Icon = commitment.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {commitment.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {commitment.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Our Promise to Subscribers
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Quality Over Quantity</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Meaningful content that advances the conversation</li>
                    <li>• No spam or irrelevant promotional material</li>
                    <li>• Clear value in every newsletter</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Transparent Communication</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Honest updates about progress and challenges</li>
                    <li>• No sugar-coating of difficulties or setbacks</li>
                    <li>• Regular frequency without overwhelming subscribers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join the <span className="gradient-text">Movement</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe today and become part of ZenTrust's foundational community. 
              Your support and engagement help shape the future of regenerative agriculture.
            </p>
            
            <div className="glass-card rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">
                Quick Signup - Just Your Email
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                />
                <Button type="submit">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/contact">
                  Questions? Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/privacy">
                  View Privacy Policy
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              hello@zentrust.org • We respect your privacy and never spam
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}