interface BuildingReport {
  id: number
  title: string
  report: string
  createdAt: string // Assuming createdAt is a string representing a date
  percent: number
}

type Photos = {
  contentUrl: string
  file: string
}

type Member = {
  name: string
  position: string
  description: string
  telegram?: string
  linkedin?: string
  facebook?: string
  contentUrl: {
    contentUrl: string
    file: string
  }
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
  photos?: Photos[]
  team?: Member[]
  createdAt: string // Assuming createdAt is a string representing a date
  updatedAt: string // Assuming updatedAt is a string representing a date
  buildingReports?: BuildingReport[]
}
