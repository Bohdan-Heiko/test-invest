import {
  BuildingsResponse,
  HydraData,
  RealtorData,
  TransformedData,
  UserDataResponse
} from "@/types"
import { transformDataHelpers } from "@/utils/helpers/transformData"

import { mainApi } from "./mainApi"

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
    }),

    changeUserData: builder.mutation<
      RealtorData,
      { id: number; realtor: { id: number } }
    >({
      query: (body) => ({
        url: `api/users/${body.id}`,
        body,
        method: "PATCH"
      }),
      invalidatesTags: ["GetMeData"]
    })
  })
})

export const {
  useGetMeQuery,
  useSumAccuralsProceentsQuery,
  useGetUserBuildingsQuery,
  useChangeUserDataMutation
} = usersApi
