import { useAppDispatch } from '@msp/redux/hooks'
import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PaymentMethod {
  cardNumber: string
  holderName: string
  address: string
  exemptionType: string
  taxExemptionElegibility: boolean
  providerType: 'visa' | 'mastercard'
  isPrimary: boolean
}

export interface PaymentMethodsSettingsSliceState {
  paymentMethods: PaymentMethod[]
}

// Uncomment when have API to manage it
// export const initialState: PaymentMethodsSliceState = {
//   paymentMethods: [],
// }

export const initialState: PaymentMethodsSettingsSliceState = {
  paymentMethods: [
    {
      cardNumber: '6712871593613421',
      holderName: 'Acme Widgets Ltd.',
      address: '627 Bright Farm, Philadelphia, DC 37246',
      exemptionType: 'Reseller',
      taxExemptionElegibility: true,
      providerType: 'mastercard',
      isPrimary: true,
    },
    {
      cardNumber: '5341764287510412',
      holderName: 'Alpha Corp.',
      address: '512 Wolf St, Chicago, IL 42721',
      exemptionType: 'Reseller',
      taxExemptionElegibility: false,
      providerType: 'visa',
      isPrimary: false,
    },
  ],
}

const paymentMethodsSettingsSlice = createSlice({
  name: 'paymentMethodsSettings',
  initialState,
  reducers: {
    addPaymentMethod: (
      state,
      action: PayloadAction<PaymentMethod>,
    ): PaymentMethodsSettingsSliceState => {
      const paymentMethod = action.payload

      return { ...state, paymentMethods: [...state.paymentMethods, paymentMethod] }
    },
  },
})

export default paymentMethodsSettingsSlice.reducer
const actions = paymentMethodsSettingsSlice.actions

export const paymentMethodsSettingsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
