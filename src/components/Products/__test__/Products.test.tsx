import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '@msp/components/Products'

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

describe('Products component', () => {
  it('Should redirect us to another page and should return empty component', () => {
    const { container } = render(<Products />, { wrapper: MemoryRouter })

    expect(container).toBeEmptyDOMElement()
  })
})
