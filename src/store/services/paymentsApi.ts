import { TransactionBody, TransactionResponse } from "@/types/investments"

import { mainApi } from "./mainApi"

export const paymentsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createPaymentDeposit: builder.mutation<TransactionResponse, TransactionBody>({
      query: (body) => ({
        url: "/api/payments/deposit",
        method: "POST",
        body
      }),
      invalidatesTags: ["GetMeData", "UserInvestments"]
    })
  })
})

export const { useCreatePaymentDepositMutation } = paymentsApi
