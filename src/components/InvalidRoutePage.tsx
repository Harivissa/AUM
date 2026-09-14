import { ArrowLeft, Compass } from 'lucide-react'

export default function InvalidRoutePage({ onHome }: { onHome: () => void }) {
  return <main className="relative z-10 min-h-screen px-5 pt-36 pb-24 flex items-center justify-center">
    <section className="max-w-xl rounded-[2rem] border border-gold-500/20 bg-black/55 p-8 sm:p-10 text-center shadow-2xl">
      <Compass className="mx-auto w-7 h-7 text-gold-400" />
      <p className="mt-5 font-body text-[10px] uppercase tracking-[.24em] text-gold-400">Route unavailable</p>
      <h1 className="mt-2 font-display text-4xl text-gold-100">This chamber is not in the AUM map.</h1>
      <p className="mt-4 font-body text-sm leading-7 text-gold-200/65">The link may be incomplete or no longer available. Return to the central AUM Universe to continue exploring.</p>
      <button onClick={onHome} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-body text-xs font-semibold text-void"><ArrowLeft className="w-4 h-4" />Return to AUM Universe</button>
    </section>
  </main>
}
