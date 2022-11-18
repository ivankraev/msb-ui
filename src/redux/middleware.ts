import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { uiComponentsSlice } from '@msp/features/uiComponents/uiComponentsSlice'
import oktaLink from '@msp/utils/okta-helper'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    let errorMessage
    switch (action.payload.status) {
      case 401:
        return (window.location.href = oktaLink)
      case 403:
        errorMessage = 'The access is forbidden'
        break
      default:
        errorMessage = action.payload.data?.message || 'Something went wrong'
    }
    api.dispatch(
      uiComponentsSlice.actions.showSnackBar({
        text: errorMessage,
        severity: 'error',
        autoCloseTimeout: 3000,
      }),
    )
  }

  return next(action)
}
