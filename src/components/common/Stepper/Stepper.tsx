import React from 'react'
import NotCompletedStep2Icon from '@msp/components/icons/NotCompletedStep2Icon'
import ActiveStep1Icon from '@msp/components/icons/ActiveStep1Icon'
import CompletedStepIcon from '@msp/components/icons/CompletedStepIcon'
import CompletedStep2Icon from '@msp/components/icons/CompletedStep2Icon'
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
  '1-active': <ActiveStep1Icon />,
  '2-active': <CompletedStep2Icon />,
  '2-not-completed': <NotCompletedStep2Icon />,
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
