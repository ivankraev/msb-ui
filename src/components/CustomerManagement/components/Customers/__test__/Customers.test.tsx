import React from 'react'
import Customers from '@msp/components/CustomerManagement/components/Customers/Customers'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { routes } from '@msp/routes/definitions'

const mockRoute = routes.customer_management.customers.index

const mockUseLocationValue = {
  pathname: mockRoute,
  search: '',
  hash: '',
  state: null,
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

describe('Customers component', () => {
  it('Should render the content if the pathname matches', () => {
    const { container } = render(<Customers />, { wrapper: MemoryRouter })
    expect(container.querySelector('h1')?.textContent).toBe('Customers')
  })
  it('Should provide just outlet for another component if the pathname doesnt match', () => {
    mockUseLocationValue.pathname = '/someotherpath'
    const { container } = render(<Customers />, { wrapper: MemoryRouter })
    expect(container).toBeEmptyDOMElement()
  })
})
