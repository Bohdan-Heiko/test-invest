interface BuildingReport {
  id: number
  title: string
  report: string
  createdAt: string // Assuming createdAt is a string representing a date
  percent: number
}

export interface BuildingsResponse {
  id: number
  title: string
  description: string
  duration: string // Assuming duration is a string representing a date
  price: number
  status: "inWork" | "completed" | "cancelled" // Assuming status can be one of these values
  location: string
  infrastructure: string
  safety: string
  photos: string[]
  team: string[]
  createdAt: string // Assuming createdAt is a string representing a date
  updatedAt: string // Assuming updatedAt is a string representing a date
  buildingReports: BuildingReport[]
}
