import React from 'react'
import { Link } from 'react-router-dom'

import s from './OrganizationsMenu.scss'

import Logo from '@msp/components/common/Logo'
import { UserInfo } from '@msp/shared/interfaces/user.interface'
import Button from '@msp/components/common/Button'

interface Props {
  userInfo: UserInfo
}

const OrganizationsMenu: React.FC<Props> = ({ userInfo }) => {
  const { logo, organization, availableOrganizations } = userInfo
  return (
    <div className={s.container}>
      <div className={s.activeOrganizationContainer}>
        <Logo link={logo!} />
        <div className={s.activeOrganizationInfo}>
          <div>
            <strong>{organization}</strong>
          </div>
          <div>
            <Link to="/settings">Settings</Link>
          </div>
        </div>
      </div>
      {!!availableOrganizations?.length && (
        <div>
          <div className={s.organizationsListDescription}>Log in to another MSP</div>
          <ul className={s.linksList}>
            {availableOrganizations.map((org: string) => (
              <li key={org}>
                <Link to="#">{org}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button className={s.fullWidthCta}>Create New MSP</Button>
    </div>
  )
}

export default OrganizationsMenu
