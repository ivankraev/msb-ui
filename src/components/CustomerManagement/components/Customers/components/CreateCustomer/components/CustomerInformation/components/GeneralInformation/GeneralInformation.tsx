import React from 'react'
import { initialValues } from '@msp/components/CustomerManagement/components/Customers/components/CreateCustomer/config'
import { useFormik } from 'formik'
import SimpleInput from '@common/SimpleInput'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import FormGridContainer from '@common/FormGridContainer'
import s from './GeneralInformation.scss'

interface Props {
  formikInstance: ReturnType<typeof useFormik<typeof initialValues>>
}

const GeneralInformation = ({ formikInstance }: Props) => {
  const { values, touched, errors, handleBlur, setFieldValue } = formikInstance

  const {
    generalInformation: { organization, firstName, lastName, email },
  } = values

  const isError = (value: keyof typeof values.generalInformation) => {
    return touched?.generalInformation?.[value as keyof typeof values.generalInformation] ||
      (touched?.[value as keyof typeof values] && errors.generalInformation?.[value])
      ? (errors.generalInformation?.[value] as string)
      : undefined
  }

  return (
    <div className={s.container}>
      <HeaderComponent label="General Information" />
      <FormGridContainer>
        <div className={s.gridItemStretch}>
          <SimpleInput
            label="Organization name"
            defaultValue={organization}
            name="organization"
            onChangeHandler={(e) =>
              setFieldValue('generalInformation.organization', e.target.value)
            }
            onBlur={handleBlur}
            error={isError('organization')}
          />
        </div>
        <SimpleInput
          label="First name"
          defaultValue={firstName}
          name="firstName"
          onChangeHandler={(e) => setFieldValue('generalInformation.firstName', e.target.value)}
          onBlur={handleBlur}
          error={isError('firstName')}
        />
        <SimpleInput
          label="Last name"
          defaultValue={lastName}
          name="lastName"
          onChangeHandler={(e) => setFieldValue('generalInformation.lastName', e.target.value)}
          onBlur={handleBlur}
          error={isError('lastName')}
        />
        <div className={s.gridItemStretch}>
          <SimpleInput
            label="Email"
            defaultValue={email}
            name="email"
            onChangeHandler={(e) => setFieldValue('generalInformation.email', e.target.value)}
            onBlur={handleBlur}
            error={isError('email')}
          />
        </div>
      </FormGridContainer>
    </div>
  )
}

export default GeneralInformation
