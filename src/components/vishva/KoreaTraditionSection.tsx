import { useState } from 'react'
import { KOREA_AYODHYA_ANALYSIS } from '../../data/vishvaData'
import {
  Sparkles,
  BookOpen,
  ShieldCheck,
  Info,
  ChevronDown,
  ChevronUp,
  Landmark,
  Compass,
  FileText,
  AlertTriangle,
  Award
} from 'lucide-react'

type KoreaTabId =
  | 'traditional'
  | 'textual'
  | 'cultural'
  | 'scholarly'
  | 'archaeological'

export default function KoreaTraditionSection() {
  const [activeTab, setActiveTab] = useState<KoreaTabId>('traditional')
  const [isFullExplanationExpanded, setIsFullExplanationExpanded] = useState(false)

  const tabs: {
    id: KoreaTabId
    name: string
    badge: string
    badgeColor: string
    shortSummary: string
    detailedExplanation: string
    primarySources: string
    labelType:
      | 'Historical tradition'
      | 'Cultural memory'
      | 'Scholarly interpretation'
      | 'Debated identification'
      | 'No established genetic proof'
  }[] = [
    {
      id: 'traditional',
      name: 'Traditional Account',
      badge: 'Living Tradition',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      labelType: 'Historical tradition',
      shortSummary:
        'A 13th-century chronicle describes Princess Suriratna traveling by sea from the distant kingdom of "Ayuta" in 48 CE to marry King Suro, founding the Gaya Confederacy.',
      detailedExplanation:
        'According to the Garakguk-gi (Record of the State of Garak) preserved in the Samguk Yusa, Princess Suriratna arrived by boat accompanied by divine guidance, carrying red sails and tea plants. She took the royal name Queen Heo Hwang-ok and lived to 157 years according to the legend. Today, over six million Koreans belonging to the Gimhae Kim and Gimhae Heo clans trace their matrilineal heritage to her.',
      primarySources: 'Samguk Yusa (Memorabilia of the Three Kingdoms), Garakguk-gi section.'
    },
    {
      id: 'textual',
      name: 'Historical Text',
      badge: 'Chronicle 1281 CE',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      labelType: 'Cultural memory',
      shortSummary:
        'The earliest surviving written record was compiled by Buddhist monk Iryeon in 1281 CE—more than 1,200 years after the alleged events of 48 CE.',
      detailedExplanation:
        'Historiographical analysis demonstrates that 13th-century Goryeo scholars frequently synthesized oral folklore, Buddhist cosmography, and royal genealogies to reinforce native cultural prestige during the Mongol invasions. The Samguk Yusa is revered as a literary and spiritual classic rather than a contemporary sovereign court chronicle of the 1st century.',
      primarySources: 'Samguk Yusa, compiled by Il-yeon (1206–1289 CE), National Treasure of South Korea.'
    },
    {
      id: 'cultural',
      name: 'Modern Cultural Connection',
      badge: 'Sister City & Memorial',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      labelType: 'Cultural memory',
      shortSummary:
        'Gimhae and Ayodhya signed an official sister-city pact in 2001, culminating in the Queen Heo Hwang-ok Memorial Park on the banks of the Saryu River.',
      detailedExplanation:
        'In 2018, South Korean First Lady Kim Jung-sook visited Ayodhya for the Deepotsav festival and laid the foundation stone for an expanded memorial complex. Every year, cultural delegations travel between Gimhae and Uttar Pradesh, celebrating this ancient narrative as a bond of bilateral warmth, friendship, and shared civilizational respect.',
      primarySources: 'Gimhae City Hall International Relations Registry & Ministry of Culture, Government of India.'
    },
    {
      id: 'scholarly',
      name: 'Scholarly Debate',
      badge: 'Academic Disputation',
      badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      labelType: 'Debated identification',
      shortSummary:
        'Historians debate whether "Ayuta" (阿踰陀) refers to Ayodhya in India, Ayutthaya in Thailand, an ancient maritime port in Southeast Asia, or an idealized Buddhist concept.',
      detailedExplanation:
        'Linguists and historians have raised several counter-theses: Ayutthaya in Thailand was only founded in 1351 CE; other scholars suggest an Indianized maritime port in Sumatra or coastal southern China. Still others propose that "Ayuta" was a Sanskrit-derived metaphor ("unconquerable") symbolizing divine royalty rather than a literal geographic passport.',
      primarySources: 'Kim Byung-mo, "Queen Hwang-ok of Garak: Myth and Reality"; Prof. Cho Heung-youn studies.'
    },
    {
      id: 'archaeological',
      name: 'Archaeological Evidence',
      badge: 'Inconclusive / Pagoda',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      labelType: 'No established genetic proof',
      shortSummary:
        'The Pasa Stone Pagoda at Queen Heo’s tomb is made of non-Korean stone, but genetic tests on Gaya royal remains have produced no peer-reviewed proof of Indian ancestry.',
      detailedExplanation:
        'Geological surveys confirm that the stone blocks of the Pasa Seoktap pagoda in Gimhae differ from local Korean granite and sedimentary formations, suggesting they may have arrived as seafaring ship ballast. However, molecular genetic studies conducted on ancient Gaya skeletal remains show dominant East Asian haplogroups with no verified ancient North Indian royal lineages.',
      primarySources: 'National Museum of Korea Research Reports; Korean Society of Human Genetics.'
    }
  ]

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <section id="korea-ayodhya" className="py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Tradition, Archaeology & Source Inquiry
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
            Korea & Ayodhya: Queen Heo Hwang-ok
          </h2>
          <p className="font-deva text-sm text-gold-300/80 mt-1">
            {KOREA_AYODHYA_ANALYSIS.koreanTitle}
          </p>
          <p className="mt-2 font-body text-sm text-stone-300 leading-relaxed">
            An interactive evidence panel exploring the 2,000-year traditional link between King Suro of Gaya and Princess Suriratna of Ayuta.
          </p>
        </div>

        {/* Core Epistemic Standard Banner */}
        <div className="p-4 sm:p-5 rounded-2xl border border-gold-500/30 bg-black/60 backdrop-blur-md max-w-4xl mx-auto mb-8 flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs font-body">
            <span className="font-display font-bold text-gold-200 block text-xs uppercase tracking-wider mb-1">
              AUM Epistemic Caution & Scholarly Standard:
            </span>
            <p className="text-stone-300 leading-relaxed italic">
              “{KOREA_AYODHYA_ANALYSIS.verdictSummary}”
            </p>
          </div>
        </div>

        {/* INTERACTIVE TABBED EVIDENCE PANEL */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#0e1222] to-black shadow-2xl p-6 sm:p-8">
          {/* 5 Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-white/10 no-scrollbar">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsFullExplanationExpanded(false)
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-display whitespace-nowrap transition border ${
                    isSelected
                      ? 'border-gold-400 bg-gold-500/25 text-white font-bold shadow-md'
                      : 'border-white/10 bg-black/40 text-stone-400 hover:text-white hover:border-gold-500/30'
                  }`}
                >
                  {tab.name}
                </button>
              )
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-6 space-y-5 animate-fadeIn">
            {/* Header of Active Tab with Mandated Label */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-100">
                {currentTab.name}
              </h3>

              {/* Explicit Scholarly Category Label */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-stone-400 font-body">Classification:</span>
                <span className="px-3 py-1 rounded-full text-xs font-display font-semibold border bg-black/60 border-gold-400/40 text-gold-200">
                  {currentTab.labelType}
                </span>
              </div>
            </div>

            {/* Short Summary First */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs sm:text-sm font-body text-stone-200 leading-relaxed">
              <span className="font-bold text-gold-300 block text-[10px] uppercase tracking-wider mb-1">
                Concise Summary
              </span>
              <p>{currentTab.shortSummary}</p>
            </div>

            {/* Expandable "Read the full explanation" */}
            <div className="border border-gold-500/20 rounded-2xl bg-black/40 overflow-hidden">
              <button
                type="button"
                onClick={() => setIsFullExplanationExpanded(!isFullExplanationExpanded)}
                className="w-full p-4 flex items-center justify-between text-xs font-display font-semibold text-gold-300 hover:text-gold-100 hover:bg-gold-500/10 transition"
              >
                <span>{isFullExplanationExpanded ? 'Hide Detailed Analysis' : 'Read the Full Explanation'}</span>
                {isFullExplanationExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isFullExplanationExpanded && (
                <div className="p-4 sm:p-5 border-t border-gold-500/20 text-xs font-body text-stone-300 leading-relaxed space-y-3 bg-[#080c18]/80 animate-fadeIn">
                  <p>{currentTab.detailedExplanation}</p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="text-gold-400 font-semibold">Primary Reference:</span>
                    <span>{currentTab.primarySources}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Verification Checklist Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 text-[10px] font-display text-stone-400">
              <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Textual Tradition</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Cultural Memory</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Diplomatic Ties</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Genetic Proof: None</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
