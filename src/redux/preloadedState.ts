import { initialState as initialUserState, UserSliceState } from '../features/user/userSlice'

export const getUserPreloadedState = (): UserSliceState => {
  const userInfo = localStorage?.getItem('userInfo')
  if (userInfo) {
    return { ...initialUserState, userInfo: JSON.parse(userInfo) }
  }
  return initialUserState
}
