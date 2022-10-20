import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import UserProfile from '@msp/components/UserProfile/UserProfile'

const preloadedState = {
  user: {
    userInfo: {
      name: 'Test name',
      sub: 'test',
      email: 'test email',
      zoneinfo: 'test',
    },
    userToken: null,
  },
}

describe('UserProfile component', () => {
  it('Should render the correct content provided by the store', () => {
    const { container } = renderWithProviders(<UserProfile />, { preloadedState })
    expect(container.querySelectorAll('input')[0].value).toBe(preloadedState.user.userInfo.name)
  })
})
