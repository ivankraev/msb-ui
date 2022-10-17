import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { links } from '@msp/routes/links'
import Container from '@common/Container'
import s from './Customers.scss'

const Customers = () => {
  const { pathname } = useLocation()

  const mockCustomer = { title: 'Albuquerque', value: 'alburquerque' }

  if (pathname !== links.customer_management.customers.index) {
    return <Outlet />
  }

  return (
    <Container label="Customers" styles={s.container}>
      <Link to={links.customer_management.customers.new}>New customer</Link>
      <Link state={{ data: mockCustomer.title }} to={mockCustomer.value}>
        Customer details
      </Link>
      <Link to={links.customer_management.policies}>Policies</Link>
      <Link to={links.customer_management.reports}>Reports</Link>
    </Container>
  )
}

export default Customers
