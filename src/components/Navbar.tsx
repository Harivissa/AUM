import { useEffect, useState } from 'react'
import { ChevronDown, Globe2, Menu, Moon, Search, Sun, X } from 'lucide-react'
import GlobalSearch from './GlobalSearch'
import { PORTALS } from '../data/siteConfig'
import { useLang, type Lang } from '../i18n'

type Theme = 'system'|'dark'|'light'
const LANGS: { id: Lang; label: string }[] = [
  {id:'system',label:'System Default'}, {id:'en',label:'English'}, {id:'te',label:'తెలుగు'}, {id:'hi',label:'हिन्दी'}, {id:'ta',label:'தமிழ்'}, {id:'kn',label:'ಕನ್ನಡ'}, {id:'ml',label:'മലയാളം'}, {id:'mr',label:'मराठी'}, {id:'sa',label:'संस्कृत'},
]

const NAV_LABEL: Record<string, string> = {
  shastra: 'Śāstra', tirtha: 'Tīrtha', smriti: 'Smṛti', dharma: 'Dharma',
  devata: 'Devatā', festivals: 'Festivals', verify: 'Aum Verify', 'young-seekers': 'Young Seekers',
}

// Top-level nav: Explore stays a dropdown (full portal list + search entries),
// the rest are the 7 direct links requested — one flat row, no duplication.
const TOP_LINKS = PORTALS.filter((p) => p.id !== 'devata')

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [explore, setExplore] = useState(false)
  const [search, setSearch] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('aum-theme') as Theme) || 'system')

  useEffect(() => { const f = () => setScrolled(window.scrollY > 18); window.addEventListener('scroll', f, {passive:true}); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { localStorage.setItem('aum-theme', theme); document.documentElement.dataset.aumTheme = theme }, [theme])

  const go = (href: string) => {
    const reduced = localStorage.getItem('aum:reduced-motion') === 'true' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.location.hash = href.replace(/^#/, '')
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    setExplore(false)
    setMenu(false)
  }

  return <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#03050a]/90 backdrop-blur-xl border-b border-gold-500/20' : 'bg-gradient-to-b from-[#02050b]/95 via-[#02050b]/55 to-transparent'}`}>
      <div className="max-w-[1540px] mx-auto h-[74px] px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-5">
        <button type="button" onClick={() => go('#')} className="flex items-center gap-3 shrink-0 text-left">
          <span className="font-deva text-[30px] leading-none text-gold-300 text-glow">ॐ</span>
          <span className="font-display text-2xl tracking-[.12em] text-gold-100">AUM</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          <div className="relative">
            <button type="button" onClick={() => setExplore(v => !v)} className="flex items-center gap-1 px-3 py-2 font-display text-sm text-gold-100 hover:text-gold-300 transition">{t('Explore')} <ChevronDown className={`w-3.5 h-3.5 transition ${explore ? 'rotate-180' : ''}`} /></button>
            {explore && <div className="absolute left-0 top-11 w-72 rounded-2xl border border-gold-500/20 bg-[#05060c]/96 backdrop-blur-xl p-2 shadow-2xl">
              {PORTALS.map((p) => <button key={p.id} type="button" onClick={() => go(p.href)} className="w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-gold-500/10 transition"><span className="font-display text-sm text-gold-100">{t(NAV_LABEL[p.id] ?? p.label)}</span><span className="font-deva text-xs text-gold-500/70">{p.sanskrit}</span></button>)}
              <button type="button" onClick={() => go('#explore')} className="mt-1 w-full rounded-xl border border-gold-500/15 px-3 py-2.5 text-left font-body text-xs text-gold-300 hover:bg-gold-500/10">{t('Open full knowledge explorer →')}</button>
            </div>}
          </div>
          {TOP_LINKS.map((p) => (
            <button key={p.id} type="button" onClick={() => go(p.href)} className="px-3 py-2 font-display text-sm text-gold-100/85 hover:text-gold-300 transition whitespace-nowrap">
              {t(NAV_LABEL[p.id] ?? p.label)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Single language control — one dropdown, not a dropdown plus a duplicate tab row. */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-gold-500/20 bg-black/35 px-3 py-1.5">
            <Globe2 className="w-3.5 h-3.5 text-gold-400" />
            <select value={lang} onChange={e => setLang(e.target.value as Lang)} aria-label="Language" className="bg-transparent outline-none text-[10px] text-gold-100 cursor-pointer">
              {LANGS.map(l => <option key={l.id} value={l.id} className="bg-[#080711]">{l.label}</option>)}
            </select>
          </div>
          <div className="hidden md:flex rounded-full border border-gold-500/20 bg-black/35 p-1">
            {(['system','light','dark'] as Theme[]).map(t => <button key={t} type="button" onClick={() => setTheme(t)} className={`p-1.5 rounded-full ${theme === t ? 'bg-gold-400/20 text-gold-100' : 'text-gold-500/60 hover:text-gold-200'}`} aria-label={`${t} theme`}>{t==='light'?<Sun className="w-3.5 h-3.5"/>:t==='dark'?<Moon className="w-3.5 h-3.5"/>:<Globe2 className="w-3.5 h-3.5"/>}</button>)}
          </div>
          <button type="button" onClick={() => setSearch(true)} className="p-2 rounded-full text-gold-100 hover:bg-gold-500/10 transition" aria-label="Search"><Search className="w-5 h-5" /></button>
          <button type="button" onClick={() => setMenu(v => !v)} className="lg:hidden p-2 rounded-lg text-gold-100 hover:bg-gold-500/10 transition" aria-label="Menu">{menu ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}</button>
        </div>
      </div>
      {menu && <div className="lg:hidden absolute right-4 sm:right-8 top-[68px] w-[min(92vw,390px)] rounded-2xl border border-gold-500/20 bg-[#05060c]/97 backdrop-blur-xl p-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">{PORTALS.map(p => <button key={p.id} onClick={() => go(p.href)} className="rounded-xl border border-gold-500/10 bg-black/25 p-3 text-left"><span className="block font-display text-sm text-gold-100">{p.label}</span><span className="font-deva text-xs text-gold-500/65">{p.sanskrit}</span></button>)}</div>
        <button onClick={() => go('#explore')} className="mt-2 w-full rounded-xl bg-gold-400 py-2.5 font-body text-xs font-semibold text-void">Open Knowledge Explorer</button>
      </div>}
    </header>
    <GlobalSearch open={search} onClose={() => setSearch(false)} />
  </>
}
