import React from 'react'
import { Link } from 'react-router-dom'
import { UserInfo } from '@msp/shared/interfaces/user.interface'
import { useLogoutMutation } from '@msp/features/api/userApiSlice'

import s from './UserMenu.scss'
import OrganizationsMenu from './components/OrganizationsMenu'
import Button from '@msp/components/common/Button'
import Tooltip from '@common/Tooltip'

interface Props {
  userInfo: UserInfo
}

const UserMenu: React.FC<Props> = ({ userInfo }) => {
  const { name, email } = userInfo
  const [logout] = useLogoutMutation()

  return (
    <div className={s.container} data-testid="user-menu">
      <div className={s.userName}>{name}</div>
      <div className={s.userEmail}>{email}</div>
      <ul className={s.linksList}>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
        <li>
          <Link to="#" onClick={() => logout()}>
            Sign Out
          </Link>
        </li>
      </ul>
      <hr />
      <OrganizationsMenu userInfo={userInfo} />
      <hr />
      <ul className={s.linksList}>
        <li>
          <Tooltip text="Coming soon...">
            <Link to="/documentation">Documentation</Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip text="Coming soon...">
            <Link to="/terms-download">Download terms and conditions</Link>
          </Tooltip>
        </li>
      </ul>
      <hr />
      <div className={s.ctaLabel}>Experiencing an issue or have a feature request?</div>
      <Tooltip text="Coming soon..." fullWidth>
        <Button className={s.fullWidthCta}>Request a feature</Button>
      </Tooltip>
      <div className={s.ctaLabel}>Need assistance?</div>
      <Tooltip text="Coming soon..." fullWidth>
        <Button contained className={s.fullWidthCta}>
          Support
        </Button>
      </Tooltip>
    </div>
  )
}

export default UserMenu
