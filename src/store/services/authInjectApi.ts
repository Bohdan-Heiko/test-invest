import { LoginBody, LoginResponse, RegistrationBody, RegistrationResponse } from "@/types"

import { mainApi } from "./mainApi"

export const authApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    registrationUser: builder.mutation<RegistrationResponse, RegistrationBody>({
      query: (body) => ({
        url: "/api/users/registration",
        method: "POST",
        body
      })
    }),
    signInUser: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: "/api/login",
        method: "POST",
        body
      }),
      invalidatesTags: ["GetMeData"]
    }),
    forgotPassword: builder.mutation<{ message: string }, { email: string }>({
      query: (body) => ({
        url: "/api/users/forgot-password",
        method: "POST",
        body
      })
    })
  })
})

export const {
  useRegistrationUserMutation,
  useSignInUserMutation,
  useForgotPasswordMutation
} = authApi
