import { useState } from 'react'
import { assetUrl } from '../utils/assetUrl'
import {
  BookOpen,
  Languages,
  Sparkles,
  Heart,
  Star,
  Compass,
  GraduationCap,
} from 'lucide-react'
import { useLang } from '../i18n'

interface KidsStory {
  id: string
  title: string
  sanskrit: string
  moral: string
  narrative: string
  character: string
  epic: 'Rāmāyaṇa' | 'Mahābhārata' | 'Purāṇa'
}

interface KidsSloka {
  title: string
  sanskrit: string
  meaning: string
  benefit: string
}

const STORIES: KidsStory[] = [
  {
    id: 'squirrel-setu',
    title: 'The Little Squirrel and Rāma Setu',
    sanskrit: 'सेतुबन्धने अनिलसिकता',
    character: 'Little Squirrel',
    epic: 'Rāmāyaṇa',
    moral: 'No effort is too small when offered with pure heart and devotion.',
    narrative:
      'As the mighty Vānara army carried giant boulders to bridge the ocean to Laṅkā, a tiny squirrel rolled in sand, scurried onto the bridge, and shook the tiny grains between the stones. When others smiled at its smallness, Śrī Rāma gently scooped the squirrel into His palms and stroked its back with three divine fingers, blessing that every sincere effort is equally precious in noble work.',
  },
  {
    id: 'arjuna-bird-eye',
    title: 'Arjuna’s Unbroken Concentration',
    sanskrit: 'लक्ष्यवेधैकचित्तता',
    character: 'Arjuna & Droṇa',
    epic: 'Mahābhārata',
    moral: 'Unwavering focus on your noble goal cuts through every distraction.',
    narrative:
      'Guru Droṇācārya placed a wooden bird in a tree and tested the young princes. When asked what they saw, others named the tree, sky, and leaves. Only young Arjuna replied: "Gurudeva, I see neither the tree nor the branch nor the body of the bird; I see only the tiny eye of the bird." With pure focus, his arrow hit the mark flawlessly.',
  },
  {
    id: 'govardhana',
    title: 'Bāla Kṛṣṇa Lifts Govardhana Hill',
    sanskrit: 'गोवर्धनोद्धरणम्',
    character: 'Bāla Kṛṣṇa',
    epic: 'Purāṇa',
    moral: 'True strength protects the vulnerable; reverence nature rather than arrogance.',
    narrative:
      'When torrential storms threatened the village of Gokula, young Kṛṣṇa lifted the mighty Govardhana Hill on the little finger of his left hand like an umbrella. He sheltered every cow, calf, bird, and villager for seven continuous days, teaching that true leadership exists to serve and protect all life.',
  },
  {
    id: 'hanuman-leap',
    title: 'Bāla Hanumān and the Rising Sun',
    sanskrit: 'सूर्यबिम्बोद्गमः',
    character: 'Bāla Hanumān',
    epic: 'Rāmāyaṇa',
    moral: 'Fearless curiosity; dedicate youthful enthusiasm to noble service.',
    narrative:
      'Seeing the dawn sun glowing red and golden in the sky, baby Hanumān believed it to be a sweet ripe mango! With childlike joy, he leapt towards the heavens. Blessed by all the sages and celestial deities, he grew up to realize that vast energy is divine when directed towards helping others and upholding truth.',
  },
  {
    id: 'ganesha-parents',
    title: 'Gaṇeśa Circumambulates His Parents',
    sanskrit: 'मातृपितृप्रदक्षिणा',
    character: 'Bāla Gaṇeśa',
    epic: 'Purāṇa',
    moral: 'Wisdom recognizes that love and gratitude for parents encompasses the cosmos.',
    narrative:
      'When challenged to race around the universe to receive a divine fruit of wisdom, Kārttikeya flew across the globe on his swift peacock. Little Gaṇeśa smiled, folded his hands, and walked reverently around his loving parents Śiva and Pārvatī three times: "My parents are the source of all my worlds." He received the fruit of supreme discernment.',
  },
  {
    id: 'jatayu-valor',
    title: 'Jaṭāyu’s Supreme Courage',
    sanskrit: 'जटायुषः शौर्यम्',
    character: 'Jaṭāyu',
    epic: 'Rāmāyaṇa',
    moral: 'Stand up for righteousness even against overwhelming odds.',
    narrative:
      'When Rāvaṇa carried away Sītā Devī, the elderly eagle king Jaṭāyu did not hesitate for a moment. Though aged, he flew bravely into the sky to fight the ten-headed tyrant to protect innocence. Śrī Rāma later held him with deep tears of reverence and personally performed his sacred final rites as a beloved father figure.',
  },
]

const KIDS_SLOKAS: KidsSloka[] = [
  {
    title: 'Morning Awakening (Looking upon Hands)',
    sanskrit: 'कराग्रे वसते लक्ष्मीः करमध्ये सरस्वती।\nकरमूले तु गोविन्दः प्रभाते करदर्शनम्॥',
    meaning:
      'At the fingertips resides Lakṣmī (prosperity); in the palm sits Sarasvatī (knowledge); at the base rests Govinda (divine grace). Look upon your hands in the morning.',
    benefit: 'Teaches young seekers to respect their hands as sacred instruments for honest work and kind deeds.',
  },
  {
    title: 'Prayer for Daily Learning (Sarasvatī)',
    sanskrit: 'सरस्वति नमस्तुभ्यं वरदे कामरूपिणि।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥',
    meaning:
      'Salutations to Goddess Sarasvatī, giver of boons. As I begin my studies today, may I always attain deep understanding and goodness.',
    benefit: 'Inspires focus, humility, and joy when opening school books or learning a new skill.',
  },
  {
    title: 'Removing Obstacles (Lord Gaṇeśa)',
    sanskrit: 'वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    meaning:
      'O Lord with the curved trunk and immense form, radiant like millions of suns, make all noble tasks free of obstacles, always.',
    benefit: 'Instills calmness and courage when facing difficult exams, sports, or unfamiliar challenges.',
  },
  {
    title: 'Universal Well-being & Peace',
    sanskrit: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥',
    meaning:
      'May all beings everywhere be happy. May all beings be healthy. May all behold goodness. May no one suffer.',
    benefit: 'Nurtures compassion and friendship with all living beings, birds, animals, and people.',
  },
]

const SANSKRIT_KIDS_WORDS = [
  { word: 'Gaja (गजः)', meaning: 'Elephant', icon: '🐘', funFact: 'Gaṇeśa has the form of a Gaja, symbolizing great wisdom, gentle strength, and deep memory.' },
  { word: 'Dhenu (धेनुः)', meaning: 'Sacred Cow', icon: '🐄', funFact: 'Revered as Gomātā, a symbol of selfless motherly generosity and gentleness.' },
  { word: 'Mayūra (मयूरः)', meaning: 'Peacock', icon: '🦚', funFact: 'The vahana (companion mount) of Kārttikeya, adorned with radiant feather crowns.' },
  { word: 'Kamala (कमलम्)', meaning: 'Lotus Flower', icon: '🪷', funFact: 'Blooms pristine and bright above muddy water, reminding us to remain noble and cheerful.' },
  { word: 'Vṛkṣa (वृक्षः)', meaning: 'Tree', icon: '🌳', funFact: 'Provides cool shade and sweet fruits to all without asking for anything in return.' },
  { word: 'Mitra (मित्रम्)', meaning: 'Friend / Sun', icon: '🤝', funFact: 'In the Vedas, Mitra is both a trusted companion and the shining morning sun.' },
]

const GREAT_TEACHERS = [
  {
    name: 'Maharṣi Vālmīki',
    sanskrit: 'महर्षि वाल्मीकिः',
    title: 'The Ādikavi (First Poet)',
    desc: 'Composed the original Rāmāyaṇa in 24,000 melodious ślokas, giving the world the highest ideals of truth, family love, and righteous conduct.',
  },
  {
    name: 'Veda Vyāsa',
    sanskrit: 'वेद व्यासः',
    title: 'The Great Organizer of Wisdom',
    desc: 'Organized the ancient Vedic hymns into four collections and gifted humanity the 100,000 verses of the Mahābhārata, including the Bhagavad Gītā.',
  },
  {
    name: 'Gārgī Vācaknavī',
    sanskrit: 'गार्गी वाचक्नवी',
    title: 'Vedic Philosopher & Seeker',
    desc: 'Renowned philosopher in King Janaka’s court who fearlessly questioned sage Yājñavalkya on the ultimate foundation of the cosmos in the Bṛhadāraṇyaka Upaniṣad.',
  },
  {
    name: 'Āryabhaṭa',
    sanskrit: 'आर्यभटः',
    title: 'Astronomer & Mathematician',
    desc: 'Calculated the value of Pi (π) to four decimal places and explained that the Earth rotates daily on its axis, over 1,500 years ago.',
  },
]

const SACRED_SYMBOLS = [
  { symbol: 'ॐ (AUM)', meaning: 'The primordial sound of the cosmos, representing waking, dream, and deep consciousness.' },
  { symbol: 'Padma (Lotus)', meaning: 'Purity and spiritual blossoming, remaining clean above earthly waters.' },
  { symbol: 'Dīpa (Sacred Lamp)', meaning: 'Light dispelling the darkness of ignorance, ignorance turned into knowledge.' },
  { symbol: 'Dharma Cakra', meaning: 'The wheel of righteousness, cosmic order, and purposeful life.' },
  { symbol: 'Kalaśa (Sacred Pot)', meaning: 'Abundance, life-giving water, and divine blessing filled with sacred leaves.' },
  { symbol: 'Triśūla (Trident)', meaning: 'Balance of wisdom, willpower, and action (Jñāna, Icchā, Kriyā).' },
]

export default function YoungSeekersSection() {
  const { t } = useLang()
  const [activeStoryIdx, setActiveStoryIdx] = useState(0)
  const [activeTab, setActiveTab] = useState<'stories' | 'slokas' | 'sanskrit' | 'values' | 'teachers' | 'symbols'>('stories')

  const currentStory = STORIES[activeStoryIdx]

  return (
    <section id="young-seekers" className="relative py-12 sm:py-20 px-4 sm:px-6 z-10 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] bg-gradient-to-b from-[#140b2f]/95 via-[#080517] to-[#04030a] border border-gold-400/30 p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_8%,rgba(232,197,107,.22),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(72,104,190,.12),transparent_28%)]" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-gold-950/40 text-gold-300 font-body text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            {t('Young Seekers · Wisdom for Curious Minds')}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-100 text-glow">
            {t('Young Seekers Universe')}
          </h2>
          <p className="mt-3 font-body text-sm sm:text-base text-gold-200/75 leading-relaxed">
            {t('Explore timeless stories, melodic daily ślokas, playful Sanskrit words, and inspiring dharmic values specially curated for young learners and families.')}
          </p>
        </div>

        {/* Hero Devotional Illustration Banner */}
        <div className="relative mt-8 max-w-4xl mx-auto z-10">
          <div className="relative rounded-[2rem] overflow-hidden border border-gold-400/30 bg-black/50 shadow-[0_0_50px_rgba(232,197,107,.15)]">
            <img
              src={assetUrl('assets/young-seekers/young-seekers-trio.png')}
              alt="Bāla Kṛṣṇa, Bāla Hanumān and Bāla Gaṇeśa together in a child-friendly sacred illustration"
              className="relative block w-full h-auto object-cover max-h-[360px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-body text-gold-200">
              <span className="font-display text-base font-bold text-gold-100">
                Bāla Kṛṣṇa · Bāla Hanumān · Bāla Gaṇeśa
              </span>
              <span className="text-[11px] text-gold-400/70 hidden sm:inline">
                Embodiments of Divine Joy, Strength, and Wisdom
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 relative z-10">
          {[
            { key: 'stories', label: 'Sacred Stories', icon: BookOpen },
            { key: 'slokas', label: 'Daily Ślokas', icon: Sparkles },
            { key: 'sanskrit', label: 'Sanskrit for Kids', icon: Languages },
            { key: 'values', label: 'Dharmic Values', icon: Heart },
            { key: 'teachers', label: 'Great Thinkers', icon: GraduationCap },
            { key: 'symbols', label: 'Sacred Symbols', icon: Compass },
          ].map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-body whitespace-nowrap transition-all flex items-center gap-2 border ${
                  active
                    ? 'bg-gold-500/25 border-gold-400 text-gold-100 shadow-[0_0_12px_rgba(232,197,107,0.3)] font-semibold'
                    : 'bg-black/40 border-gold-500/15 text-gold-300/70 hover:border-gold-400/40 hover:text-gold-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-gold-400" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab 1: STORIES */}
        {activeTab === 'stories' && (
          <div className="mt-8 grid lg:grid-cols-12 gap-6 relative z-10 items-start">
            <div className="lg:col-span-4 space-y-2.5">
              <span className="font-body text-[10px] uppercase tracking-wider text-gold-400 font-bold block mb-2">
                Choose a Sacred Tale
              </span>
              {STORIES.map((s, idx) => {
                const isSelected = activeStoryIdx === idx
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-gold-500/20 border-gold-400 text-gold-100 ring-2 ring-gold-400/40 shadow-lg'
                        : 'bg-black/40 border-gold-500/15 text-gold-300/70 hover:border-gold-400/30 hover:text-gold-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-deva text-xs text-gold-400">{s.sanskrit}</span>
                      <span className="font-body text-[10px] uppercase px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 font-semibold">
                        {s.epic}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold mt-1 text-gold-100">{s.title}</h4>
                  </button>
                )
              })}
            </div>

            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-gold-400/35 bg-black/60 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-deva text-lg text-gold-400">{currentStory.sanskrit}</span>
                <span className="font-body text-xs text-gold-300 px-2.5 py-1 rounded-full border border-gold-500/20 bg-black/40">
                  {currentStory.epic} · {currentStory.character}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-2">
                {currentStory.title}
              </h3>
              <div className="mt-4 p-4 rounded-2xl bg-gold-950/40 border-l-4 border-gold-400 font-display text-sm sm:text-base italic text-gold-200">
                <strong className="not-italic text-gold-400 block mb-0.5">Moral of the Story:</strong>
                "{currentStory.moral}"
              </div>
              <p className="mt-5 font-body text-sm sm:text-base leading-relaxed text-gold-200/80">
                {currentStory.narrative}
              </p>
              <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-body text-gold-400/70">
                <span>Tradition: Authentic Itihāsa & Purāṇa narrative</span>
                <span>Values: Compassion · Humility · Courage</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: SLOKAS */}
        {activeTab === 'slokas' && (
          <div className="mt-8 grid md:grid-cols-2 gap-5 relative z-10">
            {KIDS_SLOKAS.map((sloka, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-gold-500/25 bg-black/50 gold-glow-box-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <h4 className="font-display text-lg font-bold text-gold-100">{sloka.title}</h4>
                  </div>
                  <div className="p-4 rounded-2xl bg-gold-950/40 border border-gold-500/20 text-center">
                    <p className="font-deva text-base sm:text-lg text-gold-200 leading-relaxed whitespace-pre-line">
                      {sloka.sanskrit}
                    </p>
                  </div>
                  <p className="mt-4 font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">
                    <strong className="text-gold-400">Meaning: </strong> {sloka.meaning}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gold-500/15 font-body text-[11px] text-emerald-300/80">
                  <strong className="text-gold-400">Why chant this? </strong> {sloka.benefit}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: SANSKRIT WORDS */}
        {activeTab === 'sanskrit' && (
          <div className="mt-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h3 className="font-display text-2xl font-bold text-gold-100">Simple Everyday Sanskrit Words</h3>
              <p className="mt-1 font-body text-xs text-gold-300/70">
                Explore basic Sanskrit names for sacred animals, nature, and values.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SANSKRIT_KIDS_WORDS.map((item) => (
                <div
                  key={item.word}
                  className="p-4 rounded-2xl border border-gold-500/20 bg-black/45 text-center flex flex-col items-center justify-between gold-glow-box-hover transition"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <div>
                    <span className="font-deva text-sm font-bold text-gold-200 block">{item.word}</span>
                    <span className="font-body text-xs text-gold-300/80 block mt-0.5">{item.meaning}</span>
                  </div>
                  <p className="mt-3 pt-2 border-t border-gold-500/15 font-body text-[10px] text-gold-400/70 leading-tight">
                    {item.funFact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: VALUES */}
        {activeTab === 'values' && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {[
              { title: 'Satya (सत्यम्)', subtitle: 'Speaking the Truth with Kindness', desc: 'Always telling the truth and keeping promises, but speaking with sweetness that uplifts others.' },
              { title: 'Dayā (दया)', subtitle: 'Compassion for all Beings', desc: 'Treating animals, birds, trees, and small insects with gentleness, never harming them intentionally.' },
              { title: 'Sevā (सेवा)', subtitle: 'Helping Others Cheerfully', desc: 'Helping parents with home chores, sharing school snacks, and helping elders carry things.' },
              { title: 'Śauca (शौचम्)', subtitle: 'Cleanliness of Body & Mind', desc: 'Keeping books and bedroom neat, washing hands before eating, and speaking clean words.' },
              { title: 'Dhairya (धैर्यम्)', subtitle: 'Courage in Challenging Times', desc: 'Staying calm and brave when learning difficult subjects or facing new situations.' },
              { title: 'Viveka (विवेकः)', subtitle: 'Choosing Good over Easy', desc: 'Using your inner sense of right and wrong to pick healthy food, good friends, and honest actions.' },
            ].map((v) => (
              <div
                key={v.title}
                className="p-5 rounded-2xl border border-gold-500/20 bg-black/45 gold-glow-box-hover transition flex flex-col justify-between"
              >
                <div>
                  <span className="font-deva text-base font-bold text-gold-300 block">{v.title}</span>
                  <h4 className="font-display text-base font-semibold text-gold-100 mt-1">{v.subtitle}</h4>
                  <p className="mt-2.5 font-body text-xs text-gold-200/75 leading-relaxed">{v.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-gold-400">
                  <Star className="w-3 h-3 text-gold-400" /> Young Seeker Habit
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: GREAT THINKERS */}
        {activeTab === 'teachers' && (
          <div className="mt-8 grid sm:grid-cols-2 gap-5 relative z-10">
            {GREAT_TEACHERS.map((teacher) => (
              <div
                key={teacher.name}
                className="p-6 rounded-3xl border border-gold-500/25 bg-black/50 gold-glow-box-hover transition"
              >
                <div className="flex items-center justify-between">
                  <span className="font-deva text-sm text-gold-400 font-semibold">{teacher.sanskrit}</span>
                  <span className="font-body text-[11px] text-gold-300 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                    {teacher.title}
                  </span>
                </div>
                <h4 className="font-display text-xl font-bold text-gold-100 mt-2">{teacher.name}</h4>
                <p className="mt-3 font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed">
                  {teacher.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: SACRED SYMBOLS */}
        {activeTab === 'symbols' && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {SACRED_SYMBOLS.map((s) => (
              <div
                key={s.symbol}
                className="p-5 rounded-2xl border border-gold-500/20 bg-black/45 gold-glow-box-hover transition"
              >
                <h4 className="font-display text-lg font-bold text-gold-300">{s.symbol}</h4>
                <p className="mt-2 font-body text-xs text-gold-200/80 leading-relaxed">{s.meaning}</p>
              </div>
            ))}
          </div>
        )}

        {/* Footer badges */}
        <div className="relative mt-10 pt-6 border-t border-gold-500/15 flex flex-wrap justify-center gap-3 text-[11px] font-body text-gold-400/80 z-10">
          <span className="px-3.5 py-1 rounded-full border border-gold-500/20 bg-black/30">
            Family & Parent Friendly
          </span>
          <span className="px-3.5 py-1 rounded-full border border-gold-500/20 bg-black/30">
            Authentic Sourced Ślokas
          </span>
          <span className="px-3.5 py-1 rounded-full border border-gold-500/20 bg-black/30">
            Living Dharmic Continuity
          </span>
        </div>
      </div>
    </section>
  )
}
