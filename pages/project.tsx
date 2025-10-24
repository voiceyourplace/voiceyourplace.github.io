import ProjectContent from 'features/ProjectContent'
import { useLocale } from 'utils/hooks'

import { CurteaDeArgesProjectContent } from 'content/project'

export default function Project() {
  const locale = useLocale()
  const content = CurteaDeArgesProjectContent[locale]

  return (
    <div>
      <ProjectContent content={content} />
    </div>
  )
}
