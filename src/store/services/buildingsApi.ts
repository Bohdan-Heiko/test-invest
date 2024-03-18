import { BuildingsResponse, HydraData, TransformedData } from "@/types"
import {
  BuildingReport,
  BuildingReportBody,
  BuildingReportResponse
} from "@/types/buildings"

import { mainApi } from "./mainApi"
import { transformDataHelpers } from "@/utils/helpers/transformData"

export const buildingsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPublicBuildings: builder.query<BuildingsResponse[], void | string>({
      query: () => ({
        url: "/api/public/buildings"
      }),
      // keepUnusedDataFor: 60 * 5,
      keepUnusedDataFor: 0,
      providesTags: ["UserPublicBuildings"]
    }),

    getOnePublicBuilding: builder.query<BuildingsResponse, string>({
      query: (id) => ({
        url: `/api/public/buildings/${id}`
      })
    }),

    getBuildingPrivateReport: builder.query<TransformedData<BuildingReport>, number>({
      query: (buildingId) => ({
        url: `/api/buildings/${buildingId}/reports`,
        headers: {
          Accept: "application/ld+json"
        }
      }),
      transformResponse: (
        baseQueryReturnValue: HydraData<BuildingReport>
      ): TransformedData<BuildingReport> => {
        return transformDataHelpers.transformJsonLdToJson<BuildingReport>(
          baseQueryReturnValue
        )
      }
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
  useGetBuildingPrivateReportQuery,
  useGetBuildingReportQuery
} = buildingsApi
