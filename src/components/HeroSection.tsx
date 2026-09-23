import { 
  ArrowRight, 
  Compass, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Landmark, 
  Flame, 
  Globe2, 
  Atom, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  Layers,
  Shield,
  HeartHandshake
} from 'lucide-react'
import CentralMandalaPortal from './CentralMandalaPortal'
import templeBackdropImg from '../assets/images/sacred_temple_1789619561869.jpg'
import { SITE } from '../data/siteConfig'

interface HeroSectionProps {
  reducedMotion: boolean
  onNavigate: (href: string) => void
  onOpenFullscreenOrbit?: () => void
}

export default function HeroSection({ reducedMotion, onNavigate }: HeroSectionProps) {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* =========================================================================
          HERO BANNER: 3-COLUMN COMPOSITION MATCHING REFERENCE DESIGN
          ========================================================================= */}
      <section
        id="orbit"
        className="relative min-h-[100svh] pt-24 pb-16 flex flex-col justify-center overflow-hidden"
      >
        {/* Background: Majestic sunrise temple spires in mist from reference image */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <img
            src={templeBackdropImg}
            alt="Sacred temple sunrise panorama"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.08] scale-105"
          />
          {/* Subtle twilight, deep midnight blue, and golden mist overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050b]/96 via-[#030612]/75 to-[#02050b]/96" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-transparent to-[#020409]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,197,107,0.14),transparent_65%)]" />
        </div>

        {/* 3-Column Layout Container */}
        <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] items-center gap-8 lg:gap-6 py-6">
          
          {/* =====================================================================
              LEFT COLUMN: Branding, Title, Tagline
              ===================================================================== */}
          <div className="flex flex-col text-left space-y-4 max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-black/50 backdrop-blur-md w-fit">
              <span className="font-deva text-base text-gold-400 leading-none">ॐ</span>
              <span className="h-3 w-px bg-gold-400/40" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold-200 font-display font-medium">
                SANĀTANA · HINDU CIVILIZATION · KNOWLEDGE
              </span>
            </div>

            <div>
              <h1 className="font-display font-bold tracking-tight leading-[0.95] text-gold-50 text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-glow">
                SANĀTANA
              </h1>
              <h2 className="mt-2.5 font-display font-semibold leading-[1.1] text-xl sm:text-2xl md:text-3xl text-gold-300 tracking-wide">
                A CIVILIZATION OF KNOWLEDGE
              </h2>
            </div>

            <p className="font-display italic text-lg sm:text-xl text-gold-200/95 leading-relaxed">
              “{SITE.tagline}”
            </p>

            <p className="font-body text-xs sm:text-sm text-gold-300/80 leading-relaxed max-w-md">
              A living Hindu civilizational knowledge system exploring Śāstra, sacred geography, historical memory, Indic sciences, and unapologetic philosophical inquiry.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => onNavigate('#explore')}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-amber-400 px-5 py-2.5 text-xs font-display font-bold text-void shadow-[0_0_25px_rgba(232,197,107,0.3)] hover:brightness-110 transition"
              >
                Enter AUM <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('#verify')}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-black/40 px-4 py-2.5 text-xs font-display text-gold-300 hover:text-gold-100 transition"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> AUM Verify
              </button>
            </div>

            {/* Sacred Verse Citation */}
            <div className="pt-4 border-t border-gold-500/20">
              <div className="flex items-center gap-2">
                <span className="font-deva text-xs sm:text-sm text-gold-300 font-medium">
                  ॥ यतो धर्मस्ततो जयः ॥
                </span>
                <span className="text-[10.5px] text-gold-400/70 font-body">— Mahābhārata (Udyoga Parva)</span>
              </div>
              <p className="mt-1 font-body text-[11px] text-gold-300/65 italic">
                "Where there is Dharma, there is victory. Grounded in eternal truth, intellectual rigor, and civilizational courage."
              </p>
            </div>
          </div>

          {/* =====================================================================
              CENTER COLUMN: Central ॐ Interface & Surrounding Portals
              ===================================================================== */}
          <div className="flex flex-col items-center justify-center relative py-4">
            <CentralMandalaPortal reducedMotion={reducedMotion} onNavigate={onNavigate} />
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gold-500/25 text-gold-300/80 font-body text-[10px] tracking-wider uppercase">
              <Compass className="w-3 h-3 text-gold-400" />
              <span>Select any portal to begin civilizational exploration</span>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Ancient Wisdom, Modern Access, Pillars
              ===================================================================== */}
          <div className="flex flex-col text-left lg:text-right space-y-5 max-w-xl mx-auto lg:ml-auto lg:mr-0">
            <div className="space-y-1.5 font-display">
              <p className="text-2xl sm:text-3xl font-bold text-gold-100">
                Ancient Wisdom
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-gold-300">
                Civilizational Memory
              </p>
              <p className="text-lg sm:text-xl text-gold-400 font-medium">
                Eternal Dharma
              </p>
            </div>

            {/* Framed Divider Box: Knowledge | Culture | Dharma | Future */}
            <div className="p-3.5 sm:p-4 rounded-2xl border border-gold-500/35 bg-black/60 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between text-xs sm:text-[13px] font-display font-semibold tracking-wider text-gold-200">
                <span>Śāstra</span>
                <span className="text-gold-500/50">|</span>
                <span>Tīrtha</span>
                <span className="text-gold-500/50">|</span>
                <span>Smṛti</span>
                <span className="text-gold-500/50">|</span>
                <span>Saṅgha</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="font-display text-xs sm:text-[13px] tracking-[0.25em] text-gold-300/85 uppercase font-medium">
              PRESERVE · UNDERSTAND · PROTECT · TRANSMIT
            </div>

            {/* Civilizational Commitments */}
            <div className="space-y-2.5 pt-2 text-xs font-body text-gold-200/75">
              <div className="flex items-start lg:justify-end gap-2">
                <span>Primary Sanskrit Śāstras & Commentaries</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
              <div className="flex items-start lg:justify-end gap-2">
                <span>Sacred Geography of Bharatavarsha & Global Temples</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
              <div className="flex items-start lg:justify-end gap-2">
                <span>Civilizational History, Resilience & Pratirodha</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
              <div className="flex items-start lg:justify-end gap-2">
                <span>Source-Verified Defense Against Misconceptions</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE SIX CORE OBJECTIVES OF AUM (CIVILIZATIONAL MANDATE)
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-gold-500/20">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> The Civilizational Mandate of AUM
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
            Grounded in Dharma. Confident in Truth.
          </h2>
          <p className="mt-4 font-body text-sm sm:text-base text-gold-200/80 leading-relaxed">
            AUM is built with an unapologetic, source-conscious Hindu civilizational identity. We do not dilute Sanātana Dharma to appear artificially neutral, nor do we reduce sacred traditions to mere folklore. We preserve memory, study knowledge, protect heritage, and inspire the next generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              sanskrit: 'स्मृतिसंरक्षणम्',
              label: 'PRESERVE HINDU MEMORY',
              desc: 'Document the multi-millennial Hindu historical experience openly and comprehensively—including temple destruction, religious persecution, colonial hegemony, heroic resistance (Pratirodha), and continuous cultural survival—grounded in inscriptions, archives, and verified evidence.',
              icon: Flame,
              route: '#smriti'
            },
            {
              sanskrit: 'शास्त्रविज्ञानम्',
              label: 'UNDERSTAND HINDU KNOWLEDGE',
              desc: 'Systematically explore the profound ocean of Hindu philosophy: the Vedas, Upaniṣads, Six Classical Darśana systems, Itihāsa, Purāṇas, Āgamas, and Indic sciences from their primary Sanskrit sources and classical commentaries.',
              icon: BookOpen,
              route: '#shastra'
            },
            {
              sanskrit: 'तीर्थपरिरक्षणम्',
              label: 'PROTECT HINDU HERITAGE',
              desc: 'Champion the sacred geography of Bharatavarsha and worldwide Hindu shrines: Char Dham, 12 Jyotirlingas, 51 Shakti Peethas, traditional temple architecture, stone epigraphy, rituals, and the sacred living landscape.',
              icon: Landmark,
              route: '#tirtha'
            },
            {
              sanskrit: 'ज्ञानसङ्क्रमणम्',
              label: 'TRANSMIT SANĀTANA KNOWLEDGE',
              desc: 'Pass down timeless dharmic foundations, sacred stories, Sanskrit phonetics, ethical principles, and civilizational pride to the next generation through the Young Seekers sanctuary.',
              icon: GraduationCap,
              route: '#young-seekers'
            },
            {
              sanskrit: 'विश्वहिन्दुसंघः',
              label: 'CONNECT HINDUS WORLDWIDE',
              desc: 'Unite Hindu communities across all continents: celebrate historical civilizational kingdoms (Cholas, Guptas, Vijayanagara, Angkor Wat, Prambanan) and chronicle vibrant contemporary Hindu diaspora life across the globe.',
              icon: Globe2,
              route: '#vishva-sangha'
            },
            {
              sanskrit: 'प्रमाणप्रामाण्यम्',
              label: 'INSPIRE CIVILIZATIONAL CONFIDENCE',
              desc: 'Equip Hindus with intellectual courage and source-verified truth through AUM Verify: systematically refuting misconceptions, anti-Hindu distortions, and manipulated quotes with primary evidence and scholarly rigour.',
              icon: ShieldCheck,
              route: '#verify'
            }
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md hover:border-gold-400/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gold-500/15">
                    <span className="font-deva text-xs sm:text-sm text-gold-400 font-medium">{item.sanskrit}</span>
                    <span className="w-8 h-8 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-gold-100 tracking-wide">
                    {item.label}
                  </h3>
                  <p className="mt-3 font-body text-xs sm:text-sm text-gold-300/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate(item.route)}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-display font-semibold text-gold-400 hover:text-gold-200 transition-colors"
                >
                  Explore Chamber <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          THE 4-TIER EPISTEMIC FRAMEWORK (SOURCE-AWARE RIGOR)
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 border-t border-gold-500/20">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#120822]/90 via-[#0a0515]/95 to-[#120822]/90 border border-gold-500/30 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-[11px] uppercase tracking-widest font-semibold">
              <Layers className="w-3.5 h-3.5 text-gold-400" /> Epistemic Architecture
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-gold-100 text-glow">
              How AUM Studies Sanātana Dharma
            </h3>
            <p className="mt-3 font-body text-xs sm:text-sm text-gold-200/75 leading-relaxed">
              We present traditional Hindu perspectives with profound reverence while rigorously distinguishing primary scripture, living commentary lineages, archaeological evidence, and modern scholarly analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-black/50 border border-gold-500/20">
              <div className="flex items-center justify-between text-gold-400 text-xs font-mono mb-2">
                <span>TIER 01</span>
                <span className="font-deva">शास्त्रम्</span>
              </div>
              <h4 className="font-display text-lg font-bold text-gold-100">Śāstric Teaching</h4>
              <p className="mt-2 text-xs font-body text-gold-300/70 leading-relaxed">
                Primary revealed and remembered texts: Śruti (Vedas, Upaniṣads), Smṛti, Sūtras, and canonical scriptures studied in their original Sanskrit wording.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/50 border border-gold-500/20">
              <div className="flex items-center justify-between text-gold-400 text-xs font-mono mb-2">
                <span>TIER 02</span>
                <span className="font-deva">भाष्यपरम्परा</span>
              </div>
              <h4 className="font-display text-lg font-bold text-gold-100">Traditional Interpretation</h4>
              <p className="mt-2 text-xs font-body text-gold-300/70 leading-relaxed">
                Classical commentaries (Bhāṣyas) from authentic lineage ācāryas and sampradāyas (Advaita, Viśiṣṭādvaita, Dvaita, Śaiva, Śākta) that have guided generations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/50 border border-gold-500/20">
              <div className="flex items-center justify-between text-gold-400 text-xs font-mono mb-2">
                <span>TIER 03</span>
                <span className="font-deva">शिलालेखप्रमाणम्</span>
              </div>
              <h4 className="font-display text-lg font-bold text-gold-100">Historical & Epigraphy</h4>
              <p className="mt-2 text-xs font-body text-gold-300/70 leading-relaxed">
                Archaeological Survey of India (ASI) excavations, stone and copper-plate inscriptions, temple plinth records, numismatics, and primary chronicles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/50 border border-gold-500/20">
              <div className="flex items-center justify-between text-gold-400 text-xs font-mono mb-2">
                <span>TIER 04</span>
                <span className="font-deva">आधुनिकशोधः</span>
              </div>
              <h4 className="font-display text-lg font-bold text-gold-100">Modern Scholarship</h4>
              <p className="mt-2 text-xs font-body text-gold-300/70 leading-relaxed">
                Rigorous peer-reviewed historical, philological, astronomical dating, and scientific evaluations that examine civilizational claims with objective scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PILLARS OF HINDU CIVILIZATION (EXPLORE THE CHAMBERS)
          ========================================================================= */}
      <section id="explore" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-gold-500/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-body text-xs uppercase tracking-widest text-gold-400 font-semibold">Chambers of Civilizational Heritage</p>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-gold-100 text-glow">
            The Living Architecture of AUM
          </h2>
          <p className="mt-3 font-body text-sm sm:text-base text-gold-300/75">
            Enter any portal below to explore scriptures, sacred geography, historical memory, and living traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { 
              id: 'shastra', 
              name: 'Śāstra & Philosophy', 
              sa: 'शास्त्रम् · दर्शनम्', 
              desc: 'The Vedas, Upaniṣads, Bhagavad Gītā, Six Darśana systems, Purāṇas, and the Itihāsas (Rāmāyaṇa & Mahābhārata).', 
              href: '#shastra',
              icon: BookOpen
            },
            { 
              id: 'tirtha', 
              name: 'Tīrtha & Sacred Geography', 
              sa: 'तीर्थम् · मन्दिरभूगोलः', 
              desc: 'The sacred landscape of Bharatavarsha: Char Dham, 12 Jyotirlingas, 51 Shakti Peethas, and classical temple architecture.', 
              href: '#tirtha',
              icon: Landmark
            },
            { 
              id: 'smriti', 
              name: 'Smṛti & Historical Memory', 
              sa: 'स्मृतिः · इतिहासचेतना', 
              desc: 'Civilizational memory, documentation of temple destructions, periods of persecution, heroic resistance (Pratirodha), and cultural survival.', 
              href: '#smriti',
              icon: Flame
            },
            { 
              id: 'vishva-sangha', 
              name: 'Vishva Saṅgha (Global Hindu)', 
              sa: 'विश्व संघः · साम्राज्यम्', 
              desc: 'Global Hindu presence, ancient maritime civilizational kingdoms (Chola, Gupta, Angkor Wat, Prambanan), and contemporary diaspora communities.', 
              href: '#vishva-sangha',
              icon: Globe2
            },
            { 
              id: 'dharma', 
              name: 'Dharma, Yoga & Darśana', 
              sa: 'धर्मः · योगः · मोक्षः', 
              desc: 'The Four Puruṣārthas, Karma, Mokṣa, the Six Darśana schools, and the Four Yogas grounded in primary scriptural passages.', 
              href: '#dharma',
              icon: Sparkles
            },
            { 
              id: 'festivals', 
              name: 'Festivals & Living Traditions', 
              sa: 'उत्सवाः · संस्काराः', 
              desc: 'The living Hindu lunar calendar, festive observances, regional traditions, and sacred rituals including Vināyaka Chavithi.', 
              href: '#festivals',
              icon: Calendar
            },
            { 
              id: 'science', 
              name: 'Science & Indic Knowledge', 
              sa: 'ज्ञानविज्ञानम् · आयुर्वेदः', 
              desc: 'Historical Indian knowledge systems: Vaidika mathematics, Jyotiṣa astronomy, Āyurveda, metallurgy, architecture, and linguistics.', 
              href: '#science',
              icon: Atom
            },
            { 
              id: 'verify', 
              name: 'AUM Verify (Source Integrity)', 
              sa: 'प्रमाणम् · सत्यशोधनम्', 
              desc: 'Source-aware verification of Sanskrit verses, historical claims, and anti-Hindu misconceptions with primary citations.', 
              href: '#verify',
              icon: ShieldCheck
            },
            { 
              id: 'young-seekers', 
              name: 'Young Seekers (Next Gen)', 
              sa: 'बाल साधकाः · ज्ञानप्रसारः', 
              desc: 'Sacred stories, daily ślokas, Sanskrit lab, and civilizational identity for children and young seekers.', 
              href: '#young-seekers',
              icon: GraduationCap
            },
          ].map((portal) => {
            const Icon = portal.icon
            return (
              <button
                key={portal.id}
                type="button"
                onClick={() => onNavigate(portal.href)}
                className="text-left p-6 sm:p-7 rounded-3xl bg-black/40 border border-gold-500/20 hover:border-gold-400/60 hover:bg-gold-950/40 transition-all group shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gold-500/15">
                    <span className="font-deva text-xs sm:text-sm text-gold-400/90 font-medium">{portal.sa}</span>
                    <Icon className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-gold-100 group-hover:text-glow">
                    {portal.name}
                  </h3>
                  <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">
                    {portal.desc}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-display font-semibold text-gold-400 group-hover:text-gold-200 transition-colors">
                  <span>Enter Chamber</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          CIVILIZATIONAL PLEDGE & SANCTUARY ETHOS
          ========================================================================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <div className="p-8 sm:p-10 rounded-3xl bg-gold-950/40 border border-gold-500/25 text-center shadow-xl">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="h-px w-12 bg-gold-500/30" />
            <span className="font-deva text-2xl text-gold-400">ॐ तत्सत्</span>
            <span className="h-px w-12 bg-gold-500/30" />
          </div>
          <h4 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
            A Civilizational Pledge
          </h4>
          <p className="mt-3 font-body text-xs sm:text-sm text-gold-200/85 leading-relaxed max-w-3xl mx-auto">
            "AUM exists to preserve what was forgotten, illuminate what was obscured, and transmit what is eternal. Grounded in Dharma, verified through Pramāṇa, and dedicated to the enduring heritage of Hindu civilization."
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-display text-gold-300/80">
            <span className="px-3.5 py-1.5 rounded-full bg-black/50 border border-gold-500/20">PRESERVE HINDU MEMORY</span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/50 border border-gold-500/20">UNDERSTAND HINDU KNOWLEDGE</span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/50 border border-gold-500/20">PROTECT HINDU HERITAGE</span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/50 border border-gold-500/20">TRANSMIT SANĀTANA KNOWLEDGE</span>
          </div>
        </div>
      </section>
    </div>
  )
}
