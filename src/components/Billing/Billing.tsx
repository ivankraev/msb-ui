import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { links } from '@msp/routes/links'

const Billing = () => {
  const { pathname } = useLocation()

  if (pathname !== links.billing.index) {
    return <Outlet />
  }

  return <Navigate replace to={links.billing.paymentMethods.index} />
}

export default Billing
