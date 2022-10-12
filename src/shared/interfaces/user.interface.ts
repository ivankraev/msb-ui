export interface UserInfo {
  email: string
  email_verified?: boolean
  family_name?: string
  given_name?: string
  locale?: string
  name: string
  preffered_username?: string
  sub: string
  updated_at?: number
  zoneinfo: string
  logo?: string
  organization?: string
  availableOrganizations?: string[]
}
