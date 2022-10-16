import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import InformationTable from '@msp/components/CustomerManagement/components/Customers/components/Customer/components/InformationTable/InformationTable'

describe('Customer component', () => {
  const mockCustomerInfo = {
    name: 'Test Name',
    organisation: 'Test org',
    email: 'test email',
    address: 'test address',
  }

  it('Should render the proper content passed from useLocation state', () => {
    const { getByText } = render(<InformationTable customerInfo={mockCustomerInfo} />, {
      wrapper: MemoryRouter,
    })
    expect(getByText(/Test Name/)).toBeInTheDocument()
    expect(getByText(/Test org/)).toBeInTheDocument()
    expect(getByText(/test email/)).toBeInTheDocument()
    expect(getByText(/test address/)).toBeInTheDocument()
  })
})
