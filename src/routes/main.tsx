import React from 'react'
import Invoices from '@msp/components/Billing/Invoices'
import CallBack from '@msp/components/CallBack'
import CustomerManagement from '@msp/components/CustomerManagement'
import Customers from '@msp/components/CustomerManagement/components/Customers'
import Customer from '@msp/components/CustomerManagement/components/Customers/components/Customer'
import New from '@msp/components/CustomerManagement/components/Customers/components/New'
import MspSettings from '@msp/components/MspSettings'
import Overview from '@msp/components/Overview'
import UserProfile from '@msp/components/UserProfile'

export interface RouteProps {
  title?: string
  path: string
  element: React.FC
  children?: RouteProps[]
}

const routes: RouteProps[] = [
  { path: '/', element: Overview },
  {
    path: '/customer-management',
    title: 'Customer Management',
    element: CustomerManagement,
    children: [
      {
        path: 'customers',
        title: 'Customers',
        element: Customers,
        children: [
          { path: 'new', title: 'New Customer', element: New },
          { path: ':name', element: Customer },
        ],
      },
    ],
  },
  {
    path: '/invoices',
    title: 'Invoices',
    element: Invoices,
  },
  { path: '/settings', element: MspSettings },
  { path: '/profile', title: 'Profile', element: UserProfile },
  { path: '/callback', element: CallBack },
]

export default routes
