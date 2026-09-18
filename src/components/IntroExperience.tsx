import { useState, useEffect, useRef } from 'react'
import { Play, Pause, X, RotateCcw } from 'lucide-react'

import dawnImg from '../assets/images/intro_dawn_horizon_1789713063189.jpg'
import meditatorImg from '../assets/images/intro_meditator_cosmos_1789713081259.jpg'
import templeImg from '../assets/images/sacred_temple_1789619561869.jpg'
import vedicImg from '../assets/images/vedic_manuscript_1789619549504.jpg'
import memoryImg from '../assets/images/civilization_memory_1789619576878.jpg'
import dharmaImg from '../assets/images/dharma_wheel_1789619590191.jpg'
import festivalImg from '../assets/images/festival_diya_1789619603081.jpg'
import youngSeekerImg from '../assets/images/young_seeker_1789619627160.jpg'

export interface IntroExperienceProps {
  onComplete: () => void
  onNavigate: (href: string) => void
}

interface SceneData {
  id: number
  title: string
  duration: number // in milliseconds
}

// Exactly 7 scenes: 1 to 7. Scene 7 is the final scene.
const SCENES: SceneData[] = [
  { id: 1, title: 'The Beginning', duration: 3200 },
  { id: 2, title: 'Eternal Questions', duration: 3600 },
  { id: 3, title: 'A Civilization of Knowledge', duration: 3600 },
  { id: 4, title: 'Living Traditions', duration: 3600 },
  { id: 5, title: 'The Present Challenge', duration: 4000 },
  { id: 6, title: 'AUM Appears', duration: 3600 },
  { id: 7, title: 'Explore the Paths', duration: 4500 },
]

export default function IntroExperience({ onComplete, onNavigate }: IntroExperienceProps) {
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const timerRef = useRef<number | null>(null)

  const scene = SCENES[currentSceneIdx]

  // Transition directly to the actual homepage
  const finishIntro = (targetHref = '') => {
    if (isFadingOut) return
    setIsFadingOut(true)
    localStorage.setItem('aum-intro-seen', 'true')
    setTimeout(() => {
      onComplete()
      if (targetHref) {
        onNavigate(targetHref)
      } else {
        onNavigate('')
      }
    }, 600)
  }

  useEffect(() => {
    if (!isPlaying || isFadingOut) {
      if (timerRef.current) clearTimeout(timerRef.current)
      return
    }

    timerRef.current = window.setTimeout(() => {
      if (currentSceneIdx < SCENES.length - 1) {
        setCurrentSceneIdx((prev) => prev + 1)
      } else {
        // Scene 7 has finished -> directly fade and open the real homepage!
        finishIntro()
      }
    }, scene.duration)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentSceneIdx, isPlaying, isFadingOut, scene.duration])

  const handleSkip = () => {
    finishIntro()
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#020409] text-gold-100 flex flex-col justify-between select-none overflow-hidden font-body transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header Bar */}
      <div className="relative z-30 flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-gold-500/20 bg-black/65 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-deva text-2xl text-gold-300 text-glow">ॐ</span>
          <span className="text-xs uppercase tracking-[0.2em] font-display text-gold-200">
            AUM &nbsp;|&nbsp; <span className="text-gold-100 font-semibold">{scene.title}</span>
          </span>
        </div>

        {/* Continuous 7-Scene Visual Progress Indicators */}
        <div className="hidden sm:flex items-center gap-2">
          {SCENES.map((s, idx) => {
            const isActive = idx === currentSceneIdx
            const isPassed = idx < currentSceneIdx
            return (
              <div
                key={s.id}
                className="h-1.5 w-7 sm:w-10 rounded-full bg-white/15 overflow-hidden transition-all"
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    isActive
                      ? 'w-full bg-gold-400 shadow-[0_0_10px_#e8c56b]'
                      : isPassed
                      ? 'w-full bg-gold-500/60'
                      : 'w-0'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full border border-gold-500/30 bg-black/50 text-gold-300 hover:text-white transition"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentSceneIdx(0)
              setIsPlaying(true)
            }}
            className="p-1.5 rounded-full border border-gold-500/30 bg-black/50 text-gold-300 hover:text-white transition"
            title="Restart Intro"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleSkip}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-gold-500/15 hover:bg-gold-500/25 text-gold-100 text-xs tracking-wider transition uppercase font-semibold"
          >
            Skip Intro <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Continuous Cinematic Stage */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
        {/* Ambient celestial particles */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(232,197,107,0.08),transparent_60%)]" />

        {/* =========================================================================
            SCENE 1: The Beginning
            ========================================================================= */}
        {scene.id === 1 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
            <img
              src={dawnImg}
              alt="Cosmic dawn horizon"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.75] scale-100 animate-[kenburns_16s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            <div className="relative z-10 text-center max-w-3xl px-6">
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold-200/90 leading-relaxed tracking-wide">
                Before history was written…<br />
                Before modern science began…<br />
                <span className="text-gold-300 font-semibold text-2xl sm:text-3xl md:text-4xl block mt-3">
                  There was a <span className="text-glow text-gold-400 font-bold">civilization asking questions</span>.
                </span>
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCENE 2: Eternal Questions
            ========================================================================= */}
        {scene.id === 2 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
            <img
              src={meditatorImg}
              alt="Meditator contemplating cosmos"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7] scale-100 animate-[kenburns_16s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/85" />
            <div className="relative z-10 max-w-4xl px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="hidden md:block w-1/3" />
              <div className="text-right md:text-left space-y-3 font-display">
                <p className="text-2xl sm:text-3xl md:text-4xl text-gold-100">
                  What is <span className="text-gold-400 font-bold">reality</span>?
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl text-gold-100">
                  What is <span className="text-gold-400 font-bold">consciousness</span>?
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl text-gold-100">
                  What is our <span className="text-gold-400 font-bold">duty</span>?
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl text-gold-100">
                  What is the nature of <span className="text-gold-400 font-bold">life</span>?
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCENE 3: A Civilization of Knowledge
            ========================================================================= */}
        {scene.id === 3 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
            <img
              src={templeImg}
              alt="Ancient temple sanctuary at dawn"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.8] scale-100 animate-[kenburns_16s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 text-center max-w-3xl px-6">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold-100 leading-snug">
                A civilization that explored the nature of{' '}
                <span className="text-gold-400 font-semibold">reality</span>,{' '}
                <span className="text-gold-400 font-semibold">consciousness</span>, time, life, and{' '}
                <span className="text-gold-300 font-bold">dharma</span>.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gold-400/40" />
                <span className="font-deva text-base sm:text-lg text-gold-300">सत्यं ज्ञानम् अनन्तम्</span>
                <span className="h-px w-12 bg-gold-400/40" />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCENE 4: Living Traditions
            ========================================================================= */}
        {scene.id === 4 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
            <img
              src={memoryImg}
              alt="Ancient living traditions of learning"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-100 animate-[kenburns_16s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/85" />
            <div className="relative z-10 max-w-4xl px-8 w-full flex flex-col md:flex-row items-center justify-between">
              <div className="space-y-3 text-center md:text-left font-display">
                <p className="text-xl sm:text-2xl text-gold-200/80">Not merely a religion.</p>
                <p className="text-xl sm:text-2xl text-gold-200/80">Not merely a tradition.</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-400 text-glow mt-4">
                  A living civilization of knowledge.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCENE 5: The Present Challenge
            ========================================================================= */}
        {scene.id === 5 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#15102a_0%,#03050a_100%)]" />
            {/* Visual floating fragmented notes as shown in the reference image */}
            <div className="absolute inset-0 opacity-25 pointer-events-none flex flex-wrap items-center justify-center gap-6 p-8">
              {['Misunderstood', 'Scattered', 'Different languages', 'Out of context', 'Often forgotten', 'Unanswered questions'].map((word, i) => (
                <div key={i} className="p-3.5 border border-gold-500/35 bg-black/70 rounded-lg text-xs font-mono text-gold-300 rotate-[-3deg] shadow-lg">
                  {word}
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center max-w-3xl px-6 space-y-3 font-display">
              <p className="text-xl sm:text-2xl md:text-3xl text-gold-200">
                But its knowledge is <span className="text-gold-400 font-bold">scattered</span>.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-gold-200">
                Its stories are <span className="text-gold-400 font-bold">misunderstood</span>.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-gold-200">
                Its history is often <span className="text-gold-400 font-bold">forgotten</span>.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-gold-200">
                Its questions remain <span className="text-gold-400 font-bold">unanswered</span>.
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCENE 6: AUM Appears
            ========================================================================= */}
        {scene.id === 6 && (
          <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,197,107,0.22),transparent_65%),linear-gradient(180deg,#02050b_0%,#050a14_100%)]" />
            <div className="relative z-10 text-center max-w-3xl px-6">
              <div className="font-deva text-7xl sm:text-8xl md:text-9xl text-gold-400 text-glow select-none animate-pulse">
                ॐ
              </div>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold-100">
                AUM brings these fragments together.
              </h2>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-display tracking-widest text-gold-300/85 uppercase">
                <span>Śāstra</span>
                <span>·</span>
                <span>Tīrtha</span>
                <span>·</span>
                <span>Smṛti</span>
                <span>·</span>
                <span>Dharma</span>
                <span>·</span>
                <span>Festivals</span>
                <span>·</span>
                <span>Truth</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCENE 7: Explore the Paths (Final Intro Scene)
            ========================================================================= */}
        {scene.id === 7 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 animate-fadeIn">
            <div className="text-center max-w-2xl mb-6">
              <p className="font-display text-xl sm:text-2xl text-gold-100 font-semibold">
                Explore the knowledge. Understand the civilization.
              </p>
              <p className="font-body text-xs sm:text-sm text-gold-300/80 mt-1">
                Question deeply. Verify honestly. Carry it forward.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 w-full max-w-5xl">
              {[
                { name: 'ŚĀSTRA', sa: 'शास्त्रम्', img: vedicImg, href: '#shastra' },
                { name: 'TĪRTHA', sa: 'तीर्थम्', img: templeImg, href: '#tirtha' },
                { name: 'SMṚTI', sa: 'स्मृतिः', img: memoryImg, href: '#smriti' },
                { name: 'DHARMA', sa: 'धर्मः', img: dharmaImg, href: '#dharma' },
                { name: 'FESTIVALS', sa: 'उत्सवाः', img: festivalImg, href: '#festivals' },
                { name: 'YOUNG SEEKERS', sa: 'बाल साधक', img: youngSeekerImg, href: '#young-seekers' },
              ].map((card) => (
                <button
                  key={card.name}
                  onClick={() => finishIntro(card.href)}
                  className="group relative rounded-2xl overflow-hidden border border-gold-500/30 bg-black/65 p-2 flex flex-col items-center hover:border-gold-400 hover:scale-105 transition-all shadow-xl"
                >
                  <div className="w-full h-24 sm:h-32 rounded-xl overflow-hidden mb-2">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <span className="font-deva text-[10px] text-gold-400/80">{card.sa}</span>
                  <span className="font-display text-xs font-bold text-gold-100 tracking-wider mt-0.5">
                    {card.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <span className="font-body text-xs text-gold-400/70 tracking-widest uppercase">
                Transitioning to AUM Homepage…
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Subtle Bar */}
      <div className="relative z-30 px-4 sm:px-8 py-2.5 border-t border-gold-500/20 bg-black/75 backdrop-blur-md flex flex-wrap items-center justify-between text-[11px] font-body text-gold-300/80">
        <div className="flex items-center gap-2">
          <span>“Knowledge is a Journey. Let's Explore Together.”</span>
        </div>
        <div className="flex items-center gap-1.5 font-display text-gold-200 font-semibold tracking-wider">
          <span>AUM</span>
          <span className="font-deva text-gold-400">ॐ</span>
          <span>SANĀTANA ALWAYS</span>
        </div>
      </div>
    </div>
  )
}
