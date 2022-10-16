import React from 'react'
import { useLocation } from 'react-router-dom'
import InformationTable from '@msp/components/CustomerManagement/components/Customers/components/Customer/components/InformationTable'
import Container from '@common/Container'
import Button from '@common/Button'
import s from './Customer.scss'

const Customer = () => {
  const { state } = useLocation()

  const mockCustomerInfo = {
    name: 'John Doe',
    organisation: 'Delaware',
    email: 'john.doe@albuquerque.us',
    address: 'Frankfurter Ring 164a, Munich, Bayern, Germany, 80805',
  }

  return (
    <Container
      label={state?.data}
      headerButtons={<Button>edit customer</Button>}
      styles={s.container}>
      <div className={s.infoContainer}>
        <h3>Customer information</h3>
        <InformationTable customerInfo={mockCustomerInfo} />
        <hr />
      </div>
    </Container>
  )
}

export default Customer
