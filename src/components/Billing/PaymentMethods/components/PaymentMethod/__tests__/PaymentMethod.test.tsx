import React from 'react'
import { PaymentMethod as PaymentMethodInterface } from '@msp/features/paymentMethods/paymentMethodsSettingsSlice'
import { render } from '@testing-library/react'
import PaymentMethod, {
  PROVIDER_TYPES_TO_IMAGES_MAP,
  transformCardWithExtraSpace,
} from '../PaymentMethod'

const mockedPaymentMethod: PaymentMethodInterface = {
  cardNumber: '6712871593613421',
  holderName: 'Acme Widgets Ltd.',
  address: '627 Bright Farm, Philadelphia, DC 37246',
  exemptionType: 'Reseller',
  taxExemptionElegibility: true,
  providerType: 'mastercard',
  isPrimary: true,
}

describe('PaymentMethod component', () => {
  it('PaymentMethod component should render', () => {
    render(<PaymentMethod paymentMethod={mockedPaymentMethod} />)
  })
  it('PaymentMethod component should render with correct card provider', () => {
    const { container } = render(<PaymentMethod paymentMethod={mockedPaymentMethod} />)
    const cardProviderLogo = container.querySelector('img')
    expect(cardProviderLogo).toHaveAttribute(
      'src',
      PROVIDER_TYPES_TO_IMAGES_MAP[mockedPaymentMethod.providerType],
    )
  })
  it('PaymentMethod component should render with correct primary status indication', () => {
    const { getByTestId } = render(<PaymentMethod paymentMethod={mockedPaymentMethod} />)
    const cardNumberElement = getByTestId('card-number-container')
    expect(cardNumberElement).toHaveTextContent('primary')
  })
  it('PaymentMethod component should render with correct tax exemption elegibility', () => {
    const { getByText } = render(<PaymentMethod paymentMethod={mockedPaymentMethod} />)
    const taxEligibilityElement = getByText('for tax exemption', { exact: false })
    expect(taxEligibilityElement).toHaveTextContent('Eligible for tax exemption')
  })
  it('transformCardWithExtraSpace should add space correctly', () => {
    const transformedNumber = transformCardWithExtraSpace(mockedPaymentMethod.cardNumber)
    expect(transformedNumber).toBe('6712 8715 9361 3421')
  })
})
