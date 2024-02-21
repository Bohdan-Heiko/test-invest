import { BuildingsResponse } from "@/types"

import { mainApi } from "./mainApi"

export const buildingsApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPublicBuildings: builder.query<BuildingsResponse[], void | string>({
      query: () => ({
        url: "/api/public/buildings"
      })
    }),
    getOnePublicBuilding: builder.query<BuildingsResponse, string>({
      query: (id) => ({
        url: `/api/public/buildings/${id}`
      })
    })
  })
})

export const { useGetAllPublicBuildingsQuery, useGetOnePublicBuildingQuery } =
  buildingsApi
