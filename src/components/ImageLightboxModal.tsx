import { useEffect, useState, useRef, useCallback } from 'react'
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Info,
  ShieldCheck,
  Archive,
  Sparkles,
  Move,
  Download,
  CheckCircle2,
} from 'lucide-react'
import { generateStructuredArticlePdf } from '../utils/pdfExport'

export interface LightboxImage {
  src: string
  title: string
  sanskritTitle?: string
  subtitle?: string
  caption?: string
  period?: string
  category?: string
  sourceProvenance?: string
  detailedNotes?: string
  tags?: string[]
}

interface ImageLightboxModalProps {
  isOpen: boolean
  images: LightboxImage[]
  currentIndex: number
  onClose: () => void
  onNavigate?: (index: number) => void
}

const ZOOM_LEVELS = [1, 1.5, 2, 2.5, 3]

export default function ImageLightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxModalProps) {
  const [zoomIndex, setZoomIndex] = useState(0)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [showMetadata, setShowMetadata] = useState(true)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentImage = images[currentIndex] || images[0]
  const zoom = ZOOM_LEVELS[zoomIndex]

  const handleDownloadImagePdf = async () => {
    if (!currentImage || isExporting) return
    setIsExporting(true)
    setExportSuccess(false)

    try {
      const filename = `Archival_Record_${currentImage.title.replace(/[^a-zA-Z0-9]/g, '_')}`
      await generateStructuredArticlePdf(
        {
          title: currentImage.title,
          sanskritTitle: currentImage.sanskritTitle,
          category: currentImage.category || 'Archival Visual Record',
          statusOrPeriod: currentImage.period || 'Civilizational Heritage Source',
          attribution: currentImage.subtitle,
          summary: currentImage.caption || 'Archival image and primary historical documentation preserved for scholarly review.',
          details: currentImage.detailedNotes,
          provenance: currentImage.sourceProvenance,
          keyPoints: currentImage.tags
            ? currentImage.tags.map((t) => ({ label: 'Archival Tag', text: t }))
            : undefined,
        },
        filename
      )
      setExportSuccess(true)
      setTimeout(() => setExportSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to export image dossier PDF:', err)
    } finally {
      setIsExporting(false)
    }
  }

  // Reset zoom & pan when image changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setZoomIndex(0)
      setPan({ x: 0, y: 0 })
      setImgLoaded(false)
    }
  }, [isOpen, currentIndex])

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (images.length > 1 && onNavigate) {
          const prev = (currentIndex - 1 + images.length) % images.length
          onNavigate(prev)
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (images.length > 1 && onNavigate) {
          const next = (currentIndex + 1) % images.length
          onNavigate(next)
        }
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1))
      } else if (e.key === '-') {
        e.preventDefault()
        setZoomIndex((prev) => {
          const next = Math.max(prev - 1, 0)
          if (next === 0) setPan({ x: 0, y: 0 })
          return next
        })
      } else if (e.key === '0') {
        e.preventDefault()
        setZoomIndex(0)
        setPan({ x: 0, y: 0 })
      } else if (e.key.toLowerCase() === 'i') {
        e.preventDefault()
        setShowMetadata((v) => !v)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  const handleZoomIn = () => {
    setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1))
  }

  const handleZoomOut = () => {
    setZoomIndex((prev) => {
      const next = Math.max(prev - 1, 0)
      if (next === 0) setPan({ x: 0, y: 0 })
      return next
    })
  }

  const handleResetZoom = () => {
    setZoomIndex(0)
    setPan({ x: 0, y: 0 })
  }

  const handleToggleZoom = () => {
    if (zoomIndex === 0) {
      setZoomIndex(2) // Jump to 2x zoom
    } else {
      handleResetZoom()
    }
  }

  // Mouse pan handlers for magnified inspection
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Wheel zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      if (e.deltaY < 0) {
        setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1))
      } else if (e.deltaY > 0) {
        setZoomIndex((prev) => {
          const next = Math.max(prev - 1, 0)
          if (next === 0) setPan({ x: 0, y: 0 })
          return next
        })
      }
    },
    []
  )

  if (!isOpen || !currentImage) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`High-Resolution Inspection: ${currentImage.title}`}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl text-gold-100 select-none transition-opacity duration-300 animate-in fade-in"
    >
      {/* Top Header Controls Bar */}
      <header className="relative z-30 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-gold-500/20 bg-black/80 backdrop-blur-md">
        {/* Left: Category chip & Image Title */}
        <div className="flex items-center gap-3 min-w-0 pr-4">
          <div className="w-8 h-8 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
            {currentImage.category?.toLowerCase().includes('record') || currentImage.category?.toLowerCase().includes('smriti') ? (
              <Archive className="w-4 h-4 text-gold-400" />
            ) : (
              <Sparkles className="w-4 h-4 text-gold-400" />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {currentImage.category && (
                <span className="font-body text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 shrink-0">
                  {currentImage.category}
                </span>
              )}
              {images.length > 1 && (
                <span className="font-body text-[10px] text-gold-400/70 font-mono">
                  {currentIndex + 1} / {images.length}
                </span>
              )}
            </div>
            <h2 className="font-display text-sm sm:text-base md:text-lg font-bold text-gold-100 truncate mt-0.5">
              {currentImage.title}
              {currentImage.sanskritTitle && (
                <span className="font-deva text-gold-400/90 ml-2 font-normal text-xs sm:text-sm">
                  {currentImage.sanskritTitle}
                </span>
              )}
            </h2>
          </div>
        </div>

        {/* Right: Inspection Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom controls */}
          <div className="flex items-center rounded-xl border border-gold-500/25 bg-black/60 p-0.5 shadow-sm">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomIndex === 0}
              aria-label="Zoom out"
              title="Zoom out (-)"
              className="p-1.5 sm:p-2 rounded-lg text-gold-300 hover:text-gold-100 hover:bg-gold-500/15 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleToggleZoom}
              title="Click to toggle 100% / 200%"
              aria-label={`Current zoom: ${Math.round(zoom * 100)}%`}
              className="px-2 py-1 text-xs font-mono text-gold-200 hover:text-gold-100 transition min-w-[52px] text-center"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomIndex === ZOOM_LEVELS.length - 1}
              aria-label="Zoom in"
              title="Zoom in (+)"
              className="p-1.5 sm:p-2 rounded-lg text-gold-300 hover:text-gold-100 hover:bg-gold-500/15 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Reset View */}
          <button
            type="button"
            onClick={handleResetZoom}
            disabled={zoomIndex === 0 && pan.x === 0 && pan.y === 0}
            title="Reset fit / zoom (0)"
            aria-label="Reset zoom and center"
            className="p-2 rounded-xl border border-gold-500/25 bg-black/60 text-gold-300 hover:text-gold-100 hover:bg-gold-500/15 disabled:opacity-30 disabled:pointer-events-none transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Open full raw asset in new tab */}
          <a
            href={currentImage.src}
            target="_blank"
            rel="noopener noreferrer"
            title="Open raw image file in new tab"
            aria-label="Open original image in full resolution"
            className="p-2 rounded-xl border border-gold-500/25 bg-black/60 text-gold-300 hover:text-gold-100 hover:bg-gold-500/15 transition hidden sm:inline-flex"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Download Archival Record PDF */}
          <button
            type="button"
            onClick={handleDownloadImagePdf}
            disabled={isExporting}
            title="Download source dossier as PDF"
            aria-label="Download archival record as PDF"
            className={`p-2 rounded-xl border transition ${
              exportSuccess
                ? 'border-emerald-400/60 bg-emerald-500/20 text-emerald-300'
                : 'border-gold-500/25 bg-black/60 text-gold-300 hover:text-gold-100 hover:bg-gold-500/15'
            }`}
          >
            {isExporting ? (
              <div className="w-4 h-4 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
            ) : exportSuccess ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <Download className="w-4 h-4 text-gold-400" />
            )}
          </button>

          {/* Toggle Metadata Info Bar */}
          <button
            type="button"
            onClick={() => setShowMetadata((v) => !v)}
            aria-pressed={showMetadata}
            title="Toggle historical provenance panel (I)"
            aria-label="Toggle details panel"
            className={`p-2 rounded-xl border transition ${
              showMetadata
                ? 'border-gold-400 bg-gold-500/20 text-gold-100 shadow-sm'
                : 'border-gold-500/25 bg-black/60 text-gold-300 hover:text-gold-100 hover:bg-gold-500/15'
            }`}
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Close Modal Button */}
          <button
            type="button"
            onClick={onClose}
            title="Close viewer (Esc)"
            aria-label="Close high resolution viewer"
            className="p-2 rounded-xl border border-gold-400/40 bg-gold-500/15 text-gold-100 hover:bg-gold-500/30 hover:border-gold-300 transition ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Interactive Stage */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`relative flex-1 w-full overflow-hidden flex items-center justify-center p-4 sm:p-8 ${
          zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
        }`}
      >
        {/* Subtle radial ambient spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,197,107,0.06),transparent_70%)] pointer-events-none" />

        {/* Pan instruction tooltip when zoomed */}
        {zoom > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-gold-400/30 text-[11px] font-body text-gold-300 shadow-lg backdrop-blur-xs">
            <Move className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span>Drag image to pan • Double click to toggle zoom</span>
          </div>
        )}

        {/* Navigation Previous Button */}
        {images.length > 1 && onNavigate && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              const prev = (currentIndex - 1 + images.length) % images.length
              onNavigate(prev)
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full border border-gold-500/30 bg-black/70 text-gold-200 hover:text-gold-50 hover:border-gold-300 hover:bg-gold-500/20 backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Navigation Next Button */}
        {images.length > 1 && onNavigate && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              const next = (currentIndex + 1) % images.length
              onNavigate(next)
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full border border-gold-500/30 bg-black/70 text-gold-200 hover:text-gold-50 hover:border-gold-300 hover:bg-gold-500/20 backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Image Canvas */}
        <div
          onDoubleClick={handleToggleZoom}
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transition: isDragging ? 'none' : 'transform 200ms ease-out',
          }}
          className="relative max-w-full max-h-full flex items-center justify-center will-change-transform"
        >
          {!imgLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-12 text-gold-400/70">
              <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
              <span className="font-body text-xs tracking-wider uppercase">Loading high-resolution asset...</span>
            </div>
          )}

          <img
            src={currentImage.src}
            alt={currentImage.title}
            draggable={false}
            onLoad={() => setImgLoaded(true)}
            className={`max-w-[88vw] sm:max-w-[82vw] max-h-[72vh] object-contain rounded-xl shadow-2xl border border-gold-500/20 transition-opacity duration-300 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* Bottom Historical Context & Provenance Panel */}
      {showMetadata && (
        <footer className="relative z-30 border-t border-gold-500/20 bg-black/85 backdrop-blur-md px-4 py-3.5 sm:px-6 sm:py-4 transition-all animate-in slide-in-from-bottom-2">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {currentImage.period && (
                  <span className="font-body text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                    {currentImage.period}
                  </span>
                )}
                {currentImage.subtitle && (
                  <span className="font-body text-xs text-gold-300/80 font-medium">
                    • {currentImage.subtitle}
                  </span>
                )}
              </div>

              {currentImage.caption && (
                <p className="font-body text-xs sm:text-sm text-gold-200/90 leading-relaxed mt-1">
                  {currentImage.caption}
                </p>
              )}

              {currentImage.detailedNotes && (
                <p className="font-body text-[11px] text-gold-300/70 leading-relaxed mt-1.5">
                  {currentImage.detailedNotes}
                </p>
              )}
            </div>

            {currentImage.sourceProvenance && (
              <div className="md:max-w-sm rounded-xl bg-gold-950/40 border border-gold-500/25 p-2.5 sm:p-3 shrink-0">
                <div className="flex items-center gap-1.5 font-body text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Archival Provenance</span>
                </div>
                <p className="font-body text-[11px] text-gold-300/80 leading-normal mt-1">
                  {currentImage.sourceProvenance}
                </p>
              </div>
            )}
          </div>
        </footer>
      )}
    </div>
  )
}
