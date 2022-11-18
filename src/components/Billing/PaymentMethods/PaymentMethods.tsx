import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '@msp/redux/hooks'
import { links } from '@msp/routes/links'
import Button from '@common/Button'
import Container from '@common/Container'
import PaymentMethod from './components/PaymentMethod'
import s from './PaymentMethods.scss'

const PaymentMethods = () => {
  const { paymentMethods } = useAppSelector((state) => state.paymentMethodsSettings)

  const { pathname } = useLocation()

  if (pathname !== links.billing.paymentMethods.index) {
    return <Outlet />
  }

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
