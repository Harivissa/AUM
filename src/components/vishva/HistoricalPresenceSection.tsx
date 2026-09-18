import { useState } from 'react'
import {
  HISTORICAL_REGIONS_EVIDENCE,
  type HistoricalClassification,
  type HistoricalRegionData
} from '../../data/vishvaData'
import { Scroll, Landmark, BookOpen, ShieldCheck, Filter, ExternalLink, Calendar, MapPin } from 'lucide-react'

interface HistoricalPresenceSectionProps {
  onSelectRegion: (region: HistoricalRegionData) => void
}

const CLASSIFICATIONS: ('All' | HistoricalClassification)[] = [
  'All',
  'Hindu',
  'Hindu-Buddhist',
  'Multi-religious',
  'Hindu cultural influence',
  'Hindu migrant or merchant settlement',
  'Traditional or legendary connection'
]

export default function HistoricalPresenceSection({ onSelectRegion }: HistoricalPresenceSectionProps) {
  const [selectedClassification, setSelectedClassification] = useState<'All' | HistoricalClassification>('All')

  const filteredRegions = HISTORICAL_REGIONS_EVIDENCE.filter((r) => {
    if (selectedClassification === 'All') return true
    return r.classification === selectedClassification
  })

  return (
    <section id="historical-presence" className="py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
              <Scroll className="w-3.5 h-3.5 text-gold-400" />
              Civilizational Geographies & Epigraphy
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-100 text-glow">
              Historical Sanātana Presence & Kingdoms
            </h2>
            <p className="mt-3 max-w-3xl font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
              Documenting regions across Asia and the Indian Ocean that historically featured Hindu rulers, Hindu-Buddhist syncretic empires, monumental stone temples, and Sanskrit learning centers—classified with strict scholarly nuance.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/50 text-xs text-gold-300/80 max-w-sm shrink-0">
            <span className="font-semibold text-gold-200 block mb-1">Scholarly Distinction Rule:</span>
            AUM does not describe ancient kingdoms as exclusively Hindu where historical records prove multi-religious, Buddhist, or syncretic royal patronages (e.g. Khmer Devaraja, Majapahit Shiva-Buddha).
          </div>
        </div>

        {/* Classification Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
          <span className="text-xs font-display text-gold-400 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Classification:
          </span>
          {CLASSIFICATIONS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedClassification(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-display whitespace-nowrap transition border ${
                selectedClassification === c
                  ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-semibold shadow-md'
                  : 'border-gold-500/15 bg-black/40 text-gold-300/70 hover:border-gold-400/40 hover:text-gold-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredRegions.map((region) => (
            <div
              key={region.id}
              className="rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#0e1220]/90 via-[#070a14] to-black p-6 sm:p-7 shadow-xl hover:border-gold-400/50 hover:shadow-2xl transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gold-500/15">
                  <span className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-display font-semibold">
                    {region.classification}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gold-400/80 font-body">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{region.period}</span>
                  </div>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-gold-100 group-hover:text-glow">
                  {region.regionName}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-gold-300/70 font-body">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Modern: {region.modernCountries.join(', ')}</span>
                </div>

                <p className="mt-3.5 font-body text-xs sm:text-sm text-gold-200/75 leading-relaxed">
                  {region.description}
                </p>

                {/* Notable Inscriptions and Epigraphs */}
                <div className="mt-5 space-y-2">
                  <h4 className="text-xs font-display uppercase tracking-wider text-gold-300 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-gold-400" /> Key Inscriptions & Sacred Sites
                  </h4>
                  <ul className="space-y-1.5 text-xs font-body text-gold-300/80 pl-2">
                    {region.keySitesAndInscriptions.map((site, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold-400 mt-0.5">•</span>
                        <span>{site}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Source Verification */}
                <div className="mt-5 pt-4 border-t border-gold-500/15 bg-black/40 rounded-2xl p-3.5">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-gold-400 font-display">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-300" /> Verified Scholarly Reference
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-200">
                      {region.sources[0]?.confidence}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-body text-gold-200/85 font-medium">
                    {region.sources[0]?.title}
                  </p>
                  <p className="text-[11px] text-gold-300/60 font-body">
                    {region.sources[0]?.authorOrBody} ({region.sources[0]?.yearOrPeriod})
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between">
                <span className="text-xs font-body text-gold-400/80 italic">
                  {region.significance.slice(0, 75)}...
                </span>
                <button
                  type="button"
                  onClick={() => onSelectRegion(region)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-xs font-display font-semibold text-gold-200 hover:bg-gold-500/25 hover:text-white transition"
                >
                  Examine Epigraphy <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
