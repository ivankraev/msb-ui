import { useGetProductsQuery } from '@msp/features/api/productApiSlice'
import { useGetPlanQuery } from '@msp/features/api/planApiSlice'
import { Product } from '@msp/shared/interfaces/plans.interface'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { productsIntoInitialValues } from '@msp/utils/products-into-initial-values'

export const steps = [
  { title: 'Products', completed: false, active: true },
  { title: 'Summary', completed: false, active: false },
]

const REQUIRED_ERROR_MESSAGE = 'required'
const POSITIVE_ERROR_MESSAGE = 'must be positive'
const INTEGER_ERROR_MESSAGE = 'must be integer'
const NUMBER_ERROR_MESSAGE = 'must be number'

export const useEditPlanInitialValues = () => {
  const { id } = useParams()

  const { data: products } = useGetProductsQuery()
  const { data: plan } = useGetPlanQuery(id as string)

  const availableProducts = useMemo(() => productsIntoInitialValues(products), [products])

  const notSelectedProducts = useMemo(
    () =>
      availableProducts?.filter((product) =>
        plan?.options.every((option) => product.id !== option.product.id),
      ) || [],
    [plan, availableProducts],
  ) as Product[]

  const selectedProducts = useMemo(
    () =>
      plan?.options.map((option) => ({
        id: option.product.id,
        title: option.product.name,
        value: option.product.value,
        seats: parseInt(option.avaiableSeats),
        selected: true,
        package: { value: option.package, title: option.package },
        policy: { value: option.policy, title: option.policy },
      })) || [],
    [plan, availableProducts],
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
    initialValues: {
      plan: plan?.name as string,
      id: plan?.id,
      products: [...selectedProducts, ...notSelectedProducts],
    },
    validationSchema,
  }
}
