import { useState, useMemo } from 'react'
import {
  HISTORICAL_REGIONS_EVIDENCE,
  type HistoricalClassification,
  type HistoricalRegionData
} from '../../data/vishvaData'
import {
  Scroll,
  Landmark,
  BookOpen,
  ShieldCheck,
  Filter,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Crown,
  Sparkles
} from 'lucide-react'

interface HistoricalPresenceSectionProps {
  onSelectRegion: (region: HistoricalRegionData) => void
  selectedGlobalRegion?: string
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

export default function HistoricalPresenceSection({
  onSelectRegion,
  selectedGlobalRegion = 'All Regions'
}: HistoricalPresenceSectionProps) {
  const [selectedClassification, setSelectedClassification] = useState<'All' | HistoricalClassification>('All')
  const [expandedKingdomId, setExpandedKingdomId] = useState<string | null>(null)
  const [activeDossierModal, setActiveDossierModal] = useState<HistoricalRegionData | null>(null)

  // Filter kingdoms based on global region and classification
  const filteredRegions = useMemo(() => {
    return HISTORICAL_REGIONS_EVIDENCE.filter((r) => {
      // Classification filter
      if (selectedClassification !== 'All' && r.classification !== selectedClassification) {
        return false
      }

      // Global Region filter
      if (selectedGlobalRegion && selectedGlobalRegion !== 'All Regions' && selectedGlobalRegion !== 'All') {
        const isEastAsia =
          selectedGlobalRegion === 'East Asia' &&
          (r.id.includes('korea') || r.regionName.includes('Korea') || r.modernCountries.some((m) => m.includes('Korea') || m.includes('Japan') || m.includes('China')))

        const isSEAsia =
          selectedGlobalRegion === 'Southeast Asia' &&
          (r.id.includes('angkor') ||
            r.id.includes('champa') ||
            r.id.includes('majapahit') ||
            r.modernCountries.some((m) => m.includes('Cambodia') || m.includes('Vietnam') || m.includes('Indonesia') || m.includes('Malaysia') || m.includes('Thailand') || m.includes('Laos')))

        const isCentralOrSouth =
          (selectedGlobalRegion === 'Central Asia' || selectedGlobalRegion === 'South Asia') &&
          (r.id.includes('kabul') || r.id.includes('central-asia') || r.modernCountries.some((m) => m.includes('Afghanistan') || m.includes('Pakistan') || m.includes('Uzbekistan') || m.includes('Tajikistan')))

        return isEastAsia || isSEAsia || isCentralOrSouth
      }

      return true
    })
  }, [selectedClassification, selectedGlobalRegion])

  const toggleExpand = (id: string) => {
    setExpandedKingdomId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="historical-presence" className="py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
              <Scroll className="w-3.5 h-3.5 text-gold-400" />
              Civilizational Geographies & Epigraphy
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
              Historical Sanātana Presence & Kingdoms
            </h2>
            <p className="mt-2 max-w-3xl font-body text-sm text-stone-300 leading-relaxed">
              Explore ancient Hindu and syncretic realms across Asia, documented through verified stone inscriptions, royal temple charters, and archaeological surveys.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl border border-gold-500/20 bg-black/60 text-xs text-stone-300 max-w-sm shrink-0">
            <span className="font-semibold text-gold-300 block mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> Scholarly Nuance
            </span>
            AUM distinguishes purely Hindu realms from syncretic royal patronages (e.g. Khmer Devaraja, Majapahit Shiva-Buddha) based on primary epigraphy.
          </div>
        </div>

        {/* Classification Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar border-b border-gold-500/15 mb-6">
          <span className="text-xs font-display text-gold-400 shrink-0 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Classification:
          </span>
          {CLASSIFICATIONS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedClassification(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-display whitespace-nowrap transition border ${
                selectedClassification === c
                  ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-semibold shadow-md'
                  : 'border-gold-500/15 bg-black/40 text-stone-400 hover:border-gold-400/40 hover:text-gold-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Compact Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRegions.map((region) => {
            const isExpanded = expandedKingdomId === region.id
            const oneLineSummary = region.description.split('.')[0] + '.'

            return (
              <div
                key={region.id}
                className={`rounded-2xl border transition-all duration-300 bg-gradient-to-b from-[#0e1222]/90 to-black p-5 flex flex-col justify-between shadow-lg ${
                  isExpanded ? 'border-gold-400 ring-1 ring-gold-400/30' : 'border-gold-500/20 hover:border-gold-500/40'
                }`}
              >
                {/* COMPACT CARD: Only 6 elements */}
                <div>
                  {/* 1. Classification Badge & 2. Date Range */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-[10px] font-display font-semibold">
                      {region.classification}
                    </span>
                    <span className="text-stone-400 font-body text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-400" />
                      {region.period}
                    </span>
                  </div>

                  {/* 3. Kingdom Name */}
                  <h3 className="mt-3 font-display text-xl font-bold text-gold-100 group-hover:text-glow">
                    {region.regionName}
                  </h3>

                  {/* 4. Region */}
                  <div className="mt-1 flex items-center gap-1 text-xs text-stone-400 font-body">
                    <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                    <span>{region.modernCountries ? region.modernCountries.join(', ') : 'Pan-Asian Maritime Sphere'}</span>
                  </div>

                  {/* 5. One-line Summary */}
                  <p className="mt-3 text-xs font-body text-stone-300 leading-relaxed line-clamp-2">
                    {oneLineSummary}
                  </p>
                </div>

                {/* 6. "Explore History" Button */}
                <div className="mt-5 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => toggleExpand(region.id)}
                    className="w-full py-2 px-3 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-200 text-xs font-display font-semibold hover:bg-gold-500/25 transition flex items-center justify-center gap-1.5"
                  >
                    <span>{isExpanded ? 'Collapse Overview' : 'Explore History'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* EXPANDABLE DETAIL PANEL (In-card or deep dossier) */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-gold-500/30 space-y-4 animate-fadeIn text-xs font-body">
                    {/* Historical Overview */}
                    <div>
                      <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1">
                        Historical Overview
                      </span>
                      <p className="text-stone-300 leading-relaxed">
                        {region.description}
                      </p>
                    </div>

                    {/* Rulers & Dynasties */}
                    {region.notableDynasties && region.notableDynasties.length > 0 && (
                      <div>
                        <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1 flex items-center gap-1">
                          <Crown className="w-3 h-3 text-gold-400" /> Rulers & Dynasties
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {region.notableDynasties.map((dynasty, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-lg bg-black/60 border border-gold-500/20 text-stone-300 text-[11px]"
                            >
                              {dynasty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Temples & Inscriptions */}
                    {region.keySitesAndInscriptions && region.keySitesAndInscriptions.length > 0 && (
                      <div>
                        <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1 flex items-center gap-1">
                          <Landmark className="w-3 h-3 text-gold-400" /> Temples & Inscriptions
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {region.keySitesAndInscriptions.map((site: string, i: number) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-lg bg-black/60 border border-gold-500/20 text-stone-300 text-[11px]"
                            >
                              {site}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Cultural Influence */}
                    <div>
                      <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-gold-400" /> Cultural & Civilizational Influence
                      </span>
                      <p className="text-stone-300 leading-relaxed text-[11px]">
                        Preservation of Sanskrit kāvya, Ramayana dance-dramas, Shaiva-Vaishnava agamas, and Nagari/Pallava epigraphic scripts.
                      </p>
                    </div>

                    {/* Modern Countries */}
                    {region.modernCountries && (
                      <div>
                        <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1">
                          Modern Geographic Countries
                        </span>
                        <p className="text-stone-300 text-[11px]">
                          {region.modernCountries.join(', ')}
                        </p>
                      </div>
                    )}

                    {/* Evidence Classification */}
                    <div className="p-2.5 rounded-xl bg-black/60 border border-gold-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-stone-300 text-[11px] font-medium">Evidence Classification</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold">
                        {region.classification}
                      </span>
                    </div>

                    {/* Sources */}
                    {region.sources && region.sources.length > 0 && (
                      <div>
                        <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1 flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-gold-400" /> Primary Epigraphy & Academic Sources
                        </span>
                        <div className="space-y-1.5 mt-1">
                          {region.sources.map((src, idx) => (
                            <div key={idx} className="p-2 rounded-lg bg-black/40 border border-white/10 text-[10px] text-stone-400">
                              <div className="text-stone-200 font-semibold">{src.title}</div>
                              <div>{src.authorOrBody} ({src.yearOrPeriod}) • {src.evidenceType}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deep Dossier Trigger */}
                    <button
                      type="button"
                      onClick={() => onSelectRegion(region)}
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-gold-500 text-black font-display text-xs font-bold hover:brightness-110 transition flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Open Full Epigraphic Dossier</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filteredRegions.length === 0 && (
          <div className="p-8 text-center rounded-2xl border border-gold-500/20 bg-black/40 text-stone-400 text-xs font-body">
            No historical kingdoms matching the active region or classification filter.
          </div>
        )}
      </div>
    </section>
  )
}
