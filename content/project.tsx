import { BilingualContent } from 'utils/types'

export type ProjectContentType = {
  title: string
  pageTitle: string
  presentation: React.ReactNode
  team: React.ReactNode
  caption: React.ReactNode
  imgTeamSrc: string
  imgSponsorsSrc: string
  zineSrc?: string
}

export const SlatinaProjectContent: BilingualContent<ProjectContentType> = {
  ro: {
    title: 'Voice Your Place Slatina',
    pageTitle: 'Proiect',
    presentation: (
      <>
        <p>
          Proiectul „Voice Your Place” se concentrează asupra comunității,
          apartenenței și valorificării mediului construit prin realizarea unui
          audio ghid narat de adolescenți despre arhitectura de patrimoniu din
          orașul lor. Proiectul urmărește crearea unei serii de audio ghiduri
          care nu oferă o simplă povestire, ci sunt rezultatul unei proces de
          cunoaștere și apropiere a comunității tinere de patrimoniul construit,
          oferind în același timp ascultătorului experiența de a auzi prin
          vocile comunității poveștile locului.
          <br />
          În cadrul proiectului, realizarea ghidului audio devine o unealtă
          pedagogică prin care se oferă încredere în implicarea comunitară și se
          creează contextul unei acțiuni civice participative unde spiritul
          ludic și procesul co-creativ sunt puse în prim-plan. Facilitând
          implicarea activă, întărind apartenența și legătura afectivă cu
          patrimoniul arhitectural local, proiectul își dorește să ajute la
          conștientizarea și aprofundarea mediului construit, unde orașul este
          înțeles ca un bun comun și o responsabilitate comunitară.
        </p>
        <p>
          Audio ghidul Voice Your Place Slatina a fost realizat în cadrul
          Atelierelor, în luna martie 2025, unde au participat douăzeci și șapte
          de adolescenți din comunitatea locală. Pe parcursul a trei săptămâni
          au fost realizate ateliere de: patrimoniu arhitectural, scriere
          creativă, actorie, soundscape și înregistrări. Atelierele, coordonate
          de invitați din domeniile creative vizate, au urmărit realizarea unor
          componente esențiale din alcătuirea audio ghidului. Parcursul
          multidisciplinar a contribuit la o înțelegere nuanțată a mediului
          construit și complexității unui loc - prin crearea unor perspective
          multiple asupra clădirilor studiate, unde atelierele au căpătat și o
          valoare de descoperire.
        </p>
        <p>
          Audio ghidul Voice Your Place Slatina cuprinde șase episoade: Biserica
          Sfânta Treime, Centrul vechi al Slatinei, Casa Hanciu, Fostul
          cinematograf Victoria, Casa Fântâneanu și Podul peste râul Olt.
        </p>
      </>
    ),
    team: (
      <>
        <p>Echipa proiectului</p>
        <p>
          Participanții Atelierelor Voice Your Place Slatina 2025:
          <br />
          Sara Aflagea, Denisa Anghel, Denisa Anton, Mihai Calofir, Alexandra
          Cincă, Antonio Ciobanu, Sonia Ciulu, Teodor Crețu, Mirela Crînguș,
          Theodor Cristoiu, Emilia Diaconu, Ștefania Diaconu, Alexa Dicu, Elena
          Duminică, Dilara Karakaș, Denisa Luță, Bianca Mareș-Frunză, Daniela
          Mărgărit, Amelia Pîrvu, Alexandra Pojoga, Isidora Pungaru, Victoria
          Răducu, Dragoș Rasoveanu, Lidia Rezeanu, Ana Sanda, Victor Șerban,
          Teodora Vârban.
        </p>
        <p>Autoare și coordonatoare de proiect: Iarina Tavă</p>
        <p>Asistent de proiect: Irina Leca</p>
        <p>
          Audio ghidul a fost realizat în urma unei serii de ateliere:
          <br />
          Atelier de patrimoniu arhitectural, coordonat de: Iarina Tavă,
          Cristina Chira și Diana Necșulescu
          <br />
          Atelier de scriere creativă, coordonat de: Cristina Chira
          <br />
          Atelier de actorie, coordonat de: Alini Medoia
          <br />
          Atelier de soundscape, coordonat de: Alex Halka
          <br />
          Asistență Ateliere: Alexandra Parpală
        </p>
        <p>Identitate vizuală: Diana Necșulescu</p>
        <p>Design signalistică urbană: nuumroom studio</p>
        <p>
          Documentarea clădirilor de patrimoniu a fost realizată de Florentina
          Murea-Matache și doctor în istorie Aurelia Grosu
        </p>
        <p>Textele audio ghidului au fost scrise de Cristina Chira</p>
        <p>
          Poveștile audio ghidului au fost realizate de către adolescenții
          participanți la atelierul de scriere creativă. Înregistrările de teren
          au fost realizate de adolescenții participanți la atelierul de
          soundscape.
        </p>
        <p>
          Înregistrările audio ghidului au avut loc la Palatul Copiilor Adrian
          Băran și au fost coordonate și asistate de: Iarina Tavă și Alex Halka
        </p>
        <p>Editare și mixaj audio ghid: Alex Halka</p>
        <p>
          Website dezvoltat de: Gabriel Mocanu
          <br />
          Grafică website: nuumroom studio
        </p>
        <p>
          Un proiect marca Voice Your Place realizat împreună cu Asociația
          Studiogovora.
        </p>
        <p>
          Proiect finanțat prin „Fondul pentru un viitor mai bun în comunități
          Slatina”.
        </p>
        <p>
          Fondul pentru un viitor mai bun în comunități este coordonat de
          Federaţia Fundaţiile Comunitare din România, finanțat de Lidl România
          și implementat la Slatina de Fundația Comunitară Vâlcea.
        </p>
        <p>
          Mulțumim partenerilor noștri:
          <br />
          Asociația De-a Arhitectura, Filiala Teritorială Oltenia a Ordinului
          Arhitecților din România, Asociația Arta în Dialog, Muzeul Județean
          Olt, Colegiul Național Ion Minulescu, Colegiul Național Radu Greceanu,
          Colegiul Național Teoretic Nicolae Titulescu, Liceul tehnologic Alexe
          Marin.
        </p>
      </>
    ),
    caption: (
      <>
        Foto: echipa Voice Your Place Slatina
        <br />
        la evenimentul de încheiere al Atelierelor, martie 2025
      </>
    ),
    imgTeamSrc: '/assets/img/team-slatina.jpg',
    imgSponsorsSrc: '/assets/img/ro-sponsors-slatina.jpg',
    zineSrc: 'https://heyzine.com/flip-book/b97bfe578d',
  },
  en: {
    title: 'Voice Your Place Slatina',
    pageTitle: 'Project',
    presentation: (
      <>
        <p>
          The "Voice Your Place" project focuses on community, belonging, and
          valuing the built environment by creating an audio guide narrated by
          teenagers about the heritage architecture in their city. The project
          aims to create a series of audio guides that do not simply tell a
          story, but are the result of a process of learning and bringing the
          young community closer to the built heritage, while offering the
          listener the experience of hearing the stories of the place through
          the voices of the community.
          <br />
          In the framework of the project, the creation of the audio guide
          becomes an educational tool that builds trust in community involvement
          and creates the context for participatory civic action where
          playfulness and the co-creative process are at the forefront. By
          facilitating active involvement and strengthening the sense of
          belonging and emotional connection to the local architectural
          heritage, the project aims to raise awareness and deepen understanding
          of the built environment, where the city is understood as a common
          good and a community responsibility.
          <br />
          The Voice Your Place Slatina audio guide was created during the
          Workshops in March 2025, which were attended by twenty-seven teenagers
          from the local community. Over the course of three weeks, workshops
          were held on architectural heritage, creative writing, acting,
          soundscape, and recording. The workshops, coordinated by guests from
          the respective creative fields, aimed to develop essential components
          of the audio guide. The multidisciplinary approach contributed to a
          nuanced understanding of the built environment and the complexity of a
          place by creating multiple perspectives on the studied buildings,
          where the workshops also took on a value of discovery.
        </p>
        <p>
          The Voice Your Place Slatina audio guide includes six episodes: The
          Holy Trinity Church, Slatina`s Old Centre, The Hanciu House, The
          former Victoria Cinema, The Fântâneanu House, The bridge over the Olt
          river.
        </p>
      </>
    ),
    team: (
      <>
        <p>Project team</p>
        <p>
          The participants of the Voice Your Place Slatina 2025 Workshops:
          <br />
          Sara Aflagea, Denisa Anghel, Denisa Anton, Mihai Calofir, Alexandra
          Cincă, Antonio Ciobanu, Sonia Ciulu, Teodor Crețu, Mirela Crînguș,
          Theodor Cristoiu, Emilia Diaconu, Ștefania Diaconu, Alexa Dicu, Elena
          Duminică, Dilara Karakaș, Denisa Luță, Bianca Mareș-Frunză, Daniela
          Mărgărit, Amelia Pîrvu, Alexandra Pojoga, Isidora Pungaru, Victoria
          Răducu, Dragoș Rasoveanu, Lidia Rezeanu, Ana Sanda, Victor Șerban,
          Teodora Vârban.
        </p>
        <p>Project creator and coordinator: Iarina Tavă</p>
        <p>Project assistant: Irina Leca</p>
        <p>
          The audio guide was made during a series of workshops:
          <br />
          Architecture workshop with Iarina Tavă, Cristina Chira and Diana
          Necșulescu
          <br />
          Creative writing workshop with Cristina Chira
          <br />
          Acting workshop with Alini Medoia
          <br />
          Soundscape workshop with Alex Halka
          <br />
          Workshops assistant: Alexandra Parpală
        </p>
        <p>Visual identity: Diana Necșulescu</p>
        <p>
          The documentation for the historical monuments was provided by
          Florentina Murea-Matache and doctor of history Aurelia Grosu
          <br />
          The texts were written by Cristina Chira
        </p>
        <p>City signage design: nuumroom studio</p>
        <p>
          The audio guide stories were written by the teenagers participating in
          the creative writing workshop. Field recordings were made by teenagers
          during the Soundscape workshop.
        </p>
        <p>
          The audio guide recordings were assisted and coordinated by Iarina
          Tavă and Alex Halka, and took place at Adrian Băran Children`s
          Pallace.
        </p>
        <p>Editing and mixing Alex Halka</p>
        <p>
          Website developed by: Gabriel Mocanu
          <br />
          Website design: nuumroom studio.
        </p>
        <p>
          A Voice Your Place project, implemented together with Studiogovora
          Association, funded through „The fund for a Better Future in
          Communities: Slatina”
        </p>
        <p>
          The Fund for a Better Future in Communities is coordinated by The
          Romanian Federation of Community Foundations and financed by LIDL
          Romania. It was implemented in Slatina by Vâlcea Community Foundation.
        </p>
        <p>
          We are grateful to our partners: De-a Arhitectura Association, The
          Romanian Order of Architects - Oltenia Territorial Branch, Arta în
          dialog Association, Olt County Museum, Ion Minulescu National College,
          Radu Greceanu National College, Nicolae Titulescu National Theoretical
          College, and Alexe Marin Technological High School.
        </p>
      </>
    ),
    caption: (
      <>
        Photo: Voice Your Place Slatina team
        <br />
        at the closing event of the Workshops
      </>
    ),
    imgTeamSrc: '/assets/img/team-slatina.jpg',
    imgSponsorsSrc: '/assets/img/en-sponsors-slatina.jpg',
    zineSrc: 'https://heyzine.com/flip-book/b97bfe578d',
  },
}

export const CurteaDeArgesProjectContent: BilingualContent<ProjectContentType> =
{
  ro: {
    title: 'Voice Your Place',
    pageTitle: 'Proiect',
    presentation: (
      <>
        <p>
          „Voice Your Place” este un proiect care se concentrează asupra
          comunității, apartenenței și valorificării mediul construit prin
          realizarea unui audio ghid narat de adolescenți despre arhitectura
          de patrimoniu din orașul lor. Obiectivul ghidului audio este să
          devină o unealtă social-pedagogică ce implică adolescenții într-un
          proces ludic, dar conștient de explorare, aprofundare și apreciere a
          patrimoniului.
        </p>
        <p>
          Audio ghidul Voice Your Place: Curtea de Argeș a fost realizat în
          cadrul Școlii de vară, în luna iulie 2023, unde au participat
          douăzeci de adolescenți din comunitatea locală. Pe parcursul celor
          trei săptămâni au fost realizate ateliere de: arhitectură,
          soundscape, scriere creativă, interpretare și înregistrări într-un
          studio local. Atelierele, coordonate de invitați din domeniile
          creative vizate, au urmărit realizarea unor componente esențiale din
          alcătuirea audio ghidului, dar și crearea unor perspective multiple
          asupra clădirilor de patrimoniu studiate, care să contureze și să
          aprofundeze complexitatea lor.
          <br />
          Audio ghidul Voice Your Place: Curtea de Argeș cuprinde șase
          episoade: Biserica Sfântul Nicolae Domnesc, Ruinele Bisericii Sân
          Nicoară, Mănăstirea Curtea de Argeș, Biserica Adormirea Maicii
          Domnului – Olari, Gara Regală și Casa Norocea. Proiectul Voice Your
          Place și Școala de Vară sunt concepute să fie realizate și în alte
          orașe sau sate din țară. Proiectul de la Curtea de Argeș poate fi
          considerat un proiect pilot, sperăm noi dintr-o rețea de audio
          ghiduri care nu oferă o simplă narațiune, ci sunt cumulul și
          produsul unei proces de cunoaștere și apropiere a comunității tinere
          locale de patrimoniul construit, oferind în același timp
          vizitatorului și ascultătorului experiența de a auzi prin vocea
          comunității poveștile locului.
        </p>
      </>
    ),
    team: (
      <>
        <p>Echipa proiectului</p>
        <p>
          Participanții Școlii de Vară Voice Your Place Curtea de Argeș 2023:
          <br />
          Ana Baciu, Ana-Maria Baltag-Diaconu, Eduard Băiașu, Nectaria Craus,
          Elina Dascălu, Maria Duca, Iani Hirică, Alexia Jianu, Maia Negru,
          Mădălina Niță, Ionuț Păduraru, Eliza Rada, Ruxandra Radu, Ana-Maria
          Răducanu, Radu Răducanu, Maria Simion, Izabela Stoica, Andra Șerban,
          Luca Șerbănoiu, Andrei Uță.
        </p>
        <p>
          Audioghidul a fost realizat în urma unei serii de ateliere:
          <br />
          Atelierul de arhitectură cu Iarina Tavă, Ana Porim și Alex Răuță.
          <br />
          Atelierul de soundscape cu Maria Salomia.
          <br />
          Atelierul de scriere creativă cu Cristina Chira.
          <br />
          Și Atelierul de Interpretare cu Alina Medoia.
          <br />
        </p>
        <p>
          Documentarea obiectivelor a fost realizată de: Mihai Manolescu și
          Raluca Grama. <br />
          Textele audioghidului au fost scrise de: Cristina Chira și Iarina
          Tavă. Poveștile audioghidului au fost realizate de către
          adolescenții participanți la atelierul de scriere creativă cu
          îndrumarea Cristinei Chira.
        </p>
        <p>
          Înregistrările de teren au fost realizate de adolescenții
          participanți la atelierul de Soundscape cu îndrumarea Mariei Salomia
          și înregistrările în studio la Radio DeArgeș.ro, împreună cu Didi
          Dumitrescu, Alina Medoia, Maria Salomia și Iarina Tavă.
        </p>
        <p>Website dezvoltat de: Gabriel Mocanu.</p>
        <p>
          Grafică proiect și design signalistică audio ghid în oraș: nuumroom
          studio.
        </p>
        <p>
          Mulțumiri speciale celor care ne-au ajutat să realizăm prototipul
          audio ghidului în 2022: elevilor de la 8C, profesorilor de la școala
          Mircea cel Bătrân și prietenilor: Daria Barbălată și Sabine
          Schneider-Maunoury.
        </p>
        <p>Creatoare și coordonatoare de proiect: Iarina Tavă</p>
        <p>
          Voice Your Place: Curtea de Argeș este un proiect Ordinul
          Arhitecților România: Filiala Teritorială Argeș.
        </p>
        <p>
          Mulțumim partenerilor noștri: <br />
          Asociația De-a Arhitectura și Muzeul Municipal Curtea de Argeș{' '}
          <br />
          Și sponsorului nostru: Wienerberger Romania <br />
          Mulțumim Goethe - Institut.
        </p>
        <p>
          Acțiune cofinanțată de Consiliul Județean Argeș, în cadrul apelului
          de fonduri nerambursabile pentru tineret, cultură, mediu 2023.
        </p>
      </>
    ),
    caption:
      '@Petrecerea de încheiere a Școlii de Vară de la Curtea de Argeș, 2023',
    imgTeamSrc: '/assets/img/ro-project.jpg',
    imgSponsorsSrc: '/assets/img/ro-partners-sponsors.png',
  },
  en: {
    title: 'Voice Your Place',
    pageTitle: 'Project',
    presentation: (
      <>
        <p>
          „Voice Your Place” is a project that focuses on community, belonging
          and valuing the built environment by making an audio guide narrated
          by teenagers about the heritage architecture of their town. The aim
          of the audio guide is to become a social-pedagogical tool that
          engages teenagers in a playful but conscious process of exploring,
          deepening and appreciating local heritage.
        </p>
        <p>
          The audio guide in English was made during the Voice Your Place:
          Curtea de Arges 2024 Workshops, where twenty teenagers from the
          local community participated.
          <br />
          During the three weeks, workshops were held in: architecture,
          acting, interviews and recordings in a local studio. The workshops,
          coordinated by guests from various creative fields, aimed to create
          key components of the audio guide, as well as to develop multiple
          perspectives of the studied heritage buildings, shaping and
          deepening their complexity.
          <br />
          Voice Your Place: Curtea de Argeș, began in 2023 with a three-week
          summer school and studio recordings to create the audio guide in
          Romanian. During the summer school, workshops were held in:
          architecture, creative writing, soundscape and acting. The stories
          included in the audio guide were written during the creative writing
          workshop. The sounds that illustrate the audio guide were recorded
          by the participating teenagers during the soundscape workshop.
          <br />
          The 2024 Workshops continued the process of developing the audio
          guide, including the making of the signage system in the city and
          the recording of a series of interviews with the community.
          <br />
          The Voice Your Place: Curtea de Argeș audio guide includes six
          episodes: The Royal Church of Saint Nicolas, The Ruins of Sân
          Nicoară Church, The Curtea de Argeș Monastery, The Olari Church, The
          Royal Railway Station and The Norocea House.
          <br />
          The Voice Your Place project and audio guide offers more than a
          simple narrative, it is the result of a process of knowledge and
          awareness of the built heritage by the local young community,
          offering visitors and listeners the experience of hearing the
          stories of the place through the voice of the community.
        </p>
      </>
    ),
    team: (
      <>
        <p>Project team</p>
        <p>
          The audio guide in English was made during the Voice Your Place:
          Curtea de Arges 2024 workshops by the following teenagers:
          <br />
          Odette Andrei, Ana Baciu, Corina Badea, Patricia Bădița, Eduard
          Băiașu, Raluca Ciolcă, Maria Dinescu, Ștefan Enache, Mihnea Golea,
          Raluca Grozavu, Andra Ică, Giulia Iorga, Alexandra Leca Negoi,
          Adelina Marin, Lavinia Milcă, Eliza Petec, Cristian Sechea, Ingrid
          Sora, Georgiana Stan, Sara Ungureanu.
        </p>

        <p>
          The audio guide was made during a series of workshops: <br />
          Architecture workshops with Iarina Tavă and Alex Răuță, and Ana
          Porim and Alexandra Parpală as volunteers. <br />
          Soundscape workshop with Maria Salomia. <br />
          Creative writing and interview workshop with Cristina Chira. <br />
          Acting workshops with Alina Medoia. <br />
        </p>

        <p>
          The historical documentation for the monuments was provided by Mihai
          Manolescu and Raluca Grama. <br />
          The texts were written by Cristina Chira and Iarina Tavă.
        </p>

        <p>
          The audio guide stories were written by the participating teenagers
          in the creative writing workshop, field recordings were made by
          teenagers during the Soundscape workshop, while the studio
          recordings took place in Radio DeArgeș Studio and were supervised by
          Maria Salomia, and Iarina Tavă.
        </p>

        <p>Editing and mixing: Maria Salomia.</p>

        <p>Program creator and Project coordinator: Iarina Tavă.</p>

        <p>Website developed by: Gabriel Mocanu.</p>

        <p>
          Graphic design and audio guide city signage design: nuumroom studio.
        </p>

        <p>
          Voice Your Place Curtea de Argeș is a project of the Romanian Order
          of Architects: Argeș Territorial Branch.
        </p>

        <p>
          We are grateful to our partners: De-a Arhitectura Association, Nod
          Makerspace Association, and Curtea de Argeș Municipal Museum.
        </p>

        <p>
          The audio guide in English and The Voice Your Place: Curtea de Arges
          2024 workshops were supported by The Romanian Order of Architects
          from the architectural stamp duty.
        </p>

        <p>
          The audio guide in Romanian and Voice Your Place Curtea de Arges
          2023 Summer School were co-financed by Arges County Council within
          the call for non-refundable funds for Youth, Culture, and
          Environment.
        </p>
      </>
    ),
    caption:
      '@The closing party of the Summer School at Curtea de Argeș, 2023',
    imgTeamSrc: '/assets/img/en-project.jpg',
    imgSponsorsSrc: '/assets/img/en-partners-sponsors.png',
  },
}
