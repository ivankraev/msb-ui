import React from 'react'

import Button from '@common/Button'
import Container from '@common/Container'
import { links } from '@msp/routes/links'

import s from './PaymentMethods.scss'
import PaymentMethod from './components/PaymentMethod'
import { useAppSelector } from '@msp/redux/hooks'

const PaymentMethods = () => {
  const { paymentMethods } = useAppSelector((state) => state.paymentMethodsSettings)
  return (
    <Container
      label="Payment methods and addresses"
      styles={s.container}
      headerButtons={
        <Button to={links.billing.paymentMethods.new} contained>
          Add payment method
        </Button>
      }
    >
      <div className={s.container}>
        <div className={s.cardsContainer}>
          {paymentMethods?.map((paymentMethod, i) => (
            <PaymentMethod paymentMethod={paymentMethod} key={i} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default PaymentMethods
