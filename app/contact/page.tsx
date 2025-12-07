'use client'

import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Newspaper, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const inquiryTypes = [
  {
    icon: MessageCircle,
    title: 'General Inquiries',
    description: 'Questions about ZenTrust, our mission, or programs',
    email: 'hello@zentrust.org',
    response: '24-48 hours'
  },
  {
    icon: Newspaper,
    title: 'Media & Press',
    description: 'Press inquiries, interview requests, and media partnerships',
    email: 'press@zentrust.org',
    response: 'Same business day'
  },
  {
    icon: Users,
    title: 'Partnerships',
    description: 'Academic, research, community, and corporate partnerships',
    email: 'partnerships@zentrust.org',
    response: '2-3 business days'
  },
  {
    icon: Heart,
    title: 'Donor Relations',
    description: 'Questions about donations, giving, and donor rights',
    email: 'donors@zentrust.org',
    response: '24 hours'
  }
]

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
  { day: 'Sunday', hours: 'Closed' }
]

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@zentrust.org',
    description: 'For general inquiries and non-urgent matters'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (508) 317-7517',
    description: 'For urgent matters and direct conversation'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '2 Reserve Way, Duxbury, MA 02332, USA',
    description: 'Our administrative office location'
  }
]

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState('general')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'general',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend-only form - would integrate with backend in production
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will respond within 24-48 hours.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're here to answer your questions, explore partnerships, and connect with 
              anyone passionate about regenerative agriculture and ecological restoration.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                "Every conversation begins with a hello. Reach out—let's explore how 
                we can work together to regenerate our world."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — The ZenTrust Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to reach us based on your inquiry type and urgency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-2">
                    {method.value}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Office Hours */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                  <strong>Emergency Contact:</strong> For urgent matters outside business hours, 
                  please email hello@zentrust.org with "URGENT" in the subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Inquiry <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Different types of inquiries are handled by specialized team members 
              to ensure you get the most helpful response.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {inquiryTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {type.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-primary font-medium">
                          {type.email}
                        </p>
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {type.response}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Use this form for general inquiries, and we'll route your message 
                to the appropriate team member based on your inquiry type.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                      placeholder="Your organization or company"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="media">Media & Press</option>
                      <option value="partnership">Partnership</option>
                      <option value="donor">Donor Relations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-background text-foreground resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Privacy Notice:</strong> Your personal information will be used only to respond 
                    to your inquiry and will not be shared with third parties. See our{' '}
                    <Link href="/privacy" className="underline hover:text-blue-900">
                      Privacy Policy
                    </Link>{' '}
                    for details.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Location</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ZenTrust is based in Duxbury, Massachusetts, with programs and partnerships 
              spanning across regions and international collaborations.
            </p>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">Administrative Office</h3>
              </div>
              <p className="text-lg text-foreground mb-4">
                2 Reserve Way<br />
                Duxbury, MA 02332<br />
                United States
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">By Appointment</h4>
                  <p className="text-sm text-muted-foreground">
                    We welcome visitors by appointment. Please contact us in advance 
                    to schedule a visit to our office.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Virtual Meetings</h4>
                  <p className="text-sm text-muted-foreground">
                    We conduct many meetings virtually to accommodate partners 
                    and collaborators across different locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}