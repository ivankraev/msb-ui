import React, { useEffect } from 'react'
import { uiComponentsActions } from '@msp/features/uiComponents/uiComponentsSlice'
import { useAppDispatch, useAppSelector } from '@msp/redux/hooks'
import s from './Snackbar.scss'
import v from '@msp/theme/variables.scss'

enum SnackbarSeverity {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success',
}

type severityToColorType = {
  [key: string]: string
}
const severityToColor: severityToColorType = {
  error: v.errorColor,
  warning: v.orangeColor,
  info: v.primaryColor,
  success: v.greenColor,
}

const Snackbar = () => {
  const dispatch = useAppDispatch()
  const { show, severity, text, autoCloseTimeout } = useAppSelector(
    (state) => state.uiComponents.snackBar,
  )
  const { toggleSnackBar } = uiComponentsActions()

  useEffect(() => {
    if (autoCloseTimeout) {
      setTimeout(() => {
        dispatch(toggleSnackBar(false))
      }, autoCloseTimeout)
    }
  }, [autoCloseTimeout])

  const onCloseHandler = () => {
    toggleSnackBar(false)
  }
  return (
    <div
      className={s.container}
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
        backgroundColor: severityToColor[severity || SnackbarSeverity.info],
      }}
    >
      <div className={s.innerContent}>
        <div className={s.popUpText}>{text}</div>
        {!autoCloseTimeout && show && (
          <div onClick={onCloseHandler} className={s.close} data-testid="cross">
            &times;
          </div>
        )}
      </div>
    </div>
  )
}

export default Snackbar
