import { ScrollView, View } from "react-native"

import { OrganizationInfo } from "@/shared/components"

import { AccrualAccount } from "./_components/accrualAccount"
import { MyProjects } from "./_components/myProjects"
import { PersonalInformation } from "./_components/personalInformation"
import { RieltorInformation } from "./_components/rieltorInformation"
import { YourAccount } from "./_components/yourAccount"
import { style } from "./_style"
import { Button } from "@/shared/ui"
import useActions from "@/hooks/useActions"
import { colors } from "@/utils/constants/colors"
import { useAppSelector } from "@/store"
import { useGetUserBuildingsQuery } from "@/store/services/usersApi"
import {
  useGetUserAccrualsQuery,
  useGetUserInvestmentsQuery
} from "@/store/services/userOperationsApi"
import { InvestmentAccount } from "./_components/investmentsAccount"

export const Account = () => {
  const { logoutUser } = useActions()
  const userData = useAppSelector((state) => state.user_data)

  // const { data: userBuildings } = useGetUserBuildingsQuery()

  const { data: userAccrualsData } = useGetUserAccrualsQuery()
  const { data: userInvestmentsData } = useGetUserInvestmentsQuery()
  // console.log(userAccrualsData, "userAccrualsData")

  return (
    <ScrollView
      overScrollMode="never"
      nestedScrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <YourAccount investments={userData.investments} />
        <PersonalInformation data={userData} />
        {/* <RieltorInformation /> */}
        <AccrualAccount title="Нарахування" accrualData={userAccrualsData} />
        <InvestmentAccount title="Інвестиції" investmentsData={userInvestmentsData} />
        {/* <MyProjects /> */}
        <Button onPress={logoutUser} title="Выход" />
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
