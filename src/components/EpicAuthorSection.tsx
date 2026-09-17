import { useState } from 'react'
import { BookOpen, Award, Sparkles, ScrollText, CheckCircle2, ChevronRight } from 'lucide-react'
import { AuthorProfile } from '../data/ramayanaData'
import { useLang } from '../i18n'

interface EpicAuthorSectionProps {
  author: AuthorProfile
  epicKind: 'ramayana' | 'mahabharata'
}

export default function EpicAuthorSection({ author, epicKind }: EpicAuthorSectionProps) {
  const { lang, ui } = useLang()
  const [activeTab, setActiveTab] = useState<'biography' | 'tradition' | 'sources'>('biography')

  const currentLang = (ui || lang || 'en') as keyof typeof author.name

  const authorName = author.name[currentLang] || author.name.en
  const authorTitle = author.title[currentLang] || author.title.en
  const traditionalAttr = author.traditionalAttribution[currentLang] || author.traditionalAttribution.en
  const roleText = author.role[currentLang] || author.role.en
  const bioText = author.biography[currentLang] || author.biography.en
  const traditionText = author.placeInTradition[currentLang] || author.placeInTradition.en

  return (
    <section className="mt-16 rounded-3xl border border-gold-500/25 bg-gradient-to-b from-[#120a22]/80 via-[#0a0614]/90 to-black/90 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Eyebrow */}
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-gold-400" />
        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold">
          {epicKind === 'ramayana' ? 'Author & Seer of Rāmāyaṇa' : 'Author, Chronicler & Witness of Mahābhārata'}
        </span>
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
        {/* Author Portrait Card */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="relative group w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-[0_0_35px_rgba(232,197,107,0.15)] bg-black/60">
            <img
              src={author.image}
              alt={authorName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="font-deva text-gold-300 text-sm block drop-shadow-md">
                {author.sanskrit}
              </span>
              <h3 className="font-display text-xl font-bold text-gold-100 drop-shadow-md">
                {authorName}
              </h3>
            </div>
          </div>

          {/* Traditional Attribution Badge */}
          <div className="mt-4 p-3.5 rounded-xl border border-gold-500/20 bg-black/50 text-xs font-body text-gold-300/90 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gold-200 block mb-0.5">Civilizational Attribution</span>
              <p className="text-[11px] leading-relaxed text-gold-300/75">{traditionalAttr}</p>
            </div>
          </div>
        </div>

        {/* Biography and Historical Context */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gold-500/15 pb-4">
              <div>
                <p className="font-deva text-base text-gold-400/90">{author.sanskrit}</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 mt-0.5">
                  {authorName}
                </h2>
                <p className="font-body text-xs sm:text-sm text-gold-300/80 mt-1 font-medium">
                  {authorTitle}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-[11px] font-body">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                <span>Paramparā Canonical Source</span>
              </span>
            </div>

            {/* Content Tabs */}
            <div className="flex items-center gap-2 mt-5 border-b border-gold-500/10 pb-2">
              <button
                type="button"
                onClick={() => setActiveTab('biography')}
                className={`px-4 py-2 rounded-xl text-xs font-body font-semibold transition-all ${
                  activeTab === 'biography'
                    ? 'bg-gold-500/20 border border-gold-400/50 text-gold-100 shadow-sm'
                    : 'text-gold-300/70 hover:text-gold-200 hover:bg-gold-500/10'
                }`}
              >
                Biography & Life
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tradition')}
                className={`px-4 py-2 rounded-xl text-xs font-body font-semibold transition-all ${
                  activeTab === 'tradition'
                    ? 'bg-gold-500/20 border border-gold-400/50 text-gold-100 shadow-sm'
                    : 'text-gold-300/70 hover:text-gold-200 hover:bg-gold-500/10'
                }`}
              >
                Place in Tradition
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sources')}
                className={`px-4 py-2 rounded-xl text-xs font-body font-semibold transition-all ${
                  activeTab === 'sources'
                    ? 'bg-gold-500/20 border border-gold-400/50 text-gold-100 shadow-sm'
                    : 'text-gold-300/70 hover:text-gold-200 hover:bg-gold-500/10'
                }`}
              >
                Canonical Textual Sources ({author.sources.length})
              </button>
            </div>

            {/* Tab Panels */}
            <div className="mt-5">
              {activeTab === 'biography' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/15">
                    <p className="font-body text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                      Epic Composition & Role
                    </p>
                    <p className="font-body text-sm leading-relaxed text-gold-100/90">
                      {roleText}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/30 border border-gold-500/10">
                    <p className="font-body text-xs uppercase tracking-wider text-gold-400/80 font-semibold mb-1">
                      Traditional Biography
                    </p>
                    <p className="font-body text-sm leading-relaxed text-gold-200/80">
                      {bioText}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'tradition' && (
                <div className="p-5 rounded-2xl bg-black/40 border border-gold-500/15 space-y-4">
                  <p className="font-body text-sm leading-relaxed text-gold-100/90">
                    {traditionText}
                  </p>
                  <div className="pt-3 border-t border-gold-500/15 text-xs font-body text-gold-300/70 space-y-2">
                    <p>
                      <strong>Scholarly Consensus & Critical Editions:</strong> The Critical Edition traditions (Baroda for Rāmāyaṇa; BORI Pune for Mahābhārata) treat these Maharṣis as the foundational fountainheads of the epics, collating centuries of manuscripts into an authentic base text while honoring their primary authorship.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'sources' && (
                <div className="space-y-3">
                  {author.sources.map((src, idx) => {
                    const ctx = src.context[currentLang] || src.context.en
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-black/40 border border-gold-500/15 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                      >
                        <div className="flex items-start gap-3">
                          <ScrollText className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                          <div>
                            <h4 className="font-display text-sm font-semibold text-gold-100">
                              {src.work}
                            </h4>
                            <p className="font-body text-xs text-gold-300/80 mt-1 leading-relaxed">
                              {ctx}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 px-2.5 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 font-mono text-[11px] text-gold-300 self-start">
                          {src.reference}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
