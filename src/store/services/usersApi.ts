import { BuildingsResponse, HydraData, TransformedData, UserDataResponse } from "@/types"

import { mainApi } from "./mainApi"
import { transformDataHelpers } from "@/utils/helpers/transformData"

export const usersApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getMe: builder.query<UserDataResponse, void | string>({
      query: () => ({
        url: "/api/users/me"
      }),
      providesTags: ["GetMeData"]
    }),

    sumAccuralsProceents: builder.query<number | undefined, void | string>({
      query: () => ({
        url: "/api/user/sum_accruals_last_quarter",
        headers: {
          Accept: "application/ld+json"
        }
      })
    }),

    getUserBuildings: builder.query<TransformedData<BuildingsResponse>, void | string>({
      query: () => ({
        url: "/api/user/buildings",
        headers: {
          Accept: "application/ld+json"
        }
      }),
      transformResponse: (
        baseQueryReturnValue: HydraData<BuildingsResponse>
      ): TransformedData<BuildingsResponse> => {
        return transformDataHelpers.transformJsonLdToJson<BuildingsResponse>(
          baseQueryReturnValue
        )
      },
      providesTags: ["UserBuildings"]
    })
  })
})

export const { useGetMeQuery, useSumAccuralsProceentsQuery, useGetUserBuildingsQuery } =
  usersApi
