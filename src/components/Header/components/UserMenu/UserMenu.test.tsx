import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, cleanup, screen } from '@testing-library/react'

import UserMenu from './UserMenu'
import OrganizationsMenu from './components/OrganizationsMenu'

const mockedUserInfo = {
  name: 'Rebecca Rogers',
  email: 'rebecca@mail.com',
  organization: 'Dev Inc.',
  availableOrganizations: ['Deployment Ltd.'],
  sub: 'random sub',
  zoneinfo: 'LA',
  logo: 'randomLogo.png',
}

afterEach(cleanup)

describe('UserMenu component', () => {
  it('UserMenu component should render with name and email', () => {
    render(<UserMenu userInfo={mockedUserInfo} />, { wrapper: MemoryRouter })
    const userNameElement = screen.getByText(mockedUserInfo.name)
    const userEmailElement = screen.getByText(mockedUserInfo.email)
    expect(userNameElement).toBeVisible()
    expect(userEmailElement).toBeVisible()
  })
  it('OrganizationsMenu component should render with org name and logo', () => {
    render(<OrganizationsMenu userInfo={mockedUserInfo} />, { wrapper: MemoryRouter })
    const organizationNameElement = screen.getByText(mockedUserInfo.organization)
    const organizationLogoElement = screen.getByAltText('logo')
    expect(organizationNameElement).toBeVisible()
    expect(organizationLogoElement).toHaveAttribute('src', mockedUserInfo.logo)
  })
})
