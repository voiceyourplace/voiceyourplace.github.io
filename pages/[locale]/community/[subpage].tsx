import CommunityStory from 'components/CommunityStory'
import { CommunityPage, communityStoryContent } from '../../../content/pages'
import { Locale } from 'utils/types'


export default function CommunitySubpage({ subpage, locale }: { subpage: CommunityPage, locale: Locale }) {
  const content = communityStoryContent[subpage]?.[locale]

  if (!content) return <div>404 - Subpage not found</div>

  return (
    <CommunityStory subpage={subpage} />
  )
}

export async function getStaticPaths() {
  const subpages: CommunityPage[] = Object.keys(communityStoryContent) as CommunityPage[]
  const locales: Locale[] = ['en', 'ro']
  const paths = subpages.flatMap(subpage =>
    locales.map(locale => ({
      params: { locale, subpage }
    }))
  )
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { subpage: string, locale: string } }) {
  return {
    props: {
      subpage: params.subpage as CommunityPage,
      locale: params.locale as Locale,
    },
  }
}
