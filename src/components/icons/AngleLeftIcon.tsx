import React from 'react'

interface Props {
  color: keyof React.CSSProperties
}

const AngleLeftIcon = ({ color }: Props) => {
  return (
    <svg
      style={{ cursor: 'pointer' }}
      width={10}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.291 15.782a.718.718 0 0 1-.51.218.718.718 0 0 1-.508-.218L.49 8 8.273.218a.703.703 0 0 1 1.018 0c.29.291.29.727 0 1.018L2.527 8l6.764 6.764c.29.29.29.727 0 1.018Z"
        fill={color}
      />
    </svg>
  )
}

export default AngleLeftIcon
