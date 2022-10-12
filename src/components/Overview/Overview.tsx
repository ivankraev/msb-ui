import React from 'react'

import { linkType } from './types'

import s from './Overview.scss'
import BigCard from './BigCard'
import SmallCard from './SmallCard'
import CiscoUmbrellaIcon from '@msp/components/icons/CiscoUmbrellaIcon'
import SecurityEndpointIcon from '@msp/components/icons/SecurityEndpointIcon'
import Container from '@common/Container'

const Overview: React.FC = () => {
  const totalCustomersLink: linkType = {
    linkTitle: 'manage customers',
    linkAddress: '/customers',
  }

  return (
    <Container label="Overview">
      <div>
        <div className={s.cardContainer}>
          <BigCard title={'Total customers'} count={172} link={totalCustomersLink} />
          <BigCard title={'Signed products'} count={4} />
        </div>
        <div className={s.cardContainer}>
          <SmallCard
            title={'Umbrella'}
            count={138}
            linkAddress={'/umbrela'}
            icon={() => <CiscoUmbrellaIcon />}
            bgColor={s.purpleColor}
          />
          <SmallCard
            title={'Secure Endpoints'}
            count={32}
            linkAddress={'/secure'}
            icon={() => <SecurityEndpointIcon />}
            bgColor={s.darkBlue}
          />
          <SmallCard title={'DUO'} linkAddress={'/dou'} bgColor={s.greyColor} isActive={false} />
          <SmallCard title={'CMD'} count={12} linkAddress={'/cmd'} bgColor={s.lightBlue} />
          <SmallCard title={'SecureX'} count={54} linkAddress={'/securex'} bgColor={s.blackColor} />
        </div>
      </div>
    </Container>
  )
}

export default Overview
