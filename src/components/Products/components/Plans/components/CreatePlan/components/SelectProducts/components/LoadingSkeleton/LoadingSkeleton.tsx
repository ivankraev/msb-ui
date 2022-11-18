import React from 'react'
import s from './LoadingSkeleton.scss'

const LoadingSkeleton = () => {
  return (
    <div className={s.container}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className={s.planNameHolder}>
        <strong>Plan name</strong>
        <div />
      </div>
    </div>
  )
}

export default LoadingSkeleton
