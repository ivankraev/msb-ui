import React from 'react'
import LoadingSpinner from '@common/LoadingSpinner'
import s from './LoadingSkeleton.scss'

const LoadingSkeleton = () => {
  return (
    <div className={s.container}>
      <LoadingSpinner isSubmitting={true} size={'medium'} />
    </div>
  )
}

export default LoadingSkeleton
