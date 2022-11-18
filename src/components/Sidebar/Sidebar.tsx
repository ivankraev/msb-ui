import React from 'react'

import s from './Sidebar.scss'

import { useAppSelector } from '@msp/redux/hooks'
import Navbar from './components/Navbar'
import Logo from '../common/Logo'
import { useGetHubQuery } from '@msp/features/api/hubApiSlice'

const Sidebar = () => {
  const { userInfo } = useAppSelector((state) => state.user)
  const { data: settingsData } = useGetHubQuery(userInfo!.customer?.hubId)
  return (
    <aside className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.organizationContainer}>
          <Logo link={settingsData?.logoUrl} />
          <span className={s.name}>{userInfo!.organization}</span>
        </div>
        <Navbar />
      </div>
    </aside>
  )
}

export default Sidebar
