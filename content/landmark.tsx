import { communityStoryContent, CommunityStoryContentData } from './pages'

import { IEpisodeControlsProps } from 'components/EpisodeControls'

import {
  City,
  CurteaDeArgesPage,
  SlatinaPage,
  Locale,
  BilingualContent,
  SulinaPage,
} from 'utils/types'

export type LandmarkContentType = {
  title: string
  aboutEpisode: string[]
  aboutObjective: string[]
  images: Array<{
    imgSrc: string
    imgCaption?: React.ReactNode
  }>
  story?: CommunityStoryContentData
  locationHref: string
  /** Whether the next location is non-physically accessible */
  isNextListenOnly?: boolean
  customIconHref?: string
} & IEpisodeControlsProps

export type CurteaDeArgesContentType = {
  [slug in CurteaDeArgesPage]: {
    [locale in Locale]: LandmarkContentType
  }
}

export type SlatinaContentType = {
  [slug in SlatinaPage]: {
    [locale in Locale]: LandmarkContentType
  }
}

export type SulinaContentType = {
  [slug in SulinaPage]: {
    [locale in Locale]: LandmarkContentType
  }
}

export const CityIntroStoryContent: {
  [key in City]: BilingualContent<React.ReactNode>
} = {
  'curtea-de-arges': {
    ro: (
      <p>
        La atelierul de scriere creativă din cadrul Școlii de Vară Voice Your
        Place: Curtea de Argeș participanții au scris o serie de povești scurte
        în relație cu cele șase obiective de patrimoniu. Pentru cineva care le
        are aproape, locurile acestea pot însemna o mulțime de alte lucruri:
        acasă, familie, prietenie, copilărie, adolescență, școală. Poveștile
        sunt integrate în audio ghid sub forma unor fragmente care își propun să
        aducă mai aproape ascultătorul de viața comunității locale.
      </p>
    ),
    en: (
      <p>
        At the creative writing workshop of the Voice Your Place: Curtea de
        Argeș Summer School, the participants wrote a series of short stories in
        relation to the heritage buildings. For someone who has grown up with
        them nearby, these places can mean many other things: home, family,
        friendship, childhood, adolescence, and school. The stories are
        integrated into the audio guide in the form of fragments that aim to
        bring the listener closer to the life of the local community.
      </p>
    ),
  },
  slatina: {
    ro: (
      <p>
        La atelierul de scriere creativă din cadrul Atelierelor Voice Your Place
        Slatina, participanții au scris o serie de povești scurte în relație cu
        cele șase obiective de patrimoniu. Pentru cineva care le are aproape,
        locurile acestea pot însemna o mulțime de alte lucruri: acasă, familie,
        prietenie, copilărie, adolescență, școală (cu tot ce au ele bun și mai
        puțin bun). Poveștile sunt integrate în audio ghid sub forma unor
        fragmente care își propun să aducă mai aproape ascultătorul de viața
        comunității locale.
      </p>
    ),
    en: (
      <p>
        At the creative writing workshop of the Voice Your Place: Slatina
        Workshops, the participants wrote a series of short stories in relation
        to the heritage buildings. For someone who has grown up with them
        nearby, these places can mean many other things: home, family,
        friendship, childhood, adolescence, and school. The stories are
        integrated into the audio guide in the form of fragments that aim to
        bring the listener closer to the life of the local community.
      </p>
    ),
  },
  sulina: {
    ro: <></>,
    en: <></>,
  },
}

export const CurteaDeArgesContent: CurteaDeArgesContentType = {
  'biserica-domneasca': {
    ro: {
      title: 'Biserica Sfântul Nicolae Domnesc',
      aboutEpisode: [
        'Text narat de: Maria Simion și Andra Șerban',
        'Prezentare: Radu Răducanu',
        'Povestiri: Eduard Băiașu și Nectaria Craus',
        'Editare și mixaj: Maria Salomia',
      ],
      aboutObjective: [
        'Biserica de secol XIV, parte a curții domnești, construită de Basarab I - întemeietorul Valahiei. De stil bizantin, cu plan de tip cruce greacă înscrisă, restaurată la 1911 și readusă la forma sa originală.',
      ],
      backText: 'Despre audio ghid',
      backHref: 'audio-guide',
      nextText: 'Ruinele Bisericii Sân Nicoară',
      nextHref: 'san-nicoara',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep5_Domneasca_RO.mp3',
      images: [{ imgSrc: '/assets/img/biserica-domneasca.jpg' }],
      story: communityStoryContent['parintii']['ro'],
      locationHref: 'https://maps.app.goo.gl/MceyPq8UAxhwoLnTA',
    },
    en: {
      title: 'The Royal Church of St. Nicholas',
      aboutEpisode: [
        'Narrated by: Eduard Băiașu, Lavinia Milcă and Ana Baciu',
        'Introduction narrated by: Cristian Sechea',
        'Stories: Eduard Băiașu and Nectaria Craus',
        'Editing and mixing: Maria Salomia',
      ],
      aboutObjective: [
        '14th century church, part of the royal court, built by Basarab I - the founder of Wallachia. Of Byzantine style, with an inscribed Greek cross plan, restored in 1911 to its original form.',
      ],
      backText: 'About the Audio Guide',
      backHref: 'audio-guide',
      nextText: 'Sân Nicoară Ruins',
      nextHref: 'san-nicoara',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep5_Domneasca_EN.mp3',
      images: [{ imgSrc: '/assets/img/biserica-domneasca.jpg' }],
      story: communityStoryContent['parents']['en'],
      locationHref: 'https://maps.app.goo.gl/MceyPq8UAxhwoLnTA',
    },
  },
  'san-nicoara': {
    ro: {
      title: 'Ruinele Bisericii Sân Nicoară',
      aboutEpisode: [
        'Text narat de: Radu Răducanu și Izabela Stoica',
        'Prezentare: Andra Șerban',
        'Povestiri: Ionuț Păduraru, Izabela Stoica și Radu Răducanu',
        'Editare și mixaj: Maria Salomia',
      ],
      aboutObjective: [
        'Biserica de secol XIV, aflată în ruină. Se presupune că a fost construită în aceeași perioadă cu biserica Sfântul Nicolae Domnesc. De rit ortodox cu element atipic, turnul de la intrare.',
      ],
      backText: 'Biserica Domnească',
      backHref: 'biserica-domneasca',
      nextText: 'Mănăstirea Curtea de Argeș',
      nextHref: 'manastirea-curtea-de-arges',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep1_Ruina_RO.mp3',
      images: [{ imgSrc: '/assets/img/san-nicoara.svg' }],
      story: communityStoryContent['ultima-data-pentru-totdeauna']['ro'],
      locationHref: 'https://maps.app.goo.gl/tnbzajLTPar8voEG7',
    },
    en: {
      title: 'Saint Nicholas Church Ruins',
      aboutEpisode: [
        'Narrated by: Ștefan Enache and Patricia Bădița',
        'Introduction narrated by: Giulia Iorga',
        'Stories: Ionuț Păduraru, Izabela Stoica and Radu Răducanu',
        'Editing and mixing: Maria Salomia',
      ],
      aboutObjective: [
        '14th century church now in ruins. It is thought to have been built at the same time as the church of St. Nicholas. Of Orthodox rite with an atypical element, the entrance tower.',
      ],
      backText: 'Royal Church',
      backHref: 'biserica-domneasca',
      nextText: 'Curtea de Argeș Monastery',
      nextHref: 'manastirea-curtea-de-arges',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep1_Ruina_EN.mp3',
      story: communityStoryContent['last-time-forever']['en'],
      images: [{ imgSrc: '/assets/img/san-nicoara.svg' }],
      locationHref: 'https://maps.app.goo.gl/tnbzajLTPar8voEG7',
    },
  },
  'manastirea-curtea-de-arges': {
    ro: {
      title: 'Mănăstirea Curtea de Argeș',
      aboutEpisode: [
        'Text narat de: Ana Maria Baltag-Diaconu, Alexia Jianu și Radu Răducanu',
        'Prezentare: Andra Șerban',
        'Povestiri: Maria Duca și Mădălina Niță',
        'Editare și mixaj: Maria Salomia',
      ],
      aboutObjective: [
        'Biserica de secol XVI, subiect de legendă și sursă de inspirație pentru bisericile din Țara Românească. Ctitoria lui Neagoe Basarab, biserica este singurul element ce supraviețuiește din fosta mănăstire. Inovativă arhitectural, cu influențe otomane și armenești.',
      ],
      backText: 'Ruinele Busericii Sân Nicoară',
      backHref: 'san-nicoara',
      nextText: 'Biserica Olari',
      nextHref: 'olari',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep3_Manastirea_RO.mp3',
      images: [{ imgSrc: '/assets/img/manastirea-curtea-de-arges.jpg' }],
      story: communityStoryContent['cu-dor']['ro'],
      locationHref: 'https://maps.app.goo.gl/vpYbznsmzrBTikcn9',
    },
    en: {
      title: 'Curtea de Argeș Monastery',
      aboutEpisode: [
        'Narrated by: Odette Andrei, Eliza Petec, Georgiana Stan and Cristian Sechea',
        'Introduction narrated by: Giulia Iorga',
        'Stories: Maria Duca and Mădălina Niță',
        'Editing and mixing: Maria Salomia',
      ],
      aboutObjective: [
        '16th century church, the subject of legends and source of inspiration for churches in Wallachia. Founded by Neagoe Basarab, the church is the only surviving element of the former monastery. Architecturally innovative, with Ottoman and Armenian influences.',
      ],
      backText: 'Sân Nicoară Ruins',
      backHref: 'san-nicoara',
      nextText: 'Olari Church',
      nextHref: 'olari',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep3_Manastirea_EN.mp3',
      images: [{ imgSrc: '/assets/img/manastirea-curtea-de-arges.jpg' }],
      story: communityStoryContent['broken-doll']['en'],
      locationHref: 'https://maps.app.goo.gl/vpYbznsmzrBTikcn9',
    },
  },
  olari: {
    ro: {
      title: 'Biserica Olari',
      aboutEpisode: [
        'Text narat de: Ruxandra Radu și Andrei Uță',
        'Prezentare: Andra Șerban',
        'Povestiri: Maia Negru și Ana Baciu',
        'Editare și mixaj: Maria Salomia',
      ],
      aboutObjective: [
        'Biserica de secol XVII, îngrijită, posibil ridicată de breasla olarilor. Unică în Țara Românească prin silueta ei specifică arhitecturii bisericilor din Moldova, cu plan tip sală și clopotniță alipită pronaosului pe latura de sud.',
      ],
      backText: 'Mănăstirea Curtea de Argeș',
      backHref: 'manastirea-curtea-de-arges',
      nextText: 'Gara Regală',
      nextHref: 'gara-regala',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep6_Olari_RO.mp3',
      images: [{ imgSrc: '/assets/img/olari.jpg' }],
      story: communityStoryContent['impacarea-de-la-biserica-olari']['ro'],
      locationHref: 'https://maps.app.goo.gl/KaWyfd2isJyg3iGG7',
    },
    en: {
      title: 'Olari Church',
      aboutEpisode: [
        'Narrated by: Sara Ungureanu, Mihnea Golea and Adelina Marin',
        'Introduction narrated by: Cristian Sechea',
        'Stories: Maia Negru and Ana Baciu',
        'Editing and mixing: Maria Salomia',
      ],
      aboutObjective: [
        `17th century church, maintained, possibly built by the potters' guild. Unique in Wallachia by its silhouette typical of the architecture of churches in Moldavia, with a hall-type plan and bell tower attached to the narthex on the south façade.`,
      ],
      backText: 'Curtea de Argeș Monastery',
      backHref: 'manastirea-curtea-de-arges',
      nextText: 'Royal Railway Station',
      nextHref: 'gara-regala',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep6_Olari_EN.mp3',
      images: [{ imgSrc: '/assets/img/olari.jpg' }],
      story: communityStoryContent['reconciliation-olari-church']['en'],
      locationHref: 'https://maps.app.goo.gl/KaWyfd2isJyg3iGG7',
    },
  },
  'gara-regala': {
    ro: {
      title: 'Gara Regală',
      aboutEpisode: [
        'Text narat de: Ionuț Păduraru și Mădălina Niță',
        'Prezentare: Radu Răducanu',
        'Povestiri: Ruxandra Radu și Andra Șerban',
        'Editare și mixaj: Maria Salomia',
      ],
      aboutObjective: [
        'Linia Pitești - Curtea de Argeș, cuprinde pe traseu gări-tip reprezentative pentru stilul CFR. Din acestea însă, capătul de linie, Gara Regală prezintă o arhitectură aparte. Inaugurată la 1898, gara este realizată într-un stil neoromânesc original.',
      ],
      backText: 'Biserica Olari',
      backHref: 'olari',
      nextText: 'Casa Norocea',
      nextHref: 'casa-norocea',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep2_Gara_RO.mp3',
      images: [{ imgSrc: '/assets/img/gara-regala.jpg' }],
      story: communityStoryContent['un-nou-inceput']['ro'],
      locationHref: 'https://maps.app.goo.gl/SryZ2Vzh1hry92Yi7',
    },
    en: {
      title: 'Royal Railway Station',
      aboutEpisode: [
        'Narrated by: Cristian Sechea, Raluca Ciolcă and Giulia Iorga',
        'Introduction narrated by: Giulia Iorga',
        'Stories: Ruxandra Radu and Andra Șerban',
        'Editing and mixing: Maria Salomia',
      ],
      aboutObjective: [
        'The Pitești - Curtea de Argeș railway line has along its route typical stations representative of the CFR style. However, the end of the line, the Royal Railway Station, has a special architecture. Inaugurated in 1898, the station is built in an original neo-romanian style.',
      ],
      backText: 'Olari Church',
      backHref: 'olari',
      nextText: 'Norocea House',
      nextHref: 'casa-norocea',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep2_Gara_EN.mp3',
      images: [{ imgSrc: '/assets/img/gara-regala.jpg' }],
      story: communityStoryContent['a-new-beginning']['en'],
      locationHref: 'https://maps.app.goo.gl/SryZ2Vzh1hry92Yi7',
    },
  },
  'casa-norocea': {
    ro: {
      title: 'Casa Norocea',
      aboutEpisode: [
        'Text narat de: Izabela Stoica și Eliza Rada',
        'Prezentare: Radu Răducanu',
        'Povestiri: Alexia Jianu și Eliza Rada',
        'Editare și mixaj: Maria Salomia',
      ],
      aboutObjective: [
        'Casa pictorului Dumitru Norocea, unul dintre cei mai importanți restauratori de pictură. Cu ajutorul arhitectului Grigore Cerchez, își construiește casa în 1924 într-un stil neoromânesc. În prezent Muzeu de Etnografie, aici se regăsește și o expoziție de picturi realizate de celebrul restaurator.',
      ],
      backText: 'Gara Regală',
      backHref: 'gara-regala',
      nextText: 'Despre audio ghid',
      nextHref: 'audio-guide',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep4_Norocea_RO.mp3',
      images: [],
      story: communityStoryContent['nu-atingeti-exponatele']['ro'],
      locationHref: 'https://maps.app.goo.gl/kW5m66TgE1cj4GEY6',
    },
    en: {
      title: 'Norocea House',
      aboutEpisode: [
        'Narrated by: Corina Badea, Raluca Grozavu and Andra Ică',
        'Introduction narrated by: Cristian Sechea',
        'Stories: Alexia Jianu and Eliza Rada',
        'Editing and mixing: Maria Salomia',
      ],
      aboutObjective: [
        'The house of the painter Dumitru Norocea, one of the most important painting restorers. With the help of architect Grigore Cerchez, he built his house in 1924 in a neo-romanian style. Today the Museum of Ethnography, it also displays an exhibition of paintings by the renowned restorer.',
      ],
      backText: 'Royal Railway Station',
      backHref: 'gara-regala',
      nextText: 'About the Audio Guide',
      nextHref: 'audio-guide',
      audioSrc: '/assets/audio/curtea-de-arges/VYP_Ep4_Norocea_EN.mp3',
      images: [],
      story: communityStoryContent['do-not-touch-the-exhibits']['en'],
      locationHref: 'https://maps.app.goo.gl/kW5m66TgE1cj4GEY6',
    },
  },
}

export const SlatinaContent: SlatinaContentType = {
  'biserica-sfanta-treime': {
    ro: {
      title: 'Biserica Sfânta Treime',
      aboutEpisode: [
        'Text narat de: Dilara Karakaș, Alexa Dicu și Antonio Ciobanu',
        'Prezentare: Bianca Mareș-Frunză',
        'Poveste: Elena Duminică',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Biserica „Sfânta Treime” este cea mai veche biserică din Slatina, fiind edificată pentru prima oară în 1645 de Ghinea Slugerul, dregător pe vremea lui Matei Basarab. De-a lungul secolelor  biserica a suferit mai multe intervenții, ultima fiind restaurarea din 2021, care a urmărit să o aducă mai aproape de imaginea sa originală. La interior, s-a păstrat pictura de secol 19 realizată de Constantin Petrescu, un elev al celebrului pictor de biserici Gheorghe Tattarescu.',
      ],
      backText: 'Despre audio ghid',
      backHref: 'audio-guide-slatina',
      nextText: 'Centrul Vechi al Slatinei',
      nextHref: 'centrul-vechi-slatina',
      audioSrc: '/assets/audio/slatina/VYP_Biserica_RO.mp3',
      images: [
        {
          imgSrc: '/assets/img/biserica-sfanta-treime.jpg',
          imgCaption: (
            <>
              <p>Biserica Sfânta Treime, fotografie 1906.</p>
              <p>Sursă foto: Muzeul Județean Olt</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['regăsire']['ro'],
      locationHref: 'https://maps.app.goo.gl/PMoCW8zyAkDkyoGV8',
    },
    en: {
      title: 'The Holy Trinity Church',
      aboutEpisode: [
        'Narrated by: Denisa Luță and Emilia Diaconu',
        'Introduction narrated by: Ana Sanda',
        'Story: Elena Duminică',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'The Holy Trinity Church is the oldest church in Slatina, built for the first time in 1645 by Ghinea Slugerul, a boyar at the court of Matei Basarab. Over the centuries, the church has undergone several interventions, the last being the restoration in 2021, which aimed to bring it closer to its original image. Inside, visitors can see preserved 19th-century paintings by Constantin Petrescu, a pupil of the famous church painter Gheorghe Tattarescu.',
      ],
      backText: 'About the Audio Guide',
      backHref: 'audio-guide-slatina',
      nextText: `Slatina's Old Center`,
      nextHref: 'centrul-vechi-slatina',
      audioSrc: '/assets/audio/slatina/VYP_Biserica_EN.mp3',
      images: [
        {
          imgSrc: '/assets/img/biserica-sfanta-treime.jpg',
          imgCaption: (
            <>
              <p>The Holy Trinity Church, photo, 1906.</p>
              <p>Photo source: Olt County Museum</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['coming-back']['en'],
      locationHref: 'https://maps.app.goo.gl/PMoCW8zyAkDkyoGV8',
    },
  },
  'centrul-vechi-slatina': {
    ro: {
      title: 'Centrul Vechi al Slatinei',
      aboutEpisode: [
        'Text narat de: Denisa Anghel, Denisa Anton și Alexandra Cincă',
        'Prezentare: Alexa Dicu',
        'Povești: Emilia Diaconu și Mirela Crînguș',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Centrul vechi al Slatinei păstrează aspectul unui oraș negustoresc de secol 19, cu spații comerciale la parter și camere de locuit la etaj, și clădiri decorate în stiluri ce reflectă continuitatea și istoria bogată a acestui loc.',
      ],
      backText: 'Biserica Sfânta Treime',
      backHref: 'biserica-sfanta-treime',
      nextText: 'Casa Hanciu',
      nextHref: 'casa-hanciu',
      audioSrc: '/assets/audio/slatina/VYP_CentrulVechi_RO.mp3',
      images: [
        {
          imgSrc: '/assets/img/centrul-vechi-slatina.jpg',
          imgCaption: (
            <>
              <p>
                Strada Lipscani și cafeneaua Minerva, Centrul Vechi al Slatinei,
              </p>
              <p>fotografie 1906. Sursă foto: Muzeul Județean Olt</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['vara-în-care-am-fost-doi']['ro'],
      locationHref: 'https://maps.app.goo.gl/QhvqUG2UaP8kGCQ7A',
    },
    en: {
      title: `Slatina's Old Centre`,
      aboutEpisode: [
        'Narrated by: Elena Duminică and Ana Sanda',
        'Introduction narrated by: Alexandra Pojoga',
        'Story: Emilia Diaconu',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'Situated on the banks of the Olt River, the old center of Slatina preserves the appearance of a 19th-century commercial town, with commercial spaces on the ground floor, living rooms upstairs, and buildings decorated in styles that reflect the continuity and rich history of this place',
      ],
      backText: 'Holy Trinity Church',
      backHref: 'biserica-sfanta-treime',
      nextText: 'The Hanciu House',
      nextHref: 'casa-hanciu',
      audioSrc: '/assets/audio/slatina/VYP_CentrulVechi_EN.mp3',
      images: [
        {
          imgSrc: '/assets/img/centrul-vechi-slatina.jpg',
          imgCaption: (
            <>
              <p>Lipscani Street and Minerva Cafe, Slatina`s Old Centre,</p>
              <p>1906 photo. Photo source: Olt County Museum</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['the-summer-we-were-two']['en'],
      locationHref: 'https://maps.app.goo.gl/QhvqUG2UaP8kGCQ7A',
    },
  },
  'casa-hanciu': {
    ro: {
      title: 'Casa Hanciu',
      aboutEpisode: [
        'Text narat de: Bianca Mareș-Frunză, Victoria Răducu și Dragoș Rasoveanu',
        'Prezentare: Daniela Mărgărit',
        'Povești: Lidia Rezeanu și Ștefania Diaconu',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Clădirea a fost construită în 1883 de Petre Hanciu, care a deschis la parterul acesteia o berărie ce a funcționat până în anii 1930. Decorată în stil eclectic, cu două bovindouri pe colț și o bandă ornamentală cu spice de hamei, Casa Hanciu este una dintre cele mai memorabile din centrul vechi.',
      ],
      backText: 'Centrul Vechi al Slatinei',
      backHref: 'centrul-vechi-slatina',
      nextText: 'Fostul cinematograf Victoria',
      nextHref: 'cinematograful-victoria',
      audioSrc: '/assets/audio/slatina/VYP_CasaHanciu_RO.mp3',
      images: [
        {
          imgSrc: '/assets/img/casa-hanciu.jpg',
          imgCaption: (
            <>
              <p>Casa Hanciu, fotografie 1906.</p>
              <p>Sursă foto: Muzeul Județean Olt</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['cum-să-ignori-destinul']['ro'],
      locationHref: 'https://maps.app.goo.gl/corV5uNrsiZXv5Ad8',
    },
    en: {
      title: 'The Hanciu House',
      aboutEpisode: [
        'Narrated by: Ștefania Diaconu and  Sara Aflagea',
        'Introduction narrated by: Amelia Pîrvu',
        'Stories: Lidia Rezeanu and Ștefania Diaconu',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'It was built in 1883 by Petre Hanciu, who opened a brewery on the ground floor of the building, which operated until the 1930s. Decorated in an eclectic style, with two corner bay windows and an ornamental band depicting hop spikes, the Hanciu House is one of the most memorable in the old town.',
      ],
      backText: `Slatina's Old Center`,
      backHref: 'centrul-vechi-slatina',
      nextText: 'The former Victoria Cinema',
      nextHref: 'cinematograful-victoria',
      audioSrc: '/assets/audio/slatina/VYP_CasaHanciu_EN.mp3',
      images: [
        {
          imgSrc: '/assets/img/casa-hanciu.jpg',
          imgCaption: (
            <>
              <p>The Hanciu House, 1906 photo.</p>
              <p>Photo source: Olt County Museum</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['how-to-ignore-destiny']['en'],
      locationHref: 'https://maps.app.goo.gl/corV5uNrsiZXv5Ad8',
    },
  },
  'cinematograful-victoria': {
    ro: {
      title: 'Fostul cinematograf Victoria',
      aboutEpisode: [
        'Text narat de: Isidora Pungaru, Sonia Ciulu și Mihai Calofir',
        'Prezentare: Denisa Anghel',
        'Povești: Sonia Ciulu, Alexandra Pojoga, Bianca Mareș-Frunză, Mihai Calofir',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Construit în 1933 ca Cerc al Subofițerilor, clădirea a fost de la început gândită ca sală de spectacole și proiecții. După 1948 a devenit cinematograful Victoria, funcționând până în anii 1990. În prezent este centru cultural multifuncțional.',
      ],
      backText: 'Casa Hanciu',
      backHref: 'casa-hanciu',
      nextText: 'Casa Fântâneanu',
      nextHref: 'casa-fantaneanu',
      audioSrc: '/assets/audio/slatina/VYP_CinemaVictoria_RO.mp3',
      images: [
        {
          imgSrc: '/assets/img/cinematograful-victoria.jpg',
          imgCaption: (
            <>
              <p>Fostul cinematograf înainte de 1990.</p>
              <p>Sursă foto: dr. ist. Aurelia Grosu</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['destin-in-sala-veche']['ro'],
      locationHref: 'https://maps.app.goo.gl/XMRGHXXL8Sq7FAMn7',
    },
    en: {
      title: 'The former Victoria Cinema',
      aboutEpisode: [
        'Narrated by: Sara Aflagea and Alexandra Pojoga',
        'Introduction narrated by: Elena Duminică',
        'Stories: Mirela Crînguș (read by Victor Șerban), Alexandra Pojoga and Bianca Mareș-Frunză',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        `Built in 1933 as the Sub-officers’ Club, it was intended from the beginning as a theater and screening room. After 1948 it became the Victoria Cinema, which operated until the 1990s.`,
        `Today it is a multifunctional cultural center.`,
      ],
      backText: 'The Hanciu House',
      backHref: 'casa-hanciu',
      nextText: 'The Fântâneanu House',
      nextHref: 'casa-fantaneanu',
      audioSrc: '/assets/audio/slatina/VYP_CinemaVictoria_EN.mp3',
      images: [
        {
          imgSrc: '/assets/img/cinematograful-victoria.jpg',
          imgCaption: (
            <>
              <p>The former cinema before 1990.</p>
              <p>Photo source: Aurelia Grosu</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['destiny-in-the-old-cinema-hall']['en'],
      locationHref: 'https://maps.app.goo.gl/XMRGHXXL8Sq7FAMn7',
    },
  },
  'casa-fantaneanu': {
    ro: {
      title: 'Casa Fântâneanu',
      aboutEpisode: [
        'Text narat de: Teodora Vârban, Daniela Mărgărit și Theodor Cristoiu',
        'Prezentare: Victor Șerban',
        'Poveste: Isidora Pungaru',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Ridicată la începutul secolului 19 de familia Lânaru și cumpărată ulterior de familia de boieri Fântâneanu, care o remodelează la sfârșitul secolului într-un stil eclectic impecabil, clădirea este una dintre cele mai valoroase monumente istorice din Slatina.',
      ],
      backText: 'Fostul cinematograf Victoria',
      backHref: 'cinematograful-victoria',
      nextText: 'Podul peste Olt',
      nextHref: 'podul-olt',
      audioSrc: '/assets/audio/slatina/VYP_CasaFantaneanu_RO.mp3',
      images: [
        {
          imgSrc: '/assets/img/casa-fantaneanu.jpg',
          imgCaption: (
            <>
              <p>Casa Fântâneanu, fotografie 1906.</p>
              <p>Sursă foto: Muzeul Județean Olt</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['enigma-casei-hanciu']['ro'],
      locationHref: 'https://maps.app.goo.gl/ywtn3EnQvDGzzmHj7',
    },
    en: {
      title: 'The Fântâneanu House',
      aboutEpisode: [
        'Narrated by: Ana Sanda and Ștefania Diaconu',
        'Introduction narrated by: Sara Aflagea',
        'Story: Isidora Pungaru',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'Built at the beginning of the 19th century by Lânaru family and later bought by the Fântânenau family of boyards, it was remodelled at the end of the 19th century in an impeccable eclectic style. It is one of the most valuable historical monuments in Slatina',
      ],
      backText: 'The former Victoria Cinema',
      backHref: 'cinematograful-victoria',
      nextText: 'The bridge over the Olt river',
      nextHref: 'podul-olt',
      audioSrc: '/assets/audio/slatina/VYP_CasaFantaneanu_EN.mp3',
      images: [
        {
          imgSrc: '/assets/img/casa-fantaneanu.jpg',
          imgCaption: (
            <>
              <p>The Fântâneanu House, 1906 photo.</p>
              <p>Photo source: Olt County Museum</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['the-mystery-of-hanciu-house']['en'],
      locationHref: 'https://maps.app.goo.gl/ywtn3EnQvDGzzmHj7',
    },
  },
  'podul-olt': {
    ro: {
      title: 'Podul peste Olt',
      aboutEpisode: [
        'Text narat de: Mirela Crînguș, Victor Șerban și Teodor Crețu',
        'Prezentare: Teodora Vârban',
        'Povești: Dilara Karakaș, Alexa Dicu, Dragoș Rasoveanu',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Construit între 1888-1891, pe locul unui mai vechi pod de luntre ce exista în Slatina încă din Evul Mediu, acest pod metalic cu zăbrele este o realizare tehnologică a secolului 19 și unul dintre primele de acest tip construite pe teritoriul României.',
      ],
      backText: 'Fostul cinematograf Victoria',
      backHref: 'cinematograful-victoria',
      nextText: 'Despre audio ghid',
      nextHref: 'audio-guide-slatina',
      audioSrc: '/assets/audio/slatina/VYP_Podul_RO.mp3',
      images: [
        {
          imgSrc: '/assets/img/podul-olt.jpg',
          imgCaption: (
            <>
              <p>Podul peste râul Olt, fotografie 1906.</p>
              <p>Sursă foto: Muzeul Județean Olt</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['dragul-meu-prieten']['ro'],
      locationHref: 'https://maps.app.goo.gl/Zy8arXcjCgxeRNMv9',
    },
    en: {
      title: 'The bridge over the Olt river',
      aboutEpisode: [
        'Narrated by: Amelia Pîrvu, Lidia Rezeanu, Alexandra Pojoga and Emilia Diaconu',
        'Introduction narrated by: Ștefania Diaconu',
        'Stories: Dilara Karakaș, Alexa Dicu and Dragoș Rasoveanu',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'Built between 1888 and 1891 on the site of an older bridge that existed in Slatina since the Middle Ages, this metal lattice girder bridge is a technological achievement of the 19th century and one of the first of its kind built in Romania.',
      ],
      backText: 'The former Victoria Cinema',
      backHref: 'cinematograful-victoria',
      nextText: 'About the Audio Guide',
      nextHref: 'audio-guide-slatina',
      audioSrc: '/assets/audio/slatina/VYP_Podul_EN.mp3',
      images: [
        {
          imgSrc: '/assets/img/podul-olt.jpg',
          imgCaption: (
            <>
              <p>The bridge over the river Olt, 1906 photo.</p>
              <p>Photo source: Olt County Museum</p>
            </>
          ),
        },
      ],
      story: communityStoryContent['my-dear-friend']['en'],
      locationHref: 'https://maps.app.goo.gl/Zy8arXcjCgxeRNMv9',
    },
  },
}

export const SulinaContent: SulinaContentType = {
  'palatul-comisiei-europene': {
    ro: {
      title: 'Palatul Comisiei Europene a Dunării',
      aboutEpisode: [
        'Text narat de: Mălina Maxim și Sabrina Varabiev',
        'Prezentare: Delia Chitaef',
        'Text episod: arh. Dorothee Hasnaș',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Ridicat între anii 1860 și 1868, palatul a servit drept sediu al Comisiunii Europene a Dunării, un organism internațional înființat prin Tratatul de la Paris din 1856, care avea misiunea de a asigura navigabilitatea brațului Sulina și de a administra traficul fluvial în mod eficient și neutru. C.E.D. a transformat Sulina într-un oraș cosmopolit și prosper.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/palatul-1.jpg' },
        { imgSrc: '/assets/img/sulina/palatul-2.jpg' },
        { imgSrc: '/assets/img/sulina/palatul-3.jpg' },
      ],
      locationHref: 'https://maps.app.goo.gl/pj5aA9GBASEX5ei9A',
      backText: 'Despre audio ghid',
      backHref: 'audio-guide-sulina',
      nextText: 'Farul Comisiei Europene a Dunării sau Farul Vechi',
      nextHref: 'farul-comisiei-europene',
      audioSrc: '/assets/audio/sulina/VYP_Ep1_PalatulComisieiEuropene_RO.mp3',
    },
    en: {
      title: 'The Palace of the European Commission of the Danube',
      aboutEpisode: [
        'Narrated by: Briana Zavațchi, Xenia Cojocaru and Isabela Saru',
        'Introduction narrated by: Mihai Sebastian Pascal',
        'Episode written by: Dorothee Hasnaș',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'Built between 1860 and 1868, the palace served as the headquarters of the Commission, an international body established by the Treaty of Paris in 1856. The purpose of the Commission was to ensure the navigability of the Sulina branch, as well as managing river traffic in an efficient and neutral way. The Commission transformed Sulina into a prosperous cosmopolitan city.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/palatul-1.jpg' },
        { imgSrc: '/assets/img/sulina/palatul-2.jpg' },
        { imgSrc: '/assets/img/sulina/palatul-3.jpg' },
      ],
      locationHref: 'https://maps.app.goo.gl/pj5aA9GBASEX5ei9A',
      backText: 'About the Audio Guide',
      backHref: 'audio-guide-sulina',
      nextText: 'The Old Lighthouse of Sulina',
      nextHref: 'farul-comisiei-europene',
      audioSrc: '/assets/audio/sulina/VYP_Ep1_PalatulComisieiEuropene_EN.mp3',
    },
  },
  'farul-comisiei-europene': {
    ro: {
      title: 'Farul Comisiei Europene a Dunării sau Farul Vechi',
      aboutEpisode: [
        'Text narat de: Ioana Sacalov și Gabriela Croitoru',
        'Prezentare: Sonia Dima',
        'Text episod: arh. Dorothee Hasnaș',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Farul Vechi din Sulina este unul dintre cele mai importante simboluri ale orașului. În 1839 Imperiului Rus, ridică un nou far pe malul drept al Dunării. Comisia preia farul existent și până în 1870 îl modernizează, transformându-l într-un obiectiv tehnic esențial. Farul era parte dintr-un ansamblu complet: locuințe pentru paznici, magazii, ateliere – conceput pentru a funcționa autonom.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/farul-1.jpg' },
        { imgSrc: '/assets/img/sulina/farul-2.jpg' },
        { imgSrc: '/assets/img/sulina/farul-3.jpg' },
        { imgSrc: '/assets/img/sulina/farul-4.jpg' },
      ],
      locationHref: 'https://maps.app.goo.gl/4isTY8D6Cynoni1k7',
      backText: 'Palatul Comisiei Europene a Dunării',
      backHref: 'palatul-comisiei-europene',
      nextText: 'Bisericile orașului Sulina',
      nextHref: 'bisericile-orasului-sulina',
      audioSrc: '/assets/audio/sulina/VYP_Ep2_FarulComisieiEuropene_RO.mp3',
    },
    en: {
      title: 'The Lighthouse of the European Commission of the Danube',
      aboutEpisode: [
        'Narrated by: Bianca Moghilencu and Teodora Achimfiev',
        'Introduction narrated by: Iosefina Frînculeț',
        'Episode written by: Dorothee Hasnaș',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'The Old Lighthouse is one of the most important symbols of the town. In 1839, the Russian Empire built a new lighthouse on the right bank of the Danube. The commission took over the existing lighthouse and modernized it by 1870, turning it into an essential technical facility. The lighthouse was part of a larger complex: housing for guards, warehouses, workshops - designed to function autonomously.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/farul-1.jpg' },
        { imgSrc: '/assets/img/sulina/farul-2.jpg' },
        { imgSrc: '/assets/img/sulina/farul-3.jpg' },
        { imgSrc: '/assets/img/sulina/farul-4.jpg' },
      ],
      locationHref: 'https://maps.app.goo.gl/4isTY8D6Cynoni1k7',
      backText: 'Palace of the European Commission of the Danube',
      backHref: 'palatul-comisiei-europene',
      nextText: 'The Churches of Sulina',
      nextHref: 'bisericile-orasului-sulina',
      audioSrc: '/assets/audio/sulina/VYP_Ep2_FarulComisieiEuropene_EN.mp3',
    },
  },
  'bisericile-orasului-sulina': {
    ro: {
      title: 'Bisericile orașului Sulina',
      aboutEpisode: [
        'Text narat de: Sonia Dima și Alexandru Hariton',
        'Prezentare: Ilaria Nica',
        'Text episod: arh. Dorothee Hasnaș',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'În Sulina au existat, la începutul secolului al XX-lea, peste zece lăcașuri de cult, construite de comunități diferite: ortodocși români și ruși, greci, catolici italieni, armeni, anglicani, musulmani și evrei. Fiecare comunitate a venit cu propriul stil, cu propriile materiale și tradiții de construcție. Astăzi, unele biserici mai există, altele au dispărut, dar toate fac parte din povestea orașului.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/bisericile-1.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-2.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-3.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-4.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-5.jpg' },
      ],
      locationHref: '',
      backText: 'Farul Comisiei Europene a Dunării sau Farul Vechi',
      backHref: 'farul-comisiei-europene',
      nextText: 'Uzina de apă',
      nextHref: 'uzina-de-apa',
      audioSrc: '/assets/audio/sulina/VYP_Ep3_BisericileDinSulina_RO.mp3',
    },
    en: {
      title: 'The Churches of Sulina',
      aboutEpisode: [
        'Narrated by: Ana Iosefina Frînculeț, Riana Cojocaru, Crina Pătrașcu and Maria Bărăgan',
        'Introduction narrated by: Bianca Dogaru',
        'Episode written by: Dorothee Hasnaș',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        `At the beginning of the 20th century, there were over ten places of worship in Sulina, built by different communities: Romanian and Russian Orthodox, Greek, Italian Catholic, Armenian, Anglican, Muslim, and Jewish. Each community brought its own style, building materials, and traditions. Today, some churches still exist, others have disappeared, but all are part of the town's history.`,
      ],
      images: [
        { imgSrc: '/assets/img/sulina/bisericile-1.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-2.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-3.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-4.jpg' },
        { imgSrc: '/assets/img/sulina/bisericile-5.jpg' },
      ],
      locationHref: '',
      backText: 'The Lighthouse of the European Commission of the Danube',
      backHref: 'farul-comisiei-europene',
      nextText: 'The Sulina Waterworks',
      nextHref: 'uzina-de-apa',
      audioSrc: '/assets/audio/sulina/VYP_Ep3_BisericileDinSulina_EN.mp3',
    },
  },
  'uzina-de-apa': {
    ro: {
      title: 'Uzina de apă',
      aboutEpisode: [
        'Text narat de: Delia Chitaef, Iulia Melentiev și Dragoș Călin',
        'Prezentare: Sonia Dima',
        'Text episod: arh. Dorothee Hasnaș',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Uzina de Apă din Sulina este unul dintre cele mai vechi și mai bine păstrate ansambluri de arhitectură industrială din România. Conferințele internaționale de sănătate publică de la finalul secolului al XIX-lea recomandă ca toate orașele-port să aibă sisteme moderne de alimentare cu apă potabilă. Sulina, port internațional aflat la Gura Dunării, a fost printre primele vizate. Construcția uzinei, inclusiv Turnul de Apă, a fost demarată în 1897 și finalizată în jurul anului 1903, cu sprijinul Comisiei Europene a Dunării și al Ministerului Sănătății din România.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/uzina-1.jpg' },
        { imgSrc: '/assets/img/sulina/uzina-2.jpg' },
      ],
      locationHref: 'https://maps.app.goo.gl/mz8RzD2kA4ogDX2Y6',
      backText: 'Bisericile orașului Sulina',
      backHref: 'bisericile-orasului-sulina',
      nextText: 'Cimitirul multietnic din Sulina',
      nextHref: 'cimitirul-multietnic',
      audioSrc: '/assets/audio/sulina/VYP_Ep4_UzinaDeApa_RO.mp3',
    },
    en: {
      title: 'The Sulina Waterworks',
      aboutEpisode: [
        'Narrated by: Alexandra Stăneață, Cătălina Duzinschi and Ana Petcu',
        'Introduction narrated by: Lavinia Prodan',
        'Episode written by: Dorothee Hasnaș',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'The Sulina Waterworks is one of the oldest and best-preserved industrial architecture ensembles in Romania. The International Sanitary Conferences at the end of the 19th century recommended that all port cities have modern drinking water supply systems. Sulina, an international port located at the mouth of the Danube, was among the first to be considered. Construction of the plant, including the Water Tower, began in 1897 and was completed around 1903, with the support of the European Commission of the Danube and the Romanian Ministry of Health.',
      ],
      images: [
        { imgSrc: '/assets/img/sulina/uzina-1.jpg' },
        { imgSrc: '/assets/img/sulina/uzina-2.jpg' },
      ],
      locationHref: 'https://maps.app.goo.gl/mz8RzD2kA4ogDX2Y6',
      backText: 'The Churches of Sulina',
      backHref: 'bisericile-orasului-sulina',
      nextText: 'The Cemetery of Sulina',
      nextHref: 'cimitirul-multietnic',
      audioSrc: '/assets/audio/sulina/VYP_Ep4_UzinaDeApa_EN.mp3',
    },
  },
  'cimitirul-multietnic': {
    ro: {
      title: 'Cimitirul multietnic din Sulina',
      aboutEpisode: [
        'Text narat de: Ilaria Nica, Iulia Melentiev și Filip Ciprian Măcăilă-Ivanov',
        'Prezentare: Alexandru Hariton',
        'Text episod: arh. Dorothee Hasnaș',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'La Sulina, cimitirele noi se înființează în 1870, la o distanță de 300 de metri de marginea estică a orașului, aproape de mare. Parcelat după confesiune – ortodocși, catolici, protestanți, musulmani și evrei – el reflectă nu doar credințele, ci și estetica fiecărei comunități. Fiecare parcelă respectă orientarea specifică mormintelor, simbolistica și materialele preferate.',
      ],
      images: [
        {
          imgSrc: '/assets/img/sulina/cimitirul.jpg',
          imgCaption:
            'Cimitirul musulman, fotografie realizată de Sonia Dima în cadrul atelierului de Patrimoniu Arhitectural',
        },
      ],
      locationHref: 'https://maps.app.goo.gl/YnfEifMG4oAD2wga9',
      backText: 'Uzina de apă',
      backHref: 'uzina-de-apa',
      isNextListenOnly: true,
      nextText: 'Păsările Deltei din zona Sulinei',
      nextHref: 'pasarile-deltei',
      audioSrc: '/assets/audio/sulina/VYP_Ep5_CimitirulMultietnic_RO.mp3',
    },
    en: {
      title: 'The Cemetery of Sulina',
      aboutEpisode: [
        'Narrated by: Bianca Dogaru, Iosefina Fînculeț and Mihai Pascal',
        'Introduction narrated by: Briana Zavațchi',
        'Episode written by: Dorothee Hasnaș',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'In Sulina, new cemeteries were established in 1870, at a distance of 300 meters from the eastern edge of the city, close to the sea. Divided according to religion—Orthodox, Catholic, Protestant, Muslim, and Jewish—it reflects not only the beliefs but also the aesthetics of each community. Each plot respects the specific orientation of the graves, the symbolism, and the preferred materials.',
      ],
      images: [
        {
          imgSrc: '/assets/img/sulina/cimitirul.jpg',
          imgCaption: (
            <>
              The Muslim Cemetery, photo by Sonia Dima,
              <br />
              Architectural Heritage Workshop
            </>
          ),
        },
      ],
      locationHref: 'https://maps.app.goo.gl/YnfEifMG4oAD2wga9',
      backText: 'The Sulina Waterworks',
      backHref: 'uzina-de-apa',
      nextText: <>Birds of the Delta - <br />the Sulina Area</>,
      nextHref: 'pasarile-deltei',
      audioSrc: '/assets/audio/sulina/VYP_Ep5_CimitirulMultietnic_EN.mp3',
    },
  },
  'pasarile-deltei': {
    ro: {
      title: 'Păsările Deltei din zona Sulinei',
      aboutEpisode: [
        'Text narat de: Sabrina Varabiev, Ioana Sacalov și Delia Chitaef',
        'Prezentare: Ilaria Nica',
        'Text episod: Georgian Constantin',
        'Editare și mixaj: Alex Halka',
      ],
      aboutObjective: [
        'Habitatele complexe din jurul Sulinei sunt adăpost pentru mai mult de 360 de specii de păsări sedentare și migratoare: de la păsări mai tolerante cu prezența umană pe care le regăsim în zona orașului, la păsările din zona mării sau a canalelor înguste înconjurate de stuf și cele care poposesc pe insula K. Sulina, prin diversitatea faunistică ce o înconjoară, devine un loc de întâlnire al lumilor.',
      ],
      images: [
        {
          imgSrc: '/assets/img/sulina/pasarile-1.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-2.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-3.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-4.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-5.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-6.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-7.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-8.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-9.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-10.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-11.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-12.jpg',
          imgCaption: (
            <p>
              Fotografii realizate de Georgian Constantin,
              <br />
              iulie 2025, Sulina
            </p>
          ),
        },
      ],
      locationHref: '',
      backText: 'Cimitirul multietnic din Sulina',
      backHref: 'cimitirul-multietnic',
      nextText: 'Despre audio ghid',
      nextHref: 'audio-guide-sulina',
      audioSrc: '/assets/audio/sulina/VYP_Ep6_PasarileDeltei_RO.mp3',
    },
    en: {
      title: 'Birds of the Delta - the Sulina Area',
      aboutEpisode: [
        'Narrated by: Lavinia Prodan, Mara Pavel and Sonia Marchelov',
        'Introduction narrated by: Alexandra Stăneață',
        'Episode written by: Georgian Constantin',
        'Editing and mixing: Alex Halka',
      ],
      aboutObjective: [
        'The complex habitats around Sulina are home to more than 360 species of sedentary and migratory birds: from birds that are more tolerant to human presence, found in the city, to birds in the sea area or narrow canals surrounded by reeds, and those that rest on K Island. Sulina, with its surrounding diversity of fauna, becomes a meeting place of worlds.',
      ],
      images: [
        {
          imgSrc: '/assets/img/sulina/pasarile-1.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-2.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-3.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-4.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-5.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-6.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-7.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-8.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-9.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-10.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-11.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
        {
          imgSrc: '/assets/img/sulina/pasarile-12.jpg',
          imgCaption: 'Photos by Georgian Constantin, July 2025, Sulina',
        },
      ],
      locationHref: '',
      backText: 'The Cemetery of Sulina',
      backHref: 'cimitirul-multietnic',
      nextText: 'About the audio guide',
      nextHref: 'audio-guide-sulina',
      audioSrc: '/assets/audio/sulina/VYP_Ep6_PasarileDeltei_EN.mp3',
    },
  },
}
