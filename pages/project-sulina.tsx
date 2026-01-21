import ProjectContent from 'features/ProjectContent'

import { SulinaProjectContent } from 'content/project'
import { useLocale } from 'utils/hooks'

export default function ProjectSulina() {
  const locale = useLocale()
  const content = SulinaProjectContent[locale]

  return (
    <div>
      <ProjectContent content={content} />
    </div>
  )
}
