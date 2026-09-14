export interface DailyShloka {
  id: string
  day: string
  sanskrit: string
  transliteration: string
  source: string
  wordByWord: {
    sanskrit: string
    meaning: string
  }[]
  translation: string
  contemplation: string
  theme: string
}

export const DAILY_SHLOKAS: DailyShloka[] = [
  {
    id: 'shloka-1',
    day: 'Wednesday Contemplation',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    transliteration: 'Karmaṇy-evādhikāras te mā phaleṣu kadācana |\nMā karma-phala-hetur bhūr mā te saṅgo\'stv-akarmaṇi ||',
    source: 'Bhagavad Gita 2.47',
    wordByWord: [
      { sanskrit: 'Karmaṇi eva', meaning: 'In action alone' },
      { sanskrit: 'adhikāraḥ te', meaning: 'your right/authority is' },
      { sanskrit: 'mā phaleṣu kadācana', meaning: 'never in its fruits/results' },
      { sanskrit: 'mā karma-phala-hetuḥ', meaning: 'do not let fruits be your motive' },
      { sanskrit: 'mā saṅgaḥ astu akarmaṇi', meaning: 'nor let your attachment be to inaction' },
    ],
    translation:
      'You have the right to perform your prescribed duty, but you are never entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to inaction.',
    contemplation:
      'True freedom (Nishkama Karma) lies in total presence and excellence of effort without psychological anxiety over outcomes. When the ego steps aside, work becomes pure meditation.',
    theme: 'Detached Excellence (Nishkama Karma)',
  },
  {
    id: 'shloka-2',
    day: 'Peace & Universality',
    sanskrit: 'ॐ असतो मा सद्गमय ।\nतमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
    transliteration: 'Oṁ Asato Mā Sad-Gamaya |\nTamaso Mā Jyotir-Gamaya |\nMṛtyor-Mā Amṛtaṁ Gamaya ||\nOṁ Śāntiḥ Śāntiḥ Śāntiḥ ||',
    source: 'Brihadaranyaka Upanishad 1.3.28',
    wordByWord: [
      { sanskrit: 'Asataḥ', meaning: 'From the unreal / ignorance' },
      { sanskrit: 'Sat gamaya', meaning: 'lead me to Truth / Reality' },
      { sanskrit: 'Tamasaḥ', meaning: 'From darkness' },
      { sanskrit: 'Jyotiḥ gamaya', meaning: 'lead me to Light / Wisdom' },
      { sanskrit: 'Mṛtyoḥ', meaning: 'From mortality / limitation' },
      { sanskrit: 'Amṛtam gamaya', meaning: 'lead me to Immortality' },
    ],
    translation:
      'Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality. Om peace, peace, peace.',
    contemplation:
      'The ultimate prayer of human evolution: shifting perception from temporary physical forms into the eternal, self-luminous witness consciousness.',
    theme: 'Universal Awakening (Pavamana Mantra)',
  },
  {
    id: 'shloka-3',
    day: 'Cosmic Unity',
    sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
    transliteration: 'Īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat |\nTena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||',
    source: 'Isha Upanishad, Verse 1',
    wordByWord: [
      { sanskrit: 'Īśā vāsyam', meaning: 'Enveloped by the Supreme Divine' },
      { sanskrit: 'idam sarvam', meaning: 'all this entire cosmos' },
      { sanskrit: 'tena tyaktena', meaning: 'by that renunciation/detachment' },
      { sanskrit: 'bhuñjīthā', meaning: 'enjoy and protect' },
      { sanskrit: 'mā gṛdhaḥ', meaning: 'do not covet' },
    ],
    translation:
      'All this whatever moves in this moving world is enveloped by the Divine. Therefore, enjoy through detachment; do not covet anyone else’s wealth.',
    contemplation:
      'The foundation of ecological harmony and ethical stewardship: recognizing that every tree, creature, and atom belongs to the sacred whole.',
    theme: 'Ecological Reverence & Non-Covetousness',
  },
]
