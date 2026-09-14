export interface FamilyNode {
  id: string
  name: string
  detail: string
  x: number
  y: number
  tone?: 'gold' | 'saffron' | 'soft'
}

export interface FamilyLink {
  from: string
  to: string
}

export interface EpicLineage {
  id: 'ramayana' | 'mahabharata'
  title: string
  sanskrit: string
  author: string
  note: string
  nodes: FamilyNode[]
  links: FamilyLink[]
}

export const EPIC_LINEAGES: EpicLineage[] = [
  {
    id: 'ramayana',
    title: 'Rāmāyaṇa',
    sanskrit: 'रामायणम्',
    author: 'Traditionally attributed to Maharṣi Vālmīki',
    note: 'A simplified lineage view of principal family relationships in the Vālmīki Rāmāyaṇa tradition. It is not a complete genealogy.',
    nodes: [
      { id: 'dasharatha', name: 'Daśaratha', detail: 'King of Ayodhyā · father of Rāma, Bharata, Lakṣmaṇa & Śatrughna', x: 50, y: 10 },
      { id: 'kausalya', name: 'Kausalyā', detail: 'Queen of Ayodhyā · mother of Rāma', x: 18, y: 26, tone: 'soft' },
      { id: 'kaikeyi', name: 'Kaikeyī', detail: 'Queen of Ayodhyā · mother of Bharata', x: 50, y: 26, tone: 'soft' },
      { id: 'sumitra', name: 'Sumitrā', detail: 'Queen of Ayodhyā · mother of Lakṣmaṇa & Śatrughna', x: 82, y: 26, tone: 'soft' },
      { id: 'rama', name: 'Śrī Rāma', detail: 'Son of Daśaratha & Kausalyā', x: 18, y: 46, tone: 'gold' },
      { id: 'bharata', name: 'Bharata', detail: 'Son of Daśaratha & Kaikeyī', x: 50, y: 46 },
      { id: 'lakshmana', name: 'Lakṣmaṇa', detail: 'Son of Daśaratha & Sumitrā', x: 72, y: 46 },
      { id: 'shatrughna', name: 'Śatrughna', detail: 'Son of Daśaratha & Sumitrā', x: 88, y: 46 },
      { id: 'sita', name: 'Sītā', detail: 'Princess of Mithilā · consort of Rāma', x: 18, y: 68, tone: 'saffron' },
      { id: 'janaka', name: 'Janaka', detail: 'King of Mithilā · father of Sītā in the epic tradition', x: 38, y: 68, tone: 'soft' },
      { id: 'lava-kusha', name: 'Lava & Kuśa', detail: 'Sons of Rāma & Sītā', x: 18, y: 88, tone: 'soft' },
      { id: 'hanuman', name: 'Hanumān', detail: 'Rāma-bhakta and principal ally in the Itihāsa', x: 75, y: 68, tone: 'saffron' },
    ],
    links: [
      { from: 'dasharatha', to: 'kausalya' }, { from: 'dasharatha', to: 'kaikeyi' }, { from: 'dasharatha', to: 'sumitra' },
      { from: 'kausalya', to: 'rama' }, { from: 'kaikeyi', to: 'bharata' }, { from: 'sumitra', to: 'lakshmana' }, { from: 'sumitra', to: 'shatrughna' },
      { from: 'rama', to: 'sita' }, { from: 'rama', to: 'lava-kusha' }, { from: 'sita', to: 'lava-kusha' },
    ],
  },
  {
    id: 'mahabharata',
    title: 'Mahābhārata',
    sanskrit: 'महाभारतम्',
    author: 'Traditionally attributed to Maharṣi Kṛṣṇa Dvaipāyana Vyāsa',
    note: 'A simplified view of the central Kuru lineage and selected descendants. Epic genealogies contain additional branches and relationships.',
    nodes: [
      { id: 'shantanu', name: 'Śāntanu', detail: 'Kuru king · father of Bhīṣma and Vicitṛavīrya', x: 50, y: 8 },
      { id: 'ganga', name: 'Gaṅgā', detail: 'Mother of Bhīṣma in the epic tradition', x: 22, y: 22, tone: 'soft' },
      { id: 'satyavati', name: 'Satyavatī', detail: 'Queen of Śāntanu · mother of Vyāsa and Vicitṛavīrya', x: 75, y: 22, tone: 'soft' },
      { id: 'bhishma', name: 'Bhīṣma', detail: 'Son of Śāntanu & Gaṅgā', x: 22, y: 38, tone: 'gold' },
      { id: 'vyasa', name: 'Vyāsa', detail: 'Son of Satyavatī & Paraśara', x: 56, y: 38, tone: 'saffron' },
      { id: 'vichitravirya', name: 'Vicitṛavīrya', detail: 'Son of Śāntanu & Satyavatī', x: 82, y: 38 },
      { id: 'ambika', name: 'Ambikā', detail: 'Wife of Vicitṛavīrya · mother of Dhṛtarāṣṭra through Vyāsa', x: 56, y: 53, tone: 'soft' },
      { id: 'ambalika', name: 'Ambālikā', detail: 'Wife of Vicitṛavīrya · mother of Pāṇḍu through Vyāsa', x: 82, y: 53, tone: 'soft' },
      { id: 'dhritarashtra', name: 'Dhṛtarāṣṭra', detail: 'Son of Ambikā & Vyāsa · father of the Kauravas', x: 56, y: 67 },
      { id: 'pandu', name: 'Pāṇḍu', detail: 'Son of Ambālikā & Vyāsa · father of the Pāṇḍavas', x: 82, y: 67 },
      { id: 'gandhari', name: 'Gāndhārī', detail: 'Wife of Dhṛtarāṣṭra · mother of the Kauravas', x: 38, y: 80, tone: 'soft' },
      { id: 'kunti', name: 'Kuntī', detail: 'Wife of Pāṇḍu · mother of Yudhiṣṭhira, Bhīma & Arjuna', x: 65, y: 80, tone: 'soft' },
      { id: 'madri', name: 'Mādrī', detail: 'Wife of Pāṇḍu · mother of Nakula & Sahadeva', x: 88, y: 80, tone: 'soft' },
      { id: 'kauravas', name: 'The Kauravas', detail: 'Sons of Dhṛtarāṣṭra & Gāndhārī, including Duryodhana', x: 38, y: 92, tone: 'soft' },
      { id: 'pandavas', name: 'The Pāṇḍavas', detail: 'Yudhiṣṭhira · Bhīma · Arjuna · Nakula · Sahadeva', x: 65, y: 92, tone: 'gold' },
      { id: 'karna', name: 'Karṇa', detail: 'Kuntī’s firstborn, born before her marriage to Pāṇḍu', x: 88, y: 92, tone: 'saffron' },
    ],
    links: [
      { from: 'shantanu', to: 'ganga' }, { from: 'shantanu', to: 'satyavati' },
      { from: 'ganga', to: 'bhishma' }, { from: 'satyavati', to: 'vyasa' }, { from: 'satyavati', to: 'vichitravirya' },
      { from: 'vichitravirya', to: 'ambika' }, { from: 'vichitravirya', to: 'ambalika' },
      { from: 'vyasa', to: 'dhritarashtra' }, { from: 'vyasa', to: 'pandu' },
      { from: 'dhritarashtra', to: 'gandhari' }, { from: 'gandhari', to: 'kauravas' },
      { from: 'pandu', to: 'kunti' }, { from: 'pandu', to: 'madri' }, { from: 'kunti', to: 'pandavas' }, { from: 'madri', to: 'pandavas' },
      { from: 'kunti', to: 'karna' },
    ],
  },
]
