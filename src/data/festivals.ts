export type SourceCategory =
  | 'Śāstric source'
  | 'Traditional account'
  | 'Historical record'
  | 'Archaeological evidence'
  | 'Modern scientific interpretation'
  | 'Contested or uncertain'

export interface FestivalSource {
  category: SourceCategory
  title: string
  detail: string
}

export interface IconographyItem {
  id: string
  name: string
  sanskrit: string
  symbolism: string
  note: string
}

export interface TimelineStep {
  step: number
  title: string
  sanskrit: string
  description: string
  variationNote: string
}

export interface RegionalPractice {
  region: string
  highlights: string
  customs: string
}

export interface FestivalFAQ {
  question: string
  answer: string
  category: SourceCategory
}

export interface Festival {
  slug: string
  name: string
  alternateName: string
  sanskrit: string
  summary: string
  observance: string
  regionNote: string
  practiceNotes: string[]
  careNote: string
  meaningToday: string
  iconography: IconographyItem[]
  timeline: TimelineStep[]
  immersionSequence: { step: string; title: string; desc: string }[]
  offeringsList: { name: string; sa: string; desc: string }[]
  regionalCards: RegionalPractice[]
  faqs: FestivalFAQ[]
  sections: {
    id: string
    eyebrow: string
    title: string
    category: SourceCategory
    body: string
  }[]
  sources: FestivalSource[]
}

export const FESTIVALS: Festival[] = [
  {
    slug: 'vinayaka-chavithi',
    name: 'Vināyaka Chavithi',
    alternateName: 'Gaṇeśa Caturthī',
    sanskrit: 'विनायक चतुर्थी',
    summary: 'A major Hindu observance centred on Śrī Gaṇeśa, honoured in homes, temples and public communities through forms shaped by regional and sampradāya practice.',
    observance: 'It is observed on the fourth lunar day (caturthī) of the bright fortnight (śukla pakṣa) of Bhādrapada in many Hindu lunisolar calendars. The civil date and local observance can vary by region and calendar convention.',
    regionNote: 'For the applicable tithi, local sunrise rules and community observance, consult a trusted regional pañcāṅga or temple calendar rather than assuming one universal civil date.',
    practiceNotes: [
      'Many households begin with cleaning and preparing a simple place of worship.',
      'Offerings, prayers, vrata practices and immersion customs differ by family, region and temple tradition.',
      'Public celebrations can include community worship, music, teaching and service; their form is locally governed.',
    ],
    careNote: 'AUM does not prescribe ritual authority. Follow the guidance of your family tradition, temple or qualified practitioner, and observe local safety and environmental rules for any community celebration or immersion.',
    meaningToday: 'For many devotees, Vināyaka Chavithi is a renewed beginning: making space for learning, family, service and careful action. Its practical value need not depend on a single ritual form; the festival is lived differently across homes and communities.',
    iconography: [
      { id: 'head', name: 'Elephant Head', sanskrit: 'गजानन', symbolism: 'Immense wisdom, grand intellect, and noble majesty', note: 'Common symbolic interpretation across Puranic and traditional texts.' },
      { id: 'ears', name: 'Large Ears', sanskrit: 'कर्ण', symbolism: 'Listening more, patience, and discerning wisdom', note: 'Symbolic representation of an attentive seeker.' },
      { id: 'eyes', name: 'Small Eyes', sanskrit: 'सूक्ष्मदृष्टि', symbolism: 'Concentration, sharp focus, and subtle spiritual discernment', note: 'Emphasizes looking beyond gross material surfaces.' },
      { id: 'trunk', name: 'Adaptable Trunk', sanskrit: 'वक्रतुण्ड', symbolism: 'Adaptability, discrimination (Viveka), and strength', note: 'Capable of lifting heavy burdens or picking delicate flowers.' },
      { id: 'tusk', name: 'Single Tusk (Ekadanta)', sanskrit: 'एकदन्त', symbolism: 'Non-duality (Advaita), commitment, and sacrifice', note: 'Traditionally associated with writing the Mahābhārata.' },
      { id: 'arms', name: 'Four Arms', sanskrit: 'चतुर्भुज', symbolism: 'The four Puruṣārthas: Dharma, Artha, Kāma, Mokṣa', note: 'Also interpreted as mind, intellect, ego, and consciousness.' },
      { id: 'modaka', name: 'Modaka in Hand', sanskrit: 'मोदक', symbolism: 'The sweet fruit of spiritual effort and realization', note: 'Central offering in Gaṇeśa worship.' },
      { id: 'pasa', name: 'Pāśa (Noose)', sanskrit: 'पाश', symbolism: 'Drawing the mind away from worldly attachments', note: 'Liturgical iconographic weapon.' },
      { id: 'ankusha', name: 'Aṅkuśa (Goad)', sanskrit: 'अङ्कुश', symbolism: 'Restraining the untrained ego and wild desires', note: 'Symbol of spiritual discipline.' },
      { id: 'mouse', name: 'Mouse Vehicle (Mūṣaka)', sanskrit: 'मूषकवाहन', symbolism: 'Mastery over desire and egoistic impulses', note: 'The small mouse obediently carrying the great lord.' },
    ],
    timeline: [
      { step: 1, title: 'Preparation', sanskrit: 'तैयारी', description: 'Homes and mandaps are cleaned, decorated with fresh leaves and marigolds.', variationNote: 'Starts 1–3 days prior.' },
      { step: 2, title: 'Murti Creation', sanskrit: 'मूर्ति निर्माण', description: 'Natural unbaked clay murtis are shaped by skilled artisans.', variationNote: 'Eco-clay preferred traditionally.' },
      { step: 3, title: 'Installation & Pūjā', sanskrit: 'प्रतिष्ठापन', description: 'Prāṇa Pratiṣṭhā or invocation rites performed at auspicious tithi.', variationNote: 'Timing set by local pañcāṅga.' },
      { step: 4, title: 'Daily Worship & Ārati', sanskrit: 'नित्य पूजा', description: 'Morning and evening prayers with veda mantras and devotional songs.', variationNote: 'Conducted daily.' },
      { step: 5, title: 'Offerings & Modaka', sanskrit: 'नैवेद्य', description: 'Steamed modakas, durvā grass, fruits, and regional delicacies offered.', variationNote: 'Differs by household.' },
      { step: 6, title: 'Community Gathering', sanskrit: 'उत्सव', description: 'Cultural programs, prasāda distribution, and service to society.', variationNote: 'Widespread in public mandaps.' },
      { step: 7, title: 'Uttarapūjā', sanskrit: 'उत्तरपूजा', description: 'Farewell ritual expressing gratitude and seeking blessings before immersion.', variationNote: 'Marks completion of stay.' },
      { step: 8, title: 'Visarjana', sanskrit: 'विसर्जन', description: 'Procession to water bodies or home tanks with chanting and music.', variationNote: 'Observed on 1.5, 3, 5, 7, or 11th day.' },
      { step: 9, title: 'Farewell & Renewal', sanskrit: 'पुनरागमनाय च', description: 'Dissolution of form back to formless nature, praying for early return next year.', variationNote: 'Symbolizes spiritual renewal.' },
    ],
    immersionSequence: [
      { step: 'Form', title: 'Clay Murti (Rūpa)', desc: 'Sacred clay form invoked with devotion and presence.' },
      { step: 'Worship', title: 'Living Devotion (Pūjā)', desc: 'Honoured with prayers, offerings, flowers, and community unity.' },
      { step: 'Gratitude', title: 'Farewell (Uttarapūjā)', desc: 'Gratitude expressed for wisdom, protection, and obstacle removal.' },
      { step: 'Dissolution', title: 'Return to Water (Visarjana)', desc: 'Clay dissolves naturally in water, form returning to the formless.' },
      { step: 'Renewal', title: 'Eternal Divine (Nirākāra)', desc: 'The Divine endures unchanged; the heart looks forward to next year.' },
    ],
    offeringsList: [
      { name: 'Modaka', sa: 'मोदक', desc: 'Steamed rice-flour dumplings filled with coconut and jaggery.' },
      { name: 'Dūrvā Grass', sa: 'दूर्वा', desc: '21 blades of fresh green grass, deeply sacred to Śrī Gaṇeśa.' },
      { name: 'Marigold & Red Flowers', sa: 'पुष्प', desc: 'Hibiscus (Japā) and marigolds traditionally offered.' },
      { name: 'Coconut & Fruits', sa: 'नालिकेर', desc: 'Fresh coconut, bananas, pomegranates, and seasonal fruits.' },
      { name: 'Regional Delicacies', sa: 'भक्ष्य', desc: 'Kudumulu, Undrallu, Karanji, Panchamrutam by region.' },
    ],
    regionalCards: [
      { region: 'Maharashtra', highlights: 'Grand Sarvajanik Mandaps & Dhol Tasha', customs: 'Lalbaugcha Raja, household sthapana, Ukadiche Modak, mass visarjana at Girgaum Chowpatty.' },
      { region: 'Andhra Pradesh & Telangana', highlights: 'Giant Eco Murtis & Undrallu Offerings', customs: 'Khairatabad Ganesha, Vinayaka Vrata Katha recitation, 21 leaf types (Patri pūjā).' },
      { region: 'Karnataka', highlights: 'Gowri-Ganesha & Tradition', customs: 'Swarna Gowri observance precedes Ganesha Chavithi; modaka and kadubu preparation.' },
      { region: 'Tamil Nadu', highlights: 'Vinayagar Chaturthi & Kozhukattai', customs: 'Clay Vinayagar installation, Kozhukattai offerings, and coastal/river immersion.' },
      { region: 'Goa & Gujarat', highlights: 'Family Reunions & Eco Clay Murtis', customs: 'Chovoth in Goa with Matoli decoration of wild fruits; vibrant Garba & ārati in Gujarat.' },
    ],
    faqs: [
      {
        question: 'Why is Śrī Gaṇeśa worshipped first among Devas?',
        answer: 'In Śāstric and Purāṇic traditions, Gaṇeśa was granted the boon of Prathama Pūjya (first to be worshipped) to ensure auspicious beginnings, obstacle removal, and clear discernment.',
        category: 'Śāstric source',
      },
      {
        question: 'Why are natural clay murtis used for the festival?',
        answer: 'Clay is drawn from the earth, shaped into a visible form for worship, and dissolves harmlessly back into water during Visarjana, symbolizing the cycle of manifestation and return.',
        category: 'Traditional account',
      },
      {
        question: 'Why is Modaka considered the favorite sweet of Gaṇeśa?',
        answer: 'Modaka signifies "Mo-da" (joy and bliss). Its sweet jaggery-coconut center inside a plain outer skin symbolizes the inner bliss of self-realization hidden within external discipline.',
        category: 'Traditional account',
      },
      {
        question: 'Why does Gaṇeśa have a mouse as his vehicle (Mūṣaka)?',
        answer: 'The mouse represents restless desires and egoistic impulses that gnaw in the dark. Gaṇeśa riding the mouse symbolizes complete spiritual mastery over desire and ego.',
        category: 'Traditional account',
      },
      {
        question: 'Why do celebration durations differ across households (1.5, 3, 5, 7, or 11 days)?',
        answer: 'Observance duration is governed by family lineage traditions (Kula-dharma), regional custom, and community agreements. There is no single compulsory number of days.',
        category: 'Traditional account',
      },
      {
        question: 'Is home immersion (bucket/garden visarjana) compatible with tradition?',
        answer: 'Yes. Immersing a natural, unpainted clay murti in a clean water vessel or bucket at home, and using the dissolved sacred earth for home plants, is deeply reverent and ecologically sound.',
        category: 'Modern scientific interpretation',
      },
      {
        question: 'What is the meaning of "Gaṇapati Bappa Morya"?',
        answer: '"Gaṇapati" is Lord of the Ganas; "Bappa" means father/revered lord; "Morya" honours Morya Gosavi, a 14th-century saintly devotee of Lord Gaṇeśa from Chinchwad, Maharashtra.',
        category: 'Historical record',
      },
      {
        question: 'Are eco-friendly immersion practices fully consistent with Śāstric spirit?',
        answer: 'Absolving synthetic dyes and Plaster of Paris in favor of natural earth and eco-friendly practices aligns directly with the dharmic principle of Ahimṣā and reverence for Bhūmi (Mother Earth).',
        category: 'Modern scientific interpretation',
      },
    ],
    sections: [
      {
        id: 'basis',
        eyebrow: 'FOUNDATION',
        title: 'Śāstric and traditional basis',
        category: 'Śāstric source',
        body: 'Gaṇeśa is revered in multiple Hindu textual and living traditions. Festival observance is shaped by ritual manuals, Purāṇic and regional narratives, temple practice and family custom. AUM keeps textual anchors and living tradition visible as different, complementary kinds of source.',
      },
      {
        id: 'history',
        eyebrow: 'PUBLIC MEMORY',
        title: 'Historical record and public Gaṇeśotsav',
        category: 'Historical record',
        body: 'Household and temple worship cannot be reduced to one public history. Modern public Gaṇeśotsav took distinctive forms in particular places and periods; each account should identify its place, dates and records rather than turn a regional history into a universal one.',
      },
      {
        id: 'tilak',
        eyebrow: 'PUNE · 1890s',
        title: 'Bal Gangadhar Tilak’s role',
        category: 'Historical record',
        body: 'Tilak is widely associated with helping popularize organised public Gaṇeśotsav in Pune during the 1890s, linking religious gathering with civic and political life under colonial rule. Public celebration existed in more than one form, so claims that assign a single inventor or origin remain too simple.',
      },
      {
        id: 'regional',
        eyebrow: 'LIVING INDIA',
        title: 'Regional practices',
        category: 'Traditional account',
        body: 'Names, tithi calculations, songs, foods, household rites, temple festivals and immersion customs vary across regions and sampradāyas. Variation is not a defect to be flattened; it is part of the festival’s living transmission.',
      },
      {
        id: 'preparation',
        eyebrow: 'AT HOME',
        title: 'Practical pūjā preparation',
        category: 'Traditional account',
        body: 'Prepare with simplicity: a clean space, offerings appropriate to your household, and time for prayer or reflection. If you follow a vrata or formal pūjā, consult your family practice, temple or a qualified priest for the applicable sequence and calendar details.',
      },
      {
        id: 'visarjana',
        eyebrow: 'CARE IN PRACTICE',
        title: 'Visarjana and environmental responsibility',
        category: 'Modern scientific interpretation',
        body: 'Visarjana carries religious meaning for many devotees, while its public execution has practical environmental consequences. Use local civic and temple guidance on permitted sites, materials and collection systems; do not treat a general statement about any material as a substitute for current local evidence.',
      },
      {
        id: 'science',
        eyebrow: 'CLEAR BOUNDARIES',
        title: 'What science can and cannot say',
        category: 'Modern scientific interpretation',
        body: 'Science can investigate material composition, water quality, waste systems and public-health conditions. It cannot confirm or disprove religious meaning, devotion or the spiritual significance a community gives to worship. AUM keeps empirical questions and religious belief in their own categories.',
      },
      {
        id: 'offerings',
        eyebrow: 'OFFERINGS',
        title: 'Modaka and offerings',
        category: 'Traditional account',
        body: 'Modaka — a sweet dumpling — is widely associated with Gaṇeśa worship and is a common household and temple offering during this observance, alongside other foods, flowers and items that vary by region and family. AUM does not prescribe a single required offering or recipe; follow your family or temple tradition.',
      },
      {
        id: 'timeline',
        eyebrow: 'DURATION',
        title: 'Festival timeline',
        category: 'Traditional account',
        body: 'Observance length varies: some households keep worship for a single day, others for one and a half, three, five, seven, or up to eleven days before visarjana, according to family and community custom. There is no single correct duration — consult your family tradition, temple or local community for the applicable schedule.',
      },
      {
        id: 'young-seekers',
        eyebrow: 'FOR CHILDREN',
        title: 'Sharing the festival with young seekers',
        category: 'Traditional account',
        body: 'AUM\u2019s Young Seekers space carries age-appropriate stories, values and activities related to Gaṇeśa for children and families to explore together, alongside — not replacing — a family\u2019s own way of teaching the festival.',
      },
      {
        id: 'faq',
        eyebrow: 'FAQ',
        title: 'Common questions',
        category: 'Contested or uncertain',
        body: 'Q: Is there one correct way to celebrate? No — practice varies by family, region and sampradāya, and AUM does not prescribe ritual authority. Q: Is there a single historical origin of the public festival? No — public Gaṇeśotsav took distinctive forms in different places and periods; see the historical-record sections above rather than a single origin story. Q: Where should I go for exact ritual steps or dates? A qualified priest, your family tradition or a trusted local pañcāṅga/temple calendar — not a general claim presented as universal.',
      },
    ],
    sources: [
      {
        category: 'Śāstric source',
        title: 'Textual and liturgical anchors',
        detail: 'Festival-specific ritual manuals and Gaṇeśa-focused textual traditions should be cited by edition, passage and tradition before a claim is presented as textual instruction.',
      },
      {
        category: 'Traditional account',
        title: 'Living regional practice',
        detail: 'Accounts of Gaṇeśa’s birth, forms of worship and household observances vary across Purāṇic, regional and family traditions; AUM labels them as tradition rather than a single historical narrative.',
      },
      {
        category: 'Historical record',
        title: 'Documented public observance',
        detail: 'The development of public festival forms should be described through dated records and specific places, not generalized from one region to all Hindu communities.',
      },
      {
        category: 'Archaeological evidence',
        title: 'Material culture',
        detail: 'Images, inscriptions and objects can document particular periods and locations. They do not by themselves establish every later ritual or narrative association.',
      },
      {
        category: 'Modern scientific interpretation',
        title: 'Environmental and public-health questions',
        detail: 'Claims about materials, water impact or public health require current, local evidence and should not be inferred from religious texts or custom alone.',
      },
      {
        category: 'Contested or uncertain',
        title: 'Origins and universal claims',
        detail: 'Broad statements about a single origin, an unbroken universal practice or the antiquity of every current custom need careful sourcing and may remain uncertain.',
      },
    ],
  },
]

export const getFestival = (slug: string) => FESTIVALS.find((festival) => festival.slug === slug)
