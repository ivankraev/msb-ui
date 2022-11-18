import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQuery'

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Plan', 'Products'],
  endpoints: () => ({}),
})
