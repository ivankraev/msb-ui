import { ProductResult } from '@msp/features/api/types'

export const productsIntoInitialValues = (products: ProductResult[] | undefined) => {
  return products?.map((prod) => ({
    id: prod.id,
    title: prod.name,
    value: prod.value,
    seats: 0,
    selected: false,
    package: { value: 'dnsEssentials', title: 'DNS Essentials' },
    policy: { value: 'defaultPolicy', title: 'Default Policy' },
  }))
}
