import { KANDAS_PART_1, RamayanaKandaDetail } from './ramayanaKandasData1'
import { KANDAS_PART_2 } from './ramayanaKandasData2'

export type {
  RamayanaKandaDetail,
  KandaEpisode,
  DharmaQuestion,
  VerifiedSloka,
} from './ramayanaKandasData1'

export const RAMAYANA_KANDAS: RamayanaKandaDetail[] = [
  ...KANDAS_PART_1,
  ...KANDAS_PART_2,
]

export function getKandaById(id: string): RamayanaKandaDetail | undefined {
  return RAMAYANA_KANDAS.find((k) => k.id === id)
}
