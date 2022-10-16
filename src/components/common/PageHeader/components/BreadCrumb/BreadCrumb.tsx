import React from 'react'
import { Link } from 'react-router-dom'
import { ActiveRoutePath } from '@msp/shared/interfaces/active-route-path.interface'
import { useActiveRoutePaths } from '@msp/hooks/useActiveRoutes'
import routes from '@msp/routes/main'
import s from './BreadCrumb.scss'

const BreadCrumb = () => {
  const activeRoutePaths: ActiveRoutePath[] = useActiveRoutePaths(routes)

  return (
    <div className={s.container}>
      <ul>
        {activeRoutePaths.map((active, index, { length }) => (
          <li key={index}>
            {length > 1 && index !== 0 ? (
              <Link className={s.active} to={active.match.pathname}>
                {active.title}
              </Link>
            ) : (
              <>{active.title}</>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BreadCrumb
