import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Lightbulb, AlertTriangle } from 'lucide-react'
import TiltCard3D from './TiltCard3D'

interface DifficultQuestion {
  id: string
  question: string
  category: 'Theodicy & Evil' | 'Science & Ritual' | 'Social & Historical' | 'Philosophy & Logic'
  shortAnswer: string
  deepAnswer: string
  scripturalResponse: {
    text: string
    source: string
    transliteration: string
  }
  perspectiveType: 'Advaita' | 'Dvaita' | 'Vishishtadvaita' | 'Common'
}

const DIFFICULT_QUESTIONS: DifficultQuestion[] = [
  {
    id: 'q1',
    question: 'If God (Brahman) is all-good and all-powerful, why does suffering exist?',
    category: 'Theodicy & Evil',
    shortAnswer: 'Vedanta does not posit a personal God who could "prevent" suffering while remaining omnipotent. Suffering arises from avidyā (ignorance) and karma — not from a divine will that chooses to allow it.',
    deepAnswer: 'Advaita Vedanta resolves this not by defending a theistic paradox, but by reframing the question. Brahman — the undivided Absolute — has no will, no agency, no partiality. Suffering belongs to the realm of Māyā (phenomenal reality). The jīva (individual soul) bound by karma and avidyā experiences suffering as real. Liberation (Moksha) means realizing this very self is Brahman — the witness of suffering, not its victim. Vishishtadvaita posits that karma is the medium through which Ishvara (Personal God) creates conditions for souls to evolve toward Bhakti and ultimately liberation.',
    scripturalResponse: {
      text: 'दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥',
      source: 'Bhagavad Gītā 2.56',
      transliteration: 'Duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ | vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate ||',
    },
    perspectiveType: 'Common',
  },
  {
    id: 'q2',
    question: 'Does Sanātana Dharma support the caste system and untouchability?',
    category: 'Social & Historical',
    shortAnswer: 'The original Vedic concept of Varṇa was based on guṇa (quality) and karma (action), not birth. The degeneration into birth-based caste and untouchability is a historical deviation condemned even within the tradition.',
    deepAnswer: 'The Purusha Sūkta of the Rigveda describes Varṇa as divisions of function — Brahmin (intellect/teaching), Kshatriya (governance/protection), Vaishya (commerce/agriculture), Shudra (service/crafts). Crucially, the Mahābhārata explicitly states (Vana Parva 177) that a person becomes a Brahmin by character (śīla) and conduct (vṛtta), not birth. The Bhagavata Purāṇa identifies sages of "lower" birth as the highest. Untouchability has no sanction in the Shruti (revealed scriptures). Major reform movements — from Alvars, Veerashaivas, Bhakti saints, and Ramakrishna to Vivekananda and Ambedkar\'s own engagement with Buddhism — all challenged this. Constitutional India, rooted in the tradition of Dharma, abolished untouchability in 1950.',
    scripturalResponse: {
      text: 'जन्मना जायते शूद्रः संस्कारात् द्विज उच्यते। वेद-पाठात् भवेद् विप्रः ब्रह्म जानातीति ब्राह्मणः॥',
      source: 'Mahābhārata, Vana Parva 177',
      transliteration: 'Janmanā jāyate śūdraḥ saṁskārāt dvija ucyate | veda-pāṭhāt bhavet vipraḥ brahma jānātīti brāhmaṇaḥ ||',
    },
    perspectiveType: 'Common',
  },
  {
    id: 'q3',
    question: 'How can idol worship (mūrti pūjā) be spiritually valid? Is it not superstition?',
    category: 'Philosophy & Logic',
    shortAnswer: 'Mūrti pūjā is not superstition but a sophisticated practice of saguṇa upāsana — focusing the mind\'s inherent tendency toward form on a consecrated symbol of the Absolute. It is a training wheel, not the final destination.',
    deepAnswer: 'The Chāndogya Upaniṣad teaches "tat tvam asi" — you are That. But the untrained mind cannot directly meditate on a formless Absolute. Mūrti pūjā provides a specific locus of consciousness — a murti is ritually consecrated (prāṇa-pratiṣṭhā) and becomes a living symbol of divine attributes. The devotee projects the divine, then receives that projection. This is not fundamentally different from a physicist thinking through equations via symbols on a board. Ramakrishna Paramahamsa, one of the greatest mystics of the 19th century, experienced direct visions through mūrti pūjā. Ādi Śaṅkarācārya — who taught non-dualism — also composed devotional hymns to deities, recognizing saguṇa worship as valid on the path.',
    scripturalResponse: {
      text: 'यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति। तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्॥',
      source: 'Bhagavad Gītā 7.21',
      transliteration: 'Yo yo yāṁ yāṁ tanuṁ bhaktaḥ śraddhayārcitum icchati | tasya tasyācalāṁ śraddhāṁ tām eva vidadhāmy aham ||',
    },
    perspectiveType: 'Common',
  },
  {
    id: 'q4',
    question: 'How do we reconcile the age of the universe in modern science with Vedic cosmology?',
    category: 'Science & Ritual',
    shortAnswer: 'Vedic cosmic timescales are remarkably compatible with modern cosmology — far more so than the cosmologies of most other ancient traditions. A Brahma kalpa spans 4.32 billion years, virtually identical to the age of the Earth.',
    deepAnswer: 'Vedic cosmology operates on cycles (Yugas, Manvantaras, Kalpas). A single Kalpa is 4.32 billion years — the Daytime of Brahma. Modern science dates the Earth at approximately 4.54 billion years and the universe at 13.8 billion years. These numbers are within the cosmological framework described in the Purāṇas. Carl Sagan explicitly noted in "Cosmos" (1980): "The Hindu religion is the only one of the world\'s great faiths dedicated to the idea that the cosmos itself undergoes an immense number of deaths and rebirths. It is the only religion in which the time scales correspond, to those of modern scientific cosmology." The Pulsating Universe theory in physics also resonates with the Vedic concept of cyclical creation-dissolution (Sṛṣṭi-Pralaya).',
    scripturalResponse: {
      text: 'सहस्रयुगपर्यन्तमहर्यद् ब्रह्मणो विदुः। रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः॥',
      source: 'Bhagavad Gītā 8.17',
      transliteration: 'Sahasra-yuga-paryantam aharyad brahmaṇo viduḥ | rātriṁ yuga-sahasrāntāṁ te\'horātra-vido janāḥ ||',
    },
    perspectiveType: 'Common',
  },
  {
    id: 'q5',
    question: 'If karma determines your fate, how is free will possible?',
    category: 'Philosophy & Logic',
    shortAnswer: 'Karma is not determinism — it is a law of causation. Past karma conditions present circumstances, but present choices create future karma. Free will and karma are complementary, not contradictory.',
    deepAnswer: 'The Vedantic view distinguishes prārabdha karma (the portion of past karma bearing fruit now, which cannot be altered), sañcita karma (accumulated karma in storage), and āgāmi karma (karma created by present actions). Āgāmi karma is the domain of free will. The Bhagavad Gītā does not teach fatalism — it calls Arjuna to action (karma yoga). Śrī Rāmānuja (Vishishtadvaita) holds that Ishvara\'s grace works through — not against — individual effort and free will. Even Advaita acknowledges that from the relative perspective, the jīva has agency and responsibility. The Yoga Vāsiṣṭha explicitly teaches: "You are the creator of your own destiny through your own will and effort."',
    scripturalResponse: {
      text: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
      source: 'Bhagavad Gītā 6.5',
      transliteration: 'Uddhared ātmanātmānaṁ nātmānam avasādayet | ātmaiva hy ātmano bandhuḥ ātmaiva ripur ātmanaḥ ||',
    },
    perspectiveType: 'Common',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Theodicy & Evil': '#c98bd0',
  'Science & Ritual': '#6fb7c9',
  'Social & Historical': '#f0833e',
  'Philosophy & Logic': '#e8c56b',
}

export default function DifficultQuestionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>('q1')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Theodicy & Evil', 'Science & Ritual', 'Social & Historical', 'Philosophy & Logic']
  const filtered = activeCategory === 'All'
    ? DIFFICULT_QUESTIONS
    : DIFFICULT_QUESTIONS.filter(q => q.category === activeCategory)

  return (
    <section id="difficult-questions" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-body text-xs uppercase tracking-widest2 font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
          Critical Inquiry
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow section-title-accent">
          Difficult Questions, Honest Answers
        </h2>
        <p className="mt-6 font-body text-sm sm:text-base text-gold-200/70 leading-relaxed font-light">
          Sanātana Dharma has always welcomed rigorous philosophical inquiry (tarka and mīmāṃsā). 
          Here, the hardest questions are engaged thoughtfully — with scriptural grounding, multiple darshana 
          perspectives, and intellectual honesty.
        </p>

        {/* Disclaimer Banner */}
        <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-left text-xs font-body text-amber-200/80">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            These responses reflect established darshana traditions (Advaita, Vishishtadvaita, Dvaita) and 
            traditional scholarly interpretation. They aim to represent the tradition honestly, not to provide 
            dogmatic final answers to questions that remain alive in ongoing philosophical debate.
          </span>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-body transition-all border ${
                activeCategory === cat
                  ? 'bg-gold-500/20 border-gold-400 text-gold-200'
                  : 'bg-black/40 border-gold-500/15 text-gold-400/70 hover:text-gold-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Questions */}
      <div className="flex flex-col gap-4">
        {filtered.map((q, idx) => {
          const isExpanded = expandedId === q.id
          const catColor = CATEGORY_COLORS[q.category] || '#e8c56b'
          return (
            <TiltCard3D key={q.id} intensity={isExpanded ? 3 : 8} glare={false} className={`reveal reveal-delay-${Math.min(idx + 1, 5)}`}>
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-gradient-to-b from-[#100a2b]/95 via-[#07051a] to-[#04030a] border-gold-400/50 shadow-[0_0_30px_rgba(232,197,107,0.12)]'
                    : 'bg-black/50 border-gold-500/15 hover:border-gold-500/30'
                }`}
              >
                {/* Question Header */}
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-body font-semibold uppercase tracking-wider"
                        style={{ backgroundColor: `${catColor}20`, color: catColor, border: `1px solid ${catColor}40` }}
                      >
                        {q.category}
                      </span>
                    </div>
                    <h3 className={`font-display text-lg sm:text-xl font-bold leading-snug ${isExpanded ? 'text-gold-100' : 'text-gold-200'}`}>
                      {q.question}
                    </h3>
                    {!isExpanded && (
                      <p className="mt-2 font-body text-xs text-gold-300/60 line-clamp-2">
                        {q.shortAnswer}
                      </p>
                    )}
                  </div>
                  <div className={`shrink-0 mt-1 p-1.5 rounded-full border transition-all ${
                    isExpanded ? 'bg-gold-500/20 border-gold-400' : 'bg-black/40 border-gold-500/20'
                  }`}>
                    {isExpanded
                      ? <ChevronUp className="w-4 h-4 text-gold-300" />
                      : <ChevronDown className="w-4 h-4 text-gold-400" />
                    }
                  </div>
                </button>

                {/* Expanded Answer */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 space-y-5 border-t border-gold-500/15 pt-5">
                    {/* Short Answer Summary */}
                    <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/25">
                      <span className="font-body text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-1.5 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        Summary Response
                      </span>
                      <p className="font-body text-sm text-gold-200/90 leading-relaxed font-medium">
                        {q.shortAnswer}
                      </p>
                    </div>

                    {/* Deep Answer */}
                    <div>
                      <span className="font-body text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-2">
                        Philosophical Deep Dive
                      </span>
                      <p className="font-body text-sm text-gold-200/80 leading-relaxed">
                        {q.deepAnswer}
                      </p>
                    </div>

                    {/* Scriptural Anchor */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-gold-500/20">
                      <span className="font-body text-[11px] uppercase tracking-wider text-gold-500 font-semibold block mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                        Scriptural Reference
                      </span>
                      <p className="font-deva text-base sm:text-lg text-gold-100 font-medium tracking-devanagari leading-relaxed">
                        {q.scripturalResponse.text}
                      </p>
                      <p className="font-body text-xs text-gold-400/80 italic mt-2">
                        {q.scripturalResponse.transliteration}
                      </p>
                      <span className="inline-block mt-2 font-body text-[11px] text-gold-500 font-semibold">
                        — {q.scripturalResponse.source}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </TiltCard3D>
          )
        })}
      </div>
    </section>
  )
}
