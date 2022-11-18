export interface SelectOption {
  value: string
  title: string
}

export interface Product {
  id: string
  title: string
  value: string
  selected: boolean
  seats: number
  package: SelectOption
  policy: SelectOption
}
