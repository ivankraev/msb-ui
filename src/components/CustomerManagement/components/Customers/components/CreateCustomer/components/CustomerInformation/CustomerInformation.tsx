import React from 'react'
import GeneralInformation from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/components/CustomerInformation/components/GeneralInformation'
import BillingAddress from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/components/CustomerInformation/components/BillingAddress'
import s from './CustomerInformation.scss'
import { useFormik } from 'formik'
import { initialValues } from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/config'

interface Props {
  formikInstance: ReturnType<typeof useFormik<typeof initialValues>>
}

const CustomerInformation = ({ formikInstance }: Props) => {
  return (
    <div className={s.container}>
      <GeneralInformation formikInstance={formikInstance} />
      <hr />
      <BillingAddress formikInstance={formikInstance} />
    </div>
  )
}

export default CustomerInformation
