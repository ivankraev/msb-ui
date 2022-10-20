import React from 'react'
import { Link } from 'react-router-dom'
import { linkType } from '../types'
import s from '../Overview.scss'

type BigCardProps = {
  title: string
  count: number
  link?: linkType
}

const BigCard = ({ title, count, link }: BigCardProps) => {
  return (
    <div className={s.bigCard}>
      <div>{title}</div>
      <div className={s.count}>{count}</div>
      {link && (
        <Link to={link?.linkAddress || '/'} className={s.link}>
          <strong>{link?.linkTitle}</strong>
        </Link>
      )}
    </div>
  )
}

export default BigCard
