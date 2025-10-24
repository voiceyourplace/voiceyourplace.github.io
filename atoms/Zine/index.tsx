import * as React from 'react'
import { useLocale } from 'utils/hooks'

import styles from './index.module.scss'

export interface IZineProps {
  src?: string
}

export default function Zine(props: Readonly<IZineProps>) {
  const locale = useLocale()

  const [isVisible, setIsVisible] = React.useState(false)

  if (!props.src) {
    return null
  }

  const viewText =
    locale === 'en'
      ? 'View the VYP Slatina Zine'
      : 'Vizualizeaza aici Zine-ul VYP Slatina'

  const hideText = locale === 'en' ? 'Hide the VYP Slatina Zine' : 'Ascunde Zine-ul VYP Slatina'

  return (
    <div className={styles.zineWrapper}>
      <div className={styles.zineLink} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? hideText : viewText}
      </div>
      {isVisible && (
        <iframe
          title='Project Zine'
          className={styles.zine}
          src={props.src}
          allowFullScreen
        />
      )}
    </div>
  )
}
