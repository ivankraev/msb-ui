import { isValidNumber } from './utils/isValidNumber'
import { isValidName } from './utils/isValidName'
import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SelectOption } from '@msp/shared/interfaces/select-option.interface'
import { Seat, Product } from '@msp/shared/interfaces/plans.interface'
import { initialState } from '@msp/features/plans/state'
import { useAppDispatch } from '@msp/redux/hooks'

export interface ProductsSliceState {
  error: boolean
  selectedPlanName: { value: string; error?: string }
  products: Product[]
  selectedProducts: Product[]
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeSelectedProducts: (state, action: PayloadAction<Product>) => {
      const product = state.products.find((prod) => prod.title === action.payload.title) as Product

      product.selected = !product.selected

      if (!product.selected) {
        state.selectedProducts = state.selectedProducts.filter(
          (prod) => prod.value !== product.value,
        )
        return
      }

      // We deep clone the object because otherwise it will keep the same reference
      // and we want different objects in products and selectedProducts
      const obj = JSON.parse(JSON.stringify(product))
      state.selectedProducts.push(obj)

      if (!isValidNumber(product.seats.value)) {
        const selectedProducts = state.selectedProducts.find(
          (prod) => prod.value === product.value,
        ) as Product

        selectedProducts.seats.error = 'Please select a valid number'
      }
    },
    changeSelectedOption: (state: ProductsSliceState, action: PayloadAction<SelectOption>) => {
      const product = state.products.find(
        (prod) => prod.value === action.payload.accessor,
      ) as Product

      const type = action.payload.type as keyof Product

      if (type === 'packages') {
        product[type].selectedOption = action.payload
      } else if (type === 'policies') {
        product[type].selectedOption = action.payload
      } else return

      const selectedProduct = state.selectedProducts.find(
        (prod) => prod.value === action.payload.accessor,
      ) as Product

      selectedProduct[type].selectedOption = action.payload
    },
    selectPlan: (state, action: PayloadAction<string>) => {
      if (!isValidName(action.payload)) {
        state.selectedPlanName.error = 'Please enter a valid name'
        state.error = true
        return
      }

      state.selectedPlanName.error = undefined
      state.selectedPlanName.value = action.payload
    },
    selectSeats: (state, action: PayloadAction<Seat>) => {
      const payload = action.payload

      const product = state.products.find((prod) => prod.value === payload.accessor) as Product
      const selectedProduct = state.selectedProducts.find(
        (prod) => prod.value === payload.accessor,
      ) as Product

      // We need to keep the error in sync with all the products and selected products
      // becouse initially we dont want to colorized the fields in red
      if (!isValidNumber(payload.value)) {
        product.seats.error = 'Please, enter a valid number'
        selectedProduct.seats.error = 'Please enter a valid number'
        product.seats.value = payload.value
        selectedProduct.seats.value = payload.value

        return
      }

      product.seats.error = undefined
      product.seats.value = payload.value
      selectedProduct.seats.error = undefined
      selectedProduct.seats.value = payload.value
    },
    checkForErrors: (state) => {
      state.error = false

      const isAnyProductSelected = state.selectedProducts.length > 0
      if (!isAnyProductSelected) {
        state.error = true
        return
      }

      const isPlanNameBad =
        state.selectedPlanName.error !== undefined || state.selectedPlanName.value === ''

      const isSeatsFieldBad = state.selectedProducts.find((prod) => prod.seats.error !== undefined)
      if (isPlanNameBad || isSeatsFieldBad) {
        state.error = true
      }
    },
    resetState: (): ProductsSliceState => {
      return initialState
    },
  },
})

export default productsSlice.reducer
const actions = productsSlice.actions

export const productsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
