import { useFooterTexts } from 'utils/useFooterTexts'

import styles from './index.module.scss'

import NavLink from 'atoms/NavLink'
import { useAllPages } from 'content/pages'
import { useLocale } from 'utils/hooks'

export default function FooterPagesListing() {
  const texts = useFooterTexts()
  const locale = useLocale()
  const mainPages = useAllPages()

  if (!texts) {
    return null
  }

  return (
    <>
      <p>{texts.pages}</p>
      <ul className={styles.contactFooterList}>
        {mainPages[locale].map((page) => (
          <NavLink key={page.href} href={`/${page.href}`}>
            <li>{page.title}</li>
          </NavLink>
        ))}
      </ul>
    </>
  )
}