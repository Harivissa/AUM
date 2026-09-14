const portals = [
  ['वेदाः', 'ŚĀSTRA', '#shastra'], ['तीर्थ', 'TĪRTHA', '#tirtha'], ['इतिहास', 'ITIHĀSA', '#itihasa'],
  ['स्मृतिः', 'SMṚTI', '#smriti'], ['धर्मः', 'DHARMA', '#dharma'], ['देवता', 'DEVATĀ', '#devata'],
  ['उत्सवाः', 'FESTIVALS', '#festivals'], ['प्रमाणम्', 'AUM VERIFY', '#verify'], ['बाल साधक', 'YOUNG SEEKERS', '#young-seekers'],
]

export default function StaticFallback({ onNavigate }: { onNavigate?: (href: string) => void }) {
  return (
    <div className="static-cosmos absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-[min(78vw,520px)] aspect-square">
        <div className="absolute inset-[15%] rounded-full border border-gold-500/25 shadow-[0_0_80px_rgba(232,197,107,.08)]" />
        <div className="absolute inset-[27%] rounded-full border border-gold-500/20" />
        <div className="absolute inset-[35%] rounded-full border border-gold-500/35" />
        <div className="absolute inset-[39%] rounded-full flex items-center justify-center">
          <span className="font-deva text-7xl sm:text-8xl text-gold-400 text-glow">ॐ</span>
        </div>
        {portals.map(([sa, en, href], i) => {
          const a = (i / portals.length) * Math.PI * 2 - Math.PI / 2
          const x = 50 + Math.cos(a) * 43
          const y = 50 + Math.sin(a) * 43
          return <button key={en} type="button" onClick={() => onNavigate ? onNavigate(href) : (window.location.hash = href.slice(1))} className="absolute -translate-x-1/2 -translate-y-1/2 text-center group" style={{ left: `${x}%`, top: `${y}%` }}><div className="mx-auto w-9 h-9 rounded-full border border-gold-500/45 bg-black/50 group-hover:border-gold-300 group-hover:bg-gold-500/15 transition" /><div className="mt-2 font-deva text-[9px] text-gold-400/70">{sa}</div><div className="font-display text-[10px] tracking-widest text-gold-200/80 whitespace-nowrap">{en}</div></button>
        })}
      </div>
    </div>
  )
}
