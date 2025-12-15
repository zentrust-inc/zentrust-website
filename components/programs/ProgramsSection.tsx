// components/programs/ProgramsSection.tsx

import { FeaturedProgram } from './ProgramCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredPrograms = [
  {
    title: 'Regenerative Agriculture Training',
    short_description:
      'Empowering farmers with sustainable farming techniques that restore soil health and increase biodiversity.',
    icon: 'education',
    category: 'Education',
    impact: {
      metric_name: 'Farmers Trained',
      metric_value: '1,200+',
      metric_unit: 'farmers',
    },
    slug: 'regenerative-agriculture-training',
  },
  {
    title: 'Watershed Restoration Initiative',
    short_description:
      'Restoring critical watershed areas through native tree planting and erosion control measures.',
    icon: 'conservation',
    category: 'Conservation',
    impact: {
      metric_name: 'Trees Planted',
      metric_value: '50,000+',
      metric_unit: 'trees',
    },
    slug: 'watershed-restoration',
  },
]

export function ProgramsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we're making a difference through innovative programs 
            focused on sustainable agriculture, environmental restoration, and 
            community education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {featuredPrograms.map((program, index) => (
            <FeaturedProgram key={index} {...program} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
