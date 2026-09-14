import { useState, useEffect } from 'react'
import { Flame, Play, Pause, RotateCcw, Sparkles, Heart } from 'lucide-react'
import { playSingingBowlChime } from '../utils/ambientSound'
import TiltCard3D from './TiltCard3D'

export default function SadhanaSection() {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale (AUM)' | 'Ready'>('Ready')
  const [secondsLeft, setSecondsLeft] = useState(4)
  const [cyclesCompleted, setCyclesCompleted] = useState(0)

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>

    if (isActive) {
      if (phase === 'Ready') {
        setPhase('Inhale')
        setSecondsLeft(4)
        playSingingBowlChime()
      } else {
        timer = setInterval(() => {
          setSecondsLeft((prev) => {
            if (prev <= 1) {
              if (phase === 'Inhale') {
                setPhase('Hold')
                return 7
              } else if (phase === 'Hold') {
                setPhase('Exhale (AUM)')
                playSingingBowlChime()
                return 8
              } else if (phase === 'Exhale (AUM)') {
                setCyclesCompleted((c) => c + 1)
                setPhase('Inhale')
                return 4
              }
              return 4
            }
            return prev - 1
          })
        }, 1000)
      }
    }

    return () => clearInterval(timer)
  }, [isActive, phase])

  const handleToggle = () => {
    if (!isActive) {
      setIsActive(true)
      setPhase('Inhale')
      setSecondsLeft(4)
      playSingingBowlChime()
    } else {
      setIsActive(false)
      setPhase('Ready')
      setSecondsLeft(4)
    }
  }

  const handleReset = () => {
    setIsActive(false)
    setPhase('Ready')
    setSecondsLeft(4)
    setCyclesCompleted(0)
  }

  const getCircleScale = () => {
    if (!isActive || phase === 'Ready') return 'scale-100'
    if (phase === 'Inhale') return 'scale-125 duration-[4000ms]'
    if (phase === 'Hold') return 'scale-125 duration-[7000ms]'
    if (phase === 'Exhale (AUM)') return 'scale-90 duration-[8000ms]'
    return 'scale-100'
  }

  return (
    <section id="sadhana" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <Flame className="w-3.5 h-3.5 text-gold-400" />
          Mindful Living Sanctuary
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
          Pranayama & AUM Chanting Sanctuary
        </h2>
        <p className="mt-4 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          Calm the nervous system, balance the Ida and Pingala nadis, and settle awareness into the silent witness.
          Follow the 4-7-8 cosmic rhythm with vibrational AUM resonance.
        </p>
      </div>

      {/* Interactive 3D Meditation Stage */}
      <TiltCard3D intensity={8} className="max-w-3xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#110a2f]/95 via-[#070514] to-[#04030a] border border-gold-400/40 p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden flex flex-col items-center">
          {/* Breathing Visualizer Circle with 3D Depth */}
          <div className="relative my-8 flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64">
            <div
              className={`absolute inset-0 rounded-full border border-gold-400/20 transition-transform ease-in-out ${getCircleScale()}`}
            />
            <div
              className={`absolute inset-4 rounded-full border border-gold-500/30 transition-transform ease-in-out ${getCircleScale()}`}
            />
            <div
              className={`absolute inset-8 rounded-full bg-gradient-to-tr from-gold-600/20 via-gold-400/10 to-transparent border border-gold-400/50 backdrop-blur-sm transition-transform ease-in-out flex flex-col items-center justify-center shadow-[0_0_40px_rgba(232,197,107,0.25)] ${getCircleScale()}`}
            >
              <span className="font-deva text-4xl sm:text-5xl text-gold-200 font-bold text-glow">
                ॐ
              </span>
              <span className="font-body text-xs uppercase tracking-widest2 text-gold-300 font-semibold mt-1">
                {phase}
              </span>
              {isActive && (
                <span className="font-display text-2xl font-bold text-gold-400 mt-0.5">
                  {secondsLeft}s
                </span>
              )}
            </div>
          </div>

          {/* Phase Instructions */}
          <p className="font-body text-sm text-gold-300/80 max-w-md mx-auto mb-6">
            {phase === 'Ready' && 'Click Start to begin 4-7-8 Pranayama with sacred AUM resonance.'}
            {phase === 'Inhale' && 'Slowly inhale deep prana into the lower abdomen (4 seconds)...'}
            {phase === 'Hold' && 'Gently retain the breath, resting in effortless stillness (7 seconds)...'}
            {phase === 'Exhale (AUM)' && 'Slowly exhale while internally or softly vocalizing "A-U-M" (8 seconds)...'}
          </p>

          {/* Stats & Actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleToggle}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-void font-body font-semibold text-sm shadow-[0_0_25px_rgba(232,197,107,0.3)] hover:brightness-110 active:scale-95 transition-all"
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isActive ? 'Pause Sanctuary' : 'Begin Pranayama'}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              title="Reset counter"
              className="p-3 rounded-full bg-black/50 border border-gold-500/20 text-gold-400 hover:text-gold-200 hover:bg-gold-500/10 transition shadow-inner"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Cycles Counter */}
          <div className="mt-6 flex items-center gap-2 text-xs font-body text-gold-500/80">
            <Heart className="w-3.5 h-3.5 text-gold-400" />
            <span>Cycles Completed: {cyclesCompleted}</span>
          </div>
        </div>
      </TiltCard3D>
    </section>
  )
}
