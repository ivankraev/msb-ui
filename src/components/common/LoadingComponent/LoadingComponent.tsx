import React from 'react'
import s from './LoadingComponent.scss'

interface Props {
  message?: string
  color?: string
}

const LoadingComponent = ({ message = 'Loading…', color = '#049fd9' }: Props) => {
  return (
    <div className={s.container}>
      <p>{message}</p>
      <div className={s.loadingSpinner} style={{ borderTop: `10px solid ${color}` }} />
    </div>
  )
}

export default LoadingComponent
