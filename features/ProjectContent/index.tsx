import DocumentTitle from 'atoms/DocumentTitle'

import { ProjectContentType } from 'content/project'

import styles from './index.module.scss'
import Zine from 'atoms/Zine'

export interface IProjectContentProps {
  content: ProjectContentType
}

export default function ProjectContent(props: Readonly<IProjectContentProps>) {
  return (
    <>
      <DocumentTitle title={props.content.pageTitle} />
      <div className={styles.projectWrapper}>
        <div className={styles.projectContainer}>
          <div className={styles.projectLeftHalf}>
            <div className={styles.title}>{props.content.title}</div>
            <span className={styles.zineMobile}>
              <Zine src={props.content.zineSrc} />
            </span>
            <div className={styles.presentation}>
              {props.content.presentation}
            </div>
            <div className={styles.titleMobile}>{props.content.title}</div>
            <figure>
              <img src={props.content.imgTeamSrc} alt='Project Team' />
              <figcaption>{props.content.caption}</figcaption>
            </figure>
          </div>
          <div className={styles.projectRightHalf}>{props.content.team}</div>
        </div>
        <span className={styles.zineDesktop}>
          <Zine src={props.content.zineSrc} />
        </span>
      </div>
      <div className={styles.socialSponsors}>
        <img src={props.content.imgSponsorsSrc} alt='Social Sponsors' />
      </div>
    </>
  )
}
