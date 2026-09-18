import { useState, useRef } from 'react'
import {
  COUNTRIES_HINDU_DATA,
  HISTORICAL_REGIONS_EVIDENCE,
  type CountryHinduProfile,
  type HistoricalRegionData
} from '../../data/vishvaData'
import {
  Globe,
  MapPin,
  Landmark,
  Sparkles,
  Filter,
  Info,
  ShieldCheck,
  Users,
  Percent,
  Compass,
  ArrowUpRight,
  BookOpen
} from 'lucide-react'

interface VishvaMapProps {
  onSelectCountry: (country: CountryHinduProfile) => void
  onSelectHistoricalRegion: (region: HistoricalRegionData) => void
}

type MapMode = 'present' | 'historical'
type RegionFilter =
  | 'All'
  | 'South Asia'
  | 'Southeast Asia'
  | 'Middle East'
  | 'Africa'
  | 'Europe'
  | 'Americas'
  | 'Oceania'

// Mercator-like projection utility mapping [lng, lat] to SVG coordinate box [0..960, 0..500]
function projectToSvg(lng: number, lat: number): [number, number] {
  // Normalize longitude from [-180..180] to [0..960]
  const x = ((lng + 180) / 360) * 960

  // Constrain latitude to [-70..75]
  const clampedLat = Math.max(-70, Math.min(75, lat))
  // Mercator formula approximation
  const latRad = (clampedLat * Math.PI) / 180
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2))
  const y = 250 - (mercN / Math.PI) * 200

  return [x, y]
}

interface GeoRegionHover {
  name: string
  regionKey: RegionFilter
  estimate: string
  shareDesc: string
  keyCommunities: string
  x: number
  y: number
}

export default function VishvaMap({ onSelectCountry, onSelectHistoricalRegion }: VishvaMapProps) {
  const [mode, setMode] = useState<MapMode>('present')
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('All')
  const [hoveredCountry, setHoveredCountry] = useState<CountryHinduProfile | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<HistoricalRegionData | null>(null)
  const [hoveredGeoRegion, setHoveredGeoRegion] = useState<GeoRegionHover | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const filteredCountries = COUNTRIES_HINDU_DATA.filter((c) => {
    if (regionFilter === 'All') return true
    return c.region === regionFilter
  })

  // Historical key anchors
  const historicalPins = [
    { id: 'angkor-khmer', name: 'Angkor (Khmer Empire)', lng: 103.86, lat: 13.41, type: 'Hindu-Buddhist' },
    { id: 'champa', name: 'Champa (Mỹ Sơn)', lng: 108.12, lat: 15.79, type: 'Hindu' },
    { id: 'majapahit-mataram', name: 'Majapahit & Prambanan', lng: 110.49, lat: -7.75, type: 'Hindu-Buddhist' },
    { id: 'kabul-shahi', name: 'Kabul & Hindu Shahi', lng: 69.17, lat: 34.55, type: 'Hindu' },
    { id: 'central-asia-silk-road', name: 'Khotan & Sogdiana', lng: 79.92, lat: 37.11, type: 'Hindu cultural influence' }
  ]

  const handleCountryHover = (c: CountryHinduProfile) => {
    const [cx, cy] = projectToSvg(c.coordinates[0], c.coordinates[1])
    setTooltipPos({ x: cx, y: cy })
    setHoveredCountry(c)
    setHoveredRegion(null)
    setHoveredGeoRegion(null)
  }

  const handleHistoricalHover = (r: HistoricalRegionData, lng: number, lat: number) => {
    const [cx, cy] = projectToSvg(lng, lat)
    setTooltipPos({ x: cx, y: cy })
    setHoveredRegion(r)
    setHoveredCountry(null)
    setHoveredGeoRegion(null)
  }

  const handleGeoRegionHover = (geo: GeoRegionHover) => {
    setTooltipPos({ x: geo.x, y: geo.y })
    setHoveredGeoRegion(geo)
    setHoveredCountry(null)
    setHoveredRegion(null)
  }

  const clearHover = () => {
    setHoveredCountry(null)
    setHoveredRegion(null)
    setHoveredGeoRegion(null)
    setTooltipPos(null)
  }

  return (
    <div className="rounded-3xl border border-gold-500/25 bg-gradient-to-b from-[#070b14] via-[#04060c] to-black p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Background ambient nebula glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Map Control Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-gold-500/20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-gold-400" />
            Interactive Global Map
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-gold-100">
            {mode === 'present' ? 'Global Hindu Presence Today' : 'Historical Sanātana Spheres & Kingdoms'}
          </h3>
          <p className="mt-1 font-body text-xs sm:text-sm text-gold-200/70">
            {mode === 'present'
              ? 'Hover over any country or geographic region to reveal population estimates, demographics, and temples. Click to open the sovereign profile.'
              : 'Explore classical kingdoms, Sanskrit epigraphs, sacred sites, and cultural networks across Asia and the Indian Ocean.'}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-full border border-gold-500/30 bg-black/60 p-1">
            <button
              type="button"
              onClick={() => {
                setMode('present')
                clearHover()
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-semibold transition ${
                mode === 'present'
                  ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-black shadow-md'
                  : 'text-gold-200 hover:text-white'
              }`}
            >
              Present Presence
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('historical')
                clearHover()
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-semibold transition ${
                mode === 'historical'
                  ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-black shadow-md'
                  : 'text-gold-200 hover:text-white'
              }`}
            >
              Historical Spheres
            </button>
          </div>
        </div>
      </div>

      {/* Region Filter Bar (for Present Mode) */}
      {mode === 'present' && (
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs">
          <span className="text-gold-400 font-display flex items-center gap-1 shrink-0">
            <Filter className="w-3 h-3" /> Region:
          </span>
          {(
            [
              'All',
              'South Asia',
              'Southeast Asia',
              'Middle East',
              'Africa',
              'Europe',
              'Americas',
              'Oceania'
            ] as RegionFilter[]
          ).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRegionFilter(r)
                clearHover()
              }}
              className={`px-3 py-1 rounded-full whitespace-nowrap border transition ${
                regionFilter === r
                  ? 'border-gold-400 bg-gold-500/20 text-gold-100 font-semibold shadow-[0_0_10px_rgba(232,197,107,0.2)]'
                  : 'border-gold-500/15 bg-black/40 text-gold-300/70 hover:border-gold-400/40 hover:text-gold-100'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      )}

      {/* Interactive Map Canvas Container */}
      <div
        ref={mapContainerRef}
        className="relative w-full aspect-[1.92/1] rounded-2xl border border-gold-500/20 bg-[#020409] overflow-hidden my-4 shadow-inner"
      >
        {/* SVG World Map outlines with coordinate grid */}
        <svg
          viewBox="0 0 960 500"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Radial glow for active pins */}
            <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f3e3b3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d8a94a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="activeHoverAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#d8a94a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d8a94a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="tradeWind" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8a94a" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f3e3b3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d8a94a" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Latitude and Longitude Grid Lines */}
          {[100, 200, 300, 400].map((y) => (
            <line
              key={`lat-${y}`}
              x1="0"
              y1={y}
              x2="960"
              y2={y}
              stroke="#d8a94a"
              strokeWidth="0.3"
              strokeOpacity="0.15"
              strokeDasharray="2 4"
            />
          ))}
          {[160, 320, 480, 640, 800].map((x) => (
            <line
              key={`lng-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="500"
              stroke="#d8a94a"
              strokeWidth="0.3"
              strokeOpacity="0.15"
              strokeDasharray="2 4"
            />
          ))}

          {/* Equator & Prime Meridian markers */}
          <line x1="0" y1="250" x2="960" y2="250" stroke="#d8a94a" strokeWidth="0.6" strokeOpacity="0.25" />
          <text x="10" y="246" fill="#d8a94a" fillOpacity="0.4" fontSize="8" fontFamily="monospace">
            EQUATOR 0°
          </text>

          {/* CONTINENTAL REGIONAL PATHS WITH INTERACTIVE HOVER STATES */}
          {/* North America */}
          <path
            d="M 120 70 L 160 60 L 260 70 L 240 130 L 200 160 L 180 200 L 220 220 L 190 270 L 160 250 L 140 180 L 90 120 Z"
            fill={hoveredGeoRegion?.regionKey === 'Americas' ? '#14203e' : '#091022'}
            stroke={hoveredGeoRegion?.regionKey === 'Americas' ? '#e8c56b' : '#d8a94a'}
            strokeWidth={hoveredGeoRegion?.regionKey === 'Americas' ? '1.2' : '0.6'}
            strokeOpacity={hoveredGeoRegion?.regionKey === 'Americas' ? '0.8' : '0.35'}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'North America',
                regionKey: 'Americas',
                estimate: '4.5+ Million Hindus',
                shareDesc:
                  'A rapidly flourishing diaspora across high technology, healthcare, and university chairs, home to monumentally carved traditional stone mandirs.',
                keyCommunities: 'United States, Canada',
                x: 180,
                y: 160
              })
            }
            onClick={() => setRegionFilter('Americas')}
          />

          {/* South America & Caribbean */}
          <path
            d="M 230 280 L 290 280 L 320 330 L 280 430 L 240 450 L 230 360 Z"
            fill={hoveredGeoRegion?.regionKey === 'Americas' ? '#14203e' : '#091022'}
            stroke={hoveredGeoRegion?.regionKey === 'Americas' ? '#e8c56b' : '#d8a94a'}
            strokeWidth={hoveredGeoRegion?.regionKey === 'Americas' ? '1.2' : '0.6'}
            strokeOpacity={hoveredGeoRegion?.regionKey === 'Americas' ? '0.8' : '0.35'}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'Caribbean & South America (Girmit Heritage)',
                regionKey: 'Americas',
                estimate: '550,000+ Hindus',
                shareDesc:
                  'Exceptional cultural endurance across 185 years of Girmitiya history; Ramcharitmanas recitations, Phagwah, and historic seaside shrines.',
                keyCommunities: 'Guyana, Trinidad & Tobago, Suriname',
                x: 270,
                y: 340
              })
            }
            onClick={() => setRegionFilter('Americas')}
          />

          {/* Europe */}
          <path
            d="M 440 90 L 520 80 L 540 140 L 480 160 L 430 140 Z"
            fill={hoveredGeoRegion?.regionKey === 'Europe' ? '#14203e' : '#091022'}
            stroke={hoveredGeoRegion?.regionKey === 'Europe' ? '#e8c56b' : '#d8a94a'}
            strokeWidth={hoveredGeoRegion?.regionKey === 'Europe' ? '1.2' : '0.6'}
            strokeOpacity={hoveredGeoRegion?.regionKey === 'Europe' ? '0.8' : '0.35'}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'Europe & British Isles',
                regionKey: 'Europe',
                estimate: '1.8+ Million Hindus',
                shareDesc:
                  'Influential academic and cultural presence; monumental stone sanctuaries such as Neasden Mandir, alongside national parliamentary Diwali celebrations.',
                keyCommunities: 'United Kingdom, Netherlands, Germany, France, Switzerland',
                x: 480,
                y: 120
              })
            }
            onClick={() => setRegionFilter('Europe')}
          />

          {/* Africa & Indian Ocean */}
          <path
            d="M 440 180 L 530 180 L 550 250 L 520 370 L 460 360 L 420 250 Z"
            fill={hoveredGeoRegion?.regionKey === 'Africa' ? '#14203e' : '#091022'}
            stroke={hoveredGeoRegion?.regionKey === 'Africa' ? '#e8c56b' : '#d8a94a'}
            strokeWidth={hoveredGeoRegion?.regionKey === 'Africa' ? '1.2' : '0.6'}
            strokeOpacity={hoveredGeoRegion?.regionKey === 'Africa' ? '0.8' : '0.35'}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'Africa & Indian Ocean Islands',
                regionKey: 'Africa',
                estimate: '1.4+ Million Hindus',
                shareDesc:
                  'Mauritius has a sovereign 48.5% Hindu plurality with sacred Ganga Talao; South Africa preserves profound Satyagraha and Durban temple roots.',
                keyCommunities: 'Mauritius, South Africa, Kenya, Uganda, Tanzania, Réunion',
                x: 490,
                y: 270
              })
            }
            onClick={() => setRegionFilter('Africa')}
          />

          {/* Asia & Eurasia */}
          <path
            d="M 530 80 L 780 70 L 850 140 L 780 200 L 710 280 L 650 250 L 610 200 L 540 170 Z"
            fill="#091022"
            stroke="#d8a94a"
            strokeWidth="0.6"
            strokeOpacity="0.35"
          />

          {/* Indian Subcontinent (Bhāratavarṣa) - Radiant Focal Region */}
          <path
            d="M 640 190 L 690 190 L 680 270 L 655 285 L 635 240 Z"
            fill={hoveredGeoRegion?.regionKey === 'South Asia' ? '#1a294e' : '#121b33'}
            stroke="#e8c56b"
            strokeWidth={hoveredGeoRegion?.regionKey === 'South Asia' ? '1.8' : '1.2'}
            strokeOpacity="0.9"
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'South Asian Subcontinent (Bhāratavarṣa)',
                regionKey: 'South Asia',
                estimate: '1.14+ Billion Hindus',
                shareDesc:
                  'The sacred civilizational cradle of Sanātana Dharma; home to 94% of the global Hindu community, four Dhams, and classical Vedic traditions.',
                keyCommunities: 'India, Nepal, Sri Lanka, Bangladesh, Pakistan',
                x: 660,
                y: 240
              })
            }
            onClick={() => setRegionFilter('South Asia')}
          />

          {/* Southeast Asia archipelagos (Nusantara / Suvarṇabhūmi) */}
          <path
            d="M 720 250 L 760 250 L 790 310 L 740 330 L 710 280 Z"
            fill={hoveredGeoRegion?.regionKey === 'Southeast Asia' ? '#162446' : '#091022'}
            stroke={hoveredGeoRegion?.regionKey === 'Southeast Asia' ? '#e8c56b' : '#d8a94a'}
            strokeWidth={hoveredGeoRegion?.regionKey === 'Southeast Asia' ? '1.2' : '0.6'}
            strokeOpacity={hoveredGeoRegion?.regionKey === 'Southeast Asia' ? '0.8' : '0.35'}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'Southeast Asia (Nusantara & Suvarṇabhūmi)',
                regionKey: 'Southeast Asia',
                estimate: '11.5+ Million Hindus',
                shareDesc:
                  'Vibrant living heritage in Bali (Agama Hindu Dharma), Tengger highlands, alongside major diaspora hubs in Malaysia and Singapore.',
                keyCommunities: 'Indonesia, Malaysia, Singapore, Myanmar, Thailand',
                x: 750,
                y: 290
              })
            }
            onClick={() => setRegionFilter('Southeast Asia')}
          />

          {/* Australia & Oceania */}
          <path
            d="M 770 340 L 860 330 L 880 400 L 810 430 L 760 390 Z"
            fill={hoveredGeoRegion?.regionKey === 'Oceania' ? '#14203e' : '#091022'}
            stroke={hoveredGeoRegion?.regionKey === 'Oceania' ? '#e8c56b' : '#d8a94a'}
            strokeWidth={hoveredGeoRegion?.regionKey === 'Oceania' ? '1.2' : '0.6'}
            strokeOpacity={hoveredGeoRegion?.regionKey === 'Oceania' ? '0.8' : '0.35'}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() =>
              handleGeoRegionHover({
                name: 'Oceania & South Pacific',
                regionKey: 'Oceania',
                estimate: '1.1+ Million Hindus',
                shareDesc:
                  'Historic Fiji Girmitiya sanctuary (27.9% of nation) and modern skilled communities across Sydney, Melbourne, and Auckland.',
                keyCommunities: 'Fiji, Australia, New Zealand',
                x: 820,
                y: 380
              })
            }
            onClick={() => setRegionFilter('Oceania')}
          />

          {/* Historical Trade & Migration Maritime Routes */}
          {mode === 'historical' && (
            <g className="animate-pulse">
              {/* Bay of Bengal & Southeast Asia Maritime Silk Route */}
              <path
                d="M 660 250 Q 700 270 740 260 T 780 280"
                fill="none"
                stroke="url(#tradeWind)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Arabian Sea to Persian Gulf & Africa */}
              <path
                d="M 640 230 Q 570 220 540 210"
                fill="none"
                stroke="url(#tradeWind)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <path
                d="M 640 250 Q 590 300 530 350"
                fill="none"
                stroke="url(#tradeWind)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            </g>
          )}

          {/* PRESENT MODE COUNTRY PINS WITH EXPANDED HOVER STATES */}
          {mode === 'present' &&
            filteredCountries.map((c) => {
              const [cx, cy] = projectToSvg(c.coordinates[0], c.coordinates[1])
              const isHovered = hoveredCountry?.id === c.id

              return (
                <g
                  key={c.id}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => onSelectCountry(c)}
                  onMouseEnter={() => handleCountryHover(c)}
                >
                  {/* Outer animated halo on hover */}
                  {isHovered ? (
                    <>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={20}
                        fill="url(#activeHoverAura)"
                        className="animate-pulse pointer-events-none"
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r={12}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                        className="animate-spin pointer-events-none"
                        style={{ animationDuration: '8s' }}
                      />
                    </>
                  ) : (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={7}
                      fill="url(#pinGlow)"
                      className="transition-all duration-300 opacity-80"
                    />
                  )}

                  {/* Core solid marker */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isHovered ? 5.5 : 3.2}
                    fill={isHovered ? '#fff1cc' : '#e8c56b'}
                    stroke={isHovered ? '#f59e0b' : '#020409'}
                    strokeWidth={isHovered ? '2' : '1'}
                    className="transition-all duration-200 shadow-lg"
                  />

                  {/* Label */}
                  <text
                    x={cx}
                    y={cy - (isHovered ? 11 : 8)}
                    textAnchor="middle"
                    fill={isHovered ? '#ffffff' : '#f5e6c4'}
                    fontSize={isHovered ? '10' : '7.5'}
                    fontWeight={isHovered ? 'bold' : 'normal'}
                    fontFamily="serif"
                    className="pointer-events-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] transition-all duration-200"
                  >
                    {c.name}
                  </text>
                </g>
              )
            })}

          {/* HISTORICAL MODE PINS WITH EXPANDED HOVER STATES */}
          {mode === 'historical' &&
            historicalPins.map((hp) => {
              const [cx, cy] = projectToSvg(hp.lng, hp.lat)
              const regionData = HISTORICAL_REGIONS_EVIDENCE.find((r) => r.id === hp.id)
              const isHovered = hoveredRegion?.id === hp.id

              return (
                <g
                  key={hp.id}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => regionData && onSelectHistoricalRegion(regionData)}
                  onMouseEnter={() => regionData && handleHistoricalHover(regionData, hp.lng, hp.lat)}
                >
                  {isHovered ? (
                    <>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={22}
                        fill="url(#activeHoverAura)"
                        className="animate-pulse pointer-events-none"
                      />
                      <polygon
                        points={`${cx},${cy - 8} ${cx + 7},${cy + 5} ${cx - 7},${cy + 5}`}
                        fill="#fef08a"
                        stroke="#b45309"
                        strokeWidth="1.8"
                      />
                    </>
                  ) : (
                    <>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={9}
                        fill="url(#pinGlow)"
                        className="transition-all duration-300"
                      />
                      <polygon
                        points={`${cx},${cy - 6} ${cx + 5},${cy + 4} ${cx - 5},${cy + 4}`}
                        fill="#f59e0b"
                        stroke="#020409"
                        strokeWidth="1"
                      />
                    </>
                  )}

                  <text
                    x={cx}
                    y={cy - (isHovered ? 13 : 10)}
                    textAnchor="middle"
                    fill={isHovered ? '#ffffff' : '#fcd34d'}
                    fontSize={isHovered ? '10.5' : '8'}
                    fontWeight="bold"
                    fontFamily="serif"
                    className="pointer-events-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
                  >
                    {hp.name}
                  </text>
                </g>
              )
            })}
        </svg>

        {/* DYNAMIC FLOATING TOOLTIP POSITIONED RELATIVE TO HOVERED COORDINATES */}
        {tooltipPos && (hoveredCountry || hoveredRegion || hoveredGeoRegion) && (
          <div
            className="absolute z-30 pointer-events-none transition-all duration-150 ease-out"
            style={{
              left: `${(tooltipPos.x / 960) * 100}%`,
              top: `${(tooltipPos.y / 500) * 100}%`,
              transform:
                tooltipPos.y < 160
                  ? tooltipPos.x > 680
                    ? 'translate(-88%, 14px)'
                    : tooltipPos.x < 280
                    ? 'translate(-12%, 14px)'
                    : 'translate(-50%, 14px)'
                  : tooltipPos.x > 680
                  ? 'translate(-88%, -108%)'
                  : tooltipPos.x < 280
                  ? 'translate(-12%, -108%)'
                  : 'translate(-50%, -108%)'
            }}
          >
            {/* TOOLTIP FOR HOVERED COUNTRY (PRESENT MODE) */}
            {hoveredCountry && mode === 'present' && (
              <div className="w-72 sm:w-80 p-4 rounded-2xl bg-gradient-to-b from-[#0e162d] via-[#080d1a] to-black border border-gold-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.95)] text-gold-100 backdrop-blur-md relative animate-in fade-in zoom-in-95">
                {/* Pointer Arrow */}
                <div
                  className={`absolute w-3 h-3 rotate-45 bg-[#080d1a] border-gold-400/60 ${
                    tooltipPos.y < 160
                      ? '-top-1.5 border-t border-l'
                      : '-bottom-1.5 border-b border-r'
                  }`}
                  style={{
                    left:
                      tooltipPos.x > 680
                        ? '88%'
                        : tooltipPos.x < 280
                        ? '12%'
                        : '50%',
                    transform: 'translateX(-50%) rotate(45deg)'
                  }}
                />

                {/* Header */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-gold-500/20">
                  <div className="flex items-center gap-1.5">
                    <span className="font-deva text-gold-400 text-xs font-semibold">
                      {hoveredCountry.sanskritName}
                    </span>
                    <span className="text-[10px] text-gold-300/60 font-display">
                      ({hoveredCountry.region})
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[9.5px] font-display font-semibold">
                    {hoveredCountry.dataConfidence}
                  </span>
                </div>

                {/* Country Name */}
                <h4 className="font-display font-bold text-lg text-gold-100 mt-2">
                  {hoveredCountry.name}
                </h4>

                {/* Population Estimates & Demographics */}
                <div className="mt-2.5 p-2.5 rounded-xl bg-black/60 border border-gold-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gold-400 font-display font-semibold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Estimated Population:
                    </span>
                    <span className="text-gold-100 font-bold text-sm">
                      {hoveredCountry.estimatedPopulation}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gold-400 font-display font-semibold flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" /> Demographic Share:
                    </span>
                    <span className="text-amber-300 font-semibold">
                      {hoveredCountry.percentageOfPopulation}
                    </span>
                  </div>

                  {/* Visual Density Bar */}
                  <div className="w-full h-1.5 rounded-full bg-gold-950/40 overflow-hidden mt-1">
                    <div
                      className="h-full bg-gradient-to-r from-gold-400 to-amber-500 rounded-full"
                      style={{
                        width: hoveredCountry.percentageOfPopulation.includes('%')
                          ? `${Math.max(
                              8,
                              Math.min(
                                100,
                                parseFloat(
                                  hoveredCountry.percentageOfPopulation.replace('%', '')
                                ) * 1.5
                              )
                            )}%`
                          : '15%'
                      }}
                    />
                  </div>
                </div>

                {/* Source & Temples preview */}
                <div className="mt-2.5 text-[11px] font-body text-gold-200/80 space-y-1">
                  <p className="line-clamp-1">
                    <span className="text-gold-400 font-semibold">Source:</span>{' '}
                    {hoveredCountry.dataSource.authorOrBody} ({hoveredCountry.dataYear})
                  </p>
                  {hoveredCountry.keyTemples[0] && (
                    <p className="line-clamp-1 text-gold-300/70">
                      <span className="text-gold-400 font-semibold">Key Temple:</span>{' '}
                      {hoveredCountry.keyTemples[0]}
                    </p>
                  )}
                </div>

                <div className="mt-2.5 pt-2 border-t border-gold-500/15 flex items-center justify-between text-[10.5px] font-display text-gold-400">
                  <span>Click marker to inspect full profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-300" />
                </div>
              </div>
            )}

            {/* TOOLTIP FOR HOVERED REGIONAL LANDMASS */}
            {hoveredGeoRegion && !hoveredCountry && !hoveredRegion && (
              <div className="w-72 sm:w-80 p-4 rounded-2xl bg-gradient-to-b from-[#111933] via-[#090e1c] to-black border border-gold-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.95)] text-gold-100 backdrop-blur-md relative animate-in fade-in zoom-in-95">
                <div
                  className={`absolute w-3 h-3 rotate-45 bg-[#090e1c] border-gold-400/60 ${
                    tooltipPos.y < 160
                      ? '-top-1.5 border-t border-l'
                      : '-bottom-1.5 border-b border-r'
                  }`}
                  style={{
                    left:
                      tooltipPos.x > 680
                        ? '88%'
                        : tooltipPos.x < 280
                        ? '12%'
                        : '50%',
                    transform: 'translateX(-50%) rotate(45deg)'
                  }}
                />

                <div className="flex items-center justify-between gap-2 pb-2 border-b border-gold-500/20">
                  <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-display font-semibold">
                    Geographic Civilizational Zone
                  </span>
                  <span className="text-[10px] text-amber-300 font-display">
                    Interactive Region
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-gold-100 mt-2">
                  {hoveredGeoRegion.name}
                </h4>

                <div className="mt-2 p-2 rounded-xl bg-black/60 border border-gold-500/20">
                  <div className="text-xs text-gold-300 font-display">
                    Total Regional Estimate:
                  </div>
                  <div className="text-sm font-bold text-gold-100 mt-0.5">
                    {hoveredGeoRegion.estimate}
                  </div>
                </div>

                <p className="mt-2 text-xs font-body text-gold-200/80 leading-relaxed">
                  {hoveredGeoRegion.shareDesc}
                </p>

                <div className="mt-2 text-[11px] font-body text-gold-300/70 line-clamp-1">
                  <strong className="text-gold-400 font-display">Key Hubs:</strong>{' '}
                  {hoveredGeoRegion.keyCommunities}
                </div>

                <div className="mt-2.5 pt-2 border-t border-gold-500/15 flex items-center justify-between text-[10.5px] font-display text-gold-400">
                  <span>Click continent to filter markers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-300" />
                </div>
              </div>
            )}

            {/* TOOLTIP FOR HOVERED HISTORICAL REGION */}
            {hoveredRegion && mode === 'historical' && (
              <div className="w-72 sm:w-80 p-4 rounded-2xl bg-gradient-to-b from-[#1c1308] via-[#0d0905] to-black border border-amber-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.95)] text-gold-100 backdrop-blur-md relative animate-in fade-in zoom-in-95">
                <div
                  className={`absolute w-3 h-3 rotate-45 bg-[#0d0905] border-amber-500/60 ${
                    tooltipPos.y < 160
                      ? '-top-1.5 border-t border-l'
                      : '-bottom-1.5 border-b border-r'
                  }`}
                  style={{
                    left:
                      tooltipPos.x > 680
                        ? '88%'
                        : tooltipPos.x < 280
                        ? '12%'
                        : '50%',
                    transform: 'translateX(-50%) rotate(45deg)'
                  }}
                />

                <div className="flex items-center justify-between gap-2 pb-2 border-b border-amber-500/20">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-display font-semibold">
                    {hoveredRegion.classification}
                  </span>
                  <span className="text-gold-400 text-[10.5px] font-body">
                    {hoveredRegion.period}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-gold-100 mt-2">
                  {hoveredRegion.regionName}
                </h4>

                <p className="mt-2 text-xs font-body text-gold-200/80 line-clamp-3 leading-relaxed">
                  {hoveredRegion.description}
                </p>

                <div className="mt-2.5 pt-2 border-t border-amber-500/20 flex items-center justify-between text-[10.5px] font-display text-amber-300">
                  <span>Click to view epigraphs & sources</span>
                  <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Map Legend & Evidence Bar */}
      <div className="mt-4 pt-4 border-t border-gold-500/15 flex flex-wrap items-center justify-between gap-3 text-xs font-body text-gold-300/70">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 shadow-[0_0_8px_#e8c56b]" />
            <span>Active Hindu Community</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rotate-45 bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>Historical Sanātana / Sanskrit Sphere</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Verified Sovereign & Academic Sources</span>
          </div>
        </div>

        <div className="text-[11px] text-gold-400/80 font-display">
          Showing {filteredCountries.length} documented sovereign countries & territories
        </div>
      </div>
    </div>
  )
}
