import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react'

import { communityContent } from 'content/pages'
import {
  CurteaDeArgesPage,
  SlatinaPage,
  SLATINA_PAGES,
  Cities,
} from 'utils/types'
import { CurteaDeArgesContent, SlatinaContent } from 'content/landmark'

export function useLocale() {
  const { asPath } = useRouter()
  const [locale, setLocale] = useState('ro')

  useEffect(() => {
    const match = RegExp(/^\/(\w{2})(\/|$)/).exec(asPath)
    setLocale(match ? match[1] : 'ro')
  }, [asPath])

  if (!locale || (locale !== 'en' && locale !== 'ro')) {
    return 'ro'
  }

  return locale
}

export const useCity = (page: CurteaDeArgesPage | SlatinaPage) => {
  if (SLATINA_PAGES.includes(page as any)) {
    return 'slatina'
  } else {
    return 'curtea-de-arges'
  }
}

export function useCommunityContent(city: Cities) {
  const locale = useLocale()

  return communityContent[city][locale]
}

export function useLandmarkContent(page: CurteaDeArgesPage | SlatinaPage) {
  const locale = useLocale()

  return { ...CurteaDeArgesContent, ...SlatinaContent }[
    page ?? 'biserica-domneasca'
  ][locale]
}
