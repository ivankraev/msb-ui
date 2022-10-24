import React from 'react'
import { Outlet } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import pkceChallenge from 'pkce-challenge'

import s from './ProtectedRoute.scss'

import { useAppSelector } from '@msp/redux/hooks'
import Header from '@msp/components/Header'
import Sidebar from '@msp/components/Sidebar'

const ProtectedRoute: React.FC = () => {
  const { userInfo, userToken } = useAppSelector((state) => state.user)
  const scopes = 'openid profile email'
  const state = 'test'
  const guid = uuidv4()
  const pkce = pkceChallenge(43).code_challenge
  const oktaLink = `${process.env.REACT_URL}/oauth2/v1/authorize?client_id=${process.env.REACT_CLIENT_ID}&response_type=code token&response_mode=fragment&scope=${scopes}&redirect_uri=${process.env.REACT_REDIRECT_URI}&state=${state}&nonce=${guid}&code_challenge_method=S256&code_challenge=${pkce}`

  const handleLogin = async () => {
    window.location.href = oktaLink
  }
  // if (!userToken) {
  //   handleLogin()
  // }
  // if (!userInfo) {
  //   return <>Loading</>
  // }
  // returns child route elements
  return (
    <React.Fragment>
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
