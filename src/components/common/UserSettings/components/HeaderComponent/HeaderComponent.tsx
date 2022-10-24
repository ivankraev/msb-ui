import React from 'react'
import s from './HeaderComponent.scss'

interface Props {
  label: string
  children: React.ReactNode
}

const HeaderComponent = ({ label, children }: Props) => {
  return (
    <div className={s.container}>
      <h3>{label}</h3>
      {children}
    </div>
  )
}

export default HeaderComponent
