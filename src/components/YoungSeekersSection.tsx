import { useState } from 'react'
import { assetUrl } from '../utils/assetUrl'
import {
  BookOpen,
  Gamepad2,
  Languages,
  MapPin,
  Sparkles,
  Heart,
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
  Sun,
  Smile,
} from 'lucide-react'
import { useLang } from '../i18n'

interface KidsStory {
  id: string
  title: string
  sanskrit: string
  moral: string
  narrative: string
  character: string
}

interface KidsSloka {
  title: string
  sanskrit: string
  meaning: string
  benefit: string
}

const STORIES: KidsStory[] = [
  {
    id: 'govardhana',
    title: 'Bāla Kṛṣṇa Lifts Govardhana Hill',
    sanskrit: 'गोवर्धनोद्धरणम्',
    character: 'Bāla Kṛṣṇa',
    moral: 'True strength protects the vulnerable; reverence nature rather than pride.',
    narrative:
      'When torrential storms threatened the village of Gokula, young Kṛṣṇa lifted the mighty Govardhana Hill on the little finger of his left hand like an umbrella. He sheltered every cow, calf, bird, and villager for seven continuous days, teaching Indra that pride yields to loving protection.',
  },
  {
    id: 'hanuman-leap',
    title: 'Bāla Hanumān and the Golden Sun',
    sanskrit: 'सूर्यबिम्बोद्गमः',
    character: 'Bāla Hanumān',
    moral: 'Fearlessness in curiosity; dedicate boundless youthful energy to noble service.',
    narrative:
      'Seeing the rising morning sun glowing red and golden in the sky, baby Hanumān thought it was a sweet ripe mango! With boundless innocence and joy, he leapt into the sky. Blessed by all the Devas, he grew to understand that boundless energy is most sacred when offered to protect truth and dharma.',
  },
  {
    id: 'ganesha-parents',
    title: 'Gaṇeśa Circumambulates His Parents',
    sanskrit: 'मातृपितृप्रदक्षिणा',
    character: 'Bāla Gaṇeśa',
    moral: 'Wisdom recognizes that love and gratitude for parents encompasses the universe.',
    narrative:
      'When Śiva and Pārvatī announced a race around the entire universe to win the divine fruit of knowledge, Kārttikeya set off swiftly on his peacock. Little Gaṇeśa smiled, folded his hands, and walked reverently around his loving parents three times, saying: "My parents are the source of all my worlds." He won the fruit of supreme wisdom.',
  },
  {
    id: 'dhruva-star',
    title: 'Dhruva’s Unshakable Determination',
    sanskrit: 'ध्रुवस्य तपः',
    character: 'Bhakta Dhruva',
    moral: 'Steadfast concentration and sincerity overcome every worldly obstacle.',
    narrative:
      'Young prince Dhruva was deeply hurt by unkind words, yet instead of weeping or seeking revenge, he ventured into the forest to seek Lord Viṣṇu with pure devotion. Guided by sage Nārada, he meditated with such unbroken focus that he was granted the eternal position of the North Star (Dhruva Tāra).',
  },
]

const KIDS_SLOKAS: KidsSloka[] = [
  {
    title: 'Morning Awakening (Before Stepping out of Bed)',
    sanskrit: 'कराग्रे वसते लक्ष्मीः करमध्ये सरस्वती।\nकरमूले तु गोविन्दः प्रभाते करदर्शनम्॥',
    meaning:
      'At the tip of the hands resides Lakṣmī (prosperity); in the middle sits Sarasvatī (knowledge); at the base rests Govinda (divine grace). Look upon your hands in the morning.',
    benefit: 'Teaches children to respect their hands as sacred tools for honest work and study.',
  },
  {
    title: 'Prayer for Learning (To Goddess Sarasvatī)',
    sanskrit: 'सरस्वति नमस्तुभ्यं वरदे कामरूपिणि।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥',
    meaning:
      'Salutations to Goddess Sarasvatī, bestower of boons. As I begin my studies today, may I always attain understanding and success.',
    benefit: 'Inspires focus, humility, and eagerness to learn new knowledge every single day.',
  },
  {
    title: 'Removing Obstacles (To Lord Gaṇeśa)',
    sanskrit: 'वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    meaning:
      'O Lord with the curved trunk and immense form, radiant like millions of suns, make all my noble tasks free of obstacles, always.',
    benefit: 'Instills confidence and calmness when starting a new school test, project, or journey.',
  },
  {
    title: 'Universal Peace & Well-being',
    sanskrit: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥',
    meaning:
      'May all beings everywhere be happy. May all beings be free from illness. May all behold auspicious goodness. May no one suffer.',
    benefit: 'Builds empathy, kindness, and universal goodwill for all living beings and nature.',
  },
]

const SANSKRIT_KIDS_WORDS = [
  { word: 'Gaja (गजः)', meaning: 'Elephant', icon: '🐘', funFact: 'Ganesha has the head of a Gaja, symbolizing vast memory and intelligence.' },
  { word: 'Dhenu (धेनुः)', meaning: 'Sacred Cow', icon: '🐄', funFact: 'Honored in Sanātana Dharma as Gomātā, a symbol of selfless giving and gentle care.' },
  { word: 'Mayūra (मयूरः)', meaning: 'Peacock', icon: '🦚', funFact: 'The vahana (mount) of Kārttikeya, adorned with divine feather crests.' },
  { word: 'Kamala (कमलम्)', meaning: 'Lotus Flower', icon: '🪷', funFact: 'Rises pure and radiant from muddy pond water, teaching us to stay noble.' },
  { word: 'Vṛkṣa (वृक्षः)', meaning: 'Tree', icon: '🌳', funFact: 'Gives shade and fruit to everyone without ever asking for a return.' },
  { word: 'Mitra (मित्रम्)', meaning: 'Friend', icon: '🤝', funFact: 'Also one of the ancient Vedic names for the life-giving Sun.' },
]

export default function YoungSeekersSection() {
  const { t } = useLang()
  const [activeStoryIdx, setActiveStoryIdx] = useState(0)
  const [activeTab, setActiveTab] = useState<'stories' | 'slokas' | 'sanskrit' | 'values'>('stories')
  const [activeSlokaIdx, setActiveSlokaIdx] = useState(0)

  // Kid quiz state
  const [kidScore, setKidScore] = useState(0)
  const [kidAnswered, setKidAnswered] = useState<number[]>([])

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
              className="relative block w-full h-auto object-cover max-h-[380px]"
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
          ].map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-body whitespace-nowrap transition-all flex items-center gap-2 border ${
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
                      <span className="font-body text-[10px] uppercase text-gold-400/60 font-semibold">
                        {s.character}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold mt-1 text-gold-100">{s.title}</h4>
                  </button>
                )
              })}
            </div>

            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-gold-400/35 bg-black/60 shadow-xl">
              <span className="font-deva text-lg text-gold-400">{currentStory.sanskrit}</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100 mt-1">
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
                Click and explore basic Sanskrit names for sacred animals, nature, and values.
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
