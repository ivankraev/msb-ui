import React, { useState } from 'react'
import cx from 'classnames'
import s from './NavbarPeriod.scss'

interface Props {
  periods: {
    label: string
    value: string
    icon: () => JSX.Element
  }[]
}

const NavbarPeriod = ({ periods }: Props) => {
  const [activeItem, setActiveItem] = useState(periods[0].value)

  return (
    <nav className={s.container}>
      <ul>
        {periods.map((period) => (
          <li
            key={period.label}
            className={cx({ [s.activeMenuItem]: period.value === activeItem })}
            onClick={() => {
              if (period.value === activeItem) return
              setActiveItem(period.value)
            }}
          >
            <span>
              {<period.icon />}
              <p>{period.label}</p>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarPeriod
