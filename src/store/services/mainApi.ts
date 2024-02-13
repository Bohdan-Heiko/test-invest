import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from ".."

export const mainApi = createApi({
  reducerPath: "mainApi",
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    prepareHeaders: async (headers, { getState }) => {
      const state: RootState = getState() as RootState
      // const token = state.authentication.token;

      // if (token) headers.set('Authorization', `Bearer ${token}`);

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
  tagTypes: [],
  endpoints: () => ({})
})
