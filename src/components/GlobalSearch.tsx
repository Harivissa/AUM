import { useMemo, useState } from 'react'
import { ArrowRight, Search, X } from 'lucide-react'
import { SEARCH_ENTRIES } from '../data/siteConfig'

export default function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SEARCH_ENTRIES
    return SEARCH_ENTRIES.filter(([title, description]) => `${title} ${description}`.toLowerCase().includes(q))
  }, [query])
  if (!open) return null
  const go = (href: string) => {
    const reduced = localStorage.getItem('aum:reduced-motion') === 'true' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.location.hash = href.slice(1)
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    onClose()
  }
  return (
    <div className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-xl p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Search AUM">
      <div className="max-w-3xl mx-auto mt-16 sm:mt-24 rounded-[2rem] border border-gold-400/25 bg-[#070611]/95 shadow-[0_30px_120px_rgba(0,0,0,.75)] overflow-hidden">
        <div className="p-5 border-b border-gold-500/15 flex items-center gap-3">
          <Search className="w-5 h-5 text-gold-400 shrink-0" />
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search AUM knowledge..." className="flex-1 bg-transparent outline-none text-gold-100 placeholder-gold-500/40 font-body text-sm" />
          <button onClick={onClose} className="p-2 rounded-full border border-gold-500/15 text-gold-300 hover:bg-gold-500/10" aria-label="Close search"><X className="w-4 h-4" /></button>
        </div>
        <div className="max-h-[62vh] overflow-y-auto p-3">
          {results.length ? results.map(([title, description, href]) => (
            <button key={href} onClick={() => go(href)} className="w-full text-left flex items-center justify-between gap-4 p-4 rounded-2xl hover:bg-gold-500/10 border border-transparent hover:border-gold-500/15 transition">
              <div><div className="font-display text-lg text-gold-100">{title}</div><div className="mt-1 text-xs font-body leading-relaxed text-gold-300/60">{description}</div></div>
              <ArrowRight className="w-4 h-4 text-gold-400 shrink-0" />
            </button>
          )) : <div className="p-10 text-center text-sm font-body text-gold-300/60">No AUM entry found for “{query}”.</div>}
        </div>
      </div>
    </div>
  )
}
