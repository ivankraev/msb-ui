import { useAppDispatch } from '@msp/redux/hooks'
import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CertFile } from '@msp/shared/interfaces/certfile.interface'
import { AxiosError } from 'axios'
import { formatSize } from '@msp/utils/size-format'

export interface SettingsSliceState {
  mspName: string | null
  logo: string | null
  certificate: {
    file: CertFile | null
    error: Partial<AxiosError> | null
  }
}

export const initialState: SettingsSliceState = {
  mspName: 'Acme Widgets',
  logo: 'company-logo.png',
  certificate: {
    file: null,
    error: null,
  },
}

const SettingsSLice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeCertificateSuccess: (state, action: PayloadAction<CertFile>): SettingsSliceState => {
      const file = action.payload

      formatSize(file)
      // return the result
      return { ...state, certificate: { file, error: null } }
    },
    changeCertificateFail: (
      state,
      action: PayloadAction<Partial<AxiosError>>,
    ): SettingsSliceState => {
      return { ...state, certificate: { ...state.certificate, error: action.payload } }
    },
  },
})

export default SettingsSLice.reducer
const actions = SettingsSLice.actions

export const settingsActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
