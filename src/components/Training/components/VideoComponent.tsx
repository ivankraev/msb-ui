import React from 'react'
import s from '../Training.scss'

interface Props {
  title: string
  youtubeID: string
}

const VideoComponent = ({ title, youtubeID }: Props) => {
  return (
    <div className={s.videoContainer} data-testid="video-component">
      <h3>{title}</h3>
      <iframe
        title={title}
        frameBorder="0"
        height="435"
        width="850"
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
      />
    </div>
  )
}

export default VideoComponent
