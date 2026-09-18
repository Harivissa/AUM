import { useState, useEffect } from 'react'
import {
  X,
  Send,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Plus,
  AlertTriangle,
  Scroll,
  HeartHandshake
} from 'lucide-react'
import type { CommunityComment } from '../../data/vishvaData'

export type ContributionMode =
  | 'Comment'
  | 'Suggest Community'
  | 'Suggest Historical Source'
  | 'Report Incorrect Information'
  | 'Share Local History'

interface CommunityContributionModalProps {
  isOpen: boolean
  initialMode?: ContributionMode
  prefillCountryId?: string
  prefillCountryName?: string
  onClose: () => void
  onSubmitContribution: (comment: Omit<CommunityComment, 'id' | 'date' | 'status'>) => void
}

export default function CommunityContributionModal({
  isOpen,
  initialMode = 'Comment',
  prefillCountryId = '',
  prefillCountryName = '',
  onClose,
  onSubmitContribution
}: CommunityContributionModalProps) {
  const [activeMode, setActiveMode] = useState<ContributionMode>(initialMode)
  const [author, setAuthor] = useState('')
  const [location, setLocation] = useState(prefillCountryName)
  const [text, setText] = useState('')
  const [sourceCitation, setSourceCitation] = useState('')
  const [agreedGuidelines, setAgreedGuidelines] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (initialMode) {
      setActiveMode(initialMode)
    }
  }, [initialMode])

  useEffect(() => {
    if (prefillCountryName) {
      setLocation(prefillCountryName)
    }
  }, [prefillCountryName])

  if (!isOpen) return null

  const getModeTitle = () => {
    switch (activeMode) {
      case 'Suggest Community':
        return 'Suggest a Temple or Community Center'
      case 'Suggest Historical Source':
        return 'Propose an Epigraphic or Academic Source'
      case 'Report Incorrect Information':
        return 'Report Inaccurate Data or Misattribution'
      case 'Share Local History':
        return 'Share Local Heritage or Family Migration Memory'
      default:
        return 'Community Reflection or In-depth Comment'
    }
  }

  const getPlaceholder = () => {
    switch (activeMode) {
      case 'Suggest Community':
        return 'Enter temple or organization name, city, address, founding year, traditions (e.g. Smarta, Vaishnava, Shaiva, Arya Samaj), and public contact details...'
      case 'Suggest Historical Source':
        return 'Provide book/paper title, authors, university press, publication year, specific page numbers, or epigraphic catalog index (e.g. Corpus Inscriptionum Indicarum)...'
      case 'Report Incorrect Information':
        return 'Describe the specific error, country or kingdom name, what data requires correction, and provide a verified sovereign census or peer-reviewed source link...'
      case 'Share Local History':
        return 'Share the memory of migration (e.g. Girmit ship, ancestral village, preserved oral traditions, folk songs, handwritten scriptures)...'
      default:
        return 'Share your perspective, question, or scholarly reflection on global Sanātana heritage...'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !text.trim() || !agreedGuidelines) return

    let contributionType: CommunityComment['contributionType'] = 'Local History'
    let isTraditionOrHistory: CommunityComment['isTraditionOrHistory'] = 'Documented History with Sources'

    if (activeMode === 'Suggest Community') {
      contributionType = 'Temple Suggestion'
      isTraditionOrHistory = 'Documented History with Sources'
    } else if (activeMode === 'Suggest Historical Source') {
      contributionType = 'Source Citation'
      isTraditionOrHistory = 'Documented History with Sources'
    } else if (activeMode === 'Report Incorrect Information') {
      contributionType = 'Correction'
      isTraditionOrHistory = 'Documented History with Sources'
    } else if (activeMode === 'Share Local History') {
      contributionType = 'Local History'
      isTraditionOrHistory = 'Personal / Family Tradition'
    }

    onSubmitContribution({
      countryId: prefillCountryId || 'global',
      author: author.trim(),
      location: location.trim() || 'Global',
      contributionType,
      isTraditionOrHistory,
      text: `[${activeMode}] ${text.trim()}`,
      sourceCitation: sourceCitation.trim() || undefined
    })

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setText('')
      onClose()
    }, 1800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#0e1324] to-[#04060d] p-6 sm:p-8 shadow-2xl text-gold-100 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-gold-500/20 bg-black/40 text-stone-400 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold-100">
              Contribution Successfully Logged
            </h3>
            <p className="font-body text-xs sm:text-sm text-stone-300 max-w-md mx-auto">
              Thank you for helping safeguard the accuracy and depth of Vishva Sanātana Saṅgha. Your submission is queued for peer review according to AUM epistemic guidelines.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-gold-400 font-semibold">
                Vishva Sanātana Saṅgha • Open Contribution Portal
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-gold-100">
                {getModeTitle()}
              </h3>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
              {(
                [
                  'Comment',
                  'Suggest Community',
                  'Suggest Historical Source',
                  'Report Incorrect Information',
                  'Share Local History'
                ] as ContributionMode[]
              ).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setActiveMode(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-display whitespace-nowrap transition border ${
                    activeMode === m
                      ? 'border-gold-400 bg-gold-500/25 text-white font-bold'
                      : 'border-white/10 bg-black/40 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-display font-semibold text-stone-300 mb-1">
                  Your Full Name or Alias *
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g., Dr. Ramesh Patel, Ananya Sharma"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-gold-100 text-xs font-body focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-display font-semibold text-stone-300 mb-1">
                  City & Country *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Durban, South Africa / London, UK"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-gold-100 text-xs font-body focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-stone-300 mb-1">
                Details & Narrative *
              </label>
              <textarea
                required
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={getPlaceholder()}
                className="w-full p-3.5 rounded-xl bg-black/60 border border-gold-500/25 text-gold-100 text-xs font-body focus:outline-none focus:border-gold-400 leading-relaxed placeholder:text-stone-500"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-stone-300 mb-1">
                Source Citation or Evidence Reference (Recommended)
              </label>
              <input
                type="text"
                value={sourceCitation}
                onChange={(e) => setSourceCitation(e.target.value)}
                placeholder="e.g. Inscription registry, book ISBN, archivist name, municipal link..."
                className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-gold-100 text-xs font-body focus:outline-none focus:border-gold-400"
              />
            </div>

            {/* Epistemic Agreement */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-body flex items-start gap-3">
              <input
                type="checkbox"
                id="guidelines"
                checked={agreedGuidelines}
                onChange={(e) => setAgreedGuidelines(e.target.checked)}
                className="mt-0.5 rounded border-gold-500/40 text-amber-500 focus:ring-0 cursor-pointer"
              />
              <label htmlFor="guidelines" className="text-stone-300 leading-relaxed cursor-pointer select-none">
                I verify that this submission adheres to AUM's scholarly standards, does not contain defamatory speech, and accurately distinguishes documented history from personal tradition.
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-white/10 text-stone-400 text-xs font-display hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!author.trim() || !text.trim() || !agreedGuidelines}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold shadow-lg hover:brightness-110 disabled:opacity-50 transition flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> Submit for Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
