import { GetStaticPaths, GetStaticProps } from 'next'
import { City, CITIES, Locale } from 'utils/types'

import AllQRContent from 'components/AllQRContent'

export default function QrCityPage(props: {
  city: City
  locale: Locale
}) {
  return (
    <AllQRContent {...props} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['ro', 'en']
  const paths = CITIES.flatMap((city) =>
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
      city: params?.city as City,
      locale: params?.locale as string,
    },
  }
}
