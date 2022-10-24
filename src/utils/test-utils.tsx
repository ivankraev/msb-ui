import React, { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import AppStore, { RootState } from '../redux/store'
// As a basic setup, import your same slice reducers
import userReducer from '@msp/features/user/userSlice'
import settingsReducer from '@msp/features/settings/settingsSlice'
import plansSlice from '@msp/features/plans/plansSlice'
import stepsSlice from '@msp/features/steps/stepsSlice'
import trainingsSlice from '@msp/features/trainings/trainingsSlice'
import paymentMethodsSettingsSlice from '@msp/features/paymentMethods/paymentMethodsSettingsSlice'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: typeof AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        user: userReducer,
        settings: settingsReducer,
        plans: plansSlice,
        steps: stepsSlice,
        trainings: trainingsSlice,
        paymentMethodsSettings: paymentMethodsSettingsSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
