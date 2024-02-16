import {
  HydraData,
  TransformedData,
  UserAccrualsDataResponse,
  UserInvestmentsDataResponse
} from "@/types"

import { mainApi } from "./mainApi"
import { transformDataHelpers } from "@/utils/helpers/transformData"

export const usersOperationsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getUserAccruals: builder.query<
      TransformedData<UserAccrualsDataResponse>,
      void | string
    >({
      query: () => ({
        url: "/api/user/accruals",
        headers: {
          Accept: "application/ld+json"
        }
      }),
      transformResponse: (
        baseQueryReturnValue: HydraData<UserAccrualsDataResponse>
      ): TransformedData<UserAccrualsDataResponse> => {
        return transformDataHelpers.transformJsonLdToJson<UserAccrualsDataResponse>(
          baseQueryReturnValue
        )
      }
      // providesTags: ["UserBuildings"]
    }),

    getUserInvestments: builder.query<
      TransformedData<UserInvestmentsDataResponse>,
      void | string
    >({
      query: () => ({
        url: "/api/user/investments",
        headers: {
          Accept: "application/ld+json"
        }
      }),
      transformResponse: (
        baseQueryReturnValue: HydraData<UserInvestmentsDataResponse>
      ): TransformedData<UserInvestmentsDataResponse> => {
        return transformDataHelpers.transformJsonLdToJson<UserInvestmentsDataResponse>(
          baseQueryReturnValue
        )
      }
      // providesTags: ["UserBuildings"]
    })
  })
})

export const { useGetUserAccrualsQuery, useGetUserInvestmentsQuery } = usersOperationsApi
