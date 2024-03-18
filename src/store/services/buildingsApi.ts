import { BuildingsResponse, HydraData, TransformedData } from "@/types"
import {
  BuildingReport,
  BuildingReportBody,
  BuildingReportResponse
} from "@/types/buildings"

import { mainApi } from "./mainApi"
import { BuildingSchema } from "@/schemas/building/building.schema"
import { validatedResponseHelpers } from "@/utils/helpers/validatedResponse"

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
      })
      // transformResponse: (baseQueryReturnValue: BuildingsResponse) => {
      //   try {
      //     return buildingsResponseSchema.validateSync(baseQueryReturnValue, {
      //       strict: true,
      //       abortEarly: false
      //     })
      //   } catch (error) {
      //     throw new Error(JSON.stringify(error))
      //   }
      // }
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
