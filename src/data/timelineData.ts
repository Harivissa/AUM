export interface TimelineEpoch {
  era: string
  period: string
  title: string
  description: string
  monumentsAndTexts: string[]
  significance: string
  badge: string
}

export const TIMELINE_DATA: TimelineEpoch[] = [
  {
    era: 'Vedic Samhita Era',
    period: 'Circa 2500 – 1000 BCE',
    title: 'The Cosmic Hymns & Oral Transmission',
    description:
      'Oral preservation of the four Vedas (Rig, Sama, Yajur, Atharva) using intricate chanting mnemonics (Ghana, Jata, Pada Patha) preserving exact acoustic pitch and meter without variation for millennia.',
    monumentsAndTexts: ['Rigveda Samhita', 'Gayatri Mantra', 'Saraswati-Sindhu Civilization', 'Vedic Yajnas'],
    significance: 'UNESCO proclaimed Vedic chanting an intangible masterpiece of the oral heritage of humanity.',
    badge: 'Shruti Revelation',
  },
  {
    era: 'Upanishadic Awakening',
    period: 'Circa 1000 – 500 BCE',
    title: 'Metaphysical Inquiry & The Inner Self',
    description:
      'Forest academies (Gurukuls) shifting focus from external ritualism to profound internal contemplation: the relationship between Atman (individual self) and Brahman (universal reality).',
    monumentsAndTexts: ['108 Upanishads', 'Mahavakyas', 'Aranyakas & Brahmanas', 'Sage Yajnavalkya Dialogues'],
    significance: 'Birth of pure non-dual philosophy and analytical psychology.',
    badge: 'Vedanta Roots',
  },
  {
    era: 'Itihasa & The Darshanas',
    period: 'Circa 500 BCE – 300 CE',
    title: 'Epic Codification & The Six Systems of Logic',
    description:
      'Compilation of the Ramayana and Mahabharata (incorporating the Bhagavad Gita), along with the formalization of the 6 orthodox philosophical systems (Shad Darshana).',
    monumentsAndTexts: ['Bhagavad Gita', 'Valmiki Ramayana', 'Patanjali Yoga Sutras', 'Panini’s Ashtadhyayi (Sanskrit Grammar)'],
    significance: 'Panini created the world’s first formal context-free grammar; Patanjali codified the 8 limbs of Yoga.',
    badge: 'Logic & Epics',
  },
  {
    era: 'Classical Temple Golden Age',
    period: 'Circa 300 – 1200 CE',
    title: 'Sacred Architecture, Mathematics & Astronomy',
    description:
      'The flourishing of monumental stone temples (Brihadeeswarar, Kailasa, Konark), advances in astronomy by Aryabhata and Varahamihira, and the philosophical consolidation of Advaita Vedanta by Adi Shankaracharya.',
    monumentsAndTexts: ['Brihadeeswarar Temple', 'Kailasa at Ellora', 'Aryabhatiya & Zero', 'Adi Shankara Bhashyas'],
    significance: 'Invention of zero, decimal place-value system, trigonometry, and monolithic granite architecture.',
    badge: 'Golden Renaissance',
  },
  {
    era: 'Bhakti Renaissance',
    period: 'Circa 1200 – 1800 CE',
    title: 'Democratic Devotion, Poetry & Music',
    description:
      'The pan-Indian resurgence of heartfelt devotion led by mystic saints (Alwars, Nayanars, Mirabai, Kabir, Tulsidas, Chaitanya, Purandara Dasa, Tukaram) translating profound wisdom into regional vernacular languages.',
    monumentsAndTexts: ['Ramcharitmanas', 'Abhangas of Tukaram', 'Meera Bhajans', 'Carnatic & Hindustani Classical Music'],
    significance: 'Broke rigid social barriers, making spiritual realization accessible to every individual regardless of background.',
    badge: 'Divine Love & Song',
  },
  {
    era: 'Modern Global Era',
    period: '1893 CE – Present',
    title: 'Global Resurgence & Scientific Integration',
    description:
      'Swami Vivekananda introduces Vedanta and Yoga to the West at the Parliament of Religions in Chicago (1893). Today, Yoga, Ayurveda, and non-dual mindfulness are global movements scientifically validated worldwide.',
    monumentsAndTexts: ['Swami Vivekananda Chicago Address', 'Paramahansa Yogananda', 'Global Yoga Day', 'AI & Digital Sanskrit Corpus'],
    significance: 'Harmonious synthesis of ancient wisdom with modern physics, neuroscience, and computational linguistics.',
    badge: 'Global Awakening',
  },
]
