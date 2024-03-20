import { UserInvestmentsDataResponse } from "@/types"
import { mainApi } from "./mainApi"

export const withdrawalsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getMinWithdrawalMeaning: builder.query<{ value: string }, void>({
      query: () => ({
        url: "/api/configs/alias/withdrawalMin"
      }),
      providesTags: ["MinWithdrawalMeaning"]
    }),

    createWithdrawal: builder.mutation<UserInvestmentsDataResponse, { amount: string }>({
      query: (body) => ({
        url: "/api/withdrawals",
        method: "POST",
        body
      })
    })
  })
})

export const { useLazyGetMinWithdrawalMeaningQuery, useCreateWithdrawalMutation } =
  withdrawalsApi
