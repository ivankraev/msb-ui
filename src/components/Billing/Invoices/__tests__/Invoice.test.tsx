import React from 'react'
import { render } from '@testing-library/react'
import Invoices from '@msp/components//Billing/Invoices'

describe('Invoices page', () => {
  it('Should consist of h1, table, li and svg elements', () => {
    const { container } = render(<Invoices />)
    expect(container.querySelector('h1')).not.toBeNull()
    expect(container.querySelector('table')).not.toBeNull()
    expect(container.querySelector('li')).not.toBeNull()
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
