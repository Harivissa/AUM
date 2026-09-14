export const SITE = {
  name: 'AUM',
  title: 'SANĀTANA — A CIVILIZATION OF KNOWLEDGE',
  tagline: 'Where Science Ends, Sanātana Continues.',
  eyebrow: 'SANĀTANA · KNOWLEDGE · MEMORY',
  description: 'A living digital knowledge system for exploring Śāstra, Itihāsa, sacred geography, Dharma, Devatā, civilizational memory and source-aware inquiry.',
  footer: 'Developed by Hari Vissa',
} as const

export const PORTALS = [
  { id: 'shastra', label: 'ŚĀSTRA', sanskrit: 'शास्त्रम्', href: '#shastra' },
  { id: 'tirtha', label: 'TĪRTHA', sanskrit: 'तीर्थम्', href: '#tirtha' },
  { id: 'smriti', label: 'SMṚTI', sanskrit: 'स्मृतिः', href: '#smriti' },
  { id: 'dharma', label: 'DHARMA', sanskrit: 'धर्मः', href: '#dharma' },
  { id: 'devata', label: 'DEVATĀ', sanskrit: 'देवता', href: '#devata' },
  { id: 'festivals', label: 'FESTIVALS', sanskrit: 'उत्सवाः', href: '#festivals' },
  { id: 'verify', label: 'AUM VERIFY', sanskrit: 'प्रमाणम्', href: '#verify' },
  { id: 'young-seekers', label: 'YOUNG SEEKERS', sanskrit: 'बाल साधकाः', href: '#young-seekers' },
] as const

export const SEARCH_ENTRIES = [
  ['Explore', 'Knowledge explorer and connected domains', '#explore'],
  ['Śāstra', 'Vedas, Upaniṣads, Gītā, Purāṇas, Darśana, Āgama, Mantra and Stotra', '#shastra'],
  ['Rāmāyaṇa', 'Dedicated Itihāsa chamber with lineage and relationship tree', '#epic/ramayana'],
  ['Mahābhārata', 'Dedicated Itihāsa chamber with Kuru lineage and Dharma questions', '#epic/mahabharata'],
  ['Tīrtha', 'Sacred geography and temple atlas', '#tirtha'],
  ['Smṛti', 'Tolerance, civilizational memory, difficult history and cultural survival', '#smriti'],
  ['Dharma', 'Dharma, Karma, Mokṣa, Puruṣārtha, Yoga, Bhakti and Jñāna', '#dharma'],
  ['Devātā', 'Devas, Devīs, iconography, texts, festivals and traditions', '#devata'],
  ['Festivals', 'Living Hindu observances with calendar context and distinct source categories', '#festivals'],
  ['Vināyaka Chavithi', 'Gaṇeśa Caturthī: calendar context, regional practice and source-aware notes', '#festivals'],
  ['Science & Knowledge', 'Historical Indian knowledge traditions with evidence-aware framing', '#science'],
  ['AUM Verify', 'Source-aware verification of Sanskrit and historical claims', '#verify'],
  ['Young Seekers', 'A child-friendly learning universe — under construction', '#young-seekers'],
] as const
