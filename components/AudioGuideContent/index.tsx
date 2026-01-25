import EpisodeControls from 'components/EpisodeControls'
import styles from './index.module.scss'
import NavLink from 'atoms/NavLink'
import NextRouteButton from 'atoms/NextRouteButton'
import { audioGuideContent } from 'content/pages'
import { useLocale } from 'utils/hooks'
import { useRouter } from 'next/router'
import DocumentTitle from 'atoms/DocumentTitle'

export interface IAudioGuideContentProps {
  content: (typeof audioGuideContent)['slatina']['ro']
}

export function AudioGuideContent(props: Readonly<IAudioGuideContentProps>) {
  const locale = useLocale()
  const { asPath } = useRouter()
  const { content } = props

  return (
    <>
      <DocumentTitle title={locale === 'en' ? 'Audio Guide' : 'Ghid Audio'} />
      <div className={styles.audioGuideContent}>
        <EpisodeControls
          title={content.title}
          backText={content.backText}
          backHref={content.backHref}
          nextText={content.nextText}
          nextHref={content.nextHref}
          audioSrc={content.audioSrc}
        />
        <div className={styles.infoText}>{content.infoText}</div>

        <div className={styles.coverImage}>
          <img src={content.imgSrc} alt='Audio Guide' />
          {content.imgCaption ? <p>{content.imgCaption}</p> : null}
        </div>

        <NextRouteButton
          href={content.projectPageHref}
          topText={
            locale === 'en'
              ? 'More about the project here'
              : 'Mai multe detalii despre proiect aici'
          }
        />
        <div className={styles.pagesListWrapper}>
          <h3>
            {locale === 'en'
              ? 'The audio guide includes'
              : 'Audio ghidul cuprinde'}
            <br />
            {locale === 'en'
              ? 'the following episodes:'
              : 'următoarele episoade:'}
          </h3>
          <div className={styles.pagesList}>
            {content.episodes.map((episode) => (
              <NavLink key={episode.href} href={`/${episode.href}`}>
                <h2>{episode.title}</h2>
              </NavLink>
            ))}
          </div>
        </div>
        {asPath.includes('slatina') ? (
          <img
            className={styles.overlayImage}
            src='/assets/img/overlay-slatina.png'
            alt='Overlay'
          />
        ) : null}
        {asPath.includes('sulina') ? (
          <img
            className={styles.overlayImage}
            style={{ maxWidth: '380px', width: '46%' }}
            src='/assets/img/sulina/icon-0.png'
            alt='Overlay'
          />
        ) : null}
      </div>
    </>
  )
}
