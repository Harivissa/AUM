import { Suspense, useState, useEffect } from 'react'
import { X, RotateCcw, Eye, EyeOff } from 'lucide-react'
import AUMUniverse from './AUMUniverse'
import StaticFallback from './StaticFallback'
import { PATHWAYS } from '../data/pathways'
import { useWebGLSupport } from '../hooks/useWebGLSupport'

interface Fullscreen3DModalProps {
  isOpen: boolean
  onClose: () => void
  reducedMotion: boolean
  onToggleReducedMotion: (v: boolean) => void
  onNavigate: (href: string) => void
}

export default function Fullscreen3DModal({
  isOpen,
  onClose,
  reducedMotion,
  onToggleReducedMotion,
  onNavigate,
}: Fullscreen3DModalProps) {
  const webglSupported = useWebGLSupport()
  const [enterSignal, setEnterSignal] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="3D Cosmos Universe Orbit"
      className="fixed inset-0 z-50 bg-void animate-in fade-in duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        {webglSupported ? (
          <Suspense fallback={<StaticFallback onNavigate={onNavigate} />}>
            <AUMUniverse
              key={enterSignal}
              reducedMotion={reducedMotion}
            onNavigate={onNavigate}
            />
          </Suspense>
        ) : (
          <StaticFallback onNavigate={onNavigate} />
        )}
      </div>

      {/* Top HUD Controls */}
      <div className="relative z-10 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-black/60 border border-gold-500/25 px-4 py-2 rounded-full backdrop-blur-md">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gold-500/20 border border-gold-400/40">
            <span className="font-deva text-xs font-bold text-gold-200">ॐ</span>
          </div>
          <div>
            <span className="font-display text-base font-bold text-gold-100">AUM Cosmos Orbit</span>
            <span className="hidden sm:inline font-body text-[10px] text-gold-400/80 ml-2">
              Interactive 3D Mandala
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setEnterSignal((n) => n + 1)}
            title="Recenter Camera"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/60 border border-gold-500/25 text-gold-300 hover:bg-gold-500/20 text-xs font-body backdrop-blur-md transition"
          >
            <RotateCcw className="w-4 h-4 text-gold-400" />
            <span className="hidden sm:inline">Recenter</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleReducedMotion(!reducedMotion)}
            title="Toggle Motion"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/60 border border-gold-500/25 text-gold-300 hover:bg-gold-500/20 text-xs font-body backdrop-blur-md transition"
          >
            {reducedMotion ? <EyeOff className="w-4 h-4 text-gold-400" /> : <Eye className="w-4 h-4" />}
            <span className="hidden sm:inline">{reducedMotion ? 'Reduced' : 'Smooth'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Exit Fullscreen 3D"
            className="p-2 rounded-full bg-black/70 border border-gold-400/40 text-gold-200 hover:bg-gold-500/20 backdrop-blur-md transition-all shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom HUD - Pathway Nodes Selector */}
      <div className="relative z-10 p-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 bg-black/70 border border-gold-500/30 px-4 py-2.5 rounded-full backdrop-blur-md max-w-full overflow-x-auto no-scrollbar">
          <span className="hidden md:inline font-body text-xs text-gold-400/80 uppercase tracking-wider font-semibold mr-1 shrink-0">
            Select Node:
          </span>
          {PATHWAYS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onNavigate(({ scriptures: '#shastra', temples: '#tirtha', epics: '#itihasa', concepts: '#dharma', practices: '#dharma', kids: '#young-seekers' } as Record<string, string>)[p.id] ?? '#explore')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-500/20 hover:border-gold-400 text-gold-200 text-xs font-body transition shrink-0"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="font-deva text-gold-400">{p.sanskrit}</span>
              <span>{p.label}</span>
            </button>
          ))}
          <button type="button" onClick={() => onNavigate('#festivals')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-500/20 hover:border-gold-400 text-gold-200 text-xs font-body transition shrink-0"><span className="w-2 h-2 rounded-full bg-saffron" /><span className="font-deva text-gold-400">उत्सवाः</span><span>Festivals</span></button>
        </div>
        <p className="font-body text-xs text-gold-500/70 bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm">
          ✦ Click any node sphere in 3D space to open its sacred scripture & philosophy portal ✦
        </p>
      </div>
    </div>
  )
}
