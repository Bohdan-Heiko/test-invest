import {
  BuildingSchema,
  buildingsResponseSchema
} from "@/schemas/building/building.schema"
import { BuildingsResponse, HydraData, TransformedData } from "@/types"
import {
  BuildingReport,
  BuildingReportBody,
  BuildingReportResponse
} from "@/types/buildings"
import { validatedResponseHelpers } from "@/utils/helpers/validatedResponse"

import { mainApi } from "./mainApi"

export const buildingsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPublicBuildings: builder.query<BuildingsResponse[], void | string>({
      query: () => ({
        url: "/api/public/buildings"
      }),
      keepUnusedDataFor: 0,
      providesTags: ["UserPublicBuildings"]
    }),

    getOnePublicBuilding: builder.query<BuildingsResponse, string>({
      query: (id) => ({
        url: `/api/public/buildings/${id}`
      }),
      transformResponse: (baseQueryReturnValue: BuildingsResponse) => {
        return validatedResponseHelpers.validdateObjectOrArrayResponse(
          baseQueryReturnValue,
          buildingsResponseSchema
        )
      }
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
        return validatedResponseHelpers.validateHydraResponse(
          baseQueryReturnValue,
          BuildingSchema
        )
      }
    }),

    getBuildingReport: builder.query<BuildingReportResponse, BuildingReportBody>({
      query: ({ building, report }) => ({
        url: `/api/buildings/${building}/reports/${report}`
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
