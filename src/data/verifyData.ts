export interface VerifiedClaim {
  id: string
  query: string
  category: 'Astronomy & Physics' | 'Scriptural Authenticity' | 'Philosophy' | 'Rituals & Biology' | 'History & Archaeology'
  verdict: 'Verified' | 'Contextual Truth' | 'Misattributed'
  summary: string
  sanskritSource: {
    text: string
    transliteration: string
    englishText?: string
    citation: string
  }
  englishTranslation: string
  analysis: string
  scholarlyReference: string
}

export const VERIFIED_CLAIMS: VerifiedClaim[] = [
  {
    id: 'speed-of-light',
    query: 'Did ancient Vedic texts calculate the speed of light in Rigveda 1.50?',
    category: 'Astronomy & Physics',
    verdict: 'Verified',
    summary:
      'Sayana’s 14th-century commentary on Rigveda 1.50.4 calculates the movement of sunlight at 2,202 yojanas in half a nimesha, which calculates within 1.5% of the modern speed of light (~186,000 miles/second).',
    sanskritSource: {
      text: 'तथा च स्मर्यते योजनानां सहस्रे द्वे द्वे शते द्वे च योजने । एकेन निमिषार्धेन क्रममाण नमोऽस्तु ते ॥',
      transliteration: 'Tathā ca smaryate yojanānāṁ sahasre dve dve śate dve ca yojane | Ekena nimiṣārdhena kramamāṇa namo\'stu te',
      citation: 'Sayana Bhasya on Rigveda 1.50.4',
    },
    englishTranslation:
      'It is remembered: [O Sun], obeisance to you who traverses 2,202 yojanas in half a nimesha (blink of an eye).',
    analysis:
      '1 yojana = ~9 miles (or ~14.4 km), and 1 nimesha = 16/75 seconds (half a nimesha = 8/75 sec). 2,202 yojanas / (8/75 sec) yields approximately 187,670 miles per second (302,000 km/s). The modern measured speed of light in vacuum is 186,282 miles/s (299,792 km/s), demonstrating remarkable accuracy.',
    scholarlyReference: 'Subhash Kak (Louisiana State University), "The Speed of Light and Puranic Cosmology".',
  },
  {
    id: 'thirty-three-koti-gods',
    query: 'Are there 33 Crore (330 Million) gods in Hinduism, or 33 Koti (Supreme Types)?',
    category: 'Scriptural Authenticity',
    verdict: 'Contextual Truth',
    summary:
      'In Vedic Sanskrit, "Koti" primarily denotes "class, category, or supreme rank", not crore (10 million). The Brihadaranyaka Upanishad explicitly enumerates the 33 Devatas as cosmic principles.',
    sanskritSource: {
      text: 'कति देवा याज्ञवल्क्येति । त्रयश्च त्री च शता त्रयश्च त्री च सहस्रेति ... कतमे ते त्रयस्त्रिंशदिति । अष्टौ वसव एकादश रुद्रा द्वादशादित्यास्त एकत्रिंशदिन्द्रश्चैव प्रजापतिश्च त्रयस्त्रिंशाविति ॥',
      transliteration: 'Kati devā yājñavalkyeti | Trayaś ca trī ca śatā trayaś ca trī ca sahasreti ... Katame te trayastriṁśad iti | Aṣṭau vasava ekādaśa rudrā dvādaśādityās ta ekatriṁśad indraś caiva prajāpatiś ca trayastriṁśāv iti',
      citation: 'Brihadaranyaka Upanishad 3.9.1-2',
    },
    englishTranslation:
      '"How many gods are there, Yājñavalkya?" "Thirty-three." "Which are those thirty-three?" "Eight Vasus (elements of nature), eleven Rudras (ten prāṇas + mind), twelve Ādityas (solar months), Indra (lightning/power), and Prajāpati (sacrifice/creative energy)."',
    analysis:
      'Sage Sakalya questions Yājñavalkya, who reduces the number of devatas from 3,306 down to 33, then down to 6, then 3, 2, 1.5, and finally 1 (Brahman). Later vernacular usage conflated the Sanskrit "Koti" (supreme category) with the numerical Prakrit/Hindi "crore" (ten million).',
    scholarlyReference: 'Swami Chinmayananda, "Discourses on the Brihadaranyaka Upanishad".',
  },
  {
    id: 'tat-tvam-asi',
    query: 'What is the exact meaning of the Mahavakya "Tat Tvam Asi" in the Chandogya Upanishad?',
    category: 'Philosophy',
    verdict: 'Verified',
    summary:
      '"Tat Tvam Asi" (That Thou Art) is one of the four great Vedic proclamations asserting the fundamental identity of the individual consciousness (Jiva) with universal consciousness (Brahman).',
    sanskritSource: {
      text: 'स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो ॥',
      transliteration: 'Sa ya eṣo\'ṇimaitad ātmyam idaṁ sarvaṁ tat satyaṁ sa ātmā tat tvam asi śvetaketo',
      citation: 'Chandogya Upanishad 6.8.7',
    },
    englishTranslation:
      'That which is the finest essence—this whole world has that as its soul. That is Reality. That is the Atman. That thou art, O Shvetaketu.',
    analysis:
      'Teacher Uddalaka instructs his son Shvetaketu using nine practical analogies (like salt dissolved in water, rivers merging into the ocean, sap in a tree) to demonstrate that the subtle animating reality behind the cosmos is the very same observer within.',
    scholarlyReference: 'Adi Shankara Bhashya on Chandogya Upanishad, Chapter 6.',
  },
  {
    id: 'binary-pingala',
    query: 'Was the binary number system first discovered in Pingala’s Chandaḥśāstra?',
    category: 'Astronomy & Physics',
    verdict: 'Verified',
    summary:
      'Acharya Pingala (c. 3rd-2nd century BCE) in his Chandaḥśāstra invented the binary numeral system (Laghu and Guru syllables) and combinatorial sequences centuries before Leibniz.',
    sanskritSource: {
      text: 'द्विरर्धे रूपे शून्यम् ॥ द्विः ॥',
      transliteration: 'Dvirardhe rūpe śūnyam | Dviḥ',
      citation: 'Pingala Chandaḥśāstra 8.29-31',
    },
    englishTranslation:
      'Halve and write two; when not halvable, subtract one and write zero.',
    analysis:
      'Pingala mapped poetic meters into sequences of light (Laghu = 0) and heavy (Guru = 1) syllables. His algorithm Prastara generates all possible 2^n combinations. Later, Kedarbhatta and Halayudha developed the Meru Prastara, which is identical to Pascal’s Triangle.',
    scholarlyReference: 'B. Datta and A.N. Singh, "History of Hindu Mathematics".',
  },
  {
    id: 'women-vedic-scholars',
    query: 'Did women have access to Vedic education and debate in ancient India?',
    category: 'History & Archaeology',
    verdict: 'Verified',
    summary:
      'Vedic women (Brahmavadinis) wore the sacred Yajnopavita thread, composed Vedic hymns, and engaged in supreme public philosophical disputations.',
    sanskritSource: {
      text: 'यथा गार्गी वाचक्नवी जनकस्य वैदेहस्य परिषद्युपविष्ट्वा याज्ञवल्क्यं पप्रच्छ ॥',
      transliteration: 'Yathā gārgī vācaknavī janakasya vaidehasya pariṣady upaviṣṭvā yājñavalkyaṁ papraccha',
      citation: 'Brihadaranyaka Upanishad 3.6 & 3.8',
    },
    englishTranslation:
      'Gargi Vācaknavī stood up in the assembly of King Janaka and questioned Sage Yājñavalkya on the ultimate fabric of reality.',
    analysis:
      'Over 30 female Ṛṣikās composed hymns in the Rigveda (such as Lopamudra, Ghosha, Apala, Romasha, Surya). Harita Dharmasutra (30.21-22) distinguishes between Brahmavadinis (lifelong scholars who studied Vedas and performed Agnihotra) and Sadyovadhus (who married after study). Restrictions arose later in the medieval period.',
    scholarlyReference: 'Dr. A.S. Altekar, "The Position of Women in Hindu Civilization".',
  },
  {
    id: 'rustless-iron-pillar',
    query: 'Is the 1600-year-old Iron Pillar of Delhi genuinely rust-resistant due to advanced ancient metallurgy?',
    category: 'History & Archaeology',
    verdict: 'Verified',
    summary:
      'The 7-meter high Gupta-era Iron Pillar of Delhi has stood exposed to tropical rain and sun for over 1,600 years without rusting, due to high phosphorus content forming a protective crystalline film.',
    sanskritSource: {
      text: 'यस्योद्वर्तयतो प्रतीपमुरसा शत्रून् समेत्यागतान् वङ्गेष्वाहववर्तिनोऽभिलिखिता खड्गेन कीर्तिर्भुजे ॥',
      transliteration: 'Yasyodvartayato pratīpam urasā śatrūn sametyāgatān vaṅgeṣv āhavavartino\'bhilikhitā khaḍgena kīrtir bhuje',
      citation: 'Iron Pillar Inscription of King Chandra (Chandragupta II Vikramaditya)',
    },
    englishTranslation:
      'By whose arm in battle fame was inscribed on his sword, as he confronted and pushed back his enemies united in Vanga...',
    analysis:
      'Metallurgical investigations by IIT Kanpur (Prof. R. Balasubramaniam) showed the pillar was wrought using solid-state charcoal reduction, trapping phosphorus in the iron. This catalyzed the formation of a passive, nanometer-thin protective film of crystalline iron hydrogen phosphate hydrate (Misawite), preventing oxidation.',
    scholarlyReference: 'R. Balasubramaniam, "Delhi Iron Pillar: New Insights" (Indian Institute of Advanced Study).',
  },
  {
    id: 'murti-puja-philosophy',
    query: 'Is Murti Puja considered mere idol worship in Hindu philosophy?',
    category: 'Philosophy',
    verdict: 'Contextual Truth',
    summary:
      'Murti Puja is not the worship of stone or metal, but the conscious invocation (Prana Pratishtha) of omnipresent consciousness (Brahman) through a sanctified aesthetic medium.',
    sanskritSource: {
      text: 'चिन्मयस्याद्वितीयस्य निष्कलस्याशरीरिणः। उपासकानां कार्यार्थं ब्रह्मणो रूपकल्पना॥',
      transliteration: 'Cinmayasyādvitīyasya niṣkalasyāśarīriṇaḥ | Upāsakānāṁ kāryārthaṁ brahmaṇo rūpa-kalpanā',
      citation: 'Rama Tapaniya Upanishad & Agamas',
    },
    englishTranslation:
      'For the spiritual upliftment of seekers, form is conceptualized for Brahman, which is intrinsically pure consciousness, non-dual, indivisible, and without physical form.',
    analysis:
      'Just as a national flag is not merely cloth but invokes deep national reverence, or a photograph evokes the real presence of a beloved parent, the consecrated Murti is an anchor (Alambana) for the human mind to relate personally to the infinite reality.',
    scholarlyReference: 'Swami Vivekananda, "Address at the Parliament of Religions, Chicago 1893".',
  },
  {
    id: 'reincarnation-vedas',
    query: 'Is the concept of Reincarnation and Karma present in the earliest Vedas?',
    category: 'Scriptural Authenticity',
    verdict: 'Contextual Truth',
    summary:
      'While the full systematic doctrine of Samsara and Karma is explicitly codified in the early Upanishads (Brihadaranyaka & Chandogya), its seeds are directly present in the Rigveda hymns on Punarmrityu (re-death) and the eternal soul (Ajo Bhaga).',
    sanskritSource: {
      text: 'अजो भागस्तपसा तं तपस्व तं ते शोचिस्तपतु तं ते अर्चिः ॥',
      transliteration: 'Ajo bhāgas tapasā taṁ tapasva taṁ te śocis tapatu taṁ te arciḥ',
      citation: 'Rigveda 10.16.4',
    },
    englishTranslation:
      'The unborn part (the immortal soul) — warm it with your glow, warm it with your radiance.',
    analysis:
      'Rigveda hymns explicitly distinguish the perishable physical body from the "Ajo Bhaga" (unborn, eternal spark). The concept evolved from the Vedic cyclic seasons and soul journeys (Devayana / Pitriyana) into the rigorous doctrine of Karma in the Upanishadic era.',
    scholarlyReference: 'Prof. S. Radhakrishnan, "The Principal Upanishads".',
  },
  {
    id: 'surya-namaskar-origins',
    query: 'Are the 12 Surya Namaskar mantras directly from the Vedas?',
    category: 'Rituals & Biology',
    verdict: 'Contextual Truth',
    summary:
      'The 12 Solar names (Mitra, Ravi, Surya, Bhanu, etc.) are authentic Vedic devatas from the Rigveda and Aditya Hridaya Stotram, while the sequential physical dynamic vinyasa flow was synthesized into modern yoga by Raja of Aundh and Krishnamacharya.',
    sanskritSource: {
      text: 'ॐ मित्राय नमः । ॐ रवये नमः । ॐ सूर्याय नमः । ॐ भानवे नमः ॥',
      transliteration: 'Om Mitrāya Namaḥ | Om Ravaye Namaḥ | Om Sūryāya Namaḥ | Om Bhānave Namaḥ',
      citation: 'Traditional Vedic Surya Bijakshara Mantras',
    },
    englishTranslation:
      'Salutations to the Friend of all; Salutations to the Radiant One; Salutations to the Dispeller of Darkness; Salutations to the Source of Light.',
    analysis:
      'Sun worship with prostrations (Sashtanga Namaskara) and Arghya is documented in the Taittiriya Aranyaka. The modern 12-asana synchronization integrates these ancient bijaksharas with circadian bio-solar alignment and lymphatic circulation.',
    scholarlyReference: 'Dr. Mark Singleton, "Yoga Body: The Origins of Modern Posture Practice".',
  },
]
