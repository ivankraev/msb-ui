import React, { ChangeEventHandler } from 'react'
import cx from 'classnames'
import s from './SimpleInput.scss'

interface Props {
  label: string
  type?: string
  defaultValue?: string | number
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
  styles?: React.CSSProperties
  name?: string
  error?: string
  skipErrorMessage?: boolean
  onBlur?: {
    (e: React.FocusEvent): void
    <T>(fieldOrEvent: T): T extends string
      ? (e: React.FocusEvent<HTMLInputElement, Element>) => void
      : void
  }
}

const SimpleInput = ({
  label,
  type = 'text',
  defaultValue,
  onChangeHandler,
  styles,
  name,
  onBlur,
  error,
  skipErrorMessage,
}: Props) => {
  return (
    <span className={cx(s.container, styles)}>
      <strong>{label}</strong>
      <input
        type={type}
        onChange={onChangeHandler}
        defaultValue={defaultValue}
        onBlur={onBlur}
        data-testid="simple-input"
        name={name}
        className={error && s.error}
      />
      <span className={s.error}>
        <span>{!skipErrorMessage && error}</span>
      </span>
    </span>
  )
}

export default SimpleInput
