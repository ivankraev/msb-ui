import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { links } from '@msp/routes/links'
import New from '@msp/components/CustomerManagement/components/Customers/components/New/New'

const mockUseLocationValue = {
  pathname: links.products.plans.new,
  search: '',
  hash: '',
  state: null,
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

afterEach(cleanup)

describe('New Plan page', () => {
  it('Should consist of input, button, table svg elements', () => {
    render(<New />, {
      wrapper: MemoryRouter,
    })
  })
})
