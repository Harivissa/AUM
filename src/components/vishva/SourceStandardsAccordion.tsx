import { useState } from 'react'
import {
  ShieldCheck,
  BookOpen,
  ChevronDown,
  ChevronUp,
  FileText,
  Building,
  Calendar,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Filter
} from 'lucide-react'

export interface ResearchSourceItem {
  id: string
  title: string
  authorOrInstitution: string
  date: string
  sourceType: 'Government Statistical Census' | 'Archaeological Survey' | 'Epigraphic Charter' | 'Academic Peer-Reviewed Monograph' | 'Classical Textual Manuscript' | 'Sovereign Heritage Register'
  evidenceLabel:
    | 'Census / Sovereign Record'
    | 'Archaeological Evidence'
    | 'Epigraphic Evidence'
    | 'Scholarly Research'
    | 'Historical Tradition'
    | 'Disputed'
    | 'Requires Verification'
  details: string
  scope: string
}

const RESEARCH_SOURCES_CATALOG: ResearchSourceItem[] = [
  {
    id: 'src-census-india',
    title: 'Census of India (Office of the Registrar General & Census Commissioner)',
    authorOrInstitution: 'Ministry of Home Affairs, Government of India',
    date: '2011 / 2024 Estimates',
    sourceType: 'Government Statistical Census',
    evidenceLabel: 'Census / Sovereign Record',
    details: 'Decennial enumeration of religion and linguistic demographics. Sovereign state documentation providing baseline statistics for over 966 million adherents across Indian states and union territories.',
    scope: 'Subcontinental demographics & linguistic distribution'
  },
  {
    id: 'src-bepheo-champa',
    title: 'Võ Cạnh & Mỹ Sơn Sanskrit Stele Corpus (BEFEO Bulletin)',
    authorOrInstitution: 'École française d\'Extrême-Orient & Vietnam National Museum of History',
    date: 'c. 192 – 1200 CE / 1904 Bulletin',
    sourceType: 'Epigraphic Charter',
    evidenceLabel: 'Epigraphic Evidence',
    details: 'Earliest Sanskrit epigraph in Southeast Asia (Võ Cạnh stele, Khanh Hoa) composed in classical Sanskrit meters recording donations of King Sri Mara. Verified in situ by French and Vietnamese epigraphers.',
    scope: 'Champa kingdoms epigraphy and royal genealogy'
  },
  {
    id: 'src-bujang-valley',
    title: 'Bujang Valley Hindu-Buddhist Temple Complex Archaeological Surveys',
    authorOrInstitution: 'Department of National Heritage Malaysia & Centre for Global Archaeological Research (USM)',
    date: '5th – 11th Century CE / 2018 Survey',
    sourceType: 'Archaeological Survey',
    evidenceLabel: 'Archaeological Evidence',
    details: 'Excavation of over 50 candi (shrine) sites along the Merbok River in Kedah. Uncovered Sanskrit stone seals (Raktamrttika Buddhist-Hindu trader inscriptions) and brick vimana foundations.',
    scope: 'Maritime Kedah Tua & trans-peninsular trade'
  },
  {
    id: 'src-aapravasi-ghat',
    title: 'Aapravasi Ghat Immigration Depot Sovereign Registers',
    authorOrInstitution: 'National Archives of Mauritius & UNESCO World Heritage Committee',
    date: '1834 – 1920 CE',
    sourceType: 'Sovereign Heritage Register',
    evidenceLabel: 'Census / Sovereign Record',
    details: 'Complete photographic and archival immigration registers indexing 450,000 indentured Indian workers landing in Port Louis. Documented village of origin (Bhojpur, Awadh, Arcot, Madras), vessel names, and employment contracts.',
    scope: 'Girmitiya indenture and Indian Ocean diaspora'
  },
  {
    id: 'src-samguk-yusa',
    title: 'Samguk Yusa (Memorabilia of the Three Kingdoms) — Garakguk-gi',
    authorOrInstitution: 'Buddhist Monk Iryeon (Il-yeon), Goryeo Dynasty',
    date: '1281 CE (Preserved 16th c. Woodblock Prints)',
    sourceType: 'Classical Textual Manuscript',
    evidenceLabel: 'Historical Tradition',
    details: 'Chronicle documenting the arrival of Princess Suriratna from Ayuta. AUM labels this strictly as historical literary tradition rather than verified biological genealogy, as written 1,200 years after Gaya foundation.',
    scope: 'Korea-Ayuta traditional royal memory'
  },
  {
    id: 'src-de-casparis-epigraphy',
    title: 'Prasasti Canggal & Prasasti Kalasan Inscriptions of Central Java',
    authorOrInstitution: 'Prof. J.G. de Casparis & Kern Institute, Leiden University',
    date: '732 CE & 778 CE / 1950 Corpus',
    sourceType: 'Academic Peer-Reviewed Monograph',
    evidenceLabel: 'Epigraphic Evidence',
    details: 'Sanskrit inscriptions in Pallava and Kawi scripts documenting King Sanjaya\'s consecration of a Shiva linga on Mount Wukir and the syncretic coexistence of Mataram Shaivism with Sailendra Mahayana Buddhism.',
    scope: 'Indonesian epigraphy and Prambanan temple architecture'
  },
  {
    id: 'src-tarim-basin',
    title: 'Serindia & Ancient Khotan Sanskrit Manuscript Findings',
    authorOrInstitution: 'Sir Aurel Stein & British Library International Dunhuang Project',
    date: '3rd – 8th Century CE / 1907 Monograph',
    sourceType: 'Archaeological Survey',
    evidenceLabel: 'Archaeological Evidence',
    details: 'Excavation of wooden tablets, birch bark manuscripts, and silk paintings at Dandan-Uiliq and Niya. Depicts composite iconography of Shiva, Ganesha, and Saraswati along Silk Road oasis settlements.',
    scope: 'Trans-Himalayan and Central Asian Buddhist-Hindu transmission'
  },
  {
    id: 'src-pasa-pagoda-genetics',
    title: 'Genetic and Mineralogical Analysis of Gaya Royal Remains & Pasa Pagoda',
    authorOrInstitution: 'Seoul National University Forensic Medicine & Korean Earth Sciences Bulletin',
    date: '2004 / 2019 Reports',
    sourceType: 'Academic Peer-Reviewed Monograph',
    evidenceLabel: 'Disputed',
    details: 'Mineralogical testing shows Pasa Pagoda stone is non-native to Korean peninsula, indicating sea voyage. However, mitochondrial DNA analyses of Gaya cemetery human remains show no peer-reviewed proof of North Indian ancestral lineages.',
    scope: 'Genetic and mineralogical verification of Ayodhya-Gaya claims'
  }
]

export default function SourceStandardsAccordion() {
  const [selectedLabel, setSelectedLabel] = useState<string>('All')
  const [expandedSourceId, setExpandedSourceId] = useState<string | null>(null)

  const badges = [
    'All',
    'Census / Sovereign Record',
    'Archaeological Evidence',
    'Epigraphic Evidence',
    'Scholarly Research',
    'Historical Tradition',
    'Disputed',
    'Requires Verification'
  ]

  const filteredSources = RESEARCH_SOURCES_CATALOG.filter((src) => {
    if (selectedLabel === 'All') return true
    return src.evidenceLabel === selectedLabel
  })

  const getBadgeStyle = (label: ResearchSourceItem['evidenceLabel']) => {
    switch (label) {
      case 'Census / Sovereign Record':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
      case 'Archaeological Evidence':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40'
      case 'Epigraphic Evidence':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40'
      case 'Scholarly Research':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      case 'Historical Tradition':
        return 'bg-amber-600/20 text-amber-200 border-amber-600/40'
      case 'Disputed':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40'
      default:
        return 'bg-stone-500/20 text-stone-300 border-stone-500/40'
    }
  }

  const toggleSource = (id: string) => {
    setExpandedSourceId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="epistemic-standards" className="py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            Rigorous Epistemic Framework
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
            Collapsible Source & Evidence Standards
          </h2>
          <p className="mt-2 font-body text-sm text-stone-300 leading-relaxed">
            Every statistic, historical kingdom, and diaspora route in Vishva Sanātana Saṅgha is mapped to verified archival bodies, epigraphic charters, and peer-reviewed scholarly corpora.
          </p>
        </div>

        {/* Badge Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar mb-6 border-b border-gold-500/15">
          <span className="text-xs font-display text-gold-400 shrink-0 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Evidence Filter:
          </span>
          {badges.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setSelectedLabel(b)}
              className={`px-3 py-1.5 rounded-full text-xs font-display whitespace-nowrap transition border ${
                selectedLabel === b
                  ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-bold shadow-sm'
                  : 'border-white/10 bg-black/40 text-stone-400 hover:text-stone-200'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Collapsible Source Panels List */}
        <div className="space-y-3">
          {filteredSources.map((item) => {
            const isExpanded = expandedSourceId === item.id

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 bg-black/60 backdrop-blur-md overflow-hidden ${
                  isExpanded ? 'border-gold-400 bg-black/80' : 'border-gold-500/20 hover:border-gold-500/40'
                }`}
              >
                {/* Header row: Evidence label, Source type, Source title, Author/institution, Date, "View Source Details" button */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Evidence Label Badge */}
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-display font-semibold border ${getBadgeStyle(
                          item.evidenceLabel
                        )}`}
                      >
                        {item.evidenceLabel}
                      </span>

                      {/* Source Type */}
                      <span className="text-xs text-stone-400 font-body">
                        {item.sourceType}
                      </span>
                    </div>

                    {/* Source Title */}
                    <h3 className="font-display text-base sm:text-lg font-bold text-gold-100">
                      {item.title}
                    </h3>

                    {/* Author/Institution & Date */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300 font-body">
                      <span className="flex items-center gap-1 text-gold-300">
                        <Building className="w-3 h-3 text-gold-400" />
                        {item.authorOrInstitution}
                      </span>
                      <span className="flex items-center gap-1 text-stone-400">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* "View Source Details" Button */}
                  <div className="shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleSource(item.id)}
                      className="py-1.5 px-4 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-200 text-xs font-display font-semibold hover:bg-gold-500/25 transition flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Source Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Details Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-white/10 space-y-3 text-xs font-body text-stone-300 animate-fadeIn bg-[#080d1a]">
                    <div>
                      <span className="font-bold text-gold-300 uppercase tracking-wider block text-[10px] mb-1">
                        Archival Methodology & Epistemic Scope
                      </span>
                      <p className="text-stone-300 leading-relaxed">{item.details}</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-stone-400 border-t border-white/5">
                      <span>
                        <strong className="text-stone-300">Scope:</strong> {item.scope}
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Peer-Verified Citation
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
