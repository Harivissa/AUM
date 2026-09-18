import { useMemo } from 'react'
import vedicImg from '../assets/images/vedic_manuscript_1789619549504.jpg'
import tirthaImg from '../assets/images/sacred_temple_1789619561869.jpg'
import smritiImg from '../assets/images/civilization_memory_1789619576878.jpg'
import dharmaImg from '../assets/images/dharma_wheel_1789619590191.jpg'
import festivalImg from '../assets/images/festival_diya_1789619603081.jpg'
import verifyImg from '../assets/images/verify_shield_1789619614450.jpg'
import youngSeekerImg from '../assets/images/young_seeker_1789619627160.jpg'

interface PortalItem {
  id: string
  sa: string
  en: string
  href: string
  img: string
  angleDeg: number
}

// 7 Knowledge portals arranged in order matching the reference design:
// 1. Śāstra (Top, -90°)
// 2. Tīrtha (Top-Right, -38.5°)
// 3. Smṛti (Bottom-Right, +13°)
// 4. Dharma (Bottom, +64°)
// 5. Festivals (Bottom-Left, +116°)
// 6. AUM Verify (Mid-Left, +167°)
// 7. Young Seekers (Top-Left, +218.5°)
const PORTAL_ITEMS: PortalItem[] = [
  { id: 'shastra', sa: 'शास्त्रम्', en: 'Śāstra', href: '#shastra', img: vedicImg, angleDeg: -90 },
  { id: 'tirtha', sa: 'तीर्थम्', en: 'Tīrtha', href: '#tirtha', img: tirthaImg, angleDeg: -38.57 },
  { id: 'smriti', sa: 'स्मृतिः', en: 'Smṛti', href: '#smriti', img: smritiImg, angleDeg: 12.85 },
  { id: 'dharma', sa: 'धर्मः', en: 'Dharma', href: '#dharma', img: dharmaImg, angleDeg: 64.28 },
  { id: 'festivals', sa: 'उत्सवाः', en: 'Festivals', href: '#festivals', img: festivalImg, angleDeg: 115.71 },
  { id: 'verify', sa: 'प्रमाणम्', en: 'AUM Verify', href: '#verify', img: verifyImg, angleDeg: 167.14 },
  { id: 'young-seekers', sa: 'बाल साधक', en: 'Young Seekers', href: '#young-seekers', img: youngSeekerImg, angleDeg: 218.57 },
]

interface CentralMandalaPortalProps {
  reducedMotion?: boolean
  onNavigate: (href: string) => void
}

export default function CentralMandalaPortal({ reducedMotion = false, onNavigate }: CentralMandalaPortalProps) {
  const nodes = useMemo(() => {
    // Radius in percentage from center (50%, 50%)
    const radius = 39.5
    return PORTAL_ITEMS.map((item) => {
      const rad = (item.angleDeg * Math.PI) / 180
      const x = 50 + Math.cos(rad) * radius
      const y = 50 + Math.sin(rad) * radius
      return {
        ...item,
        x,
        y,
        rad,
      }
    })
  }, [])

  return (
    <div className="relative w-full max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background celestial orbit rings and connector spokes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer orbit circle */}
        <circle
          cx="50"
          cy="50"
          r="39.5"
          stroke="#d8a94a"
          strokeWidth="0.35"
          strokeOpacity="0.45"
          strokeDasharray="1.5 1.5"
          className={reducedMotion ? '' : 'animate-[spin_90s_linear_infinite] origin-center'}
        />

        {/* Secondary concentric rings */}
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="#d8a94a"
          strokeWidth="0.25"
          strokeOpacity="0.25"
        />
        <circle
          cx="50"
          cy="50"
          r="21"
          stroke="#d8a94a"
          strokeWidth="0.2"
          strokeOpacity="0.3"
          strokeDasharray="0.8 1.2"
          className={reducedMotion ? '' : 'animate-[spin_60s_linear_infinite_reverse] origin-center'}
        />
        <circle
          cx="50"
          cy="50"
          r="13.5"
          stroke="#e8c56b"
          strokeWidth="0.35"
          strokeOpacity="0.65"
        />

        {/* Connector spokes from center to each portal */}
        {nodes.map((n) => {
          const innerX = 50 + Math.cos(n.rad) * 14.5
          const innerY = 50 + Math.sin(n.rad) * 14.5
          return (
            <line
              key={`spoke-${n.id}`}
              x1={innerX}
              y1={innerY}
              x2={n.x}
              y2={n.y}
              stroke="#e8c56b"
              strokeWidth="0.25"
              strokeOpacity="0.3"
              strokeDasharray="1 1.2"
            />
          )
        })}
      </svg>

      {/* =========================================================================
          CENTRAL ॐ:
          - Stays exactly centered
          - Remains 100% static
          - Never rotates
          - Never tilts
          - Never moves
          - Never flips
          - Never distorts
          - Never covered
          - Strictly NO orange glowing ball behind it
          ========================================================================= */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
        {/* Pure antique golden Devanagari ॐ with gentle golden aura, absolutely static */}
        <div className="font-deva text-6xl sm:text-7xl md:text-8xl text-gold-300 drop-shadow-[0_0_20px_rgba(232,197,107,0.65)] select-none leading-none">
          ॐ
        </div>
        <span className="font-display text-[8px] sm:text-[9px] tracking-[0.28em] text-gold-400/80 uppercase font-semibold mt-0.5">
          SANĀTANA
        </span>
      </div>

      {/* =========================================================================
          SURROUNDING 7 KNOWLEDGE PORTALS:
          Only surrounding portals and orbit lines may animate (hover, pulse).
          ========================================================================= */}
      {nodes.map((node) => (
        <button
          key={node.id}
          type="button"
          onClick={() => onNavigate(node.href)}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group flex flex-col items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          title={`Explore ${node.en} (${node.sa})`}
        >
          {/* Portal Circular Node */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full p-[2px] bg-gradient-to-tr from-gold-500 via-amber-300 to-gold-400 shadow-[0_0_16px_rgba(232,197,107,0.35)] group-hover:shadow-[0_0_24px_rgba(232,197,107,0.7)] group-hover:scale-110 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/90 relative">
              <img
                src={node.img}
                alt={node.en}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:opacity-20 transition-opacity" />
            </div>
          </div>

          {/* Sanskrit & English Labels */}
          <div className="mt-1 flex flex-col items-center">
            <span className="font-deva text-[9px] sm:text-[10px] text-gold-400/90 leading-none">
              {node.sa}
            </span>
            <span className="mt-0.5 px-2 py-0.5 rounded-full bg-black/85 border border-gold-500/30 text-[9px] sm:text-[10px] font-display font-semibold text-gold-100 whitespace-nowrap shadow-md group-hover:border-gold-400 group-hover:text-white transition-colors">
              {node.en}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
