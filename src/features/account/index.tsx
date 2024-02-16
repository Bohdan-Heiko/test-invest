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

export const Account = () => {
  const { logoutUser } = useActions()
  return (
    <ScrollView
      overScrollMode="never"
      nestedScrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <YourAccount />
        <PersonalInformation />
        <RieltorInformation />
        <AccrualAccount title="Нарахування" />
        <AccrualAccount title="Інвестиції" />
        <MyProjects />
        <Button onPress={logoutUser} title="Выход" />
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
