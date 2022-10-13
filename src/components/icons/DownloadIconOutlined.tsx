import React from 'react'

interface Props {
  link: string
}

const DownloadIconOutlined = ({ link }: Props) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2727 15.4928H0.727273C0.327273 15.4928 0 15.8201 0 16.2201C0 16.6201 0.327273 16.9474 0.727273 16.9474H15.2727C15.6727 16.9474 16 16.6201 16 16.2201C16 15.8201 15.6727 15.4928 15.2727 15.4928ZM8 11.4928L11.2 6.87466C11.3818 6.62012 11.2727 6.40193 10.9455 6.40193H8.72727V1.67466C8.72727 1.27466 8.4 0.947388 8 0.947388C7.6 0.947388 7.27273 1.27466 7.27273 1.67466V6.40193H5.05455C4.72727 6.40193 4.61818 6.62012 4.8 6.87466L8 11.4928Z"
        fill="#049FD9"
      />
      <mask
        id="mask0_4080_10289"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="17">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2727 15.4928H0.727273C0.327273 15.4928 0 15.8201 0 16.2201C0 16.6201 0.327273 16.9474 0.727273 16.9474H15.2727C15.6727 16.9474 16 16.6201 16 16.2201C16 15.8201 15.6727 15.4928 15.2727 15.4928ZM8 11.4928L11.2 6.87466C11.3818 6.62012 11.2727 6.40193 10.9455 6.40193H8.72727V1.67466C8.72727 1.27466 8.4 0.947388 8 0.947388C7.6 0.947388 7.27273 1.27466 7.27273 1.67466V6.40193H5.05455C4.72727 6.40193 4.61818 6.62012 4.8 6.87466L8 11.4928Z"
          fill="white"
        />
      </mask>
      <a href={link}>
        <g mask="url(#mask0_4080_10289)">
          <rect
            x="16"
            y="16.9474"
            width="16"
            height="16"
            transform="rotate(-180 16 16.9474)"
            fill="#049FD9"
          />
        </g>
      </a>
    </svg>
  )
}

export default DownloadIconOutlined
