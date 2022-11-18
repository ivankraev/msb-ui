import React from 'react'
import { useFormik } from 'formik'
import { initialValues } from '@msp/components/Billing/PaymentMethods/components/PaymentMethod/components/CreateMethod/config'
import Container from '@common/Container'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import options from '@msp/mocks/methods-options.json'
import InputSelect from '@common/InputSelect'
import FormGridContainer from '@common/FormGridContainer'
import Button from '@common/Button'
import ButtonsGroup from '@common/ButtonsGroup'
import PlusIcon from '@msp/components/icons/PlusIcon'
import ButtonsContainer from '@common/ButtonsContainer'
import s from './CreateMethod.scss'

const CreateMethod = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const {
    values: { method, billingAddress },
    setFieldValue,
    handleSubmit,
  } = formik

  return (
    <Container label="New payment method" styles={s.container}>
      <form onSubmit={handleSubmit}>
        <HeaderComponent label="Payment method information" />
        <FormGridContainer>
          <InputSelect
            label="Method"
            options={options.methodOptions}
            value={method}
            onChangeHandler={(value) => setFieldValue('method', value)}
          />
        </FormGridContainer>
        <hr />
        <HeaderComponent label="Billing address" styles={s.headerComponent} />
        <FormGridContainer styles={s.formContainer}>
          <InputSelect
            label="Use existing"
            options={options.methodOptions}
            value={billingAddress}
            onChangeHandler={(value) => setFieldValue('billingAddress', value)}
          />
          <div className={s.buttonHolder}>
            <strong>just to take some space</strong>
            <div className={s.addNewButton}>
              <span>or</span>
              <ButtonsGroup styles={s.buttonsGroup}>
                <PlusIcon />
                <Button textOnly={true}>add new</Button>
              </ButtonsGroup>
            </div>
          </div>
        </FormGridContainer>
        <div className={s.buttonsHolder}>
          <hr />
          <ButtonsContainer>
            <Button textOnly={true}>cancel</Button>
            <ButtonsGroup>
              <Button disabled={true}>previous</Button>
              <Button contained={true}>next</Button>
            </ButtonsGroup>
          </ButtonsContainer>
        </div>
      </form>
    </Container>
  )
}

export default CreateMethod
