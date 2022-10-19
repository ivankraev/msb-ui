import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Products from '@msp/components/Products'

const mockUseLocationValue = {
  pathname: 'testLink',
  search: '',
  hash: '',
  state: null,
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => mockUseLocationValue),
}))

describe('Products component', () => {
  it('Should render empty component since we either redirect or return outlet element', () => {
    const { container } = render(<Products />, { wrapper: MemoryRouter })

    expect(container).toBeEmptyDOMElement()
  })
})
