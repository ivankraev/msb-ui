import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import CreateMethod from '@msp/components/Billing/PaymentMethods/components/PaymentMethod/components/CreateMethod/CreateMethod'
import userEvent from '@testing-library/user-event'

describe('CreateMethod component', () => {
  it('PaymentMethod component should render and select from method options properly', () => {
    const { getAllByText, getAllByTestId } = renderWithProviders(<CreateMethod />)
    const methodField = getAllByTestId('select')[0]
    userEvent.click(methodField)
    userEvent.click(getAllByText('Card')[0])

    expect(methodField).toHaveAttribute('placeholder', 'Card')
  })

  it('PaymentMethod component should render and select from billing address options properly', () => {
    const { getAllByText, getAllByTestId } = renderWithProviders(<CreateMethod />)
    const billingAddressField = getAllByTestId('select')[1]
    userEvent.click(billingAddressField)
    userEvent.click(getAllByText('Apple Pay')[1])

    expect(billingAddressField).toHaveAttribute('placeholder', 'Apple Pay')
  })
})
