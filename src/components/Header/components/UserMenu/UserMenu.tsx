import React from 'react'
import { Link } from 'react-router-dom'
import { UserInfo } from '@msp/shared/interfaces/user.interface'

import s from './UserMenu.scss'
import OrganizationsMenu from './components/OrganizationsMenu'
import Button from '@msp/components/common/Button'

interface Props {
  userInfo: UserInfo
}

const UserMenu: React.FC<Props> = ({ userInfo }) => {
  const { name, email } = userInfo

  return (
    <div className={s.container} data-testid="user-menu">
      <div className={s.userName}>{name}</div>
      <div className={s.userEmail}>{email}</div>
      <ul className={s.linksList}>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
        <li>
          <Link to="#">Sign Out</Link>
        </li>
      </ul>
      <hr />
      <OrganizationsMenu userInfo={userInfo} />
      <hr />
      <ul className={s.linksList}>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/terms-download">Download terms and conditions</Link>
        </li>
      </ul>
      <hr />
      <div className={s.ctaLabel}>Experiencing an issue or have a feature request?</div>
      <Button className={s.fullWidthCta}>Request a feature</Button>
      <div className={s.ctaLabel}>Need assistance?</div>
      <Button contained className={s.fullWidthCta}>
        Support
      </Button>
    </div>
  )
}

export default UserMenu
