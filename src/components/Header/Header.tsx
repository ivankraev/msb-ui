import React, { useState, useRef } from 'react'
import cx from 'classnames'

import s from './Header.scss'

import { useAppSelector } from '@msp/redux/hooks'
import BellIcon from '@msp/components/icons/BellIcon'
import UserIcon from '@msp/components/icons/UserIcon'
import Logo from '@msp/components/common/Logo'
import useOnClickOutside from '@msp/hooks/useOnClickOutside'
import UserMenu from './components/UserMenu'
import { useLocationChange } from '@msp/hooks/useLocationChange'

const CLICK_OUTSIDE_IGNORE_CLASSNAME = 'ignoreUserMenu'

const Header: React.FC = () => {
  const { userInfo } = useAppSelector((state) => state.user)
  console.log(userInfo)

  const [isMenuShown, setMenuShown] = useState(false)
  // close the menu on navigation
  useLocationChange(() => {
    onCloseMenu()
  })
  const menuRef = useRef(null)
  const onCloseMenu = () => setMenuShown(false)
  useOnClickOutside(menuRef, onCloseMenu, CLICK_OUTSIDE_IGNORE_CLASSNAME)

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
            className={cx(s.userDetails, CLICK_OUTSIDE_IGNORE_CLASSNAME)}
            onClick={() => setMenuShown(!isMenuShown)}>
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
