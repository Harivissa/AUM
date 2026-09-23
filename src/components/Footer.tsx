import { ArrowUp, Sparkles, ShieldCheck } from 'lucide-react'
import { PORTALS } from '../data/siteConfig'

export default function Footer() {
  const scrollToTop = () => {
    const reduced = window.localStorage.getItem('aum:reduced-motion') === 'true' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#060411] via-[#04030a] to-[#020105] border-t border-gold-500/25 pt-16 pb-10 text-gold-200 z-10 transition-colors duration-300">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gold-500/15">
          {/* Brand & Sacred Statement (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-gold-600/30 to-gold-400/20 border border-gold-400/40 shadow-[0_0_15px_rgba(232,197,107,0.25)]">
                <span className="font-deva text-xl font-bold text-gold-200">ॐ</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-gold-100 text-glow">
                  AUM
                </span>
                <span className="ml-2 font-body text-[10px] uppercase tracking-widest2 text-gold-400 font-semibold px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                  Knowledge Sanctuary
                </span>
              </div>
            </div>

            <p className="font-display italic text-base text-gold-300">
              Where Science Ends, Sanātana Continues.
            </p>
            <p className="font-body text-xs sm:text-sm text-gold-300/75 leading-relaxed font-light">
              An authentic digital knowledge sanctuary dedicated to Sanātana Dharma, canonical Śāstra, sacred geography, historical memory, and the transmission of Hindu civilizational heritage to future generations.
            </p>

            {/* Sacred Benediction */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-gold-500/20 shadow-inner">
              <p className="font-deva text-xs sm:text-sm text-gold-300 font-medium">
                ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
              </p>
              <span className="block mt-1 font-body text-[10px] text-gold-500/70 italic">
                Om Asato Ma Sadgamaya — Lead us from ignorance to Truth, from darkness to Light.
              </span>
            </div>
          </div>

          {/* Sacred Portals Navigation (3 cols) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h4 className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Sacred Portals
            </h4>
            <ul className="space-y-2 font-body text-xs text-gold-300/80">
              {PORTALS.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.href}
                    className="hover:text-gold-100 transition-colors flex items-center justify-between py-0.5 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{p.label}</span>
                    <span className="font-deva text-[11px] text-gold-500/70">{p.sanskrit}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Living Wisdom & Verification Links (4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <h4 className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Living Wisdom & Verification
            </h4>
            <ul className="space-y-2.5 font-body text-xs text-gold-300/80">
              <li><a href="#shastra" className="hover:text-gold-100 transition-colors block">✦ Śāstra · Vedas · Purāṇas · Gītā</a></li>
              <li><a href="#shastra" className="hover:text-gold-100 transition-colors block">✦ Itihāsa · Rāmāyaṇa & Mahābhārata</a></li>
              <li><a href="#tirtha" className="hover:text-gold-100 transition-colors block">✦ Tīrtha · Sacred Places & Temples</a></li>
              <li><a href="#festivals" className="hover:text-gold-100 transition-colors block">✦ Festivals · Vināyaka Chavithi</a></li>
              <li><a href="#smriti" className="hover:text-gold-100 transition-colors block">✦ Smṛti · Civilizational Memory & History</a></li>
              <li><a href="#vishva-sangha" className="hover:text-gold-100 transition-colors block">✦ Vishva Saṅgha · Global Hindu Heritage</a></li>
              <li><a href="#verify" className="hover:text-gold-100 transition-colors block">✦ AUM Verify · Source Integrity</a></li>
            </ul>
          </div>
        </div>

        {/* High-End Decorative Signature Panel (Single Hari Vissa Mention) */}
        <div className="my-10 relative overflow-hidden rounded-3xl border border-gold-400/35 bg-gradient-to-r from-gold-950/70 via-[#110a2c]/90 to-gold-950/70 p-6 sm:p-8 shadow-2xl">
          {/* Delicate Sacred Geometry Backdrop Circles */}
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-gold-400/10 pointer-events-none" />
          <div className="absolute -right-4 -top-4 w-32 h-32 rounded-full border border-gold-400/15 pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Signature Area */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 p-[1.5px] shadow-[0_0_20px_rgba(232,197,107,0.3)]">
                  <div className="w-full h-full rounded-full bg-[#070512] flex items-center justify-center font-display font-bold text-gold-200 text-xl tracking-wider">
                    HV
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-gold-400/50 flex items-center justify-center">
                  <span className="font-deva text-[9px] text-gold-400">ॐ</span>
                </div>
              </div>

              <div>
                <p className="font-display text-base sm:text-lg font-bold text-gold-100 text-glow">
                  Developed by Hari Vissa
                </p>
                <p className="font-body text-xs text-gold-300/80 mt-0.5">
                  Full-Stack & 3D Web Architect
                </p>
                <p className="font-body text-[10px] text-gold-400/60 mt-1">
                  Engineered with React, Three.js & Web Audio API
                </p>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-void font-body font-semibold text-xs transition shadow-md shrink-0"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Legal & Copyright Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-gold-500/60 text-center sm:text-left border-t border-gold-500/10">
          <div>
            © {new Date().getFullYear()} AUM Sanātana Universe · All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a href="#dharma" className="hover:text-gold-300 transition">Sanātana Heritage</a>
            <span>·</span>
            <a href="#verify" className="hover:text-gold-300 transition">Fact Integrity</a>
            <span>·</span>
            <a href="#science" className="hover:text-gold-300 transition">Science & Śāstra</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

