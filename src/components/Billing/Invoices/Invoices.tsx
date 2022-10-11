import React, { useMemo, useState } from 'react'
import { COLUMNS, periods, productItems, CITIES } from '@msp/components/Billing/Invoices/config'
import NavbarCheckbox from '@common/SubSidebar/components/NavbarCheckbox'
import NavbarHolder from '@common/SubSidebar/components/NavbarHolder'
import NavbarPeriod from '@common/SubSidebar/components/NavbarPeriod'
import { Invoice } from '@msp/components/Billing/Invoices/types'
import MOCK_DATA from '@msp/mocks/invoices.json'
import CustomTable from '@common/CustomTable'
import SubSidebar from '@common/SubSidebar'
import Container from '@common/Container'
import SearchBar from '@common/SearchBar'

const Invoices = () => {
  const [cities, setCities] = useState(CITIES)

  const invoices: Invoice[] = useMemo(() => MOCK_DATA.data, [MOCK_DATA])
  const columns = useMemo(() => COLUMNS, [])

  const onCitySearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCities(
      CITIES.filter((city) => city.label.toUpperCase().includes(e.target.value.toUpperCase())),
    )
  }

  return (
    <Container label="Invoicing history">
      <SubSidebar>
        <NavbarHolder title="Period">
          <NavbarPeriod periods={periods} />
        </NavbarHolder>
        <NavbarHolder title="Product">
          <NavbarCheckbox items={productItems} />
        </NavbarHolder>
        <NavbarHolder title="Customer">
          <NavbarCheckbox items={cities}>
            <SearchBar onChange={onCitySearchHandler} placeholder="Search for customer" />
          </NavbarCheckbox>
        </NavbarHolder>
      </SubSidebar>
      <CustomTable columns={columns} data={invoices} />
    </Container>
  )
}

export default Invoices
