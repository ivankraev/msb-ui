import * as React from 'react'
import variables from '@msp/theme/variables.scss'

interface Props {
  onClick: () => void
}

const SvgComponent = ({ onClick }: Props) => (
  <svg
    style={{ cursor: 'pointer' }}
    onClick={onClick}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.273 0H.727A.73.73 0 0 0 0 .727v14.546c0 .4.327.727.727.727h14.546a.73.73 0 0 0 .727-.727V.727A.73.73 0 0 0 15.273 0ZM5.709 6.182h1.564v-2.91c0-.4.327-.727.727-.727.4 0 .727.328.727.728v2.909h1.564c.255 0 .327.182.182.363L8 10.182 5.527 6.545c-.145-.181-.072-.363.182-.363Zm7.018 7.272H3.273a.73.73 0 0 1-.728-.727c0-.4.328-.727.728-.727h9.454c.4 0 .727.327.727.727a.73.73 0 0 1-.727.727Z"
      fill="#39393B"
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
      height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.273 0H.727A.73.73 0 0 0 0 .727v14.546c0 .4.327.727.727.727h14.546a.73.73 0 0 0 .727-.727V.727A.73.73 0 0 0 15.273 0ZM5.709 6.182h1.564v-2.91c0-.4.327-.727.727-.727.4 0 .727.328.727.728v2.909h1.564c.255 0 .327.182.182.363L8 10.182 5.527 6.545c-.145-.181-.072-.363.182-.363Zm7.018 7.272H3.273a.73.73 0 0 1-.728-.727c0-.4.328-.727.728-.727h9.454c.4 0 .727.327.727.727a.73.73 0 0 1-.727.727Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path fill={variables.primaryColor} d="M16 16H0V0h16z" />
    </g>
  </svg>
)

export default SvgComponent
