import { useState, useEffect, useRef, useMemo } from 'react'

// 10 Cinematic Moments imagery matching the storyboard
import m1Img from '../assets/images/ancient_civilization_1789922376812.jpg'
import m2Img from '../assets/images/kali_yuga_begins_1789923858751.jpg'
import m3Img from '../assets/images/temples_grow_quiet_1789923877401.jpg'
import m4Img from '../assets/images/adharma_asura_rises_1789922398193.jpg'
import m5Img from '../assets/images/devas_seek_help_1789922411188.jpg'
import m6Img from '../assets/images/trimurti_confronts_asura_1789922426911.jpg'
import m7BrahmaImg from '../assets/images/brahma_invokes_brahmastra_1789922443208.jpg'
import m7VishnuImg from '../assets/images/vishnu_invokes_sudarsana_1789922457417.jpg'
import m7MahesaImg from '../assets/images/mahesa_invokes_pasupata_1789922471471.jpg'
import m8Img from '../assets/images/three_divine_forces_1789922488246.jpg'
import m9Img from '../assets/images/adharma_defeated_dharma_rises_1789925528945.jpg'
import m10AwakeningImg from '../assets/images/flame_continues_child_1789923893840.jpg'
import m10ClimaxImg from '../assets/images/aum_cosmic_convergence_1789925548007.jpg'

export interface CinematicEntryProps {
  onComplete: () => void
  onNavigate?: (href: string) => void
}

interface Moment {
  id: number
  title: string
  subtitle: string
  image: string
  duration: number
}

// Moments 1 through 6, 8, 9
const STATIC_MOMENTS: Record<number, Moment> = {
  1: {
    id: 1,
    title: 'A TIMELESS SANĀTANA CIVILIZATION',
    subtitle: 'KNOWLEDGE • DHARMA • HARMONY',
    image: m1Img,
    duration: 2000,
  },
  2: {
    id: 2,
    title: 'KALI YUGA BEGINS',
    subtitle: 'DISTRACTION • DOUBT • DISTANCE',
    image: m2Img,
    duration: 2000,
  },
  3: {
    id: 3,
    title: 'FORGETTING • DRIFTING',
    subtitle: 'TEMPLES GROW QUIET • LIGHT STILL WAITS',
    image: m3Img,
    duration: 2000,
  },
  4: {
    id: 4,
    title: 'ADHARMA RISES',
    subtitle: 'DARKNESS SPREADS ACROSS MINDS',
    image: m4Img,
    duration: 2000,
  },
  5: {
    id: 5,
    title: 'THE DEVAS WITNESS',
    subtitle: 'AND SEEK A SOLUTION',
    image: m5Img,
    duration: 2000,
  },
  6: {
    id: 6,
    title: 'THE TRIMŪRTI APPEAR',
    subtitle: 'A FINAL WARNING TO ADHARMA',
    image: m6Img,
    duration: 2000,
  },
  8: {
    id: 8,
    title: 'THE THREE ASTRAS CONVERGE',
    subtitle: 'ADHARMA MEETS ITS END',
    image: m8Img,
    duration: 2000,
  },
  9: {
    id: 9,
    title: 'ADHARMA IS DEFEATED',
    subtitle: 'DHARMA RISES AGAIN',
    image: m9Img,
    duration: 2000,
  },
}

// Moment 7: Three distinct close-ups in rapid cinematic succession (800ms each = 2400ms total)
const MOMENT_7_SUB_BEATS = [
  {
    image: m7BrahmaImg,
    title: 'BRAHMĀ INVOKES',
    subtitle: 'THE BRAHMĀSTRA',
  },
  {
    image: m7VishnuImg,
    title: 'VIṢṆU INVOKES',
    subtitle: 'THE SUDARŚANA CHAKRA',
  },
  {
    image: m7MahesaImg,
    title: 'MAHEŚA INVOKES',
    subtitle: 'THE PĀŚUPATA ASTRA',
  },
]

export default function CinematicEntry({ onComplete, onNavigate }: CinematicEntryProps) {
  // Moments 1 through 10
  const [momentNum, setMomentNum] = useState<number>(1)
  const [m7BeatIdx, setM7BeatIdx] = useState<number>(0)
  const [m10Phase, setM10Phase] = useState<'awakening' | 'climax'>('awakening')
  const [revealReady, setRevealReady] = useState<boolean>(false)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)

  const timerRef = useRef<number | null>(null)
  const subTimerRef = useRef<number | null>(null)

  // Preload all assets smoothly on mount
  useEffect(() => {
    const assets = [
      m1Img,
      m2Img,
      m3Img,
      m4Img,
      m5Img,
      m6Img,
      m7BrahmaImg,
      m7VishnuImg,
      m7MahesaImg,
      m8Img,
      m9Img,
      m10AwakeningImg,
      m10ClimaxImg,
    ]
    assets.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  // Enter AUM: Opens the existing AUM homepage exactly as it currently exists
  const enterAUM = () => {
    if (isFadingOut) return
    setIsFadingOut(true)
    try {
      localStorage.setItem('aum-intro-seen', 'true')
    } catch {
      // ignore storage limitations
    }
    setTimeout(() => {
      onComplete()
      if (onNavigate) {
        onNavigate('')
      }
    }, 600)
  }

  // Orchestrate Moment Progression
  useEffect(() => {
    if (isFadingOut) return

    // Clear any prior sub-timers
    if (subTimerRef.current) clearTimeout(subTimerRef.current)

    // Moment 7: Three distinct cinematic deity closeups (800ms each)
    if (momentNum === 7) {
      setM7BeatIdx(0)
      const t1 = window.setTimeout(() => setM7BeatIdx(1), 800)
      const t2 = window.setTimeout(() => setM7BeatIdx(2), 1600)
      const t3 = window.setTimeout(() => setMomentNum(8), 2400)

      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    }

    // Moment 10: Awakening (1200ms) -> Cosmic ॐ Convergence & Final AUM Reveal
    if (momentNum === 10) {
      setM10Phase('awakening')
      const tPhase = window.setTimeout(() => {
        setM10Phase('climax')
        const tReveal = window.setTimeout(() => {
          setRevealReady(true)
        }, 500)
        subTimerRef.current = tReveal
      }, 1300)

      return () => {
        clearTimeout(tPhase)
        if (subTimerRef.current) clearTimeout(subTimerRef.current)
      }
    }

    // Standard moments: 1, 2, 3, 4, 5, 6, 8, 9
    const dur = STATIC_MOMENTS[momentNum]?.duration || 2000
    timerRef.current = window.setTimeout(() => {
      setMomentNum((prev) => prev + 1)
    }, dur)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [momentNum, isFadingOut])

  // Compute active scene title and subtitle
  const activeOverlay = useMemo(() => {
    if (momentNum === 7) {
      return MOMENT_7_SUB_BEATS[m7BeatIdx]
    }
    if (momentNum === 10) {
      if (m10Phase === 'awakening') {
        return {
          title: 'A BRIGHTER TOMORROW',
          subtitle: 'THE KNOWLEDGE LIVES ON',
        }
      }
      return null // In climax phase, typography is rendered in the final AUM reveal
    }
    return STATIC_MOMENTS[momentNum] || null
  }, [momentNum, m7BeatIdx, m10Phase])

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#020308] text-gold-100 flex flex-col justify-between select-none overflow-hidden font-body transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Full-Screen Cinema Canvas */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-black flex items-center justify-center">
        {/* Moment 1 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m1Img}
            alt="A Timeless Sanātana Civilization"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 2 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m2Img}
            alt="Kali Yuga Begins"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 3 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m3Img}
            alt="Temples Grow Quiet"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 4 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m4Img}
            alt="Adharma Rises"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 5 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 5 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m5Img}
            alt="The Devas Witness"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 6 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 6 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m6Img}
            alt="The Trimūrti Appear"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 7: Sub-Beats for Brahmā, Viṣṇu, Maheśa Closeups */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 7 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              m7BeatIdx === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={m7BrahmaImg}
              alt="Brahmā Invokes Brahmāstra"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[1200ms] ease-out"
              loading="eager"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              m7BeatIdx === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={m7VishnuImg}
              alt="Viṣṇu Invokes Sudarśana Chakra"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[1200ms] ease-out"
              loading="eager"
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              m7BeatIdx === 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={m7MahesaImg}
              alt="Maheśa Invokes Pāśupata Astra"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[1200ms] ease-out"
              loading="eager"
            />
          </div>
        </div>

        {/* Moment 8: The Three Astras Converge on the Same Asura */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 8 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m8Img}
            alt="The Three Astras Converge"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 9: Adharma is Defeated, Dharma Rises Again */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 9 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={m9Img}
            alt="Adharma is Defeated"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2600ms] ease-out"
            loading="eager"
          />
        </div>

        {/* Moment 10: Awakening -> ॐ Convergence Climax */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${
            momentNum === 10 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Sub-phase A: A Brighter Tomorrow */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              m10Phase === 'awakening' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={m10AwakeningImg}
              alt="The Knowledge Lives On"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[2400ms] ease-out"
              loading="eager"
            />
          </div>

          {/* Sub-phase B: Three Astras Merge into ॐ above Planet Earth */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              m10Phase === 'climax' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={m10ClimaxImg}
              alt="Sacred ॐ Born from Cosmic Convergence"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[4000ms] ease-out"
              loading="eager"
            />
          </div>
        </div>

        {/* Filmic Ambient Vignette & Volumetric Lighting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 pointer-events-none z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)] pointer-events-none z-20" />

        {/* Central Darkening Vignette for Final Reveal: Clears center for text, keeps perimeter energy */}
        {momentNum === 10 && m10Phase === 'climax' && (
          <div
            className={`absolute inset-0 z-25 pointer-events-none transition-opacity duration-1000 ease-out ${
              revealReady ? 'opacity-100' : 'opacity-0'
            } bg-[radial-gradient(ellipse_at_center,rgba(2,3,8,0.85)_0%,rgba(2,3,8,0.72)_40%,rgba(2,3,8,0.3)_75%,transparent_100%)]`}
          />
        )}

        {/* Filmic Subtitles for Moments 1 through 9, and Awakening Phase of Moment 10 */}
        {activeOverlay && (
          <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-30 px-6 text-center pointer-events-none transition-opacity duration-500">
            <div className="inline-block max-w-2xl mx-auto py-3 px-6 rounded-sm bg-black/45 backdrop-blur-sm border border-gold-500/10 shadow-[0_8px_32px_rgba(0,0,0,0.85)]">
              <h2 className="font-serif text-lg sm:text-2xl md:text-3xl text-gold-100 font-medium tracking-[0.2em] uppercase text-glow">
                {activeOverlay.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm font-sans text-gold-300/80 tracking-[0.25em] uppercase font-light">
                {activeOverlay.subtitle}
              </p>
            </div>
          </div>
        )}

        {/* Climax of Moment 10: Final AUM SANĀTANA Reveal with Pristine Spatial Hierarchy */}
        {momentNum === 10 && m10Phase === 'climax' && (
          <div
            className={`absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 overflow-y-auto transition-all duration-1000 ease-out pointer-events-auto ${
              revealReady
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <div className="relative flex flex-col items-center justify-center max-w-3xl w-full mx-auto my-auto py-4">
              {/* 1. TOP / UPPER CENTER: The Sacred ॐ in its own clear zone */}
              <div className="relative flex items-center justify-center mb-5 sm:mb-7 md:mb-9">
                <div className="absolute -inset-4 rounded-full bg-gold-500/15 blur-2xl pointer-events-none" />
                <span className="relative font-deva text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-200 select-none block drop-shadow-[0_0_30px_rgba(232,197,107,0.7)] animate-pulse">
                  ॐ
                </span>
              </div>

              {/* CLEAR GAP: Managed by generous margin-bottom on ॐ */}

              {/* 2. CENTER: AUM SANĀTANA with pristine clearance */}
              <div className="text-center mb-4 sm:mb-6 md:mb-7">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gold-100 tracking-[0.3em] uppercase font-medium drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  AUM
                </h1>
                <h2 className="font-serif text-lg sm:text-2xl md:text-3xl text-gold-200/95 tracking-[0.35em] uppercase font-light mt-1 sm:mt-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  SANĀTANA
                </h2>
              </div>

              {/* 3. BELOW TITLE: Core Tenets & Mission Statement */}
              <div className="text-center space-y-1.5 sm:space-y-2 max-w-xl mb-5 sm:mb-7">
                <p className="text-[11px] sm:text-xs md:text-sm text-gold-200/90 font-sans tracking-[0.24em] uppercase font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  CREATION &bull; PRESERVATION &bull; TRANSFORMATION
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gold-300/80 font-sans tracking-[0.22em] uppercase font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  UNITED IN DHARMA
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gold-400/75 font-sans tracking-[0.2em] uppercase font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] pt-1">
                  KNOWLEDGE &bull; HARMONY &bull; LIBERATION
                </p>
                <p className="text-[9px] sm:text-[11px] md:text-xs text-gold-200/65 font-sans tracking-[0.24em] uppercase pt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  FOR DHARMA. FOR HUMANITY. FOR A BETTER TOMORROW.
                </p>
              </div>

              {/* 4. ENTER AUM Button */}
              <div className="mt-1 sm:mt-2">
                <button
                  type="button"
                  onClick={enterAUM}
                  className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-sm border border-gold-400/80 bg-gradient-to-r from-gold-500/20 via-gold-400/25 to-gold-500/20 hover:from-gold-400/40 hover:via-gold-300/40 hover:to-gold-400/40 text-gold-100 font-display tracking-[0.25em] text-xs sm:text-sm uppercase font-semibold shadow-[0_0_25px_rgba(232,197,107,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ENTER AUM
                    <span className="text-gold-300 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                  <div className="absolute inset-0 rounded-sm bg-gold-400/10 blur-sm group-hover:blur-md transition-all duration-300 pointer-events-none" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
