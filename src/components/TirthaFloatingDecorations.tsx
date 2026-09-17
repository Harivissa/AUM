import React from 'react'

/**
 * TirthaFloatingDecorations
 * Culturally authentic Sanātana Dharma background symbols that float slowly,
 * creating an atmospheric, sacred aura on the Tīrtha (Sacred Geography) chamber.
 * 
 * Includes strictly traditional icons:
 * - ॐ (Om)
 * - श्री (Śrī)
 * - स्वस्तिक (Svastika with 4 sacred bindus)
 * - त्रिशूल (Trishūla)
 * - कमल (Kamala / Sacred Lotus)
 * - दीप (Dīpa / Sacred Diya)
 * - धर्मचक्र (Dharmachakra)
 * - शंख (Śaṅkha / Conch)
 * - चक्र (Sudarśana Cakra)
 * - नंदी silhouette (Sacred Nandi)
 * - मंदिर gopuram silhouette (Temple Gopuram / Shikhara)
 * - Sacred Yantra-inspired geometric patterns (Śrī Yantra)
 */

export default function TirthaFloatingDecorations() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 tirtha-decorations-container"
    >
      <style>{`
        @keyframes tirthaFloatA {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -12px, 0) rotate(1deg);
          }
        }
        @keyframes tirthaFloatB {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, 10px, 0) rotate(-1deg);
          }
        }
        @keyframes tirthaFloatC {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -8px, 0) scale(1.02);
          }
        }

        .tirtha-symbol {
          color: #e8c56b;
          filter: drop-shadow(0 0 14px rgba(232, 197, 107, 0.22));
          transition: opacity 0.5s ease;
        }

        /* High-contrast warm antique bronze in Light Theme */
        html[data-aum-theme="light"] .tirtha-symbol {
          color: #8a6522 !important;
          filter: drop-shadow(0 0 10px rgba(138, 101, 34, 0.16)) !important;
        }
      `}</style>

      {/* =========================================================================
          TOP REGION (Flanking the header & title, safely in outer peripheral space)
          ========================================================================= */}

      {/* 1. मंदिर Gopuram Silhouette (Upper Right - replaces the old abstract torus knot) */}
      <div
        className="absolute top-24 sm:top-28 right-[3%] sm:right-[5%] lg:right-[6%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 opacity-30 sm:opacity-40 tirtha-symbol"
        style={{ animation: 'tirthaFloatA 14s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Kalaśa Pinnacle */}
          <path d="M32 5v5 M30 10h4 M32 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          {/* Shikhara Dome */}
          <path d="M27 15c2-3 8-3 10 0l2 3H25l2-3z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Tier 2 */}
          <path d="M23 23l2-5h14l2 5H23z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Tier 3 */}
          <path d="M20 32l3-9h18l3 9H20z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Tier 4 */}
          <path d="M17 42l3-10h24l3 10H17z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Temple Base / Adhiṣṭhāna with Sanctum Arch */}
          <path d="M14 55l3-13h30l3 13H14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M28 55v-8c0-2 2-3 4-3s4 1 4 3v8" stroke="currentColor" strokeWidth="1.6" />
          <line x1="11" y1="55" x2="53" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. त्रिशूल (Trishūla) (Upper Left Flank) */}
      <div
        className="absolute top-24 sm:top-28 left-[3%] sm:left-[5%] lg:left-[6%] w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 opacity-30 sm:opacity-40 tirtha-symbol"
        style={{ animation: 'tirthaFloatB 12s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Center spear blade */}
          <path d="M32 7l3.5 11v18h-7V18l3.5-11z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Left prong */}
          <path d="M28.5 36c-8 0-14-6-14-14 0-4 1.5-8 3.5-11 0 5 3 11 9 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Right prong */}
          <path d="M35.5 36c8 0 14-6 14-14 0-4-1.5-8-3.5-11 0 5-3 11-9 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Damaru / neck collar */}
          <path d="M22 36h20 M24 39h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Central lower shaft */}
          <path d="M32 39v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="59" r="1.6" fill="currentColor" />
        </svg>
      </div>

      {/* 3. ॐ (Sacred Om) (Upper Left Sub-Flank) */}
      <div
        className="hidden sm:block absolute top-[18%] left-[2%] lg:left-[4%] w-10 h-10 lg:w-14 lg:h-14 opacity-25 lg:opacity-35 tirtha-symbol"
        style={{ animation: 'tirthaFloatC 16s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <text x="32" y="48" textAnchor="middle" className="font-deva text-[42px] select-none" fill="currentColor" opacity="0.85">ॐ</text>
        </svg>
      </div>

      {/* 4. धर्मचक्र (Dharmachakra) (Upper Right Sub-Flank) */}
      <div
        className="hidden sm:block absolute top-[20%] right-[2%] lg:right-[4%] w-11 h-11 lg:w-16 lg:h-16 opacity-25 lg:opacity-35 tirtha-symbol"
        style={{ animation: 'tirthaFloatB 18s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Outer rim */}
          <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          {/* Hub */}
          <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" />
          <circle cx="32" cy="32" r="2.2" fill="currentColor" />
          {/* 8 spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180
            return (
              <React.Fragment key={angle}>
                <line
                  x1="32"
                  y1="32"
                  x2={32 + 20 * Math.cos(rad)}
                  y2={32 + 20 * Math.sin(rad)}
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx={32 + 23 * Math.cos(rad)}
                  cy={32 + 23 * Math.sin(rad)}
                  r="1.4"
                  fill="currentColor"
                />
              </React.Fragment>
            )
          })}
        </svg>
      </div>

      {/* =========================================================================
          MID REGION (Flanking the Architecture Filter & Temple list, well clear of text)
          ========================================================================= */}

      {/* 5. कमल (Sacred Lotus) (Mid Left Flank) */}
      <div
        className="absolute top-[34%] left-[2%] sm:left-[3.5%] lg:left-[4.5%] w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 opacity-30 sm:opacity-40 tirtha-symbol"
        style={{ animation: 'tirthaFloatA 15s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Center petal */}
          <path d="M32 14c-4 8-5 18 0 26 5-8 4-18 0-26z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Inner petals */}
          <path d="M32 40c-9-2-15-10-13-20 6 3 11 11 13 20z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M32 40c9-2 15-10 13-20-6 3-11 11-13 20z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Outer petals */}
          <path d="M26 40c-11 0-18-6-16-14 8 0 14 7 16 14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M38 40c11 0 18-6 16-14-8 0-14 7-16 14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Calyx base */}
          <path d="M18 43c7 4 21 4 28 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 47c4 2 12 2 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 6. श्री (Śrī Auspicious Glyph) (Mid Right Flank) */}
      <div
        className="absolute top-[36%] right-[2%] sm:right-[3.5%] lg:right-[4.5%] w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 opacity-30 sm:opacity-40 tirtha-symbol"
        style={{ animation: 'tirthaFloatC 13s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <text x="32" y="47" textAnchor="middle" className="font-deva text-[40px] select-none" fill="currentColor" opacity="0.88">श्री</text>
        </svg>
      </div>

      {/* 7. स्वस्तिक (Svastika with 4 sacred bindus) (Lower Mid Left) */}
      <div
        className="hidden sm:block absolute top-[48%] left-[2%] sm:left-[3%] lg:left-[4%] w-10 h-10 lg:w-14 lg:h-14 opacity-25 lg:opacity-35 tirtha-symbol"
        style={{ animation: 'tirthaFloatB 17s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Central cross with clockwise arms */}
          <path
            d="M32 14v36 M14 32h36 M32 14h14 M50 32v14 M32 50H18 M14 32V18"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 4 sacred bindus in the four quadrants */}
          <circle cx="23" cy="23" r="2.2" fill="currentColor" />
          <circle cx="41" cy="23" r="2.2" fill="currentColor" />
          <circle cx="41" cy="41" r="2.2" fill="currentColor" />
          <circle cx="23" cy="41" r="2.2" fill="currentColor" />
        </svg>
      </div>

      {/* 8. शंख (Śaṅkha / Sacred Conch) (Lower Mid Right) */}
      <div
        className="absolute top-[50%] right-[2%] sm:right-[3%] lg:right-[4%] w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-30 sm:opacity-38 tirtha-symbol"
        style={{ animation: 'tirthaFloatA 15s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Conch shell silhouette & spirals */}
          <path
            d="M30 10c4-3 10-1 12 3 2 4 1 8-2 11 5 2 9 7 9 13 0 9-7 18-17 19-8 1-15-5-16-12 0-7 5-13 11-15l-1-9c0-5 3-9 7-10z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Spiral ridges */}
          <path d="M34 11c3 4 1 9-2 12-4 3-7 8-7 14 0 6 5 11 11 11 6 0 10-6 10-12 0-5-3-9-7-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 20c2 2 4 4 4 7 0 4-3 7-6 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="34" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* =========================================================================
          LOWER REGION (Beside detailed temple display & deep dive view)
          ========================================================================= */}

      {/* 9. दीप (Dīpa / Sacred Oil Diya) (Left Flank) */}
      <div
        className="absolute top-[64%] left-[2%] sm:left-[3.5%] lg:left-[4.5%] w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 opacity-30 sm:opacity-40 tirtha-symbol"
        style={{ animation: 'tirthaFloatC 12s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Flame teardrop */}
          <path d="M32 12c3 5 6 9 6 14 0 5-3 8-6 8s-6-3-6-8c0-5 3-9 6-14z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Flame core */}
          <path d="M32 20c1.5 2.5 2.5 5 2.5 7 0 2-1 3.5-2.5 3.5s-2.5-1.5-2.5-3.5c0-2 1-4.5 2.5-7z" fill="currentColor" fillOpacity="0.5" />
          {/* Diya bowl */}
          <path d="M14 36c2 10 10 14 18 14s16-4 18-14H14z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <ellipse cx="32" cy="36" rx="18" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
          {/* Base */}
          <path d="M27 50h10v3H27z M24 53h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 10. चक्र (Sudarśana Cakra) (Right Flank) */}
      <div
        className="absolute top-[66%] right-[2%] sm:right-[3.5%] lg:right-[4.5%] w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 opacity-25 sm:opacity-35 tirtha-symbol"
        style={{ animation: 'tirthaFloatB 16s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <circle cx="32" cy="32" r="19" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="32" cy="32" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="2" fill="currentColor" />
          {/* 12 serrated flame blades */}
          {[...Array(12)].map((_, i) => {
            const a = (i * 30 * Math.PI) / 180
            const aNext = ((i * 30 + 15) * Math.PI) / 180
            const x1 = 32 + 19 * Math.cos(a)
            const y1 = 32 + 19 * Math.sin(a)
            const x2 = 32 + 24 * Math.cos(aNext)
            const y2 = 32 + 24 * Math.sin(aNext)
            const aEnd = ((i * 30 + 30) * Math.PI) / 180
            const x3 = 32 + 19 * Math.cos(aEnd)
            const y3 = 32 + 19 * Math.sin(aEnd)
            return (
              <path
                key={i}
                d={`M${x1} ${y1} L${x2} ${y2} L${x3} ${y3}`}
                stroke="currentColor"
                strokeWidth="1.4"
                fill="currentColor"
                fillOpacity="0.1"
                strokeLinejoin="round"
              />
            )
          })}
        </svg>
      </div>

      {/* 11. नंदी Silhouette (Nandi) (Lower Left Flank) */}
      <div
        className="hidden sm:block absolute top-[80%] left-[2%] sm:left-[3%] lg:left-[4%] w-12 h-12 lg:w-16 lg:h-16 opacity-30 lg:opacity-40 tirtha-symbol"
        style={{ animation: 'tirthaFloatA 18s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Seated peaceful sacred Nandi base */}
          <path
            d="M14 48c0-3 3-5 7-5h22c5 0 9 2 11 5H14z"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          {/* Nandi Body */}
          <path
            d="M18 43c-2-3-3-8-2-12 1-4 4-7 8-8 3-4 7-6 12-5 3 1 5 3 6 6l5-1c3 0 5 2 6 5 1 2 0 5-2 7l-2 3c-1 3-3 5-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hump (Kakud) */}
          <path d="M26 31c-1-5 2-9 6-10 4-1 8 2 9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          {/* Head & Horns */}
          <path d="M43 27c2-1 4-3 5-6 1-2 3-5 5-5-1 3-2 6-2 8 2 0 4 1 4 3-1 2-3 3-5 3h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M48 23c-1-4 0-7 2-10 1 3 1 6 0 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Bell garland */}
          <path d="M41 33c1 3 3 5 5 6" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" />
          <circle cx="46" cy="40" r="1.5" fill="currentColor" />
          {/* Tail */}
          <path d="M16 43c-3 1-5 3-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 12. Sacred Yantra Geometric Pattern (Śrī Yantra motif) (Lower Right Flank) */}
      <div
        className="absolute top-[82%] right-[2%] sm:right-[3%] lg:right-[4%] w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 opacity-25 sm:opacity-35 tirtha-symbol"
        style={{ animation: 'tirthaFloatC 15s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Bhupura (Square enclosure with stepped gates) */}
          <path
            d="M10 18h8v-8h28v8h8v28h-8v8H18v-8h-8z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Concentric rings */}
          <circle cx="32" cy="32" r="17" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          {/* Interlocking triangles */}
          <polygon points="32,18 45,40 19,40" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.08" />
          <polygon points="32,46 45,24 19,24" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.08" />
          <polygon points="32,21 42,37 22,37" stroke="currentColor" strokeWidth="1" />
          <polygon points="32,43 42,27 22,27" stroke="currentColor" strokeWidth="1" />
          {/* Central Bindu */}
          <circle cx="32" cy="32" r="1.8" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
