import React from 'react'

interface Props {
  color: keyof React.CSSProperties
  onClick?: () => void
}

const AngleDownIcon = ({ onClick, color }: Props) => {
  return (
    <svg
      width="0.875rem"
      height="0.5rem"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.190909 0.670169C0.445455 0.409097 0.827273 0.409097 1.08182 0.670169L7 6.7401L12.9182 0.670169C13.1727 0.409097 13.5545 0.409097 13.8091 0.670169C14.0636 0.931242 14.0636 1.32285 13.8091 1.58392L7 8.56761L0.190909 1.58392C0.0636364 1.45339 0 1.29022 0 1.12705C0 0.963876 0.0636364 0.800706 0.190909 0.670169Z"
        fill="#333439"
      />
      <mask id="mask0_4443_28221" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="9">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.190909 0.670169C0.445455 0.409097 0.827273 0.409097 1.08182 0.670169L7 6.7401L12.9182 0.670169C13.1727 0.409097 13.5545 0.409097 13.8091 0.670169C14.0636 0.931242 14.0636 1.32285 13.8091 1.58392L7 8.56761L0.190909 1.58392C0.0636364 1.45339 0 1.29022 0 1.12705C0 0.963876 0.0636364 0.800706 0.190909 0.670169Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_4443_28221)">
        <rect
          x="14"
          y="-2.66666"
          width="14.359"
          height="14"
          transform="rotate(90 14 -2.66666)"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default AngleDownIcon
