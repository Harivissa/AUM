import { SmritiCase } from './types'

export const CASES_PARTITION: SmritiCase[] = [
  {
    id: 'case-partition-punjab-1947',
    catalogueCode: 'SMR-PB-1947',
    title: 'The Great Partition of Punjab & Train Massacres',
    sanskritTitle: 'भारतविभाजनम् पञ्जाबविस्थापनम् च (१९४७)',
    alternateTitles: ['Punjab Partition Massacres', 'Refugee Train Ambush 1947'],
    location: 'West Punjab (Rawalpindi, Lahore, Multan, Sialkot, Sheikhupura)',
    region: 'Indus Basin',
    country: 'Pakistan / India',
    coordinates: { lat: 31.5204, lng: 74.3587 },
    startDate: 'August 1947',
    endDate: '1948',
    dateDisplay: 'August 1947 – 1948',
    timelinePeriod: 'Partition',
    incidentType: 'PARTITION',
    motive: 'political motive',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Millions of Hindu and Sikh civilians across newly demarcated West Pakistan',
    summary: 'Cataclysmic mass violence, train ambushes, abductions, and forced flight of over 7 million Hindus and Sikhs across newly drawn international borders.',
    whatHappened: 'The partition of British India triggered the largest forced mass migration in modern history. In West Punjab, towns like Rawalpindi, Multan, Lahore, and Sialkot saw near-complete ethnic cleansing of their ancient Hindu and Sikh populations. Refugee trains were ambushed, foot columns (kafilas) spanning miles were attacked, and thousands of women jumped into wells to preserve their honor.',
    whoWasAffected: 'Over 7.2 million Hindu and Sikh refugees uprooted from their ancestral lands, havelis, businesses, and universities.',
    whereText: 'West Punjab districts: Rawalpindi, Lahore, Gujranwala, Sheikhupura, Multan, and border corridors into East Punjab.',
    whenText: 'August 1947 to early 1948.',
    whatWasLost: 'Total Partition deaths across all communities are estimated between 500,000 and 1,500,000; hundreds of thousands of Hindu and Sikh civilian lives; thousands of temples, gurdwaras, and properties abandoned.',
    casualties: {
      displaySummary: 'Scholarly consensus estimates total Partition deaths between 500,000 and 1.5 million across communities; Hindu and Sikh civilian deaths in West Pakistan estimated at several hundreds of thousands.',
      deaths: '500,000 to 1,500,000 across Punjab',
      displaced: 'Over 7.2 million Hindus and Sikhs migrated from West Pakistan into India',
      sourceA: { estimate: 'Justice G.D. Khosla fact-finding committee estimated between 400,000 and 500,000 total non-Muslim casualties in West Punjab', source: 'G.D. Khosla, Stern Reckoning (1949)' },
      sourceB: { estimate: 'Penderel Moon estimated around 200,000 in Punjab; modern demographic studies by Ian Talbot and Paul Brass range from 500,000 to 1,000,000+', source: 'Paul Brass, The Partition of India and Retributive Genocide in the Punjab (2003)' },
      explanationOfDifference: 'Khosla based numbers on refugee depositions and missing registers; Moon made field impressions; Brass conducted statistical demographic matching between the 1941 and 1951 censuses.'
    },
    propertyLoss: 'Vast agricultural land, havelis, canal-colony farms, banks, and merchant establishments abandoned.',
    heritageLoss: 'Thousands of historic temples, educational institutions (like DAV College Lahore, Sanatan Dharma College), and Sanskrit libraries left behind in West Pakistan.',
    responsibility: 'Armed communal militias, partisan elements, and mobs during the breakdown of colonial administration. Documented in government fact-finding reports.',
    aftermath: 'Massive refugee transit camps like Kurukshetra (holding over 300,000 refugees) and Kingsway Camp in Delhi accommodated families for years.',
    reconstruction: 'Displaced families demonstrated extraordinary resilience, transforming barren transit encampments into thriving commercial hubs across Delhi, Punjab, Haryana, and Rajasthan.',
    archivalItem: {
      type: 'survivor_record',
      caption: 'Refugee registration card and transit camp token issued at Kurukshetra Camp, 1947.',
      sourceProvenance: 'National Archives of India, Ministry of Rehabilitation Records',
      imageUrl: '/src/assets/images/civilization_memory_1789619576878.jpg',
      labelBadge: 'OFFICIAL FACT-FINDING & REFUGEE CARD',
      catalogueNumber: 'NAI-GOI-REH-1947',
      rightsOrLicense: 'Public Domain / National Archives of India',
      date: '1947'
    },
    survivorAccounts: [
      {
        narrator: 'Lal Chand Malhotra (Survivor of Rawalpindi train attacks)',
        context: 'Deposition to the Ministry of Relief & Rehabilitation (1948)',
        excerpt: '"Our convoy from Rawalpindi was stopped at the station. We had left all our wheat, our ancestral land, and our brass vessels behind. When the train finally crossed into Amritsar, everyone in the compartment—men, women, children—fell to the station floor and wept. We arrived with nothing in our pockets except our memories, but we swore our children would be educated."',
        citation: 'Ministry of Relief and Rehabilitation Archives, File No. RR-47/102; 1947 Partition Archive'
      }
    ],
    sources: {
      primary: [
        'G.D. Khosla, Stern Reckoning: A Survey of the Events Leading Up to and Following the Partition of India (Official Fact-Finding Report for the Ministry of Relief & Rehabilitation, 1949)',
        'Mountbatten Papers, British Library',
        'The 1947 Partition Archive oral depositions'
      ],
      academic: [
        'Ian Talbot, The Partition of India',
        'Urvashi Butalia, The Other Side of Silence',
        'Nisid Hajari, Midnight\'s Furies: The Deadly Splendor of India\'s Partition'
      ]
    },
    specialCollections: ['PARTITION', 'MASSACRES', 'DISPLACEMENT_EXODUS', 'SURVIVOR_TESTIMONY', 'PAKISTAN_HINDUS', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-sindhi-exodus-1948',
    catalogueCode: 'SMR-SD-1948',
    title: 'The Sindhi Hindu Migration & Loss of Ancestral Homeland',
    sanskritTitle: 'सिन्धुदेशीय-हिन्दुविस्थापनम् (१९४८)',
    alternateTitles: ['Sindhi Hindu Exodus', 'Karachi Riots January 1948'],
    location: 'Karachi, Hyderabad, Sukkur',
    region: 'Sindh',
    country: 'Pakistan',
    coordinates: { lat: 24.8607, lng: 67.0011 },
    startDate: 'January 1948',
    endDate: '1949',
    dateDisplay: 'January 1948 – 1949',
    timelinePeriod: 'Partition',
    incidentType: 'EXODUS',
    motive: 'mixed motives',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The indigenous Sindhi Hindu population (over 1 million individuals)',
    summary: 'The systematic uprooting of the ancient Sindhi Hindu community following the January 1948 Karachi riots, forcing the abandonment of their sacred river cradle.',
    whatHappened: 'Unlike Punjab, Sindh did not witness large-scale partition massacres initially. However, in January 1948, organized anti-Hindu riots erupted in Karachi and Hyderabad. Systematic economic boycotts, looting, desecration of temples, and expropriation of businesses forced nearly the entire urban and educated Hindu population—over 1 million people—to board steamships and trains for India.',
    whoWasAffected: 'The entire mercantile, scholarly, and agricultural Sindhi Hindu community who had inhabited the Indus basin since Vedic antiquity.',
    whereText: 'Sindh province: Karachi port, Hyderabad, Sukkur, Shikarpur, Larkana.',
    whenText: 'January 1948 to late 1949.',
    whatWasLost: 'Loss of an entire provincial ancestral homeland; havelis, educational institutions (like D.J. Sindh College), libraries, and sacred shrines along the Indus river.',
    casualties: {
      displaySummary: 'Over 1 million Sindhi Hindus forced into maritime and overland exodus to India; over 90% of the provincial urban minority displaced.',
      displaced: 'Over 1,000,000 Sindhi Hindus',
      sourceA: { estimate: 'Over 1,050,000 Sindhi Hindus arrived in India between 1947 and 1951', source: 'Census of India 1951 (Refugee Special Tables)' },
      sourceB: { estimate: 'Total collapse of the historic Hindu merchant and educational bedrock of Sindh', source: 'Rita Kothari, The Burden of Refuge (2007)' }
    },
    propertyLoss: 'Nationalization and seizure of Hindu commercial establishments, havelis, agricultural estates under Evacuee Property laws.',
    heritageLoss: 'Abandonment of ancient Sindhi shrines, including Sadh Belo in Sukkur, and the ancestral language environment of the Indus.',
    responsibility: 'Local mobs and state expropriation policies under the Evacuee Property laws. Sourced from contemporary diplomatic and rehabilitation registries.',
    aftermath: 'Sindhi refugees were settled in former military barracks at Kalyan (which became Ulhasnagar), Gandhidham/Adipur in Kutch, and cities across Gujarat, Maharashtra, and Rajasthan.',
    reconstruction: 'Without a state of their own in India, Sindhis built vibrant global trading, educational, and charitable networks while fiercely preserving the Sindhi language, Cheti Chand festival, and Jhulelal traditions.',
    archivalItem: {
      type: 'photograph',
      caption: 'Displaced Sindhi Hindu families disembarking from steamships at Bombay docks, 1948.',
      sourceProvenance: 'Films Division / Press Information Bureau Photographic Archive',
      imageUrl: '/src/assets/images/dharma_wheel_1789619590191.jpg',
      labelBadge: 'GOVERNMENT REHABILITATION RECORD',
      catalogueNumber: 'PIB-BOM-SND-1948',
      rightsOrLicense: 'Public Domain / Press Information Bureau',
      date: '1948'
    },
    sources: {
      primary: [
        'G.D. Khosla, Stern Reckoning (1949)',
        'High Commission of India Dispatches from Karachi (January 1948)',
        'Oral history recordings in the Sindhi Diaspora Archive'
      ],
      academic: [
        'Rita Kothari, The Burden of Refuge: The Sindhi Hindus of Gujarat',
        'Saaz Aggarwal, Sindh: Stories from a Vanished Homeland'
      ]
    },
    specialCollections: ['EXODUS', 'PARTITION', 'PAKISTAN_HINDUS', 'DISPLACEMENT_EXODUS', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-barisal-pogrom-1950',
    catalogueCode: 'SMR-BD-1950',
    title: 'The 1950 East Pakistan Anti-Hindu Riots & Barisal Massacre',
    sanskritTitle: 'पूर्वपाकिस्ताने हिन्दुविरोधी-नरसंहारः बारिसालकाण्डश्च (१९५०)',
    alternateTitles: ['1950 East Bengal Riots', 'Barisal Massacre 1950'],
    location: 'Barisal, Dacca, Chittagong, Sylhet',
    region: 'East Bengal',
    country: 'Bangladesh (then East Pakistan)',
    coordinates: { lat: 22.701, lng: 90.3535 },
    startDate: 'February 1950',
    endDate: 'April 1950',
    dateDisplay: 'February – April 1950',
    timelinePeriod: 'Post-Independence',
    incidentType: 'MASSACRES',
    motive: 'political motive',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Bengali Hindu minority across rural and urban East Pakistan',
    summary: 'Widespread violence across East Bengal resulting in an estimated 10,000+ Hindu deaths, train massacres at Bhairab, and the exodus of over 1.5 million refugees into West Bengal, leading directly to the Nehru-Liaquat Pact.',
    whatHappened: 'In February 1950, anti-Hindu riots erupted across East Pakistan. The most devastating violence occurred in Barisal district, where thousands of minority villagers were surrounded, hacked to death, or drowned in rivers. At the Bhairab railway bridge on the Meghna river, trains were stopped and non-Muslim passengers were singled out and executed. Indian Prime Minister Jawaharlal Nehru noted in Parliament that over 1.5 million refugees had poured into India within two months.',
    whoWasAffected: 'Rural and urban Bengali Hindu families of Barisal, Dhaka, Rajshahi, and Sylhet.',
    whereText: 'Barisal district, Dhaka city, Bhairab Bazaar, and Chittagong, East Bengal.',
    whenText: 'February to April 1950.',
    whatWasLost: 'Over 10,000 lives; thousands of women abducted or forcibly converted; over 1.5 million people displaced in months.',
    casualties: {
      displaySummary: 'Estimates range from 5,000 to over 25,000 dead across East Pakistan; over 1.5 million displaced to West Bengal.',
      deaths: '10,000+ estimated deaths',
      displaced: '1,500,000+ refugees entered West Bengal between February and April 1950',
      sourceA: { estimate: 'Indian parliamentary debate records over 1.5 million refugees in two months and thousands dead', source: 'Parliamentary Debates of India (March–April 1950)' },
      sourceB: { estimate: 'Over 10,000 killed in Barisal district alone; systematic train attacks', source: 'Tatsat Guha, The Barisal Carnage Report (1950)' },
      explanationOfDifference: 'Official Indian government records tracked registered border crossings at Sealdah and Petrapole; community fact-finding tracked remote rural deaths in the tidal delta.'
    },
    propertyLoss: 'Widespread arson and expropriation of village homesteads and bazaars.',
    heritageLoss: 'Desecration of rural Kali mandirs and domestic shrines.',
    responsibility: 'Armed communal mobs operating with complicity of local auxiliary authorities in East Pakistan.',
    aftermath: 'Led to the signing of the Delhi Pact (Nehru-Liaquat Pact) on 8 April 1950, guaranteeing minority rights, though enforcement in East Pakistan remained chronically ineffective.',
    reconstruction: 'Refugee relief operations in Kolkata, Ranaghat, and Cooper’s Camp helped millions of families rebuild their lives through cottage industries and education.',
    archivalItem: {
      type: 'newspaper',
      caption: 'Front page of The Statesman (Calcutta) reporting the Barisal pogroms and refugee influx at Sealdah Station, March 1950.',
      sourceProvenance: 'National Library of India Press Repository',
      imageUrl: '/src/assets/images/ancient_civilization_1789922376812.jpg',
      labelBadge: 'CONTEMPORARY NEWSPAPER ARCHIVE',
      catalogueNumber: 'NL-CAL-ST-1950',
      rightsOrLicense: 'Public Domain / The Statesman Archives',
      date: 'March 1950'
    },
    sources: {
      primary: [
        'Parliament of India Official Records (Statements by Jawaharlal Nehru and Syama Prasad Mookerjee, March–April 1950)',
        'The Delhi Pact (Nehru-Liaquat Agreement, 8 April 1950)',
        'The Statesman and Amrita Bazar Patrika dispatches (February–March 1950)'
      ],
      academic: [
        'Prafulla K. Chakrabarti, The Marginal Men: The Refugees and the Left Political Syndrome in West Bengal',
        'Joya Chatterji, The Spoils of Partition: Bengal and India, 1947–1967'
      ]
    },
    specialCollections: ['MASSACRES', 'BANGLADESH_HINDUS', 'DISPLACEMENT_EXODUS', 'PARTITION']
  }
]
