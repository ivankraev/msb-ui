import React from 'react'
import Button from '@common/Button'
import LoadingSpinner from '@common/LoadingSpinner'

const SubmitButton = ({ ...props }) => {
  return (
    <Button {...props}>
      <LoadingSpinner isSubmitting={props.isSubmitting} />
      {props.children}
    </Button>
  )
}

export default SubmitButton
