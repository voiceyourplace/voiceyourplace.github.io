import SocialMedia from "atoms/SocialMedia";

import styles from './index.module.scss'
import { useLocale } from "utils/hooks";

export default function QRFooter({ isDark }: Readonly<{ isDark?: boolean }>) {
  const locale = useLocale()

  return (
    <footer className={styles.qrFooter}>
      <p>{locale === 'ro' ? 'Urmăriți-ne pe' : 'Follow us on'}</p>
      <div className={styles.socialsWrapper}>
        <SocialMedia isLight={!isDark} />
      </div>
      <p>
        CONTACT:
        <br />
        <a
          href='mailto:voiceyourplace@gmail.com?subject = Feedback&body = Message'
          style={{ color: isDark ? '#000' : '#fff' }}
        >
          voiceyourplace@gmail.com
        </a>
      </p>
      <div className={styles.copyright}>
        <a href='/' style={{ color: isDark ? '#000' : '#fff' }}>©VoiceYourPlace 2025</a>
      </div>
    </footer>
  )
}