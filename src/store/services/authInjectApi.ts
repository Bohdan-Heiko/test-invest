import { RegistrationBody, RegistrationResponse } from "@/types"
import { mainApi } from "./mainApi"

export const authApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    signinUser: builder.mutation<RegistrationResponse, RegistrationBody>({
      query: (body) => ({
        url: "/api/users/registration",
        method: "post",
        body
      })
    })
  })
})

export const { useSigninUserMutation } = authApi
