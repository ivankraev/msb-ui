import { endpoints } from '@msp/service/apiEndpoints'
import { apiSlice } from './apiSlice'
import { ProductResult, Training } from './types'

export const trainingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductsWithTrainings: builder.query<ProductResult[], void>({
      query: () => endpoints.products.getAllProductsWithTrainings.url,
    }),
    getProductWithTrainings: builder.query<ProductResult, string>({
      query: (product) => `products/${product}/trainings`,
    }),
    getAllTrainings: builder.query<Training[], void>({
      query: () => `trainings`,
    }),
  }),
})

export const {
  useGetProductWithTrainingsQuery,
  useGetProductsWithTrainingsQuery,
  useGetAllTrainingsQuery,
} = trainingsApiSlice
