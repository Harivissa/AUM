import InteractiveMap, { type InteractiveMapProps } from './InteractiveMap'

export type VishvaMapProps = InteractiveMapProps

/**
 * VishvaMap component now delegates directly to the real Leaflet-powered InteractiveMap,
 * providing real geographic coastline, border, ocean, island data, smooth zoom/pan,
 * search by country/city/temple, and 4 dedicated exploration layers (Present, Historical,
 * Migration Routes, and Community Directory).
 */
export default function VishvaMap(props: VishvaMapProps) {
  return <InteractiveMap {...props} />
}
export { default as InteractiveMap } from './InteractiveMap'
