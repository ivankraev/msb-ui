import { Plan } from '@msp/components/Products/components/Plans/types'
import { endpoints } from '@msp/service/apiEndpoints'
import { CreatePlanInput, PlansResult, GetPlansQueryParams, PlanResult } from './types'
import { transformPlanToTable } from '@msp/utils/plan-to-table'
import { apiSlice } from './apiSlice'

export const planApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<{ data: Plan[]; resultsCount: number }, GetPlansQueryParams>({
      query: (arg) => {
        return {
          url: endpoints.plans.getAll.url,
          params: arg,
        }
      },

      transformResponse: (result: PlansResult) => {
        const plans = result.data.map((plan) => {
          return transformPlanToTable(plan)
        })

        return { data: plans, resultsCount: result.resultsCount }
      },
      providesTags: ['Plan'],
    }),
    getPlan: builder.query<PlanResult, string>({
      query: (id) => endpoints.plans.getOne(id).url,
      providesTags: (res, err, arg) => [{ type: 'Plan', id: arg }],
    }),

    createPlan: builder.mutation<PlanResult, CreatePlanInput>({
      query: (body) => ({
        url: endpoints.plans.create.url,
        method: endpoints.plans.create.method,
        body,
      }),
    }),
    updatePlan: builder.mutation<PlanResult, { id: string; body: Partial<CreatePlanInput> }>({
      query: (arg) => {
        const { id, body } = arg
        return {
          url: endpoints.plans.update(id).url,
          method: endpoints.plans.update(id).method,
          body,
        }
      },

      invalidatesTags: (res, err, arg) => [{ type: 'Plan', id: arg.id }],
    }),
    deletePlan: builder.mutation<PlanResult, string>({
      query: (id) => ({
        url: endpoints.plans.remove(id).url,
        method: endpoints.plans.remove(id).method,
      }),
    }),
  }),
})

export const {
  useCreatePlanMutation,
  useGetPlansQuery,
  useDeletePlanMutation,
  useUpdatePlanMutation,
  useGetPlanQuery,
} = planApiSLice
