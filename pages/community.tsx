import DocumentTitle from 'atoms/DocumentTitle'
import CommunityContent from 'components/CommunityContent'
import { communityCards } from 'content/pages'

import { useLocale } from 'utils/hooks'

export default function Community() {
  const locale = useLocale()

  return (
    <div>
      <DocumentTitle
        title={locale === 'en' ? 'Places and stories' : 'Locuri și povești'}
      />
      <section className='container' style={{ paddingTop: '1rem' }}>
        <CommunityContent city='curtea-de-arges' cards={communityCards[locale]} />
      </section>
    </div>
  )
}
