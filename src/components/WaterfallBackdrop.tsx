import { useEffect, useState } from 'react'
import { assetUrl } from '../utils/assetUrl'

/**
 * Real-media ready backdrop.
 * Put a licensed, locally hosted waterfall video at /media/waterfall.mp4.
 * The still fallback keeps the composition intact until the real footage is supplied.
 */
export default function WaterfallBackdrop() {
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    // Do not preload large media unnecessarily on reduced-motion devices.
    const reduced = !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(reduced)
    if (reduced) setVideoFailed(true)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 hero-heritage-backdrop" />
      {!videoFailed && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          src={assetUrl('media/waterfall.mp4')}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        />
      )}
      {/* Real, actually-animated CSS waterfall — used whenever no licensed video
          is present at /media/waterfall.mp4 (or always, layered subtly, once
          real footage is added later). Never a static image pretending to move. */}
      {(videoFailed || !videoReady) && !reducedMotion && (
        <>
          <div className="hero-waterfall-column left"><div className="hero-waterfall-mist" /></div>
          <div className="hero-waterfall-column right"><div className="hero-waterfall-mist" /></div>
        </>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,9,.96)_0%,rgba(2,3,9,.82)_28%,rgba(2,3,9,.25)_58%,rgba(2,3,9,.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,9,.62)_0%,transparent_30%,rgba(2,3,9,.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_67%_42%,rgba(232,197,107,.15),transparent_27%),radial-gradient(circle_at_85%_65%,rgba(255,255,255,.07),transparent_22%)]" />
      <div className="absolute inset-0 hero-water-shimmer" />
    </div>
  )
}
