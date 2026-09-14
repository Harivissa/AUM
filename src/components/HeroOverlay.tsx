import { Pathway } from '../data/pathways'

interface HeroOverlayProps {
  onEnter: () => void
  selectedPathway: Pathway | null
  onClosePathway: () => void
}

export default function HeroOverlay({ onEnter, selectedPathway, onClosePathway }: HeroOverlayProps) {
  return (
    <>
      <div className="pointer-events-none flex h-full flex-col items-center justify-end px-6 pb-16 text-center sm:pb-24">
        <p className="pointer-events-auto mb-3 font-body text-xs uppercase tracking-widest2 text-gold-500/80">
          Where Science Ends, Sanātana Continues
        </p>
        <h1 className="pointer-events-auto max-w-2xl font-display text-2xl leading-snug text-gold-200 text-glow sm:text-3xl">
          Science maps the measurable.
          <br />
          Sanātana reveals the measurer, the mind, and the source of all knowing.
        </h1>

        <div className="pointer-events-auto mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onEnter}
            className="rounded-full bg-gold-400 px-7 py-3 font-body text-sm font-medium text-void shadow-[0_0_30px_rgba(232,197,107,0.35)] transition hover:bg-gold-200"
          >
            Enter the Universe
          </button>
          <a
            href="#verify"
            className="panel-edge rounded-full bg-black/30 px-7 py-3 font-body text-sm text-gold-200 backdrop-blur-sm transition hover:bg-black/50"
          >
            Explore AUM Verify
          </a>
        </div>

        <p className="pointer-events-auto mt-6 font-body text-[11px] text-gold-500/50">
          Drag to orbit the mandala · scroll to draw closer
        </p>
      </div>

      {selectedPathway && (
        <div
          role="dialog"
          aria-label={selectedPathway.label}
          className="pointer-events-auto absolute left-1/2 top-1/2 w-[min(90vw,340px)] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="panel-edge rounded-2xl bg-black/70 p-6 text-center backdrop-blur-md">
            <p className="font-deva text-lg text-gold-400">{selectedPathway.sanskrit}</p>
            <h2 className="mt-1 font-display text-2xl text-gold-200">{selectedPathway.label}</h2>
            <p className="mt-3 font-body text-sm text-gold-200/70">{selectedPathway.description}</p>
            <p className="mt-4 font-body text-xs uppercase tracking-widest2 text-saffron">Coming soon</p>
            <button
              type="button"
              onClick={onClosePathway}
              className="mt-5 rounded-full border border-gold-500/30 px-5 py-1.5 font-body text-xs text-gold-200/80 transition hover:bg-gold-500/10"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
