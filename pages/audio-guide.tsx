import { AudioGuideContent } from 'components/AudioGuideContent'
import { audioGuideContent } from 'content/pages'
import { useLocale } from 'utils/hooks'

export default function AudioGuide() {
  const locale = useLocale()

  return (
    <AudioGuideContent content={audioGuideContent['curtea-de-arges'][locale]} />
  )
}
