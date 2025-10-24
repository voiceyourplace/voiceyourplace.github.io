import { useRef, useState, useEffect } from 'react'

import styles from './index.module.scss'

export interface IAudioPlayerProps {
  src: string
}

export default function AudioPlayer(props: Readonly<IAudioPlayerProps>) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const updateProgress = () => setCurrentTime(audio.currentTime)
    const setAudioDuration = () => {
      setDuration(audio.duration || 0)
      setCurrentTime(audio.currentTime || 0)
    }
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', setAudioDuration)
    audio.addEventListener('durationchange', setAudioDuration)
    audio.addEventListener('ended', handleEnded)

    // If metadata is already loaded (e.g. cached), set duration immediately
    if (audio.readyState >= 1) {
      setAudioDuration()
    }

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', setAudioDuration)
      audio.removeEventListener('durationchange', setAudioDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [props.src])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  const handlePlayPause = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const value = Number(e.target.value)
    const newTime = (value / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  return (
    <div className={styles.audioPlayer}>
      <div className={styles.progressContainer}>
        <span className={styles.currentTime}>{formatTime(currentTime)}</span>
        <input
          className={styles.progressBar}
          type='range'
          min={0}
          max={100}
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
        />
        <span className={styles.totalTime}>{formatTime(duration)}</span>
      </div>
      <div className={styles.playButtonContainer}>
        <button
          className={styles.playButton}
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <img
              className={styles.pause}
              src='/assets/img/pause-button.png'
              alt='Pause'
            />
          ) : (
            <img src='/assets/img/play-button.png' alt='Play' />
          )}
        </button>
      </div>
      <audio ref={audioRef} src={props.src} preload='metadata'>
        <track kind='captions' label='No captions' />
      </audio>
    </div>
  )
}
