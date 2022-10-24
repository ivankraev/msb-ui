import React, { useState } from 'react'
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
}

const EditableForm: React.FC<Props> = ({ formLabel, ctaText, initialValues, fields }) => {
  const [allowEdit, setAllowEdit] = useState(false)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values, 'values')
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div className={s.container}>
            <HeaderComponent label={formLabel} styles={s.header}>
              <Button
                onClick={() => setAllowEdit(!allowEdit)}
                type={!allowEdit ? 'submit' : 'button'}
              >
                {allowEdit ? 'Save' : ctaText}
              </Button>
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
