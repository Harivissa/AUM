import { SmritiCase } from './types'

export const CASES_POST_INDEPENDENCE: SmritiCase[] = [
  {
    id: 'case-bangladesh-genocide-1971',
    catalogueCode: 'SMR-BD-1971',
    title: '1971 Bangladesh Genocide: Targeted Slaughter of the Hindu Minority',
    sanskritTitle: 'पूर्वपाकिस्ताने हिन्दुसंहारः चुनगरकाण्डम् च (१९७१)',
    alternateTitles: ['1971 East Pakistan Genocide', 'Operation Searchlight Hindu Victims'],
    location: 'Dhaka, Chuknagar, Khulna, Jessore, Sylhet',
    region: 'East Bengal',
    country: 'Bangladesh (then East Pakistan)',
    coordinates: { lat: 23.8103, lng: 90.4125 },
    startDate: 'March 1971',
    endDate: 'December 1971',
    dateDisplay: 'March – December 1971 (Chuknagar: 20 May 1971)',
    timelinePeriod: 'Post-Independence',
    incidentType: 'MASSACRES',
    motive: 'political motive',
    evidenceStatus: 'PRIMARY SOURCE',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The Bengali Hindu population of East Pakistan',
    summary: 'The Pakistan military’s Operation Searchlight and nine-month genocide specifically targeting the Hindu minority, including the slaughter of 8,000+ refugees at Chuknagar in five hours.',
    whatHappened: 'In 1971, the Pakistan military and auxiliary militias (Razakars, Al-Badr) launched systematic extermination operations across East Pakistan. US Consul General Archer Blood warned in the famous \'Blood Telegram\' that the Hindu minority was the specific target. In Dhaka, Jagannath Hall (Hindu dormitory) was shelled. On 20 May 1971 at Chuknagar border transit point, troops surrounded thousands of fleeing Hindu refugees and killed an estimated 8,000 to 10,000 people in a single day.',
    whoWasAffected: 'Millions of Bengali Hindu villagers, students, intellectuals, and artisans who formed the overwhelming majority of the 10 million refugees fleeing into India.',
    whereText: 'Chuknagar (Khulna district), Jagannath Hall (Dhaka University), Shankharipara (Dhaka), and border transit corridors.',
    whenText: 'March to December 1971; Chuknagar massacre on 20 May 1971.',
    whatWasLost: 'An estimated 1 to 3 million total victims in Bangladesh; independent diplomatic observers documented that 60% to 80% of victims were Hindus; demolition of hundreds of temples.',
    casualties: {
      displaySummary: 'Total genocide casualties range from 1 to 3 million; US diplomatic reports and international observers noted that 60% to 80% of refugees and victims were Hindus.',
      deaths: '1,000,000 to 3,000,000 across East Pakistan; vast majority Hindu civilians',
      displaced: 'Over 10 million refugees fled to India (estimated 80% Hindu)',
      sourceA: { estimate: 'Declassified US State Dept cables: "Genocide against Bengali Hindus is being conducted with calculated brutality"', source: 'Archer Blood, The Blood Telegram (April 1971)' },
      sourceB: { estimate: 'Report to US Senate Judiciary: "Field evidence indicates the Hindu population is bearing the brunt of the military fury"', source: 'Senator Edward Kennedy, Crisis in South Asia (November 1971)' },
      explanationOfDifference: 'Blood documented real-time military communications in Dhaka; Kennedy conducted field audits across refugee camps in West Bengal, Tripura, and Assam.'
    },
    propertyLoss: 'Widespread confiscation of Hindu agricultural land under the Enemy Property Act (later Vested Property Act).',
    heritageLoss: 'Demolition of historic temples including Ramna Kali Mandir and hundreds of village shrines.',
    responsibility: 'Pakistan Army Eastern Command (under Lt. Gen. A.A.K. Niazi & Gen. Tikka Khan) and local auxiliary militias. Verified by international war crimes documentation.',
    aftermath: 'The genocide ended with the surrender of the Pakistan Army on 16 December 1971. Millions of refugees returned, though ongoing discrimination under the Vested Property Act caused continued demographic decline.',
    reconstruction: 'Chuknagar Shaheed Smriti Stambha memorial was erected along the Bhadra river; community organizations continue annual remembrance every May 20.',
    archivalItem: {
      type: 'newspaper',
      caption: 'The New York Times front-page dispatches by Sydney Schanberg reporting targeted killings of Hindus in East Bengal, 1971.',
      sourceProvenance: 'The New York Times Archival Dispatches, June 1971',
      imageUrl: '/src/assets/images/ancient_civilization_1789922376812.jpg',
      labelBadge: 'DECLASSIFIED US STATE DEPT & NYT RECORD',
      catalogueNumber: 'USD-TEL-BLD-1971',
      rightsOrLicense: 'Fair Use / The New York Times Archive',
      date: '1971'
    },
    survivorAccounts: [
      {
        narrator: 'Sudhir Kumar Das (Survivor of Chuknagar Massacre)',
        context: 'Eyewitness testimony recorded by Chuknagar Shaheed Smriti Trust',
        excerpt: '"The sound of gunfire began around ten in the morning and did not stop until afternoon. I dove into the water hyacinths by the riverbank with my five-year-old sister. When the soldiers left, the river was completely still, covered in white dhotis and red sarees. The local villagers spent three days throwing bodies into the current because there was no ground left to bury them."',
        citation: 'Chuknagar Shaheed Smriti Trust Oral Records; Muntassir Mamoon, Chuknagar Genocide 1971'
      }
    ],
    sources: {
      primary: [
        'The Blood Telegram (Declassified US State Department Diplomatic Cables, April 1971)',
        'Senator Edward Kennedy, \'Crisis in South Asia\' (Report to US Senate Judiciary Committee, 1 November 1971)',
        'Sydney Schanberg, Dispatches in The New York Times (1971)',
        'Hamoodur Rahman Commission Report (Government of Pakistan)'
      ],
      academic: [
        'Gary J. Bass, The Blood Telegram: Nixon, Kissinger, and a Forgotten Genocide',
        'Muntassir Mamoon, Chuknagar Genocide 1971',
        'R.J. Rummel, Death by Government'
      ]
    },
    specialCollections: ['MASSACRES', 'BANGLADESH_HINDUS', 'DISPLACEMENT_EXODUS', 'SURVIVOR_TESTIMONY']
  },
  {
    id: 'case-ramna-kali-mandir-1971',
    catalogueCode: 'SMR-BD-1971R',
    title: 'Demolition of Ramna Kali Mandir & Massacre in Dhaka',
    sanskritTitle: 'रमना-कालीमन्दिरध्वंसः ढाका-नरसंहारश्च (१९७१)',
    alternateTitles: ['Ramna Kali Temple Massacre', 'Destruction of Ramna Temple'],
    location: 'Ramna Racecourse, Dhaka',
    region: 'Dhaka',
    country: 'Bangladesh (then East Pakistan)',
    coordinates: { lat: 23.738, lng: 90.398 },
    startDate: '27 March 1971',
    dateDisplay: '27 March 1971 (Rebuilt 2021)',
    timelinePeriod: 'Post-Independence',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'political motive',
    evidenceStatus: 'PRIMARY SOURCE',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The resident sadhus, devotees, temple servitors, and civilian refugees sheltered inside',
    summary: 'The Pakistan military’s artillery assault, leveling, and burning of the historic 250-year-old Ramna Kali Temple, alongside the slaughter of over 100 sadhus and civilian refugees on the second night of Operation Searchlight.',
    whatHappened: 'On the night of 27 March 1971, Pakistani army tanks and infantry surrounded the historic Ramna Kali Mandir (established in the 17th century by the Shankaracharya sampradaya). Troops entered the compound, gathered the chief priest Swami Paramananda Giri, ashram inmates, and hundreds of neighborhood civilians who had taken refuge inside. Sourced in official Bangladesh inquiry commission reports, the soldiers shot the inmates, dumped bodies into burning pyres, and deployed high-explosive charges to flatten the 120-foot tall temple shikhara.',
    whoWasAffected: 'The monastic community of Ramna ashram, hereditary priests, and over 100 civilian refugees.',
    whereText: 'Ramna Race Course (now Suhrawardy Udyan), Central Dhaka, Bangladesh.',
    whenText: 'Night of 27 March 1971, approximately 2:00 AM.',
    whatWasLost: 'The monumental 250-year-old temple shikhara, ancient consecrated murti of Ma Bhadrakali, ashram library, and over 100 human lives.',
    casualties: {
      displaySummary: 'Over 100 sadhus, priests, and civilian refugees slaughtered inside the temple precinct.',
      deaths: '100+ documented killings in inquiry records',
      sourceA: { estimate: '85 to 100 bodies recovered and burned by troops', source: 'Justice K.M. Sobhan Public Inquiry Commission Report (2000)' },
      sourceB: { estimate: 'Over 200 devotees and neighborhood residents killed', source: 'Ramna Kali Mandir Managing Committee Archive' }
    },
    propertyLoss: 'Total demolition of the temple structure, guest quarters, and Anandamayi Ma Ashram adjoining the site.',
    heritageLoss: 'One of the most prominent historic Hindu architectural landmarks in Dhaka completely leveled to the ground.',
    responsibility: 'Pakistan Army Eastern Command detachments executing Operation Searchlight.',
    aftermath: 'The site was cleared and turned into an open lawn; worship was prohibited for decades on the land.',
    reconstruction: 'In 2021, with support from the Government of India, the reconstructed Sri Ramna Kali Mandir was completed and inaugurated on 17 December 2021 by the President of India, Shri Ram Nath Kovind.',
    archivalItem: {
      type: 'photograph',
      caption: 'Historic photograph of the soaring 120-foot shikhara of Ramna Kali Mandir prior to its 1971 demolition by the Pakistan Army.',
      sourceProvenance: 'National Archives of Bangladesh & Ramna Kali Mandir Trust Archive',
      imageUrl: '/src/assets/images/sacred_temple_1789619561869.jpg',
      labelBadge: 'HISTORICAL ARCHIVE & INQUIRY RECORD',
      catalogueNumber: 'NAB-DHK-RKM-1971',
      rightsOrLicense: 'Public Domain / Bangladesh National Archives',
      date: 'c. 1965'
    },
    sources: {
      primary: [
        'Report of the Public Inquiry Commission on the Destruction of Ramna Kali Temple (chaired by Justice K.M. Sobhan, 2000)',
        'Eyewitness testimony of Srimati Shreemati Rani, surviving widow of the priest'
      ],
      academic: [
        'Muntassir Mamoon, Dhaka: Smriti Bismritir Nagari (Dhaka: City of Memories and Forgetfulness)',
        'Gary J. Bass, The Blood Telegram'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'MASSACRES', 'BANGLADESH_HINDUS', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-marichjhapi-1979',
    catalogueCode: 'SMR-WB-1979',
    title: 'The Marichjhapi Massacre & Eviction of Dalit Hindu Refugees',
    sanskritTitle: 'मरीचझाँपी-नरसंहारः शरणार्थिनां निष्कासनम् च (१९७९)',
    alternateTitles: ['Marichjhapi Island Massacre', 'Sundarbans Refugee Eviction'],
    location: 'Marichjhapi Island, Sundarbans',
    region: 'South 24 Parganas, West Bengal',
    country: 'India',
    coordinates: { lat: 22.2, lng: 88.9 },
    startDate: 'January 1979',
    endDate: 'May 1979',
    dateDisplay: 'January – May 1979',
    timelinePeriod: 'Post-Independence',
    incidentType: 'MASSACRES',
    motive: 'political motive',
    evidenceStatus: 'ACADEMICALLY DOCUMENTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'East Bengali Dalit Hindu (Namasudra) refugees resettled in Dandakaranya',
    summary: 'The violent police blockade, tear-gassing, firing, and economic siege on Marichjhapi island in the Sundarbans, evicting over 30,000 East Bengali Dalit Hindu refugees who had established self-sufficient settlements.',
    whatHappened: 'Tens of thousands of East Bengali Dalit Hindu refugees, who had been forcibly relocated to the inhospitable Dandakaranya camps in central India, returned to West Bengal in 1978 and settled peacefully on uninhabited Marichjhapi island in the Sundarbans. In January 1979, the West Bengal state government declared the settlement illegal under forest laws. A total police boat blockade was enforced, cutting off drinking water and food. On 13–16 May 1979, armed police and political cadres conducted a final clearing operation, involving firing, burning of huts, and forced deportation back to Dandakaranya.',
    whoWasAffected: 'Approximately 30,000 to 40,000 Dalit Hindu (Namasudra) refugee men, women, and children.',
    whereText: 'Marichjhapi Island, Sundarbans Reserve Forest, West Bengal, India.',
    whenText: 'January to May 1979 (peak violence: 13–16 May 1979).',
    whatWasLost: 'Dozens to hundreds of refugee lives lost to starvation, dehydration, and police firing; total destruction of schools, clinics, and fisheries built by the refugees.',
    casualties: {
      displaySummary: 'Casualty figures are fiercely contested due to state media blackout; academic studies estimate several hundred to thousands of refugee deaths from shooting, cholera, and drowning.',
      deaths: 'Estimates range from dozens (official) to hundreds or thousands (survivor and scholarly)',
      displaced: 'Over 30,000 refugees forcibly deported back to Dandakaranya or dispersed',
      sourceA: { estimate: 'Official government statement recorded two deaths from police firing', source: 'West Bengal Legislative Assembly Proceedings (May 1979)' },
      sourceB: { estimate: 'Hundreds of deaths from firing, starvation, and bodies thrown into tidal rivers', source: 'Ross Mallick, Refugee Resettlement in Forest Reserves: West Bengal Policy towards Marichjhapi (1999)' },
      explanationOfDifference: 'The state government enforced a strict media and visitor cordon around the island; independent researchers and survivor testimonies documented mass casualties during the final eviction.'
    },
    propertyLoss: 'Destruction of refugee-built schools, tube-wells, fishing boats, and salt-pans.',
    responsibility: 'West Bengal state police and ruling political party cadres enforcing the eviction order.',
    aftermath: 'Surviving refugees were scattered across India, their self-reliant communal experiment destroyed.',
    reconstruction: 'The event became a landmark symbol in Dalit literature and Bengali historiography, commemorating the betrayal of marginalized refugees.',
    archivalItem: {
      type: 'newspaper',
      caption: 'Ananda Bazar Patrika and Jugantar contemporary reports on the Marichjhapi blockade, April–May 1979.',
      sourceProvenance: 'Centre for Studies in Social Sciences Calcutta (CSSSC) Archive',
      imageUrl: '/src/assets/images/flame_continues_child_1789923893840.jpg',
      labelBadge: 'NEWSPAPER & SOCIAL SCIENCE ARCHIVE',
      catalogueNumber: 'CSSSC-MCJ-1979',
      rightsOrLicense: 'Fair Use / Educational Archive',
      date: '1979'
    },
    sources: {
      primary: [
        'West Bengal Legislative Assembly Debates (1979)',
        'Contemporary investigative dispatches by Jyotirmoy Datta in Sunday magazine (1979)'
      ],
      academic: [
        'Ross Mallick, Refugee Resettlement in Forest Reserves: West Bengal Policy towards Victims of Partition (Journal of Asian Studies, 1999)',
        'Anu Muhammad, History of Marichjhapi',
        'Deep Halder, Blood Island: An Oral History of the Marichjhapi Massacre (2019)'
      ]
    },
    specialCollections: ['MASSACRES', 'DISPLACEMENT_EXODUS', 'BANGLADESH_HINDUS', 'SURVIVOR_TESTIMONY']
  },
  {
    id: 'case-anantnag-temples-1986',
    catalogueCode: 'SMR-KM-1986',
    title: '1986 Kashmir Valley Riots & Temple Desecrations',
    sanskritTitle: 'काश्मीर-अनन्तनाग-हिंसाकाण्डः मन्दिरभङ्गश्च (१९८६)',
    alternateTitles: ['1986 Anantnag Riots', 'Precursor to Kashmiri Pandit Exodus'],
    location: 'Anantnag, Sopore, Baramulla, Srinagar',
    region: 'Kashmir Valley',
    country: 'India',
    coordinates: { lat: 33.7311, lng: 75.1522 },
    startDate: 'February 1986',
    dateDisplay: 'February 1986',
    timelinePeriod: 'Post-Independence',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'community conflict',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The Kashmiri Pandit minority community across southern Kashmir',
    summary: 'A coordinated wave of violence across Anantnag, Sopore, and rural Kashmir resulting in the burning and desecration of over 40 Hindu temples and looting of hundreds of homes, recognized as the direct psychological turning point towards the 1990 exodus.',
    whatHappened: 'In February 1986, following political agitation surrounding the Babri dispute, organized mobs in southern Kashmir targeted the minority Hindu population. In Anantnag (Islamabad), Vanpoh, Lukbawan, and Fatehpur, mobs set fire to ancient temples, dharamsalas, and community properties. Official administrative inquiry records confirm that dozens of shrines were desecrated and hundreds of homes were looted while local police largely remained passive spectators.',
    whoWasAffected: 'Kashmiri Pandit families in rural villages of Anantnag, Pulwama, and Baramulla districts.',
    whereText: 'Anantnag, Vanpoh, Mattan, Sopore, and Srinagar, Jammu and Kashmir, India.',
    whenText: 'February 1986.',
    whatWasLost: 'Over 40 Hindu temples burned or damaged; destruction of murtis, sacred texts, and family homes.',
    casualties: {
      displaySummary: 'Dozens of injured civilians; hundreds of families suffered property looting and temporary displacement.',
      displaced: 'Hundreds fled to Jammu or Srinagar in distress'
    },
    propertyLoss: 'Hundreds of shops, apple orchards, and ancestral wooden homes set ablaze.',
    heritageLoss: 'Desecration of centuries-old village tirthas and cremation ghats across southern Kashmir.',
    responsibility: 'Local extremist mobs mobilized by communal political factions. Documented in J&K Government administrative inquiries.',
    aftermath: 'The state government dismissed the ministry of Ghulam Mohammad Shah in March 1986 and Governor’s Rule was imposed under Jagmohan.',
    reconstruction: 'While some temples were repaired with government grants, the psychological trauma convinced many families that life in the Valley was precarious, directly presaging the mass exodus of 1990.',
    archivalItem: {
      type: 'document',
      caption: 'Official administrative list of damaged temples in Anantnag district submitted to the J&K Home Department, March 1986.',
      sourceProvenance: 'Jammu & Kashmir Government Administrative Records & Kashmiri Pandit Action Committee Dossier',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'GOVERNMENT INQUIRY DOSSIER',
      catalogueNumber: 'JKG-HOM-ANT-1986',
      rightsOrLicense: 'Public Domain / J&K Government',
      date: '1986'
    },
    sources: {
      primary: [
        'Jammu & Kashmir Government Home Department Administrative Inquiry Reports (1986)',
        'Jagmohan, My Frozen Turbulence in Kashmir (Allied Publishers, 1991)'
      ],
      academic: [
        'M.K. Teng, Kashmir: Myth and Reality',
        'Rahul Pandita, Our Moon Has Blood Clots'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'KASHMIRI_PANDITS', 'ATTACKS_ON_HINDU_COMMUNITIES']
  }
]
