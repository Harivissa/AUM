import { useState, useEffect, useRef, useMemo } from 'react'
import L from 'leaflet'
import {
  COUNTRIES_HINDU_DATA,
  HISTORICAL_REGIONS_EVIDENCE,
  GEO_MIGRATION_ROUTES,
  COMMUNITY_DIRECTORY_DATA,
  type CountryHinduProfile,
  type HistoricalRegionData,
  type GeoMigrationRoute,
  type CommunityDirectoryItem,
  type ConfidenceLabel
} from '../../data/vishvaData'
import { useLang, type UILang } from '../../i18n'
import {
  Globe,
  Search,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Users,
  Landmark,
  Route,
  Building2,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  Anchor,
  X,
  MapPin,
  Compass,
  ArrowRight
} from 'lucide-react'

export interface InteractiveMapProps {
  onSelectCountry: (country: CountryHinduProfile) => void
  onSelectHistoricalRegion: (region: HistoricalRegionData) => void
  selectedGlobalRegion: string
  onRegionChange?: (region: string) => void
  highlightedRouteId?: string | null
}

export type MapLayer =
  | 'present'
  | 'historical'
  | 'cultural'
  | 'migration'
  | 'directory'

export type RegionFilter =
  | 'All Regions'
  | 'South Asia'
  | 'Southeast Asia'
  | 'East Asia'
  | 'Central Asia'
  | 'Middle East'
  | 'Africa'
  | 'Europe'
  | 'Americas'
  | 'Oceania'

// Regional bounding centers for smooth camera navigation
const REGION_CENTERS: Record<string, { center: [number, number]; zoom: number }> = {
  'All Regions': { center: [20, 20], zoom: 2.5 },
  'South Asia': { center: [21, 79], zoom: 4.5 },
  'Southeast Asia': { center: [7, 108], zoom: 4.5 },
  'East Asia': { center: [34, 126], zoom: 4.5 },
  'Central Asia': { center: [40, 68], zoom: 4.5 },
  'Middle East': { center: [25, 52], zoom: 5 },
  'Africa': { center: [-5, 32], zoom: 3.5 },
  'Europe': { center: [52, 10], zoom: 4.2 },
  'Americas': { center: [15, -75], zoom: 3.2 },
  'Oceania': { center: [-20, 160], zoom: 4 }
}

export default function InteractiveMap({
  onSelectCountry,
  onSelectHistoricalRegion,
  selectedGlobalRegion = 'All Regions',
  onRegionChange,
  highlightedRouteId
}: InteractiveMapProps) {
  const { lang, ui } = useLang()
  const currentLang = (ui as UILang) || 'en'

  const [activeLayer, setActiveLayer] = useState<MapLayer>('present')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mapLoading, setMapLoading] = useState(true)
  const [mapError, setMapError] = useState(false)

  // Side panel / bottom sheet selection states
  const [activeCountryCard, setActiveCountryCard] = useState<CountryHinduProfile | null>(null)
  const [activeHistoricalCard, setActiveHistoricalCard] = useState<HistoricalRegionData | null>(null)
  const [activeRouteCard, setActiveRouteCard] = useState<GeoMigrationRoute | null>(null)
  const [activeDirectoryCard, setActiveDirectoryCard] = useState<CommunityDirectoryItem | null>(null)

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const layersGroupRef = useRef<L.LayerGroup | null>(null)
  const routesGroupRef = useRef<L.LayerGroup | null>(null)

  // Filter countries based on global region
  const filteredCountries = useMemo(() => {
    if (!selectedGlobalRegion || selectedGlobalRegion === 'All Regions' || selectedGlobalRegion === 'All') {
      return COUNTRIES_HINDU_DATA
    }
    return COUNTRIES_HINDU_DATA.filter((c) => c.region === selectedGlobalRegion)
  }, [selectedGlobalRegion])

  // Filter historical regions based on global region
  const filteredHistorical = useMemo(() => {
    if (!selectedGlobalRegion || selectedGlobalRegion === 'All Regions' || selectedGlobalRegion === 'All') {
      return HISTORICAL_REGIONS_EVIDENCE
    }
    return HISTORICAL_REGIONS_EVIDENCE.filter((h) => {
      const isEastAsia = selectedGlobalRegion === 'East Asia' && (h.id.includes('korea') || h.regionName.includes('Korea'))
      const isSEAsia = selectedGlobalRegion === 'Southeast Asia' && (h.id.includes('angkor') || h.id.includes('champa') || h.id.includes('majapahit'))
      const isCentralOrSouth = (selectedGlobalRegion === 'Central Asia' || selectedGlobalRegion === 'South Asia') && (h.id.includes('kabul') || h.id.includes('central-asia'))
      return isEastAsia || isSEAsia || isCentralOrSouth
    })
  }, [selectedGlobalRegion])

  // Filter community items based on global region
  const filteredDirectory = useMemo(() => {
    if (!selectedGlobalRegion || selectedGlobalRegion === 'All Regions' || selectedGlobalRegion === 'All') {
      return COMMUNITY_DIRECTORY_DATA
    }
    // Map country names to regions
    const countriesInRegion = new Set(filteredCountries.map((c) => c.name))
    return COMMUNITY_DIRECTORY_DATA.filter((item) => countriesInRegion.has(item.country))
  }, [selectedGlobalRegion, filteredCountries])

  // Search results combining all categories
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase().trim()

    const countries = COUNTRIES_HINDU_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.sanskritName.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.majorCities.some((city) => city.toLowerCase().includes(q))
    ).map((c) => ({ type: 'country' as const, data: c, title: c.name, subtitle: `${c.region} • ${c.estimatedPopulation}` }))

    const historical = HISTORICAL_REGIONS_EVIDENCE.filter(
      (h) =>
        h.regionName.toLowerCase().includes(q) ||
        h.description.toLowerCase().includes(q) ||
        h.modernCountries.some((m) => m.toLowerCase().includes(q))
    ).map((h) => ({ type: 'historical' as const, data: h, title: h.regionName, subtitle: `${h.period} • ${h.classification}` }))

    const routes = GEO_MIGRATION_ROUTES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.origin.toLowerCase().includes(q) ||
        r.destination.toLowerCase().includes(q)
    ).map((r) => ({ type: 'route' as const, data: r, title: r.title, subtitle: `${r.eraTitle} • ${r.timePeriod}` }))

    const communities = COMMUNITY_DIRECTORY_DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q)
    ).map((item) => ({ type: 'community' as const, data: item, title: item.name, subtitle: `${item.city}, ${item.country} • ${item.category}` }))

    return [...countries, ...historical, ...routes, ...communities].slice(0, 8)
  }, [searchQuery])

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return

    const map = L.map(mapContainerRef.current, {
      center: [20, 20],
      zoom: 2.5,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
      worldCopyJump: true,
      maxBounds: [
        [-85, -180],
        [85, 180]
      ],
      maxBoundsViscosity: 0.8
    })

    // Clean OpenStreetMap tiles with AUM CSS dark theme filter (no API key, zero errors)
    const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19,
      className: 'aum-osm-tiles'
    })

    osmLayer.on('load', () => {
      setMapLoading(false)
      setMapError(false)
    })

    let errorCount = 0
    osmLayer.on('tileerror', () => {
      errorCount++
      if (errorCount > 25) {
        setMapError(true)
        setMapLoading(false)
      }
    })

    osmLayer.addTo(map)

    const layersGroup = L.layerGroup().addTo(map)
    const routesGroup = L.layerGroup().addTo(map)
    layersGroupRef.current = layersGroup
    routesGroupRef.current = routesGroup
    mapInstanceRef.current = map

    const timer = setTimeout(() => {
      map.invalidateSize()
    }, 250)

    return () => {
      clearTimeout(timer)
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // Fly to region when selectedGlobalRegion changes
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !selectedGlobalRegion) return
    const target = REGION_CENTERS[selectedGlobalRegion] || REGION_CENTERS['All Regions']
    map.flyTo(target.center, target.zoom, { duration: 1.4 })
  }, [selectedGlobalRegion])

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Invalidate on fullscreen toggle
  useEffect(() => {
    if (mapInstanceRef.current) {
      setTimeout(() => {
        mapInstanceRef.current?.invalidateSize()
      }, 300)
    }
  }, [isFullscreen])

  // Render markers and layers
  useEffect(() => {
    const map = mapInstanceRef.current
    const layersGroup = layersGroupRef.current
    const routesGroup = routesGroupRef.current
    if (!map || !layersGroup || !routesGroup) return

    layersGroup.clearLayers()
    routesGroup.clearLayers()

    // 1. PRESENT-DAY HINDU PRESENCE
    if (activeLayer === 'present') {
      filteredCountries.forEach((country) => {
        const [lng, lat] = country.coordinates
        const isSelected = activeCountryCard?.id === country.id
        const markerSize = country.id === 'in' || country.id === 'np' ? 22 : 14

        const customIcon = L.divIcon({
          className: 'custom-present-marker',
          html: `
            <div style="position: relative; width: ${markerSize}px; height: ${markerSize}px; cursor: pointer;">
              <div style="position: absolute; inset: -4px; border-radius: 9999px; background: radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, rgba(245, 158, 11, 0) 70%); animation: map-pulse 2.8s infinite;"></div>
              <div style="width: 100%; height: 100%; border-radius: 9999px; background: ${isSelected ? '#ffffff' : 'linear-gradient(135deg, #fef08a 0%, #d97706 70%, #78350f 100%)'}; border: 2px solid #fffbeb; box-shadow: 0 0 14px rgba(245, 158, 11, 0.7); display: flex; align-items: center; justify-content: center;">
                <div style="width: 4px; height: 4px; border-radius: 9999px; background: ${isSelected ? '#d97706' : '#ffffff'};"></div>
              </div>
            </div>
          `,
          iconSize: [markerSize, markerSize],
          iconAnchor: [markerSize / 2, markerSize / 2]
        })

        const marker = L.marker([lat, lng], { icon: customIcon })
        marker.bindTooltip(`<strong>${country.name}</strong> • ${country.estimatedPopulation}`, { direction: 'top', className: 'aum-map-tooltip' })

        marker.on('click', () => {
          setActiveCountryCard(country)
          setActiveHistoricalCard(null)
          setActiveRouteCard(null)
          setActiveDirectoryCard(null)
          map.flyTo([lat, lng], Math.max(map.getZoom(), 4.5), { duration: 1 })
        })

        marker.addTo(layersGroup)
      })
    }

    // 2. HISTORICAL HINDU KINGDOMS
    if (activeLayer === 'historical') {
      const historicalPins = [
        { id: 'angkor-khmer', name: 'Angkor & Khmer Empire', lat: 13.41, lng: 103.86, period: '802 – 1431 CE', classification: 'Hindu-Buddhist' },
        { id: 'champa', name: 'Champa Sanctuaries (Mỹ Sơn)', lat: 15.79, lng: 108.12, period: 'c. 192 – 1832 CE', classification: 'Hindu' },
        { id: 'majapahit-mataram', name: 'Majapahit & Prambanan', lat: -7.75, lng: 110.49, period: '732 – 1527 CE', classification: 'Hindu-Buddhist' },
        { id: 'kabul-shahi', name: 'Kabul & Hindu Shahi', lat: 34.55, lng: 69.17, period: 'c. 850 – 1026 CE', classification: 'Hindu' }
      ]

      historicalPins.forEach((hPin) => {
        const fullRegion = HISTORICAL_REGIONS_EVIDENCE.find((r) => r.id === hPin.id)

        const histIcon = L.divIcon({
          className: 'custom-historical-marker',
          html: `
            <div style="position: relative; width: 32px; height: 32px; cursor: pointer;">
              <div style="position: absolute; inset: -4px; border-radius: 10px; background: rgba(234, 88, 12, 0.4); filter: blur(2px);"></div>
              <div style="width: 100%; height: 100%; border-radius: 10px; background: linear-gradient(135deg, #78350f 0%, #b45309 60%, #f59e0b 100%); border: 2px solid #fed7aa; box-shadow: 0 0 14px rgba(249, 115, 22, 0.6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px;">
                🏛️
              </div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        })

        const marker = L.marker([hPin.lat, hPin.lng], { icon: histIcon })
        marker.bindTooltip(`<strong>${hPin.name}</strong> (${hPin.period})`, { direction: 'top' })

        marker.on('click', () => {
          if (fullRegion) {
            setActiveHistoricalCard(fullRegion)
            setActiveCountryCard(null)
            setActiveRouteCard(null)
            setActiveDirectoryCard(null)
            map.flyTo([hPin.lat, hPin.lng], 5.5, { duration: 1 })
          }
        })

        marker.addTo(layersGroup)
      })
    }

    // 3. HINDU CULTURAL INFLUENCE
    if (activeLayer === 'cultural') {
      const influencePins = [
        { id: 'central-asia-silk-road', name: 'Khotan, Sogdia & Dunhuang', lat: 37.11, lng: 79.92, period: '1st – 8th c. CE', classification: 'Hindu cultural influence', desc: 'Silk Road transmission of Sanskrit manuscripts, Ayurveda, Ganesha, Shiva, and Saraswati iconography.' },
        { id: 'gaya-korea-tradition', name: 'Gaya & Ayodhya Chronicle Tradition', lat: 35.24, lng: 128.88, period: '48 CE / Chronicle 1281 CE', classification: 'Traditional or legendary connection', desc: 'Recorded tradition in Samguk Yusa connecting Queen Heo Hwang-ok with Ayuta. Maintained as living cultural bond.' },
        { id: 'japan-nara', name: 'Nara & Sanskrit Buddhist-Hindu Transmission', lat: 34.68, lng: 135.83, period: '752 CE – Present', classification: 'Hindu cultural influence', desc: 'Consecration of Todaiji Great Buddha by Indian monk Bodhisena; reverence of Benzaiten (Saraswati), Daikokuten (Mahakala), and Kangiten (Ganesha).' }
      ]

      influencePins.forEach((pin) => {
        const fullRegion = HISTORICAL_REGIONS_EVIDENCE.find((r) => r.id === pin.id)

        const cultIcon = L.divIcon({
          className: 'custom-cultural-marker',
          html: `
            <div style="position: relative; width: 30px; height: 30px; cursor: pointer;">
              <div style="width: 100%; height: 100%; border-radius: 9999px; background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #38bdf8 100%); border: 2px solid #bae6fd; box-shadow: 0 0 14px rgba(56, 189, 248, 0.6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px;">
                ✨
              </div>
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        })

        const marker = L.marker([pin.lat, pin.lng], { icon: cultIcon })
        marker.bindTooltip(`<strong>${pin.name}</strong> • ${pin.classification}`, { direction: 'top' })

        marker.on('click', () => {
          if (fullRegion) {
            setActiveHistoricalCard(fullRegion)
          } else {
            setActiveHistoricalCard({
              id: pin.id,
              regionName: pin.name,
              period: pin.period,
              classification: pin.classification as any,
              modernCountries: [pin.name],
              description: pin.desc,
              significance: pin.desc,
              notableDynasties: ['Cultural Transmission'],
              keySitesAndInscriptions: ['Iconographic Murals', 'Temple Chronicles'],
              sources: [{ title: 'Scholarly Documentation', authorOrBody: 'AUM Archive', yearOrPeriod: 'Living Heritage', evidenceType: 'Textual Tradition', confidence: 'Scholarly research' }]
            })
          }
          setActiveCountryCard(null)
          setActiveRouteCard(null)
          setActiveDirectoryCard(null)
          map.flyTo([pin.lat, pin.lng], 5.5, { duration: 1 })
        })

        marker.addTo(layersGroup)
      })
    }

    // 4. MIGRATION & DIASPORA
    if (activeLayer === 'migration') {
      GEO_MIGRATION_ROUTES.forEach((route) => {
        let routeColor = '#38bdf8'
        let dashStyle = '8, 8'
        let lineWeight = 3.5

        if (route.id === 'chola-maritime-expedition') {
          routeColor = '#10b981' // emerald for Chola Imperial Navy
          dashStyle = '12, 6'
          lineWeight = 4
        } else if (route.id.includes('silk')) {
          routeColor = '#c084fc' // violet for Silk Road
          dashStyle = '4, 8'
          lineWeight = 3
        } else if (route.eraId === 'colonial-indenture') {
          routeColor = '#f59e0b' // gold/amber for Girmitiya
          dashStyle = '8, 6'
          lineWeight = 3.5
        } else if (route.eraId === 'modern-global') {
          routeColor = '#38bdf8' // sky blue for modern aviation
          dashStyle = '3, 6'
          lineWeight = 2.5
        }

        const isHighlighted = highlightedRouteId === route.id || activeRouteCard?.id === route.id

        const polyline = L.polyline(route.waypoints, {
          color: isHighlighted ? '#ffffff' : routeColor,
          weight: isHighlighted ? lineWeight + 2 : lineWeight,
          opacity: isHighlighted ? 1 : 0.85,
          dashArray: dashStyle,
          className: 'route-flow-line'
        })

        polyline.bindTooltip(`<strong>${route.title}</strong> (${route.timePeriod})`, { direction: 'center' })

        polyline.on('click', () => {
          setActiveRouteCard(route)
          setActiveCountryCard(null)
          setActiveHistoricalCard(null)
          setActiveDirectoryCard(null)
        })

        polyline.addTo(routesGroup)

        // Nodes for Origin and Destination
        const originPoint = route.waypoints[0]
        const destPoint = route.waypoints[route.waypoints.length - 1]

        L.circleMarker(originPoint, {
          radius: 5,
          fillColor: '#ffffff',
          fillOpacity: 1,
          color: routeColor,
          weight: 2
        }).bindTooltip(`Origin: ${route.origin}`, { direction: 'top' }).addTo(layersGroup)

        L.circleMarker(destPoint, {
          radius: 6,
          fillColor: routeColor,
          fillOpacity: 1,
          color: '#ffffff',
          weight: 2
        }).bindTooltip(`Destination: ${route.destination}`, { direction: 'top' }).addTo(layersGroup)
      })
    }

    // 5. TEMPLES & COMMUNITIES
    if (activeLayer === 'directory') {
      filteredDirectory.forEach((item) => {
        if (!item.coordinates) return
        const [lng, lat] = item.coordinates
        const isTemple = item.category === 'Temple'
        const color = isTemple ? '#fbbf24' : item.category === 'Seva Organization' ? '#34d399' : '#38bdf8'

        const dirIcon = L.divIcon({
          className: 'custom-directory-marker',
          html: `
            <div style="width: 26px; height: 26px; border-radius: 9999px; background: rgba(10, 8, 22, 0.95); border: 2px solid ${color}; box-shadow: 0 0 10px ${color}66; display: flex; align-items: center; justify-content: center; font-size: 12px; cursor: pointer;">
              ${isTemple ? '🛕' : item.category === 'Seva Organization' ? '🤝' : '📖'}
            </div>
          `,
          iconSize: [26, 26],
          iconAnchor: [13, 13]
        })

        const marker = L.marker([lat, lng], { icon: dirIcon })
        marker.bindTooltip(`<strong>${item.name}</strong> • ${item.city}, ${item.country}`, { direction: 'top' })

        marker.on('click', () => {
          setActiveDirectoryCard(item)
          setActiveCountryCard(null)
          setActiveHistoricalCard(null)
          setActiveRouteCard(null)
          map.flyTo([lat, lng], 6, { duration: 1 })
        })

        marker.addTo(layersGroup)
      })
    }
  }, [activeLayer, filteredCountries, filteredHistorical, filteredDirectory, activeCountryCard, activeRouteCard, highlightedRouteId])

  // Select Search Item
  const handleSelectSearchResult = (result: (typeof searchResults)[0]) => {
    const map = mapInstanceRef.current
    if (!map) return

    setIsSearchOpen(false)
    setSearchQuery('')

    if (result.type === 'country') {
      const c = result.data as CountryHinduProfile
      setActiveLayer('present')
      setActiveCountryCard(c)
      map.flyTo([c.coordinates[1], c.coordinates[0]], 5, { duration: 1.5 })
    } else if (result.type === 'historical') {
      const h = result.data as HistoricalRegionData
      setActiveLayer('historical')
      setActiveHistoricalCard(h)
      if (h.id === 'angkor-khmer') map.flyTo([13.41, 103.86], 6, { duration: 1.5 })
      else if (h.id === 'champa') map.flyTo([15.79, 108.12], 6, { duration: 1.5 })
      else if (h.id === 'majapahit-mataram') map.flyTo([-7.75, 110.49], 6, { duration: 1.5 })
      else if (h.id === 'kabul-shahi') map.flyTo([34.55, 69.17], 6, { duration: 1.5 })
      else map.flyTo([20, 80], 4, { duration: 1.5 })
    } else if (result.type === 'route') {
      const r = result.data as GeoMigrationRoute
      setActiveLayer('migration')
      setActiveRouteCard(r)
      const mid = r.waypoints[Math.floor(r.waypoints.length / 2)]
      map.flyTo(mid, 4, { duration: 1.5 })
    } else if (result.type === 'community') {
      const item = result.data as CommunityDirectoryItem
      setActiveLayer('directory')
      setActiveDirectoryCard(item)
      if (item.coordinates) {
        map.flyTo([item.coordinates[1], item.coordinates[0]], 7, { duration: 1.5 })
      }
    }
  }

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([20, 20], 2.5, { duration: 1.2 })
      setActiveCountryCard(null)
      setActiveHistoricalCard(null)
      setActiveRouteCard(null)
      setActiveDirectoryCard(null)
      if (onRegionChange) onRegionChange('All Regions')
    }
  }

  return (
    <div
      id="vishva-sanatana-world-map"
      className={`relative w-full rounded-3xl border border-gold-500/30 bg-[#04060e] shadow-2xl transition-all duration-300 overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : ''
      }`}
    >
      {/* 1. TOP CONTROL BAR: Map Layers Switcher */}
      <div className="p-4 sm:p-5 border-b border-gold-500/20 bg-black/75 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center text-black shadow-lg">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg sm:text-xl font-bold tracking-wide text-gold-100">
                Interactive Global Sanātana Atlas
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-semibold bg-gold-500/15 text-gold-300 border border-gold-500/30">
                Geographic Engine
              </span>
            </div>
            <p className="text-xs font-body text-gold-200/70">
              Explore 5 Interactive Cartographic Layers
            </p>
          </div>
        </div>

        {/* 5 Map Layer Buttons */}
        <div className="flex items-center p-1 rounded-2xl bg-black/60 border border-gold-500/25 overflow-x-auto max-w-full no-scrollbar">
          <button
            type="button"
            onClick={() => {
              setActiveLayer('present')
              setActiveRouteCard(null)
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-display font-medium transition whitespace-nowrap ${
              activeLayer === 'present'
                ? 'bg-gradient-to-r from-gold-500/30 to-amber-500/30 text-gold-200 border border-gold-400/40 shadow-sm'
                : 'text-stone-400 hover:text-gold-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Present-Day Presence</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveLayer('historical')
              setActiveRouteCard(null)
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-display font-medium transition whitespace-nowrap ${
              activeLayer === 'historical'
                ? 'bg-gradient-to-r from-amber-600/30 to-orange-600/30 text-amber-200 border border-amber-400/40 shadow-sm'
                : 'text-stone-400 hover:text-gold-200'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Historical Kingdoms</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveLayer('cultural')
              setActiveRouteCard(null)
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-display font-medium transition whitespace-nowrap ${
              activeLayer === 'cultural'
                ? 'bg-gradient-to-r from-sky-600/30 to-cyan-600/30 text-sky-200 border border-sky-400/40 shadow-sm'
                : 'text-stone-400 hover:text-gold-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cultural Influence</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveLayer('migration')
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-display font-medium transition whitespace-nowrap ${
              activeLayer === 'migration'
                ? 'bg-gradient-to-r from-teal-600/30 to-emerald-600/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                : 'text-stone-400 hover:text-gold-200'
            }`}
          >
            <Route className="w-3.5 h-3.5" />
            <span>Migration & Diaspora</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveLayer('directory')
              setActiveRouteCard(null)
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-display font-medium transition whitespace-nowrap ${
              activeLayer === 'directory'
                ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 border border-purple-400/40 shadow-sm'
                : 'text-stone-400 hover:text-gold-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Temples & Communities</span>
          </button>
        </div>
      </div>

      {/* 2. SUB-BAR: Search & Quick Actions */}
      <div className="px-4 py-2.5 bg-black/50 border-b border-gold-500/15 flex flex-wrap items-center justify-between gap-3 text-xs font-body">
        {/* Search Input with Autocomplete */}
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-3.5 h-3.5 text-gold-400/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setIsSearchOpen(true)
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Search country, city, temple, or historical kingdom..."
              className="w-full pl-9 pr-8 py-1.5 bg-black/70 border border-gold-500/25 rounded-xl text-gold-100 placeholder:text-stone-500 focus:outline-none focus:border-gold-400 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-stone-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 max-h-80 overflow-y-auto rounded-2xl bg-[#0a0816] border border-gold-500/40 shadow-2xl z-50 p-1.5 space-y-1">
              {searchResults.map((item, idx) => (
                <button
                  key={`${item.type}-${idx}`}
                  type="button"
                  onClick={() => handleSelectSearchResult(item)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-gold-500/15 flex items-center justify-between gap-3 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-black/50 text-gold-400 border border-gold-500/20">
                      {item.type === 'country' ? <Globe className="w-3.5 h-3.5" /> : item.type === 'historical' ? <Landmark className="w-3.5 h-3.5" /> : item.type === 'route' ? <Route className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                    </span>
                    <div>
                      <div className="font-display text-sm font-semibold text-gold-100">{item.title}</div>
                      <div className="text-[11px] text-stone-400">{item.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gold-500/60" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons: Reset & Fullscreen */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={handleResetView}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 border border-gold-500/25 text-gold-300 hover:text-white hover:border-gold-400 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset View</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-xl bg-black/60 border border-gold-500/25 text-gold-300 hover:text-white hover:border-gold-400 transition"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 3. MAIN MAP STAGE & DOCKED DETAIL PANELS */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={mapContainerRef}
          className={`w-full transition-all duration-300 ${
            isFullscreen ? 'h-[calc(100vh-140px)]' : 'h-[520px] sm:h-[620px] lg:h-[680px]'
          }`}
          style={{ background: '#04060e' }}
        />

        {/* Loading Spinner */}
        {mapLoading && !mapError && (
          <div className="absolute inset-0 z-[350] bg-[#04060e]/85 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300">
            <div className="w-9 h-9 rounded-full border-2 border-gold-500/25 border-t-gold-400 animate-spin mb-3" />
            <div className="font-display text-xs tracking-wider text-gold-200">
              Loading Geographic Map Tiles...
            </div>
            <div className="text-[11px] text-stone-400 mt-1 font-body">
              Verified OpenStreetMap Cartography
            </div>
          </div>
        )}

        {/* Fallback Message */}
        {mapError && (
          <div className="absolute inset-0 z-[360] bg-[#04060e]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-gold-100 mb-1">
              Geographic Map Tiles Temporarily Unavailable
            </h3>
            <p className="text-xs text-stone-400 max-w-md mb-4 font-body leading-relaxed">
              External map tiles couldn't be loaded. All demographic data, historical kingdoms, and routes remain accessible.
            </p>
            <button
              type="button"
              onClick={() => {
                setMapError(false)
                setMapLoading(true)
                if (mapInstanceRef.current) mapInstanceRef.current.invalidateSize()
              }}
              className="px-4 py-2 rounded-xl bg-gold-500/20 border border-gold-400/40 text-gold-200 hover:bg-gold-500/30 text-xs font-display font-medium transition"
            >
              Retry Atlas Connection
            </button>
          </div>
        )}

        {/* Custom Zoom Controls (Top Right) */}
        <div className="absolute top-4 right-4 z-[400] flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => mapInstanceRef.current?.zoomIn()}
            className="w-8 h-8 rounded-lg bg-black/85 border border-gold-500/35 text-gold-300 hover:text-white hover:bg-gold-500/20 flex items-center justify-center transition shadow-lg backdrop-blur-md"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => mapInstanceRef.current?.zoomOut()}
            className="w-8 h-8 rounded-lg bg-black/85 border border-gold-500/35 text-gold-300 hover:text-white hover:bg-gold-500/20 flex items-center justify-center transition shadow-lg backdrop-blur-md"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* ======================================================================
            INTERACTIVE SIDE PANEL / BOTTOM SHEET FOR CLICKED COUNTRY
            Shows short overview first, with option to "Read Full History"
            ====================================================================== */}
        {activeCountryCard && (
          <div className="absolute top-4 right-4 bottom-4 w-full sm:w-96 max-w-[calc(100%-32px)] z-[450] bg-[#0a0c16]/95 border border-gold-500/40 rounded-2xl shadow-2xl backdrop-blur-xl p-5 overflow-y-auto flex flex-col justify-between animate-fadeIn">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-gold-500/20">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                      {activeCountryCard.region}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-gold-500/15 border border-gold-500/30 text-gold-200">
                      {activeCountryCard.dataConfidence}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gold-100 mt-1">
                    {activeCountryCard.name}
                  </h3>
                  <div className="text-xs text-stone-400 font-body">
                    {activeCountryCard.sanskritName}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCountryCard(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Demographic Metrics */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="p-3 rounded-xl bg-black/60 border border-gold-500/20">
                  <div className="text-[10px] text-stone-400 uppercase tracking-wide">Hindu Population</div>
                  <div className="text-base font-bold text-white font-display mt-0.5">
                    {activeCountryCard.estimatedPopulation}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-gold-500/20">
                  <div className="text-[10px] text-stone-400 uppercase tracking-wide">Population Share</div>
                  <div className="text-base font-bold text-gold-400 font-display mt-0.5">
                    {activeCountryCard.percentageOfPopulation}
                  </div>
                </div>
              </div>

              {/* Short Historical Overview */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-gold-400" /> Historical Presence
                </h4>
                <p className="mt-1.5 text-xs text-stone-300 font-body leading-relaxed line-clamp-4">
                  {activeCountryCard.historicalPresenceSummary}
                </p>
              </div>

              {/* Migration History */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-gold-400" /> Migration & Heritage
                </h4>
                <p className="mt-1.5 text-xs text-stone-300 font-body leading-relaxed line-clamp-3">
                  {activeCountryCard.migrationHistorySummary}
                </p>
              </div>

              {/* Key Temples */}
              {activeCountryCard.keyTemples && activeCountryCard.keyTemples.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider">
                    Key Sacred Sites & Temples
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {activeCountryCard.keyTemples.slice(0, 4).map((temple, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-lg bg-black/50 border border-gold-500/20 text-[11px] text-stone-300"
                      >
                        {temple}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sovereign Data Source */}
              <div className="mt-4 p-2.5 rounded-xl bg-black/40 border border-white/10 text-[10px] text-stone-400 flex items-center justify-between">
                <div>
                  <span className="text-stone-300 font-medium">{activeCountryCard.dataSource.title}</span>
                  <div>Year: {activeCountryCard.dataYear}</div>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Action Button: Read Full History & Dossier */}
            <div className="mt-5 pt-3 border-t border-gold-500/20">
              <button
                type="button"
                onClick={() => onSelectCountry(activeCountryCard)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 text-black font-display text-xs font-bold hover:brightness-110 transition flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Read Full Country Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* SIDE PANEL FOR CLICKED HISTORICAL KINGDOM */}
        {activeHistoricalCard && (
          <div className="absolute top-4 right-4 bottom-4 w-full sm:w-96 max-w-[calc(100%-32px)] z-[450] bg-[#0a0c16]/95 border border-amber-500/40 rounded-2xl shadow-2xl backdrop-blur-xl p-5 overflow-y-auto flex flex-col justify-between animate-fadeIn">
            <div>
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-amber-500/20">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-200 border border-amber-500/30">
                    {activeHistoricalCard.classification}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-amber-100 mt-1.5">
                    {activeHistoricalCard.regionName}
                  </h3>
                  <div className="text-xs text-stone-400 font-body">
                    Period: {activeHistoricalCard.period}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveHistoricalCard(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-4 text-xs font-body text-stone-300 leading-relaxed">
                {activeHistoricalCard.description}
              </p>

              {activeHistoricalCard.modernCountries && (
                <div className="mt-4">
                  <div className="text-[10px] uppercase font-bold text-amber-400">Modern Territories</div>
                  <div className="text-xs text-stone-300 mt-1">
                    {activeHistoricalCard.modernCountries.join(', ')}
                  </div>
                </div>
              )}

              {activeHistoricalCard.notableDynasties && (
                <div className="mt-3">
                  <div className="text-[10px] uppercase font-bold text-amber-400">Notable Dynasties</div>
                  <div className="text-xs text-stone-300 mt-1">
                    {activeHistoricalCard.notableDynasties.join(', ')}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-amber-500/20">
              <button
                type="button"
                onClick={() => onSelectHistoricalRegion(activeHistoricalCard)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-display text-xs font-bold hover:brightness-110 transition flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Explore Epigraphic Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* SIDE PANEL FOR CLICKED MIGRATION ROUTE */}
        {activeRouteCard && (
          <div className="absolute top-4 right-4 bottom-4 w-full sm:w-96 max-w-[calc(100%-32px)] z-[450] bg-[#0a0c16]/95 border border-sky-500/40 rounded-2xl shadow-2xl backdrop-blur-xl p-5 overflow-y-auto flex flex-col justify-between animate-fadeIn">
            <div>
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-sky-500/20">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    {activeRouteCard.eraTitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {activeRouteCard.title}
                  </h3>
                  <div className="text-xs text-stone-400">{activeRouteCard.timePeriod}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveRouteCard(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {activeRouteCard.vesselOrType && (
                <div className="mt-3 p-2.5 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs text-sky-200 flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{activeRouteCard.vesselOrType}</span>
                </div>
              )}

              <div className="mt-4 space-y-3 text-xs font-body text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Origin → Destination</span>
                  <span className="text-white font-medium">{activeRouteCard.origin} → {activeRouteCard.destination}</span>
                </div>

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Historical Context</span>
                  <p className="mt-1 text-stone-300">{activeRouteCard.significance}</p>
                </div>

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Key Ports & Waypoints</span>
                  <p className="mt-1 text-stone-300">{activeRouteCard.keyPortsOrStops.join(' • ')}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sky-500/20 flex items-center justify-between text-[11px] text-stone-400">
              <span>{activeRouteCard.sourcesSummary}</span>
              <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px]">
                {activeRouteCard.evidenceConfidence}
              </span>
            </div>
          </div>
        )}

        {/* SIDE PANEL FOR CLICKED COMMUNITY DIRECTORY ITEM */}
        {activeDirectoryCard && (
          <div className="absolute top-4 right-4 bottom-4 w-full sm:w-96 max-w-[calc(100%-32px)] z-[450] bg-[#0a0c16]/95 border border-purple-500/40 rounded-2xl shadow-2xl backdrop-blur-xl p-5 overflow-y-auto flex flex-col justify-between animate-fadeIn">
            <div>
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-purple-500/20">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    {activeDirectoryCard.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {activeDirectoryCard.name}
                  </h3>
                  <div className="text-xs text-stone-400">
                    {activeDirectoryCard.city}, {activeDirectoryCard.country}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveDirectoryCard(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs font-body text-stone-300">
                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Tradition / Focus</span>
                  <span className="text-purple-200 font-semibold">{activeDirectoryCard.traditionOrFocus}</span>
                </div>

                <div>
                  <span className="text-stone-400 font-bold block text-[10px] uppercase">Overview</span>
                  <p className="mt-1 text-stone-300 leading-relaxed">{activeDirectoryCard.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-[11px]">
              <span className="text-stone-400">
                {activeDirectoryCard.foundedYear ? `Est. ${activeDirectoryCard.foundedYear}` : 'Verified Heritage Sanctuary'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                {activeDirectoryCard.verifiedStatus}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 4. FOOTER LEGEND */}
      <div className="p-3 sm:p-4 bg-black/70 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-body text-stone-400">
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-gold-500 shadow-sm" />
            <span className="text-stone-300">Demographic Centers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-orange-500 shadow-sm" />
            <span className="text-stone-300">Historical Dynasties</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-emerald-400 border-dashed" />
            <span className="text-stone-300">Chola & Maritime Routes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-amber-400 border-dashed" />
            <span className="text-stone-300">Girmitiya Indenture (1834–1920)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-stone-500">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
          <span>Click any marker or route to view details without losing your place</span>
        </div>
      </div>
    </div>
  )
}
