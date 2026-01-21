import LandmarkContent from 'features/LandmarkContent'

import { LandmarkPage } from 'utils/types'
import { useCity, useLocale } from 'utils/hooks'

import { CityIntroStoryContent } from 'content/landmark'

export default function Landmark(props: Readonly<{ slug: LandmarkPage }>) {
  const locale = useLocale()
  const city = useCity(props.slug)

  return (
    <div>
      <LandmarkContent
        page={props.slug}
        storyIntro={CityIntroStoryContent[city][locale]}
      />
    </div>
  )
}
