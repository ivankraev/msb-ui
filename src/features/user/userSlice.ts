import { useAppDispatch } from '@msp/redux/hooks'
import { createSlice, bindActionCreators } from '@reduxjs/toolkit'
import { userApiSlice } from '../api/userApiSlice'

import { UserInfo } from '@msp/shared/interfaces/user.interface'
export interface UserSliceState {
  userInfo: UserInfo | null
  token: string | null
}

export const initialState: UserSliceState = {
  userInfo: null,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action): UserSliceState => {
      localStorage.setItem('token', JSON.stringify(action.payload))
      return { ...state, token: action.payload }
    },
    setUserInfo: (state, action): UserSliceState => {
      const userInfo = {
        ...state.userInfo,
        ...action.payload,
      }
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApiSlice.endpoints.logout.matchPending, (state) => {
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      return { ...state, token: null, userInfo: null }
    }),
      builder.addMatcher(userApiSlice.endpoints.loginApi.matchFulfilled, (state, action) => {
        const userInfo = {
          ...state.userInfo,
          ...action.payload,
        }
        state.userInfo = userInfo
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        return state
      })
  },
})

export default userSlice.reducer
export const actions = userSlice.actions

export const userSliceActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators({ ...actions }, dispatch)
}
