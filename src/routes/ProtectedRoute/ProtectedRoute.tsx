import React from 'react'
import { Outlet } from 'react-router-dom'
import oktaLink from '@msp/utils/okta-helper'

import s from './ProtectedRoute.scss'

import { useAppSelector } from '@msp/redux/hooks'
import Header from '@msp/components/Header'
import Sidebar from '@msp/components/Sidebar'
import Snackbar from '@msp/components/Snackbar'
import LoadingComponent from '@common/LoadingComponent'
import { useGetHubQuery } from '@msp/features/api/hubApiSlice'

const ProtectedRoute: React.FC = () => {
  const { userInfo, token } = useAppSelector((state) => state.user)
  if (userInfo?.customer?.hubId) {
    useGetHubQuery(userInfo.customer.hubId)
  }
  const handleLogin = async () => {
    window.location.href = oktaLink
  }
  if (!token) {
    handleLogin()
  }
  if (!userInfo) {
    return <LoadingComponent message="We are logging you in" />
  }
  // returns child route elements
  return (
    <React.Fragment>
      <Snackbar />
      <Header />
      <div className={s.container}>
        <Sidebar />
        <main className={s.centerContainer}>
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  )
}
export default ProtectedRoute
