import { Product } from '@msp/shared/interfaces/plans.interface'
import * as Yup from 'yup'

const BAD_NUMBER_MESSAGE = 'Must be a valid number'

export const steps = [
  { title: 'Products', completed: false, active: true },
  { title: 'Summary', completed: false, active: false },
]

export const initialValues = {
  plan: '',
  products: {
    umbrella: {
      title: 'Umbrella',
      value: 'umbrella',
      seats: 0,
      selected: false,
      package: { value: 'dnsEssentials', title: 'DNS Essentials' },
      policy: { value: 'defaultPolicy', title: 'Default Policy' },
    },
    secureEndpoint: {
      title: 'Secure Endpoint',
      value: 'secureEndpoint',
      seats: 0,
      selected: false,
      package: { value: 'dnsEssentials', title: 'DNS Essentials' },
      policy: { value: 'defaultPolicy', title: 'Default Policy' },
    },
    duo: {
      title: 'DUO',
      value: 'duo',
      seats: 0,
      selected: false,
      package: { value: 'dnsEssentials', title: 'DNS Essentials' },
      policy: { value: 'defaultPolicy', title: 'Default Policy' },
    },
    cmd: {
      title: 'Cloud Mailbox Defense',
      value: 'cmd',
      seats: 0,
      selected: false,
      package: { value: 'dnsEssentials', title: 'DNS Essentials' },
      policy: { value: 'defaultPolicy', title: 'Default Policy' },
    },
    secureX: {
      title: 'SecureX',
      value: 'secureX',
      seats: 0,
      selected: false,
      package: { value: 'dnsEssentials', title: 'DNS Essentials' },
      policy: { value: 'defaultPolicy', title: 'Default Policy' },
    },
  },
}

export const validationSchema = Yup.object().shape({
  plan: Yup.string().required('Field is required'),
  products: Yup.object().shape({
    umbrella: Yup.object().shape({
      selected: Yup.boolean(),
      seats: Yup.number().when('selected', {
        is: true,
        then: Yup.number().positive().integer().required(BAD_NUMBER_MESSAGE),
      }),
    }),
    secureEndpoint: Yup.object().shape({
      selected: Yup.boolean(),
      seats: Yup.number().when('selected', {
        is: true,
        then: Yup.number().positive().integer().required(BAD_NUMBER_MESSAGE),
      }),
    }),
    duo: Yup.object().shape({
      selected: Yup.boolean(),
      seats: Yup.number().when('selected', {
        is: true,
        then: Yup.number().positive().integer().required(BAD_NUMBER_MESSAGE),
      }),
    }),
    cmd: Yup.object().shape({
      selected: Yup.boolean(),
      seats: Yup.number().when('selected', {
        is: true,
        then: Yup.number().positive().integer().required(BAD_NUMBER_MESSAGE),
      }),
    }),
    secureX: Yup.object().shape({
      selected: Yup.boolean(),
      seats: Yup.number().when('selected', {
        is: true,
        then: Yup.number().positive().integer().required(BAD_NUMBER_MESSAGE),
      }),
    }),
  }),
})

export const products: Product[] = [
  {
    title: 'Umbrella',
    value: 'umbrella',
    seats: 0,
    selected: false,
    package: { value: 'dnsEssentials', title: 'DNS Essentials' },
    policy: { value: 'defaultPolicy', title: 'Default Policy' },
  },
  {
    title: 'Secure Endpoint',
    value: 'secureEndpoint',
    seats: 0,
    selected: false,
    package: { value: 'dnsEssentials', title: 'DNS Essentials' },
    policy: { value: 'defaultPolicy', title: 'Default Policy' },
  },
  {
    title: 'DUO',
    value: 'duo',
    seats: 0,
    selected: false,
    package: { value: 'dnsEssentials', title: 'DNS Essentials' },
    policy: { value: 'defaultPolicy', title: 'Default Policy' },
  },
  {
    title: 'Cloud Mailbox Defense',
    value: 'cmd',
    seats: 0,
    selected: false,
    package: { value: 'dnsEssentials', title: 'DNS Essentials' },
    policy: { value: 'defaultPolicy', title: 'Default Policy' },
  },
  {
    title: 'SecureX',
    value: 'secureX',
    seats: 0,
    selected: false,
    package: { value: 'dnsEssentials', title: 'DNS Essentials' },
    policy: { value: 'defaultPolicy', title: 'Default Policy' },
  },
]
