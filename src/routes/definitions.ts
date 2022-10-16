const CUSTOMER_MANAGEMENT = '/customer-management'

export const routes = {
  index: '/',
  invoices: '/invoices',
  settings: '/settings',
  profile: '/profile',
  customer_management: {
    index: CUSTOMER_MANAGEMENT,
    customers: {
      index: `${CUSTOMER_MANAGEMENT}/customers`,
      new: 'new',
    },
    policies: '/policies',
  },
}
