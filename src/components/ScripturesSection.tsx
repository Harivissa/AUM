import { useMemo, useState } from 'react'
import { BookOpen, GitBranch, ScrollText } from 'lucide-react'
import { SCRIPTURES, SCRIPTURE_GROUPS, ScriptureEntry, ScriptureKind } from '../data/scriptures'
import { EPIC_LINEAGES, EpicLineage } from '../data/epicLineages'
import TiltCard3D from './TiltCard3D'
import { useLang } from '../i18n'

function LineageTree({ lineage }: { lineage: EpicLineage }) {
  const byId = useMemo(() => Object.fromEntries(lineage.nodes.map((node) => [node.id, node])), [lineage.nodes])
  return (
    <div className="relative mt-5 h-[520px] sm:h-[580px] overflow-hidden rounded-2xl bg-black/55 border border-gold-500/20">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(232,197,107,.22),transparent_58%)] pointer-events-none" />
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          {lineage.links.map((link, i) => {
            const a = byId[link.from]
            const b = byId[link.to]
            if (!a || !b) return null
            return <line key={i} x1={`${a.x}%`} y1={`${a.y}%`} x2={`${b.x}%`} y2={`${b.y}%`} stroke="rgba(232,197,107,.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          })}
        </svg>
        {lineage.nodes.map((node) => (
          <div key={node.id} className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[110px] sm:w-[135px] p-2 sm:p-2.5 rounded-xl border text-center backdrop-blur-sm transition-transform hover:scale-105 ${node.tone === 'gold' ? 'bg-gold-950/90 border-gold-400/80 text-gold-100' : node.tone === 'saffron' ? 'bg-[#291205]/90 border-saffron/70 text-gold-100' : 'bg-[#0d0a18]/90 border-gold-500/20 text-gold-200'}`} style={{ left: `${node.x}%`, top: `${node.y}%` }}>
            <div className="font-display text-xs sm:text-sm font-bold truncate break-words">{node.name}</div>
            <div className="mt-0.5 font-body text-[8px] sm:text-[9px] leading-snug text-gold-300/70 line-clamp-2 break-words">{node.detail}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ScripturesSection({ onOpenEpic }: { onOpenEpic: (kind: 'ramayana' | 'mahabharata') => void }) {
  const { t } = useLang()
  const [kind, setKind] = useState<ScriptureKind>('Itihasa')
  const [selected, setSelected] = useState<ScriptureEntry>(SCRIPTURES[0])
  const [lineage, setLineage] = useState<'ramayana' | 'mahabharata'>('ramayana')
  const activeLineage = EPIC_LINEAGES.find((item) => item.id === lineage)!
  const filtered = SCRIPTURES.filter((item) => item.kind === kind)

  return (
    <section id="scriptures" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          {t('Śāstra Library')}
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow break-words">
          {t('Scriptures of Sanātana Dharma')}
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed break-words">
          {t('Begin with Itihāsa, then explore the Vedas and Purāṇas. Each entry distinguishes traditional attribution from historical/editorial description.')}
        </p>
        <div className="mt-7 flex justify-center gap-2 flex-wrap">
          {SCRIPTURE_GROUPS.map((group) => (
            <button key={group.id} type="button" onClick={() => { setKind(group.id); setSelected(SCRIPTURES.find((item) => item.kind === group.id)! ) }} className={`px-4 py-1.5 rounded-full text-xs font-body border transition ${kind === group.id ? 'bg-gold-500/20 border-gold-400 text-gold-100' : 'bg-black/40 border-gold-500/15 text-gold-400/70 hover:text-gold-200'}`}><span className="font-deva mr-1">{group.sanskrit}</span>{group.label}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        <div className="lg:col-span-4 flex flex-col gap-3 min-w-0">
          {filtered.map((item) => (
            <TiltCard3D key={item.id} intensity={6} glare={false}>
              <button type="button" onClick={() => item.id === 'ramayana' ? onOpenEpic('ramayana') : item.id === 'mahabharata' ? onOpenEpic('mahabharata') : setSelected(item)} className={`w-full text-left p-4 rounded-2xl border transition min-w-0 ${selected.id === item.id ? 'bg-gold-950/60 border-gold-400' : 'bg-black/45 border-gold-500/15 hover:border-gold-500/40'}`}>
                <div className="flex justify-between gap-3"><span className="font-body text-[10px] uppercase tracking-wider text-gold-400">{item.kind}</span><span className="font-deva text-gold-400/70">{item.sanskrit}</span></div>
                <h3 className="mt-1 font-display text-xl font-bold text-gold-100 break-words">{item.title}</h3>
                <p className="mt-1.5 font-body text-xs text-gold-300/65 line-clamp-2 break-words">{item.description}</p>
              </button>
            </TiltCard3D>
          ))}
        </div>
        <div className="lg:col-span-8 min-w-0">
          <TiltCard3D intensity={5}>
            <div className="rounded-3xl bg-gradient-to-b from-[#100a2b]/95 via-[#070514] to-[#04030a] border border-gold-400/35 p-6 sm:p-8 shadow-2xl min-w-0">
              <div className="flex items-start justify-between gap-4 border-b border-gold-500/20 pb-5">
                <div className="min-w-0">
                  <span className="font-body text-[10px] uppercase tracking-widest2 text-gold-400">{selected.tradition}</span>
                  <h3 className="mt-1 font-display text-3xl font-bold text-gold-100 break-words">{selected.title}</h3>
                  <p className="font-deva text-gold-400 mt-0.5">{selected.sanskrit}</p>
                </div>
                <ScrollText className="w-7 h-7 text-gold-400/60 shrink-0" />
              </div>
              <div className="mt-5 p-4 rounded-2xl bg-gold-500/5 border border-gold-500/15 min-w-0">
                <span className="font-body text-[10px] uppercase tracking-wider text-gold-400">Author / Attribution</span>
                <p className="mt-1 font-body text-sm text-gold-100/90 break-words">{selected.author}</p>
              </div>
              <p className="mt-5 font-body text-sm sm:text-base text-gold-200/80 leading-relaxed break-words">{selected.description}</p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">{selected.highlights.map((item) => <div key={item} className="p-3 rounded-xl bg-black/45 border border-gold-500/15 font-body text-xs text-gold-300/80 break-words">✦ {item}</div>)}</div>
            </div>
          </TiltCard3D>
        </div>
      </div>

      <div className="mt-16 min-w-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 min-w-0">
          <div className="min-w-0">
            <span className="font-body text-[10px] uppercase tracking-widest2 text-gold-400">Itihāsa · Interactive Lineage</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-1 break-words">{t('Family Tree of Key Figures')}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => { setLineage('ramayana'); setKind('Itihasa'); setSelected(SCRIPTURES[0]) }} className={`px-4 py-2 rounded-full border text-xs font-body whitespace-nowrap ${lineage === 'ramayana' ? 'bg-gold-500/20 border-gold-400 text-gold-100' : 'border-gold-500/20 text-gold-400'}`}>{t('Preview Rāmāyaṇa')}</button>
            <button type="button" onClick={() => { setLineage('mahabharata'); setKind('Itihasa'); setSelected(SCRIPTURES[1]) }} className={`px-4 py-2 rounded-full border text-xs font-body whitespace-nowrap ${lineage === 'mahabharata' ? 'bg-gold-500/20 border-gold-400 text-gold-100' : 'border-gold-500/20 text-gold-400'}`}>{t('Preview Mahābhārata')}</button>
            <button type="button" onClick={() => onOpenEpic('ramayana')} className="px-4 py-2 rounded-full bg-gold-400 text-void text-xs font-semibold whitespace-nowrap">{t('Open Rāmāyaṇa ↗')}</button>
            <button type="button" onClick={() => onOpenEpic('mahabharata')} className="px-4 py-2 rounded-full bg-gold-400 text-void text-xs font-semibold whitespace-nowrap">{t('Open Mahābhārata ↗')}</button>
          </div>
        </div>
        <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0e0924]/90 to-black/70 border border-gold-500/25 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
              <GitBranch className="w-5 h-5 text-gold-400" />
            </div>
            <div className="min-w-0">
              <h4 className="font-display text-xl font-bold text-gold-100 break-words">{activeLineage.title}</h4>
              <p className="font-body text-xs text-gold-400/80">{activeLineage.author}</p>
            </div>
          </div>
          <p className="mt-3 font-body text-xs text-gold-300/65 leading-relaxed break-words">{activeLineage.note}</p>
          <LineageTree lineage={activeLineage} />
        </div>
      </div>
    </section>
  )
}
