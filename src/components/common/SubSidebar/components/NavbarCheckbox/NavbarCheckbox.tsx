import React from 'react'
import CheckboxIcon from '@msp/components/icons/CheckboxIcon'
import s from './NavbarCheckbox.scss'

interface Props {
  items: {
    label: string
    value: string
  }[]
  children?: React.ReactNode
}

const NavbarCheckbox = ({ items, children }: Props) => {
  return (
    <nav className={s.container}>
      {children}
      <span className={s.deselectButton}>Deselect All</span>
      <ul>
        {items.map((period) => (
          <li key={period.label}>
            <span>
              <CheckboxIcon />
              <p>{period.label}</p>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarCheckbox
