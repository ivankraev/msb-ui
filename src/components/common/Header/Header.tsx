import React from 'react'
import s from './Header.scss'

interface Props {
  label: string
}

const Header = ({ label }: Props) => {
  return (
    <div className={s.container}>
      <span>breadcrumb</span>
      <h1>{label}</h1>
    </div>
  )
}

export default Header
