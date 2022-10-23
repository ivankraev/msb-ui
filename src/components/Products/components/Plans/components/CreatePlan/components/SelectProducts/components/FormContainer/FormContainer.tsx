import React from 'react'
import cx from 'classnames'
import s from './FormContainer.scss'

interface Props {
  children: React.ReactNode
  styles?: React.CSSProperties
}

const FormContainer = ({ children, styles }: Props) => {
  return <div className={cx(s.container, styles)}>{children}</div>
}

export default FormContainer
