import React, { useEffect } from 'react'
import { Product } from '@msp/shared/interfaces/plans.interface'
import { FormikValues, useFormik } from 'formik'
import options from '@msp/mocks/products-options.json'
import ProductsContainer from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/ProductsContainer'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import Accordion from '@common/Accordion'
import InputSelect from '@common/InputSelect'
import ProductHeader from '@msp/components/Products/components/Plans/components/CreatePlan/components/SelectProducts/components/ProductHeader'
import SimpleInput from '@common/SimpleInput'
import LoadingSkeleton from './components/LoadingSkeleton'
import s from './SelectProducts.scss'

interface Props {
  headerButton?: React.ReactNode
  formikInstance: FormikValues
  initialValues: { plan: string; products: Product[]; id?: string }
}

const SelectProducts = ({ headerButton, formikInstance, initialValues }: Props) => {
  const {
    values: { products, plan },
    touched,
    errors,
    handleBlur,
    setFieldValue,
    setTouched,
  } = formikInstance as ReturnType<typeof useFormik<typeof initialValues>>

  useEffect(() => {
    setTouched({})
  }, [])

  return (
    <div className={s.container}>
      <HeaderComponent label="Select products" styles={s.headerComponent}>
        {headerButton}
      </HeaderComponent>
      {initialValues.products === undefined || initialValues.plan === undefined ? (
        <LoadingSkeleton />
      ) : (
        <>
          {products?.map((product, i) => {
            const { title, policy, package: pckg, seats } = product

            const checkSeatsForError = () => {
              if (!touched.products?.[i] || !errors.products?.[i]) return
              const isError = touched.products[i]?.seats && errors.products[i]
              if (isError) {
                // @ts-ignore
                return errors.products[i].seats as string
              }
              return undefined
            }

            return (
              <Accordion
                key={title}
                isOpen={products[i].selected}
                styles={s.accordionItem}
                headerComponent={
                  <ProductHeader product={product} index={i} onClick={setFieldValue} />
                }
              >
                <ProductsContainer>
                  <InputSelect
                    label="Package"
                    options={options.packageOptions}
                    onChangeHandler={(value) => {
                      setFieldValue(`products[${i}].package`, value)
                    }}
                    value={pckg}
                  />
                  <InputSelect
                    label="Policy"
                    options={options.policyOptions}
                    onChangeHandler={(value) => {
                      setFieldValue(`products[${i}].policy`, value)
                    }}
                    value={policy}
                  />
                  <SimpleInput
                    label="Seats"
                    name={`products.${i}.seats`}
                    onChangeHandler={(e) =>
                      setFieldValue(`products[${i}].seats`, Number(e.target.value))
                    }
                    defaultValue={seats}
                    onBlur={handleBlur}
                    error={checkSeatsForError()}
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
        </>
      )}
    </div>
  )
}

export default SelectProducts
