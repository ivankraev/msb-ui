import React from 'react'
import Invoices from '@msp/components/Billing/Invoices'
import PaymentMethods from '@msp/components/Billing/PaymentMethods'
import CustomerManagement from '@msp/components/CustomerManagement'
import Customers from '@msp/components/CustomerManagement/components/Customers'
import Customer from '@msp/components/CustomerManagement/components/Customers/components/Customer'
import CreateCustomer from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer'
import Policies from '@msp/components/CustomerManagement/components/Policies'
import MspSettings from '@msp/components/MspSettings'
import Overview from '@msp/components/Overview'
import UserProfile from '@msp/components/UserProfile'
import Reports from '@msp/components/CustomerManagement/components/Reports'
import CreatePlan from '@msp/components/Products/components/Plans/components/CreatePlan'
import Products from '@msp/components/Products'
import Plans from '@msp/components/Products/components/Plans'
import Training from '@msp/components/Training'
import Billing from '@msp/components/Billing'

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
          { path: 'new', title: 'New Customer', element: CreateCustomer },
          { path: ':name', element: Customer },
        ],
      },
      {
        path: 'policies',
        title: 'Policies',
        element: Policies,
      },
      {
        path: 'reports',
        title: 'Reports',
        element: Reports,
      },
    ],
  },

  {
    path: '/products',
    title: 'Products',
    element: Products,
    children: [
      {
        path: 'plans',
        title: 'Plans',
        element: Plans,
        children: [
          { path: 'new', title: 'New plan', element: CreatePlan },
          { path: ':name', element: Customer },
        ],
      },
    ],
  },
  {
    path: '/billing',
    title: 'Billing',
    element: Billing,
    children: [
      {
        path: 'payment-methods',
        title: 'Payment Methods',
        element: PaymentMethods,
      },
      {
        path: 'invoices',
        title: 'Invoices',
        element: Invoices,
      },
    ],
  },

  { path: '/settings', element: MspSettings },
  { path: '/profile', title: 'Profile', element: UserProfile },
  { path: '/training', title: 'Training', element: Training },
]

export default routes
