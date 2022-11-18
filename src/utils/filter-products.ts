import { Product } from '@msp/shared/interfaces/plans.interface'

export const filterSelectedProducts = (products: Product[]) => {
  return products?.filter((prod) => prod.selected) || []
}
