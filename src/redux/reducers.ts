import { combineReducers } from '@reduxjs/toolkit'

import userSlice from '@msp/features/user/userSlice'
import settingsSlice from '@msp/features/settings/settingsSlice'
import plansSlice from '@msp/features/plans/plansSlice'
import StepsSlice from '@msp/features/steps/stepsSlice'
import trainingsSlice from '@msp/features/trainings/trainingsSlice'

const rootReducer = combineReducers({
  user: userSlice,
  settings: settingsSlice,
  plans: plansSlice,
  steps: StepsSlice,
  trainings: trainingsSlice,
})

export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
