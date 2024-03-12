import { ScrollView, StyleSheet, View } from "react-native"
import { useLayoutEffect, useState } from "react"
import { usePathname, useRouter } from "expo-router"
import { useTranslation } from "react-i18next"

import useActions from "@/hooks/useActions"
import { OrganizationInfo } from "@/shared/components"
import { Button } from "@/shared/ui"
import { useAppSelector } from "@/store"
import {
  useGetUserAccrualsQuery,
  useGetUserInvestmentsQuery
} from "@/store/services/userOperationsApi"
import { useGetUserBuildingsQuery } from "@/store/services/usersApi"
import { colors } from "@/utils/constants/colors"

import { AccrualAccount } from "./_components/accrualAccount"
import { InvestmentAccount } from "./_components/investmentsAccount"
import { MyProjects } from "./_components/myProjects"
import { PersonalInformation } from "./_components/personalInformation"
import { RieltorInformation } from "./_components/rieltorInformation"
import { YourAccount } from "./_components/yourAccount"
import { style } from "./_style"
import { useModalContext } from "@/context/modal.context"
import { IModalContext } from "@/types"

export const Account = () => {
  const router = useRouter()
  const pathName = usePathname()
  const { logoutUser } = useActions()
  const { t } = useTranslation("account")

  const { openModal } = useModalContext()
  
  const userData = useAppSelector((state) => state.user_data)
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

  const handleLogout = () => {
    logoutUser()
    router.replace("/(tabs)/")
  }

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      return router.replace("/(public)/(auth)/signin")
    }
  }, [isAuthenticated])

  return (
    <ScrollView
      overScrollMode="never"
      nestedScrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <YourAccount t={t} investments={userData.totalBalance} />
        {userData.isRealtor && (
          <RieltorInformation
            t={t}
            inviteLink={userData.inviteLink}
            realtorPercent={userData.realtorPercent}
          />
        )}
        <AccrualAccount
          t={t}
          title={t("Нарахування")}
          isLoading={isUserAccrualLoading}
          accrualData={userAccrualsData}
        />
        {!userData.isRealtor && (
          <>
            <InvestmentAccount
              t={t}
              title={t("Інвестиції")}
              isLoading={isUserInvestmentsLoading}
              investmentsData={userInvestmentsData}
            />
            <MyProjects
              t={t}
              projectsData={userBuildingsData}
              isLoading={isUserBuildingsLoading}
            />
          </>
        )}
        <PersonalInformation t={t} data={userData} />
        <Button onPress={handleLogout} title={t("Вихід")} variant="secondary" />
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
