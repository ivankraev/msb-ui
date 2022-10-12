import React from 'react'

import s from './Sidebar.scss'

import { useAppSelector } from '@msp/redux/hooks'
import Navbar from './components/Navbar'
import Logo from '../common/Logo'

const Sidebar = () => {
  const { userInfo } = useAppSelector((state) => state.user)
  return (
    <aside className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.organizationContainer}>
          <Logo link={userInfo!.logo!} />
          <span className={s.name}>{userInfo!.organization}</span>
        </div>
        <Navbar />
      </div>
    </aside>
  )
}

export default Sidebar
