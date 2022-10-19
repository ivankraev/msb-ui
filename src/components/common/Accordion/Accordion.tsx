import React from 'react'
import cx from 'classnames'
import AccordionBody from '@common/Accordion/components/AccordionBody'
import s from './Accordion.scss'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  styles?: React.CSSProperties
  openStyles?: React.CSSProperties
  bodyStyles?: React.CSSProperties
  bodyOpenStyles?: React.CSSProperties
  headerComponent: () => JSX.Element
}

const Accordion = ({ children, isOpen, styles, bodyOpenStyles, headerComponent }: Props) => {
  const classes = cx({
    [s.accordionItem]: true,
    [s.accordionItemVisible]: isOpen,
    [styles as string]: true,
  })

  return (
    <div className={classes}>
      {headerComponent()}
      <AccordionBody isOpen={isOpen} styles={bodyOpenStyles}>
        {children}
      </AccordionBody>
    </div>
  )
}

export default Accordion
