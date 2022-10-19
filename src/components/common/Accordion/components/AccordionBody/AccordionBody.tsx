import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import s from './AccordionBody.scss'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  openStyles?: string
  closedStyles?: string | number | symbol
}

const AccordionBody = ({ children, isOpen, openStyles, closedStyles }: Props) => {
  const [bodyHeight, setBodyHeight] = useState<number | undefined>(undefined)

  const elRef = useRef<HTMLDivElement | null>(null)

  const bodyHeightHandler = () => {
    setBodyHeight(elRef.current?.scrollHeight)
  }

  useEffect(() => {
    setBodyHeight(elRef.current?.scrollHeight)
    // if we resize the window to smaller we may cut some of the text, so we need to set the state
    window.addEventListener('resize', bodyHeightHandler)

    return () => window.removeEventListener('resize', bodyHeightHandler)
  }, [])

  const classes = cx({
    [s.accordionItemBody]: !isOpen,
    [closedStyles as string]: !isOpen,
    [s.accordionItemBodyVisible]: isOpen,
    [openStyles as string]: isOpen,
  })

  return (
    <div
      style={{ maxHeight: isOpen ? `${(bodyHeight as number) / 16}rem` : 0 }}
      ref={elRef}
      className={classes}>
      {children}
    </div>
  )
}

export default AccordionBody
