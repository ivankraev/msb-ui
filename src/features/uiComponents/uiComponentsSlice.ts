import { useAppDispatch } from '@msp/redux/hooks'
import { bindActionCreators, PayloadAction, createSlice } from '@reduxjs/toolkit'
export interface SnackBar {
  text: string
  severity: string
  show: boolean
  autoCloseTimeout?: number | null
}

export interface uiComponentsSliceState {
  snackBar: SnackBar
}
export const initialState: uiComponentsSliceState = {
  snackBar: {
    text: '',
    severity: 'info',
    show: false,
    autoCloseTimeout: null,
  },
}

export const uiComponentsSlice = createSlice({
  name: 'uiComponents',
  initialState,
  reducers: {
    toggleSnackBar: (state, action: PayloadAction<boolean>): uiComponentsSliceState => {
      state.snackBar.show = action.payload
      if (action.payload === false && state.snackBar.autoCloseTimeout) {
        state.snackBar.autoCloseTimeout = null
      }
      return state
    },
    showSnackBar: (
      state,
      action: PayloadAction<Omit<SnackBar, 'show'>>,
    ): uiComponentsSliceState => {
      const newSnackBarState = action.payload.autoCloseTimeout
        ? { ...action.payload }
        : { ...action.payload, autoCloseTimeout: null }
      state.snackBar = {
        ...newSnackBarState,
        show: true,
      }
      return state
    },
  },
})

export default uiComponentsSlice.reducer
export const actions = uiComponentsSlice.actions

export const uiComponentsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
