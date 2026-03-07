import QRFooter from 'components/QRFooter'
import NavLink from 'atoms/NavLink'

import {
  CurteaDeArgesPage,
  SLATINA_PAGES,
  SlatinaPage,
  LandmarkPage,
  CURTEA_DE_ARGES_PAGES,
  SULINA_PAGES,
  SulinaPage,
} from 'utils/types'

import styles from './index.module.scss'
import { CurteaDeArgesContent, SlatinaContent, SulinaContent } from 'content/landmark'

function formatTitle(title: string) {
  const parts = title.split(' - ')
  if (parts.length === 1) return title
  return parts.map((part, i) => (
    <span key={part}>{i < parts.length - 1 ? <>{part} -<br /></> : part}</span>
  ))
}

export default function QRContent({ slug }: Readonly<{ slug: LandmarkPage }>) {
  const pageData = SLATINA_PAGES.includes(slug as SlatinaPage)
    ? SlatinaContent[slug as SlatinaPage]
    : CURTEA_DE_ARGES_PAGES.includes(slug as CurteaDeArgesPage)
      ? CurteaDeArgesContent[slug as CurteaDeArgesPage]
      : SulinaContent[slug as SulinaPage]

  const audioGuidePage = SLATINA_PAGES.includes(slug as SlatinaPage)
    ? 'audio-guide-slatina'
    : CURTEA_DE_ARGES_PAGES.includes(slug as CurteaDeArgesPage)
      ? 'audio-guide'
      : 'audio-guide-sulina'

  return (
    <div className={styles.qrContent}>
      <div className={styles.logo}>
        <img src='/assets/img/logo-audio-ghid.png' alt='Logo Audio Ghid' />
      </div>
      <span className={styles.boxes}>
        <NavLink href={`/ro/${slug}`} disableLocale>
          <div className={styles.box}>
            <p>Ascultați episodul în limba română</p>
            <h3>{formatTitle(pageData.ro.title)}</h3>
          </div>
        </NavLink>
        <NavLink href={`/en/${slug}`} disableLocale>
          <div className={styles.box}>
            <p>Listen to the episode in English</p>
            <h3>{formatTitle(pageData.en.title)}</h3>
          </div>
        </NavLink>
      </span>

      <span>
        <div className={styles.moreAbout}>
          <NavLink href={`/ro/${audioGuidePage}`} disableLocale>
            <p>Mai multe despre</p>
            <h3>Audio ghidul Voice Your Place</h3>
          </NavLink>
        </div>

        <div className={styles.moreAbout}>
          <NavLink href={`/en/${audioGuidePage}`} disableLocale>
            <p>More about</p>
            <h3>The Voice Your Place audio guide</h3>
          </NavLink>
        </div>
      </span>

      <QRFooter isHidingFollowText />
      {SULINA_PAGES.includes(slug as SulinaPage) ? (
        <img
          className={styles.overlayImage}
          style={{ maxWidth: '380px', width: '46%' }}
          src='/assets/img/sulina/icon-0.png'
          alt='Overlay'
        />
      ) : null}
    </div>
  )
}
