import React from 'react'
import s from '@msp/components/common/Subsidebar/components/Navbarholder/NavbarHolder.scss'

interface Props {
  title: string
  children: React.ReactNode
}

const NavbarHolder = ({ title, children }: Props) => {
  return (
    <div className={s.container}>
      <strong>{title}</strong>
      {children}
      <hr />
    </div>
  )
}

export default NavbarHolder
