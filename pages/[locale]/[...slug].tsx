import dynamic from 'next/dynamic'

import { PageSlug } from '../../content/pages'
import { Locale } from 'utils/types'

const pageComponentMap: Record<PageSlug, any> = {
  'biserica-domneasca': dynamic(() => import('../landmark')),
  'san-nicoara': dynamic(() => import('../landmark')),
  'manastirea-curtea-de-arges': dynamic(() => import('../landmark')),
  olari: dynamic(() => import('../landmark')),
  'gara-regala': dynamic(() => import('../landmark')),
  'casa-norocea': dynamic(() => import('../landmark')),
  'biserica-sfanta-treime': dynamic(() => import('../landmark')),
  'centrul-vechi-slatina': dynamic(() => import('../landmark')),
  'casa-hanciu': dynamic(() => import('../landmark')),
  'cinematograful-victoria': dynamic(() => import('../landmark')),
  'casa-fantaneanu': dynamic(() => import('../landmark')),
  'podul-olt': dynamic(() => import('../landmark')),
  community: dynamic(() => import('../community')),
  'community-slatina': dynamic(() => import('../community-slatina')),
  'audio-guide': dynamic(() => import('../audio-guide')),
  'audio-guide-slatina': dynamic(() => import('../audio-guide-slatina')),
  project: dynamic(() => import('../project')),
  'project-slatina': dynamic(() => import('../project-slatina')),
  contact: dynamic(() => import('../contact')),
}

export default function ContentPage({ slug }: { slug: PageSlug }) {
  const PageComponent = pageComponentMap[slug]

  if (!PageComponent) {
    return <div>404 - Component not found</div>
  }

  return <PageComponent slug={slug} />
}

export async function getStaticPaths() {
  const slugs = Object.keys(pageComponentMap) as PageSlug[]
  const locales: Locale[] = ['en', 'ro']
  const paths = slugs.flatMap((slug) =>
    locales.map((locale) => ({
      params: { locale, slug: [slug] },
    }))
  )
  return { paths, fallback: false }
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string[] | string; locale: string }
}) {
  const slugArr = Array.isArray(params.slug) ? params.slug : [params.slug]
  return {
    props: {
      slug: slugArr[0] as PageSlug,
      locale: params.locale as Locale,
    },
  }
}
