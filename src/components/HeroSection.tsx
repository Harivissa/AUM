import { ArrowRight, Compass, Search, ShieldCheck, Sparkles } from 'lucide-react'
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
                SANĀTANA · KNOWLEDGE · MEMORY
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
              A living digital knowledge system exploring Śāstra, sacred geography, civilizational memory, and eternal philosophical inquiry.
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
                onClick={() => onNavigate('#shastra')}
                className="inline-flex items-center gap-2 rounded-full border border-gold-400/35 bg-black/50 px-4 py-2.5 text-xs font-display text-gold-200 hover:bg-gold-500/20 hover:text-white transition"
              >
                <Search className="w-3.5 h-3.5 text-gold-400" /> Śāstra
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
                  ॥ यत्र विश्वं भवत्येकनीडम् ॥
                </span>
                <span className="text-[10.5px] text-gold-400/70 font-body">— Yajurveda 32.8</span>
              </div>
              <p className="mt-1 font-body text-[11px] text-gold-300/65 italic">
                "Where the entire universe meets in a single nest of shared knowledge and truth."
              </p>
            </div>
          </div>

          {/* =====================================================================
              CENTER COLUMN: Central ॐ Interface & Surrounding Portals
              - Static central ॐ (never moves, rotates, tilts, covered; NO orange ball)
              - 7 surrounding portals (Śāstra, Tīrtha, Smṛti, Dharma, Festivals, Verify, Young Seekers)
              ===================================================================== */}
          <div className="flex flex-col items-center justify-center relative py-4">
            <CentralMandalaPortal reducedMotion={reducedMotion} onNavigate={onNavigate} />
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gold-500/25 text-gold-300/80 font-body text-[10px] tracking-wider uppercase">
              <Compass className="w-3 h-3 text-gold-400" />
              <span>Select any portal to begin exploration</span>
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
                Modern Access
              </p>
              <p className="text-lg sm:text-xl text-gold-400 font-medium">
                A Brighter Tomorrow
              </p>
            </div>

            {/* Framed Divider Box: Knowledge | Culture | Dharma | Future */}
            <div className="p-3.5 sm:p-4 rounded-2xl border border-gold-500/35 bg-black/60 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between text-xs sm:text-[13px] font-display font-semibold tracking-wider text-gold-200">
                <span>Knowledge</span>
                <span className="text-gold-500/50">|</span>
                <span>Culture</span>
                <span className="text-gold-500/50">|</span>
                <span>Dharma</span>
                <span className="text-gold-500/50">|</span>
                <span>Future</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="font-display text-xs sm:text-[13px] tracking-[0.25em] text-gold-300/85 uppercase font-medium">
              EXPLORE · LEARN · QUESTION · PRESERVE
            </div>

            {/* Civilizational Commitments */}
            <div className="space-y-2.5 pt-2 text-xs font-body text-gold-200/75">
              <div className="flex items-start lg:justify-end gap-2">
                <span>Source-Verified Manuscripts & Itihāsa</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
              <div className="flex items-start lg:justify-end gap-2">
                <span>Sacred Geography & Temple Architecture</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
              <div className="flex items-start lg:justify-end gap-2">
                <span>Living Festivals & Cultural Continuity</span>
                <span className="text-gold-400 mt-0.5 font-bold">✓</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          WHAT IS AUM? CIVILIZATIONAL SANCTUARY SECTION
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-gold-500/20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> What is AUM?
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
            An Interactive Digital Knowledge Sanctuary
          </h2>
          <p className="mt-4 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
            AUM is a source-aware civilizational platform built to explore the vast heritage of Sanātana Dharma with clarity, reverence, and evidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md hover:border-gold-400/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center font-deva text-gold-400 text-lg">
              ॐ
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-gold-100">Digital Knowledge Sanctuary</h3>
            <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">
              Explore Śāstra, Vedas, Upaniṣads, Itihāsa, Purāṇas, Tīrtha, Devatā, Dharma, Smṛti, and living festivals in a structured, interactive sanctuary.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md hover:border-gold-400/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-gold-100">Traditional Wisdom & Modern Inquiry</h3>
            <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">
              Serves as a bridge between traditional canonical understanding and careful modern inquiry, allowing deep study without distorting primary texts.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md hover:border-gold-400/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-gold-100">Source-Aware Framework</h3>
            <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">
              Strictly distinguishes scripture, living sampradāya tradition, historical records, archaeological evidence, and modern scientific interpretations.
            </p>
          </div>
        </div>

        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gold-950/40 border border-gold-500/25 text-center max-w-3xl mx-auto">
          <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">
            <span className="font-semibold text-gold-300">Respect for Tradition:</span> AUM is designed for reference, education, and reflection. It is <span className="underline decoration-gold-400/50">not</span> a replacement for family traditions, temple rituals, or qualified lineage teachers (gurus).
          </p>
        </div>
      </section>

      {/* =========================================================================
          EXPLORE THE AUM KNOWLEDGE UNIVERSE SECTION
          ========================================================================= */}
      <section id="explore" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-gold-500/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-body text-xs uppercase tracking-widest text-gold-400 font-semibold">Chambers of Discovery</p>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-gold-100 text-glow">
            Explore the AUM Knowledge Universe
          </h2>
          <p className="mt-3 font-body text-sm sm:text-base text-gold-300/70">
            Enter any portal below to explore sacred texts, geography, living observances, and civilizational memory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 'shastra', name: 'Śāstra', sa: 'शास्त्रम्', desc: 'Vedas, Upaniṣads, Gītā, Purāṇas & Itihāsa', href: '#shastra' },
            { id: 'tirtha', name: 'Tīrtha', sa: 'तीर्थम्', desc: 'Sacred geography & temple architecture atlas', href: '#tirtha' },
            { id: 'devata', name: 'Devatā', sa: 'देवता', desc: 'Forms of worship, iconography & sampradāyas', href: '#devata' },
            { id: 'festivals', name: 'Festivals', sa: 'उत्सवाः', desc: 'Living calendar, rituals & Vināyaka Chavithi', href: '#festivals' },
            { id: 'vishva-sangha', name: 'Vishva Saṅgha', sa: 'विश्व संघः', desc: 'Global Hindu presence, historical kingdoms & diaspora', href: '#vishva-sangha' },
            { id: 'smriti', name: 'Smṛti', sa: 'स्मृतिः', desc: 'Tolerance, civilizational memory & history', href: '#smriti' },
            { id: 'dharma', name: 'Dharma', sa: 'धर्मः', desc: 'Duty, Karma, Mokṣa, Yoga & Darśanas', href: '#dharma' },
            { id: 'verify', name: 'AUM Verify', sa: 'प्रमाणम्', desc: 'Source-aware verification of Sanskrit claims', href: '#verify' },
            { id: 'young-seekers', name: 'Young Seekers', sa: 'बाल साधक', desc: 'Stories, concepts & wisdom for the next generation', href: '#young-seekers' },
          ].map((portal) => (
            <button
              key={portal.id}
              type="button"
              onClick={() => onNavigate(portal.href)}
              className="text-left p-5 sm:p-6 rounded-2xl bg-black/40 border border-gold-500/20 hover:border-gold-400/60 hover:bg-gold-950/40 transition-all group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-deva text-xs text-gold-400/80">{portal.sa}</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-gold-100 group-hover:text-glow">
                {portal.name}
              </h3>
              <p className="mt-2 font-body text-xs text-gold-300/65 leading-relaxed">
                {portal.desc}
              </p>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
