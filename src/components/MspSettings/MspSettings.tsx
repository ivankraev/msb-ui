import React, { useEffect, useState } from 'react'
import { FormikValues } from 'formik'
import { useAppSelector } from '@msp/redux/hooks'
import { createFileFromUrl } from '@msp/utils/files'
import SettingsComponent from '@common/UserSettings/components/SettingsComponent'
import InnerContainer from '@common/UserSettings/components/Container'
import Container from '@common/Container'
import Logo from '@common/Logo'
import EditableForm from '../UserProfile/components/EditableForm/EditableForm'
import { useGetHubQuery, useUpdateHubMutation } from '@msp/features/api/hubApiSlice'
import {
  AdditionalSettingsFields,
  MspSettingsFields,
  MspSettingsValidationSchema,
  TaxSettingsValidationSchema,
} from './config'
import s from './MspSettings.scss'

const MspSettings = () => {
  const { userInfo } = useAppSelector((state) => state.user)
  const { data: settingsData } = useGetHubQuery(userInfo!.customer?.hubId)
  const [updateHub] = useUpdateHubMutation()
  const [loadedFile, setLoadedFile] = useState<File | null>(null)
  useEffect(() => {
    if (settingsData?.certificateUrl) {
      createFileFromUrl(settingsData.certificateUrl, 'Tax certificate').then((res) =>
        setLoadedFile(res),
      )
    }
  }, [settingsData])

  const onSubmitDetailsForm = (values: FormikValues) => {
    return updateHub({ id: settingsData?.id, data: values })
  }

  const onSubmitTaxForm = ({ certificate }: FormikValues) => {
    if (!certificate) {
      return Promise.resolve()
    }
    const formData = new FormData()
    formData.append('certificate', certificate)
    return updateHub({ id: settingsData?.id, data: formData })
  }

  return (
    <Container label="Msp Settings" styles={s.container}>
      <InnerContainer>
        <EditableForm
          formLabel="Info"
          ctaText={'Edit info'}
          fields={MspSettingsFields}
          onSubmit={onSubmitDetailsForm}
          validationSchema={MspSettingsValidationSchema}
          initialValues={{
            name: settingsData?.name || '',
          }}
        />
        <SettingsComponent label="MSP logo">
          <Logo className={s.logo} link={settingsData?.logoUrl} />
        </SettingsComponent>
        <hr />
        <EditableForm
          formLabel="Other settings"
          ctaText={'Change'}
          fields={AdditionalSettingsFields}
          onSubmit={onSubmitTaxForm}
          validationSchema={TaxSettingsValidationSchema}
          initialValues={{
            certificate: loadedFile,
          }}
        />
      </InnerContainer>
    </Container>
  )
}

export default MspSettings
