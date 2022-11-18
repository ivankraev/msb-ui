import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import { NavigationItem } from '../../navbar.interface'
import Tooltip from '@common/Tooltip'
import s from '../../Navbar.scss'

interface Props {
  navigationItem: NavigationItem
  isSelected: boolean
  onClick?: () => void
}

const NavigationLink: React.FC<Props> = ({ navigationItem, isSelected, onClick }) => {
  let NavigationItemWrapper
  let navigationItemWrapperProps
  if (navigationItem.upcoming) {
    NavigationItemWrapper = Tooltip
    navigationItemWrapperProps = {
      text: 'Coming soon',
      fullWidth: true,
    }
  } else {
    NavigationItemWrapper = React.Fragment
  }
  return (
    <li key={navigationItem.label} className={cx(s.menuItemContainer, isSelected && s.selected)}>
      <NavigationItemWrapper {...navigationItemWrapperProps}>
        <Link
          onClick={onClick}
          className={s.menuItem}
          to={navigationItem.link}
          data-testid="category-link"
        >
          {navigationItem.icon && <navigationItem.icon />}
          <span className={s.menuItemLabel}>{navigationItem.label}</span>
        </Link>
      </NavigationItemWrapper>
    </li>
  )
}

export default NavigationLink
