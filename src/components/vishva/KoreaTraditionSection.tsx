import { useState } from 'react'
import { KOREA_AYODHYA_ANALYSIS } from '../../data/vishvaData'
import { BookOpen, ShieldCheck, AlertCircle, Info, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react'

export default function KoreaTraditionSection() {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section id="korea-ayodhya" className="py-14 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-display uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Tradition, Archaeology & Source Inquiry
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-100 text-glow">
            Korea & Ayodhya: Queen Heo Hwang-ok
          </h2>
          <p className="font-deva text-base text-gold-300/80 mt-1">
            {KOREA_AYODHYA_ANALYSIS.koreanTitle}
          </p>
          <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
            Examining the ancient Korean tradition connecting King Suro of Gaya with Princess Suriratna of Ayuta, maintaining strict distinctions between living cultural memory, textual chronicles, and verified historical evidence.
          </p>
        </div>

        {/* Core Respectful Disclaimer Banner */}
        <div className="p-5 sm:p-6 rounded-3xl border border-gold-500/35 bg-gradient-to-r from-amber-950/40 via-black/80 to-amber-950/40 shadow-xl max-w-4xl mx-auto mb-10">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-gold-200">
                AUM Source Label & Epistemic Standard:
              </h4>
              <p className="mt-1 font-body text-xs sm:text-sm text-gold-200/85 leading-relaxed italic">
                “{KOREA_AYODHYA_ANALYSIS.verdictSummary}”
              </p>
            </div>
          </div>
        </div>

        {/* Narrative & Source Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: The Traditional Account from Samguk Yusa */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#0c101c] to-black shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gold-500/15">
              <span className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold">
                Chronicle Narrative
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 text-[10px] font-display">
                Historical Tradition
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-gold-100">
              Account in the *Samguk Yusa* (c. 1281 CE)
            </h3>

            <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">
              {KOREA_AYODHYA_ANALYSIS.traditionalAccount}
            </p>

            <div className="pt-4 border-t border-gold-500/15 space-y-2 text-xs font-body text-gold-300/75">
              <p>
                <span className="text-gold-400 font-semibold">Primary Text:</span> {KOREA_AYODHYA_ANALYSIS.primarySourceText}
              </p>
              <p>
                <span className="text-gold-400 font-semibold">Descendant Clans:</span> Gimhae Kim & Gimhae Heo (constituting approximately 10% of modern South Korea's population).
              </p>
            </div>
          </div>

          {/* Right: The 5-Point Epistemic Breakdown Framework */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-lg font-bold text-gold-100">
                Scholarly & Epistemic Framework
              </h3>
              <span className="text-xs text-gold-400 font-body">Select a layer to examine</span>
            </div>

            {KOREA_AYODHYA_ANALYSIS.distinctionFramework.map((item, idx) => {
              const isSelected = activeTab === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'border-gold-400 bg-gradient-to-r from-gold-500/20 via-[#10172a] to-black shadow-lg'
                      : 'border-gold-500/20 bg-black/40 hover:border-gold-500/40 hover:bg-gold-500/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-sm sm:text-base font-semibold text-gold-100">
                      {item.category}
                    </h4>
                    <span
                      className={`text-[11px] font-display px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                        isSelected
                          ? 'border-gold-400/50 bg-gold-400/20 text-gold-100'
                          : 'border-gold-500/20 text-gold-300/80'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-body text-gold-200/80 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* References Table */}
        <div className="mt-10 p-5 rounded-2xl border border-gold-500/15 bg-black/50">
          <h4 className="text-xs font-display uppercase tracking-widest text-gold-400 font-semibold mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Consulted Historical & Archaeological Sources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {KOREA_AYODHYA_ANALYSIS.sources.map((src, i) => (
              <div key={i} className="p-3 rounded-xl bg-black/60 border border-gold-500/10 text-xs font-body">
                <p className="font-semibold text-gold-200">{src.title}</p>
                <p className="text-gold-300/65 text-[11px] mt-0.5">{src.authorOrBody} ({src.yearOrPeriod})</p>
                <span className="mt-1.5 inline-block px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 text-[10px] font-display">
                  {src.confidence}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
