import React, { useState } from 'react'
import s from './Tooltip.scss'

interface Props {
  children: React.ReactNode
  text: string
  fullWidth?: boolean
}

const Tooltip = ({ children, text, fullWidth = false }: Props) => {
  let activeTimeout: NodeJS.Timeout
  let fadedInTimeout: NodeJS.Timeout
  const [active, setActive] = useState(false)
  const [fadedIn, setFadedIn] = useState(false)

  const showTip = () => {
    activeTimeout = setTimeout(() => {
      setActive(true)
    }, 50)
    // We need one more timer in order for the smooth transition to work
    // after the element is attached to the dom
    fadedInTimeout = setTimeout(() => {
      setFadedIn(true)
    }, 100)
  }

  const hideTip = () => {
    setActive(false)
    setFadedIn(false)
    clearTimeout(activeTimeout)
    clearTimeout(fadedInTimeout)
  }

  return (
    <div
      className={s.container}
      style={{ width: fullWidth ? '100%' : '' }}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={s.tooltipHolder} style={{ transform: fadedIn ? 'scale(1)' : 'scale(0)' }}>
          <span className={s.tooltipText}>{text}</span>
        </div>
      )}
    </div>
  )
}

export default Tooltip
