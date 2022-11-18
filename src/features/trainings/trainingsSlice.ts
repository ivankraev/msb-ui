import { useAppDispatch } from '@msp/redux/hooks'
import { bindActionCreators, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface TrainingsSliceState {
  productValue: string
}
export const initialState: TrainingsSliceState = {
  productValue: 'umbrella',
}

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    changeSelectedProduct: (state, action: PayloadAction<string>): TrainingsSliceState => {
      return { ...state, productValue: action.payload }
    },
  },
})

export default trainingsSlice.reducer
const actions = trainingsSlice.actions

export const trainingsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
