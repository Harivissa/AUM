import { useMemo, useState } from 'react'
import { Archive, BookOpen, Flame, ShieldAlert } from 'lucide-react'

type RecordStatus = 'HISTORICAL RECORD' | 'SOURCE REVIEW' | 'TRADITIONAL ACCOUNT'
interface MemoryRecord { id: string; title: string; period: string; category: string; status: RecordStatus; summary: string; sourceNote: string }

const records: MemoryRecord[] = [
  { id: 'kp', title: 'Kashmiri Pandit Displacement', period: '1989–1990', category: 'Hindu communities', status: 'HISTORICAL RECORD', summary: 'Widespread threats, targeted killings and violence were followed by the mass displacement of Kashmiri Pandits from the Kashmir Valley. Exact population figures and displacement estimates vary by source.', sourceNote: 'Use government records, contemporary reporting, survivor testimony and scholarly work for individual claims and figures.' },
  { id: 'godhra', title: 'Godhra Train Fire', period: '27 February 2002', category: 'Communal violence', status: 'HISTORICAL RECORD', summary: 'Coach S-6 of the Sabarmati Express was set on fire at Godhra; 59 people died. The event was followed by large-scale communal violence in Gujarat.', sourceNote: 'Court records and official inquiries should be used for case-specific findings; do not collapse the train incident and the later violence into one event.' },
  { id: 'temples', title: 'Temple Destruction & Reconstruction', period: 'Multiple periods', category: 'Temple memory', status: 'SOURCE REVIEW', summary: 'AUM will document individual temple destruction, desecration, relocation and reconstruction only when supported by inscriptions, archaeology, primary/archival material or reliable scholarship.', sourceNote: 'Each temple record should carry its own evidence trail.' },
  { id: 'resistance', title: 'Pratirodha — Preservation & Resistance', period: 'Multiple periods', category: 'Civilizational resilience', status: 'TRADITIONAL ACCOUNT', summary: 'Hindu communities, rulers, monks, poets and institutions preserved worship, texts, languages and sacred places through periods of political change.', sourceNote: 'Individual examples will be added with their own historical or traditional source status.' },
]

export default function SmritiSection() {
  const [filter, setFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(records[0].id)
  const categories = ['All', ...Array.from(new Set(records.map((item) => item.category)))]
  const filtered = useMemo(() => filter === 'All' ? records : records.filter((item) => item.category === filter), [filter])
  const selected = records.find((item) => item.id === selectedId) ?? filtered[0]

  return (
    <section id="smriti" className="relative py-8 sm:py-12 max-w-7xl mx-auto z-10">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
          <Archive className="w-3.5 h-3.5" /> Smṛti · Civilizational Memory
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
          Remember. Preserve. Rebuild.
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
          AUM records difficult chapters and living resilience together. Historical records, traditional accounts, and unresolved claims are distinguished into clear evidence categories.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-7">{categories.map((item) => <button key={item} type="button" onClick={() => { setFilter(item); const next = item === 'All' ? records[0] : records.find((r) => r.category === item)!; setSelectedId(next.id) }} className={`px-3.5 py-1.5 rounded-full border text-xs font-body transition ${filter === item ? 'bg-gold-500/20 border-gold-400 text-gold-100' : 'bg-black/40 border-gold-500/15 text-gold-400/70 hover:text-gold-200'}`}>{item}</button>)}</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 flex flex-col gap-3">{filtered.map((record) => <button key={record.id} type="button" onClick={() => setSelectedId(record.id)} className={`text-left p-4 rounded-2xl border transition ${selected?.id === record.id ? 'bg-gold-950/60 border-gold-400' : 'bg-black/45 border-gold-500/15 hover:border-gold-500/35'}`}><div className="flex items-center justify-between gap-3"><span className="font-body text-[10px] uppercase tracking-wider text-gold-400">{record.category}</span><span className="font-body text-[9px] px-2 py-0.5 rounded-full border border-gold-500/20 text-gold-300/80">{record.status}</span></div><h3 className="mt-2 font-display text-xl font-bold text-gold-100">{record.title}</h3><p className="mt-1 font-body text-xs text-gold-300/60">{record.period}</p></button>)}</div>
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#070514] to-[#04030a] border border-gold-400/30 p-6 sm:p-8"><div className="flex items-start gap-3 border-b border-gold-500/20 pb-5"><div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center"><Flame className="w-5 h-5 text-gold-400" /></div><div><span className="font-body text-[10px] uppercase tracking-widest2 text-gold-400">{selected.status}</span><h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">{selected.title}</h3><p className="font-body text-xs text-gold-400/70 mt-1">{selected.period}</p></div></div><p className="mt-5 font-body text-sm sm:text-base text-gold-200/80 leading-relaxed">{selected.summary}</p><div className="mt-6 p-4 rounded-2xl bg-black/40 border border-gold-500/15"><div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-wider text-gold-400"><ShieldAlert className="w-3.5 h-3.5" /> Source trail</div><p className="mt-2 font-body text-xs text-gold-300/65 leading-relaxed">{selected.sourceNote}</p></div><div className="mt-5 flex items-center gap-2 text-xs font-body text-gold-400/70"><BookOpen className="w-3.5 h-3.5" /> Individual claims will carry their own citations and evidence status.</div></div>
      </div>
    </section>
  )
}
