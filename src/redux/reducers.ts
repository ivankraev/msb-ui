import { combineReducers } from '@reduxjs/toolkit'
import userSlice from '@msp/features/user/userSlice'
import StepsSlice from '@msp/features/steps/stepsSlice'
import trainingsSlice from '@msp/features/trainings/trainingsSlice'
import uiComponentsSlice from '@msp/features/uiComponents/uiComponentsSlice'
import paymentMethodsSettingsSlice from '@msp/features/paymentMethods/paymentMethodsSettingsSlice'
import { apiSlice } from '@msp/features/api/apiSlice'
import plansSlice from '@msp/features/plans/plansSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userSlice,
  steps: StepsSlice,
  trainings: trainingsSlice,
  uiComponents: uiComponentsSlice,
  paymentMethodsSettings: paymentMethodsSettingsSlice,
  plans: plansSlice,
})

export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
