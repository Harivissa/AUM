import { useState } from 'react'
import { X, Send, ShieldAlert, CheckCircle2, HelpCircle, BookOpen } from 'lucide-react'
import type { CommunityComment } from '../../data/vishvaData'

interface CommunityContributionModalProps {
  isOpen: boolean
  prefillCountryId?: string
  prefillCountryName?: string
  onClose: () => void
  onSubmitContribution: (comment: Omit<CommunityComment, 'id' | 'date' | 'status'>) => void
}

export default function CommunityContributionModal({
  isOpen,
  prefillCountryId = '',
  prefillCountryName = '',
  onClose,
  onSubmitContribution
}: CommunityContributionModalProps) {
  const [author, setAuthor] = useState('')
  const [location, setLocation] = useState(prefillCountryName)
  const [contributionType, setContributionType] = useState<CommunityComment['contributionType']>('Local History')
  const [isTraditionOrHistory, setIsTraditionOrHistory] = useState<CommunityComment['isTraditionOrHistory']>('Personal / Family Tradition')
  const [text, setText] = useState('')
  const [sourceCitation, setSourceCitation] = useState('')
  const [agreedGuidelines, setAgreedGuidelines] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !text.trim() || !agreedGuidelines) return

    onSubmitContribution({
      countryId: prefillCountryId || 'global',
      author: author.trim(),
      location: location.trim() || 'Global',
      contributionType,
      isTraditionOrHistory,
      text: text.trim(),
      sourceCitation: sourceCitation.trim() || undefined
    })

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 1800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#0e1324] to-[#04060d] p-6 sm:p-8 shadow-2xl text-gold-100 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-gold-500/20 bg-black/40 text-gold-300 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold-100">Contribution Received</h3>
            <p className="font-body text-xs sm:text-sm text-gold-200/80 max-w-md mx-auto">
              Your contribution has been recorded in the community registry and queued for moderation according to AUM epistemic standards.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-gold-400 font-semibold">
                Vishva Sanātana Saṅgha Community Registry
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gold-100">
                Contribute Local History or Suggest Community
              </h3>
              <p className="mt-1 text-xs font-body text-gold-300/70">
                Share documented local mandir histories, migration memories, corrections, or verified academic citations.
              </p>
            </div>

            {/* Moderation Rules Notice */}
            <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-950/30 text-xs font-body space-y-1.5 text-amber-200/90">
              <div className="flex items-center gap-1.5 font-semibold text-amber-300 font-display">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> AUM Moderation Standards:
              </div>
              <p className="text-[11px] leading-relaxed">
                • Strict zero-tolerance for hate speech, threats, harassment, doxxing, or religious dehumanization.
                <br />
                • Maintain clear distinction: do not submit personal traditions or myths as verified academic facts.
                <br />
                • Inaccurate, inflammatory, or ungrounded claims will be reviewed and removed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-display text-gold-300 mb-1">Your Name / Title *</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Ramesh Patel / Dr. S. Rao"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-gold-500/30 text-xs font-body text-gold-100 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-display text-gold-300 mb-1">City / Region / Country *</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Suva, Fiji or Durban, South Africa"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-gold-500/30 text-xs font-body text-gold-100 focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-display text-gold-300 mb-1">Contribution Type</label>
                <select
                  value={contributionType}
                  onChange={(e) => setContributionType(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/70 border border-gold-500/30 text-xs font-body text-gold-100 focus:outline-none focus:border-gold-400"
                >
                  <option value="Local History">Local History & Heritage</option>
                  <option value="Migration Story">Family Migration Story (Girmit / Modern)</option>
                  <option value="Temple Suggestion">Suggest Temple / Organization</option>
                  <option value="Correction">Submit Factual Correction</option>
                  <option value="Source Citation">Share Verified Academic / Epigraphic Source</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-display text-gold-300 mb-1">Epistemic Status</label>
                <select
                  value={isTraditionOrHistory}
                  onChange={(e) => setIsTraditionOrHistory(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/70 border border-gold-500/30 text-xs font-body text-gold-100 focus:outline-none focus:border-gold-400"
                >
                  <option value="Personal / Family Tradition">Personal / Family / Cultural Tradition</option>
                  <option value="Documented History with Sources">Documented History with Sources & Citations</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-display text-gold-300 mb-1">Details & Narrative *</label>
              <textarea
                required
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Share specific historical details, founding year, temple deities, migration ship names, or community accomplishments..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-gold-500/30 text-xs font-body text-gold-100 focus:outline-none focus:border-gold-400 leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-display text-gold-300 mb-1">
                Source Reference or Epigraphic Citation (Optional)
              </label>
              <input
                type="text"
                value={sourceCitation}
                onChange={(e) => setSourceCitation(e.target.value)}
                placeholder="e.g. National Archives Record #452, Inscription reference, Book Title and Author"
                className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-gold-500/30 text-xs font-body text-gold-100 focus:outline-none focus:border-gold-400"
              />
            </div>

            {/* Checkbox agreement */}
            <label className="flex items-start gap-2 text-xs font-body text-gold-300/80 cursor-pointer pt-1">
              <input
                type="checkbox"
                required
                checked={agreedGuidelines}
                onChange={(e) => setAgreedGuidelines(e.target.checked)}
                className="mt-0.5 rounded border-gold-500/40 text-gold-500 focus:ring-0"
              />
              <span>
                I confirm this contribution contains no hate speech or personal attacks, clearly labels personal memory vs scholarly fact, and respects community guidelines.
              </span>
            </label>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-gold-500/20 text-xs font-display text-gold-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!agreedGuidelines || !author.trim() || !text.trim()}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-black text-xs font-display font-bold shadow-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" /> Submit for Verification
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
