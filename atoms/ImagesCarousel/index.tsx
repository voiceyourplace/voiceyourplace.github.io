import { useEffect, useState } from 'react'

import styles from './index.module.scss'

export default function ImagesCarousel() {
  const IMAGES_COUNT = 35
  const images = [
    '/assets/img/home-page.webp',
    ...Array.from(
      { length: IMAGES_COUNT },
      (_, i) =>
        `/assets/img/home-slideshow/slideshow-${String(i + 1).padStart(
          2,
          '0'
        )}.jpg`
    ),
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className={styles.imagesCarousel}>
      <img src={images[current]} alt={`Slideshow ${current}`} />
    </div>
  )
}
