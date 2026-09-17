import { PARVAS_PART_1 } from './mahabharataParvas1'
import { PARVAS_PART_2 } from './mahabharataParvas2'
import { PARVAS_PART_3 } from './mahabharataParvas3'
import {
  MahabharataParvaDetail,
  ParvaEpisode,
  MAHABHARATA_AUTHOR,
  BORI_SCHOLARLY_STANDARDS,
} from './mahabharataData'

export type { MahabharataParvaDetail, ParvaEpisode }
export { MAHABHARATA_AUTHOR, BORI_SCHOLARLY_STANDARDS }

export const MAHABHARATA_PARVAS: MahabharataParvaDetail[] = [
  ...PARVAS_PART_1,
  ...PARVAS_PART_2,
  ...PARVAS_PART_3,
]

export function getParvaById(id: string): MahabharataParvaDetail | undefined {
  return MAHABHARATA_PARVAS.find((p) => p.id === id)
}

export function getParvaByNumber(num: number): MahabharataParvaDetail | undefined {
  return MAHABHARATA_PARVAS.find((p) => p.number === num)
}
