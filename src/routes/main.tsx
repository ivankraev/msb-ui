import React from 'react'
import Invoices from '@msp/components/Billing/Invoices'
import MspSettings from '@msp/components/MspSettings'
import Overview from '@msp/components/Overview'
import UserProfile from '@msp/components/UserProfile'
import CreatePlan from '@msp/components/Products/components/Plans/components/CreatePlan'
import Products from '@msp/components/Products'
import Plans from '@msp/components/Products/components/Plans'
import PaymentMethods from '@msp/components/Billing/PaymentMethods'
import Billing from '@msp/components/Billing'
import CreateMethod from '@msp/components/Billing/PaymentMethods/components/PaymentMethod/components/CreateMethod'
import EditPlan from '@msp/components/Products/components/Plans/components/EditPlan'
import Login from '@msp/components/Login'

export interface RouteProps {
  title?: string
  path: string
  element: React.FC
  children?: RouteProps[]
}

const routes: RouteProps[] = [
  { path: '/', element: Overview },
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
          { path: ':id/edit', element: EditPlan },
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
        children: [
          {
            path: 'new',
            title: 'New payment method',
            element: CreateMethod,
          },
        ],
      },
      {
        path: 'invoices',
        title: 'Invoices',
        element: Invoices,
      },
    ],
  },
  { path: '/settings', element: MspSettings },
  { path: '/login', element: Login },
  { path: '/profile', title: 'Profile', element: UserProfile },
]

export default routes
