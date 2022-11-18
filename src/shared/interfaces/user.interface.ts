import { Customer } from './customer.interface'

export interface UserInfo {
  id?: string
  email: string
  name: string
  phone?: string
  timeZone: string
  language: string
  sub: string
  customer: Customer
  updatedAt?: string
  createdAt?: string
}
