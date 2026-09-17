import { useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  MapPin,
  Users,
  HelpCircle,
  ScrollText,
  Flame,
} from 'lucide-react'
import { RamayanaKandaDetail } from '../data/ramayanaKandas'
import { MahabharataParvaDetail } from '../data/mahabharataParvas'
import { useLang } from '../i18n'
import { downloadElementAsPdf, generateStructuredArticlePdf } from '../utils/pdfExport'

interface ScriptureDetailReaderProps {
  item: RamayanaKandaDetail | MahabharataParvaDetail
  epicKind: 'ramayana' | 'mahabharata'
  allCount: number
  currentIndex: number
  onBack: () => void
  onNavigateByIndex: (newIndex: number) => void
  onSelectCharacter?: (charName: string) => void
}

export default function ScriptureDetailReader({
  item,
  epicKind,
  allCount,
  currentIndex,
  onBack,
  onNavigateByIndex,
  onSelectCharacter,
}: ScriptureDetailReaderProps) {
  const { lang, ui } = useLang()
  const currentLang = (ui || lang || 'en') as keyof typeof item.title

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)

  const isRamayana = epicKind === 'ramayana'
  const isMahabharata = epicKind === 'mahabharata'

  // Locations / Places unified list
  const placesList = item.importantPlaces

  // Type guards and unified properties
  const titleText = item.title[currentLang] || item.title.en
  const meaningText = item.nameMeaning[currentLang] || item.nameMeaning.en
  const summaryText = item.shortSummary[currentLang] || item.shortSummary.en
  const sourceNotesText = item.sourceNotes[currentLang] || item.sourceNotes.en

  const divisionUnit = isRamayana ? 'Kāṇḍa' : 'Parva'
  const chapterUnit = isRamayana ? 'Sargas' : 'Adhyāyas'
  const chaptersCount = isRamayana
    ? (item as RamayanaKandaDetail).sargasCount
    : (item as MahabharataParvaDetail).adhyayasCount

  const epicTitle = isRamayana ? 'Rāmāyaṇa' : 'Mahābhārata'
  const epicSanskrit = isRamayana ? 'रामायणम्' : 'महाभारतम्'
  const standardLabel = isRamayana
    ? 'Baroda Oriental Institute Critical Edition'
    : 'Bhandarkar Oriental Research Institute (BORI) Critical Edition'

  const handleCopySloka = (text: string, idx: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(idx)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleDownloadPdf = async () => {
    if (isExporting) return
    setIsExporting(true)
    setExportSuccess(false)

    try {
      const filename = `${epicTitle}_${divisionUnit}_${item.number}_${item.id}_Study_Dossier`
      const targetId = 'scripture-reader-printable-container'

      const success = await downloadElementAsPdf(targetId, filename, {
        title: `${item.number}. ${titleText} (${item.sanskrit})`,
        chamberLabel: `Itihāsa Scripture Archive · ${epicTitle}`,
        authorOrAttribution: isRamayana
          ? 'Maharṣi Vālmīki (Baroda Critical Edition)'
          : 'Maharṣi Kṛṣṇa Dvaipāyana Vyāsa (BORI Pune Critical Edition)',
        provenanceSource: standardLabel,
      })

      if (!success) {
        // Structured fallback PDF
        await generateStructuredArticlePdf(
          {
            title: `${divisionUnit} ${item.number}: ${titleText} (${item.sanskrit})`,
            sanskritTitle: item.sanskrit,
            category: `${epicTitle} Sacred Textual Division`,
            statusOrPeriod: `${standardLabel} Standard`,
            attribution: isRamayana ? 'Maharṣi Vālmīki' : 'Maharṣi Kṛṣṇa Dvaipāyana Vyāsa',
            summary: summaryText,
            details: `Division Meaning: ${meaningText}\n\nArchitecture: ${chaptersCount} ${chapterUnit}, ~${item.slokasCountApprox.toLocaleString()} Verses.\n\nPrincipal Characters: ${item.mainCharacters.join(', ')}.\n\nPlaces: ${placesList.map((p) => p[currentLang] || p.en).join(', ')}.`,
            sourceNotes: sourceNotesText,
            provenance: standardLabel,
            keyPoints: item.completeStoryline.map((step, idx) => ({
              label: `Episode ${idx + 1}`,
              text: step[currentLang] || step.en,
            })),
          },
          filename
        )
      }

      setExportSuccess(true)
      setTimeout(() => setExportSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to export scripture section PDF:', err)
    } finally {
      setIsExporting(false)
    }
  }

  // Check for Gītā in Mahābhārata
  const gitaInfo = (item as MahabharataParvaDetail).gitaConnection

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/25 bg-black/40 text-gold-300 font-body text-xs hover:bg-gold-500/10 hover:text-gold-100 transition shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to {epicTitle} Overview
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Previous Section */}
            <button
              type="button"
              disabled={currentIndex <= 0}
              onClick={() => onNavigateByIndex(currentIndex - 1)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-body transition ${
                currentIndex <= 0
                  ? 'border-gold-500/10 bg-black/20 text-gold-500/30 cursor-not-allowed'
                  : 'border-gold-500/25 bg-black/40 text-gold-300 hover:bg-gold-500/15 hover:text-gold-100'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Position indicator */}
            <span className="font-mono text-xs text-gold-400/80 px-2">
              {item.number} / {allCount}
            </span>

            {/* Next Section */}
            <button
              type="button"
              disabled={currentIndex >= allCount - 1}
              onClick={() => onNavigateByIndex(currentIndex + 1)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-body transition ${
                currentIndex >= allCount - 1
                  ? 'border-gold-500/10 bg-black/20 text-gold-500/30 cursor-not-allowed'
                  : 'border-gold-500/25 bg-black/40 text-gold-300 hover:bg-gold-500/15 hover:text-gold-100'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Download PDF Button */}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              title={`Download ${titleText} as PDF`}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-semibold transition-all shadow-md ml-2 ${
                exportSuccess
                  ? 'bg-emerald-500/20 border border-emerald-400/60 text-emerald-300'
                  : 'bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-100 active:scale-95'
              }`}
            >
              {isExporting ? (
                <>
                  <div className="w-3 h-3 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                  <span className="hidden md:inline">Preparing PDF...</span>
                </>
              ) : exportSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-gold-400" />
                  <span>Download as PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Exportable Printable Content Container */}
        <div id="scripture-reader-printable-container" className="pt-8 pb-12">
          {/* Header Banner */}
          <header className="rounded-3xl border border-gold-500/25 bg-gradient-to-b from-[#140b2a]/90 via-[#0d071b]/95 to-black p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-body text-gold-400/80">
                <span className="uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  {epicTitle} ({epicSanskrit}) · {divisionUnit} {item.number} of {allCount}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-[11px] text-gold-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>{standardLabel}</span>
                </span>
              </div>

              <div className="mt-4">
                <p className="font-deva text-xl sm:text-2xl text-gold-400/90 font-medium">
                  {item.sanskrit}
                </p>
                <h1 className="font-display text-4xl sm:text-6xl font-bold text-gold-100 text-glow mt-1">
                  {titleText}
                </h1>
                <p className="font-body text-sm sm:text-base text-gold-200/80 mt-2 font-medium">
                  {meaningText}
                </p>
              </div>

              {/* Textual Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-gold-500/20">
                <div className="p-3 rounded-2xl bg-black/40 border border-gold-500/15">
                  <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 block">
                    Verified {chapterUnit}
                  </span>
                  <span className="font-display text-2xl font-bold text-gold-100 mt-0.5 block">
                    {chaptersCount}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-gold-500/15">
                  <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 block">
                    Critical Recension Verses
                  </span>
                  <span className="font-display text-2xl font-bold text-gold-100 mt-0.5 block">
                    ~{item.slokasCountApprox.toLocaleString()}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-gold-500/15">
                  <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 block">
                    Canonical Episodes
                  </span>
                  <span className="font-display text-2xl font-bold text-gold-100 mt-0.5 block">
                    {item.importantEpisodes.length}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-gold-500/15">
                  <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 block">
                    Verified Ślokas
                  </span>
                  <span className="font-display text-2xl font-bold text-gold-100 mt-0.5 block">
                    {item.slokas.length}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Special Bhagavad Gita / Anugita Banner if applicable */}
          {gitaInfo && gitaInfo.hasGita && (
            <div className="mt-8 p-6 sm:p-8 rounded-3xl border border-gold-400/40 bg-gradient-to-r from-gold-950/60 via-[#180f33]/80 to-gold-950/60 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-400 font-bold block">
                    Crown Jewel of the Itihāsa
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gold-100 mt-1">
                    Śrīmad Bhagavad Gītā (Chapters {gitaInfo.keyChapters})
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-gold-200/90 mt-2">
                    {gitaInfo.summary[currentLang] || gitaInfo.summary.en}
                  </p>
                  <p className="font-body text-xs text-gold-300/80 mt-2 italic">
                    {gitaInfo.significance[currentLang] || gitaInfo.significance.en}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Overview & Essence Summary */}
          <section className="mt-10 rounded-3xl border border-gold-500/20 bg-black/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <h2 className="font-display text-xl font-bold text-gold-100">
                Essence & Philosophical Overview
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base leading-relaxed text-gold-100/90">
              {summaryText}
            </p>
          </section>

          {/* Complete Storyline (Chronological Order) */}
          <section className="mt-12">
            <div className="border-b border-gold-500/15 pb-3 mb-6">
              <span className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold block">
                Chronological Narrative
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-1">
                Complete Storyline in Correct Order
              </h2>
            </div>

            <div className="space-y-4">
              {item.completeStoryline.map((narrativeStep, idx) => {
                const text = narrativeStep[currentLang] || narrativeStep.en
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl border border-gold-500/15 bg-black/45 flex items-start gap-4 hover:border-gold-400/40 transition shadow-sm"
                  >
                    <span className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center font-display text-sm font-bold text-gold-300 shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="font-body text-sm sm:text-base leading-relaxed text-gold-100/90">
                      {text}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Important Canonical Episodes */}
          <section className="mt-14">
            <div className="border-b border-gold-500/15 pb-3 mb-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold block">
                  Canonical Milestones
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-1">
                  Important Episodes ({item.importantEpisodes.length})
                </h2>
              </div>
              <span className="font-body text-xs text-gold-400/70">
                Sarga & Adhyāya citations from Critical Edition
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {item.importantEpisodes.map((ep, idx) => {
                const epTitle = ep.title[currentLang] || ep.title.en
                const epSummary = ep.summary[currentLang] || ep.summary.en
                const citation = isRamayana
                  ? (ep as any).sargaReference
                  : (ep as any).adhyayaReference

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-gold-500/20 bg-gradient-to-br from-[#120b22]/70 to-black/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-gold-100">
                          {epTitle}
                        </h3>
                        <span className="shrink-0 px-2 py-0.5 rounded-md bg-gold-500/10 border border-gold-500/20 font-mono text-[10px] text-gold-300">
                          {citation}
                        </span>
                      </div>
                      <p className="font-body text-xs sm:text-sm leading-relaxed text-gold-200/80 mt-2.5">
                        {epSummary}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Verified Ślokas Section */}
          <section className="mt-14">
            <div className="border-b border-gold-500/15 pb-3 mb-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold block">
                  Authentic Textual Preservation
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-1">
                  Verified Ślokas & Citations
                </h2>
              </div>
              <span className="font-body text-xs text-gold-400/80 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                Never fabricated · Manuscript-collated
              </span>
            </div>

            <div className="space-y-6">
              {item.slokas.map((sloka, idx) => {
                const slokaMeaning = sloka.meaning[currentLang] || sloka.meaning.en
                const isCopied = copiedIndex === idx

                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl border border-gold-500/25 bg-[#090611] relative overflow-hidden shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold-500/15 pb-3 mb-4">
                      <span className="font-mono text-xs text-gold-300 font-semibold">
                        {sloka.reference}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopySloka(
                            `${sloka.devanagari}\n\n${sloka.transliteration}\n\n${slokaMeaning}\n(${sloka.reference})`,
                            idx
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 text-xs font-body text-gold-300 hover:text-gold-100 hover:bg-gold-500/20 transition"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-gold-400" />
                            <span>Copy Śloka</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Devanagari */}
                    <pre className="font-deva text-lg sm:text-2xl leading-relaxed text-gold-100 whitespace-pre-wrap tracking-wide font-normal">
                      {sloka.devanagari}
                    </pre>

                    {/* IAST Transliteration */}
                    <pre className="mt-3 font-body text-xs sm:text-sm leading-relaxed text-gold-300/80 italic whitespace-pre-wrap">
                      {sloka.transliteration}
                    </pre>

                    {/* Meaning */}
                    <div className="mt-4 pt-4 border-t border-gold-500/10">
                      <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                        Canonical Meaning
                      </span>
                      <p className="font-body text-sm leading-relaxed text-gold-100/90">
                        {slokaMeaning}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Dharma Questions & Ethical Dialogues */}
          <section className="mt-14">
            <div className="border-b border-gold-500/15 pb-3 mb-6">
              <span className="font-body text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold block">
                Ethical Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-1">
                Dharma Questions & Classical Analysis
              </h2>
            </div>

            <div className="space-y-4">
              {item.dharmaQuestions.map((dq, idx) => {
                const questionText = dq.question[currentLang] || dq.question.en
                const analysisText = dq.analysis[currentLang] || dq.analysis.en

                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-gold-500/20 bg-black/50 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <h3 className="font-display text-base sm:text-lg font-bold text-gold-100">
                        {questionText}
                      </h3>
                    </div>
                    <div className="pl-8 pt-1 border-l-2 border-gold-500/30">
                      <p className="font-body text-xs sm:text-sm leading-relaxed text-gold-200/85">
                        {analysisText}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Major Teachings & Principles */}
          <section className="mt-14 rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#130b22]/70 to-black/50 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="w-5 h-5 text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-gold-100">
                Dharma & Philosophical Teachings
              </h2>
            </div>
            <div className="space-y-3">
              {item.majorTeachings.map((teaching, idx) => {
                const text = teaching[currentLang] || teaching.en
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 border border-gold-500/15 flex items-start gap-3"
                  >
                    <span className="text-gold-400 font-bold text-base mt-0.5">✦</span>
                    <p className="font-body text-sm leading-relaxed text-gold-100/90 font-medium">
                      {text}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Figures & Geography Grid */}
          <section className="mt-14 grid md:grid-cols-2 gap-6">
            {/* Characters */}
            <div className="p-6 rounded-3xl border border-gold-500/20 bg-black/45">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-gold-400" />
                <h3 className="font-display text-xl font-bold text-gold-100">
                  Principal Characters
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.mainCharacters.map((charName) => (
                  <button
                    key={charName}
                    type="button"
                    onClick={() => onSelectCharacter && onSelectCharacter(charName)}
                    className="px-3 py-1.5 rounded-xl border border-gold-500/20 bg-gold-500/10 text-xs font-body text-gold-200 hover:border-gold-400 hover:bg-gold-500/20 transition"
                  >
                    {charName}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="p-6 rounded-3xl border border-gold-500/20 bg-black/45">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gold-400" />
                <h3 className="font-display text-xl font-bold text-gold-100">
                  Important Locations
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {placesList.map((loc, idx) => {
                  const placeName = loc[currentLang] || loc.en
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gold-500/15 bg-black/50 text-xs font-body text-gold-300"
                    >
                      <MapPin className="w-3 h-3 text-gold-400/80" />
                      {placeName}
                    </span>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Critical Edition Source Documentation */}
          <footer className="mt-14 p-6 rounded-3xl border border-gold-500/20 bg-black/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-gold-100">
                  Scholarly Provenance & Manuscript Tradition
                </h4>
                <p className="font-body text-xs text-gold-300/80 mt-1 leading-relaxed max-w-2xl">
                  {sourceNotesText}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/30 text-xs font-body font-semibold text-gold-100 transition"
            >
              <Download className="w-3.5 h-3.5 text-gold-400" />
              <span>Save Offline PDF</span>
            </button>
          </footer>
        </div>
      </div>
    </main>
  )
}
