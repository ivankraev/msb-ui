import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@msp/redux/hooks'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import { plansActions } from '@msp/features/plans/plansSlice'
import { links } from '@msp/routes/links'
import SelectProducts from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts'
import ProvisionedProducts from './components/ProvisionedProducts'
import ButtonsGroup from '@common/ButtonsGroup'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import Button from '@common/Button'
import s from './CreatePlan.scss'

const New = () => {
  const { steps, currentStep } = useAppSelector((state) => state.steps)
  const { selectedServices, selectedPlanName } = useAppSelector((state) => state.plans)
  const { incrementStep, decrementStep, resetState: resetStepsState } = stepsActions()
  const { resetState: resetPlansState } = plansActions()

  const navigate = useNavigate()

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts />,
    1: (
      <ProvisionedProducts
        services={selectedServices}
        planName={selectedPlanName}
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

  const goBackToPlans = () => {
    navigate(links.products.plans.index)
  }

  return (
    <Container label="New plan" styles={s.container}>
      <div className={s.innerContainer}>
        <Stepper steps={steps} />
        {renderSteps[currentStep]}
        <hr />
        <div className={s.buttonsContainer}>
          <div>
            <Button onClick={goBackToPlans} to={links.products.plans.index}>
              Cancel
            </Button>
          </div>
          <ButtonsGroup>
            <Button onClick={decrementStep} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button
              onClick={incrementStep}
              contained={true}
              disabled={selectedServices.length === 0}>
              {currentStep === steps.length - 1 ? 'save plan' : 'next'}
            </Button>
          </ButtonsGroup>
        </div>
      </div>
    </Container>
  )
}

export default New
