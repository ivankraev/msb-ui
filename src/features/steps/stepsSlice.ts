import { useAppDispatch } from '@msp/redux/hooks'
import { Step } from '@msp/shared/interfaces/step.interface'
import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StepsSliceState {
  currentStep: number
  steps: Step[]
}

export const initialState: StepsSliceState = {
  currentStep: 0,
  steps: [
    { title: 'Products', completed: false, active: true },
    { title: 'Summary', completed: false, active: false },
  ],
}

const StepsSLice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.steps.length - 2 < state.currentStep) return

      state.currentStep = state.currentStep + 1
      state.steps[state.currentStep].active = true
      state.steps[state.currentStep - 1].active = false
      const num = state.currentStep - 1 < 0 ? 0 : state.currentStep - 1

      state.steps[num].completed = true
    },
    decrementStep: (state) => {
      if (state.currentStep < 1) return

      state.currentStep = state.currentStep - 1

      state.steps[state.currentStep].active = true

      state.steps[state.currentStep + 1].completed = false
      state.steps[state.currentStep + 1].active = false
    },
    setSteps: (state, action: PayloadAction<Step[]>) => {
      state.steps = action.payload
    },
    resetState: (): StepsSliceState => {
      return initialState
    },
  },
})

export default StepsSLice.reducer
const actions = StepsSLice.actions

export const stepsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
