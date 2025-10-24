import { useLocale } from 'utils/hooks'
import { communityStoryContent, CommunityPage, SlatinaCommunityPage } from '../../content/pages'
import styles from './index.module.scss'
import DocumentTitle from 'atoms/DocumentTitle'

type CommunityStoryProps = {
  subpage: CommunityPage | SlatinaCommunityPage
}

export default function CommunityStory({ subpage }: Readonly<CommunityStoryProps>) {
  const locale = useLocale()
  const content = communityStoryContent[subpage]?.[locale]

  // TODO: Extract story title into a common component
  const title = content?.title || ''
  const [mainTitle, rest] = title.split(/ \(/)
  const subtitle = rest ? `(${rest}` : null

  return (
    <>
      <DocumentTitle title={content?.title || ''} />
      <div className={styles.communityStoryWrapper}>
        <div className={styles.communityStoryTitle}>
          <h1>{mainTitle}</h1>
          <h1>{subtitle}</h1>
          <h2>{content?.author || ''}</h2>
        </div>
        <div className={styles.communityStoryContent}>
          {content?.content}
        </div>
        {content?.footer ? (
          <div className={styles.communityStoryFooter}>
            {content.footer}
          </div>
        ) : null}
      </div>
    </>
  )
}
