import { links } from '@msp/routes/links'
import BookIcon from '@msp/components/icons/BookIcon'
import BookmarkIcon from '@msp/components/icons/BookmarkIcon'
import BuildingIcon from '@msp/components/icons/BuildingIcon'
import LikeIcon from '@msp/components/icons/LikeIcon'
import MoneyIcon from '@msp/components/icons/MoneyIcon'
import OverviewIcon from '@msp/components/icons/OverviewIcon'
import PeopleIcon from '@msp/components/icons/PeopleIcon'
import ProductIcon from '@msp/components/icons/ProductIcon'
import PuzzleIcon from '@msp/components/icons/PuzzleIcon'

export const menuItems = [
  { label: 'Overview', link: links.index, icon: OverviewIcon },
  {
    label: 'Customer Management',
    icon: BuildingIcon,
    link: links.customer_management.index,
    innerItems: [
      { label: 'Customers', link: links.customer_management.customers.index },
      { label: 'Policies', link: links.customer_management.policies },
      { label: 'Reports', link: links.customer_management.reports },
    ],
  },
  { label: 'Trials Management', link: links.trials, icon: LikeIcon },
  {
    label: 'Products',
    icon: ProductIcon,
    innerItems: [{ label: 'Plans', link: links.products.plans.index }],
    link: links.products.index,
  },
  {
    label: 'Training',
    icon: BookIcon,
    innerItems: [{ label: 'Secure MSP Hub Videos', link: links.training.mspHubVideos }],
    link: links.training.index,
  },
  { label: 'Users', link: links.users, icon: PeopleIcon },
  {
    label: 'Integrations',
    icon: PuzzleIcon,
    link: links.integrations.index,
    innerItems: [
      { label: 'PSA and RMM', link: links.integrations.psaAndRmm },
      { label: 'Webex', link: links.integrations.webex },
    ],
  },
  {
    label: 'Billing',
    icon: MoneyIcon,
    link: links.billing.index,
    innerItems: [
      { label: 'Payment methods', link: links.billing.paymentMethods.index },
      { label: 'Invoicing history', link: links.billing.invoices.index },
    ],
  },
  {
    label: 'Resources',
    icon: BookmarkIcon,
    link: links.resources,
    innerItems: [
      { label: 'MSP community', link: '' },
      { label: 'Product Data Sheets', link: '' },
      { label: 'Product Marketing Collaterals', link: '' },
      { label: 'Promos and Announcements', link: '' },
    ],
  },
]
