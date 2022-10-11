import React from 'react'
import CheckboxItem from '@common/CheckboxItem'
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
            <CheckboxItem label={period.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarCheckbox
