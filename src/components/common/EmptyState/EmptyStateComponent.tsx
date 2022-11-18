import React from 'react'
import CiscoIcon from '@msp/components/icons/CiscoIcon'
import Button from '@common/Button'

import s from './EmptyStateComponent.scss'

interface Props {
  title?: string
  message?: string
  btnName?: string
  cta?: () => void
}

const EmptyStateComponent = ({
  title,
  message = "You don't have any data on this page",
  btnName,
  cta,
}: Props) => {
  return (
    <div className={s.container}>
      <CiscoIcon />
      <h2>Secure MSP Hub</h2>
      {title && <h3>{title}</h3>}
      <p>{message}</p>
      {btnName && cta && (
        <Button contained={true} onClick={cta}>
          {btnName}
        </Button>
      )}
    </div>
  )
}

export default EmptyStateComponent
