export interface NavigationItem {
  label: string
  link: string
  icon?: React.FC
  innerItems?: NavigationItem[]
  upcoming?: boolean
}
