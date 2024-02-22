import { BuildingsResponse } from "@/types"
import { BuildingReportBody, BuildingReportResponse } from "@/types/buildings"

import { mainApi } from "./mainApi"

export const buildingsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPublicBuildings: builder.query<BuildingsResponse[], void | string>({
      query: () => ({
        url: "/api/public/buildings"
      })
    }),
    getOnePublicBuilding: builder.query<BuildingsResponse, string>({
      query: (id) => ({
        url: `/api/public/buildings/${id}`
      })
    }),
    getBuildingReport: builder.query<BuildingReportResponse, BuildingReportBody>({
      query: ({ building, report }) => ({
        url: `/api/public/buildings/${building}/reports/${report}`
      })
    })
  })
})

export const {
  useGetAllPublicBuildingsQuery,
  useGetOnePublicBuildingQuery,
  useGetBuildingReportQuery
} = buildingsApi
