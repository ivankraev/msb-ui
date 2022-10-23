import React from 'react'
import SimpleInput from '@common/SimpleInput'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import FormGridContainer from '@common/FormGridContainer'
import s from './GeneralInformation.scss'

const GeneralInformation = () => {
  return (
    <div className={s.container}>
      <HeaderComponent label="General Information" />
      <FormGridContainer>
        <div className={s.gridItemStretch}>
          <SimpleInput label="Organization name" onChangeHandler={() => {}} />
        </div>
        <SimpleInput label="First name" onChangeHandler={() => {}} />
        <SimpleInput label="Last name" onChangeHandler={() => {}} />
        <div className={s.gridItemStretch}>
          <SimpleInput label="Email" onChangeHandler={() => {}} />
        </div>
      </FormGridContainer>
    </div>
  )
}

export default GeneralInformation
