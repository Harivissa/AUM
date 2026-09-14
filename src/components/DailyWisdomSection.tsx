import { useState } from 'react'
import { Sparkles, Copy, Check, Bell, BookOpen, Sun, RefreshCw } from 'lucide-react'
import { DAILY_SHLOKAS } from '../data/dailyWisdom'
import { playSingingBowlChime } from '../utils/ambientSound'
import TiltCard3D from './TiltCard3D'

export default function DailyWisdomSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const shloka = DAILY_SHLOKAS[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_SHLOKAS.length)
  }

  const handleCopy = () => {
    const fullText = `${shloka.sanskrit}\n\n${shloka.transliteration}\n\n"${shloka.translation}"\n— ${shloka.source}`
    navigator.clipboard.writeText(fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePlayChime = () => {
    playSingingBowlChime()
  }

  return (
    <section id="wisdom" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <Sun className="w-3.5 h-3.5 text-gold-400" />
          Daily Contemplation
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
          Shloka of the Day
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          A timeless Sanskrit verse for daily mindful reflection, complete with word-by-word etymology,
          translation, and practical philosophical application.
        </p>
      </div>

      {/* Main 3D Shloka Card */}
      <TiltCard3D intensity={10} className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#110a2e]/95 via-[#070514] to-[#04030a] border border-gold-400/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold-500/20 pb-5">
            <div className="flex items-center gap-3">
              <span className="font-body text-xs px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 font-semibold uppercase tracking-wider">
                {shloka.day}
              </span>
              <span className="font-body text-xs text-gold-400/80">Theme: {shloka.theme}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlayChime}
                title="Ring singing bowl bell"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 hover:bg-gold-500/20 text-xs font-body transition"
              >
                <Bell className="w-3.5 h-3.5 text-gold-400" />
                <span>Chant Bell</span>
              </button>
              <button
                type="button"
                onClick={handleCopy}
                title="Copy Shloka"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 hover:bg-gold-500/20 text-xs font-body transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gold-400" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                title="Cycle to next Shloka"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-400 text-void font-body font-semibold text-xs hover:bg-gold-300 transition shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Next Shloka</span>
              </button>
            </div>
          </div>

          {/* Sanskrit Devanagari Typography */}
          <div className="my-8 text-center px-2">
            <p className="font-deva text-2xl sm:text-3xl lg:text-4xl text-gold-100 font-bold leading-relaxed tracking-devanagari text-glow whitespace-pre-line">
              {shloka.sanskrit}
            </p>
            <p className="font-body text-xs sm:text-sm text-gold-400/90 italic mt-4 whitespace-pre-line max-w-2xl mx-auto">
              {shloka.transliteration}
            </p>
            <span className="inline-block mt-3 font-body text-xs font-semibold text-gold-500">
              — {shloka.source}
            </span>
          </div>

          {/* Translation Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-gold-500/20 shadow-inner">
            <span className="font-body text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-2">
              English Translation
            </span>
            <p className="font-display text-base sm:text-xl text-gold-100 leading-relaxed font-medium">
              "{shloka.translation}"
            </p>
          </div>

          {/* Word by Word Analysis */}
          <div className="mt-6">
            <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold block mb-3">
              Word-by-Word Etymology
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {shloka.wordByWord.map((w, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-black/50 border border-gold-500/15 flex items-center justify-between gap-2"
                >
                  <span className="font-body text-xs text-gold-300 font-semibold">{w.sanskrit}</span>
                  <span className="font-body text-xs text-gold-200/70 text-right">{w.meaning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contemplation */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gold-950/40 to-black/60 border border-gold-500/20">
            <span className="font-body text-[11px] uppercase tracking-wider text-saffron font-semibold block mb-1">
              Practical Daily Sadhana & Meditation
            </span>
            <p className="font-body text-xs sm:text-sm text-gold-200/90 leading-relaxed">
              {shloka.contemplation}
            </p>
          </div>
        </div>
      </TiltCard3D>
    </section>
  )
}
