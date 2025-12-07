"use client"

import { ImpactCounters } from '@/components/impact/ImpactCounters'
import { Button } from '@/components/ui/button'
import { TrendingUp, Target, Shield, Heart, Leaf, Users, TreePine, BookOpen, Microscope, Award, Zap, Globe } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const firstYearTargets = [
  {
    icon: TreePine,
    title: '50,000',
    subtitle: 'Native Trees',
    description: 'Planned plantings across watershed restoration sites',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    icon: Users,
    title: '1,200',
    subtitle: 'Farmers Trained',
    description: 'Projected capacity based on curriculum rollout',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    icon: Globe,
    title: '2,500',
    subtitle: 'Acres Assessed',
    description: 'Long-term restoration planning and baseline studies',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/20'
  },
  {
    icon: Microscope,
    title: '15',
    subtitle: 'Scientific Studies',
    description: 'Papers, pilots, and field research in development',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    icon: BookOpen,
    title: '8,500',
    subtitle: 'Learning Hours',
    description: 'Targeted education and training output',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20'
  },
  {
    icon: Zap,
    title: '3',
    subtitle: 'Pilot Regions',
    description: 'Demonstration sites launching in 2025',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20'
  }
]

const focusAreas = [
  {
    icon: TreePine,
    title: 'Ecological Restoration',
    description: 'We will establish syntropic agroforestry systems, watershed restoration projects, and soil regeneration initiatives that demonstrate how agriculture can heal ecosystems while producing food.',
    futureIndicators: [
      'Native tree survival rates across planting sites',
      'Soil organic matter increases over time',
      'Water retention and infiltration improvements',
      'Biodiversity indices in restored areas'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    icon: Users,
    title: 'Community Capacity Building',
    description: 'We will develop local leadership, create food sovereignty initiatives, and build networks of trained practitioners who can adapt regenerative practices to their specific contexts and needs.',
    futureIndicators: [
      'Number of community health workers trained',
      'Local food production increases',
      'Community resilience assessments',
      'Peer-to-peer knowledge transfer networks'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    icon: BookOpen,
    title: 'Education & Training',
    description: 'We will create open-access curricula, hands-on workshops, and vocational training programs that empower individuals with practical regenerative skills and BPSS-integrated health approaches.',
    futureIndicators: [
      'Training completion rates and skill assessments',
      'Curriculum adoption by partner organizations',
      'Long-term participant outcomes tracking',
      'Open-source educational resource downloads'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    icon: TrendingUp,
    title: 'Research & Innovation',
    description: 'We will conduct rigorous scientific studies, validate regenerative practices through community-based participatory research, and publish findings openly for global replication and collective learning.',
    futureIndicators: [
      'Peer-reviewed publications and citations',
      'Methodology replication by other organizations',
      'Cost-effectiveness analyses of interventions',
      'Long-term ecological and social outcomes'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20'
  }
]

const upcomingPilots = [
  {
    icon: Globe,
    title: 'Watershed Regeneration Pilots',
    description: 'Three demonstration sites will establish watershed restoration protocols, native species reintroduction, and community-based water management systems.',
    status: 'Launching Q2 2025',
    region: 'Multi-region deployment'
  },
  {
    icon: TreePine,
    title: 'Syntropic Agroforestry Nodes',
    description: 'Living laboratories demonstrating integrated tree-crop-livestock systems that increase productivity while enhancing ecosystem services.',
    status: 'Planning Phase',
    region: 'Partner farm network'
  },
  {
    icon: Users,
    title: 'Community Education Hubs',
    description: 'Regional training centers providing hands-on learning in regenerative practices, BPSS health approaches, and community organizing.',
    status: 'Curriculum Development',
    region: '3 target communities'
  },
  {
    icon: Microscope,
    title: 'Research Collaborations',
    description: 'Partnerships with universities and research institutions to validate approaches, measure outcomes, and advance scientific understanding.',
    status: 'Partnership Development',
    region: 'Academic network'
  },
  {
    icon: Heart,
    title: 'Youth Ecological Leadership',
    description: 'Programs training young people in regenerative practices, environmental stewardship, and community leadership skills.',
    status: 'Program Design',
    region: 'High school partnerships'
  },
  {
    icon: Award,
    title: 'Traditional Knowledge Integration',
    description: 'Collaboration with Indigenous communities to integrate Traditional Ecological Knowledge with contemporary regenerative practices.',
    status: 'Relationship Building',
    region: 'Indigenous partnerships'
  }
]

const accountabilityFramework = [
  {
    icon: Shield,
    title: 'Open Impact Dashboards',
    description: 'Real-time tracking of all project metrics, financial expenditures, and outcome measurements published transparently online.',
    timeframe: 'Launch Q3 2025'
  },
  {
    icon: Users,
    title: 'Third-Party Evaluation',
    description: 'Independent researchers and advisory boards will review our methodologies, data collection, and impact assessments.',
    timeframe: 'Ongoing from 2025'
  },
  {
    icon: TrendingUp,
    title: 'Donor Progress Tracking',
    description: 'Detailed reports showing how donor contributions translate into specific outcomes, with regular updates on milestone achievements.',
    timeframe: 'Quarterly reporting'
  },
  {
    icon: Globe,
    title: 'Radical Transparency',
    description: 'Complete openness about successes, challenges, and lessons learned. We will share both our victories and our mistakes.',
    timeframe: 'Continuous commitment'
  }
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our Impact <span className="gradient-text">Begins Now</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Building the foundation for global regeneration through transparent, measurable action. 
                Together, we will demonstrate that healing the land and healing communities are one unified mission.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/donate">
                  <Heart className="mr-2 h-4 w-4" />
                  Help Build the Impact
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#framework">
                  View Measurement Framework
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* First Year Targets */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">First-Year Targets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              <strong>Not Yet Completed</strong> — These are our 2025–2026 goals, clearly labeled as targets for transparency.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in radical transparency. These numbers represent our planned capacity and projected outputs based on careful planning and realistic resource allocation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstYearTargets.map((target, index) => {
              const Icon = target.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${target.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`h-8 w-8 ${target.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${target.color} mb-2`}>
                    {target.title}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-3">
                    {target.subtitle}
                  </div>
                  <p className="text-muted-foreground">
                    {target.description}
                  </p>
                  <div className="mt-4 text-sm text-amber-600 font-medium">
                    TARGET FOR 2025–2026
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Focus Areas Deep Dive */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Focus Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four interconnected areas where we will build measurable impact through evidence-based approaches and community-centered design.
            </p>
          </motion.div>

          <div className="space-y-12">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex items-start space-x-6 mb-6 lg:mb-0 lg:flex-shrink-0">
                      <div className={`w-16 h-16 ${area.bgColor} rounded-2xl flex items-center justify-center`}>
                        <Icon className={`h-8 w-8 ${area.color}`} />
                      </div>
                      <div className="lg:hidden">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {area.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4 hidden lg:block">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {area.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Future Impact Indicators We Will Track:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {area.futureIndicators.map((indicator, indicatorIndex) => (
                            <div key={indicatorIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{indicator}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pilot Projects Launching 2025 */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Pilot Projects</span> Launching 2025
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Real-world projects currently in development. <strong>Full project stories will be published once results are verified and documented.</strong>
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in showing our work transparently—from initial planning through final outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingPilots.map((pilot, index) => {
              const Icon = pilot.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {pilot.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {pilot.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-amber-600 font-medium">{pilot.status}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Region:</span>
                      <span className="text-foreground">{pilot.region}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Measurement Framework */}
      <section id="framework" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We <span className="gradient-text">Measure Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A rigorous, data-driven approach to measuring both ecological restoration and human well-being outcomes.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Ecological Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <TreePine className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ecological Indicators
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Soil health and organic matter content</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Biodiversity indices and species counts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Water retention and infiltration rates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Forest canopy cover and regeneration</span>
                  </li>
                </ul>
              </motion.div>

              {/* Human Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <Users className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Human Outcomes
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>BPSS-aligned well-being metrics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Training completion and skill assessments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Community participation and engagement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Food sovereignty and economic indicators</span>
                  </li>
                </ul>
              </motion.div>

              {/* Scientific Outputs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <Microscope className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Scientific Outputs
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Peer-reviewed publications and citations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Open-source methodology publications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Conference presentations and sharing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Replication by other organizations</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Reporting Cycle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Reporting Cycle</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                We will publish quarterly progress reports and annual comprehensive impact assessments. 
                All data will be available for independent verification and analysis.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Quarterly</div>
                  <div className="text-sm text-muted-foreground">Progress Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Annual</div>
                  <div className="text-sm text-muted-foreground">Comprehensive Assessment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
                  <div className="text-sm text-muted-foreground">Public Dashboard</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accountability & Transparency */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Accountability</span> & Transparency
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We commit to radical transparency in all aspects of our work. Your trust is earned through openness, 
              accountability, and measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {accountabilityFramework.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="text-sm text-amber-600 font-medium">
                        {item.timeframe}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Become Part of ZenTrust's <span className="gradient-text">Foundational Year</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your support activates the first wave of research, restoration, and education. 
              Together, we will build the evidence base for regeneration and demonstrate that healing 
              the planet and healing people are one unified mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/donate">
                  <Heart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Help Build the Impact
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Every dollar donated goes directly to our charitable, educational, and scientific mission. 
                As a 501(c)(3) public charity, all contributions are tax-deductible as allowed by law.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
