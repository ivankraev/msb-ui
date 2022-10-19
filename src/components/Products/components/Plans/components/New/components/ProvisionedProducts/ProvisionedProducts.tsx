import React from 'react'
import Button from '@common/Button'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import ServiceTable from '@msp/components/Products/components/Plans/components/New/components/ProvisionedProducts/components/ServiceTable'
import { Service } from '@msp/shared/interfaces/plans.interface'

interface Props {
  services: Service[]
  planName: string
  changeHandler: () => void
}
const ProvisionedProducts = ({ services, planName, changeHandler }: Props) => {
  return (
    <>
      <HeaderComponent label="Provisioned products">
        <Button onClick={changeHandler}>change</Button>
      </HeaderComponent>
      <ServiceTable planName={planName} services={services} />
    </>
  )
}

export default ProvisionedProducts
