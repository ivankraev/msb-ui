import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SelectOption } from '@msp/shared/interfaces/select-option.interface'
import { Seat, Service } from '@msp/shared/interfaces/plans.interface'
import { initialState } from '@msp/features/plans/state'
import { useAppDispatch } from '@msp/redux/hooks'

export interface PlansSliceState {
  selectedPlanName: string
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
      state.selectedPlanName = action.payload
    },
    selectSeats: (state, action: PayloadAction<Seat>) => {
      const service = state.selectedServices.find((svc) => svc.value === action.payload.accessor)
      if (!service) return
      service.seats.value = action.payload.value
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
