export interface Pathway {
  id: string
  label: string
  sanskrit: string
  description: string
  color: string
  accentGlow: string
  iconName: string
  longDescription: string
  highlights: string[]
  keyVerse?: { sanskrit: string; transliteration: string; meaning: string; source: string }
  topics: { title: string; summary: string }[]
}

export const PATHWAYS: Pathway[] = [
  {
    id: 'scriptures', label: 'Śāstra', sanskrit: 'शास्त्रम्', color: '#e8c56b', accentGlow: 'rgba(232,197,107,.4)', iconName: 'BookOpen',
    description: 'Veda, Upaniṣad, Gītā, Purāṇa, Darśana, Āgama, Mantra and Stotra.',
    longDescription: 'AUM organises Hindu textual traditions while keeping Śruti, Smṛti, Itihāsa, Purāṇa and later commentarial traditions distinct.',
    highlights: ['Four Vedas', 'Upaniṣadic traditions', 'Bhagavad Gītā', 'Darśana and commentarial traditions'],
    keyVerse: { sanskrit: 'एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः ॥', transliteration: 'Ekaṁ sad viprā bahudhā vadanty agniṁ yamaṁ mātariśvānam āhuḥ.', meaning: 'Reality is one; the sages speak of it in various ways.', source: 'Ṛgveda 1.164.46' },
    topics: [
      { title: 'Veda', summary: 'Ṛgveda, Yajurveda, Sāmaveda and Atharvaveda, with their distinct textual and ritual traditions.' },
      { title: 'Upaniṣads', summary: 'Philosophical texts exploring ātman, brahman, knowledge, reality and liberation.' },
      { title: 'Gītā', summary: 'The Bhagavad Gītā presents a dialogue on Dharma, action, knowledge, devotion and liberation.' },
    ],
  },
  {
    id: 'temples', label: 'Tīrtha', sanskrit: 'तीर्थम्', color: '#d8a94a', accentGlow: 'rgba(216,169,74,.4)', iconName: 'Landmark',
    description: 'Sacred places, temples, pilgrimage traditions and living sacred geography.',
    longDescription: 'AUM studies sacred places through traditional significance, architecture, inscriptions, archaeology and modern institutional records, without treating them as identical forms of evidence.',
    highlights: ['Kāśī', 'Ayodhyā', 'Tirupati', 'Rāmeśvaram', 'Kedāranātha and Badrinātha'],
    topics: [
      { title: 'Temple traditions', summary: 'Deity, sampradāya, ritual practice, architecture and festivals are recorded separately where evidence differs.' },
      { title: 'Sacred geography', summary: 'Tīrthas, rivers, pilgrimage circuits and regional sacred landscapes form a connected civilizational map.' },
      { title: 'Evidence layers', summary: 'Traditional accounts, inscriptions, archaeology and modern records are labelled rather than blended together.' },
    ],
  },
  {
    id: 'epics', label: 'Itihāsa', sanskrit: 'इतिहासः', color: '#e0b95e', accentGlow: 'rgba(224,185,94,.4)', iconName: 'Scroll',
    description: 'Rāmāyaṇa and Mahābhārata through dedicated chambers and lineages.',
    longDescription: 'AUM treats the Rāmāyaṇa and Mahābhārata as Itihāsa traditions, with dedicated pages for persons, relationships, places, episodes and Dharma questions.',
    highlights: ['Vālmīki Rāmāyaṇa', 'Mahābhārata of Vyāsa', 'Bhagavad Gītā', 'Living regional traditions'],
    topics: [
      { title: 'Rāmāyaṇa', summary: 'A structured chamber for Kāṇḍas, principal figures, relationships, places and themes.' },
      { title: 'Mahābhārata', summary: 'A structured chamber for the Kuru lineage, Parvas, Kurukṣetra, Yādava connections and Dharma questions.' },
      { title: 'Transmission', summary: 'AUM can distinguish textual tradition, regional retelling and later interpretation instead of collapsing them into one version.' },
    ],
  },
  {
    id: 'concepts', label: 'Darśana', sanskrit: 'दर्शनम्', color: '#c98bd0', accentGlow: 'rgba(201,139,208,.4)', iconName: 'Compass',
    description: 'Dharma, Karma, Mokṣa, Puruṣārtha and the classical philosophical systems.',
    longDescription: 'Indian philosophical traditions developed different accounts of reality, knowledge, self, causation and liberation. AUM keeps those differences visible.',
    highlights: ['Sāṃkhya', 'Yoga', 'Nyāya', 'Vaiśeṣika', 'Mīmāṃsā', 'Vedānta'],
    keyVerse: { sanskrit: 'अहं ब्रह्मास्मि ॥', transliteration: 'Ahaṁ brahmāsmi.', meaning: 'I am Brahman.', source: 'Bṛhadāraṇyaka Upaniṣad 1.4.10' },
    topics: [
      { title: 'Vedānta', summary: 'Advaita, Viśiṣṭādvaita, Dvaita and other Vedānta traditions offer distinct interpretations of brahman, self and liberation.' },
      { title: 'Pramāṇa', summary: 'Indian schools developed theories of valid cognition, including perception, inference and testimony in differing combinations.' },
      { title: 'Puruṣārtha', summary: 'Dharma, Artha, Kāma and Mokṣa frame a classical account of human aims.' },
    ],
  },
  {
    id: 'practices', label: 'Sādhanā', sanskrit: 'साधना', color: '#6fb7c9', accentGlow: 'rgba(111,183,201,.4)', iconName: 'Flame',
    description: 'Yoga, meditation, mantra, bhakti and disciplined practice.',
    longDescription: 'Practice traditions range across Yoga, Bhakti, mantra, pūjā, vrata, meditation, pilgrimage and sevā. AUM presents practices with their own textual and sampradāya context.',
    highlights: ['Aṣṭāṅga Yoga', 'Mantra and japa', 'Bhakti traditions', 'Sevā and vrata'],
    keyVerse: { sanskrit: 'योगश्चित्तवृत्तिनिरोधः ॥', transliteration: 'Yogaś citta-vṛtti-nirodhaḥ.', meaning: 'Yoga is the restraint of the fluctuations of the mind.', source: 'Pātañjalayogaśāstra 1.2' },
    topics: [
      { title: 'Yoga', summary: 'The Yoga Sūtra describes an eight-limbed path including ethical disciplines, posture, breath, concentration, meditation and samādhi.' },
      { title: 'Bhakti', summary: 'Devotional traditions express relationship with the Divine through prayer, song, remembrance, service and ritual.' },
      { title: 'Mantra', summary: 'AUM records mantra text and source separately from claims about modern physiological effects.' },
    ],
  },
  {
    id: 'kids', label: 'Young Seekers', sanskrit: 'बाल साधकाः', color: '#e8c56b', accentGlow: 'rgba(232,197,107,.35)', iconName: 'Sparkles',
    description: 'Stories, Sanskrit, ślokas, temples, festivals and values for young learners.',
    longDescription: 'The Young Seekers chamber is designed for children and families, with carefully sourced stories, introductory Sanskrit, sacred symbols, and visual learning.',
    highlights: ['Bāla Kṛṣṇa', 'Bāla Hanumān', 'Bāla Gaṇeśa', 'Sacred stories & values'],
    keyVerse: { sanskrit: 'मातृदेवो भव । पितृदेवो भव । आचार्यदेवो भव ॥', transliteration: 'Mātṛdevo bhava | Pitṛdevo bhava | Ācāryadevo bhava.', meaning: 'Revere your mother as divine; your father as divine; your teacher as divine.', source: 'Taittirīya Upaniṣad 1.11.2' },
    topics: [
      { title: 'Stories', summary: 'Age-appropriate narratives drawn from Hindu textual and regional traditions, clearly identified by source.' },
      { title: 'Ślokas', summary: 'Short, correctly sourced passages with pronunciation, meaning and context.' },
      { title: 'Learning', summary: 'Sanskrit, temples, festivals, symbols, and inspiring dharmic values curated for families.' },
    ],
  },
]
