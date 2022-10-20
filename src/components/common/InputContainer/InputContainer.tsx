import React from 'react'
import cx from 'classnames'
import s from './InputContainer.scss'

interface Props {
  children: React.ReactNode
  label: string
  styles?: React.CSSProperties
}

const InputContainer = ({ children, label, styles }: Props) => {
  return (
    <div className={cx(s.container, styles)}>
      <strong>{label}</strong>
      {children}
    </div>
  )
}

export default InputContainer
