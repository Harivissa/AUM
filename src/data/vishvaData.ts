export type ConfidenceLabel =
  | 'Primary source'
  | 'Scholarly research'
  | 'Archaeological evidence'
  | 'Census data'
  | 'Historical tradition'
  | 'Reported claim'
  | 'Disputed'
  | 'Insufficient evidence'
  | 'Requires verification'

export type HistoricalClassification =
  | 'Hindu'
  | 'Hindu-Buddhist'
  | 'Buddhist'
  | 'Multi-religious'
  | 'Hindu cultural influence'
  | 'Hindu migrant or merchant settlement'
  | 'Traditional or legendary connection'

export interface SourceReference {
  title: string
  authorOrBody: string
  yearOrPeriod: string
  evidenceType: 'Census' | 'Epigraphy' | 'Archaeology' | 'Scholarly Monograph' | 'Textual Tradition' | 'Government Statistical Bureau'
  confidence: ConfidenceLabel
  notes?: string
}

export interface CountryHinduProfile {
  id: string
  name: string
  sanskritName: string
  region: 'South Asia' | 'Southeast Asia' | 'East Asia' | 'Middle East' | 'Africa' | 'Europe' | 'Americas' | 'Oceania'
  coordinates: [number, number] // [lng, lat] for map
  estimatedPopulation: string
  percentageOfPopulation: string
  dataYear: string
  dataConfidence: ConfidenceLabel
  dataSource: SourceReference
  majorCities: string[]
  keyTemples: string[]
  majorOrganizations: string[]
  historicalPresenceSummary: string
  migrationHistorySummary: string
  historicalKingdoms?: {
    name: string
    period: string
    classification: HistoricalClassification
    capital?: string
    notableRulersOrSites: string
    primarySources: string
    evidenceConfidence: ConfidenceLabel
  }[]
  sacredSitesOrInscriptions?: string[]
}

export interface HistoricalRegionData {
  id: string
  regionName: string
  modernCountries: string[]
  period: string
  classification: HistoricalClassification
  description: string
  notableDynasties: string[]
  keySitesAndInscriptions: string[]
  sources: SourceReference[]
  significance: string
}

export interface MigrationEra {
  id: string
  eraName: string
  timePeriod: string
  title: string
  summary: string
  keyDestinations: string[]
  tradeRoutesOrAgreements: string
  culturalImpact: string
  sources: SourceReference[]
}

export interface CommunityDirectoryItem {
  id: string
  name: string
  category: 'Temple' | 'Cultural Association' | 'Study Group' | 'Seva Organization' | 'Youth Group' | 'Sampradāya Community' | 'Language Community'
  country: string
  city: string
  coordinates?: [number, number] // [lng, lat]
  foundedYear?: string
  traditionOrFocus: string
  description: string
  verifiedStatus: 'Verified' | 'Community Reported' | 'Under Review'
}

export interface GeoMigrationRoute {
  id: string
  eraId: 'ancient-ocean' | 'colonial-indenture' | 'modern-global'
  eraTitle: string
  title: string
  timePeriod: string
  origin: string
  destination: string
  waypoints: [number, number][] // [lat, lng] for Leaflet
  vesselOrType?: string
  significance: string
  keyPortsOrStops: string[]
  evidenceConfidence: ConfidenceLabel
  sourcesSummary: string
}

export interface CommunityComment {
  id: string
  countryId: string
  author: string
  location: string
  contributionType: 'Local History' | 'Migration Story' | 'Temple Suggestion' | 'Correction' | 'Source Citation'
  text: string
  date: string
  isTraditionOrHistory: 'Personal / Family Tradition' | 'Documented History with Sources'
  sourceCitation?: string
  status: 'Published' | 'Reported' | 'Pending Review'
}

export const COUNTRIES_HINDU_DATA: CountryHinduProfile[] = [
  {
    id: 'in',
    name: 'India',
    sanskritName: 'भारतवर्षम्',
    region: 'South Asia',
    coordinates: [78.96, 20.59],
    estimatedPopulation: '1,090,000,000 - 1,120,000,000',
    percentageOfPopulation: '79.8%',
    dataYear: '2011 Census / 2023 Projections',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Census of India (Office of the Registrar General & Census Commissioner)',
      authorOrBody: 'Ministry of Home Affairs, Government of India & Pew Research',
      yearOrPeriod: '2011 / 2021-2023',
      evidenceType: 'Census',
      confidence: 'Census data',
      notes: 'Decennial census verified demographic surveys.'
    },
    majorCities: ['Varanasi', 'Ayodhya', 'Kanchipuram', 'Madurai', 'Ujjain', 'Puri', 'Haridwar', 'Mathura', 'Tirupati'],
    keyTemples: ['Kashi Vishwanath', 'Tirumala Venkateswara', 'Meenakshi Amman', 'Jagannath Puri', 'Somnath', 'Ramanathaswamy'],
    majorOrganizations: ['Ramakrishna Mission', 'Chinmaya Mission', 'ISKCON', 'BAPS Swaminarayan Sanstha', 'Bharat Sevashram Sangha', 'Arya Samaj'],
    historicalPresenceSummary: 'Cradle of Vedic civilization, Sarasvati-Sindhu tradition, darśanas, Itihāsas, and diverse sampradāyas from antiquity to modern times.',
    migrationHistorySummary: 'Historic diaspora along maritime Silk Route and Indian Ocean, followed by 19th-century indentured migrations and 20th/21st-century global migrations.',
    historicalKingdoms: [
      {
        name: 'Maurya Empire',
        period: 'c. 322 – 185 BCE',
        classification: 'Multi-religious',
        capital: 'Pāṭaliputra',
        notableRulersOrSites: 'Chandragupta Maurya, Chāṇakya, Ashoka',
        primarySources: 'Arthaśāstra of Kauṭilya, Ashokan rock edicts, Megasthenes Indika',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Gupta Empire (Classical Era)',
        period: 'c. 319 – 543 CE',
        classification: 'Hindu',
        capital: 'Pāṭaliputra / Ujjayini',
        notableRulersOrSites: 'Chandragupta I, Samudragupta, Chandragupta II Vikramāditya, Kālidāsa',
        primarySources: 'Allahabad Pillar Inscription, Eran inscriptions, gold numismatics',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Chola Dynasty',
        period: 'c. 848 – 1279 CE',
        classification: 'Hindu',
        capital: 'Thanjavur, Gangaikonda Cholapuram',
        notableRulersOrSites: 'Rajaraja Chola I, Rajendra Chola I (maritime naval expeditions)',
        primarySources: 'Brihadisvara temple epigraphy, Karandai plates, maritime inscriptions',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Vijayanagara Empire',
        period: '1336 – 1646 CE',
        classification: 'Hindu',
        capital: 'Hampi (Vijayanagara)',
        notableRulersOrSites: 'Harihara I, Bukka Raya I, Krishnadevaraya, Vidyaranya Svami',
        primarySources: 'Hampi inscriptions, Domingo Paes & Fernao Nuniz travelogues',
        evidenceConfidence: 'Primary source'
      }
    ],
    sacredSitesOrInscriptions: ['Char Dham (Badrinath, Puri, Rameshwaram, Dwarka)', '12 Jyotirlingas', '51 Shakti Peethas', 'Sapta Puri']
  },
  {
    id: 'np',
    name: 'Nepal',
    sanskritName: 'नेपालदेशः',
    region: 'South Asia',
    coordinates: [84.12, 28.39],
    estimatedPopulation: '23,670,000',
    percentageOfPopulation: '81.2%',
    dataYear: '2021 Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'National Population and Housing Census 2021',
      authorOrBody: 'Central Bureau of Statistics, Government of Nepal',
      yearOrPeriod: '2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Kathmandu', 'Janakpurdham', 'Pokhara', 'Biratnagar', 'Lalitpur', 'Bhaktapur'],
    keyTemples: ['Pashupatinath Temple', 'Janaki Mandir (Mithila)', 'Muktinath', 'Guhyeshwari Shaktipeeth', 'Budhanilkantha'],
    majorOrganizations: ['Nepal Sanatan Dharma Seva Samiti', 'Pashupati Area Development Trust', 'Geeta Mandir Samiti', 'Arya Samaj Nepal'],
    historicalPresenceSummary: 'Ancient continuous Himalayan sanctuary with deep ties to Janaka\'s Videha kingdom, Licchavi dynasty, Malla artistic golden age, and Shah dynasty.',
    migrationHistorySummary: 'Indigenous continuous civilization in Himalayan valleys; Gurkha regiments and modern educational migration abroad.',
    historicalKingdoms: [
      {
        name: 'Licchavi Dynasty',
        period: 'c. 400 – 750 CE',
        classification: 'Hindu',
        capital: 'Kathmandu Valley',
        notableRulersOrSites: 'King Manadeva, Changu Narayan Sanskrit inscription',
        primarySources: 'Changu Narayan Pillar Inscription (464 CE) - oldest epigraph in Nepal',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Malla Kingdoms',
        period: 'c. 1201 – 1769 CE',
        classification: 'Hindu-Buddhist',
        capital: 'Kathmandu, Patan, Bhaktapur',
        notableRulersOrSites: 'Jayastithi Malla, Yaksha Malla, Pratap Malla',
        primarySources: 'Patan and Bhaktapur Durbar Square epigraphs',
        evidenceConfidence: 'Primary source'
      }
    ],
    sacredSitesOrInscriptions: ['Changu Narayan Inscription (464 CE)', 'Pashupatinath complex epigraphs', 'Janakpur Mithila sacred zone']
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    sanskritName: 'वङ्गदेशः',
    region: 'South Asia',
    coordinates: [90.35, 23.68],
    estimatedPopulation: '13,100,000 - 14,300,000',
    percentageOfPopulation: '7.95% - 8.5%',
    dataYear: '2022 Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Population & Housing Census 2022',
      authorOrBody: 'Bangladesh Bureau of Statistics (BBS)',
      yearOrPeriod: '2022',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Dhaka', 'Chittagong', 'Sylhet', 'Mymensingh', 'Khulna', 'Dinajpur'],
    keyTemples: ['Dhakeshwari National Temple (Dhaka)', 'Chandranath Temple (Sitakunda)', 'Kantajew Temple (Dinajpur)', 'Sugandha Shaktipeeth'],
    majorOrganizations: ['Bangladesh Hindu Buddhist Christian Unity Council', 'Puja Udjapan Parishad', 'Ramakrishna Mission Dhaka', 'ISKCON Bangladesh'],
    historicalPresenceSummary: 'Ancient Vanga and Gauda kingdoms, Sena dynasty of Bengal, flourishing center of Navya-Nyaya, Gaudiya Vaishnavism, and Shakta tantra.',
    migrationHistorySummary: 'Severe demographic decline from 1947 partition (approx. 28% in 1941 to ~7.95% in 2022) due to recurrent persecution and partition displacements.',
    historicalKingdoms: [
      {
        name: 'Sena Dynasty',
        period: 'c. 1070 – 1230 CE',
        classification: 'Hindu',
        capital: 'Nabadwip, Bikrampur, Gauda',
        notableRulersOrSites: 'Ballala Sena, Lakshmana Sena, patron of poet Jayadeva (Gita Govinda)',
        primarySources: 'Deopara Prashasti inscription of Vijayasena, Danasagara text',
        evidenceConfidence: 'Primary source'
      }
    ],
    sacredSitesOrInscriptions: ['Kantajew terracotta architecture', 'Sitakunda Chandranath Hill', 'Dhakeshwari historic shrine']
  },
  {
    id: 'pk',
    name: 'Pakistan',
    sanskritName: 'सिन्धु-गान्धार-सौवीर',
    region: 'South Asia',
    coordinates: [69.34, 30.37],
    estimatedPopulation: '3,800,000 - 4,500,000',
    percentageOfPopulation: '1.9% - 2.1%',
    dataYear: '2023 Census estimates / HRCP',
    dataConfidence: 'Census data',
    dataSource: {
      title: '7th Population and Housing Census 2023 / Human Rights Commission of Pakistan',
      authorOrBody: 'Pakistan Bureau of Statistics & HRCP Reports',
      yearOrPeriod: '2023',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Karachi', 'Tharparkar', 'Umerkot', 'Mirpur Khas', 'Hyderabad (Sindh)', 'Peshawar'],
    keyTemples: ['Hinglaj Mata Shaktipeeth (Balochistan)', 'Katas Raj Temples (Chakwal, Punjab)', 'Sadhu Belo (Sukkur)', 'Umarkot Shiv Mandir'],
    majorOrganizations: ['Pakistan Hindu Council', 'Sindh Hindu Panchayat', 'Thar Heritage Foundation'],
    historicalPresenceSummary: 'Birthplace of the Ṛgveda on the banks of the Sindhu and Sarasvati rivers; Takṣaśilā university, Gandhara, Sauvīra, and Shahi kingdoms.',
    migrationHistorySummary: 'Mass displacement during the 1947 Partition; remaining Hindu population is concentrated primarily in Sindh (over 90%), facing socioeconomic challenges.',
    historicalKingdoms: [
      {
        name: 'Kabul Shahi / Hindu Shahi Dynasty',
        period: 'c. 850 – 1026 CE',
        classification: 'Hindu',
        capital: 'Kabul, Waihind (Hund on the Indus)',
        notableRulersOrSites: 'Kallar, Samand, Jayapala, Anandapala, Trilochanapala',
        primarySources: 'Al-Biruni Tarikh al-Hind, Kalhana Rajatarangini, Hund Sanskrit slab inscriptions',
        evidenceConfidence: 'Scholarly research'
      }
    ],
    sacredSitesOrInscriptions: ['Hinglaj Mata cave shrine in Makran', 'Katas Raj sacred pool described in Mahabharata', 'Takṣaśilā (Taxila) university ruins']
  },
  {
    id: 'id',
    name: 'Indonesia',
    sanskritName: 'सुवर्णद्वीपम् (इन्दोनेशिया)',
    region: 'Southeast Asia',
    coordinates: [113.92, -0.78],
    estimatedPopulation: '4,690,000 - 6,500,000 (Official census reports ~4.7M; Parisada Hindu Dharma Indonesia estimates ~6.5M including Kejawen & Tengger)',
    percentageOfPopulation: '1.7% - 2.4%',
    dataYear: '2022 Ministry of Religious Affairs / BPS',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Sensus Penduduk & Kementerian Agama Republik Indonesia',
      authorOrBody: 'Badan Pusat Statistik (BPS) & Parisada Hindu Dharma Indonesia (PHDI)',
      yearOrPeriod: '2020-2022',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Denpasar (Bali)', 'Singaraja', 'Mataram (Lombok)', 'Surabaya (East Java)', 'Yogyakarta', 'Medan'],
    keyTemples: ['Pura Besakih (Mother Temple of Bali)', 'Prambanan (Shivagrha, Central Java)', 'Pura Tanah Lot', 'Pura Uluwatu', 'Candi Ceto'],
    majorOrganizations: ['Parisada Hindu Dharma Indonesia (PHDI)', 'Prajaniti Hindu Indonesia', 'Peradah Indonesia (Youth)', 'WHDI (Women)'],
    historicalPresenceSummary: 'Rich history of ancient Hindu-Buddhist kingdoms including Kutai, Tarumanagara, Mataram/Medang, Kediri, Singhasari, and the maritime empire of Majapahit.',
    migrationHistorySummary: 'Ancient cultural adoption through maritime trade, royal marriages, and scholarly exchanges with South India; modern Bali represents uninterrupted living continuity.',
    historicalKingdoms: [
      {
        name: 'Kutai Kingdom (East Kalimantan)',
        period: 'c. 350 – 400 CE',
        classification: 'Hindu',
        capital: 'Muara Kaman (Mahakam River)',
        notableRulersOrSites: 'King Kudungga, Ashvavarman, Mulavarman',
        primarySources: '7 Yūpa Sanskrit stone inscriptions in Pallava script recording Bahusuvarṇaka yajña',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Tarumanagara (West Java)',
        period: 'c. 358 – 669 CE',
        classification: 'Hindu',
        capital: 'Sundapura (near modern Jakarta)',
        notableRulersOrSites: 'King Purnavarman (compared to Lord Vishnu in epigraphs)',
        primarySources: 'Ciaruteun, Tugu, Cidanghiang, Kebon Kopi Sanskrit inscriptions with royal footprints',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Mataram / Medang Kingdom (Central Java)',
        period: 'c. 732 – 1006 CE',
        classification: 'Hindu-Buddhist',
        capital: 'Medang i Bhumi Mataram',
        notableRulersOrSites: 'King Sanjaya (builder of Shiva linga), Dyah Lokapala, Rakai Pikatan',
        primarySources: 'Canggal Inscription (732 CE), Shivagrha Inscription (856 CE) describing Prambanan',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Majapahit Maritime Empire',
        period: '1293 – c. 1527 CE',
        classification: 'Hindu-Buddhist',
        capital: 'Trowulan (East Java)',
        notableRulersOrSites: 'Raden Wijaya, Hayam Wuruk, Mahapatih Gajah Mada (Palapa Oath)',
        primarySources: 'Nagarakretagama (Desawarnana) by Mpu Prapanca (1365 CE), Pararaton chronicles',
        evidenceConfidence: 'Primary source'
      }
    ],
    sacredSitesOrInscriptions: ['Yūpa Inscriptions of Kutai (oldest in archipelago)', 'Prambanan temple complex', 'Canggal inscription on Mount Wukir']
  },
  {
    id: 'kh',
    name: 'Cambodia',
    sanskritName: 'कम्बुजदेशः (कम्बोडिया)',
    region: 'Southeast Asia',
    coordinates: [104.99, 12.56],
    estimatedPopulation: 'Under 10,000 (small contemporary community, primarily expatriates and research scholars)',
    percentageOfPopulation: '< 0.1%',
    dataYear: '2021 Pew / National Statistics',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'The Indianized States of Southeast Asia / EFEO Archaeological Bulletins',
      authorOrBody: 'George Cœdès & École française d\'Extrême-Orient (EFEO)',
      yearOrPeriod: '1968 / 2020',
      evidenceType: 'Scholarly Monograph',
      confidence: 'Archaeological evidence'
    },
    majorCities: ['Siem Reap', 'Phnom Penh', 'Battambang'],
    keyTemples: ['Angkor Wat (dedicated to Lord Viṣṇu by Suryavarman II)', 'Banteay Srei (Tribhuvanamaheshvara)', 'Prasat Thom (Koh Ker)', 'Preah Vihear'],
    majorOrganizations: ['Apsara National Authority (Heritage conservation)', 'Indian-Cambodian Cultural Council'],
    historicalPresenceSummary: 'Center of Funan, Chenla, and the Khmer Empire (802–1431 CE); constructed the world\'s largest Hindu temple monuments celebrating Viṣṇu, Śiva, and Harihara.',
    migrationHistorySummary: 'Sanskrit and Hindu cosmological traditions adopted through maritime trade and scholarly brāhmaṇa lineages; transitioned to Theravada Buddhism by 14th century.',
    historicalKingdoms: [
      {
        name: 'Funan & Chenla (Kambuja)',
        period: 'c. 1st – 8th century CE',
        classification: 'Hindu-Buddhist',
        capital: 'Vyadhapura, Isanapura',
        notableRulersOrSites: 'Kaundinya (Preah Thong), Bhavavarman I, Isanavarman I',
        primarySources: 'Chinese Liang Shu chronicles, Sambor Prei Kuk Sanskrit inscriptions',
        evidenceConfidence: 'Archaeological evidence'
      },
      {
        name: 'Khmer Empire (Angkorian Era)',
        period: '802 – 1431 CE',
        classification: 'Hindu-Buddhist',
        capital: 'Hariharalaya, Yasodharapura (Angkor), Koh Ker',
        notableRulersOrSites: 'Jayavarman II (Devaraja concept at Mount Kulen), Suryavarman II (Angkor Wat), Jayavarman VII',
        primarySources: 'Sdok Kak Thom inscription (1052 CE) documenting Devaraja ritual and priest lineage',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Angkor Wat (monumental bas-reliefs of Samudra Manthan and Kurukshetra battle)', 'Banteay Srei', 'Mount Kulen riverbed with 1000 Lingas']
  },
  {
    id: 'vn',
    name: 'Vietnam',
    sanskritName: 'चम्पानगरम् (वियतनाम)',
    region: 'Southeast Asia',
    coordinates: [108.27, 14.05],
    estimatedPopulation: '64,000 - 70,000 (Balamon Cham Hindus in Ninh Thuan & Binh Thuan provinces)',
    percentageOfPopulation: '0.07%',
    dataYear: '2019 Census of Vietnam',
    dataConfidence: 'Census data',
    dataSource: {
      title: '2019 Vietnam Population and Housing Census',
      authorOrBody: 'General Statistics Office of Vietnam (GSO)',
      yearOrPeriod: '2019',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Phan Rang–Thap Cham', 'Phan Thiet', 'Da Nang', 'Nha Trang', 'Ho Chi Minh City'],
    keyTemples: ['Mỹ Sơn Sanctuary (UNESCO)', 'Po Nagar Cham Towers (Nha Trang)', 'Po Klong Garai Tower', 'Mariamman Temple (Ho Chi Minh City)'],
    majorOrganizations: ['Balamon Cham Community Council', 'Cham Cultural Heritage Preservation Center', 'Indian Association Vietnam'],
    historicalPresenceSummary: 'Home of the historic Kingdom of Champa (2nd – 19th c. CE), which maintained Shiva-centric Shaiva traditions and Sanskrit epigraphy for over a millennium.',
    migrationHistorySummary: 'Indigenous Cham civilization adapted Hindu traditions in the early centuries CE; the surviving Balamon Cham community preserves distinctive sacerdotal rites.',
    historicalKingdoms: [
      {
        name: 'Kingdom of Champa',
        period: 'c. 192 – 1832 CE',
        classification: 'Hindu',
        capital: 'Simhapura (Tra Kieu), Indrapura, Vijaya (Binh Dinh)',
        notableRulersOrSites: 'Bhadravarman I, Prakasadharma, Vikrantavarman',
        primarySources: 'Võ Cạnh Sanskrit Inscription (c. 2nd-3rd c. CE - oldest Sanskrit epigraph in SE Asia), Mỹ Sơn stele inscriptions',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Võ Cạnh Inscription (Khanh Hoa)', 'Mỹ Sơn Shaiva sanctuary', 'Po Nagar temple dedicated to Yan Po Nagar / Bhagavati']
  },
  {
    id: 'my',
    name: 'Malaysia',
    sanskritName: 'कटाहद्वीपः (मलेशिया)',
    region: 'Southeast Asia',
    coordinates: [101.97, 4.21],
    estimatedPopulation: '2,020,000 - 2,150,000',
    percentageOfPopulation: '6.2% - 6.4%',
    dataYear: '2020 Population & Housing Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Current Population Estimates & 2020 Census',
      authorOrBody: 'Department of Statistics Malaysia (DOSM)',
      yearOrPeriod: '2020-2022',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Kuala Lumpur', 'George Town (Penang)', 'Ipoh', 'Johor Bahru', 'Klang'],
    keyTemples: ['Batu Caves Murugan Temple (Selangor)', 'Sri Kandaswamy Kovil (Brickfields)', 'Arulmigu Balathandayuthapani Temple (Penang Waterfall)'],
    majorOrganizations: ['Malaysia Hindu Sangam (MHS)', 'Malaysia Hindu Dharma Mamandram', 'Ramakrishna Mission Petaling Jaya', 'Divine Life Society Malaysia'],
    historicalPresenceSummary: 'Ancient kingdoms of Kataha (Kedah Tua) and Langkasuka in the Bujang Valley, with Sanskrit inscriptions dating from the 4th-5th century CE.',
    migrationHistorySummary: 'Ancient maritime traders followed by large-scale Tamil, Telugu, and Malayali migration during British colonial rubber and railway expansion (1880–1930s).',
    historicalKingdoms: [
      {
        name: 'Kedah Tua (Kataha / Kadaram)',
        period: 'c. 4th – 11th century CE',
        classification: 'Hindu-Buddhist',
        capital: 'Bujang Valley (Lembah Bujang)',
        notableRulersOrSites: 'Mahanavika Buddhagupta',
        primarySources: 'Bujang Valley archaeological excavations, Mahanavika Buddhagupta slate inscription (5th c. CE), Tanjore Chola inscriptions of Rajendra I',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Bujang Valley Candi Bukit Batu Pahat ruins', 'Mahanavika Buddhagupta inscription', 'Batu Caves annual Thaipusam']
  },
  {
    id: 'th',
    name: 'Thailand',
    sanskritName: 'स्यामदेशः (थाईलैण्ड्)',
    region: 'Southeast Asia',
    coordinates: [100.99, 15.87],
    estimatedPopulation: '65,000 - 80,000 (Expatriate and diaspora community, alongside national reverence for Brahma, Ganesha, Indra, and Ramakien tradition)',
    percentageOfPopulation: '0.1%',
    dataYear: '2021 Pew / NSO Thailand',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'National Statistical Office Thailand & Pew Demographics',
      authorOrBody: 'NSO Thailand & Religious Affairs Dept',
      yearOrPeriod: '2021',
      evidenceType: 'Census',
      confidence: 'Scholarly research'
    },
    majorCities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya'],
    keyTemples: ['Wat Phra Si Maha Uma Devi (Sri Maha Mariamman Temple, Silom)', 'Erawan Shrine (Phra Phrom / Brahma)', 'Devasathan (Royal Brahmin Temple, Bangkok)'],
    majorOrganizations: ['Hindu Samaj Thailand (Dev Mandir)', 'Vishwa Hindu Parishad Thailand', 'BAPS Swaminarayan Bangkok', 'Indian Association of Thailand'],
    historicalPresenceSummary: 'Dvaravati, Lopburi, and Sukhothai eras incorporated Sanskrit concepts, state rituals overseen by Court Brahmins (Phra Ratchakhru), and the national epic Ramakien (Rāmāyaṇa).',
    migrationHistorySummary: 'Continuous court ritual presence since Ayutthaya kingdom; 19th and 20th-century merchant migrations from Punjab, Gujarat, and Tamil Nadu.',
    historicalKingdoms: [
      {
        name: 'Lopburi & Phanom Rung (Khmer period)',
        period: 'c. 10th – 13th century CE',
        classification: 'Hindu-Buddhist',
        capital: 'Lavo (Lopburi), Buriram',
        notableRulersOrSites: 'Prasat Hin Phanom Rung (dedicated to Lord Shiva), Phimai',
        primarySources: 'Sanskrit stele at Phanom Rung detailing Narendraditya’s Shiva tapas',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Phanom Rung historical sanctuary', 'Devasathan Royal Brahmin court temple (est. 1784)', 'Royal coronation coronation rituals with Court Brahmins']
  },
  {
    id: 'mu',
    name: 'Mauritius',
    sanskritName: 'मारीशसदेशः',
    region: 'Africa',
    coordinates: [57.55, -20.34],
    estimatedPopulation: '600,000 - 625,000',
    percentageOfPopulation: '48.5% - 49.0%',
    dataYear: '2022 Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Housing and Population Census 2022',
      authorOrBody: 'Statistics Mauritius',
      yearOrPeriod: '2022',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Port Louis', 'Vacoas-Phoenix', 'Beau Bassin-Rose Hill', 'Grand Baie', 'Triolet'],
    keyTemples: ['Grand Bassin (Ganga Talao) Sacred Lake', 'Maheswarnath Mandir (Triolet, est. 1891)', 'Sagar Shiv Mandir (Goyave de Chine)'],
    majorOrganizations: ['Mauritius Sanatan Dharma Temples Federation', 'Arya Sabha Mauritius', 'Hindu Maha Sabha', 'Ramakrishna Mission Mauritius'],
    historicalPresenceSummary: 'Unique African nation where Sanātana Dharma is the plurality faith; established by Girmitiya indentured workers arriving from 1834 onwards.',
    migrationHistorySummary: 'Following British abolition of slavery in 1834, Aapravasi Ghat in Port Louis became the global pilot depot for Indian indentured workers.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Ganga Talao (Grand Bassin) natural volcanic lake consecrated with holy water from the Ganges (1972)', 'Aapravasi Ghat (UNESCO Heritage)']
  },
  {
    id: 'fj',
    name: 'Fiji',
    sanskritName: 'फिजीद्वीपसमूहः',
    region: 'Oceania',
    coordinates: [178.06, -17.71],
    estimatedPopulation: '245,000 - 260,000',
    percentageOfPopulation: '27.9% - 29.5%',
    dataYear: '2017-2020 Census reports',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Fiji Bureau of Statistics 2017 Census',
      authorOrBody: 'Fiji Bureau of Statistics (FBoS)',
      yearOrPeriod: '2017',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Suva', 'Nadi', 'Lautoka', 'Labasa', 'Nausori'],
    keyTemples: ['Sri Siva Subramaniya Temple (Nadi - largest Hindu temple complex in the Southern Hemisphere)', 'Naag Mandir (Labasa)', 'Samabula Shiv Mandir (Suva)'],
    majorOrganizations: ['Shree Sanatan Dharm Pratinidhi Sabha of Fiji (est. 1926)', 'Arya Pratinidhi Sabha of Fiji (est. 1904)', 'Then India Sanmarga Ikya (TISI) Sangam'],
    historicalPresenceSummary: 'Deeply resilient community created by Girmitiya labourers who preserved the Ramcharitmanas, Holi, and classical temple architectures in the South Pacific.',
    migrationHistorySummary: 'Over 60,000 Indians transported to Fiji under British indenture agreements between 1879 and 1916 on 87 ship voyages on the *Leonidas* and subsequent vessels.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Sri Siva Subramaniya complex in Nadi', 'Historic Girmit landing sites at Yanuca and Suva Harbour']
  },
  {
    id: 'gy',
    name: 'Guyana',
    sanskritName: 'गुयानादेशः',
    region: 'Americas',
    coordinates: [-58.93, 4.86],
    estimatedPopulation: '185,000 - 195,000',
    percentageOfPopulation: '24.8% - 25.5%',
    dataYear: '2012 Census / 2022 Estimates',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Guyana Population and Housing Census',
      authorOrBody: 'Bureau of Statistics Guyana',
      yearOrPeriod: '2012 / 2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Georgetown', 'New Amsterdam', 'Berbice', 'Essequibo Islands'],
    keyTemples: ['Guyana Central Arya Samaj Mandir', 'Prashad Nagar Krishna Mandir', 'Albion Hindu Mandir', 'Sri Sri Radha Gokula Chandra Temple'],
    majorOrganizations: ['Guyana Sanatan Dharma Maha Sabha', 'Guyana Central Arya Samaj', 'Guyana Hindu Dharmic Sabha (est. 1974 by Pandit Reepu Daman Persaud)'],
    historicalPresenceSummary: 'Strong Indo-Guyanese heritage celebrating Phagwah and Diwali as official national holidays, rooted in Bhojpuri and Awadhi traditions.',
    migrationHistorySummary: 'First indentured arrivals on the ships *Whitby* and *Hesperus* on May 5, 1838; continued until 1917, building mandirs along the Atlantic coast.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Highbury, Berbice (monument commemorating the arrival of the first Indian immigrants on May 5, 1838)']
  },
  {
    id: 'tt',
    name: 'Trinidad and Tobago',
    sanskritName: 'त्रिनिदाद्-टोबागो',
    region: 'Americas',
    coordinates: [-61.22, 10.69],
    estimatedPopulation: '240,000 - 255,000',
    percentageOfPopulation: '18.1% - 19.0%',
    dataYear: '2011 Census / CSO Updates',
    dataConfidence: 'Census data',
    dataSource: {
      title: '2011 Population and Housing Census Demographic Report',
      authorOrBody: 'Central Statistical Office (CSO) Trinidad & Tobago',
      yearOrPeriod: '2011 / 2022',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Port of Spain', 'Chaguanas', 'San Fernando', 'Couva', 'Penal'],
    keyTemples: ['Temple in the Sea at Waterloo (built by Sevador Sewdass Sadhu)', 'Dattatreya Yoga Centre with 85-foot Karya Siddhi Hanuman Murti (Carapichaima)', 'Triveni Mandir'],
    majorOrganizations: ['Sanatan Dharma Maha Sabha (SDMS) of Trinidad & Tobago', 'Sathanadharma Maha Sabha', 'Chinmaya Mission Trinidad', 'Bhakti Marga'],
    historicalPresenceSummary: 'World-renowned center of Caribbean Hindu culture; vibrant public Ramleela plays, Phagwa celebrations, and traditional baithak gana musical forms.',
    migrationHistorySummary: 'Began with the arrival of the ship *Fatel Razack* on May 30, 1845, bringing 225 indentured immigrants to the Gulf of Paria; May 30 is celebrated as Indian Arrival Day.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Waterloo Temple in the Sea (symbol of enduring devotion amidst colonial bans)', '85-foot Karya Siddhi Hanuman Murti (Carapichaima)']
  },
  {
    id: 'sr',
    name: 'Suriname',
    sanskritName: 'सूरीनामदेशः',
    region: 'Americas',
    coordinates: [-56.02, 3.91],
    estimatedPopulation: '125,000 - 135,000',
    percentageOfPopulation: '22.3%',
    dataYear: '2012 Census / 2022 Projections',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Achtste Algemene Volks- en Woningtelling in Suriname',
      authorOrBody: 'Algemeen Bureau voor de Statistiek (ABS Suriname)',
      yearOrPeriod: '2012',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Paramaribo', 'Wanica', 'Nickerie', 'Commewijne'],
    keyTemples: ['Arya Diwaker Temple (Paramaribo - monumental modern Vedic temple)', 'Shri Vishnu Mandir (Paramaribo)', 'Sanatan Dharm Mahasabha Mandir'],
    majorOrganizations: ['Sanatan Dharm Maha Sabha Suriname', 'Arya Diwaker', 'Stichting Vishva Hindu Parishad Suriname'],
    historicalPresenceSummary: 'Unique Dutch-Caribbean community where Sarnami Hindustani (rooted in Bhojpuri and Awadhi) is widely spoken; prominent Arya Samaj and Sanatani mandirs.',
    migrationHistorySummary: 'Began on June 5, 1873 with the arrival of the sailing vessel *Lalla Rookh* carrying 399 immigrants from British India to the Dutch colony of Suriname.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Arya Diwaker temple complex in Paramaribo', 'Lalla Rookh historic immigration complex']
  },
  {
    id: 'za',
    name: 'South Africa',
    sanskritName: 'दक्षिण-आफ्रिका',
    region: 'Africa',
    coordinates: [22.93, -30.55],
    estimatedPopulation: '550,000 - 600,000',
    percentageOfPopulation: '1.0% - 1.1%',
    dataYear: '2016 Community Survey / Stats SA',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Community Survey & Census Analysis',
      authorOrBody: 'Statistics South Africa (Stats SA)',
      yearOrPeriod: '2016 / 2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Durban (eThekwini)', 'Johannesburg', 'Pietermaritzburg', 'Cape Town', 'Pretoria'],
    keyTemples: ['Sri Siva Soobramaniar Temple (Pietermaritzburg - oldest temple in SA, est. 1888)', 'Hare Krishna Temple of Understanding (Chatsworth)', 'Durban Hindu Temple (Somtseu Road)'],
    majorOrganizations: ['South African Hindu Maha Sabha (SAHMS, est. 1912)', 'Ramakrishna Centre of South Africa', 'Arya Samaj South Africa', 'Chinmaya Mission SA'],
    historicalPresenceSummary: 'Home of Mahatma Gandhi\'s Satyagraha movement (1893–1914); rich architectural heritage of KwaZulu-Natal Dravidian and North Indian style temples.',
    migrationHistorySummary: 'First indentured laborers arrived in Port Natal (Durban) aboard the *Truro* (from Madras) and *Belvedere* (from Calcutta) in November 1860 for sugarcane estates.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Phoenix Settlement near Durban founded by Mahatma Gandhi in 1904', 'Pietermaritzburg Railway Station memorial']
  },
  {
    id: 'gb',
    name: 'United Kingdom',
    sanskritName: 'संयुक्त-राज्यम् (ब्रिटन्)',
    region: 'Europe',
    coordinates: [-3.43, 55.37],
    estimatedPopulation: '1,032,000',
    percentageOfPopulation: '1.7% (England and Wales)',
    dataYear: '2021 Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Census 2021: Religion, England and Wales',
      authorOrBody: 'Office for National Statistics (ONS)',
      yearOrPeriod: '2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['London (Harrow, Brent, Newham)', 'Leicester', 'Birmingham', 'Manchester', 'Slough'],
    keyTemples: ['BAPS Shri Swaminarayan Mandir (Neasden, London)', 'Bhaktivedanta Manor (Watford, donated by George Harrison)', 'Shree Sanatan Mandir (Leicester)'],
    majorOrganizations: ['Hindu Forum of Britain (HFB)', 'National Council of Hindu Temples (NCHT UK)', 'Vishwa Hindu Parishad UK', 'BAPS UK & Europe', 'Chinmaya Mission UK'],
    historicalPresenceSummary: 'Active scholarly, cultural, and political contribution from early students (like Dadabhai Naoroji, Sri Aurobindo) to modern business and public leadership.',
    migrationHistorySummary: 'Post-WWII labor migration in the 1950s-60s, augmented dramatically by the 1972 expulsion of Ugandan Asians by Idi Amin and subsequent East African migrations.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Neasden Temple (first traditional stone Hindu temple in Europe, opened 1995)', 'Bhaktivedanta Manor sacred cows and shrine']
  },
  {
    id: 'us',
    name: 'United States',
    sanskritName: 'संयुक्त-अमेरिका',
    region: 'Americas',
    coordinates: [-95.71, 37.09],
    estimatedPopulation: '3,300,000 - 3,700,000',
    percentageOfPopulation: '1.0% - 1.1%',
    dataYear: '2023 Pew Research / American Community Survey',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'Religious Landscape Study & Pew Demographic Updates',
      authorOrBody: 'Pew Research Center & US Census Bureau (ACS)',
      yearOrPeriod: '2020-2023',
      evidenceType: 'Scholarly Monograph',
      confidence: 'Scholarly research'
    },
    majorCities: ['New York City (Queens, Edison NJ)', 'San Francisco Bay Area', 'Chicago', 'Houston', 'Dallas', 'Atlanta', 'Los Angeles'],
    keyTemples: ['BAPS Swaminarayan Akshardham (Robbinsville, NJ - largest Hindu temple in the Western Hemisphere)', 'Sri Maha Vallabha Ganapati Devasthanam (Flushing, NY, est. 1977)', 'Malibu Hindu Temple (CA)', 'Meenakshi Temple (Pearland, TX)'],
    majorOrganizations: ['Hindu American Foundation (HAF)', 'Council of Hindu Temples of North America (CHTNA)', 'BAPS North America', 'Arsha Vidya Gurukulam', 'Chinmaya Mission West'],
    historicalPresenceSummary: 'Initiated publicly by Swami Vivekananda\'s historic address at the 1893 World\'s Parliament of Religions in Chicago; major intellectual, medical, and technological impact.',
    migrationHistorySummary: 'Exponential growth following the Immigration and Nationality Act of 1965, drawing professionals, researchers, engineers, and entrepreneurs.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Robbinsville Akshardham complex', 'Swami Vivekananda historic sites in Chicago and Thousand Island Park, NY']
  },
  {
    id: 'ca',
    name: 'Canada',
    sanskritName: 'कनाडादेशः',
    region: 'Americas',
    coordinates: [-106.34, 56.13],
    estimatedPopulation: '828,000 - 900,000',
    percentageOfPopulation: '2.3%',
    dataYear: '2021 Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Census of Population 2021: Religion',
      authorOrBody: 'Statistics Canada (StatCan)',
      yearOrPeriod: '2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Toronto (GTA: Brampton, Mississauga, Scarborough)', 'Vancouver', 'Calgary', 'Edmonton', 'Montreal'],
    keyTemples: ['BAPS Shri Swaminarayan Mandir (Toronto)', 'Hindu Heritage Centre (Mississauga)', 'Richmond Hill Hindu Temple (Ganesh)', 'Gauri Shankar Mandir (Brampton)'],
    majorOrganizations: ['Hindu Federation of Canada', 'Canadian Council of Hindus', 'BAPS Canada', 'Chinmaya Mission Canada', 'Vishva Hindu Parishad Canada'],
    historicalPresenceSummary: 'One of the fastest-growing religious communities in Canada, reflecting diverse traditions from India, Sri Lanka (Tamil diaspora), Guyana, and Trinidad.',
    migrationHistorySummary: 'Small early 20th-century migrations expanded significantly after points-based immigration reforms in 1967 and the Sri Lankan civil war influx of the 1980s-90s.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Toronto BAPS Mandir Canadian Heritage site', 'Richmond Hill Hindu Temple complex']
  },
  {
    id: 'au',
    name: 'Australia',
    sanskritName: 'ऑस्ट्रेलिया-महाद्वीपः',
    region: 'Oceania',
    coordinates: [133.77, -25.27],
    estimatedPopulation: '684,000 - 750,000',
    percentageOfPopulation: '2.7%',
    dataYear: '2021 Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: '2021 Census of Population and Housing',
      authorOrBody: 'Australian Bureau of Statistics (ABS)',
      yearOrPeriod: '2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Sydney (Western Sydney)', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    keyTemples: ['Sri Karphaga Vinayakar Temple (Sydney)', 'Sri Venkateswara Temple (Helensburgh, NSW)', 'Shri Shiva Vishnu Temple (Carrum Downs, Victoria)'],
    majorOrganizations: ['Hindu Council of Australia (HCA)', 'BAPS Australia', 'Vishwa Hindu Parishad Australia', 'Chinmaya Mission Australia'],
    historicalPresenceSummary: 'Fastest growing religious demographic in Australia; active involvement in multicultural festivals, university chaplaincies, and philanthropic disaster relief.',
    migrationHistorySummary: 'Early 19th-century camel drivers and agriculturalists, followed by rapid post-1970s skilled migration after the dismantling of the White Australia Policy.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Helensburgh Sri Venkateswara Temple built on coastal escarpment according to Agama Shastras (opened 1985)']
  },
  {
    id: 'ae',
    name: 'United Arab Emirates',
    sanskritName: 'संयुक्त-अरब-अमीरात',
    region: 'Middle East',
    coordinates: [53.84, 23.42],
    estimatedPopulation: '750,000 - 1,100,000',
    percentageOfPopulation: '7.5% - 10.0%',
    dataYear: '2023 International Religious Freedom Report / Embassy estimates',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'Report on International Religious Freedom / UAE National Media Office',
      authorOrBody: 'US Department of State & UAE Ministry of Tolerance',
      yearOrPeriod: '2022-2024',
      evidenceType: 'Scholarly Monograph',
      confidence: 'Scholarly research'
    },
    majorCities: ['Dubai (Bur Dubai, Jebel Ali)', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    keyTemples: ['BAPS Hindu Mandir Abu Dhabi (consecrated February 2024 - first stone mandir in the Middle East)', 'Shiva & Krishna Mandirs (Bur Dubai, est. 1958)', 'Hindu Temple Dubai (Jebel Ali Worship Village, opened 2022)'],
    majorOrganizations: ['Indian Cultural Centre UAE', 'BAPS Middle East', 'Chinmaya Mission UAE', 'Art of Living UAE'],
    historicalPresenceSummary: 'Centuries-old trade between the Gulf and Gujarat/Malabar; celebrated landmark in 2024 with the royal land-gifted stone mandir in Abu Dhabi.',
    migrationHistorySummary: 'Commercial merchant settlements under the Trucial States expanded into a massive skilled, corporate, and workforce presence during the 1970s oil boom.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['BAPS Abu Dhabi Mandir constructed with pink Rajasthan sandstone depicting scenes from Ramayana, Mahabharata, and global civilizational values']
  },
  {
    id: 'lk',
    name: 'Sri Lanka',
    sanskritName: 'श्रीलङ्काद्वीपः',
    region: 'South Asia',
    coordinates: [80.77, 7.87],
    estimatedPopulation: '2,600,000 - 2,800,000',
    percentageOfPopulation: '12.6%',
    dataYear: '2012 Census / 2022 Estimates',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Census of Population and Housing 2012',
      authorOrBody: 'Department of Census and Statistics Sri Lanka',
      yearOrPeriod: '2012 / 2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Jaffna', 'Colombo', 'Batticaloa', 'Trincomalee', 'Kandy', 'Nuwara Eliya'],
    keyTemples: ['Nallur Kandaswamy Kovil (Jaffna)', 'Koneswaram Temple (Trincomalee)', 'Kataragama / Kathirkamam Temple', 'Munneswaram Temple (Chilaw)', 'Thiruketheeswaram (Mannar)'],
    majorOrganizations: ['All Ceylon Hindu Congress', 'Ramakrishna Mission Colombo & Jaffna', 'Saiva Mangaiyar Kazhagam'],
    historicalPresenceSummary: 'Ancient home of the Pancha Ishwarams (five ancient coastal Shiva abodes); sacred geography intricately linked to the Ramayana tradition.',
    migrationHistorySummary: 'Indigenous northern and eastern Tamil Hindu community alongside 19th-century up-country Indian-origin Tamil plantation communities.',
    historicalKingdoms: [
      {
        name: 'Jaffna Kingdom (Aryacakravarti dynasty)',
        period: 'c. 1215 – 1619 CE',
        classification: 'Hindu',
        capital: 'Nallur',
        notableRulersOrSites: 'Kulasekara Cinkaiariyan, Nallur Kandaswamy temple foundation',
        primarySources: 'Cekaracacekaramalai, Kailayamalai chronicle',
        evidenceConfidence: 'Primary source'
      }
    ],
    sacredSitesOrInscriptions: ['Pancha Ishwarams (Koneswaram, Naguleswaram, Thiruketheeswaram, Munneswaram, Tondeswaram)', 'Ashok Vatika / Seetha Eliya']
  },
  {
    id: 'kr',
    name: 'South Korea',
    sanskritName: 'दक्षिण-कोरियादेशः (कोरिया)',
    region: 'East Asia',
    coordinates: [127.76, 35.90],
    estimatedPopulation: '25,000 - 30,000 (Resident Indian expatriate & student community, alongside significant historical-cultural affinity)',
    percentageOfPopulation: '0.05%',
    dataYear: '2023 Ministry of Justice ROK / Indian Embassy Seoul',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'Korea Immigration Service Demographic Records & Gimhae Cultural Foundation',
      authorOrBody: 'Ministry of Justice Republic of Korea & Cultural Heritage Administration',
      yearOrPeriod: '2021-2023',
      evidenceType: 'Census',
      confidence: 'Scholarly research',
      notes: 'Contemporary resident population based on official immigration reports. The traditional connection with Queen Heo Hwang-ok and Ayodhya is recognized as a living historical chronicle (*Samguk Yusa*) and diplomatic bond, distinguished from genetic or established archaeological fact.'
    },
    majorCities: ['Seoul (Haebangchon, Itaewon)', 'Busan', 'Incheon', 'Gimhae', 'Suwon'],
    keyTemples: ['Sri Radha Shyamasundar Mandir (Seoul / Haebangchon)', 'Sri Sri Radha Kund Mandir (Pocheon)', 'Himalayan Meditation & Yoga Center (Seoul)', 'Queen Heo Hwang-ok Memorial Shrine & Park (Gimhae)'],
    majorOrganizations: ['Indian Association Korea (IAK)', 'Korea-India Friendship Society', 'ISKCON Korea', 'Gimhae Kim Clan Association', 'Gimhae Cultural Foundation'],
    historicalPresenceSummary: 'Contemporary Indian academic, technological, and medical community. Culturally, Korea shares a historic tradition recounted in the 13th-century chronicle Samguk Yusa: Princess Suriratna of "Ayuta" (traditionally associated with Ayodhya) arrived by boat in 48 CE to wed King Suro of Geumgwan Gaya, becoming Queen Heo Hwang-ok. AUM maintains academic balance by honoring this cherished living tradition and the Gimhae–Ayodhya sister-city alliance while clearly labeling it as historical tradition and literary chronicle rather than biological fact.',
    migrationHistorySummary: '21st-century influx of researchers, engineers, university professors, and corporate professionals; enhanced by the 2001 Ayodhya-Gimhae sister-city pact and 2019 memorial park expansion.',
    historicalKingdoms: [
      {
        name: 'Gaya Confederacy (Geumgwan Gaya - Traditional Literary Connection)',
        period: 'c. 42 – 562 CE (Chronicle tradition)',
        classification: 'Traditional or legendary connection',
        capital: 'Gimhae (Gyeongsangnam-do)',
        notableRulersOrSites: 'King Suro, Queen Heo Hwang-ok (Princess Suriratna of Ayuta), Pasa Stone Pagoda (Pasa Seoktap)',
        primarySources: 'Samguk Yusa (Garakguk-gi chapter compiled by Monk Iryeon, c. 1281 CE)',
        evidenceConfidence: 'Historical tradition'
      }
    ],
    sacredSitesOrInscriptions: ['Queen Heo Memorial Park (Gimhae)', 'Tomb of King Suro and Queen Heo', 'Pasa Stone Pagoda (reputedly carried from Ayuta to calm sea waves)']
  },
  {
    id: 'sg',
    name: 'Singapore',
    sanskritName: 'सिंहपुरम् (सिंगापुर)',
    region: 'Southeast Asia',
    coordinates: [103.81, 1.35],
    estimatedPopulation: '175,000 - 190,000',
    percentageOfPopulation: '5.0%',
    dataYear: '2020 Singapore Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Census of Population 2020: Religion',
      authorOrBody: 'Singapore Department of Statistics',
      yearOrPeriod: '2020',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Singapore (Little India, Serangoon, Tank Road, Yishun)'],
    keyTemples: ['Sri Mariamman Temple (South Bridge Rd, est. 1827 - National Monument)', 'Sri Srinivasa Perumal Temple (Serangoon Rd)', 'Sri Thendayuthapani (Chettiars\' Temple)', 'Sri Senpaga Vinayagar Temple'],
    majorOrganizations: ['Hindu Endowments Board (HEB - Statutory Body)', 'Hindu Advisory Board', 'Ramakrishna Mission Singapore', 'Singapore Kadayanallur Muslim League & Hindu Sangam'],
    historicalPresenceSummary: 'Part of the ancient Srivijaya maritime sphere and named "Singapura" (Lion City) by Prince Sang Nila Utama in 1299 CE; home to historic 19th-century Dravidian temples granted National Monument status.',
    migrationHistorySummary: 'Indian traders, sepoys, and artisans arrived alongside Sir Stamford Raffles in 1819; followed by sustained merchant and civil servant migrations, and contemporary global technology professionals.',
    historicalKingdoms: [
      {
        name: 'Kingdom of Singapura (Temasek)',
        period: '1299 – 1398 CE',
        classification: 'Hindu-Buddhist',
        capital: 'Fort Canning Hill (Bukit Larangan)',
        notableRulersOrSites: 'Sang Nila Utama (Sri Tri Buana), Parameswara',
        primarySources: 'Malay Annals (Sejarah Melayu), Wang Dayuan Dao Yi Zhi Lue (1349)',
        evidenceConfidence: 'Scholarly research'
      }
    ],
    sacredSitesOrInscriptions: ['Singapore Stone (Sanskrit/Kawi inscription at mouth of Singapore River)', 'Sri Mariamman Temple National Monument']
  },
  {
    id: 'mm',
    name: 'Myanmar',
    sanskritName: 'ब्रह्मदेशः (म्यानमार)',
    region: 'Southeast Asia',
    coordinates: [95.95, 21.91],
    estimatedPopulation: '890,000 - 1,150,000',
    percentageOfPopulation: '1.7% - 2.1%',
    dataYear: '2014 Census & Department of Population',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'The 2014 Myanmar Population and Housing Census',
      authorOrBody: 'Department of Population, Ministry of Labour, Immigration and Population',
      yearOrPeriod: '2014 / 2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Yangon', 'Mandalay', 'Bago', 'Mawlamyine', 'Pyin Oo Lwin'],
    keyTemples: ['Nathlaung Kyaung (Bagan - ancient 11th c. Vishnu Temple)', 'Shri Kali Temple (Little India, Yangon)', 'Sri Shiva Temple (Mandalay)', 'Sri Radha Mandalay Mandir'],
    majorOrganizations: ['All Myanmar Hindu Central Council', 'Sanatan Dharma Swayamsevak Sangh (SDSS)', 'Brahma Temple Preservation Council'],
    historicalPresenceSummary: 'Ancient Pyu city-states and Pagan Kingdom incorporated Vishnu worship and Sanskrit mantras; preserved in Bagan\'s 11th-century Nathlaung Kyaung temple and syncretic reverence of Thagyamin (Indra).',
    migrationHistorySummary: 'Maritime interactions since Suvarnabhumi era; large-scale migration during the British Burma administration (1852–1937) into trade, transport, and administration.',
    historicalKingdoms: [
      {
        name: 'Pagan Kingdom (Bagan)',
        period: 'c. 849 – 1297 CE',
        classification: 'Hindu-Buddhist',
        capital: 'Bagan',
        notableRulersOrSites: 'King Anawrahta, Nathlaung Kyaung (dedicated to Vishnu and Dashavatara)',
        primarySources: 'Bagan Mon and Sanskrit inscriptions, Hmannan Yazawin chronicle',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Nathlaung Kyaung 11th c. stone reliefs of Vishnu on Garuda', 'Pyu city-states Vishnu and Shiva artefacts (UNESCO Heritage)']
  },
  {
    id: 'ke',
    name: 'Kenya',
    sanskritName: 'केन्यादेशः',
    region: 'Africa',
    coordinates: [37.90, -0.02],
    estimatedPopulation: '60,000 - 75,000',
    percentageOfPopulation: '0.13%',
    dataYear: '2019 Kenya Population & Housing Census',
    dataConfidence: 'Census data',
    dataSource: {
      title: '2019 Kenya Population and Housing Census: Volume IV',
      authorOrBody: 'Kenya National Bureau of Statistics (KNBS)',
      yearOrPeriod: '2019',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
    keyTemples: ['BAPS Shri Swaminarayan Mandir (Forest Road, Nairobi)', 'Shree Sanatan Dharam Sabha Mandir (Nairobi)', 'Lord Shiva Temple (Mombasa)'],
    majorOrganizations: ['Hindu Council of Kenya (HCK - recognized by Kenya Govt)', 'Arya Samaj Kenya', 'BAPS Kenya', 'Bhartiya Swayamsevak Sangh (BSS)'],
    historicalPresenceSummary: 'Centuries-old Swahili coast dhow trade with Gujarat and Kutch; played a foundational role in building the Kenya-Uganda Railway in the 1890s.',
    migrationHistorySummary: 'Indian railway artisans (dukawallas) and merchants settled in Mombasa and Nairobi in the late 19th century, remaining resilient during post-colonial Africanization eras.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['BAPS Nairobi Mandir (built entirely with yellow stone without steel reinforcement)']
  },
  {
    id: 'nl',
    name: 'Netherlands',
    sanskritName: 'नेदरलैंड्स (हॉलैण्ड्)',
    region: 'Europe',
    coordinates: [5.29, 52.13],
    estimatedPopulation: '125,000 - 150,000',
    percentageOfPopulation: '0.7% - 0.9%',
    dataYear: '2021 CBS Netherlands',
    dataConfidence: 'Census data',
    dataSource: {
      title: 'Religieuze betrokkenheid van bevolkingsgroepen',
      authorOrBody: 'Centraal Bureau voor de Statistiek (CBS Netherlands)',
      yearOrPeriod: '2021',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['The Hague (Den Haag)', 'Rotterdam', 'Amsterdam', 'Utrecht', 'Almere'],
    keyTemples: ['Sewa Dhaam Mandir (The Hague)', 'Shri Krishna Mandir (The Hague)', 'Triloki Dhaam (Rotterdam)', 'Murugan Temple (Roermond)'],
    majorOrganizations: ['Sanatan Dharm Maha Sabha Nederland', 'Arya Samaj Nederland (ASAN)', 'Stichting Hindoe Onderwijs (Hindu Schools Network)'],
    historicalPresenceSummary: 'Largest Hindu population in continental Western Europe, primarily comprised of Surinamese Hindustanis who relocated around Suriname\'s 1975 independence.',
    migrationHistorySummary: 'Surinamese diaspora migration to Dutch cities in the 1970s; now augmented by Indian IT and engineering professionals in Amsterdam and Eindhoven.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Historic Hindu schools (Shri Laksmi School, Shri Vishnu School) operating under Dutch state educational accreditation']
  },
  {
    id: 'de',
    name: 'Germany',
    sanskritName: 'जर्मनीदेशः',
    region: 'Europe',
    coordinates: [10.45, 51.16],
    estimatedPopulation: '130,000 - 150,000',
    percentageOfPopulation: '0.16%',
    dataYear: '2022 REMID / Federal Statistical Office',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'Religionswissenschaftlicher Medien- und Informationsdienst (REMID)',
      authorOrBody: 'REMID Germany & Federal Statistical Office (Destatis)',
      yearOrPeriod: '2022',
      evidenceType: 'Scholarly Monograph',
      confidence: 'Scholarly research'
    },
    majorCities: ['Berlin', 'Frankfurt', 'Munich', 'Hamm', 'Cologne', 'Stuttgart'],
    keyTemples: ['Sri Kamadchi Ampal Temple (Hamm-Uentrop - second largest Hindu temple in Europe)', 'Sri Ganesha Hindu Temple (Berlin)', 'Sri Nagapooshani Amman Temple (Frankfurt)'],
    majorOrganizations: ['Hindu Forum Germany', 'Zentralrat der Hindus in Deutschland', 'Deutsch-Indische Gesellschaft', 'Tamil Hindu Cultural Association Germany'],
    historicalPresenceSummary: 'Pioneered European Indology and Sanskrit studies through scholars like Max Müller, Schopenhauer, and Wilhelm von Humboldt; living community enriched by Sri Lankan Tamil refugees and Indian professionals.',
    migrationHistorySummary: '1980s Sri Lankan Tamil diaspora established prominent Dravidian gopuram temples; 2010s-2020s skilled technological migration.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Sri Kamadchi Ampal Temple in Hamm with traditional Dravidian stone architecture and annual street chariot procession (Ther)']
  },
  {
    id: 'nz',
    name: 'New Zealand',
    sanskritName: 'न्यूजीलैंड-द्वीपः',
    region: 'Oceania',
    coordinates: [174.88, -40.90],
    estimatedPopulation: '121,644 - 135,000',
    percentageOfPopulation: '2.6%',
    dataYear: '2018/2023 Census of New Zealand',
    dataConfidence: 'Census data',
    dataSource: {
      title: '2018 & 2023 Census of Population and Dwellings',
      authorOrBody: 'Statistics New Zealand (Tatauranga Aotearoa)',
      yearOrPeriod: '2018-2023',
      evidenceType: 'Census',
      confidence: 'Census data'
    },
    majorCities: ['Auckland (Central, Manukau)', 'Wellington', 'Christchurch', 'Hamilton'],
    keyTemples: ['Bharatiya Mandir (Sandringham, Auckland - oldest mandir in NZ, est. 1986)', 'BAPS Shri Swaminarayan Mandir (Avondale)', 'Sri Venkateswara Temple (Wainuiomata, Wellington)'],
    majorOrganizations: ['Hindu Council of New Zealand (HCNZ)', 'New Zealand Hindu Temple Society', 'Auckland Indian Association', 'BAPS NZ'],
    historicalPresenceSummary: 'Fast-growing religious community in New Zealand, celebrating Diwali on the Auckland waterfront as one of the country\'s largest public cultural festivals.',
    migrationHistorySummary: 'Early 19th-century Gujarati and Punjabi agriculturalists, supplemented by post-1987 skilled migration and Indo-Fijian families relocating after political coups in Fiji.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Bharatiya Mandir heritage complex in Auckland', 'Wellington Sri Venkateswara Hilltop Temple']
  },
  {
    id: 'om',
    name: 'Oman',
    sanskritName: 'ओमानदेशः',
    region: 'Middle East',
    coordinates: [55.97, 21.47],
    estimatedPopulation: '180,000 - 210,000',
    percentageOfPopulation: '3.8% - 4.2%',
    dataYear: '2022 NCSI Oman / Religious Affairs',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'National Centre for Statistics and Information (NCSI Oman)',
      authorOrBody: 'NCSI Oman & Ministry of Endowments and Religious Affairs',
      yearOrPeriod: '2022',
      evidenceType: 'Scholarly Monograph',
      confidence: 'Scholarly research'
    },
    majorCities: ['Muscat (Ruwi, Muttrah)', 'Salalah', 'Sohar'],
    keyTemples: ['Motishwar Mandir (Old Muscat - over 125 years old Shiva temple)', 'Shree Krishna Temple (Darsait)', 'BAPS Hindu Center Muscat'],
    majorOrganizations: ['Hindu Mahajan Temple Management Committee (Muscat)', 'Indian Social Club Oman'],
    historicalPresenceSummary: 'Continuous mercantile presence of the Bhatia and Kutch merchant communities for over 300 years; royal family granted religious land rights and protections.',
    migrationHistorySummary: 'Merchant families established permanent trading outposts under the Sultans of Oman since the 18th century; expanded during Oman\'s modern renaissance.',
    historicalKingdoms: [],
    sacredSitesOrInscriptions: ['Historic Motishwar Mandir at the foot of Old Muscat mountain pass with consecrated well']
  },
  {
    id: 'jp',
    name: 'Japan',
    sanskritName: 'निप्पोन / जापानदेशः',
    region: 'East Asia',
    coordinates: [138.25, 36.20],
    estimatedPopulation: '35,000 - 45,000 (Resident Indian community; alongside nationwide cultural syncretism with Hindu deities in Shingon and Tendai Buddhism)',
    percentageOfPopulation: '0.03%',
    dataYear: '2023 Ministry of Justice Japan / Embassy of India',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'Statistics on Foreign Residents & Cultural Indology Bulletins',
      authorOrBody: 'Immigration Services Agency of Japan & University of Tokyo Indology Dept',
      yearOrPeriod: '2022-2023',
      evidenceType: 'Census',
      confidence: 'Scholarly research',
      notes: 'Demographic tally represents contemporary residents. Historical assimilation of Vedic deities into Japanese Shingon and Tendai pantheon (Benzaiten, Daikokuten, Kangiten, Enma) is substantiated by archaeological temple statuary.'
    },
    majorCities: ['Tokyo (Nishi-Kasai, Koto-ku)', 'Yokohama', 'Kobe', 'Osaka', 'Kyoto'],
    keyTemples: ['Shirdi Saibaba Temple (Tokyo)', 'Sri Sri Radha Govinda Mandir / ISKCON Tokyo', 'Historic Benzaiten Shrines (Enoshima, Kamakura)', 'Matsuchiyama Shoden (Kangiten / Ganesha temple, Asakusa)'],
    majorOrganizations: ['The Indian Community Activities Tokyo (ICAT)', 'Kobe Indian Club (est. 1904)', 'Japan-India Association (est. 1903)', 'Vishwa Hindu Parishad Japan'],
    historicalPresenceSummary: 'Ancient spiritual transmission via Bodhisena (Indian monk who consecrated the Great Buddha at Tōdai-ji, Nara in 752 CE); deep synthesis of Hindu deities into Japanese culture (Benzaiten/Saraswati, Daikokuten/Mahakala, Kangiten/Ganesha, Bishamonten/Kubera). Modern community anchored in Tokyo\'s tech corridors and historic Kobe pearl traders.',
    migrationHistorySummary: 'Sindhi and Gujarati pearl/silk merchants arrived in Yokohama and Kobe in the 1870s; modern IT engineers and academics concentrated in Nishi-Kasai (Tokyo).',
    historicalKingdoms: [
      {
        name: 'Classical Nara & Heian Cultural Syncretism',
        period: '710 – 1185 CE',
        classification: 'Hindu cultural influence',
        capital: 'Nara, Heian-kyo (Kyoto)',
        notableRulersOrSites: 'Bodhisena (Bharadvaja Brahmin monk from Madurai), Emperor Shomu (Todai-ji consecration)',
        primarySources: 'Shoku Nihongi (Imperial chronicle, 797 CE), Todai-ji records',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Enoshima Benzaiten Shrine (consecrated to Saraswati)', 'Todai-ji Temple in Nara consecrated by Indian monk Bodhisena (752 CE)', 'Sanskrit Siddham calligraphy preserved in Koyasan monasteries']
  },
  {
    id: 'ph',
    name: 'Philippines',
    sanskritName: 'फिलिपीन्स-द्वीपसमूहः',
    region: 'Southeast Asia',
    coordinates: [121.77, 12.87],
    estimatedPopulation: '28,000 - 35,000',
    percentageOfPopulation: '0.03%',
    dataYear: '2020 PSA / Embassy reports',
    dataConfidence: 'Scholarly research',
    dataSource: {
      title: 'Philippine Statistics Authority & National Museum Archaeology',
      authorOrBody: 'PSA Philippines & National Museum of the Philippines',
      yearOrPeriod: '2020',
      evidenceType: 'Archaeology',
      confidence: 'Archaeological evidence'
    },
    majorCities: ['Manila (Paco, Makati)', 'Cebu City', 'Davao City'],
    keyTemples: ['Hindu Temple of Manila (Paco, est. 1974)', 'Sri Sri Radha Madhava Mandir (Makati)', 'ISCOWP Farm (Rizal)'],
    majorOrganizations: ['Hindu Temple Inc. Paco', 'Indian Cultural Association of the Philippines', 'Sindhi Chamber of Commerce Manila'],
    historicalPresenceSummary: 'Archaeological evidence reveals pre-colonial contact with the Srivijaya and Majapahit empires, highlighted by the discovery of the Laguna Copperplate Inscription (900 CE) written in Kawi with Sanskrit vocabulary, and the 21-karat Golden Tara of Agusan.',
    migrationHistorySummary: 'Pre-colonial trade ties followed by Sindhi and Punjabi merchants arriving in the early 20th century, and modern healthcare and IT professionals.',
    historicalKingdoms: [
      {
        name: 'Rajnate of Butuan & Kingdom of Tondo',
        period: 'c. 9th – 15th century CE',
        classification: 'Hindu cultural influence',
        capital: 'Butuan (Mindanao), Tondo (Luzon)',
        notableRulersOrSites: 'Rajah Kiling, Golden Tara of Agusan, Laguna Copperplate',
        primarySources: 'Laguna Copperplate Inscription (900 CE), Song Dynasty trade records',
        evidenceConfidence: 'Archaeological evidence'
      }
    ],
    sacredSitesOrInscriptions: ['Golden Tara of Agusan (4-pound, 21-karat gold Buddhist-Hindu sculpture discovered in 1917, now in Chicago Field Museum)', 'Laguna Copperplate Inscription (900 CE)']
  }
]

export const HISTORICAL_REGIONS_EVIDENCE: HistoricalRegionData[] = [
  {
    id: 'angkor-khmer',
    regionName: 'Angkor & Khmer Empire (Cambodia, Thailand, Southern Laos)',
    modernCountries: ['Cambodia', 'Thailand', 'Laos'],
    period: '802 – 1431 CE',
    classification: 'Hindu-Buddhist',
    description: 'Immense civilizational complex centered on Yasodharapura (Angkor). Rulers combined Devaraja consecration rites, Sanskrit court literature, and vast stone temple construction dedicated to Shiva and Vishnu.',
    notableDynasties: ['Solar and Lunar lineages of Kambujadesha', 'Suryavarman I & II', 'Jayavarman VII'],
    keySitesAndInscriptions: [
      'Angkor Wat: Largest religious monument in the world, dedicated to Vishnu',
      'Sdok Kak Thom Inscription (1052 CE): Documents genealogy of royal Purohitas and Shiva linga establishment',
      'Banteay Srei: Red sandstone jewel dedicated to Tribhuvanamaheshvara'
    ],
    sources: [
      {
        title: 'The Indianized States of Southeast Asia',
        authorOrBody: 'George Cœdès (University of Hawaii Press)',
        yearOrPeriod: '1968',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      },
      {
        title: 'Inscriptions du Cambodge (8 volumes)',
        authorOrBody: 'George Cœdès / EFEO',
        yearOrPeriod: '1937–1966',
        evidenceType: 'Epigraphy',
        confidence: 'Archaeological evidence'
      }
    ],
    significance: 'Demonstrated complete architectural translation of Puranic cosmology into landscape, including hydraulic engineering and stone relief epics.'
  },
  {
    id: 'champa',
    regionName: 'Champa (Central & Southern Vietnam coast)',
    modernCountries: ['Vietnam'],
    period: 'c. 192 – 1832 CE',
    classification: 'Hindu',
    description: 'Independent maritime seafaring kingdom that built elaborate red-brick Shiva sanctuaries across the Vietnamese littoral, maintaining Sanskrit inscriptions for over a thousand years.',
    notableDynasties: ['Gangaraja Dynasty', 'Bhadravarman Lineage', 'Simhapura & Vijaya kings'],
    keySitesAndInscriptions: [
      'Võ Cạnh Inscription (2nd–3rd c. CE): Oldest Sanskrit inscription in Southeast Asia, recording king Sri Mara',
      'Mỹ Sơn Valley Sanctuary: UNESCO Shaiva sanctuary active from 4th to 14th century',
      'Po Nagar Towers (Nha Trang): Dedicated to Bhagavati / Yan Po Nagar'
    ],
    sources: [
      {
        title: 'Champa: History & Culture of an Indianized State',
        authorOrBody: 'R.C. Majumdar',
        yearOrPeriod: '1927 / 1985',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      },
      {
        title: 'The Cham of Vietnam: History, Society and Art',
        authorOrBody: 'Tran Ky Phuong & Bruce M. Lockhart (NUS Press)',
        yearOrPeriod: '2011',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      }
    ],
    significance: 'Living continuity: Modern Balamon Cham community still preserves ancestral Shaiva priesthood rites in Ninh Thuan.'
  },
  {
    id: 'majapahit-mataram',
    regionName: 'Mataram & Majapahit Empire (Java, Bali, Sumatra, Kalimantan)',
    modernCountries: ['Indonesia', 'Malaysia', 'Singapore'],
    period: '732 – 1527 CE',
    classification: 'Hindu-Buddhist',
    description: 'Thalassocratic archipelago empire that unified modern Indonesia and maritime Southeast Asia under the philosophy of Bhinneka Tunggal Ika (Unity in Diversity) and Shiva-Buddha syncretism.',
    notableDynasties: ['Sanjaya Dynasty of Medang', 'Singhasari', 'Rajasa Dynasty of Majapahit'],
    keySitesAndInscriptions: [
      'Prambanan (Shivagrha): 9th-century masterpiece with Ramayana friezes',
      'Canggal Inscription (732 CE): Sanskrit verses establishing Shiva linga on Mount Wukir',
      'Trowulan: Monumental brick capital of Majapahit',
      'Nagarakretagama (1365 CE): Epic Old Javanese poem by Mpu Prapanca'
    ],
    sources: [
      {
        title: 'Nāgara-kṛtāgama: Java in the 14th Century',
        authorOrBody: 'Theodoor Gautier Thomas Pigeaud',
        yearOrPeriod: '1960',
        evidenceType: 'Textual Tradition',
        confidence: 'Primary source'
      },
      {
        title: 'Early Kingdoms of the Indonesian Archipelago and the Malay Peninsula',
        authorOrBody: 'Paul Michel Munoz',
        yearOrPeriod: '2006',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      }
    ],
    significance: 'Origin of Indonesia\'s national motto "Bhinneka Tunggal Ika" from the Kakawin Sutasoma by Mpu Tantular.'
  },
  {
    id: 'kabul-shahi',
    regionName: 'Hindu Shahi / Kabul Shahi (Eastern Afghanistan & Punjab)',
    modernCountries: ['Afghanistan', 'Pakistan'],
    period: 'c. 850 – 1026 CE',
    classification: 'Hindu',
    description: 'Dynasty that ruled the Kabul Valley, Gandhara, and northern Punjab, resisting early Arab and Ghaznavid incursions. Built remarkable stone temples at Kafir Kot and Nandana.',
    notableDynasties: ['Kallar, Samanta, Jayapala, Anandapala, Trilochanapala'],
    keySitesAndInscriptions: [
      'Northern & Southern Kafir Kot temple forts on the Indus River',
      'Hund (Udabhandapura) Sanskrit inscriptions',
      'Gardez Ganesha marble sculpture (c. 6th-8th c. CE) with royal Sanskrit dedication'
    ],
    sources: [
      {
        title: 'Tarikh al-Hind (Al-Biruni\'s India)',
        authorOrBody: 'Abu Rayhan al-Biruni',
        yearOrPeriod: 'c. 1030 CE',
        evidenceType: 'Textual Tradition',
        confidence: 'Primary source'
      },
      {
        title: 'The Shahi Kingdoms of Gandhara and Udabhanda',
        authorOrBody: 'Abdur Rehman (Quaid-i-Azam University)',
        yearOrPeriod: '1979',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      }
    ],
    significance: 'Guardians of the northwestern passes for over two centuries; preserved classical Sanskrit coinage and temple architecture.'
  },
  {
    id: 'central-asia-silk-road',
    regionName: 'Khotan, Sogdia, and Bactria (Tarim Basin & Central Asia)',
    modernCountries: ['Uzbekistan', 'Tajikistan', 'China (Xinjiang)', 'Turkmenistan'],
    period: 'c. 1st – 8th century CE',
    classification: 'Hindu cultural influence',
    description: 'Along the Silk Road, Hindu deities such as Shiva (Veshparkar), Ganesha, Brahma, and Indra were revered in Sogdian murals (Penjikent), Khotanese manuscripts, and Kushan royal coinage.',
    notableDynasties: ['Kushan Empire', 'Sogdian city-states'],
    keySitesAndInscriptions: [
      'Penjikent murals (Tajikistan): Depictions of three-headed Shiva with Nandi and trident',
      'Dandan-Uiliq (Khotan): Murals showing four-armed Ganesha and blue Shiva',
      'Rabatak Inscription: Mentions Ommo (Uma) and Nana alongside Kushan rulers'
    ],
    sources: [
      {
        title: 'Buddhism and Hinduism in Central Asia and Along the Silk Road',
        authorOrBody: 'Sir Aurel Stein & B.N. Mukherjee',
        yearOrPeriod: '1907 / 1990',
        evidenceType: 'Archaeology',
        confidence: 'Archaeological evidence'
      },
      {
        title: 'Sogdian Painting: The Pictorial Epic in Oriental Art',
        authorOrBody: 'Guitty Azarpay (University of California Press)',
        yearOrPeriod: '1981',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      }
    ],
    significance: 'Proves the deep trans-Himalayan transmission of Sanskrit iconographic and philosophical concepts into Iranian-speaking Central Asia.'
  }
]

export const MIGRATION_ERAS: MigrationEra[] = [
  {
    id: 'ancient-ocean',
    eraName: 'Ancient Maritime & Silk Trade (c. 500 BCE – 1300 CE)',
    timePeriod: 'Antiquity to Medieval',
    title: 'The Maritime Silk Route & Cultural Consecration',
    summary: 'Merchants (Sārthavāhas), naval fleets, brāhmaṇa scholars, and sculptors traversed the Bay of Bengal and Arabian Sea. Sanskrit inscriptions, legal systems (Mānavadharmaśāstra adaptations), and temple architecture spread peacefully throughout Southeast Asia.',
    keyDestinations: ['Sri Lanka', 'Myanmar (Suvarnabhumi)', 'Malaya (Kataha)', 'Java (Yavadvipa)', 'Sumatra (Suvarnadvipa)', 'Cambodia (Kambuja)', 'Vietnam (Champa)', 'Oman & Socotra'],
    tradeRoutesOrAgreements: 'Monsoon trade winds between Coromandel / Kalinga / Bengal ports and Malacca Straits.',
    culturalImpact: 'Creation of indigenous classical scripts (Kawi, Khmer, Thai, Balinese) directly derived from Pallava Brahmi script; translation of Ramayana and Mahabharata into local literary traditions.',
    sources: [
      {
        title: 'Crossings: Early Mediterranean and Indian Ocean Trade',
        authorOrBody: 'K.N. Chaudhuri (Cambridge University Press)',
        yearOrPeriod: '1990',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      }
    ]
  },
  {
    id: 'colonial-indenture',
    eraName: 'Colonial Indenture & Girmitiya Era (1834 – 1920 CE)',
    timePeriod: '19th to early 20th Century',
    title: 'The Girmitiya Journey: Faith Across the Oceans',
    summary: 'Following the abolition of slavery across the British, French, and Dutch empires, over 1.5 million Indian laborers—predominantly from Uttar Pradesh, Bihar, Tamil Nadu, and Andhra—were contracted under agreements ("Girmit"). Despite harsh plantation conditions, they carried small copies of the Ramcharitmanas, established mandirs, and preserved traditions.',
    keyDestinations: ['Mauritius', 'Guyana', 'Trinidad & Tobago', 'Suriname', 'Fiji', 'South Africa', 'Reunion Island', 'Jamaica', 'Kenya & Uganda'],
    tradeRoutesOrAgreements: 'Five-year indenture contracts signed at Calcutta and Madras recruitment depots; voyages lasting up to 3 months.',
    culturalImpact: 'Creation of enduring diaspora societies in the Caribbean, Indian Ocean, and Pacific where Sanātana Dharma remains vibrant, fostering new musical forms (Baithak Gana, Chutney, Bhajan mandalis).',
    sources: [
      {
        title: 'A New System of Slavery: The Export of Indian Labour Overseas 1830-1920',
        authorOrBody: 'Hugh Tinker (Oxford University Press)',
        yearOrPeriod: '1974',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      },
      {
        title: 'Aapravasi Ghat Archives and Indenture Records',
        authorOrBody: 'National Archives of Mauritius',
        yearOrPeriod: '1834-1920',
        evidenceType: 'Government Statistical Bureau',
        confidence: 'Primary source'
      }
    ]
  },
  {
    id: 'modern-global',
    eraName: 'Modern Global Diaspora & Knowledge Movement (1965 – Present)',
    timePeriod: 'Mid-20th to 21st Century',
    title: 'Global Professional, Academic & Cultural Presence',
    summary: 'Post-1965 immigration reforms in North America, the UK, Australia, and the Gulf opened pathways for engineers, physicians, entrepreneurs, and scientists. Monumental traditional stone mandirs, university Sanskrit chairs, and major festivals (Diwali in Times Square, London Trafalgar Square) mark this renaissance.',
    keyDestinations: ['United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore', 'New Zealand', 'Germany', 'Netherlands'],
    tradeRoutesOrAgreements: 'H-1B, skilled migration points system, Gulf labor migration agreements, student visas.',
    culturalImpact: 'Establishment of over 2,000 Hindu temples in the West, Yoga and Ayurveda global adoption, philanthropic organizations (SEWA International), and civic representation.',
    sources: [
      {
        title: 'The Hindu Diaspora: Comparative Patterns',
        authorOrBody: 'Steven Vertovec (Routledge)',
        yearOrPeriod: '2000',
        evidenceType: 'Scholarly Monograph',
        confidence: 'Scholarly research'
      },
      {
        title: 'Pew Research: Asian Americans and Global Religious Change',
        authorOrBody: 'Pew Research Center',
        yearOrPeriod: '2015-2023',
        evidenceType: 'Census',
        confidence: 'Scholarly research'
      }
    ]
  }
]

export const KOREA_AYODHYA_ANALYSIS = {
  title: 'Korea and Ayodhya: The Legend of Queen Heo Hwang-ok (Suriratna)',
  koreanTitle: '허황옥 (許黃玉) 과 아유타국 (阿踰陀國)',
  primarySourceText: 'Samguk Yusa (삼국유사 / 三國遺事 - Memorabilia of the Three Kingdoms), Book 2, "Garakguk-gi" (Record of Garak Kingdom), compiled by Buddhist Monk Iryeon in c. 1281 CE.',
  traditionalAccount: 'According to the 13th-century chronicle Samguk Yusa, in the year 48 CE, a 16-year-old princess named Heo Hwang-ok arrived by boat from the distant kingdom of "Ayuta" (阿踰陀). She told King Suro, the founder of the Geumgwan Gaya (Garak) confederacy in southeastern Korea, that her royal parents were visited in a dream by the Heavenly Sovereign (Sangje), who instructed them to send their daughter to marry King Suro. The King welcomed her, and they became the ancestral parents of the Gimhae Kim and Gimhae Heo clans, whose descendants today number over six million Koreans.',
  distinctionFramework: [
    {
      category: '1. Traditional Belief & Cultural Memory',
      status: 'Living Cultural Heritage',
      details: 'Many members of the Gimhae Kim and Heo clans cherish the account as an ancient ancestral narrative. Memorial shrines, annual memorial rites, and a royal tomb dedicated to Queen Heo in Gimhae, South Korea, have been maintained for centuries.'
    },
    {
      category: '2. Modern Diplomatic & Cultural Ties',
      status: 'Celebrated International Sisterhood',
      details: 'In 2001, Gimhae and Ayodhya established an official sister-city partnership. In 2018, South Korean First Lady Kim Jung-sook visited Ayodhya to lay the foundation stone for the Queen Heo Hwang-ok Memorial Park on the banks of the Saryu River.'
    },
    {
      category: '3. Historical & Textual Evidence',
      status: 'Textual Record Written 12 Centuries Later',
      details: 'The earliest surviving written source, the Samguk Yusa, was compiled in 1281 CE—more than 1,200 years after the purported events of 48 CE. Scholars note that medieval Korean chronicles frequently incorporated mythic, Buddhist, and sea-crossing tropes to grant divine legitimacy to ancient royal lineages.'
    },
    {
      category: '4. Linguistic & Geographical Identification Debate',
      status: 'Debated Academic Interpretation',
      details: 'While popular tradition equates "Ayuta" (阿踰陀) with Ayodhya in Uttar Pradesh, academic historians have proposed alternative identifications: Ayutthaya in Thailand (though founded later in 1351 CE), an Indonesian maritime principality, an ancient southern Chinese coastal port, or an allegorical Buddhist realm derived from the Sanskrit "Ayodhyā" (unconquerable).'
    },
    {
      category: '5. Archaeological & Genetic Evidence',
      status: 'Inconclusive / No Definite Genetic Link Established',
      details: 'The "Pasa Stone Pagoda" (Pasa Seoktap) at Queen Heo’s tomb in Gimhae is made of a stone type not native to Korea, leading some to propose a sea voyage origin. However, genetic studies on human remains from Gaya tombs have yielded mixed and contested results, with no established peer-reviewed consensus confirming ancient North Indian royal ancestry.'
    }
  ],
  verdictSummary: 'Some Korean traditions and popular accounts connect the ancient Korean royal lineage of King Suro with a princess of Ayuta, popularly identified with Ayodhya. The historical status of this connection remains debated and should be presented with clear source labels: it is an important cultural and traditional tie that enriches modern friendship, rather than an established historical or biological fact.',
  sources: [
    {
      title: 'Samguk Yusa: Legends and History of the Three Kingdoms of Ancient Korea',
      authorOrBody: 'Monk Iryeon (Trans. Tae-Hung Ha & Grafton K. Mintz, Yonsei University Press)',
      yearOrPeriod: '1281 CE / 1972',
      evidenceType: 'Textual Tradition',
      confidence: 'Historical tradition'
    },
    {
      title: 'Queen Hwang-ok of Garak: Myth and Reality',
      authorOrBody: 'Kim Byung-mo (Archaeologist & Professor Emeritus, Hanyang University)',
      yearOrPeriod: '2001',
      evidenceType: 'Scholarly Monograph',
      confidence: 'Scholarly research'
    },
    {
      title: 'Gaya Archaeology and the Maritime Silk Road',
      authorOrBody: 'National Museum of Korea Research Reports',
      yearOrPeriod: '2019',
      evidenceType: 'Archaeological evidence',
      confidence: 'Requires verification'
    }
  ]
}

export const COMMUNITY_DIRECTORY_DATA: CommunityDirectoryItem[] = [
  {
    id: 'baps-neasden',
    name: 'BAPS Shri Swaminarayan Mandir (Neasden)',
    category: 'Temple',
    country: 'United Kingdom',
    city: 'London',
    coordinates: [-0.26, 51.55],
    foundedYear: '1995',
    traditionOrFocus: 'Swaminarayan / Vaishnava',
    description: 'Masterpiece of traditional Hindu stone architecture carved from Bulgarian limestone and Italian Carrara marble.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'akshardham-robbinsville',
    name: 'BAPS Swaminarayan Akshardham',
    category: 'Temple',
    country: 'United States',
    city: 'Robbinsville, New Jersey',
    coordinates: [-74.58, 40.23],
    foundedYear: '2023',
    traditionOrFocus: 'Sanatana Dharma / Universal Peace',
    description: 'Largest Hindu mandir complex in the Western Hemisphere, dedicated to Bhagwan Swaminarayan and ancient Indian sages.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'sri-siva-subramaniya-fiji',
    name: 'Sri Siva Subramaniya Temple',
    category: 'Temple',
    country: 'Fiji',
    city: 'Nadi',
    coordinates: [177.44, -17.81],
    foundedYear: '1926 / Rebuilt 1994',
    traditionOrFocus: 'Shaivite / Murugan / Dravidian Agama',
    description: 'Largest Hindu temple in the Southern Hemisphere, honoring the faith and perseverance of Fiji Girmitiyas.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'waterloo-trinidad',
    name: 'Temple in the Sea at Waterloo',
    category: 'Temple',
    country: 'Trinidad and Tobago',
    city: 'Waterloo, Carapichaima',
    coordinates: [-61.47, 10.47],
    foundedYear: '1947–1952 (Reconstructed 1995)',
    traditionOrFocus: 'Universal Sanatani Devotion',
    description: 'Hand-built on the sea reef by Sewdass Sadhu after colonial plantation authorities banned him from building on land.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'baps-abu-dhabi',
    name: 'BAPS Hindu Mandir Abu Dhabi',
    category: 'Temple',
    country: 'United Arab Emirates',
    city: 'Abu Dhabi (Abu Mureikha)',
    coordinates: [54.77, 24.60],
    foundedYear: '2024',
    traditionOrFocus: 'Universal Harmony / Sanatana Dharma',
    description: 'First traditional Hindu stone temple in the Middle East, built on land gifted by Crown Prince Sheikh Mohammed bin Zayed Al Nahyan.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'maheswarnath-mauritius',
    name: 'Maheswarnath Shiv Mandir (Triolet)',
    category: 'Temple',
    country: 'Mauritius',
    city: 'Triolet',
    coordinates: [57.55, -20.05],
    foundedYear: '1891',
    traditionOrFocus: 'Shaivite / Bengal-style Shivalaya',
    description: 'Historic and largest temple complex in Mauritius, founded by Pandit Sanjibonlall Ramsoondur.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'pura-besakih-bali',
    name: 'Pura Besakih (Mother Temple of Bali)',
    category: 'Temple',
    country: 'Indonesia',
    city: 'Karangasem, Bali',
    coordinates: [115.45, -8.37],
    foundedYear: 'c. 8th–10th Century CE',
    traditionOrFocus: 'Agama Hindu Dharma / Tri Murti / Shiva-Siddhanta',
    description: 'The holiest and largest temple complex in Bali, terraced on the slopes of sacred Mount Agung.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'batu-caves-malaysia',
    name: 'Batu Caves Sri Subramaniar Swamy Devasthanam',
    category: 'Temple',
    country: 'Malaysia',
    city: 'Gombak, Selangor',
    coordinates: [101.68, 3.24],
    foundedYear: '1890',
    traditionOrFocus: 'Kaumaram / Lord Murugan',
    description: 'Limestone hill featuring the iconic 140-foot golden Lord Murugan statue and 272 steps, host to the world\'s largest Thaipusam pilgrimage.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'sri-mariamman-singapore',
    name: 'Sri Mariamman Temple',
    category: 'Temple',
    country: 'Singapore',
    city: 'Chinatown / South Bridge Road',
    coordinates: [103.84, 1.28],
    foundedYear: '1827',
    traditionOrFocus: 'Shakta / Dravidian Temple Architecture',
    description: 'Oldest Hindu temple in Singapore, gazetted as a National Monument of Singapore.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'baps-nairobi-kenya',
    name: 'BAPS Shri Swaminarayan Mandir (Nairobi)',
    category: 'Temple',
    country: 'Kenya',
    city: 'Forest Road, Nairobi',
    coordinates: [36.82, -1.27],
    foundedYear: '1999',
    traditionOrFocus: 'Swaminarayan / Traditional Stone Architecture',
    description: 'Constructed entirely from yellow Rajasthani sandstone without steel framing, recognized for architectural craftsmanship in East Africa.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'motishwar-mandir-oman',
    name: 'Motishwar Mandir (Old Muscat Shiva Temple)',
    category: 'Temple',
    country: 'Oman',
    city: 'Old Muscat',
    coordinates: [58.59, 23.61],
    foundedYear: 'c. 1890s (Over 125 Years)',
    traditionOrFocus: 'Shaivite / Mercantile Community Devotion',
    description: 'Historic Shiva temple at the foot of Muscat\'s mountain fortress, preserved by the Hindu Mahajan merchant community.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'seoul-radha-shyamasundar',
    name: 'Sri Radha Shyamasundar Mandir',
    category: 'Temple',
    country: 'South Korea',
    city: 'Seoul (Haebangchon)',
    coordinates: [126.98, 37.53],
    foundedYear: '2008',
    traditionOrFocus: 'Gaudiya Vaishnavism / Vedic Wisdom',
    description: 'Center for Vedic studies, Sanskrit chanting, and festival celebrations in the heart of Seoul.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'gimhae-queen-heo-memorial',
    name: 'Queen Heo Hwang-ok Memorial Park & Shrine',
    category: 'Cultural Association',
    country: 'South Korea',
    city: 'Gimhae, Gyeongsangnam-do',
    coordinates: [128.88, 35.24],
    foundedYear: '2001 (Sister-city park expanded 2019)',
    traditionOrFocus: 'Historical Chronicle Memory & Cultural Diplomacy',
    description: 'Memorial site commemorating the chronicle tradition linking Princess Suriratna of Ayuta (Ayodhya) and King Suro of Gaya.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'bharatiya-mandir-auckland',
    name: 'Bharatiya Mandir Auckland',
    category: 'Temple',
    country: 'New Zealand',
    city: 'Sandringham, Auckland',
    coordinates: [174.73, -36.88],
    foundedYear: '1986',
    traditionOrFocus: 'Sanatana Dharma / Universal Devotion',
    description: 'First purpose-built Hindu temple in New Zealand, serving as the spiritual anchor for the New Zealand diaspora.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'kamadchi-ampal-germany',
    name: 'Sri Kamadchi Ampal Temple',
    category: 'Temple',
    country: 'Germany',
    city: 'Hamm-Uentrop',
    coordinates: [7.92, 51.68],
    foundedYear: '2002',
    traditionOrFocus: 'Shakta / Dravidian Gopuram Tradition',
    description: 'Second largest Hindu temple in Europe, built by Tamil Hindus in North Rhine-Westphalia with an authentic granite sanctum.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'haf-usa',
    name: 'Hindu American Foundation (HAF)',
    category: 'Cultural Association',
    country: 'United States',
    city: 'Washington, D.C.',
    coordinates: [-77.03, 38.90],
    foundedYear: '2003',
    traditionOrFocus: 'Advocacy, Human Rights & Education',
    description: 'Non-profit advocacy organization providing a clear, authentic voice for Hindu Americans on policy and civil rights.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'sewa-international',
    name: 'Sewa International Global',
    category: 'Seva Organization',
    country: 'Global (India, USA, UK, Australia, Guyana)',
    city: 'Houston / New Delhi / London',
    coordinates: [-95.36, 29.76],
    foundedYear: '1997',
    traditionOrFocus: 'Naraseva is Narayanaseva / Disaster Relief & Education',
    description: 'Selfless community service organization active in major flood, earthquake, and humanitarian emergency response operations.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'parisada-hindu-indonesia',
    name: 'Parisada Hindu Dharma Indonesia (PHDI)',
    category: 'Sampradāya Community',
    country: 'Indonesia',
    city: 'Jakarta & Denpasar',
    coordinates: [115.22, -8.67],
    foundedYear: '1959',
    traditionOrFocus: 'Agama Hindu Dharma / Balinese Hindu Tradition',
    description: 'Highest representative council of Hindus in Indonesia, preserving ancestral temple rites, festivals, and philosophy.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'malaysia-hindu-sangam',
    name: 'Malaysia Hindu Sangam (MHS)',
    category: 'Cultural Association',
    country: 'Malaysia',
    city: 'Petaling Jaya, Selangor',
    coordinates: [101.65, 3.10],
    foundedYear: '1965',
    traditionOrFocus: 'Preservation of Temples, Tamil & Sanskrit Heritage',
    description: 'Apex national body coordinating Hindu temples, religious education, and community advocacy across Malaysia.',
    verifiedStatus: 'Verified'
  },
  {
    id: 'chinmaya-mission-west',
    name: 'Chinmaya Mission Worldwide',
    category: 'Study Group',
    country: 'Global (USA, UK, Canada, Australia, Singapore, India)',
    city: 'Mumbai / Piercy, CA',
    coordinates: [-123.79, 39.97],
    foundedYear: '1953',
    traditionOrFocus: 'Advaita Vedanta / Bhagavad Gita & Upanishads Study',
    description: 'Founded by Swami Chinmayananda to provide spiritual wisdom of the scriptures to all ages through study groups (Bala Vihar).',
    verifiedStatus: 'Verified'
  },
  {
    id: 'arya-pratinidhi-fiji',
    name: 'Arya Pratinidhi Sabha of Fiji',
    category: 'Youth Group',
    country: 'Fiji',
    city: 'Suva',
    coordinates: [178.44, -18.14],
    foundedYear: '1904',
    traditionOrFocus: 'Vedic Education, Schools & Social Reform',
    description: 'Established the primary educational institutions in Fiji, championing girls\' education and Vedic values.',
    verifiedStatus: 'Verified'
  }
]

export const GEO_MIGRATION_ROUTES: GeoMigrationRoute[] = [
  {
    id: 'ancient-maritime-se-asia',
    eraId: 'ancient-ocean',
    eraTitle: 'Ancient Maritime & Silk Trade (c. 500 BCE – 1300 CE)',
    title: 'Bay of Bengal & Maritime Silk Route',
    timePeriod: '1st Millennium CE',
    origin: 'Kalinga (Odisha), Coromandel (Tamil Nadu) & Tamralipta (Bengal)',
    destination: 'Suvarnabhumi, Kataha, Java, Bali & Angkor (SE Asia)',
    waypoints: [
      [21.6, 87.9],
      [17.7, 83.3],
      [13.0, 80.3],
      [11.6, 92.7],
      [5.4, 100.3],
      [1.3, 103.8],
      [-6.2, 106.8],
      [-8.3, 115.1],
      [10.5, 107.0],
      [13.4, 103.8]
    ],
    vesselOrType: 'Ancient Indian merchant galleys & Sārthavāha fleets',
    significance: 'Carried Sanskrit epigraphy, Pallava script, Ramayana, and architectural shastras resulting in Angkor Wat, Prambanan, and Champa sanctuaries.',
    keyPortsOrStops: ['Tamralipta', 'Mamallapuram', 'Nagapattinam', 'Kedah Tua', 'Palembang', 'Medang (Java)', 'Angkor'],
    evidenceConfidence: 'Archaeological evidence',
    sourcesSummary: 'Bujang Valley 5th-century epigraphy, Vo Canh stele, Canggal inscription, Periplus of the Erythraean Sea.'
  },
  {
    id: 'chola-maritime-expedition',
    eraId: 'ancient-ocean',
    eraTitle: 'Classical & Medieval Maritime Spheres (c. 800 – 1300 CE)',
    title: 'Chola Imperial Maritime Route (Rajendra Chola I)',
    timePeriod: '1025 CE – 1100 CE',
    origin: 'Nagapattinam & Kaveripattinam (Tamil Nadu)',
    destination: 'Kadaram (Kedah, Malaysia), Srivijaya (Sumatra), Pannai & Tambralinga',
    waypoints: [
      [10.76, 79.84],
      [11.6, 92.7],
      [5.4, 100.3],
      [3.0, 101.4],
      [-2.9, 104.7],
      [1.3, 103.8]
    ],
    vesselOrType: 'Chola Royal War Galleys and Ainnurruvar (Five Hundred Lords of Ayyavole) Merchant Navies',
    significance: 'Secured naval trade lanes, protected Tamil and Sanskrit guild merchant colonies (Manigramam), and established permanent diplomatic embassies to China (Song Dynasty).',
    keyPortsOrStops: ['Nagapattinam', 'Andaman & Nicobar Islands', 'Kadaram (Kedah)', 'Palembang (Srivijaya)', 'Malacca Strait'],
    evidenceConfidence: 'Epigraphic Evidence' as ConfidenceLabel,
    sourcesSummary: 'Thanjavur Brihadisvara Temple inscriptions (1025 CE), Canton & Quanzhou Tamil-Chinese bilingual stele, Song Shi imperial annals.'
  },
  {
    id: 'ancient-silk-road-trans-himalaya',
    eraId: 'ancient-ocean',
    eraTitle: 'Ancient Maritime & Silk Trade (c. 500 BCE – 1300 CE)',
    title: 'Northern Silk Road & Trans-Himalayan Cultural Diffusion',
    timePeriod: '1st – 8th Century CE',
    origin: 'Gandhara (Takṣaśilā) & Kashmir',
    destination: 'Tarim Basin (Khotan), Dunhuang, Chang\'an, Korea & Japan',
    waypoints: [
      [33.7, 72.8],
      [34.1, 74.8],
      [37.1, 79.9],
      [40.1, 94.6],
      [34.3, 108.9],
      [35.2, 128.8],
      [34.6, 135.8]
    ],
    vesselOrType: 'Trans-Himalayan caravans along Northern Silk Road passes',
    significance: 'Transmission of Sanskrit philosophical texts, Ayurvedic treatises, and deity iconography (Shiva/Mahakala, Saraswati, Ganesha) into Central Asia and East Asia.',
    keyPortsOrStops: ['Takṣaśilā', 'Srinagar', 'Khotan (Dandan-Uiliq)', 'Dunhuang Caves', 'Luoyang', 'Gimhae (Korea)', 'Nara (Japan)'],
    evidenceConfidence: 'Archaeological evidence',
    sourcesSummary: 'Penjikent murals, Aurel Stein Tarim manuscripts, Shoku Nihongi records of monk Bodhisena (752 CE).'
  },
  {
    id: 'ancient-western-indian-ocean',
    eraId: 'ancient-ocean',
    eraTitle: 'Ancient Maritime & Silk Trade (c. 500 BCE – 1300 CE)',
    title: 'Western Indian Ocean & Arabian Sea Trade',
    timePeriod: 'c. 300 BCE – 1400 CE',
    origin: 'Bharuch (Bhrigukaccha) & Mandvi (Kutch)',
    destination: 'Muscat (Oman), Socotra, Aden & Swahili Coast',
    waypoints: [
      [21.7, 72.9],
      [22.8, 69.3],
      [23.6, 58.5],
      [12.8, 45.0],
      [-6.1, 39.2]
    ],
    vesselOrType: 'Traditional dhow vessels powered by winter Northeast monsoons',
    significance: 'Centuries of commercial exchanges between Gujarat/Sindh and Gulf ports; established persistent mercantile settlements with cultural autonomy in Oman and East Africa.',
    keyPortsOrStops: ['Bharuch', 'Mandvi', 'Muscat', 'Socotra', 'Zanzibar'],
    evidenceConfidence: 'Scholarly research',
    sourcesSummary: 'Periplus of the Erythraean Sea, Al-Masudi Meadows of Gold, Old Muscat temple charters.'
  },
  {
    id: 'girmit-mauritius',
    eraId: 'colonial-indenture',
    eraTitle: 'Colonial Indenture & Girmitiya Era (1834 – 1920 CE)',
    title: 'Girmitiya Passage to Mauritius (The Pilot Migration)',
    timePeriod: '1834 – 1910 CE',
    origin: 'Calcutta & Madras Depots',
    destination: 'Aapravasi Ghat, Port Louis (Mauritius)',
    waypoints: [
      [22.5, 88.3],
      [13.0, 80.3],
      [6.0, 82.0],
      [-5.0, 75.0],
      [-20.1, 57.5]
    ],
    vesselOrType: 'Ship *Atlas* (First departure, Nov 2, 1834) and fleet transport',
    significance: 'First experimental indenture migration after British abolition of slavery in 1834; over 450,000 workers entered through Aapravasi Ghat, founding Mauritius\'s Hindu plurality.',
    keyPortsOrStops: ['Calcutta Depot', 'Madras Depot', 'Aapravasi Ghat (UNESCO Heritage)'],
    evidenceConfidence: 'Census data',
    sourcesSummary: 'National Archives of Mauritius (Aapravasi Ghat immigration registers 1834-1920).'
  },
  {
    id: 'girmit-south-africa',
    eraId: 'colonial-indenture',
    eraTitle: 'Colonial Indenture & Girmitiya Era (1834 – 1920 CE)',
    title: 'Girmitiya Route to Natal (South Africa)',
    timePeriod: '1860 – 1911 CE',
    origin: 'Madras & Calcutta Depots',
    destination: 'Port Natal (Durban, South Africa)',
    waypoints: [
      [13.0, 80.3],
      [22.5, 88.3],
      [6.0, 80.0],
      [-10.0, 60.0],
      [-25.0, 45.0],
      [-29.8, 31.0]
    ],
    vesselOrType: 'Vessels *SS Truro* (arrived Nov 16, 1860) & *Belvedere*',
    significance: 'Over 150,000 laborers brought to work sugarcane estates in KwaZulu-Natal; later served as the crucible for Mahatma Gandhi\'s Satyagraha movement (1893-1914).',
    keyPortsOrStops: ['Madras Depot', 'Port Natal (Durban)', 'Pietermaritzburg'],
    evidenceConfidence: 'Census data',
    sourcesSummary: 'KwaZulu-Natal Provincial Archives; Department of Immigration reports Colony of Natal.'
  },
  {
    id: 'girmit-caribbean',
    eraId: 'colonial-indenture',
    eraTitle: 'Colonial Indenture & Girmitiya Era (1834 – 1920 CE)',
    title: 'Trans-Atlantic Girmit Voyage to Guyana, Trinidad & Suriname',
    timePeriod: '1838 – 1917 CE',
    origin: 'Calcutta Port (Garden Reach)',
    destination: 'Highbury (Guyana), Port of Spain (Trinidad) & Paramaribo (Suriname)',
    waypoints: [
      [22.5, 88.3],
      [5.0, 82.0],
      [-34.0, 18.4],
      [0.0, -20.0],
      [6.8, -58.1],
      [5.8, -55.2],
      [10.6, -61.5]
    ],
    vesselOrType: '*Whitby* & *Hesperus* (1838), *Fatel Razack* (1845), *Lalla Rookh* (1873)',
    significance: 'Sailing three to four months around the Cape of Good Hope across the Atlantic; established enduring Indo-Caribbean communities preserving Awadhi/Bhojpuri traditions.',
    keyPortsOrStops: ['Calcutta', 'Cape Town (Resupply)', 'Highbury (Berbice)', 'Gulf of Paria (Trinidad)', 'Paramaribo (Suriname)'],
    evidenceConfidence: 'Census data',
    sourcesSummary: 'National Archives of Trinidad & Tobago; ABS Suriname; Guyana National Archives.'
  },
  {
    id: 'girmit-fiji',
    eraId: 'colonial-indenture',
    eraTitle: 'Colonial Indenture & Girmitiya Era (1834 – 1920 CE)',
    title: 'Trans-Pacific Girmit Voyage to Fiji',
    timePeriod: '1879 – 1916 CE',
    origin: 'Calcutta & Madras Depots',
    destination: 'Suva & Nadi (Fiji)',
    waypoints: [
      [22.5, 88.3],
      [5.0, 95.0],
      [-8.0, 115.0],
      [-25.0, 130.0],
      [-35.0, 150.0],
      [-18.1, 178.4]
    ],
    vesselOrType: 'Ship *Leonidas* (arrived May 14, 1879) and 86 subsequent voyages',
    significance: 'Over 60,000 laborers transported across 7,000 miles of sea; built schools and temples throughout Viti Levu and Vanua Levu, establishing Fiji Hindi.',
    keyPortsOrStops: ['Calcutta Depot', 'Torres Strait Passage', 'Yanuca Quarantine Station', 'Suva'],
    evidenceConfidence: 'Census data',
    sourcesSummary: 'Fiji National Archives; Indian Emigration Pass Registers (1879-1916).'
  },
  {
    id: 'modern-global-north-america',
    eraId: 'modern-global',
    eraTitle: 'Modern Global Diaspora & Knowledge Movement (1965 – Present)',
    title: 'North American Skilled & Professional Migration',
    timePeriod: '1965 – Present',
    origin: 'India (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai)',
    destination: 'United States & Canada (NYC, Silicon Valley, Texas, Toronto)',
    waypoints: [
      [19.0, 72.8],
      [28.6, 77.2],
      [51.5, -0.1],
      [40.7, -74.0],
      [43.6, -79.3],
      [37.7, -122.4]
    ],
    vesselOrType: 'Commercial aviation routes post-1965 Immigration & Nationality Act',
    significance: 'Led to the founding of monumental traditional mandirs (Robbinsville Akshardham, Toronto BAPS Mandir), university chairs, and medical/tech innovation.',
    keyPortsOrStops: ['New Delhi / Mumbai', 'New York (JFK)', 'Toronto (YYZ)', 'San Francisco (SFO)'],
    evidenceConfidence: 'Census data',
    sourcesSummary: 'U.S. Census Bureau American Community Survey; Statistics Canada 2021 Census.'
  },
  {
    id: 'modern-global-gulf',
    eraId: 'modern-global',
    eraTitle: 'Modern Global Diaspora & Knowledge Movement (1965 – Present)',
    title: 'Arabian Gulf Workforce & Institutional Community Movement',
    timePeriod: '1970s – Present',
    origin: 'Kerala, Gujarat, Maharashtra, Andhra Pradesh, Tamil Nadu',
    destination: 'United Arab Emirates, Oman, Qatar, Bahrain, Kuwait',
    waypoints: [
      [10.0, 76.3],
      [19.0, 72.8],
      [23.0, 72.6],
      [24.4, 54.3],
      [25.2, 55.3],
      [23.6, 58.5]
    ],
    vesselOrType: 'Gulf airline corridors and commercial shipping routes',
    significance: 'Over 3.5 million Indian professionals and workers in the GCC; historic 2024 milestone opening of the BAPS Hindu Mandir in Abu Dhabi on royal land gift.',
    keyPortsOrStops: ['Kochi / Mumbai', 'Dubai', 'Abu Dhabi', 'Muscat'],
    evidenceConfidence: 'Census data',
    sourcesSummary: 'UAE Ministry of Human Resources & Emiratisation; NCSI Oman; Indian Ministry of External Affairs.'
  }
]

export const INITIAL_COMMUNITY_COMMENTS: CommunityComment[] = [
  {
    id: 'cmt-1',
    countryId: 'mu',
    author: 'Kavi Sharma',
    location: 'Port Louis, Mauritius',
    contributionType: 'Migration Story',
    text: 'My great-grandfather arrived on the ship from Bhojpur in 1888. The family carried a handwritten pocket Hanuman Chalisa wrapped in turmeric-dyed cloth. Today our village in Triolet gathers every Tuesday for Ramayan Satsang. Thank you AUM for documenting the Girmitiya struggle with such honor.',
    date: '2026-04-12',
    isTraditionOrHistory: 'Personal / Family Tradition',
    status: 'Published'
  },
  {
    id: 'cmt-2',
    countryId: 'id',
    author: 'Wayan Sudarsana',
    location: 'Denpasar, Bali, Indonesia',
    contributionType: 'Local History',
    text: 'In Bali, we worship Ida Sang Hyang Widhi Wasa through Tri Murti in our Pura Kahyangan Tiga. Our Sanskrit prayers are chanted in the ancient Brahmic meter. It is wonderful to see AUM highlight both historical Majapahit and living Balinese tradition without collapsing our unique identity.',
    date: '2026-05-01',
    isTraditionOrHistory: 'Documented History with Sources',
    sourceCitation: 'Parisada Hindu Dharma Indonesia guidelines & Lontar manuscript archives.',
    status: 'Published'
  },
  {
    id: 'cmt-3',
    countryId: 'tt',
    author: 'Priya Persad',
    location: 'Chaguanas, Trinidad',
    contributionType: 'Local History',
    text: 'The story of Sewdass Sadhu building the Temple in the Sea using his bicycle and buckets for 25 years after colonial jail terms is celebrated every year during Indian Arrival Day. It stands as living proof that faith outlasts imperial oppression.',
    date: '2026-05-18',
    isTraditionOrHistory: 'Documented History with Sources',
    sourceCitation: 'National Archives of Trinidad & Tobago, Waterloo Heritage Registry.',
    status: 'Published'
  },
  {
    id: 'cmt-4',
    countryId: 'vn',
    author: 'Dr. Nguyen Van Son',
    location: 'Phan Rang, Vietnam',
    contributionType: 'Source Citation',
    text: 'The Võ Cạnh Sanskrit inscription from Khanh Hoa province (now in National Museum of Vietnamese History) is the earliest known Sanskrit epigraph in Southeast Asia. I appreciate AUM using precise scholarly classification instead of over-simplifying.',
    date: '2026-06-02',
    isTraditionOrHistory: 'Documented History with Sources',
    sourceCitation: 'Bulletin de l\'École française d\'Extrême-Orient (BEFEO) Vol. 15.',
    status: 'Published'
  }
]

export const COMMUNITY_COMMENTS_SEED = INITIAL_COMMUNITY_COMMENTS
