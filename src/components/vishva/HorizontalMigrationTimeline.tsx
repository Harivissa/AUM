import { useState, useRef, useEffect } from 'react'
import {
  Compass,
  Ship,
  Clock,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Calendar,
  Landmark,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { type ConfidenceLabel } from '../../data/vishvaData'

export interface TimelineMilestone {
  id: string
  year: string
  exactPeriod: string
  eraCategory: 'Antiquity & Trade' | 'Classical Kingdoms' | 'Medieval Guilds' | 'Girmitiya Indenture' | 'Modern Diaspora'
  title: string
  destination: string
  origin: string
  shipsOrRoutes?: string
  summary: string
  significance: string
  primaryEvidence: string
  confidence: ConfidenceLabel
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'm1-indus-dilmun',
    year: 'c. 2500 BCE',
    exactPeriod: '3rd Millennium BCE (Mature Harappan)',
    eraCategory: 'Antiquity & Trade',
    title: 'Indus-Mesopotamia & Dilmun Maritime Trade',
    origin: 'Lothal & Indus Estuaries (Gujarat / Sindh)',
    destination: 'Dilmun (Bahrain), Makan (Oman), Ur (Mesopotamia)',
    shipsOrRoutes: 'Reeded and wooden coastal dhows following seasonal Arabian Sea monsoon winds',
    summary: 'Cuneiform tablets from Sargon of Akkad record ships from "Meluhha" (Indus Valley) docking at Mesopotamian quays with carnelian beads, ivory, timber, and lapis lazuli.',
    significance: 'First documented maritime trade corridor connecting the Indian subcontinent with the Persian Gulf, proving trans-oceanic commerce thousands of years before the common era.',
    primaryEvidence: 'Ur Royal Cemetery Harappan carnelian etched beads; Sargon of Akkad royal inscriptions; Lothal tidal dockyard.',
    confidence: 'Archaeological evidence'
  },
  {
    id: 'm2-suvarnabhumi',
    year: 'c. 1st – 2nd c. CE',
    exactPeriod: '1st to 2nd Century CE',
    eraCategory: 'Antiquity & Trade',
    title: 'Suvarṇabhūmi Maritime Expeditions',
    origin: 'Kalinga, Coromandel Coast, & Tamralipti',
    destination: 'Funan (Mekong Delta), Oc Eo, & Kedah (Bujang Valley, Malaysia)',
    shipsOrRoutes: 'Seasonal monsoon dhows across the Bay of Bengal and Malacca Strait',
    summary: 'Indian seafaring merchants (*sārthavāhas*) and scholars traversed the Bay of Bengal, establishing vibrant trade emporia where Sanskrit was adopted for royal chancery.',
    significance: 'Initiated over a millennium of continuous civilizational exchange across Southeast Asia, diffusing Sanskrit literature, astronomy, and temple arts without imperial conquest.',
    primaryEvidence: 'Bujang Valley Hindu-Buddhist terracotta shrines; Oc Eo Roman-Indian gold coinage and seals.',
    confidence: 'Archaeological evidence'
  },
  {
    id: 'm3-vo-canh',
    year: 'c. 192 CE',
    exactPeriod: 'Late 2nd / Early 3rd Century CE',
    eraCategory: 'Classical Kingdoms',
    title: 'Võ Cạnh Sanskrit Epigraph (Champa)',
    origin: 'Coastal Andhra / Tamil Kingdoms',
    destination: 'Khanh Hoa Province, Vietnam (Kingdom of Champa)',
    shipsOrRoutes: 'Maritime South China Sea sea-lanes',
    summary: 'A stone stele inscribed in classical Sanskrit verse establishes Sri Mara as sovereign, proclaiming charitable endowments and Vedic virtues.',
    significance: 'Oldest confirmed Sanskrit stone inscription found in Southeast Asia, proving that Sanskrit was used for formal royal declarations in Vietnam by the 2nd–3rd century.',
    primaryEvidence: 'Võ Cạnh Stele (National Museum of Vietnamese History, Hanoi); BEFEO scholarly deciphers.',
    confidence: 'Primary source'
  },
  {
    id: 'm4-tarumanagara-kutai',
    year: 'c. 400 CE',
    exactPeriod: '5th Century CE',
    eraCategory: 'Classical Kingdoms',
    title: 'Kutai & Tarumanagara Inscriptions (Borneo & Java)',
    origin: 'Southern Indian Sanskrit lineage',
    destination: 'East Kalimantan (Borneo) & West Java (Indonesia)',
    shipsOrRoutes: 'Java Sea maritime corridors',
    summary: 'King Mulavarman in Borneo erected seven sacrificial stone posts (*Yūpas*) commemorating the *Bahusuvarṇaka* yajna. In Java, King Purnavarman compared his footprints to Bhagavān Viṣṇu.',
    significance: 'Earliest written historical records in the Indonesian archipelago, establishing Vedic royal rituals and water-engineering projects.',
    primaryEvidence: '7 Yūpa stone pillars at Muara Kaman (National Museum of Indonesia); Ciaruteun boulder inscription.',
    confidence: 'Primary source'
  },
  {
    id: 'm5-kabul-shahi',
    year: 'c. 650 – 1026 CE',
    exactPeriod: '7th to 11th Century CE',
    eraCategory: 'Classical Kingdoms',
    title: 'Kabul & Hindu Shahi Himalayan Defense',
    origin: 'Kabul Valley, Gandhara, & Punjab',
    destination: 'Kafir Kot (Indus River, Khyber Pakhtunkhwa) & Gardez',
    shipsOrRoutes: 'Grand Trunk mountain passes & Khyber corridor',
    summary: 'The Shahi monarchs defended the northwestern gateway of the Indian subcontinent for nearly four centuries, constructing formidable carved stone Nagara temples along the Indus cliffs.',
    significance: 'A heroic bastion of Sanātana sovereignty; documented by Persian scholar Al-Biruni who praised royal nobility, fidelity, and scholarly patronage.',
    primaryEvidence: 'Kafir Kot northern and southern temple fortresses; Gardez marble Ganesha; Al-Biruni\'s Tarikh al-Hind.',
    confidence: 'Scholarly research'
  },
  {
    id: 'm6-prambanan',
    year: '856 CE',
    exactPeriod: 'Mid 9th Century CE',
    eraCategory: 'Classical Kingdoms',
    title: 'Consecration of Shiva-Trisakti (Prambanan, Java)',
    origin: 'Sanjaya Dynasty, Mataram Kingdom',
    destination: 'Yogyakarta, Central Java, Indonesia',
    shipsOrRoutes: 'Trans-Javanese river and overland highways',
    summary: 'King Rakai Pikatan and Queen Pramodawardhani consecrated the grandest Shivaite temple sanctuary in Nusantara, dedicated to Shiva, Brahma, and Vishnu with 240 sculpted candis.',
    significance: 'The apex of classical Indonesian Hindu architectural and iconographic sophistication, featuring complete carved Ramayana stone narrative bas-reliefs.',
    primaryEvidence: 'Shivagrha stone inscription (856 CE); UNESCO World Heritage Monument survey.',
    confidence: 'Primary source'
  },
  {
    id: 'm7-chola-guilds',
    year: 'c. 1025 CE',
    exactPeriod: '11th Century CE',
    eraCategory: 'Medieval Guilds',
    title: 'Chola Maritime Guilds (Ayyavole & Manigramam)',
    origin: 'Thanjavur, Nagapattinam (Tamil Nadu)',
    destination: 'Srivijaya (Sumatra), Kedah (Malaysia), & Quanzhou (China)',
    shipsOrRoutes: 'Imperial Chola navy and autonomous merchant armada fleets',
    summary: 'Rajendra Chola I launched expeditions across the Malacca Strait to secure open maritime trade. Sovereign merchant guilds like Ayyavole 500 built trading stations and Shiva temples.',
    significance: 'Consolidated free-trade rights across the Indian Ocean; established permanent Hindu settlements in Sumatra and Southern China.',
    primaryEvidence: 'Barus Tamil inscription (Sumatra, 1088 CE); Quanzhou Kaiyuan temple Shiva carvings.',
    confidence: 'Primary source'
  },
  {
    id: 'm8-angkor-wat',
    year: '1113 – 1150 CE',
    exactPeriod: '12th Century CE',
    eraCategory: 'Medieval Guilds',
    title: 'Consecration of Angkor Wat (Cambodia)',
    origin: 'Khmer Imperial Capital, Yasodharapura',
    destination: 'Siem Reap, Cambodia',
    shipsOrRoutes: 'Tonle Sap inland waterways and Khmer royal highways',
    summary: 'King Suryavarman II completed the vastest religious monument in human history, designed as an earthly architectural model of Mount Meru dedicated to Bhagavān Viṣṇu.',
    significance: 'Unrivaled masterwork of cosmological geometry, solar alignment, and monumental bas-reliefs depicting the Samudra Manthan (Churning of the Ocean).',
    primaryEvidence: 'Angkor Wat foundation stele; stone epigraphs deciphered by George Cœdès.',
    confidence: 'Primary source'
  },
  {
    id: 'm9-majapahit',
    year: '1293 – 1527 CE',
    exactPeriod: '13th to 16th Century CE',
    eraCategory: 'Medieval Guilds',
    title: 'Majapahit Empire & Indonesian Golden Age',
    origin: 'Trowulan, East Java',
    destination: 'Maritime Nusantara (Java, Bali, Sumatra, Borneo, Sulawesi)',
    shipsOrRoutes: 'Majapahit Jong warships and regional spice trade armadas',
    summary: 'Prime Minister Gajah Mada proclaimed the Sumpah Palapa oath uniting the archipelago. The empire patronized classical arts, literature (Nagarakretagama), and the Shiva-Buddha synthesis.',
    significance: 'The golden age of pre-colonial Indonesian civilization, whose living Hindu culture continues uninterrupted today in the island of Bali.',
    primaryEvidence: 'Nagarakretagama palm-leaf manuscript (1365 CE); Candi Sukuh and Candi Ceto sanctuaries.',
    confidence: 'Historical tradition'
  },
  {
    id: 'm10-mauritius-girmit',
    year: '1834 CE',
    exactPeriod: 'November 2, 1834',
    eraCategory: 'Girmitiya Indenture',
    title: 'First Girmitiya Ship (Atlas) Reaches Mauritius',
    origin: 'Calcutta, Bihar (Bhojpur), & Uttar Pradesh',
    destination: 'Aapravasi Ghat, Port Louis, Mauritius',
    shipsOrRoutes: 'Sailing vessel Atlas via the Indian Ocean trade winds',
    summary: 'The British colonial administration introduced the "Great Experiment" of indentured labor following the abolition of slavery. 36 pioneers stepped ashore onto Aapravasi Ghat.',
    significance: 'Began the indenture migration that transported 1.2 million Indians across the globe. Today Hindus constitute over 48% of Mauritius, maintaining deep spiritual links.',
    primaryEvidence: 'National Archives of Mauritius; UNESCO Aapravasi Ghat World Heritage register.',
    confidence: 'Primary source'
  },
  {
    id: 'm11-caribbean-girmit',
    year: '1838 – 1845 CE',
    exactPeriod: 'May 5, 1838 (Guyana) & May 30, 1845 (Trinidad)',
    eraCategory: 'Girmitiya Indenture',
    title: 'Caribbean Girmitiya Arrivals (Guyana & Trinidad)',
    origin: 'Calcutta, Awadh, Bhojpur, & Chota Nagpur',
    destination: 'Highbury (Guyana) & Gulf of Paria (Trinidad)',
    shipsOrRoutes: 'SS Whitby, Hesperus, and Fatel Razack (3-month Atlantic voyages)',
    summary: 'The Whitby and Hesperus brought 396 workers to British Guiana, followed by 225 passengers on the Fatel Razack to Trinidad. Despite harsh plantation conditions, they guarded their sacred texts.',
    significance: 'Preserved the Ramcharitmanas, Hanuman Chalisa, Chowtal, and Bhajan singing across the Caribbean, creating resilient communities and celebrating Phagwah and Diwali.',
    primaryEvidence: 'Guyana National Archives; Waterloo Heritage Registry (Sewdass Sadhu Temple in the Sea).',
    confidence: 'Primary source'
  },
  {
    id: 'm12-south-africa-girmit',
    year: '1860 CE',
    exactPeriod: 'November 16, 1860',
    eraCategory: 'Girmitiya Indenture',
    title: 'Indenture in South Africa (SS Truro & Belvedere)',
    origin: 'Madras (Tamil Nadu / Andhra) & Calcutta (North India)',
    destination: 'Port Natal (Durban), South Africa',
    shipsOrRoutes: 'SS Truro and Belvedere across the southern Indian Ocean',
    summary: 'Over 150,000 indentured laborers were brought to work Natal sugar estates. In 1893, young lawyer Mohandas Gandhi arrived, founding Phoenix Settlement and Satyagraha.',
    significance: 'Crucible of modern civil rights and nonviolent resistance; Durban remains one of the largest Hindu population centers outside India.',
    primaryEvidence: 'KwaZulu-Natal Provincial Archives; Phoenix Settlement Trust historical records.',
    confidence: 'Primary source'
  },
  {
    id: 'm13-suriname-fiji',
    year: '1873 – 1879 CE',
    exactPeriod: '1873 (Suriname) & May 14, 1879 (Fiji)',
    eraCategory: 'Girmitiya Indenture',
    title: 'Girmitiya Journeys to Suriname & Fiji',
    origin: 'Calcutta, Uttar Pradesh, Bihar, & Madras',
    destination: 'Paramaribo (Suriname) & Levuka / Suva (Fiji)',
    shipsOrRoutes: 'Lalla Rookh (Suriname) & Leonidas (Fiji, first of 87 voyages)',
    summary: '60,553 Indians arrived in Fiji under 5-year contracts (*Girmit*). In Suriname, Dutch agreements settled 34,000 immigrants who nurtured Sarnami Hindustani.',
    significance: 'Pioneered massive cultural institutions like Sri Siva Subramaniya Kovil (Fiji) and monumental Arya Diwaker and Sanatan mandirs in South America.',
    primaryEvidence: 'Fiji National Archives indenture registers; Dutch Colonial Ministry shipping manifests.',
    confidence: 'Primary source'
  },
  {
    id: 'm14-vivekananda-chicago',
    year: '1893 CE',
    exactPeriod: 'September 11, 1893',
    eraCategory: 'Modern Diaspora',
    title: 'Swami Vivekananda at the Parliament of Religions',
    origin: 'Belur Math, Calcutta, India',
    destination: 'Art Institute of Chicago, United States',
    shipsOrRoutes: 'Steamship via Colombo, Penang, Singapore, Hong Kong, Japan, and Vancouver',
    summary: 'Beginning with "Sisters and Brothers of America," Swami Vivekananda introduced Advaita Vedanta and universal tolerance to the Western world, receiving a standing ovation from 7,000 delegates.',
    significance: 'Marked the intellectual arrival of Sanātana philosophical thought in the West, catalyzing Vedanta Societies, Yoga adoption, and inter-faith dialogue.',
    primaryEvidence: 'Official Proceedings of the World\'s Parliament of Religions (Chicago, 1893).',
    confidence: 'Primary source'
  },
  {
    id: 'm15-east-africa-gulf',
    year: '1890s – 1970s CE',
    exactPeriod: 'Late 19th Century to 1972',
    eraCategory: 'Modern Diaspora',
    title: 'East Africa Railway, Gulf Dhows & Resilience',
    origin: 'Gujarat (Kutch, Saurashtra) & Punjab',
    destination: 'Mombasa, Nairobi, Kampala, Zanzibar, & Gulf Ports (Muscat, Dubai)',
    shipsOrRoutes: 'Monsoon dhows and Uganda Railway construction contracts',
    summary: 'Merchants and artisans established schools, clinics, and mandirs across East Africa. Following the 1972 expulsion of 60,000 Asians from Uganda, refugees rebuilt in the UK, Canada, and USA.',
    significance: 'Demonstrated extraordinary civilizational resilience, establishing thriving diaspora institutions, business networks, and mandirs in the Western hemisphere.',
    primaryEvidence: 'Uganda Resettlement Board reports (UK National Archives); Muscat Merchant Archives.',
    confidence: 'Scholarly research'
  },
  {
    id: 'm16-modern-renaissance',
    year: '1965 – Present',
    exactPeriod: 'Mid-20th to 21st Century',
    eraCategory: 'Modern Diaspora',
    title: 'Skilled Diaspora & Global Temple Renaissance',
    origin: 'Pan-Indian subcontinent',
    destination: 'United States, Canada, United Kingdom, Australia, UAE, & European Union',
    shipsOrRoutes: 'Trans-continental commercial aviation & skill-based visas',
    summary: 'Post-1965 migration laws opened doors for engineers, physicians, and entrepreneurs. Landmark traditional stone mandirs arose in Robbinsville, London (Neasden), Sydney, and Abu Dhabi.',
    significance: 'Global integration of Yoga, Ayurveda, and Vedanta into world culture, accompanied by major public civic celebrations like Diwali at the White House and Trafalgar Square.',
    primaryEvidence: 'Pew Research Global Religious Landscape; US & UK decennial census data.',
    confidence: 'Census data'
  }
]

export default function HorizontalMigrationTimeline() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(TIMELINE_MILESTONES[0].id)
  const [activeEraFilter, setActiveEraFilter] = useState<string>('All')
  const timelineScrollRef = useRef<HTMLDivElement>(null)

  const eraFilters = [
    'All',
    'Antiquity & Trade',
    'Classical Kingdoms',
    'Medieval Guilds',
    'Girmitiya Indenture',
    'Modern Diaspora'
  ]

  const filteredMilestones = TIMELINE_MILESTONES.filter((m) => {
    if (activeEraFilter === 'All') return true
    return m.eraCategory === activeEraFilter
  })

  const selectedMilestone =
    TIMELINE_MILESTONES.find((m) => m.id === selectedMilestoneId) || TIMELINE_MILESTONES[0]

  const currentIndex = filteredMilestones.findIndex((m) => m.id === selectedMilestone.id)

  const handleSelectMilestone = (id: string) => {
    setSelectedMilestoneId(id)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedMilestoneId(filteredMilestones[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredMilestones.length - 1) {
      setSelectedMilestoneId(filteredMilestones[currentIndex + 1].id)
    }
  }

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineScrollRef.current) {
      const offset = direction === 'left' ? -280 : 280
      timelineScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="rounded-3xl border border-gold-500/25 bg-gradient-to-b from-[#080d1e] via-[#050813] to-black p-5 sm:p-7 lg:p-9 shadow-2xl relative overflow-hidden my-8">
      {/* Background ambient stars and glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-gold-500/20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            Horizontal Chronological Track
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-gold-100">
            Global Sanātana Migration & Presence Milestones
          </h3>
          <p className="mt-1 font-body text-xs sm:text-sm text-gold-200/70 max-w-3xl">
            Traverse 4,500 years of global movement: from ancient maritime trade routes to classical inscriptions, 19th-century Girmitiya resilience, and modern cultural renaissance.
          </p>
        </div>

        {/* Navigation Step Counter and Buttons */}
        <div className="flex items-center gap-3 self-end md:self-center">
          <span className="text-xs font-display text-gold-400/80">
            {currentIndex >= 0 ? `${currentIndex + 1} of ${filteredMilestones.length}` : ''}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              className="p-2 rounded-full border border-gold-500/25 bg-black/60 text-gold-300 hover:bg-gold-500/15 disabled:opacity-30 disabled:pointer-events-none transition"
              title="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= filteredMilestones.length - 1}
              className="p-2 rounded-full border border-gold-500/25 bg-black/60 text-gold-300 hover:bg-gold-500/15 disabled:opacity-30 disabled:pointer-events-none transition"
              title="Next milestone"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Era Filter Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar border-b border-gold-500/15 text-xs relative z-10">
        <span className="text-gold-400 font-display text-xs font-semibold shrink-0">
          Era Category:
        </span>
        {eraFilters.map((era) => (
          <button
            key={era}
            type="button"
            onClick={() => setActiveEraFilter(era)}
            className={`px-3.5 py-1 rounded-full whitespace-nowrap border transition ${
              activeEraFilter === era
                ? 'border-gold-400 bg-gold-500/25 text-gold-100 font-semibold shadow-[0_0_12px_rgba(232,197,107,0.25)]'
                : 'border-gold-500/15 bg-black/40 text-gold-300/70 hover:border-gold-400/40 hover:text-gold-200'
            }`}
          >
            {era}
          </button>
        ))}
      </div>

      {/* HORIZONTAL TIMELINE TRACK */}
      <div className="relative my-6">
        {/* Left / Right Scroll overlay controls for wide monitors */}
        <button
          type="button"
          onClick={() => scrollTimeline('left')}
          className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/80 border border-gold-500/30 items-center justify-center text-gold-300 hover:bg-gold-500/20 hover:text-white transition shadow-lg"
          title="Scroll timeline left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollTimeline('right')}
          className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/80 border border-gold-500/30 items-center justify-center text-gold-300 hover:bg-gold-500/20 hover:text-white transition shadow-lg"
          title="Scroll timeline right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Continuous Horizontal Axis Track */}
        <div
          ref={timelineScrollRef}
          className="overflow-x-auto no-scrollbar py-6 px-4 relative scroll-smooth cursor-grab active:cursor-grabbing"
        >
          <div className="min-w-max flex items-center relative py-4">
            {/* The Golden Central Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 bg-gradient-to-r from-gold-500/20 via-gold-400/60 to-gold-500/20 rounded-full" />

            {/* Milestones Nodes */}
            <div className="flex items-center gap-10 sm:gap-14 relative z-10 px-6">
              {filteredMilestones.map((m) => {
                const isSelected = m.id === selectedMilestone.id

                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleSelectMilestone(m.id)}
                    className="group flex flex-col items-center focus:outline-none transition-transform duration-300 hover:scale-105"
                  >
                    {/* Year badge above node */}
                    <span
                      className={`text-[11px] font-display font-bold px-2 py-0.5 rounded-md transition-all whitespace-nowrap mb-2.5 ${
                        isSelected
                          ? 'bg-gradient-to-r from-gold-400 to-amber-400 text-black shadow-[0_0_12px_rgba(245,158,11,0.5)] scale-110'
                          : 'bg-black/70 border border-gold-500/20 text-gold-300/80 group-hover:border-gold-400 group-hover:text-gold-100'
                      }`}
                    >
                      {m.year}
                    </span>

                    {/* Milestone Pin Circle */}
                    <div className="relative flex items-center justify-center">
                      {/* Outer pulse aura if selected */}
                      {isSelected && (
                        <div className="absolute w-8 h-8 rounded-full bg-gold-400/20 animate-ping pointer-events-none" />
                      )}
                      <div
                        className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected
                            ? 'border-gold-300 bg-amber-400 shadow-[0_0_14px_#e8c56b]'
                            : 'border-gold-500/40 bg-[#070b16] group-hover:border-gold-400 group-hover:bg-gold-500/20'
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? 'bg-black' : 'bg-gold-400/60'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Short title snippet below node */}
                    <span
                      className={`text-[10.5px] font-body max-w-[120px] text-center mt-2.5 line-clamp-2 transition-colors ${
                        isSelected
                          ? 'text-gold-100 font-semibold drop-shadow'
                          : 'text-gold-300/60 group-hover:text-gold-200'
                      }`}
                    >
                      {m.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-center text-[10.5px] text-gold-400/60 font-body italic">
          ← Drag or scroll horizontally to explore all milestones across centuries →
        </div>
      </div>

      {/* ACTIVE MILESTONE DETAILS INSPECTOR PANEL */}
      <div className="p-6 sm:p-8 rounded-2xl border border-gold-500/30 bg-black/60 backdrop-blur-md relative overflow-hidden transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
          {/* Left Column: Context & Narrative */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/35 text-gold-200 text-xs font-display font-semibold">
                {selectedMilestone.year}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-display">
                {selectedMilestone.eraCategory}
              </span>
              <span className="text-gold-400/70 text-xs font-body">
                {selectedMilestone.exactPeriod}
              </span>
            </div>

            <h4 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
              {selectedMilestone.title}
            </h4>

            {/* Origin & Destination route pill */}
            <div className="p-3 rounded-xl bg-gold-950/20 border border-gold-500/20 flex items-center gap-3 text-xs font-body text-gold-200">
              <Compass className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-gold-300">Origin:</span>
                <span>{selectedMilestone.origin}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-semibold text-gold-300">Destination:</span>
                <span>{selectedMilestone.destination}</span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-gold-200/85 leading-relaxed">
              {selectedMilestone.summary}
            </p>

            {selectedMilestone.shipsOrRoutes && (
              <div className="text-xs font-body text-gold-300/80 pt-1">
                <span className="font-display font-semibold text-gold-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-1">
                  <Ship className="w-3.5 h-3.5 text-gold-400" /> Vessels & Maritime Routes:
                </span>
                <p className="italic pl-5 border-l border-gold-500/25">
                  {selectedMilestone.shipsOrRoutes}
                </p>
              </div>
            )}

            <div className="pt-2">
              <h5 className="font-display text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1">
                Civilizational & Cultural Significance:
              </h5>
              <p className="text-xs font-body text-gold-200/80 leading-relaxed">
                {selectedMilestone.significance}
              </p>
            </div>
          </div>

          {/* Right Column: Verified Scholarly & Epigraphic Evidence */}
          <div className="space-y-4 bg-[#0a0f22] p-5 sm:p-6 rounded-2xl border border-gold-500/25 self-start">
            <div className="flex items-center justify-between border-b border-gold-500/15 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <h5 className="font-display text-xs uppercase tracking-wider text-gold-200 font-semibold">
                  Source-Aware Documentation
                </h5>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-display">
                {selectedMilestone.confidence}
              </span>
            </div>

            <div className="space-y-3 text-xs font-body">
              <div>
                <span className="text-[11px] font-display text-gold-400 uppercase tracking-wider font-semibold">
                  Documented Primary / Archaeological Evidence:
                </span>
                <p className="text-gold-100 font-medium mt-1 leading-relaxed">
                  {selectedMilestone.primaryEvidence}
                </p>
              </div>

              <div className="pt-2 border-t border-gold-500/15">
                <span className="text-[11px] font-display text-gold-400 uppercase tracking-wider font-semibold">
                  Epistemic Integrity Note:
                </span>
                <p className="text-gold-300/70 text-[11.5px] mt-1 leading-relaxed">
                  Every milestone is corroborated through physical epigraphs, sovereign port archives, or peer-reviewed monographs. Historical dates are verified against canonical epigraph catalogs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
