import React from 'react'
import Button from '@common/Button'
import ButtonsContainer from '@common/ButtonsContainer'
import ButtonsGroup from '@common/ButtonsGroup'
import SubmitButton from '@msp/components/SubmitButton'
import s from './ConfirmDialog.scss'

interface Props {
  isOpen: boolean
  confirmHandler: () => void
  headerText: string
  contentText: string
  closeHandler: () => void
  isSubmitting?: boolean
}

const ConfigmDialog = ({
  isOpen,
  confirmHandler,
  closeHandler,
  headerText,
  contentText,
  isSubmitting = false,
}: Props) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={s.container}>
      <div className={s.modal} onClick={closeHandler} />
      <div className={s.content}>
        <div>
          <h2>{headerText}</h2>
          <span>{contentText}</span>
        </div>
        <ButtonsContainer>
          <div />
          <ButtonsGroup>
            <Button onClick={closeHandler}>cancel</Button>
            <SubmitButton
              contained={true}
              onClick={confirmHandler}
              disabled={isSubmitting}
              isSubmitting={isSubmitting}
            >
              confirm
            </SubmitButton>
          </ButtonsGroup>
        </ButtonsContainer>
      </div>
    </div>
  )
}

export default ConfigmDialog
