import { useEffect, useState } from 'react'

const STORAGE_KEY = 'aum:reduced-motion'

/**
 * Tracks whether motion should be reduced.
 * Combines the OS-level `prefers-reduced-motion` media query with a
 * manual in-UI override the user can toggle (persisted to localStorage).
 * Manual override always wins once set; before that, OS preference applies.
 */
export function useReducedMotion(): [boolean, (v: boolean) => void] {
  const getSystemPref = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [manualOverride, setManualOverride] = useState<boolean | null>(() => {
    if (typeof window === 'undefined') return null
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'true') return true
    if (stored === 'false') return false
    return null
  })

  const [systemPref, setSystemPref] = useState<boolean>(getSystemPref())

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setSystemPref(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const reduced = manualOverride ?? systemPref

  const setReduced = (v: boolean) => {
    setManualOverride(v)
    window.localStorage.setItem(STORAGE_KEY, String(v))
  }

  return [reduced, setReduced]
}
