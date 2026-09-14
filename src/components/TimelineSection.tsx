import { useState } from 'react'
import { History, Calendar, CheckCircle2, Award, Sparkles } from 'lucide-react'
import { TIMELINE_DATA } from '../data/timelineData'
import TiltCard3D from './TiltCard3D'

export default function TimelineSection() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(0)
  const activeEpoch = TIMELINE_DATA[selectedEraIndex]

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <History className="w-3.5 h-3.5 text-gold-400" />
          The Eternal Continuum
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
          Sacred Chronology of Sanātana Dharma
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          Trace the unbroken lineage of knowledge across five millennia—from primordial oral chanting
          and forest Upanishadic academies to monumental stone temples and modern global synthesis.
        </p>
      </div>

      {/* Timeline Steps Bar */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {TIMELINE_DATA.map((epoch, idx) => {
          const isSelected = idx === selectedEraIndex
          return (
            <TiltCard3D key={idx} intensity={8} glare={false} className="flex-1 min-w-[150px]">
              <button
                type="button"
                onClick={() => setSelectedEraIndex(idx)}
                className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-b from-gold-950/80 to-black/90 border-gold-400 text-gold-100 shadow-[0_0_20px_rgba(232,197,107,0.25)]'
                    : 'bg-black/50 border-gold-500/15 text-gold-400/60 hover:text-gold-200 hover:border-gold-500/30'
                }`}
              >
                <span className="font-body text-[10px] uppercase tracking-wider text-gold-500/80 font-bold block mb-1">
                  Epoch 0{idx + 1}
                </span>
                <h4 className="font-display text-sm font-bold text-gold-200 leading-snug line-clamp-1">
                  {epoch.era}
                </h4>
                <span className="font-body text-[10px] text-gold-400/60 block mt-0.5">{epoch.period}</span>
              </button>
            </TiltCard3D>
          )
        })}
      </div>

      {/* Selected Epoch Detailed 3D Showcase */}
      <TiltCard3D intensity={10} className="w-full">
        <div className="rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#070514] to-[#04030a] border border-gold-400/40 p-6 sm:p-10 shadow-2xl relative">
          {/* Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold-500/20 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold">
                  {activeEpoch.era}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-body bg-gold-500/15 text-gold-300 border border-gold-500/30">
                  {activeEpoch.badge}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl text-gold-100 font-bold mt-1.5">
                {activeEpoch.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/60 border border-gold-500/20 text-gold-300 text-xs font-body shrink-0 shadow-inner">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>{activeEpoch.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 font-body text-sm sm:text-base text-gold-200/90 leading-relaxed font-light">
            {activeEpoch.description}
          </p>

          {/* Canonical Texts & Monuments */}
          <div className="mt-6">
            <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold block mb-3">
              Landmark Texts & Architectural Marvels
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeEpoch.monumentsAndTexts.map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-black/50 border border-gold-500/15 text-gold-200 flex items-center gap-2 shadow-inner"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="font-body text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone Impact */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gold-950/40 via-gold-900/20 to-black/60 border border-gold-500/25 flex items-start gap-3">
            <Award className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-body text-xs font-bold text-gold-300 uppercase tracking-wider block">
                Historical & Universal Significance
              </span>
              <p className="font-body text-xs sm:text-sm text-gold-200/80 mt-0.5 leading-relaxed">
                {activeEpoch.significance}
              </p>
            </div>
          </div>
        </div>
      </TiltCard3D>
    </section>
  )
}
