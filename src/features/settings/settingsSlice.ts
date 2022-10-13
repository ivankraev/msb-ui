import { useAppDispatch } from '@msp/redux/hooks'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'

interface FileWithURL extends File {
  downloadUrl: string
}

export interface SettingsSliceState {
  mspName: string | null
  logo: string | null
  certificate: {
    file: FileWithURL | null
    error: string | null
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
  name: 'user',
  initialState,
  reducers: {
    changeCertificateSuccess: (state, action): SettingsSliceState => {
      const file = action.payload as File

      const proxyHandler = {
        get(obj: FileWithURL, prop: keyof FileWithURL) {
          const url = URL.createObjectURL(file)

          obj.downloadUrl = url

          if (prop === 'name' && obj[prop].length > 20) {
            return obj[prop].slice(0, 20).concat('...')
          }

          return obj[prop]
        },
      }

      const proxyFile = new Proxy(file as FileWithURL, proxyHandler)

      return { ...state, certificate: { file: proxyFile, error: null } }
    },
    changeCertificateFail: (state, action): SettingsSliceState => {
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
