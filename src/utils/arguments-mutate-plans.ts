import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { EndpointDefinitions } from '@reduxjs/toolkit/dist/query'
import { QueryState } from '@reduxjs/toolkit/dist/query/core/apiState'
import { Plan } from '@msp/components/Products/components/Plans/types'
import { planApiSLice } from '@msp/features/api/planApiSlice'
import { PlanResult } from '@msp/features/api/types'
import { SnackBar } from '@msp/features/uiComponents/uiComponentsSlice'
import { AppDispatch } from '@msp/redux/store'
import { transformPlanToTable } from '@msp/utils/plan-to-table'
import { extractPlansQueryArgs } from './extract-plans-args'

interface Props {
  data: PlanResult | undefined
  dispatch: AppDispatch
  action: 'update' | 'create' | 'delete'
  showSnackBar: ActionCreatorWithPayload<Omit<SnackBar, 'show'>, string>
  state: QueryState<EndpointDefinitions>
  currentPage?: number
  limit?: number
}

export const argumentsMutatePlan = ({
  state,
  limit,
  data,
  currentPage,
  action,
  showSnackBar,
  dispatch,
}: Props) => {
  const args = extractPlansQueryArgs(state)
  const skip = (currentPage! - 1) * limit!
  let totalPages: number

  args.forEach((arg, i) => {
    dispatch(
      planApiSLice.util.updateQueryData('getPlans', arg, (draft) => {
        const transformedPlan = transformPlanToTable(data)

        if (action === 'update' && arg.skip === skip) {
          const plan = draft.data.find((prod) => prod.id === data?.id) as Plan
          Object.assign(plan, transformedPlan)
        }

        if (action === 'create') {
          draft.resultsCount += 1
          if (arg.skip === 0) {
            draft.data.unshift(transformedPlan)
            draft.data = draft.data.slice(0, limit)
          }

          if (arg.skip > 0) {
            setTimeout(() => {
              dispatch(planApiSLice.util.invalidateTags(['Plan']))
            }, 0)
          }
        }

        if (action === 'delete') {
          if (i === 0) {
            const resultsCount = draft.resultsCount
            totalPages = Math.ceil(resultsCount! / limit!)
          }
          draft.resultsCount -= 1
          draft.data = draft.data.filter((prod) => prod.id !== data?.id)

          if (totalPages! !== currentPage || draft.data.length === 0) {
            setTimeout(() => {
              dispatch(planApiSLice.util.invalidateTags(['Plan']))
            }, 0)
          }
        }
      }),
    )
  })

  showSnackBar({
    text: `Succesfully ${action}d record`,
    severity: 'success',
    autoCloseTimeout: 2000,
  })
}
