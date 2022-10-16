import React from 'react'
import Customer from '@msp/components/CustomerManagement/components/Customers/components/Customer/Customer'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const mockUseLocationValue = {
  pathname: '/test',
  search: '',
  hash: '',
  state: { data: 'test customer' },
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

describe('Customer component', () => {
  it('Should render the proper content passed from useLocation state', () => {
    const { container } = render(<Customer />, { wrapper: MemoryRouter })
    expect(container.querySelector('h1')?.textContent).toBe('test customer')
  })
})
