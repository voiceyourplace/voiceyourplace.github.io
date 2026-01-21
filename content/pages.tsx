import * as React from 'react'

import { useRouter } from 'next/router'
import {
  BilingualContent,
  Locale,
  City,
  CurteaDeArgesPage,
  SLATINA_PAGES,
  SlatinaPage,
  AudioGuidePage,
  LandmarkPage,
  SulinaPage,
  SULINA_PAGES,
} from 'utils/types'

export type PageSlug =
  | CurteaDeArgesPage
  | SlatinaPage
  | SulinaPage
  | AudioGuidePage
  | 'community'
  | 'community-slatina'
  | 'project'
  | 'project-slatina'
  | 'project-sulina'
  | 'contact'

export const CURTEA_DE_ARGES_COMMUNITY_PAGES = [
  'ultima-data-pentru-totdeauna',
  'last-time-forever',
  'fata-care-a-plecat',
  'the-girl-who-left',
  'capturarea-cetatii',
  'capture-fortress',
  'batrana-hotomana',
  'old-hag',
  'parintii',
  'parents',
  'leat-6838',
  'posada',
  'impacarea-de-la-biserica-olari',
  'reconciliation-olari-church',
  'liniste',
  'silence',
  'cristian',
  'cu-dor',
  'broken-doll',
  'nu-atingeti-exponatele',
  'do-not-touch-the-exhibits',
  'tic-tac',
  'tick-tock',
  'un-nou-inceput',
  'a-new-beginning',
] as const

export type CommunityPage = (typeof CURTEA_DE_ARGES_COMMUNITY_PAGES)[number]

export const SLATINA_COMMUNITY_PAGES = [
  'regăsire',
  'coming-back',
  'vara-în-care-am-fost-doi',
  'the-summer-we-were-two',
  'cum-să-ignori-destinul',
  'how-to-ignore-destiny',
  'visând-cu-ochii-deschiși',
  'daydreaming',
  'enigma-casei-hanciu',
  'the-mystery-of-hanciu-house',
  'destin-in-sala-veche',
  'destiny-in-the-old-cinema-hall',
  'seara-întâlnirii',
  'the-night-i-met-her',
  'scenă',
  'scene',
  'o-lecție',
  'a-lesson',
  'regizorul',
  'the-director',
  'dragul-meu-prieten',
  'my-dear-friend',
  'întâlnire',
  'the-bridge-encounter',
  'podul',
  'the-bridge',
] as const

export type SlatinaCommunityPage = (typeof SLATINA_COMMUNITY_PAGES)[number]

export type CommunityStoryContentData = {
  title: string
  author: string
  footer: string
  content: React.ReactNode
  locations?: LandmarkPage[]
}

export type CommunityStoryContent = {
  [slug in CommunityPage | SlatinaCommunityPage]: Partial<
    Record<Locale, CommunityStoryContentData>
  >
}

export const useCitiesPages = (): BilingualContent<
  { title: string; href: PageSlug }[]
> => {
  return {
    ro: [
      { title: 'Curtea de Argeș', href: 'biserica-domneasca' },
      { title: 'Slatina', href: 'biserica-sfanta-treime' },
      { title: 'Sulina', href: 'palatul-comisiei-europene' },
    ],
    en: [
      { title: 'Curtea de Argeș', href: 'biserica-domneasca' },
      { title: 'Slatina', href: 'biserica-sfanta-treime' },
      { title: 'Sulina', href: 'palatul-comisiei-europene' },
    ],
  }
}

export const useOtherPages = (): BilingualContent<
  { title: string; href: PageSlug }[]
> => {
  const path = useRouter().asPath

  const shouldRedirectToSlatina = [
    ...SLATINA_PAGES,
    ...SLATINA_COMMUNITY_PAGES,
    'project-slatina',
    'community-slatina',
    'audio-guide-slatina',
  ].some((page) => decodeURIComponent(path).includes(page))

  const shouldRedirectToSulina = [
    ...SULINA_PAGES,
    'project-sulina',
    'audio-guide-sulina',
  ].some((page) => decodeURIComponent(path).includes(page))

  const audioGuideHref = shouldRedirectToSlatina
    ? 'audio-guide-slatina'
    : shouldRedirectToSulina
      ? 'audio-guide-sulina'
      : 'audio-guide'

  const communityHref: PageSlug = shouldRedirectToSlatina
    ? 'community-slatina'
    : 'community'

  const projectHref: PageSlug = shouldRedirectToSlatina
    ? 'project-slatina'
    : shouldRedirectToSulina
      ? 'project-sulina'
      : 'project'

  return {
    ro: [
      { title: 'Audio ghid', href: audioGuideHref },
      ...(!shouldRedirectToSulina ? [{ title: 'Comunitate', href: communityHref }] : []),
      { title: 'Proiect', href: projectHref },
      { title: 'Contact', href: 'contact' },
    ],
    en: [
      { title: 'Audio Guide', href: audioGuideHref },
      ...(!shouldRedirectToSulina ? [{ title: 'Community', href: communityHref }] : []),
      { title: 'Project', href: projectHref },
      { title: 'Contact', href: 'contact' },
    ],
  }
}

export const useAllPages = (): BilingualContent<
  { title: string; href: PageSlug }[]
> => {
  const citiesPages = useCitiesPages()
  const otherPages = useOtherPages()

  return {
    ro: [...citiesPages.ro, ...otherPages.ro],
    en: [...citiesPages.en, ...otherPages.en],
  }
}

export const audioGuideContent: {
  [key in City]: BilingualContent<{
    title: string
    backText: string
    backHref: LandmarkPage
    nextText: string
    nextHref: LandmarkPage
    audioSrc: string
    infoText: React.ReactNode
    imgSrc: string
    imgCaption?: string
    projectPageHref: string
    episodes: { title: string; href: LandmarkPage }[]
  }>
} = {
  'curtea-de-arges': {
    ro: {
      title: 'Despre audio ghidul Voice Your Place',
      backText: 'Casa Norocea',
      backHref: 'casa-norocea',
      nextText: 'Biserica Sfântul Nicolae Domnesc',
      nextHref: 'biserica-domneasca',
      infoText: (
        <>
          <p>
            Audio ghidul a fost realizat în cadrul Școlii de Vară Voice Your
            Place: Curtea de Argeș, de către adolescenți din comunitatea locală,
            cu sprijinul coordonatorilor de ateliere.
          </p>
          <p>
            Mulțumim participanților, colaboratorilor, voluntarilor,
            prietenilor, partenerilor, sponsorilor și tuturor celor care au
            contribuit la realizarea sa!
          </p>
        </>
      ),
      audioSrc: '/assets/audio/curtea-de-arges/Generic_Extins_Andra_RO.mp3',
      imgSrc: '/assets/img/audio-ghid-cover.jpg',
      projectPageHref: '/project',
      episodes: [
        {
          title: 'Biserica Sfântul Nicolae Domnesc',
          href: 'biserica-domneasca',
        },
        { title: 'Ruinele Bisericii Sân Nicoară', href: 'san-nicoara' },
        {
          title: 'Mănăstirea Curtea de Argeș',
          href: 'manastirea-curtea-de-arges',
        },
        { title: 'Biserica Olari', href: 'olari' },
        { title: 'Gara Regală', href: 'gara-regala' },
        { title: 'Casa Norocea', href: 'casa-norocea' },
      ],
    },
    en: {
      title: 'About the Voice Your Place Audio Guide',
      backText: 'Norocea House',
      backHref: 'casa-norocea',
      nextText: 'Royal Church',
      nextHref: 'biserica-domneasca',
      infoText: (
        <>
          <p>
            The audio guide in English was made during the Voice Your Place:
            Curtea de Arges 2024 Workshops by teenagers from the local community
            with the support of the invited coordinators.
          </p>
          <p>
            Special thanks to the participants, collaborators, volunteers,
            friends, partners, sponsors and everyone who contributed to its
            making!
          </p>
        </>
      ),
      audioSrc: '/assets/audio/curtea-de-arges/Generic_Extins_Odette_EN.mp3',
      imgSrc: '/assets/img/audio-ghid-cover.jpg',
      projectPageHref: '/project',
      // TODO: Add the episodes from the episodes object
      episodes: [
        {
          title: 'The Royal Church of Saint Nicholas',
          href: 'biserica-domneasca',
        },
        { title: 'The Ruins of Sân Nicoară Church', href: 'san-nicoara' },
        {
          title: 'The Curtea de Argeș Monastery',
          href: 'manastirea-curtea-de-arges',
        },
        { title: 'The Olari Church', href: 'olari' },
        { title: 'The Royal Railway Station', href: 'gara-regala' },
        { title: 'The Norocea House', href: 'casa-norocea' },
      ],
    },
  },
  slatina: {
    ro: {
      title: 'Despre audio ghidul Voice Your Place Slatina',
      backText: 'Podul peste Olt',
      backHref: 'podul-olt',
      nextText: 'Biserica Sfânta Treime',
      nextHref: 'biserica-sfanta-treime',
      infoText: (
        <>
          Audio ghidul a fost realizat în cadrul Atelierelor Voice Your Place
          Slatina 2025, de către adolescenți din comunitatea locală, cu
          sprijinul coordonatorilor de ateliere.
          <br />
          Mulțumim participanților, colaboratorilor, prietenilor, partenerilor,
          finanțatorilor și tuturor celor care au contribuit la realizarea sa!
        </>
      ),
      audioSrc: '/assets/audio/slatina/Generic_RO.mp3',
      imgSrc: '/assets/img/audio-ghid-slatina-cover.jpg',
      imgCaption: 'Foto: Înregistrările audio ghidului, martie 2025, Slatina',
      projectPageHref: '/project-slatina',
      episodes: [
        { title: 'Biserica Sfânta Treime', href: 'biserica-sfanta-treime' },
        { title: 'Centrul Vechi Slatina', href: 'centrul-vechi-slatina' },
        { title: 'Casa Hanciu', href: 'casa-hanciu' },
        {
          title: 'Fostul cinematograf Victoria',
          href: 'cinematograful-victoria',
        },
        { title: 'Casa Fântâneanu', href: 'casa-fantaneanu' },
        { title: 'Podul Olt', href: 'podul-olt' },
      ],
    },
    en: {
      title: 'About the Voice Your Place Slatina audio guide',
      backText: 'The bridge over the Olt river',
      backHref: 'podul-olt',
      nextText: 'The Holy Trinity Church',
      nextHref: 'biserica-sfanta-treime',
      infoText: (
        <p>
          The audio guide was made during the Voice Your Place Slatina 2025
          Workshops by teenagers from the local community with the support of
          the invited coordinators.
          <br />
          Special thanks to the participants, collaborators, friends, partners,
          funders and everyone who contributed to its making!
        </p>
      ),
      audioSrc: '/assets/audio/slatina/Generic_EN.mp3',
      imgSrc: '/assets/img/audio-ghid-slatina-cover.jpg',
      imgCaption: 'Photo: The audio guide recordings, march 2025, Slatina',
      projectPageHref: '/project-slatina',
      episodes: [
        { title: 'The Holy Trinity Church', href: 'biserica-sfanta-treime' },
        { title: `Slatina's Old Centre`, href: 'centrul-vechi-slatina' },
        { title: 'The Hanciu House', href: 'casa-hanciu' },
        {
          title: 'The former Victoria Cinema',
          href: 'cinematograful-victoria',
        },
        { title: 'The Fântâneanu House', href: 'casa-fantaneanu' },
        { title: 'The bridge over the Olt river', href: 'podul-olt' },
      ],
    },
  },
  sulina: {
    ro: {
      title: 'Despre audio ghidul Voice Your Place Sulina',
      backText: 'Pasările Deltei din zona Sulinei',
      backHref: 'pasarile-deltei',
      nextText: 'Palatul Comisiei Europene a Dunării',
      nextHref: 'palatul-comisiei-europene',
      infoText: (
        <>
          <p>
            Audio ghidul a fost realizat în cadrul Atelierelor Voice Your Place
            Sulina 2025, împreună cu adolescenți din comunitatea locală, cu
            sprijinul coordonatorilor de ateliere.
            <br />
            Mulțumim participanților, colaboratorilor, partenerilor,
            finanțatorilor și tuturor celor care au contribuit la realizarea sa!
          </p>
        </>
      ),
      audioSrc: '/assets/audio/sulina/Generic_RO.mp3',
      imgSrc: '/assets/img/placeholder.webp',
      imgCaption: 'Audio Guide Placeholder',
      projectPageHref: '/project-sulina',
      episodes: [
        {
          title: 'Palatul Comisiei Europene a Dunării',
          href: 'palatul-comisiei-europene',
        },
        {
          title: 'Farul Comisiei Europene a Dunării sau Farul Vechi',
          href: 'farul-comisiei-europene',
        },
        {
          title: 'Bisericile orașului Sulina',
          href: 'bisericile-orasului-sulina',
        },
        {
          title: 'Uzina de apa',
          href: 'uzina-de-apa',
        },
        {
          title: 'Cimitirul multietnic din Sulina',
          href: 'cimitirul-multietnic',
        },
        { title: 'Păsările Deltei din zona Sulinei', href: 'pasarile-deltei' },
      ],
    },
    en: {
      title: 'About the Voice Your Place Sulina audio guide',
      backText: 'Birds of the Delta - The Sulina area',
      backHref: 'pasarile-deltei',
      nextText: 'The European Commission of the Danube Palace',
      nextHref: 'palatul-comisiei-europene',
      infoText: (
        <p>
          The audio guide was produced during the Voice Your Place Sulina 2025
          workshops, together with teenagers from the local community and
          Tulcea, with the support of the workshop coordinators.
          <br />
          Special thanks to the participants, collaborators, partners, funders,
          and everyone who contributed to its creation!
        </p>
      ),
      audioSrc: '/assets/audio/sulina/Generic_EN.mp3',
      imgSrc: '/assets/img/placeholder.webp',
      imgCaption: 'Audio Guide Placeholder',
      projectPageHref: '/project-sulina',
      episodes: [
        {
          title: 'The European Commission of the Danube Palace',
          href: 'palatul-comisiei-europene',
        },
        {
          title: 'The Lighthouse of the European Commission of the Danube',
          href: 'farul-comisiei-europene',
        },
        {
          title: 'The Churches of Sulina',
          href: 'bisericile-orasului-sulina',
        },
        {
          title: 'The Sulina Waterworks',
          href: 'uzina-de-apa',
        },
        {
          title: 'The Cemetery of Sulina',
          href: 'cimitirul-multietnic',
        },
        {
          title: 'Birds of the Delta - The Sulina area',
          href: 'pasarile-deltei',
        },
      ],
    },
  },
}

export const communityCards: BilingualContent<
  {
    back: string
    front: string
    url: CommunityPage
  }[]
> = {
  ro: [
    {
      front: '/assets/img/community-cards/ro-comunitate-front-1.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-1.jpg',
      url: 'ultima-data-pentru-totdeauna',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-2.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-2.jpg',
      url: 'fata-care-a-plecat',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-3.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-3.jpg',
      url: 'capturarea-cetatii',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-4.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-4.jpg',
      url: 'batrana-hotomana',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-5.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-5.jpg',
      url: 'parintii',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-6.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-6.jpg',
      url: 'leat-6838',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-7.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-7.jpg',
      url: 'impacarea-de-la-biserica-olari',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-8.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-8.jpg',
      url: 'liniste',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-9.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-9.jpg',
      url: 'cristian',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-10.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-10.jpg',
      url: 'cu-dor',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-11.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-11.jpg',
      url: 'nu-atingeti-exponatele',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-12.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-12.jpg',
      url: 'tic-tac',
    },
    {
      front: '/assets/img/community-cards/ro-comunitate-front-13.jpg',
      back: '/assets/img/community-cards/ro-comunitate-back-13.jpg',
      url: 'un-nou-inceput',
    },
  ],
  en: [
    {
      front: '/assets/img/community-cards/en-comunitate-front-1.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-1.jpg',
      url: 'last-time-forever',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-2.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-2.jpg',
      url: 'the-girl-who-left',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-3.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-3.jpg',
      url: 'capture-fortress',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-4.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-4.jpg',
      url: 'old-hag',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-5.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-5.jpg',
      url: 'parents',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-6.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-6.jpg',
      url: 'posada',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-7.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-7.jpg',
      url: 'reconciliation-olari-church',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-8.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-8.jpg',
      url: 'silence',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-9.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-9.jpg',
      url: 'cristian',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-10.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-10.jpg',
      url: 'broken-doll',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-11.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-11.jpg',
      url: 'do-not-touch-the-exhibits',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-12.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-12.jpg',
      url: 'tick-tock',
    },
    {
      front: '/assets/img/community-cards/en-comunitate-front-13.jpg',
      back: '/assets/img/community-cards/en-comunitate-back-13.jpg',
      url: 'a-new-beginning',
    },
  ],
}

export const slatinaCommunityCards: BilingualContent<
  {
    back: string
    front: string
    url: SlatinaCommunityPage
  }[]
> = {
  ro: [
    {
      front: '/assets/img/community-cards-slatina/ro-front-1.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-1.jpg',
      url: 'vara-în-care-am-fost-doi',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-2.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-2.jpg',
      url: 'regăsire',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-3.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-3.jpg',
      url: 'cum-să-ignori-destinul',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-4.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-4.jpg',
      url: 'visând-cu-ochii-deschiși',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-5.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-5.jpg',
      url: 'enigma-casei-hanciu',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-6.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-6.jpg',
      url: 'destin-in-sala-veche',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-7.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-7.jpg',
      url: 'seara-întâlnirii',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-8.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-8.jpg',
      url: 'scenă',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-9.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-9.jpg',
      url: 'o-lecție',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-10.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-10.jpg',
      url: 'regizorul',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-11.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-11.jpg',
      url: 'dragul-meu-prieten',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-12.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-12.jpg',
      url: 'întâlnire',
    },
    {
      front: '/assets/img/community-cards-slatina/ro-front-13.jpg',
      back: '/assets/img/community-cards-slatina/ro-back-13.jpg',
      url: 'podul',
    },
  ],
  en: [
    {
      front: '/assets/img/community-cards-slatina/en-front-1.jpg',
      back: '/assets/img/community-cards-slatina/en-back-1.jpg',
      url: 'the-summer-we-were-two',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-2.jpg',
      back: '/assets/img/community-cards-slatina/en-back-2.jpg',
      url: 'coming-back',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-3.jpg',
      back: '/assets/img/community-cards-slatina/en-back-3.jpg',
      url: 'how-to-ignore-destiny',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-4.jpg',
      back: '/assets/img/community-cards-slatina/en-back-4.jpg',
      url: 'daydreaming',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-5.jpg',
      back: '/assets/img/community-cards-slatina/en-back-5.jpg',
      url: 'the-mystery-of-hanciu-house',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-6.jpg',
      back: '/assets/img/community-cards-slatina/en-back-6.jpg',
      url: 'destiny-in-the-old-cinema-hall',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-7.jpg',
      back: '/assets/img/community-cards-slatina/en-back-7.jpg',
      url: 'the-night-i-met-her',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-8.jpg',
      back: '/assets/img/community-cards-slatina/en-back-8.jpg',
      url: 'scene',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-9.jpg',
      back: '/assets/img/community-cards-slatina/en-back-9.jpg',
      url: 'a-lesson',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-10.jpg',
      back: '/assets/img/community-cards-slatina/en-back-10.jpg',
      url: 'the-director',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-11.jpg',
      back: '/assets/img/community-cards-slatina/en-back-11.jpg',
      url: 'my-dear-friend',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-12.jpg',
      back: '/assets/img/community-cards-slatina/en-back-12.jpg',
      url: 'the-bridge-encounter',
    },
    {
      front: '/assets/img/community-cards-slatina/en-front-13.jpg',
      back: '/assets/img/community-cards-slatina/en-back-13.jpg',
      url: 'the-bridge',
    },
  ],
}

export const communityContent: {
  [key in City]: BilingualContent<{
    title: string
    description: string
  }>
} = {
  'curtea-de-arges': {
    ro: {
      title: 'Locuri și povești',
      description:
        'Povești scrise de adolescenții participanți la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place Curtea de Argeș, în relație cu cele șase obiective de patrimoniu.',
    },
    en: {
      title: 'Places and stories',
      description:
        'Stories written by the teenagers who attended the creative writing workshop of the Voice Your Place: Curtea de Argeș Summer School, in relation with the local built heritage.',
    },
  },
  slatina: {
    ro: {
      title: 'Locuri și povești',
      description:
        'Povești scrise de adolescenții participanți la atelierul de scriere creativă din cadrul Voice Your Place Slatina, în relație cu cele șase obiective de patrimoniu.',
    },
    en: {
      title: 'Places and stories',
      description:
        'Stories written by the teenagers who attended the creative writing workshop of the Voice Your Place: Slatina, in relation with the local built heritage.',
    },
  },
  sulina: {
    ro: {
      title: 'Locuri și povești',
      description: '',
    },
    en: {
      title: 'Places and stories',
      description: '',
    },
  },
}

export const communityStoryContent: CommunityStoryContent = {
  'ultima-data-pentru-totdeauna': {
    ro: {
      title: 'Ultima dată pentru totdeauna',
      author: 'Izabela Stoica',
      content: (
        <>
          <p>
            E primăvară. E destul de frig pentru un început de martie, dar dai
            vina pe faptul că ești într-o „zonă de munte”. După o plimbare pe
            bulevardul plin de tarabe cu mărțișoare și flori care te fac să te
            întrebi: „Dacă eu de-abia rezist pe frigul ăsta, ele cum o fac?”,
            ajungi lângă parcul „Sân Nicoară”.
          </p>
          <p>
            Vrei să urci la ruină și îți atrag atenția trei fete pe una dintre
            bănci. Râd mult prea tare, dar se vede că nu le pasă. Mănâncă
            ÎNGHEȚATĂ și îți spui, din nou, „Oare sunt eu prea friguroasă?”.
          </p>

          <p>
            E vară. Au trecut câteva luni și acum vremea e perfectă pentru o
            plimbare în care te bucuri de mirosul teilor. De data asta nu te mai
            distrage nimic, urci direct către ruina Sân Nicoară. Când ajungi în
            dreptul ei, aceleași trei râsete întrerup liniștea peisajului. Parcă
            aparțin locului, sunt mereu acolo. Curiozitatea te împinge să arunci
            o privire și în interiorul ruinei, dar nu vrei să le întrerupi, așa
            că mergi mai departe.
          </p>
          <p>
            E toamnă. Știi cum se spune, a treia oară e cu noroc. Speri că de
            data asta vizitezi cu totul ruina. Și reușești. Iar când vrei să
            cobori, le observi. Normal că sunt tot acolo. Fac fotografii între
            frunze, ca să fie și ele în ton cu ceilalți de pe Instagram.
          </p>
          <p>
            E iarnă. Nu mai ai nevoie de introducere, știi că sunt acolo și fără
            să verifici, făcând schimb de cadouri de Crăciun pe aceeași bancă.
          </p>
          <p>
            Lași să treacă mai mult timp. E iar toamnă. Dar iată că s-a produs o
            schimbare. Sunt doar două acum, te întrebi ce s-a întâmplat cu a
            treia.
          </p>
          <p>
            Să știi că ne e dor de ea, dar o să ne vedem toate la vară. Iar dacă
            revii peste un an, banca va fi goală. Peste zece, vom reveni și noi,
            ca „turiști cu amintiri”, iar eu voi vrea să mă întorc în timp, pe
            bancă, lângă cele două prietene ale mele.
          </p>
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
    },
  },
  'fata-care-a-plecat': {
    ro: {
      title: 'Fata care a plecat',
      author: 'Ruxandra Radu',
      content: (
        <>
          <p>
            Ești fata care a plecat cu mulți ani în urmă din orașul natal. Deja
            ai uitat unele dintre amintirile care ai crezut că sunt neprețuite:
            când ți-ai rupt piciorul pe stadion, primul sărut cu Andrei pe
            băncile de la Biserica Domnească sau ziua când ai pierdut ultimul
            tren din gară către București, unde aveai bilete la teatru. Toate au
            trecut. Ești astăzi, poți spune, turistă în orașul natal. Tragi de
            valiza care alunecă mai lin pe asfalt decât când ai plecat și nu
            știai dacă te vei mai întoarce. Realizezi că trotuarele s-au
            schimbat și tu odată cu ele.
          </p>
          <p>
            Deodată auzi un „hei” entuziasmat, rostit de o voce cunoscută.
            Răspunzi din instinct. E colega de bancă din generală, Sorina. Te-a
            recunoscut, semn că nu ești chiar turistă în Curtea de Argeș.
            Urmează o conversație banală, dar care te face să te simți bine.
            Pentru că 15 minute nu sunt destule să povestiți zece ani de
            absență, îți propune să vă vedeți pe seară la Sân Nicoară în parc,
            la ruină.
          </p>
          <p>
            Pe drum, îți vin în minte imagini cu tine și Andrei ținându-vă în
            brațe, în timp ce ceilalți povesteau de profele de la școală. Oare
            ce mai faci Andrei?
          </p>
          <p>
            Se aud râsete. Ruinele nu s-au schimbat, poate a mai căzut câte o
            piatră, însă locul are același aer de poveste. Construcția în sine e
            misterioasă, nu se știe cine și când a construit-o. Însă cu
            siguranță ți-ar fi plăcut să stai să privești oamenii din turnul de
            observație. Crezi că și lui Andrei i-ar fi plăcut. Se ivesc niște
            fețe cunoscute, dar nu le recunoști în prima clipă. Sunt vechii tăi
            prieteni, oamenii cu care ai crescut aici, la ruinele astea care par
            plictisitoare pentru unii localnici sau turiști. Printre ei e și
            Andrei.
          </p>
          <p>
            Stați la povești până dimineață, retrăind ceva de mult uitat.
            Ți-aduci aminte de zilele când ai tăi te certau că nu petreci destul
            timp cu ei, pentru că erai mereu cu prietenii.
          </p>
          <p>
            La plecare, Andrei se oferă să te conducă și cum ai putea să spui
            nu? Dulce ca întotdeauna și diplomat, același Andrei pe care îl
            știi, acum cu barbă, mergeți împreună pe trotuarele noi. Îți propune
            să vă mai vedeți și zici „da” fără să eziți. Atunci realizezi că
            trebuie să te întorci acasă, să cercetezi mai de aproape ruinele
            alea.
          </p>
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['san-nicoara', 'gara-regala'],
    },
  },
  'capturarea-cetatii': {
    ro: {
      title: 'Capturarea cetății',
      author: 'Radu Răducanu',
      content: (
        <>
          <p>
            Aveam doisprezece ani. M-am întâlnit cu niște băieți mai mari ca
            mine la ruine. Aceștia aveau arme airsoft, „jucării” pe care voiam
            și eu să le folosesc. Ne-am pus echipamentul de luptă, am încărcat
            armele cu muniție (bile de plastic), ne-am împărțit în două echipe
            de câte trei și am început războiul pentru a captura cetatea. De mic
            am adorat lunetiștii, așa că mi-am luat arma cu lunetă, mi-am găsit
            un loc în care să fiu camuflat și lupta a început. Toți eram foarte
            abili, așa că au fost foarte multe runde, până la o oră târzie.
          </p>
          <p>
            Dintre toți, eu am fost cel care a eliminat cei mai mulți inamici.
            Mă simțeam mândru de mine, dar suspectam și că ceilalți ar fi putut
            fi invidioși. Însă știam că erau prietenii mei.
          </p>
          <p>
            La ora 23, am coborât scările de pământ, apoi cele de ciment,
            mulțumit de ziua care trecuse.
          </p>
          <p>
            Mă pun pe skateboard, dau din picior și dau să traversez strada.
            Deodată, simt o durere puternică în pe ceafă, care se întinde și
            crește în intensitate. Din ce în ce mai multe bile mă loveau în
            spate. Prietenii mei trăgeau în mine. Înlemnit, cad de pe skateboard
            fix pe trecerea de pietoni. Cu fața însângerată, mă uit către mașina
            care vine să mă lovească. Îmi bubuie capul, farurile mă orbesc,
            încerc în zadar să mă ridic.
          </p>
          <p>
            Atunci, de nicăieri, sora mea sare în fața mașinii. Îngrijorată din
            cauza orei, venise să mă caute la ruine și văzuse întreaga scenă.
          </p>
          <p>
            Mașina a oprit cu scârțâit de roți. Șoferul a coborât, m-a ajutat să
            mă ridic și m-a dus de urgență la spital.
          </p>
          <p>
            În alte epoci, alte suflete au pășit pe la ruina de astăzi a
            bisericii Sân Nicoară trăindu-și poveștile frumoase sau triste. Am
            adăugat și eu acelui loc un eveniment din istoria mea, despre care
            nu va ști nimeni, cum nici eu nu știu ce s-a întâmplat în trecut.
          </p>
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['san-nicoara'],
    },
  },
  'batrana-hotomana': {
    ro: {
      title: 'Bătrâna hoțomană',
      author: 'Ionuț Păduraru',
      content: (
        <>
          <p>
            Urcam dealul spre ruina bisericii Sân Nicoara, cu cățelușa mea
            Caramela. Trebuia să mă întâlnesc cu colegii mei la ora trei la
            ruină și era trei și jumătate. Aproape ajunsesem, dar Caramela mă
            tot trăgea înapoi, pentru că văzuse alți căței și voia să se joace
            cu ei.
          </p>
          <p>
            Când am ajuns la ruină, nu era nimeni. M-am uitat pe acolo o vreme,
            apoi m-am dat bătut și m-am așezat jos dezamăgit, când deodată
            colegii mei au sărit din tufișuri și ne-au speriat pe mine și pe
            Caramela. Am dat drumul lesei și, imediat ce s-a simțit liberă,
            Caramela a fugit. Dar nu mi-am dat seama de asta decât după ce mi-am
            revenit din sperietură. Ne-am apucat sa o căutăm și s-o strigăm, dar
            fără succes. Am căutat trei ore și, cum ultimul motocar spre casă
            era la șapte și aveam nevoie de o jumătate de oră ca să ajung în
            stație, am renunțat și am pornit spre casă.
          </p>
          <p>
            Când am ajuns în stație – gâfâind, deoarece alergasem – am văzut că
            nu eram singur. Era și Caramela, într-o cușcă, lângă o bătrână. Am
            întrebat-o pe femeie dacă era a ei cățelușa și ea a zis da,
            privindu-mă cu suspiciune. Cand mi-a auzit vocea, Caramela a ridicat
            capul și a început să dea din coada fericită. Bătrâna și-a dat seama
            că eu eram stăpânul și s-a speriat puțin, dar și-a revenit repede,
            crezând că sunt un copil încet la minte și că n-am recunoscut-o pe
            Caramela.
          </p>
          <p>
            M-a întrebat dacă vreau să cumpăr cațelușa. I-am zis că da, dar să
            vină cu mine acasă, ca să-i plătesc cât merită. M-am prefăcut că sun
            acasă, dar am sunat la poliție, le-am dat adresa unde locuiesc și
            le-am zis să vină acolo. Bătrâna a venit cu mine în motocar. Pe
            drum, mă rugam ca polițiștii să vină.
          </p>
          <p>
            N-au venit, deoarece au crezut că-i o farsă. Dar aveam un plan de
            rezervă.
          </p>
          <p>
            Eu locuiesc la țară. Am ajuns la poartă și i-am zis bătrânei să
            aștepte puțin. Am intrat în curte și în casă, le-am povestit
            părinților mei ce s-a întâmplat și le-am zis planul meu. Cum
            părinții mei țin la Caramela – nu la fel de mult ca mine, dar destul
            de mult – mi-au dat voie.
          </p>
          <p>
            În curte avem șapte câini: trei inofensivi, unul care nu prea stă pe
            acasă și părinții lui Caramela, doi ciobănești mioritici care sunt
            cât un om când se ridică pe labele din spate. Am mers la poartă,
            unde aștepta bătrâna și am primit-o în curte. Mi-am chemat
            ciobăneștii, unul în stânga, altul în dreapta, și i-am zis bătrânei
            că dacă nu-mi dă câinele înapoi, îi pun pe părinții Caramelei s-o
            atace. Bătrâna a crezut că glumesc și a început să mă amenințe, dar
            câinii, când au văzut că puiul lor era ținut într-o cușcă, au
            început să-și arate colții. Atunci am scos o bucată de carne crudă,
            pe care o car tot timpul cu mine în ghiozdan și am aruncat-o în sus.
            Cei doi câini au prins-o, au sfâșiat-o și au devorat-o. Bătrâna a
            scos un țipăt de spaimă și a fugit, nu știu unde, pentru că n-am mai
            auzit nimic de ea. Cât despre Caramela, a crescut și a învățat să
            latre și să se apere.
          </p>
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['san-nicoara'],
    },
  },
  parintii: {
    ro: {
      title: 'Părinții',
      author: 'Nectaria Craus',
      content: (
        <>
          Orașul Curtea de Argeș este atât de vechi și totuși atât de nou pentru
          mine. Familia mea s-a mutat aici din altă parte. Am descoperit locul
          crescând și mi se pare că este în așteptarea persoanelor noi.
          <br />
          Sunt o fire gânditoare, care se stresează ușor. Câteodată nici eu nu
          mă mai înțeleg și atunci caut să dau spațiu minții mele, ieșind cu
          bicicleta. În timp ce pedalez, îmi place sa îi privesc pe trecători și
          să le analizez expresiile feței. Mă întreb ei ce părere au despre
          micul nostru oraș, unde te întâlnești mereu cu cineva cunoscut: un
          profesor, un coleg de clasă, fetele de la bloc care încearcă să vândă
          brățări. Dar cum rămâne cu monumentele? Localnicii le mai apreciază
          sau nici nu le mai observă?
          <br />
          În timpul plimbării, am flashback-uri cu diverse întâmplări trăite în
          oraș: mănăstirea este locul unde am plimbat-o pe prietena mea din
          America, Connie. Atunci am realizat pentru prima dată că sunt mândră
          de locul în care trăiesc. Biserica Domnească este locul unde am avut
          una dintre cele mai semnificative discuții cu un prieten drag,
          analizând citate celebre din Oscar Wilde și vorbind despre visurile
          noastre. Mi-ar plăcea ca o zi pe săptămâna (duminica) bulevardul de la
          Biserica Domnească la Mănăstire să fie pietonal, eventual străbătut de
          o trăsură sau două.
          <br />
          Clădirile vechi veghează asupra noastră și câteodată am senzația că ne
          cunosc secretele, chiar și momentele stânjenitoare.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
    },
  },
  'leat-6838': {
    ro: {
      title: 'Leat 6838',
      author: 'Eduard Băiașu',
      content: (
        <>
          <p style={{ textAlign: 'right' }}> 2 răpciune, leat 6838 </p>
          <br />
          — Măria ta, am primit veste grabnică cum că ungurii plănuiesc să ne
          pătrundă meleagurile, coborând din Țara Ardelului, pentru că domnia ta
          a refuzat să mai dea zălog cei 147.000 de ducați! <br />
          — De ce ai spus se adeverește, vei fi onorat. Alminterea, de mă
          trădezi, vei fi adăpat împreună cu iapa! <br />— Apoi ce am auzit,
          ți-am și spus, măria ta, barem sunt loial ție! <br />
          — Pârcalabule, dă de veste și celorulalți ostași că atacăm pe Valea
          Oltului! <br />
          — Cini o să îndrăznească a trece prin fața noauă o s-ajungă
          cimillituri, măria ta! <br />
          <p style={{ textAlign: 'right' }}> 12 răpciune, leat 6838 </p>
          <br />
          <p>Soața mea dragă,</p>
          <p>
            Năcaz mare de pârgarii cari au cugetat să încalce meleagurile noauă.
            Nime n-o să treacă, doar ostași morți. <br />
            De io nu m-oi întoarce, nu-i de haznă să mă cauți. Io mă lupt cu
            hearele inamice. De nu m-oi mai vedzu, să nu plăngi, ci să dai
            comândare în sat și să vină tăți păcurarii. Feciorilor să le dai de
            veste că tatul lor a dat tăt în luptă și că le dă moștenire ogrăzile
            co ligheoane. <br />
            Domnul, domniei-saile, Basarabă, i-am dat cuvântul că mor în
            războiu, barem sunt loial măriei-saile. Să fii mumă iubitoare, com
            esci acuma și Domnezău să blagoslovească flăcăii.
          </p>
          Fii muiare bună, <br />
          Grigorie, pârcălab, boier
          <p style={{ textAlign: 'right' }}> 16 răpciune, leat 6838</p>
          <br />
          <p>
            Io, Basarabă, mare voivod al Valahiei, fiu al lui Tihomir, deasupra
            tutoror voivozilor și cnejilor, întregitorul tutoror obștilor și
            cnezatelor de la Carpați până la Dunăre, am biruit la Posada,
            îndeosebi cu ajutorul tutoror adunărilor obștești, împotriva
            pârgarilor de unguri conduși de însuși Regele Carol Robert de Anjou.{' '}
            <br />
            Astfel, mă declar, cu ajutorul întru-bunului, tatăl ceresc, domn al
            Țării Românești deasupra tutoror voivozilor, ban al Severinului și
            hărțeag al Amlașului și Făgărașului. Domnul bunul Domnezău să vă
            blagoslovească pe toți.
          </p>
          <p>Basarab</p>
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['biserica-domneasca'],
    },
  },
  'impacarea-de-la-biserica-olari': {
    ro: {
      title: 'Împăcarea de la Biserica Olari',
      author: 'Maia Negru',
      content: (
        <>
          Vara trecută m-am certat cu prietena mea cea mai bună. Încă țin minte
          sentimentul de atunci, plângeam pentru că simțeam că o pierd, însă
          aveam o speranță și aceea era iubirea pe care o aveam una pentru
          cealaltă. Bianca era plecată la București când m-a sunat și mi-a auzit
          vocea tremurândă. Mi-a spus să mă liniștesc, însă eu o tot întrebam
          dacă o să mai fim prietene, dacă o să mai vorbim și o să mai fie la
          fel. Mi-a răspuns că vorbim când se întoarce. <br />
          Până a ajuns, m-am plimbat prin curtea bisericii Olari. De la poartă,
          vedeam casa în care locuia ea. Ne întâlneam deseori la biserică și
          stăteam pe zid, râzând și discutând întâmplările zilei. Mi se părea de
          negândit să nu mai fiu prietenă cu Bianca. Ea îmi arătase cum să am
          încredere în lume, cum să înțeleg persoanele din jurul meu și cum să
          țin cont de limitele mele. <br />
          Nu după mult, a apărut. Plecase cât de repede putuse din București.
          M-a luat în brațe și mi-a zis că nimic nu ne-ar putea despărți. <br />
          Am așteptat apusul pe zidul bisericii și ne-am făcut promisiunea că
          niciodată nu vom renunța la prietenia noastră.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
    },
  },
  liniste: {
    ro: {
      title: 'Liniște',
      author: 'Ana Baciu',
      content: (
        <>
          Eram la atelierul de Soundscape în parcul mănăstirii din Curtea de
          Argeș, orașul meu natal. Trebuia să înregistrăm sunetele din jurul
          nostru, cu un recorder profesional. <br />
          Împreună cu colegele mele, am înregistrat clopotele mănăstirii. Am
          stat și le-am ascultat cu mare atenție. Mi-am dat seama că nu mai
          făcusem lucrul acesta, cu toate că locuiesc fix lângă și le aud în
          fiecare zi. <br />
          Profa` ne-a sugerat să luăm și ambianța, adică să înregistrăm sunetele
          de atmosferă ale locului. Am mers într-un colț mai retras, lângă
          Palatul Episcopal. Ne-am întins pe iarba verde, am setat nivelul
          microfonului și am apăsat pe REC. Trei minute. Doar eu cu mine. Mi-am
          pus căștile pe cap și am ascultat. <br />
          Mi-am dat seama că niciodată nu acordasem cu adevărat atenție
          sunetelor din jurul meu: ciripituri de păsărele, cântat de cocoși,
          zumzăit de insecte. M-am cufundat într-o stare de calmitate. Niciun
          gând nu-mi trecea prin minte. Era atât de liniște, parcă nimeni și
          nimic nu putea să mă mai deranjeze vreodată. <br />
          Din locul unde stăteam, aveam vedere spre mănăstire. Parcă o vedeam
          pentru prima dată. Era extraordinar de frumoasă. Mă simțeam
          recunoscătoare că trăiesc în acest oraș. Mă simțeam vie, parcă pentru
          prima dată.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['olari', 'manastirea-curtea-de-arges'],
    },
  },
  cristian: {
    ro: {
      title: 'Cristian',
      author: 'Maria Duca',
      content: (
        <>
          Cristian, contrar numelui, nu e religios. Chiar deloc. Nu crede în
          puteri divine, în sfinți pictați pe pereți sau în slujbele de duminică
          dimineața. El are o explicație realistă pentru fiecare teorie
          religioasă. Cu toate astea, ai lui încă îl mai târăsc cu forța la
          biserică, de Paște sau Crăciun. Nu acceptă gândirea băiatului lor și
          se sfătuiesc cum să-l aducă pe „calea cea bună”. <br />
          Astăzi, toți vizitează Curtea de Argeș. S-au gândit să vadă
          Mănăstirea, căci auziseră multe despre ea, dar și pentru că, într-un
          fel, ea reprezintă orașul. Cristian s-a opus cu desăvârșire, însă i-au
          spus că poate să rămână în parc, dacă nu vrea să intre. Îi place
          construcția, totuși. E impunătoare, frumoasă, așa că pentru o vreme
          stă pe o bancă ceva mai retrasă și se uită la ea fără niciun gând.{' '}
          <br />
          Dintr-odată, ceva îi atrage atenția. Nu departe de el, la umbra unor
          brazi, stă o fată cu căștile în urechi. Nu pare interesată de nimic,
          poate doar de melodie, căci își mișcă lent capul, în ritmul muzicii.
          Simțindu-se urmărită, fata ridică ochii. Privirile li se întâlnesc.
          Timpul pare să dispară. <br />
          Familia lui apare din biserică. Fata își scoate căștile și pleacă.{' '}
          <br />
          Poate Cristian va mai reveni aici.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['manastirea-curtea-de-arges'],
    },
    en: {
      title: 'Cristian',
      author: 'Maria Duca',
      content: (
        <>
          Contrary to his name, Cristian is not religious, not at all. He
          doesn't believe in divine powers, saints painted on walls, or Sunday
          morning services. He has a realistic explanation for every religious
          theory. Nevertheless, his parents still drag him to church at Easter
          and Christmas. They don't accept their boy's way of thinking and often
          discuss how they might bring him back on the "right path".
          <br />
          Today they are all visiting Curtea de Argeș. They decided to see the
          monastery because they heard a lot about it, but also because it
          represents the city in a way. Cristian was totally against it, but
          they told him he could stay in the park if he didn't want to go
          inside. He likes the construction. It's beautiful and impressive. For
          a while, he sits on one of the more secluded benches and looks at the
          church without any thought.
          <br />
          Suddenly something catches his eye. Not far from where he is sitting,
          in the shade of some pine trees, sits a girl with earphones on. She
          doesn't seem interested in anything, except perhaps the music, as she
          slowly moves her head to the beat. Sensing that she is being watched,
          she looks up. Their eyes meet. Time seems to vanish.
          <br />
          The family comes out of the church. The girl takes off her earphones
          and walks away.
          <br />
          Maybe Cristian will come back here again.
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['manastirea-curtea-de-arges'],
    },
  },
  'cu-dor': {
    ro: {
      title: 'Cu dor, păpușii care s-a rupt',
      author: 'Mădălina Niță',
      content: (
        <>
          Sunt prea tristă ca să-mi dau seama cine sunt cu adevărat. Mă regăsesc
          în tot ce-mi povesteau prietenii ajunși deja la vârsta maturității. Mă
          regăsesc în pierderile lor. Sau poate doar mi se pare. Părinții fac
          tot ce fac de obicei. Încearcă să mă înveselească. <br />
          Rămân, însă, la încercarea mea. Locurile sunt cele care ne țin
          ancorați în durere. Și acum trebuie să-l pierd. Îmi măsor pașii în
          timp ce mă îndrept spre ieșire. Parcul pare fără sfârșit. Dar speranța
          stă ascunsă. Mă urmărește. Acum se strecoară în sunetul apei care nu a
          încetat niciodată să curgă. Cana roșie e pata de culoare din tot acest
          univers alb-negru. De fapt, e tot ceea ce ne unește ca oameni – faptul
          că bem acea apă din Fântâna lui Manole. Am urcat treptele și mi-am
          luat adio de la parc. Trec strada și văd zidul Mânăstirii. Aleea se
          întinde înaintea mea, umbrită de brazi. Poate aș fi avut nevoie de
          liniște, dar drumul pietruit își repetă cântecul sacadat cu fiecare
          pas al meu. Mama se apropie de mine și face ceea ce face când suntem
          de obicei aici. Ne așezăm pe o bancă și începe să-mi spună legenda
          construirii Mânăstirii. Deși știu povestea, numai ea mă mai ancorează
          în tot ce trăiam în copilărie. <br />
          Vântul se strecoară prin toate adânciturile fleuronilor ce înconjoară
          biserica până când rămâne doar o adiere sub veșmintele preoților.
          Șoptesc „Mulțumesc”, așa cum am făcut mai demult, când printre degete
          mi s-a strecurat o brățară cu o cruciuliță din lemn atent sculptată.{' '}
          <br />
          Acum am pierdut-o. Dar a fost a mea. Încă e. <br />
          Cu dor, de pe banca din dreapta Mânăstirii, păpușii care s-a rupt,
          care a fost a mea și care încă e. Ți-am aprins o lumânare acolo, dar
          la „Morți” acum. Și clopotul nu l-am mai auzit împreună.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
    },
  },
  'nu-atingeti-exponatele': {
    ro: {
      title: 'Nu atingeți exponatele',
      author: 'Eliza Rada',
      content: (
        <>
          Știți cum se zice, că înainte să mori, viața ta ți se derulează în
          fața ochilor și timpul nu mai contează? Ei bine, eu m-am întrebat cum
          de am ajuns în situația asta. <br />
          Era o zi obișnuită, iar eu și prietenii mei discutam despre următorul
          loc pe care aveam să-l explorăm. Aveam un obicei tare drăguț. În
          fiecare vineri noaptea, în jurul orei douăsprezece, mergeam și
          cercetam obiective istorice, numai noi cinci. Totul începuse cu șase
          luni în urmă și fusese ideea lui Ștefan. Deși nu era perfect legal ce
          făceam, niciodată nu vandalizasem nimic. <br />
          Din moment ce orașul în care locuim este unul istoric, am decis să
          facem o listă cu toate obiectivele și să tragem la sorți care va fi
          următorul. De data aceasta, Victoria a extras Casa Norocea, care a
          aparținut unuia dintre cei mai talentați pictori restauratori. Eu m-am
          entuziasmat pentru că eram pasionată de desen. <br />
          Ca de obicei, ne-am întâlnit la miezul nopții în fața obiectivului.
          Fiecare avea o lanternă și eram îmbrăcați cu haine lejere, negre.
          Victoria și Otilia s-au ocupat de încuietoare, Ștefan și Andra de
          camerele de luat vederi, iar eu de sistemul de securitate. <br />
          Am intrat și am început să explorăm. Cum Andrei îi place istoria, a
          început să ne povestească despre trecutul locului, dar eu eram prea
          captivată de arta din casă. M-am apropiat de tabloul unei femei. Toate
          erau frumoase, dar acesta era diferit. Femeia avea ochii albaștri ca
          valurile mării și părul cârlionțat și negru precum abanosul. Pielea ei
          albă exprima rafinament. <br />
          Marea greșeală a fost să îndrăznesc să pun mâna. În secunda în care am
          atins tabloul, am rămas blocată în el, legată de casa aceasta pentru
          totdeauna, în timp ce corpul meu zăcea rece pe podea. <br />
          Cu moartea mea s-a declanșat haosul: cărțile zburau, clapele pianului
          scoteau sunete disonante, ușile se deschideau singure, geamuri s-au
          spart. Prietenii mei s-au speriat și au fugit. Numai eu am înțeles că
          restul sufletelor încercau nu să-i rănească, ci să-i sperie, ca să nu
          rămână și ei prizonieri în casă. <br />
          Marea iubire a pictorului este cea care colecționează suflete ca să-i
          împărtășească suferința. Tablourile sunt modul ei de a acționa,
          tablouri la care soțul ei a ținut mai mult decât la orice, mai mult
          decât la ea.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
    },
  },
  'tic-tac': {
    ro: {
      title: 'Tic-tac',
      author: 'Alexia Jianu',
      content: (
        <>
          Un ceas vechi suna din oră în oră, iar gândul că urma să plec în altă
          țară nu-mi dădea pace. <br />
          Urma, ca orice om, să-mi croiesc un drum prin viață departe de ce mă
          ținea pe loc, de obositul meu oraș. Îmi făcusem cu o zi înainte
          bagajele și acum așteptam autobuzul în același loc de unde plecasem la
          școală prima dată, în ziua în care am întâlnit-o și pe Dina. Ea avea
          să-mi fie colegă de bancă, să-mi fure pișcoturile din rucsac, să mă
          stropească cu cerneală, să-mi facă viața amară. <br />
          Câțiva ani mai târziu, când mama a intrat în camera mea și m-a anunțat
          că urma să ne mutăm, am încetat s-o mai salut pe Dina. Traversam pe
          trotuarul opus când o vedeam. <br />
          Acum, priveam grădina casei Norocea din stația de autobuz și nu știam
          ce să fac. Trebuia să mă întâlnesc cu familia mea care mă aștepta la
          gară. Vedeam cum se apropie autobuzul. Atunci, am fugit în curte și am
          urcat scările de lemn ale casei. M-am plimbat prin odăile răcoroase,
          printre tablouri și ștergare țărănești. Am auzit cum șoferul mă
          striga. Nu era nici Dina, nici vreun necaz care să-mi umbrească
          drumul. Dar, am decis să rămân aici, în țara mea. <br />
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
      locations: ['casa-norocea'],
    },
  },
  'un-nou-inceput': {
    ro: {
      title: 'Un nou început',
      author: 'Andra Șerban',
      content: (
        <>
          Era sâmbătă dimineața, ora 8. La această oră, de obicei dormeam sau
          îmi venea să îmi arunc telefonul pe geam pentru că suna alarma, însă
          noaptea aceea fusese diferită. Mi-o petrecusem gândindu-mă la băiatul
          cu care obișnuiam să vorbesc, care îmi era mereu alături și care, din
          senin, dispăruse. <br />
          Dintr-o dată, m-am trezit singură pe banca din fața gării, gândindu-mă
          cu ce am greșit. Îmi îndepărtasem toți prietenii ca să petrec timp cu
          el, însă el a ales să plece fără explicații. Cu fiecare tren ce
          trecea, inima îmi bătea mai tare, gândindu-mă că s-a întors și vrea să
          mă vadă. Aici obișnuiam să ne petrecem serile. <br />
          În timp ce stăteam pe banca din fața gării, înconjurată de oameni și
          bagaje, am simțit o atingere pe umăr. M-am uitat în spate. Dar era
          doar un controlor care mă întreba dacă sunt bine. <br />
          Am decis să plec, să mă urc în primul tren și să mă eliberez. Înainte
          de plecare, am aruncat un ochi spre peron și am văzut două siluete.
          L-am recunoscut pe cel pentru care am plâns și pentru care voiam să
          renunț la orașul meu și la prieteni, și care ținea acum în brațe o
          altă fată. <br />
          Am primit răspunsul la toate întrebările mele. Acesta era sfârșitul,
          dar în același timp începutul.
        </>
      ),
      footer:
        'Poveste scrisă la atelierul de scriere creativă din cadrul Școlii de Vară Voice Your Place: Curtea de Argeș.',
    },
  },
  'last-time-forever': {
    en: {
      title: 'Last Time Forever',
      author: 'Izabela Stoica',
      content: (
        <>
          <p>
            It's spring. It's quite cold for early March, but let's blame it on
            being a "mountain area". After a stroll along the boulevard full of
            stalls with flowers and mărțișoare that make you wonder "If I can
            barely stand this cold, how can the salespeople?", you arrive near
            St Nicoară park.
          </p>
          <p>
            You want to go up to the ruins, but three girls catch your eye on
            one of the benches. They're laughing too loudly, but you can tell
            they don't care. They eat ICECREAM and you say to yourself, again,
            "Is it me?".
          </p>
          <p>
            It's summer. It's been a few months and now the weather is perfect
            for a walk so you can enjoy the smell of the linden trees. This time
            nothing distracts you, you climb straight up to St. Nicoară. When
            you reach the ruins, three familiar laughs disturb the silence of
            the place. They seem to belong here, they're always here. Curiosity
            urges you to take a look inside the ruins, but you don't want to
            interrupt them, so you move on.
          </p>
          <p>
            It's autumn. You know what they say, third time's the charm. You
            hope that this time you'll visit the entire ruin. And you do. When
            you come down, you notice them. Of course they're still there. They
            are taking photos among the leaves, to be in tune with everyone else
            on Insta.
          </p>
          <p>
            It's winter. You don't need an introduction, you know they're there
            even without checking. They're exchanging Christmas presents on the
            same bench.
          </p>
          <p>
            You let more time pass. It's autumn again. But there's a change.
            There are only two girls now. You wonder what happened to the third.
          </p>
          <p>
            You know we miss her, but we'll see her again in the summer. And if
            you come back in a year, the bench will be empty. In ten, we'll come
            back as "tourists with memories" and I'll want to go back in time,
            to sit on that bench with my two friends.
          </p>
          <br />
          <hr style={{ width: '30%', marginLeft: 0, fontSize: '16px' }} />
          <p>
            Mărțișor (Romanian pronunciation: [mərt͡siˈʃor]) is a tradition
            celebrated at the beginning of spring in March in Romania and
            Moldova, involving an intertwined red and white string with hanging
            tassels and a small token or trinket attached. The modern tradition
            involves wearing a small object on the chest, such as a brooch or a
            pin, during the first part of the month, starting on the 1st of
            March. Its name is a diminutive of "Martie", the Romanian word for
            March, and means "little March".
          </p>
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
    },
  },
  'the-girl-who-left': {
    en: {
      title: 'The Girl Who Left',
      author: 'Ruxandra Radu',
      content: (
        <>
          <p>
            You are the girl who left your hometown many years ago. You have
            already forgotten some of the memories you thought were priceless:
            breaking your leg at the stadium, your first kiss with Andrei on the
            bench at the Royal Church, or the day you missed the last train to
            Bucharest, where you had tickets for the theatre. They're all gone.
            Today, you can say that you are a tourist in your own hometown. You
            pull your suitcase which slides smoothly on the new asphalt, that
            wasn't there when you left without knowing if you'd ever come back.
            The sidewalks have changed and you have changed with them.
          </p>
          <p>
            Suddenly you hear an excited "hey" from a familiar voice. You answer
            instinctively. It's your deskmate from elementary school, Sorina.
            She recognized you, a sign that you're not really a tourist in
            Curtea de Argeș. Small talk follows, but it makes you feel good.
            Since 15 minutes isn't enough time to talk about ten years of
            absence, she suggests that you meet her in the evening at the ruins
            of Sân Nicoară, in the park.
          </p>
          <p>
            On the way, images flood your mind: you and Andrei holding each
            other, while the others talked about their schoolteachers. You
            wonder how Andrei is.
          </p>
          <p>
            There is laughter. The ruins haven't changed, maybe a stone or two
            have fallen, but the place still has the same fairytale feel. The
            building itself is a mystery, no one knows who built it or when. But
            you would have certainly enjoyed sitting and watching people from
            the observation tower. Andrei would have too.
            <br />
            You come across some familiar faces, but you don't recognise them at
            first. They're your old friends, the people you grew up with here,
            at these ruins, that seem boring to some locals or tourists. Among
            them is Andrei.
          </p>
          <p>
            You sit and chat until morning, feeling something long forgotten.
            You remember the days when your parents used to scold you for not
            spending enough time with them because you were always with your
            friends.
          </p>

          <p>
            As you leave, Andrei offers to walk you home. How can you say no?
            Sweet as ever and diplomatic, he's the same Andrei you knew, now
            with a beard. You walk the new sidewalks together. He wants to see
            you again and you say yes without hesitation.
            <br />
            You realize you need to come back and explore those ruins more
            closely.
          </p>
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['san-nicoara', 'gara-regala'],
    },
  },
  'capture-fortress': {
    en: {
      title: 'The Capture of the Fortress',
      author: 'Radu Răducanu',
      content: (
        <>
          <p>
            I was twelve years old. I met with some older boys at the ruins.
            They had airsoft guns, "toys" I had always wanted to try out. We put
            on our battle gear, loaded our guns with ammo (plastic balls), split
            into two teams of three, and began the battle to capture the
            fortress. As a kid I loved snipers, so I chose a sniper rifle, found
            a hidden spot and the battle began. We were all very skilled, so
            there were a lot of rounds until late in the evening.
          </p>
          <p>
            Of all the boys, I was the one who took out the most enemies. I felt
            proud, but I also suspected that the others might have been envious.
            But I knew they were my friends.
          </p>
          <p>
            At 11 pm, I walked down the dirt steps, then the cement steps,
            satisfied with my day.
          </p>
          <p>
            I get on my skateboard, pick up speed and start to cross the street.
            Suddenly, I feel a sharp pain in the back of my neck, spreading and
            growing in intensity. More and more bullets were hitting me in the
            back. My friends were shooting at me. Stunned, I fall off my
            skateboard right onto the crosswalk. Bloody-faced, I look at the car
            coming towards me. My head is pounding, the headlights are blinding
            me. I try in vain to get up.
            <br />
            Then, out of nowhere, my sister jumps in front of the car. Worried
            about the time, she had come looking for me at the ruins and had
            witnessed the whole scene.
          </p>

          <p>
            The car came to a screeching halt. The driver got out, helped me up
            and rushed me to the hospital.
            <br />
            In other times, other souls have lived their sad or beautiful
            stories at the ruins of St. Nicoară Church. I too have added to the
            place a moment from my personal history that no one will ever know
            about, just as I don't know about what happened a hundred years ago.
          </p>
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['san-nicoara'],
    },
  },
  'old-hag': {
    en: {
      title: 'Old Hag',
      author: 'Ionuț Păduraru',
      content: (
        <>
          <p>
            I was walking up the hill to the ruins of St Nicoară church with my
            dog Caramela. I was supposed to meet my colleagues at the ruins at
            3pm, and it was 3.30pm. I was almost there, but Caramela kept
            pulling me back because she had seen other puppies and wanted to
            play with them.
          </p>

          <p>
            When we got to the ruins no one was there. I looked around for a
            while, then gave up and sat down disappointed when my mates jumped
            out of the bushes, scaring me and Caramela. I let go of the leash
            and as soon as she felt free, Caramela ran off. But I didn't notice
            until I had recovered from my fright. We started looking for her and
            calling her name, but to no avail. We searched for three hours, but
            as the last bus home was at 7pm and I needed half an hour to get to
            the bus stop, I gave up and headed home.
          </p>

          <p>
            When I got to the bus stop - panting because I'd been running - I
            realised I wasn't alone. Caramela was there, in a cage, next to an
            old lady. I asked the woman if this was her puppy and she said yes,
            looking at me suspiciously. When she heard my voice, Caramela lifted
            her head and started wagging her tail happily. The old woman
            realised I was the owner and freaked out, but she quickly recovered,
            thinking I was a slow-witted child who hadn't recognised Caramela.
            <br />
            She asked me if I wanted to buy the puppy. I told her that I did,
            but that she should come home with me so that I could pay the full
            price for the dog. I pretended to call home, but instead called the
            police, gave them my address and told them to meet me there. The old
            lady got on the bus with me. On the way I kept praying for the
            police to show up.
          </p>

          <p>
            They didn't because they thought it was a joke. But I had a backup
            plan.
            <br />I live in the countryside. I got to the gate and told the old
            lady to wait. I went into the house and told my parents what had
            happened, and then about my plan. Since my parents care about
            Caramela - not as much as I do, but quite a lot - they gave me their
            permission.
          </p>

          <p>
            We have seven dogs: three harmless, one that doesn't hang around the
            house much, and Caramela's parents, two Mioritic Romanian Shepherds
            that are as tall as a man when they stand on their hind legs. I went
            to the gate, where the old woman was waiting, and welcomed her into
            the courtyard. I called my shepherds, one to my left, one to my
            right, and told the old woman that if she didn't give me back my
            dog, I'd set Caramela's parents on her. The old woman thought I was
            bluffing and started threatening me, but the dogs, when they saw
            that their pup was in a cage, they started showing their fangs. Then
            I pulled out a piece of raw meat, which I always carry with me in my
            backpack, and threw it in the air. The two dogs caught it, tore it
            apart and ate it. The old woman screamed and ran away, I don't know
            where, because I never heard from her again. As for Caramela, she
            grew up and learned to bark and defend herself.
          </p>
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['san-nicoara'],
    },
  },
  parents: {
    en: {
      title: 'Parents',
      author: 'Nectaria Craus',
      content: (
        <>
          The town of Curtea de Argeș is so old and yet so new to me. My family
          moved here from somewhere else. I discovered the place growing up and
          it feels like it is waiting for new people.
          <br />
          I am pensive by nature, and I stress easily. Sometimes, even I don't
          understand myself and then I try to give my mind some space and go on
          a bike ride. While I'm pedaling, I like to watch passers-by and
          analyze their facial expressions. I wonder what do they think of our
          little town, where you always meet someone you know: a teacher, a
          classmate, the girls on the block trying to sell bracelets. But what
          about the monuments? Do the locals still appreciate them, or do they
          no longer even notice them?
          <br />
          As I ride, I get flashbacks of moments I've lived in this town: Curtea
          de Argeș Monastery is where I took my friend Connie from America, on a
          sightseeing tour. That's when I first realized that I'm proud of where
          I live. The Royal Church of St Nicholas is where I had one of my most
          meaningful conversations with a dear friend, discussing famous quotes
          by Oscar Wilde and sharing our dreams. I would like for the avenue
          going from St. Nicholas' Church to the Monastery to become pedestrian
          one day a week (on Sundays) with perhaps one or two carriages giving
          rides.
          <br />
          The old buildings watch over us and sometimes I feel like they know
          all our secrets, even the embarrassing ones.
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
    },
  },
  posada: {
    en: {
      title: 'Posada',
      author: 'Eduard Băiașu',
      content: (
        <>
          <p style={{ textAlign: 'right' }}>
            {' '}
            2 September, the year from the creation of the earth 6838{' '}
          </p>
          <br />
          — Your Highness, I have received urgent news that the Hungarians are
          planning to invade our lands, coming down from the land of
          Transylvania, because your lordship has refused to pay the 147,000
          gold coins he owes as a vassal! <br />
          — If what you say is true, may you be held in high honour. But if you
          betray me, I shall have you watered with the mare! <br />
          — What I have heard, I have told thee, my lord! I am your loyal
          servant! <br />
          — Then let the other soldiers know that we are preparing to attack in
          the valley of the river Olt! <br />
          — Whoever dares to oppose us shall be reduced to crumbs, Your
          Highness!
          <br />
          <br />
          <p style={{ textAlign: 'right' }}>
            {' '}
            12 September, the year from the creation of the earth 6838{' '}
          </p>
          <p> My beloved wife,</p>
          Woe to the scoundrels who have dared trespass our land. None shall
          pass but dead soldiers. If I don't return, it's no use looking for me.
          I'm fighting the Hungarian beasts. If you shan't see me again, don't
          cry, but give alms to the village and let all the shepherds come. Let
          the children know that their father has given his all in battle and is
          leaving them the farms and fields. I gave my word to his lordship King
          Basarab that I would die in battle, and I am loyal to him. Be a loving
          mother, as you always have been, and God bless the boys. Be a good
          wife too, <br />
          Grigorie, boyar
          <br />
          <br />
          <p style={{ textAlign: 'right' }}>
            16 September, the year from the creation of the earth 6838
          </p>
          <br />
          I, Basarab, great voivode of Wallachia, son of Tihomir, above all
          voivodes and lords, ruler of people from the Carpathians to the
          Danube, have defeated at Posada, especially with the help of my
          people, the lawless Hungarian armies led by King Charles Robert of
          Anjou.
          <br />
          Thus, I declare myself, by the grace of God, my heavenly father, lord
          of the Romanian land above all voivodes, ban of Severin and landlord
          of Amlaș and Făgăraș counties.
          <br />
          May the good Lord bless you all.
          <br />
          <p>Basarab</p>
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['biserica-domneasca'],
    },
  },
  'reconciliation-olari-church': {
    en: {
      title: 'Reconciliation at Olari Church',
      author: 'Maia Negru',
      content: (
        <>
          Last summer I had a fight with my best friend, Bianca. She had made
          another girlfriend, and it seemed like she didn't have time for me
          anymore. I still remember the feeling of crying uncontrollably because
          I felt I was losing her, but I still had some hope in the love we had
          for each other. <br />
          Bianca was in Bucharest at the time. She called me and heard the
          tremble in my voice. She told me to calm down and that she would be
          back soon, but I kept asking her if we were still going to be friends
          and if we would still talk and be like before. She replied that we
          would talk when we met. Until she arrived, I paced the courtyard of
          Olari Church. From the gate, I could see the house where she lived. We
          would often meet at the church and sit on the stone wall, laughing and
          discussing the day's happenings. <br />
          It seemed unthinkable not to be friends with Bianca. She had shown me
          how to trust the world, how to understand the people around me, and
          how to keep my boundaries in mind. Not long after, Bianca showed up.
          She had left Bucharest as quickly as she could, even though she was at
          lunch with her mother. She took me in her arms and told me that
          nothing was going to come between us. <br />
          We watched the sunset from the church wall and made a promise to each
          other that we would never give up this friendship.
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
    },
  },
  silence: {
    en: {
      title: 'Silence',
      author: 'Ana Baciu',
      content: (
        <>
          I was at the Soundscape workshop in my hometown, in the park of the
          Curtea de Argeș Monastery. We were supposed to record the sounds
          around us with a professional recorder. <br />
          Together with my colleagues, we recorded the bells of the monastery.
          We sat and listened to them very carefully. I realized that I had
          never done this before, even though I lived right next door and I
          could hear them every day. <br />
          The workshop teacher suggested that we also record the ambiance, that
          is, the atmospheric sounds of the place. We went to a more secluded
          corner near the Bishop's Palace. I put on the headphones. We laid down
          on the green grass, set the microphone level and hit REC. Three
          minutes, just with myself. <br />
          I realized that I had never really paid attention to the sounds around
          me: the chirping of the birds, the crowing of the roosters, the
          buzzing of the insects. I sank into a state of stillness. Not a single
          thought crossed my mind. I felt so calm as if nothing and no one could
          ever bother me again. <br />
          From where I was lying, I had a good view of the monastery. It was as
          if I was seeing it for the first time. It was extraordinarily
          beautiful. I felt blessed to live in this town. I felt alive, as if
          for the first time. <br />
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['manastirea-curtea-de-arges'],
    },
  },
  'broken-doll': {
    en: {
      title: 'With Longing, to the Doll that Broke',
      author: 'Mădălina Niță',
      content: (
        <>
          Contrary to his name, Cristian is not religious, not at all. He
          doesn't believe in divine powers, saints painted on walls, or Sunday
          morning services. He has a realistic explanation for every religious
          theory. Nevertheless, his parents still drag him to church at Easter
          and Christmas. They don't accept their boy's way of thinking and often
          discuss how they might bring him back on the "right path". <br />
          Today they are all visiting Curtea de Argeș. They decided to see the
          monastery because they heard a lot about it, but also because it
          represents the city in a way. Cristian was totally against it, but
          they told him he could stay in the park if he didn`t want to go
          inside. He likes the construction. It's beautiful and impressive. For
          a while, he sits on one of the more secluded benches and looks at the
          church without any thought. <br />
          Suddenly something catches his eye. Not far from where he is sitting,
          in the shade of some pine trees, sits a girl with earphones on. She
          doesn't seem interested in anything, except perhaps the music, as she
          slowly moves her head to the beat. Sensing that she is being watched,
          she looks up. Their eyes meet. Time seems to vanish. <br />
          The family comes out of the church. The girl takes off her earphones
          and walks away. <br />
          Maybe Cristian will come back here again. <br />
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
    },
  },
  'do-not-touch-the-exhibits': {
    en: {
      title: 'Do Not Touch the Exhibits',
      author: 'Eliza Rada',
      content: (
        <>
          You know how they say that before you die your whole life flashes
          before your eyes and time stops? Well, when my time came, all I could
          think of was how I had ended up in that situation. <br />
          It was an ordinary day, and my friends and I were debating which place
          to explore next. We had developed a fun habit. Every Friday night,
          around midnight, we would go out and explore historical buildings,
          just the five of us. It had started six months previous, and it had
          been Ștefan's idea. Although it wasn't perfectly legal, we had never
          vandalised anything. <br />
          Since the town we live in is a historical one, we decided to make a
          list of all the sights and draw lots to see which would be next. This
          time, Victoria drew the Norocea House that used to belong to one of
          our most talented painters. I got excited as I was passionate about
          drawing. <br />
          As usual, we met around twelve. Everyone had a flashlight, and we were
          dressed in loose, black clothes. Victoria and Otilia were in charge of
          the locks, Ștefan and Andra of the cameras, and I of the security
          system. <br />
          We went in. Since Andrei likes history, he started telling us about
          the history of the place, but I was too enthralled by the art in the
          house. I moved closer to the painting of a woman. All the paintings
          were beautiful, but this one was different. The woman had sea-blue
          eyes and curly ebony-black hair. Her white skin conveyed refinement.{' '}
          <br />
          The big mistake was daring to touch. The second my hand came in
          contact with the painting, I became stuck, bound to this house
          forever, as my body fell cold to the floor. <br />
          With my death, chaos ensued: books were flying, the piano keys made
          dissonant noises, the doors were opening and closing by themselves, a
          window shattered. My friends panicked and ran away. Only I understood
          that the rest of the souls were not trying to hurt them, but to
          frighten them, so that they wouldn't remain prisoners in the house
          too. <br />
          The painter's great love is the one who collects souls to share in her
          suffering. She acts through the paintings. Paintings that her husband
          cared about more than anything, even more than about her.
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
    },
  },
  'tick-tock': {
    en: {
      title: 'Tick Tock',
      author: 'Alexia Jianu',
      content: (
        <>
          An old clock chimed every hour, and the thought that I was going to
          leave to another country did not give me peace. <br />
          Like any other person, I was going to make my way through life away
          from what was holding me back, away from my tired hometown. I had
          packed my bags the day before and was now waiting for the bus in the
          same place where I had first left for school and the day I met Dina.
          She was going to be my classmate, steal my cookies from my backpack,
          splash me with ink, and make my life bitter. <br />
          A few years later, when my mom walked into my room and told me we were
          moving, I stopped saying hello to Dina. I'd cross to the opposite
          sidewalk when I saw her. <br />
          Now I was looking at the Norocea's garden from the bus stop and didn't
          know what to do. I was supposed to meet my family that was waiting for
          me at the station. I could see the bus approaching. Then, I ran into
          the yard and climbed the wooden stairs of the house. I strolled
          through the cool rooms, among the paintings and peasant embroidered
          towels hanging on the walls. I heard the driver calling me. There was
          neither Dina nor any trouble to shadow my way. But I decided to stay
          here in my own country.
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
      locations: ['casa-norocea'],
    },
  },
  'a-new-beginning': {
    en: {
      title: 'A New Beginning',
      author: 'Andra Șerban',
      content: (
        <>
          It was Saturday morning, 8 o'clock. At this hour, I usually slept or
          felt like throwing my phone out of the window because the alarm was
          ringing, but this night had been different. I had spent it thinking
          about the boy I used to talk to, who was always by my side and then
          suddenly disappeared. <br />
          Suddenly, I found myself alone on the bench in front of the train
          station, wondering what I had done wrong. I had pushed all my friends
          away to spend time with him, but he chose to leave without any
          explanation. With each passing train, my heart beat faster, thinking
          he was back to see me. This is where we used to spend our evenings.{' '}
          <br />
          As I sat on the bench in front of the station, surrounded by people
          and luggage, I felt a touch on my shoulder. I looked back. But it was
          just the conductor asking if I was okay. <br />
          I decided to leave, get on the first train and free myself. Before I
          left, I glanced towards the platform and saw two silhouettes. I
          recognized the one for whom I had cried and for whom I wanted to give
          up my town and friends, and who was now holding another girl in his
          arms. <br />
          All my questions were answered. This was the end, but also the
          beginning.
        </>
      ),
      footer:
        'Story written at the creative writing workshop of the Voice Your Place Summer School: Curtea de Argeș.',
    },
  },
  regăsire: {
    ro: {
      title: 'Regăsire',
      author: 'Elena Duminică',
      content: (
        <>
          S-a făcut 12 noaptea, iar eu umblu făra rost de pe la 8, de când am
          ajuns în gară. Simțisem de când am pășit pe peron cum mă lovește o
          nostalgie amară, apoi un fel de teamă irațională, poate chiar
          prostească – o teamă de casă. Deși tocmai de asta m-am întors, ca sa
          vin acasă. Uite că nici asta n-am reușit. Cum să profanez lăcașul
          copilăriei mele cu dezamăgirea maturității?
          <br />
          Mi-am croit drum prin toate parcurile și pe lângă curțile tuturor
          școlilor la care am învățat. Am intrat, însă, numai în cafenelele pe
          care le frecventasem în liceu. Ore bune am stat încremenită în fața
          ferestrelor cu vitralii, sorbind din câte o cafea. În fețele
          trecătorilor n-am mai recunoscut prieteni, cum o făceam cândva, însă
          am descoperit că oamenii au rămas la fel de preocupați de mărunțișuri.
          Am devenit un turist în orașul natal.
          <br />
          Nu mă mai știe nimeni aici, în acest colțișor de lume. Umblu ca o
          nălucă pe străduțele delapidate ale orașului vechi, când văd o rază
          albă, văruită, între norii cenușii ai istoriei. Neputând rezista
          chemării, pășesc repede spre pridvor. Istorisiri biblice învăluie
          pereții, înălțând spre tavan mitul creației. Biserica „Sfânta Treime”
          m-a așteptat aici încă din copilărie și probabil o să rămână aici mult
          după ce orașul va dispărea.
          <br />
          Ceasul a bătut 12. Cu punctualitate fantasmagorică, din umbre se
          desprinde o pisică. Lumina slabă a felinarelor îi făcea blana neagră
          să semene cu veșminte clericale. Într-adevăr, ea a rămas acum singura
          măicuță din acest templu atemporal. Mă sprijin de un stâlp și o invit
          în poala mea. Mieunatul ei îmi amintește de clinchetul unui clopoțel,
          mișcat de același vânt care freamătă printre crengi. Mintea mi se
          liniștește. Timpul parcă s-a oprit. În sfârșit, am ajuns și eu undeva.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'coming-back': {
    en: {
      title: 'Coming Back',
      author: 'Elena Duminică',
      content: (
        <>
          It's midnight and I`ve been wandering around since 8 in the morning,
          since I arrived at the train station. As soon as I stepped on the
          platform I felt a bitter nostalgia, then a stupid irrational fear— the
          fear of home. Although that`s why I am here, to come home. I guess I
          couldn't even pull that off. How can I dishonor my childhood home with
          the disappointment of adulthood?
          <br />
          I walked through all the parks and past the courtyards of all the
          schools I went to. I entered the cafes I frequented in high school.
          For hours I stood in front of the stained-glass windows, sipping
          coffee. I didn`t recognize friends in the faces of passersby, as I
          once did, but I found that people were still preoccupied with trifles.
          I became a tourist in my own home town.
          <br />
          No one knows me in this little corner of the world. I walk like a
          ghost through the dilapidated streets of the old town, when suddenly I
          see a white, whitewashed ray among the gray clouds of history. Unable
          to resist its call, I hurry to the porch. Bible stories shroud the
          walls, lifting the creation myth to the ceiling. “The Holy Trinity”
          Church has been here, waiting for me since childhood and will be here
          long after the town is gone.
          <br />
          The clock strikes 12. With ghost-like punctuality, a cat emerges from
          the shadows. The dim lamp light makes its black fur resemble a
          clerical robe. She is indeed the only nun in this timeless temple. I
          lean on a pillar and invite her into my lap. Her mewling reminds me of
          the tinkling of a bell stirred by the wind rustling through the
          branches. My mind quiets. Time seems to stand still. At last, I`ve
          arrived.
        </>
      ),
      footer: '',
    },
  },
  'vara-în-care-am-fost-doi': {
    ro: {
      title: 'Vara în care am fost doi',
      author: 'Emilia Diaconu',
      content: (
        <>
          Înainte de accident, îmi plăcea înghețata. Obișnuiam să petrecem zile
          întregi plimbându-ne prin centrul vechi, luând la rând toate
          gelateriile pe care le întâlneam în cale. Încercam fiecare aromă și ne
          întreceam să vedem cine înfulecă cel mai repede două cupe din cele mai
          bizare sortimente. Apoi, în fiecare seară, părinții începeau să-mi
          facă morală că îmi iroseam toți banii pe înghețată. Dar eu nu îi
          ascultam. Deja mă gândeam la ce aromă să încerc în dimineața
          următoare.
          <br />
          Înainte de accident, îmi plăcea să desenez. Descoperisem într-o zi o
          biserică mititică, într-o parte mai pustie a orașului, și mă
          îndrăgostisem instant. Mergeam în fiecare zi cu o agendă datată de
          acum trei ani și un penar frumos vopsit, din lemn, și desenam ore în
          șir stâlpii înflorați și pereții decorați cu îngeri. Ne imaginam că,
          în timp ce noi îi desenam pe ei pe hârtie, și îngerii ne sculptau pe
          noi în nori, iar apoi ne uitam la cer, încercând să ne găsim fiecare
          portretul.
          <br />
          Înainte de accident, aveam un prieten. El spunea că îl cheamă
          Silvestru, dar eu nu-l credeam. Nu mai auzisem niciodată un asemenea
          nume, nici în cărți, nici la televizor. În plus, părul lui creț și
          auriu îmi spulbera orice ipoteză că porecla ar fi provenit de la
          înfățișare, la fel ca ochii măslinii și obrajii mereu rumeni. În orice
          caz, am decis să nu le spun și părinților despre el. Aveau deja
          destule pe cap și oricum nu stăteau să mă asculte cum pălăvrăgeam
          despre ce făceam la școală sau prin oraș.
          <br />
          Prima dată l-am întâlnit în centrul vechi. Eram în excursie cu clasa
          și, într-un moment de neatenție, m-am pomenit singur pe o stradă
          abandonată. Nu mai fusesem până atunci în acea parte a orașului, iar
          clădirile bătrâne parcă se încruntau la mine, pline de crăpături și
          cărămizi descoperite. Le puteam auzi, strigându-mi dezgustate să le
          părăsesc cartierul. Neajutorat, m-am ascuns sub un tufiș și am început
          să plâng.
          <br />
          Atunci s-a arătat Silvestru, cu zâmbetul până la urechi, și a început
          să țipe la clădiri și să le certe pentru „comportamentul lor
          inadecvat”. Mi-a întins apoi o mână și m-a invitat să strig alături de
          el. La început m-am ferit, speriat de vocea lui impunătoare și de
          înfățișarea mai sărăcăcioasă. Văzând asta, băiatul m-a tras cu forța
          de sub tufiș și a continuat să strige, făcându-mi semn să-i urmez
          exemplul.
          <b />
          Aș fi rămas complet fără voce dacă urletele noastre n-ar fi ajuns,
          într-un final, și la doamna învățătoare, care și-a dat seama că
          lipseam și s-a întors după mine. M-a certat tot drumul de întoarcere.
          Roșie la față, la fiecare două propoziții mai făcea câte o pauză să
          respire, parcă stăpânindu-se să nu-mi plesnească una peste ceafă. În
          spatele ei stătea Silvestru, imitând-o la perfecțiune și râzând
          gălăgios. Eu tremuram, dar nu de frică, ci pentru că mă abțineam cu
          greu să nu zâmbesc.
          <br />
          Am petrecut apoi o vară pe cinste. Fiind cu cinci ani mai mare,
          Silvestru îmi povestea tot felul de lucruri interesante, despre el și
          despre lumea pe care o văzuse. Într-una din zile, pe la sfârșitul
          vacanței, am aflat că locuia singur într-o camionetă cu covrigi, după
          ce fugise de acasă. Nimeni nu îi observase încă lipsa, așa că trăia o
          viață liberă și împăcată. Îl invidiam într-un fel.
          <br />
          În acea seară, părinții mei s-au certat mai rău ca de obicei. Le
          puteam auzi urletele până și din camera mea, de sub perna cea mai
          groasă și cu ușa strâns închisă. Atunci mi-a venit o idee.
          <br />
          Decizia am luat-o rapid, pregătirile au fost mai dificile. Am îndesat
          în ghiozdanul de școală câteva haine de schimb, agenda și penarul,
          iar, ascunse în agendă, erau câteva bancnote rămase de la înghețata
          din acea zi. Eram gata. Tot ce mai rămânea de făcut era să găsesc o
          cale de a evada.
          <br />
          În sufragerie încă se mai aruncau cuvinte dureroase. Mi-am luat inima
          în dinți și am ieșit din camera mea cu ghiozdanul în spate și șapca pe
          cap, pregătit pentru ce era mai rău. Dar, spre surprinderea mea, nu am
          simțit nicio privire suspicioasă în ceafă și nicio pauză în cearta
          alor mei. Mi-am anunțat plecarea spunând că ies „la o scurtă
          plimbare”, dar nu mi-a răspuns nimeni. Mă simțeam ca o fantomă ce își
          bântuia propria casă. Am șoptit un pa” scurt și am trântit ușa de la
          intrare.
          <br />
          Știam cum se ajungea la camioneta cu covrigi, chiar dacă nu fusesem
          niciodată acolo. Silvestru îmi promisese de multe ori că mă va lua în
          vizită pe la el, dar mereu intervenea ceva și planul era abandonat.
          <br />
          Am dat nas în nas cu el în centrul vechi. Era întuneric beznă, iar
          lampa stradală de care stătea rezemat Silvestru era arsă de ani buni.
          L-am întrebat ce caută acolo la o asemenea oră, dar el m-a ignorat și
          m-a îndemnat să mă întorc acasă. Când i-am dezvăluit planul meu, n-a
          zis nimic.
          <br />
          Din acea noapte îmi mai amintesc doar o ceartă scurtă, urmată de o
          lumină puternică, tot mai apropiată, apoi de un claxon asurzitor.
          <br />
          Când m-am trezit pe patul de spital, nu-mi mai plăcea înghețata și nu
          mai voiam să desenez. Pe noptieră mă așteptau o duzină de buchete
          frumos ornate și de două ori mai multe felicitări, cumpărate probabil
          de la magazinul de vis-a-vis. În salon au intrat părinții mei,
          plângând și cerându-și iertare, promițându-mi că nu mă voi mai simți
          vreodată singur.
          <br />
          Dar ei nu știau de Silvestru, amicul meu cel mai bun pentru o singură
          vară. Pentru că, după accident, nu am mai avut niciun prieten.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'the-summer-we-were-two': {
    en: {
      title: 'The Summer We Were Two',
      author: 'Emilia Diaconu',
      content: (
        <>
          Before the accident, I used to love ice cream. We would spend days
          walking around the old town, entering all the ice cream shops we
          encountered. We would try every flavour and see who could gobble down
          two cups of the most bizarre varieties fastest. Then, at night, my
          parents would lecture me about wasting all my money on ice cream.{' '}
          <br />
          Before the accident, I liked to draw. One day I discovered this little
          church in a remote part of town and fell in love with it instantly. I
          went there every day with a three-year-old diary and a beautifully
          painted wooden pencil case, and spent hours drawing the flowery
          pillars and the angel- decorated walls. We imagined that while we were
          drawing them on paper, the angels were carving our images in the
          clouds, and then we would look at the sky, trying to find our
          portrait.
          <br />
          Before the accident, I had a friend. He said his name was Silvestru,
          but I didn`t believe him. I had never heard such a name before, not in
          books or on TV. Besides, his curly golden hair dispelled any
          hypothesis that the nickname had come from his looks, as did his
          green-brown-green and his ever rosy cheeks. In any case, i decided not
          to mention him to my parents. They had enough on their mind and they
          wouldn't listen to me anyway.
          <br />
          I first met him in the old centre. I was on a class trip and, because
          I wasn't paying attention, at one point I found myself alone on an
          abandoned street. I had never been to that part of town before, and
          the old buildings seemed to frown at me, full of cracks and exposed
          bricks. I could hear them, shouting at me to leave their neighborhood.
          Helpless, I hid under a bush and started crying.
          <br />
          That's when Silvestru appeared, grinning from ear to ear, and started
          yelling at the buildings and scolding them for their `inappropriate
          behavior`. He then held out a hand and invited me to shout with him.
          At first, I shied away, frightened by his commanding voice and unkempt
          appearance. Seeing this, the boy forcibly pulled me from under the
          bushes and continued to shout, beckoning me to follow his example.
          <br />
          I would have been completely lost my voice if our screams had not
          finally reached the teacher, who realized I was missing and came back
          for me. She scolded me all the way back. Behind her stood Silvestru,
          doing a perfect impression of her and laughing loudly. I was
          trembling, not out of fear, but because I had to control myself not to
          smile.
          <br />
          We had a great summer. Five years older, Silvestru told me all sorts
          of interesting things about himself and the world he had seen. He said
          he lived alone in a bagel truck after running away from home. No one
          had noticed he was missing, so he lived a free and peaceful life. I
          envied him. That night, my parents fought worse than usual. I could
          hear their screams even from my room, with my head under the thickest
          pillow with the door closed. Then I had an idea. The decision was
          quick, the preparations a bit more lengthy. I stuffed a few change of
          clothes, my diary and pencil case into my school bag. Hidden in the
          diary were a few bills left over from that day`s ice cream. I was
          ready. All that was left was to find a way to escape.
          <br />
          Painful words were still being spoken in the living room. I braced
          myself and walked out of my room with my backpack and my cap, prepared
          for the worst. But, to my surprise, I felt no suspicious look on the
          back of my neck and no pause in my parents` fight. I announced my
          departure saying I was going out `for a short walk`, but no one
          answered. I felt like a ghost haunting my own house. I whispered `bye`
          and went out.
          <br />
          I knew the way to the pretzel truck, even though I had never been
          there. Silvestru had promised me many times that he would take me to
          visit him, but something always came up and the plan was cancelled.
          <br />
          I ran into him in the old centre. It was pitch dark and the street
          lamp Silvestru was leaning against was out. I asked him what he was
          doing there at such a late hour, but he ignored me and urged me to go
          home. When I revealed my plan, he said nothing.
          <br />
          The only thing other I remember from that night is a brief argument,
          followed by a flash of a bright light coming closer and closer, then a
          loud honking horn.
          <br />
          When I woke up in the hospital bed, I didn`t like ice cream and I
          didn`t want to draw anymore. Waiting on my bedside table were a dozen
          beautifully decorated bouquets and twice as many cards from
          classmates, probably bought at the store across the street. My parents
          came into the room crying and apologizing, promising that I would
          never be lonely again. But they didn`t know about Silvestru, my best
          friend for one summer. Because after the accident, I never saw him
          again.
        </>
      ),
      footer: '',
    },
  },
  'cum-să-ignori-destinul': {
    ro: {
      title: 'Cum să ignori destinul (și să te împiedici de el)',
      author: 'Ștefania Diaconu',
      content: (
        <>
          Simțeam cumva în ceafă un suflu cald, ca o umbră care se ținea după
          mine, dar, dacă alergam destul de repede, poate că nu mă prindea
          niciodată. Încerca de mult timp să mă ajungă din urmă, dar de fiecare
          dată eu eram mai rapidă.
          <br />
          Viteza îmi dădea impresia că orice limită a timpului sau a spațiului
          este o iluzie, că pot, realist vorbind, să ajung din Progresu' în
          Centrul Vechi în mai puțin de 10 minute. Ceilalți slătineni pur și
          simplu nu fuseseră destul de creativi să descopere o cale de a face un
          drum de 30 de minute în 10.
          <br />
          Nimeni nu fugea mai repede ca mine. Tocmai de asta, de mai multe ori
          decât mi-ar fi plăcut să recunosc, aveam genunchii vineți, juliți,
          plini de sânge, peticiți cu trei-patru plasturi cu ponei, care reușeau
          doar să îmi dea mai multă încredere în mine și în viteza superumană pe
          care o posedam. Purtam plasturii ca pe o medalie, care arăta lumii
          exact ce voiam să transmit: nu îmi e frică să risc. Nu prea știam ce,
          dar în mintea mea suna foarte tare.
          <br />
          Și de asta întârziam mereu. Fugeam mereu. Fugeam și spre cabinetul
          doamnei dentist, de jos, din oraș, din Centrul Vechi. Trebuia să mă
          concentrez maxim. Nu îmi permiteam să cad pe dalele de piatră –
          experiențele anterioare mă făcuseră să am nevoie de ceva mai mult
          decât plasturii My Little Pony când mai luasem contact cu piatra
          ascuțită și rece, ieșită exact atât cât să îmi pună piedică. Fugeam și
          îmi era teribil de frică să nu cad, dar nu îndeajuns de frică încât să
          încetinesc.
          <br />
          Nu mai întârziasem până atunci la dentist. Nu știam ce se poate
          întâmpla. Mi-era frică de ce ar fi putut zice, iar mama mă tot suna să
          mă întrebe dacă am ajuns. Dar ea nu știa că mă grăbesc și că n-am timp
          să vorbesc cu ea?
          <br />
          Ajunsesem unde se împarte drumul, la Casa Hanciu. La Dreapta, rațiune,
          ordine, normalitate, cabinetul doamnei dentiste. Stânga nu însemna
          nimic. O greșeală, un derapaj de la drum. O alegere fără motiv. Un loc
          uitat de lume, cu dale de piatră strâmbe.
          <br />
          Casa Hanciu părea să respire într-un ritm doar al ei. Am căutat cu
          privirea balconul, l-am verificat cu coada ochiului, încercând să par
          indiferentă. Credeam că așa planul meu va reuși într-o zi. Eram
          absolut convinsă de faptul că locul nu este, de fapt, abandonat, ci că
          înăuntru locuia cineva într-un așa de mare secret, încât nimeni nu
          știe nimic despre asta. Și că acest cineva ieșea pe balcon doar când
          nu îl poate vedea nimeni. Speram că eram destul de rapidă încât să
          surprind momentul.
          <br />
          Nu am simțit cum vârful ghetei mi s-a agățat de marginea aspră a
          pietrei, dar am simțit impactul. O secundă de liniște. Pulsația
          sângelui în urechi și amorțeala aspră a asfaltului. Gustul amar al
          eșecului. Acum sigur nu mai ajung la dentist…
          <br />
          Telefonul e spart în colț, pe ecran apare ora prea târzie și numele
          mamei.
          <br />
          Mă ridic cât de repede pot și vreau să o iau iar la fugă, când simt că
          ceva îmi atinge genunchii proaspăt juliți. O codiță de pisică se
          leagănă în jurul meu. Îndoindu-și corpul cu o eleganță leneșă, pisoiul
          se rostogolește pe spate, lăsând burta moale și pufoasă la vedere.
          Tentația e prea mare. Mă opresc lângă ea să o mângâi.
          <br />
          Nici nu trebuie să mă uit la telefon. Știu că mama mă sună, că trebuie
          să fac dreapta urgent și să ajung la dentist.
          <br />
          Ochii pisicii sunt plini o cunoaștere inexplicabilă, iar eu mă întreb
          dacă nu cumva știu la fel de bine ca ea ce e de făcut. De ce încă
          încerc să mă grăbesc, să mă încadrez în ritmul unei lumi care cere
          prea mult, să merg pe drumul drept?
          <br />
          Pisica miaună scurt. Pornește în direcția opusă drumului meu.
          Mustățile îi freamătă ușor. Nu se grăbește. Nici eu nu mă mai grăbesc.
          Niciun sunet. Doar ochii ei aurii, fante înguste, care par că știu
          ceva ce eu nu știu încă. Nu a fost vreodată constrânsă de reguli, de
          limite externe, de timp?
          <br />
          Ea pleacă. Încep iar să alerg. Dar fug după ea, pe drumul din stânga.
          Pierd timpul, dar nu mă pierd pe mine.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'how-to-ignore-destiny': {
    en: {
      title: 'How to Ignore Destiny (and Stumble upon It)',
      author: 'Ștefania Diaconu',
      content: (
        <>
          I felt something warm in the back of my neck, like a shadow following
          me, but if I ran fast enough, it might never catch me. It had been
          trying to for a long time, but each time I was quicker.
          <br />
          The speed gave me the impression that the limits of time and space
          were an illusion, that I could make it from Progresu to the Old Center
          in less than ten minutes. The other people in Slatina simply hadn't
          been creative enough to figure out a way to make a thirty minute trip
          in ten.
          <br />
          No one ran faster than me. Which is why, more times than I'd like to
          admit, my knees were bruised or bloodied, patched with three or four
          pony plasters, which only gave me more confidence in myself and the
          superhuman speed I possessed. I wore the plasters like medals, showing
          the world exactly what I wanted to convey: I'm not afraid to take
          risks. I didn't really know what kind of risks exactly, but in my mind
          it sounded cool.
          <br />
          And that's why I was always late. I was always running. I was also
          running to the dentist's office in the Old Centre that day. I had to
          focus. I couldn't allow myself to fall on the stone slabs—previous
          experiences had left me needing more than My Little Pony patches once
          I had made contact with the sharp, cold stones, jutting out just
          enough to make me trip. I was running and I was very afraid of
          falling, but not enough to slow down.
          <br />
          I had never been late to the dentist before. I didn't know what the
          consequences might be. And my mom kept calling to ask if I had
          arrived. But didn't she know I was in a hurry and had no time to talk?
          <br />
          I arrived at the Hanciu House, where the road splits. To the Right,
          reason, order, normality, the dentist's office. Left meant nothing. A
          mistake, a drift off the road. A pointless choice. A forgotten place,
          with crooked stone slabs.
          <br />
          The Hanciu House seemed to breathe in a rhythm of its own. I looked
          for the balcony, I glimpsed it out of the corner of my eye, trying to
          look indifferent. I thought my plan would one day succeed. I was
          convinced that the place was not, in fact, abandoned, but that someone
          was living there in such secrecy that no one knew anything about it.
          And that this someone only came out on the balcony when no one was
          looking. I hoped I was fast enough to catch that moment.
          <br />
          I didn't feel the tip of my boot catch on the rough edge of the stone,
          but I felt the impact. A second of silence. The pulse of blood in my
          ears and the rough numbness of the asphalt. The bitter taste of
          failure. I was not going to make it to the dentist.
          <br />
          The corner of the phone is smashed, it's late and I can see my mom's
          name on the screen.
          <br />
          I get up as fast as I can and prepare to start running again, when I
          feel something touching my freshly-bloodied knees. A cat's tail
          swishes around me. Twisting its body with a lazy elegance, the kitten
          rolls onto its back, leaving its soft, fluffy belly exposed. The
          temptation is too great. I stop to pet it.
          <br />
          I don't even have to look at the phone. I know my mom is calling, that
          I need to turn right and get to the dentist.
          <br />
          The cat's eyes are full of inexplicable knowledge, and I start to
          suspect I might know something about it too. Why am I always hurrying,
          trying to fit into the rhythm of a world that demands too much, to
          walk the straight and narrow?
          <br />
          The cat meows curtly. She starts in the direction opposite to the one
          I need to take. Its whiskers quiver lightly. It doesn't hurry. And
          neither do I. Not a sound. Just her golden eyes, narrow slits that
          seem to know something I don't yet. Has the cat ever been constrained
          by rules, by external limits, by time?
          <br />
          The cat leaves. I start running again. But I run after her, down the
          road to the left. I may lose time, but I don't lose myself.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'destin-in-sala-veche': {
    ro: {
      title: 'Destin în sala veche',
      author: 'Mirela Crînguș',
      content: (
        <>
          Era o seară ploioasă în centrul vechi din Slatina, iar luminile
          stradale proiectau umbre misterioase pe fațadele clădirilor bătrâne.
          Cinematograful Victoria, o relicvă a vremurilor trecute, stătea tăcut
          și aparent abandonat pe o stradă ce a fost martoră la trecerea mai
          multor generații. Acest loc era un templu al filmului, un loc unde
          emoțiile se trăiau în întuneric, unde dragostea și suspansul se
          împleteau pe pânza albă.
          <br />
          Povestea începe într-o seară de primăvară în anii ‘60, când lumina
          felinarelor se reflecta pe trotuarele umede, iar oamenii se înghesuiau
          în fața intrării, așteptând să vadă cele mai noi producții aduse din
          București. Se spune că la premiera unui film celebru, sala era atât de
          plină, încât unii spectatori stăteau în picioare pe margini,
          hipnotizați de imaginile care se derulau pe ecran.
          <br />
          Eu, pasionată de filme, mă aflam la cinematograf într-una din acele
          zile aglomerate. Însă ceva era ciudat. Nu eram deloc atentă la ce se
          întâmpla pe ecran, nici la marea de oameni din jurul meu. Altceva îmi
          distrăgea atenția. Era ca și cum un spirit era prezent lângă mine. Am
          hotărât să revin într-o zi în care cinematograful era închis și să
          cercetez ce se întâmpla.
          <br />
          Duminica nu rula niciun film, iar clădirea era închisă. Cu ajutorul
          unei agrafe și cu puțină iscusință am pășit în sala cinematografului
          și am simțit fiori reci pe șira spinării. Sunetul pașilor mei răsuna
          puternic pe podeaua de lemn. Întunericul și liniștea mă nelinișteau și
          mai tare. Deodată, un fulger a luminat scurt încăperea. O siluetă
          diafană se contura pe scena veche. Era spiritul unei actrițe.
          <br />
          M-am simțit copleșită de teamă, dar și bucuroasă că instinctul meu nu
          mă înșelase și un spirit locuia acolo. Am rămas nemișcată, șocată de
          descoperirea pe care o făcusem și gândindu-mă la ce ar trebui să fac,
          să plec sau să îmi fac curaj să mă apropii. Am ales varianta a doua
          și, cu inima în gât, m-am apropiat astfel încât spiritul femeii să mă
          poată observa. Mă temeam de vreo reacție violentă, însă aceasta s-a
          apropiat de mine și am început să vorbim.
          <br />
          Fantoma mi-a spus că numele ei era Eliza și că fusese o actriță de
          mare succes, foarte cunoscută cu mulți ani în urmă, dar viața îi
          fusese curmată prea devreme. Vocea ei era o șoaptă dulce și tristă,
          purtată de vânt prin sala goală.  Ascultam cu atenție și, pe măsură ce
          povestea se desfășura, simțeam o simpatie profundă pentru ea.
          <br />
          După ce a terminat de povestit, Eliza mi-a arătat o cutie prăfuită din
          colțul încăperii. Înăuntru am găsit un jurnal vechi, îngălbenit de
          vreme. Am început să citesc paginile fragile, pline de secretele și
          gândurile Elizei. Cu fiecare pagină, viața ei prindea contur în fața
          ochilor mei, iar eu înțelegeam mai bine durerea și suferința prin care
          trecuse.
          <br />
          Într-o seară, Eliza primise o scrisoare misterioasă care o anunța
          despre un complot împotriva ei. Eliza a început să investigheze
          subiectul, dar nu a mai apucat să ajungă la rezolvarea misterului
          pentru că a fost găsită fără viață în cabina sa.
          <br />
          Am simțit o dorință crescândă să aflu adevărul și să îi fac dreptate
          Elizei.
          <br />
          Mergând la bibliotecă și vorbind cu persoane care o cunoscuseră, am
          adunat un dosar de articole de ziar și scrisori. Toate indiciile
          sugerau că moartea ei fusese pusă la punct de către iubitul ei, un
          regizor celebru, gelos pe succesul ei la public.
          <br />
          M-am simțit copleșită de nedreptatea acestei povești. Atunci am luat
          hotărârea să scriu un articol în care să aduc la lumină adevărul
          despre Eliza.
          <br />
          Publicarea articolului a avut un impact uriaș. Cinematograful
          Victoria, pe lângă un loc plăcut de vizionat filme, a devenit și un
          loc în care veneau cei interesați de povestea tragică a actriței. Deși
          nu mai era printre noi, Eliza a reușit să își găsească liniștea, iar
          spiritul ei n-a mai fost văzut niciodată în cinematograf.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'destiny-in-the-old-cinema-hall': {
    en: {
      title: 'Destiny in the Old Cinema Hall',
      author: 'Mirela Crînguș',
      content: (
        <>
          It was a rainy evening in the Old Centre of Slatina, and the street
          lights cast mysterious shadows on the facades of old buildings. The
          Victoria Cinema, a relic of bygone times, stood silent and seemingly
          abandoned on a street that had witnessed the passing of generations.
          This place has been a temple of movies, a place where emotions were
          lived in the dark, where love and suspense mixed on the white canvas.
          <br />
          The story begins on a spring evening in the 1960s, when the damp
          sidewalks reflected the light of street lamps, and people crowded
          outside the entrance, waiting to see the latest productions from
          Bucharest. It is said that when a famous film premiered, the hall was
          so crowded that spectators had to stand on the sides, mesmerized by
          the images unfolding on the screen.
          <br />
          As a big fan of movies, I was at the cinema on one of those busy days.
          But something was strange. I wasn't paying attention to the film, nor
          to the sea of people around me. Something else was distracting me. It
          was as if there was a spirit present beside me. I decided to come back
          when the theater was closed and investigate what was happening.
          <br />
          No movie was playing on Monday and the building was closed. With the
          help of a paperclip and a little dexterity, I stepped into the movie
          theater and felt cold chills down my spine. The sound of my footsteps
          echoed loudly on the wooden floor. The darkness and silence made me
          uneasy. Suddenly, a flash of lightning briefly lit up the room. An
          airy silhouette loomed in front of the screen. It was the spirit of an
          actress.
          <br />
          I felt overwhelmed with dread, but also glad that my instinct had not
          deceived me and a spirit really lived there. I stood motionless,
          shocked by the discovery and wondering what I should do, leave or
          pluck up the courage to approach her. I chose the latter and, with my
          heart beating fast, I advanced, so that the woman's spirit could see
          me. I feared a violent reaction, but she came towards me and we began
          to talk.
          <br />
          The ghost told me that her name was Eliza, and she had been a very
          successful and well-known actress many years ago, but that her life
          had ended before its time. Her voice was a sweet, sad whisper, carried
          by the wind through the empty hall. I listened attentively and as the
          story unfolded I felt a deep sympathy for her.
          <br />
          After she finished telling her story, Eliza showed me an old box in
          the corner of the room. Inside I found an old diary, yellowed by time.
          I began to read the fragile pages, full of Eliza's secrets and
          thoughts. With each page, her life took shape before my eyes, and I
          understood better the pain and suffering she had gone through.
          <br />
          One evening, Eliza had received a mysterious letter announcing a plot
          against her. Eliza began to investigate the subject, but she did not
          have time to solve the mystery because she was found lifeless in her
          cabin.
          <br />
          I felt a growing desire to find out the truth and do justice to Eliza.
          <br />
          By going to the library and talking to people who had known her, I
          gathered a folder of newspaper articles and letters. All indications
          suggested that her death had been orchestrated by her lover, a famous
          director, jealous of her success.
          <br />
          I felt overwhelmed by the injustice of this story. That's when I
          decided to write an article and bring to light the truth about Eliza.
          <br />
          It had a huge impact. The Victoria Cinema became not only a place
          where people watched movies, but also a place for people interested in
          the tragic story of the actress. Although she was no longer with us,
          Eliza was able to find peace, and her spirit was never seen in the
          cinema again.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'visând-cu-ochii-deschiși': {
    ro: {
      title: 'Visând cu ochii deschiși',
      author: 'Isidora Pungaru',
      content: (
        <>
          Să fii adolescent este complicat, dar să fii adolescent într-un oraș
          mic, precum Slatina, este cu totul altceva, plictiseală și multă
          banalitate. Orașele mari au cetăți, centre vechi care sunt
          chiar...centre, situate în inima orașului, cu clădiri de o frumusețe
          copleșitoare, care emană măreție. Ce are Slatina? Un ,,centru” vechi,
          mai mult o periferie veche. Deși m-am plimbat prin el de nenumărate
          ori,nu prea mi-am bătut capul cu acest ,,centru vechi”. Asta până vara
          trecută, când, aflată într-o vizită la Muzeul Județean, am aflat
          importanța și frumusețea Slatinei de odinioară. Un vechi târg cu
          însemnătate majoră pentru comerțul dintre Asia și Europa! Dar cel mai
          mult m-a impresiona clădirea impunătoare de la intrarea în centrul
          Vechi, cum cobori de la Muzeul Județean, ce separă două drumuri, ca o
          răscruce între trecut și prezent.
          <br />
          Așa stăteam eu într-o zi și îi admiram motivele arhitecturale din
          secolul 19 de pe fațadele Casei Hanciu. Ce făceam eu acolo, vă
          întrebați. Așteptam un băiat.
          <br />
          Mă uitam la clădire și încercam să îmi imaginez ce viață aș fi avut eu
          dacă trăiam pe vremea când această era o cârciumă? Aș fi lucrat acolo?
          Sau poate aș fi fost chiar fata cârciumarului? Cu o fustă lungă,
          scrobită, din postav negru sau verde, aș fi curățat mesele din lemn de
          cireș după închiderea localului, seara, la lumina lumânărilor? Sau aș
          fi fost…
          <br />
          Un claxon frenetic mă întrerupe din visare. Ciudat, pe aici abia trec
          oameni, d-apăi mașini!
          <br />
          Mă mut pe trotuar și continui să privesc balconul din cărămidă.
          <br />
          Dacă aș fi fost fiica cârciumarului, cu siguranță aș fi ales camera
          din față și aș fi privit dimineața pe fereastră carele trase de boi
          sau cai zglobii tropăind cadențat pe dalele pavajului ud de ploaie. Aș
          fi privit cum oamenii trec pe stradă și vorbesc cu tatăl meu. Mi-aș fi
          dat părul după ureche și aș fi zâmbit la soare, să mă mângâie cu
          primele lui raze. Mi-aș fi ales o rochiță cu mâneci scurte, din
          bumbac, numai bună pentru o zi însorită. Peste aș fi pus un șorțuleț
          făcut de mama, ca să pot să-mi încep munca, jos, în cârciumă, unde
          zumzetul și zarva s-ar fi auzit deja din stradă, poate chiar de la
          Olt. Și aș fi așteptat să apară băiatul care mi-e drag.
          <br />
          Ochii mi se concentrează treptat pe clădirea din fața mea și pe
          realitatea ce mă înconjoară, nu pe infinitele bucăți de istorisiri
          insolite care-mi trec prin minte. I-am dat întâlnire aici băiatului pe
          care-l aștept tocmai pentru că vreau să-i arăt clădirea aceasta.
          Telefonul vibrează în mâna mea. Un mesaj de la el. Îmi spune că
          regretă că nu poate să mai vină, dar l-au chemat prietenii să se joace
          pe calculator.
          <br />
          Zâmbesc de una singura, uitându-mă la aceasta clădire învăluită-n
          razele asfințitului, cu cele două cupole aurite de soare, ce par să o
          întinerească… Oare la câte povești tragice o să mai asiste?
          <br />
        </>
      ),
      footer: '',
    },
  },
  daydreaming: {
    en: {
      title: 'Daydreaming',
      author: 'Isidora Pungaru',
      content: (
        <>
          Being a teenager is complicated, but being a teenager in a small town
          like Slatina is something else altogether, very banal and boring. Big
          cities have fortresses, old centres that are really... centres,
          located in the heart of the city, with buildings of overwhelming
          beauty that convey grandeur. What does Slatina have? An “old centre",
          more like an old periphery. Although I've walked around it many times,
          I didn't really bother with this "old center". That was until last
          summer, when, on a visit to the County Museum, I discovered the
          importance and beauty of the old Slatina. An ancient commercial town
          of major significance for the trade between Asia and Europe! But I was
          most impressed by the imposing building at the entrance to the Old
          Centre, as you come from the County Museum, at the crossroad between
          two roads as if between past and present.
          <br />
          I was standing in front of it one day, admiring the 19th century
          architectural motifs on the facades. What was I doing there, you ask.
          I was waiting for a boy.
          <br />
          I looked at the building trying to imagine what my life would have
          been had I lived there when it hosted a pub. Would I have worked
          there? Or maybe I would have been the owner's daughter? In a long
          skirt of black or green linen, I would have cleaned the cherry-wood
          tables after closing time by candlelight. Or I would have…
          <br />
          A frantic honk interrupts my daydreaming. Strange, there are hardly
          any people around here, let alone cars! I move over to the sidewalk
          and continue watching the brick balcony.
          <br />
          If I were the owner's daughter, I would certainly have chosen the
          front room and looked out of the window in the mornings at the
          ox-drawn carriages or the frisky horses trotting in cadence across the
          wet paving stones. I would watch people walk by and talk to my father.
          I would tuck my hair behind my ear and smile at the sun, basking in
          its rays. I would pick a short-sleeved cotton dress, just right for a
          sunny day. On top, I would wear a little apron made by my mother, so
          that I could begin my work downstairs, in the pub whose buzz and
          bustle could be heard from the street, perhaps even from the Olt. And
          I would be waiting for the boy I loved.
          <br />
          My eyes gradually focus on the building in front of me and the reality
          that surrounds me, not on the infinite bits of stories that go through
          my mind. I'm meeting this boy here precisely because I want to show
          him this building. The phone vibrates in my hand. A message from him.
          He tells me he's sorry he can't make it, but his friends invited him
          over to play computer games.
          <br />
          I smile to myself, looking at the building shrouded in the rays of the
          sunset, its two sun-gilded domes making it look rejuvenated... I
          wonder how many more tragic stories it will witness.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'seara-întâlnirii': {
    ro: {
      title: 'Seara Întâlnirii',
      author: 'Mihai Calofir',
      content: (
        <>
          Era o seară superbă de vară. Oamenii începuseră să iasă după marele
          val de căldură. Eu și prietenii mei ne plimbam prin centrul vechi,
          admirând arhitectura clădirilor.
          <br />
          Dintr-o dată, am văzut un grup de oameni intrând pe ușile larg
          deschise ale cinematografului Victoria. În sală, o sumedenie de scaune
          erau ocupate de oamenii care așteptau nerăbdători filmul pe cale sa
          înceapă. Eu și prietenii mei ne-am cumpărat bilete să vizionam și noi
          filmul.
          <br />
          M-am așezat lângă o tipă scundă, cu ochi verzi, că părul scurt, șaten,
          îmbrăcată cu o rochie neagră. M-am îndrăgostit pe loc. Voiam să încep
          o conversație cu ea, dar tot ezitam, de teamă că mă va ignora sau se
          va muta pe alt scaun.
          <br />
          Filmul începuse, dar eu tot la ea mă uitam, subtil, cu coada ochiului.
          Tot încercam să găsesc ceva de zis. Fix cand să scot un cuvânt, sala a
          fost cuprinsă de flăcări. M-am ridicat de pe scaun și am luat-o de
          mână, încercând să o scot afară, printre oamenii care țipau și alergau
          spre ieșire.
          <br />
          Afară am întrebat-o dacă a pățit ceva. Am început sa vorbim, uitând de
          tot ce se întâmplase la cinema. Am condus-o acasă. Eram sigur că
          drumurile noastre se vor mai intersecta și ne vom întâlni curând.
        </>
      ),
      footer: '',
    },
  },
  'the-night-i-met-her': {
    ro: {
      title: 'The Night I Met Her',
      author: 'Mihai Calofir',
      content: (
        <>
          It was a beautiful summer evening. People were starting to come out
          after the big heat wave. My friends and I were walking around the old
          center, admiring the architecture of the buildings.
          <br />
          Suddenly, I saw a group of people entering the wide-open doors of the
          Victoria Cinema. In the theater, many seats were already taken by
          people eagerly waiting for the movie about to start. My friends and I
          bought tickets too.
          <br />
          I sat next to a short, green-eyed girl with short brown hair, dressed
          in a black dress. I fell in love instantly. I wanted to strike up a
          conversation with her, but I kept hesitating, afraid she would ignore
          me or move to another seat.
          <br />
          The movie had started, but I was still watching her, subtly, out of
          the corner of my eye. I kept trying to think of something to say. Just
          as I was about to say something, the room was engulfed in flames. I
          got up from my chair and grabbed her hand, trying to pull her out
          through the crowd of people screaming and running for the exit.
          <br />
          Outside I asked her if she was all right. We started talking and we
          soon forgot about what had happened at the movies. I walked her home.
          I was sure our paths would cross again and we would meet again soon.
          <br />
        </>
      ),
      footer: '',
    },
  },
  scenă: {
    ro: {
      title: 'Scenă',
      author: 'Bianca Mareș-Frunză',
      content: (
        <>
          Lumina slabă, acompaniată de muzica lentă, care vine de la pickup-ul
          din colțul sufrageriei, fac să pară că timpul stă pe loc. <br />
          Kora, o fată cu părul roșcat și ochi căprui se uita în gol, în timp ce
          Henry, un tip înalt și brunet, se uită fără să scoată un cuvânt cum o
          rază de lumină pătrunde pe fereastră și se izbește de fața fetei.
          <br />
          Henry se ridică de pe fotoliul vechi și se apropie de fata cu ochi
          căprui. Ține în mână o agendă.
          <br />
          - De ce te uiți în gol? întreabă el.
          <br />
          - Eu? răspunde ea cu o voce răgușită.
          <br />
          - Da, tu. Mai e cineva aici în afară de noi? spune el sarcastic.
          <br />
          Fata smulge brusc agenda din mâna băiatului.
          <br />
          - Este agenda mea! exclamă ea ușor schimbată la față.
          <br />
          - Știu. Pare a fi mai mult un jurnal, nu crezi? zice el cu voce calmă.
          <br />
          - E a mea, mai contează ce este?!
          <br />
          Ea strânge agenda atât de tare, încât mâinile i se albesc.
          <br />
          - Personajele din ea, zice el și se oprește el pentru un moment.
          Reprezintă pe cineva?
          <br />
          - Nu este problema ta ce scriu eu, izbucnește ea.
          <br />
          El își așază mâna pe umărul ei, iar fața ei furioasă se calmează.
          <br />
          - Alec, băiatul din agendă... este cineva pe care îl cunoști în
          realitate?
          <br />
          - Nu, răspunde ea sarcastică. Normal că știi cine este, nu te mai
          preface. Ce băiat a mai venit vreodată în casa bunicii mele?
          <br />
          - Deci, sunt special pentru tine?
          <br />
          Pickup-ul se oprește. El se apropie ușor de ea, până când fruntea lui
          o atinge pe a ei.
          <br />
          Ecranul de proiecție al cinematografului se întunecă, iar eu mă ridic
          și ies nedumerită din cinematograful de pe Strada Lipscani, care a
          rămas fără curent.
        </>
      ),
      footer: '',
    },
  },
  scene: {
    en: {
      title: 'Scene',
      author: 'Bianca Mareș-Frunză',
      content: (
        <>
          The dim lighting, accompanied by the slow music coming from the record
          player in the corner of the living room, makes time seem like it is
          standing still.
          <br />
          Kora, a red-haired, brown-eyed girl stares blankly, while Henry, a
          tall, dark-haired guy, watches wordlessly as a beam of light enters
          through the window and lands on the girl's face.
          <br />
          Henry rises from the old armchair and approaches the brown-eyed girl.
          He is holding a notebook. - Why are you staring blankly? he asks.
          <br />
          - Me? she replies in a hoarse voice.
          <br />
          - Yes, you. Is there anyone here besides us? he says sarcastically.
          <br />
          The girl suddenly snatches the notebook from the boy's hand.
          <br />
          - It's my notebook! she exclaims, her face slightly changed.
          <br />
          - I know. It looks more like a diary, don't you think? he says calmly.
          <br />
          - It's mine, who cares what it is!
          <br />
          She clutches the diary so tightly, her hands turn white.
          <br />
          - The characters in it, he says and pauses for a moment. Do they
          represent anyone?
          <br />
          - It's none of your business what I write, she bursts out.
          <br />
          He places his hand on her shoulder, and her angry face calms down.
          <br />
          - Alec, the boy in the notebook... is he someone you really know?
          <br />
          - No, she replies sarcastically. Of course you know who he is, stop
          pretending. What other boy has ever come to my grandmother's house?
          <br />
          - So am I special to you?
          <br />
          The record player stops. He slowly moves closer to her, until his
          forehead touches hers.
          <br />
          The cinema screen goes dark, and I get up and walk away puzzled from
          the cinema on Lipscani Street, where the power has gone off.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'o-lecție': {
    ro: {
      title: 'O lecție',
      author: 'Sonia Ciulu',
      content: (
        <>
          În fiecare weekend mergeam împreună cu părinții mei la cinematograful
          din centrul vechi. Era un obicei care ne aducea multă bucurie, mai
          ales că puteam să aleg eu filmul. Într-o zi însorită de sâmbătă, am
          intrat fericită în cinematograf, deoarece urma să văd un film de
          desene animate pe care voiam să-l văd de mult.
          <br />
          În timp ce părinții mei s-au dus să cumpere biletele, am observat că
          din sala de cinema se auzeau niște sunete intrigante. Curioasă din
          fire, m-am apropiat de ușă, fără să-mi dau seama că mă îndepărtam tot
          mai mult de părinții mei. Tot fără să mă gandesc, am intrat în sala
          întunecată și am rămas cu ochii la ecran.
          <br />
          După câteva minute, când mi-am dat seama că eram singură, un fior rece
          m-a cuprins. În jurul meu erau numai necunoscuți, ecranul uriaș și
          ecourile unei lumi care nu îmi aparținea. Am încercat să mă întorc de
          unde venisem dar, în întuneric, nu mai știam în ce direcție să o iau.
          Începuse să mă cuprindă panica.
          <br />
          Între timp, părinții mei, observând lipsa mea, au început să mă caute
          disperați. Se plimbau prin cinematograf și întrebau oamenii dacă
          vazusera o fetiță de 7 ani, blondă, cu ochii verzi, îmbrăcată într-o
          rochiță roz. Până la urmă, un paznic m-a observat, mi-a zâmbit și m-a
          întrebat cu ce mă poate ajuta, iar eu i-am explicat că mi-am pierdut
          părinții. În scurt timp, m-a adus înapoi la ei. Cand i-am văzut, le-am
          sărit în brațe, plângând și promițându-le că niciodată nu voi mai
          pleca de lângă ei.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'a-lesson': {
    en: {
      title: 'A Lesson',
      author: 'Sonia Ciulu',
      content: (
        <>
          Every weekend my parents and I used to go to the cinema in the old
          centre. It was something we enjoyed a lot, especially because I got to
          choose the movie. One sunny Saturday, I walked into the cinema happy
          because I was going to watch a cartoon that I had wanted to see for a
          long time.
          <br />
          As my parents went to buy the tickets, I noticed some intriguing
          sounds coming from the movie theater. Curious by nature, I approached
          the door, not realizing that I was getting further away from my
          parents. Then, without thinking, I entered the darkened room and
          remained staring at the screen.
          <br />
          After a few minutes, when I realized I was alone, a cold chill came
          over me. All around me were strangers, the huge screen and echoes of a
          world that didn't belong to me. I tried to turn back the way I had
          come, but in the darkness, I didn't know which way to turn. I began to
          panic.
          <br />
          In the meantime, my parents, noticing my absence, started desperately
          looking for me. They were walking around the movie theater asking
          people if they had seen a seven-year-old girl, blond, green-eyed,
          wearing a pink dress. Eventually, a security guard noticed me, smiled
          and asked how he could help me, and I explained that I had lost my
          parents. Before long, he brought me back to them. When I saw them, I
          jumped into their arms, crying and promising them that I would never
          again wander off.
          <br />
        </>
      ),
      footer: '',
    },
  },
  regizorul: {
    ro: {
      title: 'Regizorul',
      author: 'Alexandra Pojoga',
      content: (
        <>
          Eram regizor. Alex Voicu îmi spuneau. Nimic în lumea cinema-ului nu
          îmi era străin, fragmentele negre dintre secvențe, gălăgia și
          suspansul erau toate lucruri vechi, prin care trecusem de un million
          de ori. Cunoșteam finalul oricărui film, vedeam greșelile fiecărui
          actor și, în sinea mea, știam ca nu exista întrebare la care sa nu
          știu răspunsul. Știam tot.
          <br />
          Sau poate știam tot pănă când a apărut ea. Până când i-am văzut ochii
          verzi-căprui, acoperiți de părul brunet ce îi cădea pe umeri. Până
          când i-am văzut ochii înlăcrimați în timpul scenelor triste și până
          când am auzit primul „bună”.
          <br />
          Acum eram neștiutor și o vedeam numai pe ea, în timp ce restul lumii
          era alb-negru. Vedeam prin sufletul tuturor, dar în cazul acesta era
          ceva diferit. Nimeni nu putea vedea adevărata persoana, nici măcar un
          ochi antrenat ce a studiat oamenii toată viața.
          <br />
          Următoarea zi am mers la același film, în speranța că o voi găsi
          acolo, și așa a fost. Se pare ca nu era totuși așa de imprevizibilă
          cum o credeam. <br />
          Toată lumea din sală se bucura de film. Eu m-am întors spre ea și am
          auzit-o spunând „vrei sa ne cunoaștem mai bine?”. Nu am ezitat sa spun
          „da”.
          <br />
          Ne vedeam în fiecare zi, mi se părea ca încep să o cunosc într-adevăr.
          Mereu ne întâlneam la cinema. Deja știam ce urma să zică, să facă și
          nu a durat mult până la primul „te iubesc”.
          <br />
          Săptămânile au trecut și o spusesem de atatea ori și totuși aveam
          răbdare, poate într-o zi avea să realizeze cât de mult înseamna pentru
          mine si nu avea să mă mai lase la fiecare final de film pentru alt
          bărbat. Mereu și mereu același, care zicea și el aceleași lucruri,
          făcea aceleași gesturi mecanice aproape.
          <br />
          Această fericire amară nu a durat mult. Am primit vestea că se
          închidea cinematograful. Într-o grabă pe care nu cred ca am mai
          trăit-o vreodată, am ajuns în sala de cinema să o văd pentru ultima
          dată. Să îmi spună aceleași lucruri, pe un ton care devenise deja
          monoton, și să mă părăsească pentru același bărbat pentru ultima dată.
          <br />
          Cu ochii încețoșați de lacrimi, priveam ecranul de pe care și ea mă
          privea înapoi. „De ce l-am făcut atat de scurt”, a fost ultimul gând
          înainte ca ecranul să se întunece și să apară scris: „regizat de Alex
          Voicu.”
        </>
      ),
      footer: '',
    },
  },
  'the-director': {
    ro: {
      title: 'The Director',
      author: 'Alexandra Pojoga',
      content: (
        <>
          I was a director. They called me Alex Voicu. Nothing in the world of
          cinema was foreign to me, the black borders between frames, the noise
          and the suspense were old things that I had been through a million
          times. I knew the ending of every movie, I saw every actor's mistakes,
          and deep down I knew that I had the answer to all the questions. I
          knew everything.
          <br />
          Or maybe I knew everything until she appeared. Until I saw her
          greenish-brown eyes shaded by chestnut bangs and hair that fell to her
          shoulders. Until I saw her teary eyes during the sad scenes and heard
          the first "hello".
          <br />
          I became oblivious and saw only her while the rest of the world was
          black and white. I saw through everyone's souls, but this was
          different. No one could see the real person, not even a trained eye
          that had studied people all his life.
          <br />
          The next day I went to the same movie, hoping to find her there, and I
          did. Turns out she wasn't as unpredictable as I thought.
          <br />
          Everyone in the theater was enjoying the movie. I watched her and
          heard her say "do you want to get to know each other better?". I
          didn't hesitate to say "yes".
          <br />
          We saw each other every day, I felt like I was really getting to know
          her. We always met at the movies. I already knew what she was going to
          say and do, and it wasn't long before the first "I love you".
          <br />
          Weeks passed and I had said it so many times and still I was patient.
          Maybe one day she would realize how much she meant to me and she
          wouldn't leave at the end of a movie with another man. Always the same
          man, who also said the same things, made the same almost mechanical
          gestures.
          <br />
          This bitter happiness didn't last long. I got the news that the cinema
          was closing. In a hurry I don't think I've ever experienced before, I
          went to the movie theater to see her one last time. To hear her tell
          me the same things, in a tone that had become monotonous, and to leave
          me for the same man for the last time.
          <br />
          With blurry eyes, I watched the screen from which she was looking back
          at me. "Why did I make it so short," was the last thought before the
          screen went dark and the writing appeared: "Directed by Alex Voicu."
        </>
      ),
      footer: '',
    },
  },
  'enigma-casei-hanciu': {
    ro: {
      title: 'Enigma Casei Hanciu',
      author: 'Lidia Rezeanu',
      content: (
        <>
          Se apropie sfârșitul liceului și trebuie să încep să strâng bani
          pentru facultate. Mai am un an, deci mă gândesc să lucrez undeva.
          <br />
          Prin Slatina nu prea ai așa multe oportunități ca elev. Singura
          opțiune este să lucrez la Casa Hanciu. Nu mă încântă ideea de a lucra
          într-un loc plin de oameni care beau bere toată ziua, însă am nevoie
          de bani.
          <br />
          Casa Hanciu e o clădire destul de înaltă, aflată la intersecția a două
          străzi importante, acoperită de crengile copacilor răscolite de vânt.
          Două străzi pe care circulă mașini și o parcare care, sincer, nu știu
          de ce e așa aproape de intrarea unui bar.
          <br />
          Patronul, un domn scund, cu ochii ageri și cu o față serioasă de
          afacerist, mai trece din când în când să bea o bere cu clienții, fără
          să se deranjeze să verifice și ce fac eu. De fapt, de când am început
          să lucrez aici, nu m-a verificat decât o singură dată.
          <br />
          Lunile trec, copacii adorm și apoi încep să se trezească.
          <br />
          Într-o zi, printre mulțimea de suflete pierdute, apare dintr-o dată
          cineva nou. E un bărbat înalt, destul de tânăr, cu ochi obosiți și
          părul lins. E îmbrăcat de parcă tocmai ar fi fost la o înmormântare.
          Mă gândesc că poate și-a prezis deja viitorul. Vine la mine, îmi
          comandă o bere, o plătește și se așază la o masă rotundă, începând să
          citească un ziar. Mai ciudat decât faptul că citește ziare (serios,
          cine mai citește acum așa ceva?) este faptul că nu a luat nici măcar o
          gură din berea comandată.
          <br />
          Face asta în fiecare zi, timp de mai multe săptămâni. Stă la masa lui,
          de dimineața până seara, citind.
          <br />
          A venit vremea caldă și frumoasă. Șeful n-a mai trecut pe la bar de
          vreo câteva săptămâni. Poate s-a dus undeva, într-o vacanță. Toată
          afacerea rămâne pe umerii mei.
          <br />
          Zilele trec. Încerc să mă descurc cu aceiași clienți, dar dispar unul
          câte unul. Nea Ion n-a mai venit de vreo câteva zile, el, care ajungea
          înainte de deschidere. Nici prin oraș nu l-am mai văzut. Și Nea Radu
          lipsește. Și Nea Gelu. Și Nea Petrică. Și Nea George. Chiar și
          bărbatul în negru ajunge din ce în ce mai târziu.
          <br />
          Ceva nu e bine. L-am sunat pe patron, dar nu răspunde.
          <br />
          O nouă săptămână. Și mai mulți clienți dispar. Bărbatul în negru își
          citește ziarul și dă banii degeaba pe bere.
          <br />
          Săptămânile trec și ajung singură în bar. Bărbatul în negru mă
          privește peste ziar și are în priviri ceva sinistru. Decis să nu mai
          deschid. Patronul nu dă niciun semn.
          <br />
          Într-o seară liniștită, după o zi lungă de învățat, mă așez pe canapea
          și deschid televizorul să mă uit la știri. Îl văd pe bărbatul în
          negru, arestat. În josul ecranului scrie: „criminal în serie”.
          <br />
        </>
      ),
      footer: '',
    },
  },
  'the-mystery-of-hanciu-house': {
    en: {
      title: 'The Mystery of Hanciu House',
      author: 'Lidia Rezeanu',
      content: (
        <>
          The end of highschool is near and I have to start saving money for
          college. I still have a year left, so I decide to get a job.
          <br />
          There aren't many employment opportunities for highschool students in
          Slatina. My only option is to work at Hanciu House. I am not thrilled
          by the idea of working in a place where people drink beer all day
          long, but I need the money.
          <br />
          Hanciu House is a rather tall building at the intersection of two
          major streets covered in wind-swept tree branches. Two streets used by
          cars and a parking lot that, frankly, I don't know why is so close to
          the bar entrance.
          <br />
          The owner, a short, sharp-eyed man with a serious businessman's face,
          drops in every now and then to have a beer with the customers, without
          bothering to check on me. In fact, since I've started work here, he's
          only checked on me once.
          <br />
          Months go by, the trees fall asleep, then they start waking up.
          <br />
          One day, among the crowd of lost souls, I notice someone new. He's a
          tall young man, with tired eyes and lank hair. He's dressed like he's
          just been to a funeral. I think to myself: maybe he's already
          predicted his future. He comes over, orders a beer, pays for it, then
          sits down at a table and starts reading a newspaper. Even stranger
          than the fact that he reads newspapers (seriously, who reads
          newspapers nowadays?) is the fact that he hasn't taken one sip of his
          beer.
          <br />
          He does this every day for several weeks. He sits at his table,
          morning till evening, reading.
          <br />
          The weather has turned warm and nice. My boss hasn't been to the bar
          in a couple weeks. Maybe he went on holiday. It's up to me to run the
          business.
          <br />
          Days go by. I try to keep the customers coming, but one by one they
          disappear. Nea Ion, who used to arrive before opening time, hasn't
          shown up in a few days. I haven't seen him around town either. Nea
          Radu is missing too. The same of Nea Gelu. And Nea Petrică. And Nea
          George. Even the man in black arrives later and later.
          <br />
          Something's not right. I call the boss, but no answer.
          <br />
          Another week. More customers stop coming. The man in black reads his
          paper and spends more money on beer.
          <br />
          Weeks pass. I end up alone at the bar. The man in black looks at me
          over the newspaper. There's something sinister in his gaze. I decide
          to close the bar. The owner is still unreachable.
          <br />
          One quiet evening, after a long day of studying, I sit on the couch
          and turn on the TV to watch the news. The man in black has been
          arrested. At the bottom of the screen it says: "serial killer".
          <br />
        </>
      ),
      footer: '',
    },
  },
  'dragul-meu-prieten': {
    ro: {
      title: 'Dragul meu prieten',
      author: 'Dragoș Rasnoveanu',
      content: (
        <>
          Era o zi obișnuită de vară. M-am trezit în jurul orei 11 și m-am
          simțit ușurat, realizând că nu trebuie să merg la  liceu. Era ultima
          lună de vacanță. Am aprins telefonul și am fost surprins de amalgamul
          de mesaje necitite de la prieteni. Am început sa scrolez prin ele, dar
          de obicei nu vezi lucruri așa interesante în conversațiile băieților.
          M-am dus să mă spăl pe dinți și pe ochi. Când am ieșit de la baie,
          holul întunecat făcea să fie o atmosfera sinistră în casă. M-am oprit
          în fața ușii părinților mei și am deschis încet ușa. Eram singur
          acasă. Am lăsat ușa larg deschisă, ca să pătrundă lumina, iar holul să
          nu mai pară atât de lung și sumbru. În bucătărie mi-am luat niște ouă
          și mi-am făcut prânzul. Atunci m-a sunat prietenul meu, Matei și m-a
          chemat afară.
          <br />
          Ne-am văzut la locul nostru de întâlnire dintotdeauna, un minimarket
          din zonă. De acolo, am pornit, ca în fiecare zi… nici nu mai trebuia
          să discutăm încotro. Destinația noastră era Podul Olt. Nici nu mi-am
          dat seama când am trecut de Casa Tineretului și de Esplanadă. Ajunși
          în Centrul Vechi, am discutat despre aceste clădiri aproape distruse,
          care țin atâtea amintiri în ele. Păcat ca nu pot vorbi. Sigur am auzi
          niște povești interesante.
          <br />
          Într-un final, ajungem la pod. Cum stăteam și discutam despre toate
          întâmplările trăite de noi de-a lungul anilor, el îmi face o farsă și
          mă împinge. Eu îmi pierd echilibrul, alunec și cad. Inima mi-o simt în
          gât, toate celelalte organe încep să se strângă în timp ce cad ca
          într-o gaură fără fund, dar e doar rezultatul adrenalinei care îmi
          curge prin tot corpul. Fac contact cu apa și mă scufund. Nu știu să
          înot. Mă panichez, mă zbat, reușesc să ies la suprafață. Îl strig pe
          Matei să mă ajute, dar acesta a plecat. Mă afund și mă tot afund, luat
          de curenții Oltului.
          <br />
          Cu cât stau și te privesc mai mult, prietene, mă întreb – și presupun
          că te întrebi și tu – care o fi fost rostul farsei. Ce-i drept,
          niciunul din noi nu are libertatea pe care și-o dorea. Tu, dragul meu
          prieten, ai sfârsit închis într-o celulă din cauza mea, dar și din
          vina ta. De-a lungul lunilor care au trecut, am tot stat și te-am tot
          privit și mi-am dat seama de un lucru.
          <br />- Matei… tu mă poți vedea, așa-i?
        </>
      ),
      footer: '',
    },
  },
  'my-dear-friend': {
    en: {
      title: 'My Dear Friend',
      author: 'Dragoș Rasnoveanu',
      content: (
        <>
          It was an ordinary summer day. I woke up around 11 and felt relieved
          realizing I didn't have to go to high school. It was the last month of
          the summer holiday. I switched on my phone and was surprised by the
          multitude of unread messages from friends. I started scrolling through
          them, but guys' conversations aren't usually that interesting. I went
          to brush my teeth and wash my face. When I came out of the bathroom,
          the dark hallway created an eerie atmosphere in the house. I stopped
          in front of the door to my parents bedroom and slowly opened it. I was
          home alone. I left the door wide open to let in the light so the
          hallway didn't seem so long and gloomy. In the kitchen I took some
          eggs and made myself lunch. Then my friend Matei called and asked me
          to meet him.
          <br />
          We met at our usual spot, a minimarket nearby. From there, we set off,
          like we did every day, without having to debate over the destination.
          We were going to the bridge over the Olt river. I didn't even realize
          when we passed the Youth House and the Esplanade. Once we arrived in
          the Old Center, we talked about all the ruined buildings that held so
          many memories. Too bad they couldn't can't talk. I'm sure we would
          have heard some interesting stories.
          <br />
          Finally, we get to the bridge. As we're standing there, talking about
          all the things that have happened to us over the years, he pulls a
          prank on me and pushes me. I lose my balance, slip and fall. I feel my
          heart in my throat, all my other organs shrink as I fall as if in a
          bottomless pit, but it's just the adrenaline rushing through my body.
          I make contact with the water and I dive. I can't swim. I panic, I
          struggle, I manage to surface. I call after Matei to help me, but he's
          gone. I keep sinking and sinking, carried by the currents of the river
          Olt.
          <br />
          The longer I stand and watch you, my friend, the more I wonder - and I
          suppose you wonder too - what was the point of that prank. Now none of
          us have the freedom we wanted. You, my dear friend, ended up in a cell
          because of me, but also because of yourself. Over the months that have
          passed since, I've watched you and realized one thing:
          <br />- Matei…. you can see me, can't you?
        </>
      ),
      footer: '',
    },
  },
  întâlnire: {
    ro: {
      title: 'Întâlnire',
      author: 'Alexa Dicu',
      content: (
        <>
          Plecasem spre podul Olt cu inima ușoară. Era liniște, iar eu zâmbeam
          fără motiv. Îmi repetam că, în sfârșit, totul era bine. Că poate am
          trecut peste greutăți, peste certuri, și că acum el chiar mă iubește.
          Poate mă aștepta acolo. Poate chiar îmi pregătise ceva frumos, cine
          știe... Conduceam încet, savurând drumul. Mă gândeam la noi, la cum am
          rezistat când alții ar fi renunțat, la cum mi-a promis că eu sunt
          „pentru totdeauna a lui”. Și da... îl credeam. Credeam fiecare cuvânt.
          <br />
          Când am ajuns aproape de pod, am văzut mașina lui parcată. Am zâmbit.
          Am și oftat, ușor emoționată, spunându-mi: „Vezi? Chiar m-a așteptat.”
          Dar zâmbetul mi s-a șters în secunda în care am văzut că nu era
          singur. Ea, mătușa mea, cu 2 ani mai mare decât mine, râdea. A
          ajutat-o să își pună haina pe umeri, un gest simplu, dar care mi-a
          sfâșiat inima.
          <br />
          Am oprit mașina pe margine și am rămas nemișcată. Mâinile îmi tremurau
          pe volan, iar pieptul mi se strângea de parcă cineva încerca să-mi
          smulgă sufletul.
        </>
      ),
      footer: '',
    },
  },
  'the-bridge-encounter': {
    en: {
      title: 'The Bridge Encounter',
      author: 'Alexa Dicu',
      content: (
        <>
          I had left for the bridge over the river Olt with a light heart. It
          was quiet and I was smiling for no reason. I kept telling myself that
          everything was finally all right. That we had seemingly got over all
          the hardships, the quarrels, and that he really loved me now. Maybe he
          was waiting for me there. Maybe he had really prepared something nice
          for me, who knows? I drove slowly, enjoying the ride. I was thinking
          about us, about how we had held on when others would have given up,
          about how he had promised me that I was "forever his". And yes... I
          believed him. I believed every word.
          <br />
          When we got near the bridge, I saw his car parked. I smiled. I even
          sighed, slightly nervous, saying to myself: "See? He really waited for
          me." But my smile faded the second I realized he wasn't alone. She, my
          aunt, two years older than me, was laughing. He helped her put her
          coat over her shoulders, a simple gesture that broke my heart.
          <br />I stopped the car on the side of the road and stood still. My
          hands trembled on the steering wheel, and my chest tightened as if
          someone was trying to rip my soul out.
        </>
      ),
      footer: '',
    },
  },
  podul: {
    ro: {
      title: 'Podul',
      author: 'Dilara Karaka',
      content: (
        <>
          Anual, în Slatina se organizează Festivalul „Oltenii și Restul Lumii”,
          dedicat culturii oltenești. Actori bine pregătiți recreează scene ce
          aduc la viață trecutul zonei.
          <br />
          Când eram mică și priveam aceste spectacole, mereu îmi imaginam cum ar
          fi să fiu și eu acolo, printre ei, promovând tradițiile noastre.
          Într-un moment total neașteptat, am primit o oportunitate unică: atât
          eu, cât și prietena mea cea mai bună am fost invitate să participăm la
          festival.
          <br />
          Scena din care făceam parte urma să aibă loc chiar pe unul dintre cele
          mai reprezentative monumente istorice ale Slatinei – podul peste Olt.
          Rolul nostru era să întâmpinăm autoritățile orașului cu pâine și sare,
          praz și mămăligă, friptură și vin, punând în scenă obiceiurile de
          ospitalitate românească.
          <br />
          În jurul nostru era o învălmășeala obositoare de oameni. Toți erau
          îmbrăcați în straie tradiționale, o fanfară exersa acordurile pentru
          marele moment, valurile râului Olt se spărgeau de picioarele podului.
          Toate formau tabloul unui vis devenit realitate.
          <br />
          Lucrurile au decurs conform pregătirilor. După încheierea
          reprezentației, trebuia să ne întoarcem la școală, deoarece eram
          învoite numai de la anumite ore. Dar traficul fusese oprit, iar noi
          rămăseserăm izolate pe partea cealaltă a râului. Părinții nu puteau
          traversa podul pentru a ne lua, iar dacă ocoleau pe un alt drum, am fi
          așteptat mult și bine. Parcă universul nu-și dorea să ne lase să dăm
          test la matematică. Dar învățaserăm și ne bazam pe cunoștințele
          noastre.
          <br />
          Atunci prietena mea a venit cu o idee: să trecem podul pe jos. Odată
          ajunse pe partea cealaltă, părinții puteau să ne ia să ne ducă la
          școală cu mașina. Fără să mă gândesc prea mult, am acceptat,deși eu
          aveam de rău de înălțime.
          <br />
          Odată ce am pornit, nu mai era cale de întoarcere. Mergeam pe zona
          pietonală de la marginea podului, simțeam cum vântul îmi bătea
          puternic în față și îmi transforma părul lung într-o furtună, poate
          chiar furtuna sentimentelor mele: un ocean de teamă și un strop de
          curaj. Mă țineam cu precauție de bara de metal care mă despărțea de
          necunoscut. Fiecare rafală de aer îmi tăia răsuflarea, iar priveliștea
          râului învolburat de sub noi îmi amplifica spaima. Câteva plăci
          metalice lipseau, altele se clătinau, de aceea fiecare pas era un semn
          al dorinței de a mă autodepăși. În ciuda fricii, am simțit o bucurie
          neașteptată. Poate era adrenalina, poate sentimentul că trăiam cu
          adevărat acel moment.
          <br />
          Podul, deși încercat de trecerea anilor, rămâne un simbol al legăturii
          dintre trecut și prezent, o mărturie a istoriei pentru ceilalți, iar
          pentru mine, un reper al prieteniei și curajului.
        </>
      ),
      footer: '',
    },
  },
  'the-bridge': {
    en: {
      title: 'The Bridge',
      author: 'Dilara Karaka',
      content: (
        <>
          Every year in Slatina there is a festival called "Oltenii and the Rest
          of the World", dedicated to the Oltenian culture. Well-trained actors
          recreate scenes that bring to life the region's history.
          <br />
          When I was a child and I watched these performances, I always wanted
          to be one of them, promoting our traditions. In a totally unexpected
          moment, I received a unique opportunity: my best friend and I were
          invited to participate in the festival.
          <br />
          The scene we were part of was to take place on one of the most
          representative historical monuments of Slatina: the bridge over the
          Olt. Our role was to welcome the city authorities with bread and salt,
          leek and polenta, steak and wine, enacting Romanian hospitality
          customs.
          <br />
          All around us was a tiresome huddle of people. Everyone was wearing
          traditional dress, a brass band was practicing the song for the big
          moment, the waves of the Olt river were crashing against the foot of
          the bridge. But for me, it was a picture of a dream come true. Things
          went according to plan. After the performance, we had to go back to
          school, as we had only been excused from certain classes. But the
          traffic had been stopped and we were isolated on the other side of the
          river. Our parents couldn't cross the bridge to pick us up, and if
          they had taken a detour, we would have had to wait for a long time. It
          was like the universe didn't want us to take the math test. But we had
          studied and trusted our knowledge.
          <br />
          Then my friend had an idea: to walk across the bridge. Once we were on
          the other side, our parents could pick us up and drive us to school.
          Without giving it much thought, I agreed, even though I was afraid of
          hights. <br />
          Once we set off, there was no turning back. We were walking along the
          pedestrian area at the edge of the bridge, I was feeling the wind
          whipping my face, turning my long hair into a storm, perhaps the storm
          of my own feelings: an ocean of fear with a drop of courage. I held on
          tight to the metal banister that separated me from the unknown. Each
          gust of wind took my breath away, and the sight of the swirling river
          beneath us heightened my dread. A few metal plates were missing,
          others wobbled, so every step was proof of my desire to overcome my
          fear. Beyond the fear, I felt an unexpected joy. Maybe it was the
          adrenaline, maybe it was the feeling that I was truly living in the
          moment.
          <br />
          The bridge, though weathered by the passage of time, remains a link
          between the past and the present for others, and a landmark of
          friendship and courage for me.
        </>
      ),
      footer: '',
    },
  },
}
