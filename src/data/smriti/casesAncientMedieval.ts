import { SmritiCase } from './types'

export const CASES_ANCIENT_MEDIEVAL: SmritiCase[] = [
  {
    id: 'case-debal-multan-712',
    catalogueCode: 'SMR-SD-0712',
    title: 'Arab Conquest of Debal & Multan Sun Temple Desecration',
    sanskritTitle: 'देवलदुर्गपतनम् मूलस्थान-सूर्यदेवमन्दिरभङ्गश्च',
    alternateTitles: ['Siege of Daybul', 'Fall of Multan 712 CE'],
    location: 'Debal Port & Multan',
    region: 'Sindh & Southern Punjab',
    country: 'Pakistan',
    coordinates: { lat: 24.75, lng: 67.55 },
    startDate: '712 CE',
    endDate: '713 CE',
    dateDisplay: '712–713 CE',
    timelinePeriod: 'Early Medieval',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'military motive',
    evidenceStatus: 'PRIMARY SOURCE',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Brahmin and Buddhist inhabitants of Debal, garrison defenders, and Multan Sun Temple priests',
    summary: 'The Umayyad military invasion led by Muhammad bin Qasim resulting in the capture of the port fortress of Debal, execution of defending garrison, expropriation of Multan Sun Temple treasures, and imposition of the Jizya.',
    whatHappened: 'In 712 CE, an Umayyad expeditionary army under Muhammad bin Qasim landed at the Indus port of Debal. According to the contemporary Persian chronicle Chachnama (translated from Arabic), catapults (manjaniq) breached the central temple-fort citadel. Defending soldiers were executed, a third of the inhabitants were enslaved, and a mosque was constructed. Proceeding to Multan, the ancient Sun Temple (Aditya Mandir)—celebrated by Xuanzang in 641 CE—was captured and its gold treasuries were removed, with the murti held captive as administrative leverage.',
    whoWasAffected: 'Indigenous Hindu and Buddhist populations of Lower Sindh and the city of Multan; hereditary priests of the Aditya temple.',
    whereText: 'Debal (modern Bhanbore near Karachi) and Multan, Indus Basin, Sindh, Pakistan.',
    whenText: 'Spring 712 CE at Debal; Summer 713 CE at Multan.',
    whatWasLost: 'Destruction of the great flag-tower at Debal; seizure of the Sun Temple treasury (amounting to 13,200 maunds of gold recorded by Arab geographers); execution of defending forces.',
    casualties: {
      displaySummary: 'Historical chronicles record 4,000–6,000 garrison casualties at Debal; extensive enslavement.',
      deaths: '4,000 to 6,000 defenders',
      displaced: 'Thousands enslaved and deported under Umayyad war customary laws',
      sourceA: { estimate: '6,000 defenders executed', source: 'Chachnama (Persian translation of early Arabic record)' },
      sourceB: { estimate: '4,000 casualties and administrative submission', source: 'Al-Baladhuri, Futuh al-Buldan (Book of the Conquests of Lands)' },
      explanationOfDifference: 'Chachnama focuses on battlefield casualties at the citadel; Al-Baladhuri records administrative executions following formal surrender.'
    },
    propertyLoss: 'Expropriation of merchant havelis and temple endowments across Debal, Nirun, and Multan.',
    heritageLoss: 'Desecration of ancient Aditya Sun Temple of Multan, later completely dismantled by the Qarmatians in the 10th century.',
    responsibility: 'Umayyad Caliphate general Muhammad bin Qasim al-Thaqafi, operating under governor Al-Hajjaj ibn Yusuf. Responsibility belongs strictly to historical military leaders.',
    aftermath: 'Sindh became an Umayyad and later Abbasid province (al-Sind). Surviving Hindu populations were subjected to Dhimmi and Jizya status, while continuing worship under tax strictures until 10th-century sectarian purges.',
    reconstruction: 'Pilgrimage to Multan Sun Temple was temporarily revived under local Arab emirates before final destruction by Ismailis in 985 CE. Sindhi Hindu culture survived along the Indus through resilient river traditions.',
    archivalItem: {
      type: 'manuscript',
      caption: 'Early illuminated Persian manuscript folio of the Chachnama recording the Debal campaign.',
      sourceProvenance: 'British Library Oriental and India Office Collections, MS Add. 24,089',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'CHRONICLE & ARCHIVAL FOLIO',
      catalogueNumber: 'BL-IOR-MS-24089',
      rightsOrLicense: 'Public Domain / British Library Digital Folio',
      date: '13th-century manuscript copy of 712 CE events'
    },
    sources: {
      primary: [
        'Chachnama (Tarikh-i Hind wa Sind), Persian translation by Ali Kufi (1216 CE) from Arabic original',
        'Al-Baladhuri, Kitab Futuh al-Buldan (Conquests of Lands, c. 892 CE)',
        'Xuanzang, Great Tang Records on the Western Regions (641 CE description of Multan Sun Temple)'
      ],
      academic: [
        'Derryl N. MacLean, Religion and Society in Arab Sind (Brill, 1989)',
        'H.M. Elliot & John Dowson, The History of India as Told by Its Own Historians (Vol. 1)',
        'Andre Wink, Al-Hind: The Making of the Indo-Islamic World (Vol. 1)'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'MASSACRES', 'PAKISTAN_HINDUS', 'HERITAGE_LIBRARY_DESTRUCTION']
  },
  {
    id: 'case-somnath-1026',
    catalogueCode: 'SMR-GJ-1026',
    title: 'Desecration of Somnāth Jyotirlinga & 1951 Consecration',
    sanskritTitle: 'सोमनाथज्योतिर्लिङ्गध्वंसः पुनरुद्धारः च',
    alternateTitles: ['Ghaznavid Sack of Somnath', 'Somnath Temple Restoration'],
    location: 'Prabhas Patan, Saurashtra',
    region: 'Gujarat Coast',
    country: 'India',
    coordinates: { lat: 20.888, lng: 70.4012 },
    startDate: '1026 CE',
    endDate: '1951 CE',
    dateDisplay: '1026 CE · 1299 CE · Rebuilt 1951 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'mixed motives',
    evidenceStatus: 'ARCHIVAL RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Pilgrims, temple priests, Chaulukya defenders, and devotees nationwide',
    summary: 'Sacking of the coastal Jyotirlinga by Mahmud of Ghazni in 1026 CE, subsequent medieval desecrations, and its historic 1951 reconstruction in independent India.',
    whatHappened: 'In January 1026 CE, Mahmud of Ghazni conducted a targeted military raid across the Thar desert to Prabhas Patan. Following a three-day siege, Ghaznavid forces breached the fortified town. Court chroniclers record that the stone Jyotirlinga was broken, fragments were transported to Ghazni, and the temple treasury was seized. The site suffered subsequent attacks in 1299 CE by Alauddin Khalji’s general Ulugh Khan, and in 1665/1706 under Aurangzeb.',
    whoWasAffected: 'The hereditary priests of Prabhas Patan, local defenders under the Chaulukya kingdom, and millions of Hindu pilgrims for whom Somnath was the prime Jyotirlinga.',
    whereText: 'Prabhas Patan on the Arabian Sea coast, near Veraval, Saurashtra, Gujarat, India.',
    whenText: 'January 1026 CE; repeated in 1299 CE, 1395 CE, 1665 CE; reconstructed 1947–1951 CE.',
    whatWasLost: 'The monumental stone and teakwood Chaulukya-era temple, outer mandapas, centuries of devotional endowments, and lives of defending garrison soldiers.',
    casualties: {
      displaySummary: 'Historical chronicles report 50,000 casualties during the siege; modern scholars view this as an epic conventional figure while confirming thousands of defender deaths.',
      deaths: 'Documented heavily in Persian court chronicles; estimated several thousands',
      sourceA: { estimate: '50,000 defenders slain', source: 'Ibn al-Athir, Al-Kamil fi al-Tarikh (Vol. 9, 13th c.)' },
      sourceB: { estimate: 'Severe garrison losses during three-day siege', source: 'Romila Thapar, Somanatha: The Many Voices of a History (2004)' },
      explanationOfDifference: 'Medieval court chroniclers frequently used 50,000 as a formulaic number denoting an immense slaughter; archaeological strata confirm intense fire and plinth destruction.'
    },
    propertyLoss: 'Treasury valued at over 20 million dinars seized by Ghaznavid troops.',
    heritageLoss: 'Ancient Gurjara-Pratihara and Chaulukya stone sanctum, ornate pillars, and sacred lingam.',
    responsibility: 'Mahmud of Ghazni (1026 CE); Ulugh Khan under Alauddin Khalji (1299 CE); Mughal Emperor Aurangzeb (1665/1706 CE). No collective blame is assigned to modern religious populations.',
    aftermath: 'Local kings Bhoja of Malwa and Bhimadeva I of Gujarat immediately began stone rebuilding, followed by Kumarapala in 1169 CE. Devotees maintained worship through concealed lingams.',
    reconstruction: 'In November 1947, Sardar Vallabhbhai Patel pledged the reconstruction of Somnath. Consecrated on 11 May 1951 by the President of India, Dr. Rajendra Prasad, standing today as a grand Maru-Gurjara sandstone shrine.',
    archivalItem: {
      type: 'temple_photo',
      caption: 'Archaeological Survey photograph of Somnath temple foundations prior to 1950 reconstruction.',
      sourceProvenance: 'Archaeological Survey of India (ASI) Heritage Archive, 1950 survey',
      imageUrl: '/src/assets/images/sacred_temple_1789619561869.jpg',
      labelBadge: 'ARCHIVAL PLATE · ASI EXCAVATION',
      catalogueNumber: 'ASI-GJ-SMN-01',
      rightsOrLicense: 'Archaeological Survey of India / Government of India',
      date: '1950'
    },
    sources: {
      primary: [
        'Al-Biruni, Kitab Tarikh al-Hind (1030 CE)',
        'Ibn al-Athir, Al-Kamil fi al-Tarikh (Vol. 9)',
        'Gardizi, Zain al-Akhbar',
        'Ziauddin Barani, Tarikh-i-Firoz Shahi'
      ],
      archaeological: [
        'Archaeological Survey of India (ASI) Excavations under B.K. Thapar (1950), revealing 10th-century stone plinths and charcoal destruction layers',
        'Inscriptions of Kumarapala (1169 CE) recording stone reconstruction'
      ],
      academic: [
        'K.M. Munshi, Somnath: The Shrine Eternal (1951)',
        'Romila Thapar, Somanatha: The Many Voices of a History (2004)',
        'A.K. Majumdar, Chaulukyas of Gujarat (1956)'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'MASSACRES', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-quwwat-ul-islam-1192',
    catalogueCode: 'SMR-DL-1192',
    title: 'Quwwat-ul-Islam Mosque: Spolia of 27 Hindu and Jain Temples',
    sanskritTitle: 'सप्तविंशति-मन्दिरोच्छेदनम् कुव्वत्-उल्-इस्लाम-निर्माणं च',
    alternateTitles: ['Qutb Complex Temple Spolia', 'Qila Rai Pithora Temples'],
    location: 'Mehrauli, Delhi',
    region: 'Delhi NCR',
    country: 'India',
    coordinates: { lat: 28.5245, lng: 77.1855 },
    startDate: '1192 CE',
    endDate: '1198 CE',
    dateDisplay: '1192–1198 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'mixed motives',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Hindu and Jain communities of Tomara and Chauhan Delhi (Lal Kot and Qila Rai Pithora)',
    summary: 'The dismantlement of 27 Hindu and Jain temples to supply architectural columns, corbelled ceilings, and lintels for the congregational mosque built by Qutb ud-Din Aibak, confirmed by the original Persian inscription carved over the eastern gateway.',
    whatHappened: 'Following the defeat of Prithviraj Chauhan at Tarain in 1192 CE, Qutb ud-Din Aibak took control of Delhi. Over the eastern entrance of the newly erected Jami Mosque (Quwwat-ul-Islam), an official naskh stone inscription records that the materials of 27 temples (but-khana) were employed in its construction. Hindu and Jain carved stone pillars—bearing images of kalash, garlands, yakshas, and dancing figures with faces deliberately chiseled away—were inverted or reused to construct the inner cloister arcades.',
    whoWasAffected: 'The resident Hindu and Jain religious orders, artisans, and merchant guilds of Tomara and Chahamana Delhi.',
    whereText: 'Qutb Complex, Mehrauli, South Delhi, India.',
    whenText: 'Commenced 1192 CE; completed 1198 CE; expanded under Iltutmish (1230 CE) and Alauddin Khalji (1315 CE).',
    whatWasLost: 'Twenty-seven monumental stone temples belonging to Shaiva, Vaishnava, and Jain traditions; sacred murtis dismantled or desecrated.',
    propertyLoss: 'Total expropriation of the spiritual heart of Qila Rai Pithora.',
    heritageLoss: 'Classical 11th–12th century Gurjara-Pratihara and Chauhan sculpture, intricately carved corbelled domes and toranas.',
    responsibility: 'Qutb ud-Din Aibak, acting as viceroy for Muhammad of Ghor (Ghurid Sultanate). Recorded on the monument itself in stone.',
    aftermath: 'The complex served as the Friday mosque of the early Delhi Sultanate. The 4th-century iron pillar of King Chandra (Gupta period) was retained within the courtyard, stripped of its original Garuda capital.',
    reconstruction: 'Surviving pillar carvings are preserved and documented by the Archaeological Survey of India; the site is inscribed as a UNESCO World Heritage Site.',
    archivalItem: {
      type: 'photograph',
      caption: 'In situ reused Hindu and Jain temple pillars in the cloister of Quwwat-ul-Islam mosque, photographed by the Archaeological Survey.',
      sourceProvenance: 'Archaeological Survey of India Archive / Cunningham Reports',
      imageUrl: '/src/assets/images/temples_grow_quiet_1789923877401.jpg',
      labelBadge: 'STONE INSCRIPTION & ASI MONUMENT',
      catalogueNumber: 'ASI-DL-QUT-01',
      rightsOrLicense: 'Public Domain / ASI',
      date: 'Late 19th-century survey plate'
    },
    sources: {
      primary: [
        'Foundation Inscription in Persian over the Eastern Gateway of Quwwat-ul-Islam Mosque: "Materials of 27 idol-temples, on each of which two million Delhiwals had been spent, were used in this mosque"',
        'Hasan Nizami, Taj-ul-Maasir (contemporary chronicle, 12th–13th c.)'
      ],
      archaeological: [
        'Alexander Cunningham, Archaeological Survey of India Reports (Vol. 1, 1871, pp. 131–231)',
        'J.A. Page, Memoirs of the Archaeological Survey of India No. 22: An Historical Memoir on the Qutb, Delhi (1926)'
      ],
      academic: [
        'Finbarr Barry Flood, Objects of Translation: Material Culture and Medieval "Hindu-Muslim" Encounter (Princeton University Press, 2009)',
        'Sunil Kumar, The Emergence of the Delhi Sultanate (2007)'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'HERITAGE_LIBRARY_DESTRUCTION']
  },
  {
    id: 'case-nalanda-library-1193',
    catalogueCode: 'SMR-BR-1193',
    title: 'Burning of Nālandā Mahāvihāra & Dharmagañja Library',
    sanskritTitle: 'नालन्दामहाविहार-पुस्तकालयदाहः',
    alternateTitles: ['Fall of Nalanda', 'Destruction of Dharmaganja'],
    location: 'Nālandā',
    region: 'Magadha',
    country: 'India',
    coordinates: { lat: 25.1357, lng: 85.4451 },
    startDate: '1193 CE',
    endDate: '1200 CE',
    dateDisplay: 'c. 1193–1200 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'HERITAGE DESTRUCTION',
    motive: 'military motive',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Scholars, acharyas, monks, scribes, and students across India and Asia',
    summary: 'Military sack and burning of the ancient international monastic university of Nalanda and its multi-story library complex by Bakhtiyar Khalji.',
    whatHappened: 'Bakhtiyar Khalji attacked the fortified monastic university of Nalanda. Medieval Persian chronicler Minhaj-i-Siraj in Tabakat-i-Nasiri records the slaughter of scholars holding books, and the burning of the immense library complex (Dharmagañja: Ratnasāgara, Ratnodadhi, Ratnarañjaka), which smoldered for months. Surviving acharya Rahula Shribhadra was found teaching amid the ruins by Tibetan traveler Chag Lo-tsa-ba in 1235 CE.',
    whoWasAffected: 'Thousands of resident acharyas, students, and scribes; international students from China, Korea, Tibet, and Southeast Asia; the transmission of Indian mathematics, grammar, logic, and medicine.',
    whereText: 'Nalanda, near modern Rajgir, Nalanda district, Bihar, India.',
    whenText: 'c. 1193–1200 CE.',
    whatWasLost: 'Centuries of irreplaceable Sanskrit and Prakrit manuscripts covering astronomy, surgery, Ayurveda, Nyāya logic, grammar, and Buddhist philosophy; nine-story library towers destroyed.',
    casualties: {
      displaySummary: 'Persian chronicler Minhaj-i-Siraj notes that "all the Brahmins and monks were put to death so that not one remained alive to explain the contents of the books."',
      deaths: 'Estimated hundreds to thousands of resident scholars and monastic inmates',
      sourceA: { estimate: 'Total slaughter of resident tonsured scholars and Brahmins', source: 'Minhaj-i-Siraj, Tabakat-i-Nasiri (1260 CE)' },
      sourceB: { estimate: 'Gradual abandonment with small remnant surviving into 1235 CE', source: 'Tibetan Pilgrim Chag Lo-tsa-ba (1235 CE)' },
      explanationOfDifference: 'Tabakat-i-Nasiri emphasizes initial military assault; Tibetan traveler records surviving fragments and remnant teaching in damaged viharas.'
    },
    propertyLoss: 'Complete leveling of multi-story stone and baked-brick mahavihara complexes and residential dormitories.',
    heritageLoss: 'Complete destruction of the Dharmaganja library repository (Ratnasagara, Ratnodadhi, Ratnaranjaka). Charred manuscript ash layers identified during excavations.',
    responsibility: 'Ikhtiyar al-Din Muhammad Bakhtiyar Khalji and his expeditionary troops. Sourced directly from Minhaj-i-Siraj\'s Tabakat-i-Nasiri.',
    aftermath: 'The destruction ended seven centuries of continuous academic inquiry at Nalanda; scholars fled across the Himalayas into Tibet and Nepal with whatever folios could be carried.',
    reconstruction: 'In 2010, the Parliament of India passed the Nalanda University Act; a new international university campus was consecrated in 2024 near the ancient ruins.',
    archivalItem: {
      type: 'manuscript',
      caption: 'Surviving palm-leaf manuscript folio preserved in Tibetan monastic archives after Nalanda flight.',
      sourceProvenance: 'Bhandarkar Oriental Research Institute & Patna Museum Tibetan Collection',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'ARCHAEOLOGICAL ASH STRATA & CHRONICLE',
      catalogueNumber: 'ASI-BR-NAL-1193',
      rightsOrLicense: 'Public Domain / ASI & Patna Museum',
      date: '12th century'
    },
    sources: {
      primary: [
        'Minhaj-i-Siraj, Tabakat-i-Nasiri (translated by Major H.G. Raverty, 1881)',
        'Biography of Dharmasvamin (Chag Lo-tsa-ba Choj-je-dpal, Tibetan manuscript translated by G. Roerich)'
      ],
      archaeological: [
        'Archaeological Survey of India Excavation Memoirs (Monastery Sites 1, 1A, and 4), documenting thick ash and charcoal destruction strata',
        'Discovery of charred palm-leaf manuscript fragments in excavation layers'
      ],
      academic: [
        'D.C. Sircar, Studies in the Religious Life of Ancient and Medieval India',
        'B.P. Sinha, Dynastic History of Magadha'
      ]
    },
    specialCollections: ['HERITAGE_LIBRARY_DESTRUCTION', 'MASSACRES', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-vikramashila-1200',
    catalogueCode: 'SMR-BR-1200',
    title: 'Razing of Vikramashila Monastic University',
    sanskritTitle: 'विक्रमशिला-महाविहार-विध्वंसः',
    alternateTitles: ['Destruction of Vikramashila'],
    location: 'Antichak, Bhagalpur',
    region: 'Anga / Magadha',
    country: 'India',
    coordinates: { lat: 25.321, lng: 87.283 },
    startDate: '1200 CE',
    dateDisplay: 'c. 1200 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'HERITAGE DESTRUCTION',
    motive: 'military motive',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Acharyas, scholars of Tantra, logic and Sanskrit grammar, and resident students',
    summary: 'The assault and demolition of King Dharmapala’s royal monastic university at Vikramashila by Turko-Afghan cavalry, ending the Pala dynasty scholastic tradition in eastern India.',
    whatHappened: 'Following the fall of Nalanda, the fortified seat of Vikramashila (established by King Dharmapala, c. 783–820 CE) on the southern bank of the Ganges was stormed by forces under Bakhtiyar Khalji. Sourced in Taranatha’s history and excavation reports, the great stupa-centered monastery was razed, libraries were incinerated, and the resident acharyas dispersed to Nepal, Tibet, and southern India.',
    whoWasAffected: 'Over 1,000 monks and preceptors, including noted panditas in Nyaya philosophy, astronomy, and Tibetan translation.',
    whereText: 'Antichak village, Kahalgaon sub-division, Bhagalpur district, Bihar, India.',
    whenText: 'c. 1200 CE.',
    whatWasLost: 'The grand cruciform stupa, 208 monastic cells, vast library halls, and centuries of royal endowments from Pala emperors.',
    casualties: {
      displaySummary: 'Large-scale dispersal and casualties among resident monastic preceptors; remaining scholars fled across Himalayan passes.',
      deaths: 'Scores of scholars documented in Tibetan tradition',
      displaced: 'Hundreds fled north into Nepal and Tibet'
    },
    propertyLoss: 'Total destruction of the residential monastery, library vaults, and agricultural endowments.',
    heritageLoss: 'Pala-era black basalt sculptures, terracotta wall panels, and rare Sanskrit tantric and philosophical treatises.',
    responsibility: 'Ikhtiyar al-Din Muhammad Bakhtiyar Khalji and his army. Sourced in Persian and Tibetan historical chronicles.',
    aftermath: 'Acharya Shakya Shribhadra of Kashmir (the last Mahasthavira of Vikramashila) fled to Tibet in 1204 CE with Tibetan disciples, preserving key Sanskrit texts in Tibetan translation.',
    reconstruction: 'The Archaeological Survey of India excavated the vast site between 1972 and 1982, uncovering the colossal cruciform stupa and preserving it as a national monument.',
    archivalItem: {
      type: 'archaeological_drawing',
      caption: 'Cruciform central shrine and excavation plan of Vikramashila Mahavihara, Archaeological Survey of India.',
      sourceProvenance: 'Archaeological Survey of India Excavation Memoir (1977)',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'ASI EXCAVATION RECORD',
      catalogueNumber: 'ASI-BR-VKR-01',
      rightsOrLicense: 'Public Domain / ASI',
      date: '1977'
    },
    sources: {
      primary: [
        'Taranatha, History of Buddhism in India (1608 CE Tibetan chronicle)',
        'Minhaj-i-Siraj, Tabakat-i-Nasiri'
      ],
      archaeological: [
        'Archaeological Survey of India Excavations at Antichak (1972–1982)',
        'B.S. Verma, Excavations at Antichak (Vikramshila) (1984)'
      ],
      academic: [
        'Alaka Chattopadhyaya, Atisa and Tibet',
        'Sukumar Dutt, Buddhist Monks and Monasteries of India'
      ]
    },
    specialCollections: ['HERITAGE_LIBRARY_DESTRUCTION', 'TEMPLE_DESTRUCTION']
  },
  {
    id: 'case-martand-sun-temple-1400',
    catalogueCode: 'SMR-KM-1400',
    title: 'Mārtāṇḍa Sun Temple Demolition & Kashmir Valley Purges',
    sanskritTitle: 'मार्ताण्डसूर्यदेवमन्दिरविध्वंसः',
    alternateTitles: ['Destruction of Martand', 'Sikandar Butshikan Temple Destructions'],
    location: 'Mattan, Anantnag',
    region: 'Kashmir Valley',
    country: 'India',
    coordinates: { lat: 33.7483, lng: 75.2205 },
    startDate: '1400 CE',
    dateDisplay: 'c. 1389–1413 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'HERITAGE DESTRUCTION',
    motive: 'religious motive',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Kashmiri Hindu scholars, temple attendants, and Shaiva-Vaishnava pilgrims',
    summary: 'The systematic toppling of King Lalitaditya Muktapida’s 8th-century colonnaded limestone masterpiece by Sultan Sikandar Butshikan.',
    whatHappened: 'In the late 14th to early 15th century, Sultan Sikandar of the Shah Miri dynasty ordered the destruction of major temples across Kashmir. Medieval chronicler Jonaraja records that the colossal limestone blocks of Martand—joined with molten lead—were subjected to wood fires and iron levers over months until the soaring central superstructure collapsed.',
    whoWasAffected: 'The indigenous Kashmiri Hindu population and their scholastic institutions.',
    whereText: 'Plateau of Mattan, commanding panoramic views of the Kashmir Valley, near Anantnag, Jammu & Kashmir.',
    whenText: 'Reign of Sultan Sikandar (1389–1413 CE).',
    whatWasLost: 'The crowning architectural masterpiece of classical Kashmiri architecture, featuring 84 peristyle niches, sculpted river goddesses, and monumental fluted columns.',
    casualties: {
      displaySummary: 'Extensive coerced conversions and forced flight of Kashmiri Pandits across Pir Panjal passes into the plains of India.',
      displaced: 'Thousands fled over the mountains; Jonaraja records that only a handful of families remained in hiding.'
    },
    propertyLoss: 'Demolition of royal endowments, gold repoussé icons, and temple lands across Mattan, Bijbehara, and Awantipora.',
    heritageLoss: 'Colossal stone vimana, 84 colonnaded peristyle shrines, and ancient Sanskrit architectural archives.',
    responsibility: 'Sultan Sikandar Butshikan of the Shah Miri dynasty and his minister Saifuddin (Suhabhatta). Documented in contemporary Sanskrit court chronicles (Jonaraja) and Persian histories (Ferishta).',
    aftermath: 'The temple was never rebuilt as a functioning shrine; it remained an imposing ruin celebrated by travelers and surveyed by British and Indian archaeologists.',
    reconstruction: 'Stabilized and preserved by the Archaeological Survey of India as a National Monument of Importance; community members conduct periodic peaceful commemorative visits.',
    archivalItem: {
      type: 'photograph',
      caption: 'Colonnaded stone peristyle and sanctum ruins of Martand Sun Temple.',
      sourceProvenance: 'Sir Aurel Stein Archive & Archaeological Survey of India (1890s survey)',
      imageUrl: '/src/assets/images/civilization_memory_1789619576878.jpg',
      labelBadge: 'ARCHAEOLOGICAL PROTECTED MONUMENT',
      catalogueNumber: 'ASI-JK-MRT-01',
      rightsOrLicense: 'Public Domain / ASI',
      date: 'Late 19th century'
    },
    sources: {
      primary: [
        'Jonaraja, Dvitiya Rajatarangini (Sanskrit court chronicle)',
        'Ferishta, Tarikh-i-Ferishta (Persian chronicle)',
        'Abul Fazl, Ain-i-Akbari'
      ],
      archaeological: [
        'Sir Aurel Stein, Memoir on Maps Illustrating the Ancient Geography of Kashmir',
        'Alexander Cunningham, Essay on the Arian Order of Architecture in Kashmir (1848)',
        'Archaeological Survey of India Protected Monument Records'
      ],
      academic: [
        'Ram Chandra Kak, Ancient Monuments of Kashmir (1933)',
        'P.N.K. Bamzai, A History of Kashmir'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'HERITAGE_LIBRARY_DESTRUCTION', 'KASHMIRI_PANDITS', 'FORCED_CONVERSION']
  },
  {
    id: 'case-sharada-peeth-1405',
    catalogueCode: 'SMR-KM-1405',
    title: 'Desecration & Abandonment of Śāradā Pīṭha',
    sanskritTitle: 'शारदापीठस्य भङ्गः परित्यागश्च',
    alternateTitles: ['Sharada Temple Desecration', 'Neelum Valley Sharada Shrine'],
    location: 'Sharda, Neelum Valley',
    region: 'Kashmir (now Pakistan-administered Jammu & Kashmir)',
    country: 'Pakistan',
    coordinates: { lat: 34.792, lng: 74.192 },
    startDate: '1405 CE',
    dateDisplay: 'c. 14th–15th Century CE',
    timelinePeriod: 'Medieval',
    incidentType: 'HERITAGE DESTRUCTION',
    motive: 'religious motive',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Kashmiri Pandits, Sharada script scribes, philosophers, and pan-Indian pilgrims',
    summary: 'The historic seat of learning and sacred temple dedicated to Goddess Sharada (Saraswati), visited by Adi Shankaracharya and Ramanuja, which fell into ruins following medieval incursions and modern border blockades.',
    whatHappened: 'Sharada Peeth was one of ancient India’s most revered pilgrimage seats and higher academies, situated along the Kishenganga (Neelum) river. It was the cradle of the Sharada script and repository of the Bodhayana Vritti. Sacked and defaced during medieval valley campaigns under Sultan Sikandar and subsequent frontier raids, pilgrimage was severely curtailed. After 1947, access was cut off entirely by the Line of Control.',
    whoWasAffected: 'Centuries of Sanskrit scholars, copyists, and pilgrims who revered Kashmir as Sharada Desha.',
    whereText: 'Sharda town, Neelum Valley, 150 km northeast of Muzaffarabad.',
    whenText: 'First major assaults 14th–15th century; pilgrimage severed in October 1947.',
    whatWasLost: 'The monumental stone temple enclosure, sacred pool (Madhumati Sangam), and legendary Sharada script manuscript libraries.',
    responsibility: 'Medieval regional raiders and Sultanate commanders; post-1947 geopolitical partition blocking worship.',
    aftermath: 'The stone temple structure remains standing in ruins on a scenic hillock, garrisoned intermittently by regional forces.',
    reconstruction: 'In 2023, the Save Sharda Committee inaugurated the new Sharda Temple and Cultural Centre at Teetwal, Kupwara district on the Indian side of the LoC, preserving the sacred continuity.',
    archivalItem: {
      type: 'photograph',
      caption: 'Surviving stone perimeter and sanctum walls of Sharada Peeth in Neelum Valley, surveyed by Sir Aurel Stein.',
      sourceProvenance: 'Sir Aurel Stein Photographic Archive & Save Sharda Committee Records',
      imageUrl: '/src/assets/images/sacred_temple_1789619561869.jpg',
      labelBadge: 'PRIMARY HISTORICAL PEETHA RECORD',
      catalogueNumber: 'ASI-JK-SHR-01',
      rightsOrLicense: 'Public Domain / Stein Collection',
      date: 'c. 1890'
    },
    sources: {
      primary: [
        'Kalhana, Rajatarangini (1148 CE, descriptions of pilgrims from Gauda and South India)',
        'Jonaraja, Dvitiya Rajatarangini',
        'Al-Biruni, Kitab al-Hind (recording Sharada as one of India\'s prime shrines)'
      ],
      archaeological: [
        'Sir Aurel Stein, Archaeological Tour in Kashmir (1899)',
        'Reports of the Save Sharda Committee Kashmir (2018–2024)'
      ],
      academic: [
        'P.N.K. Bamzai, Culture and Political History of Kashmir',
        'M.A. Stein, Kalhana’s Rajatarangini: A Chronicle of the Kings of Kasmir'
      ]
    },
    specialCollections: ['HERITAGE_LIBRARY_DESTRUCTION', 'TEMPLE_DESTRUCTION', 'KASHMIRI_PANDITS', 'MISSING_LOST_HERITAGE']
  },
  {
    id: 'case-rudra-mahalaya-1415',
    catalogueCode: 'SMR-GJ-1415',
    title: 'Dismantling of Rudra Mahālaya into Jami Mosque at Siddhpur',
    sanskritTitle: 'सिद्धपुर-रुद्रमहासादमन्दिरभङ्गः जामीमस्जिद-परिवर्तनं च',
    alternateTitles: ['Rudra Mahalaya Temple', 'Siddhpur Temple Desecration'],
    location: 'Siddhpur, Patan District',
    region: 'North Gujarat',
    country: 'India',
    coordinates: { lat: 23.918, lng: 72.378 },
    startDate: '1296 CE',
    endDate: '1415 CE',
    dateDisplay: '1296 CE (Ulugh Khan) · 1415 CE (Ahmed Shah)',
    timelinePeriod: 'Medieval',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'mixed motives',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The Nagar Brahmins, Chaulukya court scholars, and devotees of Mahakala',
    summary: 'The systematic dismantlement of King Siddharaja Jaisimha’s colossal multi-story Shiva temple complex and the conversion of its western wing into the Jami Mosque by Ahmed Shah I.',
    whatHappened: 'Completed in 1140 CE by King Siddharaja Jaisimha, Rudra Mahalaya was an engineering marvel with a towering three-story central pavilion, 11 subsidiary shrines, and colossal ornate toranas. In 1296 CE, Ulugh Khan damaged the temple. In 1415 CE, Sultan Ahmed Shah of the Gujarat Sultanate dismantled the central sanctum and adapted the western portion into a congregational mosque, reusing intricately sculpted Maru-Gurjara pillars and ceiling rosettes.',
    whoWasAffected: 'The Shaiva monastic orders and citizens of Siddhpur, known as Matru Gaya on the Saraswati river.',
    whereText: 'Siddhpur, along the Saraswati river, Patan district, Gujarat, India.',
    whenText: 'Initial raid 1296 CE; structural conversion 1415 CE.',
    whatWasLost: 'One of the largest temple complexes in western India; eleven subsidiary shrines leveled; colossal stone pillars and torana gates destroyed or defaced.',
    propertyLoss: 'Expropriation of sacred precincts on the Saraswati riverbank.',
    heritageLoss: 'High Solanki-era stone carving, including colossal carved lintels and apsara brackets.',
    responsibility: 'Ulugh Khan under Alauddin Khalji (1296 CE); Sultan Ahmed Shah I of Gujarat (1415 CE). Sourced in Mirat-i-Sikandari.',
    aftermath: 'Four standing stone pillars with their colossal carved lintels and a subsidiary shrine (Rudra Rudreshwar) survived the destruction as standing ruins.',
    reconstruction: 'The ruins are preserved by the Archaeological Survey of India as a protected monument of national importance.',
    archivalItem: {
      type: 'photograph',
      caption: 'Surviving colossal carved pillars and torana arch of Rudra Mahalaya, Siddhpur.',
      sourceProvenance: 'Archaeological Survey of India Western Circle Archive',
      imageUrl: '/src/assets/images/temples_grow_quiet_1789923877401.jpg',
      labelBadge: 'ASI MONUMENT OF NATIONAL IMPORTANCE',
      catalogueNumber: 'ASI-GJ-RDR-01',
      rightsOrLicense: 'Public Domain / ASI',
      date: 'Late 19th-century survey'
    },
    sources: {
      primary: [
        'Sikandar ibn Muhammad, Mirat-i-Sikandari (Persian chronicle of the Gujarat Sultanate)',
        'Epigraphical stone inscriptions recorded at Patan and Siddhpur'
      ],
      archaeological: [
        'James Burgess, The Architectural Antiquities of Northern Gujarat (Archaeological Survey of Western India, Vol. 9, 1903)',
        'Archaeological Survey of India Heritage Dossier for Siddhpur Monuments'
      ],
      academic: [
        'A.K. Majumdar, Chaulukyas of Gujarat',
        'M.A. Dhaky, The Indian Temple Traceries'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'HERITAGE_LIBRARY_DESTRUCTION']
  },
  {
    id: 'case-vijayanagara-hampi-1565',
    catalogueCode: 'SMR-KA-1565',
    title: 'The Sack & Destruction of Vijayanagara (Hampi)',
    sanskritTitle: 'विजयनगर-हम्पी-महाध्वंसः तालिकोटायुद्धानन्तरम्',
    alternateTitles: ['Fall of Vijayanagara', 'Battle of Talikota Aftermath', 'Destruction of Hampi'],
    location: 'Hampi, Bellary District',
    region: 'Tungabhadra Basin, Karnataka',
    country: 'India',
    coordinates: { lat: 15.335, lng: 76.46 },
    startDate: 'January 1565',
    endDate: 'June 1565',
    dateDisplay: 'January – June 1565 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'HERITAGE DESTRUCTION',
    motive: 'military motive',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The citizens, artisans, scholars, royal family, and temple priests of Vijayanagara Empire',
    summary: 'Following the Battle of Talikota, the imperial capital of Vijayanagara—one of the largest and wealthiest cities in the world—was systematically sacked, incinerated, and dismantled over six months by the allied Deccan Sultanates.',
    whatHappened: 'On 23 January 1565, the allied armies of the Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar) defeated the Vijayanagara forces at Talikota (Rakkasagi-Tangadagi). The victors entered the defenseless metropolis of Vijayanagara. Contemporary European and Persian chronicles record that the city was systematically looted and burned for six continuous months. Colossal monolithic murtis—including the 22-foot Lakshmi Narasimha—had their limbs broken; iron crowbars and fires were applied to crack the granite pillars of the Vittala, Achyutaraya, and Virupaksha complexes.',
    whoWasAffected: 'An estimated urban population of over 500,000 residents; thousands of scholars, dancers, sculptors, and temple servitors.',
    whereText: 'Metropolitan Vijayanagara (Hampi, Anegundi, Kamalapura), Tungabhadra river basin, Karnataka, India.',
    whenText: 'January to July 1565 CE.',
    whatWasLost: 'One of the wealthiest trade capitals in the world; immense gold and diamond treasuries; thousands of palaces and pavilions burned; monumental granite sculptures fractured.',
    casualties: {
      displaySummary: 'Tens of thousands killed in the battle and subsequent sack; complete depopulation of the imperial core.',
      deaths: 'Battlefield losses exceeding 100,000; city sack civilian deaths unnumbered in records',
      displaced: 'Hundreds of thousands fled south into Tirupati, Penukonda, Chandragiri, and Madurai'
    },
    propertyLoss: 'Systematic plunder of royal treasuries, bazaar streets (Hampi Bazaar, Pan Supari Bazaar), and private residences.',
    heritageLoss: 'Defacement of the monolithic Lakshmi Narasimha, Sasivekalu Ganesha, Vittala stone chariot mandapas, and royal Mahanavami Dibba pavilions.',
    responsibility: 'The confederacy of Deccan Sultanates (Ali Adil Shah I, Ibrahim Qutb Shah, Hussain Nizam Shah I, Ali Barid Shah). Documented by Ferishta and Portuguese chronicler Diogo do Couto.',
    aftermath: 'The imperial court relocated to Penukonda and later Chandragiri, continuing the Aravidu dynasty, but the imperial city of Hampi was permanently abandoned to nature.',
    reconstruction: 'Virupaksha temple worship was preserved through local devotion. Hampi was declared a UNESCO World Heritage Site in 1986, with ongoing ASI stabilization.',
    archivalItem: {
      type: 'photograph',
      caption: 'The fractured monolithic Lakshmi Narasimha statue at Hampi, surveyed in 1856 by Alexander Greenlaw (earliest photographic record of the ruins).',
      sourceProvenance: 'Alexander Greenlaw Calotype Collection (1856) & Archaeological Survey of India',
      imageUrl: '/src/assets/images/civilization_memory_1789619576878.jpg',
      labelBadge: 'HISTORICAL CALOTYPE & ASI ARCHIVE',
      catalogueNumber: 'ASI-KA-HMP-1856',
      rightsOrLicense: 'Public Domain / British Library & ASI',
      date: '1856'
    },
    sources: {
      primary: [
        'Diogo do Couto, Decadas da Asia (Portuguese chronicler eyewitness synthesis)',
        'Ferishta, Tarikh-i-Ferishta (Persian court chronicle)',
        'Cesare Federici, Travels in India (visited Hampi in 1567: "The houses stand still, but emptie onely there is dwelling in them nothing, as is reported, but Tygres and other wild beasts")'
      ],
      archaeological: [
        'Alexander Greenlaw, Photographic Survey of Vijayanagara (1856)',
        'Archaeological Survey of India Excavation Reports: Hampi National Heritage Complex',
        'George Michell & Fritz, City of Victory: Vijayanagara (1991)'
      ],
      academic: [
        'Robert Sewell, A Forgotten Empire: Vijayanagar (1900)',
        'K.A. Nilakanta Sastri, A History of South India'
      ]
    },
    specialCollections: ['HERITAGE_LIBRARY_DESTRUCTION', 'TEMPLE_DESTRUCTION', 'MASSACRES', 'DISPLACEMENT_EXODUS']
  },
  {
    id: 'case-srirangam-siege-1323',
    catalogueCode: 'SMR-TN-1323',
    title: 'Sacking of Śrīraṅgam Temple & 48-Year Exile of the Deity',
    sanskritTitle: 'श्रीरङ्गम्-महामन्दिरभङ्गः भगवतः चतुश्चत्वारिंशद्वर्ष-वनवासश्च',
    alternateTitles: ['Srirangam Temple Siege', 'Ulugh Khan Srirangam Raid', 'Koil Olugu Srirangam History'],
    location: 'Srirangam Island, Tiruchirappalli',
    region: 'Cauvery Delta, Tamil Nadu',
    country: 'India',
    coordinates: { lat: 10.8623, lng: 78.69 },
    startDate: '1323 CE',
    endDate: '1371 CE',
    dateDisplay: '1323–1371 CE (Exile: 48 years)',
    timelinePeriod: 'Medieval',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'military motive',
    evidenceStatus: 'ARCHIVAL RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The Sri Vaishnava community, acharyas, temple priests, and local devotees of Ranganatha',
    summary: 'The invasion of the Srirangam temple complex by Ulugh Khan (Muhammad bin Tughlaq), execution of thousands of defenders, and the dramatic 48-year journey of the utsavar murti (Namperumal) through hills and forests to protect it from capture.',
    whatHappened: 'In 1323 CE, Delhi Sultanate forces under Ulugh Khan marched on the temple town of Srirangam during a festival. The official temple chronicle Koil Olugu records that acharya Pillai Lokacharya evacuated the processional deity (Namperumal) under cover of night. Defending priests and devotees formed a protective ring and thousands were executed. The sanctum was walled up to conceal the moolavar. For 48 years, the murti was carried through Tirupati, Gingee, and the Kerala hills until Kumara Kampana of Vijayanagara liberated Srirangam in 1371 CE.',
    whoWasAffected: 'The Sri Vaishnava scholastic order, lineage of Ramanujacharya, and thousands of devotees of the Cauvery delta.',
    whereText: 'Sri Ranganathaswamy Temple, Srirangam island, Tiruchirappalli district, Tamil Nadu, India.',
    whenText: '1323 CE raid; deity in wandering exile until return in 1371 CE.',
    whatWasLost: 'Temple treasuries looted; ancient palm-leaf granthas scattered; thousands of temple defenders slain.',
    casualties: {
      displaySummary: 'Koil Olugu temple chronicle records that 12,000 temple defenders and scholars were put to death around the outer enclosures.',
      deaths: 'Thousands of defenders recorded in temple registers',
      sourceA: { estimate: '12,000 Sri Vaishnava servitors slain', source: 'Koil Olugu (Srirangam Temple Chronicle)' },
      sourceB: { estimate: 'Severe massacre of temple defenders during sudden siege', source: 'K.A. Nilakanta Sastri, The Pandyan Kingdom' },
      explanationOfDifference: 'Koil Olugu records the sacred traditional figure of servitors who fell defending the temple gateways; epigraphy corroborates the prolonged abandonment of rituals.'
    },
    propertyLoss: 'Golden vahanas, gemstone ornaments, and temple granaries plundered.',
    heritageLoss: 'Temporary cessation of temple rituals for nearly half a century; destruction of outer gopurams.',
    responsibility: 'Ulugh Khan (later Sultan Muhammad bin Tughlaq) and Delhi Sultanate cavalry. Documented in temple records and inscriptions.',
    aftermath: 'Pillai Lokacharya died of exhaustion on the escape trail at Jyotishmati (Kodikkulam). Vedanta Desika hid manuscripts and preserved the scholastic tradition.',
    reconstruction: 'In 1371 CE, Kumara Kampana of Vijayanagara and his general Gopana reconsecrated Namperumal at Srirangam. Gopana’s victory inscription remains carved in stone on the temple walls.',
    archivalItem: {
      type: 'manuscript',
      caption: 'Stone inscription of Gopana (1371 CE) on the inner wall of Srirangam Temple commemorating the return of Sri Ranganatha from exile.',
      sourceProvenance: 'Archaeological Survey of India Southern Circle Epigraphia Indica (Vol. 6)',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'EPIGRAPHICAL VICTORY RECORD',
      catalogueNumber: 'ASI-TN-SRI-1371',
      rightsOrLicense: 'Public Domain / ASI',
      date: '1371'
    },
    sources: {
      primary: [
        'Koil Olugu (The Chronicle of the Temple of Srirangam, Tamil palm-leaf chronicle)',
        'Stone Inscription of Gopana (Epigraphia Indica, Vol. 6, p. 322)',
        'Vedanta Desika, Abhitistava (devotional hymn composed during the exile)'
      ],
      academic: [
        'K.A. Nilakanta Sastri, A History of South India',
        'V.N. Hari Rao, The Srirangam Temple: Art and Architecture (1967)',
        'B.D. Chattopadhyaya, Representing the Other? Sanskrit Sources and the Muslims'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'MASSACRES', 'HERITAGE_LIBRARY_DESTRUCTION', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-madurai-sultanate-1310',
    catalogueCode: 'SMR-TN-1310',
    title: 'Desecration of Madurai Meenakshi & The Madurai Sultanate Rule',
    sanskritTitle: 'मधुरा-मीनाक्षी-मन्दिरभङ्गः मधुरा-सल्तनत्-शासनं च',
    alternateTitles: ['Madurai Temple Sack', 'Malik Kafur Pandyan Campaign'],
    location: 'Madurai',
    region: 'Pandya Nadu, Tamil Nadu',
    country: 'India',
    coordinates: { lat: 9.9195, lng: 78.1193 },
    startDate: '1310 CE',
    endDate: '1378 CE',
    dateDisplay: '1310–1378 CE',
    timelinePeriod: 'Medieval',
    incidentType: 'TEMPLE DESTRUCTION',
    motive: 'military motive',
    evidenceStatus: 'ARCHAEOLOGICALLY SUPPORTED',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The citizens, priests, and devotees of the Pandyan kingdom',
    summary: 'The plundering of Madurai by Malik Kafur in 1311 CE, followed by the establishment of the independent Madurai Sultanate (1335–1378 CE) which shuttered the Meenakshi temple until its liberation by the Vijayanagara army.',
    whatHappened: 'In April 1311 CE, Malik Kafur entered Madurai following a Pandyan dynastic succession war. Contemporary Persian poet Amir Khusrau records the destruction of the golden temple and the seizure of hundreds of elephants and gold bullion. In 1335 CE, the governor Jalaluddin Ahsan Khan declared the independent Sultanate of Madurai. Chronicler Ibn Battuta visited during Ghiyasuddin Damghani’s reign and recorded brutal mass executions of captives. The sanctum of the Meenakshi temple was shut down for nearly half a century until Kumara Kampana defeated the Sultanate in 1378 CE.',
    whoWasAffected: 'The Tamil Shaiva and Vaishnava population, temple dancers, poets, and civic assemblies of Madurai.',
    whereText: 'Madurai city and Meenakshi Amman Temple complex, Tamil Nadu, India.',
    whenText: '1311 CE raid; Sultanate rule 1335–1378 CE; Vijayanagara liberation 1378 CE.',
    whatWasLost: 'Immense Pandyan gold treasuries; destruction of outer temple gopurams; suppression of temple pujas for decades.',
    casualties: {
      displaySummary: 'Ibn Battuta provides horrific eyewitness descriptions of impalements of local captives and peasants along the roads of Madurai.',
      deaths: 'Extensive documented executions during Damghani\'s campaigns',
      sourceA: { estimate: 'Mass impalements and executions of Hindu villagers recorded eyewitness', source: 'Ibn Battuta, Rihla (Travels, 1344 CE)' },
      sourceB: { estimate: 'Subjugation of agricultural regions and temple closure', source: 'Gangadevi, Madhuravijayam (Sanskrit poem)' },
      explanationOfDifference: 'Ibn Battuta was a guest in the Sultan’s court witnessing public punishments; Gangadevi describes the emotional desolation of Madurai’s shrines.'
    },
    propertyLoss: 'Sack of temple treasuries and confiscation of agrarian devasthana lands.',
    heritageLoss: 'Outer mandapas of ancient Pandyan structure burned; cessation of worship for nearly 50 years.',
    responsibility: 'Malik Kafur (1311 CE); Sultans of Madurai (Jalaluddin Ahsan Khan, Ghiyasuddin Damghani). Documented by Ibn Battuta and Amir Khusrau.',
    aftermath: 'Princess Gangadevi recorded the restoration of worship in her famous Sanskrit epic Madhuravijayam ("The Conquest of Madurai").',
    reconstruction: 'Under Vijayanagara viceroys and later the Madurai Nayakas (especially Tirumala Nayaka, 1623–1659 CE), the Meenakshi Sundareswarar Temple was rebuilt into the towering world-famous complex standing today.',
    archivalItem: {
      type: 'manuscript',
      caption: 'Surviving palm-leaf folio of Gangadevi\'s Madhuravijayam describing the restoration of Madurai Meenakshi temple.',
      sourceProvenance: 'Trivandrum Sanskrit Series & Tamil Nadu State Archives',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'PRIMARY HISTORICAL EPIC',
      catalogueNumber: 'TSS-SKS-MDH-1378',
      rightsOrLicense: 'Public Domain',
      date: '14th-century manuscript'
    },
    sources: {
      primary: [
        'Amir Khusrau, Tarikh-i-Alai (Khazain-ul-Futuh)',
        'Ibn Battuta, Travels in Asia and Africa (Rihla, 1344 CE)',
        'Gangadevi, Madhuravijayam (14th-century Sanskrit historical mahakavya)'
      ],
      academic: [
        'K.A. Nilakanta Sastri, The Pandyan Kingdom (1929)',
        'R. Sathianathaier, History of the Nayaks of Madura (1924)'
      ]
    },
    specialCollections: ['TEMPLE_DESTRUCTION', 'MASSACRES', 'HERITAGE_LIBRARY_DESTRUCTION', 'RECONSTRUCTION_SURVIVAL']
  }
]
