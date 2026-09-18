import { type HistoricalRegionData } from '../../data/vishvaData'
import { X, Landmark, BookOpen, Calendar, MapPin, ShieldCheck, Scroll } from 'lucide-react'

interface HistoricalRegionModalProps {
  region: HistoricalRegionData | null
  onClose: () => void
}

export default function HistoricalRegionModal({ region, onClose }: HistoricalRegionModalProps) {
  if (!region) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl border border-gold-500/35 bg-gradient-to-b from-[#0b1021] via-[#050813] to-black shadow-2xl text-gold-100 my-6 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gold-500/20 flex items-start justify-between gap-4 bg-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-display font-semibold">
                {region.classification}
              </span>
              <span className="text-gold-400 text-xs font-body flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {region.period}
              </span>
            </div>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-gold-100">
              {region.regionName}
            </h2>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-gold-300/70 font-body">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Modern Geographies: {region.modernCountries.join(', ')}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-gold-500/20 bg-black/50 text-gold-300 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto text-xs sm:text-sm font-body text-gold-200/85 max-h-[75vh]">
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gold-300 font-semibold mb-2 flex items-center gap-1.5">
              <Scroll className="w-4 h-4 text-gold-400" /> Historical Description
            </h4>
            <p className="leading-relaxed text-gold-200/80">
              {region.description}
            </p>
          </div>

          {/* Dynasties */}
          <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/40">
            <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2 flex items-center gap-1.5">
              <Landmark className="w-4 h-4" /> Notable Dynasties & Sovereign Rulers
            </h4>
            <div className="flex flex-wrap gap-2">
              {region.notableDynasties.map((d, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/25 text-gold-200 text-xs"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Epigraphs & Sacred Sites */}
          <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/40">
            <h4 className="font-display text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Key Inscriptions & Sacred Sites
            </h4>
            <ul className="space-y-1.5 pl-2">
              {region.keySitesAndInscriptions.map((site, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold mt-0.5">•</span>
                  <span>{site}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Civilizational Significance */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gold-300 font-semibold mb-2">
              Civilizational & Cultural Significance
            </h4>
            <p className="leading-relaxed text-gold-200/80">
              {region.significance}
            </p>
          </div>

          {/* Scholarly Sources */}
          <div className="p-4 rounded-2xl border border-gold-500/25 bg-[#080d1e] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-display uppercase tracking-wider text-gold-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" /> Primary Epigraphic & Academic Sources
              </span>
            </div>
            {region.sources.map((src, i) => (
              <div key={i} className="pt-2 border-t border-gold-500/10 first:border-0 first:pt-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gold-100 text-xs">{src.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px]">
                    {src.confidence}
                  </span>
                </div>
                <p className="text-[11px] text-gold-300/70 mt-0.5">
                  {src.authorOrBody} ({src.yearOrPeriod})
                </p>
                {src.notes && (
                  <p className="text-[10px] text-gold-400/70 italic mt-0.5">{src.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-gold-500/15 bg-black/60 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-gold-500/20 text-xs text-gold-200 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
