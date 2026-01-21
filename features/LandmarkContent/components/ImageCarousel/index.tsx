import { useState } from 'react'

import styles from './index.module.scss'

export interface ImageCarouselItem {
  imgSrc: string
  imgCaption?: React.ReactNode
}

export interface IImageCarouselProps {
  images?: ImageCarouselItem[]
}

export default function ImageCarousel(props: Readonly<IImageCarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!props.images || props.images.length === 0) {
    return null
  }

  const imagesLength = props.images.length

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesLength - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        <div className={styles.carouselViewport}>
          {props.images.map((item, index) => (
            <div
              key={index}
              className={`${styles.carouselSlide} ${index === currentIndex ? styles.active : ''
                } ${index < currentIndex ? styles.prev : ''} ${index > currentIndex ? styles.next : ''
                }`}
            >
              <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {props.images.length > 1 && (
          <>
            <button
              className={`${styles.carouselControl} ${styles.carouselPrev}`}
              onClick={goToPrevious}
              aria-label='Previous slide'
            >
              <svg viewBox='0 0 100 100'>
                <polygon points='0,50 80,100 80,0' fill='#fff' />
              </svg>
            </button>
            <button
              className={`${styles.carouselControl} ${styles.carouselNext}`}
              onClick={goToNext}
              aria-label='Next slide'
            >
              <svg viewBox='0 0 100 100'>
                <polygon points='100,50 20,100 20,0' fill='#fff' />
              </svg>
            </button>

            <div className={styles.carouselNavigation}>
              {props.images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselNavigationButton} ${index === currentIndex ? styles.active : ''
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {props.images[currentIndex].imgCaption && (
        <span className={styles.caption}>
          {props.images[currentIndex].imgCaption}
        </span>
      )}
    </div>
  )
}
