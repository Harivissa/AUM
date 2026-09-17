import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  GitBranch,
  MapPin,
  ScrollText,
  Sparkles,
  Download,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Flame,
  Award,
} from 'lucide-react'
import { EPIC_LINEAGES, EpicLineage, FamilyNode } from '../data/epicLineages'
import { RAMAYANA_KANDAS, RamayanaKandaDetail } from '../data/ramayanaKandas'
import {
  MAHABHARATA_PARVAS,
  MahabharataParvaDetail,
  MAHABHARATA_AUTHOR,
} from '../data/mahabharataParvas'
import { RAMAYANA_AUTHOR } from '../data/ramayanaData'
import TiltCard3D from './TiltCard3D'
import CharacterGallery from './CharacterGallery'
import EpicAuthorSection from './EpicAuthorSection'
import ScriptureDetailReader from './ScriptureDetailReader'
import { downloadElementAsPdf, generateStructuredArticlePdf } from '../utils/pdfExport'
import { useLang } from '../i18n'

const RAMAYANA_PEOPLE = [
  'Śrī Rāma', 'Sītā', 'Lakṣmaṇa', 'Bharata', 'Śatrughna', 'Daśaratha',
  'Kausalyā', 'Kaikeyī', 'Sumitrā', 'Janaka', 'Urmilā', 'Hanumān',
  'Rāvaṇa', 'Vālmīki', 'Lava', 'Kuśa',
]

const MAHABHARATA_PEOPLE = [
  'Śāntanu', 'Gaṅgā', 'Satyavatī', 'Bhīṣma', 'Vyāsa', 'Dhṛtarāṣṭra',
  'Pāṇḍu', 'Vidura', 'Gāndhārī', 'Kuntī', 'Mādrī', 'Yudhiṣṭhira',
  'Bhīma', 'Arjuna', 'Nakula', 'Sahadeva', 'Duryodhana', 'Duḥśāsana',
  'Draupadī', 'Kṛṣṇa', 'Subhadrā', 'Abhimanyu', 'Parīkṣit', 'Karṇa',
]

function Lineage3D({ lineage }: { lineage: EpicLineage }) {
  const [selected, setSelected] = useState<FamilyNode | null>(lineage.nodes[0])
  const [fitToView, setFitToView] = useState(false)
  const byId = useMemo(() => Object.fromEntries(lineage.nodes.map((n) => [n.id, n])), [lineage.nodes])

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-5 mt-7">
      <div className="flex flex-col gap-3">
        {/* Controls Bar */}
        <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-black/40 border border-gold-500/15 font-body text-xs text-gold-300">
          <span className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-gold-400" />
            <span>{lineage.title} Relationship Map</span>
          </span>
          <button
            type="button"
            onClick={() => setFitToView((v) => !v)}
            className={`px-3 py-1 rounded-full border text-[11px] transition ${
              fitToView
                ? 'bg-gold-500/20 border-gold-400 text-gold-100'
                : 'bg-gold-500/10 border-gold-500/20 text-gold-300 hover:bg-gold-500/20'
            }`}
          >
            {fitToView ? 'Fit to View: On' : 'Fit to View: Auto'}
          </button>
        </div>

        {/* Tree Container Panel */}
        <div className="relative w-full min-h-[580px] sm:min-h-[640px] overflow-x-auto overflow-y-hidden rounded-3xl border border-gold-500/20 bg-[#05040b] p-4 sm:p-6 no-scrollbar">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,197,107,.08),transparent_65%)] pointer-events-none" />

          <div
            className={`relative mx-auto transition-all duration-300 ${
              fitToView ? 'w-full h-[540px]' : 'min-w-[680px] sm:min-w-full h-[580px] sm:h-[600px]'
            }`}
          >
            {/* SVG Connector Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {lineage.links.map((link, i) => {
                const a = byId[link.from]
                const b = byId[link.to]
                if (!a || !b) return null
                return (
                  <line
                    key={i}
                    x1={`${a.x}%`}
                    y1={`${a.y}%`}
                    x2={`${b.x}%`}
                    y2={`${b.y}%`}
                    stroke="rgba(232,197,107,0.35)"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                )
              })}
            </svg>

            {/* Tree Nodes */}
            {lineage.nodes.map((node) => {
              const isSelected = selected?.id === node.id
              const toneStyles =
                node.tone === 'gold'
                  ? 'border-gold-400 bg-gold-950/90 text-gold-100'
                  : node.tone === 'saffron'
                  ? 'border-saffron/50 bg-gold-950/80 text-gold-100'
                  : 'border-gold-500/20 bg-[#0b0913]/90 text-gold-200'

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelected(node)}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[110px] sm:w-[135px] min-h-[58px] px-2.5 py-2 rounded-2xl border text-center backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-105 hover:z-20 ${toneStyles} ${
                    isSelected
                      ? 'ring-2 ring-gold-400 shadow-[0_0_20px_rgba(232,197,107,0.3)] z-30'
                      : 'hover:border-gold-400/60'
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span className="font-display text-xs sm:text-sm font-bold block truncate">{node.name}</span>
                  <span className="font-body text-[9px] leading-tight text-gold-300/70 block mt-0.5 line-clamp-2">
                    {node.detail}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Selected Figure Details Panel */}
      <aside className="rounded-3xl border border-gold-500/20 bg-black/50 p-6 h-fit lg:sticky lg:top-24 shadow-xl">
        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
          <GitBranch className="w-4 h-4 text-gold-400" />
        </div>
        <p className="mt-4 font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Selected figure</p>
        <h4 className="mt-1 font-display text-2xl font-bold text-gold-100">{selected?.name}</h4>
        <p className="mt-2.5 font-body text-xs leading-relaxed text-gold-200/75">{selected?.detail}</p>
        <p className="mt-5 pt-4 border-t border-gold-500/15 font-body text-[10px] text-gold-400/60 italic">
          Select any node in the tree to inspect details and family connections.
        </p>
      </aside>
    </div>
  )
}

export default function EpicDetailPage({
  kind,
  onBack,
}: {
  kind: 'ramayana' | 'mahabharata'
  onBack: () => void
}) {
  const { lang, ui } = useLang()
  const currentLang = (ui || lang || 'en') as 'en' | 'te' | 'hi' | 'sa' | 'ta' | 'kn'

  const isRamayana = kind === 'ramayana'
  const lineage = EPIC_LINEAGES.find((item) => item.id === kind)!
  const title = isRamayana ? 'Rāmāyaṇa' : 'Mahābhārata'
  const sanskrit = isRamayana ? 'रामायणम्' : 'महाभारतम्'
  const authorProfile = isRamayana ? RAMAYANA_AUTHOR : MAHABHARATA_AUTHOR
  const authorName = authorProfile.name[currentLang] || authorProfile.name.en

  // Detailed Scripture Data
  const kandaList = RAMAYANA_KANDAS
  const parvaList = MAHABHARATA_PARVAS
  const scriptureItems = isRamayana ? kandaList : parvaList
  const divisionLabel = isRamayana ? 'Kāṇḍas' : 'Parvas'

  // Selected Section for deep reading view
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null)

  const people = isRamayana ? RAMAYANA_PEOPLE : MAHABHARATA_PEOPLE
  const places = isRamayana
    ? ['Ayodhyā', 'Mithilā', 'Daṇḍakāraṇya', 'Kiṣkindhā', 'Laṅkā']
    : ['Hastināpura', 'Indraprastha', 'Vāraṇāvata', 'Dvaitavana', 'Kurukṣetra', 'Dvārakā']

  const [isExporting, setIsExporting] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)

  // If a specific section is selected, render the dedicated ScriptureDetailReader!
  if (selectedSectionId) {
    const selectedItem = scriptureItems.find((item) => item.id === selectedSectionId)
    if (selectedItem) {
      const currentIndex = scriptureItems.findIndex((item) => item.id === selectedSectionId)
      return (
        <ScriptureDetailReader
          item={selectedItem}
          epicKind={kind}
          allCount={scriptureItems.length}
          currentIndex={currentIndex}
          onBack={() => {
            setSelectedSectionId(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          onNavigateByIndex={(newIdx) => {
            if (newIdx >= 0 && newIdx < scriptureItems.length) {
              setSelectedSectionId(scriptureItems[newIdx].id)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        />
      )
    }
  }

  const handleDownloadEpicPdf = async () => {
    if (isExporting) return
    setIsExporting(true)
    setExportSuccess(false)

    try {
      const filename = `${title}_Source_Authenticated_Study_Dossier`
      const targetId = 'epic-detail-study-content'

      const success = await downloadElementAsPdf(targetId, filename, {
        title: `${title} (${sanskrit})`,
        chamberLabel: `Itihāsa Archival Chamber · ${title}`,
        authorOrAttribution: `Traditionally attributed to ${authorName}`,
        provenanceSource: isRamayana
          ? 'Baroda Oriental Institute Critical Edition of Srimad Valmiki Ramayana (1960–1975)'
          : 'Bhandarkar Oriental Research Institute (BORI) Critical Edition of Mahabharata (1919–1966)',
      })

      if (!success) {
        // Fallback to structured vector PDF generator
        await generateStructuredArticlePdf(
          {
            title: `${title} (${sanskrit})`,
            sanskritTitle: sanskrit,
            category: 'Itihāsa Sacred Civilizational Epic',
            statusOrPeriod: isRamayana ? 'Baroda Critical Edition' : 'BORI Critical Edition',
            attribution: `Traditionally attributed to ${authorName}`,
            summary: isRamayana
              ? 'The epic chronicle of Śrī Rāma, composed in 24,000 verses across seven Kāṇḍas. It constitutes the archetypal narrative of Dharma, truth (Satya), righteous kingship (Rājadharma), filial devotion, and the cosmic balance of universal justice.'
              : 'The monumental civilizational epic in 100,000 verses across eighteen Parvas, containing the Bhagavad Gītā, exploring intricate moral quandaries, dynastic conflict, and universal duty.',
            details: `Structural Architecture: Comprises ${scriptureItems.length} ${divisionLabel}.\n\nPrincipal Figures: ${people.join(', ')}.\n\nSacred Geography: ${places.join(', ')}.`,
            sourceNotes: isRamayana
              ? 'Grounded in the Baroda Oriental Institute Critical Edition of Srimad Valmiki Ramayana.'
              : 'Grounded in the Bhandarkar Oriental Research Institute (BORI) Critical Edition of the Mahabharata.',
            provenance: isRamayana ? 'Baroda Oriental Institute' : 'BORI Pune Critical Edition',
            keyPoints: scriptureItems.map((item, idx) => ({
              label: `${divisionLabel.slice(0, -1)} ${idx + 1}: ${item.title[currentLang] || item.title.en}`,
              text: item.shortSummary[currentLang] || item.shortSummary.en,
            })),
          },
          filename
        )
      }

      setExportSuccess(true)
      setTimeout(() => setExportSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to generate Epic PDF:', err)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <main className="relative z-10 min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation & Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 font-body text-xs hover:bg-gold-500/10 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to AUM Universe
          </button>

          {/* Download as PDF Button */}
          <button
            type="button"
            onClick={handleDownloadEpicPdf}
            disabled={isExporting}
            title={`Download ${title} article and archival overview as PDF`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-semibold transition-all shadow-lg ${
              exportSuccess
                ? 'bg-emerald-500/20 border border-emerald-400/60 text-emerald-300'
                : 'bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-100 hover:border-gold-300 active:scale-95'
            }`}
          >
            {isExporting ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                <span>Generating {title} PDF...</span>
              </>
            ) : exportSuccess ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>PDF Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-gold-400" />
                <span>Download as PDF</span>
              </>
            )}
          </button>
        </div>

        {/* Exportable Study Content Container */}
        <div id="epic-detail-study-content" className="p-2 sm:p-4 rounded-3xl">
          <header className="text-center max-w-4xl mx-auto mt-9">
            <div className="flex justify-center items-center gap-3">
              <span className="h-px w-16 bg-gold-500/25" />
              <span className="font-deva text-2xl text-gold-400">ॐ</span>
              <span className="h-px w-16 bg-gold-500/25" />
            </div>
            <p className="mt-5 font-deva text-gold-400/80 text-xl">{sanskrit}</p>
            <h1 className="mt-1 font-display text-5xl sm:text-7xl font-semibold text-gold-100 text-glow">
              {title}
            </h1>
            <p className="mt-4 font-body text-sm sm:text-base text-gold-200/75">
              Traditionally attributed to {authorName}
            </p>
            <p className="mt-5 max-w-2xl mx-auto font-body text-sm leading-relaxed text-gold-300/70">
              {isRamayana
                ? 'The Ādi Kāvya of Sanātana civilization, setting forth the archetypal model of Maryādā Puruṣottama across 24,000 verses in seven sacred Kāṇḍas.'
                : 'The supreme encyclopedic epic of cosmic righteousness, statecraft, dynastic clash, and the divine wisdom of Śrīmad Bhagavad Gītā across 18 monumental Parvas.'}
            </p>

            {/* Offline Study & Critical Edition Badge */}
            <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-[11px] font-body text-gold-300">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>
                {isRamayana
                  ? 'Source-Authenticated · Baroda Oriental Institute Critical Edition'
                  : 'Source-Authenticated · BORI Critical Edition (Pune, 1919–1966)'}
              </span>
            </div>
          </header>

          {/* Quick Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <TiltCard3D intensity={5}>
              <div className="rounded-2xl border border-gold-500/20 bg-black/45 p-5">
                <BookOpen className="w-5 h-5 text-gold-400" />
                <p className="mt-4 font-body text-[10px] uppercase tracking-[0.16em] text-gold-400">Structure</p>
                <h3 className="font-display text-2xl text-gold-100 mt-1">
                  {scriptureItems.length} {divisionLabel}
                </h3>
                <p className="font-body text-xs text-gold-300/60 mt-1">
                  {isRamayana ? '500+ Sargas · ~24,000 Verses' : '1,995 Adhyāyas · ~89,000 Verses'}
                </p>
              </div>
            </TiltCard3D>
            <TiltCard3D intensity={5}>
              <div className="rounded-2xl border border-gold-500/20 bg-black/45 p-5">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <p className="mt-4 font-body text-[10px] uppercase tracking-[0.16em] text-gold-400">Principal figures</p>
                <h3 className="font-display text-2xl text-gold-100 mt-1">{people.length} indexed</h3>
                <p className="font-body text-xs text-gold-300/60 mt-1">Avatāras, Ṛṣis, Kings & Warriors</p>
              </div>
            </TiltCard3D>
            <TiltCard3D intensity={5}>
              <div className="rounded-2xl border border-gold-500/20 bg-black/45 p-5">
                <MapPin className="w-5 h-5 text-gold-400" />
                <p className="mt-4 font-body text-[10px] uppercase tracking-[0.16em] text-gold-400">Places</p>
                <h3 className="font-display text-2xl text-gold-100 mt-1">{places.length} featured</h3>
                <p className="font-body text-xs text-gold-300/60 mt-1">Sacred Geography of Bhāratavarṣa</p>
              </div>
            </TiltCard3D>
          </div>

          {/* Interactive Textual Architecture Grid (Kandas or Parvas) */}
          <section className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gold-500/15 pb-4">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold">
                  Scripture Library · Tap to Read
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-gold-100 mt-1">
                  The {scriptureItems.length} {divisionLabel} of the {title}
                </h2>
                <p className="font-body text-xs sm:text-sm text-gold-300/70 mt-1">
                  Select any {divisionLabel.slice(0, -1).toLowerCase()} card to open its dedicated reading chamber with verified storyline, canonical episodes, ślokas, and analysis.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadEpicPdf}
                  disabled={isExporting}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gold-500/25 bg-black/40 text-xs font-body text-gold-300 hover:text-gold-100 hover:border-gold-400 transition"
                >
                  <Download className="w-3.5 h-3.5 text-gold-400" />
                  <span>Download Architecture PDF</span>
                </button>
                <ScrollText className="w-7 h-7 text-gold-400/50" />
              </div>
            </div>

            {/* Clickable Grid Cards */}
            <div className={`grid gap-4 mt-8 ${isRamayana ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {scriptureItems.map((item, i) => {
                const itemTitle = item.title[currentLang] || item.title.en
                const itemMeaning = item.nameMeaning[currentLang] || item.nameMeaning.en
                const itemSummary = item.shortSummary[currentLang] || item.shortSummary.en
                const chapters = isRamayana
                  ? `${(item as RamayanaKandaDetail).sargasCount} Sargas`
                  : `${(item as MahabharataParvaDetail).adhyayasCount} Adhyāyas`

                const hasGita = (item as MahabharataParvaDetail).gitaConnection?.hasGita

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedSectionId(item.id)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="group text-left rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#110a22]/80 via-[#0a0614]/90 to-black/90 p-6 hover:border-gold-400/60 hover:shadow-[0_0_30px_rgba(232,197,107,0.15)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-gold-500/10 pb-3">
                        <span className="font-mono text-xs font-bold text-gold-400/80 group-hover:text-gold-300 transition">
                          {divisionLabel.slice(0, -1)} {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 font-body text-[10px] text-gold-300">
                          {chapters}
                        </span>
                      </div>

                      <p className="font-deva text-sm text-gold-400/90 mt-3">{item.sanskrit}</p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-100 group-hover:text-gold-200 transition mt-0.5">
                        {itemTitle}
                      </h3>
                      <p className="font-body text-xs text-gold-300/80 mt-1 line-clamp-1">
                        {itemMeaning}
                      </p>

                      {hasGita && (
                        <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-md bg-gold-500/20 border border-gold-400/40 text-[10px] font-body font-semibold text-gold-200">
                          <Flame className="w-3 h-3 text-gold-400" />
                          <span>Includes Śrīmad Bhagavad Gītā</span>
                        </div>
                      )}

                      <p className="font-body text-xs leading-relaxed text-gold-200/70 mt-3 line-clamp-3">
                        {itemSummary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gold-500/10 flex items-center justify-between text-xs font-body font-semibold text-gold-400 group-hover:text-gold-200 transition">
                      <span>Read {divisionLabel.slice(0, -1)}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                )
              })}
            </div>
          </section>

          {/* Author Section */}
          <EpicAuthorSection author={authorProfile} epicKind={kind} />

          {/* Scholarly Critical Edition Standards Card */}
          <section className="mt-16 rounded-3xl border border-gold-500/20 bg-[#07050e] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold block">
                  Scholarly Textual Recension
                </span>
                <h3 className="font-display text-2xl font-bold text-gold-100 mt-1">
                  {isRamayana
                    ? 'Baroda Oriental Institute Critical Edition of Vālmīki Rāmāyaṇa'
                    : 'Bhandarkar Oriental Research Institute (BORI) Critical Edition of Mahābhārata'}
                </h3>
                <p className="font-body text-xs sm:text-sm text-gold-200/80 mt-2 leading-relaxed">
                  {isRamayana
                    ? 'Published between 1960 and 1975 under general editors G. H. Bhatt, P. L. Vaidya, and U. P. Shah. The editors examined and collated 86 representative manuscripts across Northern (Śāradā, Nepālī, Maithilī, Bengālī, Devanāgarī) and Southern (Telugu, Grantha, Malayāḷam) recensions to reconstruct the oldest recoverable archetypal text.'
                    : 'Monumental 47-year academic undertaking (1919–1966) founded by V. S. Sukthankar and completed under S. K. Belvalkar and P. L. Vaidya. Collated 1,259 manuscripts across 19 regional scripts, establishing the 89,000-verse canonical Critical Edition as the world’s foremost scholarly authority on the epic.'}
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-[11px] font-mono text-gold-300/80">
                  <span className="px-2.5 py-1 rounded-lg bg-black/50 border border-gold-500/20">
                    {isRamayana ? '7 Kāṇḍas · 500+ Sargas' : '18 Parvas · 1,995 Adhyāyas'}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/50 border border-gold-500/20">
                    {isRamayana ? '~24,000 Verified Verses' : '~89,000 Collated Verses'}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/50 border border-gold-500/20">
                    No Spurious / Interpolated Ślokas
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Character Gallery (for Ramayana) */}
          {isRamayana && <CharacterGallery />}

          {/* Living Geography */}
          <section className="mt-16">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400">Living geography</p>
              <h2 className="font-display text-3xl sm:text-4xl text-gold-100 mt-1">Places in the Itihāsa</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
              {places.map((p) => (
                <div key={p} className="rounded-2xl border border-gold-500/15 bg-black/40 p-4">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <h3 className="mt-3 font-display text-lg text-gold-100">{p}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Lineage Tree */}
          <section className="mt-16">
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400">Interactive lineage</p>
            <h2 className="font-display text-3xl sm:text-4xl text-gold-100 mt-1">Family & Relationship Tree</h2>
            <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-gold-300/65">
              This is a deliberately simplified relationship view of principal figures, not an exhaustive genealogy. Select a node to inspect its entry. The interactive tree is contained inside a fixed viewport so the page itself never scrolls sideways.
            </p>
            <Lineage3D lineage={lineage} />
          </section>

          {/* Enduring Dharma Inquiries */}
          <section className="mt-16 rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#100a25]/75 to-black/55 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400">Dharma questions</p>
                <h2 className="font-display text-3xl text-gold-100 mt-1">What this chamber explores</h2>
              </div>
              <button
                type="button"
                onClick={handleDownloadEpicPdf}
                disabled={isExporting}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-gold-500/30 bg-gold-500/10 text-xs font-body text-gold-200 hover:text-gold-100 hover:border-gold-400 transition"
              >
                <Download className="w-3.5 h-3.5 text-gold-400" />
                <span>Save Full Study Guide (PDF)</span>
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {(isRamayana
                ? ['Rājadharma and duty', 'Truth, promise and sacrifice', 'Devotion, courage and righteous conduct']
                : ['Dharma under conflict', 'Duty, counsel and consequence', 'Kṛṣṇa’s teaching to Arjuna']
              ).map((x) => (
                <div key={x} className="rounded-2xl border border-gold-500/15 bg-black/35 p-4 font-body text-sm text-gold-200/75">
                  ✦ {x}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
