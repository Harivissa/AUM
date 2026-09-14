import { assetUrl } from '../utils/assetUrl'
import { ArrowLeft, BookOpen, MapPin, Search, ShieldCheck, Sparkles, ScrollText, Compass, Heart, Landmark, Atom } from 'lucide-react'
import TiltCard3D from './TiltCard3D'
import ScripturesSection from './ScripturesSection'
import TempleAtlasSection from './TempleAtlasSection'
import ExploreSection from './ExploreSection'
import AUMVerifySection from './AUMVerifySection'
import ToleranceSection from './ToleranceSection'
import SmritiSection from './SmritiSection'
import AttacksOnHindusSection from './AttacksOnHindusSection'
import LoveJihadSection from './LoveJihadSection'
import YoungSeekersSection from './YoungSeekersSection'
import type { ReactNode } from 'react'
import { SCIENCE_KNOWLEDGE } from '../data/scienceKnowledge'

const PURANAS = ['Brahma', 'Padma', 'Viṣṇu', 'Śiva', 'Bhāgavata', 'Nārada', 'Mārkaṇḍeya', 'Agni', 'Bhaviṣya', 'Brahmavaivarta', 'Liṅga', 'Varāha', 'Skanda', 'Vāmana', 'Kūrma', 'Matsya', 'Garuḍa', 'Brahmāṇḍa']
const DEVATAS = [
  ['Kṛṣṇa','कृष्ण',assetUrl('assets/young-seekers/krishna.png'),'Bhagavān Kṛṣṇa is central to Vaiṣṇava traditions and is the speaker of the Bhagavad Gītā.'],
  ['Hanumān','हनुमान्',assetUrl('assets/young-seekers/bal-gopala.png'),'A foremost devotee of Śrī Rāma, celebrated for bhakti, strength, courage and service.'],
  ['Gaṇeśa','गणेश',assetUrl('assets/young-seekers/ganesha.png'),'Revered across Hindu traditions as Vighneśvara and invoked at beginnings and auspicious undertakings.'],
  ['Śiva','शिव','', 'The great deity of Śaiva traditions, associated with transformation, tapas and liberation.'],
  ['Devī','देवी','', 'The Divine Feminine is worshipped in many forms across Śākta traditions, including Durgā, Lakṣmī and Sarasvatī.'],
  ['Sūrya','सूर्य','', 'The solar deity, honoured through Vedic hymns, worship and practices such as Sūrya Namaskāra.'],
]

function PageFrame({ eyebrow, title, subtitle, onBack, children }: { eyebrow: string; title: string; subtitle: string; onBack: () => void; children: ReactNode }) {
  return <main className="relative z-10 min-h-screen pt-28 pb-24 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-black/45 px-4 py-2 font-body text-xs text-gold-300 hover:bg-gold-500/10 transition"><ArrowLeft className="w-3.5 h-3.5"/>Return to AUM Universe</button>
      <header className="text-center max-w-4xl mx-auto mt-9">
        <div className="flex justify-center items-center gap-3"><span className="h-px w-16 bg-gold-500/25"/><span className="font-deva text-2xl text-gold-400">ॐ</span><span className="h-px w-16 bg-gold-500/25"/></div>
        <p className="mt-5 font-body text-[10px] uppercase tracking-[0.22em] text-gold-400">{eyebrow}</p>
        <h1 className="mt-2 font-display text-5xl sm:text-7xl font-semibold text-gold-100 text-glow">{title}</h1>
        <p className="mt-4 max-w-3xl mx-auto font-body text-sm sm:text-base leading-relaxed text-gold-200/65">{subtitle}</p>
      </header>
      {children}
    </div>
  </main>
}

export function ItihasaPage({ onBack, onOpenEpic }: { onBack:()=>void; onOpenEpic:(k:'ramayana'|'mahabharata')=>void }) {
  return <PageFrame eyebrow="ITIHĀSA · इतिहास" title="Rāmāyaṇa & Mahābhārata" subtitle="Enter the two great Itihāsa traditions through dedicated AUM chambers, structured text, principal figures, sacred geography and interactive relationship trees." onBack={onBack}>
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {[['Rāmāyaṇa','रामायणम्','Maharṣi Vālmīki','7 Kāṇḍas','The life and dharmic journey of Śrī Rāma, Sītā, Lakṣmaṇa, Bharata and the wider Rāma tradition.','ramayana'],['Mahābhārata','महाभारतम्','Maharṣi Kṛṣṇa Dvaipāyana Vyāsa','18 Parvas','The Kuru lineage, Kurukṣetra, the Bhagavad Gītā and the many questions of Dharma explored through an immense Itihāsa.','mahabharata']].map(([name,sanskrit,author,count,desc,key])=><button key={key} onClick={()=>onOpenEpic(key as 'ramayana'|'mahabharata')} className="text-left rounded-[2rem] border border-gold-500/20 bg-gradient-to-b from-[#120d24]/90 to-black/60 p-7 hover:border-gold-400/55 hover:-translate-y-1 transition-all shadow-2xl">
        <span className="font-deva text-gold-400">{sanskrit}</span><h2 className="mt-2 font-display text-3xl text-gold-100">{name}</h2><p className="mt-2 font-body text-xs text-gold-400/70">{author} · {count}</p><p className="mt-5 font-body text-sm leading-relaxed text-gold-200/65">{desc}</p><span className="inline-flex mt-6 items-center gap-2 rounded-full border border-gold-400/25 px-4 py-2 text-xs text-gold-300">Open dedicated chamber →</span>
      </button>)}
    </div>
    <div className="grid md:grid-cols-3 gap-4 mt-8">{['People & relationships','Kāṇḍas / Parvas','Sacred geography'].map((x,i)=><TiltCard3D key={x} intensity={6}><div className="rounded-2xl border border-gold-500/15 bg-black/45 p-5"><p className="font-body text-[10px] uppercase tracking-widest text-gold-400">0{i+1}</p><h3 className="mt-2 font-display text-xl text-gold-100">{x}</h3><p className="mt-2 text-xs font-body text-gold-300/60">Structured entries are separated from interpretation and tradition-specific claims.</p></div></TiltCard3D>)}</div>
  </PageFrame>
}

export function PuranaPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="PURĀṆA · पुराण" title="The 18 Mahāpurāṇas" subtitle="A dedicated index of the Mahāpurāṇa tradition. AUM keeps traditional attribution and textual description distinct from later editorial classifications; verse counts can vary by recension and edition." onBack={onBack}><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">{PURANAS.map((p,i)=><TiltCard3D key={p} intensity={5}><article className="rounded-2xl border border-gold-500/15 bg-black/45 p-5 h-full"><span className="font-body text-[9px] text-gold-500/70">{String(i+1).padStart(2,'0')}</span><h3 className="mt-2 font-display text-xl text-gold-100">{p} Purāṇa</h3><p className="mt-2 font-body text-xs leading-relaxed text-gold-300/60">AUM entry: title, traditional associations, major themes, deities and textual context to be expanded with edition-specific sources.</p></article></TiltCard3D>)}</div></PageFrame> }

export function DevataPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="DEVATĀ · देवता" title="Devas & Devīs" subtitle="A living index of Hindu forms of worship, traditions, iconography, texts, festivals and sacred places — presented with sampradāya context rather than flattening distinct traditions." onBack={onBack}><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">{DEVATAS.map(([name,sa,img,desc])=><TiltCard3D key={name} intensity={7}><article className="rounded-[1.7rem] border border-gold-500/20 bg-gradient-to-b from-[#120d25] to-black/70 overflow-hidden h-full">{img ? <div className="h-48 bg-[#f5efe4] flex items-center justify-center overflow-hidden"><img src={img} alt={name} className="w-full h-full object-contain" loading="lazy" onError={(event) => { event.currentTarget.parentElement?.classList.add('hidden') }} /></div> : null}<div className="p-6"><div className="w-12 h-12 rounded-full border border-gold-400/30 bg-gold-500/10 flex items-center justify-center font-deva text-xl text-gold-300">{sa.slice(0,1)}</div><p className="mt-5 font-deva text-sm text-gold-400">{sa}</p><h3 className="font-display text-2xl text-gold-100">{name}</h3><p className="mt-3 font-body text-sm leading-relaxed text-gold-200/65">{desc}</p><div className="mt-5 flex gap-2 flex-wrap"><span className="pill">Texts</span><span className="pill">Temples</span><span className="pill">Festivals</span></div></div></article></TiltCard3D>)}</div></PageFrame> }

export function SmritiPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="SMṚTI · स्मृति" title="Tolerance of Hindus" subtitle="Hindu civilizational memory includes pluralism and coexistence, as well as difficult chapters of violence, displacement, temple loss, resistance and cultural survival. AUM distinguishes historical records, traditional accounts, allegations and unresolved claims." onBack={onBack}><ToleranceSection/><SmritiSection/><AttacksOnHindusSection/><LoveJihadSection/></PageFrame> }
export function YoungSeekersPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="YOUNG SEEKERS · बाल साधक" title="A Little Universe for Young Minds" subtitle="A dedicated interactive space for children and young learners to discover stories, ślokas, Sanskrit, festivals, temples, values and the living traditions of Sanātana Dharma." onBack={onBack}><YoungSeekersSection/></PageFrame> }
export function ExplorePage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="EXPLORE · अन्वेषण" title="AUM Knowledge Explorer" subtitle="Search and enter the interconnected domains of Śāstra, Devatā, Tīrtha, Itihāsa, Purāṇa, Dharma, Bhakti, Smṛti and source-aware inquiry." onBack={onBack}><ExploreSection/></PageFrame> }
export function ShastraPage({ onBack, onOpenEpic }:{onBack:()=>void; onOpenEpic:(k:'ramayana'|'mahabharata')=>void}) { return <PageFrame eyebrow="ŚĀSTRA · शास्त्र" title="Scriptures & Śāstra" subtitle="Veda, Upaniṣad, Itihāsa, Purāṇa, Darśana, Gītā, Dharmaśāstra, Āgama, Mantra and Stotra — organised with source-aware descriptions." onBack={onBack}><ScripturesSection onOpenEpic={onOpenEpic}/></PageFrame> }
export function TirthaPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="TĪRTHA · तीर्थ" title="Sacred Geography" subtitle="Explore Hindu sacred places, temple traditions, architecture, festivals and historical context. Traditional significance is kept distinct from archaeological or inscriptional claims." onBack={onBack}><TempleAtlasSection/></PageFrame> }
export function VerifyPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="AUM VERIFY · सत्यापन" title="Read With Context. Ask Without Fear. Verify With Sources." subtitle="A source-aware interface for Sanskrit quotations, scripture claims, historical claims, temple claims and attributions. Unknown claims are never presented as verified." onBack={onBack}><AUMVerifySection/></PageFrame> }
const DHARMA = [
 ['Dharma','धर्म','That which sustains order, duty, right conduct and the conditions of a flourishing life; its meaning is context-sensitive.'],
 ['Karma','कर्म','Action and its consequences, treated across many Hindu traditions with distinct philosophical explanations.'],
 ['Mokṣa','मोक्ष','Liberation from saṃsāra; the understanding and path differ among Vedānta and other traditions.'],
 ['Puruṣārtha','पुरुषार्थ','The four aims of life: Dharma, Artha, Kāma and Mokṣa.'],
 ['Yoga','योग','Disciplined paths of practice and realization, including systems described in texts such as the Yoga Sūtra and Gītā.'],
 ['Bhakti','भक्ति','Devotion and loving orientation toward the chosen form of the Divine, expressed through many sampradāyas.'],
 ['Jñāna','ज्ञान','Knowledge or realization; especially central in philosophical and Vedāntic paths of liberation.'],
 ['Sevā','सेवा','Selfless service, widely practiced as an expression of Dharma and devotion.'],
 ['Satya','सत्य','Truthfulness; a foundational ethical value in Hindu thought.'],
 ['Tapas','तपस्','Discipline, austerity and intentional spiritual effort, with meanings shaped by textual context.'],
]

export function SciencePage({ onBack }:{onBack:()=>void}) {
  return <PageFrame eyebrow="SCIENCE & KNOWLEDGE · ज्ञानविज्ञान" title="Science & Knowledge" subtitle="Study historical Indian knowledge traditions with a strict distinction between primary texts, archaeological or historical evidence, traditional interpretation and modern scientific claims." onBack={onBack}>
    <div className="mt-12 rounded-[2rem] border border-gold-500/20 bg-gradient-to-r from-[#100a25]/90 via-black/55 to-[#100a25]/90 p-6 sm:p-8">
      <div className="flex items-start gap-4"><div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center"><Atom className="w-5 h-5 text-gold-400"/></div><div><h2 className="font-display text-2xl text-gold-100">Evidence before exaggeration</h2><p className="mt-2 max-w-4xl font-body text-sm leading-relaxed text-gold-200/65">AUM treats ancient knowledge seriously without converting every traditional statement into a modern laboratory claim. Each future article should carry a source trail and an evidence status.</p></div></div>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">{SCIENCE_KNOWLEDGE.map((item)=><TiltCard3D key={item.title} intensity={5}><article className="h-full rounded-2xl border border-gold-500/15 bg-black/45 p-5"><p className="font-deva text-sm text-gold-400">{item.sanskrit}</p><h3 className="mt-1 font-display text-xl text-gold-100">{item.title}</h3><p className="mt-3 font-body text-xs leading-relaxed text-gold-300/65">{item.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{item.anchors.map(a=><span key={a} className="px-2 py-1 rounded-full border border-gold-500/15 text-[9px] font-body text-gold-400/70">{a}</span>)}</div></article></TiltCard3D>)}</div>
  </PageFrame>
}

export function DharmaPage({ onBack }:{onBack:()=>void}) { return <PageFrame eyebrow="DHARMA · धर्म" title="Dharma, Yoga & Darśana" subtitle="Explore Dharma, Karma, Mokṣa, Puruṣārthas, Yoga, Jñāna, Bhakti, Sevā, Satya, Dāna, Tapas and the classical systems of Indian philosophy." onBack={onBack}><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">{DHARMA.map(([t,sa,d])=><TiltCard3D key={t} intensity={5}><article className="rounded-2xl border border-gold-500/15 bg-black/45 p-5 h-full"><p className="font-deva text-gold-400 text-sm">{sa}</p><h3 className="mt-1 font-display text-xl text-gold-100">{t}</h3><p className="mt-2 font-body text-xs leading-relaxed text-gold-300/60">{d}</p></article></TiltCard3D>)}</div><ToleranceSection/></PageFrame> }
