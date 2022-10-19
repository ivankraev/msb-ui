import React from 'react'
import cx from 'classnames'
import s from './ButtonsGroup.scss'

interface Props {
  children: React.ReactNode
  styles?: React.CSSProperties
}

const ButtonsGroup = ({ children, styles }: Props) => {
  return <div className={cx(s.container, styles)}>{children}</div>
}

export default ButtonsGroup
