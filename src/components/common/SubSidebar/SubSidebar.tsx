import React from 'react'
import s from './SubSidebar.scss'

interface Props {
  children: React.ReactNode
}

const SubSidebar = ({ children }: Props) => {
  return <aside className={s.container}>{children}</aside>
}

export default SubSidebar
