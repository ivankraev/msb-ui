import { combineReducers } from '@reduxjs/toolkit'

import userSlice from '@msp/features/user/userSlice'

const rootReducer = combineReducers({
  user: userSlice,
})

export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
