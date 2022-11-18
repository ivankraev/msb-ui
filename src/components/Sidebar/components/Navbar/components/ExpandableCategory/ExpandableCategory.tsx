import React from 'react'
import cx from 'classnames'
import AngleDownIcon from '@msp/components/icons/AngleDownIcon'
import AngleRightIcon from '@msp/components/icons/AngleRightIcon'

import variables from '@msp/theme/variables.scss'
import NavigationLink from '../NavigationLink'
import s from '../../Navbar.scss'
import { NavigationItem } from '../../navbar.interface'

interface Props {
  navigationItem: NavigationItem
  onClick: () => void
  isExpanded: boolean
  selectedCategoryPathname?: string
}

const ExpandableCategory: React.FC<Props> = ({
  navigationItem,
  onClick,
  isExpanded,
  selectedCategoryPathname,
}) => {
  return (
    <li key={navigationItem.label} className={s.menuItemContainer} data-testid="expandable-item">
      <div
        className={cx(
          s.expandableItemContainer,
          navigationItem.link === selectedCategoryPathname ? s.selected : '',
        )}
        onClick={onClick}
      >
        <div className={s.menuItem}>
          {navigationItem.icon && <navigationItem.icon />}
          <span className={s.menuItemLabel}>{navigationItem.label}</span>
        </div>
        {isExpanded ? <AngleDownIcon /> : <AngleRightIcon color={variables.greyColor} />}
      </div>
      <ul className={cx(s.categoryIdent, isExpanded ? s.shown : s.hidden)}>
        {navigationItem.innerItems!.map((innerNavigationItem: NavigationItem) => {
          const isSelected = innerNavigationItem.link === selectedCategoryPathname
          return (
            <NavigationLink
              navigationItem={innerNavigationItem}
              isSelected={isSelected}
              key={innerNavigationItem.label}
            />
          )
        })}
      </ul>
    </li>
  )
}

export default ExpandableCategory
