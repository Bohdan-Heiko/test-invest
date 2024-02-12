import { ScrollView, View } from "react-native"

import { OrganizationInfo } from "@/shared/components"

import { AccrualAccount } from "./_components/accrualAccount"
import { MyProjects } from "./_components/myProjects"
import { PersonalInformation } from "./_components/personalInformation"
import { RieltorInformation } from "./_components/rieltorInformation"
import { YourAccount } from "./_components/yourAccount"
import { style } from "./_style"

export const Account = () => {
  return (
    <ScrollView
      overScrollMode="never"
      nestedScrollEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.mainContainer}>
        <YourAccount />
        <PersonalInformation />
        <RieltorInformation />
        <AccrualAccount title="Нарахування" />
        <AccrualAccount title="Інвестиції" />
        <MyProjects />
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
