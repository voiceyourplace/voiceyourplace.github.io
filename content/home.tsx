import { BilingualContent } from 'utils/types'

type HomeContentType = {
  title: string
  description: string
  playText: string
}

export const HomeContent: BilingualContent<HomeContentType> = {
  ro: {
    title: 'Voice Your Place,',
    description:
      'un audio ghid narat de adolescenți despre arhitectura de patrimoniu din orașul lor.',
    playText: 'Începe ascultarea',
  },
  en: {
    title: 'Voice Your Place,',
    description:
      'an audio guide narrated by teenagers about the built heritage of their town.',
    playText: 'Play',
  },
}