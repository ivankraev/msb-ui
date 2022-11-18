import React from 'react'
import cx from 'classnames'
import s from './FormGridContainer.scss'

interface Props {
  children: React.ReactNode
  styles?: React.CSSProperties
}

const FormGridContainer = ({ children, styles }: Props) => {
  return <div className={cx(s.container, styles)}>{children}</div>
}

export default FormGridContainer
