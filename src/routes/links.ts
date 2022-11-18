const CUSTOMER_MANAGEMENT = '/customer-management'
const PRODUCTS = '/products'
const BILLING = '/billing'
const INTEGRATIONS = '/integrations'
const TRAINING = '/training'

export const UMBRELLA_DASHBOARD_LINK = 'https://dashboard.umbrella.com'

export const links = {
  index: '/',
  invoices: '/invoices',
  settings: '/settings',
  profile: '/profile',
  trials: '/trials',
  training: {
    index: TRAINING,
    mspHubVideos: `${TRAINING}/msp-hub-videos`,
  },
  users: '/users',
  resources: '/resources',
  integrations: {
    index: INTEGRATIONS,
    psaAndRmm: `${INTEGRATIONS}/pss-and-rmm`,
    webex: `${INTEGRATIONS}/webex`,
  },
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

  products: {
    index: PRODUCTS,
    plans: {
      index: `${PRODUCTS}/plans`,
      new: 'new',
      plan: (slug: string) => `${PRODUCTS}/plans/${slug}/edit`,
    },
  },
  billing: {
    index: BILLING,
    invoices: {
      index: `${BILLING}/invoices`,
    },
    paymentMethods: {
      index: `${BILLING}/payment-methods`,
      new: 'new',
    },
  },
}
