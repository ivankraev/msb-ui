const CUSTOMER_MANAGEMENT = '/customer-management'

export const links = {
  index: '/',
  invoices: '/invoices',
  settings: '/settings',
  profile: '/profile',
  customer_management: {
    index: CUSTOMER_MANAGEMENT,
    customers: {
      index: `${CUSTOMER_MANAGEMENT}/customers`,
      new: 'new',
      customer: (name: string) => `${CUSTOMER_MANAGEMENT}/customers/${name}`,
    },
    policies: `${CUSTOMER_MANAGEMENT}/policies`,
    reports: `${CUSTOMER_MANAGEMENT}/reports`,
  },
}
