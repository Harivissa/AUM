import { useState } from 'react'
import { ShieldCheck, Search, CheckCircle2, AlertCircle, HelpCircle, BookOpen } from 'lucide-react'
import { VERIFIED_CLAIMS, VerifiedClaim } from '../data/verifyData'
import TiltCard3D from './TiltCard3D'
import { useLang } from '../i18n'

export default function AUMVerifySection() {
  const { t } = useLang()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeClaim, setActiveClaim] = useState<VerifiedClaim>(VERIFIED_CLAIMS[0])
  const [customQueryInput, setCustomQueryInput] = useState('')
  const [customResult, setCustomResult] = useState<VerifiedClaim | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const categories = ['All', 'Astronomy & Physics', 'Scriptural Authenticity', 'Philosophy', 'Rituals & Biology']

  const filteredClaims = VERIFIED_CLAIMS.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory
    const matchesSearch =
      c.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCustomVerify = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customQueryInput.trim()) return

    setIsVerifying(true)
    setTimeout(() => {
      const matched = VERIFIED_CLAIMS.find((c) =>
        c.query.toLowerCase().includes(customQueryInput.toLowerCase().slice(0, 8))
      )

      if (matched) {
        setCustomResult(matched)
      } else {
        setCustomResult({
          id: 'custom-' + Date.now(),
          query: customQueryInput,
          category: 'Scriptural Authenticity',
          verdict: 'Misattributed',
          summary: 'SOURCE NOT FOUND — AUM Verify has no matching record for this claim in its current local knowledge base. This is not a finding that the claim is false; it means the source has not been verified here.',
          sanskritSource: {
            text: 'No source supplied',
            transliteration: 'No source supplied',
            citation: 'SOURCE REQUIRED',
          },
          englishTranslation: 'AUM will not invent a verse, citation, translation or historical reference when a source cannot be verified.',
          analysis: 'Verification requires an identifiable text, edition or reliable source. Add a precise citation or source for a deeper review.',
          scholarlyReference: 'AUM local verification dataset — no matching source record.',
        })
      }
      setIsVerifying(false)
    }, 600)
  }

  const getVerdictBadge = (verdict: VerifiedClaim['verdict']) => {
    switch (verdict) {
      case 'Verified':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-body text-xs font-semibold shadow-sm whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            {t('Scripturally Verified')}
          </span>
        )
      case 'Contextual Truth':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 font-body text-xs font-semibold shadow-sm whitespace-nowrap">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            {t('Contextual Truth')}
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-300 font-body text-xs font-semibold shadow-sm whitespace-nowrap">
            <HelpCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            {t('Source Not Found / Unverified')}
          </span>
        )
    }
  }

  const displayClaim = customResult || activeClaim

  return (
    <section id="verify" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
          {t('Source-Aware Verification')}
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow break-words">
          {t('AUM Verify — Source Before Assertion')}
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light break-words">
          {t('Cut through viral internet myths, mistranslations, and sensationalism. Cross-reference quotes, philosophical concepts, and historical facts directly against authentic Sanskrit critical editions.')}
        </p>

        {/* Live Search & Verify Input Bar */}
        <form onSubmit={handleCustomVerify} className="mt-8 max-w-2xl mx-auto flex items-center gap-2 relative">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gold-400/60 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={customQueryInput}
              onChange={(e) => setCustomQueryInput(e.target.value)}
              placeholder={t('Ask or verify a claim (e.g., Speed of light in Rigveda, Meaning of Maya...)')}
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-black/70 border border-gold-500/30 text-gold-200 placeholder-gold-500/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-all shadow-inner"
            />
          </div>
          <button
            type="submit"
            disabled={isVerifying}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-void font-body font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(232,197,107,0.3)] hover:brightness-110 transition shrink-0 whitespace-nowrap"
          >
            {isVerifying ? t('Verifying...') : t('Verify Claim')}
          </button>
        </form>

        {/* Category Filter Pills */}
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat)
                setCustomResult(null)
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-body transition-all border ${
                selectedCategory === cat && !customResult
                  ? 'bg-gold-500/20 border-gold-400 text-gold-200'
                  : 'bg-black/40 border-gold-500/15 text-gold-400/60 hover:text-gold-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Pre-verified Claims List */}
        <div className="lg:col-span-5 flex flex-col gap-3 min-w-0">
          <span className="font-body text-xs uppercase tracking-widest2 text-gold-400 font-semibold px-2 mb-1">
            {t('Verified Source Records')} ({filteredClaims.length})
          </span>
          {filteredClaims.map((claim) => {
            const isSelected = displayClaim.id === claim.id
            return (
              <TiltCard3D key={claim.id} intensity={8} glare={false}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveClaim(claim)
                    setCustomResult(null)
                  }}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border flex flex-col justify-between min-w-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-gold-950/70 via-gold-900/40 to-black/90 border-gold-400 text-gold-100 shadow-[0_0_20px_rgba(232,197,107,0.2)]'
                      : 'bg-black/50 border-gold-500/15 text-gold-300/70 hover:bg-gold-500/10 hover:text-gold-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2 gap-2">
                    <span className="font-body text-[11px] text-gold-400 font-semibold truncate">{claim.category}</span>
                    {getVerdictBadge(claim.verdict)}
                  </div>
                  <h3 className="font-display text-base font-bold text-gold-100 leading-snug break-words">{claim.query}</h3>
                  <p className="font-body text-xs text-gold-300/60 mt-1.5 line-clamp-2 break-words">{claim.summary}</p>
                </button>
              </TiltCard3D>
            )
          })}
        </div>

        {/* Right Side: Detailed 3D Verification Analysis Sheet */}
        <div className="lg:col-span-7 min-w-0">
          <TiltCard3D intensity={10} className="w-full">
            <div className="rounded-3xl bg-gradient-to-b from-[#0e0a27]/95 via-[#070514] to-[#04030a] border border-gold-400/40 p-6 sm:p-8 shadow-2xl relative min-w-0">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold-500/20 pb-5">
                <div className="min-w-0">
                  <span className="font-body text-xs text-gold-400 uppercase tracking-widest2 font-semibold">
                    Verification Report
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gold-100 mt-1 break-words">
                    {displayClaim.query}
                  </h3>
                </div>
                <div className="shrink-0">{getVerdictBadge(displayClaim.verdict)}</div>
              </div>

              {/* Summary Box */}
              <div className="mt-6 p-4 rounded-xl bg-gold-500/10 border border-gold-500/25 min-w-0">
                <span className="font-body text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                  {t('Executive Verdict Summary')}
                </span>
                <p className="font-body text-sm text-gold-200/90 leading-relaxed font-medium break-words">
                  {displayClaim.summary}
                </p>
              </div>

              {/* Sanskrit Critical Shloka Box */}
              <div className="mt-6 p-5 rounded-2xl bg-black/60 border border-gold-500/20 min-w-0">
                <span className="font-body text-[11px] uppercase tracking-wider text-gold-500 font-semibold block mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  {t('Primary Sanskrit Source Reference')}
                </span>
                <p className="font-deva text-base sm:text-lg text-gold-200 font-medium tracking-normal break-words">
                  {displayClaim.sanskritSource.text}
                </p>
                <p className="font-body text-xs text-gold-400/80 italic mt-1.5 break-words">
                  {displayClaim.sanskritSource.transliteration}
                </p>
                <p className="font-body text-xs sm:text-sm text-gold-100/90 mt-2.5 pt-2.5 border-t border-gold-500/15 break-words">
                  "{displayClaim.englishTranslation}"
                </p>
                <span className="inline-block mt-2 font-body text-[11px] text-gold-400 font-semibold break-words">
                  Source: {displayClaim.sanskritSource.citation}
                </span>
              </div>

              {/* Detailed Contextual Breakdown */}
              <div className="mt-6 min-w-0">
                <span className="font-body text-[11px] uppercase tracking-wider text-gold-500 font-semibold block mb-1">
                  {t('Linguistic & Philosophical Analysis')}
                </span>
                <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed break-words">
                  {displayClaim.analysis}
                </p>
              </div>

              {/* Scholarly Consensus */}
              <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-body text-gold-500/70 min-w-0">
                <span className="break-words">Scholarly Citation: {displayClaim.scholarlyReference}</span>
              </div>
            </div>
          </TiltCard3D>
        </div>
      </div>
    </section>
  )
}
