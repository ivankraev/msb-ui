import React from 'react'
import s from './HeaderContainer.scss'

interface Props {
  label: string
  children: React.ReactNode
}

const HeaderContainer = ({ label, children }: Props) => {
  return (
    <div className={s.container}>
      <h3>{label}</h3>
      {children}
    </div>
  )
}

export default HeaderContainer
