import React from 'react'
import cx from 'classnames'
import s from './HeaderComponent.scss'

interface Props {
  label: string
  children?: React.ReactNode
  styles?: React.CSSProperties
}

const HeaderComponent = ({ label, children, styles }: Props) => {
  return (
    <div className={cx(s.container, styles)}>
      <h3>{label}</h3>
      {children}
    </div>
  )
}

export default HeaderComponent
