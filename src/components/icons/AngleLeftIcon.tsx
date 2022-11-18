import React from 'react'
import variables from '@msp/theme/variables.scss'

interface Props {
  color: keyof React.CSSProperties
  onClick?: () => void
  disabled?: boolean
}

const AngleLeftIcon = ({ color, onClick, disabled }: Props) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
      width="0.875rem"
      height="1.875rem"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.291 15.782a.718.718 0 0 1-.51.218.718.718 0 0 1-.508-.218L.49 8 8.273.218a.703.703 0 0 1 1.018 0c.29.291.29.727 0 1.018L2.527 8l6.764 6.764c.29.29.29.727 0 1.018Z"
        fill={disabled ? variables.greyColor : color}
      />
    </svg>
  )
}

export default AngleLeftIcon
