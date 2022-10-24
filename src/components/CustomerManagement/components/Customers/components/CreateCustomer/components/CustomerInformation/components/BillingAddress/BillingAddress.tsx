import React from 'react'
import FormGridContainer from '@common/FormGridContainer'
import InputSelect from '@common/InputSelect'
import SimpleInput from '@common/SimpleInput'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import options from '@msp/mocks/country-options.json'
import s from './BillingAddress.scss'
import { initialValues } from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/config'
import { useFormik } from 'formik'

interface Props {
  formikInstance: ReturnType<typeof useFormik<typeof initialValues>>
}

const BillingAddress = ({ formikInstance }: Props) => {
  const { values, touched, errors, handleBlur, setFieldValue } = formikInstance

  const isError = (value: keyof typeof values.generalInformation.billingAddress) => {
    return touched?.generalInformation?.billingAddress?.[
      value as keyof typeof values.generalInformation.billingAddress
    ] && errors.generalInformation?.billingAddress?.[value]
      ? (errors.generalInformation?.billingAddress?.[value] as string)
      : undefined
  }

  const {
    generalInformation: {
      billingAddress: { state, country, postCode, city, streetAddressOne, streetAddressTwo },
    },
  } = values

  return (
    <div className={s.container}>
      <HeaderComponent label="Billing address" />
      <FormGridContainer>
        <InputSelect
          label="Country"
          options={options.countryOptions}
          value={country}
          onChangeHandler={(option) =>
            setFieldValue('generalInformation.billingAddress.country', option)
          }
        />
        <InputSelect
          label="State / Province"
          options={options.stateOptions}
          value={state}
          onChangeHandler={(option) =>
            setFieldValue('generalInformation.billingAddress.state', option)
          }
        />
        <InputSelect
          label="City"
          options={options.stateOptions}
          value={city}
          onChangeHandler={(option) =>
            setFieldValue('generalInformation.billingAddress.city', option)
          }
        />
        <SimpleInput
          styles={s.postCode}
          name="generalInformation.billingAddress.postCode"
          label="Postal code"
          defaultValue={postCode}
          onChangeHandler={(e) =>
            setFieldValue('generalInformation.billingAddress.postCode', e.target.value)
          }
          onBlur={handleBlur}
          error={isError('postCode')}
        />
        <SimpleInput
          styles={s.gridItemStretch}
          name="generalInformation.billingAddress.streetAddressOne"
          label="Street address line 1"
          defaultValue={streetAddressOne}
          onChangeHandler={(e) =>
            setFieldValue('generalInformation.billingAddress.streetAddressOne', e.target.value)
          }
          onBlur={handleBlur}
          error={isError('streetAddressOne')}
        />
        <SimpleInput
          styles={s.gridItemStretch}
          name="generalInformation.billingAddress.streetAddressTwo"
          label="Street address line 2"
          defaultValue={streetAddressTwo}
          onChangeHandler={(e) =>
            setFieldValue('generalInformation.billingAddress.streetAddressTwo', e.target.value)
          }
          onBlur={handleBlur}
          error={isError('streetAddressTwo')}
        />
      </FormGridContainer>
    </div>
  )
}

export default BillingAddress
