import { useState } from 'react'
import { MIGRATION_ERAS, type MigrationEra } from '../../data/vishvaData'
import { Compass, Ship, Clock, Globe2, ShieldCheck, BookOpen, ChevronRight, Anchor } from 'lucide-react'
import HorizontalMigrationTimeline from './HorizontalMigrationTimeline'

const DIASPORA_SPECIAL_HUBS = [
  {
    country: 'Mauritius',
    year: '1834 CE',
    ship: 'Atlas & Pioneer',
    event: 'Global Pilot for Indentured Labor (Aapravasi Ghat)',
    population: '48.5% of nation',
    highlight: 'Ganga Talao (Grand Bassin) volcanic sacred lake consecrated with waters of the Holy Ganga in 1972.'
  },
  {
    country: 'Guyana',
    year: '1838 CE',
    ship: 'SS Whitby & Hesperus',
    event: 'First Caribbean Arrival on May 5, 1838',
    population: '24.8% of nation',
    highlight: 'Bhojpuri and Awadhi folk culture preserved; Phagwah and Deepavali celebrated as sovereign national holidays.'
  },
  {
    country: 'Trinidad and Tobago',
    year: '1845 CE',
    ship: 'Fatel Razack',
    event: 'Arrival in Gulf of Paria with 225 pioneers on May 30',
    population: '18.1% of nation',
    highlight: 'Sewdass Sadhu hand-built the Waterloo Temple in the Sea on the coastal reef after land worship was banned.'
  },
  {
    country: 'South Africa',
    year: '1860 CE',
    ship: 'Truro (Madras) & Belvedere (Calcutta)',
    event: 'Arrival in Port Natal (Durban) for sugarcane estates',
    population: '550,000+ Hindus',
    highlight: 'Birthplace of Mahatma Gandhi’s Satyagraha philosophy (1893–1914) at Phoenix Settlement, Durban.'
  },
  {
    country: 'Suriname',
    year: '1873 CE',
    ship: 'Lalla Rookh',
    event: 'Dutch colonial indenture agreement with British India',
    population: '22.3% of nation',
    highlight: 'Flourishing of Sarnami Hindustani language and Paramaribo’s monumental Arya Diwaker and Sanatan mandirs.'
  },
  {
    country: 'Fiji',
    year: '1879 CE',
    ship: 'Leonidas (first of 87 voyages)',
    event: '60,553 Girmitiyas transported between 1879 and 1916',
    population: '27.9% of nation',
    highlight: 'Preservation of Ramcharitmanas recitations; home to Sri Siva Subramaniya Kovil, largest temple in Southern Hemisphere.'
  },
  {
    country: 'East Africa (Kenya, Uganda, Tanzania)',
    year: '1890s – 1972 CE',
    ship: 'Dhows across the Arabian Sea',
    event: 'Uganda Railway construction & merchant trading communities',
    population: 'Significant historic diaspora',
    highlight: 'Despite the devastating 1972 expulsion of 60,000 Asians by Idi Amin, refugees rebuilt thriving institutions in the UK and Canada.'
  },
  {
    country: 'United States & Canada',
    year: '1965 – Present',
    ship: 'Global Civil Aviation & Skilled Immigration',
    event: '1965 Immigration and Nationality Act & 1967 Canadian Points System',
    population: '4.5+ Million combined',
    highlight: 'Pioneered biotechnology, computing, academic chairs, and constructed monumental stone mandirs (Akshardham Robbinsville).'
  }
]

export default function MigrationDiasporaTimeline() {
  const [activeEra, setActiveEra] = useState<string>(MIGRATION_ERAS[0].id)

  const currentEraData = MIGRATION_ERAS.find((e) => e.id === activeEra) || MIGRATION_ERAS[0]

  return (
    <section id="migration-diaspora" className="py-14 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <Anchor className="w-3.5 h-3.5 text-gold-400" />
            Centuries of Resilience & Journey
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-100 text-glow">
            Migration & The Global Sanātana Diaspora
          </h2>
          <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
            From the monsoon trade winds of the Indian Ocean to the perilous ships of 19th-century colonial indenture (Girmit) and modern academic hubs, tracing how sacred memory, Sanskrit texts, and communal faith journeyed across the earth.
          </p>
        </div>

        {/* Horizontal Interactive Chronological Timeline Component */}
        <HorizontalMigrationTimeline />

        {/* 3 Era Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {MIGRATION_ERAS.map((era) => {
            const isActive = era.id === activeEra
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => setActiveEra(era.id)}
                className={`text-left p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-gold-400 bg-gradient-to-b from-gold-500/20 via-[#10172a] to-black shadow-xl shadow-gold-500/10'
                    : 'border-gold-500/20 bg-black/40 hover:border-gold-500/40 hover:bg-gold-500/5'
                }`}
              >
                <div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-gold-400 font-semibold">
                    {era.timePeriod}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-gold-100">
                    {era.eraName}
                  </h3>
                  <p className="mt-2 text-xs font-body text-gold-300/70 line-clamp-2">
                    {era.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between text-xs text-gold-400 font-display">
                  <span>Explore Era</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-gold-200' : ''}`} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed Breakdown of Active Era */}
        <div className="p-6 sm:p-8 rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#090e1c] via-[#050812] to-black shadow-2xl relative overflow-hidden mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/25 text-gold-300 text-xs font-display">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                {currentEraData.eraName}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
                {currentEraData.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">
                {currentEraData.summary}
              </p>

              <div className="pt-2">
                <h4 className="font-display text-xs uppercase tracking-wider text-gold-300 font-semibold">
                  Trade Routes & Legal Frameworks:
                </h4>
                <p className="mt-1 text-xs font-body text-gold-300/75">
                  {currentEraData.tradeRoutesOrAgreements}
                </p>
              </div>

              <div>
                <h4 className="font-display text-xs uppercase tracking-wider text-gold-300 font-semibold">
                  Civilizational & Cultural Impact:
                </h4>
                <p className="mt-1 text-xs font-body text-gold-300/75">
                  {currentEraData.culturalImpact}
                </p>
              </div>
            </div>

            {/* Destinations & Verified References */}
            <div className="space-y-5 bg-black/50 p-5 sm:p-6 rounded-2xl border border-gold-500/20">
              <div>
                <h4 className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5" /> Key Geographical Destinations
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {currentEraData.keyDestinations.map((dest, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-200 text-xs font-body"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/15">
                <h4 className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Primary Scholarly Source
                </h4>
                <p className="mt-2 text-xs font-body font-semibold text-gold-100">
                  {currentEraData.sources[0]?.title}
                </p>
                <p className="text-[11px] text-gold-300/70 font-body">
                  {currentEraData.sources[0]?.authorOrBody} ({currentEraData.sources[0]?.yearOrPeriod})
                </p>
                <span className="mt-2 inline-block px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-display">
                  {currentEraData.sources[0]?.confidence}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Indenture & Diaspora Highlights Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-gold-100">
                The Girmitiya & Diaspora Hubs
              </h3>
              <p className="text-xs font-body text-gold-300/70 mt-1">
                Documented historical voyages, ships, and continuous living sanctuaries across the world.
              </p>
            </div>
            <span className="text-xs font-display text-gold-400/80 px-3 py-1 rounded-full border border-gold-500/20 bg-black/40">
              8 Documented Key Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIASPORA_SPECIAL_HUBS.map((hub, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-gold-500/20 bg-black/40 hover:border-gold-400/40 hover:bg-gold-950/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gold-400 font-display font-semibold">
                    <span>{hub.year}</span>
                    <span className="text-[11px] text-gold-300/60 font-body">{hub.population}</span>
                  </div>
                  <h4 className="mt-2 font-display text-lg font-bold text-gold-100">
                    {hub.country}
                  </h4>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-body text-amber-300/90">
                    <Ship className="w-3 h-3 text-gold-400" />
                    <span className="italic">{hub.ship}</span>
                  </div>
                  <p className="mt-2 text-xs font-body text-gold-300/75 leading-relaxed">
                    {hub.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold-500/10 text-[11px] text-gold-400/70 font-body">
                  {hub.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
