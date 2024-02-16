import { UserDataResponse } from "@/types"

import { mainApi } from "./mainApi"

export const usersApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getMe: builder.query<UserDataResponse, void | string>({
      query: () => ({
        url: "/api/users/me"
      }),
      providesTags: ["GetMeData"]
    })
    // getAllPublicBuiders: builder.query<TransformedData<BuidersResponse>, void | string>({
    //   query: () => ({
    //     url: "/api/public/builders",
    //     headers: {
    //       Accept: "application/ld+json"
    //     }
    //   }),

    //   transformResponse: (
    //     baseQueryReturnValue: HydraData<BuidersResponse>
    //   ): TransformedData<BuidersResponse> => {
    //     return transformDataHelpers.transformJsonLdToJson<BuidersResponse>(
    //       baseQueryReturnValue
    //     )
    //   }
    // })
  })
})

export const { useGetMeQuery } = usersApi
