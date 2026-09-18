import { useState, useMemo } from 'react'
import {
  COMMUNITY_DIRECTORY_DATA,
  COUNTRIES_HINDU_DATA,
  type CommunityDirectoryItem
} from '../../data/vishvaData'
import {
  Landmark,
  Users,
  HeartHandshake,
  BookOpen,
  GraduationCap,
  Search,
  Filter,
  Plus,
  ShieldCheck,
  MapPin,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react'

interface CommunityDirectoryProps {
  onOpenSuggestModal: (prefillCountry?: string) => void
  selectedGlobalRegion?: string
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

export default function CommunityDirectory({
  onOpenSuggestModal,
  selectedGlobalRegion = 'All Regions'
}: CommunityDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [cityFilter, setCityFilter] = useState('')
  const [activeItemModal, setActiveItemModal] = useState<CommunityDirectoryItem | null>(null)

  // Countries in selected global region
  const regionCountries = useMemo(() => {
    if (!selectedGlobalRegion || selectedGlobalRegion === 'All Regions' || selectedGlobalRegion === 'All') {
      return null
    }
    return new Set(
      COUNTRIES_HINDU_DATA.filter((c) => c.region === selectedGlobalRegion).map((c) => c.name)
    )
  }, [selectedGlobalRegion])

  // Get unique countries in the directory for dropdown
  const availableCountries = useMemo(() => {
    const list = Array.from(new Set(COMMUNITY_DIRECTORY_DATA.map((item) => item.country)))
    if (!regionCountries) return ['All', ...list.sort()]
    return ['All', ...list.filter((c) => regionCountries.has(c)).sort()]
  }, [regionCountries])

  // Filter items based on global region, search, category, country, and city
  const filteredItems = useMemo(() => {
    return COMMUNITY_DIRECTORY_DATA.filter((item) => {
      // Global region check
      if (regionCountries && !regionCountries.has(item.country)) {
        return false
      }

      // Search term
      const matchesSearch =
        !searchTerm.trim() ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.traditionOrFocus.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory

      // Country filter
      const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry

      // City filter
      const matchesCity = !cityFilter.trim() || item.city.toLowerCase().includes(cityFilter.toLowerCase())

      return matchesSearch && matchesCategory && matchesCountry && matchesCity
    })
  }, [searchTerm, selectedCategory, selectedCountry, cityFilter, regionCountries])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Temple':
        return <Landmark className="w-3.5 h-3.5 text-gold-400" />
      case 'Cultural Association':
        return <Users className="w-3.5 h-3.5 text-gold-400" />
      case 'Seva Organization':
        return <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
      case 'Study Group':
        return <BookOpen className="w-3.5 h-3.5 text-sky-400" />
      case 'Youth Group':
        return <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
      default:
        return <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
    }
  }

  return (
    <section id="community-directory" className="py-12 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              Global Hindu Directory
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
              Community Directory & Sanctuaries
            </h2>
            <p className="mt-2 max-w-2xl font-body text-sm text-stone-300 leading-relaxed">
              Explore verified temples, cultural associations, educational study circles, and seva bodies across every continent.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenSuggestModal()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold shadow-lg hover:brightness-110 transition shrink-0"
          >
            <Plus className="w-4 h-4" /> Suggest / Register Community
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl border border-gold-500/20 bg-black/60 backdrop-blur-md mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search community name..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/70 border border-gold-500/25 text-gold-100 text-xs font-body placeholder:text-stone-500 focus:outline-none focus:border-gold-400"
              />
            </div>

            {/* Country Dropdown Filter */}
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black/70 border border-gold-500/25 text-gold-100 text-xs font-body focus:outline-none focus:border-gold-400"
              >
                <option value="All">All Countries</option>
                {availableCountries.filter((c) => c !== 'All').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                placeholder="Filter by city (e.g. London, Toronto)..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/70 border border-gold-500/25 text-gold-100 text-xs font-body placeholder:text-stone-500 focus:outline-none focus:border-gold-400"
              />
            </div>
          </div>

          {/* Category Chips Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-white/10 no-scrollbar">
            <span className="text-[11px] font-display text-gold-400 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-display whitespace-nowrap transition border ${
                  selectedCategory === cat
                    ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-semibold'
                    : 'border-white/10 bg-black/40 text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Cards Grid (Showing only Name, Location, Category, Tradition/focus, Verification badge, "View Details") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-gold-500/20 bg-gradient-to-b from-[#0e1222]/90 to-black hover:border-gold-400/40 transition-all flex flex-col justify-between shadow-md group"
            >
              <div>
                {/* Category & Verification Badge */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-gold-500/20 text-gold-300 text-[10px] font-display font-medium flex items-center gap-1.5">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </span>

                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] font-display font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-2.5 h-2.5" />
                    {item.verifiedStatus}
                  </span>
                </div>

                {/* Name */}
                <h3 className="mt-3 font-display text-lg font-bold text-white group-hover:text-gold-200 transition">
                  {item.name}
                </h3>

                {/* Location */}
                <div className="mt-1 flex items-center gap-1 text-xs text-stone-400 font-body">
                  <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                  <span>{item.city}, {item.country}</span>
                </div>

                {/* Tradition / Focus */}
                <div className="mt-2.5 p-2 rounded-xl bg-black/40 border border-white/5 text-[11px] text-stone-300">
                  <span className="text-stone-400 font-medium">Focus: </span>
                  <span className="text-gold-200">{item.traditionOrFocus}</span>
                </div>
              </div>

              {/* "View Details" Button */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveItemModal(item)}
                  className="w-full py-2 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-200 text-xs font-display font-semibold hover:bg-gold-500/25 transition flex items-center justify-center gap-1.5"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="p-8 text-center rounded-2xl border border-gold-500/20 bg-black/40 text-stone-400 text-xs font-body">
            No community centers found matching the specified filters.
          </div>
        )}

        {/* DETAILS MODAL / DRAWER */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0b0f1d] border border-gold-500/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-fadeIn">
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 text-[10px] font-display">
                      {activeItemModal.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                      {activeItemModal.verifiedStatus}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1.5">
                    {activeItemModal.name}
                  </h3>
                  <div className="text-xs text-stone-400 font-body flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{activeItemModal.city}, {activeItemModal.country}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveItemModal(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs font-body text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Tradition / Sampradāya</span>
                  <span className="text-gold-200 font-semibold">{activeItemModal.traditionOrFocus}</span>
                </div>

                {activeItemModal.foundedYear && (
                  <div>
                    <span className="text-stone-400 font-bold block text-[10px] uppercase">Established</span>
                    <span className="text-white">{activeItemModal.foundedYear}</span>
                  </div>
                )}

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Overview</span>
                  <p className="mt-1 text-stone-300">{activeItemModal.description}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveItemModal(null)}
                  className="w-full py-2 rounded-xl bg-gold-500/20 border border-gold-400/40 text-gold-200 hover:bg-gold-500/30 text-xs font-display font-medium transition"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
