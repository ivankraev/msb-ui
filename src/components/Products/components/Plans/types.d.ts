export type Plan = {
  id: string
  updatedAt: Date
  plan: string
  umbrella: boolean
  'secure endpoints': boolean
  cmd: boolean
  duo: boolean
  secureX: boolean
  subscribers: number
  actionsOpen: boolean
}
