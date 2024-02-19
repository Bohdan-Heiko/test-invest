import { ScrollView, View } from "react-native"

import useActions from "@/hooks/useActions"
import { OrganizationInfo } from "@/shared/components"
import { Button } from "@/shared/ui"
import { useAppSelector } from "@/store"
import {
  useGetUserAccrualsQuery,
  useGetUserInvestmentsQuery
} from "@/store/services/userOperationsApi"
import { colors } from "@/utils/constants/colors"

import { AccrualAccount } from "./_components/accrualAccount"
import { InvestmentAccount } from "./_components/investmentsAccount"
import { PersonalInformation } from "./_components/personalInformation"
import { YourAccount } from "./_components/yourAccount"
import { style } from "./_style"

export const Account = () => {
  const { logoutUser } = useActions()
  const userData = useAppSelector((state) => state.user_data)

  const { data: userAccrualsData } = useGetUserAccrualsQuery()
  const { data: userInvestmentsData } = useGetUserInvestmentsQuery()

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
