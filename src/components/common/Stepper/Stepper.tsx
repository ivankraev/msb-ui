import React from 'react'
import NotCompletedStepTwoIcon from '@msp/components/icons/NotCompletedStepTwoIcon'
import ActiveStepOneIcon from '@msp/components/icons/ActiveStepOneIcon'
import CompletedStepIcon from '@msp/components/icons/CompletedStepIcon'
import CompletedStepTwoIcon from '@msp/components/icons/CompletedStepTwoIcon'
import s from './Stepper.scss'

interface Props {
  steps: {
    title: string
    completed: boolean
    active: boolean
  }[]
}

const renderIcon: { [key: string]: JSX.Element } = {
  completed: <CompletedStepIcon />,
  '1-active': <ActiveStepOneIcon />,
  '2-active': <CompletedStepTwoIcon />,
  '2-not-completed': <NotCompletedStepTwoIcon />,
}

const Stepper = ({ steps }: Props) => {
  return (
    <div className={s.container}>
      {steps.map((step, i) => (
        <div className={s.step} key={step.title}>
          {step.active
            ? renderIcon[`${i + 1}-active`]
            : step.completed
            ? renderIcon.completed
            : !step.completed
            ? renderIcon[`${i + 1}-not-completed`]
            : ''}
          <span> {step.title}</span>
          {i !== steps.length - 1 && <hr />}
        </div>
      ))}
    </div>
  )
}

export default Stepper
