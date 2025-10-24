// Generic type for objects with exactly 'en' and 'ro' keys, both with the same type
export type BilingualContent<T> = {
  en: T
  ro: T
}

export type Locale = 'en' | 'ro'

export type Cities = 'curtea-de-arges' | 'slatina'

export const CURTEA_DE_ARGES_PAGES = [
  'biserica-domneasca',
  'san-nicoara',
  'manastirea-curtea-de-arges',
  'olari',
  'gara-regala',
  'casa-norocea',
] as const

export type CurteaDeArgesPage = (typeof CURTEA_DE_ARGES_PAGES)[number]

export const SLATINA_PAGES = [
  'biserica-sfanta-treime',
  'centru-vechi-slatina',
  'casa-hanciu',
  'cinematograf-victoria',
  'casa-fantaneanu',
  'podul-olt',
] as const

export type SlatinaPage = (typeof SLATINA_PAGES)[number]

export const AUDIO_GUIDE_PAGES = ['audio-guide', 'audio-guide-slatina'] as const

export type AudioGuidePage = (typeof AUDIO_GUIDE_PAGES)[number]
