import { useLayoutEffect } from "react"
import { usePathname, useRouter } from "expo-router"

import useActions from "@/hooks/useActions"
import { useAppSelector } from "@/store"
import {
  useGetUserAccrualsQuery,
  useGetUserInvestmentsQuery
} from "@/store/services/userOperationsApi"
import { useGetUserBuildingsQuery } from "@/store/services/usersApi"

export const useAccontController = () => {
  const router = useRouter()
  const pathName = usePathname()

  const { isAuthenticated } = useAppSelector((state) => state.bober_auth)

  const { data: userAccrualsData, isFetching: isUserAccrualLoading } =
    useGetUserAccrualsQuery("", {
      skip: pathName !== "/account"
    })
  const { data: userInvestmentsData, isFetching: isUserInvestmentsLoading } =
    useGetUserInvestmentsQuery("", {
      skip: pathName !== "/account"
    })
  const { data: userBuildingsData, isFetching: isUserBuildingsLoading } =
    useGetUserBuildingsQuery()

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      return router.replace("/(public)/(auth)/signin")
    }
  }, [isAuthenticated])

  return {
    userAccrualsData,
    userBuildingsData,
    userInvestmentsData,
    isUserAccrualLoading,
    isUserBuildingsLoading,
    isUserInvestmentsLoading
  }
}
