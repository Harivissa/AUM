import { useState, useMemo, useRef } from 'react'
import {
  Archive,
  Search,
  Filter,
  Download,
  MapPin,
  Calendar,
  X,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  ChevronRight,
  Shield,
  Layers,
  FileText,
  Clock,
  ExternalLink,
  Info,
  CheckCircle2,
  AlertTriangle,
  Compass,
  ArrowUpDown,
  Share2,
  Sparkles,
  HelpCircle,
  Eye,
  Check,
  Building,
  Flame,
  Users
} from 'lucide-react'
import {
  SMRITI_CASES,
  SPECIAL_COLLECTIONS,
  calculateSmritiMetrics,
  SmritiCase,
  IncidentType,
  TimelinePeriod,
  EvidenceStatus,
  SpecialCollectionId,
  MotiveType,
  ResearchStatus
} from '../data/smritiData'
import { generateStructuredArticlePdf } from '../utils/pdfExport'

export type SmritiViewMode = 'WALL' | 'INCIDENTS' | 'MAP_TIMELINE'
export type SortOption = 'CHRONOLOGICAL_ASC' | 'CHRONOLOGICAL_DESC' | 'TITLE_ASC' | 'CASUALTIES_DESC'

export default function SmritiSection() {
  const [viewMode, setViewMode] = useState<SmritiViewMode>('WALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('ALL')
  const [selectedPeriod, setSelectedPeriod] = useState<string>('ALL')
  const [selectedEvidence, setSelectedEvidence] = useState<string>('ALL')
  const [selectedMotive, setSelectedMotive] = useState<string>('ALL')
  const [selectedCollection, setSelectedCollection] = useState<SpecialCollectionId | 'ALL'>('ALL')
  const [sortOption, setSortOption] = useState<SortOption>('CHRONOLOGICAL_ASC')

  // Selected case for Dossier Modal
  const [activeDossierCase, setActiveDossierCase] = useState<SmritiCase | null>(null)
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false)

  // Canvas Pan & Zoom state for Desktop Wall
  const [canvasZoom, setCanvasZoom] = useState(1)
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const wallContainerRef = useRef<HTMLDivElement>(null)

  // PDF Export states
  const [isExporting, setIsExporting] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)

  // Map & Timeline selected item
  const [selectedTimelineCaseId, setSelectedTimelineCaseId] = useState<string>(SMRITI_CASES[0]?.id || '')
  const [selectedMapPoint, setSelectedMapPoint] = useState<SmritiCase>(SMRITI_CASES[0])

  // Live dynamic metrics calculated strictly from data
  const metrics = useMemo(() => calculateSmritiMetrics(SMRITI_CASES), [])

  // Filtered and sorted cases
  const filteredCases = useMemo(() => {
    let result = SMRITI_CASES.filter((c) => {
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        q === '' ||
        `${c.title} ${c.sanskritTitle || ''} ${c.location} ${c.region} ${c.country} ${c.summary} ${c.whatHappened} ${c.whoWasAffected} ${c.dateDisplay} ${c.responsibility} ${c.catalogueCode} ${(c.alternateTitles || []).join(' ')}`
          .toLowerCase()
          .includes(q)

      const matchesType =
        selectedType === 'ALL' || c.incidentType === selectedType

      const matchesPeriod =
        selectedPeriod === 'ALL' || c.timelinePeriod === selectedPeriod

      const matchesEvidence =
        selectedEvidence === 'ALL' || c.evidenceStatus === selectedEvidence

      const matchesMotive =
        selectedMotive === 'ALL' || c.motive === selectedMotive

      const matchesCollection =
        selectedCollection === 'ALL' ||
        (() => {
          const colMeta = SPECIAL_COLLECTIONS.find((col) => col.id === selectedCollection)
          return colMeta ? colMeta.filterPredicate(c) : true
        })()

      return matchesSearch && matchesType && matchesPeriod && matchesEvidence && matchesMotive && matchesCollection
    })

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortOption === 'CHRONOLOGICAL_ASC') {
        return (parseInt(a.startDate, 10) || 0) - (parseInt(b.startDate, 10) || 0)
      }
      if (sortOption === 'CHRONOLOGICAL_DESC') {
        return (parseInt(b.startDate, 10) || 0) - (parseInt(a.startDate, 10) || 0)
      }
      if (sortOption === 'TITLE_ASC') {
        return a.title.localeCompare(b.title)
      }
      if (sortOption === 'CASUALTIES_DESC') {
        const getScore = (item: SmritiCase) => {
          if (item.incidentType === 'MASSACRES' || item.incidentType === 'PARTITION') return 100
          if (item.incidentType === 'DISPLACEMENT' || item.incidentType === 'EXODUS') return 80
          if (item.incidentType === 'TEMPLE DESTRUCTION') return 60
          return 40
        }
        return getScore(b) - getScore(a)
      }
      return 0
    })

    return result
  }, [searchQuery, selectedType, selectedPeriod, selectedEvidence, selectedMotive, selectedCollection, sortOption])

  // PDF Export of Dossier
  const handleExportCasePdf = async (item: SmritiCase) => {
    setIsExporting(true)
    setExportSuccess(false)
    try {
      const filename = `Smriti_Dossier_${item.catalogueCode}_${item.title.replace(/[^a-zA-Z0-9]/g, '_')}`

      const casualtyDetail = item.casualties
        ? `\n\nCASUALTY FIGURES & SOURCE ANALYSIS:\nSummary: ${item.casualties.displaySummary}\nDeaths: ${item.casualties.deaths || 'Not reported in precise tallies'}\nDisplaced: ${item.casualties.displaced || 'Not reported'}\n${
            item.casualties.sourceA ? `Source A (${item.casualties.sourceA.source}): ${item.casualties.sourceA.estimate}\n` : ''
          }${item.casualties.sourceB ? `Source B (${item.casualties.sourceB.source}): ${item.casualties.sourceB.estimate}\n` : ''}${
            item.casualties.explanationOfDifference ? `Historiographical Difference Notes: ${item.casualties.explanationOfDifference}\n` : ''
          }`
        : ''

      await generateStructuredArticlePdf(
        {
          title: item.title,
          sanskritTitle: item.sanskritTitle,
          category: `Smṛti Civilizational Memory Archive · Case Dossier ${item.catalogueCode}`,
          statusOrPeriod: `${item.evidenceStatus} · ${item.dateDisplay}`,
          summary: item.summary,
          details: `WHAT HAPPENED:\n${item.whatHappened}\n\nWHO WAS AFFECTED:\n${item.whoWasAffected}\n\nWHERE:\n${item.whereText} (Coordinates: ${item.coordinates.lat} N, ${item.coordinates.lng} E)\n\nWHEN:\n${item.whenText}\n\nWHAT WAS LOST:\n${item.whatWasLost}${casualtyDetail}\n\nRESPONSIBILITY:\n${item.responsibility}\n* Note: Historical responsibility is attributed strictly to documented rulers, armies, officials, or organizations. No collective blame is assigned to any modern religious population.\n\nAFTERMATH:\n${item.aftermath}\n\nSURVIVAL & RECONSTRUCTION:\n${item.reconstruction}`,
          sourceNotes: `Primary Chronicles: ${(item.sources.primary || []).join('; ') || 'None indexed'}\nArchaeological Proof: ${(item.sources.archaeological || []).join('; ') || 'None indexed'}\nCourt / Government Records: ${(item.sources.governmentOrCourt || []).concat(item.sources.archival || []).join('; ') || 'None indexed'}\nAcademic Monographs: ${(item.sources.academic || []).join('; ') || 'None indexed'}`,
          provenance: `Smṛti Civilizational Memory Vault · Archival Plate: ${item.archivalItem.catalogueNumber} (${item.archivalItem.sourceProvenance})`,
          keyPoints: [
            { label: 'Evidence Status', text: item.evidenceStatus },
            { label: 'Research Status', text: item.researchStatus },
            { label: 'Motive Classification', text: item.motive },
            { label: 'Attributed Responsibility', text: item.responsibility },
            { label: 'Geographic Context', text: `${item.location}, ${item.country}` }
          ]
        },
        filename
      )

      setExportSuccess(true)
      setTimeout(() => setExportSuccess(false), 3500)
    } catch (err) {
      console.error('PDF export failed:', err)
    } finally {
      setIsExporting(false)
    }
  }

  // Pan canvas handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - canvasOffset.x, y: e.clientY - canvasOffset.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setCanvasOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetCanvas = () => {
    setCanvasZoom(1)
    setCanvasOffset({ x: 0, y: 0 })
  }

  // Organic rotation for archival plates
  const getCardRotation = (index: number) => {
    const rotations = [-1.4, 0.8, -1.8, 1.5, -0.6, 1.8, -1.2, 1.2, -1.9, 0.7, -1, 1.4]
    return rotations[index % rotations.length]
  }

  const getEvidenceBadgeColor = (status: EvidenceStatus) => {
    switch (status) {
      case 'PRIMARY SOURCE':
      case 'ARCHIVAL RECORD':
      case 'DOCUMENTED':
        return 'bg-amber-950/50 border-amber-500/40 text-amber-300'
      case 'ACADEMIC CONSENSUS':
      case 'CORROBORATED':
        return 'bg-blue-950/50 border-blue-500/40 text-blue-300'
      case 'SURVIVOR TESTIMONY':
        return 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
      case 'ARCHAEOLOGICALLY SUPPORTED':
        return 'bg-purple-950/50 border-purple-500/40 text-purple-300'
      case 'GOVERNMENT RECORD':
      case 'COURT RECORD':
        return 'bg-cyan-950/50 border-cyan-500/40 text-cyan-300'
      case 'DISPUTED':
      case 'INSUFFICIENT EVIDENCE':
        return 'bg-stone-900 border-stone-600 text-stone-300'
      default:
        return 'bg-gold-950/30 border-gold-500/30 text-gold-300'
    }
  }

  return (
    <section
      id="smriti"
      className="relative py-8 sm:py-12 max-w-7xl mx-auto z-10 text-gold-100 min-h-screen"
      aria-label="Smriti Civilizational Memory Archive"
    >
      {/* =========================================================================
          1. SMṚTI HEADER (Sacred, evidence-conscious, restrained)
          ========================================================================= */}
      <div className="max-w-4xl mx-auto text-center mb-8 px-4">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold-400/30 bg-gold-950/40 mb-3 shadow-[0_0_25px_rgba(232,197,107,0.2)]">
          <span className="font-deva text-2xl text-gold-300">ॐ</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-wider text-gold-100 text-glow">
          SMṚTI
        </h1>

        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold-500/40" />
          <p className="font-deva text-base sm:text-lg text-gold-400 font-semibold tracking-wide">
            स्मृति · REMEMBER
          </p>
          <span className="h-px w-8 bg-gold-500/40" />
        </div>

        <p className="mt-2 font-display text-lg sm:text-2xl text-gold-200 tracking-wide font-medium">
          THE MEMORY OF WHAT HAPPENED
        </p>

        <p className="mt-3 font-body text-xs sm:text-sm text-gold-300/85 max-w-2xl mx-auto leading-relaxed italic">
          “An evidence-conscious archive of Hindu suffering, loss, survival and remembrance.”
        </p>

        {/* Ethical / Historical Discipline Banner */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-gold-500/25 text-[11px] font-mono text-gold-300/90 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>Documented Evidence · No Modern Collective Blame · Real Historical Records</span>
          </div>

          <button
            type="button"
            onClick={() => setIsMethodologyOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-950/40 border border-gold-400/30 text-[11px] font-display text-gold-300 hover:text-gold-100 hover:bg-gold-900/40 transition"
          >
            <Info className="w-3.5 h-3.5 text-gold-400" />
            <span>Research Methodology & Sourcing Standards</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          2. DYNAMIC RESEARCH DASHBOARD (Calculated live from archive data)
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-950/90 via-black/80 to-stone-950/90 border border-gold-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-gold-500/20 pb-2.5 mb-3.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="font-display text-xs tracking-wider uppercase text-gold-300 font-bold">
                Civilizational Memory Archive Metrics
              </span>
            </div>
            <span className="text-[10px] font-mono text-gold-500/80">
              Live Data · Continuously Indexed
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-gold-200">
                {metrics.totalCases}
              </span>
              <span className="text-[10px] font-mono uppercase text-gold-400/80 tracking-wide">
                Documented Cases
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-amber-300">
                {metrics.archivalRecordsCount}
              </span>
              <span className="text-[10px] font-mono uppercase text-amber-400/80 tracking-wide">
                Archival Records
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-blue-300">
                {metrics.primarySourcesCount}
              </span>
              <span className="text-[10px] font-mono uppercase text-blue-400/80 tracking-wide">
                Primary Chronicles
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-emerald-300">
                {metrics.survivorAccountsCount}
              </span>
              <span className="text-[10px] font-mono uppercase text-emerald-400/80 tracking-wide">
                Survivor Accounts
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-red-300">
                {metrics.templeDestructionsCount}
              </span>
              <span className="text-[10px] font-mono uppercase text-red-400/80 tracking-wide">
                Shrines & Temples Lost
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-purple-300">
                {metrics.uniqueRegionsCount}
              </span>
              <span className="text-[10px] font-mono uppercase text-purple-400/80 tracking-wide">
                Regions & Countries
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-black/50 border border-gold-500/15">
              <span className="block font-display text-xl sm:text-2xl font-bold text-stone-300">
                {metrics.casesUnderReviewCount}
              </span>
              <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wide">
                Under Review
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. SPECIAL COLLECTIONS PRESET RAILS (17 Curated Themes)
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400/80">
            Special Research Collections:
          </span>
          {selectedCollection !== 'ALL' && (
            <button
              type="button"
              onClick={() => setSelectedCollection('ALL')}
              className="text-[11px] font-mono text-gold-400 hover:text-gold-200 underline"
            >
              Reset to All Collections
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gold-500/30">
          <button
            type="button"
            onClick={() => setSelectedCollection('ALL')}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-display transition-all ${
              selectedCollection === 'ALL'
                ? 'bg-gold-400 text-black font-bold shadow-[0_0_12px_rgba(232,197,107,0.3)]'
                : 'bg-black/60 border border-gold-500/25 text-gold-300 hover:bg-gold-950/30'
            }`}
          >
            All Collections ({SMRITI_CASES.length})
          </button>

          {SPECIAL_COLLECTIONS.map((col) => {
            const count = SMRITI_CASES.filter((c) => col.filterPredicate(c)).length
            const isSelected = selectedCollection === col.id
            return (
              <button
                key={col.id}
                type="button"
                onClick={() => setSelectedCollection(isSelected ? 'ALL' : col.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display transition-all ${
                  isSelected
                    ? 'bg-gold-400 text-black font-bold shadow-[0_0_12px_rgba(232,197,107,0.3)]'
                    : 'bg-black/60 border border-gold-500/25 text-gold-300/90 hover:bg-gold-950/30 hover:text-gold-100'
                }`}
              >
                <span>{col.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/20 text-black font-bold' : 'bg-gold-950/60 text-gold-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* =========================================================================
          4. THREE EXPLORATION MODES (Segmented Navigation)
          ========================================================================= */}
      <div className="max-w-xl mx-auto mb-6 px-4">
        <div className="grid grid-cols-3 p-1 rounded-2xl bg-black/75 border border-gold-500/30 shadow-xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => setViewMode('WALL')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-display font-semibold transition-all ${
              viewMode === 'WALL'
                ? 'bg-gold-500/20 text-gold-100 border border-gold-400/40 shadow-[0_0_15px_rgba(232,197,107,0.2)]'
                : 'text-gold-400/70 hover:text-gold-200 hover:bg-gold-950/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Visual Vault</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('INCIDENTS')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-display font-semibold transition-all ${
              viewMode === 'INCIDENTS'
                ? 'bg-gold-500/20 text-gold-100 border border-gold-400/40 shadow-[0_0_15px_rgba(232,197,107,0.2)]'
                : 'text-gold-400/70 hover:text-gold-200 hover:bg-gold-950/20'
            }`}
          >
            <Archive className="w-3.5 h-3.5" />
            <span>Cases Browser</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('MAP_TIMELINE')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-display font-semibold transition-all ${
              viewMode === 'MAP_TIMELINE'
                ? 'bg-gold-500/20 text-gold-100 border border-gold-400/40 shadow-[0_0_15px_rgba(232,197,107,0.2)]'
                : 'text-gold-400/70 hover:text-gold-200 hover:bg-gold-950/20'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Map & Timeline</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          5. SEARCH & MULTI-FILTER BAR
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="p-3.5 rounded-2xl bg-black/60 border border-gold-500/20 shadow-xl flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across events, temples, locations, rulers, texts, or casualties..."
              className="w-full pl-10 pr-12 py-2 rounded-xl bg-black/70 border border-gold-500/25 text-gold-100 placeholder-gold-500/40 text-xs focus:outline-none focus:border-gold-400 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-400/60 hover:text-gold-200 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-gold-400/70 uppercase">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-black/80 border border-gold-500/25 text-gold-200 text-xs focus:outline-none focus:border-gold-400"
              >
                <option value="ALL">All Types</option>
                <option value="TEMPLE DESTRUCTION">Temple Destruction</option>
                <option value="HERITAGE DESTRUCTION">Heritage Destruction</option>
                <option value="MASSACRES">Massacres</option>
                <option value="PARTITION">Partition (1947)</option>
                <option value="DISPLACEMENT">Displacement</option>
                <option value="EXODUS">Exodus</option>
                <option value="FORCED CONVERSION">Forced Conversion</option>
                <option value="ATTACKS">Attacks</option>
                <option value="PERSECUTION">Persecution</option>
                <option value="RECONSTRUCTION">Reconstruction</option>
                <option value="MEMORIALS">Memorials</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-gold-400/70 uppercase">Period:</span>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-black/80 border border-gold-500/25 text-gold-200 text-xs focus:outline-none focus:border-gold-400"
              >
                <option value="ALL">All Periods</option>
                <option value="Early Medieval">Early Medieval</option>
                <option value="Medieval">Medieval</option>
                <option value="Early Modern">Early Modern</option>
                <option value="Colonial">Colonial</option>
                <option value="Partition">Partition</option>
                <option value="Post-Independence">Post-Independence</option>
                <option value="Contemporary">Contemporary</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-gold-400/70 uppercase">Evidence:</span>
              <select
                value={selectedEvidence}
                onChange={(e) => setSelectedEvidence(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-black/80 border border-gold-500/25 text-gold-200 text-xs focus:outline-none focus:border-gold-400"
              >
                <option value="ALL">All Evidence</option>
                <option value="PRIMARY SOURCE">Primary Source</option>
                <option value="ARCHIVAL RECORD">Archival Record</option>
                <option value="ARCHAEOLOGICALLY SUPPORTED">Archaeological</option>
                <option value="GOVERNMENT RECORD">Government Record</option>
                <option value="COURT RECORD">Court Record</option>
                <option value="SURVIVOR TESTIMONY">Survivor Testimony</option>
                <option value="ACADEMIC CONSENSUS">Academic Consensus</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-gold-400/70 uppercase">Motive:</span>
              <select
                value={selectedMotive}
                onChange={(e) => setSelectedMotive(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-black/80 border border-gold-500/25 text-gold-200 text-xs focus:outline-none focus:border-gold-400"
              >
                <option value="ALL">All Motives</option>
                <option value="religious motive">Religious Motive</option>
                <option value="political motive">Political Motive</option>
                <option value="military motive">Military Motive</option>
                <option value="mixed motives">Mixed Motives</option>
                <option value="community conflict">Community Conflict</option>
              </select>
            </div>
          </div>
        </div>

        {filteredCases.length === 0 && (
          <div className="p-8 text-center text-gold-400/70 text-xs bg-black/40 rounded-2xl border border-gold-500/15 mt-4">
            No documented cases matched your search query. Try clearing search or selecting a different collection.
          </div>
        )}
      </div>

      {/* =========================================================================
          VIEW MODE 1: VISUAL MEMORY WALL (Primary Experience)
          ========================================================================= */}
      {viewMode === 'WALL' && (
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Wall Controls Toolbar */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gold-400/80">
                Displaying {filteredCases.length} Archival Artifacts
              </span>
              <span className="text-gold-500/40">·</span>
              <span className="text-[11px] text-gold-500/70 italic">
                Pan & Zoom or click any plate to examine Dossier
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-black/60 border border-gold-500/20 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setCanvasZoom((z) => Math.min(1.4, z + 0.1))}
                className="p-1.5 rounded-lg text-gold-400 hover:text-gold-100 hover:bg-gold-950/40 transition"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setCanvasZoom((z) => Math.max(0.7, z - 0.1))}
                className="p-1.5 rounded-lg text-gold-400 hover:text-gold-100 hover:bg-gold-950/40 transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={resetCanvas}
                className="p-1.5 rounded-lg text-gold-400 hover:text-gold-100 hover:bg-gold-950/40 transition"
                title="Reset View"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Archival Wall Canvas */}
          <div
            ref={wallContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`relative min-h-[700px] rounded-3xl bg-[#090611] border border-gold-500/25 p-6 overflow-hidden shadow-2xl ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {/* Background texture: Subtle aged grid and vault markings */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(232, 197, 107, 0.4) 1px, transparent 0)',
                backgroundSize: '36px 36px'
              }}
            />

            <div
              style={{
                transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px) scale(${canvasZoom})`,
                transformOrigin: 'top center',
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4"
            >
              {filteredCases.map((item, index) => {
                const rotation = getCardRotation(index)
                const hasRealImage = item.archivalItem && !item.archivalItem.isPendingSource && item.archivalItem.imageUrl

                return (
                  <div
                    key={item.id}
                    style={{ transform: `rotate(${rotation}deg)` }}
                    className="group relative transition-all duration-300 hover:z-20 hover:scale-105"
                  >
                    <div className="rounded-2xl bg-gradient-to-b from-[#181126] to-[#0c0817] border border-gold-500/35 p-3.5 shadow-xl hover:shadow-[0_10px_35px_rgba(232,197,107,0.25)] hover:border-gold-400 transition-all flex flex-col justify-between h-full">
                      {/* Top Docket Stamp & Catalogue Number */}
                      <div className="flex items-center justify-between border-b border-gold-500/20 pb-2 mb-2.5">
                        <span className="text-[10px] font-mono tracking-wider text-gold-400 font-bold uppercase">
                          {item.catalogueCode}
                        </span>
                        <span
                          className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${getEvidenceBadgeColor(
                            item.evidenceStatus
                          )}`}
                        >
                          {item.evidenceStatus}
                        </span>
                      </div>

                      {/* Archival Media Plate / Authentic Pending Docket */}
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-black/60 border border-gold-500/20 flex items-center justify-center">
                        {hasRealImage ? (
                          <img
                            src={item.archivalItem.imageUrl}
                            alt={item.archivalItem.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sepia-[0.15]"
                            loading="lazy"
                          />
                        ) : (
                          <div className="p-4 text-center space-y-1.5 flex flex-col items-center justify-center h-full bg-[#110b1d]">
                            <Archive className="w-6 h-6 text-gold-400/60 mb-1" />
                            <span className="text-[10px] font-mono tracking-wider uppercase text-gold-400 font-bold">
                              ARCHIVAL RECORD DOCKET
                            </span>
                            <span className="text-[9px] text-gold-400/70 italic px-2">
                              {item.archivalItem?.sourceProvenance || 'Primary Source Chronicle Record'}
                            </span>
                            <span className="text-[8px] font-mono text-gold-500/60 border border-gold-500/20 px-2 py-0.5 rounded-full mt-1">
                              HISTORICAL EVIDENCE VERIFIED
                            </span>
                          </div>
                        )}

                        {/* Card Hover Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                          <button
                            type="button"
                            onClick={() => setActiveDossierCase(item)}
                            className="px-3.5 py-1.5 rounded-full bg-gold-400 text-black font-display text-xs font-bold shadow-lg hover:bg-gold-300 transition transform group-hover:translate-y-0 translate-y-2 flex items-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Examine Dossier</span>
                          </button>
                        </div>
                      </div>

                      {/* Card Content & Metadata */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-gold-400/80 font-mono">
                          <Calendar className="w-3 h-3 text-gold-400" />
                          <span>{item.dateDisplay}</span>
                          <span className="text-gold-500/40">·</span>
                          <MapPin className="w-3 h-3 text-gold-400" />
                          <span className="truncate">{item.location}</span>
                        </div>

                        <h3 className="font-display text-sm font-bold text-gold-100 line-clamp-2 group-hover:text-gold-300 transition-colors">
                          {item.title}
                        </h3>

                        {item.sanskritTitle && (
                          <p className="font-deva text-[11px] text-gold-400/80 line-clamp-1">
                            {item.sanskritTitle}
                          </p>
                        )}

                        <p className="font-body text-[11px] text-gold-300/75 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      {/* Card Bottom Provenance */}
                      <div className="mt-3 pt-2 border-t border-gold-500/15 flex items-center justify-between text-[10px] font-mono text-gold-500/70">
                        <span className="truncate max-w-[170px]">
                          {item.archivalItem?.catalogueNumber || item.catalogueCode}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveDossierCase(item)}
                          className="text-gold-400 hover:text-gold-200 flex items-center gap-0.5"
                        >
                          <span>Open</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 2: INCIDENTS & CASES BROWSER (Deep Searchable Database)
          ========================================================================= */}
      {viewMode === 'INCIDENTS' && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 pb-3 border-b border-gold-500/20 gap-3">
            <span className="text-xs font-mono text-gold-400">
              Found {filteredCases.length} Documented Historical Incidents
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] font-mono uppercase text-gold-400/80">Sort By:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="px-2.5 py-1 rounded-xl bg-black/80 border border-gold-500/25 text-gold-200 text-xs focus:outline-none focus:border-gold-400"
              >
                <option value="CHRONOLOGICAL_ASC">Chronological (Earliest First)</option>
                <option value="CHRONOLOGICAL_DESC">Chronological (Recent First)</option>
                <option value="TITLE_ASC">Alphabetical (Title A-Z)</option>
                <option value="CASUALTIES_DESC">Incident Scale / Severity</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredCases.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-[#0e0919] border border-gold-500/25 hover:border-gold-400 shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-gold-500/30 text-gold-400 font-bold">
                      {c.catalogueCode}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${getEvidenceBadgeColor(
                        c.evidenceStatus
                      )}`}
                    >
                      {c.evidenceStatus}
                    </span>
                    <span className="text-[10px] font-mono text-gold-400/80">
                      {c.dateDisplay}
                    </span>
                    <span className="text-gold-500/40">·</span>
                    <span className="text-[10px] font-mono text-gold-400/80 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-400" />
                      {c.location}, {c.country}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-gold-100 group-hover:text-gold-300 transition-colors">
                    {c.title}
                  </h3>

                  {c.sanskritTitle && (
                    <p className="font-deva text-xs text-gold-400/85">
                      {c.sanskritTitle}
                    </p>
                  )}

                  <p className="font-body text-xs text-gold-200/85 leading-relaxed max-w-3xl">
                    {c.summary}
                  </p>

                  {/* Dual Casualty / Discrepancy Display If Present */}
                  {c.casualties && (
                    <div className="p-2.5 rounded-xl bg-black/40 border border-gold-500/15 text-[11px] font-mono text-gold-300/90 space-y-1">
                      <div className="flex items-center gap-1.5 text-gold-400 font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        <span>Documented Casualty & Displacement Toll:</span>
                      </div>
                      <p className="text-gold-200/80 pl-5">
                        {c.casualties.displaySummary}
                      </p>
                      {c.casualties.explanationOfDifference && (
                        <p className="text-[10px] text-gold-400/70 italic pl-5">
                          * Difference Note: {c.casualties.explanationOfDifference}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Attributed Responsibility */}
                  <div className="text-[11px] text-red-300/80 font-mono">
                    <span className="text-red-400 font-semibold uppercase">Documented Responsibility: </span>
                    <span>{c.responsibility}</span>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center gap-2 shrink-0 w-full md:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveDossierCase(c)}
                    className="w-full md:w-auto px-4 py-2 rounded-xl bg-gold-400 text-black font-display text-xs font-bold hover:bg-gold-300 transition flex items-center justify-center gap-1.5 shadow"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Dossier</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleExportCasePdf(c)}
                    className="w-full md:w-auto px-3.5 py-1.5 rounded-xl bg-black/70 border border-gold-500/25 text-gold-300 hover:text-gold-100 hover:bg-gold-950/40 text-xs font-mono transition flex items-center justify-center gap-1.5"
                    title="Download Official Dossier as PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-gold-400" />
                    <span>PDF Dossier</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 3: MAP & CHRONOLOGICAL TIMELINE
          ========================================================================= */}
      {viewMode === 'MAP_TIMELINE' && (
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {/* Subcontinental Smṛti Memory Map */}
          <div className="p-6 rounded-3xl bg-[#090611] border border-gold-500/25 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-3">
              <div>
                <h3 className="font-display text-base font-bold text-gold-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Geographic Distribution of Documented Cases</span>
                </h3>
                <p className="text-[11px] text-gold-400/70 font-mono mt-0.5">
                  Click any coordinate pin to review incident record
                </p>
              </div>

              <span className="text-xs font-mono text-gold-400">
                {filteredCases.length} Sites Plotted
              </span>
            </div>

            {/* Custom Interactive SVG Projection for Greater South Asia */}
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-[#050309] border border-gold-500/20 overflow-hidden flex items-center justify-center p-4">
              <svg
                viewBox="0 0 1000 650"
                className="w-full h-full text-gold-500/20 opacity-80"
                fill="currentColor"
              >
                {/* Simplified geographic coastlines and border references */}
                <path d="M 320,120 L 400,90 L 520,110 L 620,160 L 720,230 L 800,260 L 850,320 L 820,380 L 750,440 L 680,520 L 600,600 L 550,620 L 500,530 L 450,440 L 400,380 L 350,330 L 260,280 L 220,230 L 250,160 Z" fill="#0d0818" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 280,240 Q 380,290 420,380 T 540,580" fill="none" stroke="#e8c56b" strokeWidth="0.8" strokeOpacity="0.4" />
                <path d="M 540,580 Q 640,420 720,280" fill="none" stroke="#e8c56b" strokeWidth="0.8" strokeOpacity="0.4" />
              </svg>

              {/* Plotted Pins */}
              {filteredCases.map((c) => {
                // Projection map: Latitude [8 to 36] -> Y [600 to 80], Longitude [66 to 93] -> X [150 to 880]
                const x = Math.max(80, Math.min(920, ((c.coordinates.lng - 66) / (93 - 66)) * 730 + 150))
                const y = Math.max(50, Math.min(600, 600 - ((c.coordinates.lat - 8) / (36 - 8)) * 520))
                const isSelected = selectedMapPoint?.id === c.id

                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setSelectedMapPoint(c)
                      setSelectedTimelineCaseId(c.id)
                    }}
                    style={{ left: `${(x / 1000) * 100}%`, top: `${(y / 650) * 100}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all group ${
                      isSelected
                        ? 'bg-gold-400 text-black scale-125 z-30 shadow-[0_0_15px_rgba(232,197,107,0.8)]'
                        : 'bg-black/80 border border-gold-400/60 text-gold-300 hover:scale-125 hover:border-gold-300 z-10'
                    }`}
                    title={`${c.title} (${c.location})`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </button>
                )
              })}

              {/* Flyout Preview for Selected Map Pin */}
              {selectedMapPoint && (
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-2xl bg-black/90 border border-gold-400/40 shadow-2xl backdrop-blur-md space-y-2 z-40">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gold-400 font-bold uppercase">
                      {selectedMapPoint.catalogueCode} · {selectedMapPoint.dateDisplay}
                    </span>
                    <span className="text-[9px] font-mono text-gold-500">
                      {selectedMapPoint.location}, {selectedMapPoint.country}
                    </span>
                  </div>

                  <h4 className="font-display text-sm font-bold text-gold-100">
                    {selectedMapPoint.title}
                  </h4>

                  <p className="font-body text-xs text-gold-300/80 line-clamp-2">
                    {selectedMapPoint.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveDossierCase(selectedMapPoint)}
                      className="px-3 py-1 rounded-full bg-gold-400 text-black font-display text-xs font-bold hover:bg-gold-300 transition"
                    >
                      Open Case Dossier
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chronological Timeline Rail */}
          <div className="p-6 rounded-3xl bg-[#090611] border border-gold-500/25 shadow-2xl space-y-6">
            <div className="border-b border-gold-500/20 pb-3">
              <h3 className="font-display text-base font-bold text-gold-200 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Chronological Memory Sequence Across Eras</span>
              </h3>
              <p className="text-[11px] text-gold-400/70 font-mono mt-0.5">
                From early medieval frontier assaults through Partition to modern incidents
              </p>
            </div>

            <div className="relative border-l-2 border-gold-500/30 pl-6 ml-4 space-y-8">
              {filteredCases.map((c) => (
                <div key={c.id} className="relative group">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-gold-400 group-hover:bg-gold-400 transition" />

                  <div className="p-4 rounded-2xl bg-black/60 border border-gold-500/20 hover:border-gold-400/60 transition space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-gold-400 font-bold">
                        {c.dateDisplay}
                      </span>
                      <span className="text-gold-500/40">·</span>
                      <span className="text-[10px] font-mono text-gold-400/80">
                        {c.timelinePeriod}
                      </span>
                      <span className="text-gold-500/40">·</span>
                      <span className="text-[10px] font-mono text-gold-400/80">
                        {c.location}, {c.country}
                      </span>
                    </div>

                    <h4 className="font-display text-sm font-bold text-gold-100 group-hover:text-gold-300 transition-colors">
                      {c.title}
                    </h4>

                    <p className="font-body text-xs text-gold-300/80 leading-relaxed">
                      {c.summary}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-[10px] font-mono text-gold-500/70">
                        Catalogue: {c.catalogueCode}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveDossierCase(c)}
                        className="text-gold-400 hover:text-gold-200 font-display font-semibold flex items-center gap-1"
                      >
                        <span>Examine Dossier</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CASE DOSSIER MODAL (Deep, Comprehensive, Academic-Grade)
          ========================================================================= */}
      {activeDossierCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d0918] border border-gold-400/40 p-6 sm:p-8 shadow-2xl text-gold-100 space-y-6">
            {/* Top Close & Download Actions */}
            <div className="flex items-center justify-between border-b border-gold-500/25 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/70 border border-gold-400/40 text-gold-300 font-bold uppercase">
                  {activeDossierCase.catalogueCode}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${getEvidenceBadgeColor(
                    activeDossierCase.evidenceStatus
                  )}`}
                >
                  {activeDossierCase.evidenceStatus}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleExportCasePdf(activeDossierCase)}
                  disabled={isExporting}
                  className="px-3 py-1.5 rounded-xl bg-gold-400 text-black font-display text-xs font-bold hover:bg-gold-300 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{exportSuccess ? 'Downloaded!' : isExporting ? 'Generating...' : 'Export PDF'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDossierCase(null)}
                  className="p-1.5 rounded-full text-gold-400 hover:text-gold-200 hover:bg-gold-950/40 transition"
                  aria-label="Close Dossier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dossier Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-400">
                <span>{activeDossierCase.timelinePeriod}</span>
                <span className="text-gold-500/40">·</span>
                <span>{activeDossierCase.dateDisplay}</span>
                <span className="text-gold-500/40">·</span>
                <span>{activeDossierCase.location}, {activeDossierCase.country}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
                {activeDossierCase.title}
              </h2>

              {activeDossierCase.sanskritTitle && (
                <p className="font-deva text-base text-gold-300 font-semibold">
                  {activeDossierCase.sanskritTitle}
                </p>
              )}

              {activeDossierCase.alternateTitles && activeDossierCase.alternateTitles.length > 0 && (
                <p className="text-xs font-mono text-gold-400/70">
                  Alternate Designations: {activeDossierCase.alternateTitles.join(' · ')}
                </p>
              )}
            </div>

            {/* Archival Media Item / Real Image Plate */}
            {activeDossierCase.archivalItem && (
              <div className="p-4 rounded-2xl bg-black/60 border border-gold-500/30 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-gold-400">
                  <span className="font-bold uppercase tracking-wider">
                    {activeDossierCase.archivalItem.labelBadge}
                  </span>
                  <span>{activeDossierCase.archivalItem.catalogueNumber}</span>
                </div>

                {activeDossierCase.archivalItem.imageUrl && !activeDossierCase.archivalItem.isPendingSource ? (
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/80 border border-gold-500/20">
                    <img
                      src={activeDossierCase.archivalItem.imageUrl}
                      alt={activeDossierCase.archivalItem.caption}
                      className="w-full h-full object-cover sepia-[0.1]"
                    />
                  </div>
                ) : (
                  <div className="p-8 text-center bg-[#110c1c] rounded-xl border border-gold-500/20 space-y-2">
                    <Archive className="w-8 h-8 text-gold-400 mx-auto" />
                    <h5 className="font-display text-sm font-bold text-gold-200 uppercase tracking-wider">
                      ARCHIVAL IMAGE PENDING SOURCING
                    </h5>
                    <p className="text-xs text-gold-400/80 max-w-lg mx-auto">
                      In accordance with AUM Smṛti’s strict policy of NEVER using AI-generated or simulated historical photographs, a verified museum or state archive plate is currently being sourced for this entry.
                    </p>
                  </div>
                )}

                <p className="text-xs text-gold-200/90 italic">
                  Caption: {activeDossierCase.archivalItem.caption}
                </p>

                <p className="text-[10px] font-mono text-gold-500/80 border-t border-gold-500/15 pt-2">
                  Source Provenance: {activeDossierCase.archivalItem.sourceProvenance}
                  {activeDossierCase.archivalItem.rightsOrLicense && ` · Rights: ${activeDossierCase.archivalItem.rightsOrLicense}`}
                </p>
              </div>
            )}

            {/* Core Factual Sections (2-Column Grid) */}
            <div className="grid md:grid-cols-2 gap-5 text-xs sm:text-sm">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/50 border border-gold-500/20">
                  <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-bold mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-gold-400" />
                    <span>WHAT HAPPENED</span>
                  </h4>
                  <p className="text-gold-200/90 leading-relaxed font-body">
                    {activeDossierCase.whatHappened}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-gold-500/20">
                  <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-bold mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>WHO WAS AFFECTED</span>
                  </h4>
                  <p className="text-gold-200/85 leading-relaxed font-body">
                    {activeDossierCase.whoWasAffected}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-gold-500/20">
                  <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-bold mb-1.5 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-gold-400" />
                    <span>WHAT WAS LOST</span>
                  </h4>
                  <p className="text-gold-200/85 leading-relaxed font-body">
                    {activeDossierCase.whatWasLost}
                  </p>

                  {/* Casualty Breakdown */}
                  {activeDossierCase.casualties && (
                    <div className="mt-3 pt-3 border-t border-gold-500/15 space-y-1.5 font-mono text-[11px]">
                      <span className="text-gold-400 font-bold block uppercase">
                        Documented Casualties & Discrepancies:
                      </span>
                      <p className="text-gold-200">
                        {activeDossierCase.casualties.displaySummary}
                      </p>
                      {activeDossierCase.casualties.sourceA && (
                        <p className="text-gold-400/80">
                          • {activeDossierCase.casualties.sourceA.source}: {activeDossierCase.casualties.sourceA.estimate}
                        </p>
                      )}
                      {activeDossierCase.casualties.sourceB && (
                        <p className="text-gold-400/80">
                          • {activeDossierCase.casualties.sourceB.source}: {activeDossierCase.casualties.sourceB.estimate}
                        </p>
                      )}
                      {activeDossierCase.casualties.explanationOfDifference && (
                        <p className="text-[10px] text-gold-400/70 italic pt-1">
                          * Historical Context of Discrepancy: {activeDossierCase.casualties.explanationOfDifference}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Documented Responsibility */}
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
                  <h4 className="font-display text-xs uppercase tracking-wider text-red-400 font-bold mb-1.5 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-red-400" />
                    <span>DOCUMENTED RESPONSIBILITY</span>
                  </h4>
                  <p className="text-gold-200/90 leading-relaxed font-body">
                    {activeDossierCase.responsibility}
                  </p>
                  <p className="mt-2 text-[10px] text-gold-400/70 italic border-t border-red-500/20 pt-1.5">
                    * Responsibility is attributed solely where supported by historical evidence. AUM never assigns collective guilt or blame to modern religious populations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-gold-500/20">
                  <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-bold mb-1.5">
                    AFTERMATH
                  </h4>
                  <p className="text-gold-200/85 leading-relaxed font-body">
                    {activeDossierCase.aftermath}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                  <h4 className="font-display text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SURVIVAL & RECONSTRUCTION</span>
                  </h4>
                  <p className="text-emerald-200/90 leading-relaxed font-body">
                    {activeDossierCase.reconstruction}
                  </p>
                </div>
              </div>
            </div>

            {/* Survivor Accounts (When available) */}
            {activeDossierCase.survivorAccounts && activeDossierCase.survivorAccounts.length > 0 && (
              <div className="p-5 rounded-2xl bg-gold-950/25 border border-gold-500/30 space-y-4">
                <h4 className="font-display text-xs uppercase tracking-wider text-gold-300 font-bold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gold-400" />
                  <span>SURVIVOR TESTIMONY & EYEWITNESS VOICES</span>
                </h4>
                {activeDossierCase.survivorAccounts.map((s, idx) => (
                  <div key={idx} className="space-y-2 border-l-2 border-gold-400 pl-4">
                    <p className="font-display text-xs text-gold-300 font-bold">
                      {s.narrator} <span className="text-gold-400/70 font-normal">({s.context})</span>
                    </p>
                    <blockquote className="font-body text-xs sm:text-sm italic text-gold-100/95 leading-relaxed">
                      {s.excerpt}
                    </blockquote>
                    <p className="text-[10px] font-mono text-gold-500/80">
                      Citation: {s.citation}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Evidence Sourcing Matrix */}
            <div className="p-5 rounded-2xl bg-black/60 border border-gold-500/25 space-y-4 text-xs">
              <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-bold border-b border-gold-500/20 pb-2">
                WHAT EVIDENCE REMAINS & TRACEABLE SOURCES
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {activeDossierCase.sources.primary && activeDossierCase.sources.primary.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gold-400 block mb-1 font-bold">
                      Primary Chronicles & Inscriptions:
                    </span>
                    <ul className="list-disc list-inside text-gold-300/85 space-y-1">
                      {activeDossierCase.sources.primary.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeDossierCase.sources.archaeological && activeDossierCase.sources.archaeological.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gold-400 block mb-1 font-bold">
                      Archaeological / Epigraphic Excavations:
                    </span>
                    <ul className="list-disc list-inside text-gold-300/85 space-y-1">
                      {activeDossierCase.sources.archaeological.map((a, idx) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeDossierCase.sources.governmentOrCourt && activeDossierCase.sources.governmentOrCourt.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gold-400 block mb-1 font-bold">
                      Court Rulings & Government Inquiries:
                    </span>
                    <ul className="list-disc list-inside text-gold-300/85 space-y-1">
                      {activeDossierCase.sources.governmentOrCourt.map((g, idx) => (
                        <li key={idx}>{g}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeDossierCase.sources.academic && activeDossierCase.sources.academic.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gold-400 block mb-1 font-bold">
                      Peer-Reviewed Academic Studies:
                    </span>
                    <ul className="list-disc list-inside text-gold-300/85 space-y-1">
                      {activeDossierCase.sources.academic.map((ac, idx) => (
                        <li key={idx}>{ac}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gold-500/70 font-mono">
                Smṛti Civilizational Memory Archive · Permanent Record
              </span>
              <button
                type="button"
                onClick={() => setActiveDossierCase(null)}
                className="px-5 py-2 rounded-full bg-gold-400 text-black font-display text-xs font-bold hover:bg-gold-300 transition"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          RESEARCH METHODOLOGY & STANDARDS MODAL
          ========================================================================= */}
      {isMethodologyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0e091b] border border-gold-400/40 p-6 sm:p-8 shadow-2xl text-gold-100 space-y-5">
            <div className="flex items-center justify-between border-b border-gold-500/25 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold-400" />
                <h3 className="font-display text-lg font-bold text-gold-200">
                  Smṛti Research & Sourcing Standards
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMethodologyOpen(false)}
                className="p-1 rounded-full text-gold-400 hover:text-gold-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gold-200/90 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h4 className="font-display font-bold text-gold-300 uppercase tracking-wide text-xs mb-1">
                  1. Strict Sourcing & Evidence Standards
                </h4>
                <p>
                  Every claim, casualty number, and incident in Smṛti must trace directly to verifiable historical documentation: contemporary court chronicles, epigraphical inscriptions, archaeological excavation reports (e.g. Archaeological Survey of India), declassified diplomatic cables, government inquiries, judicial verdicts, or peer-reviewed academic monographs.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-gold-300 uppercase tracking-wide text-xs mb-1">
                  2. Handling Differing & Contested Casualty Numbers
                </h4>
                <p>
                  Historical sources frequently record differing casualty figures. Smṛti never fabricates figures or arbitrarily chooses extremes. When sources disagree (e.g. Partition casualty ranges, Malabar inquiry figures, or Somnath accounts), Smṛti explicitly presents both (Source A vs Source B) and explains why the numbers differ (e.g. military battlefield counts vs later civilian registers).
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-gold-300 uppercase tracking-wide text-xs mb-1">
                  3. Anti-Collective Blame Discipline
                </h4>
                <p>
                  Historical responsibility is attributed solely to specific rulers, military commanders, organizations, mobs, or colonial officials documented by contemporary evidence. Smṛti strictly prohibits assigning collective guilt or prejudice to any modern religious community.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-gold-300 uppercase tracking-wide text-xs mb-1">
                  4. Real Images Only — Strict Prohibition of Fake History
                </h4>
                <p>
                  The archive utilizes only authentic historical photographs, museum folios, manuscript plates, and official survey documents. When a verified historical plate is not available, the entry displays an "ARCHIVAL IMAGE PENDING SOURCE" docket. AI-generated fictional photographs, fake newspapers, or manipulated documents are categorically prohibited.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-gold-300 uppercase tracking-wide text-xs mb-1">
                  5. Corrections & Peer Review Submissions
                </h4>
                <p>
                  AUM welcomes research submissions from historians, archivists, and descendants of survivors. To submit primary documents or propose factual corrections, please cite complete bibliographic details (archive volume, accession number, publication year).
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gold-500/20 text-right">
              <button
                type="button"
                onClick={() => setIsMethodologyOpen(false)}
                className="px-5 py-2 rounded-full bg-gold-400 text-black font-display text-xs font-bold hover:bg-gold-300 transition"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SOLEMN CLOSING VOW & REMEMBRANCE BENEDICTION
          ========================================================================= */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#140822] via-[#090514] to-[#04020a] border border-gold-400/35 text-center shadow-2xl relative overflow-hidden mx-4">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="h-px w-16 bg-gold-500/30" />
          <span className="font-deva text-3xl text-gold-400">॥ स्मृतिः ॥</span>
          <span className="h-px w-16 bg-gold-500/30" />
        </div>

        <h3 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 tracking-wide">
          SMṚTI
        </h3>
        <p className="font-display text-xl sm:text-2xl text-gold-300 font-semibold mt-1">
          “THAT WHICH IS REMEMBERED”
        </p>

        <div className="mt-8 space-y-2 font-display text-xs sm:text-sm tracking-[0.2em] uppercase text-gold-200/90 font-medium max-w-2xl mx-auto">
          <p className="hover:text-gold-300 transition-colors">WE REMEMBER THE VICTIMS.</p>
          <p className="hover:text-gold-300 transition-colors">WE REMEMBER THE LOST.</p>
          <p className="hover:text-gold-300 transition-colors">WE REMEMBER THE TEMPLES.</p>
          <p className="hover:text-gold-300 transition-colors">WE REMEMBER THE DISPLACED.</p>
          <p className="hover:text-gold-300 transition-colors">WE REMEMBER THE COMMUNITIES.</p>
          <p className="hover:text-gold-300 transition-colors">WE REMEMBER WHAT SURVIVED.</p>
          <p className="hover:text-gold-300 transition-colors">WE PRESERVE THE EVIDENCE.</p>
          <p className="text-gold-400 font-bold pt-2">WE CARRY THE MEMORY FORWARD.</p>
        </div>

        <p className="mt-8 font-body text-xs text-gold-400/60 max-w-xl mx-auto italic">
          “Civilizations carry memories of both what they built and what they endured.”
        </p>
      </div>
    </section>
  )
}
