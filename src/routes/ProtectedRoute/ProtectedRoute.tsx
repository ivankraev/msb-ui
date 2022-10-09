import React, { useCallback } from 'react'
import { Outlet } from 'react-router-dom'

import s from './ProtectedRoute.scss'

import { useAppDispatch, useAppSelector } from '@msp/redux/hooks'
import { login } from '@msp/features/user/userSlice'
import user from '@msp/mocks/user.json'
import Header from '@msp/components/Header'
import Sidebar from '@msp/components/Sidebar'

const ProtectedRoute: React.FC = () => {
  const dispatch = useAppDispatch()
  const { userInfo } = useAppSelector((state) => state.user)

  const mockLoginUser = useCallback(() => {
    dispatch(login(user))
  }, [dispatch, user])

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <span>
          <button onClick={mockLoginUser}>Login</button>
        </span>
      </div>
    )
  }

  // returns child route elements
  return (
    <React.Fragment>
      <Header />
      <div className={s.container}>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  )
}
export default ProtectedRoute
