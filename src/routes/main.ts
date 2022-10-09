import Overview from '@msp/components/Overview'
import Invoices from '@msp/components/Invoices'

interface RouteProps {
  path: string
  element: React.FC
}

const routes: RouteProps[] = [
  { path: '/', element: Overview },
  { path: '/invoices', element: Invoices },
]

export default routes
