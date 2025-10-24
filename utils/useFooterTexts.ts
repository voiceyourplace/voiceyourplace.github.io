import { useLocale } from './hooks'

export type FooterTexts = {
  pages: string
  curtea: string
  slatina: string
  audioGuide: string
  community: string
  project: string
  contact: string
  followUs: string
  contactLabel: string
  email: string
  copyright: string
}

const texts: Record<'en' | 'ro', FooterTexts> = {
  en: {
    pages: 'PAGES:',
    curtea: 'Curtea de Argeș',
    slatina: 'Slatina',
    audioGuide: 'Audio Guide',
    community: 'Community',
    project: 'Project',
    contact: 'Contact',
    followUs: 'Follow us:',
    contactLabel: 'CONTACT:',
    email: 'voiceyourplace@gmail.com',
    copyright: '©VoiceYourPlace 2025',
  },
  ro: {
    pages: 'PAGINI:',
    curtea: 'Curtea de Argeș',
    slatina: 'Slatina',
    audioGuide: 'Audio Ghid',
    community: 'Comunitate',
    project: 'Proiect',
    contact: 'Contact',
    followUs: 'Urmăriți-ne pe:',
    contactLabel: 'CONTACT:',
    email: 'voiceyourplace@gmail.com',
    copyright: '©VoiceYourPlace 2025',
  },
}

export function useFooterTexts(): FooterTexts | undefined {
  const locale = useLocale()

  return locale ? texts[locale] : undefined
}
