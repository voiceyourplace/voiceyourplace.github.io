import AudioGuideContent from 'components/AudioGuideContent'
import { useLocale } from 'utils/hooks'
import { audioGuideContent } from 'content/pages'

export default function AudioGuideSlatina() {
  const locale = useLocale()

  return (
    <div>
      <AudioGuideContent content={audioGuideContent['slatina'][locale]} />
    </div>
  )
}
