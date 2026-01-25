import NavLink from 'atoms/NavLink'
import styles from './index.module.scss'

export interface INextRouteButtonProps {
  href: string
  topText: string
  mainText?: string | React.ReactNode
}

export default function NextRouteButton(props: Readonly<INextRouteButtonProps>) {
  const { href, topText, mainText } = props

  return (
    <div className={styles.wrapper}>
      <NavLink href={href}>
        <div className={styles.content}>
          <p>{topText}</p>
          {mainText && <h3>{mainText}</h3>}
        </div>
      </NavLink>
    </div>
  )
}
