import React from 'react'

interface Props {
  color: keyof React.CSSProperties
}

const AngleRightIcon = ({ color }: Props) => {
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
        d="M.71 15.782a.703.703 0 0 1 0-1.018L7.472 8 .709 1.236a.703.703 0 0 1 0-1.018.703.703 0 0 1 1.018 0L9.51 8l-7.782 7.782a.718.718 0 0 1-.509.218.718.718 0 0 1-.509-.218Z"
        fill={color}
      />
    </svg>
  )
}

export default AngleRightIcon
