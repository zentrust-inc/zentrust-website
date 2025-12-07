'use client'

import { ProgramCard, FeaturedProgram } from '@/components/programs/ProgramCard'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, TreePine, Microscope, Filter, Target, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const programs = [
  {
    title: 'Regenerative Agriculture Training Program',
    short_description: 'Comprehensive training in sustainable farming practices launching in 2025',
    description: 'Our flagship training program is being designed to teach farmers regenerative agriculture principles including cover cropping, crop rotation, composting, and integrated pest management. Through hands-on workshops and ongoing mentorship, we aim to help farmers transition to practices that improve soil health, increase biodiversity, and enhance farm resilience.',
    icon: 'education',
    category: 'Education',
    impact: {
      metric_name: 'Target Farmers Trained',
      metric_value: '1,200',
      metric_unit: 'over 2 years'
    },
    development_status: 'Curriculum development underway',
    slug: 'regenerative-agriculture-training'
  },
  {
    title: 'Watershed Restoration Initiative',
    short_description: 'Strategic watershed restoration through native species and erosion control',
    description: 'This program will focus on restoring degraded watershed areas through strategic tree planting, erosion control, and natural water management. We plan to work with local communities to plant native species, establish buffer zones, and implement sustainable water management practices that protect vital water resources.',
    icon: 'conservation',
    category: 'Conservation',
    impact: {
      metric_name: 'Tree Planting Goal',
      metric_value: '50,000',
      metric_unit: 'trees planned'
    },
    development_status: 'Site assessment in progress',
    slug: 'watershed-restoration'
  },
  {
    title: 'Community Education & Outreach',
    short_description: 'Building environmental awareness through community-based learning',
    description: 'Our community education programs are being designed to reach individuals through workshops, school programs, and community events. We focus on environmental awareness, sustainable living practices, and empowering community members to become environmental stewards in their own communities.',
    icon: 'community',
    category: 'Community',
    impact: {
      metric_name: 'Education Hours Target',
      metric_value: '8,500',
      metric_unit: 'learning hours'
    },
    development_status: 'Curriculum design phase',
    slug: 'community-education'
  },
  {
    title: 'Youth Leadership Development',
    short_description: 'Developing next-generation environmental leaders through hands-on learning',
    description: 'This program will engage young people (ages 14-25) in environmental leadership development through internships, mentorship, and hands-on projects. Participants will learn about sustainable agriculture, environmental science, and community organizing while working on projects that create real change in their communities.',
    icon: 'education',
    category: 'Education',
    impact: {
      metric_name: 'Youth Participants Goal',
      metric_value: '200',
      metric_unit: 'participants'
    },
    development_status: 'Partnership development ongoing',
    slug: 'youth-leadership'
  },
  {
    title: 'Scientific Research & Innovation',
    short_description: 'Advancing regenerative agriculture through peer-reviewed research',
    description: 'Our research program will partner with universities and research institutions to study and develop innovative regenerative agriculture practices. We focus on soil health, carbon sequestration, biodiversity conservation, and climate-resilient farming systems, with all findings published openly.',
    icon: 'research',
    category: 'Research',
    impact: {
      metric_name: 'Research Studies Planned',
      metric_value: '15',
      metric_unit: 'studies'
    },
    development_status: 'Research partnerships forming',
    slug: 'research-innovation'
  },
  {
    title: 'Urban Regeneration Initiative',
    short_description: 'Transforming urban spaces through community-based food systems',
    description: 'This program will transform urban areas into productive community gardens and regenerative spaces. We will teach urban residents how to grow food using sustainable practices, creating food security, green spaces, and community connections in urban environments.',
    icon: 'community',
    category: 'Community',
    impact: {
      metric_name: 'Pilot Sites Goal',
      metric_value: '12',
      metric_unit: 'pilot locations'
    },
    development_status: 'Site identification process',
    slug: 'urban-regeneration'
  }
]

const categories = [
  { name: 'All Programs', value: 'all', icon: Filter },
  { name: 'Education', value: 'Education', icon: BookOpen },
  { name: 'Research', value: 'Research', icon: Microscope },
  { name: 'Community', value: 'Community', icon: Users },
  { name: 'Conservation', value: 'Conservation', icon: TreePine },
]

const programDevelopmentStatus = [
  {
    icon: Target,
    title: 'Curriculum Development',
    description: 'Educational content and training materials are being designed for each program'
  },
  {
    icon: Zap,
    title: 'Partnership Formation',
    description: 'Building relationships with universities, communities, and implementation partners'
  },
  {
    icon: Shield,
    title: 'Site Assessment',
    description: 'Identifying and evaluating potential pilot locations and implementation sites'
  },
  {
    icon: BookOpen,
    title: 'Research Framework',
    description: 'Developing measurement and evaluation systems for program outcomes'
  }
]

const transparencyCommitments = [
  {
    title: 'Open Science',
    description: 'All research findings will be published openly and made freely available'
  },
  {
    title: 'Third-Party Evaluation',
    description: 'Independent evaluators will assess program effectiveness and outcomes'
  },
  {
    title: 'Transparent Reporting',
    description: 'Regular public reports on program progress, challenges, and learnings'
  },
  {
    title: 'Community Partnership',
    description: 'Local stakeholders involved in all program design and implementation decisions'
  }
]

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory)

  const featuredProgram = programs[0]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Programs Launching in <span className="gradient-text">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ZenTrust is launching its first suite of programs focused on ecological regeneration, 
              scientific research, and public education. These programs are in development and 
              ready to activate with community and donor support.
            </p>
            
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                "2025 marks our transition from planning to implementation— 
                from vision to measurable impact."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — ZenTrust Founding Team
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/donate">
                  Help Build These Programs
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#development-status">
                  See Development Progress
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Programs Begin Now */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Our Programs Begin <span className="gradient-text">Now</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              After careful planning and 501(c)(3) foundation completion, 2025 represents 
              the pivotal moment when ZenTrust moves from development to implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Foundation Complete</h3>
              <p className="text-muted-foreground mb-4">
                Our 501(c)(3) status became effective July 1, 2025, providing the legal 
                and financial framework needed to receive tax-deductible contributions 
                and begin meaningful program implementation.
              </p>
              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-sm text-foreground">
                  <strong>IRS Status:</strong> 501(c)(3) Public Charity (EIN: 33-4318487)
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Strategic Timing</h3>
              <p className="text-muted-foreground mb-4">
                The convergence of climate urgency, agricultural innovation, and community 
                readiness creates an unprecedented opportunity to launch programs that 
                can achieve both scientific rigor and meaningful impact.
              </p>
              <div className="bg-emerald-100 dark:bg-emerald-900/20 rounded-lg p-3">
                <p className="text-sm text-emerald-800 dark:text-emerald-200">
                  <strong>Market Readiness:</strong> Farmers, communities, and institutions 
                  are prepared to adopt regenerative practices at scale.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Early donors don't just fund programs—they accelerate the timeline from 
              concept to real-world implementation, enabling ZenTrust to begin generating 
              measurable impact within the first operational year.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Flagship <span className="gradient-text">Program</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Regenerative Agriculture Training Program represents the foundation 
              of ZenTrust's approach to ecological restoration and farmer empowerment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FeaturedProgram {...featuredProgram} />
          </div>
        </div>
      </section>

      {/* Program Development Status */}
      <section id="development-status" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Program Development <span className="gradient-text">Status</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's where each program stands in the development pipeline, 
              providing complete transparency about our current operational readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programDevelopmentStatus.map((status, index) => {
              const Icon = status.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {status.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {status.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Filter */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              All <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-muted-foreground">
              Browse our program portfolio by category
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
              
              {/* Development Status Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  Program Development Status
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPrograms.map((program, index) => (
                    <div key={index} className="glass-card rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        {program.title}
                      </h4>
                      <div className="bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2">
                        <p className="text-xs text-amber-800 dark:text-amber-200">
                          <strong>Status:</strong> {program.development_status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                No programs found
              </h3>
              <p className="text-muted-foreground mb-8">
                Try selecting a different category to see more programs.
              </p>
              <Button 
                onClick={() => setSelectedCategory('all')}
                variant="outline"
              >
                View All Programs
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Transparency in Program Development */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transparency in <span className="gradient-text">Program Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in complete transparency about our programs' development status, 
              challenges, and expected outcomes. Here's our commitment to accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {transparencyCommitments.map((commitment, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {commitment.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Program Success Metrics: What We'll Measure
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Once implementation begins, we will track these key indicators to ensure 
                programs achieve their intended outcomes:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Ecological Impact</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Soil health improvements</li>
                    <li>• Biodiversity measurements</li>
                    <li>• Carbon sequestration rates</li>
                    <li>• Water quality metrics</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Human Development</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Training completion rates</li>
                    <li>• Knowledge retention scores</li>
                    <li>• Practice adoption tracking</li>
                    <li>• Community engagement levels</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Research Quality</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Peer review publications</li>
                    <li>• Data quality standards</li>
                    <li>• Reproducibility metrics</li>
                    <li>• Open access availability</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                  <strong>Measurement Timeline:</strong> Baseline assessments will begin Q2 2025, 
                  with quarterly progress reports and annual comprehensive evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Build These Programs */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Help Build These Programs <span className="gradient-text">From the Ground Up</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not asking you to support established programs—we're inviting you 
              to help create them. Your support accelerates development, enables partnerships, 
              and makes implementation possible.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6 text-left">
                <h3 className="font-semibold text-foreground mb-2">For Future Farmers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  When our training programs launch, be first to access regenerative agriculture education
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">Get Notified</Link>
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-left">
                <h3 className="font-semibold text-foreground mb-2">For Future Participants</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our community education and youth leadership programs when they begin
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">Join the List</Link>
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-left">
                <h3 className="font-semibold text-foreground mb-2">For Communities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partner with us to bring programs to your community when implementation begins
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">Express Interest</Link>
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-left">
                <h3 className="font-semibold text-foreground mb-2">For Researchers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Collaborate with us on research initiatives and open science projects
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/donate">
                  <TreePine className="mr-2 h-4 w-4" />
                  Support Program Development
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Questions? Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}