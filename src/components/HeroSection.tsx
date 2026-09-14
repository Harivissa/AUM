import { Suspense } from 'react'
import { ArrowRight, MousePointer2, Search, ShieldCheck, Sparkles } from 'lucide-react'
import AUMUniverse from './AUMUniverse'
import StaticFallback from './StaticFallback'
import WaterfallBackdrop from './WaterfallBackdrop'
import { useWebGLSupport } from '../hooks/useWebGLSupport'
import { SITE } from '../data/siteConfig'

interface HeroSectionProps {
  reducedMotion: boolean
  onNavigate: (href: string) => void
  onOpenFullscreenOrbit: () => void
}

export default function HeroSection({ reducedMotion, onNavigate, onOpenFullscreenOrbit }: HeroSectionProps) {
  const webglSupported = useWebGLSupport()

  return (
    <section id="orbit" className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      <WaterfallBackdrop />

      <div className="absolute inset-0 pointer-events-none">
        {['ॐ','सत्यं','धर्मः','ज्ञानम्','ऋतम्','वेदाः','योगः','शान्तिः','आत्मा'].map((word, i) => (
          <span key={`${word}-${i}`} className="absolute font-deva text-gold-100/[.10] text-xl select-none" style={{ left: `${7 + (i * 13) % 90}%`, top: `${18 + (i * 17) % 68}%`, animation: reducedMotion ? 'none' : `aumFloat ${10 + (i % 4)}s ease-in-out ${i * .4}s infinite` }}>{word}</span>
        ))}
      </div>

      <div className="relative z-10 max-w-[1540px] mx-auto px-5 sm:px-8 lg:px-12 min-h-[calc(100svh-6rem)] grid lg:grid-cols-[.82fr_1.18fr] items-center gap-2 lg:gap-0">
        <div className="relative z-20 max-w-2xl py-10 lg:py-0 lg:pr-4 xl:pr-10">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[.24em] text-gold-300 font-body">
            <span className="h-px w-9 bg-gold-400/60" />
            <span>{SITE.eyebrow}</span>
            <span className="h-px w-9 bg-gold-400/60" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-deva text-3xl text-gold-400 text-glow">ॐ</span>
            <span className="h-px w-24 bg-gradient-to-r from-gold-400/60 to-transparent" />
          </div>

          <h1 className="mt-4 font-display font-semibold tracking-[-.035em] leading-[.88] text-gold-50 text-[4.2rem] sm:text-[5.8rem] lg:text-[5.6rem] xl:text-[6.7rem] text-glow">
            SANĀTANA
          </h1>
          <h2 className="mt-4 font-display font-medium leading-[.98] text-[2rem] sm:text-[2.55rem] lg:text-[2.5rem] xl:text-[3rem] text-gold-300">
            A CIVILIZATION OF KNOWLEDGE
          </h2>
          <p className="mt-5 font-display italic text-xl sm:text-2xl text-gold-100/90">
            {SITE.tagline}
          </p>
          <p className="mt-5 max-w-xl font-body text-sm sm:text-[15px] leading-7 text-gold-100/65">
            {SITE.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button type="button" onClick={() => onNavigate('#explore')} className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-xs font-body font-semibold text-void shadow-[0_0_35px_rgba(232,197,107,.22)] hover:brightness-110 transition">
              Enter AUM <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" onClick={() => onNavigate('#shastra')} className="inline-flex items-center gap-2 rounded-full border border-gold-300/35 bg-black/35 px-5 py-3 text-xs font-body text-gold-100 hover:bg-gold-500/10 transition">
              <Search className="w-3.5 h-3.5" /> Explore Śāstra
            </button>
            <button type="button" onClick={() => onNavigate('#verify')} className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-black/25 px-5 py-3 text-xs font-body text-gold-300/80 hover:text-gold-100 transition">
              <ShieldCheck className="w-3.5 h-3.5" /> AUM Verify
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-gold-400/30" />
            <span className="font-deva text-sm sm:text-base text-gold-300/80">॥ यत्र विश्वं भवत्येकनीडम् ॥</span>
            <div className="h-px w-12 bg-gold-400/30" />
          </div>
          <p className="mt-1 pl-16 font-body text-[10px] uppercase tracking-[.16em] text-gold-400/55">A poetic civilizational motif · source status should be shown when used as a quotation</p>

          <div className="mt-8 flex items-center gap-2 text-gold-300/55">
            <MousePointer2 className="w-3.5 h-3.5" />
            <span className="font-body text-[10px] uppercase tracking-[.18em]">The 3D mandala is the navigation</span>
          </div>
        </div>

        <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[760px] xl:min-h-[820px] -mr-3 sm:-mr-8 lg:-mr-14">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_48%,rgba(232,197,107,.14),transparent_32%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,.08),transparent_26%)]" />
          <div className="absolute inset-0">
            {webglSupported ? (
              <Suspense fallback={<StaticFallback onNavigate={onNavigate} />}>
                <AUMUniverse reducedMotion={reducedMotion} onNavigate={onNavigate} />
              </Suspense>
            ) : <StaticFallback onNavigate={onNavigate} />}
          </div>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/45 border border-gold-500/20 backdrop-blur-md pointer-events-none">
            <span className="font-body text-[9px] sm:text-[10px] uppercase tracking-[.22em] text-gold-400/80">Śāstra · Tīrtha · Itihāsa · Smṛti · Dharma</span>
          </div>
          <button type="button" onClick={onOpenFullscreenOrbit} className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 rounded-full border border-gold-400/25 bg-black/55 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-[.18em] text-gold-300 hover:bg-gold-500/10 transition">
            Open immersive universe ↗
          </button>
        </div>
      </div>

      {/* Premium Explanation Section: What is AUM? */}
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
          <div className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md gold-glow-box-hover transition-all">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center font-deva text-gold-400 text-lg">
              ॐ
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-gold-100">Digital Knowledge Sanctuary</h3>
            <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">
              Explore Śāstra, Vedas, Upaniṣads, Itihāsa, Purāṇas, Tīrtha, Devatā, Dharma, Smṛti, and living festivals in a structured, interactive sanctuary.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md gold-glow-box-hover transition-all">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-gold-100">Traditional Wisdom & Modern Inquiry</h3>
            <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">
              Serves as a bridge between traditional canonical understanding and careful modern inquiry, allowing deep study without distorting primary texts.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-black/45 border border-gold-500/20 backdrop-blur-md gold-glow-box-hover transition-all">
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

      {/* Elegant "Explore the AUM Knowledge Universe" Section */}
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
            { id: 'smriti', name: 'Smṛti', sa: 'स्मृतिः', desc: 'Tolerance, civilizational memory & history', href: '#smriti' },
            { id: 'dharma', name: 'Dharma', sa: 'धर्मः', desc: 'Duty, Karma, Mokṣa, Yoga & Darśanas', href: '#dharma' },
            { id: 'verify', name: 'AUM Verify', sa: 'प्रमाणम्', desc: 'Source-aware verification of Sanskrit claims', href: '#verify' },
            { id: 'science', name: 'Science & Knowledge', sa: 'ज्ञानविज्ञान', desc: 'Ancient Indian knowledge traditions & evidence', href: '#science' },
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
    </section>
  )
}

