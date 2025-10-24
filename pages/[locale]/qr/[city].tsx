import { GetStaticPaths, GetStaticProps } from 'next'
import { Cities, Locale } from 'utils/types'

import AllQRContent from 'components/AllQRContent'

export default function QrCityPage(props: {
  city: Cities
  locale: Locale
}) {
  return (
    <AllQRContent {...props} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cities: Cities[] = ['curtea-de-arges', 'slatina']
  const locales = ['ro', 'en']
  const paths = cities.flatMap((city) =>
    locales.map((locale) => ({ params: { locale, city } }))
  )
  return {
    paths,
    fallback: false,
  }
}

// TODO: Replace all the static props with this pattern
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      city: params?.city as Cities,
      locale: params?.locale as string,
    },
  }
}
