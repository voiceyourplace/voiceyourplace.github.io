import AudioPlayer from 'atoms/AudioPlayer'
import NavLink from 'atoms/NavLink'

import styles from './index.module.scss'
import { PageSlug } from 'content/pages'
import { useLocale } from 'utils/hooks'

export interface IEpisodeControlsProps {
  title: string
  backText: string
  backHref: PageSlug
  nextText: string | React.ReactNode
  nextHref: PageSlug
  audioSrc: string
  customIconHref?: string
}

export default function EpisodeControls(
  props: Readonly<IEpisodeControlsProps>
) {
  const locale = useLocale()

  return (
    <>
      <div className={styles.episodeHeader}>
        <div className={styles.iconWrapper}>
          <div className={styles.mobileControlIcon}>
            <NavLink href={`/${props.backHref}`}>
              <img src='/assets/img/prev-button.svg' alt='Previous' />
            </NavLink>
          </div>
          <img
            className={styles.icon}
            src={props.customIconHref ?? '/assets/img/logo-audio-ghid.png'}
            alt='EpisodeIcon'
          />
          <div className={styles.mobileControlIcon}>
            <NavLink href={`/${props.nextHref}`}>
              <img src='/assets/img/next-button.svg' alt='Next' />
            </NavLink>
          </div>
        </div>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.episodeControls}>
        <div className={`${styles.row} ${styles.prevButton}`}>

          <NavLink href={`/${props.backHref}`}>
            <img src='/assets/img/prev-button.svg' alt='Previous' />
          </NavLink>
          <div className={styles.column}>
            {locale === 'en' ? 'Previous episode' : 'Episod anterior'}
            <NavLink href={`/${props.backHref}`}>{props.backText}</NavLink>
          </div>
        </div>

        <AudioPlayer src={props.audioSrc} />

        <div className={`${styles.row} ${styles.nextButton}`}>
          <div className={styles.column}>
            {locale === 'en' ? 'Next episode' : 'Următorul episod'}
            <NavLink href={`/${props.nextHref}`}>{props.nextText}</NavLink>
          </div>
          <NavLink href={`/${props.nextHref}`}>
            <img src='/assets/img/next-button.svg' alt='Next' />
          </NavLink>
        </div>
      </div>
    </>
  )
}
