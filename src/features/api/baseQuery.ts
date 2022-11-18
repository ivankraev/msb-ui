import { RootState } from '@msp/redux/store'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_BACKEND || 'http://localhost:3002',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).user
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => await baseQuery(args, api, extraOptions)
