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

  useEffect(() => {
    setBodyHeight(elRef.current?.scrollHeight)
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
      className={classes}
    >
      {children}
    </div>
  )
}

export default AccordionBody
