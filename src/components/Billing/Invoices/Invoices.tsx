import React, { useMemo, useState } from 'react'
import { COLUMNS, periods, productItems, CITIES } from '@msp/components/Billing/Invoices/config'
import { Invoice } from '@msp/components/Billing/Invoices/types'
import MOCK_DATA from '@msp/mocks/invoices.json'
import NavbarCheckbox from '@common/SubSidebar/components/NavbarCheckbox'
import NavbarHolder from '@common/SubSidebar/components/NavbarHolder'
import NavbarPeriod from '@common/SubSidebar/components/NavbarPeriod'
import CustomTable from '@common/CustomTable'
import SubSidebar from '@common/SubSidebar'
import Container from '@common/Container'
import SearchBar from '@common/SearchBar'
import EmptyStateComponent from '@common/EmptyState'
import LoadingComponent from '@common/LoadingComponent'
import s from './Invoices.scss'

const Invoices = () => {
  const [cities, setCities] = useState(CITIES)
  const [isFetching] = useState(false)

  const invoices: Invoice[] = useMemo(() => MOCK_DATA.data, [MOCK_DATA])
  const columns = useMemo(() => COLUMNS, [])

  const onCitySearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCities(
      CITIES.filter((city) => city.label.toUpperCase().includes(e.target.value.toUpperCase())),
    )
  }
  if (cities?.length === 0 || invoices?.length === 0) {
    return (
      <Container label="Invoicing history" styles={s.container}>
        <EmptyStateComponent message="You have no invoices yet" />
      </Container>
    )
  } else if (isFetching) {
    return (
      <Container label="Invoicing history" styles={s.container}>
        <LoadingComponent message="We are fetching your invoices" />
      </Container>
    )
  }

  return (
    <Container label="Invoicing history" styles={s.container}>
      <SubSidebar>
        <NavbarHolder title="Period">
          <NavbarPeriod periods={periods} />
        </NavbarHolder>
        <NavbarHolder title="Product">
          <NavbarCheckbox items={productItems} />
        </NavbarHolder>
        <NavbarHolder title="Customer">
          <NavbarCheckbox items={cities}>
            <SearchBar
              onChange={onCitySearchHandler}
              placeholder="Search for customer"
              styles={s.searchBar}
            />
          </NavbarCheckbox>
        </NavbarHolder>
      </SubSidebar>
      <CustomTable
        columns={columns}
        data={invoices}
        styles={s.table}
        paginationProps={{
          currentPage: 1,
          totalPages: 2,
          resultsPerPage: 10,
          resultsCount: 20,
          onPageChange: () => {
            alert('not implemented')
          },
          setResultsPerPage: () => {
            alert('not implemented')
          },
        }}
      />
    </Container>
  )
}

export default Invoices
