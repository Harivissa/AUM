import { useState, useEffect } from 'react'
import { PageFrame } from './ChamberPage'
import VishvaMap from './vishva/VishvaMap'
import HistoricalPresenceSection from './vishva/HistoricalPresenceSection'
import MigrationDiasporaTimeline from './vishva/MigrationDiasporaTimeline'
import KoreaTraditionSection from './vishva/KoreaTraditionSection'
import CommunityDirectory from './vishva/CommunityDirectory'
import CountryProfileModal from './vishva/CountryProfileModal'
import HistoricalRegionModal from './vishva/HistoricalRegionModal'
import CommunityContributionModal from './vishva/CommunityContributionModal'
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
  Info
} from 'lucide-react'

export default function VishvaSanghaPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryHinduProfile | null>(null)
  const [selectedHistoricalRegion, setSelectedHistoricalRegion] = useState<HistoricalRegionData | null>(null)
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false)
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

  const handleOpenSuggestModal = (countryId = '', countryName = '') => {
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
    // In production this triggers a moderation queue
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
      eyebrow="A GLOBAL COLLECTIVE OF SANĀTANA COMMUNITIES"
      title="VISHVA SANĀTANA SAṄGHA"
      subtitle="विश्व सनातन संघ — Documenting Global Hindu Populations, Classical Civilizational Spheres, Historical Migration, and Community Sanctuaries"
      onBack={handleBackHome}
    >
      <div className="space-y-16">
        {/* Quick Navigation Anchor Bar */}
        <div className="p-3 sm:p-4 rounded-2xl border border-gold-500/25 bg-black/60 backdrop-blur-md sticky top-20 z-30 shadow-xl flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-display shrink-0">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/10 text-gold-200 hover:bg-gold-500/25 transition"
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('historical-presence')}
              className="px-3 py-1.5 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 hover:border-gold-400 hover:text-white transition whitespace-nowrap"
            >
              Historical Kingdoms
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('migration-diaspora')}
              className="px-3 py-1.5 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 hover:border-gold-400 hover:text-white transition whitespace-nowrap"
            >
              Girmit & Migration
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('korea-ayodhya')}
              className="px-3 py-1.5 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 hover:border-gold-400 hover:text-white transition whitespace-nowrap"
            >
              Korea & Ayodhya
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('community-directory')}
              className="px-3 py-1.5 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 hover:border-gold-400 hover:text-white transition whitespace-nowrap"
            >
              Community Directory
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('epistemic-standards')}
              className="px-3 py-1.5 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 hover:border-gold-400 hover:text-white transition whitespace-nowrap"
            >
              Source Standards
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleOpenSuggestModal()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold shadow-md hover:brightness-110 transition shrink-0"
          >
            <Plus className="w-3.5 h-3.5" /> Suggest Community
          </button>
        </div>

        {/* SECTION 1: INTERACTIVE GLOBAL MAP */}
        <div>
          <VishvaMap
            onSelectCountry={(c) => setSelectedCountry(c)}
            onSelectHistoricalRegion={(r) => setSelectedHistoricalRegion(r)}
          />
        </div>

        {/* SECTION 2: HISTORICAL SANĀTANA PRESENCE & KINGDOMS */}
        <HistoricalPresenceSection
          onSelectRegion={(r) => setSelectedHistoricalRegion(r)}
        />

        {/* SECTION 3: MIGRATION & DIASPORA (Ancient, Girmitiya, Modern) */}
        <MigrationDiasporaTimeline />

        {/* SECTION 4: KOREA & AYODHYA SCHOLARLY INQUIRY */}
        <KoreaTraditionSection />

        {/* SECTION 5: GLOBAL COMMUNITY DIRECTORY */}
        <CommunityDirectory
          onOpenSuggestModal={(c) => handleOpenSuggestModal(c)}
        />

        {/* SECTION 6: SOURCE & EVIDENCE STANDARDS */}
        <section id="epistemic-standards" className="py-12 border-t border-gold-500/20">
          <div className="p-6 sm:p-8 rounded-3xl border border-gold-500/25 bg-gradient-to-b from-[#0a0f21] to-black shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-100">
                AUM Epistemic & Source Labeling Standards
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-body text-gold-200/80 max-w-4xl leading-relaxed mb-6">
              In accordance with intellectual rigor, every demographic count, historical territory, and cultural claim across Vishva Sanātana Saṅgha is explicitly tagged with its authoritative source and confidence rating:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body">
              <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/15">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-display font-semibold text-[11px]">
                  Census / Sovereign Record
                </span>
                <p className="mt-2 text-gold-300/80 leading-relaxed">
                  Direct official sovereign government census data (e.g. India Census, Statistics Canada, US Census Bureau, Mauritius Statistics).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/15">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-200 font-display font-semibold text-[11px]">
                  Archaeological / Epigraphic Evidence
                </span>
                <p className="mt-2 text-gold-300/80 leading-relaxed">
                  Physical rock/copper-plate Sanskrit inscriptions, carbon-dated temple architecture, and verified numismatics (e.g. Vo Canh Stele, Canggal).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/15">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-200 font-display font-semibold text-[11px]">
                  Traditional / Disputed Status
                </span>
                <p className="mt-2 text-gold-300/80 leading-relaxed">
                  Clearly distinguished living oral memories, royal family traditions, or debated linguistic connections, presented with neutral scholarly balance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Country Profile Modal */}
      <CountryProfileModal
        country={selectedCountry}
        comments={comments}
        onClose={() => setSelectedCountry(null)}
        onOpenSuggestModal={(id, name) => handleOpenSuggestModal(id, name)}
        onReportComment={handleReportComment}
        onAddComment={handleAddContribution}
      />

      {/* Historical Region Modal */}
      <HistoricalRegionModal
        region={selectedHistoricalRegion}
        onClose={() => setSelectedHistoricalRegion(null)}
      />

      {/* Community Contribution Modal */}
      <CommunityContributionModal
        isOpen={isContributionModalOpen}
        prefillCountryId={prefillCountry.id}
        prefillCountryName={prefillCountry.name}
        onClose={() => setIsContributionModalOpen(false)}
        onSubmitContribution={handleAddContribution}
      />
    </PageFrame>
  )
}
