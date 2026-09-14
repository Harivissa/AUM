import { useState } from 'react'
import { Mail, CheckCircle2, Send, Shield } from 'lucide-react'
import TiltCard3D from './TiltCard3D'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSubscribed(true)
      setEmail('')
    }, 600)
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <TiltCard3D intensity={6}>
        <div className="relative rounded-3xl bg-gradient-to-r from-[#140a33]/95 via-[#090518] to-[#0f0729]/95 border border-gold-400/40 p-8 sm:p-14 shadow-2xl overflow-hidden">
          {/* Background Mandala Watermark */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 pointer-events-none opacity-5 text-gold-200">
            <span className="font-deva text-[300px] leading-none select-none">ॐ</span>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-4">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              Vedic Wisdom Dispatch
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-100 text-glow">
              Join the Global Sanātana Digital Circle
            </h2>
            <p className="mt-3 font-body text-sm sm:text-base text-gold-200/80 leading-relaxed font-light">
              Receive weekly curated Sanskrit shlokas with etymological breakdowns, Vedic science updates,
              temple architectural analyses, and AUM Verify research briefs.
            </p>

            {/* Form */}
            {isSubscribed ? (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs sm:text-sm font-body">
                  <span className="font-semibold block text-emerald-300">Namaste! You are subscribed.</span>
                  Welcome to the digital circle. May the timeless wisdom illuminate your journey.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-black/70 border border-gold-500/30 text-gold-200 placeholder-gold-500/40 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-void font-body font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(232,197,107,0.3)] hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Join Free</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center gap-2 text-[11px] font-body text-gold-500/60">
              <Shield className="w-3 h-3 text-gold-500/70" />
              <span>100% Free · Respecting your digital privacy · Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </TiltCard3D>
    </section>
  )
}
