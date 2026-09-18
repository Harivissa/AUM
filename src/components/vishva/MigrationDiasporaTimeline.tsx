import { useState, useMemo } from 'react'
import {
  GEO_MIGRATION_ROUTES,
  type GeoMigrationRoute,
  type ConfidenceLabel
} from '../../data/vishvaData'
import {
  TIMELINE_MILESTONES,
  type TimelineMilestone
} from './HorizontalMigrationTimeline'
import {
  Anchor,
  Compass,
  Ship,
  Clock,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  MapPin,
  ShieldCheck,
  BookOpen,
  Route,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Sliders
} from 'lucide-react'

export type TimelineEraCategory =
  | 'Antiquity & Trade'
  | 'Classical Kingdoms'
  | 'Medieval Trade'
  | 'Girmitiya Indenture'
  | 'Modern Diaspora'

const ERA_CATEGORIES: TimelineEraCategory[] = [
  'Antiquity & Trade',
  'Classical Kingdoms',
  'Medieval Trade',
  'Girmitiya Indenture',
  'Modern Diaspora'
]

interface MigrationDiasporaTimelineProps {
  onHighlightRouteOnMap?: (routeId: string) => void
}

export default function MigrationDiasporaTimeline({
  onHighlightRouteOnMap
}: MigrationDiasporaTimelineProps) {
  const [selectedEra, setSelectedEra] = useState<TimelineEraCategory>('Antiquity & Trade')
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0)
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState<boolean>(false)
  const [selectedRouteModal, setSelectedRouteModal] = useState<GeoMigrationRoute | null>(null)

  // Filter milestones matching selected era category
  const eraMilestones = useMemo(() => {
    return TIMELINE_MILESTONES.filter((m) => {
      if (selectedEra === 'Medieval Trade') {
        return m.eraCategory === 'Medieval Guilds'
      }
      return (m.eraCategory as string) === selectedEra
    })
  }, [selectedEra])

  // Current active milestone
  const currentMilestone: TimelineMilestone | undefined =
    eraMilestones[selectedMilestoneIndex] || eraMilestones[0]

  // Map route style categories
  const routeCategories = useMemo(() => {
    return [
      {
        styleName: 'Ancient Maritime Trade',
        color: '#38bdf8',
        borderStyle: 'border-dashed border-sky-400',
        dotColor: 'bg-sky-400',
        routes: GEO_MIGRATION_ROUTES.filter((r) => r.id === 'ancient-maritime-se-asia' || r.id === 'ancient-western-indian-ocean')
      },
      {
        styleName: 'Silk Road Movement',
        color: '#c084fc',
        borderStyle: 'border-dashed border-purple-400',
        dotColor: 'bg-purple-400',
        routes: GEO_MIGRATION_ROUTES.filter((r) => r.id.includes('silk'))
      },
      {
        styleName: 'Chola-Era Maritime Routes',
        color: '#10b981',
        borderStyle: 'border-solid border-emerald-400',
        dotColor: 'bg-emerald-400',
        routes: GEO_MIGRATION_ROUTES.filter((r) => r.id === 'chola-maritime-expedition')
      },
      {
        styleName: 'Girmitiya Indenture Routes',
        color: '#f59e0b',
        borderStyle: 'border-dashed border-amber-400',
        dotColor: 'bg-amber-400',
        routes: GEO_MIGRATION_ROUTES.filter((r) => r.eraId === 'colonial-indenture')
      },
      {
        styleName: 'Modern Diaspora Movement',
        color: '#38bdf8',
        borderStyle: 'border-dotted border-cyan-400',
        dotColor: 'bg-cyan-400',
        routes: GEO_MIGRATION_ROUTES.filter((r) => r.eraId === 'modern-global')
      }
    ]
  }, [])

  const handleEraSelect = (era: TimelineEraCategory) => {
    setSelectedEra(era)
    setSelectedMilestoneIndex(0)
    setIsReadMoreExpanded(false)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    setSelectedMilestoneIndex(val)
    setIsReadMoreExpanded(false)
  }

  const handleScrollToMap = (routeId?: string) => {
    if (routeId && onHighlightRouteOnMap) {
      onHighlightRouteOnMap(routeId)
    }
    const mapEl = document.getElementById('vishva-sanatana-world-map')
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="migration-diaspora" className="py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <Anchor className="w-3.5 h-3.5 text-gold-400" />
            Global Diaspora & Historic Journeys
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
            Interactive Migration Timeline
          </h2>
          <p className="mt-2 font-body text-sm text-stone-300 leading-relaxed">
            Slide across three millennia of maritime navigation, Silk Road transmission, colonial Girmit voyages, and 20th-century knowledge migration.
          </p>
        </div>

        {/* 1. TIMELINE CONTROLS: 5 Era Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-3 no-scrollbar mb-6">
          {ERA_CATEGORIES.map((era) => (
            <button
              key={era}
              type="button"
              onClick={() => handleEraSelect(era)}
              className={`px-4 py-2 rounded-xl text-xs font-display whitespace-nowrap transition border ${
                selectedEra === era
                  ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-bold shadow-md'
                  : 'border-gold-500/15 bg-black/40 text-stone-400 hover:border-gold-400/40 hover:text-gold-200'
              }`}
            >
              {era}
            </button>
          ))}
        </div>

        {/* 2. TIMELINE SLIDER & MILESTONES BAR */}
        <div className="p-6 rounded-3xl border border-gold-500/25 bg-gradient-to-b from-[#0e1222] to-black shadow-xl mb-10">
          <div className="flex items-center justify-between gap-4 mb-4 text-xs font-display">
            <span className="text-gold-400 flex items-center gap-1.5 font-semibold">
              <Sliders className="w-3.5 h-3.5" /> Timeline Navigation Slider
            </span>
            <span className="text-stone-400">
              Milestone {selectedMilestoneIndex + 1} of {eraMilestones.length}
            </span>
          </div>

          {/* Interactive Range Slider */}
          <div className="relative py-2">
            <input
              type="range"
              min="0"
              max={Math.max(0, eraMilestones.length - 1)}
              value={selectedMilestoneIndex}
              onChange={handleSliderChange}
              className="w-full h-2 bg-black/80 rounded-lg appearance-none cursor-pointer accent-amber-400 border border-gold-500/30"
            />
            <div className="flex justify-between text-[10px] font-display text-stone-500 mt-2 px-1">
              <span>{eraMilestones[0]?.year}</span>
              <span>{eraMilestones[eraMilestones.length - 1]?.year}</span>
            </div>
          </div>

          {/* Milestone Quick Chips */}
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar mt-3 border-t border-white/10">
            {eraMilestones.map((m, idx) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setSelectedMilestoneIndex(idx)
                  setIsReadMoreExpanded(false)
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-display transition shrink-0 flex items-center gap-1.5 border ${
                  selectedMilestoneIndex === idx
                    ? 'border-gold-400 bg-gold-500/30 text-white font-bold'
                    : 'border-white/10 bg-black/40 text-stone-400 hover:text-white'
                }`}
              >
                <Clock className="w-3 h-3 text-gold-400" />
                <span>{m.year}</span>
              </button>
            ))}
          </div>

          {/* 3. COMPACT INFORMATION CARD FOR SELECTED MILESTONE */}
          {currentMilestone && (
            <div className="mt-5 p-5 sm:p-6 rounded-2xl border border-gold-500/30 bg-black/60 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-200 border border-amber-500/30">
                      {currentMilestone.year}
                    </span>
                    <span className="text-xs text-stone-400 font-body">
                      {currentMilestone.exactPeriod}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-100 mt-1.5">
                    {currentMilestone.title}
                  </h3>
                </div>

                {/* Evidence & Confidence Badge */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-display font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {currentMilestone.confidence}
                  </span>
                </div>
              </div>

              {/* Origin & Destination Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Origin</span>
                  <span className="text-xs font-semibold text-gold-200 mt-0.5 block">
                    {currentMilestone.origin}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Destination</span>
                  <span className="text-xs font-semibold text-gold-200 mt-0.5 block">
                    {currentMilestone.destination}
                  </span>
                </div>
              </div>

              {/* One-Line Summary */}
              <p className="mt-4 text-xs sm:text-sm font-body text-stone-200 leading-relaxed">
                {currentMilestone.summary}
              </p>

              {/* Action Buttons: See on Map & Expand Read More */}
              <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setIsReadMoreExpanded(!isReadMoreExpanded)}
                  className="text-xs font-display font-semibold text-gold-300 hover:text-gold-100 flex items-center gap-1.5 transition"
                >
                  <span>{isReadMoreExpanded ? 'Collapse Details' : 'Read Full History'}</span>
                  {isReadMoreExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollToMap()}
                  className="py-1.5 px-3.5 rounded-xl bg-gold-500/20 border border-gold-400/40 text-gold-200 hover:bg-gold-500/30 text-xs font-display font-medium transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>View Route on World Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Expandable "Read More" Panel */}
              {isReadMoreExpanded && (
                <div className="mt-4 pt-4 border-t border-gold-500/25 space-y-3 animate-fadeIn text-xs font-body">
                  <div>
                    <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1">
                      Historical Significance
                    </span>
                    <p className="text-stone-300 leading-relaxed">
                      {currentMilestone.significance}
                    </p>
                  </div>

                  {currentMilestone.shipsOrRoutes && (
                    <div className="p-3 rounded-xl bg-[#080d1a] border border-sky-500/20 text-sky-200 flex items-center gap-2.5">
                      <Ship className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{currentMilestone.shipsOrRoutes}</span>
                    </div>
                  )}

                  <div>
                    <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1">
                      Primary Archaeological & Epigraphic Evidence
                    </span>
                    <p className="text-stone-300 leading-relaxed">
                      {currentMilestone.primaryEvidence}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4. MIGRATION ROUTE EXPLORER (Visual styles & Clickable Routes) */}
        <div className="p-6 rounded-3xl border border-gold-500/20 bg-black/50 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-display text-gold-400 uppercase tracking-wider font-semibold">
                <Route className="w-3.5 h-3.5" /> Maritime & Continental Corridors
              </div>
              <h3 className="font-display text-xl font-bold text-gold-100 mt-1">
                Visual Migration Route Explorer
              </h3>
            </div>
            <span className="text-xs text-stone-400 font-body">
              Click any route to inspect its historical context
            </span>
          </div>

          {/* Route Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {routeCategories.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`} />
                  <h4 className="font-display text-xs font-bold text-white">
                    {cat.styleName}
                  </h4>
                </div>

                <div className="space-y-2">
                  {cat.routes.map((route) => (
                    <button
                      key={route.id}
                      type="button"
                      onClick={() => setSelectedRouteModal(route)}
                      className="w-full text-left p-2.5 rounded-xl bg-[#090d18] border border-white/5 hover:border-gold-500/40 hover:bg-gold-500/10 transition group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display text-xs font-semibold text-gold-200 group-hover:text-gold-100">
                          {route.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-gold-400 shrink-0" />
                      </div>
                      <div className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                        {route.origin} → {route.destination}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT MODAL FOR CLICKED ROUTE */}
        {selectedRouteModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0b0f1d] border border-gold-500/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-fadeIn">
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                    {selectedRouteModal.eraTitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {selectedRouteModal.title}
                  </h3>
                  <div className="text-xs text-stone-400">{selectedRouteModal.timePeriod}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedRouteModal(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {selectedRouteModal.vesselOrType && (
                <div className="p-3 rounded-xl bg-black/60 border border-sky-500/25 text-xs text-sky-200 flex items-center gap-2">
                  <Ship className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{selectedRouteModal.vesselOrType}</span>
                </div>
              )}

              <div className="space-y-3 text-xs font-body text-stone-300">
                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Origin & Destination</span>
                  <span className="text-white font-medium">{selectedRouteModal.origin} → {selectedRouteModal.destination}</span>
                </div>

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Historical Context</span>
                  <p className="mt-1 leading-relaxed">{selectedRouteModal.significance}</p>
                </div>

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Key Ports & Waypoints</span>
                  <p className="mt-1">{selectedRouteModal.keyPortsOrStops.join(' • ')}</p>
                </div>

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Source Status & Verification</span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">
                      {selectedRouteModal.evidenceConfidence}
                    </span>
                    <span className="text-stone-400 text-[11px]">{selectedRouteModal.sourcesSummary}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const id = selectedRouteModal.id
                    setSelectedRouteModal(null)
                    handleScrollToMap(id)
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold hover:brightness-110 transition flex items-center justify-center gap-1.5"
                >
                  <span>Focus Route on Interactive Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
