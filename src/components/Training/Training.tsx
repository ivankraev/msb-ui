import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { links } from '@msp/routes/links'

const Training = () => {
  const { pathname } = useLocation()

  if (pathname !== links.training.index) {
    return <Outlet />
  }

  return <Navigate replace to={links.training.mspHubVideos} />
}

export default Training
