import React from 'react'
import { Link } from 'react-router-dom'
import s from './Overview.scss'

type SmallCardProps = {
  title: string
  count?: number
  linkAddress?: string
  icon?: () => JSX.Element
  bgColor?: string
  isActive?: boolean
}

const SmallCard = ({
  title,
  count,
  linkAddress,
  bgColor = s.greyColor,
  isActive,
  icon,
}: SmallCardProps) => {
  return (
    <Link to={linkAddress || '/'} style={{ textDecoration: 'none' }}>
      <div className={s.smallCard} style={{ borderTop: `4px solid ${bgColor}` }}>
        <div>{icon && React.createElement(icon)}</div>
        <div className={isActive === false ? s.notActive : 'active'}>
          <div className={s.title}>
            <strong>{title} customers</strong>
          </div>
          <div className={s.count}>
            {(count && <strong>{count}</strong>) || <span>Not Active</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SmallCard
