import { UserInfo } from '@msp/shared/interfaces/user.interface'
import { ApiResponse } from './types'
import { apiSlice } from './apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginApi: builder.mutation<UserInfo, void>({
      query: () => 'auth/login',
    }),
    logout: builder.mutation<ApiResponse, void>({
      query: () => 'auth/logout',
    }),
    updateUser: builder.mutation<UserInfo, Partial<UserInfo>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
})
export const { useLoginApiMutation, useLogoutMutation, useUpdateUserMutation } = userApiSlice
