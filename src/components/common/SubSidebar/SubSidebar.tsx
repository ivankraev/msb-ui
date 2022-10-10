import React from 'react'
import s from '@msp/components/common/Subsidebar/Subsidebar.scss'
import NavbarHolder from '@msp/components/common/SubSidebar/components/NavbarHolder'
import NavbarPeriod from '@msp/components/common/SubSidebar/components/NavbarPeriod'
import ClockIcon from '@msp/components/icons/TimePeriodIcons/Calendar'

const periods = [
  { label: 'This Month', value: 'thisMonth', icon: ClockIcon },
  { label: 'Previous Month', value: 'previousMonth', icon: ClockIcon },
  { label: 'Three Months', value: 'threeMonths', icon: ClockIcon },
  { label: 'Six Months', value: 'sixMonths', icon: ClockIcon },
  { label: 'Custom Period', value: 'customPeriod', icon: ClockIcon },
]

const Sidebar = () => {
  return (
    <aside className={s.container}>
      <NavbarHolder title="Period">
        <NavbarPeriod periods={periods} />
      </NavbarHolder>
      <NavbarHolder title="Period">
        <NavbarPeriod periods={periods} />
      </NavbarHolder>
      <NavbarHolder title="Period">
        <NavbarPeriod periods={periods} />
      </NavbarHolder>
    </aside>
  )
}

export default Sidebar
