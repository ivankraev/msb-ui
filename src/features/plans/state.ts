import { ProductsSliceState } from './productsSlice'
import products from '../../mocks/products-state.json'

export const initialState: ProductsSliceState = {
  error: true,
  selectedPlanName: { value: '' },
  selectedProducts: [],
  products: products,
}
