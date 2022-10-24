import React from 'react'
import Button from '@common/Button'
import ButtonsContainer from '@common/ButtonsContainer'
import ButtonsGroup from '@common/ButtonsGroup'
import s from './ConfirmDialog.scss'

interface Props {
  isOpen?: boolean
  confirmHandler?: () => void
  headerText?: string
  contentText?: string
  closeHandler?: () => void
}

const ConfigmDialog = ({
  isOpen = true,
  confirmHandler,
  closeHandler,
  headerText,
  contentText,
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
            <Button contained={true} onClick={confirmHandler}>
              confirm
            </Button>
          </ButtonsGroup>
        </ButtonsContainer>
      </div>
    </div>
  )
}

export default ConfigmDialog
