import {
  CheckPaymentStatus,
  ConfirmPaymentResponse,
  TransactionBody,
  TransactionResponse
} from "@/types"

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
    }),
    checkPaymentStatus: builder.query<CheckPaymentStatus, string>({
      query: (uuid) => ({
        url: `/api/public/payments/${uuid}/status`
      })
    }),
    confirmPayment: builder.mutation<ConfirmPaymentResponse, { uuid: string }>({
      query: (body) => ({
        url: "/api/payments/deposit/confirm",
        method: "POST",
        body
      })
    }),
    getPaymentById: builder.query<any, string>({
      query: (id) => ({
        url: `/api/payments/${id}`
      })
    })
  })
})

export const {
  useCreatePaymentDepositMutation,
  useCheckPaymentStatusQuery,
  useConfirmPaymentMutation,
  useGetPaymentByIdQuery
} = paymentsApi
