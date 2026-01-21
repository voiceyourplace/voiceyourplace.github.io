import { AudioGuideContent } from 'components/AudioGuideContent'
import { useLocale } from 'utils/hooks'
import { audioGuideContent } from 'content/pages'

export default function AudioGuideSulina() {
  const locale = useLocale()

  return (
    <AudioGuideContent content={audioGuideContent['sulina'][locale]} />
  )
}
