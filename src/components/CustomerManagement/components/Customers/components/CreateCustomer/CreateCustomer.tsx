import React, { useEffect } from 'react'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import {
  initialValues as generalInformationInitialValues,
  validationSchema as generalInformationValidationSchema,
} from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/config'
import {
  initialValues as productsInitialValues,
  validationSchema as productsValidationSchema,
} from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import { steps } from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/config'
import s from './CreateCustomer.scss'
import FormContainer from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/FormContainer'
import CustomerInformation from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/components/CustomerInformation'
import { useAppSelector } from '@msp/redux/hooks'
import SelectProducts from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts'
import { useFormik } from 'formik'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import ButtonsContainer from '@common/ButtonsContainer'
import Button from '@common/Button'
import ButtonsGroup from '@common/ButtonsGroup'

const CreateCustomer = () => {
  const { currentStep } = useAppSelector((state) => state.steps)
  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()

  const goToNextStep = () => {
    incrementStep()
  }

  const productsIntance = useFormik({
    initialValues: productsInitialValues,
    validationSchema: productsValidationSchema,
    onSubmit: goToNextStep,
  })

  const generalInformationInstance = useFormik({
    initialValues: generalInformationInitialValues,
    validationSchema: generalInformationValidationSchema,
    onSubmit: goToNextStep,
  })

  const {
    handleSubmit: submitProducts,
    values: productsValues,
    validateForm: validateProductsForm,
    isValid: isProductsDataValid,
  } = productsIntance

  const {
    handleSubmit: submitGeneralInformation,
    values: generalInformationValues,
    validateForm: validateGeneralInformationForm,
  } = generalInformationInstance

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <CustomerInformation formikInstance={generalInformationInstance} />,
    1: (
      <SelectProducts
        formikInstance={productsIntance}
        headerButton={
          <Button type="button" textOnly={true}>
            apply plan
          </Button>
        }
      />
    ),
  }

  useEffect(() => {
    validateProductsForm()
    validateGeneralInformationForm()
    return () => {
      resetStepsState()
    }
  }, [])

  return (
    <Container label="New customer" styles={s.container}>
      <FormContainer>
        <Stepper steps={steps} />
        <form onSubmit={currentStep == 0 ? submitGeneralInformation : submitProducts}>
          {renderSteps[currentStep]}
          <hr />
          <ButtonsContainer>
            <Button type="button">cancel</Button>
            <ButtonsGroup>
              <Button type="button" disabled={currentStep == 0} onClick={decrementStep}>
                previous
              </Button>
              <Button
                contained={true}
                type="submit"
                disabled={currentStep === 1 && !isProductsDataValid}
              >
                next
              </Button>
            </ButtonsGroup>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </Container>
  )
}

export default CreateCustomer
