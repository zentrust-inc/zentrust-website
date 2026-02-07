"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Newspaper, Users } from "lucide-react"
import { GlobalHero } from "@/components/hero/GlobalHero"

const inquiryTypes = [
  {
    icon: MessageCircle,
    title: "General",
    description: "Inquiries regarding ZenTrust's mission and educational resources.",
    email: "hello@zentrust.world",
  },
  {
    icon: Newspaper,
    title: "Media & Press",
    description: "Press requests, interviews, and public communication.",
    email: "press@zentrust.world",
  },
  {
    icon: Users,
    title: "Collaborations",
    description: "Academic research and ecological documentation inquiries.",
    email: "partnerships@zentrust.world",
  }
]

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@zentrust.world",
    description: "Primary channel for research inquiries",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (508) 317-7517",
    description: "Administrative support line",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Duxbury, Massachusetts",
    description: "Office (by appointment only)",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "General Research Interest",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for form submission (e.g., API route) would go here
    alert("Thank you — your inquiry has been received and will be reviewed.")
  }

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Contact ZenTrust"
        headline="Purposeful communication for shared ecological outcomes."
        dek="ZenTrust is a 501(c)(3) public charity. Connect with us regarding research collaborations, educational documentation, or institutional inquiries."
        belowAnchorId="content"
        mode="confirm"
      />

      <div id="content" className="pt-12">
        {/* Contact Methods Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((m, i) => {
                const Icon = m.icon
                return (
                  <div key={i} className="glass-card rounded-2xl p-8 text-center border border-border/50 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex mx-auto items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{m.title}</h3>
                    <p className="text-primary font-medium mt-1 truncate">{m.value}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Inquiry Categories Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Specific <span className="text-primary">Inquiry Channels</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Directing your message to the appropriate department ensures a more precise response from our research or administrative teams.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {inquiryTypes.map((t, i) => {
                const Icon = t.icon
                return (
                  <div key={i} className="glass-card rounded-2xl p-6 transition-all hover:shadow-md border border-border/40">
                    <Icon className="h-6 w-6 text-primary/70 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{t.description}</p>
                    <p className="text-primary text-sm font-mono font-medium">{t.email}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Send a Message
              </h2>
              <p className="text-muted-foreground">
                For detailed research proposals or data inquiries, please allow 2-3 business days for our board to review your request.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Inquiry Type</label>
                  <select 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background outline-none transition-all focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option>General Research Interest</option>
                    <option>Academic Collaboration</option>
                    <option>Media Inquiry</option>
                    <option>Administrative Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Please provide context for your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background resize-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <Button type="submit" className="w-full py-6 text-base font-medium">
                  <Mail className="h-4 w-4 mr-2" />
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Administrative Headquarters
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              While our research is documented globally, ZenTrust maintains its administrative base in Duxbury, Massachusetts.
            </p>

            <div className="glass-card rounded-2xl p-10 border border-border/50 bg-background/50 backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <address className="not-italic text-lg leading-relaxed font-medium">
                2 Reserve Way<br />
                Duxbury, MA 02332<br />
                United States
              </address>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground italic">
                  Note: To maintain the focus of our research teams, office visits are strictly by appointment or formal invitation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
