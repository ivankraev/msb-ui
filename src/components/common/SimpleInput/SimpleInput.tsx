import React, { ChangeEventHandler } from 'react'
import cx from 'classnames'
import s from './SimpleInput.scss'

interface Props {
  label?: string
  styles?: React.CSSProperties
  handler: ChangeEventHandler<HTMLInputElement>
  defaultValue?: string
}

const a = 5

const SimpleInput = ({ label, styles, handler, defaultValue }: Props) => {
  return (
    <span className={cx(s.container, styles)}>
      <input
        type="text"
        placeholder={label}
        onChange={handler}
        defaultValue={defaultValue}
        data-testid="simple-input"
      />
    </span>
  )
}

export default SimpleInput
