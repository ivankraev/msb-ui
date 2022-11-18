import React from 'react'
import { useGetProductsQuery, useGetTotalCustomersQuery } from '@msp/features/api/productApiSlice'
import { linkType } from './types'
import { links } from '@msp/routes/links'
import Container from '@common/Container'
import EmptyStateComponent from '@common/EmptyState/EmptyStateComponent'
import LoadingComponent from '@common/LoadingComponent'
import BigCard from '@msp/components/Overview/components/BigCard'
import SmallCard from '@msp/components/Overview/components/SmallCard'
import s from './Overview.scss'

const colors = {
  0: 'blackColor',
  1: 'darkBlue',
  2: 'greyColor',
  3: 'lightBlue',
  4: 'purpleColor',
}

const Overview: React.FC = () => {
  const totalCustomersLink: linkType = {
    linkTitle: 'manage customers',
    linkAddress: links.customer_management.customers.index,
  }

  const { data: products = [], isFetching: fetchingProducts } = useGetProductsQuery()
  const { data: totalCustomers = 0, isFetching: fetchingCustomers } = useGetTotalCustomersQuery()

  if (fetchingCustomers || fetchingProducts) {
    return (
      <Container label="Overview" styles={s.container}>
        <LoadingComponent message="We are loading your products" />
      </Container>
    )
  } else if (products?.length === 0 && !totalCustomers) {
    return (
      <Container label="Overview" styles={s.container}>
        <EmptyStateComponent message="You have no products and no customers" />
      </Container>
    )
  }

  return (
    <Container label="Overview" styles={s.container}>
      <div>
        <div className={s.cardContainer}>
          <BigCard title={'Total customers'} count={totalCustomers} link={totalCustomersLink} />
          <BigCard title={'Signed products'} count={products.length} />
        </div>
        <div className={s.cardContainer}>
          {products?.map((product, i) => (
            <SmallCard
              key={product.id}
              title={product.shortName || product.name}
              count={product.totalCustomers}
              linkAddress={''}
              logoUrl={product.logoUrl}
              bgColor={s[colors[i as keyof typeof colors]]}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Overview
