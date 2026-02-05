import {
  City,
  Locale,
  CurteaDeArgesPage,
  SlatinaPage,
  CURTEA_DE_ARGES_PAGES,
  SLATINA_PAGES,
  LandmarkPage,
  SULINA_PAGES,
  SulinaPage,
} from 'utils/types'

import styles from './index.module.scss'

import QRFooter from 'components/QRFooter'
import NavLink from 'atoms/NavLink'
import { useLocale } from 'utils/hooks'
import {
  CurteaDeArgesContent,
  SlatinaContent,
  SulinaContent,
} from 'content/landmark'

export interface IAllQRContentProps {
  city: City
  locale: Locale
}

export default function AllQRContent(props: Readonly<IAllQRContentProps>) {
  const locale = useLocale()

  const slugs: Record<City, readonly LandmarkPage[]> = {
    'curtea-de-arges': CURTEA_DE_ARGES_PAGES,
    slatina: SLATINA_PAGES,
    sulina: SULINA_PAGES,
  }

  return (
    <div className={styles.qrContent}>
      <div className={styles.languageSwitch}>
        <NavLink
          href={`/${props.locale === 'en' ? 'ro' : 'en'}/qr/${props.city}`}
          disableLocale
        >
          Switch to {props.locale === 'en' ? 'Romanian' : 'English'}
        </NavLink>
      </div>
      <span className={styles.logo}>
        <img src='/assets/img/logo-audio-ghid.png' alt='Logo Audio Ghid' />
      </span>
      <p>
        {locale === 'en'
          ? 'Discover the heritage buildings included in the Voice Your Place audio guide'
          : 'Descoperă clădirile de patrimoniu cuprinse în audio ghidul Voice Your Place'}
      </p>
      {slugs[props.city].map((slug) => {
        const locationHref =
          props.city === 'curtea-de-arges'
            ? CurteaDeArgesContent[slug as CurteaDeArgesPage][props.locale]
              .locationHref
            : props.city === 'slatina'
              ? SlatinaContent[slug as SlatinaPage][props.locale].locationHref
              : SulinaContent[slug as SulinaPage][props.locale].locationHref

        return (
          <div key={slug} className={styles.box}>
            <h3>
              {props.city === 'curtea-de-arges'
                ? CurteaDeArgesContent[slug as CurteaDeArgesPage][props.locale]
                  .title
                : props.city === 'slatina'
                  ? SlatinaContent[slug as SlatinaPage][props.locale].title
                  : SulinaContent[slug as SulinaPage][props.locale].title}
            </h3>
            <div className={styles.buttonsRow}>
              <NavLink href={`/${props.locale}/${slug}`} disableLocale>
                <div className={styles.button}>
                  <img src='/assets/img/qr-all-play.png' alt='Play Button' />
                  <p>
                    {props.locale === 'en'
                      ? 'Listen to the episode'
                      : 'Ascultă episodul'}
                  </p>
                </div>
              </NavLink>
              {locationHref ? (
                <a
                  href={locationHref}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className={styles.button}>
                    <img src='/assets/img/qr-all-pin.png' alt='Pin Button' />
                    <p>{props.locale === 'en' ? 'Location' : 'Locație'}</p>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
        )
      })}

      <div className={styles.moreAbout}>
        <NavLink
          href={`/${props.locale}/${props.city === 'slatina'
            ? 'audio-guide-slatina'
            : props.city === 'sulina'
              ? 'audio-guide-sulina'
              : 'audio-guide'
            }`}
          disableLocale
        >
          <p>{locale === 'en' ? 'More about' : 'Mai multe despre'}</p>
          <h3>
            {locale === 'en'
              ? 'The Voice Your Place audio guide'
              : 'Audio ghidul Voice Your Place'}
          </h3>
        </NavLink>
      </div>

      <QRFooter />
    </div>
  )
}
