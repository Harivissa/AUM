import { useState, useRef, useEffect } from 'react'
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Flame,
  HelpCircle,
  History,
  Info,
  Layers,
  LayoutGrid,
  Leaf,
  MapPin,
  Moon,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Utensils,
} from 'lucide-react'
import { FESTIVALS, type Festival, type SourceCategory } from '../data/festivals'
import { assetUrl } from '../utils/assetUrl'
import { useLang } from '../i18n'

import festivalDiyaImg from '../assets/images/festival_diya_1789619603081.jpg'
import sacredTempleImg from '../assets/images/sacred_temple_1789619561869.jpg'
import sriRamaImg from '../assets/images/sri_rama_portrait_1789647146866.jpg'
import dharmaWheelImg from '../assets/images/dharma_wheel_1789619590191.jpg'
import vedicManuscriptImg from '../assets/images/vedic_manuscript_1789619549504.jpg'
import youngSeekerImg from '../assets/images/young_seeker_1789619627160.jpg'

interface FestivalVisualConfig {
  imageSrc: string
  fallbackGlyph: string
  accentColor: string
  themeHint: string
}

function getFestivalVisualConfig(slug: string): FestivalVisualConfig {
  switch (slug) {
    case 'vinayaka-chavithi':
      return {
        imageSrc: 'media/ganesha_main.jpg',
        fallbackGlyph: 'ॐ',
        accentColor: 'from-amber-600/40 to-yellow-500/20',
        themeHint: 'Bhadrapada · Vighnaharta',
      }
    case 'deepavali':
      return {
        imageSrc: festivalDiyaImg,
        fallbackGlyph: 'दी',
        accentColor: 'from-amber-500/40 to-orange-500/20',
        themeHint: 'Kartika · Jyoti',
      }
    case 'maha-shivaratri':
      return {
        imageSrc: sacredTempleImg,
        fallbackGlyph: 'शि',
        accentColor: 'from-indigo-600/40 to-sky-500/20',
        themeHint: 'Phalguna · Shivaratri',
      }
    case 'navaratri-dussehra':
      return {
        imageSrc: 'media/clay_murti.jpg',
        fallbackGlyph: 'दुर्गा',
        accentColor: 'from-rose-600/40 to-amber-500/20',
        themeHint: 'Ashvina · Shakti',
      }
    case 'krishna-janmashtami':
      return {
        imageSrc: 'assets/young-seekers/krishna.png',
        fallbackGlyph: 'कृ',
        accentColor: 'from-sky-600/40 to-teal-500/20',
        themeHint: 'Bhadrapada · Rohini',
      }
    case 'rama-navami':
      return {
        imageSrc: sriRamaImg,
        fallbackGlyph: 'राम',
        accentColor: 'from-yellow-600/40 to-amber-500/20',
        themeHint: 'Chaitra · Maryada',
      }
    case 'holi':
      return {
        imageSrc: 'media/modaka_offering.jpg',
        fallbackGlyph: 'हो',
        accentColor: 'from-pink-600/40 to-purple-500/20',
        themeHint: 'Phalguna · Vasantotsava',
      }
    case 'makar-sankranti-pongal':
      return {
        imageSrc: dharmaWheelImg,
        fallbackGlyph: 'सूर्य',
        accentColor: 'from-orange-600/40 to-yellow-500/20',
        themeHint: 'Makara · Uttarayan',
      }
    case 'ugadi-gudi-padwa':
      return {
        imageSrc: 'media/ganesha_eco.jpg',
        fallbackGlyph: 'यु',
        accentColor: 'from-emerald-600/40 to-teal-500/20',
        themeHint: 'Chaitra · Samvatsara',
      }
    case 'guru-purnima':
      return {
        imageSrc: vedicManuscriptImg,
        fallbackGlyph: 'गुरु',
        accentColor: 'from-amber-700/40 to-orange-500/20',
        themeHint: 'Ashadha · Vyasa',
      }
    case 'raksha-bandhan':
      return {
        imageSrc: youngSeekerImg,
        fallbackGlyph: 'रक्षा',
        accentColor: 'from-red-600/40 to-rose-500/20',
        themeHint: 'Shravana · Sneha',
      }
    default:
      return {
        imageSrc: 'media/clay_murti.jpg',
        fallbackGlyph: 'ॐ',
        accentColor: 'from-gold-600/40 to-amber-500/20',
        themeHint: 'Living Tradition',
      }
  }
}

function SourceBadge({ category }: { category: SourceCategory }) {
  const styles: Record<SourceCategory, string> = {
    'Śāstric source': 'border-gold-400/35 text-gold-200 bg-gold-500/10',
    'Traditional account': 'border-amber-400/35 text-amber-200 bg-amber-500/10',
    'Historical record': 'border-sky-300/30 text-sky-200 bg-sky-400/10',
    'Archaeological evidence': 'border-emerald-300/30 text-emerald-200 bg-emerald-400/10',
    'Modern scientific interpretation': 'border-violet-300/30 text-violet-200 bg-violet-400/10',
    'Contested or uncertain': 'border-rose-300/30 text-rose-200 bg-rose-400/10',
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-body text-[9px] uppercase tracking-[.12em] ${styles[category] || styles['Traditional account']}`}>
      {category}
    </span>
  )
}

function LocalImageFrame({ src, alt, caption, sourceInfo }: { src: string; alt: string; caption: string; sourceInfo: string }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoaded(false)
    setError(false)
  }, [src])

  const resolvedSrc = src.startsWith('http') || src.startsWith('/') || src.startsWith('data:') ? src : assetUrl(src)

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-black/60 shadow-xl group">
      {!loaded && !error && (
        <div className="h-64 sm:h-80 flex flex-col items-center justify-center gap-2 text-gold-400/60 bg-gold-950/30">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="font-body text-[10px] uppercase tracking-wider">Living Tradition</span>
        </div>
      )}
      {!error ? (
        <img
          src={resolvedSrc}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-64 sm:h-80 object-cover transition-all duration-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        />
      ) : (
        <div className="h-64 sm:h-80 p-6 flex flex-col items-center justify-center text-center bg-gold-950/40 border border-gold-500/20">
          <span className="font-deva text-5xl text-gold-400">ॐ</span>
          <p className="mt-3 font-display text-lg text-gold-100">{caption}</p>
          <p className="mt-1 font-body text-xs text-gold-300/60">Source-aware festival record active</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p className="font-display font-semibold text-sm sm:text-base text-gold-100">{caption}</p>
        <p className="font-body text-[10px] text-gold-400/70 mt-0.5">{sourceInfo}</p>
      </div>
    </div>
  )
}

interface FestivalSelectionCardProps {
  festival: Festival
  isSelected: boolean
  onSelect: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  setCardRef: (el: HTMLButtonElement | null) => void
}

function FestivalSelectionCard({
  festival,
  isSelected,
  onSelect,
  onKeyDown,
  setCardRef,
}: FestivalSelectionCardProps) {
  const [imgError, setImgError] = useState(false)
  const config = getFestivalVisualConfig(festival.slug)
  const rawSrc = config.imageSrc
  const srcUrl = rawSrc.startsWith('/') || rawSrc.startsWith('http') || rawSrc.startsWith('data:') ? rawSrc : assetUrl(rawSrc)

  return (
    <button
      type="button"
      ref={setCardRef}
      role="tab"
      aria-selected={isSelected}
      aria-controls="festival-content-panel"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={`group relative flex flex-col text-left rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black overflow-hidden select-none cursor-pointer ${
        isSelected
          ? 'border-gold-400 ring-2 ring-gold-400/50 bg-gradient-to-b from-gold-500/20 via-black/80 to-black shadow-[0_0_22px_rgba(232,197,107,0.35)] -translate-y-1'
          : 'border-gold-500/20 bg-black/45 hover:border-gold-400/40 hover:bg-black/65 hover:-translate-y-0.5 shadow-sm'
      }`}
    >
      {/* Visual media banner */}
      <div className="relative w-full h-24 sm:h-28 overflow-hidden bg-black/60">
        {!imgError ? (
          <img
            src={srcUrl}
            alt={festival.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${config.accentColor}`}>
            <span className="font-deva text-2xl text-gold-200">{config.fallbackGlyph}</span>
          </div>
        )}

        {/* Ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Active badge */}
        {isSelected && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold-400 text-black font-body text-[9px] sm:text-[10px] font-bold shadow-md">
            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
            <span>Selected</span>
          </div>
        )}

        {/* Calendar / season micro-chip */}
        <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between pointer-events-none">
          <span className="font-body text-[9px] uppercase tracking-wider text-gold-200/90 bg-black/75 backdrop-blur-xs px-1.5 py-0.5 rounded border border-gold-400/25 truncate max-w-[90%]">
            {config.themeHint}
          </span>
        </div>
      </div>

      {/* Card body: Festival Name & Sanskrit */}
      <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
        <div>
          <h3
            className={`font-display text-xs sm:text-sm font-bold leading-snug break-normal hyphens-none transition-colors ${
              isSelected ? 'text-gold-200 font-extrabold' : 'text-gold-100 group-hover:text-gold-200'
            }`}
          >
            {festival.name}
          </h3>
          <p className="font-deva text-xs text-gold-400/90 mt-1 truncate">
            {festival.sanskrit}
          </p>
        </div>
        <p className="font-body text-[10px] text-gold-300/60 mt-2 truncate">
          {festival.alternateName.split('·')[0].trim()}
        </p>
      </div>

      {/* Bottom active indicator line */}
      <div
        className={`h-0.5 w-full transition-all duration-300 ${
          isSelected ? 'bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400' : 'bg-transparent'
        }`}
      />
    </button>
  )
}

export default function FestivalsPage({ onBack, onNavigate }: { onBack: () => void; onNavigate: (href: string) => void }) {
  const { t } = useLang()
  const [selectedSlug, setSelectedSlug] = useState<string>('vinayaka-chavithi')
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const festival = FESTIVALS.find((f) => f.slug === selectedSlug) || FESTIVALS[0]
  const [selectedIconItem, setSelectedIconItem] = useState(
    festival.iconography && festival.iconography.length > 0 ? festival.iconography[0] : null
  )

  const handleSelectFestival = (slug: string) => {
    setSelectedSlug(slug)
    const f = FESTIVALS.find((x) => x.slug === slug)
    if (f && f.iconography && f.iconography.length > 0) {
      setSelectedIconItem(f.iconography[0])
    } else {
      setSelectedIconItem(null)
    }
    setOpenFaqIndex(0)

    // Smoothly scroll active card into view if in carousel mode
    setTimeout(() => {
      cardRefs.current[slug]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }, 50)
  }

  const handleKeyDownCard = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const nextIdx = (index + 1) % FESTIVALS.length
      const nextFest = FESTIVALS[nextIdx]
      handleSelectFestival(nextFest.slug)
      cardRefs.current[nextFest.slug]?.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prevIdx = (index - 1 + FESTIVALS.length) % FESTIVALS.length
      const prevFest = FESTIVALS[prevIdx]
      handleSelectFestival(prevFest.slug)
      cardRefs.current[prevFest.slug]?.focus()
    }
  }

  const scrollCards = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <main className="relative z-10 min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-black/45 px-4 py-2 font-body text-xs text-gold-300 hover:bg-gold-500/10 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> {t('Return to AUM Universe')}
        </button>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-body text-[10px] uppercase tracking-[.18em] text-gold-400/70">
          <button type="button" onClick={() => onNavigate('#festivals')} className="hover:text-gold-200">
            {t('Festivals')}
          </button>
          <ChevronRight className="w-3 h-3" />
          <span>{festival.name}</span>
        </div>

        {/* Festival Selection Section */}
        <section className="mt-6 rounded-3xl border border-gold-500/20 bg-black/40 p-4 sm:p-6 shadow-xl" aria-label="Festival Selection">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gold-500/15">
            <div className="flex items-center gap-2.5">
              <CalendarDays className="w-5 h-5 text-gold-400 shrink-0" />
              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-gold-100 flex items-center gap-2 flex-wrap">
                  <span>Select Festival</span>
                  <span className="font-deva text-gold-400 text-sm font-normal">पर्व चयनम्</span>
                </h2>
                <p className="font-body text-xs text-gold-300/70">
                  Choose an observance to explore its calendar context, sacred rituals, and traditions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              {/* Carousel Scroll Buttons (active in carousel view) */}
              {viewMode === 'carousel' && (
                <div className="flex items-center gap-1 mr-1">
                  <button
                    type="button"
                    onClick={() => scrollCards('left')}
                    aria-label="Scroll left"
                    className="p-1.5 rounded-full border border-gold-500/20 bg-black/50 text-gold-300 hover:bg-gold-500/15 hover:text-gold-100 hover:border-gold-400/40 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCards('right')}
                    aria-label="Scroll right"
                    className="p-1.5 rounded-full border border-gold-500/20 bg-black/50 text-gold-300 hover:bg-gold-500/15 hover:text-gold-100 hover:border-gold-400/40 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* View Mode Toggle: Grid or Carousel */}
              <div className="flex items-center rounded-xl border border-gold-500/20 bg-black/50 p-0.5" role="group" aria-label="Selector layout view">
                <button
                  type="button"
                  onClick={() => setViewMode('carousel')}
                  title="Carousel view"
                  aria-pressed={viewMode === 'carousel'}
                  className={`px-2.5 py-1 rounded-lg font-body text-xs flex items-center gap-1.5 transition ${
                    viewMode === 'carousel'
                      ? 'bg-gold-500/25 text-gold-100 font-semibold border border-gold-400/40 shadow-sm'
                      : 'text-gold-300/60 hover:text-gold-100'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Carousel</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  title="Grid view"
                  aria-pressed={viewMode === 'grid'}
                  className={`px-2.5 py-1 rounded-lg font-body text-xs flex items-center gap-1.5 transition ${
                    viewMode === 'grid'
                      ? 'bg-gold-500/25 text-gold-100 font-semibold border border-gold-400/40 shadow-sm'
                      : 'text-gold-300/60 hover:text-gold-100'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cards Display: Carousel or Grid */}
          {viewMode === 'carousel' ? (
            <div
              ref={scrollContainerRef}
              role="tablist"
              aria-label="Festival observances carousel"
              className="flex gap-3.5 overflow-x-auto py-2 px-1 scrollbar-thin snap-x snap-mandatory"
            >
              {FESTIVALS.map((fest, idx) => {
                const active = fest.slug === festival.slug
                return (
                  <div key={fest.slug} className="min-w-[170px] max-w-[210px] sm:min-w-[195px] shrink-0 snap-start">
                    <FestivalSelectionCard
                      festival={fest}
                      isSelected={active}
                      onSelect={() => handleSelectFestival(fest.slug)}
                      onKeyDown={(e) => handleKeyDownCard(e, idx)}
                      setCardRef={(el) => {
                        cardRefs.current[fest.slug] = el
                      }}
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div
              role="tablist"
              aria-label="Festival observances grid"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 py-2 px-1"
            >
              {FESTIVALS.map((fest, idx) => {
                const active = fest.slug === festival.slug
                return (
                  <FestivalSelectionCard
                    key={fest.slug}
                    festival={fest}
                    isSelected={active}
                    onSelect={() => handleSelectFestival(fest.slug)}
                    onKeyDown={(e) => handleKeyDownCard(e, idx)}
                    setCardRef={(el) => {
                      cardRefs.current[fest.slug] = el
                    }}
                  />
                )
              })}
            </div>
          )}
        </section>

        {/* Main Content Area for the Single Selected Festival */}
        <div
          key={festival.slug}
          id="festival-content-panel"
          role="region"
          aria-label={`${festival.name} Details`}
          className="transition-opacity duration-300 ease-in-out"
        >
          {/* Hero Banner Section */}
          <header className="relative mt-8 grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-center rounded-[2.5rem] border border-gold-500/25 bg-gradient-to-b from-[#140c2b]/90 via-[#0a0718]/90 to-black/80 p-6 sm:p-10 shadow-2xl">
            <div>
              <span className="font-deva text-2xl text-gold-400">{festival.sanskrit}</span>
              <p className="mt-2 font-body text-[10px] uppercase tracking-[.24em] text-gold-400 font-semibold">
                {festival.season} · {festival.tithi}
              </p>
              <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold text-gold-100 text-glow">
                {festival.name}
              </h1>
              <p className="mt-2 font-display text-xl sm:text-2xl italic text-gold-300">{festival.alternateName}</p>
              <p className="mt-5 max-w-2xl font-body text-sm sm:text-base leading-relaxed text-gold-200/75">
                {festival.summary}
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-gold-950/40 border-l-4 border-gold-400 font-display text-base sm:text-lg italic text-gold-200/90 leading-relaxed">
                "{festival.meaningToday}"
              </div>
            </div>

            <LocalImageFrame
              src={getFestivalVisualConfig(festival.slug).imageSrc}
              alt={`${festival.name} celebration`}
              caption={`${festival.name} — Living Tradition`}
              sourceInfo="Source: AUM Sacred Traditions Archives · High-resolution media asset"
            />
          </header>

        {/* Overview & Seasonal / Calendar Context */}
        <section className="grid lg:grid-cols-3 gap-5 mt-8">
          <article className="lg:col-span-2 rounded-3xl border border-gold-500/20 bg-black/45 p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="w-5 h-5 text-gold-400 shrink-0" />
              <h2 className="font-display text-2xl font-bold text-gold-100">Sacred Origin & Story</h2>
            </div>
            <p className="font-body text-sm sm:text-base leading-relaxed text-gold-200/75">
              {festival.story}
            </p>
            <p className="mt-4 font-body text-xs sm:text-sm leading-relaxed text-gold-300/70 border-t border-gold-500/15 pt-3">
              <strong className="text-gold-300">Observance Structure:</strong> {festival.observance}
            </p>
          </article>

          <article className="rounded-3xl border border-gold-500/20 bg-gold-950/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <MapPin className="w-5 h-5 text-gold-400 mb-3" />
              <h3 className="font-display text-xl font-bold text-gold-100">Calendar & Timing</h3>
              <div className="mt-3 space-y-2 text-xs font-body text-gold-200/70">
                <p><strong className="text-gold-300">Season:</strong> {festival.season}</p>
                <p><strong className="text-gold-300">Lunisolar Tithi:</strong> {festival.tithi}</p>
                <p className="mt-2 text-gold-300/60 italic leading-relaxed">
                  {festival.regionNote || 'Lunisolar calendars vary by region and sunrise calculations; families observe traditions with devotion according to their local panchangam.'}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gold-500/15 font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
              AUM Source Policy: Living Tradition & Respect for Diversity
            </div>
          </article>
        </section>

        {/* Core Rituals */}
        <section className="mt-10 rounded-3xl border border-gold-500/20 bg-black/45 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-5 h-5 text-gold-400" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">Core Rituals & Practices</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {festival.rituals.map((r, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/30 border border-gold-500/15 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center font-body text-xs font-bold text-gold-300 shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Traditional Offerings (Naivedya) if present */}
        {festival.offeringsList && festival.offeringsList.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-5 h-5 text-gold-400" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
                Traditional Sacred Offerings (Naivedya)
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {festival.offeringsList.map((offering) => (
                <div key={offering.name} className="p-5 rounded-2xl border border-gold-500/20 bg-black/45">
                  <span className="font-deva text-xs text-gold-400">{offering.sa}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-gold-100">{offering.name}</h3>
                  <p className="mt-2 font-body text-xs text-gold-300/65 leading-relaxed">{offering.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Iconography Explorer if available */}
        {festival.iconography && festival.iconography.length > 0 && selectedIconItem && (
          <section className="mt-14">
            <div className="max-w-3xl mb-6">
              <span className="font-body text-[10px] uppercase tracking-widest text-gold-400 font-semibold">Visual Theology</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 mt-1">Sacred Iconography</h2>
              <p className="mt-2 font-body text-xs sm:text-sm text-gold-300/70">
                Select any sacred symbol or feature to explore its deeper metaphysical meaning.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {festival.iconography.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIconItem(item)}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      selectedIconItem.id === item.id
                        ? 'bg-gold-950/80 border-gold-400 ring-2 ring-gold-400/50 shadow-lg scale-105'
                        : 'bg-black/45 border-gold-500/15 hover:border-gold-400/40'
                    }`}
                  >
                    <span className="font-deva text-xs text-gold-400 block">{item.sanskrit}</span>
                    <span className="font-display text-xs font-semibold text-gold-100 block mt-1 line-clamp-2">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-5 rounded-3xl border border-gold-400/35 bg-gradient-to-b from-[#140b2a] to-black/80 p-6 sm:p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-gold-500/20 pb-4">
                  <div>
                    <span className="font-deva text-gold-400 text-sm">{selectedIconItem.sanskrit}</span>
                    <h3 className="font-display text-2xl font-bold text-gold-100">{selectedIconItem.name}</h3>
                  </div>
                  <Info className="w-5 h-5 text-gold-400/70" />
                </div>
                <div className="mt-5">
                  <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold">Symbolic Interpretation</span>
                  <p className="mt-1 font-display text-lg text-gold-200/90 leading-relaxed">
                    "{selectedIconItem.symbolism}"
                  </p>
                </div>
                <div className="mt-5 p-3.5 rounded-2xl bg-black/40 border border-gold-500/15 font-body text-xs text-gold-300/65">
                  <span className="font-semibold text-gold-400">Context Note:</span> {selectedIconItem.note}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Timeline if available */}
        {festival.timeline && festival.timeline.length > 0 && (
          <section className="mt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="font-body text-[10px] uppercase tracking-widest text-gold-400 font-semibold">Observance Journey</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 mt-1">Step-by-Step Observance</h2>
              </div>
              <p className="font-body text-xs text-gold-400/70 max-w-md">
                Traditions adapt with joy to suit household size and regional customs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {festival.timeline.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl border border-gold-500/20 bg-black/45 gold-glow-box-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-400/40 flex items-center justify-center font-body text-xs font-bold text-gold-300">
                        {step.step}
                      </span>
                      <span className="font-deva text-xs text-gold-400/70">{step.sanskrit}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-gold-100">{step.title}</h3>
                    <p className="mt-2 font-body text-xs leading-relaxed text-gold-200/70">{step.description}</p>
                  </div>
                  <p className="mt-4 pt-3 border-t border-gold-500/15 font-body text-[10px] text-gold-400/60 italic">
                    {step.variationNote}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Immersion if available */}
        {festival.immersionSequence && festival.immersionSequence.length > 0 && (
          <section className="mt-14 rounded-3xl border border-gold-400/35 bg-gradient-to-b from-[#120a28]/95 via-[#080514] to-black p-6 sm:p-10 shadow-2xl">
            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
                  <Droplets className="w-3.5 h-3.5 text-gold-400" /> Philosophical Visarjana
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
                  Why is the Murti Immersed in Water?
                </h2>
                <p className="mt-4 font-body text-sm sm:text-base leading-relaxed text-gold-200/80">
                  Visarjana is one of the most spiritually profound aspects of Hindu worship. The clay murti provides a physical form (<span className="text-gold-300 italic">Sākāra</span>) for love, prayers, and devotion. Immersion symbolizes the eventual return of form to the formless (<span className="text-gold-300 italic">Nirākāra</span>).
                </p>

                <div className="mt-6 space-y-3 font-body text-xs sm:text-sm text-gold-300/80">
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">✦</span>
                    <span><strong className="text-gold-100">Impermanence & Non-Attachment:</strong> Reminds us that all physical structures are temporary, while the underlying Consciousness is eternal.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-bold">✦</span>
                    <span><strong className="text-gold-100">The Divine is Not Destroyed:</strong> When the clay dissolves, the deity's presence is not lost; it expands back into all nature.</span>
                  </div>
                </div>
              </div>

              <LocalImageFrame
                src="media/ganesha_visarjana.jpg"
                alt="Visarjana procession"
                caption="Form → Worship → Gratitude → Dissolution → Renewal"
                sourceInfo="Source: Wikimedia Commons · CC BY-SA 3.0 · Living ritual record"
              />
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3 pt-8 border-t border-gold-500/20">
              {festival.immersionSequence.map((item, idx) => (
                <div key={item.step} className="p-4 rounded-2xl bg-black/50 border border-gold-500/15 text-center">
                  <span className="font-body text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                    Step 0{idx + 1} · {item.step}
                  </span>
                  <h4 className="mt-2 font-display text-base font-bold text-gold-100">{item.title}</h4>
                  <p className="mt-1.5 font-body text-[11px] text-gold-300/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regional Traditions Across Bharat */}
        <section className="mt-14">
          <div className="max-w-3xl mb-6">
            <span className="font-body text-[10px] uppercase tracking-widest text-gold-400 font-semibold">Living Cultural Diversity</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 mt-1">Regional Traditions Across Bharat</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {festival.regionalCards.map((card) => (
              <div key={card.region} className="p-6 rounded-3xl border border-gold-500/20 bg-black/45 gold-glow-box-hover transition-all flex flex-col justify-between">
                <div>
                  <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold">{card.region}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-gold-100">{card.highlights}</h3>
                  <p className="mt-3 font-body text-xs leading-relaxed text-gold-300/70">{card.customs}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scientific & Ecological Perspective */}
        <section className="mt-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-black/40 to-emerald-950/30 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                Traditional Ecology & Health Science
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-gold-100">
                Seasonal Health & Ecological Perspective
              </h3>
              <p className="mt-3 font-body text-sm text-gold-200/80 leading-relaxed">
                {festival.scientificPerspective}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        {festival.faqs && festival.faqs.length > 0 && (
          <section className="mt-14 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <HelpCircle className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100">Frequently Asked Questions</h2>
              <p className="mt-2 font-body text-xs sm:text-sm text-gold-300/70">
                Clear, source-aware answers distinguishing scripture, living custom, and historical facts.
              </p>
            </div>

            <div className="space-y-3">
              {festival.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div key={faq.question} className="rounded-2xl border border-gold-500/20 bg-black/45 overflow-hidden transition-all">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gold-950/30 transition-colors"
                    >
                      <span className="font-display text-base sm:text-lg font-semibold text-gold-100">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-gold-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-gold-500/10">
                        <div className="mb-3">
                          <SourceBadge category={faq.category} />
                        </div>
                        <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Sources Lens Section */}
        {festival.sources && festival.sources.length > 0 && (
          <section className="mt-14 border-t border-gold-500/20 pt-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-gold-400" />
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">Source Lens & Evidence Standard</h2>
                <p className="font-body text-xs text-gold-300/60 mt-0.5">
                  Every claim in AUM is categorized to prevent blurring legend, history, and scientific analysis.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {festival.sources.map((source, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-gold-500/15 bg-black/40">
                  <SourceBadge category={source.category} />
                  <h3 className="mt-3 font-display text-lg font-bold text-gold-100">{source.title}</h3>
                  <p className="mt-2 font-body text-xs text-gold-200/65 leading-relaxed">{source.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        </div>
      </div>
    </main>
  )
}
