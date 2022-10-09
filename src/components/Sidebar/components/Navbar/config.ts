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
  { label: 'Overview', icon: OverviewIcon },
  { label: 'Customer Management', icon: BuildingIcon, showArrowIcon: true },
  { label: 'Trials Management', icon: LikeIcon },
  { label: 'Products', icon: ProductIcon, showArrowIcon: true },
  { label: 'Training', icon: BookIcon, showArrowIcon: true },
  { label: 'Users', icon: PeopleIcon },
  { label: 'Integrations', icon: PuzzleIcon, showArrowIcon: true },
  { label: 'Billing', icon: MoneyIcon, showArrowIcon: true },
  { label: 'Resources', icon: BookmarkIcon, showArrowIcon: true },
]
