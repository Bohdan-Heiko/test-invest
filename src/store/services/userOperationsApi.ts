import {
  HydraData,
  RealtorData,
  TransformedData,
  UserAccrualsDataResponse,
  UserInvestmentsDataResponse
} from "@/types"
import { TransactionBody, TransactionResponse } from "@/types/investments"
import { transformDataHelpers } from "@/utils/helpers/transformData"

import { mainApi } from "./mainApi"

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
      },
      providesTags: ["UserAccruals"]
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
      },
      providesTags: ["UserInvestments"]
    }),

    findUserRealtor: builder.query<RealtorData, string>({
      query: (link) => ({
        url: `api/users/link/${link}`
      })
    }),

    // FAKE Paymeent
    createInvestments: builder.mutation<TransactionResponse, TransactionBody>({
      query: (body) => ({
        url: "/api/user/investments",
        method: "POST",
        body
      }),
      invalidatesTags: ["GetMeData", "UserInvestments"]
    })
  })
})

export const {
  useGetUserAccrualsQuery,
  useGetUserInvestmentsQuery,
  useLazyFindUserRealtorQuery,
  useCreateInvestmentsMutation
} = usersOperationsApi
