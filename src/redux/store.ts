import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { getUserPreloadedState } from './preloadedState'
import { rtkQueryErrorLogger } from './middleware'
import { apiSlice } from '@msp/features/api/apiSlice'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware,
      rtkQueryErrorLogger,
    ),
  preloadedState: {
    user: getUserPreloadedState(),
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
