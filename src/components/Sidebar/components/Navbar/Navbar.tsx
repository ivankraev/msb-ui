import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { menuItems } from './config'
import NavigationLink from './components/NavigationLink'
import ExpandableCategory from './components/ExpandableCategory'
import { NavigationItem as NavigationItemInterface } from './navbar.interface'
import s from './Navbar.scss'

interface NavigationItemProps {
  navigationItem: NavigationItemInterface
  setExpandedCategoryPathname: (pathname: string) => void
  isExpanded: boolean
  selectedCategoryPathname?: string
}

const getCategoryConfiguration = (pathname: string) => {
  const categoryParts = pathname.split('/')
  return {
    categoryLevelOne: '/' + categoryParts[1],
    categoryLevelTwo: '/' + categoryParts[2],
    pathname,
  }
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  navigationItem,
  setExpandedCategoryPathname,
  isExpanded,
  selectedCategoryPathname,
}) => {
  const isSelected = navigationItem.link === selectedCategoryPathname
  if (navigationItem.innerItems?.length) {
    return (
      <ExpandableCategory
        onClick={() => setExpandedCategoryPathname(isExpanded ? '' : navigationItem.link)}
        navigationItem={navigationItem}
        isExpanded={isExpanded}
        selectedCategoryPathname={selectedCategoryPathname}
      />
    )
  }
  return (
    <NavigationLink
      navigationItem={navigationItem}
      isSelected={isSelected}
      onClick={() => setExpandedCategoryPathname('')}
    />
  )
}

const Navbar = () => {
  const location = useLocation()
  const categoryConfiguration = getCategoryConfiguration(location.pathname)
  const [expandedCategoryPathname, setExpandedCategoryPathname] = useState(
    categoryConfiguration.categoryLevelOne,
  )
  const selectedCategoryPathname = categoryConfiguration.pathname

  return (
    <nav className={s.container}>
      <ul className={s.menuList}>
        {menuItems.map((item) => (
          <NavigationItem
            navigationItem={item}
            key={item.label}
            isExpanded={expandedCategoryPathname === item.link}
            setExpandedCategoryPathname={setExpandedCategoryPathname}
            selectedCategoryPathname={selectedCategoryPathname}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
