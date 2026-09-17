import { useState, useMemo } from 'react'
import { Search, ZoomIn, Sparkles, Filter, BookOpen } from 'lucide-react'
import {
  RAMAYANA_CHARACTERS,
  CHARACTER_CATEGORIES,
  RamayanaCharacter,
} from '../data/ramayanaCharacters'
import { useLang } from '../i18n'
import ImageLightboxModal, { LightboxImage } from './ImageLightboxModal'

interface CharacterGalleryProps {
  onSelectCharacter?: (char: RamayanaCharacter) => void
}

export default function CharacterGallery({ onSelectCharacter }: CharacterGalleryProps) {
  const { lang } = useLang()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filter characters based on category and search query
  const filteredCharacters = useMemo(() => {
    return RAMAYANA_CHARACTERS.filter((char) => {
      const matchesCat = selectedCategory === 'all' || char.category === selectedCategory
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCat

      const charName = (char.name[lang as keyof typeof char.name] || char.name.en).toLowerCase()
      const sanskrit = (char.sanskrit || '').toLowerCase()
      const role = (char.role[lang as keyof typeof char.role] || char.role.en).toLowerCase()
      const rel = (char.relationship[lang as keyof typeof char.relationship] || char.relationship.en).toLowerCase()

      return matchesCat && (charName.includes(query) || sanskrit.includes(query) || role.includes(query) || rel.includes(query))
    })
  }, [selectedCategory, searchQuery, lang])

  // Convert characters to LightboxImage format
  const lightboxImages: LightboxImage[] = useMemo(() => {
    return filteredCharacters.map((char) => {
      const charName = char.name[lang as keyof typeof char.name] || char.name.en
      const roleText = char.role[lang as keyof typeof char.role] || char.role.en
      const relText = char.relationship[lang as keyof typeof char.relationship] || char.relationship.en
      const actionsText = char.importantActions[lang as keyof typeof char.importantActions] || char.importantActions.en
      const dharmaText = char.dharmaSignificance[lang as keyof typeof char.dharmaSignificance] || char.dharmaSignificance.en

      const categoryLabel =
        CHARACTER_CATEGORIES.find((c) => c.id === char.category)?.name[
          lang as keyof typeof char.name
        ] || char.category

      return {
        src: char.image,
        title: charName,
        sanskritTitle: char.sanskrit,
        category: `Character Portrait · ${categoryLabel}`,
        period: 'Treta Yuga · Ikṣvāku Lineage',
        subtitle: relText,
        caption: roleText,
        detailedNotes: `Dharma Significance: ${dharmaText} | Key Actions: ${actionsText}`,
        sourceProvenance: char.sourceRef || 'Vālmīki Rāmāyaṇa Critical Edition',
        tags: [char.category, 'Itihāsa', 'Portrait'],
      }
    })
  }, [filteredCharacters, lang])

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="mt-16" aria-label="Ramayana Character Gallery">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gold-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Character Gallery · पात्र दीर्घा</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
            Archival Character Portraits
          </h2>
          <p className="mt-2 font-body text-xs sm:text-sm text-gold-200/75 max-w-2xl leading-relaxed">
            Explore 25 principal figures from the Vālmīki Rāmāyaṇa tradition. Click any portrait for
            high-resolution inspection, iconographic study, dharmic significance, and scripture citations.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search characters, roles..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-gold-500/25 text-gold-200 placeholder-gold-500/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-400 hover:text-gold-200 text-xs"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-thin">
        <Filter className="w-3.5 h-3.5 text-gold-400 shrink-0 ml-1" />
        {CHARACTER_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.id
          const label = cat.name[lang as keyof typeof cat.name] || cat.name.en
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-body whitespace-nowrap transition-all border ${
                active
                  ? 'bg-gold-500/25 border-gold-400 text-gold-100 font-semibold shadow-[0_0_12px_rgba(232,197,107,0.25)]'
                  : 'bg-black/40 border-gold-500/15 text-gold-300/70 hover:border-gold-400/40 hover:text-gold-100'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Character Cards Grid */}
      {filteredCharacters.length === 0 ? (
        <div className="mt-8 p-12 text-center rounded-3xl border border-gold-500/15 bg-black/30">
          <BookOpen className="w-8 h-8 text-gold-400/40 mx-auto mb-3" />
          <p className="font-display text-lg text-gold-200">No characters found matching "{searchQuery}"</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
            }}
            className="mt-4 px-4 py-1.5 rounded-full border border-gold-400/30 text-gold-300 text-xs hover:bg-gold-500/10 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mt-6">
          {filteredCharacters.map((char, index) => {
            const charName = char.name[lang as keyof typeof char.name] || char.name.en
            const roleText = char.role[lang as keyof typeof char.role] || char.role.en
            const relText = char.relationship[lang as keyof typeof char.relationship] || char.relationship.en

            return (
              <article
                key={char.id}
                className="group relative flex flex-col rounded-2xl border border-gold-500/20 bg-gradient-to-b from-[#120d26]/80 via-black/75 to-black/90 overflow-hidden shadow-lg hover:border-gold-400/50 hover:shadow-[0_0_24px_rgba(232,197,107,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Character Portrait Container with Click to Inspect Trigger */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightboxAt(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openLightboxAt(index)
                    }
                  }}
                  title={`Click to inspect ${charName} in high resolution`}
                  aria-label={`Inspect ${charName} portrait`}
                  className="relative w-full aspect-[4/5] bg-black/60 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  <img
                    src={char.image}
                    alt={charName}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Hover Inspect Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-400 text-black font-body text-xs font-bold shadow-xl transform scale-95 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Inspect High-Res</span>
                    </div>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-body text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/80 border border-gold-400/25 text-gold-300/90 backdrop-blur-xs font-semibold">
                      {char.category}
                    </span>
                  </div>

                  {/* Bottom Portrait Quick Info */}
                  <div className="absolute bottom-2.5 left-3 right-3 pointer-events-none">
                    <span className="font-deva text-xs text-gold-300/90 block truncate drop-shadow">
                      {char.sanskrit}
                    </span>
                  </div>
                </div>

                {/* Card Details Body */}
                <div className="p-3.5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-base font-bold text-gold-100 leading-snug group-hover:text-gold-200 transition-colors">
                      {charName}
                    </h3>
                    <p className="font-body text-[11px] text-gold-400/80 line-clamp-1 mt-0.5">
                      {relText}
                    </p>
                    <p className="font-body text-xs text-gold-200/70 line-clamp-2 mt-2 leading-relaxed">
                      {roleText}
                    </p>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-3 pt-2.5 border-t border-gold-500/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openLightboxAt(index)}
                      className="inline-flex items-center gap-1 text-[11px] font-body text-gold-400 hover:text-gold-200 transition font-medium"
                    >
                      <ZoomIn className="w-3 h-3" />
                      <span>High-Res View</span>
                    </button>
                    {onSelectCharacter && (
                      <button
                        type="button"
                        onClick={() => onSelectCharacter(char)}
                        className="text-[10px] font-body text-gold-300/60 hover:text-gold-200 transition"
                      >
                        Details →
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {/* Lightbox / High-Resolution Inspection Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  )
}
