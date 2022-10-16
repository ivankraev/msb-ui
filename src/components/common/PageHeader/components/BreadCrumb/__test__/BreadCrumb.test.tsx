import React from 'react'
import { render } from '@testing-library/react'
import BreadCrumb from '@common/PageHeader/components/BreadCrumb'
import { MemoryRouter } from 'react-router-dom'
import { useActiveRoutePaths } from '@msp/hooks/useActiveRoutes'
jest.mock('@msp/hooks/useActiveRoutes')

const mockPaths = [
  {
    match: {
      pathname: '/customer-management',
      params: {},
      pathnameBase: '/customer-management',
      pattern: { path: '/customer-management', end: false },
    },
    title: 'Customer Management',
    definition: {
      title: 'Customer Management',
      path: '/customer-management',
      element: () => <h1 />,
    },
  },
]

describe('BreadCrumb component', () => {
  it('BreadCrumb should consist of the correct paths', () => {
    const mockedHook = useActiveRoutePaths as jest.MockedFunction<typeof useActiveRoutePaths>
    mockedHook.mockReturnValueOnce(mockPaths)

    const { getByRole } = render(<BreadCrumb />, { wrapper: MemoryRouter })

    expect(mockedHook).toHaveBeenCalled()
    expect(getByRole('listitem')).toHaveTextContent('Customer Management')
  })
})
