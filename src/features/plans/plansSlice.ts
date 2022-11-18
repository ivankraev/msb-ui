import { useAppDispatch } from '@msp/redux/hooks'
import { SelectOption } from '@msp/shared/interfaces/plans.interface'
import { bindActionCreators, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface PlansSliceState {
  orderBy: SelectOption
  searchText: string
  searchBy: SelectOption
  limit: number
  currentPage: number
}
export const initialState: PlansSliceState = {
  searchBy: { title: 'Filter by name', value: 'name' },
  orderBy: { title: 'Show latest', value: 'latest' },
  searchText: '',
  limit: 15,
  currentPage: 1,
}

const plansSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    changeResultsPerPage: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    changeSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    changeSearchBy: (state, action: PayloadAction<SelectOption>) => {
      state.searchBy = action.payload
    },
    changeOrderBy: (state, action: PayloadAction<SelectOption>) => {
      state.orderBy = action.payload
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export default plansSlice.reducer
const actions = plansSlice.actions

export const plansActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
