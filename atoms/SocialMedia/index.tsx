import styles from './index.module.scss'

export interface ISocialMediaProps {
  isLight?: boolean
}

export default function SocialMedia(props: Readonly<ISocialMediaProps>) {
  return (
    <div className={`${styles.socials} ${props.isLight ? styles.light : ''}`}>
      <a
        href='https://instagram.com/voiceyourplace'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/assets/img/logo-instagram.png' alt='Instagram' />
      </a>
      <a
        href='https://facebook.com/voiceyourplace'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/assets/img/logo-facebook.png' alt='Facebook' />
      </a>
      <a
        href='https://soundcloud.com/voice-your-place'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/assets/img/logo-soundcloud.png' alt='SoundCloud' />
      </a>
      <a
        href='https://www.youtube.com/@VoiceYourPlace'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/assets/img/logo-youtube.png' alt='YouTube' />
      </a>
    </div>
  )
}
