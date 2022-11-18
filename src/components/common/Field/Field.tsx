/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import { Field, FieldInputProps, FormikProps } from 'formik'

import { FIELD_TYPES } from './config'

import s from './Field.scss'
import Button from '@common/Button'
import UploadedFile from '@common/Field/components/UploadedFile'

interface Option {
  label: string
  value: string | number
}

interface CustomFieldProps {
  name: string
  label: string
  type: string
  disabled?: boolean
  required?: boolean
  options?: Option[]
  accept?: string
  className?: string
}

const CustomField: React.FC<CustomFieldProps> = ({
  name,
  label,
  type,
  disabled = false,
  required = false,
  options,
  accept,
  className,
}) => {
  const renderDefaultInput = (field: FieldInputProps<string>) => {
    return (
      <input
        type={type}
        id={name}
        data-testid={name}
        {...field}
        className={s.inputField}
        disabled={disabled}
        required={required}
      />
    )
  }

  const renderSelect = (field: FieldInputProps<string>) => {
    return (
      <select id={name} className={s.inputField} {...field} disabled={disabled} required={required}>
        {options?.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }

  const renderFileInput = (field: FieldInputProps<any>, form: FormikProps<any>) => {
    const hiddenFileInput = useRef<HTMLInputElement>(null)
    const handleClick = () => {
      hiddenFileInput.current!.click()
    }
    return (
      <React.Fragment>
        <input
          hidden
          type="file"
          data-testid="file-uploader"
          accept={accept}
          ref={hiddenFileInput}
          name={name}
          className={className}
          required={required}
          onChange={(event) => {
            form.setFieldValue(name, event.currentTarget.files?.[0])
          }}
        />
        {field.value ? (
          <UploadedFile file={field.value} />
        ) : (
          <Button type="button" disabled={disabled} onClick={handleClick}>
            Upload new file
          </Button>
        )}
      </React.Fragment>
    )
  }

  const renderMap = {
    [FIELD_TYPES.text]: renderDefaultInput,
    [FIELD_TYPES.email]: renderDefaultInput,
    [FIELD_TYPES.tel]: renderDefaultInput,
    [FIELD_TYPES.select]: renderSelect,
    [FIELD_TYPES.file]: renderFileInput,
  }
  const inputRenderer = renderMap[type]
  return (
    <Field name={name}>
      {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<any> }) => (
        <div className={s.container}>
          <label htmlFor={name}>{label}</label>
          {inputRenderer?.(field, form)}
          {form.errors[name] && form.touched[name] ? (
            <div data-testid={`errors-${name}`} className={s.error}>
              {form.errors[name]?.toLocaleString()}
            </div>
          ) : null}
        </div>
      )}
    </Field>
  )
}

export default CustomField
