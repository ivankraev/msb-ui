import { Method } from 'axios'

type Endpoint = {
  url: string
  method: Method
}

export const endpoints = {
  products: {
    getAll: <Endpoint>{ url: '/products', method: 'GET' },
    getOne: (slug: string) => <Endpoint>{ url: `/products/${slug}`, method: 'GET' },
    getTotalCustomers: <Endpoint>{ url: '/products/totalCustomers', method: 'GET' },
    getAllProductsWithTrainings: <Endpoint>{ url: '/products/trainings', method: 'GET' },
    getProductWithTrainings: (slug: string) =>
      <Endpoint>{ url: `/products/${slug}/trainings`, method: 'GET' },
  },
  plans: {
    getAll: <Endpoint>{ url: '/plans', method: 'GET' },
    getOne: (slug: string) => <Endpoint>{ url: `/plans/${slug}`, method: 'GET' },
    create: <Endpoint>{ url: '/plans', method: 'POST' },
    remove: (slug: string) => <Endpoint>{ url: `/plans/${slug}`, method: 'DELETE' },
    update: (slug: string) => <Endpoint>{ url: `/plans/${slug}`, method: 'PATCH' },
  },
  trainings: {
    getAll: <Endpoint>{ url: '/trainings', method: 'GET' },
  },
}
