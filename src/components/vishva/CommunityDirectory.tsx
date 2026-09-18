import { useState } from 'react'
import {
  COMMUNITY_DIRECTORY_DATA,
  type CommunityDirectoryItem
} from '../../data/vishvaData'
import { Landmark, Users, HeartHandshake, BookOpen, GraduationCap, Search, Filter, Plus, ShieldCheck, MapPin } from 'lucide-react'

interface CommunityDirectoryProps {
  onOpenSuggestModal: (prefillCountry?: string) => void
}

const CATEGORIES = [
  'All',
  'Temple',
  'Cultural Association',
  'Study Group',
  'Seva Organization',
  'Youth Group',
  'Sampradāya Community'
]

export default function CommunityDirectory({ onOpenSuggestModal }: CommunityDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')

  // Get unique countries from directory
  const countries = ['All', ...Array.from(new Set(COMMUNITY_DIRECTORY_DATA.map((item) => item.country)))]

  const filteredItems = COMMUNITY_DIRECTORY_DATA.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.traditionOrFocus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry
    return matchesSearch && matchesCategory && matchesCountry
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Temple':
        return <Landmark className="w-4 h-4 text-gold-400" />
      case 'Cultural Association':
        return <Users className="w-4 h-4 text-gold-400" />
      case 'Seva Organization':
        return <HeartHandshake className="w-4 h-4 text-gold-400" />
      case 'Study Group':
        return <BookOpen className="w-4 h-4 text-gold-400" />
      case 'Youth Group':
        return <GraduationCap className="w-4 h-4 text-gold-400" />
      default:
        return <ShieldCheck className="w-4 h-4 text-gold-400" />
    }
  }

  return (
    <section id="community-directory" className="py-14 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              Global Hindu Directory
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-100 text-glow">
              Community Directory & Global Sanctuaries
            </h2>
            <p className="mt-3 max-w-2xl font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
              Discover verified Hindu temples, non-profit seva bodies, academic study circles, youth federations, and traditional sampradāya communities across every continent.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenSuggestModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold shadow-lg hover:brightness-110 transition shrink-0"
          >
            <Plus className="w-4 h-4" /> Suggest / Register Community
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/50 backdrop-blur-md mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by temple, organization name, city, or sampradāya..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-gold-500/30 text-gold-100 text-xs font-body placeholder:text-gold-300/40 focus:outline-none focus:border-gold-400"
              />
            </div>

            {/* Country Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gold-400 font-display shrink-0">Country:</span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 rounded-xl bg-black/70 border border-gold-500/30 text-gold-100 text-xs font-body focus:outline-none focus:border-gold-400"
              >
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-[#070b14] text-gold-100">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition border ${
                  selectedCategory === cat
                    ? 'border-gold-400 bg-gold-500/20 text-gold-100 font-semibold shadow-sm'
                    : 'border-gold-500/15 bg-black/40 text-gold-300/70 hover:border-gold-400/40 hover:text-gold-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-gold-500/20 bg-gradient-to-b from-[#090d1a] to-black hover:border-gold-400/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-gold-500/15">
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold-300 font-display font-medium">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/25 text-gold-300 text-[10px] font-display">
                    {item.verifiedStatus}
                  </span>
                </div>

                <h3 className="mt-3.5 font-display text-lg font-bold text-gold-100">
                  {item.name}
                </h3>

                <div className="mt-1.5 flex items-center gap-1 text-xs text-gold-400/80 font-body">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>

                <p className="mt-2 text-xs font-display text-gold-300/90 italic">
                  Focus: {item.traditionOrFocus}
                </p>

                <p className="mt-2 text-xs font-body text-gold-200/75 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gold-500/10 flex items-center justify-between text-[11px] text-gold-400/70 font-body">
                <span>Founded: {item.foundedYear || 'N/A'}</span>
                <span className="text-gold-300/60">AUM Directory</span>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-gold-300/60 text-sm font-body">
              No communities found matching your search. Suggest one to be added!
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
