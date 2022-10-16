import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { routes } from '@msp/routes/definitions'
import Container from '@common/Container'
import s from './Customers.scss'

const Customers = () => {
  const { pathname } = useLocation()

  const mockCustomer = { title: 'Albuquerque', value: 'alburquerque' }

  if (pathname !== routes.customer_management.customers.index) {
    return <Outlet />
  }

  return (
    <Container label="Customers" styles={s.container}>
      <Link to={routes.customer_management.customers.new}>New customer</Link>
      <Link state={{ data: mockCustomer.title }} to={mockCustomer.value}>
        Customer details
      </Link>
      <Link to="/customer-management/policies">Policies</Link>
      <Link to="/customer-management/reports">Reports</Link>
    </Container>
  )
}

export default Customers
