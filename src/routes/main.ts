import React from 'react'
import CallBack from '@msp/components/CallBack'
import Overview from '@msp/components/Overview'
import Invoices from '@msp/components/Billing/Invoices'
import MspSettings from '@msp/components/MspSettings'

interface RouteProps {
  path: string
  element: React.FC
}

const routes: RouteProps[] = [
  { path: '/', element: Overview },
  { path: '/invoices', element: Invoices },
  { path: '/settings', element: MspSettings },
  { path: '/callback', element: CallBack },
]

export default routes
