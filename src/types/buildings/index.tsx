import * as yup from "yup"

import {
  BuildingSchema,
  buildingsResponseSchema
} from "@/schemas/building/building.schema"

export type BuildingReport = yup.InferType<typeof BuildingSchema>
export type BuildingsResponse = yup.InferType<typeof buildingsResponseSchema>

type Photos = {
  contentUrl: string
  file: string
}

// type Member = {
//   name: string
//   position: string
//   description: string
//   telegram?: string
//   linkedin?: string
//   facebook?: string
//   contentUrl: {
//     contentUrl: string
//     file: string
//   }
// }
// export interface BuildingsResponse {
//   id: number
//   title: string
//   description: string
//   duration: string // Assuming duration is a string representing a date
//   price: number
//   status: "inWork" | "Completed" | "Cancelled" // Assuming status can be one of these values
//   location: string
//   infrastructure: string
//   safety: string
//   photos?: Photos[]
//   team?: Member[]
//   createdAt: string // Assuming createdAt is a string representing a date
//   updatedAt: string // Assuming updatedAt is a string representing a date
// }

export interface BuildingReportResponse {
  id: number
  building: Pick<BuildingReport, "id" | "title">
  title: string
  report: string
  photos: Photos[]
  createdAt: string
  updatedAt: string
  percent: number
}

export interface BuildingReportBody {
  building: string | number
  report: string | number
}
