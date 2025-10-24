import ImagesCarousel from 'atoms/ImagesCarousel'
import NavLink from 'atoms/NavLink'

import { useLocale } from 'utils/hooks'

import styles from './index.module.scss'
import QRFooter from 'components/QRFooter'
import SocialMedia from 'atoms/SocialMedia'

import { HomeContent } from 'content/home'

export default function HomeContentComponent() {
  const locale = useLocale()
  const content = HomeContent[locale]

  return (
    <div className={styles.homeContent}>
      <section className={styles.homeTextSection}>
        <h1>{content.title}</h1>
        {content.description}
        <span style={{ paddingTop: '20%' }}>
          <NavLink href='/audio-guide/'>
            <img
              className={styles.playIcon}
              src='/assets/img/home-page-play-icon.svg'
              alt='Play Icon'
            />
            <br />
            {content.playText}
          </NavLink>
        </span>

        <span className={styles.mobileFooter}>
          <QRFooter isDark />
        </span>
        <span className={styles.desktopFooter}>
          <SocialMedia />
        </span>
      </section>

      <section className={styles.homeImageSection}>
        <ImagesCarousel />
      </section>
    </div>
  )
}
