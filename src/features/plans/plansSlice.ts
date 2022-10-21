import { isValidNumber } from './utils/isValidNumber'
import { isValidName } from './utils/isValidName'
import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SelectOption } from '@msp/shared/interfaces/select-option.interface'
import { Seat, Service } from '@msp/shared/interfaces/plans.interface'
import { initialState } from '@msp/features/plans/state'
import { useAppDispatch } from '@msp/redux/hooks'

export interface PlansSliceState {
  error: boolean
  selectedPlanName: { value: string; error?: string }
  services: Service[]
  selectedServices: Service[]
}

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    changeSelectedServices: (state, action: PayloadAction<Service>) => {
      const service = state.services.find(
        (service) => service.title === action.payload.title,
      ) as Service

      service.selected = !service.selected

      if (!service.selected) {
        state.selectedServices = state.selectedServices.filter((svc) => svc.value !== service.value)
        return
      }

      // We deep clone the object because otherwise it will keep the same reference
      // and we want different objects in services and selectServices
      const obj = JSON.parse(JSON.stringify(service))
      state.selectedServices.push(obj)

      if (!isValidNumber(service.seats.value)) {
        const selectedService = state.selectedServices.find(
          (svc) => svc.value === service.value,
        ) as Service

        selectedService.seats.error = 'Please select a valid number'
      }
    },
    changeSelectedOption: (state: PlansSliceState, action: PayloadAction<SelectOption>) => {
      const service = state.services.find(
        (service) => service.value === action.payload.accessor,
      ) as Service

      const type = action.payload.type as keyof Service

      if (type === 'packages') {
        service[type].selectedOption = action.payload
      } else if (type === 'policies') {
        service[type].selectedOption = action.payload
      } else return

      const selectedService = state.selectedServices.find(
        (svc) => svc.value === action.payload.accessor,
      ) as Service

      selectedService[type].selectedOption = action.payload
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

      const service = state.services.find((svc) => svc.value === payload.accessor) as Service
      const selectedService = state.selectedServices.find(
        (svc) => svc.value === payload.accessor,
      ) as Service

      // We need to keep the error in sync with all the services and selected services
      // becouse initially we dont want to colorized the fields in red
      if (!isValidNumber(payload.value)) {
        service.seats.error = 'Please, enter a valid number'
        selectedService.seats.error = 'Please enter a valid number'
        service.seats.value = payload.value
        selectedService.seats.value = payload.value

        return
      }

      service.seats.error = undefined
      service.seats.value = payload.value
      selectedService.seats.error = undefined
      selectedService.seats.value = payload.value
    },
    checkForErrors: (state) => {
      state.error = false

      const isAnyServiceSelected = state.selectedServices.length > 0
      if (!isAnyServiceSelected) {
        state.error = true
        return
      }

      const isPlanNameBad =
        state.selectedPlanName.error !== undefined || state.selectedPlanName.value === ''

      const isSeatsFieldBad = state.selectedServices.find((svc) => svc.seats.error !== undefined)
      if (isPlanNameBad || isSeatsFieldBad) {
        state.error = true
      }
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
