import NavLink from 'atoms/NavLink'

import { useCommunityContent, useLocale } from 'utils/hooks'

import styles from './index.module.scss'
import { CommunityPage, SlatinaCommunityPage } from 'content/pages'
import { Cities } from 'utils/types'

export interface ICommunityContentProps {
  city: Cities
  cards: {
    back: string
    front: string
    url: CommunityPage | SlatinaCommunityPage
  }[]
}

export default function CommunityContent(
  props: Readonly<ICommunityContentProps>
) {
  const content = useCommunityContent(props.city)
  const locale = useLocale()

  return (
    <div className={styles.communityContent}>
      <h1>{content.title}</h1>
      <p className={styles.description}>{content.description}</p>
      <div className={styles.imageGallery}>
        {props.cards.map((card, i) => {
          const href = `/${locale}/${locale == 'en' ? 'community' : 'comunitate'
            }/${card.url}`

          return (
            <div key={card.url} className={styles.galleryItem}>
              <div className={styles.flipContainer}>
                <div className={styles.flipper}>
                  <div className={styles.front}>
                    <NavLink href={href} disableLocale>
                      <img src={card.front} alt={`Community Front ${i + 1}`} />
                    </NavLink>
                  </div>

                  <div className={styles.back}>
                    <NavLink href={href} disableLocale>
                      <img src={card.back} alt={`Community Back ${i + 1}`} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
