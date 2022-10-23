import React from 'react'
import { useFormik } from 'formik'
import {
  initialValues,
  products as data,
} from '@msp/components/Products/components/Plans/components/CreatePlan/config'
import options from '@msp/mocks/products-options.json'
import ProductsContainer from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/ProductsContainer'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import Accordion from '@common/Accordion'
import InputSelect from '@common/InputSelect'
import ProductHeader from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/ProductHeader'
import SimpleInput from '@common/SimpleInput'
import s from './SelectProducts.scss'

interface Props {
  headerButton?: React.ReactNode
  formikInstance: ReturnType<typeof useFormik<typeof initialValues>>
}

const SelectProducts = ({ headerButton, formikInstance }: Props) => {
  const {
    values: { products, plan },
    touched,
    errors,
    handleBlur,
    setFieldValue,
  } = formikInstance

  return (
    <div className={s.container}>
      <HeaderComponent label="Select products" styles={s.headerComponent}>
        {headerButton}
      </HeaderComponent>
      {data.map((product) => {
        const { value, title } = product
        const typedValue = value as keyof typeof products
        const productValue = products[typedValue]

        return (
          <Accordion
            key={title}
            isOpen={products[typedValue].selected}
            headerComponent={
              <ProductHeader product={product} products={products} onClick={setFieldValue} />
            }
          >
            <ProductsContainer>
              <InputSelect
                label="Package"
                options={options.packageOptions}
                onChangeHandler={(value) => {
                  setFieldValue(`products.${typedValue}.package`, value)
                }}
                value={productValue.package}
              />
              <InputSelect
                label="Policy"
                options={options.policyOptions}
                onChangeHandler={(value) => {
                  setFieldValue(`products.${typedValue}.policy`, value)
                }}
                value={productValue.policy}
              />
              <SimpleInput
                label="Seats"
                name={`products.${typedValue}.seats`}
                styles={s.seatsInput}
                onChangeHandler={(e) =>
                  setFieldValue(`products.${typedValue}.seats`, Number(e.target.value))
                }
                defaultValue={productValue.seats}
                onBlur={handleBlur}
                skipErrorMessage={true}
                error={
                  touched.products?.[typedValue]?.seats && errors.products?.[typedValue]?.seats
                    ? errors.products?.[typedValue]?.seats
                    : undefined
                }
              />
            </ProductsContainer>
          </Accordion>
        )
      })}
      <SimpleInput
        name="plan"
        styles={s.nameInput}
        label="Plan name"
        onChangeHandler={(e) => setFieldValue('plan', e.target.value)}
        defaultValue={plan}
        onBlur={handleBlur}
        error={touched.plan && errors.plan ? errors.plan : undefined}
      />
    </div>
  )
}

export default SelectProducts
