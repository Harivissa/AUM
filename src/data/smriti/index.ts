import { SmritiCase, SpecialCollectionMeta, SpecialCollectionId } from './types'
import { CASES_ANCIENT_MEDIEVAL } from './casesAncientMedieval'
import { CASES_EARLY_MODERN } from './casesEarlyModern'
import { CASES_COLONIAL } from './casesColonial'
import { CASES_PARTITION } from './casesPartition'
import { CASES_POST_INDEPENDENCE } from './casesPostIndependence'
import { CASES_CONTEMPORARY } from './casesContemporary'

export * from './types'
export * from './casesAncientMedieval'
export * from './casesEarlyModern'
export * from './casesColonial'
export * from './casesPartition'
export * from './casesPostIndependence'
export * from './casesContemporary'

export const SMRITI_CASES: SmritiCase[] = [
  ...CASES_ANCIENT_MEDIEVAL,
  ...CASES_EARLY_MODERN,
  ...CASES_COLONIAL,
  ...CASES_PARTITION,
  ...CASES_POST_INDEPENDENCE,
  ...CASES_CONTEMPORARY
]

export const SPECIAL_COLLECTIONS: SpecialCollectionMeta[] = [
  {
    id: 'TEMPLE_DESTRUCTION',
    label: 'Temple Destruction',
    sanskritLabel: 'मन्दिरभङ्गः',
    description: 'Documented destructions, desecrations, and architectural conversions of sacred Hindu shrines and Jyotirlingas.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('TEMPLE_DESTRUCTION') || c.incidentType === 'TEMPLE DESTRUCTION')
  },
  {
    id: 'MASSACRES',
    label: 'Massacres & Carnage',
    sanskritLabel: 'नरसंहारः',
    description: 'Documented mass killings, pogroms, and targeted attacks on Hindu civilian communities.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('MASSACRES') || c.incidentType === 'MASSACRES')
  },
  {
    id: 'ATTACKS_ON_HINDU_COMMUNITIES',
    label: 'Attacks on Communities',
    sanskritLabel: 'समुदायाक्रमणानि',
    description: 'Direct assaults, riots, and coordinated attacks targeting Hindu localities and festivals.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('ATTACKS_ON_HINDU_COMMUNITIES') || c.incidentType === 'ATTACKS')
  },
  {
    id: 'FORCED_CONVERSION',
    label: 'Forced Conversion',
    sanskritLabel: 'बलोपादानम्',
    description: 'Documented episodes of coercive conversions, inquisitorial edicts, and institutional abductions.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('FORCED_CONVERSION') || c.incidentType === 'FORCED CONVERSION')
  },
  {
    id: 'DISPLACEMENT_EXODUS',
    label: 'Displacement & Exodus',
    sanskritLabel: 'निष्कासनम् विस्थापनं च',
    description: 'Forced migrations, ethnic expulsions, and refugee corridors across South Asia and abroad.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('DISPLACEMENT_EXODUS') || c.specialCollections?.includes('EXODUS') || c.incidentType === 'DISPLACEMENT' || c.incidentType === 'EXODUS')
  },
  {
    id: 'PARTITION',
    label: 'Partition Suffering (1947)',
    sanskritLabel: 'भारतविभाजनम्',
    description: 'The monumental violence, train massacres, and uprooting of millions across Punjab, Sindh, and Bengal.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('PARTITION') || c.timelinePeriod === 'Partition' || c.incidentType === 'PARTITION')
  },
  {
    id: 'KASHMIRI_PANDITS',
    label: 'Kashmiri Pandits',
    sanskritLabel: 'काश्मीरपण्डिताः',
    description: 'The targeted assassinations, massacres, and forced exile of the indigenous Hindu guardians of Kashmir.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('KASHMIRI_PANDITS') || c.region.toLowerCase().includes('kashmir'))
  },
  {
    id: 'BANGLADESH_HINDUS',
    label: 'Bangladesh Hindus',
    sanskritLabel: 'वङ्गदेशीय-हिन्दवः',
    description: 'Documented genocide in 1971, pogroms in 1950, and continuing systemic vulnerability across East Bengal.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('BANGLADESH_HINDUS') || c.country === 'Bangladesh' || c.region.includes('Bengal'))
  },
  {
    id: 'PAKISTAN_HINDUS',
    label: 'Pakistan Hindus',
    sanskritLabel: 'पाकिस्थान-हिन्दवः',
    description: 'The historical and contemporary persecution, abductions, and shrines in Sindh, Punjab, and Balochistan.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('PAKISTAN_HINDUS') || c.country === 'Pakistan')
  },
  {
    id: 'AFGHAN_HINDUS',
    label: 'Afghan Hindus & Sikhs',
    sanskritLabel: 'अफगानिस्थान-हिन्दवः',
    description: 'The near-extinction of ancient Hindu and Sikh populations from Kabul, Kandahar, and Jalalabad.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('AFGHAN_HINDUS') || c.country === 'Afghanistan')
  },
  {
    id: 'GOA_INQUISITION',
    label: 'Goa Inquisition',
    sanskritLabel: 'गोवा-धर्मप्राधिकरणम्',
    description: 'Edicts of the Portuguese Holy Office, temple demolitions, and criminalization of Hindu rites.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('GOA_INQUISITION') || c.region.includes('Konkan') || c.location.includes('Goa'))
  },
  {
    id: 'COLONIAL_MISSIONARY_PRESSURES',
    label: 'Colonial Pressures',
    sanskritLabel: 'औपनिवेशिक-दबावः',
    description: 'Administrative interference, pilgrim taxes, and missionary pressures under European colonial rule.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('COLONIAL_MISSIONARY_PRESSURES') || c.timelinePeriod === 'Colonial')
  },
  {
    id: 'HERITAGE_LIBRARY_DESTRUCTION',
    label: 'Heritage & Library Loss',
    sanskritLabel: 'ग्रन्थागार-ज्ञानविनाशः',
    description: 'Burning of ancient universities, loss of Sanskrit manuscripts, and destruction of architectural wonders.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('HERITAGE_LIBRARY_DESTRUCTION') || c.incidentType === 'HERITAGE DESTRUCTION')
  },
  {
    id: 'SURVIVOR_TESTIMONY',
    label: 'Survivor Testimony',
    sanskritLabel: 'प्रत्यक्षदर्शि-साक्ष्यम्',
    description: 'Firsthand oral histories and depositions from survivors of Partition, 1971, Kashmir, and refugee transit.',
    filterPredicate: (c) => Boolean((c.survivorAccounts && c.survivorAccounts.length > 0) || c.specialCollections?.includes('SURVIVOR_TESTIMONY'))
  },
  {
    id: 'MISSING_LOST_HERITAGE',
    label: 'Lost & Inaccessible Shrines',
    sanskritLabel: 'विलुप्त-तीर्थानि',
    description: 'Sacred sites severed by borders or remaining in state of ruin (Sharada Peeth, Hinglaj, etc.).',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('MISSING_LOST_HERITAGE') || c.id.includes('sharada'))
  },
  {
    id: 'MODERN_INCIDENTS',
    label: 'Modern Incidents',
    sanskritLabel: 'समकालीन-घटनाः',
    description: 'Evidence-verified contemporary attacks, terrorism, and ongoing legal/human rights inquiries.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('MODERN_INCIDENTS') || c.timelinePeriod === 'Contemporary')
  },
  {
    id: 'RECONSTRUCTION_SURVIVAL',
    label: 'Survival & Reconstruction',
    sanskritLabel: 'पुनरुद्धारः संजीवनं च',
    description: 'The monumental resurgence: Ahilyabai Holkar’s movement, Somnath, Ayodhya, and memorial museums.',
    filterPredicate: (c) => Boolean(c.specialCollections?.includes('RECONSTRUCTION_SURVIVAL') || c.specialCollections?.includes('MEMORIALS') || c.incidentType === 'RECONSTRUCTION' || c.incidentType === 'MEMORIALS')
  }
]

export interface SmritiMetrics {
  totalCases: number
  archivalRecordsCount: number
  primarySourcesCount: number
  survivorAccountsCount: number
  templeDestructionsCount: number
  uniqueRegionsCount: number
  casesUnderReviewCount: number
}

export function calculateSmritiMetrics(cases: SmritiCase[] = SMRITI_CASES): SmritiMetrics {
  const totalCases = cases.length

  let archivalRecordsCount = 0
  let primarySourcesCount = 0
  let survivorAccountsCount = 0
  let templeDestructionsCount = 0
  let casesUnderReviewCount = 0
  const uniqueRegions = new Set<string>()

  for (const c of cases) {
    if (c.archivalItem) archivalRecordsCount += 1
    if (c.additionalArchivalRecords) archivalRecordsCount += c.additionalArchivalRecords.length
    if (c.sources?.primary) primarySourcesCount += c.sources.primary.length
    if (c.survivorAccounts) survivorAccountsCount += c.survivorAccounts.length
    if (c.incidentType === 'TEMPLE DESTRUCTION' || c.specialCollections?.includes('TEMPLE_DESTRUCTION')) {
      templeDestructionsCount += 1
    }
    if (c.researchStatus === 'UNDER REVIEW' || c.researchStatus === 'SOURCE NEEDED') {
      casesUnderReviewCount += 1
    }
    if (c.region) uniqueRegions.add(c.region)
    if (c.country) uniqueRegions.add(c.country)
  }

  return {
    totalCases,
    archivalRecordsCount,
    primarySourcesCount,
    survivorAccountsCount,
    templeDestructionsCount,
    uniqueRegionsCount: uniqueRegions.size,
    casesUnderReviewCount
  }
}
