import ProjectContent from 'features/ProjectContent'

import { SlatinaProjectContent } from 'content/project'
import { useLocale } from 'utils/hooks'

export default function ProjectSlatina() {
  const locale = useLocale()
  const content = SlatinaProjectContent[locale]

  return (
    <div>
      <ProjectContent content={content} />
    </div>
  )
}
