// Generic type for objects with exactly 'en' and 'ro' keys, both with the same type
export type BilingualContent<T> = {
  en: T
  ro: T
}

export type Locale = 'en' | 'ro'

export type City = (typeof CITIES)[number]
export const CITIES = ['curtea-de-arges', 'slatina', 'sulina'] as const

export type LandmarkPage = CurteaDeArgesPage | SlatinaPage | SulinaPage

export type CurteaDeArgesPage = (typeof CURTEA_DE_ARGES_PAGES)[number]
export const CURTEA_DE_ARGES_PAGES = [
  'biserica-domneasca',
  'san-nicoara',
  'manastirea-curtea-de-arges',
  'olari',
  'gara-regala',
  'casa-norocea',
] as const

export type SlatinaPage = (typeof SLATINA_PAGES)[number]
export const SLATINA_PAGES = [
  'biserica-sfanta-treime',
  'centrul-vechi-slatina',
  'casa-hanciu',
  'cinematograful-victoria',
  'casa-fantaneanu',
  'podul-olt',
] as const

export type SulinaPage = (typeof SULINA_PAGES)[number]
export const SULINA_PAGES = [
  'palatul-comisiei-europene',
  'farul-comisiei-europene',
  'bisericile-orasului-sulina',
  'uzina-de-apa',
  'cimitirul-multietnic',
  'pasarile-deltei',
] as const

export type AudioGuidePage = (typeof AUDIO_GUIDE_PAGES)[number]
export const AUDIO_GUIDE_PAGES = [
  'audio-guide',
  'audio-guide-slatina',
  'audio-guide-sulina',
] as const
