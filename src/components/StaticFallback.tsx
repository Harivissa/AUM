import vedicImg from '../assets/images/vedic_manuscript_1789619549504.jpg'
import tirthaImg from '../assets/images/sacred_temple_1789619561869.jpg'
import smritiImg from '../assets/images/civilization_memory_1789619576878.jpg'
import dharmaImg from '../assets/images/dharma_wheel_1789619590191.jpg'
import festivalsImg from '../assets/images/festival_diya_1789619603081.jpg'
import verifyImg from '../assets/images/verify_shield_1789619614450.jpg'
import youngSeekerImg from '../assets/images/young_seeker_1789619627160.jpg'

const portals = [
  { sa: 'शास्त्रम्', en: 'Śāstra', desc: 'Vedic Knowledge', href: '#shastra', img: vedicImg },
  { sa: 'तीर्थम्', en: 'Tīrtha', desc: 'Puṇyakṣetra / Sacred Pilgrimage Places', href: '#tirtha', img: tirthaImg },
  { sa: 'स्मृतिः', en: 'Smṛti', desc: 'Civilizational Memory', href: '#smriti', img: smritiImg },
  { sa: 'धर्मः', en: 'Dharma', desc: 'Righteous Living', href: '#dharma', img: dharmaImg },
  { sa: 'उत्सवाः', en: 'Festivals', desc: 'Sacred Celebrations', href: '#festivals', img: festivalsImg },
  { sa: 'प्रमाणम्', en: 'AUM Verify', desc: 'Truth & Clarity', href: '#verify', img: verifyImg },
  { sa: 'बाल साधक', en: 'Young Seekers', desc: 'For the Next Generation', href: '#young-seekers', img: youngSeekerImg },
]

export default function StaticFallback({ onNavigate }: { onNavigate?: (href: string) => void }) {
  return (
    <div className="static-cosmos absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-[min(88vw,560px)] aspect-square">
        <div className="absolute inset-[15%] rounded-full border border-gold-500/25 shadow-[0_0_80px_rgba(232,197,107,.08)]" />
        <div className="absolute inset-[27%] rounded-full border border-gold-500/20" />
        <div className="absolute inset-[35%] rounded-full border border-gold-500/35" />
        <div className="absolute inset-[39%] rounded-full flex items-center justify-center">
          <span className="font-deva text-7xl sm:text-8xl text-gold-400 text-glow select-none">ॐ</span>
        </div>
        {portals.map((p, i) => {
          const a = (i / portals.length) * Math.PI * 2 - Math.PI / 2
          const x = 50 + Math.cos(a) * 42
          const y = 50 + Math.sin(a) * 42
          return (
            <button
              key={p.en}
              type="button"
              onClick={() => (onNavigate ? onNavigate(p.href) : (window.location.hash = p.href.slice(1)))}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer focus:outline-none"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full p-[2px] bg-gradient-to-tr from-gold-400 to-amber-300 shadow-[0_0_12px_rgba(232,197,107,0.3)] group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img src={p.img} alt={p.en} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-1 font-deva text-[9px] text-gold-400/80 leading-none">{p.sa}</div>
              <div className="mt-0.5 px-2 py-0.5 rounded-full bg-black/80 border border-gold-500/30 text-[9px] sm:text-[10px] text-gold-200 whitespace-nowrap">
                <span className="font-bold">{p.en}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
