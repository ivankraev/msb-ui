import React from 'react'
import Button from '@common/Button'
import { Product } from '@msp/shared/interfaces/plans.interface'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import ProductsTable from '@msp/components/Products/components/Plans/components/CreatePlan/components/ProvisionedProducts/components/ProductsTable'
import s from './ProvisionedProducts.scss'

interface Props {
  products: Product[]
  planName: string
  onChangeHandler: () => void
}
const ProvisionedProducts = ({ products, planName, onChangeHandler }: Props) => {
  return (
    <>
      <HeaderComponent label="Provisioned products" styles={s.header}>
        <Button onClick={onChangeHandler}>change</Button>
      </HeaderComponent>
      <ProductsTable planName={planName} products={products} />
    </>
  )
}

export default ProvisionedProducts
