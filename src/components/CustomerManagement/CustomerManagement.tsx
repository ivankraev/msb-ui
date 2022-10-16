import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { routes } from '@msp/routes/definitions'

const CustomerManagement = () => {
  const { pathname } = useLocation()

  if (pathname !== routes.customer_management.index) {
    return <Outlet />
  }

  return <Navigate replace to={routes.customer_management.customers.index} />
}

export default CustomerManagement
