import type { UILang } from '../../i18n'

export type EvidenceLabel =
  | 'Primary source'
  | 'Scholarly consensus'
  | 'Scholarly interpretation'
  | 'Reported incident'
  | 'Disputed claim'
  | 'Insufficient evidence'
  | 'Requires further verification'

export type SmritiSubsectionId =
  | 'medieval'
  | 'sultanate'
  | 'mughal'
  | 'goa'
  | 'colonial'
  | 'partition'
  | 'bangladesh'

export interface LocalizedText {
  en: string
  te: string
  hi: string
  sa: string
  ta: string
  kn: string
}

export interface AcademicSource {
  author: string
  title: string
  publication: string
  year: number | string
  publisher?: string
  doiOrUrl?: string
  annotation: LocalizedText
}

export interface SmritiEntry {
  id: string
  subsectionId: SmritiSubsectionId
  title: LocalizedText
  timeframe: string
  location: LocalizedText
  evidenceLabel: EvidenceLabel
  summary: LocalizedText
  historicalContext: LocalizedText
  primarySourcesAndRecords?: LocalizedText
  scholarlyAnalysisAndDebates?: LocalizedText
  resistanceAndSurvival?: LocalizedText
  // For modern documented cases (e.g. Bangladesh timeline)
  verifiedDetails?: {
    date: string
    reportedCasualtiesOrDamage: LocalizedText
    investigationStatus: LocalizedText
    verificationStatus: 'Confirmed' | 'Disputed' | 'Under Investigation'
  }
  sources: AcademicSource[]
}
