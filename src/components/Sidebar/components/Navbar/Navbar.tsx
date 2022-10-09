import React from 'react'
import AngleRightIcon from '@msp/components/icons/AngleRightIcon'
import variables from '@msp/theme/variables.scss'

import { menuItems } from './config'

import s from './Navbar.scss'

const Navbar = () => {
  return (
    <nav className={s.container}>
      <ul className={s.menuList}>
        {menuItems.map((item) => (
          <li key={item.label} className={s.menuItem}>
            <span className={s.menuItemDetails}>
              {item.icon && <item.icon />}
              <span className={s.menuItemLabel}>{item.label}</span>
            </span>
            {item.showArrowIcon && (
              <span>
                <AngleRightIcon color={variables.greyColor} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
