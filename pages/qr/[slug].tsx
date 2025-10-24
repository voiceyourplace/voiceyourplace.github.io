import { GetStaticPaths, GetStaticProps } from 'next'
import { CURTEA_DE_ARGES_PAGES, CurteaDeArgesPage, SLATINA_PAGES } from 'utils/types'

import QRContent from 'components/QRContent'


export default function ContentPage({ slug }: { slug: CurteaDeArgesPage }) {
  return (
    <QRContent slug={slug} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [...CURTEA_DE_ARGES_PAGES, ...SLATINA_PAGES]

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params?.slug as CurteaDeArgesPage,
    },
  }
}
