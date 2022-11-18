import languages from './languages.json'
import timezones from './timezones.json'
import * as Yup from 'yup'

const REQUIRED_ERROR_MESSAGE = 'Required'
const phoneRegExp =
  /^((\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ProfileInfoFields = [
  { name: 'name', type: 'text', label: 'Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  { name: 'phone', type: 'tel', label: 'Phone' },
]

export const ProfileInfoFieldsValidationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  email: Yup.string().email().required(REQUIRED_ERROR_MESSAGE),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
})

export const PreferencesFields = [
  { name: 'timeZone', type: 'select', label: 'Time zone', required: true, options: timezones }, // TODO: decide timezone data format
  { name: 'language', type: 'select', label: 'Language', required: true, options: languages },
]

export const PreferencesFieldsValidationSchema = Yup.object().shape({
  timeZone: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  language: Yup.string().required(REQUIRED_ERROR_MESSAGE),
})
