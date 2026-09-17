export type ScriptureKind = 'Veda' | 'Upanishad' | 'Itihasa' | 'Gita' | 'Purana' | 'Vedanga' | 'Darshana' | 'Dharmashastra'

export interface ScriptureEntry {
  id: string
  title: string
  sanskrit: string
  kind: ScriptureKind
  tradition: string
  author: string
  description: string
  highlights: string[]
  versesOrStructure?: string
  coreConcepts?: string[]
}

export const SCRIPTURES: ScriptureEntry[] = [
  // --- ITIHĀSA ---
  {
    id: 'ramayana',
    title: 'Rāmāyaṇa',
    sanskrit: 'रामायणम्',
    kind: 'Itihasa',
    tradition: 'Itihāsa · Ādikāvya · Rāma tradition',
    author: 'Traditionally composed by Maharṣi Vālmīki',
    description:
      'The Rāmāyaṇa presents the life, noble conduct, and dharmic journey of Śrī Rāma, the steadfast devotion of Sītā, the loyalty of Lakṣmaṇa and Bharata, and the supreme bhakti of Hanumān. Comprising 24,000 verses across 7 Kāṇḍas, it illuminates personal dharma, familial duty, righteous governance (Rāmarājya), and cosmic justice.',
    highlights: ['24,000 ślokas across 7 Kāṇḍas', 'Ayodhyā, Kiṣkindhā & Laṅkā geography', 'Dharma, devotion & righteous character'],
    versesOrStructure: '7 Kāṇḍas: Bāla, Ayodhyā, Āraṇya, Kiṣkindhā, Sundara, Yuddha, and Uttara Kāṇḍa.',
    coreConcepts: ['Maryādā Puruṣottama', 'Pitr-vākya-pālana', 'Sītā-carita', 'Bhakti of Hanumān'],
  },
  {
    id: 'mahabharata',
    title: 'Mahābhārata',
    sanskrit: 'महाभारतम्',
    kind: 'Itihasa',
    tradition: 'Itihāsa · Kuru civilizational lineage',
    author: 'Traditionally composed by Maharṣi Kṛṣṇa Dvaipāyana Vyāsa',
    description:
      'The longest epic in world literature, spanning over 100,000 verses in 18 Parvas. It explores the intricate ethical dilemmas of human existence through the Kuru lineage, Hastināpura politics, the Kurukṣetra war, and the profound philosophical dialogue of the Bhagavad Gītā. Its dictum proclaims: "What is found here may be found elsewhere; what is not found here is nowhere."',
    highlights: ['18 Parvas with over 100,000 verses', 'Pāṇḍavas, Kauravas & Śrī Kṛṣṇa', 'Complex dharmic dilemmas & statecraft'],
    versesOrStructure: '18 Parvas (Ādi to Svargārohaṇa) + Harivaṁśa appendix.',
    coreConcepts: ['Dharma-saṅkaṭa', 'Niṣkāma Karma', 'Kṣātra Dharma', 'Yato Dharmas Tato Jayaḥ'],
  },

  // --- BHAGAVAD GĪTĀ ---
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gītā',
    sanskrit: 'श्रीमद्भगवद्गीता',
    kind: 'Gita',
    tradition: 'Prasthānatrayī · Itihāsa Smṛti',
    author: 'Spoken by Bhagavān Śrī Kṛṣṇa to Arjuna (Mahābhārata, Bhīṣma Parva)',
    description:
      'The 700-verse celestial dialogue on the battlefield of Kurukṣetra. When Arjuna collapses under emotional despondency (viṣāda), Bhagavān Kṛṣṇa expounds the nature of the immortal Self (Ātman), selfless action (Karma Yoga), philosophical discrimination (Jñāna Yoga), contemplative meditation (Dhyāna Yoga), and loving devotion (Bhakti Yoga).',
    highlights: ['700 ślokas organized into 18 Adhyāyas', 'Synthesis of Karma, Jñāna, and Bhakti', 'Universal guide to duty without attachment'],
    versesOrStructure: '18 Adhyāyas categorized into Karma-ṣaṭka (1-6), Bhakti-ṣaṭka (7-12), and Jñāna-ṣaṭka (13-18).',
    coreConcepts: ['Karmany evādhikāras te', 'Sthitaprajña', 'Viśvarūpa Darśana', 'Śaraṇāgati'],
  },

  // --- VEDAS ---
  {
    id: 'rigveda',
    title: 'Ṛgveda Saṁhitā',
    sanskrit: 'ऋग्वेदः',
    kind: 'Veda',
    tradition: 'Śruti · Foundational Vedic Saṁhitā',
    author: 'Apauruṣeya (revealed to Vedic Ṛṣis: Viśvāmitra, Vasiṣṭha, Vāmadeva, etc.)',
    description:
      'The oldest extant literary monument of humanity, consisting of 1,028 hymns (Sūktas) arranged into 10 Maṇḍalas containing 10,552 ṛcs. Preserved with immaculate tonal fidelity through 8 oral recitation systems (Vikaṭa-pāṭhas like Jātā and Ghana). It sings of the cosmic cosmic order (Ṛta), light, truth, and deities including Agni, Indra, Varuṇa, Soma, and Uṣas.',
    highlights: ['1,028 Sūktas in 10 Maṇḍalas', 'Nāsadīya & Puruṣa Sūktas', 'Living oral chanting traditions (UNESCO Heritage)'],
    versesOrStructure: '10 Maṇḍalas, 1,028 Sūktas, 10,552 mantras. Brāhmaṇas: Aitareya, Kauṣītaki.',
    coreConcepts: ['Ekaṁ Sad Viprā Bahudhā Vadanti', 'Ṛta (Cosmic Order)', 'Gāyatrī Mantra', 'Nāsadīya Creation Hymn'],
  },
  {
    id: 'samaveda',
    title: 'Sāmaveda Saṁhitā',
    sanskrit: 'सामवेदः',
    kind: 'Veda',
    tradition: 'Śruti · Sacred musical liturgy',
    author: 'Śruti · Preserved by Udgātṛ priests',
    description:
      'The Veda of sacred melodic chants (sāmans). The majority of its 1,875 verses are drawn from the Ṛgveda, set to specific musical meters, accents, and swaras that form the origin of Indian classical music (Gandharvaveda). In the Gītā, Śrī Kṛṣṇa declares: "Among the Vedas, I am the Sāmaveda."',
    highlights: ['Origin of classical Indian musical scales', 'Udgītha chants (Omkāra contemplation)', 'Kauthuma, Jaiminīya & Rāṇāyanīya recensions'],
    versesOrStructure: 'Pūrvārcika & Uttarārcika parts (1,875 mantras). Major Brāhmaṇa: Tāṇḍya Mahābrāhmaṇa.',
    coreConcepts: ['Gandharva music', 'Sāman singing', 'Chāndogya Upaniṣad connection'],
  },
  {
    id: 'yajurveda',
    title: 'Yajurveda (Śukla & Kṛṣṇa)',
    sanskrit: 'यजुर्वेदः',
    kind: 'Veda',
    tradition: 'Śruti · Vedic sacrificial and ritual formulas',
    author: 'Śruti · Preserved by Adhvaryu priests (Yājñavalkya for Śukla)',
    description:
      'The procedural Veda of yajña, containing sacred prose mantras (yajus) and invocations. Split into two traditions: Śukla (White) Yajurveda where mantras and commentaries are clearly segregated (Vājasaneyi Saṁhitā), and Kṛṣṇa (Black) Yajurveda where prose commentary is interwoven (Taittirīya and Maitrāyaṇī Saṁhitās). Contains the celebrated Śrī Rudram and Śata-rudrīya.',
    highlights: ['Śrī Rudram (Namakam & Camakam)', 'Śukla (Vājasaneyi) and Kṛṣṇa (Taittirīya) schools', 'Śatapatha Brāhmaṇa foundation'],
    versesOrStructure: '40 Adhyāyas (Śukla). Brāhmaṇa: Śatapatha Brāhmaṇa (100 chapters), the largest Brāhmaṇa.',
    coreConcepts: ['Yajña & sacrifice', 'Śrī Rudram', 'Īśāvāsya Upaniṣad (Adhyāya 40)'],
  },
  {
    id: 'atharvaveda',
    title: 'Atharvaveda Saṁhitā',
    sanskrit: 'अथर्ववेदः',
    kind: 'Veda',
    tradition: 'Śruti · Healing, society, and domestic life',
    author: 'Revealed to Atharvan and Aṅgiras Ṛṣis',
    description:
      'The fourth Veda, encompassing 730 hymns in 20 Kāṇḍas. It addresses the practical, biological, societal, and psychological realities of daily life: holistic medicinal healing (Ayurveda roots), botanical knowledge, statecraft, mathematical harmony, and sublime philosophical hymns such as the Pṛthvī Sūkta (celebrating reverence for Mother Earth).',
    highlights: ['Pṛthvī Sūkta (Sacred ecology hymn)', 'Ayurvedic foundation and botanical healing', 'Shaunaka and Paippalāda recensions'],
    versesOrStructure: '20 Kāṇḍas, 730 hymns, ~6,000 mantras. Gopatha Brāhmaṇa.',
    coreConcepts: ['Pṛthvī Sūkta', 'Bhaiṣajya (Medicine)', 'Māṇḍūkya Upaniṣad origin', 'Vrātya hymns'],
  },

  // --- UPANIṢADS (MUKHYA) ---
  {
    id: 'isavasya-upanishad',
    title: 'Īśāvāsya Upaniṣad',
    sanskrit: 'ईशावास्योपनिषद्',
    kind: 'Upanishad',
    tradition: 'Śruti · Mukhya Upaniṣad · Śukla Yajurveda',
    author: 'Vedic Ṛṣis (Forms Chapter 40 of Vājasaneyi Saṁhitā)',
    description:
      'The concise 18-verse masterpiece opening the Mukhya Upaniṣad canon. It establishes that the entire cosmos is permeated by the Divine (Īśa) and counsels living fully in the world for a hundred years through detached enjoyment (Tena tyaktena bhuñjīthā), synthesizing action (Karma) with wisdom (Vidyā).',
    highlights: ['18 profound sutra-like verses', 'All is enveloped by the Divine', 'Harmony of active life and spiritual detachment'],
    versesOrStructure: '18 mantras. Found at the conclusion of the Śukla Yajurveda Saṁhitā.',
    coreConcepts: ['Īśāvāsyam idaṁ sarvam', 'Mā gṛdhaḥ kasya svid dhanam', 'Vidyā and Avidyā harmony'],
  },
  {
    id: 'katha-upanishad',
    title: 'Kaṭha Upaniṣad',
    sanskrit: 'कठोपनिषद्',
    kind: 'Upanishad',
    tradition: 'Śruti · Mukhya Upaniṣad · Kṛṣṇa Yajurveda',
    author: 'Vedic Ṛṣis (Dialogue between Naciketas and Yama)',
    description:
      'The stirring dialogue where young boy Naciketas journeys to the abode of Yama (Lord of Death) and asks for the mystery of what happens beyond mortal death. Yama tests him with wealth and empires, but upon Naciketas’ refusal, reveals the secret of Ātman, the chariot allegory of body and senses, and the path across the razor’s edge of realization.',
    highlights: ['Naciketas and Yama dialogue', 'The Chariot Metaphor (Ratha Kalpanā)', 'The choice between Preyas (pleasure) and Śreyas (good)'],
    versesOrStructure: '2 Adhyāyas, each with 3 Vallīs (119 verses total).',
    coreConcepts: ['Śreyas vs Preyas', 'Chariot of the Self', 'Kṣurasya Dhārā (Razor’s Edge)', 'Uttiṣṭhata Jāgrata'],
  },
  {
    id: 'mandukya-upanishad',
    title: 'Māṇḍūkya Upaniṣad',
    sanskrit: 'माण्डूक्योपनिषद्',
    kind: 'Upanishad',
    tradition: 'Śruti · Mukhya Upaniṣad · Atharvaveda',
    author: 'Vedic Ṛṣis (Elucidated in Gauḍapāda’s Kārikā)',
    description:
      'Comprising only 12 succinct prose sentences, the Muktikā Upaniṣad asserts that Māṇḍūkya alone is sufficient for liberation. It systematically deconstructs the syllable ॐ (A-U-M) as identical to the four states of consciousness: Waking (Jāgrat/Vaiśvānara), Dreaming (Svapna/Taijasa), Deep Sleep (Suṣupti/Prājña), and the non-dual Transcendent Fourth (Turīya).',
    highlights: ['12 profound mantras on the syllable ॐ', 'The 4 states of consciousness (Jāgrat, Svapna, Suṣupti, Turīya)', 'Basis of Gauḍapāda’s Advaita Kārikā'],
    versesOrStructure: '12 prose mantras.',
    coreConcepts: ['AUM phonetic anatomy', 'Ayam Ātmā Brahma (Mahāvākya)', 'Turīya state', 'Non-dual reality (Advaita)'],
  },
  {
    id: 'chandogya-upanishad',
    title: 'Chāndogya Upaniṣad',
    sanskrit: 'छान्दोग्योपनिषद्',
    kind: 'Upanishad',
    tradition: 'Śruti · Mukhya Upaniṣad · Sāmaveda',
    author: 'Vedic Ṛṣis (Uddālaka Āruṇi, Śvetaketu, Sanatkumāra, Nārada)',
    description:
      'One of the two largest and most celebrated Upaniṣads, brimming with profound pedagogical narratives. Contains Uddālaka’s instruction to his son Śvetaketu with nine practical illustrations (rivers into the sea, salt dissolved in water) culminating in the Mahāvākya "Tat Tvam Asi" (That Thou Art), and Sanatkumāra’s teaching on the Infinite (Bhūmā).',
    highlights: ['Origin of the Mahāvākya "Tat Tvam Asi"', 'Teaching of Uddālaka to Śvetaketu', 'The doctrine of the Infinite (Yo vai bhūmā tat sukham)'],
    versesOrStructure: '8 Prapāṭhakas with 154 Khaṇḍas. Part of the Chāndogya Brāhmaṇa.',
    coreConcepts: ['Tat Tvam Asi', 'Dahara Vidyā (The lotus of the heart)', 'Bhūmā Vidyā', 'Pañcāgni Vidyā'],
  },
  {
    id: 'brihadaranyaka-upanishad',
    title: 'Bṛhadāraṇyaka Upaniṣad',
    sanskrit: 'बृहदारण्यकोपनिषद्',
    kind: 'Upanishad',
    tradition: 'Śruti · Mukhya Upaniṣad · Śukla Yajurveda',
    author: 'Vedic Ṛṣis (Yājñavalkya, Maitreyī, Gārgī Vācaknavī)',
    description:
      'The "Great Forest Upaniṣad", widely celebrated for philosophical depth and historic debates. At King Janaka’s court, Sage Yājñavalkya engages in profound public debates with great philosophers including the brilliant female scholar Gārgī Vācaknavī. Features the dialogue with his wife Maitreyī on the immortal Self, and the universal prayer "Asato Mā Sadgamaya".',
    highlights: ['Yājñavalkya’s debates with Gārgī Vācaknavī', 'Dialogue with Maitreyī on divine love', 'Source of "Ahaṁ Brahmāsmi" and "Asato Mā Sadgamaya"'],
    versesOrStructure: '6 Adhyāyas (Kāṇḍas: Madhu, Muni/Yājñavalkya, Khila).',
    coreConcepts: ['Ahaṁ Brahmāsmi', 'Neti, Neti (Not this, not this)', 'Asato Mā Sadgamaya', 'Ātman as the true beloved'],
  },
  {
    id: 'taittiriya-upanishad',
    title: 'Taittirīya Upaniṣad',
    sanskrit: 'तैत्तिरीयोपनिषद्',
    kind: 'Upanishad',
    tradition: 'Śruti · Mukhya Upaniṣad · Kṛṣṇa Yajurveda',
    author: 'Vedic Ṛṣis (Sage Varuṇa and Bhṛgu)',
    description:
      'Celebrated for the graduation address to students (Śīkṣāvallī: "Satyaṁ vada, dharmaṁ cara"), the analysis of the Five Sheaths of personality (Pañca-kośas: Annamaya, Prāṇamaya, Manomaya, Vijñānamaya, Ānandamaya), and the realization of Divine Bliss as the source of all existence (Ānandavallī).',
    highlights: ['Convocation address: Satyaṁ vada, dharmaṁ cara', 'The 5 Koshas (Annamaya to Ānandamaya)', 'The nature of Divine Bliss (Raso vai saḥ)'],
    versesOrStructure: '3 Vallīs: Śīkṣāvallī, Brahmānandavallī, and Bhṛguvallī.',
    coreConcepts: ['Mātṛdevo Bhava, Pitṛdevo Bhava', 'Pañcakośa theory', 'Satyaṁ Jñānam Anantam Brahma'],
  },

  // --- MAHĀPURĀṆAS ---
  {
    id: 'bhagavata-purana',
    title: 'Śrīmad Bhāgavata Purāṇa',
    sanskrit: 'श्रीमद्भागवतपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Sāttvika · Vaiṣṇava Bhakti',
    author: 'Traditionally composed by Maharṣi Vyāsa; recited by Śuka to King Parīkṣit',
    description:
      'Comprising 18,000 verses across 12 Skandhas, it is the crest jewel of bhakti literature. While chronicling the 24 Avatāras of Bhagavān Viṣṇu, its 10th Skandha tenderly depicts the childhood, divine lilas, and teachings of Śrī Kṛṣṇa in Vṛndāvana, culminating in Uddhava Gītā (Skandha 11).',
    highlights: ['18,000 verses across 12 Skandhas', 'Childhood and youth of Śrī Kṛṣṇa (Skandha 10)', 'Kapila Gītā & Uddhava Gītā teachings'],
    versesOrStructure: '12 Skandhas, 335 Adhyāyas.',
    coreConcepts: ['Nava-vidhā Bhakti', 'Bhagavān concept', 'Nirguṇa & Saguṇa synthesis', 'Uddhava Gītā'],
  },
  {
    id: 'vishnu-purana',
    title: 'Viṣṇu Purāṇa',
    sanskrit: 'विष्णुपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Classical Pañcalakṣaṇa prototype',
    author: 'Sage Parāśara (father of Vyāsa) in dialogue with Maitreya',
    description:
      'Regarded by scholars as the closest to the classical fivefold definition (Pañcalakṣaṇa) of a Purāṇa: primary creation (Sarga), secondary creation (Pratisarga), genealogies (Vaṁśa), cosmic eras (Manvantaras), and dynastic chronicles (Vaṁśānucarita). Features the inspiring steadfast devotion of Dhruva and Prahlāda.',
    highlights: ['Prahlāda & Dhruva narratives', 'Cosmology, geography of Jambūdvīpa', 'Pristine adherence to Pañcalakṣaṇa structure'],
    versesOrStructure: '6 Aṁśas (parts) containing ~7,000 verses.',
    coreConcepts: ['Prahlāda Bhakti', 'Manvantara cycles', 'Dhruva Tapas'],
  },
  {
    id: 'shiva-purana',
    title: 'Śiva Purāṇa',
    sanskrit: 'शिवपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Śaiva tradition',
    author: 'Vyāsa / Sūta Gosvāmī tradition',
    description:
      'The principal scripture celebrating the glory, manifestations, sacred symbols (Liṅga, Bhasma, Rudrākṣa), and sports of Bhagavān Śiva and Devī Pārvatī. Chronicles the emergence of the 12 Jyotirlingas, the destruction of Tripura, the penance of Pārvatī, the birth of Kārttikeya and Gaṇeśa, and the path of Śiva-bhakti.',
    highlights: ['12 Jyotirlinga origin narratives', 'Marriage of Śiva and Pārvatī', 'Ritual significance of Rudrākṣa and Bhasma'],
    versesOrStructure: '7 Saṁhitās: Vidyeśvara, Rudra, Śatarudra, Koṭirudra, Umā, Kailāsa, Vāyavīya.',
    coreConcepts: ['Liṅgāvirbhāva', 'Tapas & Vairāgya', '12 Jyotirlingas', 'Pañcākṣara Mantra (Namaḥ Śivāya)'],
  },
  {
    id: 'devi-bhagavata',
    title: 'Devī Bhāgavata Purāṇa',
    sanskrit: 'देवीभागवतपुराणम्',
    kind: 'Purana',
    tradition: 'Purāṇa · Śākta tradition',
    author: 'Traditionally composed by Maharṣi Vyāsa',
    description:
      'The foundational narrative scripture of Śākta tradition, celebrating the Supreme Divine Mother as Ādi Parāśakti, the supreme unmanifest and manifest ground of creation. Contains the renowned Devī Gītā (Book 7), along with detailed accounts of the 51 Śakti Pīṭhas, Navarātri observances, and victorious exploits over negative tendencies.',
    highlights: ['Devī Gītā (philosophical jewel of Book 7)', '51 Śakti Pīṭhas geography and origin', 'Theological exposition of Ādi Parāśakti'],
    versesOrStructure: '12 Skandhas, 318 Adhyāyas (18,000 verses).',
    coreConcepts: ['Ādi Parāśakti', 'Devī Gītā', '51 Śakti Pīṭhas', 'Māhātmyam of Śrī Vidyā'],
  },

  // --- VEDĀṄGAS (6 AUXILIARY DISCIPLINES) ---
  {
    id: 'vedangas',
    title: 'The Six Vedāṅgas (षडङ्गानि)',
    sanskrit: 'षडङ्गानि',
    kind: 'Vedanga',
    tradition: 'Smṛti · Vedic auxiliary sciences',
    author: 'Composed by ancient Vedic ṛṣis and grammarians (Pāṇini, Yāska, Piṅgala, etc.)',
    description:
      'The six limbs essential for chanting, understanding, preserving, and applying the Vedas: 1) Śikṣā (Phonetics and phonology), 2) Kalpa (Ritual procedures, Śrauta/Gṛhya/Dharma Sūtras), 3) Vyākaraṇa (Grammar, crowned by Pāṇini’s Aṣṭādhyāyī), 4) Nirukta (Etymology and contextual semantics by Yāska), 5) Chhandas (Vedic metrics, formalized by Piṅgala), and 6) Jyotiṣa (Vedic astronomy and observational calendar mathematics).',
    highlights: ['Śikṣā (phonetics) & Vyākaraṇa (Pāṇini grammar)', 'Kalpa (Sūtras) & Nirukta (Yāska etymology)', 'Chhandas (metrics) & Jyotiṣa (astronomical calendar)'],
    versesOrStructure: '6 Branches: Śikṣā, Kalpa, Vyākaraṇa, Nirukta, Chhandas, Jyotiṣa.',
    coreConcepts: ['Aṣṭādhyāyī', 'Nighaṇṭu & Nirukta', 'Piṅgala Chandaḥśāstra', 'Vedāṅga Jyotiṣa of Lagadha'],
  },

  // --- DARŚANAS (6 PHILOSOPHICAL SYSTEMS) ---
  {
    id: 'darshanas',
    title: 'The Six Āstika Darśanas (षड्दर्शनानि)',
    sanskrit: 'षड्दर्शनानि',
    kind: 'Darshana',
    tradition: 'Darśana · Classical Indian Epistemology & Metaphysics',
    author: 'Foundational Sūtrakāras: Gautama, Kaṇāda, Kapila, Patañjali, Jaimini, Bādarāyaṇa',
    description:
      'The six orthodox (Vedic-accepting) systems of Indian philosophy, grouped into complementary pairs: 1) Nyāya (Logic, epistemology, pramāṇas by Gautama) & Vaiśeṣika (Atomism, natural philosophy by Kaṇāda); 2) Sāṅkhya (Puruṣa-Prakṛti dualism by Kapila) & Yoga (Eightfold meditative path by Patañjali); 3) Mīmāṃsā (Hermeneutics of action and Vedic exegesis by Jaimini) & Vedānta (Inquiry into Brahman by Bādarāyaṇa, further elucidated by Śaṅkara, Rāmānuja, and Madhva).',
    highlights: ['Epistemology (Pramāṇas: Pratyakṣa, Anumāna, Upamāna, Śabda)', 'Sāṅkhya 24 Tattvas & Patañjali Aṣṭāṅga Yoga', 'Advaita, Viśiṣṭādvaita, and Dvaita Vedānta'],
    versesOrStructure: 'Paired systems: Nyāya-Vaiśeṣika, Sāṅkhya-Yoga, Pūrva Mīmāṃsā-Uttara Mīmāṃsā (Vedānta).',
    coreConcepts: ['Pramāṇa (valid means of knowledge)', 'Puruṣa and Prakṛti', 'Aṣṭāṅga Yoga', 'Brahma Sūtras'],
  },

  // --- DHARMAŚĀSTRAS ---
  {
    id: 'dharmashastras',
    title: 'Dharmaśāstras & Smṛtis',
    sanskrit: 'धर्मशास्त्राणि',
    kind: 'Dharmashastra',
    tradition: 'Smṛti · Ethics, jurisprudence, and civic duties',
    author: 'Manu, Yājñavalkya, Parāśara, Nārada, and Apastamba',
    description:
      'The evolving texts of social ethics, civic duties, familial responsibilities, jurisprudence, and penance. Historically, Dharmaśāstras were contextual, subject to regional local custom (Deśācāra) and historical era (Yuga-dharma: Manusmṛti for Satya, Gautama for Tretā, Śaṅkha-Likhita for Dvāpara, Parāśara for Kali). Unlike Śruti, they are Smṛti (human memory) and were continuously adapted and commented upon across centuries.',
    highlights: ['Contextual nature of Smṛti vs eternal Śruti', 'Yuga-dharma and regional variation (Deśācāra)', 'Yājñavalkya Smṛti & Vijñāneśvara’s Mitākṣarā commentary'],
    versesOrStructure: 'Dharma Sūtras (Apastamba, Baudhāyana) and metric Smṛtis (Manu, Yājñavalkya, Parāśara).',
    coreConcepts: ['Sādhāraṇa Dharma (universal ethics)', 'Varṇāśrama evolution', 'Mitākṣarā', 'Prāyaścitta (restitution)'],
  },
]

export const SCRIPTURE_GROUPS: { id: ScriptureKind; label: string; sanskrit: string }[] = [
  { id: 'Itihasa', label: 'Itihāsa', sanskrit: 'इतिहास' },
  { id: 'Gita', label: 'Bhagavad Gītā', sanskrit: 'गीता' },
  { id: 'Veda', label: 'Vedas', sanskrit: 'वेदाः' },
  { id: 'Upanishad', label: 'Upaniṣads', sanskrit: 'उपनिषदः' },
  { id: 'Purana', label: 'Purāṇas', sanskrit: 'पुराणानि' },
  { id: 'Vedanga', label: 'Vedāṅgas', sanskrit: 'वेदाङ्गानि' },
  { id: 'Darshana', label: 'Darśanas', sanskrit: 'दर्शनानि' },
  { id: 'Dharmashastra', label: 'Dharmaśāstras', sanskrit: 'धर्मशास्त्राणि' },
]
