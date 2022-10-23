import FormGridContainer from '@common/FormGridContainer'
import InputSelect from '@common/InputSelect'
import SimpleInput from '@common/SimpleInput'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import options from '@msp/mocks/country-options.json'
import React from 'react'
import s from './BillingAddress.scss'

const BillingAddress = () => {
  return (
    <div className={s.container}>
      <HeaderComponent label="Billing address" />
      <FormGridContainer>
        <InputSelect
          label="Country"
          options={options.countryOptions}
          value={options.countryOptions[0]}
          onChangeHandler={() => {}}
        />
        <InputSelect
          label="State / Province"
          options={options.stateOptions}
          value={options.stateOptions[0]}
          onChangeHandler={() => {}}
        />
        <InputSelect
          label="City"
          options={options.stateOptions}
          value={options.stateOptions[0]}
          onChangeHandler={() => {}}
        />
        <SimpleInput styles={s.postalCode} label="Postal code" onChangeHandler={() => {}} />
        <SimpleInput
          styles={s.gridItemStretch}
          label="Street address line 1"
          onChangeHandler={() => {}}
        />
        <SimpleInput
          styles={s.gridItemStretch}
          label="Street address line 2"
          onChangeHandler={() => {}}
        />
      </FormGridContainer>
    </div>
  )
}

export default BillingAddress
