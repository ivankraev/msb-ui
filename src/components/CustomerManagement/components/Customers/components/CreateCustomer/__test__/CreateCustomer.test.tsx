import React from 'react'
import CreateCustomer from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/CreateCustomer'
import { renderWithProviders } from '@msp/utils/test-utils'

describe('Customers component', () => {
  it('Should render the content if the pathname matches', () => {
    const { container } = renderWithProviders(<CreateCustomer />)
    expect(container.querySelector('h1')?.textContent).toBe('New customer')
  })
})
