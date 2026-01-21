import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { communityContent } from 'content/pages'
import {
  SLATINA_PAGES,
  City,
  LandmarkPage,
  SulinaPage,
  SlatinaPage,
  SULINA_PAGES,
} from 'utils/types'
import {
  CurteaDeArgesContent,
  SlatinaContent,
  SulinaContent,
} from 'content/landmark'

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

export const useCity = (page: LandmarkPage): City => {
  if (SLATINA_PAGES.includes(page as SlatinaPage)) {
    return 'slatina'
  }

  if (SULINA_PAGES.includes(page as SulinaPage)) {
    return 'sulina'
  }

  return 'curtea-de-arges'
}

export function useCommunityContent(city: City) {
  const locale = useLocale()

  return communityContent[city][locale]
}

export function useLandmarkContent(page: LandmarkPage) {
  const locale = useLocale()

  return { ...CurteaDeArgesContent, ...SlatinaContent, ...SulinaContent }[
    page ?? 'biserica-domneasca'
  ][locale]
}
