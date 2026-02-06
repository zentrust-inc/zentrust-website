"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, TrendingUp, TreePine, Leaf, Users, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { calculateResearchMetrics } from "@/lib/calculator"

interface ResearchMetrics {
  documentation_hours: number
  research_areas: number
  ecological_zones: number
  community_patterns: number
}

interface ResearchRowProps {
  label: string
  value: number
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  highlight?: boolean
}

function ResearchRow({ label, value, Icon, highlight = false }: ResearchRowProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <Icon className={`h-5 w-5 ${highlight ? "text-purple-600" : "text-primary"}`} />
        <span className="font-medium">{label}</span>
      </div>

      <span className="text-lg font-bold">{value.toLocaleString()}</span>
    </div>
  )
}

export function DonationCalculator() {
  const [level, setLevel] = useState(50)
  const [metrics, setMetrics] = useState<ResearchMetrics>(calculateResearchMetrics(50))
  const [selectedTier, setSelectedTier] = useState<number | null>(null)

  useEffect(() => {
    setMetrics(calculateResearchMetrics(level))
  }, [level])

  return (
    <section className="w-full py-20 overflow-hidden">

      {/* INTRO */}
      <motion.div
        className="max-w-[1500px] mx-auto px-6 text-center mb-12"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[20px] md:text-[22px] text-muted-foreground font-medium leading-snug md:leading-normal">
          This calculator shows research documentation metrics for different
          levels of research engagement and observation.
        </p>
      </motion.div>

      {/* CARD GRID */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-[1700px] mx-auto px-6">

        {/* LEFT CARD */}
        <motion.div
          className="p-8 rounded-2xl bg-card border border-border/30 shadow-sm"
          initial={{ opacity: 0, y: 35, filter: "brightness(0.7)" }}
          whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
            <BookOpen className="h-6 w-6 text-primary mr-3" />
            Research Engagement Level
          </h3>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { amount: 25, label: "Basic" },
              { amount: 50, label: "Standard" },
              { amount: 100, label: "Extended" },
              { amount: 250, label: "Comprehensive" }
            ].map((t) => (
              <button
                key={t.amount}
                onClick={() => { setLevel(t.amount); setSelectedTier(t.amount); }}
                className={`p-4 rounded-xl border border-border/20 transition-all ${
                  selectedTier === t.amount 
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                <div className="text-lg font-bold">${t.amount}</div>
                <div className="text-sm text-muted-foreground">{t.label}</div>
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Or select a custom engagement level</label>
            <input
              type="range"
              min={10}
              max={500}
              value={level}
              onChange={(e) => { setLevel(Number(e.target.value)); setSelectedTier(null); }}
              className="w-full h-2 bg-muted cursor-pointer rounded-full"
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$10</span>
              <span>$500+</span>
            </div>

            <p className="text-2xl font-bold text-primary mt-2">
              ${level}
              <span className="text-muted-foreground text-base ml-1">engagement level</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="p-8 rounded-2xl bg-card border border-border/30 shadow-sm"
          initial={{ opacity: 0, y: 35, filter: "brightness(0.7)" }}
          whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-primary mr-3" />
                Research Documentation Scope
              </h3>

              <div className="space-y-4">
                <ResearchRow label="Documentation Hours" value={metrics.documentation_hours} Icon={BookOpen} />
                <ResearchRow label="Research Areas Covered" value={metrics.research_areas} Icon={Microscope} />
                <ResearchRow label="Ecological Zones Documented" value={metrics.ecological_zones} Icon={TreePine} />
                <ResearchRow 
                  label="Community Patterns Studied" 
                  value={metrics.community_patterns} 
                  Icon={Users} 
                  highlight 
                />
              </div>

              <Button
                className="w-full mt-8"
                onClick={() => window.open("https://www.zentrust.world/research", "_blank")}
              >
                View Research Documentation
              </Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>

      {/* OUTRO */}
      <motion.div
        className="max-w-[1500px] mx-auto px-6 text-center mt-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75 }}
      >
        <p className="text-xl md:text-2xl font-semibold">
          Research documentation supports public education on regenerative systems.
          <br />
          <span className="text-primary font-bold text-[22px] md:text-[24px]">
            All findings are published for educational purposes.
          </span>
        </p>
      </motion.div>

    </section>
  )
}
