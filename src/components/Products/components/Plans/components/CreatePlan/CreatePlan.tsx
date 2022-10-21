import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@msp/redux/hooks'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import { plansActions } from '@msp/features/plans/plansSlice'
import { links } from '@msp/routes/links'
import SelectProducts from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts'
import ProvisionedProducts from './components/ProvisionedProducts'
import ButtonsContainer from '@common/ButtonsContainer'
import ButtonsGroup from '@common/ButtonsGroup'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import Button from '@common/Button'
import s from './CreatePlan.scss'

const CreatePlan = () => {
  const { steps, currentStep } = useAppSelector((state) => state.steps)
  const { selectedServices, selectedPlanName, error } = useAppSelector((state) => state.plans)
  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()
  const { resetState: resetPlansState, checkForErrors } = plansActions()

  const navigate = useNavigate()

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts />,
    1: (
      <ProvisionedProducts
        services={selectedServices}
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
  }, [selectedServices, selectedPlanName])

  const goBackToPlans = () => {
    navigate(links.products.plans.index)
  }

  const goToNextStep = () => {
    if (!error) {
      incrementStep()
    }
  }

  return (
    <Container label="New plan" styles={s.container}>
      <div className={s.innerContainer}>
        <Stepper steps={steps} />
        {renderSteps[currentStep]}
        <hr />
        <ButtonsContainer>
          <Button onClick={goBackToPlans}>Cancel</Button>
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
