import { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useLocale } from 'utils/hooks'

import NavLink from 'atoms/NavLink'

import styles from './index.module.scss'
import { useAllPages, useCitiesPages, useOtherPages } from 'content/pages'

export interface IHeaderProps {
  isColored?: boolean
}

export default function Header(props: Readonly<IHeaderProps>) {
  const [open, setOpen] = useState(false)
  const [citiesOpen, setCitiesOpen] = useState(false)
  const close = () => setOpen(false)
  const closeCities = () => setCitiesOpen(false)
  const navRef = useRef<HTMLElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const citiesRef = useRef<HTMLSpanElement>(null)
  const dropdownZoneRef = useRef<HTMLSpanElement>(null)
  const locale = useLocale()
  const router = useRouter()

  const citiesPages = useCitiesPages()
  const otherPages = useOtherPages()
  const allPages = useAllPages()

  useEffect(() => {
    if (!citiesOpen) {
      return
    }

    const handleClick = (e: MouseEvent) => {
      if (
        dropdownZoneRef.current &&
        !dropdownZoneRef.current.contains(e.target as Node) &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeCities()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [citiesOpen])

  useEffect(() => {
    if (!open) {
      return
    }
    const handleClick = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target as Node)
      ) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const langSwitchHref = useMemo(() => {
    let path = router.asPath || '/'
    const newLocale = locale === 'en' ? 'ro' : 'en'
    // If path contains /community or /comunitate, always go to /ro or /en
    if (/\/(community|comunitate)(\/|$)/.test(path)) {
      return `/${newLocale}`
    }
    // If path contains /qr but not /ro or /en, go to /ro or /en
    if (/\/qr(\/|$)/.test(path) && !/^\/(en|ro)\//.test(path)) {
      return `/${newLocale}`
    }
    path = path.replace(/^\/(en|ro)(\/|$)/, '/')
    return path === '/' ? `/${newLocale}` : `/${newLocale}${path}`
  }, [router.asPath, locale])

  return (
    <header
      className={`${styles.header} ${props.isColored ? styles.colored : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <NavLink href='/'>
            <img src='/assets/img/logo.png' alt='Voice Your Place' />
          </NavLink>
        </div>
        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          ref={burgerRef}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`${styles.nav} ${open ? styles.open : ''}`}
          ref={navRef}
        >
          <span className={styles.dropdownSelectZone} ref={dropdownZoneRef}>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setCitiesOpen((v) => !v)}
            >
              {locale === 'en' ? 'Cities' : 'Orașe'}
            </span>
            {citiesOpen && !open ? (
              <span className={styles.citiesDropdown} ref={citiesRef}>
                {citiesPages[locale].map((page) => (
                  <NavLink
                    key={page.href}
                    href={`/${page.href}`}
                    onClick={() => {
                      close()
                      closeCities()
                    }}
                  >
                    <span>{page.title}</span>
                  </NavLink>
                ))}
              </span>
            ) : null}
          </span>
          {(open && citiesOpen ? allPages : otherPages)[locale].map((page) => (
            <NavLink key={page.href} href={`/${page.href}`} onClick={close}>
              <span
                className={
                  citiesPages[locale].some(
                    (cityPage) => cityPage.title === page.title,
                  )
                    ? styles.cityTitle
                    : ''
                }
              >
                {page.title}
              </span>
            </NavLink>
          ))}
          <NavLink href={langSwitchHref} disableLocale onClick={close}>
            <span>{locale === 'en' ? 'RO' : 'EN'}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
