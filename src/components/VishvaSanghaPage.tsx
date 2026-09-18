import { useState, useEffect } from 'react'
import { PageFrame } from './ChamberPage'
import VishvaMap from './vishva/VishvaMap'
import HistoricalPresenceSection from './vishva/HistoricalPresenceSection'
import MigrationDiasporaTimeline from './vishva/MigrationDiasporaTimeline'
import KoreaTraditionSection from './vishva/KoreaTraditionSection'
import CommunityDirectory from './vishva/CommunityDirectory'
import SourceStandardsAccordion from './vishva/SourceStandardsAccordion'
import CountryProfileModal from './vishva/CountryProfileModal'
import HistoricalRegionModal from './vishva/HistoricalRegionModal'
import CommunityContributionModal, { type ContributionMode } from './vishva/CommunityContributionModal'
import {
  type CountryHinduProfile,
  type HistoricalRegionData,
  type CommunityComment,
  COMMUNITY_COMMENTS_SEED
} from '../data/vishvaData'
import {
  Globe,
  Scroll,
  Anchor,
  Sparkles,
  Users,
  ShieldCheck,
  Plus,
  BookOpen,
  MessageSquare,
  AlertTriangle,
  HeartHandshake,
  Compass,
  FileQuestion,
  Filter
} from 'lucide-react'

const GLOBAL_REGIONS = [
  'All Regions',
  'South Asia',
  'Southeast Asia',
  'East Asia',
  'Central Asia',
  'Middle East',
  'Africa',
  'Europe',
  'Americas',
  'Oceania'
]

export default function VishvaSanghaPage() {
  const [selectedGlobalRegion, setSelectedGlobalRegion] = useState<string>('All Regions')
  const [selectedCountry, setSelectedCountry] = useState<CountryHinduProfile | null>(null)
  const [selectedHistoricalRegion, setSelectedHistoricalRegion] = useState<HistoricalRegionData | null>(null)
  const [highlightedRouteId, setHighlightedRouteId] = useState<string | null>(null)

  // Contribution Modal State
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false)
  const [contributionMode, setContributionMode] = useState<ContributionMode>('Comment')
  const [prefillCountry, setPrefillCountry] = useState<{ id: string; name: string }>({ id: '', name: '' })

  // Community comments state with local storage persistence
  const [comments, setComments] = useState<CommunityComment[]>(() => {
    try {
      const stored = localStorage.getItem('aum-vishva-comments')
      if (stored) {
        return JSON.parse(stored)
      }
    } catch (e) {
      console.error('Error reading comments from localStorage', e)
    }
    return COMMUNITY_COMMENTS_SEED
  })

  useEffect(() => {
    try {
      localStorage.setItem('aum-vishva-comments', JSON.stringify(comments))
    } catch (e) {
      console.error('Error saving comments to localStorage', e)
    }
  }, [comments])

  const handleOpenContribution = (mode: ContributionMode, countryId = '', countryName = '') => {
    setContributionMode(mode)
    setPrefillCountry({ id: countryId, name: countryName })
    setIsContributionModalOpen(true)
  }

  const handleAddContribution = (newCommentData: Omit<CommunityComment, 'id' | 'date' | 'status'>) => {
    const newComment: CommunityComment = {
      ...newCommentData,
      id: `user-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      status: 'Pending Review'
    }
    setComments((prev) => [newComment, ...prev])
  }

  const handleReportComment = (commentId: string) => {
    console.log(`Comment ${commentId} reported for moderation review.`)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBackHome = () => {
    window.location.hash = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageFrame
      eyebrow="GLOBAL SANĀTANA DIGITAL ATLAS"
      title="VISHVA SANĀTANA SAṄGHA"
      subtitle="विश्व सनातन संघ — Interactive Digital Atlas of Civilizational Spheres, Historical Kingdoms, Maritime Migration & Living Sanctuaries"
      onBack={handleBackHome}
    >
      <div className="space-y-12">
        {/* 1 & 2. HERO HEADING & SHORT INTRODUCTION */}
        <div className="text-center max-w-4xl mx-auto space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <Globe className="w-3.5 h-3.5 text-gold-400" />
            Empirical Geography & Living Heritage
          </div>

          <p className="font-body text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl mx-auto">
            Explore the worldwide footprint of Sanātana Dharma through an interactive geographic atlas.
            Navigate between modern national populations, classical Hindu-Buddhist kingdoms, ancient and colonial maritime routes, and local temples—all backed by primary epigraphic charters and sovereign censuses.
          </p>
        </div>

        {/* 2. INTERACTIVE REGION FILTERS (Universal Filter Synchronizing Map, History, & Directory) */}
        <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/60 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <span className="text-xs font-display font-semibold text-gold-300 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-gold-400" /> Universal Geographic Region Filter:
            </span>
            <span className="text-[11px] text-stone-400 font-body">
              Filters Atlas Markers, Historical Entries & Directory Cards
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {GLOBAL_REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedGlobalRegion(region)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-display whitespace-nowrap transition border ${
                  selectedGlobalRegion === region
                    ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-bold shadow-md'
                    : 'border-white/10 bg-black/40 text-stone-400 hover:text-white hover:border-gold-500/30'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* 1, 3 & 4. INTERACTIVE REAL WORLD MAP & MAP LAYER CONTROLS */}
        <div id="vishva-sanatana-world-map">
          <VishvaMap
            selectedGlobalRegion={selectedGlobalRegion}
            onRegionChange={(reg) => setSelectedGlobalRegion(reg)}
            onSelectCountry={(c) => setSelectedCountry(c)}
            onSelectHistoricalRegion={(r) => setSelectedHistoricalRegion(r)}
            highlightedRouteId={highlightedRouteId}
          />
        </div>

        {/* 3. INTERACTIVE HISTORICAL KINGDOM CARDS */}
        <HistoricalPresenceSection
          selectedGlobalRegion={selectedGlobalRegion}
          onSelectRegion={(r) => setSelectedHistoricalRegion(r)}
        />

        {/* 4 & 5. INTERACTIVE MIGRATION TIMELINE & MIGRATION ROUTE EXPLORER */}
        <MigrationDiasporaTimeline
          onHighlightRouteOnMap={(routeId) => setHighlightedRouteId(routeId)}
        />

        {/* 6. KOREA & AYODHYA EVIDENCE PANEL */}
        <KoreaTraditionSection />

        {/* 7. COMMUNITY DIRECTORY */}
        <CommunityDirectory
          selectedGlobalRegion={selectedGlobalRegion}
          onOpenSuggestModal={(c) => handleOpenContribution('Suggest Community', '', c)}
        />

        {/* 8. SOURCE STANDARDS ACCORDION */}
        <SourceStandardsAccordion />

        {/* 9. COMMENTS AND CONTRIBUTIONS ACTION BAR */}
        <section className="py-8 border-t border-gold-500/20">
          <div className="p-6 sm:p-8 rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#0c1022] to-black shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-[10px] font-display uppercase tracking-widest text-gold-400 font-semibold block">
                Open Academic & Community Participation
              </span>
              <h3 className="font-display text-2xl font-bold text-gold-100 mt-1">
                Contribute to the Vishva Sanātana Saṅgha Registry
              </h3>
              <p className="mt-2 text-xs font-body text-stone-300 leading-relaxed">
                Join scholars, researchers, and local community members in documenting sanctuaries, preserving migration memories, and correcting historical data.
              </p>
            </div>

            {/* 5 Interactive Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenContribution('Comment')}
                className="px-4 py-2.5 rounded-xl border border-gold-500/20 bg-black/60 hover:bg-gold-500/15 hover:border-gold-400 text-gold-200 text-xs font-display font-semibold transition flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                <span>Comment</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenContribution('Suggest Community')}
                className="px-4 py-2.5 rounded-xl border border-gold-500/20 bg-black/60 hover:bg-gold-500/15 hover:border-gold-400 text-gold-200 text-xs font-display font-semibold transition flex items-center gap-2 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 text-gold-400" />
                <span>Suggest Community</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenContribution('Suggest Historical Source')}
                className="px-4 py-2.5 rounded-xl border border-gold-500/20 bg-black/60 hover:bg-gold-500/15 hover:border-gold-400 text-gold-200 text-xs font-display font-semibold transition flex items-center gap-2 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                <span>Suggest Historical Source</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenContribution('Report Incorrect Information')}
                className="px-4 py-2.5 rounded-xl border border-rose-500/30 bg-black/60 hover:bg-rose-500/15 hover:border-rose-400 text-rose-200 text-xs font-display font-semibold transition flex items-center gap-2 shadow-sm"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>Report Incorrect Information</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenContribution('Share Local History')}
                className="px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-black/60 hover:bg-emerald-500/15 hover:border-emerald-400 text-emerald-200 text-xs font-display font-semibold transition flex items-center gap-2 shadow-sm"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>Share Local History</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Country Profile Modal (For deep dive when user clicks "Read Full History") */}
      <CountryProfileModal
        country={selectedCountry}
        comments={comments}
        onClose={() => setSelectedCountry(null)}
        onOpenSuggestModal={(id, name) => handleOpenContribution('Suggest Community', id, name)}
        onReportComment={handleReportComment}
        onAddComment={handleAddContribution}
      />

      {/* Historical Region Modal (For deep dive when user clicks "Open Full Epigraphic Dossier") */}
      <HistoricalRegionModal
        region={selectedHistoricalRegion}
        onClose={() => setSelectedHistoricalRegion(null)}
      />

      {/* Community Contribution Modal */}
      <CommunityContributionModal
        isOpen={isContributionModalOpen}
        initialMode={contributionMode}
        prefillCountryId={prefillCountry.id}
        prefillCountryName={prefillCountry.name}
        onClose={() => setIsContributionModalOpen(false)}
        onSubmitContribution={handleAddContribution}
      />
    </PageFrame>
  )
}
