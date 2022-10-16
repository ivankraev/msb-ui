import React from 'react'
import CustomerManagement from '@msp/components/CustomerManagement/CustomerManagement'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const mockUseLocationValue = {
  pathname: 'test',
  search: '',
  hash: '',
  state: null,
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

describe('CustomerManagement component', () => {
  it('Should redirect us to another page and should return empty component', () => {
    const { container } = render(<CustomerManagement />, { wrapper: MemoryRouter })

    expect(container).toBeEmptyDOMElement()
  })
})
