import { API_URL } from "@/utils/constants/constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { RootState } from ".."

export const mainApi = createApi({
  reducerPath: "mainApi",
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: async (headers, { getState }) => {
      const state: RootState = getState() as RootState

      const token = state.bober_auth.token
      const locale = state.i18n.userLanguage?.replace("-", "_")

      if (token) headers.set("Authorization", `Bearer ${token}`)
      if (locale) headers.set("X-LOCALE", locale!)

      if (!headers.has("Ignore-Headers")) {
        if (!headers.has("Content-Type")) {
          headers.set("Content-Type", "application/json")
        }
        if (!headers.has("Accept")) {
          headers.set("Accept", "application/json")
        }
      } else {
        headers.delete("Ignore-Headers")
      }

      return headers
    }
  }),
  tagTypes: [
    "GetMeData",
    "UserBuildings",
    "UserAccruals",
    "UserInvestments",
    "UserPublicBuildings",
    "UserPublicBuilers"
  ],
  endpoints: () => ({})
})
