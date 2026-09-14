import { HeartHandshake, Quote } from 'lucide-react'

const principles = [
  { title: 'Many approaches to the sacred', text: 'Hindu traditions contain diverse paths of devotion, knowledge, meditation, ritual and disciplined action. Plurality exists within the Dharma itself.' },
  { title: 'A tradition of inquiry', text: 'Upaniṣadic dialogue, darśana and śāstrārtha preserve a culture in which questions, debate and interpretation matter.' },
  { title: 'Respect without erasing difference', text: 'AUM presents Hindu pluralism on its own terms: different sampradāyas may disagree deeply while remaining part of the wider Hindu civilizational landscape.' },
]

export default function ToleranceSection() {
  return (
    <section id="tolerance" className="relative py-8 sm:py-12 max-w-7xl mx-auto z-10">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
          <HeartHandshake className="w-3.5 h-3.5 text-gold-400" /> Hindu Pluralism & Coexistence
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
          A Civilizational Space for Many Paths
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
          Hindu traditions contain a remarkable range of theological, philosophical, and devotional approaches. Rather than imposing a single uniform doctrine, Sanātana Dharma provides a civilizational space where diverse sampradāyas flourish alongside one another.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {principles.map((item) => (
          <article key={item.title} className="p-6 rounded-2xl bg-black/45 border border-gold-500/20 shadow-lg gold-glow-box-hover transition-all">
            <h3 className="font-display text-xl font-bold text-gold-100">{item.title}</h3>
            <p className="mt-2.5 font-body text-xs sm:text-sm text-gold-300/70 leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 p-6 rounded-2xl bg-gold-950/35 border border-gold-500/25 text-center max-w-3xl mx-auto">
        <Quote className="w-5 h-5 text-gold-400 mx-auto mb-2" />
        <p className="font-deva text-lg sm:text-xl text-gold-100 font-medium">एकं सद् विप्रा बहुधा वदन्ति</p>
        <p className="mt-1 font-body text-xs text-gold-400/80 italic">Ekaṁ sad viprā bahudhā vadanti</p>
        <p className="mt-2 font-body text-sm text-gold-200/85">“Reality is one; the wise speak of it in many ways.”</p>
        <p className="mt-2 font-body text-[10px] uppercase tracking-wider text-gold-500/70">
          Ṛgveda 1.164.46 · Presented in its textual hymn context
        </p>
      </div>
    </section>
  )
}
