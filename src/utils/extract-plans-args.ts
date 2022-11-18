import { GetPlansQueryParams } from '@msp/features/api/types'
import { EndpointDefinitions } from '@reduxjs/toolkit/dist/query'
import { QueryState } from '@reduxjs/toolkit/dist/query/core/apiState'

export const extractPlansQueryArgs = (
  queries: QueryState<EndpointDefinitions>,
): GetPlansQueryParams[] => {
  const arrQueries = Object.keys(queries).filter((query) => query.startsWith('getPlans'))
  if (arrQueries.length === 0) {
    return [{ limit: 15, skip: 0, searchBy: 'name', orderBy: 'latest', searchText: '' }]
  }

  const everyQueryArgs = arrQueries.map((query) => {
    const firstIndex = query?.indexOf('{')
    const lastIndex = query?.lastIndexOf('}')
    // we get the part that is holding the object with the params
    // and we parse it into an object
    const result = query?.slice(firstIndex, lastIndex + 1)

    return JSON.parse(result)
  })
  return everyQueryArgs
}
