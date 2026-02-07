"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Newspaper, Users } from "lucide-react"
import Link from "next/link"
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
    description: "Primary channel for all research inquiries",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (508) 317-7517",
    description: "Direct line for administrative support",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Duxbury, Massachusetts",
    description: "Administrative office (by appointment)",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "General",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integrate your API call here
    alert("Thank you — your inquiry has been received and will be reviewed.")
  }

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Contact ZenTrust"
        headline="Purposeful communication for shared ecological outcomes."
        dek="ZenTrust is a 501(c)(3) public charity. Connect with us regarding research, educational documentation, or institutional collaborations."
        belowAnchorId="content"
        mode="confirm"
      />

      <div id="content" className="pt-12">
        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((m, i) => {
                const Icon = m.icon
                return (
                  <div key={i} className="glass-card rounded-2xl p-6 text-center border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex mx-auto items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{m.title}</h3>
                    <p className="text-primary font-medium mt-1 truncate">{m.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{m.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Inquiry Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Specific <span className="gradient-text">Inquiries</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {inquiryTypes.map((t, i) => {
                const Icon = t.icon
                return (
                  <div key={i} className="glass-card rounded-2xl p-6 transition-all hover:shadow-lg">
                    <Icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-semibold text-lg mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{t.description}</p>
                    <p className="text-primary text-sm font-medium">{t.email}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Send a Message
              </h2>
              <p className="text-muted-foreground">
                For research proposals or data inquiries, please allow 2-3 business days for a response.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-border/50">
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
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background outline-none transition-all"
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
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we assist your research or inquiry?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background resize-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <Button type="submit" className="w-full size-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Administrative Headquarters
            </h2>
            <p className="text-muted-foreground mb-8">
              ZenTrust documents ecological systems globally from our base in Duxbury, MA.
            </p>

            <div className="glass-card rounded-2xl p-10 border border-border/50">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <address className="not-italic text-lg leading-relaxed">
                2 Reserve Way<br />
                Duxbury, MA 02332<br />
                United States
              </address>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Office visits are arranged by invitation or scheduled appointment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
