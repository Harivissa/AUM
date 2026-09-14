export type ScriptureKind = 'Veda' | 'Purana' | 'Itihasa'

export interface ScriptureEntry {
  id: string
  title: string
  sanskrit: string
  kind: ScriptureKind
  tradition: string
  author: string
  description: string
  highlights: string[]
}

export const SCRIPTURES: ScriptureEntry[] = [
  {
    id: 'ramayana',
    title: 'Rāmāyaṇa',
    sanskrit: 'रामायणम्',
    kind: 'Itihasa',
    tradition: 'Itihāsa · Rāma tradition',
    author: 'Traditionally attributed to Maharṣi Vālmīki',
    description:
      'The Rāmāyaṇa presents the life and dharmic journey of Śrī Rāma, the devotion of Sītā, the loyalty of Lakṣmaṇa and Bharata, and the bhakti of Hanumān. Its recensions and living traditions span many regions of India and beyond.',
    highlights: ['Rāma · Sītā · Lakṣmaṇa · Bharata', 'Ayodhyā · Laṅkā · Kiṣkindhā', 'Dharma, devotion & righteous conduct'],
  },
  {
    id: 'mahabharata',
    title: 'Mahābhārata',
    sanskrit: 'महाभारतम्',
    kind: 'Itihasa',
    tradition: 'Itihāsa · Kuru tradition',
    author: 'Traditionally attributed to Maharṣi Kṛṣṇa Dvaipāyana Vyāsa',
    description:
      'The Mahābhārata follows the Kuru lineage and the struggle surrounding Hastināpura, culminating in the Kurukṣetra war. The Bhagavad Gītā appears within the Bhīṣma Parva.',
    highlights: ['Pāṇḍavas · Kauravas · Kuru lineage', 'Śrī Kṛṣṇa & Arjuna', 'Dharma, duty, kingship & consequence'],
  },
  {
    id: 'rigveda',
    title: 'Ṛgveda',
    sanskrit: 'ऋग्वेदः',
    kind: 'Veda',
    tradition: 'Śruti · Ṛgvedic Saṁhitā',
    author: 'Śruti; preserved through Vedic oral traditions',
    description:
      'The Ṛgveda is a foundational Vedic Saṁhitā consisting of hymns addressed to deities including Agni, Indra, Soma, Uṣas and others.',
    highlights: ['Maṇḍalas & sūktas', 'Agni · Indra · Soma · Uṣas', 'Vedic recitation traditions'],
  },
  {
    id: 'samaveda',
    title: 'Sāmaveda',
    sanskrit: 'सामवेदः',
    kind: 'Veda',
    tradition: 'Śruti · Sāman chant tradition',
    author: 'Śruti; preserved through Vedic oral traditions',
    description:
      'The Sāmaveda arranges verses for liturgical singing and is closely associated with the Sāman musical-recitation tradition.',
    highlights: ['Sāman recitation', 'Yajña liturgy', 'Living oral transmission'],
  },
  {
    id: 'yajurveda',
    title: 'Yajurveda',
    sanskrit: 'यजुर्वेदः',
    kind: 'Veda',
    tradition: 'Śruti · Yajurvedic ritual tradition',
    author: 'Śruti; preserved through Vedic śākhās',
    description:
      'The Yajurveda contains prose and verse formulas used in Vedic ritual traditions. Major recensions include the Śukla and Kṛṣṇa Yajurveda traditions.',
    highlights: ['Śukla & Kṛṣṇa traditions', 'Yajña formulas', 'Śākhā-based transmission'],
  },
  {
    id: 'atharvaveda',
    title: 'Atharvaveda',
    sanskrit: 'अथर्ववेदः',
    kind: 'Veda',
    tradition: 'Śruti · Atharvavedic tradition',
    author: 'Śruti; preserved through Vedic oral traditions',
    description:
      'The Atharvaveda contains hymns and formulas addressing healing, household life, protection, kingship and other dimensions of Vedic practice.',
    highlights: ['Healing & protection hymns', 'Household and royal contexts', 'Vedic śākhā traditions'],
  },
  {
    id: 'bhagavata-purana',
    title: 'Śrīmad Bhāgavata Purāṇa',
    sanskrit: 'श्रीमद्भागवतपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Vaiṣṇava bhakti',
    author: 'Traditionally attributed to Vyāsa',
    description:
      'A major Purāṇa centered on bhakti, with extensive accounts of Bhagavān Viṣṇu and his avatāras, including the celebrated childhood and youth traditions of Śrī Kṛṣṇa.',
    highlights: ['Kṛṣṇa bhakti', 'Avatāra traditions', 'Bhakti, jñāna & vairāgya'],
  },
  {
    id: 'shivapurana',
    title: 'Śiva Purāṇa',
    sanskrit: 'शिवपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Śaiva tradition',
    author: 'Purāṇic tradition; traditionally connected with Vyāsa',
    description:
      'A major Śaiva Purāṇa containing narratives, teachings, sacred geography and traditions centered on Bhagavān Śiva and Devī.',
    highlights: ['Śiva · Pārvatī · Gaṇeśa · Skanda', 'Śaiva sacred traditions', 'Tīrtha and vrata traditions'],
  },
  {
    id: 'devi-bhagavata',
    title: 'Devī Bhāgavata Purāṇa',
    sanskrit: 'देवीभागवतपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Śākta tradition',
    author: 'Purāṇic tradition; traditionally attributed to Vyāsa',
    description:
      'A major Śākta Purāṇa emphasizing Devī as the supreme divine reality within its theological framework, together with stories, teachings and sacred practices.',
    highlights: ['Devī Māhātmya traditions', 'Śākta theology', 'Devī worship & sacred geography'],
  },
]

export const SCRIPTURE_GROUPS: { id: ScriptureKind; label: string; sanskrit: string }[] = [
  { id: 'Itihasa', label: 'Itihāsa', sanskrit: 'इतिहास' },
  { id: 'Veda', label: 'Vedas', sanskrit: 'वेदाः' },
  { id: 'Purana', label: 'Purāṇas', sanskrit: 'पुराणानि' },
]
