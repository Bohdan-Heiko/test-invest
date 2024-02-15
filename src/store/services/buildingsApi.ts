import { BuildingsResponse } from "@/types"

import { mainApi } from "./mainApi"

export const buildingsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPublicBuildings: builder.query<BuildingsResponse, void>({
      query: () => ({
        url: "/api/public/buildings"
      })
    })
  })
})

export const { useGetAllPublicBuildingsQuery } = buildingsApi
