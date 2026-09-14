import { useState } from 'react'
import { HeartCrack, FileSearch, Scale, ShieldCheck } from 'lucide-react'

const lenses = [
  ['The concern', 'Hindu families and organizations have raised concerns about deception, coercion, exploitation and conversion in some interfaith relationships. Those concerns can be examined case-by-case.'],
  ['What must be established', 'AUM distinguishes an allegation from an investigation, a charge from a conviction, and an individual criminal act from a claim of organized coordination.'],
  ['Law & courts', 'Where a case involves conversion, marriage, sexual offences, threats or other crimes, the relevant statute, police record and court outcome should be shown rather than summarized by a slogan.'],
  ['Cases that do not establish the claim', 'A credible archive must also record when an allegation was not substantiated, a case was closed, or a court reached a different finding.'],
]

export default function LoveJihadSection() {
  const [active, setActive] = useState(0)
  return (
    <section id="love-jihad" className="relative py-8 sm:py-12 max-w-7xl mx-auto z-10">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/30 border border-red-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
          <HeartCrack className="w-3.5 h-3.5" /> Conversion & Evidence
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
          Conversion, Coercion & Protection of Hindu Women
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
          AUM examines public concerns regarding coercion, deception, and conversions through legal records, police investigations, statutes, and court decisions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">{lenses.map(([title], index) => <button key={title} type="button" onClick={() => setActive(index)} className={`text-left p-4 rounded-2xl border transition ${active === index ? 'bg-gold-950/60 border-gold-400' : 'bg-black/45 border-gold-500/15 hover:border-gold-500/35'}`}><div className="font-body text-[10px] uppercase tracking-wider text-gold-400">0{index + 1}</div><h3 className="mt-2 font-display text-lg font-bold text-gold-100">{title}</h3></button>)}</div>
      <div className="mt-5 rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#070514] to-[#04030a] border border-gold-400/30 p-6 sm:p-8"><div className="flex items-start gap-3"><FileSearch className="w-5 h-5 text-gold-400 shrink-0 mt-1" /><div><h3 className="font-display text-2xl font-bold text-gold-100">{lenses[active][0]}</h3><p className="mt-3 font-body text-sm sm:text-base text-gold-200/80 leading-relaxed">{lenses[active][1]}</p></div></div><div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"><div className="p-4 rounded-xl bg-black/40 border border-gold-500/15"><Scale className="w-4 h-4 text-gold-400" /><p className="mt-2 font-body text-xs text-gold-300/70">Court outcome</p></div><div className="p-4 rounded-xl bg-black/40 border border-gold-500/15"><ShieldCheck className="w-4 h-4 text-gold-400" /><p className="mt-2 font-body text-xs text-gold-300/70">Investigation status</p></div><div className="p-4 rounded-xl bg-black/40 border border-gold-500/15"><FileSearch className="w-4 h-4 text-gold-400" /><p className="mt-2 font-body text-xs text-gold-300/70">Source required</p></div></div></div>
    </section>
  )
}
