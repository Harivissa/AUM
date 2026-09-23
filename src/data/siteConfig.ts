export const SITE = {
  name: 'AUM',
  title: 'SANĀTANA — A CIVILIZATION OF KNOWLEDGE',
  tagline: 'Where Science Ends, Sanātana Continues.',
  eyebrow: 'SANĀTANA · HINDU CIVILIZATION · KNOWLEDGE',
  description: 'A proud, intellectually rigorous Hindu civilizational knowledge system dedicated to preserving Hindu memory, understanding Śāstra, protecting heritage, and inspiring the next generation.',
  footer: 'Developed by Hari Vissa',
} as const

export const PORTALS = [
  { id: 'shastra', label: 'ŚĀSTRA', sanskrit: 'शास्त्रम्', href: '#shastra' },
  { id: 'tirtha', label: 'TĪRTHA', sanskrit: 'तीर्थम्', href: '#tirtha' },
  { id: 'smriti', label: 'SMṚTI', sanskrit: 'स्मृतिः', href: '#smriti' },
  { id: 'dharma', label: 'DHARMA', sanskrit: 'धर्मः', href: '#dharma' },
  { id: 'devata', label: 'DEVATĀ', sanskrit: 'देवता', href: '#devata' },
  { id: 'festivals', label: 'FESTIVALS', sanskrit: 'उत्सवाः', href: '#festivals' },
  { id: 'vishva-sangha', label: 'VISHVA SAṄGHA', sanskrit: 'विश्व संघः', href: '#vishva-sangha' },
  { id: 'verify', label: 'AUM VERIFY', sanskrit: 'प्रमाणम्', href: '#verify' },
  { id: 'young-seekers', label: 'YOUNG SEEKERS', sanskrit: 'बाल साधकाः', href: '#young-seekers' },
] as const

export const SEARCH_ENTRIES = [
  ['Explore', 'Knowledge explorer and connected domains of Hindu civilization', '#explore'],
  ['Śāstra', 'Vedas, Upaniṣads, Gītā, Purāṇas, Darśana, Āgama, Mantra and Stotra', '#shastra'],
  ['Rāmāyaṇa', 'Dedicated Itihāsa chamber with lineage and relationship tree', '#epic/ramayana'],
  ['Mahābhārata', 'Dedicated Itihāsa chamber with Kuru lineage and Dharma questions', '#epic/mahabharata'],
  ['Tīrtha', 'Sacred geography of Bharatavarsha and global Hindu temple atlas', '#tirtha'],
  ['Smṛti', 'Civilizational memory, historical resilience, temple preservation, and cultural survival', '#smriti'],
  ['Dharma', 'Dharma, Karma, Mokṣa, Puruṣārtha, Six Darśanas, Four Yogas, Bhakti and Jñāna', '#dharma'],
  ['Devatā', 'Devas, Devīs, authentic iconography, texts, festivals and traditions', '#devata'],
  ['Festivals', 'Living Hindu observances with calendar context, rituals, and scriptural origins', '#festivals'],
  ['Vishva Saṅgha', 'Global Hindu presence, historical civilizational kingdoms, and thriving diaspora', '#vishva-sangha'],
  ['Science & Knowledge', 'Historical Indic knowledge systems, mathematics, astronomy, Āyurveda and linguistics', '#science'],
  ['AUM Verify', 'Source-aware verification of Sanskrit verses and historical claims', '#verify'],
  ['Young Seekers', 'Sacred stories, daily ślokas, kids Sanskrit lab, and dharmic values for the next generation', '#young-seekers'],
] as const
