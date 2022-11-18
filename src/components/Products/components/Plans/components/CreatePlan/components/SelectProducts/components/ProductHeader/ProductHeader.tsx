import React from 'react'
import CheckboxItem from '@common/CheckboxItem'
import { Product } from '@msp/shared/interfaces/plans.interface'

interface Props {
  product: Product
  index: number
  onClick: (field: string, value: boolean, shouldValidate?: boolean | undefined) => void
}

const ProductHeader = ({ product, onClick, index }: Props) => {
  const { title, selected } = product

  const selectProductHandler = () => {
    onClick(`products[${index}].selected`, !selected)
  }

  return (
    <CheckboxItem label={title} checked={selected} onClick={selectProductHandler} strong={true} />
  )
}
export default ProductHeader
