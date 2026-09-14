import { useState } from 'react'
import { Atom, Quote, Sparkles, Binary, Infinity as InfinityIcon, Radio } from 'lucide-react'
import { SCIENCE_CONNECTIONS } from '../data/scienceConnections'
import TiltCard3D from './TiltCard3D'

export default function ScienceBridgeSection() {
  const [selectedId, setSelectedId] = useState(SCIENCE_CONNECTIONS[0].id)
  const activeConnection = SCIENCE_CONNECTIONS.find((c) => c.id === selectedId) || SCIENCE_CONNECTIONS[0]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Physics':
        return <Atom className="w-4 h-4 text-gold-400" />
      case 'Cosmology':
        return <InfinityIcon className="w-4 h-4 text-saffron" />
      case 'Neuroscience':
        return <Radio className="w-4 h-4 text-[#c98bd0]" />
      case 'Mathematics & Sound':
        return <Binary className="w-4 h-4 text-[#6fb7c9]" />
      default:
        return <Sparkles className="w-4 h-4 text-gold-400" />
    }
  }

  return (
    <section id="science-bridge" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <Atom className="w-3.5 h-3.5 text-gold-400" />
          The Science & Vedanta Synthesis
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
          Where Science Ends, Sanātana Continues
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          From Schrödinger’s quantum non-duality to Carl Sagan’s awe at Vedic cosmic timescales, discover how the pioneers of modern science found their deepest philosophical breakthroughs in the Upanishads.
        </p>
      </div>

      {/* Interactive Tabs & 3D Deep Dive Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Topic Selector Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {SCIENCE_CONNECTIONS.map((item) => {
            const isSelected = item.id === selectedId
            return (
              <TiltCard3D key={item.id} intensity={8} glare={false}>
                <button
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-gold-950/80 via-gold-900/40 to-black/90 border-gold-400 text-gold-100 shadow-[0_0_25px_rgba(232,197,107,0.25)]'
                      : 'bg-black/50 border-gold-500/15 text-gold-300/70 hover:bg-gold-500/10 hover:text-gold-200 hover:border-gold-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="flex items-center gap-1.5 font-body text-xs uppercase tracking-wider font-semibold text-gold-400">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </span>
                    <span className="font-deva text-xs font-semibold text-gold-400/80">{item.sanskritTerm.split(' ')[0]}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="font-body text-xs text-gold-300/60 mt-1.5 line-clamp-1">{item.modernConcept}</p>
                </button>
              </TiltCard3D>
            )
          })}
        </div>

        {/* Right Side: 3D Deep Dive Card */}
        <div className="lg:col-span-8">
          <TiltCard3D intensity={10} className="w-full">
            <div className="rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#09061a] to-[#04030a] border border-gold-400/40 p-6 sm:p-8 md:p-10 shadow-2xl relative">
              {/* Top Category Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold-500/20 pb-5">
                <div>
                  <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold flex items-center gap-2">
                    {getCategoryIcon(activeConnection.category)}
                    {activeConnection.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-gold-100 font-bold mt-1">
                    {activeConnection.title}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 shadow-inner">
                  <span className="font-deva text-sm font-semibold text-gold-300">{activeConnection.sanskritTerm}</span>
                </div>
              </div>

              {/* Core Concept Breakdown */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/50 border border-gold-500/20 shadow-inner">
                  <span className="font-body text-[11px] uppercase tracking-wider text-gold-500 font-semibold block mb-1">
                    Vedic Metaphysics
                  </span>
                  <p className="font-body text-xs sm:text-sm text-gold-200/90 leading-relaxed font-medium">
                    {activeConnection.sanskritConcept}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-gold-500/20 shadow-inner">
                  <span className="font-body text-[11px] uppercase tracking-wider text-saffron font-semibold block mb-1">
                    Modern Scientific Parallel
                  </span>
                  <p className="font-body text-xs sm:text-sm text-gold-200/90 leading-relaxed font-medium">
                    {activeConnection.modernConcept}
                  </p>
                </div>
              </div>

              {/* Explanation */}
              <div className="mt-6">
                <p className="font-body text-sm sm:text-base text-gold-200/85 leading-relaxed">
                  {activeConnection.explanation}
                </p>
              </div>

              {/* Scientist Quote Box */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-gold-950/40 via-gold-900/10 to-black/70 border border-gold-500/30 relative">
                <Quote className="w-8 h-8 text-gold-500/20 absolute top-4 right-4" />
                <p className="font-display text-base sm:text-lg italic text-gold-100 leading-relaxed">
                  "{activeConnection.quote.text}"
                </p>
                <div className="mt-3 pt-3 border-t border-gold-500/15 flex items-center justify-between">
                  <span className="font-body text-xs font-semibold text-gold-300">
                    — {activeConnection.quote.author}
                  </span>
                  <span className="font-body text-[11px] text-gold-500/70">
                    {activeConnection.quote.role}
                  </span>
                </div>
              </div>

              {/* Scriptural Anchor */}
              <div className="mt-6 pt-4 border-t border-gold-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-body">
                <span className="text-gold-400 font-semibold">Scriptural Source:</span>
                <span className="text-gold-300/80 italic">{activeConnection.scripturalAnchor.source}</span>
              </div>
            </div>
          </TiltCard3D>
        </div>
      </div>
    </section>
  )
}
