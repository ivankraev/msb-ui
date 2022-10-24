import React from 'react'
import Button from '@common/Button'
import Card from '@common/Card'
import { PaymentMethod as PaymentMethodIterface } from '@msp/features/paymentMethods/paymentMethodsSettingsSlice'

import s from './PaymentMethod.scss'

export const PROVIDER_TYPES_TO_IMAGES_MAP = {
  visa: '/visa.png',
  mastercard: '/mastercard.png',
}

interface Props {
  paymentMethod: PaymentMethodIterface
}

export const transformCardWithExtraSpace = (cardNumber: string): string => {
  return cardNumber.match(/.{1,4}/g)!.join(' ')
}

const PaymentMethod: React.FC<Props> = ({ paymentMethod }) => {
  if (!paymentMethod) return null
  const {
    cardNumber,
    holderName,
    address,
    exemptionType,
    taxExemptionElegibility,
    providerType,
    isPrimary,
  } = paymentMethod
  const displayedCardNumber = transformCardWithExtraSpace(cardNumber)
  return (
    <div className={s.cardWrapper} data-testid="payment-method">
      <Card>
        <div className={s.container}>
          <div className={s.headerContainer}>
            <div className={s.cardLogoAndNumber}>
              <img
                src={PROVIDER_TYPES_TO_IMAGES_MAP[providerType]}
                className={s.paymentMethodLogo}
              />
              <div data-testid="card-number-container">
                {displayedCardNumber} {isPrimary ? '(primary)' : ''}
              </div>
            </div>
            <Button>Edit</Button>
          </div>
          <div>
            <strong>{holderName}</strong>
          </div>
          <div>{address}</div>
          <ul className={s.cardDetailsList}>
            <li>
              <span className={s.detailLabel}>Exemption type</span>
              <span className={s.detailValue}>{exemptionType}</span>
            </li>
            <li>
              <span className={s.detailLabel}>Tax exemption eligibility</span>
              <span className={s.detailValue}>
                {taxExemptionElegibility ? 'Eligible' : 'Not eligible'} for tax exemption
              </span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default PaymentMethod
