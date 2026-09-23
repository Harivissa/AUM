export type EvidenceStatus =
  | 'DOCUMENTED'
  | 'CORROBORATED'
  | 'PRIMARY SOURCE'
  | 'SURVIVOR TESTIMONY'
  | 'ARCHIVAL RECORD'
  | 'ACADEMIC CONSENSUS'
  | 'ARCHAEOLOGICALLY SUPPORTED'
  | 'ACADEMICALLY DOCUMENTED'
  | 'GOVERNMENT RECORD'
  | 'COURT RECORD'
  | 'PARTIALLY DOCUMENTED'
  | 'DISPUTED'
  | 'INSUFFICIENT EVIDENCE'

export type ResearchStatus =
  | 'VERIFIED'
  | 'UNDER REVIEW'
  | 'SOURCE NEEDED'
  | 'DISPUTED'
  | 'INSUFFICIENT EVIDENCE'

export type IncidentType =
  | 'ATTACKS'
  | 'PERSECUTION'
  | 'TEMPLE DESTRUCTION'
  | 'MASSACRES'
  | 'FORCED CONVERSION'
  | 'DISPLACEMENT'
  | 'EXODUS'
  | 'PARTITION'
  | 'HERITAGE DESTRUCTION'
  | 'SURVIVOR ACCOUNTS'
  | 'RECONSTRUCTION'
  | 'MEMORIALS'

export type MotiveType =
  | 'religious motive'
  | 'political motive'
  | 'military motive'
  | 'economic motive'
  | 'community conflict'
  | 'mixed motives'
  | 'uncertain'

export type TimelinePeriod =
  | 'Ancient'
  | 'Early Medieval'
  | 'Medieval'
  | 'Early Modern'
  | 'Colonial'
  | 'Partition'
  | 'Post-Independence'
  | 'Contemporary'

export type ArchivalMediaType =
  | 'photograph'
  | 'temple_photo'
  | 'document'
  | 'newspaper'
  | 'map'
  | 'manuscript'
  | 'survivor_record'
  | 'court_record'
  | 'memorial_photo'
  | 'reconstruction_photo'
  | 'archaeological_drawing'

export interface ArchivalRecord {
  type: ArchivalMediaType
  caption: string
  sourceProvenance: string
  imageUrl?: string
  isPendingSource?: boolean
  labelBadge: string
  catalogueNumber: string
  rightsOrLicense?: string
  date?: string
  creatorOrPhotographer?: string
  confidence?: 'High' | 'Medium' | 'Pending Verification'
}

export interface SurvivorAccount {
  narrator: string
  context: string
  excerpt: string
  citation: string
  yearOrDate?: string
}

export interface StructuredSource {
  title: string
  author?: string
  institution?: string
  publicationYear?: number | string
  sourceType: 'PRIMARY SOURCE' | 'ARCHIVAL RECORD' | 'GOVERNMENT / COURT' | 'ARCHAEOLOGICAL' | 'ACADEMIC BOOK / PAPER' | 'CONTEMPORARY PRESS' | 'SURVIVOR ARCHIVE'
  url?: string
  page?: string
  quotationOrPassage?: string
  accessedDate?: string
  reliabilityNotes?: string
}

export interface LegacySources {
  primary?: string[]
  archival?: string[]
  governmentOrCourt?: string[]
  academic?: string[]
  archaeological?: string[]
}

export interface CasualtiesFigure {
  displaySummary: string
  deaths?: string
  injuries?: string
  displaced?: string
  sourceA?: { estimate: string; source: string }
  sourceB?: { estimate: string; source: string }
  explanationOfDifference?: string
}

export type SpecialCollectionId =
  | 'TEMPLE_DESTRUCTION'
  | 'MASSACRES'
  | 'ATTACKS_ON_HINDU_COMMUNITIES'
  | 'FORCED_CONVERSION'
  | 'DISPLACEMENT_EXODUS'
  | 'EXODUS'
  | 'PARTITION'
  | 'KASHMIRI_PANDITS'
  | 'BANGLADESH_HINDUS'
  | 'PAKISTAN_HINDUS'
  | 'AFGHAN_HINDUS'
  | 'GOA_INQUISITION'
  | 'COLONIAL_MISSIONARY_PRESSURES'
  | 'HERITAGE_LIBRARY_DESTRUCTION'
  | 'SURVIVOR_TESTIMONY'
  | 'MISSING_LOST_HERITAGE'
  | 'MODERN_INCIDENTS'
  | 'RECONSTRUCTION_SURVIVAL'
  | 'MEMORIALS'

export interface SpecialCollectionMeta {
  id: SpecialCollectionId
  label: string
  sanskritLabel?: string
  description: string
  filterPredicate: (item: SmritiCase) => boolean
}

export interface SmritiCase {
  id: string
  catalogueCode: string
  title: string
  sanskritTitle?: string
  alternateTitles?: string[]
  location: string
  region: string
  country: string
  coordinates: { lat: number; lng: number }
  startDate: string
  endDate?: string
  dateDisplay: string
  timelinePeriod: TimelinePeriod
  incidentType: IncidentType
  motive: MotiveType
  evidenceStatus: EvidenceStatus
  researchStatus: ResearchStatus
  affectedCommunity: string
  summary: string
  whatHappened: string
  whoWasAffected: string
  whereText: string
  whenText: string
  whatWasLost: string
  casualties?: CasualtiesFigure
  propertyLoss?: string
  heritageLoss?: string
  displacement?: string
  responsibility: string
  aftermath: string
  reconstruction: string
  archivalItem: ArchivalRecord
  additionalArchivalRecords?: ArchivalRecord[]
  survivorAccounts?: SurvivorAccount[]
  sources: LegacySources
  detailedSources?: StructuredSource[]
  specialCollections?: SpecialCollectionId[]
  relatedCaseIds?: string[]
}
