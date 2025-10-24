import SocialMedia from 'atoms/SocialMedia'

import { useFooterTexts } from 'utils/useFooterTexts'

import styles from './index.module.scss'

export default function FooterContact() {
  const texts = useFooterTexts()

  if (!texts) {
    return null
  }

  return (
    <div className={styles.footerContact}>
      <p>{texts.followUs}</p>
      <div className={styles.socialMediaFooterWrapper}>
        <SocialMedia />
      </div>
      <p>
        {texts.contactLabel}
        <br />
        <a
          href='mailto:voiceyourplace@gmail.com?subject = Feedback&body = Message'
          style={{ color: '#000000' }}
        >
          voiceyourplace@gmail.com
        </a>
      </p>
      <div className={styles.copyright}>
        <a href='/'>{texts.copyright}</a>
      </div>
    </div>
  )
}
