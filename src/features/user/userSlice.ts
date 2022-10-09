import { createSlice } from '@reduxjs/toolkit'

import { UserInfo } from '@msp/shared/interfaces/user.interface'
export interface UserSliceState {
  userInfo: UserInfo | null
  userToken: string | null
}

export const initialState: UserSliceState = {
  userInfo: null,
  userToken: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action): UserSliceState => {
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      return { ...state, userInfo: action.payload }
    },
  },
})
export default userSlice.reducer
export const { login } = userSlice.actions
