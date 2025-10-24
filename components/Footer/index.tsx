import { useFooterTexts } from 'utils/useFooterTexts'

import styles from './index.module.scss'
import { useRouter } from 'next/router'
import FooterContact from 'components/FooterContact'
import FooterPagesListing from 'components/FooterPagesListing'

export interface IFooterProps {
  isHidden?: boolean
}

export default function Footer(props: Readonly<IFooterProps>) {
  const texts = useFooterTexts()
  const { asPath } = useRouter()

  if (!texts || props.isHidden || asPath.includes('/qr/')) {
    return null
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerDesktop}>
        <div className={styles.footerColumn}>
          <FooterPagesListing />
        </div>

        <div className={styles.contactCenterColumn}>
          <FooterContact />
        </div>

        <div className={styles.footerColumn}>
          <img
            src='/assets/img/sticker-footer.svg'
            className={styles.footerImage}
            alt='Sticker VoiceYourPlace'
          />
        </div>
      </div>

      {/* The component that appears on small devices */}
      <div className={styles.footerMobile}>
        <span className={styles.footerMobileTopSection}>
          <div className={styles.leftSide}>
            <div className={styles.footerColumn}>
              <FooterPagesListing />
            </div>
          </div>
          <div className={styles.footerColumn}>
            <img
              src='/assets/img/sticker-footer.svg'
              className={styles.footerImage}
              alt='Sticker VoiceYourPlace'
            />
          </div>
        </span>
        <FooterContact />
      </div>
    </footer>
  )
}
