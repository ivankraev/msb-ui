import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@msp/redux/hooks'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import { productsActions } from '@msp/features/plans/productsSlice'
import { steps } from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import { links } from '@msp/routes/links'
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
  const { selectedProducts, selectedPlanName, error } = useAppSelector((state) => state.plans)
  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()
  const { resetState: resetPlansState, checkForErrors } = productsActions()

  const navigate = useNavigate()

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts />,
    1: (
      <ProvisionedProducts
        products={selectedProducts}
        planName={selectedPlanName.value}
        onChangeHandler={decrementStep}
      />
    ),
  }

  useEffect(() => {
    return () => {
      resetPlansState()
      resetStepsState()
    }
  }, [])

  useEffect(() => {
    checkForErrors()
  }, [selectedProducts, selectedPlanName])

  const goToPlans = () => {
    navigate(links.products.plans.index)
  }

  const cancelHandler = () => {
    if (selectedPlanName.value !== '' || selectedProducts.length > 0) {
      setIsDialogOpen(true)
      return
    }
    goToPlans()
  }

  const goToNextStep = () => {
    if (!error) {
      incrementStep()
    }
  }

  const closeDialogHandler = () => {
    setIsDialogOpen(false)
  }

  return (
    <Container label="New plan" styles={s.container}>
      <ConfirmDialog
        isOpen={isDialogOpen}
        closeHandler={closeDialogHandler}
        headerText="Discard changes"
        contentText="Changes won't be saved"
        confirmHandler={goToPlans}
      />
      <div className={s.innerContainer}>
        <Stepper steps={steps} />
        {renderSteps[currentStep]}
        <hr />
        <ButtonsContainer>
          <Button onClick={cancelHandler}>Cancel</Button>
          <ButtonsGroup>
            <Button onClick={decrementStep} disabled={currentStep === 0}>
              previous
            </Button>
            <Button onClick={goToNextStep} contained={true} disabled={error}>
              {currentStep === steps.length - 1 ? 'save plan' : 'next'}
            </Button>
          </ButtonsGroup>
        </ButtonsContainer>
      </div>
    </Container>
  )
}

export default CreatePlan
