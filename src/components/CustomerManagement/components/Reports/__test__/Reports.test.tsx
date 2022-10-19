import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Reports from '@msp/components/CustomerManagement/components/Reports/Reports'

describe('Reports component', () => {
  it('Should render the component', () => {
    render(<Reports />, { wrapper: MemoryRouter })
  })
})
