import * as Yup from 'yup'

export const CERT_ALLOWED_FORMATS = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const REQUIRED_ERROR_MESSAGE = 'Required'

export const MspSettingsFields = [{ name: 'name', type: 'text', label: 'MSP name', required: true }]
export const AdditionalSettingsFields = [
  {
    name: 'certificate',
    type: 'file',
    label: 'Tax certificate',
    accept: CERT_ALLOWED_FORMATS.join(','),
    required: true,
  },
]

export const MspSettingsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim('The name cannot include leading and trailing spaces')
    .strict(true)
    .required(REQUIRED_ERROR_MESSAGE),
})

export const TaxSettingsValidationSchema = Yup.object().shape({
  certificate: Yup.mixed().required(REQUIRED_ERROR_MESSAGE),
})
