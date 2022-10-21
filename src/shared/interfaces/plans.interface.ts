import { SelectOption } from './select-option.interface'

export interface PlansOption {
  selectedOption: SelectOption
  options: SelectOption[]
}

export interface Service {
  title: string
  selected: boolean
  seats: Seat
  value: string
  packages: PlansOption
  policies: PlansOption
}

export interface Seat {
  value: number
  accessor: string
  error?: string | undefined
}
