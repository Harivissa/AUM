import { CHARACTERS_PART_1, RamayanaCharacter } from './ramayanaCharacters1'
import { CHARACTERS_PART_2 } from './ramayanaCharacters2'

export type { RamayanaCharacter } from './ramayanaCharacters1'

export const RAMAYANA_CHARACTERS: RamayanaCharacter[] = [
  ...CHARACTERS_PART_1,
  ...CHARACTERS_PART_2,
]

export interface CharacterCategoryMeta {
  id: string
  name: {
    en: string
    te: string
    hi: string
    sa: string
    ta: string
    kn: string
  }
}

export const CHARACTER_CATEGORIES: CharacterCategoryMeta[] = [
  {
    id: 'all',
    name: {
      en: 'All 25 Characters',
      te: 'మొత్తం 25 పాత్రలు',
      hi: 'सभी २५ पात्र',
      sa: 'सर्वे २५ पात्राणि',
      ta: 'அனைத்து 25 பாத்திரங்கள்',
      kn: 'ಎಲ್ಲಾ ೨೫ ಪಾತ್ರಗಳು',
    },
  },
  {
    id: 'ayodhya',
    name: {
      en: 'Ayodhyā Dynasty',
      te: 'అయోధ్య రాజవంశం',
      hi: 'अयोध्या राजकुल',
      sa: 'अयोध्याराजकुलम्',
      ta: 'அயோத்தி ராஜவம்சம்',
      kn: 'ಅಯೋಧ್ಯ ರಾಜವಂಶ',
    },
  },
  {
    id: 'allies',
    name: {
      en: 'Allies & Devotees',
      te: 'మిత్రులు & భక్తులు',
      hi: 'मित्र एवं भक्तगण',
      sa: 'मित्राणि भक्ताश्च',
      ta: 'நண்பர்கள் & பக்தர்கள்',
      kn: 'ಮಿತ್ರರು & ಭಕ್ತರು',
    },
  },
  {
    id: 'gurus',
    name: {
      en: 'Gurus & Sages',
      te: 'గురువులు & మహర్షులు',
      hi: 'गुरु एवं महर्षि',
      sa: 'गुरवः ऋषयश्च',
      ta: 'குருமார்கள் & முனிவர்கள்',
      kn: 'ಗುರುಗಳು & ಮಹರ್ಷಿಗಳು',
    },
  },
  {
    id: 'lanka',
    name: {
      en: 'Laṅkā',
      te: 'లంకా పాత్రలు',
      hi: 'लंका पक्ष',
      sa: 'लङ्कापात्राणि',
      ta: 'இலங்கை பாத்திரங்கள்',
      kn: 'ಲಂಕಾ ಪಾತ್ರಗಳು',
    },
  },
  {
    id: 'nextgen',
    name: {
      en: 'Next Generation',
      te: 'తర్వాతి తరం',
      hi: 'भावी पीढ़ी',
      sa: 'उत्तरवंशजाः',
      ta: 'அடுத்த தலைமுறை',
      kn: 'ಮುಂದಿನ ಪೀಳಿಗೆ',
    },
  },
]
