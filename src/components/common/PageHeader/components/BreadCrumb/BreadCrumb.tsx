import React from 'react'
import s from './BreadCrumb.scss'

const BreadCrumb = () => {
  const paths = window.location.pathname.split('/').filter((path) => path.length > 0)

  return (
    <div className={s.container}>
      <ul>
        {paths.map((path) => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </div>
  )
}

export default BreadCrumb
