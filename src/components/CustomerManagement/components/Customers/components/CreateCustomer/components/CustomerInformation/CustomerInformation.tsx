import React from 'react'
import GeneralInformation from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/components/CustomerInformation/components/GeneralInformation'
import BillingAddress from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/components/CustomerInformation/components/BillingAddress'
import s from './CustomerInformation.scss'
import ButtonsContainer from '@common/ButtonsContainer'
import Button from '@common/Button'
import ButtonsGroup from '@common/ButtonsGroup'

const CustomerInformation = () => {
  return (
    <div className={s.container}>
      <GeneralInformation />
      <hr />
      <BillingAddress />
      <hr />
      <ButtonsContainer>
        <Button>cancel</Button>
        <ButtonsGroup>
          <Button>previous</Button>
          <Button contained={true}>next</Button>
        </ButtonsGroup>
      </ButtonsContainer>
    </div>
  )
}

export default CustomerInformation
