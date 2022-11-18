import { Hub, HubFormValues } from './types'
import { apiSlice } from './apiSlice'

export const hubApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHub: builder.query<Hub, string>({
      query: (hub) => `hubs/${hub}`,
    }),
    updateHub: builder.mutation<Hub, Partial<HubFormValues>>({
      query: ({ id, data }) => ({
        url: `hubs/${id}`,
        method: 'PATCH',
        body: data,
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),
  }),
})

export const { useGetHubQuery, useUpdateHubMutation } = hubApiSlice
