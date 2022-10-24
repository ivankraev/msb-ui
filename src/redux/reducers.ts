import { combineReducers } from '@reduxjs/toolkit'

import userSlice from '@msp/features/user/userSlice'
import settingsSlice from '@msp/features/settings/settingsSlice'

import StepsSlice from '@msp/features/steps/stepsSlice'
import trainingsSlice from '@msp/features/trainings/trainingsSlice'
import paymentMethodsSettingsSlice from '@msp/features/paymentMethods/paymentMethodsSettingsSlice'

const rootReducer = combineReducers({
  user: userSlice,
  settings: settingsSlice,
  steps: StepsSlice,
  trainings: trainingsSlice,
  paymentMethodsSettings: paymentMethodsSettingsSlice,
})

export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
