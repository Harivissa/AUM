import { ArrowRight, BookOpen, CalendarDays, Compass, Landmark, ShieldCheck, Sparkles, Users, ScrollText, Heart } from 'lucide-react'

const cards = [
  { title: 'Scriptures', sanskrit: 'शास्त्र', description: 'Vedas, Purāṇas and Itihāsa — with author traditions, texts and family lineages.', href: '#shastra', icon: BookOpen },
  { title: 'Purāṇas', sanskrit: 'पुराण', description: 'A dedicated index of the 18 Mahāpurāṇas and their traditional textual context.', href: '#purana', icon: ScrollText },
  { title: 'Devas & Devīs', sanskrit: 'देवता', description: 'Explore forms of the Divine, sampradāya context, sacred texts, temples and festivals.', href: '#devata', icon: Heart },
  { title: 'Festivals', sanskrit: 'उत्सवाः', description: 'Begin with Vināyaka Chavithi: calendar context, local practice and source-aware reading.', href: '#festivals', icon: CalendarDays },
  { title: 'Kshetras & Tirthas', sanskrit: 'क्षेत्र · तीर्थ', description: 'Explore sacred places, temples, pilgrimage traditions and the living geography of Bhārata.', href: '#tirtha', icon: Landmark },
  { title: 'Hindu Tolerance', sanskrit: 'सहिष्णुता', description: 'Explore pluralism, philosophical openness and the many Hindu approaches to the sacred.', href: '#dharma', icon: Users },
  { title: 'Smṛti', sanskrit: 'स्मृति', description: 'Civilizational memory — preservation, loss, resistance, rebuilding and contemporary concerns.', href: '#smriti', icon: Compass },
  { title: 'AUM Verify', sanskrit: 'सत्यापन', description: 'Check a claim against identified sources instead of relying on viral quotations.', href: '#verify', icon: ShieldCheck },
  { title: 'Young Seekers', sanskrit: 'बाल साधक', description: 'A child-friendly learning space for stories, Sanskrit, festivals, values and visual learning.', href: '#young-seekers', icon: Sparkles },
]

export default function ExploreSection() {
  return (
    <section id="explore" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <Compass className="w-3.5 h-3.5 text-gold-400" /> Explore AUM
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow section-title-accent">Begin Your Journey</h2>
        <p className="mt-5 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed">Choose a doorway into Śāstra, sacred geography, Hindu thought, civilizational memory and living practice.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(({ title, sanskrit, description, href, icon: Icon }) => (
          <a key={title} href={href} className="group p-5 rounded-2xl bg-black/45 border border-gold-500/20 hover:border-gold-400/60 hover:bg-gold-500/5 transition-all shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform"><Icon className="w-4 h-4" /></div>
              <span className="font-deva text-gold-400/80 text-lg">{sanskrit}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-gold-100">{title}</h3>
            <p className="mt-2 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">{description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-body font-semibold text-gold-400 group-hover:text-gold-200">Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
          </a>
        ))}
      </div>
    </section>
  )
}
