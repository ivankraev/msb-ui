import { SelectOption } from './select-option.interface'

export interface Plan {
  title: string
  value: string
}

export interface PlansOption {
  selectedOption: SelectOption
  options: SelectOption[]
}

export interface Service {
  title: string
  selected: boolean
  seats: string
  value: string
  packageOptions: PlansOption
  policies: PlansOption
}
