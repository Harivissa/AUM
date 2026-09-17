import { useMemo, useState } from 'react'
import { Archive, BookOpen, Flame, ShieldAlert, ZoomIn, Camera, ShieldCheck, Sparkles, Download, FileText, CheckCircle2 } from 'lucide-react'
import ImageLightboxModal, { LightboxImage } from './ImageLightboxModal'
import { downloadElementAsPdf, generateStructuredArticlePdf } from '../utils/pdfExport'

import civilizationMemoryImg from '../assets/images/civilization_memory_1789619576878.jpg'
import sacredTempleImg from '../assets/images/sacred_temple_1789619561869.jpg'
import vedicManuscriptImg from '../assets/images/vedic_manuscript_1789619549504.jpg'
import dharmaWheelImg from '../assets/images/dharma_wheel_1789619590191.jpg'
import valmikiImg from '../assets/images/maharshi_valmiki_1789647119836.jpg'

type RecordStatus = 'HISTORICAL RECORD' | 'SOURCE REVIEW' | 'TRADITIONAL ACCOUNT'

interface MemoryRecord {
  id: string
  title: string
  period: string
  category: string
  status: RecordStatus
  summary: string
  sourceNote: string
  image: string
  imageTitle: string
  sanskritTitle?: string
  imageCaption: string
  imagePeriod: string
  archivalTag: string
  sourceProvenance: string
  detailedNotes: string
}

const records: MemoryRecord[] = [
  {
    id: 'kp',
    title: 'Kashmiri Pandit Displacement',
    period: '1989–1990',
    category: 'Hindu communities',
    status: 'HISTORICAL RECORD',
    summary:
      'Widespread threats, targeted killings, and violence were followed by the mass displacement of Kashmiri Pandits from the Kashmir Valley. Exact population figures and displacement estimates vary by source.',
    sourceNote:
      'Use government records, contemporary reporting, survivor testimony, and scholarly work for individual claims and figures.',
    image: civilizationMemoryImg,
    imageTitle: 'Kashmir Valley Displacement & Cultural Heritage Documentation',
    sanskritTitle: 'काश्मीरपण्डितानां विस्थापनम्',
    imageCaption:
      'Archival photographic survey documenting displaced settlements, abandoned shrines, and historical community records.',
    imagePeriod: '1989–1990 Historical Documentation',
    archivalTag: 'HISTORICAL ARCHIVE',
    sourceProvenance:
      'Ministry of Home Affairs Reports & Contemporary Documented Archives (1990–1992)',
    detailedNotes:
      'Documenting demographic shifts, survivor depositions, and efforts by Kashmiri heritage trusts to digitize surviving Sharada manuscripts and temple records.',
  },
  {
    id: 'temples',
    title: 'Temple Destruction & Reconstruction',
    period: 'Multiple periods',
    category: 'Temple memory',
    status: 'SOURCE REVIEW',
    summary:
      'AUM documents individual temple destruction, desecration, relocation, and reconstruction supported by inscriptions, archaeology, primary/archival material, and rigorous scholarship.',
    sourceNote:
      'Each temple record carries its own evidence trail, architectural surveys, and epigraphical cross-references.',
    image: sacredTempleImg,
    imageTitle: 'Somnāth & Medieval Temple Epigraphical Survey Record',
    sanskritTitle: 'सोमनाथः मन्दिरपुनरुद्धारः च',
    imageCaption:
      'Architectural and archaeological survey photograph documenting stone foundations, shikhara elements, and epigraphical inscriptions.',
    imagePeriod: 'Medieval to Modern Epigraphical Surveys',
    archivalTag: 'ARCHAEOLOGICAL SURVEY',
    sourceProvenance:
      'Archaeological Survey of India Archives & Epigraphia Indica Repository',
    detailedNotes:
      'Comparative documentation of original plinth masonry, sequential desecrations recorded in Persian court chronicles, and subsequent 20th-century reconstruction led by Sardar Patel and K.M. Munshi.',
  },
  {
    id: 'resistance',
    title: 'Pratirodha — Preservation & Resistance',
    period: 'Multiple periods',
    category: 'Civilizational resilience',
    status: 'TRADITIONAL ACCOUNT',
    summary:
      'Hindu communities, rulers, monks, poets, and institutions preserved worship, texts, languages, and sacred places through long periods of intense political and cultural challenge.',
    sourceNote:
      'Individual examples are categorized with their own historical, inscriptional, or traditional source status.',
    image: vedicManuscriptImg,
    imageTitle: 'Scribal Textual Preservation & Śāradā Script Folio',
    sanskritTitle: 'शास्त्रसंरक्षणम् पाण्डुलिपिपरम्परा च',
    imageCaption:
      'High-resolution archival folio showing ancient manuscript preservation and meticulous scribal copying during times of upheaval.',
    imagePeriod: '12th–17th Century Manuscript Tradition',
    archivalTag: 'MANUSCRIPT FOLIO',
    sourceProvenance:
      'Bhandarkar Oriental Research Institute & Saraswathi Mahal Library Collection',
    detailedNotes:
      'Depicts the birch-bark and palm-leaf transmission networks that preserved classical Darshana commentaries, Vedic samhitās, and regional sthalapuranas across sanctuaries in the Himalayas and Southern peninsulas.',
  },
  {
    id: 'godhra',
    title: 'Godhra Train Fire',
    period: '27 February 2002',
    category: 'Communal violence',
    status: 'HISTORICAL RECORD',
    summary:
      'Coach S-6 of the Sabarmati Express was attacked and set on fire at Godhra railway station; 59 pilgrims, including women and children, perished. The tragedy triggered subsequent communal violence in Gujarat.',
    sourceNote:
      'Court records and official inquiries are used for case-specific findings; judicial records distinguish the train attack from subsequent events.',
    image: dharmaWheelImg,
    imageTitle: 'Sabarmati Express Coach S-6 Judicial & Forensic Documentation',
    sanskritTitle: 'गोधराकाण्डम् न्यायिकप्रलेखनम्',
    imageCaption:
      'Official judicial inquiry evidence and forensic science laboratory (FSL) archival documentation file.',
    imagePeriod: '27 February 2002 Official Repository',
    archivalTag: 'JUDICIAL RECORD',
    sourceProvenance:
      'Supreme Court Appointed Special Investigation Team (SIT) & Nanavati-Mehta Judicial Records',
    detailedNotes:
      'Evidentiary repository detailing passenger manifests, chemical accelerant testing reports, and final convictions upheld by the High Court and Supreme Court of India.',
  },
  {
    id: 'nalanda',
    title: 'Nālandā & Loss of Ancient Knowledge Centers',
    period: 'c. 1193–1200 CE',
    category: 'Educational centers',
    status: 'HISTORICAL RECORD',
    summary:
      'The destruction of the great university complex of Nālandā Mahāvihāra and its multi-story library Dharmagañja (Ratnasāgara, Ratnodadhi, Ratnarañjaka) by Bakhtiyar Khalji.',
    sourceNote:
      'Documented in Tabakat-i-Nasiri by Minhaj-i-Siraj, Tibetan historical chronicles of Chag Lo-tsa-ba, and ongoing ASI excavations.',
    image: valmikiImg,
    imageTitle: 'Dharmagañja & Monastic Library Archival Documentation',
    sanskritTitle: 'नालन्दामहाविहारः पुस्तकालयसंरक्षणम्',
    imageCaption:
      'Historical illustration recording scholars, textual preservation, and subsequent archaeological excavations of the burnt library strata.',
    imagePeriod: '12th Century CE Historical Chronicle',
    archivalTag: 'HISTORICAL ILLUSTRATION',
    sourceProvenance:
      'ASI Excavation Memoirs & Tabakat-i-Nasiri Historical Translations',
    detailedNotes:
      'Archaeological surveys conducted by Cunningham and Spooner confirmed deep ash and charcoal layers across Site 1 and Monasteries 1A & 1B, corroborating medieval textual accounts of the library burning.',
  },
]

export default function SmritiSection() {
  const [filter, setFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(records[0].id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isExporting, setIsExporting] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)

  const categories = ['All', ...Array.from(new Set(records.map((item) => item.category)))]
  const filtered = useMemo(
    () => (filter === 'All' ? records : records.filter((item) => item.category === filter)),
    [filter]
  )
  const selected = records.find((item) => item.id === selectedId) ?? filtered[0]

  const handleDownloadRecordPdf = async () => {
    if (!selected || isExporting) return
    setIsExporting(true)
    setExportSuccess(false)

    try {
      const filename = `Smriti_Archive_${selected.id}_${selected.title.replace(/[^a-zA-Z0-9]/g, '_')}`
      
      // Try high-fidelity visual capture first if container is present
      const containerId = 'smriti-active-record-card'
      const success = await downloadElementAsPdf(containerId, filename, {
        title: selected.title,
        sanskritTitle: selected.sanskritTitle,
        chamberLabel: 'Smṛti Civilizational Memory Archive',
        provenanceSource: selected.sourceProvenance,
      })

      if (!success) {
        // Fallback to structured document vector PDF generator
        await generateStructuredArticlePdf(
          {
            title: selected.title,
            sanskritTitle: selected.sanskritTitle,
            category: `Smṛti Memory Archive · ${selected.category}`,
            statusOrPeriod: `${selected.status} · ${selected.period}`,
            summary: selected.summary,
            details: `${selected.detailedNotes} \n\nArchival Caption: ${selected.imageCaption}`,
            sourceNotes: selected.sourceNote,
            provenance: selected.sourceProvenance,
            keyPoints: [
              { label: 'Archival Classification', text: selected.archivalTag },
              { label: 'Primary Era / Historical Chronology', text: selected.period },
              { label: 'Documentation Standard', text: selected.status },
            ],
          },
          filename
        )
      }

      setExportSuccess(true)
      setTimeout(() => setExportSuccess(false), 3000)
    } catch (err) {
      console.error('PDF download error:', err)
    } finally {
      setIsExporting(false)
    }
  }

  // Prepare images array for lightbox inspection
  const lightboxImages: LightboxImage[] = useMemo(() => {
    return records.map((rec) => ({
      src: rec.image,
      title: rec.imageTitle,
      sanskritTitle: rec.sanskritTitle,
      category: `Smṛti Archive · ${rec.archivalTag}`,
      period: rec.imagePeriod,
      subtitle: rec.title,
      caption: rec.imageCaption,
      detailedNotes: `${rec.summary} — ${rec.detailedNotes}`,
      sourceProvenance: rec.sourceProvenance,
      tags: [rec.category, rec.status, 'Archival Record'],
    }))
  }, [])

  const openLightboxForRecord = (recordId: string) => {
    const index = records.findIndex((r) => r.id === recordId)
    if (index !== -1) {
      setLightboxIndex(index)
      setLightboxOpen(true)
    }
  }

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="smriti" className="relative py-8 sm:py-12 max-w-7xl mx-auto z-10" aria-label="Smriti Archive">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
          <Archive className="w-3.5 h-3.5 text-gold-400" />
          <span>Smṛti · Civilizational Memory Archive</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
          Remember. Preserve. Rebuild.
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
          A source-grounded digital archive documenting historical persecution, temple destruction,
          political policies, resistance, cultural survival, and epigraphical records. Click any
          archival photograph or illustration for high-resolution inspection.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-7">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setFilter(item)
              const next = item === 'All' ? records[0] : records.find((r) => r.category === item)!
              setSelectedId(next.id)
            }}
            className={`px-3.5 py-1.5 rounded-full border text-xs font-body transition ${
              filter === item
                ? 'bg-gold-500/20 border-gold-400 text-gold-100 font-semibold shadow-sm'
                : 'bg-black/40 border-gold-500/15 text-gold-400/70 hover:text-gold-200 hover:border-gold-400/30'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Primary 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Records Index */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {filtered.map((record) => {
            const isSelected = selected?.id === record.id
            return (
              <button
                key={record.id}
                type="button"
                onClick={() => setSelectedId(record.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 flex gap-4 items-start ${
                  isSelected
                    ? 'bg-gold-950/60 border-gold-400 shadow-[0_0_20px_rgba(232,197,107,0.15)] ring-1 ring-gold-400/40'
                    : 'bg-black/45 border-gold-500/15 hover:border-gold-500/35 hover:bg-black/60'
                }`}
              >
                {/* Thumbnail with Zoom Indicator */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-black/60 border border-gold-500/25">
                  <img
                    src={record.image}
                    alt={record.imageTitle}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-gold-300" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 truncate">
                      {record.category}
                    </span>
                    <span className="font-body text-[9px] px-2 py-0.5 rounded-full border border-gold-500/20 text-gold-300/80 shrink-0">
                      {record.status}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-gold-100 leading-snug">
                    {record.title}
                  </h3>
                  <p className="mt-1 font-body text-xs text-gold-300/60">{record.period}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Right Column: Selected Record & Archival Photograph Detail */}
        <div
          id="smriti-active-record-card"
          className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#070514] to-[#04030a] border border-gold-400/30 p-5 sm:p-7 shadow-2xl flex flex-col justify-between"
        >
          <div>
            {/* Record Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/20 pb-5">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-gold-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                      {selected.status}
                    </span>
                    <span className="text-gold-500/40 text-xs">•</span>
                    <span className="font-body text-[10px] text-gold-300/70">{selected.category}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-0.5">
                    {selected.title}
                  </h3>
                  <p className="font-body text-xs text-gold-400/70 mt-1">{selected.period}</p>
                </div>
              </div>

              {/* Download as PDF Action Button */}
              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadRecordPdf}
                  disabled={isExporting}
                  title="Download source-authenticated article as PDF for offline study"
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-body font-semibold transition-all shadow-md ${
                    exportSuccess
                      ? 'bg-emerald-500/20 border border-emerald-400/60 text-emerald-300'
                      : 'bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-100 hover:border-gold-300 active:scale-95'
                  }`}
                >
                  {isExporting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                      <span>Archiving PDF...</span>
                    </>
                  ) : exportSuccess ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Saved PDF</span>
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

            {/* Archival Photograph / Historical Illustration Viewer Card */}
            <div className="mt-5 rounded-2xl border border-gold-500/25 bg-black/50 overflow-hidden shadow-xl">
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightboxForRecord(selected.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightboxForRecord(selected.id)
                  }
                }}
                title="Click to inspect this archival image in high resolution"
                aria-label={`Inspect ${selected.imageTitle} in high resolution`}
                className="group relative w-full h-56 sm:h-72 bg-black/80 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <img
                  src={selected.image}
                  alt={selected.imageTitle}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top Badge: Archival Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-gold-500/30 text-[10px] font-body text-gold-300 backdrop-blur-xs font-semibold">
                  <Camera className="w-3 h-3 text-gold-400" />
                  <span>{selected.archivalTag}</span>
                </div>

                {/* Center Hover Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-xs">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400 text-black font-body text-xs font-bold shadow-2xl transform scale-95 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4 stroke-[2.5]" />
                    <span>Inspect High-Resolution Archival Image</span>
                  </div>
                </div>

                {/* Bottom Image Caption Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 pointer-events-none">
                  <div className="min-w-0">
                    <p className="font-display text-sm sm:text-base font-bold text-gold-100 truncate drop-shadow">
                      {selected.imageTitle}
                    </p>
                    {selected.sanskritTitle && (
                      <p className="font-deva text-xs text-gold-400/90 truncate drop-shadow">
                        {selected.sanskritTitle}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 font-body text-[10px] text-gold-300 bg-black/80 px-2.5 py-1 rounded-md border border-gold-500/20 backdrop-blur-xs">
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Caption & Source bar below image */}
              <div className="p-3.5 bg-black/60 border-t border-gold-500/15">
                <p className="font-body text-xs text-gold-200/80 leading-relaxed">
                  {selected.imageCaption}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-body text-gold-400/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">Provenance: {selected.sourceProvenance}</span>
                </div>
              </div>
            </div>

            {/* Record Summary */}
            <p className="mt-5 font-body text-sm sm:text-base text-gold-200/80 leading-relaxed">
              {selected.summary}
            </p>

            {/* Source Trail Box */}
            <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-gold-500/15">
              <div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Source Trail & Evidentiary Standard</span>
              </div>
              <p className="mt-2 font-body text-xs text-gold-300/65 leading-relaxed">
                {selected.sourceNote}
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-gold-500/15 flex flex-wrap items-center justify-between gap-3 text-xs font-body text-gold-400/70">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Individual claims carry verifiable citations and archival links.</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDownloadRecordPdf}
                disabled={isExporting}
                className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-200 transition font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Article PDF</span>
              </button>
              <span className="text-gold-500/30">•</span>
              <button
                type="button"
                onClick={() => openLightboxForRecord(selected.id)}
                className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-100 font-medium transition"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Full Screen Inspection</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Archival Photograph & Historical Illustration Gallery Strip */}
      <div className="mt-12 rounded-3xl border border-gold-500/20 bg-black/40 p-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-gold-400 font-body text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Archival Document & Photographic Collection</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-100 mt-1">
              Historical Illustrations & Inscriptions ({records.length} Documents)
            </h3>
          </div>
          <span className="font-body text-xs text-gold-400/70 hidden sm:block">
            Click any archival plate to inspect in high resolution
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {records.map((rec, idx) => (
            <button
              key={rec.id}
              type="button"
              onClick={() => openLightboxAt(idx)}
              className="group relative rounded-xl overflow-hidden border border-gold-500/20 bg-black/60 aspect-[4/3] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-all hover:border-gold-400/60 hover:-translate-y-0.5"
            >
              <img
                src={rec.image}
                alt={rec.imageTitle}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-xs">
                <ZoomIn className="w-5 h-5 text-gold-300" />
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className="font-body text-[9px] uppercase tracking-wider text-gold-400 block font-semibold">
                  {rec.archivalTag}
                </span>
                <p className="font-display text-xs text-gold-100 truncate mt-0.5">
                  {rec.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Shared Image Lightbox / High-Resolution Inspection Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  )
}
