import { initialState as initialUserState, UserSliceState } from '../features/user/userSlice'

export const getUserPreloadedState = (): UserSliceState => {
  const userInfo = localStorage?.getItem('userInfo')
  const token = localStorage?.getItem('token')
  if (token && userInfo) {
    return { ...initialUserState, userInfo: JSON.parse(userInfo), token: JSON.parse(token) }
  }
  return initialUserState
}
