import React from 'react'
import cx from 'classnames'
import s from './LoadingSpinner.scss'

interface Props {
  isSubmitting: boolean
  size?: 'small' | 'medium' | 'large'
}

const LoadingSpinner = ({ isSubmitting, size = 'small' }: Props) => {
  return (
    <div
      className={cx(s.small, s[size])}
      style={{ display: !isSubmitting ? 'none' : '' }}
      data-testid="loading-spinner"
    />
  )
}

export default LoadingSpinner
