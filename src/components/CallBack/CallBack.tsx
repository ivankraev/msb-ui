import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch } from '@msp/redux/hooks'
import { login, getUserInfo } from '@msp/features/user/userSlice'

const Callback = () => {
  const dispatch = useAppDispatch()
  const params = new URLSearchParams(window.location.hash.replace('#', ''))
  const token = params.get('access_token')
  token && dispatch(login(token))
  token && dispatch(getUserInfo(token))
  return <Navigate to="/" replace />
}

export default Callback
