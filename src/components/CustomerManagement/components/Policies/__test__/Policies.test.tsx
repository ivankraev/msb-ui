import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Policies from '@msp/components/CustomerManagement/components/Policies/Policies'

describe('Policies component', () => {
  it('Should render the component', () => {
    render(<Policies />, { wrapper: MemoryRouter })
  })
})
