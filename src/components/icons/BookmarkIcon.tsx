import React from 'react'

const BookmarkIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6667 0H3.33333C2.96667 0 2.66667 0.3 2.66667 0.666667V16L8 10.6667L13.3333 16V0.666667C13.3333 0.3 13.0333 0 12.6667 0Z"
        fill="#DFDFDF"
      />
      <mask id="mask0_3966_30466" maskUnits="userSpaceOnUse" x="2" y="0" width="12" height="16">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6667 0H3.33333C2.96667 0 2.66667 0.3 2.66667 0.666667V16L8 10.6667L13.3333 16V0.666667C13.3333 0.3 13.0333 0 12.6667 0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3966_30466)">
        <rect
          x="15.6667"
          y="16"
          width="16"
          height="16"
          transform="rotate(-180 15.6667 16)"
          fill="#DFDFDF"
        />
      </g>
    </svg>
  )
}

export default BookmarkIcon
