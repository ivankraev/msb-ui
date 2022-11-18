import React from 'react'
import s from '../Training.scss'

interface Props {
  title: string
  srcUrl: string
}

const VideoComponent = ({ title, srcUrl }: Props) => {
  return (
    <div className={s.videoContainer} data-testid="video-component">
      <h3>{title}</h3>
      <iframe
        title={title}
        frameBorder="0"
        height="435"
        width="850"
        data-testid="video-frame"
        src={srcUrl}
      />
    </div>
  )
}

export default VideoComponent
