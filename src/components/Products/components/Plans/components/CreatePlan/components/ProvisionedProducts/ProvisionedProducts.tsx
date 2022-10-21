import React from 'react'
import Button from '@common/Button'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import ServiceTable from '@msp/components/Products/components/Plans/components/CreatePlan/components/ProvisionedProducts/components/ServiceTable'
import { Service } from '@msp/shared/interfaces/plans.interface'
import s from './ProvisionedProducts.scss'

interface Props {
  services: Service[]
  planName: string
  onChangeHandler: () => void
}
const ProvisionedProducts = ({ services, planName, onChangeHandler: changeHandler }: Props) => {
  return (
    <>
      <HeaderComponent label="Provisioned products" styles={s.header}>
        <Button onClick={changeHandler}>change</Button>
      </HeaderComponent>
      <ServiceTable planName={planName} services={services} />
    </>
  )
}

export default ProvisionedProducts
