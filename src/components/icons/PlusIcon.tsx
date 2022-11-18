import React from 'react'

const PlusIcon = () => {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.273 7.273H8.727V.727A.73.73 0 0 0 8 0a.73.73 0 0 0-.727.727v6.546H.727A.73.73 0 0 0 0 8c0 .4.327.727.727.727h6.546v6.546c0 .4.327.727.727.727a.73.73 0 0 0 .727-.727V8.727h6.546A.73.73 0 0 0 16 8a.73.73 0 0 0-.727-.727Z"
        fill="#049FD9"
      />
      <mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.273 7.273H8.727V.727A.73.73 0 0 0 8 0a.73.73 0 0 0-.727.727v6.546H.727A.73.73 0 0 0 0 8c0 .4.327.727.727.727h6.546v6.546c0 .4.327.727.727.727a.73.73 0 0 0 .727-.727V8.727h6.546A.73.73 0 0 0 16 8a.73.73 0 0 0-.727-.727Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#049FD9" d="M16 16H0V0h16z" />
      </g>
    </svg>
  )
}

export default PlusIcon
