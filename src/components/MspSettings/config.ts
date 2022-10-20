export const CERT_ALLOWED_FORMATS = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const MspSettingsFields = [
  { name: 'mspName', type: 'text', label: 'MSP name', required: true },
]
export const AdditionalSettingsFields = [
  {
    name: 'taxCertificate',
    type: 'file',
    label: 'Tax certificate',
    accept: CERT_ALLOWED_FORMATS.join(','),
  },
]
