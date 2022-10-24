import React from 'react'
import { renderWithProviders } from '@msp/utils/test-utils'
import PaymentMethods from '../PaymentMethods'
import { PaymentMethod as PaymentMethodInterface } from '@msp/features/paymentMethods/paymentMethodsSettingsSlice'

const mockedPaymentMethods: PaymentMethodInterface[] = [
  {
    cardNumber: '6712871593613421',
    holderName: 'Acme Widgets Ltd.',
    address: '627 Bright Farm, Philadelphia, DC 37246',
    exemptionType: 'Reseller',
    taxExemptionElegibility: true,
    providerType: 'mastercard',
    isPrimary: true,
  },
  {
    cardNumber: '5341764287510412',
    holderName: 'Alpha Corp.',
    address: '512 Wolf St, Chicago, IL 42721',
    exemptionType: 'Reseller',
    taxExemptionElegibility: false,
    providerType: 'visa',
    isPrimary: false,
  },
]

const preloadedState = {
  paymentMethodsSettings: {
    paymentMethods: mockedPaymentMethods,
  },
}

describe('PaymentMethods component', () => {
  it('PaymentMethods component should render', () => {
    renderWithProviders(<PaymentMethods />, { preloadedState })
  })
  it('PaymentMethods component should render correct amount of methods', () => {
    const { getAllByTestId } = renderWithProviders(<PaymentMethods />, { preloadedState })
    const cardsContainerElement = getAllByTestId('payment-method')
    expect(cardsContainerElement.length).toBe(2)
  })
})
