import { useEffect, useState } from 'react'
import { Film, Globe2, Menu, Moon, Search, Sun, X } from 'lucide-react'
import GlobalSearch from './GlobalSearch'
import { useLang, type Lang } from '../i18n'

type Theme = 'system' | 'dark' | 'light'

const LANGS: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'hi', label: 'हिन्दी' },
  { id: 'sa', label: 'संस्कृतम्' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'kn', label: 'ಕನ್ನಡ' },
]

export const NAV_LINKS = [
  { id: 'explore', label: 'Explore', sanskrit: 'अन्वेषणम्', href: '#explore' },
  { id: 'shastra', label: 'Śāstra', sanskrit: 'शास्त्रम्', href: '#shastra' },
  { id: 'tirtha', label: 'Tīrtha', sanskrit: 'तीर्थम्', href: '#tirtha' },
  { id: 'smriti', label: 'Smṛti', sanskrit: 'स्मृतिः', href: '#smriti' },
  { id: 'dharma', label: 'Dharma', sanskrit: 'धर्मः', href: '#dharma' },
  { id: 'festivals', label: 'Festivals', sanskrit: 'उत्सवाः', href: '#festivals' },
  { id: 'verify', label: 'AUM Verify', sanskrit: 'प्रमाणम्', href: '#verify' },
  { id: 'young-seekers', label: 'Young Seekers', sanskrit: 'बाल साधकाः', href: '#young-seekers' },
] as const

interface NavbarProps {
  onOpenIntro?: () => void
}

export default function Navbar({ onOpenIntro }: NavbarProps) {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('aum-theme') as Theme) || 'dark')

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  useEffect(() => {
    localStorage.setItem('aum-theme', theme)
    document.documentElement.dataset.aumTheme = theme
  }, [theme])

  const go = (href: string) => {
    const reduced =
      localStorage.getItem('aum:reduced-motion') === 'true' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.location.hash = href.replace(/^#/, '')
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    setMenu(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#03050a]/92 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl'
            : 'bg-gradient-to-b from-[#02050b]/95 via-[#02050b]/60 to-transparent'
        }`}
      >
        <div className="max-w-[1540px] mx-auto h-[72px] px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Logo on the left */}
          <button type="button" onClick={() => go('#')} className="flex items-center gap-2.5 shrink-0 text-left group">
            <span className="font-deva text-[28px] sm:text-[32px] leading-none text-gold-300 text-glow group-hover:scale-105 transition-transform">
              ॐ
            </span>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-[.14em] text-gold-100">
                AUM
              </span>
              <span className="font-body text-[8px] sm:text-[9px] tracking-[.18em] text-gold-400/80 uppercase -mt-0.5">
                Sanātana
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.href)}
                className="px-3 py-1.5 rounded-full font-display text-[13px] text-gold-100/90 hover:text-gold-200 hover:bg-gold-500/10 transition-all whitespace-nowrap"
              >
                {t(item.label, item.label)}
              </button>
            ))}
          </nav>

          {/* Right Action Tools: Intro, Languages, Theme, Search, Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Cinematic Intro Button */}
            <button
              type="button"
              onClick={() => (onOpenIntro ? onOpenIntro() : (window.location.hash = 'intro'))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-400/35 bg-gold-500/10 text-gold-200 hover:bg-gold-500/20 hover:text-white transition font-display text-xs whitespace-nowrap"
              title="Watch Cinematic Intro"
            >
              <Film className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden sm:inline">Intro</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5 rounded-full border border-gold-500/25 bg-black/40 px-2.5 py-1.5">
              <Globe2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                aria-label="Select Language"
                className="bg-transparent outline-none text-[11px] text-gold-100 cursor-pointer font-body"
              >
                {LANGS.map((l) => (
                  <option key={l.id} value={l.id} className="bg-[#0a0815] text-gold-100">
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Theme Toggle */}
            <div className="hidden sm:flex rounded-full border border-gold-500/20 bg-black/40 p-1">
              {(['dark', 'light'] as Theme[]).map((thm) => (
                <button
                  key={thm}
                  type="button"
                  onClick={() => setTheme(thm)}
                  className={`p-1.5 rounded-full transition ${
                    theme === thm ? 'bg-gold-400/20 text-gold-100' : 'text-gold-500/60 hover:text-gold-200'
                  }`}
                  aria-label={`${thm} theme`}
                >
                  {thm === 'light' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={() => setSearch(true)}
              className="p-2 rounded-full border border-gold-500/20 bg-black/40 text-gold-100 hover:bg-gold-500/15 transition"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-gold-300" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              className="xl:hidden p-2 rounded-lg border border-gold-500/20 bg-black/40 text-gold-100 hover:bg-gold-500/15 transition"
              aria-label="Open Navigation Menu"
            >
              {menu ? <X className="w-5 h-5 text-gold-300" /> : <Menu className="w-5 h-5 text-gold-300" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Navigation */}
        {menu && (
          <div className="xl:hidden absolute right-3 sm:right-6 top-[72px] w-[min(94vw,420px)] rounded-3xl border border-gold-500/30 bg-[#05060c]/98 backdrop-blur-2xl p-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gold-500/15">
              <span className="font-display text-xs uppercase tracking-widest text-gold-400 font-semibold">
                Sanātana Knowledge Portals
              </span>
              <button
                type="button"
                onClick={() => setMenu(false)}
                className="p-1 text-gold-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.href)}
                  className="rounded-xl border border-gold-500/15 bg-black/40 p-3 text-left hover:border-gold-400/40 hover:bg-gold-500/10 transition"
                >
                  <span className="block font-display text-sm text-gold-100 font-medium">
                    {t(item.label, item.label)}
                  </span>
                  <span className="font-deva text-xs text-gold-400/70">{item.sanskrit}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenu(false)
                  if (onOpenIntro) onOpenIntro()
                  else window.location.hash = 'intro'
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gold-400/30 bg-gold-500/15 py-2.5 text-xs font-display text-gold-200 hover:bg-gold-500/25 transition"
              >
                <Film className="w-3.5 h-3.5 text-gold-400" /> Watch Intro
              </button>
              <div className="flex rounded-xl border border-gold-500/20 bg-black/40 p-1">
                {(['dark', 'light'] as Theme[]).map((thm) => (
                  <button
                    key={thm}
                    type="button"
                    onClick={() => setTheme(thm)}
                    className={`p-2 rounded-lg transition ${
                      theme === thm ? 'bg-gold-400/20 text-gold-100' : 'text-gold-500/60 hover:text-gold-200'
                    }`}
                    aria-label={`${thm} theme`}
                  >
                    {thm === 'light' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <GlobalSearch open={search} onClose={() => setSearch(false)} />
    </>
  )
}
