import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import Callback from './CallBack'
import { useLoginApiMutation } from '@msp/features/api/userApiSlice'

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

const mockLoginMutation = () => {
  const loginApi = jest.fn()
  const error = 'Something went wrong'
  const data = null
  return [loginApi, { error, data }]
}

const mockLoginMutationFetching = () => {
  const loginApi = jest.fn()
  const error = null
  const data = null
  const isFetching = true
  return [loginApi, { error, data, isFetching }]
}

jest.mock('@msp/features/api/userApiSlice.ts', () => ({
  _esModule: true,
  userApiSlice: {
    endpoints: {
      reducerPath: 'apiUser',
      logout: {
        matchPending: jest.fn(),
      },
      loginApi: {
        matchFulfilled: jest.fn(),
      },
    },
  },
  useLoginApiMutation: jest.fn(),
  useLogoutMutation: jest.fn(() => ({})),
}))

describe('Callback test', () => {
  beforeEach(() => {
    useLoginApiMutation.mockReset()
  })
  it('Test Failed 403 action', () => {
    useLoginApiMutation.mockImplementation(() => mockLoginMutation())
    const { getByText } = renderWithProviders(<Callback />, { preloadedState })
    expect(getByText('You are not in the system, please contact administrator')).toBeInTheDocument()
  })
  it('Loading component shown if fetching', () => {
    useLoginApiMutation.mockImplementation(() => mockLoginMutationFetching())
    const { getByText } = renderWithProviders(<Callback />, { preloadedState })
    expect(getByText('We are logging you in')).toBeInTheDocument()
  })
})
