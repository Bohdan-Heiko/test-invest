import { RegistrationBody, RegistrationResponse } from "@/types"
import { mainApi } from "./mainApi"

export const authApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    registrationUser: builder.mutation<RegistrationResponse, RegistrationBody>({
      query: (body) => ({
        url: "/api/users/registration",
        method: "post",
        body
      })
    })
  })
})

export const { useRegistrationUserMutation } = authApi
