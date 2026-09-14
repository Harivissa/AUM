import { useState } from 'react'
import { AlertTriangle, MapPinned, Shield, Search } from 'lucide-react'

const topics = [
  { title: 'Kashmiri Pandit Exodus', year: '1989–1990', location: 'Kashmir Valley', tag: 'Targeted violence & displacement', detail: 'Threats, killings and the resulting mass displacement of Kashmiri Pandits. Population estimates vary and should be sourced record-by-record.', status: 'HISTORICAL RECORD' },
  { title: 'Godhra Train Fire', year: '2002', location: 'Godhra, Gujarat', tag: 'Train fire', detail: 'Coach S-6 of the Sabarmati Express was set on fire and 59 people died. AUM separates the train incident from the communal violence that followed.', status: 'COURT / OFFICIAL RECORD' },
  { title: 'Communal Violence in Delhi', year: '2020', location: 'Delhi', tag: 'Communal violence', detail: 'The 2020 Delhi violence caused deaths, injuries and property destruction among people of more than one community. AUM can document Hindu victims and attacks without erasing other victims.', status: 'HISTORICAL RECORD' },
  { title: 'Future Archive Entry', year: 'Source required', location: '—', tag: 'Temple / community / individual', detail: 'A structured record is ready for a properly sourced incident: date, place, victim, allegation, investigation, court outcome and primary source.', status: 'SOURCE REQUIRED' },
]

export default function AttacksOnHindusSection() {
  const [query, setQuery] = useState('')
  const visible = topics.filter((item) => `${item.title} ${item.location} ${item.tag}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <section id="attacks-on-hindus" className="relative py-8 sm:py-12 max-w-7xl mx-auto z-10">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/30 border border-red-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
          <AlertTriangle className="w-3.5 h-3.5" /> Attacks on Hindus
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
          Record the Violence. Preserve the Memory.
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
          This archive documents attacks, displacement, communal violence, and threats affecting Hindu communities. Each record distinguishes allegation, police investigation, court outcomes, and established evidence.
        </p>
      </div>
      <div className="max-w-xl mx-auto mb-7 relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the archive" className="w-full pl-11 pr-4 py-3 rounded-full bg-black/60 border border-gold-500/25 text-gold-200 placeholder-gold-500/40 text-sm focus:outline-none focus:border-gold-400" /></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{visible.map((item) => <article key={item.title} className="p-5 rounded-2xl bg-black/45 border border-gold-500/20 hover:border-gold-400/50 transition"><div className="flex items-center justify-between gap-3"><span className="font-body text-[10px] uppercase tracking-wider text-gold-400">{item.status}</span><span className="font-body text-[10px] text-gold-400/70">{item.year}</span></div><h3 className="mt-2 font-display text-2xl font-bold text-gold-100">{item.title}</h3><div className="mt-2 flex items-center gap-2 text-xs font-body text-gold-400/70"><MapPinned className="w-3.5 h-3.5" />{item.location}</div><p className="mt-3 font-body text-sm text-gold-300/70 leading-relaxed">{item.detail}</p><div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center gap-2 text-[10px] font-body text-gold-500/70"><Shield className="w-3.5 h-3.5" /> Evidence status shown above · case-level sources required</div></article>)}</div>
    </section>
  )
}
