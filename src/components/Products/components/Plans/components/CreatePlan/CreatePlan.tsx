import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@msp/redux/hooks'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import {
  steps as planSteps,
  validationSchema,
} from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import { links } from '@msp/routes/links'
import { useFormik } from 'formik'
import { filterProducts } from '@msp/utils/filter-products'
import { initialValues } from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import SelectProducts from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts'
import ProvisionedProducts from './components/ProvisionedProducts'
import ButtonsContainer from '@common/ButtonsContainer'
import ButtonsGroup from '@common/ButtonsGroup'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import Button from '@common/Button'
import ConfirmDialog from '@common/ConfirmDialog'
import s from './CreatePlan.scss'

const CreatePlan = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { currentStep } = useAppSelector((state) => state.steps)

  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const isAtLeastOneProductSelected = filterProducts(values.products).length > 0
      if (!isAtLeastOneProductSelected) return

      if (currentStep === 0) {
        incrementStep()
      } else {
        // TODO Send api call here
      }
    },
  })

  const {
    handleSubmit,
    dirty,
    isValid,
    validateForm,
    values: { products, plan },
  } = formik

  const provisionedProducts = filterProducts(products)

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts formikInstance={formik} />,
    1: (
      <ProvisionedProducts
        products={provisionedProducts}
        planName={plan}
        onChangeHandler={decrementStep}
      />
    ),
  }

  useEffect(() => {
    validateForm()
    return () => {
      resetStepsState()
    }
  }, [])

  const goBackToPlans = () => {
    navigate(links.products.plans.index)
  }

  const cancelHandler = () => {
    if (dirty) {
      setIsDialogOpen(true)
    } else {
      goBackToPlans()
    }
  }

  const closeDialogHandler = () => {
    setIsDialogOpen(false)
  }

  const steps = useMemo(() => planSteps, [])

  return (
    <Container label="New plan" styles={s.container}>
      <ConfirmDialog
        isOpen={isDialogOpen}
        closeHandler={closeDialogHandler}
        headerText="Discard changes"
        contentText="Changes won't be saved"
        confirmHandler={goBackToPlans}
      />
      <div className={s.innerContainer}>
        <Stepper steps={steps} />
        <form onSubmit={handleSubmit}>
          {renderSteps[currentStep]}
          <hr />
          <ButtonsContainer>
            <Button onClick={cancelHandler} type="button">
              cancel
            </Button>
            <ButtonsGroup>
              <Button onClick={decrementStep} disabled={currentStep === 0}>
                previous
              </Button>
              <Button contained={true} type="submit" disabled={!isValid}>
                {currentStep === 1 ? 'save plan' : 'next'}
              </Button>
            </ButtonsGroup>
          </ButtonsContainer>
        </form>
      </div>
    </Container>
  )
}

export default CreatePlan
