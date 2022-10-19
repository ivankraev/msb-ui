import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { links } from '@msp/routes/links'

const Products = () => {
  const { pathname } = useLocation()

  if (pathname !== links.products.index) {
    return <Outlet />
  }

  return <Navigate replace to={links.products.plans.index} />
}

export default Products
