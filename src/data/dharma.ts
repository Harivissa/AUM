export interface DharmaConcept {
  id: string
  title: string
  sanskrit: string
  subtitle: string
  overview: string
  keyPoints: string[]
  scripturalQuote?: {
    sanskrit: string
    transliteration: string
    english: string
    source: string
  }
  practicalApplication: string
}

export const DHARMA_CONCEPTS: DharmaConcept[] = [
  {
    id: 'rta-dharma',
    title: 'Ṛta & Dharma (Cosmic Order & Duty)',
    sanskrit: 'ऋतं च धर्मश्च',
    subtitle: 'The cosmic rhythm that sustains reality and moral responsibility',
    overview:
      'In Vedic philosophy, Ṛta is the fundamental cosmic matrix of order, truth, and harmony that governs planetary orbits, seasons, life cycles, and causality. Dharma is the conscious upholding and alignment with this order in human thoughts, speech, and societal conduct. Dharma is that which sustains (Dhārayati iti Dharmaḥ).',
    keyPoints: [
      'Ṛta: The impersonal cosmic order, physical laws, and natural balance of the universe.',
      'Dharma: Moral righteousness, duty, justice, and action aligned with cosmic harmony.',
      'Dynamic balance: Dharma is not a rigid dogma; it is context-sensitive and evolving.',
      'Cosmic reciprocity: When dharma is protected, it protects humanity (Dharmo rakṣati rakṣitaḥ).',
    ],
    scripturalQuote: {
      sanskrit: 'धर्मो रक्षति रक्षितः तस्माद्धर्मो न हन्तव्यो मा नो धर्मो हतोऽवधीत्॥',
      transliteration: 'Dharmo rakṣati rakṣitaḥ tasmād dharmo na hantavyo mā no dharmo hato\'vadhīt.',
      english: 'Dharma protects those who protect it. Therefore, Dharma must never be violated, lest violated Dharma destroy us.',
      source: 'Mahābhārata, Vana Parva 313.128 & Manusmṛti 8.15',
    },
    practicalApplication:
      'Living ecologically, practicing ethical honesty in one\'s vocation, and making decisions that uphold the well-being of the whole family and community rather than short-term selfish impulse.',
  },
  {
    id: 'purusharthas',
    title: 'The Four Puruṣārthas',
    sanskrit: 'चतुर्विध पुरुषार्थाः',
    subtitle: 'The holistic aims of human life: Dharma, Artha, Kāma, and Mokṣa',
    overview:
      'Sanātana Dharma offers a balanced framework that neither rejects worldly life nor treats material gain as the final destination. The four legitimate pursuits of human life are integrated into a single ascending path: Dharma (ethical foundation), Artha (economic security and prosperity), Kāma (aesthetic and sensory fulfillment), culminating in Mokṣa (spiritual liberation).',
    keyPoints: [
      'Dharma (Righteousness): The ethical anchor that governs all wealth creation and desires.',
      'Artha (Prosperity): Legitimate pursuit of wealth, livelihood, technology, and economic enterprise.',
      'Kāma (Pleasure & Love): Cultivated aesthetic appreciation, artistic creativity, and familial joy.',
      'Mokṣa (Liberation): Realization of the immortal Self (Ātman) and freedom from existential bondage.',
    ],
    scripturalQuote: {
      sanskrit: 'यतोऽभ्युदयनिश्रेयससिद्धिः स धर्मः॥',
      transliteration: 'Yato\'bhyudaya-niḥśreyasa-siddhiḥ sa dharmaḥ.',
      english: 'That which brings about both material prosperity in this world (Abhyudaya) and the supreme spiritual good (Niḥśreyasa) is Dharma.',
      source: 'Kaṇāda, Vaiśeṣika Sūtras 1.1.2',
    },
    practicalApplication:
      'Pursuing a prosperous career with full integrity, enjoying familial love and arts with moderation, and dedicating daily time to inner meditation and spiritual discovery.',
  },
  {
    id: 'karma-punarjanma',
    title: 'Karma & Punarjanma',
    sanskrit: 'कर्म च पुनर्जन्म',
    subtitle: 'Causality, self-responsibility, and the journey of consciousness',
    overview:
      'The law of Karma is the metaphysical equivalent of the law of conservation of momentum: every intentional thought, word, and deed leaves an imprint (Saṁskāra) that bears fruit (Phala) in accordance with universal justice. It is not fatalism; rather, it is the supreme doctrine of free will and personal responsibility.',
    keyPoints: [
      'Sañcita Karma: The accumulated repository of all past impressions waiting to mature.',
      'Prārabdha Karma: The portion of past karma that has ripened to form the present life’s circumstances.',
      'Kriyamāṇa / Āgāmi Karma: The actions being chosen right now in the present moment through free will.',
      'Punarjanma (Reincarnation): The ongoing evolutionary pilgrimage of the soul through bodily garments until self-realization.',
    ],
    scripturalQuote: {
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      transliteration: 'Karmaṇy evādhikāras te mā phaleṣu kadācana, mā karmaphalahetur bhūr mā te saṅgo\'stv akarmaṇi.',
      english: 'You have a right to your duty alone, never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.',
      source: 'Bhagavad Gītā 2.47',
    },
    practicalApplication:
      'Focusing completely on the quality, dedication, and ethics of one’s work right now without debilitating anxiety over the final outcome, accepting unchangeable life situations with calm strength.',
  },
  {
    id: 'four-yogas',
    title: 'The Four Yogas (Paths of Realization)',
    sanskrit: 'चत्वारो योगाः',
    subtitle: 'Diverse temperaments, one supreme spiritual destination',
    overview:
      'Recognizing that human temperaments differ, Sanātana Dharma provides four major pathways to spiritual enlightenment, which can be practiced individually or synthesized harmoniously: Karma Yoga (for the active), Bhakti Yoga (for the emotional), Jñāna Yoga (for the intellectual), and Rāja Yoga (for the contemplative).',
    keyPoints: [
      'Karma Yoga: Selfless service, performing work as an offering without selfish ego.',
      'Bhakti Yoga: Channeling emotional devotion toward the Divine through prayers, kīrtan, and surrender.',
      'Jñāna Yoga: Discriminating between the eternal (Nitya) and transient (Anitya) through self-inquiry (Vicăra).',
      'Rāja Yoga: Patañjali’s eight-limbed meditative discipline (Aṣṭāṅga Yoga) to quiet mental fluctuations (Citta-vṛtti-nirodha).',
    ],
    scripturalQuote: {
      sanskrit: 'योगः कर्मसु कौशलम्॥',
      transliteration: 'Yogaḥ karmasu kauśalam.',
      english: 'Yoga is equanimity and excellence in action.',
      source: 'Bhagavad Gītā 2.50',
    },
    practicalApplication:
      'Serving others without ego, treating daily work as worship, reflecting on who the real "I" is behind the thoughts, and practicing breathwork and mindful dhyāna every morning.',
  },
  {
    id: 'four-ashramas',
    title: 'The Four Āśramas (Life Stages)',
    sanskrit: 'चत्वार आश्रमाः',
    subtitle: 'A structured, psychological rhythm for individual and social life',
    overview:
      'The classical life-span was partitioned into four developmental stages, balancing student education, social responsibility, gradual retirement, and transcendent contemplation.',
    keyPoints: [
      'Brahmacarya (Student stage): Years of dedicated learning, character cultivation, discipline, and celibacy under a teacher.',
      'Gṛhastha (Householder stage): The bedrock of society, generating economic wealth, raising ethical children, and supporting the other three stages.',
      'Vānaprastha (Hermit / Transition stage): Gradual detachment from worldly ambition, handing responsibilities to the youth, mentoring, and deepening reflection.',
      'Sannyāsa (Renunciation stage): Freedom from all personal possessions and social titles, dedicated exclusively to universal love and God-consciousness.',
    ],
    scripturalQuote: {
      sanskrit: 'यथा वायुं समाश्रित्य वर्तन्ते सर्वजन्तवः। तथा गृहस्थमाश्रित्य वर्तन्ते सर्व आश्रमाः॥',
      transliteration: 'Yathā vāyuṁ samāśritya vartante sarvajantavaḥ, tathā gṛhastham āśritya vartante sarva āśramāḥ.',
      english: 'Just as all living beings depend upon the air for survival, so all other life stages depend upon the householder for sustenance.',
      source: 'Manusmṛti 3.77',
    },
    practicalApplication:
      'Knowing when to learn, when to vigorously build and contribute to family, when to step back gracefully to mentor the next generation, and when to seek inner stillness.',
  },
  {
    id: 'varna-concept',
    title: 'Varṇa vs Hereditary Caste: Historical Reality',
    sanskrit: 'वर्णव्यवस्थायाः सत्यम्',
    subtitle: 'Vedic classification by aptitude and temperament vs later ossified social rigidities',
    overview:
      'In Vedic texts and the Bhagavad Gītā, Varṇa was explicitly defined by innate qualities (Guṇa) and actions/vocation (Karma), rather than by birth (Janma). The Ṛgveda (9.112.3) famously records a family where one member is a poet, one a physician, and one grinds corn at the mill. Across centuries, social mobility ossified into hereditary Jāti systems, which modern dharmic reformers have vigorously rejected.',
    keyPoints: [
      'Scriptural foundation: Gītā 4.13 declares "Cāturvarṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ" — classified by qualities and actions.',
      'Vedic mobility: Numerous celebrated Ṛṣis were born outside priestly lineages: Maharṣi Veda Vyāsa (fisherman\'s daughter), Maharṣi Vālmīki, Satyakāma Jābāla (unknown paternity), and Vidura.',
      'Reformers & Saints: From Ramanujacharya, Basaveshwara, Kabir, Chaitanya, to Swami Vivekananda and Sri Aurobindo, saints consistently affirmed the equality of all souls (Ātma-vat sarva-bhūteṣu).',
      'Distinction between Varṇa (four conceptual aptitudes: intellectual, administrative, productive, supportive) and Jāti (thousands of occupational guilds).',
    ],
    scripturalQuote: {
      sanskrit: 'चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः। तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्॥',
      transliteration: 'Cāturvarṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ, tasya kartāram api māṁ viddhy akartāram avyayam.',
      english: 'The fourfold division of society was created by Me according to the distinctions of individual qualities (Guṇa) and actions (Karma).',
      source: 'Bhagavad Gītā 4.13',
    },
    practicalApplication:
      'Treating every human being with equal dignity as an embodiment of Brahman, recognizing individual talents, and dismantling any lingering prejudices.',
  },
  {
    id: 'pancha-mahayajna',
    title: 'The Pañca Mahāyajña (Five Daily Duties)',
    sanskrit: 'पञ्चमहायज्ञाः',
    subtitle: 'Five daily acts of gratitude that repay our cosmic debts',
    overview:
      'Traditional householders observed five daily micro-offerings to acknowledge interconnectedness with nature, ancestors, scholars, guests, and all creatures.',
    keyPoints: [
      'Brahma Yajña (Ṛṣi Ṛṇa): Daily study and sharing of sacred knowledge, honoring teachers.',
      'Deva Yajña (Deva Ṛṇa): Offering gratefulness and fire/incense prayers to cosmic powers and elements.',
      'Pitṛ Yajña (Pitṛ Ṛṇa): Honoring ancestors and parents with water offerings and virtuous living.',
      'Manuṣya Yajña (Manuṣya Ṛṇa): Hospitality (Atithi Devo Bhava) and feeding guests, travelers, and the poor.',
      'Bhūta Yajña (Bhūta Ṛṇa): Feeding animals, birds, insects, and caring for trees and plants.',
    ],
    scripturalQuote: {
      sanskrit: 'अध्यापनं ब्रह्मयज्ञः पितृयज्ञस्तु तर्पणम्। होमो दैवो बलिर्भौतो नृयज्ञोऽतिथिपूजनम्॥',
      transliteration: 'Adhyāpanaṁ brahmayajñaḥ pitṛyajñas tu tarpaṇam, homo daivo balir bhauto nṛyajño\'tithipūjanam.',
      english: 'Teaching and study is Brahma Yajña; water offerings to ancestors is Pitṛ Yajña; oblations to the divine is Deva Yajña; feeding living beings is Bhūta Yajña; and welcoming guests is Manuṣya Yajña.',
      source: 'Manusmṛti 3.70',
    },
    practicalApplication:
      'Feeding stray animals or birds, watering indoor plants, calling parents with love, helping a student, and reading inspiring wisdom daily.',
  },
  {
    id: 'ahimsa-ethics',
    title: 'Ahiṃsā & Universal Ethics (Sādhāraṇa Dharma)',
    sanskrit: 'अहिंसा परमो धर्मः',
    subtitle: 'Non-injury as the supreme virtue and universal moral pillars',
    overview:
      'While specific duties vary with role and time, Sādhāraṇa Dharma represents the timeless, non-negotiable moral foundation incumbent on all human beings at all times: Non-violence (Ahiṃsā), Truthfulness (Satya), Non-stealing (Asteya), Cleanliness of body and mind (Śauca), and Self-restraint (Indriya-nigraha).',
    keyPoints: [
      'Ahiṃsā: Practicing non-injury in thought, word, and deed toward all sentient beings.',
      'Satya: Truth spoken with benevolence, avoiding harsh or deceptive speech (Satyaṁ brūyāt priyaṁ brūyāt).',
      'Asteya: Abstinence from taking what has not been freely given, including intellectual property.',
      'Śauca: Both external hygienic cleanliness and internal mental purification through good thoughts.',
      'Dama & Śama: Mastery over sensory compulsions and mental agitation.',
    ],
    scripturalQuote: {
      sanskrit: 'अहिंसा परमो धर्मः धर्महिंसा तथैव च।',
      transliteration: 'Ahiṁsā paramo dharmaḥ, dharma-hiṁsā tathaiva ca.',
      english: 'Non-violence is the supreme virtue; and righteous defense against aggression is equally an obligation of Dharma.',
      source: 'Mahābhārata, Anuśāsana Parva 115.1 & Śānti Parva',
    },
    practicalApplication:
      'Practicing compassionate vegetarianism or cruelty-free consumption, choosing polite speech in tense situations, and protecting the vulnerable from injustice.',
  },
]

export interface Darshana {
  name: string
  sanskrit: string
  founder: string
  text: string
  coreFocus: string
  contribution: string
  epistemology: string[]
}

export const SIX_DARSHANAS: Darshana[] = [
  {
    name: 'Nyāya (Logic & Epistemology)',
    sanskrit: 'न्यायदर्शनम्',
    founder: 'Akṣapāda Gautama',
    text: 'Nyāya Sūtras',
    coreFocus: 'Rigorous epistemology, logic, 16 categories of rational debate (Tarka), and validation of knowledge.',
    contribution: 'Established formal 5-step syllogistic reasoning (Pratijñā, Hetu, Udāharaṇa, Upanaya, Nigamana) centuries before Western syllogisms.',
    epistemology: ['Pratyakṣa (Perception)', 'Anumāna (Inference)', 'Upamāna (Comparison)', 'Śabda (Testimony)'],
  },
  {
    name: 'Vaiśeṣika (Atomism & Physics)',
    sanskrit: 'वैशेषिकदर्शनम्',
    founder: 'Maharṣi Kaṇāda',
    text: 'Vaiśeṣika Sūtras',
    coreFocus: 'Classification of reality into Padārthas (categories) and Paramāṇu-vāda (atomic theory of matter).',
    contribution: 'Formulated that all physical entities in the cosmos are aggregations of indivisible, eternal atoms (Paramāṇu) moving under unseen forces (Adṛṣṭa).',
    epistemology: ['Pratyakṣa (Perception)', 'Anumāna (Inference)'],
  },
  {
    name: 'Sāṅkhya (Cosmic Dualism & Evolution)',
    sanskrit: 'साङ्ख्यदर्शनम्',
    founder: 'Maharṣi Kapila',
    text: 'Sāṅkhya Kārikā (Īśvarakṛṣṇa)',
    coreFocus: 'Discrimination between unmanifest consciousness (Puruṣa) and creative primordial nature (Prakṛti) with 24 Tattvas.',
    contribution: 'Provided the scientific cosmology of three Guṇas (Sattva, Rajas, Tamas) whose equilibrium disturbance produces the evolving cosmos.',
    epistemology: ['Pratyakṣa (Perception)', 'Anumāna (Inference)', 'Śabda (Testimony)'],
  },
  {
    name: 'Yoga (Psychology & Meditation)',
    sanskrit: 'योगदर्शनम्',
    founder: 'Maharṣi Patañjali',
    text: 'Pātañjala Yoga Sūtras',
    coreFocus: 'Systematic stilling of the fluctuations of consciousness (Yogaś citta-vṛtti-nirodhaḥ) through eight limbs (Aṣṭāṅga).',
    contribution: 'Comprehensive map of human psyche, meditation stages (Samādhi), and integration of body, breath, and pure witness awareness.',
    epistemology: ['Pratyakṣa (Perception)', 'Anumāna (Inference)', 'Śabda (Testimony)'],
  },
  {
    name: 'Mīmāṁsā (Hermeneutics & Ritual Action)',
    sanskrit: 'मीमांसादर्शनम्',
    founder: 'Maharṣi Jaimini',
    text: 'Mīmāṁsā Sūtras',
    coreFocus: 'Linguistic interpretation of Vedic injunctions, nature of speech, action, and duty (Dharma).',
    contribution: 'Developed sophisticated principles of textual interpretation, semantic analysis, and the eternity of sound vibration (Śabda-nityatā).',
    epistemology: ['Pratyakṣa', 'Anumāna', 'Upamāna', 'Śabda', 'Arthāpatti (Postulation)', 'Anupalabdhi (Non-cognition)'],
  },
  {
    name: 'Vedānta (Metaphysics of Non-Duality)',
    sanskrit: 'वेदान्तदर्शनम्',
    founder: 'Bādarāyaṇa Vyāsa',
    text: 'Brahma Sūtras & Upaniṣads',
    coreFocus: 'Realization of the non-dual supreme reality (Brahman) and its identity with the innermost Self (Ātman).',
    contribution: 'Inspired towering philosophical commentaries by Ādi Śaṅkara (Advaita), Rāmānuja (Viśiṣṭādvaita), and Madhvācārya (Dvaita).',
    epistemology: ['Pratyakṣa', 'Anumāna', 'Upamāna', 'Śabda', 'Arthāpatti', 'Anupalabdhi'],
  },
]

export interface YogaPath {
  name: string
  sanskrit: string
  path: string
  essence: string
  keyTexts: string[]
  practice: string
}

export const FOUR_YOGAS: YogaPath[] = [
  {
    name: 'Karma Yoga',
    sanskrit: 'कर्मयोगः',
    path: 'The Path of Selfless, Dedicated Action',
    essence: 'Performing duty without attachment to the fruits of work (Niṣkāma Karma). Work is transformed into worship when egocentric motives are surrendered.',
    keyTexts: ['Bhagavad Gītā (Chapters 3 & 4)', 'Īśāvāsya Upaniṣad'],
    practice: 'Dedicate your professional work to the welfare of all (Lokasaṅgraha); accept success and setback with emotional equanimity.',
  },
  {
    name: 'Bhakti Yoga',
    sanskrit: 'भक्तियोगः',
    path: 'The Path of Pure Devotion & Surrender',
    essence: 'Channeling the entire emotional capacity of the heart towards the Divine through ninefold devotion (Navadhā Bhakti), culminating in total self-surrender (Śaraṇāgati).',
    keyTexts: ['Bhagavad Gītā (Chapter 12)', 'Nārada Bhakti Sūtras', 'Śrīmad Bhāgavatam'],
    practice: 'Daily kīrtana, prayer, mindful chanting of divine names, seeing the Divine present in every living creature.',
  },
  {
    name: 'Rāja Yoga (Aṣṭāṅga)',
    sanskrit: 'राजयोगः',
    path: 'The Path of Mental Mastery & Meditation',
    essence: 'Systematic discipline of the mind and nervous system through ethical restraints (Yama), observances (Niyama), posture (Āsana), breath control (Prāṇāyāma), withdrawal (Pratyāhāra), concentration (Dhāraṇā), meditation (Dhyāna), and absorption (Samādhi).',
    keyTexts: ['Pātañjala Yoga Sūtras', 'Bhagavad Gītā (Chapter 6)'],
    practice: 'Daily seated breath awareness, inward withdrawal from screen overstimulation, and unhurried meditation on the quiet witness within.',
  },
  {
    name: 'Jñāna Yoga',
    sanskrit: 'ज्ञानयोगः',
    path: 'The Path of Inquiry & Philosophical Discrimination',
    essence: 'Discerning the real from the apparent (Viveka), developing detachment from transient forms (Vairāgya), and inquiring deeply into "Who am I?" (Ātma-vicāra).',
    keyTexts: ['Māṇḍūkya Upaniṣad', 'Bhagavad Gītā (Chapter 13)', 'Vivekacūḍāmaṇi'],
    practice: 'Self-inquiry (Neti, Neti — not this, not that), contemplation of the unchanging witness behind sensations, and study of Upaniṣadic mahāvākyas.',
  },
]

