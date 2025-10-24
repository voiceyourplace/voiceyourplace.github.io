import Link from 'next/link'

import { useLocale } from 'utils/hooks'

export interface INavLinkProps {
  href: string
  children: React.ReactNode
  disableLocale?: boolean
  onClick?: () => void
}

export default function NavLink(props: Readonly<INavLinkProps>) {
  const locale = useLocale()

  return (
    <Link
      href={props.disableLocale ? props.href : `/${locale}${props.href}`}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  )
}
