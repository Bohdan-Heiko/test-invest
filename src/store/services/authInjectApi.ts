import { LoginBody, LoginResponse, RegistrationBody, RegistrationResponse } from "@/types"

import { mainApi } from "./mainApi"

export const authApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    registrationUser: builder.mutation<RegistrationResponse, RegistrationBody>({
      query: (body) => ({
        url: "/api/users/registration",
        method: "post",
        body
      })
    }),
    signInUser: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: "/api/login",
        method: "post",
        body
      })
    })
  })
})

export const { useRegistrationUserMutation, useSignInUserMutation } = authApi
