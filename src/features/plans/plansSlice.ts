import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SelectOption } from '@msp/shared/interfaces/select-option.interface'
import { Seat, Service } from '@msp/shared/interfaces/plans.interface'
import { initialState } from '@msp/features/plans/state'
import { useAppDispatch } from '@msp/redux/hooks'

export interface PlansSliceState {
  selectedPlanName: { value: string; error?: string }
  services: Service[]
  selectedServices: Service[]
}

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    changeSelectedServices: (state, action: PayloadAction<Service>) => {
      const service = state.services.find((service) => service.title === action.payload.title)
      if (!service) return

      service.selected = !service.selected

      if (service.selected) {
        state.selectedServices.push(service)
      } else {
        state.selectedServices = state.selectedServices.filter((svc) => svc.value !== service.value)
      }
    },
    changeSelectedOption: (state: PlansSliceState, action: PayloadAction<SelectOption>) => {
      const service = state.services.find((service) => service.value === action.payload.accessor)
      if (!service) return

      const type = action.payload.type as keyof Service

      if (type === 'packageOptions') {
        service[type].selectedOption = action.payload
      } else if (type === 'policies') {
        service[type].selectedOption = action.payload
      } else return

      const selectedService = state.selectedServices.find(
        (svc) => svc.value === action.payload.accessor,
      )
      if (!selectedService) return

      selectedService[type].selectedOption = action.payload
    },
    selectPlan: (state, action: PayloadAction<string>) => {
      if (action.payload.length < 1 || action.payload.length > 80) {
        state.selectedPlanName.error = 'Please enter a valid name'
        return
      }

      state.selectedPlanName.error = undefined

      state.selectedPlanName.value = action.payload
    },
    selectSeats: (state, action: PayloadAction<Seat>) => {
      const payload = action.payload

      const service = state.services.find((svc) => svc.value === payload.accessor)
      if (!service) return

      if (!Number.isInteger(payload.value) || payload.value < 1) {
        service.seats.error = 'Please, enter a valid number'
        service.seats.value = payload.value
        return
      }

      service.seats.error = undefined

      service.seats.value = payload.value

      const selectedService = state.selectedServices.find(
        (svc) => svc.value === action.payload.accessor,
      )
      if (!selectedService) return
      selectedService.seats.value = action.payload.value
    },
    resetState: (): PlansSliceState => {
      return initialState
    },
  },
})

export default plansSlice.reducer
const actions = plansSlice.actions

export const plansActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
