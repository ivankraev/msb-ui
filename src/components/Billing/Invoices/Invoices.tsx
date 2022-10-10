import React, { useMemo } from 'react'
import { COLUMNS, MOCK_DATA } from './config'
import CustomTable from '@msp/components/common/CustomTable'
import SubSidebar from '@msp/components/common/SubSidebar'
import NavbarHolder from '@msp/components/common/SubSidebar/components/NavbarHolder'
import NavbarPeriod from '@msp/components/common/SubSidebar/components/NavbarPeriod'
import ClockIcon from '@msp/components/icons/TimePeriodIcons/Calendar'
import s from '@msp/components/Billing/Invoices/Invoices.scss'

const Invoices = () => {
  const data = useMemo(() => MOCK_DATA, [MOCK_DATA])
  const columns = useMemo(() => COLUMNS, [])

  const periods = [
    { label: 'This Month', value: 'thisMonth', icon: ClockIcon },
    { label: 'Previous Month', value: 'previousMonth', icon: ClockIcon },
    { label: 'Three Months', value: 'threeMonths', icon: ClockIcon },
    { label: 'Six Months', value: 'sixMonths', icon: ClockIcon },
    { label: 'Custom Period', value: 'customPeriod', icon: ClockIcon },
  ]

  return (
    <div className={s.container}>
      <SubSidebar>
        <NavbarHolder title="Period">
          <NavbarPeriod periods={periods} />
        </NavbarHolder>
      </SubSidebar>
      <CustomTable columns={columns} data={data} />
    </div>
  )
}

export default Invoices
