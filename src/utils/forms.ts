/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFormData = (object: any) =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key])
    return formData
  }, new FormData())
