import { endpoints } from '@msp/service/apiEndpoints'
import { apiSlice } from './apiSlice'
import { ProductResult } from './types'

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResult[], void>({
      query: () => endpoints.products.getAll.url,
    }),
    getProduct: builder.query<ProductResult, string>({
      query: (product) => `products/${product}`,
    }),
    getTotalCustomers: builder.query<number, void>({
      query: () => `products/totalCustomers`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery, useGetTotalCustomersQuery } =
  productApiSlice
