import React from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import Navbar from './components/Navbar'

import s from './Sidebar.scss'

const Sidebar = () => {
  const { userInfo } = useAppSelector((state) => state.user)
  return (
    <aside className={s.container}>
      <div className={s.organizationContainer}>
        <img className={s.logoImage} src={userInfo!.logo} />
        <span className={s.name}>{userInfo!.organization}</span>
      </div>
      <Navbar />
    </aside>
  )
}

export default Sidebar
