import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { links } from '@msp/routes/links'

const CustomerManagement = () => {
  const { pathname } = useLocation()

  if (pathname !== links.customer_management.index) {
    return <Outlet />
  }

  return <Navigate replace to={links.customer_management.customers.index} />
}

export default CustomerManagement
