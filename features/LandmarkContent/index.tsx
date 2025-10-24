import EpisodeControls from 'components/EpisodeControls'
import NavLink from 'atoms/NavLink'

import {
  communityStoryContent,
  CommunityStoryContentData
} from 'content/pages'

import {
  CurteaDeArgesPage,
  SLATINA_PAGES,
  SlatinaPage,
} from 'utils/types'

import { useLocale, useLandmarkContent } from 'utils/hooks'

import styles from './index.module.scss'
import { useRouter } from 'next/router'

import DocumentTitle from 'atoms/DocumentTitle'

export interface ILandmarkContentProps {
  page: CurteaDeArgesPage | SlatinaPage
  storyIntro: React.ReactNode
}

export default function LandmarkContent(
  props: Readonly<ILandmarkContentProps>
) {
  const content = useLandmarkContent(props.page)
  const locale = useLocale()
  const { asPath } = useRouter()

  const otherStories = Object.entries(communityStoryContent)
    .map(([href, storyLocales]) => {
      const story = storyLocales[locale]

      return story &&
        Array.isArray(story.locations) &&
        story.locations.includes(props.page)
        ? { href, ...story }
        : null
    })
    .filter(
      (story): story is { href: string } & CommunityStoryContentData => !!story
    )

  // TODO: Extract story title into a common component
  const title = content.story?.title || ''
  const [mainTitle, rest] = title.split(/ \(/)
  const subtitle = rest ? `(${rest}` : null

  return (
    <>
      <DocumentTitle title={content.title} />
      <div className={styles.curteaDeArgesContent}>
        <EpisodeControls {...content} />
        <section className={styles.about}>
          <p>{locale === 'en' ? 'EPISODE CREDITS:' : 'DESPRE EPISOD:'}</p>
          <div className={styles.aboutContent}>
            {content.aboutEpisode.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
        <section className={styles.about}>
          <p>{locale === 'en' ? 'ABOUT THE SITE:' : 'DESPRE OBIECTIV:'}</p>
          <div className={styles.aboutContent}>
            {content.aboutObjective.map((objective) => (
              <p key={objective}>{objective}</p>
            ))}
          </div>
        </section>
        {content.imgSrc ? (
          <img
            src={content.imgSrc}
            alt={content.title}
            className={styles.episodeImage}
          />
        ) : null}
        {content.imgCaption ? (
          <span className={styles.caption}>{content.imgCaption}</span>
        ) : null}
        {/* TODO: Extract this component into a separate one */}
        <div className={styles.moreAboutWrapper}>
          <NavLink href={`/${content.nextHref}`}>
            <div className={styles.moreAbout}>
              <p>
                {locale === 'en'
                  ? 'Visit next on the route'
                  : 'Vizitați în continuare pe traseu'}
              </p>
              <h3>{content.nextText}</h3>
            </div>
          </NavLink>
        </div>
        <section className={styles.story}>
          <h2 className={styles.placesAndStoriesTitle}>
            <img
              className={styles.desktopHand}
              src='/assets/img/desktop-hand.png'
              alt='Voice Your Place Curtea de Arges'
            />
            <img
              className={styles.mobileHand}
              src='/assets/img/mobile-hand.png'
              alt='Voice Your Place Curtea de Arges'
            />
            {locale === 'en' ? 'Places and Stories' : 'Locuri și povești'}
          </h2>
          {props.storyIntro}
        </section>
        <section className={styles.story}>
          <p className={styles.storyTitle}>{mainTitle}</p>
          <p className={styles.storyTitle}>{subtitle}</p>
          <p className={styles.storyAuthor}>{`${locale === 'en' ? 'by' : 'de'
            } ${content.story?.author}`}</p>
          <p>{content.story?.content}</p>
        </section>
        {otherStories.length ? (
          <div>
            <h2 className={styles.otherStoriesTitle}>
              {locale === 'en'
                ? `Other Stories from ${content.title}`
                : `Alte povești de la ${content.title}`}
            </h2>
            <div className={styles.otherStories}>
              {otherStories.map((story) => (
                <div key={story.href}>
                  <NavLink href={`/community/${story.href}`}>
                    <h2>
                      {story.title} {locale === 'en' ? 'by' : 'de'}{' '}
                      {story.author}
                    </h2>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {SLATINA_PAGES.some((page) => asPath.includes(page)) ? (
          <NavLink href={'/community-slatina'}>
            <div className={styles.readOtherStoriesSlatina}>
              <h3>
                {locale === 'en'
                  ? 'Read other stories'
                  : 'Citește alte povești'}
              </h3>
              <p>
                {locale === 'en'
                  ? 'from the Voice Your Place Slatina series'
                  : 'din seria Voice Your Place Slatina'}
              </p>
              <img
                src='/assets/img/fish-slatina.png'
                alt='Voice Your Place Slatina'
              />
            </div>
          </NavLink>
        ) : null}
        <div className={styles.moreAboutWrapper}>
          <NavLink href={`/${content.nextHref}`}>
            <div className={styles.moreAbout}>
              <p>{locale === 'en' ? 'Next episode' : 'Episodul următor'}</p>
              <h3>{content.nextText}</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}
