import React from 'react'
import { useAppSelector } from '@msp/redux/hooks'
import { stepsActions } from '@msp/features/steps/stepsSlice'
import { plansActions } from '@msp/features/plans/plansSlice'
import SelectProducts from '@msp/components/Plans/components/SelectProducts'
import ProvisionedProducts from './components/ProvisionedProducts'
import ButtonsGroup from '@common/ButtonsGroup'
import Container from '@common/Container'
import Stepper from '@common/Stepper'
import Button from '@common/Button'
import s from './Plans.scss'

const Plans = () => {
  const { steps, currentStep } = useAppSelector((state) => state.steps)
  const { selectedServices, selectedPlanName } = useAppSelector((state) => state.plans)
  const { incrementStep, decrementStep } = stepsActions()
  const { resetState } = plansActions()

  const renderSteps: { [key: number]: JSX.Element | null } = {
    0: <SelectProducts />,
    1: (
      <ProvisionedProducts
        services={selectedServices}
        planName={selectedPlanName}
        changeHandler={decrementStep}
      />
    ),
  }

  return (
    <Container label="New plan" styles={s.container}>
      <div className={s.innerContainer}>
        <Stepper steps={steps} />
        {renderSteps[currentStep]}
        <hr />
        <div className={s.buttonsContainer}>
          <div>
            <Button onClick={resetState}>Cancel</Button>
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

export default Plans
