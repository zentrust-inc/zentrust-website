"use client"

import { motion } from 'framer-motion'
import { 
  Leaf, 
  Heart, 
  Brain, 
  Users, 
  Globe, 
  Shield, 
  Microscope, 
  Target,
  BookOpen,
  Zap,
  TreePine,
  Waves,
  Sun,
  Compass,
  Star
} from 'lucide-react'
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup'

// Hero Section - Our Vision for Regeneration
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Leaf className="h-16 w-16 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Vision for</span>
            <br />
            <span className="text-foreground">Regeneration</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            We envision a world where ecosystems and communities heal together—where healing the land 
            and healing ourselves become one sacred practice. This is regeneration, not just sustainability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <TreePine className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ecosystem Healing</h3>
              <p className="text-muted-foreground">Restoring soils, waters, and biodiversity through regenerative practices</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community Resilience</h3>
              <p className="text-muted-foreground">Building strong, self-reliant communities rooted in shared purpose</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Sun className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Collective Liberation</h3>
              <p className="text-muted-foreground">Creating pathways out of extractive systems and toward regenerative abundance</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// BPSS Model Section
function BPSSModel() {
  const bpssAspects = [
    {
      icon: Heart,
      title: "Biological",
      description: "Physical health through nutrition, movement, sleep, and connection with natural rhythms. We support the body's innate wisdom to heal when given the right conditions.",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Psychological", 
      description: "Mental and emotional well-being through mindfulness, therapy, creative expression, and practices that cultivate inner peace and resilience.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Social",
      description: "Connection, belonging, and healthy relationships within families, communities, and organizations that nurture our shared humanity.",
      color: "text-blue-500"
    },
    {
      icon: Star,
      title: "Spiritual",
      description: "Meaning, purpose, and connection to something greater than ourselves—whether through nature, service, meditation, or sacred traditions.",
      color: "text-amber-500"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Why BPSS Matters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Bio-Psycho-Social-Spiritual model recognizes that human well-being emerges from the 
            dynamic interplay of body, mind, relationships, and meaning. This holistic framework 
            guides everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bpssAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <aspect.icon className={`h-8 w-8 ${aspect.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {aspect.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <Compass className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Integration in Practice</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't treat these aspects in isolation. Our programs integrate biological healing 
              through regenerative agriculture, psychological well-being through trauma-informed practices, 
              social connection through community building, and spiritual renewal through connection with 
              the more-than-human world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Founding Story Section
function FoundingStory() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-50/30 dark:to-emerald-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Our Founding Story</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <p className="mb-6">
                ZenTrust was born from a recognition that the crises facing our world—from climate change 
                to social inequality to mental health epidemics—are not separate problems. They are symptoms 
                of a deeper disconnection: from the land, from each other, and from ourselves.
              </p>
              
              <p className="mb-6">
                Our founders witnessed how industrial agriculture destroys both ecosystems and rural communities, 
                while urban areas struggle with disconnection, pollution, and loss of meaning. They saw people 
                seeking healing in individual therapy while the systems that caused their trauma remained unchanged.
              </p>

              <p className="mb-6">
                But they also witnessed something else: the power of regeneration. Farmers who rebuilt soil health 
                and found financial abundance. Communities that created food sovereignty and deep resilience. 
                Individuals who found purpose through service to something greater than themselves.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium italic">
                  "We realized that healing the world and healing ourselves are not separate endeavors. 
                  They are the same work, seen from different angles."
                </p>
              </div>

              <p>
                This insight became our founding principle: that we must regenerate both ecosystems and 
                communities simultaneously. That individual healing and collective transformation must go hand in hand. 
                That we need new institutions—grounded in science, informed by traditional wisdom, and dedicated 
                to the common good—to lead this transformation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// What We Do Section
function WhatWeDo() {
  const activities = [
    {
      icon: Microscope,
      title: "Scientific Research",
      description: "Conducting peer-reviewed research on regenerative agriculture, BPSS-integrated health approaches, climate resilience strategies, and Traditional Ecological Knowledge integration to build the evidence base for healing both ecosystems and communities.",
      color: "text-blue-500"
    },
    {
      icon: TreePine,
      title: "Regenerative Demonstration Sites",
      description: "Establishing and managing syntropic agroforestry systems, watershed restoration projects, and community-based regenerative agriculture pilots that serve as living laboratories for ecosystem healing and community resilience.",
      color: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "Public Education & Training",
      description: "Developing and delivering comprehensive curricula, hands-on workshops, open-access online learning platforms, and vocational training programs that empower individuals and communities with practical regenerative skills and knowledge.",
      color: "text-purple-500"
    },
    {
      icon: Globe,
      title: "International Grantmaking",
      description: "Providing strategic grants exclusively to nonprofits aligned with ZenTrust's exempt purposes, with rigorous oversight, comprehensive reporting requirements, and measurable impact assessments to ensure funds advance our shared mission.",
      color: "text-amber-500"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-50/30 dark:to-emerald-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">What We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our work spans four interconnected areas that together create the conditions for regeneration—
            advancing science, demonstrating practices, educating communities, and supporting aligned organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <activity.icon className={`h-8 w-8 ${activity.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// TEK Integration Section
function TEKIntegration() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <Compass className="h-8 w-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Traditional Ecological Knowledge Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We recognize and honor the Indigenous peoples who have been the original stewards of the lands 
                  where we work. Their Traditional Ecological Knowledge (TEK)—accumulated over thousands of years 
                  of careful observation and practice—provides invaluable guidance for regenerative approaches.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our work is informed by Indigenous wisdom about soil health, water cycles, biodiversity management, 
                  and community governance. We approach this knowledge with humility and respect, working in 
                  partnership where possible and always acknowledging the source of our learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By integrating TEK with contemporary science, we create more complete and culturally grounded 
                  approaches to regeneration—honoring both ancient wisdom and modern knowledge in service of 
                  healing both the land and our communities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Scientific Framework Section
function ScientificFramework() {
  const frameworkPillars = [
    {
      icon: Microscope,
      title: "Evidence-Based Healing",
      description: "Every program we develop is grounded in peer-reviewed research from regenerative agriculture, ecological restoration, public health, and social science.",
      color: "text-blue-500"
    },
    {
      icon: TreePine,
      title: "Ecology First",
      description: "We start with ecological principles—diversity, resilience, circular flows, and regenerative cycles—and build human systems that mirror these patterns.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Community-Centered",
      description: "Research shows that social connection is a fundamental determinant of health. We design programs that strengthen bonds and build collective capacity.",
      color: "text-purple-500"
    },
    {
      icon: Globe,
      title: "Systems Thinking",
      description: "We address root causes, not just symptoms. Our interventions consider feedback loops, unintended consequences, and long-term systemic change.",
      color: "text-amber-500"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Target className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Scientific Framework</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our work is guided by rigorous science, informed by traditional ecological knowledge, 
            and validated through community-based participatory research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {frameworkPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <pillar.icon className={`h-8 w-8 ${pillar.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Peer-reviewed studies informing our approach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Partner universities and research institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Longitudinal impact studies in progress</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Roadmap Section
function Roadmap() {
  const roadmapPhases = [
    {
      year: "2025",
      phase: "Phase 1",
      title: "Foundation & Research Activation",
      goals: [
        "Launch 3 pilot regenerative agriculture sites",
        "Complete baseline ecological and community health assessments",
        "Develop BPSS-integrated community health curriculum",
        "Establish partnerships with 10 farming families",
        "Begin soil health and biodiversity monitoring"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      year: "2026", 
      phase: "Phase 2",
      title: "Expansion & Field Implementation",
      goals: [
        "Scale to 15 farm partners across 3 bioregions",
        "Launch community health worker training program",
        "Implement 3 regenerative agriculture demonstration sites",
        "Publish preliminary impact research",
        "Develop open-source curriculum and toolkit"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "2027",
      phase: "Phase 3", 
      title: "Global Replication & Open Science Hubs",
      goals: [
        "Establish 5 regional replication sites",
        "Launch open-source digital platform for regenerative practices",
        "Launch open-access digital science library for regenerative agriculture and BPSS research",
        "Publish all impact studies and methodologies openly",
        "Strengthen TEK integration and global knowledge exchange",
        "Train 100+ community health workers",
        "Create sustainable funding model for long-term operations"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-50/30 dark:to-emerald-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">2025–2027 Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A three-phase journey from pilot projects to global replication, building the evidence 
            base for regeneration while creating tangible benefits for communities and ecosystems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} text-white`}>
                      <span className="text-lg font-bold">{phase.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {phase.year}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-4 text-muted-foreground">
                      {phase.title}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.goals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {index < roadmapPhases.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Adaptive Planning</h3>
            <p className="text-muted-foreground leading-relaxed">
              This roadmap is a living document. We remain responsive to emerging opportunities, 
              community needs, and scientific discoveries. Our commitment to continuous learning 
              and adaptation ensures we stay effective and relevant as we scale our impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Governance Section
function Governance() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Governance, Ethics & Transparency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We operate with the highest standards of accountability, transparency, and ethical conduct, 
            guided by our commitment to the public good and scientific integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Public Charity Status</h3>
            <p className="text-muted-foreground">
              Registered 501(c)(3) public charity under IRS section 170(b)(1)(A)(vi), 
              ensuring transparency and public benefit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">No Private Inurement</h3>
            <p className="text-muted-foreground">
              No board member, staff, or volunteer receives excessive compensation. 
              All financial benefits serve the mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <BookOpen className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Open Science</h3>
            <p className="text-muted-foreground">
              All research findings, methodologies, and curricula published openly 
              for replication and collective learning.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Financial Transparency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-muted-foreground">Revenue Sources</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Individual donations (60%)</li>
                  <li>• Foundation grants (25%)</li>
                  <li>• Earned income from training (10%)</li>
                  <li>• Corporate partnerships (5%)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-muted-foreground">Expense Allocation</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Program services (75%)</li>
                  <li>• Administrative costs (15%)</li>
                  <li>• Fundraising (10%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Board of Directors</h3>
            <p className="text-muted-foreground mb-4">
              Our board includes experts in regenerative agriculture, public health, community development, 
              and nonprofit governance. All board members serve without compensation and maintain 
              independence from management.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              Board meetings are held quarterly, with minutes available to donors upon request. 
              Annual financial statements are audited by independent CPAs and filed with the IRS.
            </div>
            <div className="text-sm text-muted-foreground border-t border-border pt-4">
              All directors sign annual conflict-of-interest disclosures and recuse themselves whenever a potential conflict arises, in accordance with ZenTrust's COI policy.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Why We Exist Section
function WhyWeExist() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Why We Exist</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <div className="text-6xl mb-6">🌱</div>
            <blockquote className="text-2xl font-medium text-foreground mb-6 italic">
              "We exist because the future is still being written, and we choose to write it with 
              soil beneath our feet and hope in our hearts."
            </blockquote>
            <p className="text-muted-foreground">
              ZenTrust exists to bridge the gap between the world we have and the world we're 
              building. We are here to demonstrate that healing the planet and healing people 
              are not competing priorities—they are the same work, expressed in different ways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">For the Land</h3>
              <p className="text-muted-foreground">
                We exist to prove that agriculture can regenerate ecosystems instead of degrading them, 
                that farms can be biodiversity hotspots, and that food production can be a healing practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">For the People</h3>
              <p className="text-muted-foreground">
                We exist to create pathways out of extractive systems and toward regenerative abundance—
                where communities have food sovereignty, economic resilience, and deep cultural vitality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">For the Future</h3>
              <p className="text-muted-foreground">
                We exist to ensure that seven generations from now, our descendants will thank us 
                for the world we handed to them—richer soil, cleaner water, stronger communities, 
                and a deeper sense of belonging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">For the Science</h3>
              <p className="text-muted-foreground">
                We exist to advance knowledge about what works, to share that knowledge freely, 
                and to build a global community of practice dedicated to evidence-based regeneration.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Join Us</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The work of regeneration is too important to leave to a few. It requires all of us—
                farmers and teachers, scientists and artists, young people and elders—to step into 
                the possibility of what we might become together.
              </p>
              <div className="text-foreground font-medium">
                Will you join us in writing the next chapter?
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Nonprofit Compliance Strip
function NonprofitCompliance() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              ZenTrust, Inc. is a federally recognized 501(c)(3) public charity under IRS Section 170(b)(1)(A)(vi). 
              EIN: 33-4318487. Determination Letter dated July 1, 2025. All contributions are tax-deductible as allowed by law. 
              All revenue is fully reinvested into our charitable, educational, and scientific mission.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Newsletter Section
function NewsletterSection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <NewsletterSignup />
      </div>
    </section>
  )
}

// Main About Page Component
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BPSSModel />
      <FoundingStory />
      <WhatWeDo />
      <TEKIntegration />
      <ScientificFramework />
      <Roadmap />
      <Governance />
      <WhyWeExist />
      <NonprofitCompliance />
      <NewsletterSection />
    </main>
  )
}