import { SmritiCase } from './types'

export const CASES_CONTEMPORARY: SmritiCase[] = [
  {
    id: 'case-kashmiri-pandit-exodus-1990',
    catalogueCode: 'SMR-KM-1990',
    title: 'The Targeted Assassinations & Forced Exodus of Kashmiri Pandits',
    sanskritTitle: 'काश्मीरपण्डितानां निष्कासनम् विस्थापनं च (१९९०)',
    alternateTitles: ['1990 Kashmiri Pandit Exodus', 'Ethnic Cleansing of Kashmiri Pandits'],
    location: 'Srinagar, Anantnag, Baramulla, Pulwama',
    region: 'Kashmir Valley',
    country: 'India',
    coordinates: { lat: 34.0837, lng: 74.7973 },
    startDate: '1989',
    endDate: '1990',
    dateDisplay: '1989–1990 CE (Exodus Peak: Jan–March 1990)',
    timelinePeriod: 'Contemporary',
    incidentType: 'DISPLACEMENT',
    motive: 'political motive',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The indigenous Kashmiri Pandit (Hindu) minority of the Kashmir Valley',
    summary: 'A coordinated campaign of targeted assassinations, hit-lists, and mosque loudspeaker ultimatums resulting in the forced flight of over 95% of Kashmiri Pandits.',
    whatHappened: 'Beginning in late 1989, terrorist outfits (principally JKLF and Hizbul Mujahideen) targeted prominent Kashmiri Pandits, including High Court Justice Nilkanth Ganjoo, social worker Tika Lal Taploo, and poet Sarwanand Koul Premi. On 19 January 1990, mosques across the Valley broadcast ultimatums demanding that Pandits convert, leave, or be killed. Over the ensuing weeks, between 150,000 and 300,000 Pandits were forced into midnight exile.',
    whoWasAffected: 'Virtually the entire indigenous Hindu population of the Kashmir Valley, guardians of the ancient Shaivite and Sharada heritage.',
    whereText: 'Srinagar, Anantnag, Baramulla, Pulwama, Kupwara, and Badgam districts, Kashmir Valley.',
    whenText: 'September 1989 to mid-1990 (turning point: 19 January 1990).',
    whatWasLost: 'Official police records confirm 219 Kashmiri Pandits killed (community records document over 700 to 1,000); over 20,000 ancestral homes occupied, torched, or sold in distress; complete uprooting of a civilization from its valley.',
    casualties: {
      displaySummary: 'J&K Police FIRs document 219 Pandits killed; community organizations track over 700 to 1,000 fatal casualties during the insurgency.',
      deaths: '219 (Official Police) to 700+ (Community Documentation)',
      displaced: '150,000 to 300,000 forced into exile',
      sourceA: { estimate: '219 Kashmiri Pandits killed by militants between 1989 and 2004', source: 'Jammu & Kashmir Government Police Department Parliamentary Response (2008)' },
      sourceB: { estimate: 'Over 700 killed, systematic hit-lists, 95% of minority displaced', source: 'Kashmiri Samiti Delhi & Panun Kashmir White Paper (1995)' },
      explanationOfDifference: 'Official figures counted formally registered police FIRs; community organizations documented missing persons, unrecovered bodies, and deaths from extreme heat/snakebites in Jammu tent camps.'
    },
    propertyLoss: 'Over 20,000 ancestral houses burned, vandalized, or sold in distress; loss of agricultural orchards.',
    heritageLoss: 'Abandonment of ancient Valley tirthas, cremation ghats, and family Sharada manuscript libraries.',
    responsibility: 'Terrorist organizations (JKLF, Hizbul Mujahideen) with cross-border backing, supported by local extremist cadres. Documented in J&K Police FIRs and NHRC rulings.',
    aftermath: 'The community lived for decades in squalid one-room tenements in Muthi, Purkhoo, and Jagti camps. Subsequent massacres targeted those who stayed: Wandhama (1998, 23 killed) and Nadimarg (2003, 24 killed).',
    reconstruction: 'Kashmiri Pandits demonstrated exceptional educational and professional resilience worldwide, establishing cultural trusts, digitizing ancient Sharada manuscripts, and keeping community memory alive.',
    archivalItem: {
      type: 'photograph',
      caption: 'Displaced Kashmiri Pandit families living in canvas tents at Muthi and Purkhoo transit camps in Jammu, 1990.',
      sourceProvenance: 'Kashmiri Pandit Documentation Project & Press Trust of India Archives',
      imageUrl: '/src/assets/images/civilization_memory_1789619576878.jpg',
      labelBadge: 'NHRC & GOVERNMENT POLICE RECORD',
      catalogueNumber: 'NHRC-JK-KMP-1990',
      rightsOrLicense: 'Public Domain / PTI Archive',
      date: '1990'
    },
    survivorAccounts: [
      {
        narrator: 'Veena Pandita (Displaced from Rainawari, Srinagar)',
        context: 'Oral history recorded in Jammu exile',
        excerpt: '"From the minarets surrounding our house, voices shouted throughout the night of January 19: \'Ralive, Tsalive ya Galive\'. We packed one small trunk, locked our carved wooden door we had lived behind for four generations, and left at 3 AM. We thought we would return in two weeks. Thirty-four years have passed, and that brass key still hangs on our wall in Jammu."',
        citation: 'Kashmiri Pandit Documentation Project (2012); Rahul Pandita, Our Moon Has Blood Clots'
      }
    ],
    sources: {
      primary: [
        'Jammu and Kashmir Police First Information Reports (FIRs) and Crime Records',
        'National Human Rights Commission (NHRC) Verdict on Kashmiri Pandits (1999)',
        'Ministry of Home Affairs Parliamentary Reports'
      ],
      academic: [
        'Rahul Pandita, Our Moon Has Blood Clots: The Exodus of the Kashmiri Pandits',
        'Jagmohan, My Frozen Turbulence in Kashmir',
        'M.K. Teng, Kashmir: Myth and Reality'
      ]
    },
    specialCollections: ['KASHMIRI_PANDITS', 'DISPLACEMENT_EXODUS', 'ATTACKS_ON_HINDU_COMMUNITIES', 'SURVIVOR_TESTIMONY']
  },
  {
    id: 'case-wandhama-massacre-1998',
    catalogueCode: 'SMR-KM-1998',
    title: 'The Wandhama Massacre of Kashmiri Pandits',
    sanskritTitle: 'वन्धाम-नरसंहारः (१९९८)',
    alternateTitles: ['Wandhama Carnage', 'Shab-e-Qadar Pandit Massacre'],
    location: 'Wandhama Village, Ganderbal',
    region: 'Kashmir Valley',
    country: 'India',
    coordinates: { lat: 34.225, lng: 74.775 },
    startDate: '25 January 1998',
    dateDisplay: '25 January 1998',
    timelinePeriod: 'Contemporary',
    incidentType: 'MASSACRES',
    motive: 'political motive',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The remaining Kashmiri Pandit families who had chosen not to migrate from Wandhama village',
    summary: 'The slaughter of 23 Kashmiri Pandits—including four children and nine women—in Wandhama village on the night of Shab-e-Qadar by armed militants dressed in military uniforms.',
    whatHappened: 'On the cold winter night of 25 January 1998 (coinciding with the Islamic holiday of Shab-e-Qadar), heavily armed terrorists entered Wandhama village in Ganderbal district. They rounded up all four remaining Kashmiri Pandit families in their homes. After sharing tea with the families, the militants opened fire with automatic weapons, killing 23 people, including infants as young as one year old. They subsequently torched the houses and the local village temple. A 14-year-old boy, Vinod Dhar, survived by hiding under a rooftop haystack.',
    whoWasAffected: 'The entire remaining Hindu population of Wandhama village (four families; 23 individuals).',
    whereText: 'Wandhama village, Ganderbal district, Kashmir Valley, Jammu and Kashmir, India.',
    whenText: 'Night of 25 January 1998, approximately 11:30 PM.',
    whatWasLost: 'Twenty-three human lives; complete extinction of Hindu life in the village; ancient village temple incinerated.',
    casualties: {
      displaySummary: 'Twenty-three killed in a single hour; only one survivor (Vinod Dhar).',
      deaths: '23 civilians (4 children, 9 women, 10 men)',
      sourceA: { estimate: '23 civilians massacred in cold blood; village temple torched', source: 'Jammu and Kashmir Police Official FIR & Inquiry Report (1998)' },
      sourceB: { estimate: 'National Human Rights Commission (NHRC) Special Fact-Finding Report on Wandhama', source: 'NHRC Case File No. 1998/JK/04' }
    },
    propertyLoss: 'Four ancestral homes and grain silos torched to ashes.',
    heritageLoss: 'Burning of the historic village Shiva-Shakti temple.',
    responsibility: 'Lashkar-e-Taiba (LeT) and Hizbul Mujahideen terrorist cadres. Verified by J&K Police investigations and forensic reports.',
    aftermath: 'The massacre prompted international condemnation and precipitated the flight of the few remaining Pandit families from rural areas of Ganderbal and Srinagar.',
    reconstruction: 'The site of the demolished houses remains an evocative memorial; diaspora organizations hold annual vigils every January 25.',
    archivalItem: {
      type: 'court_record',
      caption: 'Official forensic investigation report and site map of Wandhama massacre, J&K Police Crime Branch.',
      sourceProvenance: 'National Human Rights Commission & J&K Police Crime Branch Records',
      imageUrl: '/src/assets/images/verify_shield_1789619614450.jpg',
      labelBadge: 'POLICE FIR & NHRC DOSSIER',
      catalogueNumber: 'JKP-FIR-WND-1998',
      rightsOrLicense: 'Public Record / Government of India',
      date: '1998'
    },
    survivorAccounts: [
      {
        narrator: 'Vinod Kumar Dhar (Sole survivor of Wandhama, aged 14 at the time)',
        context: 'Eyewitness statement given to police and media on 26 January 1998',
        excerpt: '"They were dressed in army fatigues and spoke Urdu. They asked for tea, then suddenly lined up my mother, father, grandfather, and sisters in the courtyard. When the gunfire started, I ran up the wooden stairs into the dark attic and buried myself under the dry hay. I heard my mother screaming my name, and then only silence and the crackle of fire."',
        citation: 'J&K Police Crime Branch Witness Statement; The Indian Express (27 January 1998)'
      }
    ],
    sources: {
      primary: [
        'Jammu and Kashmir Police FIR No. 06/98, Police Station Ganderbal',
        'National Human Rights Commission (NHRC) Annual Report 1998–1999'
      ],
      academic: [
        'Rahul Pandita, Our Moon Has Blood Clots',
        'M.K. Teng, Kashmir: Myth and Reality'
      ]
    },
    specialCollections: ['MASSACRES', 'KASHMIRI_PANDITS', 'SURVIVOR_TESTIMONY', 'ATTACKS_ON_HINDU_COMMUNITIES']
  },
  {
    id: 'case-nadimarg-massacre-2003',
    catalogueCode: 'SMR-KM-2003',
    title: 'The Nadimarg Massacre of Kashmiri Pandits',
    sanskritTitle: 'नदीमार्ग-नरसंहारः (२००३)',
    alternateTitles: ['Nadimarg Carnage', '2003 Pulwama Pandit Massacre'],
    location: 'Nadimarg Village, Shopian / Pulwama',
    region: 'Kashmir Valley',
    country: 'India',
    coordinates: { lat: 33.621, lng: 74.908 },
    startDate: '23 March 2003',
    dateDisplay: '23 March 2003',
    timelinePeriod: 'Contemporary',
    incidentType: 'MASSACRES',
    motive: 'political motive',
    evidenceStatus: 'COURT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The remaining resident Kashmiri Pandit villagers of Nadimarg',
    summary: 'The execution of 24 Kashmiri Pandits—including 11 women and two young boys—by Lashkar-e-Taiba terrorists after disarming the local police picket.',
    whatHappened: 'On the night of 23 March 2003, heavily armed Lashkar-e-Taiba militants in counterfeit army uniforms entered Nadimarg village in Pulwama (now Shopian) district. After disarming and tying up the nine local police guards assigned to protect the minority hamlet, the terrorists brought out 24 Kashmiri Pandits from their homes, lined them up in front of the village temple, and executed them with burst fire from Kalashnikov rifles.',
    whoWasAffected: 'Twenty-four villagers of Nadimarg who had steadfastly refused to leave their ancestral land during the 1990 exodus.',
    whereText: 'Nadimarg village, Zainapora block, Shopian district, Kashmir Valley, India.',
    whenText: 'Night of 23 March 2003, approximately 11:00 PM.',
    whatWasLost: 'Twenty-four human lives; two young boys (aged 2 and 4); complete depopulation of one of the last surviving Pandit hamlets in southern Kashmir.',
    casualties: {
      displaySummary: 'Twenty-four civilians killed; trial proceedings confirmed Lashkar-e-Taiba command responsibility.',
      deaths: '24 civilians (11 men, 11 women, 2 children)'
    },
    propertyLoss: 'Looting of gold jewelry and family heirlooms followed by ransacking of homes.',
    responsibility: 'Lashkar-e-Taiba (LeT) commanders Zia Mustafa and associates. Trial monitored by the Supreme Court and High Court of Jammu & Kashmir.',
    aftermath: 'The High Court of Jammu and Kashmir reopened trial proceedings in 2022 following applications by the prosecution, re-affirming judicial accountability.',
    reconstruction: 'Commemorated across the diaspora as a tragic testament to the courage of those who attempted to stay behind.',
    archivalItem: {
      type: 'court_record',
      caption: 'Chargesheet and judicial docket of the Nadimarg massacre trial, High Court of Jammu & Kashmir and Ladakh.',
      sourceProvenance: 'High Court of Jammu & Kashmir and Ladakh Judicial Repository',
      imageUrl: '/src/assets/images/verify_shield_1789619614450.jpg',
      labelBadge: 'HIGH COURT JUDICIAL DOSSIER',
      catalogueNumber: 'HC-JKL-NDM-2003',
      rightsOrLicense: 'Public Record / Judiciary of India',
      date: '2003–2022'
    },
    sources: {
      primary: [
        'High Court of Jammu & Kashmir and Ladakh, Criminal Revision No. 2022/Nadimarg',
        'J&K Police FIR No. 24/2003, Police Station Zainapora'
      ],
      academic: [
        'Rahul Pandita, Our Moon Has Blood Clots'
      ]
    },
    specialCollections: ['MASSACRES', 'KASHMIRI_PANDITS', 'ATTACKS_ON_HINDU_COMMUNITIES']
  },
  {
    id: 'case-godhra-2002',
    catalogueCode: 'SMR-GJ-2002',
    title: 'Burning of Sabarmati Express Coach S-6 at Godhra',
    sanskritTitle: 'गोधराकाण्डम् साबरमती-एक्सप्रेस-दहनम् (२००२)',
    alternateTitles: ['Godhra Train Burning', 'Sabarmati Express Arson'],
    location: 'Godhra Railway Station',
    region: 'Panchmahal, Gujarat',
    country: 'India',
    coordinates: { lat: 22.7758, lng: 73.6149 },
    startDate: '27 February 2002',
    dateDisplay: '27 February 2002',
    timelinePeriod: 'Contemporary',
    incidentType: 'ATTACKS',
    motive: 'political motive',
    evidenceStatus: 'COURT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Hindu pilgrims (Karsevaks), women, and children returning from Ayodhya',
    summary: 'Pre-planned arson attack on Coach S-6 of the Sabarmati Express at Godhra, resulting in the burning to death of 59 passengers, verified by Supreme Court judicial proceedings.',
    whatHappened: 'On the morning of 27 February 2002, the Sabarmati Express was halted near Signal Falia just outside Godhra station. A large mob pelted stones and poured flammable petrol into Coach S-6 before setting it on fire. Fifty-nine passengers—including 27 women and 10 children—were incinerated inside the coach. The judicial trial established that the attack was a pre-planned conspiracy.',
    whoWasAffected: 'Fifty-nine passengers on Coach S-6, predominantly women, children, and elderly pilgrims returning from Ayodhya.',
    whereText: 'Near Godhra railway station (Signal Falia), Panchmahal district, Gujarat, India.',
    whenText: 'Morning of 27 February 2002, approximately 7:45 AM.',
    whatWasLost: 'Fifty-nine human lives lost in fire; 48 passengers severely injured; complete destruction of railway coach S-6.',
    casualties: {
      displaySummary: 'Fifty-nine passengers incinerated (27 women, 10 children, 22 men); 48 passengers injured.',
      deaths: '59 civilians'
    },
    propertyLoss: 'Total incineration of Indian Railways Sleeper Coach S-6.',
    responsibility: 'A criminal conspiracy led by convicted perpetrators (including Haji Bilal and Farooq Bhana). Thirty-one individuals were convicted by the Special SIT Court, and convictions were upheld by the High Court and Supreme Court of India.',
    aftermath: 'The incident triggered retaliatory communal riots across Gujarat. The Supreme Court of India monitored the investigation through an independent Special Investigation Team.',
    reconstruction: 'Judicial accountability was established through a decade of Supreme Court proceedings, convicting 31 conspirators.',
    archivalItem: {
      type: 'court_record',
      caption: 'Official forensic and judicial dossier submitted to Supreme Court Special Investigation Team (SIT).',
      sourceProvenance: 'Supreme Court of India Records & Nanavati-Mehta Commission Registry',
      imageUrl: '/src/assets/images/verify_shield_1789619614450.jpg',
      labelBadge: 'SUPREME COURT VERIFIED RECORD',
      catalogueNumber: 'SCI-CRA-GDH-2002',
      rightsOrLicense: 'Public Domain / Supreme Court of India',
      date: '2011'
    },
    sources: {
      primary: [
        'Supreme Court of India Judgment in Criminal Appeal No. 948 of 2011',
        'Special SIT Court Judgment (February 2011)',
        'Nanavati-Mehta Judicial Inquiry Commission Report (2008)',
        'Forensic Science Laboratory (FSL) Reports on accelerants'
      ],
      academic: [
        'Judgments of the Gujarat High Court in Criminal Appeals (October 2017)'
      ]
    },
    specialCollections: ['ATTACKS_ON_HINDU_COMMUNITIES', 'MASSACRES', 'MODERN_INCIDENTS']
  },
  {
    id: 'case-akshardham-attack-2002',
    catalogueCode: 'SMR-GJ-2002A',
    title: 'Akshardham Temple Terrorist Attack, Gandhinagar',
    sanskritTitle: 'अक्षरधाम-मन्दिर-आतङ्कवादी-आक्रमणम् (२००२)',
    alternateTitles: ['2002 Gandhinagar Temple Siege', 'Akshardham Attack'],
    location: 'Akshardham Complex, Gandhinagar',
    region: 'Gujarat',
    country: 'India',
    coordinates: { lat: 23.2307, lng: 72.6737 },
    startDate: '24 September 2002',
    endDate: '25 September 2002',
    dateDisplay: '24–25 September 2002',
    timelinePeriod: 'Contemporary',
    incidentType: 'ATTACKS',
    motive: 'religious motive',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Temple pilgrims, devotees, volunteers, and security personnel',
    summary: 'A fidayeen assault by two heavily armed Lashkar-e-Taiba terrorists on the sacred Akshardham temple complex in Gandhinagar, killing 33 devotees and security personnel before being neutralized by the National Security Guard (NSG).',
    whatHappened: 'On the afternoon of 24 September 2002, two heavily armed terrorists entered the BAPS Swaminarayan Akshardham complex in Gandhinagar. Armed with assault rifles and hand grenades, they opened fire on pilgrims in the podium gardens and attempted to breach the central sanctum. Paramilitary forces and NSG Black Cat commandos launched Operation Vajra Shakti, neutralizing both attackers by the morning of 25 September. Thirty-three people were killed, including one NSG commando, and over 80 were wounded.',
    whoWasAffected: 'Families, pilgrims, children visiting the exhibition pavilions, and responding security personnel.',
    whereText: 'Swaminarayan Akshardham Temple Complex, Sector 20, Gandhinagar, Gujarat, India.',
    whenText: '24–25 September 2002.',
    whatWasLost: 'Thirty-three lives lost; dozens of critical bullet and shrapnel injuries.',
    casualties: {
      displaySummary: 'Thirty-three killed (including women, children, state police officers, and an NSG commando); 80+ wounded.',
      deaths: '33 individuals'
    },
    propertyLoss: 'Damage to exhibition pavilions, stone cladding, and surrounding colonnades from grenade blasts.',
    responsibility: 'Lashkar-e-Taiba / Jaish-e-Mohammed terrorist operatives acting under Pakistan-based commanders. Verified by National Security Guard operational debriefs.',
    aftermath: 'Spiritual leader Pramukh Swami Maharaj appealed for peace and communal harmony, preventing any retaliatory violence.',
    reconstruction: 'The temple complex was repaired, sanctified, and reopened to visitors within weeks, standing as a premier global center for dharmic spirituality.',
    archivalItem: {
      type: 'photograph',
      caption: 'The central stone monument of Akshardham Gandhinagar, protected during Operation Vajra Shakti.',
      sourceProvenance: 'BAPS Swaminarayan Sanstha Heritage Archive & Press Information Bureau',
      imageUrl: '/src/assets/images/sacred_temple_1789619561869.jpg',
      labelBadge: 'NSG COMMERCE & HERITAGE RECORD',
      catalogueNumber: 'PIB-NSG-AKS-2002',
      rightsOrLicense: 'Public Domain / PIB',
      date: '2002'
    },
    sources: {
      primary: [
        'National Security Guard (NSG) Operation Vajra Shakti Official Report',
        'Ministry of Home Affairs Security Review (September 2002)'
      ],
      academic: [
        'BAPS Swaminarayan Sanstha Historical Dossier'
      ]
    },
    specialCollections: ['ATTACKS_ON_HINDU_COMMUNITIES', 'TEMPLE_DESTRUCTION', 'MODERN_INCIDENTS', 'RECONSTRUCTION_SURVIVAL']
  },
  {
    id: 'case-afghan-hindu-extinction-2022',
    catalogueCode: 'SMR-AF-2022',
    title: 'Near-Extinction & Exodus of Afghan Hindus & Sikhs',
    sanskritTitle: 'अफगानिस्थान-हिन्दुसङ्घस्य निष्कासनम् विलोपप्रायता च',
    alternateTitles: ['Afghan Hindu Persecution', 'Kabul Mandir Bombings 2020–2022'],
    location: 'Kabul, Jalalabad, Kandahar',
    region: 'Kabul & Nangarhar',
    country: 'Afghanistan',
    coordinates: { lat: 34.5553, lng: 69.2075 },
    startDate: '1992',
    endDate: '2022',
    dateDisplay: '1992–2022 CE (Targeted Attacks: 2020 & 2022)',
    timelinePeriod: 'Contemporary',
    incidentType: 'PERSECUTION',
    motive: 'religious motive',
    evidenceStatus: 'ARCHIVAL RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The historic Pashto- and Dari-speaking Hindu and Sikh communities of Afghanistan',
    summary: 'Decades of civil war, Taliban 2001 yellow-badge mandates, and ISIS-K suicide bombings reducing an ancient community of 200,000 down to fewer than 50 individuals.',
    whatHappened: 'Historically rooted in the Hindu Shahi dynasties (with archaeological evidence like the 6th-century Gardez Ganesha), Afghan Hindus and Sikhs numbered over 200,000 in the 1970s. Decades of mujahedeen warfare, property seizures, Taliban decrees in 2001 forcing non-Muslims to wear yellow badges, and terror attacks by ISIS-K (including the March 2020 suicide bombing of the Shor Bazar complex killing 25 worshippers) compelled the final evacuation of the community.',
    whoWasAffected: 'The entire indigenous Afghan Hindu and Sikh population.',
    whereText: 'Shor Bazar and Karte Parwan in Kabul, Jalalabad, Kandahar, and Ghazni, Afghanistan.',
    whenText: 'Continuous persecution from 1992 to 2022; major attacks on 25 March 2020 and 18 June 2022.',
    whatWasLost: 'Extinction of an indigenous community in its ancestral land; ancient temples like Asamai Mandir in Kabul abandoned; cremation grounds confiscated.',
    casualties: {
      displaySummary: 'Scores of civilians killed in terror bombings; community reduced from 200,000+ in the 1970s to fewer than 50 individuals by 2023.',
      displaced: 'Over 200,000 displaced into diaspora (primarily India, UK, Germany, Canada)'
    },
    propertyLoss: 'Confiscation of ancestral commercial bazaars, havelis, and crematoria in Kabul and Jalalabad.',
    heritageLoss: 'Desecration of historic shrines: Asamai Mandir, Dargah Pir Ratan Nath in Ghazni, and ancient Hindu Shahi monuments.',
    responsibility: 'Islamic State Khorasan Province (ISIS-K), Taliban regimes, and mujahedeen warlords. Verified by United Nations Assistance Mission in Afghanistan (UNAMA).',
    aftermath: 'The remaining families were evacuated to New Delhi on emergency visas; sacred scriptures and murtis were airlifted with community representatives.',
    reconstruction: 'Resettled in West Delhi (Tilak Nagar and Mahavir Nagar), the diaspora maintains community sabhas, safeguarding their unique Pashto/Dari dharmic heritage and seeking citizenship under the CAA.',
    archivalItem: {
      type: 'photograph',
      caption: 'Historic Asamai Mandir complex in Shor Bazar, Kabul, photographed prior to evacuation.',
      sourceProvenance: 'Afghan Hindu-Sikh Diaspora Welfare Society Archive, New Delhi',
      imageUrl: '/src/assets/images/ancient_civilization_1789922376812.jpg',
      labelBadge: 'UNAMA & USCIRF HUMAN RIGHTS REPORT',
      catalogueNumber: 'UNAMA-AFG-KBL-2020',
      rightsOrLicense: 'Fair Use / UNAMA',
      date: '2020'
    },
    sources: {
      primary: [
        'United Nations Assistance Mission in Afghanistan (UNAMA) Human Rights Reports (2020–2022)',
        'US Commission on International Religious Freedom (USCIRF) Annual Reports',
        'Amnesty International Country Dossiers on Afghanistan'
      ],
      academic: [
        'Inderjeet Singh, Afghan Hindu and Sikh: History of a Forgotten Minority (2019)'
      ]
    },
    specialCollections: ['AFGHAN_HINDUS', 'DISPLACEMENT_EXODUS', 'ATTACKS_ON_HINDU_COMMUNITIES', 'MODERN_INCIDENTS']
  },
  {
    id: 'case-bangladesh-durga-puja-2021',
    catalogueCode: 'SMR-BD-2021',
    title: '2021 Bangladesh Durga Puja Violence & Comilla Temple Attacks',
    sanskritTitle: 'बाङ्गलादेशे दुर्गोत्सवहिंसाकाण्डः मन्दिरभङ्गश्च (२०२१)',
    alternateTitles: ['2021 Bangladesh Communal Violence', 'Comilla Puja Attacks'],
    location: 'Comilla, Noakhali, Chandpur, Rangpur, Chittagong',
    region: 'Chittagong & Dhaka Divisions',
    country: 'Bangladesh',
    coordinates: { lat: 23.4607, lng: 91.1809 },
    startDate: '13 October 2021',
    endDate: '19 October 2021',
    dateDisplay: '13–19 October 2021',
    timelinePeriod: 'Contemporary',
    incidentType: 'ATTACKS',
    motive: 'community conflict',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'The Hindu minority community of Bangladesh celebrating Durga Puja',
    summary: 'A coordinated wave of violence initiated by a staged sacrilege claim in Comilla, spreading across over 20 districts, resulting in attacks on hundreds of Durga Puja mandaps, vandalism of ISKCON temples, and deaths of community members.',
    whatHappened: 'On 13 October 2021 (Maha Ashtami), false social media rumors regarding a Quran found at Nanuar Dighi puja mandap in Comilla sparked orchestrated mob attacks. Within 48 hours, violence spread across Noakhali, Chandpur, Pirganj, and Feni. An ISKCON temple in Noakhali was stormed and a devotee, Jatan Kumar Saha, was killed. Over 300 temples and temporary puja pavilions were damaged, and dozens of Hindu homes in Pirganj (Rangpur) were torched.',
    whoWasAffected: 'Hindu devotees, temple servitors, and families celebrating their primary annual religious festival.',
    whereText: 'Comilla, Noakhali, Chandpur, Chittagong, Cox’s Bazar, and Rangpur, Bangladesh.',
    whenText: '13–19 October 2021.',
    whatWasLost: 'At least 7 people killed in the violence; hundreds injured; over 300 temples and pandals vandalized; 60+ homes torched.',
    casualties: {
      displaySummary: 'Seven killed (including 3 Hindu devotees and temple servitors); over 100 injured.',
      deaths: '3+ Hindu devotees documented (Jatan Kumar Saha, Nimai Krishna Das, Dilip Das)'
    },
    propertyLoss: 'Looting and arson of Hindu shops and sixty homes in Pirganj, Rangpur.',
    heritageLoss: 'Desecration of Durga murtis and altars across 20+ districts during religious ceremonies.',
    responsibility: 'Organized extremist mobs mobilized via social media platforms; subsequent police investigation identified Iqbal Hossain as having placed the book at the mandap to instigate violence.',
    aftermath: 'Bangladesh police arrested hundreds of rioters; human rights organizations called for repeal of discriminatory provisions.',
    reconstruction: 'Local communities and international diaspora mobilized funds to rebuild damaged pandals and repair vandalized shrines.',
    archivalItem: {
      type: 'court_record',
      caption: 'Ain o Salish Kendra (ASK) and Amnesty International investigative dossiers on the Comilla and Noakhali temple attacks.',
      sourceProvenance: 'Ain o Salish Kendra (ASK) Documentation Unit & Amnesty International Public Dossier (October 2021)',
      imageUrl: '/src/assets/images/verify_shield_1789619614450.jpg',
      labelBadge: 'HUMAN RIGHTS FACT-FINDING REPORT',
      catalogueNumber: 'ASK-BD-CML-2021',
      rightsOrLicense: 'Public Domain / ASK Documentation',
      date: 'October 2021'
    },
    sources: {
      primary: [
        'Ain o Salish Kendra (ASK) Human Rights Documentation (October 2021)',
        'Amnesty International, Bangladesh: Protect Hindus After Wave of Communal Violence (2021)',
        'Bangladesh Police Investigation Directorate Press Briefings (October 2021)'
      ],
      academic: [
        'Dhaka Tribune investigative reporting series (October–November 2021)'
      ]
    },
    specialCollections: ['BANGLADESH_HINDUS', 'TEMPLE_DESTRUCTION', 'ATTACKS_ON_HINDU_COMMUNITIES', 'MODERN_INCIDENTS']
  },
  {
    id: 'case-sindh-forced-conversions-contemporary',
    catalogueCode: 'SMR-SD-2023',
    title: 'Systematic Abduction & Forced Conversion of Hindu Girls in Sindh',
    sanskritTitle: 'सिन्धुदेशे हिन्दू-कन्यकानाम् अपहरणम् बलोपादानं च (समकालीन-दस्तावेजः)',
    alternateTitles: ['Sindh Forced Conversions', 'HRCP Annual Reports on Minorities'],
    location: 'Umerkot, Tharparkar, Mirpurkhas, Ghotki',
    region: 'Sindh',
    country: 'Pakistan',
    coordinates: { lat: 25.3549, lng: 69.7376 },
    startDate: '2010',
    endDate: '2024',
    dateDisplay: '2010–Present (Ongoing Documentation)',
    timelinePeriod: 'Contemporary',
    incidentType: 'FORCED CONVERSION',
    motive: 'religious motive',
    evidenceStatus: 'GOVERNMENT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Marginalized Hindu families (Bhil, Meghwar, Kohli, and urban minorities) in Sindh',
    summary: 'The documented pattern of abductions, underage coerced marriages, and institutional conversions of young Hindu girls in rural Sindh, recorded extensively by the Human Rights Commission of Pakistan and United Nations special rapporteurs.',
    whatHappened: 'For over a decade, human rights bodies have documented the systematic vulnerability of Hindu girls—many belonging to marginalized scheduled caste Hindu communities (Bhil, Meghwar, Kohli)—in Sindh province. Prominent seminaries (such as the Dargah Bharchundi Sharif under Mian Mithu in Ghotki and Sarhandi shrine in Umerkot) facilitate rapid conversions and marriages, exploiting police apathy and gaps in Child Marriage Restraint enforcement.',
    whoWasAffected: 'Underage Hindu girls and their families across interior Sindh.',
    whereText: 'Umerkot, Mirpurkhas, Badin, Tharparkar, and Ghotki districts, Sindh, Pakistan.',
    whenText: 'Ongoing phenomenon documented systematically since 2010.',
    whatWasLost: 'Generational security and bodily autonomy of minority women; continuous distress migration of Hindu families across the Rajasthan border.',
    casualties: {
      displaySummary: 'Human Rights Commission of Pakistan (HRCP) estimates hundreds of young minority women affected annually.',
      displaced: 'Thousands of Sindhi Hindu families have migrated across the Thar desert to seek asylum in India.'
    },
    responsibility: 'Local influential clerics, shrines, and abductors acting with institutional impunity. Documented in HRCP fact-finding dossiers and UN Special Rapporteurs\' joint communications.',
    aftermath: 'The Sindh Assembly repeatedly introduced legislation against forced conversion (e.g., Criminal Law Amendment Bill 2016), which was rejected or stalled due to religious pressure.',
    reconstruction: 'Community legal aid groups, Hindu panchayats, and human rights defenders continue to mount legal battles in the Sindh High Court and Supreme Court of Pakistan.',
    archivalItem: {
      type: 'document',
      caption: 'United Nations Joint Communication and HRCP State of Human Rights Report dossier on forced conversions in Sindh.',
      sourceProvenance: 'Human Rights Commission of Pakistan (HRCP) Archives & UN OHCHR Communications',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'UN OHCHR & HRCP OFFICIAL DOSSIER',
      catalogueNumber: 'UN-OHCHR-PAK-2023',
      rightsOrLicense: 'Public Record / United Nations',
      date: '2023'
    },
    sources: {
      primary: [
        'Human Rights Commission of Pakistan (HRCP), State of Human Rights Reports (2015–2023)',
        'United Nations Special Rapporteurs Joint Communication to the Government of Pakistan (AL PAK 1/2023, January 2023)',
        'US Commission on International Religious Freedom (USCIRF) Annual Reports'
      ],
      academic: [
        'Zubair Rehman, Forced Conversions: Fact or Fiction? (Human Rights Study)',
        'Rita Kothari, The Burden of Refuge'
      ]
    },
    specialCollections: ['FORCED_CONVERSION', 'PAKISTAN_HINDUS', 'MODERN_INCIDENTS']
  },
  {
    id: 'case-ayodhya-reconstruction-2024',
    catalogueCode: 'SMR-UP-2024',
    title: 'Ayodhya Śrī Rāma Janmabhūmi: Excavation Evidence & Consecration',
    sanskritTitle: 'अयोध्या-श्रीरामजन्मभूमिः पुरातात्त्विकप्रमाणानि पुनरुद्धारश्च',
    alternateTitles: ['Ayodhya ASI Excavations', 'Ram Mandir Consecration 2024'],
    location: 'Ayodhya',
    region: 'Awadh, Uttar Pradesh',
    country: 'India',
    coordinates: { lat: 26.7956, lng: 82.1943 },
    startDate: '1528 CE',
    endDate: '2024 CE',
    dateDisplay: '1528 CE · ASI Excavation 2003 · Consecration 2024',
    timelinePeriod: 'Contemporary',
    incidentType: 'RECONSTRUCTION',
    motive: 'mixed motives',
    evidenceStatus: 'COURT RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Pan-Indian devotees of Sri Rama, Ayodhya residents, and pilgrim traditions',
    summary: 'The five-century dispute surrounding the birth-site of Sri Rama, resolved by exhaustive Archaeological Survey of India excavations ordered by the High Court and a unanimous Supreme Court of India constitution bench verdict in 2019, leading to the grand 2024 consecration.',
    whatHappened: 'Constructed in 1528 CE during the reign of Babur by Mir Baqi, the Babri structure incorporated 14 carved black schist (kasauti) pillars bearing Hindu iconography. Following continuous historical claims and 19th-century colonial court cases, the Lucknow Bench of the Allahabad High Court ordered the Archaeological Survey of India (ASI) in 2003 to conduct scientific ground-penetrating radar and excavation surveys. The ASI documented an underlying monumental 10th–12th century north-Indian Nagara temple structure. On 9 November 2019, a 5-judge Supreme Court Constitution Bench unanimously ruled that the site be handed over for temple construction while granting alternative land for a mosque.',
    whoWasAffected: 'Centuries of pilgrims, sadhus of the Ramanandi sect, and the pan-Indian civilization.',
    whereText: 'Ram Janmabhoomi complex, Ayodhya, Uttar Pradesh, India.',
    whenText: '1528 CE to 22 January 2024 (Pran Pratishtha).',
    whatWasLost: 'Centuries of legal strife, sectarian tensions, and loss of the ancient medieval stone temple.',
    propertyLoss: 'Centuries of contested possession documented in revenue records dating back to 1858.',
    heritageLoss: 'Demolition of the 11th-century Gahadavala-era stone temple.',
    responsibility: 'Historical demolition by Mughal commander Mir Baqi (1528 CE); final constitutional resolution by the Supreme Court of India (2019).',
    aftermath: 'The Supreme Court verdict provided definitive legal and archaeological closure to India\'s most protracted cultural title dispute.',
    reconstruction: 'A grand traditional Nagara sandstone temple was constructed by the Shri Ram Janmabhoomi Teerth Kshetra Trust, with the historic Pran Pratishtha consecrated on 22 January 2024.',
    archivalItem: {
      type: 'archaeological_drawing',
      caption: 'Archaeological Survey of India (ASI) 2003 excavation trench plan showing the massive 50-pillar Hindu temple foundations beneath the disputed structure.',
      sourceProvenance: 'Archaeological Survey of India Report submitted to Allahabad High Court (2003)',
      imageUrl: '/src/assets/images/vedic_manuscript_1789619549504.jpg',
      labelBadge: 'SUPREME COURT VERIFIED ASI SURVEY',
      catalogueNumber: 'ASI-AYD-EXC-2003',
      rightsOrLicense: 'Public Record / ASI & Supreme Court of India',
      date: '2003'
    },
    sources: {
      primary: [
        'Supreme Court of India Unanimous Judgment in Civil Appeal No. 10866 of 2010 (M. Siddiq vs Mahant Suresh Das, 9 November 2019)',
        'Archaeological Survey of India (ASI) Excavation Report: Ayodhya (2 volumes, 2003)',
        'Joseph Tiefenthaler, Description Historique et Geographique de l\'Inde (1786 account of Hindu worship at the site)'
      ],
      academic: [
        'B.B. Lal, Rama: His Historicity, Mandir and Setu (2008)',
        'K.K. Muhammed, Njan Enna Bharatiyan (Memoirs of an ASI Archaeologist)'
      ]
    },
    specialCollections: ['RECONSTRUCTION_SURVIVAL', 'TEMPLE_DESTRUCTION', 'MODERN_INCIDENTS']
  },
  {
    id: 'case-partition-museum-amritsar-2017',
    catalogueCode: 'SMR-MM-2017',
    title: 'The Partition Museum at Amritsar Town Hall',
    sanskritTitle: 'विभाजन-स्मृति-सङ्ग्रहालयः (अमृतसर)',
    alternateTitles: ['Amritsar Partition Museum', 'TAACHT Partition Archive'],
    location: 'Town Hall, Amritsar',
    region: 'Punjab',
    country: 'India',
    coordinates: { lat: 31.6247, lng: 74.8765 },
    startDate: '2017',
    dateDisplay: 'Established August 2017',
    timelinePeriod: 'Contemporary',
    incidentType: 'MEMORIALS',
    motive: 'uncertain',
    evidenceStatus: 'ARCHIVAL RECORD',
    researchStatus: 'VERIFIED',
    affectedCommunity: 'Millions of Partition survivors and refugee families worldwide',
    summary: 'The world’s first museum dedicated entirely to preserving the memory, personal belongings, and oral histories of Partition victims and refugees.',
    whatHappened: 'Initiated by The Arts and Cultural Heritage Trust (TAACHT) and supported by survivor families, the Partition Museum at Amritsar Town Hall preserves over 5,000 personal artifacts—suitcases, brass locks, family letters, and recorded interviews—documenting the traumatic displacement and resilience of millions across Punjab, Sindh, and Bengal in 1947.',
    whoWasAffected: 'Generations of Partition survivors, educators, and researchers seeking evidence-conscious remembrance.',
    whereText: 'Historical Town Hall building, Amritsar, Punjab, near the Golden Temple and Jallianwala Bagh.',
    whenText: 'Opened to the public in August 2017 on the 70th anniversary of Partition.',
    whatWasLost: 'Dedicated to commemorating the hundreds of thousands who lost their lives and the millions who lost their ancestral homelands.',
    responsibility: 'Established through civic initiative and the Arts and Cultural Heritage Trust (TAACHT).',
    aftermath: 'The museum has welcomed over 1 million visitors, fostering scholarly research and providing emotional closure to families of survivors.',
    reconstruction: 'A sister museum was opened at the Dara Shikoh Library in Old Delhi in 2023, expanding documentation to the Bengal and Sindh corridors.',
    archivalItem: {
      type: 'memorial_photo',
      caption: 'The Gallery of Migration at the Partition Museum, Amritsar Town Hall.',
      sourceProvenance: 'The Partition Museum Archives, Amritsar',
      imageUrl: '/src/assets/images/flame_continues_child_1789923893840.jpg',
      labelBadge: 'PHYSICAL MEMORIAL REPOSITORY',
      catalogueNumber: 'PTM-ASR-MEM-2017',
      rightsOrLicense: 'Public Domain / TAACHT',
      date: '2017'
    },
    sources: {
      primary: [
        'The Partition Museum Official Archives and Oral History Repository',
        'National Archives of India records on refugee rehabilitation'
      ],
      academic: [
        'Lady Kishwar Desai, The Partition Museum Story',
        'Urvashi Butalia, The Other Side of Silence'
      ]
    },
    specialCollections: ['MEMORIALS', 'PARTITION', 'SURVIVOR_TESTIMONY', 'RECONSTRUCTION_SURVIVAL']
  }
]
