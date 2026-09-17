import { useState } from 'react'
import { Landmark, MapPin, Clock, Layers, Star, ArrowRight, Globe, Award } from 'lucide-react'
import { TEMPLES, Temple } from '../data/temples'
import TiltCard3D from './TiltCard3D'

export default function TempleAtlasSection() {
  const [selectedTemple, setSelectedTemple] = useState<Temple>(TEMPLES[0])
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const styles = ['All', 'Dravidian', 'Nagara', 'Kalinga', 'Rock-cut', 'Vesara', 'Himalayan Nagara']
  const filtered = activeFilter === 'All'
    ? TEMPLES
    : TEMPLES.filter(t => t.style === activeFilter)

  return (
    <section id="kshetras" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Om watermark */}
      <span className="om-watermark right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.025] font-deva">ॐ</span>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <Landmark className="w-3.5 h-3.5 text-gold-400" />
          Kshetra & Tīrtha Atlas
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow section-title-accent">
          Kshetras & Tirthas of Bhārata
        </h2>
        <p className="mt-6 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          Indian temple architecture is sacred cosmology expressed in stone — each pillar, 
          shikhara, and mandapa encodes Vedic metaphysics, astronomical precision, and living ritual.
        </p>

        {/* Architecture Style Filter */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {styles.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => setActiveFilter(style)}
              className={`px-4 py-1.5 rounded-full text-xs font-body transition-all border ${
                activeFilter === style
                  ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-[0_0_15px_rgba(232,197,107,0.2)]'
                  : 'bg-black/40 border-gold-500/15 text-gold-400/70 hover:text-gold-200 hover:bg-gold-500/10'
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Temple Cards List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {filtered.map((temple) => {
            const isSelected = temple.id === selectedTemple.id
            return (
              <TiltCard3D key={temple.id} intensity={8} glare={false}>
                <button
                  type="button"
                  onClick={() => setSelectedTemple(temple)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-gold-950/80 via-gold-900/40 to-black/90 border-gold-400 shadow-[0_0_25px_rgba(232,197,107,0.2)]'
                      : 'bg-black/50 border-gold-500/15 hover:bg-gold-500/10 hover:border-gold-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: temple.color }}
                        />
                        <span className="font-body text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                          {temple.style}
                        </span>
                        {temple.UNESCO && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[9px] font-body font-bold uppercase tracking-wider">
                            <Globe className="w-2.5 h-2.5" />
                            UNESCO
                          </span>
                        )}
                      </div>
                      <h3 className={`font-display text-lg font-bold leading-snug ${isSelected ? 'text-gold-100' : 'text-gold-200'}`}>
                        {temple.name}
                      </h3>
                    </div>
                    <span className="font-deva text-base text-gold-400/70 shrink-0 mt-0.5">
                      {temple.sanskrit}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-body text-gold-400/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {temple.location}, {temple.state}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {temple.yearBuilt}
                    </span>
                  </div>
                </button>
              </TiltCard3D>
            )
          })}
        </div>

        {/* Right: Detailed Temple Deep Dive */}
        <div className="lg:col-span-7">
          <TiltCard3D intensity={10} className="w-full">
            <div className="rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#07051a] to-[#04030a] border border-gold-400/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Temple Watermark */}
              <span
                className="absolute right-4 top-4 font-deva text-[80px] leading-none opacity-[0.06] select-none pointer-events-none"
                style={{ color: selectedTemple.color }}
              >
                {selectedTemple.sanskrit}
              </span>

              {/* Header */}
              <div className="border-b border-gold-500/20 pb-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-body font-semibold uppercase tracking-wider"
                        style={{ backgroundColor: `${selectedTemple.color}20`, color: selectedTemple.color, border: `1px solid ${selectedTemple.color}50` }}
                      >
                        {selectedTemple.style}
                      </span>
                      {selectedTemple.UNESCO && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-body font-semibold">
                          <Award className="w-3 h-3" /> UNESCO World Heritage
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-gold-100 font-bold">
                      {selectedTemple.name}
                    </h3>
                    <p className="font-deva text-base text-gold-400/80 mt-0.5">
                      {selectedTemple.sanskrit}
                    </p>
                  </div>
                  <div className="text-right text-[11px] font-body text-gold-400/60 space-y-1">
                    <div className="flex items-center gap-1 justify-end">
                      <MapPin className="w-3 h-3" />
                      {selectedTemple.location}, {selectedTemple.state}
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" />
                      {selectedTemple.yearBuilt} · {selectedTemple.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Deity & Description */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-3.5 h-3.5 text-gold-400" />
                  <span className="font-body text-xs uppercase tracking-wider text-gold-400 font-semibold">
                    Principal Deity: {selectedTemple.deity}
                  </span>
                </div>
                <p className="font-body text-sm sm:text-base text-gold-200/85 leading-relaxed">
                  {selectedTemple.description}
                </p>
              </div>

              {/* Significance */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gold-950/40 via-gold-900/15 to-black/60 border border-gold-500/25">
                <span className="font-body text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-2">
                  Sacred Significance
                </span>
                <p className="font-body text-xs sm:text-sm text-gold-200/85 leading-relaxed">
                  {selectedTemple.significance}
                </p>
              </div>

              {/* Architectural Features */}
              <div className="mt-5">
                <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold block mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Notable Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTemple.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 rounded-xl bg-black/50 border border-gold-500/12 text-xs font-body text-gold-200/80"
                    >
                      <ArrowRight className="w-3 h-3 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard3D>
        </div>
      </div>
    </section>
  )
}
