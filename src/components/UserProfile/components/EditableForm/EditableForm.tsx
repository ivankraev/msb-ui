import React, { useState } from 'react'
import * as Yup from 'yup'
import { AnyObject } from 'yup/lib/types'
import { Formik, FormikValues } from 'formik'
import Button from '@common/Button'
import HeaderComponent from '@common/UserSettings/components/HeaderComponent'
import Field from '@msp/components/common/Field'

import s from './EditableForm.scss'

interface FieldInterface {
  label: string
  type: string
  name: string
}

interface Props {
  formLabel: string
  ctaText: string
  initialValues: FormikValues
  fields: FieldInterface[]
  validationSchema?: Yup.ObjectSchema<AnyObject>
  onSubmit: (values: FormikValues) => Promise<unknown>
}

const EditableForm: React.FC<Props> = ({
  formLabel,
  ctaText,
  initialValues,
  fields,
  validationSchema,
  onSubmit,
}) => {
  const [allowEdit, setAllowEdit] = useState(false)
  const handleSubmit = (values: FormikValues) => {
    onSubmit(values).then(() => setAllowEdit(false))
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div className={s.container}>
            <HeaderComponent label={formLabel} styles={s.header}>
              {allowEdit ? (
                <Button type="button" onClick={props.handleSubmit}>
                  Save
                </Button>
              ) : (
                <Button onClick={() => setAllowEdit(true)} type={'button'}>
                  {ctaText}
                </Button>
              )}
            </HeaderComponent>
            <div className={s.fieldsContainer}>
              {fields.map(({ label, ...fieldAttributes }) => (
                <Field
                  {...fieldAttributes}
                  label={label}
                  disabled={!allowEdit}
                  key={fieldAttributes.name}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default EditableForm
