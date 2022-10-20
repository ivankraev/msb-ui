import React, { ChangeEventHandler } from 'react'
import cx from 'classnames'
import s from './SimpleInput.scss'

interface Props {
  label?: string
  styles?: React.CSSProperties
  handler: ChangeEventHandler<HTMLInputElement>
  defaultValue?: string | number
  type?: string
}

const SimpleInput = ({ label, styles, handler, defaultValue, type = 'text' }: Props) => {
  return (
    <span className={cx(s.container, styles)}>
      <input
        type={type}
        placeholder={label}
        onChange={handler}
        defaultValue={defaultValue}
        data-testid="simple-input"
      />
    </span>
  )
}

export default SimpleInput
