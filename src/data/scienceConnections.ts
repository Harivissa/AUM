export interface ScienceConnection {
  id: string
  title: string
  category: 'Quantum Physics' | 'Cosmology' | 'Neuroscience' | 'Mathematics & Sound'
  sanskritTerm: string
  sanskritConcept: string
  modernConcept: string
  quote: {
    text: string
    author: string
    role: string
  }
  explanation: string
  scripturalAnchor: {
    verse: string
    source: string
  }
}

export const SCIENCE_CONNECTIONS: ScienceConnection[] = [
  {
    id: 'quantum-advaita',
    title: 'Quantum Non-Locality & Advaita Vedanta',
    category: 'Quantum Physics',
    sanskritTerm: 'अद्वैत (Advaita)',
    sanskritConcept: 'Non-duality of the Observer and the Observed (Drg-Drsya-Viveka)',
    modernConcept: 'Wavefunction collapse, entanglement, and observer dependency',
    quote: {
      text: 'The multiplicity is only apparent. This is the doctrine of the Upanishads. And not of the Upanishads only... The Upanishads themselves contain the most ancient expression of it.',
      author: 'Erwin Schrödinger',
      role: 'Nobel Laureate, Pioneer of Quantum Mechanics',
    },
    explanation:
      'In modern quantum mechanics, particles remain in probabilistic superpositions until measured by an observer. Advaita Vedanta posited millennia ago that the objective universe and subjective awareness are not two distinct substances, but reflections of one non-dual field of pure consciousness (Brahman).',
    scripturalAnchor: {
      verse: 'यथा नद्यः स्यन्दमानाः समुद्रेऽस्तं गच्छन्ति नामरूपे विहाय । तथा विद्वान्नामरूपाद्विमुक्तः परात्परं पुरुषमुपैति दिव्यम् ॥',
      source: 'Mundaka Upanishad 3.2.8',
    },
  },
  {
    id: 'cosmic-time',
    title: 'Cosmic Cycles & Modern Astrophysics',
    category: 'Cosmology',
    sanskritTerm: 'कल्प एवं युग (Kalpa & Yugas)',
    sanskritConcept: 'Cyclic Universe (Srishti-Sthiti-Laya) lasting billions of solar years',
    modernConcept: 'Big Bang, Big Bounce, stellar evolutionary lifecycles',
    quote: {
      text: 'The Hindu religion is the only one of the world’s great faiths dedicated to the idea that the Cosmos itself undergoes an immense, indeed an infinite, number of deaths and rebirths. It is the only religion in which the time scales correspond to those of modern scientific cosmology.',
      author: 'Carl Sagan',
      role: 'Astrophysicist & Author of Cosmos',
    },
    explanation:
      'The Surya Siddhanta and Puranas calculate one Day of Brahma (Kalpa) as 4.32 billion years—nearly exact to the modern scientific estimation of the Earth’s geological age (4.54 billion years). The universe is understood not as linear, but as breathing through infinite cyclic expansions and contractions.',
    scripturalAnchor: {
      verse: 'सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः । रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः ॥',
      source: 'Bhagavad Gita 8.17',
    },
  },
  {
    id: 'observer-consciousness',
    title: 'The Measurement Problem & The Seer',
    category: 'Neuroscience',
    sanskritTerm: 'साक्षी चैतन्य (Sakshi Chaitanya)',
    sanskritConcept: 'The Silent Witness Consciousness behind thoughts and senses',
    modernConcept: 'The "Hard Problem" of consciousness and meta-awareness',
    quote: {
      text: 'I regard consciousness as fundamental. I regard matter as derivative from consciousness. We cannot get behind consciousness. Everything that we talk about, everything that we regard as existing, postulates consciousness.',
      author: 'Max Planck',
      role: 'Nobel Laureate, Father of Quantum Theory',
    },
    explanation:
      'While modern neuroscience struggles to explain how subjective experience (qualia) arises from physical neurons, the Mandukya Upanishad maps consciousness across four states: Waking (Jagrat), Dreaming (Swapna), Deep Sleep (Sushupti), and the Non-dual Witness (Turiya).',
    scripturalAnchor: {
      verse: 'नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनम्... चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः ॥',
      source: 'Mandukya Upanishad, Verse 7',
    },
  },
  {
    id: 'cymatics-nada',
    title: 'Cymatics, String Theory & Nada Brahma',
    category: 'Mathematics & Sound',
    sanskritTerm: 'नाद ब्रह्म (Nada Brahma)',
    sanskritConcept: 'The universe as primordial acoustic vibration and resonance',
    modernConcept: 'Vibrational string theory, cymatic geometry, harmonic resonance',
    quote: {
      text: 'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
      author: 'Nikola Tesla',
      role: 'Inventor & Electrical Pioneer',
    },
    explanation:
      'In Vedic metaphysics, sound (Shabda / Spanda) is the first subtle element (Tanmatra) that condenses into space (Akasha) and subsequent matter. Modern Cymatics visually proves that acoustic frequencies organize matter into exact sacred geometric patterns such as the Sri Yantra.',
    scripturalAnchor: {
      verse: 'ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद् भविष्यदिति सर्वमोङ्कार एव ॥',
      source: 'Mandukya Upanishad 1.1',
    },
  },
]
