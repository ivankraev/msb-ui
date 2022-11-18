import React from 'react'
import { MemoryRouter } from 'react-router'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@msp/utils/test-utils'

import UserMenu from './UserMenu'
import OrganizationsMenu from './components/OrganizationsMenu'

jest.mock('@msp/features/api/hubApiSlice', () => ({
  _esModule: true,
  useGetHubQuery: jest.fn(() => ({
    data: {
      id: 'fakeId',
      logoUrl: 'random-logo.png',
    },
  })),
}))

const preloadedState = {
  user: {
    userInfo: {
      name: 'Rebecca Rogers',
      email: 'rebecca@mail.com',
      organization: 'Dev Inc.',
      availableOrganizations: ['Deployment Ltd.'],
      sub: 'random sub',
      zoneinfo: 'LA',
    },
    token: null,
  },
}

describe('UserMenu component', () => {
  it('UserMenu component should render with name and email', () => {
    renderWithProviders(<UserMenu userInfo={preloadedState.user.userInfo} />, { preloadedState })
    const userNameElement = screen.getByText(preloadedState.user.userInfo.name)
    const userEmailElement = screen.getByText(preloadedState.user.userInfo.email)
    expect(userNameElement).toBeVisible()
    expect(userEmailElement).toBeVisible()
  })
  it('OrganizationsMenu component should render with org name and logo', () => {
    render(<OrganizationsMenu userInfo={preloadedState.user.userInfo} />, { wrapper: MemoryRouter })
    const organizationNameElement = screen.getByText(preloadedState.user.userInfo.organization)
    const organizationLogoElement = screen.getByAltText('logo')
    expect(organizationNameElement).toBeVisible()
    expect(organizationLogoElement).toHaveAttribute('src', preloadedState.user.userInfo.logo)
  })
  it('Logout test', () => {
    renderWithProviders(<UserMenu userInfo={preloadedState.user.userInfo} />, { preloadedState })
    const signOut = screen.getByText('Sign Out')
    fireEvent.click(signOut)
    jest.spyOn(Storage.prototype, 'removeItem')
    Storage.prototype.removeItem = jest.fn()
    waitFor(() => {
      expect(localStorage.removeItem).toHaveBeenCalled()
    })
  })
})
