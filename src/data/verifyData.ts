export interface VerifiedClaim {
  id: string
  query: string
  category: 'Astronomy & Physics' | 'Scriptural Authenticity' | 'Philosophy' | 'Rituals & Biology'
  verdict: 'Verified' | 'Contextual Truth' | 'Misattributed'
  summary: string
  sanskritSource: {
    text: string
    transliteration: string
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
    id: 'tat-tvam-asi',
    query: 'What is the exact meaning of the Mahavakya "Tat Tvam Asi" in the Chandogya Upanishad?',
    category: 'Philosophy',
    verdict: 'Verified',
    summary:
      '"Tat Tvam Asi" (That Thou Art) is one of the four great Vedic proclamations asserting the fundamental unity of the individual consciousness (Jiva) with universal consciousness (Brahman).',
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
