import React from 'react'
import New from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/CreateCustomer'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Customers component', () => {
  it('Should render the content if the pathname matches', () => {
    const { container } = render(<New />, { wrapper: MemoryRouter })
    expect(container.querySelector('h1')?.textContent).toBe('New customer')
  })
})
