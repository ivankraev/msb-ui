import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { getUserPreloadedState } from './preloadedState'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  preloadedState: {
    user: getUserPreloadedState(),
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
