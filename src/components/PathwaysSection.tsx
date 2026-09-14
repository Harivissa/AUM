import { useState } from 'react'
import { BookOpen, Landmark, Scroll, Compass, Flame, Sparkles, ShieldCheck, ArrowRight, Layers } from 'lucide-react'
import { Pathway, PATHWAYS } from '../data/pathways'
import TiltCard3D from './TiltCard3D'

interface PathwaysSectionProps {
  onSelectPathway: (p: Pathway) => void
}

export default function PathwaysSection({ onSelectPathway }: PathwaysSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'texts' | 'philosophy' | 'living'>('all')

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />
      case 'Landmark':
        return <Landmark className="w-5 h-5" />
      case 'Scroll':
        return <Scroll className="w-5 h-5" />
      case 'Compass':
        return <Compass className="w-5 h-5" />
      case 'Flame':
        return <Flame className="w-5 h-5" />
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />
      default:
        return <Sparkles className="w-5 h-5" />
    }
  }

  const filteredPathways = PATHWAYS.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'texts') return ['scriptures', 'epics', 'verify'].includes(p.id)
    if (activeFilter === 'philosophy') return ['concepts', 'scriptures'].includes(p.id)
    if (activeFilter === 'living') return ['temples', 'practices', 'kids'].includes(p.id)
    return true
  })

  return (
    <section id="pathways" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <Layers className="w-3.5 h-3.5 text-gold-400" />
          The 7 Portals of Knowledge
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
          Explore the Sacred Pathways
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          Each portal is an interconnected node of the cosmic mandala, bridging primordial revelation,
          monumental stone architecture, profound metaphysics, and daily sadhana.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All 7 Portals' },
            { id: 'texts', label: 'Sacred Texts & Truth' },
            { id: 'philosophy', label: 'Darshana & Metaphysics' },
            { id: 'living', label: 'Living Sadhana & Heritage' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-4 py-1.5 rounded-full text-xs font-body transition-all border ${
                activeFilter === tab.id
                  ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-[0_0_15px_rgba(232,197,107,0.25)]'
                  : 'bg-black/40 border-gold-500/15 text-gold-400/70 hover:text-gold-200 hover:bg-gold-500/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pathways 3D Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPathways.map((pathway) => (
          <TiltCard3D
            key={pathway.id}
            intensity={12}
            onClick={() => onSelectPathway(pathway)}
            className="cursor-pointer h-full"
          >
            <div
              className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#0f0927]/90 via-[#070514]/95 to-[#04030a] border border-gold-500/25 hover:border-gold-400/70 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between h-full"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.7)`,
              }}
            >
              {/* Top Accent Glow Line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-t-full transition-all duration-300 opacity-40 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pathway.color}, transparent)`,
                }}
              />

              <div>
                {/* Header Icon + Devanagari */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-2xl border transition-all duration-300 group-hover:scale-110 shadow-md"
                    style={{
                      backgroundColor: `${pathway.color}15`,
                      borderColor: `${pathway.color}50`,
                      color: pathway.color,
                    }}
                  >
                    {getIcon(pathway.iconName)}
                  </div>
                  <span className="font-deva text-xl font-semibold text-gold-400 group-hover:text-gold-200 transition-colors">
                    {pathway.sanskrit}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl font-bold text-gold-100 group-hover:text-gold-200 transition-colors">
                  {pathway.label}
                </h3>
                <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/75 leading-relaxed line-clamp-2">
                  {pathway.description}
                </p>

                {/* Highlights Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pathway.highlights.slice(0, 2).map((item, idx) => (
                    <span
                      key={idx}
                      className="font-body text-[11px] px-2.5 py-1 rounded-lg bg-black/50 border border-gold-500/15 text-gold-300/80"
                    >
                      ✦ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between">
                <span className="font-body text-xs font-semibold text-gold-400 group-hover:text-gold-200 transition-colors flex items-center gap-1.5">
                  Open Sacred Portal
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full transition-all group-hover:scale-125"
                  style={{ backgroundColor: pathway.color }}
                />
              </div>
            </div>
          </TiltCard3D>
        ))}
      </div>
    </section>
  )
}
