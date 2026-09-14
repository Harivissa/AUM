export interface Temple {
  id: string
  name: string
  sanskrit: string
  location: string
  state: string
  style: 'Dravidian' | 'Nagara' | 'Vesara' | 'Kalinga' | 'Hemadpanthi' | 'Rock-cut' | 'Chalukya (Nagara variant)'
  deity: string
  period: string
  yearBuilt: string
  description: string
  significance: string
  features: string[]
  color: string
  coordinates: { lat: number; lng: number }
  UNESCO?: boolean
}

export const TEMPLES: Temple[] = [
  {
    id: 'brihadeswara',
    name: 'Brihadeswara Temple',
    sanskrit: 'बृहदीश्वर',
    location: 'Thanjavur',
    state: 'Tamil Nadu',
    style: 'Dravidian',
    deity: 'Shiva (Brihadeswara)',
    period: 'Chola Empire',
    yearBuilt: '~1010 CE',
    description: 'The "Big Temple" built by Raja Raja Chola I is an engineering marvel of the medieval world — its vimana (tower) stands 66 meters tall and was constructed without mortar, using an interlocking granite system. The shadow of the shikhara reportedly never falls on the ground at noon.',
    significance: 'First Dravidian temple built entirely of granite, demonstrating the Chola Empire\'s mastery of temple engineering. The vimana weighs 80 tonnes and was reportedly moved using a 6-kilometer long ramp.',
    features: ['66m granite vimana', 'No mortar construction', 'Shadow-less noon phenomenon', 'Nandi statue — 25 tonnes', 'Masterpiece Chola frescoes'],
    color: '#e8c56b',
    coordinates: { lat: 10.7828, lng: 79.1318 },
    UNESCO: true,
  },
  {
    id: 'kailasa',
    name: 'Kailasa Temple, Ellora',
    sanskrit: 'कैलास',
    location: 'Ellora',
    state: 'Maharashtra',
    style: 'Rock-cut',
    deity: 'Shiva (Kailasanatha)',
    period: 'Rashtrakuta Dynasty',
    yearBuilt: '~8th Century CE',
    description: 'Carved top-down from a single basalt cliff, the Kailasa Temple is arguably the greatest single rock-cut monument on Earth. It is twice the area of the Parthenon in Athens and covers 200,000 tonnes of rock excavated over decades.',
    significance: 'The world\'s largest monolithic structure, carved downward from the mountain — not built upward. Its construction logic remains a subject of modern architectural fascination and study.',
    features: ['Single rock monolith', '2× size of Parthenon', '200,000 tonnes excavated', 'Elaborate Shaiva iconography', 'Multi-level pillared halls'],
    color: '#c98bd0',
    coordinates: { lat: 20.0269, lng: 75.1797 },
    UNESCO: true,
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Group',
    sanskrit: 'खजुराहो',
    location: 'Khajuraho',
    state: 'Madhya Pradesh',
    style: 'Nagara',
    deity: 'Vishnu, Shiva, Jain Tirthankaras',
    period: 'Chandela Dynasty',
    yearBuilt: '950–1050 CE',
    description: 'The Khajuraho temples are renowned for their Nagara-style architecture and masterful erotic sculptural programs that represent Kama — desire — as one of the four Purusharthas. Only 20 of the original 85 temples remain, yet they are among the finest sculptural traditions of medieval India.',
    significance: 'The sculptures are a theological statement: Kama (desire), properly cultivated and disciplined, is the gateway to Moksha (liberation). The outer walls symbolize the worldly realm; the inner sanctuary represents transcendence.',
    features: ['Intricate Mithunas (erotic figures)', 'Nagara shikhara towers', 'Sandstone construction', 'Chandela court art', 'Cosmic iconography programs'],
    color: '#f0833e',
    coordinates: { lat: 24.8318, lng: 79.9199 },
    UNESCO: true,
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    sanskrit: 'कोणार्क',
    location: 'Konark',
    state: 'Odisha',
    style: 'Kalinga',
    deity: 'Surya (Sun God)',
    period: 'Eastern Ganga Dynasty',
    yearBuilt: '~1255 CE',
    description: 'The Konark temple is designed as a colossal stone chariot of Surya — 12 pairs of intricately carved wheels (representing months), pulled by seven horses (days of the week). It served as a solar calendar: the wheels act as accurate sundials.',
    significance: 'A functioning astronomical instrument embedded in sacred architecture. The wheels track time with precision, and the entrance (now missing) aligned to illuminate the deity at sunrise.',
    features: ['24 elaborately carved wheels (sundials)', '7 horses representing weekdays', 'Solar astronomical precision', 'Kalinga architectural style', 'Intricate erotic and celestial sculptures'],
    color: '#6fb7c9',
    coordinates: { lat: 19.8876, lng: 86.0946 },
    UNESCO: true,
  },
  {
    id: 'madurai-meenakshi',
    name: 'Meenakshi Amman Temple',
    sanskrit: 'मीनाक्षी अम्मन',
    location: 'Madurai',
    state: 'Tamil Nadu',
    style: 'Dravidian',
    deity: 'Meenakshi (Parvati) & Sundareshwarar (Shiva)',
    period: 'Pandya Dynasty (rebuilt Nayak)',
    yearBuilt: '14 CE foundation; rebuilt 1623–1655 CE',
    description: 'The Meenakshi temple is a living city within a city — over 33,000 sculptures adorn its 14 gopurams (gateway towers). The tallest is 52 meters high. The temple covers 6 hectares and is visited by 15,000–25,000 pilgrims daily.',
    significance: 'One of the world\'s most visited places of worship. The fish-eyed goddess Meenakshi is mentioned in Silappathikaram (2nd century CE). The temple is a supreme example of how Dravidian temple cities functioned as social, educational, and spiritual centers.',
    features: ['14 towering gopurams', '33,000+ sculptures', 'Hall of Thousand Pillars', 'Sacred Golden Lotus Tank', '33,000+ stucco figures painted in vibrant polychrome'],
    color: '#d8a94a',
    coordinates: { lat: 9.9195, lng: 78.1193 },
    UNESCO: false,
  },
  {
    id: 'somnath',
    name: 'Somnath Jyotirlinga',
    sanskrit: 'सोमनाथ',
    location: 'Prabhas Patan',
    state: 'Gujarat',
    style: 'Chalukya (Nagara variant)',
    deity: 'Shiva (Somnath)',
    period: 'Original antiquity; current rebuilt 1951 CE',
    yearBuilt: 'Antiquity (rebuilt multiple times)',
    description: 'The first Jyotirlinga among the twelve, Somnath stands where the ocean meets the sacred land at the Triveni Sangam. Destroyed by Mahmud of Ghazni in 1025 CE and rebuilt 17 times, it symbolizes the indestructible spirit of Sanātana Dharma.',
    significance: 'The legend of Somnath links the curse of Daksha, the expiation of Soma (the Moon), and the eternal compassion of Shiva. The current temple was inaugurated by Sardar Vallabhbhai Patel in 1951 as a symbol of national revival.',
    features: ['Twelve Jyotirlingas — first shrine', 'Baan Stambha (arrow pillar)', 'Ceremonial evening ārati', 'Location at Triveni Sangam', 'Sound & Light Show nightly'],
    color: '#e8c56b',
    coordinates: { lat: 20.8881, lng: 70.4017 },
    UNESCO: false,
  },
]
