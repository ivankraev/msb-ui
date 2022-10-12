import React from 'react'
import { cleanup, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { renderWithProviders } from '@msp/utils/test-utils'

afterEach(cleanup)

const mockedUserInfo = {
  name: 'Rebecca Rogers',
  email: 'rebecca@mail.com',
  organization: 'Dev Inc.',
  availableOrganizations: ['Deployment Ltd.'],
  sub: 'random sub',
  zoneinfo: 'LA',
  logo: 'randomLogo.png',
}

const preloadedState = {
  user: {
    userInfo: mockedUserInfo,
    userToken: null,
  },
}

describe('Header component', () => {
  it('Header component should render with user logo and name', () => {
    renderWithProviders(<Header />, { preloadedState })
    const userLogoElement = screen.getByAltText('logo')
    expect(userLogoElement).toBeVisible()
    const userNameElement = screen.getByText(mockedUserInfo.name)
    expect(userNameElement).toBeVisible()
  })
  it('Clicking on user logo should show user menu', () => {
    renderWithProviders(<Header />, { preloadedState })
    const userLogoElement = screen.getByAltText('logo')
    fireEvent.click(userLogoElement)
    expect(screen.getByTestId('user-menu')).toBeInTheDocument()
  })
})
