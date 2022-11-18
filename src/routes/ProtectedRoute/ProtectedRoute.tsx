import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '@msp/redux/hooks'
import { useGetHubQuery } from '@msp/features/api/hubApiSlice'
import Header from '@msp/components/Header'
import Sidebar from '@msp/components/Sidebar'
import Snackbar from '@msp/components/Snackbar'
import LoadingComponent from '@common/LoadingComponent'
import Login from '@msp/components/Login'
import s from './ProtectedRoute.scss'

const ProtectedRoute: React.FC = () => {
  const { userInfo, token } = useAppSelector((state) => state.user)
  if (userInfo?.customer?.hubId) {
    useGetHubQuery(userInfo.customer.hubId)
  }

  if (!token) {
    return <Login />
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
