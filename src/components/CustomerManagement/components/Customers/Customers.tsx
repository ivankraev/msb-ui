import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { routes } from '@msp/routes/definitions'
import Container from '@common/Container'

const Customers = () => {
  const { pathname } = useLocation()

  const mockCustomer = { title: 'Albuquerque', value: 'alburquerque' }

  if (pathname !== routes.customer_management.customers.index) {
    return <Outlet />
  }

  return (
    <Container label="Customers">
      <Link state={{ data: mockCustomer.title }} to={mockCustomer.value}>
        {mockCustomer.title}
      </Link>
      <Link to={routes.customer_management.customers.new}>New</Link>
    </Container>
  )
}

export default Customers
