import React from 'react'
import CheckboxItem from '@common/CheckboxItem'
import { Product } from '@msp/shared/interfaces/plans.interface'
import { FormikErrors } from 'formik'
import { initialValues } from '@msp/components/Products/components/Plans/components/CreatePlan/config'

interface Props {
  product: Product
  products: typeof initialValues.products
  onClick: (
    field: string,
    value: boolean,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<typeof initialValues>> | Promise<void>
}

const ProductHeader = ({ product, products, onClick }: Props) => {
  const { value, title } = product
  const typedValue = value as keyof typeof products
  const isSelected = products[typedValue].selected

  const selectProductHandler = () => {
    onClick(`products.${value}.selected`, !isSelected)
  }

  return (
    <CheckboxItem label={title} checked={isSelected} onClick={selectProductHandler} strong={true} />
  )
}
export default ProductHeader
