import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Invoices from '@msp/components/Billing/Invoices/Invoices'

describe('Invoices page', () => {
  it('Should consist of h1, table, li and svg elements', () => {
    jest.mock('../../../../hooks/useActiveRoutes', () => {
      return []
    })

    const { container } = render(<Invoices />, { wrapper: MemoryRouter })

    expect(container.querySelector('h1')).not.toBeNull()
    expect(container.querySelector('table')).not.toBeNull()
    expect(container.querySelector('li')).not.toBeNull()
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
