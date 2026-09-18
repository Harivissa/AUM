import { useState } from 'react'
import {
  type CountryHinduProfile,
  type CommunityComment
} from '../../data/vishvaData'
import {
  X,
  MapPin,
  Users,
  Percent,
  Landmark,
  Building2,
  Clock,
  BookOpen,
  ShieldCheck,
  Plus,
  AlertTriangle,
  MessageSquare,
  Calendar,
  Flag,
  Share2,
  CheckCircle2,
  Filter,
  Send,
  ShieldAlert
} from 'lucide-react'

interface CountryProfileModalProps {
  country: CountryHinduProfile | null
  comments: CommunityComment[]
  onClose: () => void
  onOpenSuggestModal: (prefillCountryId: string, prefillCountryName: string) => void
  onReportComment: (commentId: string) => void
  onAddComment?: (newComment: Omit<CommunityComment, 'id' | 'date' | 'status'>) => void
}

export default function CountryProfileModal({
  country,
  comments,
  onClose,
  onOpenSuggestModal,
  onReportComment,
  onAddComment
}: CountryProfileModalProps) {
  const [activeSection, setActiveSection] = useState<'overview' | 'history' | 'temples' | 'comments'>('overview')
  const [reportedIds, setReportedIds] = useState<Record<string, boolean>>({})

  // Moderation & Form States
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [commentFilter, setCommentFilter] = useState<'All' | 'Verified' | 'Corrections' | 'Citations' | 'Traditions' | 'Under Review'>('All')
  const [author, setAuthor] = useState('')
  const [location, setLocation] = useState('')
  const [contributionType, setContributionType] = useState<'Correction' | 'Source Citation' | 'Temple Suggestion' | 'Local History' | 'Migration Story'>('Correction')
  const [isTraditionOrHistory, setIsTraditionOrHistory] = useState<'Documented History with Sources' | 'Personal / Family Tradition'>('Documented History with Sources')
  const [text, setText] = useState('')
  const [sourceCitation, setSourceCitation] = useState('')
  const [truthPledge, setTruthPledge] = useState(false)
  const [antiSpamAnswer, setAntiSpamAnswer] = useState('')
  const [formFeedback, setFormFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // Report dialog state
  const [reportingId, setReportingId] = useState<string | null>(null)
  const [reportReason, setReportReason] = useState('Inaccurate or unverified factual claim')

  if (!country) return null

  const countryComments = comments.filter((c) => c.countryId === country.id)

  const handleReport = (commentId: string) => {
    setReportedIds((prev) => ({ ...prev, [commentId]: true }))
    onReportComment(commentId)
    setReportingId(null)
  }

  const handleSubmitContribution = (e: React.FormEvent) => {
    e.preventDefault()
    setFormFeedback(null)

    if (!author.trim() || !text.trim() || !location.trim()) {
      setFormFeedback({ type: 'error', message: 'Please provide your name, location, and the details of your note.' })
      return
    }

    if (isTraditionOrHistory === 'Documented History with Sources' && !sourceCitation.trim()) {
      setFormFeedback({ type: 'error', message: 'Primary source or archival citation is required for documented historical claims.' })
      return
    }

    if (!truthPledge) {
      setFormFeedback({ type: 'error', message: 'Please affirm the accuracy and community respect pledge to submit.' })
      return
    }

    if (antiSpamAnswer.trim() !== '12') {
      setFormFeedback({ type: 'error', message: 'Please complete the anti-spam security check correctly (7 + 5 = 12).' })
      return
    }

    const payload = {
      countryId: country.id,
      author: author.trim(),
      location: location.trim(),
      contributionType,
      text: text.trim(),
      isTraditionOrHistory,
      sourceCitation: sourceCitation.trim() || undefined
    }

    if (onAddComment) {
      onAddComment(payload)
    }

    setFormFeedback({
      type: 'success',
      message: 'Your contribution has been recorded in the moderation queue. Verified submissions receive the scholar-verified badge.'
    })

    setTimeout(() => {
      setText('')
      setSourceCitation('')
      setAntiSpamAnswer('')
      setTruthPledge(false)
      setIsFormOpen(false)
      setFormFeedback(null)
    }, 2200)
  }

  const filteredComments = countryComments.filter((c) => {
    if (commentFilter === 'All') return true
    if (commentFilter === 'Verified') return c.status === 'Published'
    if (commentFilter === 'Corrections') return c.contributionType === 'Correction'
    if (commentFilter === 'Citations') return c.contributionType === 'Source Citation'
    if (commentFilter === 'Traditions') return c.isTraditionOrHistory === 'Personal / Family Tradition'
    if (commentFilter === 'Under Review') return c.status === 'Pending Review' || c.status === 'Reported' || !!reportedIds[c.id]
    return true
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl border border-gold-500/35 bg-gradient-to-b from-[#0b1021] via-[#050813] to-black shadow-2xl text-gold-100 my-6 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-6 pb-4 border-b border-gold-500/20 flex items-start justify-between gap-4 shrink-0 bg-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-deva text-gold-400 text-sm font-semibold">{country.sanskritName}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-[10px] font-display">
                {country.dataConfidence}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/60 text-gold-400/80 text-[10px] font-display">
                {country.region}
              </span>
            </div>

            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gold-100 flex items-center gap-2">
              {country.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenSuggestModal(country.id, country.name)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-200 text-xs font-display hover:bg-gold-500/25 transition"
            >
              <Plus className="w-3.5 h-3.5 text-gold-400" /> Suggest Community
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full border border-gold-500/20 bg-black/50 text-gold-300 hover:text-white hover:border-gold-400/40 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-gold-500/15 text-xs font-display shrink-0 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Demographics & Overview' },
            { id: 'history', label: 'History & Kingdoms' },
            { id: 'temples', label: 'Temples & Organizations' },
            { id: 'comments', label: `Community Notes (${countryComments.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-4 py-2 border-b-2 font-semibold transition whitespace-nowrap ${
                activeSection === tab.id
                  ? 'border-gold-400 text-gold-100 bg-gold-500/10'
                  : 'border-transparent text-gold-300/70 hover:text-gold-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-gold-200/85">
          {/* TAB 1: OVERVIEW & DEMOGRAPHICS */}
          {activeSection === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Stat Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/50">
                  <div className="flex items-center gap-2 text-xs font-display text-gold-400">
                    <Users className="w-4 h-4" /> Estimated Hindu Population
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-gold-100">
                    {country.estimatedPopulation}
                  </div>
                  <div className="text-[11px] text-gold-300/60 mt-0.5">Census / Statistical Data</div>
                </div>

                <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/50">
                  <div className="flex items-center gap-2 text-xs font-display text-gold-400">
                    <Percent className="w-4 h-4" /> Percentage of Population
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-gold-100">
                    {country.percentageOfPopulation}
                  </div>
                  <div className="text-[11px] text-gold-300/60 mt-0.5">Demographic Share</div>
                </div>

                <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/50">
                  <div className="flex items-center gap-2 text-xs font-display text-gold-400">
                    <Clock className="w-4 h-4" /> Evidence Confidence
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-gold-100">
                    {country.dataConfidence}
                  </div>
                  <div className="text-[11px] text-gold-300/60 mt-0.5">Statistical Status</div>
                </div>
              </div>

              {/* Major Cities */}
              <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/30">
                <h4 className="text-xs font-display uppercase tracking-wider text-gold-400 font-semibold mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Major Cities & Regional Centers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {country.majorCities.map((city, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-200 text-xs font-body"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Source Box */}
              <div className="p-4 rounded-2xl border border-gold-500/25 bg-[#080d1e] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display uppercase tracking-wider text-gold-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold-400" /> Primary Statistical Source
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 text-[10px] font-display">
                    {country.dataSource.confidence}
                  </span>
                </div>
                <p className="text-xs font-body font-semibold text-gold-100">
                  {country.dataSource.title}
                </p>
                <p className="text-xs font-body text-gold-300/75">
                  Conducted by {country.dataSource.authorOrBody} • Data Reference Year: {country.dataYear}
                </p>
                {country.dataSource.notes && (
                  <p className="text-[11px] font-body text-gold-300/60 italic pt-1">
                    Note: {country.dataSource.notes}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: HISTORY & KINGDOMS */}
          {activeSection === 'history' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Historical Overview */}
              <div>
                <h4 className="font-display text-lg font-bold text-gold-100 mb-2">
                  Historical Presence & Civilizational Contact
                </h4>
                <p className="text-xs sm:text-sm font-body leading-relaxed text-gold-200/80">
                  {country.historicalPresenceSummary}
                </p>
              </div>

              {/* Former Kingdoms & Dynasties */}
              {country.historicalKingdoms && country.historicalKingdoms.length > 0 && (
                <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/40 space-y-3">
                  <h4 className="text-xs font-display uppercase tracking-wider text-gold-400 font-semibold mb-2 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4" /> Former Hindu or Hindu-Buddhist Kingdoms & Dynasties
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {country.historicalKingdoms.map((k, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs font-body"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-gold-100 font-display text-sm">{k.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-200 text-[10px] font-display">
                            {k.classification}
                          </span>
                        </div>
                        <p className="text-gold-300/80 text-[11px] mt-1">
                          {k.period} {k.capital ? `• Capital: ${k.capital}` : ''}
                        </p>
                        <p className="text-gold-200/80 text-xs mt-1.5">{k.notableRulersOrSites}</p>
                        <p className="text-gold-400/70 text-[10.5px] mt-1 italic">
                          Primary Sources: {k.primarySources}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Migration History */}
              <div>
                <h4 className="font-display text-lg font-bold text-gold-100 mb-2">
                  Migration History & Timeline
                </h4>
                <p className="text-xs sm:text-sm font-body leading-relaxed text-gold-200/80">
                  {country.migrationHistorySummary}
                </p>
              </div>

              {/* Sacred Inscriptions / Historical Sites */}
              {country.sacredSitesOrInscriptions && (
                <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/40">
                  <h4 className="text-xs font-display uppercase tracking-wider text-gold-400 font-semibold mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Documented Epigraphs & Ancient Sites
                  </h4>
                  <ul className="space-y-1 text-xs font-body text-gold-300/80 pl-2">
                    {country.sacredSitesOrInscriptions.map((site, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold-400">•</span>
                        <span>{site}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TEMPLES & ORGANIZATIONS */}
          {activeSection === 'temples' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h4 className="text-xs font-display uppercase tracking-wider text-gold-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Landmark className="w-4 h-4" /> Major Temples & Mandirs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.keyTemples.map((temple, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-gold-500/20 bg-black/50 text-xs font-body text-gold-200 flex items-start gap-2"
                    >
                      <span className="text-gold-400 font-bold mt-0.5">✦</span>
                      <span>{temple}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-display uppercase tracking-wider text-gold-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" /> Registered Hindu Organizations & Seva Bodies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.majorOrganizations.map((org, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-gold-500/20 bg-black/50 text-xs font-body text-gold-200 flex items-start gap-2"
                    >
                      <span className="text-amber-400 font-bold mt-0.5">✦</span>
                      <span>{org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SECURE & MODERATED COMMUNITY CONTRIBUTIONS */}
          {activeSection === 'comments' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Moderation Policy & Decency Charter Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#0c1224] to-black border border-gold-500/25 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div className="text-xs font-body">
                  <span className="font-display font-semibold text-gold-200 block mb-0.5">
                    AUM Verified Community Archive & Epistemic Standards
                  </span>
                  <p className="text-gold-300/75 leading-relaxed">
                    All historical claims and demographic updates undergo editorial moderation. Verified entries require primary archival sources or scholarly citations. Sincere personal/family oral histories are welcomed and explicitly designated to maintain intellectual transparency.
                  </p>
                </div>
              </div>

              {/* Action Bar: Title, Count, and Suggest/Contribute Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-gold-100 flex items-center gap-2">
                    <span>Documented Community Heritage: {country.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-display">
                      {countryComments.length}
                    </span>
                  </h4>
                  <p className="text-xs font-body text-gold-300/70 mt-0.5">
                    Peer-reviewed notes, epigraphic updates, and verified diaspora archives.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFormOpen(!isFormOpen)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-display text-xs font-semibold transition shadow-md shrink-0 ${
                    isFormOpen
                      ? 'bg-black/60 border border-gold-400/50 text-gold-200'
                      : 'bg-gradient-to-r from-gold-400 to-amber-500 text-black hover:brightness-110'
                  }`}
                >
                  <Plus className={`w-3.5 h-3.5 transition-transform ${isFormOpen ? 'rotate-45' : ''}`} />
                  {isFormOpen ? 'Close Form' : 'Suggest Correction / Note'}
                </button>
              </div>

              {/* INLINE SECURE CONTRIBUTION FORM */}
              {isFormOpen && (
                <form
                  onSubmit={handleSubmitContribution}
                  className="p-5 sm:p-6 rounded-2xl border border-gold-400/40 bg-gradient-to-b from-[#0e162d] to-[#060a14] shadow-2xl space-y-4 animate-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-gold-400" />
                      <h5 className="font-display text-sm font-bold text-gold-100">
                        Suggest Correction or Add Community Heritage for {country.name}
                      </h5>
                    </div>
                    <span className="text-[10.5px] font-display text-gold-400/70">
                      Moderation Enabled
                    </span>
                  </div>

                  {formFeedback && (
                    <div
                      className={`p-3 rounded-xl text-xs font-body flex items-center gap-2 ${
                        formFeedback.type === 'success'
                          ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-200'
                          : 'bg-red-950/40 border border-red-500/40 text-red-200'
                      }`}
                    >
                      {formFeedback.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                      <span>{formFeedback.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-display uppercase tracking-wider text-gold-300 font-semibold mb-1">
                        Contributor Name / Initials *
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="e.g. Dr. R. Sharma, or Family Archive"
                        className="w-full px-3 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-xs text-gold-100 placeholder-gold-500/40 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-display uppercase tracking-wider text-gold-300 font-semibold mb-1">
                        Location (City, State/Region) *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Durban, London, Port Louis"
                        className="w-full px-3 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-xs text-gold-100 placeholder-gold-500/40 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-display uppercase tracking-wider text-gold-300 font-semibold mb-1">
                        Contribution Category *
                      </label>
                      <select
                        value={contributionType}
                        onChange={(e) => setContributionType(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-black/80 border border-gold-500/25 text-xs text-gold-100 focus:outline-none focus:border-gold-400"
                      >
                        <option value="Correction">Correction (Demographics / Census)</option>
                        <option value="Source Citation">Source Citation (Epigraph / Study)</option>
                        <option value="Temple Suggestion">Temple / Organization Submission</option>
                        <option value="Local History">Local Sanctuary History</option>
                        <option value="Migration Story">Family Migration / Girmit Story</option>
                      </select>
                    </div>
                  </div>

                  {/* Classification Radio */}
                  <div className="pt-1">
                    <label className="block text-[11px] font-display uppercase tracking-wider text-gold-300 font-semibold mb-1.5">
                      Evidence Classification *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label
                        className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                          isTraditionOrHistory === 'Documented History with Sources'
                            ? 'border-gold-400 bg-gold-500/15 text-gold-100'
                            : 'border-gold-500/20 bg-black/40 text-gold-300/70 hover:border-gold-500/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="classification"
                          checked={isTraditionOrHistory === 'Documented History with Sources'}
                          onChange={() => setIsTraditionOrHistory('Documented History with Sources')}
                          className="mt-0.5 accent-amber-400"
                        />
                        <div>
                          <span className="font-semibold block text-[11.5px]">
                            Documented History with Sources
                          </span>
                          <span className="text-[10px] text-gold-400/70">
                            Academic monograph, epigraphic registry, government census, or museum catalog.
                          </span>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                          isTraditionOrHistory === 'Personal / Family Tradition'
                            ? 'border-gold-400 bg-gold-500/15 text-gold-100'
                            : 'border-gold-500/20 bg-black/40 text-gold-300/70 hover:border-gold-500/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="classification"
                          checked={isTraditionOrHistory === 'Personal / Family Tradition'}
                          onChange={() => setIsTraditionOrHistory('Personal / Family Tradition')}
                          className="mt-0.5 accent-amber-400"
                        />
                        <div>
                          <span className="font-semibold block text-[11.5px]">
                            Personal / Family Oral Tradition
                          </span>
                          <span className="text-[10px] text-gold-400/70">
                            Intergenerational family accounts, Girmitiya oral recollections, or temple lore.
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Text Note Area */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-display uppercase tracking-wider text-gold-300 font-semibold mb-1">
                      <span>Description / Detailed Correction *</span>
                      <span className="text-[10px] text-gold-400/60 font-body">
                        {text.length}/800 characters
                      </span>
                    </div>
                    <textarea
                      required
                      rows={3}
                      maxLength={800}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Detail the historical finding, census correction, or oral memory with specific dates, temples, and context..."
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-xs text-gold-100 placeholder-gold-500/40 focus:outline-none focus:border-gold-400 resize-none"
                    />
                  </div>

                  {/* Source Citation Input */}
                  <div>
                    <label className="block text-[11px] font-display uppercase tracking-wider text-gold-300 font-semibold mb-1">
                      Primary Source Citation {isTraditionOrHistory === 'Documented History with Sources' ? '*' : '(Optional)'}
                    </label>
                    <input
                      type="text"
                      required={isTraditionOrHistory === 'Documented History with Sources'}
                      value={sourceCitation}
                      onChange={(e) => setSourceCitation(e.target.value)}
                      placeholder="e.g. Statistics Mauritius 2022 Census Table 4, or Epigraphia Indica Vol. 21, p. 115"
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-xs text-gold-100 placeholder-gold-500/40 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  {/* Ethical Truth Affirmation & Anti-Spam Security Challenge */}
                  <div className="p-3 rounded-xl bg-black/50 border border-gold-500/15 space-y-2.5">
                    <label className="flex items-start gap-2 text-xs font-body text-gold-200/90 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={truthPledge}
                        onChange={(e) => setTruthPledge(e.target.checked)}
                        className="mt-0.5 accent-amber-400"
                      />
                      <span>
                        <strong className="text-gold-100">Truth & Decency Affirmation:</strong> I certify that this submission is factual to the best of my knowledge, respectful of community harmony, and adheres to authentic historical documentation or sincere oral tradition.
                      </span>
                    </label>

                    <div className="flex items-center gap-3 pt-1 border-t border-gold-500/10">
                      <span className="text-[11px] font-display text-gold-300">
                        Anti-Spam Verification: What is <strong>7 + 5</strong>? *
                      </span>
                      <input
                        type="text"
                        required
                        value={antiSpamAnswer}
                        onChange={(e) => setAntiSpamAnswer(e.target.value)}
                        placeholder="Answer"
                        className="w-20 px-2 py-1 rounded-lg bg-black/80 border border-gold-500/30 text-xs text-gold-100 text-center focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-4 py-2 rounded-full border border-gold-500/20 text-xs font-display text-gold-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold shadow-md hover:brightness-110 transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit for Moderation
                    </button>
                  </div>
                </form>
              )}

              {/* REPORT DIALOG / REASON POPUP */}
              {reportingId && (
                <div className="p-4 rounded-2xl border border-red-500/30 bg-red-950/30 space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-red-200">
                    <span className="font-display font-semibold flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-red-400" />
                      Report Contribution for Editorial Review
                    </span>
                    <button
                      type="button"
                      onClick={() => setReportingId(null)}
                      className="text-red-300 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-[11.5px] font-body text-red-200/80">
                    Please indicate the primary reason for flagging this community note. AUM editors will audit the claim against primary scholarly citations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Inaccurate or unverified factual claim',
                      'Fictitious demographic / census figures',
                      'Missing or falsified source citation',
                      'Disrespectful or polemical language'
                    ].map((reason) => (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => setReportReason(reason)}
                        className={`text-left p-2 rounded-xl border text-[11px] font-body transition ${
                          reportReason === reason
                            ? 'border-red-400 bg-red-500/20 text-red-100 font-semibold'
                            : 'border-red-500/20 bg-black/40 text-red-300/70 hover:text-red-200'
                        }`}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setReportingId(null)}
                      className="px-3 py-1 rounded-full border border-red-500/30 text-xs text-red-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReport(reportingId)}
                      className="px-4 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white font-display text-xs font-semibold"
                    >
                      Confirm Report
                    </button>
                  </div>
                </div>
              )}

              {/* FILTER BAR: ALL, VERIFIED, CORRECTIONS, CITATIONS, ORAL TRADITIONS, UNDER REVIEW */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs border-b border-gold-500/15">
                <span className="text-gold-400/80 font-display text-xs flex items-center gap-1 shrink-0 mr-1">
                  <Filter className="w-3 h-3" /> Filter:
                </span>
                {(
                  [
                    { key: 'All', label: `All (${countryComments.length})` },
                    {
                      key: 'Verified',
                      label: `Verified (${countryComments.filter((c) => c.status === 'Published').length})`
                    },
                    {
                      key: 'Corrections',
                      label: `Corrections (${countryComments.filter((c) => c.contributionType === 'Correction').length})`
                    },
                    {
                      key: 'Citations',
                      label: `Citations (${countryComments.filter((c) => c.contributionType === 'Source Citation').length})`
                    },
                    {
                      key: 'Traditions',
                      label: `Oral Heritage (${countryComments.filter((c) => c.isTraditionOrHistory === 'Personal / Family Tradition').length})`
                    },
                    {
                      key: 'Under Review',
                      label: `In Review (${countryComments.filter((c) => c.status === 'Pending Review' || c.status === 'Reported' || reportedIds[c.id]).length})`
                    }
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setCommentFilter(tab.key)}
                    className={`px-3 py-1 rounded-full whitespace-nowrap transition text-[11px] font-display ${
                      commentFilter === tab.key
                        ? 'bg-gold-500/25 border border-gold-400 text-gold-100 font-semibold'
                        : 'bg-black/40 border border-gold-500/15 text-gold-300/70 hover:text-gold-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* COMMENTS LIST */}
              {filteredComments.length === 0 ? (
                <div className="py-10 text-center text-xs font-body text-gold-300/60 border border-dashed border-gold-500/20 rounded-2xl space-y-2">
                  <p>No community notes matching &quot;{commentFilter}&quot; for {country.name}.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setCommentFilter('All')
                      setIsFormOpen(true)
                    }}
                    className="text-gold-400 hover:text-gold-200 underline font-display text-xs"
                  >
                    Submit a new documented note or suggestion
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {filteredComments.map((comm) => {
                    const isReported = comm.status === 'Reported' || reportedIds[comm.id]
                    const isPending = comm.status === 'Pending Review'
                    const isVerified = comm.status === 'Published' && !isReported

                    return (
                      <div
                        key={comm.id}
                        className={`p-4 sm:p-5 rounded-2xl border space-y-3 text-xs font-body transition ${
                          isReported
                            ? 'border-red-500/30 bg-red-950/20'
                            : isPending
                            ? 'border-amber-500/30 bg-amber-950/20'
                            : 'border-gold-500/20 bg-black/50 hover:border-gold-500/40'
                        }`}
                      >
                        {/* Note Top Bar: Author, Verification Badge, Status, Report Button */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-gold-500/10">
                          <div className="flex flex-wrap items-center gap-2 text-gold-300 text-[11px]">
                            <span className="font-semibold text-gold-100 text-xs">
                              {comm.author}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gold-400" />
                              {comm.location}
                            </span>
                            <span>•</span>
                            <span>{comm.date}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Verification Badge */}
                            {isVerified && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[10.5px] font-display font-semibold">
                                <ShieldCheck className="w-3 h-3" /> Verified Contribution
                              </span>
                            )}

                            {isPending && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-[10.5px] font-display font-semibold">
                                <Clock className="w-3 h-3" /> Under Review
                              </span>
                            )}

                            {isReported && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/35 text-red-300 text-[10.5px] font-display font-semibold">
                                <AlertTriangle className="w-3 h-3" /> Reported for Moderation
                              </span>
                            )}

                            {/* Category Badge */}
                            <span className="px-2 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[10px] font-display">
                              {comm.contributionType}
                            </span>

                            {/* Report Action Button */}
                            {!isReported && (
                              <button
                                type="button"
                                onClick={() => setReportingId(comm.id)}
                                className="text-gold-400/50 hover:text-red-400 transition p-1"
                                title="Report inaccurate or inappropriate content"
                              >
                                <Flag className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Note Narrative Body */}
                        <p className="text-gold-200/90 text-xs sm:text-[12.5px] leading-relaxed">
                          {comm.text}
                        </p>

                        {/* Classification & Source Citation */}
                        <div className="pt-2 border-t border-gold-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                          <div className="flex items-center gap-2">
                            <span className="text-gold-400 font-display font-semibold uppercase tracking-wider text-[10px]">
                              Classification:
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-md text-[10px] font-display ${
                                comm.isTraditionOrHistory === 'Documented History with Sources'
                                  ? 'bg-blue-500/15 text-blue-200 border border-blue-500/30'
                                  : 'bg-amber-500/15 text-amber-200 border border-amber-500/30'
                              }`}
                            >
                              {comm.isTraditionOrHistory}
                            </span>
                          </div>

                          {comm.sourceCitation && (
                            <div className="italic text-gold-300/75 flex items-center gap-1.5">
                              <BookOpen className="w-3 h-3 text-gold-400 shrink-0" />
                              <span>Citation: {comm.sourceCitation}</span>
                            </div>
                          )}
                        </div>

                        {isReported && (
                          <div className="text-[10px] text-amber-300 font-display flex items-center gap-1.5 pt-1">
                            <AlertTriangle className="w-3 h-3 text-amber-400" />
                            This submission was flagged by the community and is queued for verification against canonical archives.
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 px-6 border-t border-gold-500/15 bg-black/60 flex items-center justify-between text-xs font-body text-gold-300/60 shrink-0">
          <span>AUM Vishva Sanātana Saṅgha • Verified Demographic Archive</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-gold-500/20 text-gold-200 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
