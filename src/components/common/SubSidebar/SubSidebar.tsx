import React from 'react'
import s from '@msp/components/common/Subsidebar/Subsidebar.scss'

interface Props {
  children: React.ReactNode
}

const SubSidebar = ({ children }: Props) => {
  return <aside className={s.container}>{children}</aside>
}

export default SubSidebar
