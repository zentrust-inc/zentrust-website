"use client"

import { motion } from "framer-motion"
import { TreePine, Users, Microscope, Globe } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Impact Begins <span className="gradient-text">Before Results</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every ecosystem starts with quiet, unseen work—
            roots forming, soil breathing, water finding new pathways.
            Impact is no different.
            <span className="italic block mt-3">
              Nature does not hurry, yet everything is accomplished.
            </span>
          </motion.p>

        </div>
      </section>

      {/* Current Phase */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            We Are Laying the Groundwork
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            True impact is not built in headlines or dashboards.  
            It is grown—slowly, deliberately—through listening,
            mapping, relationship-building, and preparing the soil
            for what will emerge in 2026 and beyond.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Ecology */}
            <motion.div
              className="glass-card rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <TreePine className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ecology</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Watersheds mapped.  
                Baseline soil assessed.  
                First restoration nodes identified.
              </p>
            </motion.div>

            {/* Community */}
            <motion.div
              className="glass-card rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Local partners engaged.  
                Youth pathways forming.  
                Listening sessions ongoing.
              </p>
            </motion.div>

            {/* Science */}
            <motion.div
              className="glass-card rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Microscope className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Science</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                BPSS research frameworks finalized.  
                Open-access protocols in development.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Real Impact */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Impact Is Not a Number  
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            It is a direction.  
            A shift in relationship.  
            A return to belonging.  

            The soil does not publish reports.  
            But it remembers what we do.
          </motion.p>

        </div>
      </section>

      {/* Launching in 2026 */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            The First Measurable Outcomes Arrive in 2026
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The seeds have been planted.  
            The partnerships formed.  
            The science prepared.  

            2026 will bring the first ecological,
            community, and research indicators—
            measured openly, shared freely.
          </motion.p>

        </div>
      </section>

      {/* Closing */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Quiet Work.  
            Deep Roots.  
            Lasting Impact.
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Impact is already happening—  
            not yet in numbers,  
            but in foundations, relationships,  
            and the slow, patient rhythms of the land.
          </motion.p>

        </div>
      </section>

    </div>
  )
}
