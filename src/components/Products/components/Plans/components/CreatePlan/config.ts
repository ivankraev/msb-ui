import { useGetProductsQuery } from '@msp/features/api/productApiSlice'
import { Product } from '@msp/shared/interfaces/plans.interface'
import { productsIntoInitialValues } from '@msp/utils/products-into-initial-values'
import { useMemo } from 'react'
import * as Yup from 'yup'

const REQUIRED_ERROR_MESSAGE = 'required'
const POSITIVE_ERROR_MESSAGE = 'must be positive'
const INTEGER_ERROR_MESSAGE = 'must be integer'
const NUMBER_ERROR_MESSAGE = 'must be number'

export const steps = [
  { title: 'Products', completed: false, active: true },
  { title: 'Summary', completed: false, active: false },
]

export const useInitialProductsValues = () => {
  const { data: products } = useGetProductsQuery()

  const initialProductsValues = useMemo(
    () => productsIntoInitialValues(products),
    [products],
  ) as Product[]

  const validationSchema = Yup.object().shape({
    plan: Yup.string().required(REQUIRED_ERROR_MESSAGE).max(50),
    products: Yup.array().of(
      Yup.object().shape({
        selected: Yup.boolean(),
        seats: Yup.number().when('selected', {
          is: true,
          then: Yup.number()
            .typeError(NUMBER_ERROR_MESSAGE)
            .positive(POSITIVE_ERROR_MESSAGE)
            .integer(INTEGER_ERROR_MESSAGE)
            .required(),
        }),
      }),
    ),
  })

  return {
    initialValues: { plan: '', products: initialProductsValues },
    validationSchema,
  }
}
