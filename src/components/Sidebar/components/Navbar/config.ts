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
    link: '#',
    upcoming: true,
  },
  {
    label: 'Trials Management',
    icon: LikeIcon,
    link: '#',
    upcoming: true,
  },
  {
    label: 'Products',
    icon: ProductIcon,
    link: '#',
    upcoming: true,
  },
  {
    label: 'Training',
    icon: BookIcon,
    link: '#',
    upcoming: true,
  },
  {
    label: 'Users',
    icon: PeopleIcon,
    link: '#',
    upcoming: true,
  },
  {
    label: 'Integrations',
    icon: PuzzleIcon,
    link: '#',
    upcoming: true,
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
    link: '#',
    upcoming: true,
  },
]
