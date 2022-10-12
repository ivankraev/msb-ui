import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { UserInfo } from '@msp/shared/interfaces/user.interface'
export interface UserSliceState {
  userInfo: UserInfo | null
  userToken: string | null
}

export const initialState: UserSliceState = {
  userInfo: null,
  userToken: null,
}

const handleUserInfo = async (receivedToken: string) => {
  let userInfo
  try {
    const response = await axios.get(`${process.env.REACT_URL}/oauth2/v1/userinfo`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${receivedToken}`,
      },
    })
    userInfo = response.data
  } catch (error) {
    console.error(error)
  }
  return userInfo
}

export const getUserInfo = createAsyncThunk('user/getInfo', async (userToken: string) => {
  const response = await handleUserInfo(userToken)
  return response
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action): UserSliceState => {
      localStorage.setItem('token', JSON.stringify(action.payload))
      return { ...state, userToken: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = { ...action.payload, organization: 'Acme Widgets', logo: 'company-logo.png' }
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
      return state
    })
  },
})

export default userSlice.reducer
export const { login } = userSlice.actions
