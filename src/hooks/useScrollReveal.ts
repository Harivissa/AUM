import React, { useEffect, useRef } from 'react'

/**
 * Activates scroll-reveal CSS class 'visible' on elements that enter the viewport.
 * Elements must have class 'reveal', 'reveal-left', or 'reveal-right' to animate.
 * @param rootMargin - Intersection root margin (default: '-80px 0px')
 * @param threshold - Intersection threshold (default: 0.12)
 */
export function useScrollReveal(
  rootMargin = '-80px 0px',
  threshold = 0.12
): React.RefObject<HTMLElement | null> {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('visible')
            observer.unobserve(entry.target) // once revealed, don't re-hide
          }
        })
      },
      { rootMargin, threshold }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return containerRef
}

/**
 * Alternative hook to reveal a single element ref.
 */
export function useElementReveal(
  rootMargin = '-60px 0px',
  threshold = 0.1
) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return ref
}
