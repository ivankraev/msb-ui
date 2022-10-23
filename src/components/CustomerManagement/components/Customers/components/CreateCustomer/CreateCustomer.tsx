import React from 'react'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import { steps } from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/config'
import s from './CreateCustomer.scss'
import FormContainer from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/FormContainer'
import CustomerInformation from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/components/CustomerInformation'
import { useAppSelector } from '@msp/redux/hooks'

const renderSteps: { [key: number]: JSX.Element | null } = {
  0: <CustomerInformation />,
}

const CreateCustomer = () => {
  const { currentStep } = useAppSelector((state) => state.steps)

  return (
    <Container label="New customer" styles={s.container}>
      <FormContainer>
        <Stepper steps={steps} />
        <form>{renderSteps[currentStep]}</form>
      </FormContainer>
    </Container>
  )
}

export default CreateCustomer
