import React, { useMemo } from 'react'
import { COLUMNS, periods, productItems, cities } from '@msp/components/Billing/Invoices/config'
import { Invoice } from '@msp/components/Billing/Invoices/types'
import MOCK_DATA from '@msp/mocks/invoices.json'
import CustomTable from '@msp/components/common/CustomTable'
import SubSidebar from '@msp/components/common/SubSidebar'
import NavbarHolder from '@msp/components/common/SubSidebar/components/NavbarHolder'
import NavbarPeriod from '@msp/components/common/SubSidebar/components/NavbarPeriod'
import NavbarCheckbox from '@msp/components/common/SubSidebar/components/NavbarCheckbox'
import SearchBar from '@msp/components/common/SearchBar'
import Header from '@msp/components/common/Header'
import s from './Invoices.scss'

const Invoices = () => {
  const data: Invoice[] = useMemo(() => MOCK_DATA.data, [MOCK_DATA])
  const columns = useMemo(() => COLUMNS, [])

  return (
    <div>
      <Header label="Invoicing history" />
      <div className={s.container}>
        <SubSidebar>
          <NavbarHolder title="Period">
            <NavbarPeriod periods={periods} />
          </NavbarHolder>
          <NavbarHolder title="Product">
            <NavbarCheckbox items={productItems} />
          </NavbarHolder>
          <NavbarHolder title="Customer">
            <NavbarCheckbox items={cities}>
              <SearchBar placeholder="Search for customer" />
            </NavbarCheckbox>
          </NavbarHolder>
        </SubSidebar>
        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Invoices
