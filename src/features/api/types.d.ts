export interface ProductResult {
  id: string
  createdAt: Date
  updatedAt: Date | null
  logoUrl: string
  name: string
  value: string
  shortName: string | null
  totalCustomers: number
  totalSeats: number
  avaiableSeats: number
  bookedSeats: number
  consoleUrl: string
  trainings?: Training[]
}

export interface CreatePlanInput {
  name: string
  products: {
    id: string
    title: string
    seats: number
    package: string
    policy: string
  }[]
}

export interface PlansResult {
  data: PlanResult[]
  resultsCount: number
}

export interface PlanResult {
  id: string
  name: string
  updatedAt: Date
  options: {
    policy: string
    package: string
    totalSeats: string
    avaiableSeats: string
    product: {
      name: string
      value: string
      id: string
    }
  }[]
}

export interface GetPlansQueryParams {
  orderBy: string
  searchText: string
  searchBy: string
  skip: number
  limit: number
}
export interface Hub {
  id: string
  createdAt: Date
  updatedAt: Date | null
  name: string
  logoUrl: string
  certificateUrl: string
}

interface HubFormData {
  name?: string
  certificate?: File
}
export interface HubFormValues {
  id: string
  data: HubFormData | FormData
}

export interface Training {
  id: string
  name: string
  srcUrl: string
  productId: string
  createdAt: Date
  updatedAt: Date | null
}

export interface ApiResponse {
  success: boolean
  message: string
}
