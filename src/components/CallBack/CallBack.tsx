import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { userSliceActions } from '@msp/features/user/userSlice'
import { useLoginApiMutation } from '@msp/features/api/userApiSlice'
import LoadingComponent from '@common/LoadingComponent'
import EmptyStateComponent from '@common/EmptyState'

const Callback = () => {
  const { login } = userSliceActions()
  const [loginApi, { error, data }] = useLoginApiMutation()

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace('#', ''))
    const tokenFromQuery = params.get('access_token')
    tokenFromQuery && login(tokenFromQuery)
    loginApi()
  }, [])

  if (error) {
    return (
      <EmptyStateComponent message={'You are not in the system, please contact administrator'} />
    )
  } else if (data) {
    return <Navigate to="/" replace />
  } else {
    return <LoadingComponent message="We are logging you in" />
  }
}

export default Callback
