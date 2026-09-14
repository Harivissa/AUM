import { assetUrl } from '../utils/assetUrl'
import { BookOpen, Gamepad2, Languages, MapPin, Sparkles, Heart, Shield } from 'lucide-react'

const modules = [
  ['Stories','Rāma, Kṛṣṇa, Hanumān, Gaṇeśa, Dhruva, Prahlāda and more.','story'],
  ['Ślokas','Short, correctly sourced prayers with pronunciation and meaning.','om'],
  ['Sanskrit','Letters, sounds, simple words and everyday śabdas.','lang'],
  ['Quizzes','Temple, festival, symbol and Dharma challenges.','quiz'],
  ['Temple journeys','Explore sacred places through maps and visual stories.','temple'],
  ['Values','Satya, dayā, sevā, śauca, dhairya and viveka.','heart'],
]

const icons = {
  story: BookOpen,
  om: Sparkles,
  lang: Languages,
  quiz: Gamepad2,
  temple: MapPin,
  heart: Heart,
}

export default function YoungSeekersSection() {
  return <section id="young-seekers" className="relative py-10 sm:py-16 px-1 z-10">
    <div className="rounded-[2rem] bg-gradient-to-b from-[#100a2b]/95 via-[#070514] to-[#04030a] border border-gold-400/30 p-5 sm:p-8 lg:p-10 overflow-hidden relative shadow-2xl">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_8%,rgba(232,197,107,.22),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(72,104,190,.12),transparent_28%)]"/>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full border border-gold-400/10 blur-[1px] pointer-events-none"/>


      {/* ONE shared devotional illustration — deliberately not three separate cards. */}
      <div className="relative mt-9 sm:mt-12 max-w-5xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden border border-gold-400/30 bg-black/50 shadow-[0_0_70px_rgba(232,197,107,.10)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,197,107,.10),transparent_58%)] pointer-events-none"/>
          <img
            src={assetUrl('assets/young-seekers/young-seekers-trio.png')}
            alt="Bāla Kṛṣṇa, Bāla Hanumān and Bāla Gaṇeśa together in a child-friendly sacred illustration"
            className="relative block w-full h-auto object-cover"
            loading="eager"
          />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/55 bg-[#05030b]/90 backdrop-blur-md px-4 sm:px-6 py-2.5 text-[10px] sm:text-xs uppercase tracking-[.18em] text-gold-200 shadow-[0_0_30px_rgba(232,197,107,.15)] whitespace-nowrap">
              <Shield className="w-3.5 h-3.5 text-gold-400"/>
              Under Construction · Coming with care
            </div>
          </div>
        </div>
        <p className="mt-3 text-center font-body text-[10px] uppercase tracking-[.18em] text-gold-500/65">
          One shared Young Seekers universe · Stories and activities are being prepared
        </p>
      </div>

      <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {modules.map(([title,text,iconKey])=>{
          const Icon = icons[iconKey as keyof typeof icons]
          return <div key={title} className="rounded-2xl border border-gold-500/15 bg-black/35 p-4 text-left hover:border-gold-400/35 transition">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-300"><Icon className="w-4 h-4"/></span>
              <h3 className="font-display text-lg text-gold-100">{title}</h3>
            </div>
            <p className="mt-3 font-body text-xs leading-relaxed text-gold-300/60">{text}</p>
          </div>
        })}
      </div>

      <div className="relative mt-8 flex flex-wrap justify-center gap-2 text-[10px] font-body text-gold-400/80">
        <span className="px-3 py-1.5 rounded-full border border-gold-500/20">Parent-friendly</span>
        <span className="px-3 py-1.5 rounded-full border border-gold-500/20">Source-aware</span>
        <span className="px-3 py-1.5 rounded-full border border-gold-500/20">No fabricated ślokas</span>
        <span className="px-3 py-1.5 rounded-full border border-gold-500/20">Coming in phases</span>
      </div>
    </div>
  </section>
}
