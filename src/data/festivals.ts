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

export interface OfferingItem {
  name: string
  sa: string
  desc: string
}

export interface ImmersionStep {
  step: string
  title: string
  desc: string
}

export interface Festival {
  slug: string
  name: string
  alternateName: string
  sanskrit: string
  season: string
  tithi: string
  summary: string
  observance: string
  story: string
  meaningToday: string
  rituals: string[]
  regionalCards: RegionalPractice[]
  scientificPerspective: string
  sources: FestivalSource[]
  faqs: FestivalFAQ[]
  regionNote?: string
  iconography?: IconographyItem[]
  timeline?: TimelineStep[]
  immersionSequence?: ImmersionStep[]
  offeringsList?: OfferingItem[]
}

const GANESHA_ICONOGRAPHY: IconographyItem[] = [
  { id: 'trunk', name: 'Curved Trunk', sanskrit: 'वक्रतुण्ड', symbolism: 'Adaptability and discernment (Viveka) capable of uprooting a giant tree or picking up a subtle needle.', note: 'Trunk curved to the left (Ida nadi) represents cool, peaceful household energy; to the right (Pingala nadi) represents intense ascetic solar energy.' },
  { id: 'ears', name: 'Large Ears', sanskrit: 'शूर्पकर्ण', symbolism: 'Listening attentively (Shravana), retaining noble wisdom, and sifting out useless gossip like a winnowing fan.', note: 'Emphasizes that deep listening precedes effective action in Dharmic philosophy.' },
  { id: 'belly', name: 'Large Belly', sanskrit: 'लम्बोदर', symbolism: 'Cosmic capacity to assimilate all experiences — both joy and grief — with equanimity and peace.', note: 'Often bound by a serpent, symbolizing the regulated Kundalini energy.' },
  { id: 'tusk', name: 'Single Broken Tusk', sanskrit: 'एकदन्त', symbolism: 'Non-duality (Advaita) and intellectual sacrifice for knowledge.', note: 'Traditional account states Ganesha broke his own tusk to write the Mahabharata without interruption as Vyasa dictated.' },
  { id: 'modaka', name: 'Sweet Modaka', sanskrit: 'मोदक', symbolism: 'The sweet reward of spiritual enlightenment (Moksha) hidden inside the shell of discipline.', note: 'Rice flour shell represents outer worldly discipline; sweet coconut-jaggery core represents inner spiritual bliss.' },
  { id: 'mouse', name: 'Little Mouse Mount', sanskrit: 'मूषकवाहन', symbolism: 'Control over the wandering, nibbling desire-mind and ego.', note: 'A colossal elephant-headed deity riding a tiny mouse proves that spiritual wisdom directs and tames material desire.' },
  { id: 'axe', name: 'Battle Axe (Parashu)', sanskrit: 'परशु', symbolism: 'Severing emotional attachments, ignorance, and false identifications with the physical ego.', note: 'Wielded in upper right hand to cut the bonds of samsara.' },
  { id: 'noose', name: 'Noose (Pasha)', sanskrit: 'पाश', symbolism: 'Drawing seekers toward righteousness and tethering wayward mental habits.', note: 'Upper left hand holds the noose that reclaims wandering attention.' },
  { id: 'abhaya', name: 'Blessing Gesture', sanskrit: 'अभयमुद्रा', symbolism: 'Universal fearlessness, divine protection, and compassionate assurance.', note: 'Lower right hand offers peace to all who approach with sincerity.' },
  { id: 'lotus', name: 'Sacred Lotus', sanskrit: 'पद्म', symbolism: 'Spiritual purity blossoming untouched by worldly impurities.', note: 'Rooted in mud yet blossoming radiant in sunlight.' },
]

const GANESHA_TIMELINE: TimelineStep[] = [
  { step: 1, title: 'Clay Murti Selection', sanskrit: 'मूर्ति चयन', description: 'Selecting an unbaked, eco-friendly natural clay idol (Mrittika Murti) handcrafted by traditional artisans.', variationNote: 'Done on or before Bhadrapada Shukla Chaturthi.' },
  { step: 2, title: 'Altar Preparation', sanskrit: 'मण्डप स्थापन', description: 'Cleaning the house, stringing mango leaves (Torana), and creating a decorated wooden altar platform with rangoli.', variationNote: 'South Indian homes suspend a wooden canopy (Pala Velli) hung with seasonal fruits.' },
  { step: 3, title: 'Prana Pratishtha', sanskrit: 'प्राणप्रतिष्ठा', description: 'Chanting sacred Vedic mantras to invoke divine consciousness into the sanctified clay form with deep reverence.', variationNote: 'Performed during the Madhyahna (noontime) muhurta.' },
  { step: 4, title: 'Shodashopachara Puja', sanskrit: 'षोडशोपचार पूजा', description: 'Offering 16 traditional services of hospitality: Asana, Padya, Arghya, Snana, Vastra, Yajnopavita, Gandha, Pushpa, etc.', variationNote: 'Often accompanied by Ganesha Atharvashirsha recitation.' },
  { step: 5, title: '21 Leaves (Patri Puja)', sanskrit: 'एकविंशति पत्रपूजा', description: 'Offering 21 medicinal leaves (Durva, Bilva, Tulsi, Neem, Datura, etc.) each with a dedicated name mantra of Ganesha.', variationNote: 'Ancient botanical practice linking devotion with environmental biodiversity.' },
  { step: 6, title: 'Naivedya Offering', sanskrit: 'नैवेद्य समर्पण', description: 'Offering steaming hot Modakas, Laddus, Kudumu, Sundal, and fresh fruits with devotion.', variationNote: 'Offered in batches of 21 modakas per tradition.' },
  { step: 7, title: 'Aarti & Deepa Aradhana', sanskrit: 'आरती', description: 'Singing traditional hymns ("Sukh Karta Dukh Harta", "Jai Ganesh Deva") while waving camphor flames and brass lamps.', variationNote: 'Accompanied by family clapping, bells, and cymbals.' },
  { step: 8, title: 'Uttarpuja (Farewell Rite)', sanskrit: 'उत्तरपूजा', description: 'Offering final gratitude, moving the murti slightly forward as a sign of imminent journey, and seeking forgiveness for errors.', variationNote: 'Performed right before commencing the immersion procession.' },
  { step: 9, title: 'Visarjana (Water Immersion)', sanskrit: 'विसर्जन', description: 'Ceremonially immersing the clay murti into water while chanting "Ganapati Bappa Morya, Pudhchya Varshi Lavkar Ya".', variationNote: 'Occurs on 1.5, 3rd, 5th, 7th, or 11th (Anant Chaturdashi) day.' },
]

const GANESHA_OFFERINGS: OfferingItem[] = [
  { name: 'Ukadiche Modak', sa: 'उकडीचे मोदक', desc: 'Steamed rice flour dumplings filled with fresh grated coconut and aromatic jaggery spiced with cardamom.' },
  { name: 'Motichoor Laddu', sa: 'मोतीचूर लाडू', desc: 'Golden spherical sweets made from tiny droplets of chickpea flour fried in pure ghee and steeped in saffron syrup.' },
  { name: 'Undrallu / Kudumu', sa: 'కుడుములు', desc: 'South Indian steamed rice balls with soaked chana dal and cumin, offered with sweet bellam thaligalu.' },
  { name: 'Kozhukattai', sa: 'கொழுக்கட்டை', desc: 'Tamil delicacy of steamed rice shells stuffed with sweet coconut-poppy seed filling or savoury seasoned dal.' },
  { name: 'Durva Grass', sa: 'दूर्वाङ्कुर', desc: 'Tender 3-bladed shoots of Bermuda grass dipped in water, offered to soothe the cosmic digestive fire.' },
]

const GANESHA_IMMERSION: ImmersionStep[] = [
  { step: 'Clay Earth', title: 'Origin from Soil', desc: 'Molded from sacred river clay, the murti begins as an element of Mother Earth (Prithvi).' },
  { step: 'Prana Infusion', title: 'Awakened by Prayer', desc: 'Infused with consciousness during worship, acting as an intimate spiritual anchor for devotion.' },
  { step: 'Gratitude Offering', title: 'Honored with Love', desc: 'Adorned with flowers, songs, and food offerings during its stay in homes and communities.' },
  { step: 'Dissolution', title: 'Return to Waters', desc: 'Immersed in water, the clay gently dissolves back into the element from which it arose.' },
  { step: 'Formless Truth', title: 'Formless Eternal', desc: 'Reminds us that while forms change and pass away, the underlying Divine Truth is imperishable.' },
]

export const FESTIVALS: Festival[] = [
  {
    slug: 'vinayaka-chavithi',
    name: 'Vināyaka Chavithi',
    alternateName: 'Gaṇeśa Caturthī · Ganeshotsav',
    sanskrit: 'विनायक चतुर्थी',
    season: 'Late Monsoon (Bhadrapada)',
    tithi: 'Bhadrapada Shukla Chaturthi',
    summary: 'A major Hindu observance centered on Sri Ganesha, the lord of beginnings and remover of obstacles, honored in homes and public communities.',
    observance: 'Begins on Bhadrapada Shukla Chaturthi with the installation of clay murtis (Prana Pratishtha), daily worship with 21 leaves (Patri), modakas, and concludes with Visarjan immersion.',
    story: 'Parvati created Ganesha from sacred turmeric/clay and infused him with life. Shiva, unaware of his identity, engaged in combat and later granted him the head of an elephant, designating him Ganapati — leader of all ganas and first to be worshipped in all rites.',
    meaningToday: 'A festival of education, arts, public unity, and environmental consciousness, inspiring wisdom, humility, and the removal of inner obstacles.',
    rituals: [
      'Installing natural unbaked clay murtis (Eco-friendly Shaddu Mati Ganapati)',
      'Performing Shodashopachara Puja with 21 sacred medicinal leaves (Eka-vimshati Patri)',
      'Offering steaming hot Modakas and Laddus, Ganesha’s beloved sweet symbolizing spiritual attainment',
      'Chanting Sri Ganesha Atharvashirsha Upanishad and Sankata Nashana Stotra',
      'Visarjan: ceremonial farewell and water immersion with chants of "Ganapati Bappa Morya"',
    ],
    regionNote: 'Because lunisolar calendars and local sunrise calculations vary by longitude and regional sampradayas, families observe immersion on 1.5, 3rd, 5th, 7th, or 11th (Anant Chaturdashi) day without dogmatic rigidity.',
    iconography: GANESHA_ICONOGRAPHY,
    timeline: GANESHA_TIMELINE,
    immersionSequence: GANESHA_IMMERSION,
    offeringsList: GANESHA_OFFERINGS,
    regionalCards: [
      { region: 'Maharashtra', highlights: 'Sarvajanik Ganeshotsav', customs: 'Immense community pandals initiated by Lokmanya Tilak in 1893 to foster national unity against colonial rule.' },
      { region: 'Telangana & Andhra Pradesh', highlights: 'Khairatabad colossal murti & Pala Velli', customs: 'Homes suspend a miniature wooden canopy (Pala Velli) hung with seasonal fruits; colossal clay idols in Hyderabad.' },
      { region: 'Tamil Nadu', highlights: 'Pillayar Chaturthi Kozhukattai', customs: 'Preparation of Kozhukattai (steamed rice dumplings filled with grated coconut and jaggery).' },
      { region: 'Karnataka', highlights: 'Gauri Habba prelude', customs: 'Mother Gauri (Parvati) is welcomed a day earlier on Swarna Gauri Vrata before welcoming Ganesha.' },
    ],
    scientificPerspective: 'The 21 traditional leaves offered (Durva, Tulsi, Bilva, Neem, Datura, etc.) are powerful medicinal plants with antifungal and antibacterial properties that cleanse the air during post-monsoon microbial surges.',
    sources: [
      { category: 'Śāstric source', title: 'Ganesha Purana & Mudgala Purana', detail: 'Exposition on the philosophical identity and 32 forms of Ganesha.' },
      { category: 'Historical record', title: 'Peshwa Records & Lokmanya Tilak (1893)', detail: 'Evolution from household devotion to patriotic community festival.' },
    ],
    faqs: [
      { question: 'Why is clay used for the murti?', answer: 'Clay (Mrittika) represents that our physical forms originate from the earth and dissolve back into it, reinforcing the cyclical truth of nature and detachment.', category: 'Traditional account' },
      { question: 'What is the significance of the 21 leaves (Patri)?', answer: 'The 21 leaves are indigenous medicinal herbs with strong antimicrobial properties that naturally disinfect domestic indoor air as the humid monsoon transitions to autumn.', category: 'Modern scientific interpretation' },
    ],
  },
  {
    slug: 'deepavali',
    name: 'Deepavali',
    alternateName: 'Diwali · Festival of Lights',
    sanskrit: 'दीपावली',
    season: 'Autumn (Sharad)',
    tithi: 'Ashvina Amavasya / Kartika Amavasya',
    summary: 'The grand festival of lights, celebrating the triumph of spiritual light over darkness (Tamaso mā jyotir gamaya), righteousness over adharma, and wisdom over ignorance.',
    observance: 'Celebrated over 5 consecutive days: 1) Dhanteras (Dhanatrayodashi), 2) Naraka Chaturdashi / Choti Diwali, 3) Lakshmi Puja (Amavasya), 4) Govardhan Puja / Bali Pratipada, and 5) Bhai Dooj (Yama Dwitiya).',
    story: 'Commemorates the return of Sri Rama, Sita, and Lakshmana to Ayodhya after 14 years of exile and the vanquishing of Ravana, when citizens lit earthen deepas across the city. In the South, it also celebrates Sri Krishna and Satyabhama vanquishing the tyrant Narakasura. In Bengal, Maa Kali is worshipped with intense devotion on Amavasya night.',
    meaningToday: 'A season of renewing family ties, clearing physical and mental clutter, forgiving old animosities, distributing sweets (mithai), sharing wealth through charity (Dana), and lighting the inner lamp of consciousness.',
    rituals: [
      'Lighting rows of traditional clay earthen lamps (Mitti ke diye) filled with sesame or mustard oil',
      'Lakshmi and Ganesha Puja during auspicious Pradosha Kaal muhurta for prosperity and wisdom',
      'Drawing vibrant colorful Rangoli / Kolam with natural rice flour at entrances',
      'Early morning sacred oil bath (Abhyanga Snana) before sunrise',
      'Exchanging sweets and gifts among family, friends, and workers',
    ],
    regionNote: 'Calculations for Lakshmi Puja depend on the Pradosha Kaal (sunset to nightfall) occurring during Amavasya tithi.',
    offeringsList: [
      { name: 'Kheer / Payasam', sa: 'क्षीरम्', desc: 'Creamy milk and rice pudding simmered with saffron, cardamom, and roasted cashews offered to Maha Lakshmi.' },
      { name: 'Kaju Katli', sa: 'काजुकतली', desc: 'Diamond-shaped cashew nut fudge coated with edible silver foil, symbolizing prosperity and sweet goodwill.' },
      { name: 'Laddus & Poha', sa: 'मोदक-पोहा', desc: 'Fresh puffed rice (Poha) and besan laddus offered during morning Diwali rituals.' },
    ],
    regionalCards: [
      { region: 'North India', highlights: 'Ayodhya homecoming & Lakshmi-Ganesh Puja', customs: 'Homes cleaned meticulously; brass and silverware purchased on Dhanteras; vibrant night illuminations.' },
      { region: 'South India', highlights: 'Naraka Chaturdashi dawn celebration', customs: 'Celebration peaks at pre-dawn on Chaturdashi with fragrant gingelly oil baths, new clothes, and bursting crackers.' },
      { region: 'West India (Gujarat & Maharashtra)', highlights: 'Chopda Pujan & New Year', customs: 'Marks the end of the Vikram Samvat financial year; merchants worship new account books (Chopda Pujan).' },
      { region: 'East India (Bengal & Assam)', highlights: 'Shyama Puja / Kali Puja', customs: 'Devotees worship the fierce, protective Divine Mother Kali through deep nocturnal meditation and offerings.' },
    ],
    scientificPerspective: 'Seasonal transition from autumn to winter: earthen deepas with pure vegetable/mustard oils help reduce monsoon insects, warm the indoor air naturally, and provide psychological uplift against winter seasonal depression.',
    sources: [
      { category: 'Śāstric source', title: 'Skanda Purana & Padma Purana', detail: 'Describes the illumination of deepas in Kartika and the worship of Maha Lakshmi.' },
      { category: 'Traditional account', title: 'Valmiki Ramayana & Harivamsa', detail: 'The joy of Ayodhya citizens and the victory over Narakasura.' },
    ],
    faqs: [
      { question: 'Why are earthen lamps preferred over plastic electric lights?', answer: 'Earthen lamps connect with the earth element (Prithvi), are biodegradable, support local pottery artisans, and provide a steady, living flame symbolizing the imperishable Atman.', category: 'Traditional account' },
      { question: 'What is the significance of Dhanteras?', answer: 'Dhanteras marks the manifestation of Lord Dhanvantari, the divine physician and father of Ayurveda, emerging with the pot of Amrita (immortality), reminding us that health is the truest wealth.', category: 'Śāstric source' },
    ],
  },
  {
    slug: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    alternateName: 'The Great Night of Shiva',
    sanskrit: 'महाशिवरात्रि',
    season: 'Late Winter (Phalguna / Magha)',
    tithi: 'Magha / Phalguna Krishna Chaturdashi',
    summary: 'The most sacred nocturnal observance dedicated to Lord Shiva, honoring cosmic stillness, transcendental meditation, ascetic discipline, and the divine union of Shiva and Shakti.',
    observance: 'Observed with strict fasting (Nirjala or Phalahara), day-long contemplation, and night-long vigil (Jagaran) divided into four Prahara pujas with continuous Abhishekam.',
    story: 'Commemorates the night when Shiva performed the Tandava (cosmic dance of creation, preservation, and dissolution) and the night when the cosmic pillar of infinite light (Jyotirlinga) emerged before Brahma and Vishnu. Also celebrated as the auspicious wedding anniversary of Lord Shiva and Devi Parvati.',
    meaningToday: 'A powerful spiritual opportunity for self-mastery. Staying awake and upright through the night symbolizes alertness of awareness over the slumber of worldly delusion and sensory distractions.',
    rituals: [
      'Day and night fasting to detoxify body and still the wandering senses',
      'All-night Jagaran (vigil) with continuous recitation of Sri Rudram and Maha Mrityunjaya Mantra',
      'Four-Prahara Abhishekam of the Shivalinga using milk, yogurt, honey, ghee, sugarcane juice, and water',
      'Offering sacred Bilva (Bel) trifoliate leaves, symbolizing the three gunas surrendered to the Lord',
      'Meditation on the formless aspect of the Divine (Nirguna Brahman)',
    ],
    offeringsList: [
      { name: 'Panchamrita', sa: 'पञ्चामृतम्', desc: 'The five sacred elixirs: pure cow milk, fresh curd, ghee, raw honey, and sugar used for lingam abhishekam.' },
      { name: 'Bilva Patra', sa: 'बिल्वपत्रम्', desc: 'Trifoliate leaves representing the three Gunas surrendered to the non-dual supreme Lord.' },
      { name: 'Bhasma & Thandai', sa: 'भस्म-ठण्डाई', desc: 'Cooling herbal preparations and sanctified sacred ash.' },
    ],
    regionalCards: [
      { region: 'North India & Varanasi', highlights: 'Kashi Vishwanath procession', customs: 'Massive devotional processions (Shiv Barat); pilgrims offer Ganga water and Bel leaves at Jyotirlingas.' },
      { region: 'Kashmir', highlights: 'Herath celebration', customs: 'Unique 3-day Kashmiri Pandit festival with the worship of Vatuk Bhairava in consecrated water vessels (Kalash).' },
      { region: 'Central India (Ujjain)', highlights: 'Mahakaleshwar Navaratri', customs: 'Celebrated as an 9-day wedding festival culminating in Shivaratri night with royal ceremonial adornments.' },
      { region: 'South India', highlights: 'Night-long classical dance & music', customs: 'Temples host Natyanjali classical dance festivals, offering Bharatanatyam to Nataraja.' },
    ],
    scientificPerspective: 'The planetary positions on the 14th night of the dark lunar fortnight produce a natural upward surge of bodily energy in the human physiology, making an erect spine and wakeful state profoundly conducive to meditation.',
    sources: [
      { category: 'Śāstric source', title: 'Shiva Purana, Vidyeshvara Samhita', detail: 'Details the origin of the Jyotirlinga and the merit of Maha Shivaratri observance.' },
      { category: 'Traditional account', title: 'Linga Purana', detail: 'The significance of the 4 Prahara pujas and the bilva patra offering.' },
    ],
    faqs: [
      { question: 'Why is Bilva leaf offered to Shiva?', answer: 'The trifoliate leaf represents the three Gunas (Sattva, Rajas, Tamas) which the devotee surrenders to the Lord of transcendence, as well as Shiva’s three eyes of wisdom.', category: 'Śāstric source' },
    ],
  },
  {
    slug: 'navaratri-dussehra',
    name: 'Navaratri & Vijayadashami',
    alternateName: 'Sharad Navaratri · Durga Puja · Dussehra',
    sanskrit: 'नवरात्रम् · विजयदशमी',
    season: 'Autumn (Sharad)',
    tithi: 'Ashvina Shukla Pratipada to Dashami',
    summary: 'Nine sacred nights venerating the Divine Mother in her nine cosmic forms (Navadurga), concluding with Vijayadashami — the triumph of virtue over tyranny.',
    observance: 'Observed over 9 nights and 10 days with Ghatasthapana, Akhanda Jyoti, daily chanting of Devi Mahatmyam (Durga Saptashati), fasting, traditional Garba/Dandiya dance, and Ayudha Puja.',
    story: 'Celebrates Goddess Durga vanquishing the demon Mahishasura after a nine-day battle, restoring cosmic balance. On the tenth day (Vijayadashami), Sri Rama also vanquished Ravana, liberating Sita after worshiping Devi Aparajita.',
    meaningToday: 'Celebration of feminine strength (Shakti), courage in the face of inner and outer evils, artistic creativity, educational dedication (Saraswati Puja), and new beginnings.',
    rituals: [
      'Ghatasthapana: consecrating the sacred earthen pot with holy water and nine sacred grains (Navadhanya)',
      'Worship of the nine forms: Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri',
      'Ayudha Puja: cleaning and blessing instruments of profession, books, vehicles, and tools of craftsmanship',
      'Kanya Puja: worshipping young girls as living embodiments of the Divine Mother on Ashtami/Navami',
      'Vijayadashami: starting new learning (Aksharabhyasa / Vidyarambham) and celebrating victory of dharma',
    ],
    offeringsList: [
      { name: 'Navadhanya Sundal', sa: 'नवधान्य सुन्दल्', desc: 'Steamed protein-rich legumes seasoned with mustard seeds, curry leaves, and fresh grated coconut.' },
      { name: 'Payesh / Halwa', sa: 'पायसम्-हलवा', desc: 'Rich semolina halwa or Bengal rice payesh distributed on Ashtami and Navami.' },
    ],
    regionalCards: [
      { region: 'West Bengal & East India', highlights: 'Grand Durga Puja Pandal spectacle', customs: 'Exquisite clay murtis, Dhunuchi dance with brass incense burners, and heartfelt Sindoor Khela on Dashami.' },
      { region: 'Gujarat & Western India', highlights: 'Nine nights of Garba & Raas', customs: 'Thousands dance in rhythmic concentric circles around an illuminated earthen lamp (Garbha deep), celebrating life.' },
      { region: 'Karnataka (Mysuru)', highlights: 'Mysuru Dasara Royal Procession', customs: 'The Chamundeshwari idol is carried on a golden howdah atop a decorated elephant in a royal procession.' },
      { region: 'North India', highlights: 'Ramlila dramatic enactments', customs: 'Nine nights of Ramayana street theatre culminating in the burning of colossal effigies of Ravana, Kumbhakarna, and Meghanada.' },
    ],
    scientificPerspective: 'Marks the delicate seasonal juncture (Ritu Sandhi) when human immunity is vulnerable; ritual fasting, light satvik diet, and devotional music serve to recalibrate metabolic health and collective morale.',
    sources: [
      { category: 'Śāstric source', title: 'Markandeya Purana (Devi Mahatmyam)', detail: 'The 700 verses celebrating the manifestation and exploits of the Supreme Goddess.' },
      { category: 'Traditional account', title: 'Devi Bhagavata Purana', detail: 'The rites of Navaratri and the victory on Dashami.' },
    ],
    faqs: [
      { question: 'What is the purpose of Ayudha Puja on Navami?', answer: 'It recognizes that any tool, pen, machine, or vehicle used to earn a righteous living or serve society is an instrument of divine energy deserving reverence and careful maintenance.', category: 'Traditional account' },
    ],
  },
  {
    slug: 'krishna-janmashtami',
    name: 'Krishna Janmashtami',
    alternateName: 'Gokulashtami · Sri Krishna Jayanti',
    sanskrit: 'कृष्णजन्माष्टमी',
    season: 'Monsoon (Varsha)',
    tithi: 'Bhadrapada Krishna Ashtami (Rohini Nakshatra)',
    summary: 'The joyful celebration of the descent (Avatara) of Bhagavān Sri Krishna, the eighth avatara of Vishnu, born at midnight in a Mathura prison to illuminate humanity with the Gītā and divine love.',
    observance: 'Fasting until midnight, decorating altars with flower cradles, drawing little butter-footsteps of baby Krishna entering the home, reading the 10th Skandha of Srimad Bhagavatam, and Dahi Handi.',
    story: 'Born to Devaki and Vasudeva in King Kamsa’s dungeon amidst thunder and rain, baby Krishna was miraculously carried across the flooded Yamuna to Gokula to be raised by Yashoda and Nanda.',
    meaningToday: 'A testament that even in the darkest dungeon of despair, the divine light takes birth to restore hope, courage, and unconditional love.',
    rituals: [
      'Day-long fast broken only after the midnight puja when the Lord was born',
      'Bathing and rocking the baby Krishna (Bal Gopal) idol in a decorated golden cradle (Jhula)',
      'Drawing intricate rice-flour baby footprints leading from the home entrance to the puja altar',
      'Offering favorite delicacies: freshly churned white butter (Makhan), Mishri, Poha, and seed-sweets',
      'Dahi Handi celebrations: youth forming human pyramids to break an earthen pot of curd tied high up',
    ],
    offeringsList: [
      { name: 'Makhan Mishri', sa: 'माखन-मिश्री', desc: 'Freshly hand-churned unsalted white butter topped with rock sugar crystals.' },
      { name: 'Seedai & Murukku', sa: 'सीडै-मुरुक्कु', desc: 'Crispy rice flour snacks offered in South Indian households.' },
      { name: 'Dhaniya Panjiri', sa: 'धनिया पञ्जिरी', desc: 'Roasted coriander seed flour roasted in ghee with dry fruits and crushed sugar.' },
    ],
    regionalCards: [
      { region: 'Mathura & Vrindavan', highlights: 'Epicenter of celebrations', customs: 'Birthplace temple (Janmabhoomi) witnesses massive midnight abhishekam; Raas Leela performances throughout.' },
      { region: 'Maharashtra', highlights: 'Dahi Handi human pyramids', customs: 'Energetic Govinda pathaks compete across Mumbai and Pune, building 8-9 tier human towers to reach the pot.' },
      { region: 'Tamil Nadu & Kerala', highlights: 'Gokulashtami & Kolam footprints', customs: 'Women draw tiny footprints with rice batter; offer sweet Seedai and Murukku snacks to Bal Gopal.' },
      { region: 'Gujarat (Dwarka)', highlights: 'Makhan Bhog at Jagat Mandir', customs: 'Dwarkadhish temple decorated with thousands of oil lamps and continuous bhajan singing.' },
    ],
    scientificPerspective: 'Midnight celebrations during the cool monsoon month promote communal harmony and reinforce seasonal immunity through zinc-rich dairy foods and iron-rich jaggery snacks.',
    sources: [
      { category: 'Śāstric source', title: 'Srimad Bhagavata Purana, Skandha 10', detail: 'The comprehensive narrative of Krishna’s divine birth and childhood leelas.' },
      { category: 'Traditional account', title: 'Harivamsa & Mahabharata', detail: 'Chronicles the life of Krishna as statesman, teacher, and philosopher.' },
    ],
    faqs: [
      { question: 'Why is midnight the moment of celebration?', answer: 'The scriptures state that Sri Krishna descended precisely at the eighth phase of the waning moon at midnight when Rohini nakshatra was ascendant.', category: 'Śāstric source' },
    ],
  },
  {
    slug: 'rama-navami',
    name: 'Rama Navami',
    alternateName: 'Sri Rama Jayanti',
    sanskrit: 'रामनवमी',
    season: 'Spring (Vasanta)',
    tithi: 'Chaitra Shukla Navami',
    summary: 'The auspicious appearance day of Maryada Purushottama Sri Rama, the exemplary king and embodiment of righteous conduct, duty, truthfulness, and compassion.',
    observance: 'Concluding day of Chaitra Navaratri. Involves continuous recitation of the Valmiki Ramayana or Ramcharitmanas (Akhanda Path), Kalyanotsavam (celestial wedding), and distributing Panakam and Kosambari.',
    story: 'Born to King Dasharatha and Queen Kausalya in Ayodhya at noon in the Punarvasu nakshatra, bringing joy to all three worlds and setting the eternal human benchmark for righteous living.',
    meaningToday: 'A reminder of the enduring nobility of fulfilling one’s duty even when personal sacrifice is immense, and ruling with justice and empathy for all citizens.',
    rituals: [
      'Noontime celebration (12:00 PM) when Sri Rama manifested, accompanied by conch shells and floral showers',
      'Recitation of the Sundara Kanda or complete Ramcharitmanas',
      'Sri Sita-Rama Kalyanam: performing the sacred wedding of Sita and Rama in temples and households',
      'Preparation and distribution of cooling Panakam (jaggery, dry ginger, cardamom drink) and Kosambari (soaked dal salad)',
      'Rath Yatra and palanquin processions of Sri Rama in Ayodhya, Bhadrachalam, and Rameswaram',
    ],
    offeringsList: [
      { name: 'Panakam', sa: 'पानकम्', desc: 'Cooling restorative drink made with jaggery water, crushed green cardamom, and dry ginger powder.' },
      { name: 'Kosambari', sa: 'कोसम्बरी', desc: 'Moong dal salad soaked in water with freshly grated coconut, diced cucumber, and lemon juice.' },
    ],
    regionalCards: [
      { region: 'Ayodhya (Uttar Pradesh)', highlights: 'Grand Snan at Sarayu River', customs: 'Lakhs of pilgrims take a holy dip in the Sarayu and congregate at the newly consecrated Ram Janmabhoomi Mandir.' },
      { region: 'Telangana & Andhra Pradesh', highlights: 'Bhadrachalam Sita Rama Kalyanam', customs: 'The celestial wedding at Bhadrachalam is attended by state dignitaries offering pearls and silk garments.' },
      { region: 'Karnataka', highlights: 'Panaka-Kosambari pandals', customs: 'Streets feature charitable community booths serving cool Panakam to passersby to mitigate summer heat.' },
      { region: 'Bihar & Mithila', highlights: 'Mithila celebrations for son-in-law', customs: 'Celebrations in Janakpur and Sitamarhi with deep folk music and cultural hospitality.' },
    ],
    scientificPerspective: 'The traditional offering of Panakam (rich in iron and electrolytes) and Kosambari (protein and hydration) provides optimal thermal balance and nutrition as the Indian summer heat begins.',
    sources: [
      { category: 'Śāstric source', title: 'Valmiki Ramayana, Bala Kanda', detail: 'Describes the birth of Rama during Chaitra Navami under Punarvasu.' },
    ],
    faqs: [
      { question: 'What does "Maryada Purushottama" mean?', answer: 'It means the supreme human being who embodies the boundaries (Maryada) of righteous conduct, never crossing the line of moral integrity even under severe personal hardship.', category: 'Traditional account' },
    ],
  },
  {
    slug: 'holi',
    name: 'Holi',
    alternateName: 'Festival of Colors · Vasantotsava',
    sanskrit: 'होलिकात्सवः · वसन्तोत्सवः',
    season: 'Spring (Vasanta)',
    tithi: 'Phalguna Purnima',
    summary: 'The exuberant celebration of the arrival of spring, agricultural renewal, divine love (Radha-Krishna), and the victory of steadfast devotion (Prahlada) over tyrannical arrogance.',
    observance: 'Two-day festival: 1) Holika Dahan on Purnima night with a sacred bonfire, and 2) Dhulandi / Rangwali Holi the following morning with colors, water, and celebratory feasts.',
    story: 'Young devotee Prahlada was saved by Lord Narayana when his evil aunt Holika, who possessed an immunity to fire, sat with him in a blazing pyre; her pride consumed her while Prahlada emerged unhurt. In Braj, it celebrates the playful romance of Radha and Krishna with flower petals and colors.',
    meaningToday: 'Breaking social barriers, reconciling broken relationships, forgiving grievances, embracing all community members with colors, and celebrating nature’s blossoming vitality.',
    rituals: [
      'Holika Dahan bonfire with coconut, barley grains, and cow-dung cakes to incinerate past negativity',
      'Applying natural herbal gulal (turmeric, sandalwood, palash flowers) onto loved ones with warm embraces',
      'Playing traditional folk music, Dholak rhythms, and singing Phag songs',
      'Distributing traditional festive delicacies: Gujiya, Thandai with rose water, and Puran Poli',
      'Visiting elders to touch their feet with gulal for blessings (Charnamrit)',
    ],
    offeringsList: [
      { name: 'Gujiya / Karanji', sa: 'गुझिया', desc: 'Crisp pastry pockets filled with sweetened khoya (mawa), dry coconut, and chopped nuts.' },
      { name: 'Thandai', sa: 'ठण्डाई', desc: 'Cooling drink prepared with almonds, fennel seeds, watermelon seeds, saffron, and black pepper.' },
    ],
    regionalCards: [
      { region: 'Braj (Barsana & Nandgaon)', highlights: 'Lathmar Holi & Phoolon ki Holi', customs: 'Unique traditional celebration where women playfully beat men’s shields with sticks; celebrations span weeks.' },
      { region: 'West Bengal (Shantiniketan)', highlights: 'Basanta Utsav', customs: 'Rabindranath Tagore’s cultural springtime festival with songs, classical dances, and yellow attire.' },
      { region: 'Punjab', highlights: 'Hola Mohalla at Anandpur Sahib', customs: 'Instituted by Guru Gobind Singh; martial arts displays (Gatka), horse riding, and community langar.' },
      { region: 'South India', highlights: 'Kama Dahanam', customs: 'Commemorates Lord Shiva burning Kamadeva to ashes and his eventual rebirth as spiritual love.' },
    ],
    scientificPerspective: 'The transitional temperature shift between winter and spring often breeds colds and lethargy; the warmth of the Holika bonfire and natural anti-inflammatory herbs like Palash, turmeric, and neem protect the skin and invigorate vitality.',
    sources: [
      { category: 'Śāstric source', title: 'Bhavishya Purana & Jaimini Mimamsa', detail: 'Mentions the ancient Vasantotsava and Holikotsava rites.' },
    ],
    faqs: [
      { question: 'Why make natural colors?', answer: 'Traditional colors were made from medicinal flowers (Palash/Tesu), turmeric, and sandalwood, which heal the skin and maintain environmental purity.', category: 'Traditional account' },
    ],
  },
  {
    slug: 'makar-sankranti-pongal',
    name: 'Makar Sankranti & Pongal',
    alternateName: 'Uttarayan · Maghi · Lohri · Bihu',
    sanskrit: 'मकरसंक्रान्तिः',
    season: 'Winter (Shishira)',
    tithi: 'Solar ingress into Makara (Capricorn) — Jan 14/15',
    summary: 'The great solar harvest festival celebrating the Sun’s northward celestial journey (Uttarayan), gratitude to Mother Earth, cattle, farmers, and community abundance.',
    observance: 'One of the few Hindu festivals determined by the solar calendar (Sankranti). Observed across India with holy river baths, flying colorful kites, and cooking fresh harvest grains.',
    story: 'Marks Surya entering the zodiac sign of Makara (ruled by Saturn/Shani), symbolizing father-son reconciliation. In Mahabharata, Bhishma Pitamaha waited for the auspicious arrival of Uttarayan before leaving his mortal frame.',
    meaningToday: 'A celebration of ecological gratitude: thanking the sun, the soil, the bullocks, and the farming community who feed the world.',
    rituals: [
      'Holy snan at sacred river confluences (Ganga Sagar, Prayagraj Sangam, Godavari)',
      'Consuming and distributing sweets made of Til (sesame seeds) and Gur (jaggery) with the greeting "Til-gul ghya, god god bola"',
      'Cooking the sweet Pongal dish in open earthen pots until it overflows, shouting "Pongalo Pongal!"',
      'Feeding and decorating cattle (Mattu Pongal) with turmeric and floral garlands',
      'Soaring vibrant paper kites into the clear winter sky during Uttarayan',
    ],
    offeringsList: [
      { name: 'Sakkarai Pongal', sa: 'सक्कारै पोङ्गल', desc: 'Freshly harvested new rice boiled with milk, golden jaggery, cardamom, and roasted cashews.' },
      { name: 'Til-Gud Ladoos', sa: 'तिलगुड', desc: 'Nutrient-rich sesame and jaggery balls providing internal heat and vitality in mid-winter.' },
    ],
    regionalCards: [
      { region: 'Tamil Nadu', highlights: '4-day Pongal festival', customs: 'Bhogi (clearing old belongings), Surya Pongal (offering to Sun), Mattu Pongal (cattle honor), and Kaanum Pongal (family outing).' },
      { region: 'Gujarat', highlights: 'International Kite Festival (Uttarayan)', customs: 'Rooftops alive with millions of kites, music, Undhiyu, and Chikki from dawn till late night.' },
      { region: 'Punjab & North India', highlights: 'Lohri & Maghi', customs: 'Lighting bonfires at night, tossing sesame, revdi, and peanuts into flames, singing folk songs.' },
      { region: 'Assam', highlights: 'Magh Bihu (Bhogali Bihu)', customs: 'Feasting around makeshift thatch huts (Bhelaghar) that are burned the next morning; Pitha rice cakes.' },
    ],
    scientificPerspective: 'Sesame seeds and jaggery are nutrient-dense superfoods packed with copper, iron, calcium, and good fats, providing internal warmth and nourishment during the peak of winter.',
    sources: [
      { category: 'Śāstric source', title: 'Surya Siddhanta & Matsya Purana', detail: 'Calculates the solar transit and describes the spiritual merit of dana and snana on Sankranti.' },
    ],
    faqs: [
      { question: 'Why does Makar Sankranti have a fixed Gregorian date?', answer: 'Unlike most Hindu festivals which follow the lunisolar calendar (Tithis), Makar Sankranti follows the solar calendar based on the Sun’s transit into Capricorn (Makara).', category: 'Modern scientific interpretation' },
    ],
  },
  {
    slug: 'ugadi-gudi-padwa',
    name: 'Ugadi & Gudi Padwa',
    alternateName: 'Chaitra Shukla Pratipada · Hindu New Year',
    sanskrit: 'युगादिः · गुढीपाडवा',
    season: 'Spring (Vasanta)',
    tithi: 'Chaitra Shukla Pratipada',
    summary: 'The Vedic New Year day marking the beginning of the Vikram and Shalivahana Samvat calendars, when Brahma began the cosmic creation.',
    observance: 'Homes are decorated with mango leaves and neem; families raise the auspicious Gudi flag in Maharashtra, and listen to the annual astrological forecast (Panchanga Sravanam).',
    story: 'Marks the dawn of the cosmic cycle when Lord Brahma commenced creation. Also commemorates the victory of King Shalivahana over the Shakas, establishing the Shalivahana Saka calendar in 78 CE.',
    meaningToday: 'A reminder that life is a composite of all experiences — sweet, bitter, sour, and spicy — to be received with equanimity and gratitude.',
    rituals: [
      'Consuming the symbolic Ugadi Pachadi / Bevu-Bella containing six tastes (Shadruchulu)',
      'Hoisting the sacred Gudi (copper pot overturned atop a silk scarf on a bamboo pole adorned with neem leaves)',
      'Panchanga Sravanam: gathering in temples to listen to the new year’s calendar, agricultural, and astronomical forecasts',
      'Wearing new clothes and stringing fresh green mango leaves (Torana) at doorways',
      'Preparing delicacies like Puran Poli, Holige, and Bobbatlu',
    ],
    offeringsList: [
      { name: 'Ugadi Pachadi', sa: 'యుగాది పచ్చడి', desc: 'Sacred concoction of 6 flavors: neem, jaggery, raw mango, tamarind, green chili, and salt.' },
      { name: 'Puran Poli / Bobbatlu', sa: 'पुरणपोळी', desc: 'Delicate flatbread stuffed with sweet cooked chana dal and cardamom jaggery.' },
    ],
    regionalCards: [
      { region: 'Andhra Pradesh & Telangana', highlights: 'Ugadi Pachadi & Kavi Sammelanam', customs: 'Poets gather for festive recitations; every family prepares Pachadi with 6 natural ingredients.' },
      { region: 'Karnataka', highlights: 'Yugadi Bevu-Bella distribution', customs: 'Sharing a mix of tender bitter neem blossoms with sweet jaggery, symbolizing life’s ups and downs.' },
      { region: 'Maharashtra', highlights: 'Gudi Padwa Shobha Yatra', customs: 'Vibrant street processions with traditional Dhol-Tasha troupes, Lezim dancers, and women riding motorbikes in Nauvari sarees.' },
    ],
    scientificPerspective: 'The six ingredients of Ugadi Pachadi regulate liver bile, cleanse digestive parasites, and balance internal doshas for the onset of hot summer.',
    sources: [
      { category: 'Śāstric source', title: 'Brahma Purana & Hemadri Chaturvarga Chintamani', detail: 'Declares Chaitra Shukla Pratipada as the primary day of creation and calendar renewal.' },
    ],
    faqs: [
      { question: 'What do the 6 tastes of Ugadi Pachadi represent?', answer: 'Neem (sadness), Jaggery (happiness), Green chilli (anger), Salt (fear), Tamarind (disgust/surprise), and Mango (new challenges) — teaching us to accept life with balance.', category: 'Traditional account' },
    ],
  },
  {
    slug: 'guru-purnima',
    name: 'Guru Purnima',
    alternateName: 'Vyasa Purnima',
    sanskrit: 'गुरुपूर्णिमा · व्यासपूर्णिमा',
    season: 'Monsoon (Ashadha)',
    tithi: 'Ashadha Purnima',
    summary: 'The solemn and sacred celebration of reverence toward spiritual teachers, mentors, and the timeless lineage of Acharyas who transmit knowledge across generations.',
    observance: 'Disciples offer worship (Padapuja) to their Gurus, renew vows of study and service, and begin the four-month rainy season retreat of monastic study (Chaturmasya).',
    story: 'Commemorates the birthday of Maharshi Krishna Dvaipayana Vyasa, who classified the four Vedas, composed the Mahabharata, eighteen Mahapuranas, and Brahma Sutras. Also celebrated in tradition as the day Lord Shiva, as Adi Guru Dakshinamurti, began imparting wisdom to the Saptarshis.',
    meaningToday: 'Recognizing that true wealth is knowledge and that without a guide (Guru) to dispel ignorance (Gu = darkness, Ru = dispeller), humanity remains adrift.',
    rituals: [
      'Guru Padapuja and offering gratitude to teachers, mentors, and spiritual masters',
      'Recitation of the Guru Gita, Guru Stotram, and Brahma Sutras',
      'Initiation of the four-month contemplative ascetic period (Chaturmasya Vrata)',
      'Vyasa Puja: honoring the eternal compiler of sacred scriptures',
      'Charity and food donation (Annadana) to seekers and ascetics',
    ],
    offeringsList: [
      { name: 'Charanamrita', sa: 'चरणामृतम्', desc: 'Sanctified water or sweet milk offered during teacher reverence ceremonies.' },
      { name: 'Panchamrita & Fruits', sa: 'फलानि', desc: 'Fresh seasonal fruits offered in gratitude to mentors.' },
    ],
    regionalCards: [
      { region: 'All India Ashrams', highlights: 'Acharya Padapuja & Satsang', customs: 'Seekers travel to their Guru’s ashrams; monks remain stationary for Chaturmasya study.' },
      { region: 'Sringeri, Puri, Dwaraka, Badrinath', highlights: 'Shankaracharya Amnaya Peethas', customs: 'Special celebrations honoring the guru parampara linking back to Adi Shankara and Vyasa.' },
    ],
    scientificPerspective: 'Marks the onset of the heavy monsoon rains when traveling became physically hazardous for ancient itinerant teachers; setting aside 4 months for sedentary intellectual compilation and deep spiritual retreat was ecologically and physically optimal.',
    sources: [
      { category: 'Śāstric source', title: 'Guru Gita (from Skanda Purana)', detail: 'Exposition on the role and necessity of the Guru in spiritual realization.' },
    ],
    faqs: [
      { question: 'What is the etymological meaning of "Guru"?', answer: '"Gu" represents the darkness of ignorance, and "Ru" represents the dispeller of that darkness; the Guru is the consciousness that dispels spiritual blindness.', category: 'Śāstric source' },
    ],
  },
  {
    slug: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    alternateName: 'Rakhi Purnima',
    sanskrit: 'रक्षाबन्धनम्',
    season: 'Monsoon (Shravana)',
    tithi: 'Shravana Purnima',
    summary: 'The cherished celebration of mutual protection, unconditional affection, and moral responsibility between brothers, sisters, and community members.',
    observance: 'Sisters tie a sacred decorative thread (Rakhi) around their brothers’ wrists, applying a tilak and offering sweets; brothers pledge lifelong protection, care, and present thoughtful gifts.',
    story: 'In the Mahabharata, when Sri Krishna cut his finger on his Sudarshana Chakra, Draupadi immediately tore a piece of her silk sari and tied it around his wound. Touched by her sisterly love, Krishna promised to protect her dignity wherever she was, a pledge fulfilled during the Kuru court assembly.',
    meaningToday: 'A celebration that transcends biology, extending to honoring soldiers protecting borders, doctors protecting health, and planting saplings as Vriksha Raksha Bandhan.',
    rituals: [
      'Tying the sacred silk or cotton thread (Rakhi) on the right wrist with prayers for long life',
      'Applying the auspicious vermilion Tilak with Akshata (uncooked rice grains) on the forehead',
      'Aarti performed with a brass deepa to ward off negativity',
      'Brother presenting gifts and a steadfast vow of protection and support',
      'Brahmins and seekers changing their sacred thread (Upakarma / Avani Avittam) on this same Purnima',
    ],
    offeringsList: [
      { name: 'Ghevar', sa: 'घेवर', desc: 'Traditional honeycomb pastry soaked in saffron sugar syrup and adorned with rabri and pistachios.' },
      { name: 'Coconut Ladoo', sa: 'नारिकेलमोदक', desc: 'Fresh grated coconut cooked in sweetened condensed milk.' },
    ],
    regionalCards: [
      { region: 'North & Western India', highlights: 'Rakhi tying & family gatherings', customs: 'Sisters travel to brothers’ homes; joyous celebration with Ghevar and Kaju Katli.' },
      { region: 'Coastal Maharashtra & Goa', highlights: 'Narali Purnima', customs: 'Fishermen offer golden coconuts to Lord Varuna (God of Ocean) to calm the monsoon seas before resuming fishing.' },
      { region: 'South India', highlights: 'Upakarma / Avani Avittam', customs: 'Men change the sacred Yajnopavita thread after performing Tarpanam to the Ṛṣis.' },
    ],
    scientificPerspective: 'Strengthens sociological family safety nets and mental well-being; the cotton thread soaked in turmeric has mild antiseptic qualities against humid monsoon skin ailments.',
    sources: [
      { category: 'Traditional account', title: 'Bhavishya Purana & Mahabharata', detail: 'The vow of Krishna to Draupadi and Indrani tying the protective amulet on Indra.' },
    ],
    faqs: [
      { question: 'Can Rakhi be tied to non-siblings?', answer: 'Yes; historically, Rakhis were tied to friends, soldiers, protectors of the city, and even trees (Vriksha Bandhan) as a pledge of universal guardianship.', category: 'Traditional account' },
    ],
  },
]
