import * as Yup from 'yup'

const REQUIRED_ERROR_MESSAGE = 'required'

export const steps = [
  { title: 'Customer information', completed: false, active: true },
  { title: 'Provision products', completed: false, active: false },
  { title: 'Summary', completed: false, active: false },
]

export const initialValues = {
  generalInformation: {
    organization: '',
    firstName: '',
    lastName: '',
    email: '',
    billingAddress: {
      country: { value: 'bg', title: 'Bulgaria' },
      state: { value: 'cf', title: 'California' },
      city: { value: 'cf', title: 'California' },
      postCode: '',
      streetAddressOne: '',
      streetAddressTwo: '',
    },
  },
}

export const validationSchema = Yup.object().shape({
  generalInformation: Yup.object().shape({
    organization: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    firstName: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    lastName: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    email: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    billingAddress: Yup.object().shape({
      country: Yup.object().shape({
        value: Yup.string().required(),
        title: Yup.string().required(),
      }),
      state: Yup.object().shape({
        value: Yup.string().required(),
        title: Yup.string().required(),
      }),
      city: Yup.object().shape({
        value: Yup.string().required(),
        title: Yup.string().required(),
      }),
      postCode: Yup.string().required(REQUIRED_ERROR_MESSAGE),
      streetAddressOne: Yup.string().required(REQUIRED_ERROR_MESSAGE),
      streetAddressTwo: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    }),
  }),
})
