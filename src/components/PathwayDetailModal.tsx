import { useEffect } from 'react'
import { X, BookOpen, Landmark, Scroll, Compass, Flame, Sparkles, ShieldCheck, Copy, Check, Bell } from 'lucide-react'
import { Pathway } from '../data/pathways'
import { playSingingBowlChime } from '../utils/ambientSound'
import { useState } from 'react'

interface PathwayDetailModalProps {
  pathway: Pathway | null
  onClose: () => void
}

export default function PathwayDetailModal({ pathway, onClose }: PathwayDetailModalProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (pathway) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pathway, onClose])

  if (!pathway) return null

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />
      case 'Landmark':
        return <Landmark className="w-6 h-6" />
      case 'Scroll':
        return <Scroll className="w-6 h-6" />
      case 'Compass':
        return <Compass className="w-6 h-6" />
      case 'Flame':
        return <Flame className="w-6 h-6" />
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />
      default:
        return <Sparkles className="w-6 h-6" />
    }
  }

  const handleCopyVerse = () => {
    if (!pathway) return
    const textToCopy = pathway.keyVerse ? `${pathway.keyVerse?.sanskrit}\n${pathway.keyVerse?.transliteration}\n"${pathway.keyVerse?.meaning}" — ${pathway.keyVerse?.source}` : pathway.longDescription
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handlePlayChime = () => {
    playSingingBowlChime()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={pathway.label}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#0c081e] via-[#070512] to-[#04030a] border border-gold-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black text-gold-200"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 0 50px ${pathway.accentGlow}`,
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-gold-500/20 text-gold-300 hover:text-gold-100 hover:bg-gold-500/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Icon and Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gold-500/20 pb-6 pr-10">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl border shadow-inner shrink-0"
            style={{
              backgroundColor: `${pathway.color}15`,
              borderColor: `${pathway.color}60`,
              color: pathway.color,
            }}
          >
            {getIcon(pathway.iconName)}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-deva text-2xl font-semibold tracking-wide text-gold-300">
                {pathway.sanskrit}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider font-body border border-gold-500/30 bg-gold-500/10 text-gold-300">
                Sacred Portal
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-gold-100 font-bold mt-0.5">
              {pathway.label}
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 space-y-6">
          {/* Description */}
          <p className="font-body text-base text-gold-200/90 leading-relaxed">
            {pathway.longDescription}
          </p>

          {/* Key Verse Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-gold-950/40 via-gold-900/20 to-black/60 border border-gold-500/30 relative group">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                Scriptural Shloka & Realization
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePlayChime}
                  title="Play singing bowl chime"
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20 text-gold-300 transition"
                >
                  <Bell className="w-3 h-3 text-gold-400" />
                  <span>Chime</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyVerse}
                  title="Copy verse"
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20 text-gold-300 transition"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-gold-400" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <p className="font-deva text-lg sm:text-xl text-gold-200 font-medium leading-relaxed tracking-devanagari">
              {pathway.keyVerse?.sanskrit}
            </p>
            <p className="font-body text-xs sm:text-sm text-gold-400/90 italic mt-2">
              {pathway.keyVerse?.transliteration}
            </p>
            <p className="font-body text-sm text-gold-100/80 mt-3 pt-3 border-t border-gold-500/15">
              "{pathway.keyVerse?.meaning}"
            </p>
            <span className="inline-block mt-2 font-body text-[11px] text-gold-500/70 font-semibold">
              — {pathway.keyVerse?.source}
            </span>
          </div>

          {/* Highlights Pills */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold mb-3">
              Core Pillars & Canonical Texts
            </h3>
            <div className="flex flex-wrap gap-2">
              {pathway.highlights.map((h, i) => (
                <span
                  key={i}
                  className="font-body text-xs px-3.5 py-1.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-200/90 hover:border-gold-400/40 transition-colors"
                >
                  ✦ {h}
                </span>
              ))}
            </div>
          </div>

          {/* Deep-Dive Subtopics */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold mb-3">
              Exploration Dimensions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pathway.topics.map((topic, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-black/40 border border-gold-500/15 hover:border-gold-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display text-base font-semibold text-gold-200">{topic.title}</h4>
                    <p className="font-body text-xs text-gold-300/70 mt-1.5 leading-relaxed">{topic.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-body text-xs text-gold-500/70 text-center sm:text-left">
            Sanātana Dharma Portal · Preserved in eternal truth
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#verify"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 hover:bg-gold-500/20 text-xs font-body text-gold-200 transition"
            >
              Verify in AUM AI
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-gold-400 hover:bg-gold-300 text-void font-body font-semibold text-xs transition shadow-md"
            >
              Back to Universe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
