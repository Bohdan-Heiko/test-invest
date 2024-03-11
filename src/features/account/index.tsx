import { ScrollView, View } from "react-native"
import { useLayoutEffect, useRef } from "react"
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
import BottomSheet from "@gorhom/bottom-sheet"
import CustomBottomSheet from "@/shared/components/bottomSheet/bottomSheet.component"
import { useDispatch } from "react-redux"
import { TLanguage } from "@/types"
import { mainApi } from "@/store/services/mainApi"

export const Account = () => {
  const router = useRouter()
  const pathName = usePathname()
  const dispatch = useDispatch()
  const { logoutUser, setLanguage } = useActions()
  const { t, i18n } = useTranslation("account")

  const bottomSheetRef = useRef<BottomSheet>(null)
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

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  const onSetLanguage = (item: TLanguage): void => {
    setLanguage(item)
    i18n.changeLanguage(item)
    handleClosePress()
    dispatch(
      mainApi.util.invalidateTags([
        "UserPublicBuildings",
        "UserPublicBuilers",
        "UserBuildings"
      ])
    )
  }

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      return router.replace("/(public)/(auth)/signin")
    }
  }, [isAuthenticated])

  return (
    <>
      <ScrollView
        overScrollMode="never"
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.white }}
      >
        {/* <CustomBottomSheet ref={bottomSheetRef} /> */}

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
          <PersonalInformation t={t} data={userData} openLanguage={handleOpenPress} />
          <Button onPress={handleLogout} title={t("Вихід")} variant="secondary" />
          <OrganizationInfo />
        </View>
      </ScrollView>
      <CustomBottomSheet ref={bottomSheetRef}>
        <>
          <Button
            onPress={() => onSetLanguage("uk-UA")}
            title={t("Ukranian")}
            variant="secondary"
          />
          <Button
            onPress={() => onSetLanguage("en-US")}
            title={t("English")}
            variant="secondary"
          />
        </>
      </CustomBottomSheet>
    </>
  )
}
