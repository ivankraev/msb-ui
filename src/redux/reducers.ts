import { combineReducers } from '@reduxjs/toolkit'

import userSlice from '@msp/features/user/userSlice'
import settingsSlice from '@msp/features/settings/settingsSlice'

const rootReducer = combineReducers({
  user: userSlice,
  settings: settingsSlice,
})

export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
