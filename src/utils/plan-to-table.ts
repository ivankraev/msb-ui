import { Plan } from '@msp/components/Products/components/Plans/types'
import { PlanResult } from '@msp/features/api/types'

export const transformPlanToTable = (plan: PlanResult | undefined) => {
  const includedProducts = plan?.options?.map((prod) => {
    return prod.product.name
  })

  return {
    id: plan?.id,
    plan: plan?.name,
    updatedAt: plan?.updatedAt,
    umbrella: includedProducts?.includes('Umbrella'),
    'secure endpoints': includedProducts?.includes('Secure Endpoint'),
    cmd: includedProducts?.includes('Cloud Mailbox Defense'),
    duo: includedProducts?.includes('DUO'),
    secureX: includedProducts?.includes('SecureX'),
    subscribers: 0,
    actionsOpen: false,
  } as Plan
}
