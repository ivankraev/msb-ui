import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import ProtectedRoute from './ProtectedRoute'

const preloadedState = {
  user: {
    userInfo: {
      name: 'Test name',
      sub: 'test',
      email: 'test email',
      zoneinfo: 'test',
    },
    token: 'testToken',
  },
}

const preloadedStateWithoutUser = {
  user: {
    userInfo: null,
    token: 'testToken',
  },
}

describe('ProtectedRoute test', () => {
  it('ProtectedRoute return elements if User and Token is in state', () => {
    const { getByText } = renderWithProviders(<ProtectedRoute />, { preloadedState })
    expect(getByText('Secure MSP Hub')).toBeInTheDocument()
  })

  it('ProtectedRoute return Loading if User is not in the state', () => {
    const { getByText } = renderWithProviders(<ProtectedRoute />, { preloadedStateWithoutUser })
    expect(getByText('We are logging you in')).toBeInTheDocument()
  })
})
