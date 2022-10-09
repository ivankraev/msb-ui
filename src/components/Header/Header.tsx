import React from 'react'

import s from './Header.scss'

import { useAppSelector } from '@msp/redux/hooks'
import BellIcon from '@msp/components/icons/BellIcon'
import UserIcon from '@msp/components/icons/UserIcon'

const Header: React.FC = () => {
  const { userInfo } = useAppSelector((state) => state.user)

  return (
    <div className={s.container}>
      <div className={s.brandInfoContainer}>
        <div className={s.brandLogoContainer}>
          <img className={s.brandLogo} src="logo-placeholder.jpg" />
        </div>
        <span className={s.brandMark}>Secure MSP Hub</span>
      </div>
      <div className={s.userMenuContainer}>
        <div className={s.notificationsContainer}>
          <BellIcon />
        </div>
        <div className={s.userDetails}>
          <img className={s.companyLogo} src={userInfo!.logo} />
          <span className={s.name}>{userInfo!.name}</span>
          <UserIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
