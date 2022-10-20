import React, { useState, useRef } from 'react'

import { useAppSelector } from '@msp/redux/hooks'
import { useLocationChange } from '@msp/hooks/useLocationChange'
import useClickOutside from '@msp/hooks/useClickOutside'
import BellIcon from '@msp/components/icons/BellIcon'
import UserIcon from '@msp/components/icons/UserIcon'
import Logo from '@msp/components/common/Logo'
import UserMenu from './components/UserMenu'

import s from './Header.scss'

const Header: React.FC = () => {
  const { userInfo } = useAppSelector((state) => state.user)

  const [isMenuShown, setMenuShown] = useState(false)
  // close the menu on navigation
  useLocationChange(() => {
    onCloseMenu()
  })
  const ignoredElement = useRef<HTMLDivElement | null>(null)
  const onCloseMenu = () => setMenuShown(false)

  const menuRef = useClickOutside(onCloseMenu, isMenuShown, ignoredElement)

  return (
    <div className={s.container}>
      <div className={s.brandInfoContainer}>
        <div className={s.brandLogoContainer}>
          <img className={s.brandLogo} src="/logo-placeholder.jpg" />
        </div>
        <span className={s.brandMark}>Secure MSP Hub</span>
      </div>
      <div className={s.userMenuContainer}>
        <div className={s.notificationsContainer}>
          <BellIcon />
        </div>
        <div className={s.userDetailsContainer}>
          <div
            className={s.userDetails}
            onClick={() => setMenuShown(!isMenuShown)}
            ref={ignoredElement}
          >
            <Logo link={userInfo!.logo!} />
            <span className={s.name}>{userInfo!.name}</span>
            <UserIcon />
          </div>
          {isMenuShown ? (
            <div ref={menuRef}>
              <UserMenu userInfo={userInfo!} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Header
