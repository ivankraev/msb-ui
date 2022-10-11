import React from 'react'
import { render, screen } from '@testing-library/react'

import Invoices from '@msp/components//Billing/Invoices'

describe('Invoices page', () => {
  it('Header should be visible', () => {
    render(<Invoices />)
    const headerElement = screen.getByText(/invoicing history/i)
    expect(headerElement).toBeInTheDocument()
  })
})
