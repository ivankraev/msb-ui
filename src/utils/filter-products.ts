import { initialValues } from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import { Product } from '@msp/shared/interfaces/plans.interface'

export const filterProducts = (products: typeof initialValues.products) => {
  return Object.keys(products)
    .map((key) => {
      if (products[key as keyof typeof products].selected === true) {
        return products[key as keyof typeof products]
      }
    })
    .filter((prod) => prod !== undefined) as Product[]
}
